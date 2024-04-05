
const Header = () => {
    return (
        <div className="lg:my-8">
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Home</a></li>
      <li><a>Recipes</a></li>
      <li><a>About</a></li>
      <li><a>Search</a></li>
        
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl text-[#150B2B] font-bold">Recipe Calories</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>Recipes</a></li>
      <li><a>About</a></li>
      <li><a>Search</a></li>
      
    </ul>
  </div>
  <div className="navbar-end">
    <div className="flex flex-row gap-4">
    <label className="input hidden rounded-3xl text-[#150B2BB2] text-base input-bordered lg:flex items-center gap-2 bg-[#150b2b29]">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
  <input type="text" className="grow bg-[#150B2B0D]" placeholder="Search" />
</label>
<div className="btn rounded-full bg-green-500 flex justify-center items-center p-2">
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M23.9761 24.9668C23.0444 23.7333 21.8391 22.7329 20.455 22.0446C19.0709 21.3562 17.5459 20.9987 16.0001 21.0001C14.4543 20.9987 12.9292 21.3562 11.5451 22.0446C10.1611 22.7329 8.95571 23.7333 8.02406 24.9668M23.9761 24.9668C25.7941 23.3497 27.0762 21.2182 27.655 18.8549C28.2337 16.4916 28.0804 14.0082 27.2153 11.7341C26.3503 9.45992 24.8144 7.50246 22.8113 6.12129C20.8081 4.74012 18.4325 4.00049 15.9994 4.00049C13.5663 4.00049 11.1906 4.74012 9.18753 6.12129C7.18443 7.50246 5.6485 9.45992 4.78344 11.7341C3.91838 14.0082 3.76506 16.4916 4.34382 18.8549C4.92257 21.2182 6.20606 23.3497 8.02406 24.9668M23.9761 24.9668C21.7814 26.9243 18.9409 28.0043 16.0001 28.0001C13.0588 28.0046 10.219 26.9246 8.02406 24.9668M20.0001 13.0001C20.0001 14.061 19.5786 15.0784 18.8285 15.8285C18.0783 16.5787 17.0609 17.0001 16.0001 17.0001C14.9392 17.0001 13.9218 16.5787 13.1716 15.8285C12.4215 15.0784 12.0001 14.061 12.0001 13.0001C12.0001 11.9392 12.4215 10.9218 13.1716 10.1717C13.9218 9.42152 14.9392 9.00009 16.0001 9.00009C17.0609 9.00009 18.0783 9.42152 18.8285 10.1717C19.5786 10.9218 20.0001 11.9392 20.0001 13.0001Z" stroke="#150B2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Header;