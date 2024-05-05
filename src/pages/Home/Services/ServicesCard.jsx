import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";


const ServicesCard = ({ service }) => {
  const {_id, img, price, title } = service;
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
           <Link to={`/checkout/${_id}`}>
           <button className="btn bg-orange-600 text-white">Book Now</button>
           </Link>
            <button className="btn btn-circle bg-white text-orange-600 ">
            <FaArrowRight />

            </button>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
