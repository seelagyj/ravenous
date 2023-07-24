import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar'
import BusinessList from './components/BusinessList'

//array of business objects
const businessArray = [{
  imageSrc: 'https://yellowrocketconcepts.cardfoundry.com/merch/yellowrocketconcepts/images/banner.jpg',
  name: 'Zaza',
  address: '1212 Something Way',
  city: 'Little Rock',
  state: 'AR',
  zipcode: 72227,
  category: 'Pizza',
  rating: 4.8,
  reviewCount: 47
}, {
  imageSrc: 'https://littlerockpantry.com/wp-content/uploads/2020/12/pantry-eateries-logo-bw.png',
  name: 'The Pantry',
  address: '722 N. Palm St.',
  city: 'Little Rock',
  state: 'AR',
  zipcode: 72205,
  category: 'Czech, German',
  rating: 4.7,
  reviewCount: 52
}];

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <br></br>
      <BusinessList businessArray={businessArray}/>
    </div>
  );
}

export default App;
