/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '7bb8b4ceeamshca4d6e66ae7915bp1051e3jsneda4b1747206',
    'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
  }
}

fetch('https://mmo-games.p.rapidapi.com/latestnews', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err))


  .then(response => {
    console.log(response[0].title)
    console.log(response[0].source)
    console.log(response[1].title)
    console.log(response[1].source)
    console.log(response[2].title)
    console.log(response[2].source)
    console.log(response)

    /* NOTICIA 1 */
    document.getElementById('text_0').innerHTML = response[0].title;
    document.getElementById('source_0').innerHTML = '--- ' + response[0].source + ' ---';
    document.getElementById('url_0').innerHTML = response[0].article_url;
    /* FIN NOTICIA 1 */

    /* NOTICIA 2 */
    document.getElementById('text_1').innerHTML = response[1].title;
    document.getElementById('source_1').innerHTML = '--- ' + response[1].source + ' ---';
    document.getElementById('url_1').innerHTML = response[1].article_url;
    /* FIN NOTICIA 2 */

    /* NOTICIA 3 */
    document.getElementById('text_2').innerHTML = response[2].title;
    document.getElementById('source_2').innerHTML = '--- ' + response[2].source + ' ---';
    document.getElementById('url_2').innerHTML = response[2].article_url;
    /* FIN NOTICIA 3 */

  })

/* AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA */
