function postSortedCharactersQuery(e) {
  e.preventDefault();
  const characters = document.getElementById('form-input').value

  const request = new Request('/sort', {
    "method": "POST",
    "Content-Type": "text/plain",
    "body": characters
  });

  return window.fetch(request)
    .then(res => res.json())
    .then(data => console.log('posted', data))
    .catch(err => console.error(err.stack));
}