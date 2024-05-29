import { MagnifyingglassIcon } from '../icons';

interface SearchProps {
  className?: string;
}

function Search({ className }: SearchProps) {
  return (
    <div className={` relative w-full h-full flex items-center ${className}`}>
      <input
        type="text"
        placeholder="Пошук"
        className="p-2 rounded-md border border-gray-ligthMax w-full"
      />
      <MagnifyingglassIcon
        width={25}
        height={25}
        className=" absolute top-2 right-3 "
      />
    </div>
  );
}

export default Search;
