const form = document.querySelector('form');
const input = document.querySelector('input');
const searchBtn = document.querySelector('button');

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    console.log("SUBMITTED but on the same page!!");
    const value = form.elements.query.value;
    const headers = {params: {q: value}};
    const results = await axios.get("https://api.tvmaze.com/search/shows", headers);
    getImages(results.data);
})

const getImages = (showRes) => {
    for (let result of showRes) {
        if (result.show.image) {
            const poster = document.createElement('img');
            poster.src = result.show.image.medium;
            document.body.append(poster);
            poster.classList.add('container');
        }
        else {
            continue;
        }
    }
}