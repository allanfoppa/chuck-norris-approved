import { lazy } from "solid-js"

export const routes = [
  {
    path: "/",
    component: lazy(() => import("../views/Home.view"))
  },
  {
    path: "/challenge-the-legend",
    component: lazy(() => import("../views/ChallengeTheLegend/ChallengeTheLegend.view"))
  },
  {
    path: "/challenge-result",
    component: lazy(() => import("../views/ChallengeResult.view"))
  }
]
