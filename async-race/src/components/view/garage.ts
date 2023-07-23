import appData from '../../data/appData';
import { createElement, getElement } from '../../functions/functions';
import { ResponseCarObject } from '../../interfaces/interfaces';
import Menu from './modules/menu';
import Modal from './modules/modal';

class Garage {
  private menu: Menu;

  private modal: Modal;

  constructor() {
    this.menu = new Menu();
    this.modal = new Modal();
  }

  public drawGarageView(): void {
    const body = getElement('body');
    body.replaceChildren();
    const main = createElement('main', ['main'], '', null);
    body.append(this.menu.drawHeader(), main);
    main.append(this.menu.drawMenu());
    const garage = createElement('section', ['garage'], '', main);
    garage.append(this.drawGarage());
  }

  public redrawGarage(): void {
    const garage = getElement('.garage');
    garage.replaceChildren();
    garage.append(this.drawGarage());
  }

  private drawGarage(): HTMLElement {
    const garageWrapper = createElement('div', ['garage__wrapper'], '', null);
    const garageCount = createElement('div', ['garage__header'], '', garageWrapper);
    createElement('h2', ['garage__header__text'], 'Garage', garageCount);
    createElement('span', ['garage__header__count'], appData.carsCount, garageCount);
    const pageCount = createElement('div', ['garage__subheader'], '', garageWrapper);
    createElement('h3', ['garage__page'], 'Page', pageCount);
    createElement('button', ['button', 'garage__nav__button-prev'], '<', pageCount);
    createElement('span', ['garage__page'], appData.garagePage, pageCount);
    createElement('button', ['button', 'garage__nav__button-next'], '>', pageCount);
    const garageContent = createElement('div', ['garage__content'], '', garageWrapper);
    this.modal.drawModal();
    appData.carsData.forEach((car) => {
      this.drawCarBlock(garageContent, car);
    });
    return garageWrapper;
  }

  private drawCarBlock(parentElement: HTMLElement, car: ResponseCarObject): void {
    const carItem = createElement('div', ['garage__item'], '', parentElement);
    carItem.setAttribute('data-index', String(car.id));
    const carItemHeader = createElement('div', ['garage__item__header'], '', carItem);
    createElement('button', ['button', 'button__select', 'garage__header__button'], 'SELECT', carItemHeader);
    createElement('button', ['button', 'button__remove', 'garage__header__button'], 'REMOVE', carItemHeader);
    createElement('p', ['garage__header__carname'], car.name, carItemHeader);
    const carContent = createElement('div', ['garage__item__content'], '', carItem);
    const carControls = createElement('div', ['garage__item__content__controls'], '', carContent);
    createElement('button', ['button', 'button__start', 'garage__item__button'], 'A', carControls);
    createElement('button', ['button', 'button__stop', 'garage__item__button'], 'B', carControls);
    const carTrack = createElement('div', ['garage__item__content__track'], '', carContent);
    const carImg = createElement('div', ['garage__item__car'], '', carTrack);
    carImg.setAttribute('data-index', String(car.id));
    carImg.style.backgroundColor = car.color;
    createElement('div', ['garage__item__flag'], '', carTrack);
  }
}

export default Garage;
