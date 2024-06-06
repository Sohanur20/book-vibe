/* eslint-disable react/prop-types */

import { FaLocationDot, FaUserGroup } from "react-icons/fa6";
import { MdOutlineContactPage } from "react-icons/md";




const WishedBook = ({ wish }) => {


    return (
        <div className='flex items-center m-5 bg-gradient-to-br'>
            <div className="p-4 items-center justify-center w-[680px] rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                <img className="  block w-4/12 h-40 rounded-lg" alt="art cover" loading="lazy" src={wish.image} />
                <div className="sm:w-8/12 pl-0 p-5">
                    <div className="space-y-2">
                        <div className="space-y-4 ">
                            <h4 className="text-2xl text-black font-bold  playfair text-justify">
                                {wish.bookName}
                            </h4>
                        </div>

                        <p className="work text-base font-medium text-[#131313CC]">By : {wish.author}</p>

                        {
                            wish.tags.map(tag => <a className="mr-10 bg-green-100  p-1 rounded-full text-[#23BE0A]" key={tag.Id}>

                                #{tag}

                            </a>)


                        }
                        <p className="flex items-center gap-2"><FaLocationDot />Year of Publishing : {wish.yearOfPublishing}</p>

                        <div className="flex justify-around work text-base">
                            <p className="flex items-center gap-2 bg-[#d2e1f2] text-[#328EFF] rounded-lg p-2"><FaUserGroup />Publisher :{wish.publisher}</p>
                            <p className="flex items-center gap-2 bg-[#f2dfc3] text-[#a3793b] rounded-lg p-2"><MdOutlineContactPage />Page:{wish.totalPages}</p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishedBook;