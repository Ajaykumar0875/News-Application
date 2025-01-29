import axios from "axios";
let news = [];

console.log(news[0].articles[0].author);
news[0].articles.map((element) => {
  let author = element.author;
  let content = element.content;
  let description = element.description;
  let publishedAt = element.publishedAt;
  let title = element.title;
  let url = element.url;
  let urlToImage = element.urlToImage;
  let payload = {
    title,
    url,
    urlToImage,
    publishedAt,
    description,
    content,
    author,
  };
  axios
    .post("http://localhost:4000/Health", payload)
    .then(() => {
      console.log("Data added");
    })
    .catch(() => {
      console.log("Error in Adding Data");
    });
});
