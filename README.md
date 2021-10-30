# One-Way ➡️

![Build Status](https://github.com/qualaio/one-way/workflows/CI/badge.svg)

Super small library to add some syntax sugar for looping over arrays asynchronously

feel free to just copy the 5 lines of code in your own util library

or

## Install

```
npm install one-way
```

## Usage

```typescript
import { asyncForEach } from 'one-way';

const orderedList = [1, 2, 3, 4, 5];
let outputList: number[] = [];

async function sleep(ms = 15_000) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

await asyncForEach(orderedList, async num => {
  await sleep(100); // do something asyncronous
  // note this will have typescript goodness
  outputList.push(num);
});
```

## Why this library

1. For a long time I thought this was an anti-pattern. That one should leverage the `Promise.all` and `map` or `forEach`
   primitives. But after a few years and using this on multiple teams this has become a valuable tool in code reability.
2. How many time have I google, how does one loop through a loop in serial with asynchronous code

Our team using these methods have reduced tricky errors -- hopefull it can help you and your team as well.

## Under the covers

... there is soooo little code in this library we can list it here,
if you do not want to add a dependency feel free just to copy the code:

this is the main function

```typescript
export async function asyncForEach<I>(array: I[], callback: (item: I, idx: number) => Promise<void>): Promise<void> {
  for (const item of array.keys()) {
    await callback(array[item], item);
  }
}
```

or just look at the other helper functions here: [link](https://github.com/qualaio/one-way/blob/master/src/index.ts)
