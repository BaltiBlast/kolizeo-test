import { getClubConfig } from "@/lib/getClubConfig";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function PageClub({ params }: Props) {
  const { slug } = await params;
  const data = await getClubConfig(slug);
  return <div>{data}</div>;
}
