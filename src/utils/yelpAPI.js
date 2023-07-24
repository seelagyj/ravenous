import SearchBar from '../components/SearchBar'


const searchYelp = async (search, location, sort) => {
    const apiKey = 'p-42WR60V1N_vFfg67u6Z0yqyL8IgoDIoz_2-zq621uk2Yw_NzGi4LCji_DnCmokYoKij_jp5AHvg1JUpyKJDmCILqFhuyBbxUOD58UWs9xAQvVdYaqYXU2DB9nCZHYx'
    const baseURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search';
    const queryParams = `?term=${search}&location=${location}&sort_by=${sort}`;
        try {
        const response = await fetch(`${baseURL}${queryParams}`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`
        }
    })
    if (response.ok) {
        const businessResponse = await response.json();
        return businessResponse.businesses;
    }
}
catch(error) {console.log(error)}
}
export default searchYelp