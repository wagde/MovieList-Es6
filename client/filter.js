export default class filter {
    constructor(moviesList, str, name) {
        this.str = str;
        this.moviesList = moviesList;
        this.name = name;
    }

    search(moviesList, str) {
        let moviesFilter = [];
        for (let movie of moviesList) {
            let movieTitle = movie.title.toLowerCase();
            if (movieTitle.search(str.toLowerCase()) + 1) {
                moviesFilter.push(movie);
            }
        }
        return moviesFilter;
    }

    getByClickDirctor(name, moviesList) {
        let moviesFilter = [];
        for (let movie of moviesList) {
            if (name == movie.director) {

                moviesFilter.push(movie);
            }

        }
        console.log(moviesFilter)
        return moviesFilter;
    }

    getByClickCast(name, moviesList) {
        let moviesFilter = [];
        for (let movie of moviesList) {
            for (let cast of movie.cast) {
                if (name == cast) {
                    moviesFilter.push(movie);
                }
            }
        }
        return moviesFilter;
    }
}


