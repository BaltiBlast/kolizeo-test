import { NextRequest } from "next/server";
import { fetchRemoteConfigForClub } from "@/lib/unity/club.controller";

type Props = {
  params: Promise<{ slug: string }>;
};

// ----------------------------------------------------- //
// ROUTE GET CONFIG BY NAME AND RETURN TO FRONT
// ----------------------------------------------------- //
export async function GET(req: NextRequest, { params }: Props) {
  try {
    const { slug } = await params;

    const remote = await fetchRemoteConfigForClub(slug);
    if (!remote) {
      return Response.json({ error: "Remote config not found" }, { status: 404 });
    }

    const settings = remote?.configs?.settings;
    return Response.json(settings);
  } catch (error) {
    console.log("Route GET /club/[slug] error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
