'use strict';

const items = document.querySelectorAll('.number');

//Countdown date
const openDate = new Date(2021, 9, 1, 12, 0);

//Countdown date in time form
const openDateTime = openDate.getTime();



function timeLeft() {
    //Cuttent date time
    const currentDateTime = new Date().getTime();

    const difference = openDateTime - currentDateTime;

    //1000ms = 1s
    //1min = 60s
    //1hr = 60min
    //1day = 24hr

    //Values in ms
    const oneDay = 24*60*60*1000;
    const oneHr = 60*60*1000;
    const oneMin = 60*1000;

    //Convert difference to individual timeleft
    const days = Math.floor(difference / oneDay);
    const hrs = Math.floor((difference % oneDay) / oneHr);
    const mins = Math.floor((difference % oneHr) / oneMin);
    const secs = Math.floor((difference % oneMin) / 1000);

    //Store conversion in array
    const values = [days,hrs,mins,secs];

    //Loop thru items and append values into each item
    items.forEach(function(item, index) {
        item.innerHTML = values[index];
    })


    //Count
    let countdown = setInterval(timeLeft,1000);
    
    
}

timeLeft()




//Get notified 
const notified = document.querySelector('#notified');
const form = document.querySelector('form');
const close = document.querySelector('#close');
const modal = document.querySelector('#modal');

notified.addEventListener('click', () => {
    modal.style.opacity = '1'
    modal.style.pointerEvents = 'initial'
})


close.addEventListener('click', (e) => {
    modal.style.opacity = '0'
    modal.style.pointerEvents = 'none'
    email.parentElement.nextElementSibling.textContent = ``;
    email.value = ''
})


//Form validation
const email = document.querySelector('#email');

form.addEventListener('submit', (e) => {
    //If valid, submit
    if(!email.validity.valid) {
        //If not valid display error & don't submit
        if(email.validity.valueMissing) {
            //If email input is empty
            email.parentElement.nextElementSibling.textContent = `Please enter a valid email`;
            e.preventDefault();
        } else if(email.validity.typeMismatch) {
            //If value is not an email
            email.parentElement.nextElementSibling.textContent = `Please enter a valid email`;
            e.preventDefault();
        }
    }
})
