import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/bundle.js',
      format: 'umd'
    },
    {
      file: 'dist/bundle.min.js',
      format: 'iife',
      name: 'version',
      plugins: [terser()]
    },
  ],
  plugins: [
    json(),
    resolve(),
    nodePolyfills(),
    babel({
      exclude: 'node_modules/**'
    }),
    serve({
      host: 'localhost',
      port: 1234,
      contentBase: 'dist',
      historyApiFallback: true
    }),
    commonjs()
  ],
}
