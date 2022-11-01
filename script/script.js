var clicks = 0;

function onClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
};


function loadData() {
    fetch('https: //aws.random.cat/meow')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            document.getElementById("data").innerHTML = data.message;
            document.getElementById("doggy").src = data.message;
        });
}
const catImage = document.getElementById('cat-img');

const catButton = document.getElementById('btn-cat');


catButton.addEventListener('click', fetchCatImage);


function fetchCatImage() {
    fetch('https://aws.random.cat/meow')
        .then(response => response.json())
        .then(data => {
            catImage.innerHTML = `<img src="${data.file}"/>`;
        })
}

