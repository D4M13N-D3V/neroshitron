import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";


export async function GET(request: Request) {
  const supabase = createClient();
  let { data: tags, error } = await supabase
  .from('tags')
  .select('*')
  return NextResponse.json(tags)
}
  