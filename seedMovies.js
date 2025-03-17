require('dotenv').config();
const Movie = require('./Movies');

const sampleMovies = [
    {
        title: "Inception",
        releaseDate: 2010,
        genre: "Science Fiction",
        actors: [
            { actorName: "Leonardo DiCaprio", characterName: "Cobb" },
            { actorName: "Joseph Gordon-Levitt", characterName: "Arthur" },
            { actorName: "Ellen Page", characterName: "Ariadne" }
        ]
    },
    {
        title: "The Dark Knight",
        releaseDate: 2008,
        genre: "Action",
        actors: [
            { actorName: "Christian Bale", characterName: "Bruce Wayne" },
            { actorName: "Heath Ledger", characterName: "Joker" },
            { actorName: "Aaron Eckhart", characterName: "Harvey Dent" }
        ]
    },
    {
        title: "The Shawshank Redemption",
        releaseDate: 1994,
        genre: "Drama",
        actors: [
            { actorName: "Tim Robbins", characterName: "Andy Dufresne" },
            { actorName: "Morgan Freeman", characterName: "Red" }
        ]
    },
    {
        title: "Pulp Fiction",
        releaseDate: 1994,
        genre: "Thriller",
        actors: [
            { actorName: "John Travolta", characterName: "Vincent Vega" },
            { actorName: "Samuel L. Jackson", characterName: "Jules Winnfield" },
            { actorName: "Uma Thurman", characterName: "Mia Wallace" }
        ]
    },
    {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        releaseDate: 2001,
        genre: "Fantasy",
        actors: [
            { actorName: "Elijah Wood", characterName: "Frodo Baggins" },
            { actorName: "Ian McKellen", characterName: "Gandalf" },
            { actorName: "Viggo Mortensen", characterName: "Aragorn" }
        ]
    }
];

async function seedMovies() {
    try {
        // Clear existing movies
        await Movie.deleteMany({});
        console.log('Cleared existing movies');

        // Insert new movies
        const result = await Movie.insertMany(sampleMovies);
        console.log(`Successfully seeded ${result.length} movies`);
        process.exit(0);
    } catch (err) {
        console.error('Error seeding movies:', err);
        process.exit(1);
    }
}

seedMovies(); 