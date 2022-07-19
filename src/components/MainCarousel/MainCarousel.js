import { useState } from 'react';
import Btn from '../Btn/Btn';
import SmallCard from '../SmallCard/SmallCard';
import Slider from 'react-slick';
import './MainCarousel.css';
import ArrowBtn from '../ArrowBtn/ArrowBtn';

const SET = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  nextArrow: <ArrowBtn />,
  prevArrow: <ArrowBtn />,
};

const MainCarousel = () => {
  const [isClick, setIsClick] = useState([{ id: 1 }]);

  const handelClick = e => {
    const { id } = e.target;

    if (isClick.map(item => item.id === parseInt(id))[0]) {
      if (isClick.length === 1) {
        return;
      }
    } else setIsClick(prve => [{ id: parseInt(id) }]);
  };

  return (
    <section className=" py-10">
      <div className=" py-1">
        <h1 className=" text-2xl font-extrabold py-1">오늘의 추천</h1>
        <p>어느 분기점으로 업데이트 할지 논의 필요</p>
      </div>
      <div className=" py-1">
        <div className=" py-1">
          {[1, 2, 3, 4].map(item => {
            return (
              <Btn id={item} handelClick={handelClick} isClick={isClick}>
                {[...Array(item)].map(count => {
                  return <i id={item} className="fa-solid fa-won-sign p-1 " />;
                })}
              </Btn>
            );
          })}
        </div>
        <div>
          <span> 얼마를 기준으로 나열 되었어요</span>
        </div>
      </div>
      <section className="py-10">
        <Slider {...SET}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(item => {
            return <SmallCard id={item} key={item} />;
          })}
        </Slider>
      </section>
    </section>
  );
};

export default MainCarousel;
