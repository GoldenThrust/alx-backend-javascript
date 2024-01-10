export default function cleanSet(set, startStr) {
  if (!set.size || !startStr) {
    return '';
  }
  const filteredValues = Array.from(set).filter((value) => value.startsWith(startStr));

  return filteredValues.map((str) => str.slice(startStr.length)).join('-');
}
