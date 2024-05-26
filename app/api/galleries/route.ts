import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";


export async function GET(request: Request) {
  const supabase = createClient();
  let { data: galleries, error } = await supabase
  .from('galleries')
  .select('*')
  return NextResponse.json(galleries)
}
  