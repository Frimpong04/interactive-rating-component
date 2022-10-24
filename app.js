//selected elements
let ratingForm = document.querySelector('.rating-form');
let thankYou = document.querySelector('.thank-you');
let rating = document.querySelectorAll('.rating');
let submitButton = document.querySelector('.btn');
let ratingText = document.querySelector('.rating-text');


//add event listeners
let ratingValue;
for (let i=0; i<rating.length; i++){
    rating[i].addEventListener('click', (e) => {
        console.log(e.target.textContent);
        e.target.style.backgroundColor ="hsl(216, 12%, 54%)";
        e.target.addEventListener.color = "hsl(0, 0%, 100%)";
        ratingValue = e.target.textContent;
    });
}

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    ratingForm.style.display = 'none';
    thankYou.style.display = 'flex';
    ratingText.textContent = `You have selected ${ratingValue} out of 5`;
});