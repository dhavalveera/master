var options = {
            strings: ["Hello World;"],
            typeSpeed: 120,
            startDelay: 1000,
            backDelay: 1000,
            backSpeed: 200,
            smartBackspace: true,
            showCursor: false,
            cursorChar: '|',
            // fadeOutClass: 'typed-fade-out'
            onComplete: (self) => {var typed2 = new Typed("h2", second)
                                    $(".navbar").fadeIn(1000).css("display", "flex")}
          }

          var second = {
            strings: ["I'm Dhaval. ^1000", "A Developer. ^1000", "A Dreamer. ^1000" , "A Programmer."],
            typeSpeed: 120,
            startDelay: 1000,
            backDelay: 1000,
            backSpeed: 200,
            smartBackspace: true,
            showCursor: true,
            cursorChar: '|',
            // onComplete: (self) => {$(".navbar").fadeIn(1000).css("display", "flex")}
          }
          
          var typed = new Typed("h1", options);
    }, 5000);