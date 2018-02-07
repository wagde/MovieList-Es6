export default class bulidGrid {
    constructor(moviesList, appeindToSideBar) {
        this.moviesList = moviesList;
        this.contentGrid = document.getElementById("content");
        this.sidebar = document.getElementById("sidebar");
        this.cast = {};
        this.dirctor = {};
        this.appeindToSideBar = appeindToSideBar;
    }

    createGrid(imgUrl, name, gridId) {
        let grid = document.createElement("div");
        grid.className = "grid";
        let deleteButton = document.createElement("Button");
        deleteButton.className = "deleteButton";
        deleteButton.id = gridId;
        let gridImg = document.createElement("IMG");
        gridImg.className = "clickGrid"
        gridImg.id=gridId;
        let Name = document.createElement("p");
        gridImg.src = imgUrl;
        Name.innerHTML = name;
        deleteButton.innerHTML = "X";
        grid.appendChild(deleteButton);
        grid.appendChild(gridImg);
        grid.appendChild(Name);
        this.contentGrid.appendChild(grid);
    }


    createSideBarDirctor(director) {
        if (director in this.dirctor) {
            this.dirctor[director]++;
        }
        else {
            this.dirctor[director] = 1;
        }
    }


    createSideBarCast(Casts) {

        for (let Cast of Casts) {
            if (Cast in this.cast) {
                this.cast[Cast]++;
            }
            else {
                this.cast[Cast] = 1;
            }
        }

    }

    appiendChildsToSideBar(sideBarSection, type) {
        let section = document.getElementById(type);

        for (let name in sideBarSection) {

            let Name = document.createElement("a");
            let number = document.createElement("span");
            let br = document.createElement("br");
            Name.innerHTML = name;
            number.innerHTML = "(" + sideBarSection[name] + ")"
            section.appendChild(br);
            section.appendChild(Name);
            section.appendChild(number);
            Name.className = type + 1;
        }
    }
    render() {

        for (let movie of this.moviesList) {
            this.createGrid(movie.imageUrl, movie.title, movie.id);
            this.createSideBarDirctor(movie.director);
            this.createSideBarCast(movie.cast);
        }
        if (this.appeindToSideBar) {
            this.appiendChildsToSideBar(this.cast, "Cast")
            this.appiendChildsToSideBar(this.dirctor, "Dirctor")
        }

    }


}

