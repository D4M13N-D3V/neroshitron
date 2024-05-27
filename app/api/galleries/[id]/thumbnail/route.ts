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
const galleryId= params.id  // 312
  const supabase = createClient();
  const user = await supabase.auth.getUser();
  const { data: gallery, error: galleryError } = await supabase
    .from('galleries')
    .select('*')
    .eq('id', galleryId)
    .single();
    let userId = user.data.user?.id;
    let { data: subscription, error: rolesError } = await supabase
    .from('user_subscriptions')
    .select('*')
    .eq('user_id', userId)
    .single();

  // Extract galleryId from the route value
  var blob = null;
  var contentType = "image/jpeg"
  let { data: blobdata, error } = await supabase.storage.from('galleries').download(galleryId+'/1.jpeg')
  blob = blobdata;
  if (error) {
    contentType = "image/png"
    let { data: blobdata, error } = await supabase.storage.from('galleries').download(galleryId+'/1.png')
    console.log(error)
    blob = blobdata;
  }
  if(blob != null){
    let blobBuffer = Buffer.from(await blob.arrayBuffer());
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
    const dataUrl = `data:${contentType};base64,${blobBuffer.toString('base64')}`;
    return new Response(dataUrl);
  }
  return NextResponse.error();
}