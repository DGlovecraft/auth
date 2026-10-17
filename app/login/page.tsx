import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import GitHubSignInButton from "@/app/ui/github-sign-in-button";
import LoginForm from "./login-form";

export default async function LoginPage() {
  const session = await auth();

  if (session?.user) {
    redirect("/");
  }

  return (
    <main className="mx-auto mt-16 w-full max-w-md rounded-xl bg-white p-8 shadow">
      <h1 className="mb-6 text-2xl font-bold">Login</h1>
      <LoginForm />
      <p className="my-4 text-center text-gray-500">-- OR --</p>
      <GitHubSignInButton />
      <p className="mt-6 text-center text-sm text-gray-600">
        ยังไม่มีบัญชี?
        <Link href="/signup" className="ml-1 text-blue-700 underline">
          สร้างบัญชี
        </Link>
      </p>
    </main>
  );
}
