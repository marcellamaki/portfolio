import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import ReactNative3Preview from '../components/ReactNative3Preview'
import ReactNative2Preview from '../components/ReactNative2Preview'
import ReactNative1Preview from '../components/ReactNative1Preview'

const BlogContainer = () => {
  return (
      <div>
        <ReactNative3Preview />
        <ReactNative2Preview />
        <ReactNative1Preview />
      </div>

      )
}

export default BlogContainer;
