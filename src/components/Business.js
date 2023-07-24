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
            <img src={props.business.image_url}
            alt={props.business.name}/>
            <h1>
                {props.business.name}
            </h1>
            <p>
                {props.business.location.address1}
            </p>
            <p>
                {props.business.location.city + ', ' + props.business.location.state + ' ' + props.business.location.zip_code}
            </p>
            <h4>
                {props.business.categories.title}
            </h4>
            <p>
                {'Average Rating: ' + props.business.rating + ' (' + props.business.review_count + ' ratings)'}
            </p>
        </div>
    )
}
export default Business;