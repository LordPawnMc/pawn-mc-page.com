// Add your JavaScript code here
const subscribeButton = document.getElementById('subscribeButton');
const likeButton = document.getElementById('likeButton');
const getLinkButton = document.getElementById('getLinkButton');

subscribeButton.addEventListener('click', () => {
    subscribeButton.disabled = true;
    setTimeout(() => {
        subscribeButton.innerText = 'Finished';
        likeButton.disabled = false;
    }, 10000);
});

likeButton.addEventListener('click', () => {
    likeButton.disabled = true;
    setTimeout(() => {
        likeButton.innerText = 'Finished';
        getLinkButton.disabled = false;
    }, 10000);
});

getLinkButton.addEventListener('click', () => {
            window.location.href = 'https://lordpawnmc.github.io/pawn-mc-page.com/';
   
   alert('Entering to the Link...');
});