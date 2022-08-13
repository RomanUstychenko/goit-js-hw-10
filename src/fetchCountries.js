import { Notify } from 'notiflix/build/notiflix-notify-aio';

const BASE_URL = "https://restcountries.com/v3.1";
export default function fetchCountries(name) {
    return fetch(`${BASE_URL}/name/${name}?fields=name,capital,population,flags,languages`)
    .then((response) => {
      if (!response.ok) {
        return Notify.info(`Oops, there is no country with that name`);
      }
      return response.json();
    });
}