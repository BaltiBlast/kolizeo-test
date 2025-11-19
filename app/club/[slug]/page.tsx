import { notFound } from "next/navigation";
import "./club.css";

type Props = {
  params: Promise<{ slug: string }>;
};

type ConfigResponse = {
  [key: string]: {
    BGColor: string;
    Buttons: any[];
  };
};

const PUBLIC_URL = process.env.NEXT_PUBLIC_BASE_URL as string;

// ----------------------------------------------------- //
// API CALL TO GET CLUB CONFIG
// ----------------------------------------------------- //
async function getConfig(slug: string): Promise<ConfigResponse> {
  const res = await fetch(`${PUBLIC_URL}/api/club/${slug}`, {
    cache: "no-store",
  });

  return res.json();
}

// ----------------------------------------------------- //
// PAGE CLUB
// ----------------------------------------------------- //
export default async function PageClub({ params }: Props) {
  // Get config by slug
  const { slug } = await params;
  const config = await getConfig(slug);

  if (!config || Object.keys(config).length === 0) {
    return notFound();
  }

  const key = Object.keys(config)[0];
  const clubConfig = config[key];

  // Get only active buttons
  const buttons = clubConfig.Buttons.filter((b: any) => b.active);

  return (
    <section className="club">
      <h2>
        Tu es sur la page du club <span style={{ color: clubConfig.BGColor }}>{slug}</span>
      </h2>

      <ul className="btn-container">
        {buttons.map((btn: any) => (
          <li>
            <a
              key={btn}
              href={btn.url}
              target="_blank"
              style={{
                backgroundColor: btn.BGColor,
              }}
            >
              {btn.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
