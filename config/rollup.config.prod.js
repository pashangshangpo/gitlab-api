/**
 * @file rollup prod
 * @author xiaozhihua
 * @date 2018-11-24 20:24:14
 */

import BaseConfig from './rollup.config.base'

export default [
  {
    input: BaseConfig.input,
    ...BaseConfig.ecBase,
  }
]
