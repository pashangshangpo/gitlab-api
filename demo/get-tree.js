import GitLab from './config'

GitLab.getTree(39, 'per_page=100&page=1&path=img').then(res => {
  console.log(res)
})
