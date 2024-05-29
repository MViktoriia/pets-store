import PageBredcramb from '@/app/components/Breadcramb/PageBreadcramb';

export interface PageProps {
  params: { category: string[] };
}

function Page({ params }: PageProps) {
  return (
    <main>
      <section className="container">
        <PageBredcramb />
      </section>
      <div>{String(params.category)}</div>
    </main>
  );
}

export default Page;
