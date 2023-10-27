"use strict";

import {getMovies, creatMovie, updateMovie, deleteMovie} from "./movies-api.js";

let allMovies = [];

async function main() {
	allMovies = await getMovies();

	let showLoad = document.querySelector('#loader')
	showLoad.style.display = 'none';

	for(let i=0; i < allMovies.length; i++){
		let id = allMovies[i].id
		let title = allMovies[i].title
		let genre = allMovies[i].genre
		let rating = allMovies[i].rating
		let summary = allMovies[i].movieSummary
		let poster = allMovies[i].posterURL
		let grabMain = document.querySelector('main')
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

		await creatMovie({
			title: title,
			genre: genre,
			rating: rating,
			movieSummary: movieSummary,
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
			let genreEdit = document.querySelector('#edit-genre')
			let ratingEdit = document.querySelector('#edit-rating')
			let summaryEdit = document.querySelector('#edit-summary')
		})
	}

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

