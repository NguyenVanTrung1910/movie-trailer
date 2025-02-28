import PropTypes from'prop-types'
import { useState } from 'react';

const Header = ({onSearch}) => {
  const [keySearch,setKeySearch] = useState('')
  return (
    <div className="p-4 bg-black flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-[30px] uppercase font-bold text-red-700">Movie</h1>
        <nav className="flex item-center space-x-4">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Contact
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-4 ">
        <input type="text" placeholder="search" onChange={(e)=>setKeySearch(e.target.value)} className="p-3" />
        <button
          className="p-2 text-white bg-red-600"
          onClick={() => onSearch(keySearch)}
        >
          Search
        </button>
      </div>
    </div>
  );
};
Header.propTypes = {
  onSearch: PropTypes.func,
};
export default Header;
