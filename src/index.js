fetch("http://localhost:3000/movies")
.then((movies => movies.json()))
.then((movieData)=> {
    movieData.forEach(movieDataObject => {
        const movieImageUrl = movieDataObject.image



    addMovieToDiv(movieDataObject);
    })

});

function addMovieToDiv(movie) {
    let movieDiv = document.getElementById('movie-list')
    let movieImage = document.createElement('img')
    movieImage.src = movie.image
    movieDiv.appendChild(movieImage)
    //// we need this function to do something to this object that we are passing in 
    //// and then append each movie image to the movie-list container ///
    
}

const showMovieDetail = (currentMovie) => {
    // Define variables for all additional movie details and properties. ✍🏽
    let detailTitle = document.querySelector("#title");
    let detailImage = document.querySelector("#detail-image");
    let detailDescription = document.querySelector("#description");
    let detailYearReleased = document.querySelector("#year-released");
    let watchedStatusButton = document.querySelector("#watched");
    let bloodAmount = document.querySelector("#amount");

    // Set all HTML card attributes to relevant properties from movie object data. 🪡
    detailTitle.textContent = currentMovie.title;
    detailImage.src = currentMovie.image;
    detailDescription.textContent = currentMovie.description;
    detailYearReleased.textContent = currentMovie.release_year;
    watchedStatusButton.textContent = currentMovie.watched ? "Watched" : "Unwatched"
    bloodAmount.textContent = currentMovie.blood_amount;
}


