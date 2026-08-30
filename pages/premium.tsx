// pages/premium.tsx

import { GetServerSideProps } from "next";

interface PremiumData {
  description?: string;
  [key: string]: any;
}

interface PremiumProps {
  data: PremiumData;
}

export default function Premium({ data }: PremiumProps) {
  return (
    <div>
      <h1>Premium</h1>
      <p>{data.description}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  
  const mockData: PremiumData = {
    description: "A Premium funkciók hamarosan elérhetők lesznek.",
  };

  return {
    props: {
      data: mockData,
    },
  };
};
