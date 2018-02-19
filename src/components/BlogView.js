import React from 'react'
import Blog from './Blog'
import LogoutButton from './LogoutButton'

const BlogView = ({user, blogs, logout}) => {
    if (user === null) {
        return null
    }

    return(
        <div>
            <p>Logged in as {user.name} <LogoutButton logout={logout} /></p>
            <h2>Blogs</h2>
            {blogs.map(blog => <Blog key={blog._id} blog={blog}/>)}
        </div>
    )
}

export default BlogView