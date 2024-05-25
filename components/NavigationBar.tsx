import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import crypto from 'crypto';


export default async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  if(user){
    let email = user.email;
    if(email != null){
      const emailHash = crypto.createHash('md5').update(email.trim().toLowerCase()).digest('hex');
      const gravatarUrl = `https://www.gravatar.com/avatar/${emailHash}`;  
      return(
        <nav className="w-full flex justify-center h-16">
        <div className="w-full max-w-2xl flex justify-between items-center p-3 text-sm">
          <div className="flex items-center gap-2 ">
            <Link
              href="/gallery"
              className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
            >
              Gallery
            </Link>
            <Link
              href="/commissions"
              className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
            >
              Commissions
            </Link>
            <Link
              href="/subscriptions"
              className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
            >
              Subscription
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <form action={signOut}>
              <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
                Logout
              </button>
            </form>
            <img src={gravatarUrl} alt="Profile" className="w-10 h-10 object-cover rounded-full cursor-pointer" />
          </div>
        </div>
      </nav>)
    }
  }
  else{
    return(
      <nav className="w-full flex justify-center h-16">
        <div className="w-full max-w-2xl flex justify-between items-center p-3 text-sm">
          <div className="flex items-center gap-2 ">
            <Link
              href="/gallery"
              className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
            >
              Gallery
            </Link>
            <Link
              href="/commissions"
              className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
            >
              Commissions
            </Link>
            <Link
              href="/subscriptions"
              className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
            >
              Subscription
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
            >
              Login
            </Link>
            <Link
              href="/login"
              className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
            >
              Signup
            </Link>
          </div>
        </div>
      </nav>)
  }
}
