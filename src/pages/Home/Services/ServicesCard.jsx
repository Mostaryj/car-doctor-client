import { FaArrowRight } from "react-icons/fa6";


const ServicesCard = ({ service }) => {
  const { img, price, title } = service;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="h-[200px]" />
        </figure>
        <div className="card-body  ">
          <h2 className="card-title">{title}</h2>
          <p className="text-orange-300">Price: ${price}</p>
          <div className="card-actions flex justify-between">
            <button className="btn bg-orange-600 text-white">Buy Now</button>
            <button className="btn btn-circle btn-outline">
            <FaArrowRight />

            </button>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
