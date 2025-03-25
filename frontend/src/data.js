import titles from "./titles.json";

const sections = titles.map((book) => ({
    title: book.title, // Get title from JSON
    content: "", // Content will be added later
}));

export default sections;
