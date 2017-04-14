
var searchYouTube = ({key, query, max}, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  }).done(({items}) => {
    console.log(items);
      callback(items);
  })

};


window.searchYouTube = searchYouTube;
