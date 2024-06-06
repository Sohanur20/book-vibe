/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from "react-router-dom";
import { getReadBook } from "../LocalStore/localStorage";


const LocalData = ({  selectSort}) => {



    
  
        const [readBook,setReadBook]=useState([])
        const data = getReadBook();
        
        useEffect(()=>{
            if(selectSort){
                if(selectSort=="totalPages"){
                    const TotalPageNewData= data.sort((a, b) => b.totalPages - a.totalPages);
                    setReadBook(TotalPageNewData)
                   return
                } 
                else if(selectSort=="rating"){
                    const ratingNewData= data.sort((a, b) => b.rating - a.rating);
                    setReadBook(ratingNewData)
                    return
                } 
                else{
                    const YearNewData= data.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
                    setReadBook(YearNewData)
                    return
                }
                
            }else{
                setReadBook(data)
            }
    
        },[selectSort])
    console.log(readBook)

    



    // return (

    //     <div className=' container mx-auto flex items-center ml-5 mb-5 bg-gradient-to-br '>
    //         <div className="p-4 items-center justify-center lg:w-[680px] w-[400px] rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
    //             <img className="lg:block lg:w-4/12 w-full h-40 text-center rounded-lg" alt="art cover" loading="lazy" src={singleReadBook.image} />
    //             <div className="sm:w-8/12 pl-0 p-5">
    //                 <div className="space-y-2">
    //                     <div className="space-y-4 ">
    //                         <h4 className="text-2xl text-black font-bold  playfair text-justify">
    //                             {singleReadBook.bookName}
    //                         </h4>
    //                     </div>

    //                     <p className="work text-base font-medium text-[#131313CC]">By : {singleReadBook.author}</p>

    //                     {
    //                         singleReadBook.tags.map(tag => <a className="mr-10 bg-green-100  p-1 rounded-full text-[#23BE0A]" key={tag.bookId}>

    //                             #{tag}

    //                         </a>)


    //                     }
    //                     <p className="flex items-center gap-2"><FaLocationDot />Year of Publishing : {singleReadBook.yearOfPublishing}</p>

    //                     <div className="flex  flex-col gap-2 justify-around work text-base">
    //                         <p className="flex  items-center gap-2 bg-[#d2e1f2] text-[#328EFF] rounded-lg  p-2"><FaUserGroup />Publisher : {singleReadBook.publisher}</p> 
    //                         <p className="flex items-center gap-2 bg-[#f2dfc3] text-[#a3793b] rounded-lg p-2"><MdOutlineContactPage />Page:{singleReadBook.totalPages}</p>
    //                         <Link to={`/detailsBook/${singleReadBook.bookId}`}>

    //                             <button className="btn btn-success text-white text-base work">View Details</button>
    //                         </Link>

    //                     </div>

    //                 </div>
    //             </div>
    //         </div>
    //     </div>


    // );


    return (
        <div className="space-y-3 mt-4 ">
            {readBook?.map(item => (
                <div key={item?.id} className="max-w-[1200px] mx-auto border rounded-lg gap-3 grid grid-cols-1 sm:grid-cols-2">
                    <div className="flex justify-center items-center rounded-xl bg-[#1313130D]">
                        <img className="lg:w-[350px] h-[300px] bg-gray-300 p-10" src={item?.image} alt="" />
                    </div>
                    <div className="p-8 space-y-5 ">
                        <h1  className="text-2xl text-black font-bold  playfair text-justify">{item?.bookName}</h1>
                        <p>By: <span>{item?.author}</span></p>
                        <div className="flex gap-2">
                            <p className="font-bold ">Tags: 
                                <span className="text-[#23BE0A] bg-orange-400 mr-3 ml-3 bg-opacity-15 rounded-xl ">#{item?.tags[0]}</span>
                                <span className="text-[#23BE0A] bg-orange-400 bg-opacity-15 rounded-xl">#{item?.tags[1]}</span>
                                
                                <p className=" lg:flex items-center gap-2"> <FaLocationDot />Year Of Publishing: <span>{item?.yearOfPublishing}</span></p>

                            </p>
                            
                            
                          
                        </div>
                        <div className="flex text-[#13131399] space-x-10">
                            <div className="flex space-x-3 items-center">
                              
                                <p className="lg:flex items-center gap-2"><FaUserGroup /> Publisher: <span>{item?.publisher}</span></p>
                            </div>
                            <div className="flex space-x-3 items-center">
                            
                                <p className="flex items-center gap-2"> <MdOutlineContactPage /> Page: <span>{item?.totalPages}</span></p>
                            </div>
                        </div>
                        <div className="flex gap-4 flex-col lg:flex-row">
                            <button className="border rounded-lg p-1 ml-2 bg-[#328EFF26]">Category: {item?.category}</button>
                            <button className="border rounded-lg p-1 ml-2 bg-[#FFAC3326]">Rating: {item?.rating}</button>
                            <Link to={`/detailsBook/${item.bookId}`}>
                             <button className="btn btn-success text-white text-base work">View Details</button>
                        </Link>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};











export default LocalData;