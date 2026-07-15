import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <h1 className="text-8xl font-black text-violet-600">404</h1>

      <h2 className="mt-6 text-3xl font-bold text-black/60">
        Sahifa topilmadi
      </h2>

      <p className="mt-3 max-w-md text-gray-500">
        Siz izlagan sahifa mavjud emas yoki boshqa manzilga ko‘chirilgan.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-700"
      >
        Bosh sahifaga qaytish
      </Link>
    </main>
  );
}
