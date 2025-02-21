// Welcome to your OOP practice!
// Use this file to write and test your answers to the questions.
console.log('Start practicing OOP concepts!');

class Movie {
    #rating;
    constructor(title, year) {
        this.title = title,
        this.year = year
    }

    setRating(r){
        this.#rating = r
    
}
        getRating(){
            return this.#rating
        }
    

    getDetails(){
        return`${this.title} (${this.year})`
    }

   missingDetails() {
    if (!this.year) {
        console.log('Warning: Missing year for this movie')
    }
   }
}

 let matrixMovie = new Movie('The Matrix', '1999' )

 console.log(matrixMovie.getDetails());

 let lionKing = new Movie('The Lion King');
 let frozenMovie = new Movie('Frozen', '2013');

console.log(lionKing.getDetails());
console.log(frozenMovie.getDetails());

class Series extends Movie {
    constructor(title, year, episodes) {
        super(title, year),
        this.
        episodes = episodes
    }

    getSeriesDetails() {
        return `${this.title} ${this.year} ${this.episodes}`
    }
}

let strangerThings = new Series('Stranger Things', '2016', '25 episodes')

console.log(strangerThings.getSeriesDetails())


lionKing.setRating(4.5)

console.log(lionKing.getRating())


const movieArray = [
    new Movie('Spirited Away', '2001'),
    new Movie('UHF', '1989'),
    new Movie('Who Framed Roger Rabbit', '1988')
]

function getAllDetails() {
    movieArray.forEach((m) => {
        console.log(m.getDetails())
    }) 
}

getAllDetails();

class Documentary extends Movie {
    constructor(title, year, narrator) {
        super(title, year),
        this.narrator = narrator
    }

    getDetails() {
        return `${this.title} (${this.year}) - ${this.narrator}`
    }
}

let newDoc = new Documentary('Planet Earth', '2006', 'David Attenborough');

console.log(newDoc.getDetails());

let theShining = new Movie('The Shining')

console.log(theShining.getDetails())

