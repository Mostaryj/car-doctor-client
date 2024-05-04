import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-xl" />
          <div className="bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full rounded-xl absolute flex items-center  left-0 top-0   bottom-0 ">
            <div className="space-y-7 w-1/2 pl-12">
              <h1 className="text-5xl font-poet font-bold text-white">
                Affordable Price For Car Servicing{" "}
              </h1>
              <p className="text-white">
                There are many variation of passages of available but the
                majority have suffered alteration in some form
              </p>
              <div className="flex">
                <button className="btn bg-red-500 text-white mr-5">
                  Discover Now
                </button>
                <button className="btn btn-outline text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute  transform -translate-y-1/2  -right-0 bottom-1">
            <a href="#slide4" className="btn btn-circle bg-transparent mr-4">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full rounded-xl" />
          <div className="bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full rounded-xl absolute flex items-center  left-0 top-0   bottom-0 ">
            <div className="space-y-7 w-1/2 pl-12">
              <h1 className="text-5xl font-poet font-bold text-white">
                Affordable Price For Car Servicing{" "}
              </h1>
              <p className="text-white">
                There are many variation of passages of available but the
                majority have suffered alteration in some form
              </p>
              <div className="flex">
                <button className="btn bg-red-500 text-white mr-5">
                  Discover Now
                </button>
                <button className="btn btn-outline text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute  transform -translate-y-1/2  -right-0 bottom-1">
            <a href="#slide1" className="btn btn-circle mr-4">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full rounded-xl" />
          <div className="bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full rounded-xl absolute flex items-center  left-0 top-0   bottom-0 ">
            <div className="space-y-7 w-1/2 pl-12">
              <h1 className="text-5xl font-poet font-bold text-white">
                Affordable Price For Car Servicing{" "}
              </h1>
              <p className="text-white">
                There are many variation of passages of available but the
                majority have suffered alteration in some form
              </p>
              <div className="flex">
                <button className="btn bg-red-500 text-white mr-5">
                  Discover Now
                </button>
                <button className="btn btn-outline text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute  transform -translate-y-1/2  -right-0 bottom-1">
            <a href="#slide2" className="btn btn-circle mr-4">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full rounded-xl" />
          <div className="bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full absolute rounded-xl flex items-center  left-0 top-0   bottom-0 ">
            <div className="space-y-7 w-1/2 pl-12">
              <h1 className="text-5xl font-poet font-bold text-white">
                Affordable Price For Car Servicing{" "}
              </h1>
              <p className="text-white">
                There are many variation of passages of available but the
                majority have suffered alteration in some form
              </p>
              <div className="flex">
                <button className="btn bg-red-500 text-white mr-5">
                  Discover Now
                </button>
                <button className="btn btn-outline text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute  transform -translate-y-1/2  -right-0 bottom-1">
            <a href="#slide3" className="btn btn-circle mr-4">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={img5} className="w-full rounded-xl" />
          <div className="bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full absolute rounded-xl flex items-center  left-0 top-0   bottom-0 ">
            <div className="space-y-7 w-1/2 pl-12">
              <h1 className="text-5xl font-poet font-bold text-white">
                Affordable Price For Car Servicing{" "}
              </h1>
              <p className="text-white">
                There are many variation of passages of available but the
                majority have suffered alteration in some form
              </p>
              <div className="flex">
                <button className="btn bg-red-500 text-white mr-5">
                  Discover Now
                </button>
                <button className="btn btn-outline text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute  transform -translate-y-1/2  -right-0 bottom-1">
            <a href="#slide4" className="btn btn-circle mr-4">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={img6} className="w-full rounded-xl" />
          <div className="bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full absolute rounded-xl flex items-center  left-0 top-0   bottom-0 ">
            <div className="space-y-7 w-1/2 pl-12">
              <h1 className="text-5xl font-poet font-bold text-white">
                Affordable Price For Car Servicing{" "}
              </h1>
              <p className="text-white">
                There are many variation of passages of available but the
                majority have suffered alteration in some form
              </p>
              <div className="flex">
                <button className="btn bg-red-500 text-white mr-5">
                  Discover Now
                </button>
                <button className="btn btn-outline text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute  transform -translate-y-1/2  -right-0 bottom-1">
            <a href="#slide5" className="btn btn-circle mr-4">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
