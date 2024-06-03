import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import path from 'path';


export async function GET(request: Request) {
  const supabase = createClient();
  let { data: galleries, error } = await supabase
  .from('galleries')
  .select('*');
    return NextResponse.json(galleries);
}


export async function POST(request: Request) {
    const supabase = createClient();
    const formData = await request.formData();
    const files = formData.getAll('files');
    const tags = JSON.parse(formData.getAll('tags').toString()) as string[];
    const name = formData.get('name');
    const nsfw = formData.get('nsfw');
    const tier = formData.get('tier');
    const thumbnail = formData.get('thumbnail');

    for (let i = 0; i < files.length; i++) {
        const file = files[i] as File; // Cast 'file' to 'File' type
        supabase.storage.from('galleries').upload(`${name}/${file.name}`, file);
    }
    const { data: gallery, error } = await supabase.from('galleries').insert({ name, tags, nsfw, thumbnail_file:thumbnail, tier, column_number: 3 }).single();

    let { data: galleries, error: galleriesError } = await supabase 
        .from('galleries')
        .select('*');

    return NextResponse.json({ success: true, galleries });
}

