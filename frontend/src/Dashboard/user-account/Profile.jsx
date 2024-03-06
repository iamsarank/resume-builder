import React, { useState, useEffect } from "react";
import { AiOutlineDelete } from 'react-icons/ai'
import uploadImageToCloudinary from "../../utis/uploadCloudinary";
import { BASE_URL, token } from "../../config";
import { toast } from 'react-toastify';


const Profile = ({ userData }) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    gender: '',
    specialization: '',
    qualifications: [],
    experiences: [],
    skills: [],
    expertise: [],
    about: '',
    website: '',
    linkedIn: '',
    github: '',
    twitter: '',
    dribbble: '',
    photo: null
  })

  useEffect(() => {
    setFormData({
      name: userData?.name,
      email: userData?.email,
      phone: userData?.phone,
      about: userData?.about,
      gender: userData?.gender,
      specialization: userData?.specialization,
      qualifications: userData?.qualifications,
      experiences: userData?.experiences,
      skills: userData?.skills,
      expertise: userData?.expertise,
      website: userData?.website,
      linkedIn: userData?.linkedIn,
      github: userData?.github,
      twitter: userData?.twitter,
      dribbble: userData?.dribbble,
      photo: userData?.photo,
    })
  }, [userData])

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

  const handleFileInputChange = async event => {
    const file = event.target.files[0];
    const data = await uploadImageToCloudinary(file);
    console.log(data);
    setFormData({ ...formData, photo: data?.url })
  };

  const updateProfileHandler = async e => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/users/${userData._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (!res.ok) {
        throw Error(result.message);
      }
      toast.success(result.message);
    } catch (err) {
      toast.error(err.message)
    }
  }

  const addItem = (key, item) => {
    setFormData(prevFormData => ({ ...prevFormData, [key]: [...prevFormData[key], item] }))
  }

  const handleReusableInputChangeFunc = (key, index, event) => {
    const { name, value } = event.target;

    setFormData(prevFormData => {
      const updateItems = [...prevFormData[key]];
      updateItems[index][name] = value;
      return {
        ...prevFormData,
        [key]: updateItems,
      }
    })
  }

  const deleteItem = (key, index) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [key]: [...prevFormData[key].filter((_, i) => i !== index)]
    }))
  }

  const addQualification = e => {
    e.preventDefault();
    addItem("qualifications", {
      startingDate: "",
      endingDate: "",
      degree: "",
      university: "",
    });
  }

  const handleQualificationChange = (event, index) => {
    handleReusableInputChangeFunc("qualifications", index, event);
  }

  const deleteQualification = (e, index) => {
    e.preventDefault()
    deleteItem('qualifications', index)
  }

  const addExperiences = e => {
    e.preventDefault();
    addItem("experiences", { startingDate: "", endingDate: "", position: "", company: "", aboutwork: "" });
  }

  const handleExperienceChange = (event, index) => {
    handleReusableInputChangeFunc("experiences", index, event);
  }

  const deleteExperience = (e, index) => {
    e.preventDefault()
    deleteItem('experiences', index)
  }

  const addSkills = e => {
    e.preventDefault();
    addItem("skills", { skills: "" });
  }

  const handleSkillChange = (event, index) => {
    handleReusableInputChangeFunc("skills", index, event);
  }

  const deleteSkills = (e, index) => {
    e.preventDefault()
    deleteItem('skills', index)
  }

  const addExpertise = e => {
    e.preventDefault();
    addItem("expertise", { expertise: "" });
  }

  const handleExpertiseChange = (event, index) => {
    handleReusableInputChangeFunc("expertise", index, event);
  }

  const deleteExpertise = (e, index) => {
    e.preventDefault()
    deleteItem('expertise', index)
  }

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
                      className="form__input" onChange={e => handleQualificationChange(e, index)} />
                  </div>
                  <div>
                    <p className="form__label">Ending Date*</p>
                    <input type="date" name="endingDate" value={item.endingDate}
                      className="form__input" onChange={e => handleQualificationChange(e, index)} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5 mb-5">
                  <div>
                    <p className="form__label">Degree*</p>
                    <input type="text" name="degree" value={item.degree}
                      className="form__input" onChange={e => handleQualificationChange(e, index)} />
                  </div>
                  <div>
                    <p className="form__label">University*</p>
                    <input type="text" name="university" value={item.university}
                      className="form__input" onChange={e => handleQualificationChange(e, index)} />
                  </div>
                </div>

                <button className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer" onClick={e => deleteQualification(e, index)}>
                  <AiOutlineDelete />
                </button>

              </div>
            ))}
            <button onClick={addQualification} className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer">
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
                        className="form__input" onChange={e => handleExperienceChange(e, index)} />
                    </div>
                    <div>
                      <p className="form__label">Ending Date*</p>
                      <input type="date" name="endingDate" value={item.endingDate}
                        className="form__input" onChange={e => handleExperienceChange(e, index)} />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-5 mb-5">
                    <div>
                      <p className="form__label">Position*</p>
                      <input type="text" name="position" value={item.position}
                        className="form__input" onChange={e => handleExperienceChange(e, index)} />
                    </div>
                    <div>
                      <p className="form__label">Company*</p>
                      <input type="text" name="company" value={item.company}
                        className="form__input" onChange={e => handleExperienceChange(e, index)} />
                    </div>
                  </div>
                  <div className="mb-5">
                    <p className="form__label">About Work*</p>
                    <textarea name="aboutwork" rows={3} value={formData.aboutwork} placeholder="Write about your work" onChange={e => handleExperienceChange(e, index)}
                      className="form__input w-[50%]" ></textarea>
                  </div>

                  <button onClick={e => deleteExperience(e, index)} className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer">
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>
            ))}
            <button onClick={addExperiences} className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer">
              Add Experience
            </button>
          </div>
          <div className="grid grid-cols-2 gap-5 mb-5">
            <div className="mb-5">
              <p className="form__label">Expertise*</p>
              {formData.expertise?.map((item, index) => (
                <div key={index}>
                  <div>
                    <p className="form__label"></p>
                    <input type="text" name="expertise" value={item.expertise} placeholder="Expertise" onChange={e => handleExpertiseChange(e, index)}
                      className="form__input" />

                    <button onClick={e => deleteExpertise(e, index)} className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer">
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
              ))}

              <button onClick={addExpertise} className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer">
                Add Expertise
              </button>
            </div>

            <div className="mb-5">
              <p className="form__label">Skills*</p>
              {formData.skills?.map((item, index) => (
                <div key={index}>
                  <div>
                    <p className="form__label"></p>
                    <input type="text" name="skills" value={item.skills} placeholder="Skills" onChange={e => handleSkillChange(e, index)}
                      className="form__input" />

                    <button onClick={e => deleteSkills(e, index)} className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer">
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
              ))}

              <button onClick={addSkills} className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer">
                Add Skills
              </button>
            </div>

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
                onChange={handleFileInputChange}
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
            <button type="submit" onClick={updateProfileHandler} className="bg-primaryColor text-white text-[18px] leading-[30px] 
                    w-[50%] py-3 px-4 rounded-lg ">Update Profile</button>
          </div>

        </form >
      </div >
    </section >
  )
};

export default Profile;
