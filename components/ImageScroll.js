import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

const ImageScroll = ({ photos }) => {
  console.log(photos);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {photos.map((photo) => (
        <div className="h-[500px] w-full relative" key={photo.id}>
          <Image
            src={photo.url}
            layout="fill"
            objectFit="contain"
       
            alt="property-image"
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageScroll;
