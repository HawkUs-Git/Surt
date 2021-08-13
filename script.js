if (annyang) {
  // Let's define a command.
  const commands = {
    'hello': () => { alert('Hello world!'); },
    'go to blog': () => { window.location.href = 'https://blog.marcusj.tech' },
    'Go to Query': () => { window.location.href = 'https://query.arjun418.repl.co/' },
    'amma ask (me) my *thing': (thing) => { prompt('What is your ' + thing + '?') },
    'Who Made this': () => { alert('Arjun418 did!'); },
    'tell me (for) *query': (query) => { window.location.href = 'https://google.com/search?q=' + query },
    'search (for) *query': (query) => { window.location.href = 'https://google.com/search?q=' + query },
    '*query on amazon': (query) => { window.location.href = 'https://www.amazon.com/s?k=' + query },


    'amma see (for) *query': (query) => { window.location.href = 'https://google.com/search?q=' + query },
    'amma sound': () => {var audio = new Audio('audio_file.mp3');
audio.play(); },
    'calculate :quarter stats': {'regexp': /^calculate (January|April|July|October) stats$/, 'callback': console.log},
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  annyang.addCallback('start', function() {
      document.getElementById('running').innerText = 'True';
  })
  annyang.addCallback('end', function() {
      document.getElementById('running').innerText = 'False';
  })

  annyang.addCallback('resultMatch', function(phrase, match, alt) {
      document.getElementById('phrase').innerText = phrase;
      document.getElementById('match').innerText = match;
      document.getElementById('alt').innerText = alt;
  })

  // Start listening.
  annyang.start();
}