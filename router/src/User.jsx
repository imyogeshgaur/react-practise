import React from 'react';
import {useParams,useLocation} from 'react-router-dom'

// const User = ({match})=>{
//     return <h1>User {match.params.fname} Page</h1>
// }

const User =() =>{
    const {fname,lname} =useParams();
    const location= useLocation();
    
    return(
        <>
        <h1>user {fname} {lname}Page</h1>
        <p>The current location is 
        {location.pathname}</p>
        {location.pathname===`/user/yogesh/gaur` ?
       ( <button onClick={()=>{
        alert('You got me')
       }}>Click Me </button> ):null
    }
        </>
        );
}
export default User;