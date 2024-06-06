import { Link } from 'react-router-dom';
import banner from '../../assets/pngwing 1.png'

const Banner = () => {



    return (
        <div className="hero  bg-gray-200 mx-auto container rounded-xl">
  <div className="hero-content flex-col lg:flex-row-reverse  lg:gap-72">
    <img className='p-10' src={banner} />
    <div>
      <h1 className="lg:text-5xl text-2xl font-bold playfair lg:text-start text-center">Books to freshen up <br /> your bookshelf</h1>
     
     <Link to= '/listedBooks'>
     <button className="btn bg-[#23BE0A] text-white border-none work mt-5 ml-14 lg:-ml-0">View The List</button>
     
     </Link>
    </div>
  </div>
</div>
    );
};

export default Banner;