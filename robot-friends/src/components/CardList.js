import React from 'react';
import Card from './Card';

const CardList = ({ robotDetails }) => {
   
    const cards = robotDetails.map((robo, i) => {
        return <Card key= {i} id = {robotDetails[i].id} name = {robotDetails[i].name} email = {robotDetails[i].email}/>
    });

    return(
        <div>
            {cards}
        </div>
    );
}

export default CardList;