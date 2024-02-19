
import male from '../../assets/images/avatar-male.png'
import female from '../../assets/images/avatar-female.png'
import legend from '../../assets/images/avatar-chuck-norris.png'

import { selectPlayerOne } from '../../utils/select-player-one'
import { Show, createSignal } from 'solid-js'

import "./ChallengeTheLegend.css"
import { PATHS } from '../../enums/paths.enum'

export default function ChallengeTheLegend() {

  const [ playerOneSelected, setPlayerOneSelected ] = createSignal<boolean>(false)

  return(
    <main class="container mx-auto">
      <p class="text-with-chuck-norris text-4xl">Challenge the Legend</p>
      <div class="flex mt-12">
        <div class="grid w-1/2 flex-grow card bg-base-300 rounded-box place-items-center py-6">
          <p class="text-with-chuck-norris">Player One</p>
          <div class='flex flex-row mt-3'>
            <img
              src={male}
              alt='Male caracter'
              id="male"
              class='cursor-pointer player-one'
              onclick={() => {
                selectPlayerOne({ sex: 'male' }),
                setPlayerOneSelected(true)
              }}
            />
            <img
              src={female}
              alt='Female caracter'
              id="female"
              class='cursor-pointer player-one'
              onclick={() => {
                selectPlayerOne({ sex: 'female' }),
                setPlayerOneSelected(true)
              }}
            />
          </div>
        </div>
        <div class="divider divider-horizontal">VS</div>
        <div class="grid w-1/2 flex-grow card bg-base-300 rounded-box place-items-center py-6">
          <p class="text-with-chuck-norris">Chuck Norris</p>
          <div>
            <img src={legend} alt='Chuck Norris avatar' />
          </div>
        </div>
      </div>
      <Show when={playerOneSelected() == true}>
        <p class="fight text-8xl mt-16">
          <a href={PATHS.RESULT} class="text-with-chuck-norris">Fight</a>
        </p>
      </Show>
    </main>
  )
}
