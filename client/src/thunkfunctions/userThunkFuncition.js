import axios from "axios"
import { addUsers, setTotalItems, setUser } from "../redux/userslice";
import { toast } from 'react-toastify';
import { setLoading } from "../redux/loadingSlice";


//!Get All Users 
export function getAllUsers(page, limit) {
    return async function getAllUsersThunk(dispatch, getState) {
        try {
            dispatch(setLoading(true));
            const { data } = await axios.get(`https://novelti-assignment-server.vercel.app/api/v1/users?page=${page}&limit=${limit}`);
            dispatch(setLoading(false));
            if (data.success) {
                dispatch(addUsers(data.users));
                dispatch(setTotalItems(data.totalCount));
            }
        } catch (error) {
            dispatch(setLoading(false))
            toast.error(error.message);
        }
    }
}

//! Create Users
export function createUser(userData) {
    return async function createUserThunk(dispatch, getState) {
        try {
            dispatch(setLoading(true));
            const { data } = await axios.post("https://novelti-assignment-server.vercel.app/api/v1/user/new", userData);
            dispatch(setLoading(false));
            if (data.success) {
                toast.success(data.message);
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            dispatch(setLoading(false));
            toast.error(error.message)
        }
    }
}

//! Update Users 
export function updateUser(id, updateData) {
    return async function updateUserThunk(dispatch, getState) {
        try {
            dispatch(setLoading(true));
            const { data } = await axios.put(`https://novelti-assignment-server.vercel.app/api/v1/user/${id}`, updateData)
            dispatch(setLoading(false));
            if (data.success) {
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            dispatch(setLoading(false));
            toast.error(error.message);
        }
    }
}


//! Get User Details
export function getUserDetails(id) {
    return async function getUserDetailsThunk(dispatch, getState) {
        try {
            dispatch(setLoading(true));
            const { data } = await axios.get(`https://novelti-assignment-server.vercel.app/api/v1/user/${id}`);
            dispatch(setLoading(false));
            if (data.success) {
                dispatch(setUser(data.user));
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            dispatch(setLoading(false));
            toast.error(error.message);
        }
    }
}

//! Delete User
export function deleteUser(id) {
    return async function deleteUserThunk(dispatch, getState) {
        try {
            dispatch(setLoading(true));
            const { data } = await axios.delete(`https://novelti-assignment-server.vercel.app/api/v1/user/${id}`);
            dispatch(setLoading(false));
            if (data.success) {
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            dispatch(setLoading(false));
            toast.error(error.message);
        }
    }
}