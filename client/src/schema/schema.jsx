import * as Yup from "yup";

export const formSchema = Yup.object({
    firstName: Yup.string().min(5).max(25).required("Please enter your First Name"),
    lastName: Yup.string().min(5).max(25).required("Please enter your Last Name"),
    email: Yup.string().email().required("Please enter your Email"),
    mobile: Yup.string().required("Please enter Mobile no."),
    address1: Yup.string().required("Please enter Address"),
    address2: Yup.string().required("Please enter Address"),
    state: Yup.string().required("Please select State"),
    country: Yup.string().required("Please select Country"),
    zipCode: Yup.number().positive("Zip Code cannot be negative").required("Please enter Zip Code"),
});