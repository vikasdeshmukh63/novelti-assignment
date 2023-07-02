import { ITEMS_PER_PAGE } from "../../constants/constants";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



const Pagination = ({ handlePagination, page, setPage, totalItems }) => {
  // making an dynamic array which consist of the pages
  const totalPageDynamicArray = Array.from({ length: Math.ceil(totalItems / ITEMS_PER_PAGE) });

  // function to go on next page
  const goToNextPage = () => {
    if (page > totalPageDynamicArray.length - 1) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
  };

  // function to go on previous page
  const goToPreviousPage = () => {
    if (page <= 1) {
      setPage(totalPageDynamicArray.length);
    } else {
      setPage(page - 1);
    }
  };

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <div
          onClick={goToPreviousPage}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </div>
        <div
          onClick={goToNextPage}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </div>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium text-red-500">{(page - 1) * ITEMS_PER_PAGE + 1}</span> to{" "}
            <span className="font-medium text-red-500">{page * ITEMS_PER_PAGE > totalItems ? totalItems : page * ITEMS_PER_PAGE}</span> of{" "}
            <span className="font-medium text-red-500">{totalItems}</span> results
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <div onClick={goToPreviousPage} className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              <ArrowBackIosIcon className="h-5 w-5" aria-hidden="true" />
            </div>
            {totalPageDynamicArray.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    handlePagination(index + 1);
                  }}
                  aria-current="page"
                  className={`relative cursor-pointer border z-10 inline-flex items-center ${page === index + 1 ? "bg-red-500 text-white" : "bg-white text-gray-400"
                    } px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700`}
                >
                  {index + 1}
                </div>
              );
            })}
            <div onClick={goToNextPage} className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              <ArrowForwardIosIcon className="h-5 w-5" aria-hidden="true" />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
