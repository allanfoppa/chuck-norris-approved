import { PATHS } from "../enums/paths.enum";

export default function ChallengeResult() {
  return(
    <main class="container mx-auto">
      <p class="text-with-chuck-norris text-8xl mt-12">YOU LOSE</p>
      <p class="text-6xl mt-10">You can't beat Chuck Norris</p>
      <p class="text-6xl mt-10">Just Chuck Norris can beat you...</p>
      <p class="text-2xl mt-10">So just go to home and read 10 jokes...</p>
      <p class="text-2xl mt-12"><a href={PATHS.HOME} class='link text-with-chuck-norris'>Go home</a></p>
    </main>
  )
}
