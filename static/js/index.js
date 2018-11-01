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
        submitMovie: insertMovie
    }
});

onPageLoad();