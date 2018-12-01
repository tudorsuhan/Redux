import React, { PropTypes, Component } from 'react'

export default class Posts extends Component {
  render() {
    console.log(this.props)
    
    return (
      <ul>
        {this.props.posts.map((post, i) =>
          <li key={i}>{i+1} - <a href={post.url}>{post.title}</a></li>
        )}
      </ul>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}
