import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
    const service = useLoaderData();
    const {title, price, service_id, _id, img} = service;

    const {user} = useContext(AuthContext);

    const handleService = event =>{
        event.preventDefault();

       const form = event.target;
       const name = form.name.value;
       const date = form.date.value;
       const email = user?.email;
       const about = form.about.value;

       const booking ={
        customerName: name,
        email,
        img,
        date,
        price: price,
        service: title,
        service_id: _id,
        about
       }

   console.log(booking);

     fetch('http://localhost:5000/bookings', {
        method: "POST",
        headers: {
         'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
     })
     .then(res => res.json())
     .then(data => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, booking it!"
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Booked!",
                    text: "Your order has been booked.",
                    icon: "success"
                  });
                }
              });
             
        }
     })

  

    }



    return (
        <div>
            <h2>Book Service: {service_id}</h2>
            <h2 className="text-2xl lg:text-4xl text-center font-bold font-poet">Title: {title}</h2>
            <p className="text-orange-600 text-center font-bold">Price: {price}$</p>

  
      <form onSubmit={handleService} className="card-body">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
       <div className="form-control  w-full">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" defaultValue={user?.displayName}  className="input input-bordered" required />
        </div>

        <div className="form-control  w-full">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date"  className="input input-bordered" required />     
        </div>

       <div className="form-control  w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" required />
        </div>

        <div className="form-control  w-full">
          <label className="label">
            <span className="label-text">Due Amount</span>
          </label>
          <input type="text" name="due" defaultValue={"$"+ price} className="input input-bordered" required />     
        </div>
       </div>

       <textarea className="textarea textarea-bordered h-[150px]" placeholder="About service" name="about"></textarea>

        <div className="form-control mt-6">
      <input type="submit" className="bg-orange-600 btn text-white" value='Order Confirm'/>       
 </div>
      </form>
    </div>
 
    );
};

export default CheckOut;