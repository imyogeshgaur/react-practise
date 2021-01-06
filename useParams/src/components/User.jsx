import React from 'react'
import {useParams} from 'react-router-dom'

const User = () => {
    const {fname,lname} =useParams();
    return (
        <>
         <h1>Hello {fname} {lname} Have a Good Day !!!</h1>
        </>
    )
}

export default User
