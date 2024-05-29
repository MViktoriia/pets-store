import styles from './NavigationDropDown.module.css';
import CategoryIcon from '../category-icon';
import { Category } from '../../components/category-icon';
import Image from 'next/image';
import imgUrl from '../../../../public/images/dog-menu-popup-2x.png';
import NavList from './NavList';

interface Subcategory {
  id: string;
  name: string;
  slug: string;
}
interface ElementObject {
  id: string;
  subcategories: Subcategory[];
}
type Props = {
  slug: string;
  name: string;
  img: string;
  elementObj: ElementObject;
  onNameChange: (name: string, key: string) => void;
};
function NavigationDropDown({
  slug,
  name,
  img,
  elementObj,
  onNameChange,
}: Props) {
  const flexContainer = `${styles.flexContainer} bg-cyan-light md:rounded-xl md:border-4 border-white border-y-2 border-solid mt-2 p-4 overflow-hidden`;
  const imageContainder = `${styles.wide} hidden md:block`;
  const categoryIcon = `${styles.narrow} hidden md:block`;
  const handleCategoryClick = (newName: string, key: string) => {
    onNameChange(newName, key);
  };
  return (
    <>
      <div className={flexContainer}>
        <div className={categoryIcon}>
          <div onClick={() => handleCategoryClick('Собаки', 'dog')}>
            <CategoryIcon category={Category.Dog} />
          </div>
          <div onClick={() => handleCategoryClick('Коти', 'cat')}>
            <CategoryIcon category={Category.Cat} />
          </div>
          <div onClick={() => handleCategoryClick('Птахи', 'bird')}>
            <CategoryIcon category={Category.Bird} />
          </div>
          <div onClick={() => handleCategoryClick('Риби', 'fish')}>
            <CategoryIcon category={Category.Fish} />
          </div>
        </div>
        <div className={styles.wide}>
          <div className="flex justify-between  md:h-16 items-center md:w-96 border-b-2 border-yellow">
            <div className="">
              <h2 className="font-serif text-white text-xl font-bold">
                {name}
              </h2>
            </div>
            <div>2</div>
          </div>
          <div className="grid md:grid-cols-3 md:gap-5 md:mt-2 font-sans text-white">
            {elementObj &&
              elementObj.subcategories.map((element, index) => (
                <NavList
                  categorySlug={slug}
                  key={index}
                  name={element.name}
                  elementObj={element}
                  key2={index}
                />
              ))}
            {/* <NavList />
  <NavList />
  <NavList />
  <NavList />
  <NavList />
  <NavList /> */}
          </div>
        </div>

        <div className={imageContainder}>
          <div className="flex justify-center items-end h-full">
            <Image
              src={`/images/${img}-menu-popup-2x.png`}
              alt="Описание изображения"
              width={348}
              height={300}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default NavigationDropDown;
