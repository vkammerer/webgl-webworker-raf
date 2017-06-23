export function sleep(delay) {
  console.log(`start sleeping for ${delay}ms`);
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
  console.log(`finish sleeping for ${delay}ms`);
}
