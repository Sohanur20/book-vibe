/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ReadBooks from "../Readbooks/ReadBooks";
import WishedBooks from "../wishedBooks/WishedBooks";




const ListedBooks = () => {

    const [tabIndex, setTabIndex] = useState(0)
    const [selectSort,setSelectSort]=useState("")

    return (
        <div className="container mx-auto">
            <div className="bg-slate-400 mx-20 rounded-xl">
                <h2 className="font-bold text-3xl text-center work m-5 p-8 ">BOOK</h2>
            </div>





            <div  className="text-center mb-10" >
                   <div > 
                    <select id="sort" onChange={(e)=>setSelectSort(e.target.value)}  className=" bg-blue-600 text-white  outline-0 px-3 py-2 rounded-lg"> 
                        <option value="" >Sort by</option>
                        <option value="totalPages">Number of page</option>
                        <option value="rating">rating</option>
                        <option value="yearOfPublishing">Year</option>
                    </select>
                    </div>

                </div>



            {/* tab */}
            <div className="lg:-mt-16">

                <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                    <div>
                        <Link to=''
                            onClick={() => setTabIndex(0)}

                        >


                            <a rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900 `}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                </svg>
                                <span>Read Books</span>
                            </a>


                        </Link>

                    </div>

                    <div>
                        <Link

                         
                            onClick={() => setTabIndex(1)}

                        >
                            <a rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900 `}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                                </svg>
                                <span>Wishlist Books</span>
                            </a>
                          
                        </Link>

                        
                    </div>

                 

                </div>
             
            </div>

            {tabIndex == 0 && <ReadBooks  selectSort={selectSort}></ReadBooks>}
            {tabIndex == 1 && <WishedBooks/>}
        

        </div>
    );
};

export default ListedBooks;