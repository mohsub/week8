let arr = [];

for( let i = 1; i <= 1000; i++ ){

    arr.push(i);

}

console.log(arr);

function divisibleFactory(z){

   return newArr => arr.filter((arry) => arry % z === 0)   
   
};

let divisbleBy3 = divisibleFactory(3);

console.log(divisbleBy3())

console.log("Amount of numbers divisible by 3:",divisbleBy3().length)

let divisbleBy10 = divisibleFactory(10);

console.log(divisbleBy10());

console.log("Amount of numbers divisible by 10:",divisbleBy10().length)

let divisbleBy21 = divisibleFactory(21);

console.log(divisbleBy21());

console.log("Amount of numbers divisible by 21:",divisbleBy21().length)

let numberOfDivisible = [];

for( let i = 1; i <= 30; i++){

    numberOfDivisible.push(divisibleFactory(i)().length)

}

console.log(numberOfDivisible)


//Step 2: Continuing with data loading, processing and rendering

const moviePromise = new Promise((resolve,reject) => {

    setTimeout(() => {

        resolve();
    },0)

});

moviePromise
.then(() => {
const movieUrl ='https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';

const movieResponsePromise = fetch(movieUrl)

console.log(movieResponsePromise)

return movieResponsePromise;

} )
.then((data) => {

const movieResponse = data.json();

console.log(movieResponse)

return movieResponse;
})
.then((movieList) => {

    movieList.forEach (movie => {
        if (movie.rating >=7){
           return movie.tag = 'Good';
         }
        else if(movie.rating >= 4 && movie.rating < 7){
            return movie.tag ='Average';
        }
        else if (movie.rating < 4){
           return  movie.tag = 'Bad';
        }
         
    });

    console.log(movieList)

})






