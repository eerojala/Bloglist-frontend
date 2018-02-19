import React from 'react'
import Blog from './Blog'

const Blogs = ({user, blogs}) => {
    if (user === null) {
        return null
    }

    return(
        <div>
            <h2>Blogs</h2>
            <p>Logged in as {user.name}</p>
            {blogs.map(blog => <Blog key={blog._id} blog={blog}/>)}
        </div>
    )
}

export default Blogs