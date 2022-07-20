import { useState } from 'react';
import MainCarousel from '../../components/MainCarousel/MainCarousel';
import Btn from '../../components/Btn/Btn';
const FILTER = [
  { id: 1, price: 20000 },
  { id: 2, price: 30000 },
  { id: 3, price: 40000 },
  { id: 4, price: 50000 },
];
const FILTER_MAP = new Map(FILTER.map(item => [item.id, item.price]));

const Main = () => {
  const [isClick, setIsClick] = useState([{ id: 1, price: 20000 }]);

  const handelClick = e => {
    const { id } = e.target;
    const { key } = e.target;
    if (isClick.map(item => item.id === parseInt(id))[0]) {
      if (isClick.length === 1) {
        return;
      }
    } else
      setIsClick(prve => [
        { id: parseInt(id), price: FILTER_MAP.get(parseInt(id)) },
      ]);
  };
  console.log(isClick);

  return (
    <main className="items-center max-w-5xl  mx-auto">
      <section className=" py-10">
        <div className=" py-1">
          <h1 className=" text-2xl font-extrabold py-1">오늘의 추천</h1>
        </div>
        <div className=" py-1">
          <div className=" py-1">
            {FILTER.map(item => {
              const { id, price } = item;
              return (
                <Btn
                  id={id}
                  key={price}
                  handelClick={handelClick}
                  isClick={isClick}
                >
                  {[...Array(parseInt(id))].map(count => {
                    return <i id={id} className="fa-solid fa-won-sign p-1 " />;
                  })}
                </Btn>
              );
            })}
          </div>
          <div className=" py-2">
            <span>
              {isClick.map(item => item.price).toLocaleString()}원 이상의
              와인이에요
            </span>
          </div>
        </div>
        <MainCarousel />
      </section>
    </main>
  );
};

export default Main;
