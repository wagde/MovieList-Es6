import API from './api.js';

class addMovie {
    constructor() {
        this.json = {};
        this.jsonValue = ["title", "year", "director", "cast", "imageUrl", "imdbUrl"];
        document.getElementById('addMovieButton').addEventListener('click', () => {
            this.postMovies()
        });
    }
    postMovies() {
        let addMovie = document.getElementsByClassName("addMovie");
        Array.from(addMovie).forEach((element) => {
            if( this.jsonValue[0]=="cast"){
                this.json[this.jsonValue.shift()] = [element.value]
            }
            else{
                this.json[this.jsonValue.shift()] = element.value;   
            }
        })
        let api = new API;
        api.addMovie(this.json);
    }



}
let run = new addMovie;
