import React from "react";
import productImg from "../../assets/product2.png";

const Card = ({ colorVariant, badge }) => {
  return (
    <>
      <div className="inline-block">
        <div>
          {badge && (
            <button className="bg-black text-white py-2 px-8 text-sm font-bold">
              New
            </button>
          )}

          <img src={productImg} alt={productImg} />
        </div>

        <div className="flex justify-between items-center pt-6">
          <h3>Basic Crew Neck Tee</h3>
          <p>$44.00</p>
        </div>
        {colorVariant && <span>Black</span>}
      </div>
    </>
  );
};

export default Card;
