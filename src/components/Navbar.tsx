import { Switch } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { useAuth } from '../AuthContext';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { loggedIn, login, logout } = useAuth();
  const [loginState, setLoginState] = useState(false);
  

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    console.log('loginState', loggedIn);
  }, [loginState]);

  return (


    <nav className="w-screen  h-[90px] border-gray-200  bg-[#0F0F0F] ">
      <div className="w-screen flex-row p-6 h-[90px] flex flex-wrap items-center justify-between">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">

          <div className="flex flex-row self-center font-[500] scale-y-[0.95] tracking-[1px]  font-customFont dark:text-white">THE <div className='bg-white text-black font-semibold mx-1 px-[1.4px]'>PRODUCT</div> PLATFORM</div>
        </a>
        <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="flex flex-row gap-1 items-center">
          <div>Login Test:</div>
          <Switch
            checked={loginState}
            onChange={()=>{
              setLoginState(!loginState);
              if(loginState){
                logout();
              }else{
                login();
              }
            
            }}
            className={`${loginState ? 'bg-green-700' : 'bg-gray-700'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${loginState ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        </div>
        <div className="hidden  w-full md:block md:w-auto " id="navbar-dropdown">

          <ul className="flex items-center flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0    border-gray-700">

            <li>
              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex bg-[#0F0F0F] text-gray-400 items-center justify-between w-full py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto  md:dark:hover:text-blue-500  dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent text-[17px]">Learn <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
              </svg></button>

              <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                  </li>
                </ul>
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </div>
              </div>
            </li>
            <li>
              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex bg-[#0F0F0F] text-gray-400 items-center justify-between w-full py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto  md:dark:hover:text-blue-500  dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent text-[17px]">Practice <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
              </svg></button>

              <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                  </li>
                </ul>
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </div>
              </div>
            </li>
            <li>
              <img className='h-10 w-10' src="https://s3-alpha-sig.figma.com/img/75b9/e5a0/96e8fac2a30399afa235d655b5f5b396?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bgkYfnLN7pBQETj2iPzASx1rq4RXSmxameFQs~AaYVsGrUlMY21qkkPlwTEUMzhOQuWNtEW-EzwGy6eCyHsl80~aZn7kgNSEBLTeriQLtlvZWPYtp6Nw0NmptQ4HnOG1laUGMZ~6HdjD7Nux3rqRITKqG1ZoHPgkalVB-7eXzAKm2SbZNjFW9Esn8acsHO8zcY-KvLcHQgjWz5RhcuorrXIDq~ncXj0y7ek7~-xm89aJXkb7~YGBQmR1WuQ6eZjAJUqhhhIQnHRYICYZDIY~Ssk1UVckAMdVTn3CX1CGW2az2l8t9zCmZHXqtKsgX6eb3HGnRq~3~8gmGpH43K~-Dw__" />
            </li>

          </ul>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
