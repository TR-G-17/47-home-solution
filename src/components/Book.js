import React from 'react';
import Comments from "./Comments";
import NewComment from "./NewComment";

const Book = ({book}) => {
    return (
        <div className="row">
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {book.title}
                        </h4>
                        <h5 className="card-title">
                            {book.author}
                        </h5>
                        <p className="card-text">{book.year}</p>
                        <p className="card-text">{book.avgRating}</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <Comments comments={book.comments} />
                <NewComment />
            </div>
        </div>
    )
}

export default Book