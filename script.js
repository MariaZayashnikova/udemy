let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }

}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
    for (let i = 1; i <=2; i++){
        let answerOne = prompt('Один из последних просмотренных фильмов', '');
        let answerTwo = prompt('На сколько оцените его?', '');
    
        if (!answerTwo || !answerOne || answerOne.length > 50 || answerTwo.length > 50) {
            i--;
        } else {
            personalMovieDB.movies[answerOne] = answerTwo;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (numberOfFilms < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (numberOfFilms >= 10 & numberOfFilms < 30) {
        alert('Вы классический зритель');
    } else if (numberOfFilms >= 30)  {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

detectPersonalLevel ();

function showMyDB() {
    if(!personalMovieDB.privat){
        console.log(personalMovieDB);
    }
}
showMyDB();

function writeYourGenres() {
    for (let i =1; i < 4; i++){
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i} ?`);
    }
}

writeYourGenres();