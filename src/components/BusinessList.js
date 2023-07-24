import React from 'react';
import Business from './Business'


//BusinessList component to display list of businesses generated from Business component

function BusinessList(props) {
    return (
        <div>
            {props.businesses.map(business => <Business business={business} key={business.id}/>)}
        </div>
        )
}
export default BusinessList;