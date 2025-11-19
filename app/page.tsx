import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Choisis un club</h1>
      <Link href="/club/fcmetz">FC Metz</Link>
      <br />
      <Link href="/club/metzhandball">Metz Handball</Link>
    </main>
  );
}
