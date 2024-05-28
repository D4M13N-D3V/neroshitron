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
  const galleryId = params.id.toLowerCase().replace(/\s+/g, '_');
  const supabase = createClient();
  const user = await supabase.auth.getUser();
  const url = new URL(request.url);
  const search = url.searchParams.get("nsfw");
  const nsfw = search === "true";

  const { data: gallery, error: galleryError } = await supabase
    .from('galleries')
    .select('*')
    .eq('name', params.id)
    .single();

  let { data: files, error } = await supabase.storage.from('galleries').list(galleryId);
  if (files == null || files?.length == 0) {

    return NextResponse.error();
  }

  // Loop through each file, download it, convert it to base64, and add the data URL to the array
  let { data: blobdata, error: fileError } = await supabase.storage.from('galleries').download(galleryId + "/" + files[0].name);

  if (fileError || blobdata == null) {
    //console.error('Error downloading file:', error);
    return NextResponse.error();
  }
  let blobBuffer = Buffer.from(await blobdata.arrayBuffer());

  let userId = user.data.user?.id;
  let { data: subscription, error: rolesError } = await supabase
    .from('user_subscriptions')
    .select('*')
    .eq('user_id', userId)
    .single();
  if(nsfw && gallery.nsfw){
    blobBuffer = await blurImage(blobBuffer);
  }
  const contentType = files[0].name.endsWith('.png') ? 'image/png' : 'image/jpeg';
  const dataUrl = `data:${contentType};base64,${blobBuffer.toString('base64')}`;


  // Return a JSON response with the array of URLs
  return new Response(dataUrl);
}