import GitLab from './config'

GitLab.createFile(39, {
  branch: 'master',
  commit_message: 'test: commit message',
  actions: [
    {
      action: 'create',
      file_path: 'hello.md',
      content: 'hello'
    },
    {
      action: 'create',
      file_path: 'hello2.md',
      content: 'hello2'
    }
  ]
}).then(res => {
  console.log(res)
})
