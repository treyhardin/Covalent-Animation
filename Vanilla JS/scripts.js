// Drawer Helper 

let drawerElements = [];

let drawerToggle = (toggle, drawer) => {

    window.addEventListener('click', (e) => {
        if(e.target !== toggle) {
            if (e.target == drawer || drawer.contains(e.target)) {
                return;
            } 
            drawer.classList.remove('open');
            // console.log(e.target);
        }
    });

    toggle.addEventListener('click', (e) => {
        if (drawer.classList.contains('open')){
            drawer.classList.remove('open');
            return;
        }
        drawer.classList.add('open');
    });

}


// Animate Stuff
let animatedElements = document.querySelectorAll('.animate');
let viewportThreshold = 1.5;

let isInViewport = function (element) {
    var bounding = element.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight * viewportThreshold || document.documentElement.clientHeight * viewportThreshold) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

window.addEventListener('scroll', (e) => {
    animatedElements.forEach(element => {
        if(isInViewport(element)) {
            element.classList.add('in-view');
        }
    });
});

// Reload DOM Elements 
let reloadButtons = document.querySelectorAll('.button-reload');

let reloadContent = () => {
    animatedElements.forEach(element => {

        let initialTransition = element.style.transition;
        element.style.transition = "none";
        element.classList.remove('in-view');

        if(isInViewport(element)) {
            element.style.transition = initialTransition;
            element.classList.add('in-view');
        }
    });
};

reloadButtons.forEach(button => {
    button.addEventListener('click', reloadContent, false);
});




// Code Drawer Toggle

const codeToggle = document.querySelector('#code-toggle');
const codeDrawer = document.querySelector('.code-drawer');
drawerToggle(codeToggle, codeDrawer);



window.addEventListener('load', () => {

    // Override Dropdown

    let dropdownElements = document.querySelectorAll('.dropdown-selector');

    dropdownElements.forEach(element => {

        // Create Custom Dropdown
        let newDropdownEl = document.createElement("ul");
        element.append(newDropdownEl);
        newDropdownEl.className = "dropdown-menu";

        // Create Custom Dropdown Options
        let defaultOptionElements = element.querySelectorAll('option');

        // Toggle Dropdown 
        let defaultDropdown = element.querySelector('select');
        drawerToggle(element, element);
        
        defaultOptionElements.forEach(option => {

            // Create DOM Element 
            let newOptionEl = document.createElement("li");
            newOptionEl.className = "dropdown-item";
            newOptionEl.innerHTML = option.text;
            newDropdownEl.append(newOptionEl);
            
            // Change Value on Click
            newOptionEl.addEventListener('click', () => {
                defaultDropdown.value = option.value;
                updateAnimationPreset(defaultDropdown, option.value);
                reloadContent();
            });
        });

    });
});


// Get Field Values

let selectors = document.querySelectorAll('select');
let selections = new Map();
let root = document.documentElement;

let setVariables = () => {
    selectors.forEach(selector => {
        updateAnimationPreset(selector, selector.value);
        // selections.set(selector.name, selector.value);
    });
}

let updateAnimationPreset = (element, value) => {
    selections.set(element.name, value);

    // Update Display
    let presetDisplay = document.getElementById(element.name);
    if (presetDisplay) {
        presetDisplay.innerHTML = value;
    }
    

    // Update CSS Value or Class
    if (element.classList.contains('animation-variable')) {
        root.style.setProperty(`--${element.name}`, value);
    } else {
        animatedElements.forEach(animatedElement => {
            var fieldOptions = element.querySelectorAll('option');
            fieldOptions.forEach(option => {
                animatedElement.classList.remove(option.value);
            });
            animatedElement.classList.add(value);
        });
    }
}

setVariables();


