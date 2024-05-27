import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";


export async function POST(request: Request) {
  const supabase = createClient();
  const url = new URL(request.url);
  const search = url.searchParams.get("search");
  const data = await request.json();
  const tags = data.tags as string[];
  if(tags.length === 0){
    let { data: galleries, error } = await supabase
      .from('galleries')
      .select('*')
      .ilike('name', `%${search}%`)
      //console.log(error)
    return NextResponse.json(galleries);
  }
  else{
    // Rest of the code...
    console.log(tags)
  let { data: galleries, error } = await supabase
    .from('galleries')
    .select('*')
    .contains('tags', tags) // Fix: Use contains instead of overlaps
    .ilike('name', `%${search}%`)
    //console.log(error)

  return NextResponse.json(galleries);
  }
}
  
// const tagsResponse = await fetch(`/api/galleries/tags?search=${search}`);
// const tagsData = await tagsResponse.json();
// const galleriesWithTagData = galleriesData.map((gallery: any) => {
//   const tags = tagsData.filter((tag: any) => gallery.tags.includes(tag.name));
//   return { ...gallery, tags };
// });