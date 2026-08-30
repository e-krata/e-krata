// pages/downloads.tsx

import { getReleases } from "../lib/github";

export default function Downloads({ releases }) {
  const latest = releases.slice(0, 5);

  return (
    <div>
      <h1>Letöltések</h1>

      {latest.length === 0 && (
        <p>Nincs elérhető kiadás vagy hiba történt a GitHub API-val.</p>
      )}

      <ul>
        {latest.map((release) => (
          <li key={release.id}>
            <a href={release.assets?.[0]?.browser_download_url}>
              {release.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const releases = await getReleases();

  return {
    props: {
      releases,
    },
    revalidate: 60,
  };
}
