import { getClubConfig } from "@/lib/getClubConfig";

type PropsRoute = {
  params: Promise<{ slug: string }>;
};

export async function GET(request: Request, { params }: PropsRoute) {
  const { slug } = await params;
  const result = await getClubConfig(slug);
  return new Response(result);
}
