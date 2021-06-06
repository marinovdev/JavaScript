console.log('! observer loaded');
let sec2 = document.querySelectorAll('section')[1];
let options = {
    root: null,
    treshold: 0,
    rootMargin: '-200px'
};
let observer = new IntersectionObserver(function(entries, observer){
entries.forEach( entry =>  {
        entry.target.classList.toggle('inverse');
        console.log(entry)
})
}, options);

let header = document.querySelector('.header');
observer.observe(sec2);