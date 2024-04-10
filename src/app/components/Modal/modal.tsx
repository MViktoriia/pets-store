import { ReactNode, useEffect } from 'react';
import { CrossIcon } from '../icons';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children: ReactNode;
}

function Modal({ isOpen, onClose, className, children }: ModalProps) {
  //   useEffect(() => {
  //     const handleKeyDown = (event: KeyboardEvent) => {
  //       if (event.key === 'Escape') {
  //         onClose();
  //       }
  //     };
  //     window.addEventListener('keydown', handleKeyDown);
  //   }, [onClose]);
  return (
    <>
      {isOpen ? (
        <div
          className={`fixed top-0 left-0 w-[100vw] h-full z-20 bg-cyan-backdrop transition-opacity overflow-y-scroll flex items-center justify-center ${className} `}
          onClick={onClose}
        >
          <div
            id="modalContent"
            className=" relative bg-white rounded-xxl mx-auto max-w-[90%]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="absolute top-[24px] right-[24px] w-[40px] h-[40px] flex items-center justify-center"
              onClick={onClose}
            >
              <CrossIcon className="[&_rect]:fill-yellow" />
            </button>
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Modal;
