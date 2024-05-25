import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/protected");
  };

  const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/login?message=Check email to continue sign in process");
  };

  return (

    <div className="flex-1 w-full flex flex-col gap-20 items-center animate-in"> <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">

    <form className="animate-in flex-1 flex flex-col w-full my-32 gap-2 text-foreground">

    <Link
        href="/"
        className="absolute left-1 top-44 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Link>
      <input
        className="rounded-md px-4 py-2 bg-inherit border mb-2 mx-1"
        name="email"
        placeholder="Email Address"
        required
      />
      <input
        className="rounded-md px-4 py-2 bg-inherit border mb-2 mx-1"
        type="password"
        name="password"
        placeholder="Password "
        required
      />
      <div className="flex">
        <SubmitButton
          formAction={signIn}
          className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2 mx-1 w-1/2"
          pendingText="Signing In..."
        >
          Sign In
        </SubmitButton>
        <SubmitButton
          formAction={signUp}
          className="border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2 mx-1 w-1/2"
          pendingText="Signing Up..."
        >
          Sign Up
        </SubmitButton>
      </div>
      {searchParams?.message && (
        <p className="mt-4 bg-foreground/10 mt-12 p-2 text-foreground text-center">
          {searchParams.message}
        </p>
      )}
    </form>
  </div>
    </div>
   
  );
}