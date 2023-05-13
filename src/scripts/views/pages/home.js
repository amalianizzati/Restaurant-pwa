import RestaurantSource from '../../data/source';
import { createRestoItemTemplate } from '../templates/template-creator';
import '../../component/resto-list';

const Home = {
  async render() {
    return `
    <resto-list></resto-list>
      `;
  },
  async afterRender() {
    const resto = await RestaurantSource.listResto();
    const restoContainer = document.querySelector('#resto-list');
    // eslint-disable-next-line no-shadow
    resto.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};
export default Home;
