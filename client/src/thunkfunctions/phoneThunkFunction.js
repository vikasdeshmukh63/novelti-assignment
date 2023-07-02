import { toast } from "react-toastify";
import { addCodes } from "../redux/phoneSlice";
import axios from "axios";
import {setLoading} from "../redux/loadingSlice";

//! Get phone codes
export function getPhoneCodes() {
    return async function getPhoneCodesThunk(dispatch, getState) {
        try {
            dispatch(setLoading(true));
            const { data } = await axios.get("/phonecodes");
            dispatch(setLoading(false));
            if (data.success) {
                dispatch(addCodes(data.phoneCodes))
            }
        } catch (error) {
            dispatch(setLoading(false));
            toast.error(error.message);
        }
    }
}