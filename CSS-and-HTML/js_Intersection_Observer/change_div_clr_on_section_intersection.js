/*
https://www.youtube.com/watch?v=RxnV9Xcw914
A guide how to use the Observer API
The background color of the green header changes to white when it reaches the green section
and the changes back to green when it leaves it.
rootMargin works only with % and px. It is equvalent to the CSS margin prop
treshold is value from 0 to 1.0  it specifies the proportion of visibility of the element
*/

console.log('! observer loaded');
let header = document.querySelector('.header');
let sec2 = document.querySelector('.sec2');
let options = {
    rootMargin: '-8% 0% -92% 0%', // root View port moved 90% up
    treshold:0 // when the entire element is visible
};
let observer = new IntersectionObserver(function(entries, observer){
    console.log('observing .sec2')
entries.forEach( entry =>  {
    // if section is visible add the inverse class
    if(entry.isIntersecting){
        header.classList.add('inverse');
        console.log(sec2)

    }
    // if section is not visible remove the inverse class
    else if(!entry.isIntersecting){
        header.classList.remove('inverse');
        console.log(sec2);
    }
})
}, options);

observer.observe(sec2);