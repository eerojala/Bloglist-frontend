import React from 'react'
import Blog from './Blog'
import Button from './Button'

const BlogView = ({user, blogs, logout}) => {
    if (user === null) {
        return null
    }

    return(
        <div>
            <p>Logged in as {user.name} <Button onClick={logout} label="Log out" /></p>
            <h2>Blogs</h2>
            {blogs.map(blog => <Blog key={blog.id} blog={blog}/>)}
        </div>
    )
}

export default BlogView