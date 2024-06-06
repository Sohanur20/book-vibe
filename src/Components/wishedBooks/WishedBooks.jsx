/* eslint-disable no-unused-vars */

import { getWishlist } from "../LocalStore/localStorage";
import WishedBook from "../wishedBook/WishedBook";




const WishedBooks = () => {

    const wished = getWishlist()
    // console.log(wished)

    return (
        <div>
            {
                wished.map(wish => <WishedBook wish={wish} key={wish.bookId}></WishedBook>)
            }
        </div>
    );
};

export default WishedBooks;