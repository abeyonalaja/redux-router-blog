
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../../actions/index';
import { Link } from 'react-router';

class PostIndex extends Component {


  componentWillMount(){
    console.log("good time to do something");
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          { this.renderPosts() }
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( { fetchPosts }, dispatch );
}


function mapStateToProps( state ) {
  return { posts :  state.posts.all }
}

export default connect(  mapStateToProps, mapDispatchToProps )( PostIndex );
