import { asyncForEach, asyncTimes } from '../src/index';

export async function sleep(ms = 15_000) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

describe('oneWay', () => {
  it('can loop over an array asynchronously serially', async () => {
    const orderedList = [1, 2, 3, 4, 5];
    let outputList: number[] = [];

    await asyncForEach(orderedList, async num => {
      await sleep(100); // do something that requires an await
      outputList.push(num);
    });

    expect(outputList).toEqual(orderedList);
  });

  it('can loop over something asynchronously _n_ times', async () => {
    const orderedList = [1, 2, 3, 4, 5];
    let outputList: number[] = [];

    let counter = 0;
    await asyncTimes(5, async () => {
      await sleep(100); // do something that requires an await
      counter = counter + 1;
      outputList.push(counter);
    });

    expect(outputList).toEqual(orderedList);
  });
});
