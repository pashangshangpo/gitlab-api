/**
 * @file index
 * @author xiaozhihua
 * @date 2018-12-15 17:52:27
 */

export default config => {
  return (path, options) => {
    options = {
      headers: {},
      ...options,
    }

    let { headers, ...arg } = options

    return fetch(`${config.url}/api/v4/${path}`, {
      headers: {
        'User-Agent': 'gitlab-api',
        'PRIVATE-TOKEN': config.token,
        ...headers,
      },
      ...arg,
    })
  }
}
