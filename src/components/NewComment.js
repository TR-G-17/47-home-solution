import React, {useState} from "react"

const getClearComment = () => {
    return {
        name: '',
        comment: '',
        rating: 0
    }
}

const NewComment =() => {
    const [comment, setComment] = useState(getClearComment())
    const onChangeHandle = event => {
        setComment((comment) => {
            return {...comment, [event.target.name]: event.target.value }
        })
        console.log( comment )
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
                        defaultValue={comment.name}
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
                        defaultValue={comment.comment}
                        onChange={onChangeHandle}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Rating</label>
                    <select className="form-select"
                            aria-label="Default select example"
                            name="rating"
                            defaultValue={comment.rating}
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
            </div>
        </div>
    )
}

export default NewComment