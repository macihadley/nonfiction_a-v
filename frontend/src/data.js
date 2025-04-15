import titles from "./titles.json";

const sections = titles.map((book) => ({
    title: book.title, 
    filename: book.filename || "", 
    audio: book.audio || null,
    graph: book.graph || null,
}));

export default sections;
