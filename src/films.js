// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((movie) =>movie.director);
  // console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
 let result = array.filter((movie)=> movie.director === director);

 return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
 let directorMovies = getMoviesFromDirector(array, director);
 let average = directorMovies.reduce((acc, movie) => {
    acc+= movie.score;
    return acc;
 }, 0);
 let score = Number((average / directorMovies.length).toFixed(2));
 return score;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
    const titles = array.map((movie) => movie.title).sort().slice(0, 20);
    return titles;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const years = array.sort((a,b)=>{
    if (a.year < b.year){
      return -1;
    }
    if (a.year > b.year){
      return 1;
    }
    if (a.year === b.year){
      if(a.title < b.title){
        return -1;
      }
      if(a.title > b.title){
        return 1;
      }
      return 0;
    }
  }).slice();
  return years;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let movieGenre = array.filter((movie)=> movie.genre.includes(category) && movie.score);
  let averageGenre = movieGenre.reduce((acc, movie)=> {
    acc+= movie.score;
    return acc;
  }, 0);
  let score = Number((averageGenre / movieGenre.length).toFixed(2));
  return score;

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const regEx = /\D+/;
  const durationMovies = array.map((movie)=> {
    const durationMovies = movie.duration.split(regEx).slice(0,2);
    let hours = parseInt(durationMovies[0] > 0 ? durationMovies[0] * 60 : 0);
    let minutes = parseInt(durationMovies[1]> 0 ? durationMovies[1] : 0);
    let newDuration = hours + minutes;
    return {...movie, duration: newDuration};
  });
  return durationMovies;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(year) {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
