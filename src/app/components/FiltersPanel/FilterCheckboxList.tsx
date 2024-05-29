'use client';

import { useState } from 'react';

export interface Item {
  id: string;
  name: string;
}

interface FilterCheckboxListProps {
  items: Item[];
}

function FilterCheckboxList({ items }: FilterCheckboxListProps) {
  const [checkedState, setCheckedState] = useState(
    new Array(items.length).fill(false),
  );
  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item,
    );
    setCheckedState(updatedCheckedState);
  };

  return (
    <ul className="flex flex-col gap-3">
      {items.map(({ id, name }, index) => {
        return (
          <li key={id}>
            <div className="flex items-center gap-[10px]">
              <input
                className="w-[25px] h-[25px]"
                type="checkbox"
                id={`custom-checkbox-${index}`}
                name={name}
                value={name}
                checked={checkedState[index]}
                onChange={() => handleOnChange(index)}
              />
              <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default FilterCheckboxList;
