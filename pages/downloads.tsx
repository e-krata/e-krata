// pages/downloads.tsx

import { GetStaticProps } from "next";
import { getReleases } from "../lib/github";

interface Release {
  id: number;
  name: string;
  assets?: {
    browser_download_url: string;
  }[];
}

interface DownloadsProps {
  releases: Release[];
}

export default function Downloads({ releases }: DownloadsProps) {
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
            <a href={release.assets?.[0]?.browser_download_url || "#"}>
              {release.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const releases = await getReleases();

  return {
    props: {
      releases,
    },
    revalidate: 60,
  };
};
