var quotes = [
  'Go for a nice long afternoon walk in the park',
  'Think of someone you care about, call them up!',
  'Bake something that will fill the air with a warm aroma',
  'Get sucked into the world of a book',
  'Go stargazing or look up at the sky filled with fluffy white clouds',
  'Smell flowers, warm bread, freshly washed clothes or your favorite scent today',
  'Have a conversation with a friend, your neighbor or a total stranger',
  'Feel the sun prickle on your skin',
  'Take an extra-long bath or shower',
  'Recall a funny memory',
  'Watch the sunset or the sunrise',
  'Eat your next lunch outside in the sunlight',
  'See if you can toss something in the trash from far away',
  'Wear warm clothes straight from the dryer or climb into your bed when you have fresh sheets',
];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  var quoteLength = quotes[randomNumber].length;
  var fontClass = "";

  // if (quoteLength > 15) {
  //   fontClass = "one";
  // } 
  // else if (quoteLength <= 15 || quoteLength > 7 )
  // {
  //   fontClass = "two";
  // } else 
  // {
  //   fontClass = "three";
  // }

  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
  // document.getElementById('quoteDisplay').innerHTML = fontClass;
  
}

