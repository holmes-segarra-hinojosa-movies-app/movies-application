"use strict";
// import * as movies from "./movies-api.js"
import {getMovies, creatMovie, updateMovie, deleteMovie} from "./movies-api.js";

let allMovies = [];
async function main() {
	allMovies = await getMovies();
	// console.log(allMovies);
	for(let i=0; i < allMovies.length; i++){
		let id = allMovies[i].id
		let title = allMovies[i].title
		let genre = allMovies[i].genre
		let rating = allMovies[i].rating
		let summary = allMovies[i].movieSummary
		let poster = allMovies[i].posterURL
		// console.log("ID: " +id)
		// console.log("Title: " +title)
		// console.log("Genre: " +genre)
		// console.log("Rating: " +rating)
		// console.log("Summary: " +summary)
		// console.log("Poster: " +poster)
		// console.log(allMovies);

	let showTitle = document.querySelector('.title').innerText = title;
		// u.innerHTML = title;
	console.log(showTitle)
	}

	//ADD MOVIE
	let addMovieBtn = document.querySelector('.add-btn')
	addMovieBtn.addEventListener('click', async function(){
		// alert('click')
		let title = document.querySelector('#add-title').value
		let genre = document.querySelector('#add-genre').value
		let rating = document.querySelector('#add-rating').value
		let movieSummary = document.querySelector('#add-summary').value
		// let posetUrl = document.querySelector('#')
		await creatMovie({
			title: title,
			genre: genre,
			rating: rating,
			movieSummary: movieSummary,
			// posterURL:
		})
	})

	///////////////EDIT MOVIE
	let editMovieBtn = document.querySelector('.edit-btn')
	editMovieBtn.addEventListener('click', async function(){

		// await updateMovie(newMovie.id, {
			// 	title: newMovie.title,
			// 	genre: newMovie.genre,
			// 	rating: 3,
			// 	movieSummary: 'Funny',
			// 	posterURL: newMovie.posterURL
			// })

	})
		// .addEventListener('click', updateMovie)
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