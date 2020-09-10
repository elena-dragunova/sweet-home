import React, {Component} from 'react'
import styles from './HomeSlider.module.css'
import slider1 from '../../../assets/img/slider1.jpg'
import slider2 from '../../../assets/img/slider2.jpg'
import slider3 from '../../../assets/img/slider3.jpg'
import slider4 from '../../../assets/img/slider4.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function CustomNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={styles.nextArrow}
      onClick={onClick}
    >
      <i className="fas fa-chevron-right"></i>
    </div>
  );
}

function CustomPrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={styles.prevArrow}
      onClick={onClick}
    >
      <i className="fas fa-chevron-left"></i>
    </div>
  );
}

class HomeSlider extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: true,
      autoplay: true,
      pauseOnHover: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <CustomNextArrow />,
      prevArrow: <CustomPrevArrow />,
    };

    const slides = [
      {
        id: 0,
        title: 'Your best cosiest sofa is here',
        image: slider1
      },
      {
        id: 1,
        title: 'Nicest chair for your dinner area',
        image: slider2
      },
      {
        id: 3,
        title: 'We will make your home the loveliest place',
        image: slider3
      },
      {
        id: 4,
        title: 'Everything for the big family gatherings',
        image: slider4
      },
    ];

    return (
      <div className={styles.Slider}>
        <Slider {...settings}>
          {slides.map((slide) => {
            return (
              <div key={slide.id} className={styles.sliderItem}>
                <img src={slide.image}  alt=""/>
              </div>
            )
          })}
        </Slider>
      </div>
    );
  }
}

export default HomeSlider
