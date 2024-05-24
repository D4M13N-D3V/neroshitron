import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Gallery() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <h1>This is unprotected.</h1>
  );
}
