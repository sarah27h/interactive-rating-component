// grab elements from DOM
const cardRatingList = document.querySelector('.js-card__rating');
const ratingListItems = document.querySelector('.js-card__rating').children;
const cardBtn = document.querySelector('.js-card__btn');
const cardContainer = document.querySelector('.js-card__container');
const thankCard = document.querySelector('.js-card__thank');
const cardRatingValue = document.querySelector('.js-card__rating-value');

let rateValueSelectedByUser = 0;


cardRatingList.addEventListener('click', (e) => {
    if (e.target.nodeName.toLowerCase() == 'li') {
        
        //  store selected rating value
        rateValueSelectedByUser = Number(e.target.innerHTML);

        Array.from(ratingListItems).forEach((item) => {
            
            // remove active from pervious clicked items
            item.classList.remove('active');
            
            // check and add active class to clicked rating item
            if(item === e.target && !e.target.classList.contains('active')) {
                e.target.classList.add('active');  
            }
            console.log(item)
        })
        

    }
})

// add event listener to submit card btn
cardBtn.addEventListener('click', (e) => {
    cardContainer.classList.add('hidden');
    thankCard.classList.remove('hidden');
    cardRatingValue.innerHTML = rateValueSelectedByUser;
})