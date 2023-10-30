"use strict";

import {getMovies, creatMovie, updateMovie, deleteMovie} from "./movies-api.js";

let allMovies = [];

async function main() {
	allMovies = await getMovies();

	let showLoad = document.querySelector('#loader')
	showLoad.style.display = 'none';

	for(let i= 0; i < allMovies.length; i++){
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
		showRating.setAttribute('class', `rating-${i}`)
		let showSummary = document.createElement('p')
		showRating.setAttribute('class', `summary-${i}`)
		newCard.dataset.id = id;
		let showPoster = document.createElement('img')
		showPoster.setAttribute('class', `poster-${i}`)
		showPoster.setAttribute('src', `${poster}`)





		showTitle.innerText = title;
		showGenre.innerText = `Genre: ${genre}`;
		showRating.innerText = `Rating: ${rating}`;
		showSummary.innerText = summary;
		// showPoster.innerHTML = poster;

		newCard.appendChild(showTitle)
		newCard.appendChild(showGenre)
		newCard.appendChild(showRating)
		newCard.appendChild(showSummary)
		newCard.appendChild(showPoster)

		let btnEdit = document.querySelector(`.card-${[i]}`)

		let btnDivEdit = document.createElement('div')
		btnDivEdit.classList.add('btn-div', `btn-div-${[i]}`)
		btnEdit.appendChild(btnDivEdit)

		let makeEditBtn = document.createElement('button')
		makeEditBtn.classList.add('edit-btn',`edit-btn-${[i]}`)
		makeEditBtn.setAttribute('data-id', `${id}`)

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
	for(let i= 0; i < allMovies.length; i++) {
		let id = allMovies[i].id
		let title = allMovies[i].title
		let genre = allMovies[i].genre
		let rating = allMovies[i].rating
		let summary = allMovies[i].movieSummary
		let poster = allMovies[i].posterURL


		let editMovieBtn = document.querySelector(`.edit-btn-${[i]}`)

		editMovieBtn.addEventListener('click', async function (event) {
			showEditForm.classList.toggle('hidden')
			let editCard = event.target.parentElement.parentElement;

			console.log(editCard);

			let titleEdit = document.querySelector('#edit-title')
			let genreEdit = document.querySelector('#edit-genre')
			let ratingEdit = document.querySelector('#edit-rating')
			let summaryEdit = document.querySelector('#edit-summary')
			let id = editCard.dataset.id;


			showEditForm[1].value = titleEdit
			showEditForm[2].value = genreEdit
			showEditForm[3].value = ratingEdit
			showEditForm[4].value = summaryEdit
			showEditForm[5].value = id



			titleEdit.value = editCard.querySelector('h3').innerText
			genreEdit.value = editCard.querySelector(`p.genre-${[i]}`).innerText
			ratingEdit.value = editCard.querySelector('p:nth-of-type(2)').innerText
			summaryEdit.value = editCard.querySelector('p:last-of-type').innerText



///////////////SAVE EDIT OF MOVIE
			let submitEditBtn = document.querySelector('.submit-btn')
			submitEditBtn.addEventListener('click', saveEditedInfo)

			function saveEditedInfo(event) {
				event.preventDefault();
				let idEdit = document.querySelector('#edit-id').value
				let newTitle = document.querySelector('#edit-title').value
				let newGenre = document.querySelector('#edit-genre').value
				let newRating = document.querySelector('#edit-rating').value
				let newSummary = document.querySelector('#edit-summary').value

				let editCard = document.querySelector(`[data-id='${id}`);
				console.log(editCard);
				console.log(idEdit);

				editCard.querySelector('h3').innerText = newTitle;
				editCard.querySelector(`p.genre-${[i]}`).innerText = newGenre;
				editCard.querySelector('p:nth-of-type(2)').innerText = newRating;
				editCard.querySelector('p:last-of-type').innerText = newSummary;

				showEditForm.classList.toggle('hidden');
			}
		});
	}











	for(let i= 0; i < allMovies.length; i++) {
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

