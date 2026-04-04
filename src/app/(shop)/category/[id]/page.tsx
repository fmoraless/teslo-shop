/* eslint-disable import/no-anonymous-default-export */
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

// eslint-disable-next-line react/display-name
export default async function CategoryPage({ params }: Props) {
  const { id } = await params;

  if (id === "kids") {
    notFound();
  }

  return (
    <div>
      <h1>Category Page: {id}</h1>
    </div>
  );
}
