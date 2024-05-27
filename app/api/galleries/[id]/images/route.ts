import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import sharp from 'sharp';


async function blurImage(blob: Buffer): Promise<Buffer> {
  // Convert the blob to a sharp object
  const image = sharp(blob);

  // Blur the image
  const blurredImage = await image.blur(75).toBuffer();

  return blurredImage;
}

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
  ) {
  const galleryId = params.id;
  const supabase = createClient();
  const user = await supabase.auth.getUser();

  
  const { data: gallery, error: galleryError } = await supabase
    .from('galleries')
    .select('*')
    .eq('id', galleryId)
    .single();
    
    // List all files in the galleryId path
  let { data: files, error } = await supabase.storage.from('galleries').list(galleryId);

  if (files==null || error) {
    console.error('Error listing files:', error);
    return NextResponse.error();
  }

  const urls = [];

  // Loop through each file, download it, convert it to base64, and add the data URL to the array
  for (const file of files) {
    let { data: blobdata, error } = await supabase.storage.from('galleries').download(galleryId+"/"+file.name);

    if (error || blobdata==null) {
      console.error('Error downloading file:', error);
      continue;
    }
    let blobBuffer = Buffer.from(await blobdata.arrayBuffer());

    let userId = user.data.user?.id;
    let { data: subscription, error: rolesError } = await supabase
    .from('user_subscriptions')
    .select('*')
    .eq('user_id', userId)
    .single();
    switch(gallery.tier){
      case "Tier 3":
        if(subscription?.subscription!="Tier 3"){
          blobBuffer = await blurImage(blobBuffer);
        }
        break;
      case "Tier 2":
        if(subscription?.subscription!="Tier 3" && subscription?.subscription!="Tier 2"){
          blobBuffer = await blurImage(blobBuffer);
        }
        break;
      case "Tier 1": 
        if(subscription?.subscription!="Tier 3" && subscription?.subscription!="Tier 2" && subscription?.subscription!="Tier 1"){
          blobBuffer = await blurImage(blobBuffer);
        }
        break;
      default:
        break;
    }
    const contentType = file.name.endsWith('.png') ? 'image/png' : 'image/jpeg';
    const dataUrl = `data:${contentType};base64,${blobBuffer.toString('base64')}`;

    urls.push(dataUrl);
  }

  // Return a JSON response with the array of URLs
  return new Response(JSON.stringify(urls), { headers: { 'content-type': 'application/json' } });
}