import React from 'react';
import "./Card.css"

type CardProps = {
  data: Array<{
    id: number;
    userName: string;
    age: number;
    institute: string;
    isActive: boolean;
    category: string;
  }>;
};

function Card(props: CardProps) {
    return (
        <div className='Card'>
            {props.data.map((x, i) => (
                <div key={i}>
                    <p>id: {x.id}</p>
                    <p>name: {x.userName}</p>
                    <p>age: {x.age}</p>
                    <p>institute: {x.institute}</p>
                    <p>isActive: {x.isActive ? 'true' : 'false'}</p>
                    <p>category: {x.category}</p>
                </div>
            ))}
        </div>
    )
}


export default Card;
