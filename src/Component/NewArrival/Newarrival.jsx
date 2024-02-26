import React, { useState } from "react";
import Card from "../Common/Card";
import ArrivalData from "../../../NewArrivalData/ArrivalData";
import Button from "../Common/Button.jsx";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};

const Newarrival = () => {
  const [arrivalData, setarrivalData] = useState(ArrivalData);
  return (
    <>
      <div className="py-12">
        <div className="container">
          <Slider {...settings}>
            {arrivalData?.map((item) => (
              <div key={item.id}>
                <Card
                  img={item.productImg}
                  colorVariant={item.color === true ? true : false}
                  badge={
                    item.badge ? <Button>{item.productStatus}</Button> : null
                  }
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Newarrival;
