import api from './api'

export default class moviePage {

    constructor(movieId) {
        this.movieId=movieId;
        // let movieId =  location.pathname;
    }

    print(){
        console.log( this.movieId)
    }
}