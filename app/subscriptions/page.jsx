import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Subscriptions() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center animate-in">
    <h1>This is protected.</h1>
    </div>
  );
}
