import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import crypto from 'crypto';
import { headers } from "next/headers";


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

  
 
  // ...

  const heads = headers()
  const currentPage = heads.get('x-path')
  if(user){
    let email = user.email;
    if(email != null){
      const emailHash = crypto.createHash('md5').update(email.trim().toLowerCase()).digest('hex');
      const gravatarUrl = `https://www.gravatar.com/avatar/${emailHash}`;  
      return(
        <div className="flex justify-center items-center pt-2 ">
        <nav className="w-auto bg-neroshi-blue-300 bg-opacity-10  flex justify-center z-10 h-16 animate-in rounded-3xl" style={{ backdropFilter: 'blur(10px)' }}>
          <div className="w-full max-w-2xl flex justify-between items-center p-3 text-sm">
              <div className="flex items-center gap-2 z-10">
                <Link
                  href="/gallery"
                  className={`py-2 px-3 flex rounded-3xl no-underline ${currentPage === '/gallery' ? 'bg-neroshi-blue-800 hover:bg-neroshi-blue-700' : 'bg-neroshi-blue-900 hover:bg-neroshi-blue-800'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 lg:hidden  block">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>

                  <span className="hidden lg:block">Gallery</span>
                </Link>
                <Link
                  href="/livestream"
                  className={`py-2 px-3 flex rounded-3xl no-underline ${currentPage === '/gallery' ? 'bg-neroshi-blue-800 hover:bg-neroshi-blue-700' : 'bg-neroshi-blue-900 hover:bg-neroshi-blue-800'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 lg:hidden  block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                  <span className="hidden lg:block">Livestream</span>
                </Link>
                <Link
                  href="/commissions"
                  className={`py-2 px-3 flex rounded-3xl no-underline ${currentPage === '/gallery' ? 'bg-neroshi-blue-800 hover:bg-neroshi-blue-700' : 'bg-neroshi-blue-900 hover:bg-neroshi-blue-800'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 lg:hidden  block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                  <span className="hidden lg:block">Commissions</span>
                </Link>
                <Link
                  href="/subscriptions"
                  className={`py-2 px-3 flex rounded-3xl no-underline ${currentPage === '/gallery' ? 'bg-neroshi-blue-800 hover:bg-neroshi-blue-700' : 'bg-neroshi-blue-900 hover:bg-neroshi-blue-800'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 lg:hidden  block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                  <span className="hidden lg:block">Subscription</span>
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <form action={signOut}>
                  <button className="py-2 px-4 ml-2 rounded-3xl no-underline bg-pink-950 hover:bg-pink-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:hidden  block size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                    </svg>
                    <span className="hidden lg:block">Logout</span>
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
    <nav className="w-auto bg-neroshi-blue-300 bg-opacity-10  flex justify-center h-16 animate-in rounded-3xl" style={{ backdropFilter: 'blur(10px)' }}>
     
      <div className="w-full max-w-2xl flex justify-between items-center p-3 text-sm">
          <div className="flex items-center gap-2 ">
          <Link
                  href="/gallery"
                  className={`py-2 px-3 flex rounded-3xl no-underline ${currentPage === '/gallery' ? 'bg-neroshi-blue-800 hover:bg-neroshi-blue-700' : 'bg-neroshi-blue-900 hover:bg-neroshi-blue-800'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 lg:hidden  block">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>

                  <span className="hidden lg:block">Gallery</span>
                </Link>
                <Link
                  href="/livestream"
                  className={`py-2 px-3 flex rounded-3xl no-underline ${currentPage === '/gallery' ? 'bg-neroshi-blue-800 hover:bg-neroshi-blue-700' : 'bg-neroshi-blue-900 hover:bg-neroshi-blue-800'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 lg:hidden  block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                  <span className="hidden lg:block">Livestream</span>
                </Link>
                <Link
                  href="/commissions"
                  className={`py-2 px-3 flex rounded-3xl no-underline ${currentPage === '/gallery' ? 'bg-neroshi-blue-800 hover:bg-neroshi-blue-700' : 'bg-neroshi-blue-900 hover:bg-neroshi-blue-800'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 lg:hidden  block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                  <span className="hidden lg:block">Commissions</span>
                </Link>
                <Link
                  href="/subscriptions"
                  className={`py-2 px-3 flex rounded-3xl no-underline ${currentPage === '/gallery' ? 'bg-neroshi-blue-800 hover:bg-neroshi-blue-700' : 'bg-neroshi-blue-900 hover:bg-neroshi-blue-800'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 lg:hidden  block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                  <span className="hidden lg:block">Subscription</span>
                </Link>
            <Link
              href="/login"
              className={`"py-2 px-3 flex rounded-3xl no-underline ${currentPage === '/gallery' ? 'bg-neroshi-blue-800 hover:bg-neroshi-blue-700' : 'bg-neroshi-blue-900 hover:bg-neroshi-blue-800'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 md:hidden ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>

              <span className="hidden lg:block">Login</span>
            </Link>
          </div>
        </div>
      </nav>
        </div>)
  }
}
