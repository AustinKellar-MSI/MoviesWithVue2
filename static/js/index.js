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
        submitMovie: function() {
            this.movies.push({
                title: this.newMovieTitle,
                description: this.newMovieDescription,
                rating: this.newMovieRating
            });
        }
    }
});

var onPageLoad = function() {
    // imagine here instead of hard-coding, you could grab movies from the database and set app.movies equal to the result
    app.movies = [
        { 
            title: "Shrek",
            description: "ogres and onions",
            rating: "5 stars!"
        },
        {
            title: "Shrek 2",
            description: "more ogres, less onions",
            rating: "4 stars!"
        },
        {
            title: "Finding Nemo",
            description: "No ogres, no onions",
            rating: "1 star :("
        }
    ];
};

onPageLoad();