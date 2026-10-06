import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center font-mono">
      <p className="text-6xl font-bold text-niner-bright">404</p>
      <p className="text-slate-400">target not found in scope.</p>
      <Link href="/" className="btn-ghost mt-4">cd ~</Link>
    </main>
  );
}
