import { NavLink } from "react-router-dom";


const Navbar = () => {
  const links = <>
  
       <li> <NavLink to='/'> Home </NavLink> </li>
       <li> <NavLink to='/listedBooks'> ListedBooks </NavLink> </li>
       <li> <NavLink to='/pagesToRead'>Pages to Read </NavLink> </li>
       <li> <NavLink to='/about'>About Us </NavLink> </li>
       <li> <NavLink to='/contact'>Contact Us </NavLink> </li>
       
  </>
    return (
        <>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {links}
        
      </ul>
    </div>
    <a className="btn btn-ghost -ml-5 text-xl -mr-12 lg:text-2xl font-bold">Books <span className="text-gray-500">Arena</span> </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
         {links}
    </ul>
  </div>
  <div className="navbar-end ml-20 flex  gap-2 ">
    <a className="btn w-12 lg:w-24  btn-success lg:mr-5">SignIn</a>
    <a className="btn  w-12 lg:w-24  btn-outline">SignUp</a>
  </div>
</div>   
        </>
    );
};

export default Navbar;