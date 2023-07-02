const User = require("../model/userModel");

//! Create User Controller
const createUser = async (req, res) => {
    try {
        //extracting data from req.body
        const { email, mobile } = req.body;

        // checking is user already present
        const existingUser = await User.findOne({ $or: [{ email }, { mobile }] });

        // if user found
        if (existingUser) {
            return res.json({
                message: "User with this email or phone is Already Exist",
                success: false,
            });
        }

        // creating user
        const user = await User.create(req.body);

        // sending created user to client
        res.json({
            message: "User created successfully",
            success: true,
            user,
        });
    } catch (error) {
        res.json({
            message: error.message,
            success: false,
        });
    }
};

//! Get user controller
const getUser = async (req, res) => {
    // to get all user
    let query = User.find({});

    //to get users by page no. and limit
    if (req.query.page && req.query.limit) {
        const limit = Number(req.query.limit);
        const page = Number(req.query.page);
        query.skip(limit * (page - 1)).limit(limit);
    }

    try {
        const users = await query.exec();
        //counting documents afeter filtering
        const totalCount = await User.countDocuments(query.getFilter());
        // setting totalCount value to client headers
        res.set("X-Total-Count", totalCount);

        // sending searched data to client
        res.json({
            message: "User fetched Successfully",
            success: true,
            users,
            totalCount,
        });

    } catch (error) {
        res.json({
            message: error.message,
            success: false,
        });
    }
};

//!Update user controller
const updateUser = async (req, res) => {
    try {
        // extracting id from params
        const id = req.params.id;

        // checking for user presence in database
        const existingUser = await User.findById(id);

        // if user not found
        if (!existingUser) {
            return res.json({
                message: "User not found",
                success: false,
            });
        }

        // updating user
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

        // sending updated user to client
        res.json({
            message: "User updated successfully",
            success: true,
            updatedUser,
        });

    } catch (error) {
        res.json({
            message: error.message,
            success: false,
        });
    }
};

//! Delete user controller
const deleteUser = async (req, res) => {
    try {
        // extracting id from params
        const id = req.params.id;

        // checking for user presence in database
        const user = await User.findById(id);

        // if user not found
        if (!user) {
            return res.json({
                message: "User not found",
                success: false,
            });
        }

        // deleting user
        await User.findByIdAndDelete(id);

        res.json({
            message: "User deleted successfully",
            success: true,
        });
    } catch (error) {
        res.json({
            message: error.message,
            success: false,
        });
    }
};

//! get user details
const getUserDetails = async (req, res) => {
    try {
        // extracting id from params
        const id = req.params.id;

        // checking for user presence in database
        const user = await User.findById(id);

        // if user not found
        if (!user) {
            return res.json({
                message: "User not found",
                success: false,
            });
        }

        // if user found then sending to client
        res.json({
            message: "User fetched successfully",
            success: true,
            user,
        });

    } catch (error) {
        res.json({
            message: error.message,
            success: false,
        });
    }
};

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser,
    getUserDetails
};
