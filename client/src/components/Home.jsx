import { Country, State } from "country-state-city";
import { useFormik } from "formik";
import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneDropDown from "./PhoneDropDown";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PublicIcon from '@mui/icons-material/Public';
import MapIcon from '@mui/icons-material/Map';
import SignpostIcon from '@mui/icons-material/Signpost';
import { formSchema } from "../schema/schema";
import { createUser } from "../thunkfunctions/userThunkFuncition";
import { useDispatch, useSelector } from "react-redux"
import Loader from "./Loader";


const Home = () => {
  // form initial values 
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address1: "",
    address2: "",
    state: "",
    country: "",
    zipCode: "",
  };

  // using dispatch
  const dispatch = useDispatch();

  // extracting data from the redux store 
  const { loading } = useSelector(state => state.loading);

  // mobile code state 
  const [selectedCountry, setSelectedCountry] = useState(null);

  // using formik for submitting form request 
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: formSchema,
    onSubmit: (value, { resetForm }) => {
      // patching the country code with mobile no.
      const finalMobile = selectedCountry.dial_code + value.mobile
      // adding the final mobile no. to the value object 
      value.mobile = finalMobile;
      // calling the function to make api call 
      dispatch(createUser(value));
      // to reset the form 
      resetForm()
    },
  });


  return (
    <>
      {
        loading ? (<Loader />) : (<main className="w-screen bg-slate-200 flex justify-center items-center">
          <div className="w-full sm:px-20 xl:px-40 2xl:px-[35rem] h-full p-4 mt-20">
            <h1 className="text-center font-semibold text-2xl tracking-wider">Create User</h1>
            <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
              {/* firstName */}
              <div className="w-full flex flex-col">
                <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-slate-500">
                  First Name
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <PersonIcon />
                  </span>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    className="border border-neutral-300 text-sm rounded-sm block w-full pl-10 p-2 outline-blue-500 autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)]"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {errors.firstName && touched.firstName && <p className="text-xs text-red-600 mt-2">{errors.firstName}</p>}
              </div>
              {/* lastName */}
              <div className="w-full flex flex-col">
                <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-slate-500">
                  Last Name
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <PersonIcon />
                  </span>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    className="border border-neutral-300 text-sm rounded-sm block w-full pl-10 p-2 outline-blue-500 autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)]"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {errors.lastName && touched.lastName && <p className="text-xs text-red-600 mt-2">{errors.lastName}</p>}
              </div>
              {/* emailid */}
              <div className="w-full flex flex-col">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-500">
                  Email ID
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <EmailIcon />
                  </span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email ID"
                    className="border border-neutral-300 text-sm rounded-sm block w-full pl-10 p-2 outline-blue-500 autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)]"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {errors.email && touched.email && <p className="text-xs text-red-600 mt-2">{errors.email}</p>}
              </div>
              {/* mobile  */}
              <div className="w-full flex flex-col">
                <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-slate-500">
                  Mobile
                </label>
                <div className="w-full relative flex justify-between items-center gap-2">
                  <span className="w-2/4">
                    <PhoneDropDown selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
                  </span>
                  <div className="w-2/4">
                    <span className="absolute inset-y-0 left-30 flex items-center pl-3 pointer-events-none">
                      <CallIcon />
                    </span>
                    <input
                      type="string"
                      id="mobile"
                      name="mobile"
                      placeholder="Mobile"
                      className="border border-neutral-300 text-sm rounded-sm block w-full pl-10 p-2 outline-blue-500 autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)]"
                      value={values.mobile}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
                {errors.mobile && touched.mobile && <p className="text-xs text-red-600 mt-2">{errors.mobile}</p>}
              </div>
              {/* address1 */}
              <div className="w-full flex flex-col">
                <label htmlFor="address1" className="block mb-2 text-sm font-medium text-slate-500">
                  Address 1
                </label>
                <div className="relative">
                  <span className="absolute top-2 left-0 flex items-center pl-3 pointer-events-none">
                    <LocationOnIcon />
                  </span>
                  <textarea
                    rows="1"
                    id="address1l"
                    name="address1"
                    placeholder="Address"
                    className="resize-none border border-neutral-300 text-sm rounded-sm block w-full pl-10 p-2 outline-blue-500 autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)]"
                    value={values.address1}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {errors.address1 && touched.address1 && <p className="text-xs text-red-600 mt-2">{errors.address1}</p>}
              </div>
              {/* address2 */}
              <div className="w-full flex flex-col">
                <label htmlFor="address2" className="block mb-2 text-sm font-medium text-slate-500">
                  Address 2
                </label>
                <div className="relative">
                  <span className="absolute top-2 left-0 flex items-center pl-3 pointer-events-none">
                    <LocationOnIcon />
                  </span>
                  <textarea
                    rows="1"
                    id="address2"
                    name="address2"
                    placeholder="Address"
                    className="resize-none border border-neutral-300 text-sm rounded-sm block w-full pl-10 p-2 outline-blue-500 autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)]"
                    value={values.address2}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {errors.address2 && touched.address2 && <p className="text-xs text-red-600 mt-2">{errors.address2}</p>}
              </div>
              {/* country */}
              <div className="w-full flex flex-col">
                <label htmlFor="country" className="block mb-2 text-sm font-medium text-slate-500">
                  Country
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <PublicIcon />
                  </span>
                  <select
                    id="country"
                    name="country"
                    className="border border-neutral-300 text-sm rounded-sm block w-full pl-10 p-2 outline-blue-500 autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)]"
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">Country</option>
                    {Country && Country.getAllCountries().map((item) => {
                      return <option key={item.isoCode} value={item.isoCode}>
                        {item.name}
                      </option>
                    })}
                  </select>
                </div>
                {errors.country && touched.country && <p className="text-xs text-red-600 mt-2">{errors.country}</p>}
              </div>
              {/* state  */}
              {values.country && (<div className="w-full flex flex-col">
                <label htmlFor="state" className="block mb-2 text-sm font-medium text-slate-500">
                  State
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <MapIcon />
                  </span>
                  <select
                    id="state"
                    name="state"
                    className="border border-neutral-300 text-sm rounded-sm block w-full pl-10 p-2 outline-blue-500 autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)]"
                    value={values.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">State</option>
                    {State && State.getStatesOfCountry(values.country).map((item) => {
                      return <option key={item.isoCode} value={item.isoCode}>
                        {item.name}
                      </option>
                    })}
                  </select>
                </div>
                {errors.state && touched.state && <p className="text-xs text-red-600 mt-2">{errors.state}</p>}
              </div>)}
              {/* zipCode */}
              <div className="w-full flex flex-col">
                <label htmlFor="zipCode" className="block mb-2 text-sm font-medium text-slate-500">
                  Zip Code
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <SignpostIcon />
                  </span>
                  <input
                    type="number"
                    rows="1"
                    id="zipCode"
                    name="zipCode"
                    placeholder="Zip Code"
                    className="border border-neutral-300 text-sm rounded-sm block w-full pl-10 p-2 outline-blue-500 autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)]"
                    value={values.zipCode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {errors.zipCode && touched.zipCode && <p className="text-xs text-red-600 mt-2">{errors.zipCode}</p>}
              </div>
              <button type="submit" className="bg-red-500 mt-4 w-full px-4 py-3 text-white font-semibold rounded-md">Submit</button>
            </form>
          </div>
        </main>)
      }
    </>
  );
};

export default Home;
