/* eslint-disable indent */
import RestaurantSource from '../../data/source';
import '../../component/resto-fav';
import { createRestoItemTemplate } from '../templates/template-creator';
import FavoriteRestaurantIdb from '../../data/favorite-resto-idb';

const Favorite = {
  async render() {
    return `
    <resto-fav></resto-fav>`;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#resto-list');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Favorite;
