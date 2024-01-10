export default function updateUniquekeys(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, values] of map.entries()) {
    if (values === 1) {
      map.set(key, 100);
    }
  }
}
