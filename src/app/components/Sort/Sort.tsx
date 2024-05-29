'use client';

import Image from 'next/image';
import ArrowSortIcon from '../icons/ArrowSortIcon';

interface SortProps {
  onRatingSortClick: () => void;
  onPriceSortClick: () => void;
}

function Sort({ onRatingSortClick, onPriceSortClick }: SortProps) {
  return (
    <div className="flex items-center gap-6">
      <p>Сортувати:</p>
      <button className="flex items-center" onClick={onRatingSortClick}>
        За рейтингом
        <span>
          <ArrowSortIcon />
        </span>
      </button>
      <button className="flex items-center" onClick={onPriceSortClick}>
        За ціною
        <span>
          <ArrowSortIcon />
        </span>
      </button>
    </div>
  );
}

export default Sort;
