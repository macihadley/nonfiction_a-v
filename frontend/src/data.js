import titles from "./titles.json";

const sections = titles.map((book) => ({
    title: book.title, 
    filename: book.filename || "", 
    audio: book.audio || null
}));

export default sections;
