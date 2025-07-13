import './DedicatedBlog.css'
import Banner from '../../Components/Banner/Banner'
import { useState } from 'react'
import blogs from '../../Utils/MockData'

import React from 'react'

function DedicatedBlog() {
    const [blogID, setblogID] = useState(1);
    const [blog, setblog] = useState('');
    let blogToDisplay=blogs.filter(blog=>blog.id==blogID)[0];

  return (
    <div>
        <Banner />
        <h1>{blogToDisplay.title}</h1>
        <h6>{blogToDisplay.category}</h6>
        <p>{blogToDisplay.content}</p>

    </div>
  )
}

export default DedicatedBlog