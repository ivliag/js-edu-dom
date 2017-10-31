import { multiplyNumbers } from './multiply-numbers';
import 'spectre.css/dist/spectre.min.css';
import './style.css';

function createElement(tagName, text) {
    let element = document.createElement(tagName);
    element.innerText = text;
    return element;
}

let h1 = createElement(
    'h1',
    'Результат умножения 12 на 46 и на 34 равен ' + multiplyNumbers(12, 46, 34)
);

document
    .querySelector('.container')
    .prepend(h1);
