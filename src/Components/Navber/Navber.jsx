import { NavLink } from "react-router-dom";


const Navber = () => {

    const navLink = <>

        <li>
            <NavLink className={({ isActive }) => isActive ? 'text-green-500  text-lg border border-green-300 p-2 rounded-xl' : 'font-normal'} to='/'>Home</NavLink>

        </li>

        <li>

            <NavLink className={({ isActive }) => isActive ? 'text-green-500 text-lg  border border-green-300 p-2 rounded-xl' : 'font-normal'} to='/listedBooks'>Listed Books</NavLink>

        </li>

        <li>
            <NavLink className={({ isActive }) => isActive ? 'text-green-500 text-lg  border border-green-300 p-2 rounded-xl'  : 'font-normal'} to='/pagesToRead'>Pages to Read</NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) => isActive ? 'text-green-500 text-lg  border border-green-300 p-2 rounded-xl'  : 'font-normal'} to='/about'>About</NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) => isActive ? 'text-green-500 text-lg  border border-green-300 p-2 rounded-xl'  : 'font-normal'} to='/contact'>Contacts</NavLink>
        </li>


    </>



    return (
        <div>
            <div className="navbar bg-base-100 work ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            {navLink}




                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl work font-bold text-purple-400">Book<span className="text-red-500">Vibe</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal px-1 gap-6 ">


                        {navLink}

                    </ul>



                </div>
                <div className="navbar-end gap-4 ">
                    <a className="btn bg-[#23BE0A] text-white hidden lg:block p-4">Sign In</a>
                    <a className="btn bg-[#59C6D2] text-white border-none">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Navber;