/* eslint-disable react/prop-types */
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const BookCart = ({ book }) => {

    const { bookName, rating, author, image, tags, category, bookId } = book;


    return (
        <>

            <Link to={`/detailsBook/${bookId}`}>
                <div className="card p-2  border lg:w-[376px] h-[500px]">
                    <figure className=" p-10 rounded-lg bg-gray-300 ">
                        <img src={image} alt="" className="rounded-xl  lg:h-44  shadow-xl shadow-green-200" />
                    </figure>
                    <div className="card-body  ">

                        <div className="flex -ml-8">
                            {
                                tags.map(tag => <a className="lg:mr-10 bg-green-300 text-[#23BE0A] rounded-full p-2 btn" key={tag.bookId}>

                                    #{tag}

                                </a>)
                            }
                        </div>
                        <h2 className="card-title playfai lg:text-2xl font-bold" >{bookName}</h2>
                        <p className="work text-base font-medium text-[#131313CC]">By : {author}</p>

                        <div className="broder border-t border-dashed">
                            <div className="flex lg:flex-row flex-col lg:gap-52 mt-4
                        ">
                                <h2>{category}</h2>
                                <p className="flex items-center gap-4 ">{rating} <FaRegStar /></p>

                            </div>

                        </div>

                    </div>
                </div>

            </Link>


        </>
    );
};

export default BookCart;