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

        <div class="row row-cols-1 row-cols-md-3 g-4 ">

            <div class="col ">
                <div class="card">
                    <img className="card-img-top " src={img} alt="" />
                    <div class="card-body">
                        <h3 class="card-title">Name:{name}</h3>
                        <h5>Age:{age}</h5>
                        <h5>Film:{film}</h5>
                        <h5>Salary:${salary}</h5>
                        <button onClick={() => props.handleAddToList(props.actor)} className="btn-regular">{user} Add to List</button>
                        <a target="_blank" href={twitter} className="btn-twitter "> <FontAwesomeIcon icon={faTwitter} /> twitter</a>
                    </div>
                </div>
            </div>
        </div>




    );
};

export default Actor;