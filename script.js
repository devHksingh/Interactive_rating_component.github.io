const allRatingNumber = document.querySelectorAll(".star");

// Update the rated number. star->Rated number , i->index value

allRatingNumber.forEach((star, i) => {
  star.onclick = function () {
    let currentRatedNumber = i + 1;
    document.querySelector("#no_of_stars").innerHTML = currentRatedNumber;
  };
});

// Creating interative Submit btn to open thank you note
document.querySelector(".btn-submit").addEventListener("click", () => {
  document.querySelector(".thank_you_block").style.display = "block";
});
