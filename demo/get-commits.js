import GitLab from './config'

GitLab.getCommits(39, 'path=README.md').then(res => {
  console.log(res)
})
