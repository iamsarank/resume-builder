import React from "react";
import { CiMail } from "react-icons/ci";
import { LuContact } from "react-icons/lu";
import { CiGlobe } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";

const UserDetails = () => {
    return (
        <div className="grid grid-cols-3 gap-4 mb-[10px]">
            <div>
                <div className="mt-12 mb-[10px]">
                    <h3 className="text-[24px] leading-[30px] text-secondaryColor font-bold">
                        Contact
                    </h3>
                    <div className="pt-4 md:p-5">
                        <p className="text__para mt-1 text-[14px] flex flex-row"><CiMail className="mr-4 w-[25px] h-[25px] text-primaryColor" />iamsarank@gmail.com</p>
                        <p className="text__para mt-1  text-[14px] flex flex-row"><LuContact className="mr-4 w-[25px] h-[25px] text-primaryColor" />iamsarank@gmail.com</p>
                        <p className="text__para mt-1  text-[14px] flex flex-row"><CiGlobe className="mr-4 w-[25px] h-[25px] text-primaryColor" />iamsarank@gmail.com</p>
                    </div>
                </div>

                <div className="mt-1">
                    <h3 className="text-[24px] leading-[30px] text-secondaryColor font-bold">
                        Education
                    </h3>
                    <ul className="pt-4 md:p-5">
                        <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[10px] ">
                            <div>
                                <p className="text-[16px] leading-6 font-bold text-textColor">
                                    Bsc.Computer Science
                                </p>
                                <p className="text-[14px] leading-5 font-medium text-textColor mb-1">
                                    PSG Tech
                                </p>
                                <span className="text-primaryColor text-[13px] leading-1 font-semibold">
                                    2016-2018
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="mt-1">
                    <h3 className="text-[24px] leading-[30px] text-secondaryColor font-bold">
                        Expertise
                    </h3>
                    <ul className="pt-4 md:p-5">
                        <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[10px]">
                            <div>
                                <p className="text__para mt-1 text-[14px] flex flex-row"><GoDotFill className="mr-2 mt-[6px] w-[15px] h-[15px] text-primaryColor" />iamsarank@gmail.com</p>
                                <p className="text__para mt-1 text-[14px] flex flex-row"><GoDotFill className="mr-2 mt-[6px] w-[15px] h-[15px] text-primaryColor" />iamsarank@gmail.com</p>
                                <p className="text__para mt-1 text-[14px] flex flex-row"><GoDotFill className="mr-2 mt-[6px] w-[15px] h-[15px] text-primaryColor" />iamsarank@gmail.com</p>
                                <p className="text__para mt-1 text-[14px] flex flex-row"><GoDotFill className="mr-2 mt-[6px] w-[15px] h-[15px] text-primaryColor" />iamsarank@gmail.com</p>

                            </div>
                        </li>
                    </ul>
                </div>

                <div className="mt-1">
                    <h3 className="text-[24px] leading-[30px] text-secondaryColor font-bold">
                        Skills
                    </h3>
                    <ul className="pt-4 md:p-5">
                        <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[10px]">
                            <div>
                                <p className="text__para mt-1 text-[14px] flex flex-row"><GoDotFill className="mr-2 mt-[6px] w-[15px] h-[15px] text-primaryColor" />iamsarank@gmail.com</p>
                                <p className="text__para mt-1 text-[14px] flex flex-row"><GoDotFill className="mr-2 mt-[6px] w-[15px] h-[15px] text-primaryColor" />iamsarank@gmail.com</p>
                                <p className="text__para mt-1 text-[14px] flex flex-row"><GoDotFill className="mr-2 mt-[6px] w-[15px] h-[15px] text-primaryColor" />iamsarank@gmail.com</p>
                                <p className="text__para mt-1 text-[14px] flex flex-row"><GoDotFill className="mr-2 mt-[6px] w-[15px] h-[15px] text-primaryColor" />iamsarank@gmail.com</p>

                            </div>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="col-span-2 pl-20 box__shadows__2">
                <div className="mt-12 mb-[10px]">
                    <h3 className="text-[24px] leading-[30px] text-secondaryColor font-bold">
                        About
                    </h3>
                    <div className="pt-4 md:p-5">
                        <p className="text__para mt-1 text-[14px] flex flex-row">A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer
                            than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end,
                            and thus help the reader see the organization of the essay and grasp its main points.@gmail.com</p>
                    </div>
                </div>
                <div className="mt-1">
                    <h3 className="text-[24px] leading-[30px] text-secondaryColor font-bold">
                        Work Experience
                    </h3>
                    <ul className="pt-4 md:p-5">
                        <li className="mb-10">
                            <div className="mb-7">
                                <p className="text-[18px] leading-6 pb-3 font-bold text-primaryColor">
                                    Facebook
                                </p>
                                <p className="text-[14px] leading-5 font-bold text-textColor mb-1">
                                    Senior UI Developer  <span className="mx-5 font-medium"> | </span> <span className="text-textColor text-[13px] leading-1 font-semibold">
                                    2016-2018
                                </span> 
                                </p>
                                <p className=" text__para mt-1 text-[14px] flex flex-row">
                                the first section of a paragraph; should include the topic sentence and any other sentences 
                                at the beginning of the paragraph that give background information or provide a transition.
                                </p>
                            </div>

                            <div className="mb-7">
                                <p className="text-[18px] leading-6 pb-3 font-bold text-primaryColor">
                                    Facebook
                                </p>
                                <p className="text-[14px] leading-5 font-bold text-textColor mb-1">
                                    Senior UI Developer  <span className="mx-5 font-medium"> | </span> <span className="text-textColor text-[13px] leading-1 font-semibold">
                                    2016-2018
                                </span> 
                                </p>
                                <p className=" text__para mt-1 text-[14px] flex flex-row">
                                the first section of a paragraph; should include the topic sentence and any other sentences 
                                at the beginning of the paragraph that give background information or provide a transition.
                                </p>
                            </div>

                            <div className="mb-7">
                                <p className="text-[18px] leading-6 pb-3 font-bold text-primaryColor">
                                    Facebook
                                </p>
                                <p className="text-[14px] leading-5 font-bold text-textColor mb-1">
                                    Senior UI Developer  <span className="mx-5 font-medium"> | </span> <span className="text-textColor text-[13px] leading-1 font-semibold">
                                    2016-2018
                                </span> 
                                </p>
                                <p className=" text__para mt-1 text-[14px] flex flex-row">
                                the first section of a paragraph; should include the topic sentence and any other sentences 
                                at the beginning of the paragraph that give background information or provide a transition.
                                </p>
                            </div>

                            <div className="mb-7">
                                <p className="text-[18px] leading-6 pb-3 font-bold text-primaryColor">
                                    Facebook
                                </p>
                                <p className="text-[14px] leading-5 font-bold text-textColor mb-1">
                                    Senior UI Developer  <span className="mx-5 font-medium"> | </span> <span className="text-textColor text-[13px] leading-1 font-semibold">
                                    2016-2018
                                </span> 
                                </p>
                                <p className=" text__para mt-1 text-[14px] flex flex-row">
                                the first section of a paragraph; should include the topic sentence and any other sentences 
                                at the beginning of the paragraph that give background information or provide a transition.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )
};

export default UserDetails;
