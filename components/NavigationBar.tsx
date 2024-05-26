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
        <div className="flex justify-center items-center pt-2 ">
        <nav className="w-1/3 bg-neroshi-blue-300 bg-opacity-10  flex justify-center h-16 animate-in rounded-3xl" style={{ backdropFilter: 'blur(10px)' }}>
          <div className="w-full max-w-2xl flex justify-between items-center p-3 text-sm">
              <div className="flex items-center gap-2 ">
                <Link
                  href="/gallery"
                  className="py-2 px-3 flex rounded-3xl no-underline bg-neroshi-blue-900 hover:bg-neroshi-blue-800"
                >
                  Gallery
                </Link>
                <Link
                  href="/livestream"
                  className="py-2 px-3 flex rounded-3xl no-underline bg-neroshi-blue-900 hover:bg-neroshi-blue-800"
                >
                  Stream
                </Link>
                <Link
                  href="/commissions"
                  className="py-2 px-3 flex rounded-3xl no-underline bg-neroshi-blue-900 hover:bg-neroshi-blue-800"
                >
                  Commissions
                </Link>
                <Link
                  href="/subscriptions"
                  className="py-2 px-3 flex rounded-3xl no-underline bg-neroshi-blue-900 hover:bg-neroshi-blue-800"
                >
                  Subscription
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <form action={signOut}>
                  <button className="py-2 px-4 rounded-3xl no-underline bg-neroshi-blue-900 hover:bg-neroshi-blue-800">
                    Logout
                  </button>
                </form>
                <img src={gravatarUrl} alt="Profile" className="w-10 h-10 object-cover rounded-full cursor-pointer" />
              </div>
            </div>
          </nav>
        </div>)
    }
  }
  else{
    return( <div className="flex justify-center items-center pt-2 ">
    <nav className="w-1/3 bg-neroshi-blue-300 bg-opacity-10  flex justify-center h-16 animate-in rounded-3xl" style={{ backdropFilter: 'blur(10px)' }}>
     
      <div className="w-full max-w-2xl flex justify-between items-center p-3 text-sm">
          <div className="flex items-center gap-2 ">
                <Link
                  href="/gallery"
                  className="py-2 px-3 flex rounded-3xl no-underline bg-neroshi-blue-900 hover:bg-neroshi-blue-800"
                >
                  Gallery
                </Link>
                <Link
                  href="/livestream"
                  className="py-2 px-3 flex rounded-3xl no-underline bg-neroshi-blue-900 hover:bg-neroshi-blue-800"
                >
                  Stream
                </Link>
                <Link
                  href="/commissions"
                  className="py-2 px-3 flex rounded-3xl no-underline bg-neroshi-blue-900 hover:bg-neroshi-blue-800"
                >
                  Commissions
                </Link>
                <Link
                  href="/subscriptions"
                  className="py-2 px-3 flex rounded-3xl no-underline bg-neroshi-blue-900 hover:bg-neroshi-blue-800"
                >
                  Subscription
                </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="py-2 px-3 flex rounded-3xl no-underline bg-neroshi-blue-900 hover:bg-neroshi-blue-800"
            >
              Login
            </Link>
            <Link
              href="/login"
              className="py-2 px-3 flex rounded-3xl no-underline bg-neroshi-blue-900 hover:bg-neroshi-blue-800"
            >
              Signup
            </Link>
          </div>
        </div>
      </nav>
        </div>)
  }
}
