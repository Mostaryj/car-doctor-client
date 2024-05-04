import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div>
      <div className="hero lg:h-[500px]">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <img src={person} className="w-3/4 rounded-lg shadow-2xl " />
            <img
              src={parts}
              className="w-1/2 rounded-lg border-4 border-white shadow-2xl absolute top-1/2 right-5"
            />
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0 p-4">
            <h3 className="text-xl font-bold font-poet text-orange-600">
              About Us
            </h3>
            <h1 className="lg:text-5xl text-2xl font-bold font-poet">
              We are qualified & of experience in this field
            </h1>
            <p className="py-6">
              Whether it is a corporate event or a special occasion, trust us to
              elevate your transportation experience. With our seamless booking
              process and dedicated customer support, arranging your
              transportation has never been easier. 
              <p className="py-6">Experience convenience
              redefined with our door-to-door car services. Wherever you need to
              be, we will get you there.</p>
            </p>
            <button className="btn bg-orange-600 text-white">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
