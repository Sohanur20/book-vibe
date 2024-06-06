

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export const getReadBook = () => {
    let readBook = [];
    const storedReadBook = localStorage.getItem('readBook')
    if(storedReadBook){
        readBook = JSON.parse(storedReadBook);
    }

    return readBook;
}


export const saveReadBook = (book) => {
    let books = getReadBook()
    const isExist = books.find( b => b.bookId == book.bookId)
    if(isExist){
        return toast.warning("You have Already This Book")
    }
    else{
        toast.success("Books Added To Read List")
    }
 
    books.push(book)
    localStorage.setItem("readBook", JSON.stringify(books))
    
}




export const getWishlist = () => {
    let wishBook = [];
    const storedWish = localStorage.getItem( 'wishBook')
    if (storedWish) {
        wishBook = JSON.parse(storedWish);
    }

    return wishBook;
}




export const saveWishlist = (booK) => {

    let bookss = getReadBook()
    const isExists = bookss.find( b => b.bookId == booK.bookId)
    if(isExists){
        return toast.warning("You have Already This Book")
    }


    let books = getWishlist()
    const isExist = books.find(b => b.bookId == booK.bookId )
    if (isExist) {
        return toast.warn("You have Already read This Book")
    }
    else {
        toast.success("Books Added To wish List")
    }

    books.push(booK)

    localStorage.setItem("wishBook", JSON.stringify(books))

} 