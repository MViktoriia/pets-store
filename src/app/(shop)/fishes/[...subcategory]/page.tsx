export interface PageProps {
  params: { subcategory: string[] };
}

function Page({ params }: PageProps) {
  return (
    <>
      <div>{String(params.subcategory)}</div>
    </>
  );
}

export default Page;
