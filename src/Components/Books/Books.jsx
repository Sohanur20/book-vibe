/* eslint-disable react/prop-types */


import BookCart from "../BookCart/BookCart";


const Books = ({books}) => {
    // console.log(books)

   
    return (
        <>

            <div className="space-y-2 text-center mt-10 "> 
                <h2 className="text-3xl font-bold work  ">Books</h2>
              
            </div>


            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 m-10"> 



                {
                    books?.map(book => <BookCart key={book.bookId} book={book}></BookCart>)
                }


            </div>

        </>


    );
};

export default Books;