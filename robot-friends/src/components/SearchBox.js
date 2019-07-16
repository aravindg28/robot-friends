import React from 'react';

const SearchBox = ({searchTrigger}) => {

     return(
         <div>
             <input className = "pa3 bg-lightest-blue" type = "search" 
             placeholder = "Search Robots" onChange = {searchTrigger}></input>
         </div>
         
     );
}

export default SearchBox;