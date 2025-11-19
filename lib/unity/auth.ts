const PROJECT_ID = process.env.UNITY_PROJECT_ID as string;
const AUTH_URL = process.env.UNITY_ANONYM_AUTH_URL as string;

// ----------------------------------------------------- //
// UNITY ANONYME AUTH
// ----------------------------------------------------- //
export async function authAnonymousTest() {
  if (!PROJECT_ID) {
    console.log("UNITY PROJECT ID IS MISSING");
    return;
  }

  try {
    const res = await fetch(`${AUTH_URL}?projectId=${PROJECT_ID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ProjectId: PROJECT_ID,
      },
    });

    const raw = await res.text();
    return raw;
  } catch (err) {
    console.log("UNITY AUTH ERROR:", err);
    return null;
  }
}
