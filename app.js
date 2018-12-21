const http = new easyHTTP;

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// POST data
const data = {
  title: 'Custom Post',
  body: 'This is custom Post'
};

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(post);
//   }
// });

// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post){
//   if(err){
//       console.log(err);
//     }else{
//       console.log(post);
//     }
// });

http.delete('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post){
  if(err){
      console.log(err);
    }else{
      console.log(post);
    }
});