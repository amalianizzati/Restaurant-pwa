/* eslint-disable indent */
/* eslint-disable comma-dangle */
import UrlParser from '../../routes/url-parser';
import { createRestoDetailTemplate } from '../templates/template-creator';
import RestaurantSource from '../../data/source';
import '../../component/resto-detail';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <resto-detail></resto-detail>

    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantById = await RestaurantSource.detailResto(url.id);
    const detail = restaurantById.restaurant;
    const restoContainer = document.querySelector('#resto-detail');
    restoContainer.innerHTML = createRestoDetailTemplate(detail);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        pictureId: detail.pictureId,
        id: detail.id,
        city: detail.city,
        name: detail.name,
        description: detail.description,
        rating: detail.rating,
      },
    });
  },
};
export default Detail;
