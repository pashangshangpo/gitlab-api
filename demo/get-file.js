import GitLab from './config'

GitLab.getFile(39, 'README.md').then(res => {
  console.log(res)
})
