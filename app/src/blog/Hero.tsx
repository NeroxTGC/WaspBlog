export function Hero() {
  return (
    <header className="max-w-2xl px-4 py-8 sm:py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        Writing about <span className="text-yellow-500">whatever</span>{' '}
        you{' '}
        <span className="text-yellow-500">want</span>
      </h1>
      <p className="mt-6 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-prose">
        Explore insights on whatever you want. 
        From whatever you want to whatever you want, find resources to support your journey.
      </p>
    </header>
  );
} 