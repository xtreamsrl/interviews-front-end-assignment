import { useState } from "react"

export default function Tag({ tagSubject }) {

    return (

        < button className='tag'>#{tagSubject}</button>
    )
}