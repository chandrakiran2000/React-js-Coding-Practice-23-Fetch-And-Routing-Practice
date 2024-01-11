import UserInfo from '../UserInfo'
import BlogList from '../BlogList'
import './index.css'

//  Render UserInfo and BlogList

const Home = () => (
  <div className="home-container">
    <UserInfo />
    <BlogList />
  </div>
)

export default Home
