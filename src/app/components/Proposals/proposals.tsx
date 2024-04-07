'use client';

import ProductsListSlider from './products-list-slider';
import SectionHeading from '../section-heading';
import ProposalsList from './proposals-list';
import { products } from '@/app/lib/utils/constants/products';
import { SyntheticEvent, useState } from 'react';
import ProposalsItem from './proposals-item';

function Proposals() {
  const proposals = ['Новинки', 'Популярні товари', 'Акції'];

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
          products.filter((product) => product.priceDiscount != ''),
        );
        break;
      case 'Популярні товари':
        setProductForRender(
          products.sort((a, b) => Number(b.rating) - Number(a.rating)),
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
        <ul className="flex justify-start items-center mb-6">
          {proposals.map((proposal, index) => (
            <li
              key={proposal}
              className=" text-base mr-[35px] last:mr-0 text-center hover:text-orange active:text-yellow lg:mr-8 lg:text-[24px] "
            >
              <ProposalsItem
                onClick={handleProposalItemClick}
                current={current === proposal}
              >
                {proposal}
              </ProposalsItem>
            </li>
          ))}
        </ul>
        <ProductsListSlider products={productsForRender} />
      </div>
    </section>
  );
}

export default Proposals;
