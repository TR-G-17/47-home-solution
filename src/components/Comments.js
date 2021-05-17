import React from 'react'
import CommentRecord from "./CommentRecord";

const Comments = ({comments}) => {


    return (
        <ul className="list-group">
            {comments.map((comment) => (<li className="list-group-item" key={comment.id}>{<CommentRecord comment={comment} /> }</li>))}
        </ul>
    )
}

export default Comments