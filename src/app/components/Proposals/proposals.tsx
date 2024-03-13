import ProductsListSlider from './products-list-slider';
import SectionHeading from '../section-heading';
import ProposalsList from './proposals-list';
import { products } from '@/app/lib/utils/constants/products';

function Proposals() {
  const proposals = ['Новинки', 'Популярні товари', 'Акції'];

  return (
    <section className=" pt-6 xl:pt-[60px]">
      <div className="container">
        <SectionHeading className=" mb-6 text-center xl:mb-8">
          Пропозиції
        </SectionHeading>
        <ProposalsList proposals={proposals} />
        <ProductsListSlider products={products} />
      </div>
    </section>
  );
}

export default Proposals;
