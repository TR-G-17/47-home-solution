import React, {useState} from 'react'
import Book from "./Book";

const getBook = () => {
    return {
        id: Date.now(),
        author: 'John Doe',
        title: 'The Super Book',
        year: 2021,
        avgRating: 5,
        comments: [
            {id: Date.now()+1, name: 'Ivan', comment: 'Lol', rating: 5},
            {id: Date.now()+2, name: 'Marya', comment: 'Wow', rating: 5},
            {id: Date.now()+3, name: 'Jimmy', comment: 'Super book', rating: 5},

        ]
    }
}

const App = () => {

    const [book, setBook] = useState(getBook())

    return (
        <section className="container">
            <Book book={book}/>
        </section>
    )
}

export default App