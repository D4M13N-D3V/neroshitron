import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";


export async function GET(request: Request) {
  const supabase = createClient();
  let { data: tags, error } = await supabase
    .from('tags')
    .select('*')
    .order('name', { ascending: true });
  return NextResponse.json(tags)
}

export async function POST(request: Request) {
  const supabase = createClient();
  const data = await request.json();
  const { data: tag, error } = await supabase.from('tags').insert({ name: data.tag }).single();
  console.log(error)
  if (error) {
    return NextResponse.error();
  }
  return NextResponse.json(tag);
}

export async function PUT(request: Request) {
  const supabase = createClient();
  const data = await request.json();
  const { data: tag, error } = await supabase.from('tags').delete().eq('name', data.tag).single();
  if (error) {
    return NextResponse.error();
  }
  return NextResponse.json(tag);
}