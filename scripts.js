const codeToggle = document.querySelector('#code-toggle');
const codeDrawer = document.querySelector('#code-drawer');
const codeDrawerOverlay = document.querySelector('#code-drawer-overlay');

let toggleCodeDrawer = () => {
    if (codeDrawer.classList.contains("open")){
        codeDrawer.classList.remove('open');
        return;
    }
    codeDrawer.classList.add('open');
}

codeToggle.addEventListener('click',toggleCodeDrawer);
codeDrawerOverlay.addEventListener('click',toggleCodeDrawer);