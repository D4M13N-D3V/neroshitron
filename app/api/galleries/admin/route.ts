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
    const { files, tags, name, nsfw, tier }: { files: File[], tags: string[], name: string, nsfw:boolean, tier:string } = await request.json();
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        supabase.storage.from('galleries').upload(`${name}/${file.name}`, file);
    }
    const { data: gallery, error } = await supabase.from('galleries').insert({ name, tags, nsfw, tier, column_number:3 }).single();
    let { data: galleries, error:galleriesError } = await supabase
    .from('galleries')
    .select('*');
    return NextResponse.json({ success: true, galleries });
}
