import './Btn.css';
const Btn = ({ children, handelClick, isClick, id, key }) => {
  return (
    <button
      id={id}
      key={key}
      onClick={e => handelClick(e)}
      className={
        !isClick.map(item => item.id === parseInt(id))[0]
          ? 'btn btn-xs  rounded-full border-red-600 btn-outline  mx-1 hover:bg-gray-100 hover:text-black'
          : 'btn btn-xs  rounded-full bg-point-color border-point-color'
      }
    >
      {children}
    </button>
  );
};

export default Btn;
