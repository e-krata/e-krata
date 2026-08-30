// lib/github.ts

export async function getReleases() {
  try {
    const res = await fetch(
      "https://api.github.com/repos/e-krata/naplo/releases",
      {
        headers: {
          "User-Agent": "e-krata-app",
          "Accept": "application/vnd.github+json",
        },
      }
    );

    if (!res.ok) {
      console.error("GitHub API error:", await res.text());
      return [];
    }

    const data = await res.json();

    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error("GitHub fetch failed:", err);
    return [];
  }
}
