import React from 'react'
import {useLocation, useParams} from 'react-router-dom'

const User = () => {
    const {fname,lname} =useParams();
    const user = useLocation();
    console.log(user)
    return (
        <>
         {user.pathname="/user/yogesh/gaur" ? <h1>Hello {fname} {lname} Have a Good Day !!!</h1>:null}
        </>
    )
}

export default User
