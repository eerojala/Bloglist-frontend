import React from 'react'
import Button from './Button'

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
            {this.state.blog.likes} likes <Button label="Like"/><br />
            Added by {this.state.blog.user.name}<br />
          </div>
        )
      }
      
      return null
    }

    return(
      <div style={blogStyle} onClick={this.toggleDetails}>
        {this.state.blog.title} {this.state.blog.author}
        {details()}
      </div>
    )
  }
}

export default Blog