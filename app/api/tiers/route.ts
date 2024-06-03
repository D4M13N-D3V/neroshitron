import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";


enum customTypeOptions 
{
    Free,
    Tier1,
    Tier2,
    Tier3
}

export async function GET(request: Request) {
    const supabase = createClient();
    
    return NextResponse.json(customTypeOptions);
}

  