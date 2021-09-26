import React, { useEffect, useState } from 'react';
import Actor from '../Actor/Actor';
import List from '../List/List';


import './Actors.css'
const Actors = () => {

    const [actors, setProducts] = useState([]);
    const [list, setList] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ifaz5/fakedataassignment/main/fakedata.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToList = (actor) => {
        const newList = [...list, actor];
        setList(newList);
    }
    return (

        <div className="actors-container">

            <div className="actor-container">

                {
                    actors.map(actor =>

                        <Actor key={actor.id} actor={actor}
                            handleAddToList={handleAddToList}
                        ></Actor>)
                }
            </div>
            <diV className="cart-container">
                <List list={list}></List>

            </diV>

        </div >
    );
};

export default Actors;