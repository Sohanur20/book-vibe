/* eslint-disable react/prop-types */
import LocalData from "../LocalData/LocalData";
import { getReadBook } from "../LocalStore/localStorage";




const ReadBooks = ({selectSort }) => {

    const readbook = getReadBook()
    // console.log(readbook)

    return (
        <div>
            {
                readbook.map(singleReadBook =>


                    <LocalData selectSort={selectSort} key={singleReadBook.bookId} singleReadBook={singleReadBook}></LocalData>


                )
            }
        </div>
    );
};

export default ReadBooks;