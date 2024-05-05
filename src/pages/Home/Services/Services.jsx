import { useEffect } from "react";
import { useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center mt-4">
        <h3 className="text-xl font-bold text-orange-600"> Services</h3>
        <h3 className="text-4xl font-bold ">Our Services</h3>
        <p>
   
          There are many variation of passages of available but the majority
          have suffered alteration in some from
        </p>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

       {
        services.map(service => <ServicesCard key={service._id}
            
            service={service}
        
        ></ServicesCard>)
       }

      </div>
    </div>
  );
};

export default Services;
