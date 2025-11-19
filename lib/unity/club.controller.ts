import { authAnonymousTest } from "@/lib/unity/auth";

const PROJECT_ID = process.env.UNITY_PROJECT_ID as string;

// ----------------------------------------------------- //
// FETCH CONFIG BY CLUB NAME
// ----------------------------------------------------- //
export async function fetchRemoteConfigForClub(slug: string) {
  // Init anonyme auth
  const raw = await authAnonymousTest();

  if (!raw) {
    console.log("Auth is missing");
    return;
  }

  // Get auth data
  const auth = JSON.parse(raw);
  const idToken = auth.idToken;

  if (!idToken) {
    console.log("idToken is missing");
    return;
  }

  // Map slug to Unity config key
  const configMap: Record<string, string> = {
    fcmetz: "FcMetz_Config",
    metzhandball: "MetzHandball_Config",
  };

  // Build request URL
  const remoteKey = configMap[slug];
  const url = `https://config.unity3d.com/api/v1/settings?projectId=${PROJECT_ID}&key=${remoteKey}`;

  // Fetch club config
  try {
    const resp = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });

    const data = await resp.json();
    return data;
  } catch (error) {
    console.log("Erreur fetchRemoteConfigForClub:", error);
    return null;
  }
}
