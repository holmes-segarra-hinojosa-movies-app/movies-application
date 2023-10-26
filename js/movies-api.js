const MOVIE_HOST = "http://localhost:3000";
export function getMovies() {
	try {
		return fetch(`${MOVIE_HOST}/movies`)
			.then(response => response.json())
			.then( movies => {
				return movies;
			});
	} catch(error) {
		console.error(error);
	}
}

export const creatMovie = async function (movie) {
	try {
		const url = `${MOVIE_HOST}/movies`;
		const options = {
			method: "POST",
			headers: {
				"Content-type": "application/json"
			},
			body: JSON.stringify(movie)
		};
		const response = await fetch(url, options);
		const newMovie = await response.json();
		return newMovie;
	} catch(error) {
		console.error(error);
	}
}

export async function updateMovie (id, movie){
	try {
		const url = `${MOVIE_HOST}/movies/${id}`;
		const options = {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(movie)
		};
		const response = await fetch(url, options);
		const updatedMovie = await response.json();
		return updatedMovie;
	} catch (error) {
		console.error(error);
	}
}

export const deleteMovie = async(id)=>{
	try {
		const url = `${MOVIE_HOST}/movies/${id}`
		const options = {
			method: 'DELETE'
		};
		const response = await fetch(url, options);
		const deletedBook = await response.json();
		return deletedBook;
	}catch(error){
		console.error(error)
	}
}
