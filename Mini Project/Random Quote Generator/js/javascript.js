var quotes = [
    '\"If you don\'t like the road you\'re walking, start paving another one.\"<br> -Dolly Parton',
    '\"The most beautiful things in the world cannot be seen or even touched.They must be felt with the heart.\"<br> -Helen Keller',
    '\"Life is a series of baby steps.\"<br> -Hoda Kotb',
    '\"Love yourself first and everything else falls into line.\"<br> -Lucille Ball',
    '\"Lead from the heart, not the head.\"<br> -Princess Diana',
    '\"Don\'t give it five minutes if you\'re not going to give it five years.\"<br> -Meghan Markle',
    '\"Every day is not a success. Every year is not a success. You have to celebrate the good.\"<br> -Reese Witherspoon',
    '\"Those who don\'t believe in magic will never find it.\"<br> -Roald Dahl',
    '\"To succeed in life, you need three things: a wishbone, a backbone, and a funny bone.\"<br> -reba McEntire',
    '\"The biggest adventure you can take is to live the life of your dreams.\"<br> -Oprah Winfrey',
]
function newQuote(){
    var randNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quotedisplay').innerHTML = quotes[randNumber];
}