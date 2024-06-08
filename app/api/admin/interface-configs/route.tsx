import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";


export async function PUT(request: Request) {
    const body = await request.json();
    console.log(body)
    const supabase = createClient();
    var value = body.value;
    const { error } = await supabase.from('interface_configurations').update({ value }).eq('name', body.name);
    console.log(error)
    if (error) {
        return NextResponse.error();
    }
    return NextResponse.json({});
}

export async function GET(request: Request) {

    const url = new URL(request.url as string, 'http://localhost');
    const name = url.searchParams.get('name') || '';
    const supabase = createClient();
    const { data, error } = await supabase.from('interface_configurations').select('*').eq('name', name).single();
    return NextResponse.json(data);
}