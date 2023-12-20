import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setSearch } from '../Store/SearchSlice';
import { logout } from '../Store/userSlice';


 const NavBar = () => {
    const [searchItem , setSearchItem] = useState("");
    let dispatch = useDispatch();
    let user = useSelector(store => store.user.user);
    const handleSearch = ()=>{
        dispatch(setSearch(searchItem));
        console.log(searchItem)
    }

    const handleLogout = ()=>{
      dispatch(logout());
    }
  return (
    <div className="bg-yellow-300 p-4">
    <div className="container mx-auto flex items-center justify-between">
      {/* Logo or brand */}
      {/* <Link to="/" className="text-white text-lg font-bold"> */}
       <span className='font-bold ml-3'>Metasky</span> 
      {/* </Link> */}

      {/* Search input and button */}
      <div className="flex items-center justify-center flex-1">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded w-full max-w-md"
          onChange={(e)=>setSearchItem(e.target.value)}
        />
        <button className='ml-1 font-semibold' onClick={handleSearch}>Search</button>
      </div>

      {/* Login link */}
      {
          user ? (<div className='font-bold ml-3' onClick={handleLogout}>
      
          Logout
        
        </div>):" "
      }
      
    </div>
  </div>
  )
}

export default NavBar;
