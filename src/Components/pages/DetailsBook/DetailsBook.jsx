import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { saveReadBook, saveWishlist } from "../../LocalStore/localStorage";




const DetailsBook = () => {

    const { id } = useParams();

    const [books, setBooks] = useState(null)


    useEffect(() => {

        fetch('/Data.json')
            .then(res => res.json())
            .then(data => {


                const foundBook = data.filter(book => book.bookId === parseInt(id));
                setBooks(foundBook[0]);

                // console.log(data)
            })


    }, [id])


    const handleRead = (books) => {
        saveReadBook(books)

    }
    const handleWished = (books) => {
        saveWishlist(books)

    }


    return (
        <div>


            {books ? (
                <div>

                    <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                        <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                            <img src={books.image
                            } alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                            <div className="p-6 space-y-2 lg:col-span-5">
                                <h2 className="card-title playfai text-2xl font-bold" >{books.bookName}</h2>
                                <p className="work text-base font-medium text-[#131313CC]">By : {books.author}</p>
                                <div className="border-t border-b ">
                                    <h2 className="m-3"> {books.category
                                    }</h2>

                                </div>

                                <p className="work text-base font-medium text-[#131313CC] ">Review : {books.review
                                }</p>

                                <div>
                                    {
                                        books.tags.map(tag => <a className="mr-10  bg-green-300 text-[#23BE0A] rounded-full p-2 btn" key={tag.bookId}>

                                            #{tag}

                                        </a>)
                                    }
                                </div>

                                <div className="border-t  ">
                                    <div className="mt-5 space-y-2 m-2 text-base font-normal work">
                                        <p>Number of Pages : <span className="font-bold text-sm">{books.totalPages}</span></p>
                                        <p>Publisher : <span className="font-bold text-sm">{books.publisher
                                        }</span></p>
                                        <p>Year of Publishing : <span className="font-bold text-sm">{books.yearOfPublishing
                                        }</span></p>
                                        <p>Rating : <span className="font-bold text-sm">{books.rating

                                        }</span></p>


                                        <div className="flex gap-5">
                                           <button  onClick={() =>handleRead(books)} className="btn btn-outline ">Read</button>
                                            <button onClick={() =>handleWished(books)} className="btn bg-[#59C6D2] text-white border-none">Wishlist</button>

                                        </div>


                                    </div>

                                </div>

                            </div>
                        </a>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}


        </div>
    );
};

export default DetailsBook;