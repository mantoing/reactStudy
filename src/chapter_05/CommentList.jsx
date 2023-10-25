import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "원재윤",
        comment: "test 1",
    },
    {
        name: "원재윤1",
        comment: "test 2",
    },
    {
        name: "원재윤2",
        comment: "test 3",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );    
}

export default CommentList;
