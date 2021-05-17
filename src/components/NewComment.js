import React, {useContext, useState} from "react"
import {bookContext} from "./App";

const getClearComment = () => {
    return {
        name: '',
        comment: '',
        rating: 0
    }
}

const NewComment =() => {
    const ctn = useContext(bookContext)

    const [comment, setComment] = useState(getClearComment())
    const onChangeHandle = event => {
        setComment((comment) => {
            return {...comment, [event.target.name]: event.target.value }
        })
    }
    const onClickHandle = event => {
        event.preventDefault();
        if ( comment.name.trim() === '' || comment.comment.trim() === '' || comment.rating === 0 ) {
            return
        }

        ctn.addComment(comment)

        setComment(getClearComment())
    }

    return (
        <div className="card mt-3">
            <div className="card-body">
                <div className="h4 card-title">New comment</div>
                <div className="mb-3">
                    <label htmlFor="nameText" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control form-control-sm"
                        id="nameText"
                        name="name"
                        placeholder="Your Name here"
                        value={comment.name}
                        onChange={onChangeHandle}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="commentText" className="form-label">Comment</label>
                    <textarea
                        className="form-control form-control-sm"
                        id="commentText"
                        rows="3"
                        name="comment"
                        value={comment.comment}
                        onChange={onChangeHandle}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Rating</label>
                    <select className="form-select"
                            aria-label="Default select example"
                            name="rating"
                            value={comment.rating}
                            onChange={onChangeHandle}
                    >
                        <option >Open this select menu</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <button type="button" className="btn btn-sm btn-success" onClick={onClickHandle}>Add Comment</button>
            </div>
        </div>
    )
}

export default NewComment