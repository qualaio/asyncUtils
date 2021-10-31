import { asyncForEach } from '../src/index';

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
});
