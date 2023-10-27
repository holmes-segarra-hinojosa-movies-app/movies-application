"use strict";
// import * as movies from "./movies-api.js"
import {getMovies, creatMovie, updateMovie, deleteMovie} from "./movies-api.js";

let allMovies = [];
let countCard = 1;
let countCardMade = 1;
let countTitle = 1;
let countGenre = 1;
let countRating = 1;
let countSummary = 1;
let newEditForCard = 1;
let btnEditer = 1;
let newDeleteForCard = 1;
let btnDeleter = 1;
let divEdit = 1;
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

		let grabMain = document.querySelector('main')
		// let grabCard = document.querySelector('.card')

		let createDiv = document.createElement('div')
		createDiv.setAttribute('class', `newCards-${countCard++}`)
		grabMain.appendChild(createDiv)

		let newCard = document.querySelector(`.newCards-${countCardMade++}`)
		console.log(newCard)

		let showTitle = document.createElement('h3')
		showTitle.setAttribute('id', `showTitle-${countTitle++}`)
		let showGenre = document.createElement('p')
		showGenre.setAttribute('class', `genre-${countGenre++}`)
		let showRating = document.createElement('p')
		showRating.setAttribute('class', `rating-${countRating++}`)
		let showSummary = document.createElement('p')
		showRating.setAttribute('class', `summary-${countSummary++}`)
		// let weatherIcon = document.createElement('img')
		// weatherIcon.src = `https://openweathermap.org/img/w/${weatherId}.png`
		// weatherIcon.setAttribute('id', "icon")



		showTitle.innerText = title;
		showGenre.innerText = genre
		showRating.innerText = rating;
		showSummary.innerText = summary;

		newCard.appendChild(showTitle)
		newCard.appendChild(showGenre)
		newCard.appendChild(showRating)
		newCard.appendChild(showSummary)
		// grabCard.appendChild(showGenre)
		// grabCard.appendChild(showRating)

		let btnEdit = document.querySelector(`.newCards-${newEditForCard++}`)

		let btnDivEdit = document.createElement('div')
		btnDivEdit.setAttribute('class', `${divEdit++}`)
		btnEdit.appendChild(btnDivEdit)

		let makeEditBtn = document.createElement('button')
		makeEditBtn.setAttribute('class',`edit-btn-${btnEditer++}`)
		makeEditBtn.innerText = 'Edit';
		btnDivEdit.appendChild(makeEditBtn)


		// let btnDelete = document.querySelector(`.newCards-${newDeleteForCard++}`)
		let makeDelete = document.createElement('button')
		makeDelete.setAttribute('class',`delete-btn-${btnDeleter++}`)
		makeDelete.innerText = 'Delete';
		btnDivEdit.appendChild(makeDelete)





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