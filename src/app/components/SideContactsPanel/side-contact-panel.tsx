import Phone from '../Contacts/phone';
import Socials from '../Socials/socials';
import styles from './side-contact-panel.module.css';

function SideContactPanel() {
  return (
    <div className="hidden md:block fixed z-20 right-0 top-[352px] w-[90px] bg-yellow rounded-l-xl px-5 py-6">
      <Socials className=" flex-col" />
      <Phone isFilled className={styles.phoneNumber} />
    </div>
  );
}

export default SideContactPanel;
