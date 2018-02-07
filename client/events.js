import bulidGrid from "./bulidGrid.js";
import filter from './filter.js';
import api from './api.js';
// import movieprofile from './movieprofile';

export default class events {
    constructor(moviesList) {
        
        moviesList = this.moviesList;
        let grid = document.getElementsByClassName("clickGrid");
        Array.from(grid).forEach((element) => {
            element.addEventListener('click', () => {
                //  let movie=  new movieprofile(element.id)
                //  movie.print()
            });
        })

        let deleteButton = document.getElementsByClassName("deleteButton");
        Array.from(deleteButton).forEach((element) => {
            element.addEventListener('click', () => {

                let API = new api(element.id);
                API.deleteMovies(element.id);
                location.reload();
            });
        });
    }

    print(moviesList) {

        document.getElementById("search").addEventListener("keydown", (e) => {
            document.getElementById("content").innerHTML = "";
            let filterSea = new filter(moviesList, e.target.value);
            let getMovieBySerarch = new bulidGrid(filterSea.search(moviesList, e.target.value), false);
            getMovieBySerarch.render()
        })


        let dirctor = document.getElementsByClassName("Dirctor1");
        Array.from(dirctor).forEach((element) => {
            element.addEventListener('click', () => {
                document.getElementById("content").innerHTML = "";
                let name = element.innerHTML;
                let filterFindByClick = new filter(name, moviesList);
                let movies = filterFindByClick.getByClickDirctor(name, moviesList);
                let get = new bulidGrid(movies, false);
                get.render()
            })
        });

        let cast = document.getElementsByClassName("Cast1");
        Array.from(cast).forEach((element) => {
            element.addEventListener('click', () => {
                document.getElementById("content").innerHTML = "";
                let name = element.innerHTML;
                let filterFindByClick = new filter(name, moviesList);
                let movies = filterFindByClick.getByClickCast(name, moviesList);
                let get = new bulidGrid(movies, false);
                get.render()
            })
        });
    

    }
}