import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
  ) {
const galleryId= params.id  // 312
  const supabase = createClient();
  
  // Extract galleryId from the route value
  var blob = null;
  var contentType = "image/jpeg"
  let { data: blobdata, error } = await supabase.storage.from('galleries').download(galleryId+'/1.jpeg')
  blob = blobdata;
  console.log(error)
  if (error) {
    contentType = "image/png"
    let { data: blobdata, error } = await supabase.storage.from('galleries').download(galleryId+'/1.png')
    console.log(error)
    blob = blobdata;
  }
  if(blob != null){
    const base64 = Buffer.from(await blob.arrayBuffer()).toString('base64');
    const dataUrl = `data:${contentType};base64,${base64}`;
    return new Response(dataUrl);
  }
  return NextResponse.error();
}