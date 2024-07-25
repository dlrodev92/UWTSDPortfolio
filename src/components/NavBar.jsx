
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{ faHouse, faUser, faSuitcase, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
export default function NavBar() {
    return (
        <>
        <div className="navbar w-[75%] md:w-[75%] xl:w-[50%] h-full bg-white rounded-[100px] shadow-navbar flex flex-col justify-start items-center">
            <ul className='w-full h-full flex  lg:flex-col justify-around lg:justify-around items-center lg:items-center'>
                <NavLink
                    to="/"
                > <FontAwesomeIcon icon={faHouse}  className='text-[30px] text-[#D1D1D1] hover:text-[#21C4E1] cursor-pointer' /></NavLink>
                <NavLink
                    to="/About"
                > <FontAwesomeIcon icon={faUser} className='text-[30px] text-[#D1D1D1] hover:text-[#21C4E1] cursor-pointer'/></NavLink>
                <NavLink
                    to="/Portfolio"
                > <FontAwesomeIcon icon={faSuitcase} className='text-[30px] text-[#D1D1D1] hover:text-[#21C4E1] cursor-pointer'/></NavLink>
                <NavLink
                    to="/Contact"
                > <FontAwesomeIcon icon={faEnvelope} className='text-[30px] text-[#D1D1D1] hover:text-[#21C4E1] cursor-pointer' /></NavLink>
            </ul>
        </div>
        </>
)}