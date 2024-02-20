import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, unique: true },
    photo: { type: String },
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