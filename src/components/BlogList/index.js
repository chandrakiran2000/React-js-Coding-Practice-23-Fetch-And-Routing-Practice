// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {BlogLists: [], isLoading: true}

  componentDidMount() {
    this.getBlogsListData()
  }

  getBlogsListData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    //  console.log(data)
    const updatedData = data.map(each => ({
      author: each.author,
      avatarUrl: each.avatar_url,
      id: each.id,
      imageUrl: each.image_url,
      title: each.title,
      topic: each.topic,
    }))
    console.log(updatedData)

    this.setState({BlogLists: updatedData, isLoading: false})
  }

  render() {
    const {BlogLists, isLoading} = this.state
    return (
      <div className="blog-list-card">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          BlogLists.map(each => <BlogItem each={each} key={each.id} />)
        )}
      </div>
    )
  }
}

export default BlogList
