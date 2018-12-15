/**
 * @file index https://github.com/gitlabhq/gitlabhq/tree/master/doc/api
 * @author xiaozhihua
 * @date 2018-12-15 17:52:27
 */

import Request from './common/request'

export default (config = {}) => {
  let request = Request(config)

  return {
    projects() {
      return request('projects').then(ctx => {
        return JSON.parse(ctx.res.body)
      })
    },
    getRawFile(id, path, branch = 'master') {
      return request(
        `projects/${id}/repository/files/${path}/raw?ref=${branch}`
      ).then(ctx => {
        return ctx.res.body
      })
    },
    createFile(id, data) {
      return request(`projects/${id}/repository/commits`, {
        method: 'POST',
        json: true,
        body: data,
      }).then(ctx => {
        return ctx.res.body
      })
    },
  }
}
