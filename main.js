fetch('https://gaming-news.p.rapidapi.com/news', {
  "method": 'GET',
  "headers": {
    'X-RapidAPI-Key': '9fe06917e5mshb5e05f239c6b3a6p11a447jsn42ae48c8d59f',
    'X-RapidAPI-Host': 'gaming-news.p.rapidapi.com',
  }
})
  .then(response => response.json())
  .then(response => {
    console.log(response);
    console.log(response[0].text)
    console.log(response[0].source)
    console.log(response[1].text)
    console.log(response[1].source)
    /*     console.log(response[2].text)
        console.log(response[2].source) */

    /* NOTICIA 1 */
    document.getElementById('text_0').innerHTML = response[0].text;
    document.getElementById('source_0').innerHTML = '--- ' + response[0].source + ' ---';
    /*     document.getElementById('url_0').innerHTML = response[0].url; */
    /* FIN NOTICIA 1 */

    /* NOTICIA 2 */
    document.getElementById('text_1').innerHTML = response[1].text;
    document.getElementById('source_1').innerHTML = '--- ' + response[1].source + ' ---';
    /*     document.getElementById('url_1').innerHTML = response[2].url; */
    /* FIN NOTICIA 2 */

    /* NOTICIA 3 */
    /*     document.getElementById('text_2').innerHTML = response[2].text;
        document.getElementById('source_2').innerHTML = '--- ' + response[2].source + ' ---'; */
    /*     document.getElementById('url_2').innerHTML = response[3].url; */
    /* FIN NOTICIA 3 */

  })