import { Resource, For, createSignal, createEffect, Show  } from 'solid-js'
import { fetchByCategory } from '../../services/fetchByCategory.service'
import { Loading, Sizes, Types } from '../Loading/Loading'
import { ChuckApproves } from '../ChuckApproves/ChuckApproves'

interface JokeByCategory {
  categories: string[],
  created_at: string,
  icon_url: string,
  id: string,
  updated_at: string,
  url: string,
  value: string,
}

export const SegmentedControl = ({
  categories,
}: {
  categories: Resource<string[]>,
}) => {

  // Create a signal to track the selected category
  const [ category, setCategory ] = createSignal<string>('dev')
  // Create a signal to track the ramdom joke by category
  const [ jokeByCategory, setJokeByCategory ] = createSignal<JokeByCategory>({
    categories: [],
    created_at: '',
    icon_url: '',
    id: '',
    updated_at: '',
    url: '',
    value: ''
  })

  // Create a signal to apply loader component
  const [ loading, setLoading ] = createSignal<boolean>(true)

  // Create a signal to show Chuck approves when it arrives ten jokes
  const [ count, setCount ] = createSignal<number>(0);

  // Update the selected category using the setter function
  const updateSelectedCategory = (newValue: string) => {
    setCategory(newValue)

    let buttons = document.querySelectorAll(".segment-button") as NodeListOf<Element>

    buttons.forEach((button) => {
      if (button.classList.contains("btn-active")) {
        button.classList.remove("btn-active")
      }

      if (button.textContent?.toLowerCase() == category()) {
        button.classList.add("btn-active")
      }
    })
  }

  createEffect(() => {
    // Fires when new category is changed
    if (category()) newJoke()
  })

  createEffect(() => {
    // Fires when R key is press
    window.addEventListener(
      "keydown",
      (event) => event.code === "KeyR" && newJoke(),
      true,
    );
  })

  // Fetch by category
  const newJoke = async () => {
    setCount(prev => prev + 1)
    setLoading(true)
    const fetchedData = await fetchByCategory({ category: category() })
    setJokeByCategory(fetchedData)
    setLoading(false)
  }

  return (
    <section class='flex flex-col justify-center gap-8'>
      <div class="join">
        <For each={categories()}>
        {(item) => (
            <button
              classList={{
                'btn join-item segment-button': true,
                'btn-active': item === category(),
              }}
              onClick={() => updateSelectedCategory(item)}
            >
              {item.toUpperCase()}
            </button>
          )}
        </For>
      </div>
      <div>
        <Show when={loading() == false} fallback={<Loading type={Types.Dots} size={Sizes.Large} />}>
          <blockquote>
            <p class='text-lg'>
              <span class='quotation-marks'>“</span>
              {jokeByCategory().value}
              <span class='quotation-marks'>”</span>
            </p>
          </blockquote>
        </Show>
      </div>
      <div class='mt-8'>
        Get me a new one ... (press <kbd class="kbd kbd-sm">r</kbd> to refresh)
      </div>
      <Show when={count() == 10}>
        <ChuckApproves />
      </Show>
    </section>
  )
}
