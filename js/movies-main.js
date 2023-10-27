"use strict";
// import * as movies from "./movies-api.js"
import {getMovies, creatMovie, updateMovie, deleteMovie} from "./movies-api.js";

let allMovies = [];
// let countCard = 1;
// let countCardMade = 1;
// let countTitle = 1;
// let countGenre = 1;
// let countRating = 1;
// let countSummary = 1;
// let newEditForCard = 1;
// let btnEditer = 1;
// let newDeleteForCard = 1;
// let btnDeleter = 1;
// let divEdit = 1;
async function main() {
	allMovies = await getMovies();
	// console.log(allMovies);

	for(let i=0; i < allMovies.length; i++){
		// let mainElement = document.querySelector('main')
		// let mainDiv = document.createElement('div')
		// console.log(mainDiv[i])


		// mainDiv[i].setAttribute('class', 'mainDiv')
		// let c = mainElement[i].appendChild(mainDiv)
		// console.log(mainElement[i])
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
		createDiv.classList.add('card', `card-${[i]}`)
		grabMain.appendChild(createDiv)

		let newCard = document.querySelector(`.card-${[i]}`)
		console.log(newCard)

		let showTitle = document.createElement('h3')
		showTitle.setAttribute('id', `showTitle-${[i]}`)
		let showGenre = document.createElement('p')
		showGenre.setAttribute('class', `genre-${[i]}`)
		let showRating = document.createElement('p')
		showRating.setAttribute('class', `rating-${[i]}`)
		let showSummary = document.createElement('p')
		showRating.setAttribute('class', `summary-${[i]}`)
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

		let btnEdit = document.querySelector(`.card-${[i]}`)

		let btnDivEdit = document.createElement('div')
		btnDivEdit.classList.add('btn-div', `btn-div-${[i]}`)
		btnEdit.appendChild(btnDivEdit)

		let makeEditBtn = document.createElement('button')
		makeEditBtn.classList.add('edit-btn',`edit-btn-${[i]}`)
		makeEditBtn.innerText = 'Edit';
		btnDivEdit.appendChild(makeEditBtn)


		// let btnDelete = document.querySelector(`.newCards-${newDeleteForCard++}`)
		let makeDelete = document.createElement('button')
		makeDelete.classList.add('class',`delete-btn-${[i]}`)
		makeDelete.innerText = 'Delete';
		btnDivEdit.appendChild(makeDelete)





	}

	//ADD MOVIE

	let addMovieButtons = document.querySelector('#addMovie-btn')
	let showAddForm = document.querySelector('#add-form')
	console.log(showAddForm)
	addMovieButtons.addEventListener('click', function(event){
		console.log(showAddForm)
		showAddForm.classList.toggle("hidden");
	})

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

	let showEditForm = document.querySelector('#edit-form')
	for(let i=0; i < allMovies.length; i++) {
		let id = allMovies[i].id
		let title = allMovies[i].title
		let genre = allMovies[i].genre
		let rating = allMovies[i].rating
		let summary = allMovies[i].movieSummary
		let poster = allMovies[i].posterURL



		let editMovieBtn = document.querySelector(`.edit-btn-${[i]}`)
		editMovieBtn.addEventListener('click', async function () {

			alert('click' + `edit btn #${[i]}`)
			showEditForm.classList.toggle('hidden')


			let titleEdit = document.querySelector('#edit-title')
			// let titleEd = await titleEdit.value = title;
			let genreEdit = document.querySelector('#edit-genre')
			// let genreEd = await genreEdit.value = genre;
			let ratingEdit = document.querySelector('#edit-rating')
			// let ratingEd = await ratingEdit.value = rating;
			let summaryEdit = document.querySelector('#edit-summary')
			// let summEd = await summaryEdit.value = summary



			// let movie = await getMovies([i]);
			// console.log(movie);

			// make updateBook(book)
			// need options for method, headers, and body
			// test it
			// book.title = "A Fake Book Part Deux";
			// book = await updateBook(book);
			//
			// const changedBook = await getBook(5);
			// console.log(book);


			// await updateMovie(id.id, {
			// 	title: titleEdit,
			// 	genre: genreEdit,
			// 	rating: ratingEdit,
			// 	movieSummary: summaryEdit,
			// 	// posterURL: editMovie.posterURL
			// })
			console.log(updateMovie)
		})
	}
		// .addEventListener('click', updateMovie)
	// const updatedMovie = await updateMovie(newMovie.id, {
	// 	title: newMovie.title,
	// 	genre: newMovie.genre,
	// 	rating: 3,
	// 	movieSummary: 'Funny',
	// 	posterURL: newMovie.posterURL
	// })

	for(let i=0; i < allMovies.length; i++) {
		let deleteMovieButton = document.querySelector(`.delete-btn-${[i]}`)
		//DELETE MOVIE
		deleteMovieButton.addEventListener('click', async function () {
			let id = allMovies[i].id

			await deleteMovie(id);
			location.reload()
		})
	}
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