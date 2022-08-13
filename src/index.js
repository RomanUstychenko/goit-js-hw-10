import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import fetchCountries from './fetchCountries';

const DEBOUNCE_DELAY = 300;
const input = document.querySelector('#search-box')
const countryList = document.querySelector('.country-list')
const countryInfo = document.querySelector('.country-info')

input.addEventListener('input', debounce(search, DEBOUNCE_DELAY))

function search (list) {
list.preventDefault();
let name = list.target.value.toLowerCase().trim();
if (!name) {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
  return;
}
  fetchCountries(name)
  .then(check)
  .catch((error) => Notify.info(`Oops, there is no country with that name`));
}

function check (list) {
  if (list.length > 10) {
    clearMarkup ()
    Notify.info(`Too many matches found. Please enter a more specific name.`
    );
  } else if (list.length <= 10 && list.length > 1) {
    clearMarkup ()
    renderList(list, countryList);
  }  
  else {
    clearMarkup ()
    renderUserList(list, countryInfo);
    return;
  }
}

function clearMarkup () {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
}

  function renderList(list, listBox) {
    const markup = list
         .map((item) => {
         return `<li>
          <img src="${item.flags.svg}" alt="flag" width="40">
          <h1 class="country-list__title">${item.name.official}</h1>
                </li>`
        })
      .join('');
    return (listBox.innerHTML = markup);
  }

function renderUserList(list, userBox) {
    const markup = list
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
      return (userBox.innerHTML = markup);
  }