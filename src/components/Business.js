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

function Business(business) {
    return (
        <div>
            <img src={businessPlaceholder.imageSrc}
            alt={businessPlaceholder.name}/>
            <h1>
                {businessPlaceholder.name}
            </h1>
            <p>
                {businessPlaceholder.address}
            </p>
            <p>
                {businessPlaceholder.city + ', ' + businessPlaceholder.state + ' ' + businessPlaceholder.zipcode}
            </p>
            <h4>
                {businessPlaceholder.category}
            </h4>
            <p>
                {businessPlaceholder.rating + ' (' + businessPlaceholder.reviewCount + ')'}
            </p>
        </div>
    )
}
export default Business;