import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import SignOutButton from "@/app/ui/sign-out-button";

export default async function HomePage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <main className="mx-auto mt-16 max-w-2xl rounded-xl bg-white p-8 shadow">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-4">
        เข้าสู่ระบบแล้ว: {session.user.name || session.user.email}
      </p>
      <p className="mt-2 text-gray-600">Role: {session.user.role}</p>
      <div className="mt-6 flex items-center gap-4">
        <Link href="/admin" className="text-blue-700 underline">
          Admin Dashboard
        </Link>
        <SignOutButton />
      </div>
    </main>
  );
}
