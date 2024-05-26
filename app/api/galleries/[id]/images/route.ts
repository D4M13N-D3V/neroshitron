import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
  ) {
  const galleryId = params.id;
  const supabase = createClient();

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

    const base64 = Buffer.from(await blobdata.arrayBuffer()).toString('base64');
    const contentType = file.name.endsWith('.png') ? 'image/png' : 'image/jpeg';
    const dataUrl = `data:${contentType};base64,${base64}`;

    urls.push(dataUrl);
  }

  // Return a JSON response with the array of URLs
  return new Response(JSON.stringify(urls), { headers: { 'content-type': 'application/json' } });
}