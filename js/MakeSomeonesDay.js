var quotes = [
    "Ask someone about their day and actvely listen",
    "Brighten someone's day, share a compliment",
    "Leave someone you love a kind note",
    "Bring a snack or dessert to share at the office",
    "Call up an old friend and reconnect",
    "Write a letter to an extended family member",
    "Give a copy of your favorite book to a friend",
    "Send thank you notes to someone who has helped you, this could be a supervisor, a teacher or a mentor",
    "Call your parents and have them share an old memory that makes them smile",
    "Donate blood, your decision to donate your blood can save a life",
    "Hold the door open for anyone",
    "Leave a song or a joke on someone's voicemail for when they get home",
    "Send someone an ecard!",
    "Walk your neighbor's dog."
  ];
  
  function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
  }