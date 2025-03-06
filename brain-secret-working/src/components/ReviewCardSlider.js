import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/ReviewCardSlider.css";

const reviews = [
  {
    id: 1,
    image: "../images/s1.avif",
    rating: 5,
    content: "Brain-Secret changed my life. The sessions were inspiring and calming.",
  },
  {
    id: 2,
    image: "../images/s2.jpg",
    rating: 4.5,
    content: "Highly professional counselors who truly understand your needs.",
  },
  {
    id: 3,
    image: "../images/s5.png",
    rating: 5,
    content: "The tools and resources provided made a huge difference in my journey!",
  },
  {
    id: 4,
    image: "../images/s3.jpg",
    rating: 4,
    content: "I feel much stronger and more confident after the sessions.",
  },
  {
    id: 5,
    image: "../images/s6.jpg",
    rating: 4.5,
    content: "A supportive community and excellent counseling services.",
  },
  {
    id: 6,
    image: "../images/s4.avif",
    rating: 5,
    content: "Sessions were insightful and helped me rediscover my inner peace.",
  },
  {
    id: 7,
    image: "../images/s7.avif",
    rating: 4.5,
    content: "Highly recommend Brain-Secret for anyone seeking growth and healing.",
  },
  {
    id: 8,
    image: "../images/s8.jpg",
    rating: 5,
    content: "Absolutely life-changing experience. Grateful for their help!",
  },
];

const ReviewSlider = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="review-slider">
      <h2 className="slider-heading">What Our Clients Say</h2>
      <Slider {...sliderSettings}>
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <img src={review.image} alt="Review" className="review-image" />
            <div className="review-content">
              <div className="rating">
                <h6> Rating: </h6>
                {Array.from({ length: Math.floor(review.rating) }, (_, i) => (
                  <span key={i}>⭐</span>
                ))}
                {review.rating % 1 !== 0 && <span>⭐½</span>}
              </div>
              <p>{review.content}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewSlider;
