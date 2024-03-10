import React, { useState } from "react";
import Card from "../Common/Card";
import ArrivalData from "../../../NewArrivalData/ArrivalData";
import Button from "../Common/Button.jsx";

const Newarrival = () => {
  const [arrivalData, setarrivalData] = useState(ArrivalData);
  return (
    <>
      <div className="py-12">
        <div className="container">
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
        </div>
      </div>
    </>
  );
};

export default Newarrival;
