



const addMovie = (title, year, genre, image, synopsis) => {


    return {
        
        type: "ADD_MOVIE",
        title: title,
        year: year,
        genre: genre,
        image: image,
        synopsis: synopsis

    };
}

export { addMovie };