import User from '../models/UserSchema.js'

export const updateUser = async (req, res) => {
    const id = req.params.id

    try {
        const updatedUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true })

        res.status(200).json({ success: true, message: 'Successfully updated', data: updatedUser })
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to update' })
    }
}

export const deleteUser = async (req, res) => {
    const id = req.params.id

    try {
        await User.findByIdAndDelete(id)

        res.status(200).json({ success: true, message: 'Successfully deleted' })
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to delete' })
    }
}

export const getSingleUser = async (req, res) => {
    const id = req.params.id

    try {
        const user = await User.findById(id)

        res.status(200).json({ success: true, message: 'User Found', data: user })
    } catch (err) {
        res.status(404).json({ success: false, message: 'User Notfound' })
    }
}

export const getAllUser = async (req, res) => {
    const id = req.params.id

    try {
        const users = await User.find({}).select("-password")

        res.status(200).json({ success: true, message: 'User Found', data: users })
    } catch (err) {
        res.status(404).json({ success: false, message: ' Notfound' })
    }
};

export const getUserProfile = async (req, res) => {
    const userId = req.userId
    try {
        const user = await User.findById(userId)
        if(!user) {
            return res.status(404).json({success:false, message:'User not found'})
        }
        const {password, ...rest} = user._doc
        res.status(200).json({ success: true, message: 'Profile info is getting', data: { ...rest } })
    }
    catch (err) {
        res.status(500).json({ success: false, message: ' Something went wrong, cannot get' })
    }

}