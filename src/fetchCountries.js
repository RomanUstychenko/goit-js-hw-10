const BASE_URL = "https://restcountries.com/v3.1";
export function fetchCountries(name) {
    fetch(`${BASE_URL}/name/${name}?fields=name,capital,population,flags,languages`)
.then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
}
// export default {fetchCountries}