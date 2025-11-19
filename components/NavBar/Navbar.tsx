import Logo from "@/public/kolizeo.png";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">
            <Image src={Logo} alt="Kolizeo logo" />
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/club/fcmetz">FC Metz</Link>
        </li>
        <li>
          <Link href="/club/metzhandball">Metz Handball</Link>
        </li>
      </ul>
    </nav>
  );
}
