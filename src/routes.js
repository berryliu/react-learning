/**
 * Created by berry on 17/1/10.
 */

import App from './component/app'
import Comment from './component/comment'

console.log(App)
console.log(Comment)

const routes = {
  path: '/',
  component: App,
  childRoutes: [
    {
      path: 'comment/:id',
      component: Comment
    }
  ]
}

export default routes