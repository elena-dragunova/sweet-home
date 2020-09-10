export function truncateText (text) {
  const arr = text.split(' ');
  const shortened = arr.slice(0, 20);
  return shortened.join(' ') + '...';
}
