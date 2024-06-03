import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import path from 'path';

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const id = params.id;
    const supabase = createClient();
    const { data: gallery, error } = await supabase.from('galleries').select("*").eq('name', id).single();
    return NextResponse.json({ gallery });
}


export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const id = params.id;
    const supabase = createClient();
    const { files, tags, name, nsfw, tier}: { files: File[], tags: string[], name: string, nsfw:boolean, tier:string } = await request.json();
    const { data: gallery, error } = await supabase.from('galleries').update({ name, tags, nsfw, tier }).eq('name', id).single();
    let { data: galleries, error:galleriesError } = await supabase
    .from('galleries')
    .select('*');
    return NextResponse.json({ success: true, galleries });
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const id =params.id;
    const supabase = createClient();
    const { data: gallery, error } = await supabase.from('galleries').delete().eq('name', id).single();
    let { data: galleries, error:galleriesError } = await supabase
    .from('galleries')
    .select('*');
    return NextResponse.json({ success: true, galleries });
}

// const tagsResponse = await fetch(`/api/galleries/tags?search=${search}`);
// const tagsData = await tagsResponse.json();
// const galleriesWithTagData = galleriesData.map((gallery: any) => {
//   const tags = tagsData.filter((tag: any) => gallery.tags.includes(tag.name));
//   return { ...gallery, tags };
// });

   
    // const formData = new FormData();
    // formData.append('name', name);
    // formData.append('tags', JSON.stringify(tags));
    // files.forEach((file: File) => {
    //     formData.append('files', file);
    // });

    // const response = await fetch('/api/galleries', {
    //     method: 'POST',
    //     body: formData,
    // });

    // if (response.ok) {
    //     const data = await response.json();
    //     // Handle success
    // } else {
    //     // Handle error
    // }