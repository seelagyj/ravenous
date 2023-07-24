import React from 'react';

//business placeholder
const businessPlaceholder = {
    imageSrc: 'https://yellowrocketconcepts.cardfoundry.com/merch/yellowrocketconcepts/images/banner.jpg',
    name: 'Zaza',
    address: '1212 Something Way',
    city: 'Little Rock',
    state: 'AR',
    zipcode: 72227,
    category: 'Pizza',
    rating: 4.8,
    reviewCount: 47
}

/*display an image, name, address, city, state, zipcode, category, rating, and review count*/

function Business(props) {
    return (
        <div>
            <img src={props.business.imageSrc}
            alt={props.business.name}/>
            <h1>
                {props.business.name}
            </h1>
            <p>
                {props.business.address}
            </p>
            <p>
                {props.business.city + ', ' + props.business.state + ' ' + props.business.zipcode}
            </p>
            <h4>
                {props.business.category}
            </h4>
            <p>
                {props.business.rating + ' (' + props.business.reviewCount + ')'}
            </p>
        </div>
    )
}
export default Business;