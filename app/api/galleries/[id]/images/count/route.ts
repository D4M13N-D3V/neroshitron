import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
  ) {
  const galleryId = params.id;
  const supabase = createClient();

  const { data: gallery, error: galleryError } = await supabase
    .from('galleries')
    .select('*')
    .eq('name', galleryId)
    .single();
  // List all files in the galleryId path
  let { data: files, error } = await supabase.storage.from('galleries').list(params.id.toLowerCase().replace(/\s+/g, '_'));

  if (files==null || error) {
    //console.error('Error listing files:', error);
    return NextResponse.error();
  }


  // Return a JSON response with the array of URLs
  return new Response(JSON.stringify(files.length), { headers: { 'content-type': 'application/json' } });
}