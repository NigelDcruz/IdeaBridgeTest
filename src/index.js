import './style/style.scss';


let toggleNav = document.getElementById('toggle');
let sidebar = document.getElementById('sidebar');
let toggleFilter = document.getElementById('toggle-filter');
let toggleFilterTarget = document.getElementById('section__filter-target');

toggleNav.addEventListener('click', () => {
 
    toggleNav.classList.toggle('on');
    sidebar.classList.toggle('active');
    
})

toggleFilter.addEventListener('click', () => {
 
    toggleFilterTarget.classList.toggle('active-filters');
    
})
