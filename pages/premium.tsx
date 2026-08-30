// pages/premium.tsx

export default function Premium({ data }) {
  if (!data) {
    return (
      <div>
        <h1>Premium</h1>
        <p>Nem sikerült betölteni az adatokat.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Premium</h1>
      <p>{data.description}</p>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch("https://sulinet.site.je/krata/api/premium");

    if (!res.ok) {
      return { props: { data: null } };
    }

    const data = await res.json();

    return {
      props: { data },
    };
  } catch (e) {
    console.error("Premium fetch failed:", e);
    return {
      props: { data: null },
    };
  }
}
