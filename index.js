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
      return request('projects').then(res => {
        return res.json()
      })
    },
    getTree(id, query = '') {
      return request(`projects/${id}/repository/tree?${query}`).then(res => {
        return res.json()
      })
    },
    getCommits(id, query = '') {
      return request(`projects/${id}/repository/commits?${query}`).then(res => {
        return res.json()
      })
    },
    getFile(id, path, branch = 'master') {
      return request(
        `projects/${id}/repository/files/${path}?ref=${branch}`
      ).then(res => {
        return res.json()
      })
    },
    getRawFile(id, path, branch = 'master') {
      return request(
        `projects/${id}/repository/files/${path}/raw?ref=${branch}`
      ).then(res => {
        return res.text()
      })
    },
    createFile(id, data) {
      return request(`projects/${id}/repository/commits`, {
        method: 'POST',
        body: data,
      }).then(res => {
        return res.text()
      })
    },
  }
}
