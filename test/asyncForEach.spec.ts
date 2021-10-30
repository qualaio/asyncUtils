import { asyncForEach } from '../src/index';

describe('asyncForEach', () => {
  it('can loop over an array asynchronously', async () => {
    const orderedList = [1, 2, 3, 4, 5];
    let outputList: number[] = [];

    await asyncForEach(orderedList, async num => {
      outputList.push(num);
    });

    expect(outputList).toEqual(orderedList);
  });
});
