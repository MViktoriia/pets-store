import Search from '../Search/Search';
import { ArrowNextIcon } from '../icons';
import FilterCheckboxList from './FilterCheckboxList';
import FilterTitle from './FilterTitle';

type Brand = {
  id: string;
  name: string;
};

type BrandFilterProps = {
  brands: Brand[];
};

function BrandFilter({ brands }: BrandFilterProps) {
  return (
    <div className="py-6">
      <div className="flex justify-between items-center mb-6">
        <FilterTitle>Бренди</FilterTitle>
        <ArrowNextIcon width={10} height={18} className=" rotate-[-90deg]" />
      </div>
      <div>
        <Search className="mb-6" />
        <FilterCheckboxList items={brands} />
      </div>
    </div>
  );
}

export default BrandFilter;
