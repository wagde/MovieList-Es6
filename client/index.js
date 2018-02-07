import api from './api.js';
import bulidGrid from './bulidGrid.js';
import filter from './filter.js';
import events from './events.js';
let API = new api()
API.getMovies()
    .then(movies => {
        let get = new bulidGrid(movies, true);
        get.render();
        let events1 = new events(movies);
        events1.print(movies);
        
    })

// let link="/movie/**"
// if (  location.pathname==link) {
//     location.pathname == "movie.html"
// }


