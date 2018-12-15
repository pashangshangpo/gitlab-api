import GitLab from './config'

GitLab.projects().then(res => {
  console.log(res)
})
