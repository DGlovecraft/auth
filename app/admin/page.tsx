import { redirect } from "next/navigation";
import { auth } from "@/auth";
import SignOutButton from "@/app/ui/sign-out-button";

export default async function AdminPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  if (session.user.role !== "ADMIN") {
    redirect("/unauthorized");
  }

  return (
    <main className="mx-auto mt-16 max-w-2xl rounded-xl bg-white p-8 shadow">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <p className="mt-2">เฉพาะ ADMIN เท่านั้น</p>
      <div className="mt-6">
        <SignOutButton />
      </div>
    </main>
  );
}
