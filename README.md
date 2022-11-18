# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![rating card screenshot.png](./screenshot-1.png)
![thank you card screenshot.png](./screenshot-2.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/sarah27h/interactive-rating-component)
- Live Site URL: [Add live site URL here](https://sarah27h.github.io/interactive-rating-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

1- It's not possible to modify pseudo-classes using JavaScript so I have to create an active class and add and remove it.

To see how you can add code snippets, see below:

```html
<ul class="card__rating js-card__rating">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
</ul>
```
```css
.card__rating li:active,
.card__rating li.active {
    background: var(--orange-color);
    color: var(--text-color-2);

}
```
```js
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
        })
        

    }
})
```

### Continued development

- Using SVG instead of images.

## Author

- Website - [Sarah Hassan Ahmed](https://sarah27h.github.io/)
- Frontend Mentor - [@sarah27h](https://www.frontendmentor.io/profile/sarah27h)

## Acknowledgments

- [stackoverflow](https://stackoverflow.com/questions/44091421/active-pseudo-class-making-a-keypress-act-like-a-mouse-click-with-respect-to) - This answer give me tip for using active class in js instead of modifying pseudo-classes helped me
