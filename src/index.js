import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {fetchCountries} from './fetchCountries'

const DEBOUNCE_DELAY = 300;
const input = document.querySelector('#search-box')
const ul = document.querySelector('.country-list')
const div = document.querySelector('.country-info')


let currentPage = 1;
input.addEventListener('input', debounce(search, DEBOUNCE_DELAY))

function search (e) {
e.preventDefault();
let countryName = input.value;
fetchCountries(countryName)
// .then((response) => response.json())
// .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
}
