
const images = [
    { 'id': '1', 'url':'./img/banner1.jpg' },
    { 'id': '2', 'url':'./img/banner2.jpg' },
    { 'id': '3', 'url':'./img/banner3.jpg' },
    { 'id': '4', 'url':'./img/banner4.jpg' },
    { 'id': '5', 'url':'./img/banner5.jpg' },
    { 'id': '6', 'url':'./img/banner6.jpg' },
    { 'id': '7', 'url':'./img/banner7.jpg' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);