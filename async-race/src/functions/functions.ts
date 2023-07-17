import { CAR_BRANDS, CAR_MODELS } from '../data/constants';

export const getElement = <T extends HTMLElement>(selector: string): T => {
  const element = document.querySelector<T>(selector);
  if (!element) {
    throw new TypeError('Type Error');
  }
  return element;
};

export const createElement = (
  tagName: string,
  className: string[],
  innerText: string,
  parentNode: HTMLElement | null
): HTMLElement => {
  const element: HTMLElement = document.createElement(tagName);
  element.classList.add(...className);
  element.innerText = innerText;
  if (parentNode) {
    parentNode.append(element);
  }
  return element;
};
export const getRandomNumber = (max: number) => {
  return Math.floor(Math.random() * max);
};

export const getRandomColor = () => {
  return `#${getRandomNumber(0xffffff).toString(16).padStart(6, '0').toUpperCase()}`;
};

export const createRandomCarName = () => {
  const carNameIndex = getRandomNumber(CAR_BRANDS.length);
  const carModelIndex = getRandomNumber(CAR_MODELS.length);
  console.log(carNameIndex, carModelIndex);
  return `${CAR_BRANDS[carNameIndex]} ${CAR_MODELS[carModelIndex]}`;
};
export const createRandomCar = () => {};