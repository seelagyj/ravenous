import SearchBar from '../components/SearchBar'

const apiKey = 'p-42WR60V1N_vFfg67u6Z0yqyL8IgoDIoz_2-zq621uk2Yw_NzGi4LCji_DnCmokYoKij_jp5AHvg1JUpyKJDmCILqFhuyBbxUOD58UWs9xAQvVdYaqYXU2DB9nCZHYx'
const searchYelp = async () => {
    const baseURL = 'https://api.yelp.com/v3/businesses/search';
    const queryParams = `?term=${searchInput}&location=${locationInput}&sort_by=${sortBy}`;
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