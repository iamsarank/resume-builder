import React from "react";
import homeImg from '../assets/images/homeImg.jpg';
import clientImg from '../assets/images/clients.jpg';
import { BsArrowRightCircleFill } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <section className="pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[150px] items-start justify-between">
            <div>
              <div className="lg:w-[550px]">
                <h4 className="text-textColor font-[600] leading-[70px]">Elevate your potential</h4>
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800]
                md:text-[60px] md:leading-[70px]">Put your<span className="text-primaryColor "> dream career</span> within reach.</h1>
                <p className="text__para">
                  Stands out among job seekers with our free <br /> online cover letter, portfolio,
                  and resume<br /> builders. Ready to aspire higher?
                </p>
                <button className="btn flex flex-row items-center gap-3"> Get Started <BsArrowRightCircleFill className="w-4 h-4"/></button>
              </div>
            </div>
            <div className="flex gap-[30px] justify-end">
              <div>
                <img src={homeImg} alt="" className="w-[80%]" />
              </div>
            </div>
          </div>
          <div>
            <p className="text__para text-[14px] font-[600]" >Trusted by great companies</p>
            <div className="flex items-center justify-center">
              <img src={clientImg} alt="" className="w-[80%]"/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default Home;
