import './SmallCard.css';

const SmallCard = ({ id }) => {
  return (
    <div className="smallCard border-solid border-2  rounded-lg   mx-2  last: flex-col">
      <div className="flex items-center w-60 ">
        <img src="./images/test.png" className=" w-40 h-90 " alt="맥주병" />
        <div className=" flex-col items-center">
          <h1>별점{id}</h1>
          <p>재고</p>
        </div>
      </div>
      <div>
        <p>물건정보들</p>
      </div>
    </div>
  );
};

export default SmallCard;
