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
      format: 'esm',
      name: 'belpay-sdk',
      plugins: [terser()]
    },
    {
      file: 'dist/bundle.min.js',
      format: 'esm',
      name: 'version',
      plugins: [terser()]
    },
  ],
  plugins: [
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
    commonjs({
      include: [
        'node_modules/cybersource-rest-client'
      ]
    }),
  ],
}
