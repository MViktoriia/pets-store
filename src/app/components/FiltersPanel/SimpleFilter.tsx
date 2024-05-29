import { ArrowNextIcon } from '../icons';
import FilterTitle from './FilterTitle';
import FilterCheckboxList, { Item } from './FilterCheckboxList';

interface SimpleFilterProps {
  title: string;
  items: Item[];
}

function SimpleFilter({ title, items }: SimpleFilterProps) {
  return (
    <div className="py-6">
      <div className="flex justify-between items-center mb-6">
        <FilterTitle>{title}</FilterTitle>
        <ArrowNextIcon width={10} height={18} className=" rotate-[-90deg]" />
      </div>
      <div>
        <FilterCheckboxList items={items} />
      </div>
    </div>
  );
}

export default SimpleFilter;
