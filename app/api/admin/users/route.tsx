import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const supabase = createClient();
        
        const { data, error } = await supabase.auth.admin.listUsers();
        console.log(error)
        if (error) {
            throw error;
        }
        
    return NextResponse.json(data);
    } catch (error) {
        return NextResponse.error();
    }
}