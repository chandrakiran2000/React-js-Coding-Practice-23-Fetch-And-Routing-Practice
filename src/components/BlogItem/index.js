// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {each} = props
  const {author, avatarUrl, id, imageUrl, title, topic} = each
  return (
    <Link to={`/blogs/${id}`} className="links">
      <div className="blog-item-card">
        <img className="blog-item-img" src={imageUrl} alt="" />
        <div className="blog-card">
          <p className="blog-topic">{topic}</p>
          <h1 className="blog-title">{title}</h1>
          <div className="blog-avatar-card">
            <img className="blog-avatar-img" src={avatarUrl} alt="" />
            <p className="blog-avatar-author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
