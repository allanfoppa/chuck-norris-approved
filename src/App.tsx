import { createResource } from 'solid-js'
import { SegmentedControl } from './components/SegmentedControl.component';
import { fetchCategories } from './services/fetchCategories.service';
import { Logo } from './components/Logo';

function App() {

  const [categories] = createResource<string[]>(fetchCategories);

  return (
    <main class="container mx-auto">
      <section class='flex flex-wrap items-center justify-center gap-6'>
        <Logo />
        <SegmentedControl
          categories={categories}
        />
      </section>
    </main>
  )
}

export default App
