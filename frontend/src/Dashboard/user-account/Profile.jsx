import React, { useState } from "react";
import { AiOutlineDelete } from 'react-icons/ai'


const Profile = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    gender: '',
    specialization: '',
    qualifications: [{ startingDate: "", endingDate: "", degree: "", university: "" }],
    experiences: [{ startingDate: "", endingDate: "", position: "", company: "", aboutwork: "" }],
    about: '',
    website: '',
    linkedIn: '',
    github: '',
    twitter: '',
    dribbble: '',
    photo: null
  })

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

  return (
    <section>
      <div className="px-5 mx-auto">
        <h2 className="text-secondaryColor font-bold text-[24px] leading-9 mb-10">
          Profile Information
        </h2>

        <form>
          <div className="grid grid-cols-2 gap-5 mb-5">
            <div>
              <p className="form__label">Name*</p>
              <input type="text" name="name" value={formData.name} placeholder="Full Name" className="form__input"
                onChange={handleInputChange} />
            </div>
            <div>
              <p className="form__label">Email*</p>
              <input type="text" name="email" value={formData.email} placeholder="Email"
                className="form__input" readOnly aria-readonly disabled={true} />
            </div>
          </div>


          <div className="grid grid-cols-2 gap-5 mb-5">
            <div>
              <p className="form__label">Phone*</p>
              <input type="text" name="phone" value={formData.phone} placeholder="Phone Number" onChange={handleInputChange}
                className="form__input" />
            </div>

            <div className="mb-5">
              <div>
                <p className="form__label">Gender*</p>
                <select name="gender" value={formData.gender} onChange={handleInputChange}
                  className="form__input py-3.5" >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <p className="form__label">About*</p>
            <textarea name="about" rows={5} value={formData.about} placeholder="Write about you" onChange={handleInputChange}
              className="form__input w-[50%]"></textarea>
          </div>

          <div className="grid grid-cols-2 gap-5 mb-5">
            <div>
              <p className="form__label">Destination*</p>
              <input type="text" name="specialization" value={formData.specialization} placeholder="Destination" onChange={handleInputChange}
                className="form__input" />
            </div>
            <div>
              <p className="form__label">Website</p>
              <input type="text" name="website" value={formData.website} placeholder="Website" onChange={handleInputChange}
                className="form__input" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-5 mb-5">
            <div>
              <p className="form__label">LinkedIn</p>
              <input type="text" name="linkedin" value={formData.linkedIn} placeholder="LinkedIn" onChange={handleInputChange}
                className="form__input " />
            </div>
            <div>
              <p className="form__label">Dribbble</p>
              <input type="text" name="dribbble" value={formData.dribbble} placeholder="Dribble" onChange={handleInputChange}
                className="form__input " />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-5 mb-5">
            <div>
              <p className="form__label">Twitter</p>
              <input type="text" name="twitter" value={formData.twitter} placeholder="Twitter" onChange={handleInputChange}
                className="form__input" />
            </div>
            <div>
              <p className="form__label">Github</p>
              <input type="text" name="github" value={formData.github} placeholder="Github" onChange={handleInputChange}
                className="form__input " />
            </div>
          </div>
          
          <div className="mb-5">
            <p className="form__label">Qualification*</p>
            {formData.qualifications?.map((item, index) => (
              <div>
                <div className="grid grid-cols-2 gap-5 mb-5">
                  <div>
                    <p className="form__label">Starting Date*</p>
                    <input type="date" name="startingDate" value={item.startingDate}
                      className="form__input" onChange='' />
                  </div>
                  <div>
                    <p className="form__label">Ending Date*</p>
                    <input type="date" name="endingDate" value={item.endingDate}
                      className="form__input" onChange='' />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5 mb-5">
                  <div>
                    <p className="form__label">Degree*</p>
                    <input type="text" name="degree" value={item.degree}
                      className="form__input" />
                  </div>
                  <div>
                    <p className="form__label">University*</p>
                    <input type="text" name="university" value={item.university}
                      className="form__input" />
                  </div>
                </div>

                <button className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer">
                  <AiOutlineDelete />
                </button>

              </div>
            ))}
            <button className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer">
              Add Qualification
            </button>
          </div>

          <div className="mb-5">
            <p className="form__label">Experiences*</p>
            {formData.experiences?.map((item, index) => (
              <div key={index}>
                <div>
                  <div className="grid grid-cols-2 gap-5 mb-5">
                    <div>
                      <p className="form__label">Starting Date*</p>
                      <input type="date" name="startingDate" value={item.startingDate}
                        className="form__input" />
                    </div>
                    <div>
                      <p className="form__label">Ending Date*</p>
                      <input type="date" name="endingDate" value={item.endingDate}
                        className="form__input" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-5 mb-5">
                    <div>
                      <p className="form__label">Position*</p>
                      <input type="text" name="position" value={item.position}
                        className="form__input" />
                    </div>
                    <div>
                      <p className="form__label">Company*</p>
                      <input type="text" name="company" value={item.company}
                        className="form__input" />
                    </div>
                  </div>
                  <div className="mb-5">
                    <p className="form__label">About Work*</p>
                    <textarea name="aboutwork" rows={3} value={formData.aboutwork} placeholder="Write about your work" onChange={handleInputChange}
                      className="form__input w-[50%]"></textarea>
                  </div>

                  <button className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer">
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>
            ))}
            <button className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer">
              Add Experience
            </button>
          </div>

          <div className="mb-5 flex items-center gap-3">
            {formData.photo && <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
              <img src={formData.photo} alt="" className="w-full rounded-full" />
            </figure>}

            <div className="relative w-[130px] h-[50px]">
              <input
                type="file"
                name="photo"
                id="customFile"
                onChange=""
                accept=".jpg, .png"
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />
              <label
                htmlFor="customFile"
                className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem]
                  text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
              >
                Upload Photo
              </label>
            </div>
          </div>
          <div className="mt-7 text-center">
            <button type="submit" onClick="" className="bg-primaryColor text-white text-[18px] leading-[30px] 
                    w-[50%] py-3 px-4 rounded-lg ">Update Profile</button>
          </div>

        </form >
      </div >
    </section >
  )
};

export default Profile;
