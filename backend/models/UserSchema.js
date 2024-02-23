import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: Number },
    photo: { type: String },
    gender: { type: String, enum: ["male", "female", "other"] },
    website: { type: String },
    about: { type: String },
    specialization: { type: String },
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
    sociallinks: {
        type: Array
    }
});

export default mongoose.model("User", UserSchema);