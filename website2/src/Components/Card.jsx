import React from 'react'
import {NavLink} from 'react-router-dom';
const Card = (props) => {
  return (
       <>
      <div className="card">
        <img src={props.img} className="card-img-top" alt={props.img} width="720" height="480"/>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.txt}</p>
            <NavLink to="#" className="btn btn-danger">View</NavLink>
          </div>
       </div>
      </>
  );
}

export default Card;