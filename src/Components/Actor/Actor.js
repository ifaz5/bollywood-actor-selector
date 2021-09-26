import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {
    faTwitter
} from "@fortawesome/free-brands-svg-icons"
import './Actor.css'
    ;


const Actor = (props) => {
    console.log(props)
    const { name, img, film, salary, age, twitter } = props.actor;
    const user = <FontAwesomeIcon icon={faUser} />


    return (

       
<div className="col  ">
            <div className="card h-100">
                <img className="card-img-top " src={img} alt="" />
                <div className="card-body">
                    <h3 className="card-title">Name:{name}</h3>
                    <h5>Age:{age}</h5>
                    <h5>Film:{film}</h5>
                    <h5>Salary:${salary}</h5>
                    <div className="d-flex justify-content-center ">
                        <button type="button "
                            className="btn "
                            onClick={() => props.handleAddToList(props.actor)} className="btn-regular">{user} Add to List</button>
                        <br />
                        <br />
                        <a target="_blank" href={twitter} className="btn-twitter "> <FontAwesomeIcon icon={faTwitter} /> twitter</a>
                    </div>
                </div>
            </div>
        </div>





    );
};

export default Actor;