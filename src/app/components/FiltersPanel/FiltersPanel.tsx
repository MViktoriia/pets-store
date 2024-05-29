import BrandFilter from './BrandFilter';
import PriceFilter from './PriceFilter';
import { brands } from '@/lib/utils/constants/brands';
import SimpleFilter from './SimpleFilter';

const specialNeeds = [
  { id: '1', name: 'Активний спосіб життя' },
  { id: '2', name: 'Малоактивний спосіб життя' },
  { id: '3', name: 'Вагітні і годуючі' },
  { id: '4', name: 'Для імунітету' },
  { id: '5', name: 'Для вибагливих' },
  { id: '6', name: 'Для зняття стресу' },
  { id: '7', name: 'Здоров’я сечової системи' },
  { id: '8', name: 'Здоров’я суглобів' },
  { id: '9', name: 'Здоров’я шерсті' },
  { id: '10', name: 'Кастровані та стерелізовані' },
  { id: '11', name: 'Очищення зубів' },
  { id: '12', name: 'Чутлива шкіра' },
  { id: '13', name: 'Чутливий шлунок' },
];
const feedType = [
  { id: '1', name: 'Тип корму 1' },
  { id: '2', name: 'Тип корму 2' },
  { id: '3', name: 'Тип корму 3' },
  { id: '4', name: 'Тип корму 4' },
  { id: '5', name: 'Тип корму 5' },
];
const feedClass = [
  { id: '1', name: 'Клас корму 1' },
  { id: '2', name: 'Клас корму 2' },
  { id: '3', name: 'Клас корму 3' },
  { id: '4', name: 'Клас корму 4' },
  { id: '5', name: 'Клас корму 5' },
];
const animalAge = [
  { id: '1', name: '1 рік' },
  { id: '2', name: '2 роки' },
  { id: '3', name: '3 роки' },
  { id: '4', name: '4 роки' },
  { id: '5', name: '5 роів' },
  { id: '6', name: '6 роів' },
  { id: '7', name: '7 роів' },
];
const animalBreed = [
  { id: '1', name: '1 рік' },
  { id: '2', name: '2 роки' },
  { id: '3', name: '3 роки' },
  { id: '4', name: '4 роки' },
  { id: '5', name: '5 роів' },
  { id: '6', name: '6 роів' },
  { id: '7', name: '7 роів' },
];
const packaging = [
  { id: '1', name: 'Менше 1 кг' },
  { id: '2', name: 'Від 1 до 3 кг' },
  { id: '3', name: 'Від 4 до 7 кг' },
  { id: '4', name: 'Від 8 до 13 кг' },
  { id: '5', name: 'Від 14 до 17 кг' },
  { id: '6', name: 'Від 18 до 20 кг' },
  { id: '7', name: 'Понад 20 кг' },
];

function FiltersPanel() {
  return (
    <div className=" w-full">
      <PriceFilter />
      <BrandFilter brands={brands} />
      <SimpleFilter title="Особливі потреби" items={specialNeeds} />
      <SimpleFilter title="Тип корму" items={feedType} />
      <SimpleFilter title="Клас корму" items={feedClass} />
      <SimpleFilter title="Вік тварини" items={animalAge} />
      <SimpleFilter title="Порода" items={animalBreed} />
      <SimpleFilter title="Фасування" items={packaging} />
    </div>
  );
}

export default FiltersPanel;
