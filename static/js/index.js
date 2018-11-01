var onPageLoad = function() {
    $.getJSON('/moviesWithVue/api/get_all_movies/',
        function(response) {
            app.movies = response.movies;
        }
    );
};

var insertMovie = function() {
    var newMovie = {
        title: app.newMovieTitle,
        description: app.newMovieDescription,
        rating: app.newMovieRating
    };
    $.post('/moviesWithVue/api/insert_movie/', newMovie, function(response) { 
        if (response == 'movie inserted!') {
            app.movies.push(newMovie);
        } else {
            alert('The new movie could not be inserted!');
        }
    });
};

var deleteMovie = function(id) {
    $.post('/moviesWithVue/api/delete_movie/', {id: id}, function(response) {
        if (response == 'movie deleted!') {
            // if database delete was successful, delete the movie from the vue array
            for (var i=0; i<app.movies.length; i++) {
                if (app.movies[i].id == id) {
                    app.movies.splice(i, 1);
                }
            }
        } else {
            alert('Could not delete movie!');
        }
    });
};

var app = new Vue({
    el: '#app',
    delimiters: ['${', '}'],
    unsafeDelimiters: ['!{', '}'],
    data: {
        newMovieTitle: "",
        newMovieDescription: "",
        newMovieRating: "",
        movies: []
    },
    methods: {
        submitMovie: insertMovie,
        deleteMovie: deleteMovie
    }
});

onPageLoad();