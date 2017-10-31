export default function init(options) {
    let collapsibles = document.querySelectorAll('.collapsible');

    collapsibles.forEach(collapsible => {
        let control = collapsible.querySelector('.collapsible-control');
        let box = collapsible.querySelector('.collapsible-box');

        control.addEventListener('click', () => {
            box.classList.toggle('hidden');

            let isHidden = box.classList.contains('hidden');
            control.innerText = isHidden ? 'Показать' : 'Свернуть';
        });
    });
}
