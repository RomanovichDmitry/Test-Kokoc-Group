// import 'bootstrap/dist/css/bootstrap.min.css'; //all styles
// import 'bootstrap'; //all scripts
//
// const $ = require( "jquery" ); //jQuery

// import 'slick-carousel'
// import 'slick-carousel/slick/slick.scss'
// import 'slick-carousel/slick/slick-theme.scss' //SLICK SLIDER
//
// import 'lightbox2'
// import 'lightbox2/dist/css/lightbox.min.css' //Scale IMG on click
import './styles/index.scss';

import {result} from "./js/axaj";
import {render} from "./js/render";
import {containerContent} from "./js/render";
import {createElement} from "./js/render";


result.forEach((e) => {
    render(containerContent, createElement(e.name, e.text, e.imgUrl, e.author, e.date))
})

const likeBtns = document.querySelectorAll(`.main__like-count`);
likeBtns.forEach((e) => {
    e.addEventListener('click', () => {
        e.classList.toggle(`main__like-count--active`);
    })

})
