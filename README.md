# One-Way ➡️

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

await asyncForEach(orderedList, async num => {
  // note this will have typescript goodness
  outputList.push(num);
});
```

## Why this library

1. For a long time I thought this was an anti-pattern. That one should leverage the `Promise.all` and `map` or `forEach`
   primitives. But after a few years and using this on multiple teams this has become a valuable tool in code reability.
2. How many time have I google, how does one loop through a loop in serial with asynchronous code

Our team using these methods have reduced tricky errors -- hopefull it can help you and your team as well.
