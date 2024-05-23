'use client';

import ProductsListSlider from './products-list-slider';
import SectionHeading from '../section-heading';
import { SyntheticEvent, useState } from 'react';
import { Product } from '@/lib/types';
import ProposalsList from './proposals-list';

interface ProposalsProps {
  products: Product[];
}

function Proposals({ products }: ProposalsProps) {
  const proposals = ['Новинки', 'Популярні товари', 'Акції'];
  const productsList = [...products];
  const [current, setCurrent] = useState('Новинки');
  const [productsForRender, setProductForRender] = useState(
    products.filter((_, index) => index < 10),
  );

  const handleProposalItemClick = (e: SyntheticEvent) => {
    setCurrent(e.currentTarget.innerHTML);
    switch (e.currentTarget.innerHTML) {
      case 'Новинки':
        setProductForRender(products.filter((_, index) => index < 10));
        break;
      case 'Акції':
        setProductForRender(
          products.filter((product) => product?.priceDiscount != ''),
        );
        break;
      case 'Популярні товари':
        setProductForRender(
          productsList.sort((a, b) => Number(b.rating) - Number(a.rating)),
        );
        break;

      default:
        break;
    }
  };

  return (
    <section className=" pt-6 xl:pt-[60px]">
      <div className="container">
        <SectionHeading className=" mb-6 text-center xl:mb-8">
          Пропозиції
        </SectionHeading>
        <ProposalsList
          proposals={proposals}
          onClick={handleProposalItemClick}
          current={current}
        />
        <ProductsListSlider products={productsForRender} />
      </div>
    </section>
  );
}

export default Proposals;
