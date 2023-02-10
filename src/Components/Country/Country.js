import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props)
    const { name, area, flags, population } = props.country;
    return (
        <div className='country bg-warning'>
            <img src={flags.png} alt="" />
            <h3>Name: {name.common}</h3>
            <p>Area: {area}</p>
            <h4>Population: {population}</h4>
        </div>
    );
};

export default Country;