// grab elements from DOM
const cardContainer = document.querySelector('.js-card__container');
const thankCard = document.querySelector('.js-card__thank');
const ratingForm = document.querySelector('.js-form-rating');
const cardBtn = document.querySelector('.js-card__btn');
const selectedRate = document.querySelector(':checked');
const ratingItems = document.querySelectorAll('.js-form-radio');
const cardRatingValue = document.querySelector('.js-card__rating-value');

// set the '5' rating as default rating
let rateValueSelectedByUser = 5;

ratingForm.addEventListener('change', (e) => {

    //  store selected rating value
    rateValueSelectedByUser = Number(e.target.value);

    Array.from(ratingItems).forEach((rateItem) => {
        rateItem.removeAttribute('checked');
        rateItem.parentNode.classList.remove('active');

        if (e.target === rateItem) {
            e.target.setAttribute('checked', 'checked');
            e.target.parentNode.classList.add('active');
        }
        
    })
})

// add event listener to submit card btn
ratingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    cardRatingValue.innerHTML = rateValueSelectedByUser;
    cardContainer.classList.add('hidden');
    thankCard.classList.remove('hidden');
});