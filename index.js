/**
 * @file index
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
  }
}
