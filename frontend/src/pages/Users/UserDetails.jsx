import React from "react";
import { CiMail } from "react-icons/ci";
import { LuContact } from "react-icons/lu";
import { CiGlobe } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { formatDate } from "../../utis/formatDate";


const UserDetails = ({ userData }) => {
        return (
        <div className="grid grid-cols-3 gap-4 mb-[10px]">
            <div>
                <div className="mt-12 mb-[10px]">
                    <h3 className="text-[24px] leading-[30px] text-secondaryColor font-bold">
                        Contact
                    </h3>
                    <div className="pt-4 md:p-5">
                        <p className="text__para mt-1 text-[14px] flex flex-row"><CiMail className="mr-4 w-[25px] h-[25px] text-primaryColor" />{userData.email}</p>
                        <p className="text__para mt-1  text-[14px] flex flex-row"><LuContact className="mr-4 w-[25px] h-[25px] text-primaryColor" />{userData.phone}</p>
                        <p className="text__para mt-1  text-[14px] flex flex-row"><CiGlobe className="mr-4 w-[25px] h-[25px] text-primaryColor" />{userData.website}</p>
                    </div>
                </div>

                <div className="mt-1">
                    <h3 className="text-[24px] leading-[30px] text-secondaryColor font-bold">
                        Education
                    </h3>
                    <ul className="pt-4 md:p-5">
                        {userData.qualifications?.map((item, index) =>
                            <li key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[10px] ">
                                <div>
                                    <p className="text-[16px] leading-6 font-bold text-textColor">
                                    {item.degree}
                                    </p>
                                    <p className="text-[14px] leading-5 font-medium text-textColor mb-1">
                                    {item.university}
                                    </p>
                                    <span className="text-primaryColor text-[13px] leading-1 font-semibold">
                                    {formatDate(item.startingDate)} - {formatDate(item.endingDate)}
                                    </span>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>

                <div className="mt-1">
                    <h3 className="text-[24px] leading-[30px] text-secondaryColor font-bold">
                        Expertise
                    </h3>
                    <ul className="pt-4 md:p-5">
                    {userData.expertise?.map((item,index) => 
                        <li key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[10px]">
                            <div>
                                <p className="text__para mt-1 text-[14px] flex flex-row"><GoDotFill className="mr-2 mt-[6px] w-[15px] h-[15px] text-primaryColor" />{item.expertise}</p>                               
                            </div>
                        </li>
                    )}
                    </ul>
                </div>

                <div className="mt-1">
                    <h3 className="text-[24px] leading-[30px] text-secondaryColor font-bold">
                        Skills
                    </h3>
                    <ul className="pt-4 md:p-5">
                    {userData.skills?.map((item,index) => 
                        <li key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[10px]">
                            <div>
                                <p className="text__para mt-1 text-[14px] flex flex-row"><GoDotFill className="mr-2 mt-[6px] w-[15px] h-[15px] text-primaryColor" />{item.skills}</p>
                                
                            </div>
                        </li>
                    )}
                    </ul>
                </div>

            </div>
            <div className="col-span-2 pl-20 box__shadows__2">
                <div className="mt-12 mb-[10px]">
                    <h3 className="text-[24px] leading-[30px] text-secondaryColor font-bold">
                        About
                    </h3>
                    <div className="pt-4 md:p-5">
                        <p className="text__para mt-1 text-[14px] flex flex-row">{userData.about}</p>
                    </div>
                </div>
                <div className="mt-1">
                    <h3 className="text-[24px] leading-[30px] text-secondaryColor font-bold">
                        Work Experience
                    </h3>
                    <ul className="pt-4 md:p-5">
                    {userData.experiences?.map((item,index) => 
                        <li key={index} className="mb-10">
                            <div className="mb-7">
                                <p className="text-[18px] leading-6 pb-3 font-bold text-primaryColor">
                                    {item.company}
                                </p>
                                <p className="text-[14px] leading-5 font-bold text-textColor mb-1">
                                    Senior UI Developer  <span className="mx-5 font-medium"> | </span> <span className="text-textColor text-[13px] leading-1 font-semibold">
                                    {formatDate(item.startingDate)} - {formatDate(item.endingDate)}
                                    </span>
                                </p>
                                <p className=" text__para mt-1 text-[14px] flex flex-row">
                                   {item.aboutwork}
                                   </p>
                            </div>                            
                        </li>
                    )}
                    </ul>
                </div>
            </div>
        </div >
    )
};

export default UserDetails;
