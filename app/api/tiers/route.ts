import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";


export async function GET(request: Request) {
    const supabase = createClient();
    const { data, error } = await supabase.from('tiers').select('*');
    if (error) {
        console.error('Error fetching tiers:', error);
        return NextResponse.error();
    }
    const tiers = data ?? [];
    return NextResponse.json(tiers);
}

export async function POST(request: Request) {
    const supabase = createClient();
    const { name, price, color, description } = await request.json();
    const { data, error } = await supabase.from('tiers').insert([{ name, price, color, description }]);
    if (error) {
        console.error('Error inserting tier:', error);
        return NextResponse.error();
    }
    return NextResponse.json(data);
}
  
