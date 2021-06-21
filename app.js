const tweetForm = document.querySelector('#tweetForm')

tweetForm.gete
const username = tweetForm.username;
const tweet = tweetForm.tweet;
tweetForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');

    bTag.append(username.value);
    newTweet.append(bTag);
    newTweet.append(`: ${tweet.value}`);

    document.getElementById('tweets').append(newTweet);

})
