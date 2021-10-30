/**
 * Iterates throw an array asynchronously.
 * @param array
 * @param callback
 */
export async function asyncForEach<I>(array: I[], callback: (item: I, idx: number) => Promise<void>): Promise<void> {
  for (const item of array.keys()) {
    await callback(array[item], item);
  }
}

/**
 * loop over a function _n_ times, asynchronously
 * @param count
 * @param callback
 */
export async function asyncTimes(count: number, callback: any) {
  return asyncForEach(Array.from({ length: count }), callback);
}
