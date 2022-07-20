import SmallCard from '../SmallCard/SmallCard';
import ArrowBtn from '../ArrowBtn/ArrowBtn';
import Slider from 'react-slick';
import './MainCarousel.css';

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
  return (
    <section className="py-10">
      <Slider {...SET}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(item => {
          return <SmallCard id={item} key={item} />;
        })}
      </Slider>
    </section>
  );
};

export default MainCarousel;
