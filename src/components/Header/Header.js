import { useContext } from 'react';
import { ModalContext } from '../../Contexts/Modal/ModalContext';

const Header = () => {
  const { isOpen, handleOpen } = useContext(ModalContext);

  return (
    <header className="border-b border">
      <div className="flex items-center max-w-5xl  mx-auto justify-between p-6 ">
        <div className="flex items-center ">
          <div className=" flex items-center w-28 h-11 mx-1 ">
            <img alt="로고" src="/images/logo/logo.svg" />
          </div>
          <input
            className="  rounded-full ... border  w-96  p-2 "
            type="text"
            placeholder="🔍   Search any HangOver"
          />
        </div>
        <div className=" p-1">
          <button
            className="btn"
            onClick={() => {
              handleOpen();
            }}
          >
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
