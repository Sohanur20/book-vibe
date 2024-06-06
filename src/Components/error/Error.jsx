import { Link } from "react-router-dom";


const Error = () => {


    return (
        <div className="hero min-h-screen" style={{backgroundImage:'url(https://i.ibb.co/9N9gSgj/pngwing-com-5.png)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
 
    <div className="">
     
      <Link to= '/'>
      <button className="btn  text-4xl font-bold h-32 w-42">Go Home</button>
      </Link>
    </div>
  </div>

    );
};

export default Error;