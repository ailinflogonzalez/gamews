/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */

fetch("https://mmo-games.p.rapidapi.com/latestnews", {
  "method": "GET",
  "headers": {
    'X-RapidAPI-Host': "mmo-games.p.rapidapi.com",
    'X-RapidAPI-Key': "7bb8b4ceeamshca4d6e66ae7915bp1051e3jsneda4b1747206"
  }
})
  .then(response => response.json())
  .then(response => {
    console.log(response);
    console.log(response[0].title);
    console.log(response[0].article_url);
    console.log(response[0].thumbnail);
    console.log(response[1].title);
    console.log(response[1].article_url);
    console.log(response[1].thumbnail);
    console.log(response[2].title);
    console.log(response[2].article_url);
    console.log(response[2].thumbnail);
    console.log(response[3].title);
    console.log(response[3].article_url);
    console.log(response[3].thumbnail);
    console.log(response[4].title);
    console.log(response[4].article_url);
    console.log(response[4].thumbnail);
    console.log(response[5].title);
    console.log(response[5].article_url);
    console.log(response[5].thumbnail);

    /* TEST IMAGEN */

    let img = document.getElementById("img");
    img.src = response[0].thumbnail;

    let img1 = document.getElementById("img1");
    img1.src = response[1].thumbnail;

    let img2 = document.getElementById("img2");
    img2.src = response[2].thumbnail;

    let img3 = document.getElementById("img3");
    img3.src = response[3].thumbnail;

    let img4 = document.getElementById("img4");
    img4.src = response[4].thumbnail;

    let img5 = document.getElementById("img5");
    img5.src = response[5].thumbnail;

    /* TEST IMAGEN */



    /* NOTICIA 0 */
    document.getElementById('title_0').innerHTML = response[0].title;
    document.getElementById('short_description_0').innerHTML = response[0].short_description;
    /* document.getElementById('url_0').innerHTML = response[0].article_url; */
    document.getElementById('url_0').innerHTML += "<a href='" + response[0].article_url + "'>+ INFO</a>";


    /* FIN NOTICIA 0 */

    /* NOTICIA 1 */
    document.getElementById('title_1').innerHTML = response[1].title;
    document.getElementById('short_description_1').innerHTML = response[1].short_description;
    /* document.getElementById('url_0').innerHTML = response[0].article_url; */
    document.getElementById('url_1').innerHTML += "<a href='" + response[1].article_url + "'>+ INFO</a>";

    /* FIN NOTICIA 1 */

    /* NOTICIA 2 */
    document.getElementById('title_2').innerHTML = response[2].title;
    document.getElementById('short_description_2').innerHTML = response[2].short_description;
    /* document.getElementById('url_0').innerHTML = response[0].article_url; */
    document.getElementById('url_2').innerHTML += "<a href='" + response[2].article_url + "'>+ INFO</a>";

    /* FIN NOTICIA 2 */

    /* NOTICIA 3 */
    document.getElementById('title_3').innerHTML = response[3].title;
    document.getElementById('short_description_3').innerHTML = response[3].short_description;
    /* document.getElementById('url_0').innerHTML = response[0].article_url; */
    document.getElementById('url_3').innerHTML += "<a href='" + response[3].article_url + "'>+ INFO</a>";

    /* FIN NOTICIA 3 */

    /* NOTICIA 4 */
    document.getElementById('title_4').innerHTML = response[4].title;
    document.getElementById('short_description_4').innerHTML = response[4].short_description;
    /* document.getElementById('url_0').innerHTML = response[0].article_url; */
    document.getElementById('url_4').innerHTML += "<a href='" + response[4].article_url + "'>+ INFO</a>";

    /* FIN NOTICIA 4 */

    /* NOTICIA 5 */
    document.getElementById('title_5').innerHTML = response[5].title;
    document.getElementById('short_description_5').innerHTML = response[5].short_description;
    /* document.getElementById('url_0').innerHTML = response[0].article_url; */
    document.getElementById('url_5').innerHTML += "<a href='" + response[5].article_url + "'>+ INFO</a>";

    /* FIN NOTICIA 5 */

  })
  .catch(err => {
    console.log(err);
  });
