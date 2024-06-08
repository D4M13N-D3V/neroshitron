import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET(
  request: Request,
  { params }: { params: { name: string } }
) {
  const supabase = createClient();

  const { data: tier, error: galleryError } = await supabase
    .from('tiers')
    .select('*')
    .eq('name', params.name)
    .single();

  if(galleryError) {
    return NextResponse.error();
  }
  
  return NextResponse.json(tier);
}
export async function PUT(
  request: Request,
  { params }: { params: { name: string } }
) {
    const supabase = createClient();
    const { newName, price, color, description } = await request.json();
    console.log(newName)
    const { error } = await supabase.from('tiers')
    .update({ name:newName, price, color, description }).eq('name', params.name);
    if (error) {
        console.error('Error updating tier:', error);
        return NextResponse.error();
    }
    return NextResponse.json({});
}