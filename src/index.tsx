/* @refresh reload */
import { render } from 'solid-js/web'
import { Suspense } from "solid-js"
import { Router } from "@solidjs/router"

import './index.css'

import { Loading } from './components/Loading'
import { LOADING } from './enums/loading.enum'
import { SIZES } from './enums/sizes.enum'
import { routes } from "./routes/config-routing.routes"

const root = document.getElementById('root')
render(() => {
  return (
    <Suspense
      fallback={<Loading type={LOADING.Spinner} size={SIZES.Large} />}
    >
      <Router>{ routes }</Router>
    </Suspense>
  )
}, root!)
