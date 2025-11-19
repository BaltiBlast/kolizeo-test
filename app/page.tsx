import Link from "next/link";

export default function Home() {
  return (
    <section className="landing">
      <h2>Choisi le club de ton choix : </h2>
      <ul>
        <li>
          <Link href="/club/fcmetz">FC Metz</Link>
        </li>
        <li>
          <Link href="/club/metzhandball">Metz Handball</Link>
        </li>
      </ul>
    </section>
  );
}
