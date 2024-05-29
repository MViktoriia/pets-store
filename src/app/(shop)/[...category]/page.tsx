'use client';
import PageBredcramb from '@/app/components/Breadcramb/PageBreadcramb';
import FilterInfoPanel from '@/app/components/FilterInfoPanel/FilterInfoPanel';
import FiltersPanel from '@/app/components/FiltersPanel/FiltersPanel';
import ProductsList from '@/app/components/ProductsList/ProductsList';
import Sort from '@/app/components/Sort/Sort';
import { productsLib } from '@/lib/utils/constants/products';

export interface PageProps {
  params: { category: string[] };
}

function Page({ params }: PageProps) {
  return (
    <main>
      <section className="container flex justify-between mb-[60px]">
        <PageBredcramb />
        <Sort
          onPriceSortClick={() => console.log('PriceSort')}
          onRatingSortClick={() => console.log('RatingSort')}
        />
      </section>
      <section className="container">
        <FilterInfoPanel />
      </section>
      <div className="flex gap-6 container">
        <aside className=" w-[316px] pt-6 pr-3">
          <FiltersPanel />
        </aside>
        <section>
          <ProductsList products={productsLib} />
        </section>
      </div>
    </main>
  );
}

export default Page;
