/**
 * @file index
 * @author xiaozhihua
 * @date 2018-12-15 17:52:27
 */

import Request from 'request'

export default config => {
  return (path, options) => {
    options = {
      headers: {},
      ...options,
    }

    let { headers, ...arg } = options

    return new Promise(resolve => {
      Request(
        {
          url: `${config.url}/api/v4/${path}`,
          headers: {
            'User-Agent': 'gitlab-api',
            'PRIVATE-TOKEN': config.token,
            ...headers,
          },
          ...arg,
        },
        (req, res) => {
          resolve({ req, res })
        }
      )
    })
  }
}
