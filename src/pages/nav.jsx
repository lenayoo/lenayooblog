import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function nav() {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/programming-blog" component={ProgrammingBlog} />
      <Route path="/today-i-learnt" component={TodayILearnt} />
      <Route path="/contact" component={Contact} />
    </div>
  )
}

export default nav
