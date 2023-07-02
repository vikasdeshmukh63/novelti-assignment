import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPhoneCodes } from "../thunkfunctions/phoneThunkFunction";
import Loader from "./Loader";



const PhoneDropDown = ({ selectedCountry, setSelectedCountry,initialInput}) => {

  // extracting data from the redux store 
  const { phoneData } = useSelector(state => state.phone);
  const {loading} = useSelector(state=>state.loading);

  // using dispatch
  const dispatch = useDispatch()

  // function to set the selected country 
  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  useEffect(() => {
    if (!phoneData?.length) {
      dispatch(getPhoneCodes());
    }
  }, [dispatch, phoneData]);


  return (
    <>
    {
      loading ? (<Loader/>) : (<Select
        options={phoneData}
        getOptionLabel={(option) => `${option.dial_code} ${option.name}`}
        getOptionValue={(option) => option.dial_code}
        value={selectedCountry}
        onChange={handleCountryChange}
        defaultInputValue={initialInput ? initialInput?.dial_code : "Select..."}
        isSearchable
      />)
    }
    </>
  );
};



export default PhoneDropDown;
