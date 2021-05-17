import React from 'react'

const CommentRecord = ({comment}) => {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{comment.name}</h4>
                <p className="card-text">{comment.comment}</p>
                <p className="card-text">Rating: {comment.rating}</p>
            </div>
        </div>
    )
}

export default CommentRecord