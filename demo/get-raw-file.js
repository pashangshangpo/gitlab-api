import GitLab from './config'

GitLab.getRawFile(39, 'README.md').then(res => {
  console.log(res)
})
