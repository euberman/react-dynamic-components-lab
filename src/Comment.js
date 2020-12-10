import React from 'react';

class Comment extends React.Component {

  constructor(props) {
    super() 

    this.state = {
    }
  }

  render() {

    return (
      <div className='comment'>
        {this.props.commentText}
      </div>
    )
  }
}

export default Comment;