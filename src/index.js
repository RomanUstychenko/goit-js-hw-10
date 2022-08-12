import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {fetchCountries} from './fetchCountries'

const DEBOUNCE_DELAY = 300;
const input = document.querySelector('#search-box')
const ul = document.querySelector('.country-list')
const div = document.querySelector('.country-info')
const body = document.querySelector('body')


let currentPage = 1;

input.addEventListener('input', debounce(search, DEBOUNCE_DELAY)
)


function search (e) {
e.preventDefault();
let name = input.value;

fetchCountries(name)
.then((users) => renderUserList(users))
    .catch((error) => console.log(error));
}


function renderUserList(data) {
    const markup = data
      .map((item) => {
        return `<li>    
            <img src="${item.flags.svg}" width="40px" alt="${item.name}">
            <h2>${item.name.official}</h2>
            <p>Capital</b>: ${item.capital}</p>
            <p>Population</b>: ${item.population}</p>
            <p>Languages</b>: ${(Object.values(item.languages))}</p>
        </li>`;
      })
      .join("");
      div.innerHTML = markup;
  }
//   console.log(renderUserList(data))