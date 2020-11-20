


const getRatingClass = (averageRating) => {

    let colorClass;

    if (averageRating > 7)      colorClass = "high-rating";
    else if (averageRating > 4) colorClass = "mid-rating";
    else if (averageRating > 0) colorClass = "low-rating";
    else colorClass = "no-rating";

    return colorClass;

}
export {getRatingClass}


