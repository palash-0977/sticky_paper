const inputBox = document.getElementById('input-box');
const nextPageButton = document.getElementById('next-page');
inputBox.addEventListener('input', () => {
    if (inputBox.value.trim() !== ''){
        nextPageButton.classList.add('enabled');

    }else{
        nextPageButton.classList.remove('enabled');

    }
}); 

nextPageButton.addEventListener('click', (e) => {
    if(!nextPageButton.classList.contains('enabled')){
        e.preventDefault()
    }
});