import fetch, { Response } from 'node-fetch';

let URL: Promise<Response> = fetch("https://jsonplaceholder.typicode.com/comments")
URL.then(res => res.text())
  .then(text => {
    let Comment = JSON.parse(text)
    console.log(Comment)
  })