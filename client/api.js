export default class API {
        constructor(id) {
                id = this.id;

        }
        getMovies() {
                return fetch("http://localhost:3000/movies", { method: "get" })
                        .then(res => res.json())
        }

        deleteMovies(id) {
                return fetch("http://localhost:3000/movies/" + id, { method: "delete" })
                        .then(res => res.json())
        }

        addMovie(json) {
                fetch("http://localhost:3000/movies", {
                        method: "post",
                        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                        body: JSON.stringify({ ...json })
                })
                        .then(res => res.json())
        }
        editMovie() {

        }
        getOneMovie(id) {
                return fetch("http://localhost:3000/movies", { method: "get" })
                        .then(res => res.json())

        }




}

