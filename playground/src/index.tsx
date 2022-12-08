/* @refresh reload */
// eslint-disable-next-line import/no-unresolved
import 'virtual:uno.css'

import { render } from 'solid-js/web'

import App from './App'

render(() => <App />, document.getElementById('root') as HTMLElement)
