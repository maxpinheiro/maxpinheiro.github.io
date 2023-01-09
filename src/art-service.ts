const prod = true;
const host = prod ? "https://immense-springs-34288.herokuapp.com" : "http://localhost:5000";

export interface Piece {
    name: string;
    url: string;
}

export async function getAllSketches(): Promise<Piece[]> {
    return fetch(`${host}/sketches`).then(res => res.json())
}

export async function getAllPaintings(): Promise<Piece[]> {
    return fetch(`${host}/paintings`).then(res => res.json())
}

export async function getAllGraphics(): Promise<Piece[]> {
    return fetch(`${host}/graphics`).then(res => res.json())
}

export async function getAllPieces(): Promise<Piece[]> {
    return fetch(`${host}/all`).then(res => res.json())
}

export async function getRandomPiece(): Promise<Piece[]> {
    return fetch(`${host}/random`).then(res => res.json())
}