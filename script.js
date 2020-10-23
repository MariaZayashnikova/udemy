let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

if (numberOfFilms < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (numberOfFilms >= 10 & numberOfFilms < 30) {
    alert('Вы классический зритель');
} else if (numberOfFilms >= 30)  {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 1; i <=2; i++){
    let answerOne = prompt('Один из последних просмотренных фильмов', '');
    let answerTwo = prompt('На сколько оцените его?', '');

    if (!answerTwo || !answerOne || answerOne.length > 50 || answerTwo.length > 50) {
        i--;
    } else {
        personalMovieDB.movies[answerOne] = answerTwo;
    }
}

console.log(personalMovieDB);
