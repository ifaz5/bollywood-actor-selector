import React from 'react';
import './List.css'
const List = (props) => {
    const { list } = props;
    let total = 0;
    for (const actor of list) {
        total = total + actor.salary;
    }
    return (
        <div className="list">
            <div className="list-content">
                <h3>Team added:{props.list.length}</h3>
                <p>Total:${total}</p>
            </div>


            <div className="artist-name">
                {
                    list.map(get =>
                        <ul className="selectPlayerName">
                            <img id="img" src={get.img} alt="" />
                            <li> Name: {get.name} , Salary: ${get.salary},

                            </li>
                        </ul>
                    )
                }
            </div>
        </div>
    );
};

export default List;