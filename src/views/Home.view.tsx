import { createResource } from 'solid-js'
import { SegmentedControl } from '../components/SegmentedControl.component';
import { fetchCategories } from '../services/fetchCategories.service';
import { Logo } from '../components/Logo';

import { PATHS } from '../enums/paths.enum';

export default function Home() {

  const [categories] = createResource<string[]>(fetchCategories);

  return (
    <main class="container mx-auto">
      <section class='flex flex-wrap items-center justify-center gap-6'>
        <Logo />
        <SegmentedControl
          categories={categories}
        />
      </section>
      <section class="mt-16">
        Challenge the legend! clicking <a href={PATHS.CHALLENGE} class='link text-with-chuck-norris'>here</a>
      </section>
    </main>
  )
}
