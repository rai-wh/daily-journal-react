import React, { useEffect, useState } from "react"

export const Journal = () => {
    const [notes, setNotes] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/entries")
                .then(res => res.json())
                .then(
                    (entries) => {
                        setNotes(entries)
                    }
                )
        },
        []
    )

    return (
        <>
            <h1>My Daily Journal</h1>
            {
                notes.map(
                    (note) => {
                        return <p key={`note--${note.id}`}>
                            On {note.date}, I learned about {note.concept}. 
                            {note.entry}
                            I'm feeling {note.moodId}
                            </p>
                     }
                )
            }
            )
        </>
    )
}