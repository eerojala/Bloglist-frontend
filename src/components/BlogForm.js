import React from 'react'

const BlogForm = (props) => {
    return(
        <div>
            <h3>Create new</h3>
            <form onSubmit={props.createBlog}>
                <div>
                    Title:
                    <input 
                        type="text"
                        name="title"
                        value={props.title}
                        onChange={props.handleFieldChange}
                    />
                </div>
                <div>
                    Author:
                    <input 
                        type="text"
                        name="author"
                        value={props.author}
                        onChange={props.handleFieldChange}
                    />
                </div>
                <div>
                    URL:
                    <input 
                        type="text"
                        name="url"
                        value={props.url}
                        onChange={props.handleFieldChange}
                    />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default BlogForm