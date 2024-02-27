import styles from './Navigation.module.css'; 
function Navigation(){
    const ulClasses = `flex fontFamily-sans md:h-20 items-center ${styles.navText}`;
    return(
        <>
        <nav className="md:container mx-auto mt-4">
      <ul className={ulClasses}>
        <li className="flex-1 text-center mx-4">Собаки</li>
        <li className="flex-1 text-center   mx-4">Коти</li>
        <li className="flex-1 text-center  mx-4">Птахи</li>
        <li className="flex-1 text-center  mx-4">Риби</li>
      </ul>
        </nav>
        </>
    )
}
export default Navigation;