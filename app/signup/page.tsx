"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { signUp, type SignUpState } from "./actions";

const initialState: SignUpState = {};

export default function SignUpPage() {
  const router = useRouter();
  const [state, formAction, pending] = useActionState(signUp, initialState);

  useEffect(() => {
    if (state.success) {
      router.push("/login?registered=1");
    }
  }, [state.success, router]);

  return (
    <main className="mx-auto mt-16 w-full max-w-md rounded-xl bg-white p-8 shadow">
      <h1 className="text-center text-3xl font-bold">Sign Up</h1>
      <p className="mb-6 mt-2 text-center text-gray-500">สร้างบัญชีผู้ใช้งาน</p>

      <form action={formAction} className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium">
            ชื่อ
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="password" className="mb-1 block text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            minLength={6}
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
          />
        </div>
        <div>
          <label
            htmlFor="confirmPassword"
            className="mb-1 block text-sm font-medium"
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            minLength={6}
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
          />
        </div>
        {state.error && (
          <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700">
            {state.error}
          </p>
        )}
        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-lg bg-blue-700 px-4 py-2.5 font-medium text-white disabled:opacity-60"
        >
          {pending ? "กำลังสร้างบัญชี..." : "สร้างบัญชี"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-600">
        มีบัญชีอยู่แล้ว?
        <Link href="/login" className="ml-1 text-blue-700 underline">
          Login
        </Link>
      </p>
    </main>
  );
}
