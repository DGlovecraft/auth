import { signOut } from "@/auth";

export default function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/login" });
      }}
    >
      <button
        type="submit"
        className="rounded bg-gray-800 px-4 py-2 text-white hover:bg-gray-700"
      >
        Sign out
      </button>
    </form>
  );
}
