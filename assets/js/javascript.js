let quotesArray = [
  {author: "Rachel Carson", quote: "The more clearly we can focus our attention on the wonders and realities of the universe about us, the less taste we shall have for destruction."},
  {author: "Helen Keller", quote: "Science may have found a cure for most evils; but it has found no remedy for the worst of them all - the apathy of human beings."},
  {author: "Neil deGrasse Tyson", quote: "The good thing about science is that it's true whether or not you believe in it."},
  {author: "Galileo Galilei", quote: "By denying scientific principles, one may maintain any paradox."},
  {author: "Margaret Mead", quote: "We won't have a society if we destroy the environment."},
  {author: "Albert Einstein", quote: "Imagination is more important than knowledge."},
  {author: "Marie Curie", quote: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less."},
  {author: "Edwin Powell Hubble", quote: "Equipped with his five senses, man explores the universe around him and calls the adventure Science."},
  {author: "Charles Darwin", quote: "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change."},
  {author: "Isaac Asimov", quote: "The most exciting phrase to hear in science, the one that heralds new discoveries, is not 'Eureka!' but 'That's funny...'"},
  {author: "Evelyn Fox Keller", quote: "To know the history of science is to recognize the mortality of any claim to universal truth."},
  {author: "E.O. Wilson", quote: "Change will come slowly, across generations, because old beliefs die hard even when demonstrably false."},
  {author: "Bill Nye", quote: "Science is the key to our future, and if you don't believe in science, then you're holding everybody back."},
  {author: "Leonardo da Vinci", quote: "Study the science of art. Study the art of science. Develop your senses--learn how to see. Realize that everything connects you to everything else."},
  {author: "Thomas Edison", quote: "I haven't failed. I've just found 10,000 ways that won't work."},
  {author: "Ada Lovelace", quote: "Imagination is the Discovering Faculty, pre-eminently. It is that which penetrates into the unseen worlds around us, the worlds of Science."},
  {author: "Jane Goodall", quote: "I'm always pushing for human responsibility. Given that chimpanzees and many other animals are sentient and sapient, then we should treat them with respect."},
  {author: "John Glenn", quote: "We're not up there in space just to joyride around. We're up there to do things that are of value to everybody right here on Earth."},
  {author: "Stephen Hawking", quote: "I am just a child who has never grown up. I still keep asking these ‘how’ and ‘why’ questions. Occasionally, I find an answer."},
  {author: "Rosalind Franklin", quote: "Science, for me, gives a partial explanation for life. In so far as it goes, it is based on fact, experience and experiment."},
  {author: "Michio Kaku", quote: "Science is definitely part of America's infrastructure, the engine of prosperity. And yet science is given almost no visibility in the media."},
  {author: "Dorothy Hodgkin", quote: "Would it not be better if one could really 'see' whether molecules...were just as experiments suggested?"},
  {author: "Eugenie Clark", quote: "We ignore public understanding of science at our peril."},
  {author: "Mary Daly", quote: "I'm trying to get to a deep future, but in order to get to a deep future, I had to think about the deep past."},
  {author: "Mae Jemison", quote: "We look at science as something very elite, which only a few people can learn. That's just not true. You just have to start early and give kids a foundation. Kids live up, or down, to expectations."},
];



let imagesArray = [
  'http://res.cloudinary.com/siriusscaper/image/upload/earth/image1.jpg',
  'http://res.cloudinary.com/siriusscaper/image/upload/earth/image2.jpg',
  'http://res.cloudinary.com/siriusscaper/image/upload/earth/image3.jpg',
  'http://res.cloudinary.com/siriusscaper/image/upload/earth/image4.jpg',
  'http://res.cloudinary.com/siriusscaper/image/upload/earth/image5.jpg',
  'http://res.cloudinary.com/siriusscaper/image/upload/earth/image6.jpg',
  'http://res.cloudinary.com/siriusscaper/image/upload/earth/image7.jpg',
  'http://res.cloudinary.com/siriusscaper/image/upload/earth/image8.jpg',
  'http://res.cloudinary.com/siriusscaper/image/upload/earth/image9.jpg',
  'http://res.cloudinary.com/siriusscaper/image/upload/earth/image10.jpg',
  'http://res.cloudinary.com/siriusscaper/image/upload/earth/image11.jpg',
  'http://res.cloudinary.com/siriusscaper/image/upload/earth/image12.jpg',
  'http://res.cloudinary.com/siriusscaper/image/upload/earth/image13.jpg',
  'http://res.cloudinary.com/siriusscaper/image/upload/earth/image14.jpg',
  'http://res.cloudinary.com/siriusscaper/image/upload/earth/image15.jpg',
  'http://res.cloudinary.com/siriusscaper/image/upload/earth/image16.jpg',
  'http://res.cloudinary.com/siriusscaper/image/upload/earth/image17.jpg',
  'http://res.cloudinary.com/siriusscaper/image/upload/earth/image18.jpg',
  'http://res.cloudinary.com/siriusscaper/image/upload/earth/image19.jpg',
  'http://res.cloudinary.com/siriusscaper/image/upload/earth/image20.jpg',
  'http://res.cloudinary.com/siriusscaper/image/upload/earth/image21.jpg',
  'http://res.cloudinary.com/siriusscaper/image/upload/earth/image22.jpg',
  'http://res.cloudinary.com/siriusscaper/image/upload/earth/image23.jpg',
  'http://res.cloudinary.com/siriusscaper/image/upload/earth/image24.jpg',
  'http://res.cloudinary.com/siriusscaper/image/upload/earth/image25.jpg',
]


Array.prototype.random = function (length){
  return this[Math.floor((Math.random()*length))]
}

let randomQuote = quotesArray.random(quotesArray.length)
let randomImage = imagesArray.random(imagesArray.length)

let injectToHTML = getQuoteAndImage => {
  document.getElementById('quote-container').innerHTML = randomQuote.quote + '<br>' + '<br>' + randomQuote.author
  document.getElementById('bg-Image').style.backgroundImage = 'url(' + randomImage + ')'
}

let randomElements = document.getElementById('newQuote').addEventListener('click', function(){
  randomQuote.quote + randomQuote.author
})

injectToHTML()


/*let randomizer = function(){
  let randomQuote = science.random(science.length)
  let randomImage = imagesArray.random(imagesArray.length)
  document.getElementById('quote-container').innerHTML = randomQuote.quote + '<br>' + '<br>' + randomQuote.author
  document.getElementById('bg-Image').style.backgroundImage = 'url(' + randomImage + ')'
};


let randomElements = document.getElementById('newQuote').addEventListener('click', function(){
  randomizer()
})

randomizer()
*/

const customTweet = () => {
  var quoteAndAuthor = document.getElementById('quote-container').innerText
  var tweetURL = 'https://twitter.com/share?text=' +
  encodeURIComponent(quoteAndAuthor) +
  '&url=' +
  '/'
  window.open(tweetURL)
}

//Change logic

//get + set function to separate the randomizing function from the quote inputting function

//uri to adjust for space - function
//truncate quote


//css medium example - blurry to regular image

//detect when images have downloaded and then switch imagesArray

//two slots - new div, load image to keep until randomizer is called and that image is inserted into the body

//fadein/fadeout

//time to first meaningful paint - loading elements over time + inline css for core elements first
