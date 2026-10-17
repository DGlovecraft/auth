import { signIn } from "@/auth";

export default function GitHubSignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/" });
      }}
    >
      <button
        type="submit"
        className="w-full rounded border border-gray-400 bg-white px-4 py-2.5 font-medium hover:bg-gray-100"
      >
        Sign in with GitHub
      </button>
    </form>
  );
}
