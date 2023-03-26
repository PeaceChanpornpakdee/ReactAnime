const courses = [
  {
    id: 1,
    title: "Weathering with You",
    slug: "weathering-with-you",
    authorId: 1,
    category: "Anime",
  },
  {
    id: 2,
    title: "The Garden of Words",
    slug: "the-garden-of-words",
    authorId: 1,
    category: "Anime",
  },
  {
    id: 3,
    title: "Your Name",
    slug: "your-name",
    authorId: 1,
    category: "Anime",
  },
  {
    id: 4,
    title: "5 Centimeters per Second",
    slug: "5-centimeters-per-second",
    authorId: 1,
    category: "Anime",
  },
  {
    id: 5,
    title: "Weathering with You",
    slug: "weathering-with-you-2",
    authorId: 1,
    category: "Anime",
  },
  {
    id: 6,
    title: "Voices of a Distant Star",
    slug: "voices-of-a-distant-star",
    authorId: 1,
    category: "Anime",
  },
  {
    id: 7,
    title: "Spirited Away",
    slug: "spirited-away",
    authorId: 2,
    category: "Anime",
  },
  {
    id: 8,
    title: "My Neighbor Totoro",
    slug: "my-neighbor-totoro",
    authorId: 2,
    category: "Anime",
  },
  {
    id: 9,
    title: "Princess Mononoke",
    slug: "princess-mononoke",
    authorId: 2,
    category: "Anime",
  },
  {
    id: 10,
    title: "Howl's Moving Castle",
    slug: "howl-s-moving-castle",
    authorId: 2,
    category: "Anime",
  },
];

const authors = [
  { id: 1, name: "Makoto Shinkai" },
  { id: 2, name: "Hayao Miyazaki" },
  { id: 3, name: "Akira Toriyama" },
  { id: 4, name: "Eiichiro Oda" },
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: "",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors,
};
