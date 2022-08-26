const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
  },
  {
    title: "1984",
    author: "George Orwell",
    alreadyRead: true,
    img:
      "https://m.media-amazon.com/images/P/3730609769.01._SCLZZZZZZZ_SX500_.jpg"
  },
  {
    title: "The Art of War",
    author: "Sun Tzu",
    alreadyRead: false,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/61VfmWeyHtL.jpg"
  },
  {
    title: "Berlin Alexanderplatz",
    author: "Alfred Doblin",
    alreadyRead: false,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/61DZKY-iEML.jpg"
  },
  {
    title: "Snowcrash",
    author: "Neal Stephenson",
    alreadyRead: true,
    img:
      "https://assets.thalia.media/img/artikel/bea64dc49079c13670c9906305b5343e03ab059d_BF2000-2000.jpeg"
  },
  {
    title: "Harry Potter und der Stein der Weisen",
    author: "J.K Rowling",
    alreadyRead: true,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/91gILL2JmjL.jpg"
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg"
  }
];

// reverse author name in books array
const reverseAuthorNames = (book) => {
  return book.author.split(" ").reverse().join(", ")
}

// sort books by alphabetical order
const sortNameAlphabetically = (book) => {
  return book.sort((a, b) => a.title.localeCompare(b.title))
}

// select ul element
const bookUl = document.querySelector(".book-list")

sortNameAlphabetically(books).forEach((e) => {

  // create list item
  const bookItem = document.createElement("li")
  bookItem.classList.add("card", "d-flex")

  // create image
  const cardImg = document.createElement("img")
  cardImg.classList.add("card-img-top", "book-cover")
  cardImg.src = e.img

  // append image to card
  bookItem.append(cardImg)

  // create card body
  const cardBody = document.createElement("div")
  cardBody.classList.add("card-body")
  
  // create book title
  const cardTitle = document.createElement("h5")
  cardTitle.classList.add("card-title")
  cardTitle.textContent = e.title
  
  // create author name
  const author = document.createElement("p")
  author.classList.add("card-text")
  author.textContent = reverseAuthorNames(e)
  
  // create button
  const link = document.createElement("button")
  link.classList.add("btn")
  link.classList.add(e.alreadyRead ? "btn-secondary" : "btn-warning")
  link.textContent = e.alreadyRead ? "already read" : "not yet read"
  link.href = e.link
  
  // append card body and button to li
  bookItem.append(cardBody, link)
  // bookItem.append(link)

  // append title and author to card body
  cardBody.append(cardTitle, author)

  // append book item to book ul
  bookUl.append(bookItem)

})
