import React from 'react'
import Filter from './Filter'
import Place_Show from './show'
import {

    Route,

  } from "react-router-dom";
export default function Index({match}) {
    console.log(match)
    return (
        <div>
            <h1>This is the Index page</h1>
            {/* {emplement a search feature} */}
            <Filter/>
            

        </div>
    )
}
