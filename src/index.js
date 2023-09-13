import axios from "axios";
import { fetchBreeds, fetchCatByBreed } from "./cat-api";
import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const refs = {
    catBreedsEl: document.querySelector('.breed-select'),
    catInfoWrapper: document.querySelector('.cat-info'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error'),
    catSlimSelectWrapper: document.querySelector('.ss-main.breed-select'),
}

