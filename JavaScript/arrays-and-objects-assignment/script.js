//Task 1
let book ={
    title:"No Longer Human",
    author: "Osamu Dazai",
    pages: 42,
    isRead: false,
};

console.log(book.title, book.author, book.pages, book.isRead);
console.log(book["title"],book["author"],book["pages"],book["isRead"]);
book.isRead = true;
book.genre = "Fiction";
console.log(book);

//Task 2
let movies =[
    movie1 = {
        title: "Howls Moving Castle",
        director: "Hayao Miyazaki",
        year: 2004,
    },
    movie2 = {
        title: "Spirited Away",
        director: "Hayao Miyazaki",
        year: 2001,
    },
    movie3 = {
        title:"My Neighbor Totoro", 
        director: "Hayao Miyazaki",
        year: 1988,
    }
];

console.log(movies[1].title);
movies.push(movie3={
    title: "Princess Mononoke",
    director: "Hayao Miyazaki",
    year: 1997,
});

movies[0].year = 2023;
console.log(movies);

//Task 3

let student ={
    name: "Czyrah Manzano",
    age: 22,
    subjects: ['HTML', 'CSS', 'JS'],
};

console.log(student.subjects[0]);
student.subjects.push('Python');
console.log(student);

//Task 4
let recipe ={
    name: "Mars Bar Brownies",
    ingredients: [
        first ={
            name: "Mars Bars",
            quantity: "6x53g",
        },
        second ={
            name: "Butter",
            quantity: "100g",
        },
        third ={
            name: "Eggs",
            quantity: "3",
        },
        fourth ={
            name: "Flour",
            quantity: "1/2 cup",
        },
        fifth ={
            name: "Cocoa Powder",
            quantity: "50g",
        },
    ],
    isVegetarian: false
};

recipe.ingredients.push( sixth ={
    name: "Chocolate Chips",
    quantity:"10g",
});

console.log(recipe.ingredients[1].name);
console.log(recipe);