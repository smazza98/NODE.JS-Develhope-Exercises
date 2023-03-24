const players = ['Joe', 'Caroline', 'Sabrina'];

Promise.all(players.map(player => {
  return luckyDraw(player)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error.message);
    });
}))
  .then(() => {
    console.log('All promises have been resolved.');
  })
  .catch(error => {
    console.error(error.message);
  });
