// Write your JS code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogsItemData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    //  console.log(id)

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    //  console.log(data)
    const updatedData = {
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      id: data.id,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
    }

    this.setState({blogsItemData: updatedData, isLoading: false})
  }

  getTheData = () => {
    const {blogsItemData} = this.state
    const {author, avatarUrl, content, imageUrl, title} = blogsItemData

    return (
      <div className="blog-item-details-card">
        <h1 className="blog-item-details-title">{title}</h1>
        <div className="blog-item-details-avatar-content-card">
          <div className="blog-item-details-avatar-card">
            <img
              className="blog-item-details-avatar-img"
              src={avatarUrl}
              alt=""
            />
            <p className="blog-item-details-avatar-author">{author}</p>
          </div>
          <div className="blog-item-details-content-card">
            <img
              className="blog-item-details-content-img"
              src={imageUrl}
              alt={title}
            />
            <p className="blog-item-details-content-author">{content}</p>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.getTheData()
        )}
      </>
    )
  }
}

export default BlogItemDetails
