import ProductsList from './products-list';
import ProposalsList from './proposals-list';

function Proposals() {
  const proposals = ['Хіти продажу', 'Новинки', 'Акції'];
  const products = [
    {
      id: '1',
      slug: '1',
      name: 'Корм для собак',
      productCode: '1111',
      price: '800',
      priceDiscount: '10',
      categories: '',
      disciuntPercentage: '10',
      typesProduct: '',
      image: '',
      rating: '5',
      manufacturer: {
        id: '1',
        trade_brand: 'Brand',
        country: 'country',
        country_brand_registration: 'Country brand registration',
      },
      description:
        'Red Point Donut Хутряний лежак із подушкою для котів і собак, рожевий',
      images: { id: '1', image: '', product: '' },
    },
    {
      id: '2',
      slug: '1',
      name: 'Корм для собак',
      productCode: '1111',
      price: '800',
      priceDiscount: '10',
      categories: '',
      disciuntPercentage: '10',
      typesProduct: '',
      image: '',
      rating: '5',
      manufacturer: {
        id: '1',
        trade_brand: 'Brand',
        country: 'country',
        country_brand_registration: 'Country brand registration',
      },
      description:
        'Red Point Donut Хутряний лежак із подушкою для котів і собак, рожевий',
      images: { id: '1', image: '', product: '' },
    },
    {
      id: '3',
      slug: '1',
      name: 'Корм для собак',
      productCode: '1111',
      price: '800',
      priceDiscount: '10',
      categories: '',
      disciuntPercentage: '10',
      typesProduct: '',
      image: '',
      rating: '5',
      manufacturer: {
        id: '1',
        trade_brand: 'Brand',
        country: 'country',
        country_brand_registration: 'Country brand registration',
      },
      description:
        'Red Point Donut Хутряний лежак із подушкою для котів і собак, рожевий',
      images: { id: '1', image: '', product: '' },
    },
    {
      id: '4',
      slug: '1',
      name: 'Корм для собак',
      productCode: '1111',
      price: '800',
      priceDiscount: '10',
      categories: '',
      disciuntPercentage: '10',
      typesProduct: '',
      image: '',
      rating: '5',
      manufacturer: {
        id: '1',
        trade_brand: 'Brand',
        country: 'country',
        country_brand_registration: 'Country brand registration',
      },
      description:
        'Red Point Donut Хутряний лежак із подушкою для котів і собак, рожевий',
      images: { id: '1', image: '', product: '' },
    },
    {
      id: '5',
      slug: '1',
      name: 'Корм для собак',
      productCode: '1111',
      price: '800',
      priceDiscount: '10',
      categories: '',
      disciuntPercentage: '10',
      typesProduct: '',
      image: '',
      rating: '5',
      manufacturer: {
        id: '1',
        trade_brand: 'Brand',
        country: 'country',
        country_brand_registration: 'Country brand registration',
      },
      description:
        'Red Point Donut Хутряний лежак із подушкою для котів і собак, рожевий',
      images: { id: '1', image: '', product: '' },
    },
    {
      id: '6',
      slug: '1',
      name: 'Корм для собак',
      productCode: '1111',
      price: '800',
      priceDiscount: '10',
      categories: '',
      disciuntPercentage: '10',
      typesProduct: '',
      image: '',
      rating: '5',
      manufacturer: {
        id: '1',
        trade_brand: 'Brand',
        country: 'country',
        country_brand_registration: 'Country brand registration',
      },
      description:
        'Red Point Donut Хутряний лежак із подушкою для котів і собак, рожевий',
      images: { id: '1', image: '', product: '' },
    },
    {
      id: '7',
      slug: '1',
      name: 'Корм для собак',
      productCode: '1111',
      price: '800',
      priceDiscount: '10',
      categories: '',
      disciuntPercentage: '10',
      typesProduct: '',
      image: '',
      rating: '5',
      manufacturer: {
        id: '1',
        trade_brand: 'Brand',
        country: 'country',
        country_brand_registration: 'Country brand registration',
      },
      description:
        'Red Point Donut Хутряний лежак із подушкою для котів і собак, рожевий',
      images: { id: '1', image: '', product: '' },
    },
    {
      id: '8',
      slug: '1',
      name: 'Корм для собак',
      productCode: '1111',
      price: '800',
      priceDiscount: '10',
      categories: '',
      disciuntPercentage: '10',
      typesProduct: '',
      image: '',
      rating: '5',
      manufacturer: {
        id: '1',
        trade_brand: 'Brand',
        country: 'country',
        country_brand_registration: 'Country brand registration',
      },
      description:
        'Red Point Donut Хутряний лежак із подушкою для котів і собак, рожевий',
      images: { id: '1', image: '', product: '' },
    },
    {
      id: '9',
      slug: '1',
      name: 'Корм для собак',
      productCode: '1111',
      price: '800',
      priceDiscount: '10',
      categories: '',
      disciuntPercentage: '10',
      typesProduct: '',
      image: '',
      rating: '5',
      manufacturer: {
        id: '1',
        trade_brand: 'Brand',
        country: 'country',
        country_brand_registration: 'Country brand registration',
      },
      description:
        'Red Point Donut Хутряний лежак із подушкою для котів і собак, рожевий',
      images: { id: '1', image: '', product: '' },
    },
    {
      id: '10',
      slug: '1',
      name: 'Корм для собак',
      productCode: '1111',
      price: '800',
      priceDiscount: '10',
      categories: '',
      disciuntPercentage: '10',
      typesProduct: '',
      image: '',
      rating: '5',
      manufacturer: {
        id: '1',
        trade_brand: 'Brand',
        country: 'country',
        country_brand_registration: 'Country brand registration',
      },
      description:
        'Red Point Donut Хутряний лежак із подушкою для котів і собак, рожевий',
      images: { id: '1', image: '', product: '' },
    },
    {
      id: '11',
      slug: '1',
      name: 'Корм для собак',
      productCode: '1111',
      price: '800',
      priceDiscount: '10',
      categories: '',
      disciuntPercentage: '10',
      typesProduct: '',
      image: '',
      rating: '5',
      manufacturer: {
        id: '1',
        trade_brand: 'Brand',
        country: 'country',
        country_brand_registration: 'Country brand registration',
      },
      description:
        'Red Point Donut Хутряний лежак із подушкою для котів і собак, рожевий',
      images: { id: '1', image: '', product: '' },
    },
    {
      id: '12',
      slug: '1',
      name: 'Корм для собак',
      productCode: '1111',
      price: '800',
      priceDiscount: '10',
      categories: '',
      disciuntPercentage: '10',
      typesProduct: '',
      image: '',
      rating: '5',
      manufacturer: {
        id: '1',
        trade_brand: 'Brand',
        country: 'country',
        country_brand_registration: 'Country brand registration',
      },
      description:
        'Red Point Donut Хутряний лежак із подушкою для котів і собак, рожевий',
      images: { id: '1', image: '', product: '' },
    },
  ];
  return (
    <section className=" h-[236px] pt-6">
      <div className="container">
        <h2 className=" font-serif text-[24px] text-center font-normal mb-6 lg:text-[36px]">
          Пропозиції
        </h2>
        <ProposalsList proposals={proposals} />
        <ProductsList products={products} />
      </div>
    </section>
  );
}

export default Proposals;
