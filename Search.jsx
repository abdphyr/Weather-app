

import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Search = ({query,setQuery,search,searching}) => {
    return (
        <div className='searching'>
            <div className='search'>
                <input type='text' 
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
                onKeyPress={(e)=>searching(e)}
                />
                <button onClick={()=>search()}>
                    <SearchIcon className="icon" />
                </button>
            </div>
        </div>
    );
};

export default Search;