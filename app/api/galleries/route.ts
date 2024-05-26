import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";


export async function POST(request: Request) {
  const supabase = createClient();
  const url = new URL(request.url);
  const search = url.searchParams.get("search");
  const data = await request.json();
  const tags = data.tags;
  if(tags.length === 0){
    let { data: galleries, error } = await supabase
      .from('galleries')
      .select('*')
      .ilike('name', `%${search}%`)
      .ilike('description', `%${search}%`);
  
    return NextResponse.json(galleries);
  }
  else{
    // Rest of the code...
  let { data: galleries, error } = await supabase
    .from('galleries')
    .select('*')
    .contains('tags', tags)
    .ilike('name', `%${search}%`)
    .ilike('description', `%${search}%`)
    .order('created_at', { ascending: false });

  return NextResponse.json(galleries);
    return NextResponse.json(galleries);
  }
}
  
// const tagsResponse = await fetch(`/api/galleries/tags?search=${search}`);
// const tagsData = await tagsResponse.json();
// const galleriesWithTagData = galleriesData.map((gallery: any) => {
//   const tags = tagsData.filter((tag: any) => gallery.tags.includes(tag.id));
//   return { ...gallery, tags };
// });