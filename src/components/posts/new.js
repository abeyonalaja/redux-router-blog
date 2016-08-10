
import React, { Component} from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../../actions/index';

class PostNew extends Component {

  render () {

    const { fields: { title, categories, content } , handleSubmit } = this.props;

    return(
      <form onSubmit={  handleSubmit( this.props.createPost ) }>
        <h3 className="form-group">Create A New Post</h3>
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`} >
          <label>Title</label>
          <input type="text" className="form-control"  { ...title }/>
          <div className="text-help">
            { title.touched ? title.error : '' }
          </div>
        </div>
        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" { ...categories }/>
          <div className="text-help">
            { categories.touched ? categories.error : '' }
          </div>
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" { ...content }></textarea>
          <div className="text-help">
            { content.touched ? content.error : '' }
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function validate( values ) {
    const errors = {};

    if( !values.title ) {
      errors.title = 'Enter a username';
    }

    if( !values.categories ) {
      errors.categories = 'Enter a category';
    }

    if( !values.content ) {
      errors.content = 'Enter some content';
    }

    return errors;
}

export default reduxForm({
  form: 'PostNewForm',
  fields: [ 'title', 'categories', 'content' ],
  validate
}, null, { createPost } ) ( PostNew );
