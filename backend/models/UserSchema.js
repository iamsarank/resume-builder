import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: Number },
    photo: { type: String },
    gender: { type: String, enum: ["male", "female", "other"] },
    about: { type: String },
    specialization: { type: String },
    website: { type: String },
    linkedIn: { type: String },
    dribbble: { type: String },
    github: { type: String },
    twitter: { type: String },
    qualifications: {
        type: Array,
    },
    experiences: {
        type: Array
    },
    expertise: {
        type: Array
    },
    skills: {
        type: Array
    },

});

export default mongoose.model("User", UserSchema);