/**
 * @file rollup base
 * @author xiaozhihua
 * @date 2018-11-24 20:04:00
 */

import Babel from 'rollup-plugin-babel'
import Replace from 'rollup-plugin-replace'
import Json from 'rollup-plugin-json'

import Pkg from '../package.json'

export default {
  pkg: Pkg,
  input: 'src/index.js',
  ecBase: {
    output: [
      {
        file: Pkg.main,
        format: 'cjs',
      },
      {
        file: Pkg.module,
        format: 'es',
      },
    ],
    plugins: [
      Replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      Json(),
      Babel({
        runtimeHelpers: true,
        exclude: 'node_modules/**',
      }),
    ],
  }
}
