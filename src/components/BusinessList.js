import React from 'react';
import Business from './Business'

//array of business objects
const businessArray = [];

//BusinessList component to display list of businesses generated from Business component

function BusinessList() {
    const businessesDisplay = businessArray.map(business => {
        Business(business);
    });
    return businessesDisplay;
}
export default BusinessList;