import { multiplyNumbers } from './multiply-numbers';
import 'spectre.css/dist/spectre.min.css';
import './style.css';

function createElement(tagName, text) {
    let element = document.createElement(tagName);
    element.innerText = text;
    return element;
}
