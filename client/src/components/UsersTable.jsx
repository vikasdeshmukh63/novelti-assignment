import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getAllUsers } from '../thunkfunctions/userThunkFuncition';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Pagination from './Pagination';
import Loader from './Loader';
import { ITEMS_PER_PAGE } from '../../constants/constants';

// table heading array 
const tableHead = [
    "Name",
    "Email",
    "Mobile",
    "Address 1",
    "Address 2",
    "Country",
    "State",
    "Zip Code",
    "Update",
    "Delete"
]


const UsersTable = () => {
    // using dispatch
    const dispatch = useDispatch();
    // page state 
    const [page, setPage] = useState(1);

    // extracting data from redux store 
    const { usersData, totalItems } = useSelector(state => state.user);
    const { loading } = useSelector(state => state.loading);

    //function to handle pagination
    const handlePagination = (page) => {
        setPage(page);
    };

    // function to handle delete user 
    const handleDeleteUser = async (id) => {
        await dispatch(deleteUser(id));
        dispatch(getAllUsers(page, ITEMS_PER_PAGE));
    };

    useEffect(() => {
        dispatch(getAllUsers(page, ITEMS_PER_PAGE));
    }, [dispatch, page]);

    useEffect(() => {
        setPage(1)
    }, [totalItems]);


    return (
        <>
        {
            loading ? (<Loader/>):(<div className="p-5 h-full">
            <h1 className="mt-20 text-center font-semibold text-2xl tracking-wider mb-10">List of users</h1>
            <div className="overflow-auto shadow-lg">
                <table className="w-full">
                    <thead className="bg-gray-200 border-b-2 border-gray-200">
                        <tr>
                            {tableHead.map((item, index) => {
                                return <th className="p-3 text-sm font-semibold tracking-wide text-center whitespace-nowrap" key={index}>{item}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody className="divide-y-2 divide-gray-300">
                        {
                            usersData && usersData.map((item, index) => {
                                return <tr key={index} className={`${index % 2 === 0 ? "bg-white" : "bg-gray-100"}`}>
                                    <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">{`${item.firstName} ${item.lastName}`}</td>
                                    <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">{item.email}</td>
                                    <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">{item.mobile}</td>
                                    <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">{item.address1}</td>
                                    <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">{item.address2}</td>
                                    <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">{item.country}</td>
                                    <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">{item.state}</td>
                                    <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">{item.zipCode}</td>
                                    <td className="w-20 p-3 text-sm text-lime-500 cursor-pointer text-center">
                                        <Link to={`/user/update/${item._id}`}><EditIcon /></Link>
                                    </td>
                                    <td className="w-20 p-3 text-sm text-red-500 cursor-pointer text-center">
                                        <DeleteIcon onClick={() => { handleDeleteUser(item._id) }} />
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
                <Pagination handlePagination={handlePagination} page={page} setPage={setPage} totalItems={totalItems}/>
        </div>)
        }
        </>
    )
}

export default UsersTable
