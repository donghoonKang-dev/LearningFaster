export default function dateParser(dateString) {
  const date = dateString.slice(0, 10);
  const time = dateString.slice(11);

  const dates = date.split('-')
  const times = time.split(':')

  return parseInt(dates.join('') + times.join(''));
};