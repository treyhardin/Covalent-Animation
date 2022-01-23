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



// Code Drawer Toggle

const codeToggle = document.querySelector('#code-toggle');
const codeDrawer = document.querySelector('.code-drawer');
drawerToggle(codeToggle, codeDrawer);



// Override Dropdown

window.addEventListener('load', () => {

    //

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
            });
        });

    });
});

