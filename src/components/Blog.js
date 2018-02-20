import React from 'react'
import Button from './Button'
import blogService from '../services/blogs'

class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blog: props.blog,
      details: false
    }
  }

  toggleDetails = () => {
    this.setState({ details: !this.state.details })
  }

  likeBlog = async () => {
    try {
      const blogObject = { ...this.state.blog, likes: this.state.blog.likes + 1 }
      
      await blogService.update(this.state.blog.id, blogObject)
 
      this.setState({ blog: blogObject })
    } catch (exception) {
      console.log('Error: something went wrong when liking a blog')
    }
  }

  render() {
    const blogStyle = {
      paddingTop: 10,
      paddingLeft: 2,
      border: 'solid',
      borderWidth: 1,
      marginBottom: 5
    }

    const details = () => {
      if (this.state.details) {
        return (
          <div>
            <a href={this.state.blog.url}>{this.state.blog.url}</a> <br />
            {this.state.blog.likes} likes <Button onClick={this.likeBlog} label="Like"/><br />
            Added by {this.state.blog.user.name}
          </div>
        )
      }
      
      return null
    }

    return(
      <div style={blogStyle}>
        <div onClick={this.toggleDetails}>{this.state.blog.title} {this.state.blog.author}</div>
        {details()}
      </div>
    )
  }
}

export default Blog