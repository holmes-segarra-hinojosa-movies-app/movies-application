"use strict";
// import * as movies from "./movies-api.js"
import {getMovies, creatMovie, updateMovie, deleteMovie} from "./movies-api.js";

let allMovies = [];
async function main() {
	allMovies = await getMovies();
	console.log(allMovies);
	for(let i=0; i < allMovies.length; i++){
		let id = allMovies[i].id
		let title = allMovies[i].title
		let genre = allMovies[i].genre
		let rating = allMovies[i].rating
		let summary = allMovies[i].movieSummary
		let poster = allMovies[i].posterURL
		// console.log("ID: " +id)
		console.log("Title: " +title)
		// console.log("Genre: " +genre)
		// console.log("Rating: " +rating)
		// console.log("Summary: " +summary)
		// console.log("Poster: " +poster)

	let u = document.querySelector('.diver')
		u.innerText = title;
	// console.dir(u)
	}

	//ADD MOVIE
	// document.querySelector('#add-btn').addEventListener('click', createMovie)

	// let x = document.querySelector('.add-btn')
	// x.addEventListener('click', function(){
	// 	// alert('click')
	// 	let y = document.querySelector('.test').value
	// 	console.log(y)
	// })

	// let newMovie = await creatMovie({
	// 	title: 'Fake Movie',
	// 	genre: 'horror',
	// 	rating: 2,
	// 	movieSummary: 'Scary',
	// 	posterURL: 'www.scary.com'
	// })

	///////////////EDIT MOVIE
	// document.querySelector('#edit-btn').addEventListener('click', updateMovie)
	// const updatedMovie = await updateMovie(newMovie.id, {
	// 	title: newMovie.title,
	// 	genre: newMovie.genre,
	// 	rating: 3,
	// 	movieSummary: 'Funny',
	// 	posterURL: newMovie.posterURL
	// })

	// document.querySelector('#delete-btn').addEventListener('click', creatMovie)
	//DELETE MOVIE
	// await deleteMovie(12);


}
main();

// 'use strict'
//
// import {randGreet} from './greeting-logic.js'
//
// function main() {
// 	document.querySelector('#greetButt').addEventListener('click', greetUser)
// }
//
// function greetUser(){
// 	let firstName = document.querySelector('#fName').value
// 	console.log(firstName)
//
// 	let greetThem = randGreet() + " " + firstName;
//
// 	document.querySelector('.greeting').innerText =
// 		greetThem;
// }
// main();