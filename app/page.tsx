import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold">Mini‑DECO</h1>
      <p className="mt-2 text-gray-600">Vercel + Next.js + Supabase + Ready Player Me</p>
      <a href="/avatar" className="mt-6 underline">Create / update my avatar →</a>
    </main>
  );
}

