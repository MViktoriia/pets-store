import ButtonSecondary from '../button-secondary';

function FilterInfoPanel() {
  return (
    <div className="flex gap-6 items-center mb-3">
      <p>Знайдено 3408 товарів</p>
      <ButtonSecondary className="border border-solid border-yellow rounded-md text-[18px] px-3 py-2 hover:bg-yellow hover:border-orange hover:text-white active:border-cyan-light transition-colors">
        Торгова марка 2
      </ButtonSecondary>
      <ButtonSecondary className="border border-solid border-yellow rounded-md text-[18px] px-3 py-2 hover:bg-yellow hover:border-orange hover:text-white active:border-cyan-light transition-colors">
        Новинки
      </ButtonSecondary>
      <ButtonSecondary className="border border-solid border-yellow rounded-md text-[18px] px-3 py-2 hover:bg-yellow hover:border-orange hover:text-white active:border-cyan-light transition-colors">
        Тип корму 4
      </ButtonSecondary>
    </div>
  );
}

export default FilterInfoPanel;
