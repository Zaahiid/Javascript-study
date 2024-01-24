// const coding = ["js", "ruby", "java", "python", "cpp"];

// const values =coding.forEach(item => {
//     return item;
// });

// console.log(values);

// for...each returns undefined

// filter loop

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((nums) => nums > 4);

console.log(newNums);

// using for...each to return an array

const myNums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums2 = [];

myNums2.forEach((nums) => {
  if (nums > 4) {
    newNums2.push(nums);
  }
});

// console.log(newNums2);


// filter with an array of objects

const books = [
    {
      title: "The Great Gatsby",
      genre: "Novel",
      publishYear: 1925,
      editionYear: 2004  
    },
    {
      title: "The Odyssey",
      genre: "Epic Poem",
      publishYear: -800, 
      editionYear: 2021
    },
    {
      title: "The Art of Computer Programming",
      genre: "Computer Science",
      publishYear: 1968,
      editionYear: 2000
    },
    {
      title: "The Republic",
      genre: "Philosophy",
      publishYear: -380,
      editionYear: 2022
    },
    {
      title: "A Tale of Two Cities",
      genre: "Novel",
      publishYear: 1859,
      editionYear: 2022
    },
    {
      title: "Leaves of Grass",
      genre: "Poetry",
      publishYear: 1855,
      editionYear: 2005
    },
    {
      title: "Anne of Green Gables",
      genre: "Novel",
      publishYear: 1908,
      editionYear: 2022
    },
    {
      title: "The Time Machine",
      genre: "Science Fiction",
      publishYear: 1895,
      editionYear: 2022
    },
    {
      title: "The Prince",
      genre: "Philosophy",
      publishYear: 1532,
      editionYear: 2005
    }, 
    {
      title: "The Trial",
      genre: "Novel",
      publishYear: 1925,
      editionYear: 2022
    },
    {
      title: "Gulliver's Travels", 
      genre: "Satire",
      publishYear: 1726,
      editionYear: 2010
    },
    {
      title: "The Divine Comedy",
      genre: "Epic Poem", 
      publishYear: 1320,
      editionYear: 2022
    },
    {
      title: "To Kill a Mockingbird",
      genre: "Novel",
      publishYear: 1960,
      editionYear: 2022
    },
    {
      title: "The Histories", 
      genre: "History",
      publishYear: -440,
      editionYear: 1998
    }
  ];
  
  const novels = books.filter((book)=> book.genre === "Novel");
  
  console.log(novels)

  const userBooks = books.filter((book)=>{
    return book.genre === "Novel" && book.publishYear >= 1960
  });
  
  console.log(userBooks)