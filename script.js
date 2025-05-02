const API_KEY = "1d3a0eefa97b499d8fbc4ee93eeb40b7";
const url = "https;//newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews("India"));

async function fetchNews(query) {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    bindData(data.articles);
}

function bindData() {
    
}