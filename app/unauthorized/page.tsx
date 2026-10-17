import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <main className="mx-auto mt-16 max-w-md rounded-xl bg-white p-8 text-center shadow">
      <h1 className="text-3xl font-bold">ไม่มีสิทธิ์เข้าถึง</h1>
      <p className="mt-4 text-gray-600">คุณไม่มีสิทธิ์เข้าถึงหน้านี้</p>
      <Link
        href="/"
        className="mt-6 inline-block rounded bg-blue-700 px-5 py-2.5 text-white"
      >
        กลับ Dashboard
      </Link>
    </main>
  );
}
