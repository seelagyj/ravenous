import Reach from 'react';

/*The search bar should contain two inputs, one for the user’s search terms and the selected location. 
Don’t forget a search button as well.

The search bar should also offer sorting options such as Best Match, Highest Rated, and Most Reviewed. 
This functionality will be fully incorporated in a later part of the project, but for now, concentrate 
on building the buttons and the structure needed to communicate with the Yelp API.*/


function SearchBar() {
    const sortOptions = {
        bestMatch: "best_match",
        highestRated: "rating",
        mostReviewed: "review_count"
    };
    const sortArray = Object.keys(sortOptions);
    const sortList = sortArray.map(option => {
        <option value={sortOptions[option]}>{option}</option>
    });    
    return (
    <form>
        <input type="text"
            name="term"></input>
        <input type="text"
            name="location"></input>
        <input type="submit" value="Search"></input>
        <select name="sort_by">
            {sortList}
        </select>
    </form>
    )
}
