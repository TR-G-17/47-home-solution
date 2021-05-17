import React, {useEffect, useState} from 'react'
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

export const bookContext = React.createContext()

const App = () => {
    const [book, setBook] = useState(getBook())

    const addComment = (comment) => {
        const newComments = [...book.comments]
        newComments.push({...comment, id: Date.now(), rating: +comment.rating})
        let avg = newComments.reduce((sum, comnt) => sum += comnt.rating, 0) / newComments.length
        setBook({...book, avgRating: avg, comments: newComments})
    }


    return (
        <section className="container">
            <bookContext.Provider value={{addComment}}>
                <Book book={book} />
            </bookContext.Provider>
        </section>
    )
}

export default App