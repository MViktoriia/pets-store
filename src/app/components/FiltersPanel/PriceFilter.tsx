import React from 'react';
import FilterTitle from './FilterTitle';

function PriceFilter() {
  return (
    <div className="pb-8 border-b border-b-gray-ligthMax">
      <FilterTitle className="mb-2">Ціна</FilterTitle>
      <div className=" flex items-center gap-[12.5px] w-full">
        <input
          className="w-[136px] h-[41px] px-[54px] py-[8px] bg-transparent border border-gray-ligthMax rounded-md"
          placeholder="від"
        />
        <span>-</span>
        <input
          className="w-[136px] h-[41px] px-[54px] py-[8px] bg-transparent border border-gray-ligthMax rounded-md"
          placeholder="до"
        />
      </div>
    </div>
  );
}

export default PriceFilter;
