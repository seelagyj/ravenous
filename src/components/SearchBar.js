import React, {useState} from 'react';

/*The search bar should contain two inputs, one for the user’s search terms and the selected location. 
Don’t forget a search button as well.

The search bar should also offer sorting options such as Best Match, Highest Rated, and Most Reviewed. 
This functionality will be fully incorporated in a later part of the project, but for now, concentrate 
on building the buttons and the structure needed to communicate with the Yelp API.*/


function SearchBar() {
    const [search, setSearch] = useState('');
    const [location, setLocation] = useState('');
    const [sort, setSort] = useState("best_match");


    const sortOptions = {
        bestMatch: "best_match",
        highestRated: "rating",
        mostReviewed: "review_count"
    };
    const sortArray = Object.keys(sortOptions);
    const searchChangeHandler = (event) => {
        setSearch(event.target.value);
    }
    const locationChangeHandler = (event) => {
        setLocation(event.target.value);
    }
    const clickHandler = (event) => {
        setSort(event.target.value);

    }
    const submitHandler = () => {
        alert("Searching Yelp with " + search + " in " + location + ", sorted by " + sort);
    }
    
    return (
    <div>
            <br></br>
            <br></br>
    <form onSubmit={submitHandler}>
        <input type="text"
            name="term" value={search} onChange={searchChangeHandler}></input>
        <input type="text"
            name="location" value={location} onChange={locationChangeHandler}></input>
        <input type="submit" value="Search"></input>
        <select name="sort_by" onClick={clickHandler}>
            {sortArray.map(key => <option value={sortOptions[key]} key={key}>{key}</option>)}
        </select>
    </form>
    </div>
    )
}
export default SearchBar;