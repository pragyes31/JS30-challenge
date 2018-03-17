const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

function findMatches(wordToMatch, cities) {
  return cities.filter(places => {
    const regex = new RegExp(wordToMatch, 'gi');
    return places.city.match(regex) || places.state.match(regex);
  });
}

function displayMatches() {
  const match = findMatches(this.value, cities); 
    const html = match.map(places => {
            return `
                    <li>
<span class="name">${places.city}, ${places.state}</span>
<span class="population">${places.population}</span>
</li>
`;
    }).join("");
    suggestions.innerHTML = html;
  
}
const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions")

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);``