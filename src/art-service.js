const prod = true;
const host = prod ? "https://immense-springs-34288.herokuapp.com" : "http://localhost:5000";

export async function getAllSketches() {
    return fetch(`${host}/sketches`).then(res => res.json())
}

export async function getAllPaintings() {
    return fetch(`${host}/paintings`).then(res => res.json())
}

export async function getAllGraphics() {
    return fetch(`${host}/graphics`).then(res => res.json())
}

export async function getAllPieces() {
    return fetch(`${host}/all`).then(res => res.json())
}

export async function getRandomPiece() {
    return fetch(`${host}/random`).then(res => res.json())
}