import React from 'react'
import {Istate as Iprops} from '../App';
  
const List: React.FC<Iprops> = function({people}) {

    const renderList = ():JSX.Element[] =>{
        return people.map((person) =>{
           return (
            <li className="List">
            <div className="List-header">
                <img className="List-img" src={person.url} alt=""/>
                <h2>{person.name}</h2>
            </div>
            <p>{person.age} years old</p>
            <p className="List-note">{person.note}</p>
        </li>
           )
        })
    }
    return (
        <div>
            <ul>
                {renderList()}
            </ul>
        </div>
    )
}

export default List
