export const getAllPokemon = (url) => {
    return new Promise((resoolve, reject) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => resoolve(data));
    });
}

export const getPokemon  = (url) => {
    return new Promise((resoolve, reject) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => resoolve(data));
    });
};