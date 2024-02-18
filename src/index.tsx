/* @refresh reload */
import { render } from 'solid-js/web'
import { Suspense } from "solid-js"

import './index.css'
import App from './App'

import { Loading, Sizes, Types } from './components/Loading/Loading'

const root = document.getElementById('root')

render(() => {
  return (
    <Suspense fallback={<Loading type={Types.Spinner} size={Sizes.Large} />}>
      <App />
    </Suspense>
  )
}, root!)
