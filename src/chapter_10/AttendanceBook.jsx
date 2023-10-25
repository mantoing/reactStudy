import React from "react";

const students = [
    {
        id: 1,
        name: "1",
    },
    {
        id: 2,
        name: "2",
    },
    {
        id: 3,
        name: "3",
    },
    {
        id: 4,
        name: "4",
    },
    {
        id: 5,
        name: "5",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((students) => {
                return <li key={students.id}>{students.name}</li>
            })}
        </ul>
    );
}

export default AttendanceBook;