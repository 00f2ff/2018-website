
(function stopDeforestation() {

	let log = console.log;

	// bark = function(str) { return str.length * "_"; }

	window.console.log = function() {

		let args = Object.values(arguments);
		let etches = args.length > 0 ? args.join(' ') : "Shame on you for needlessly logging in this pristine console.";

		let theBountyOfNature = ` %c_${"_".repeat(etches.length)}__\n(%c ${etches} (%c)`;

		/*
		Next step: use `etches.match(new RegExp("\n", "g")) || []).length`
		to detect number of newlines in a string, and make the log that much wider

		What would the log look like then? I can't stretch parens out and straight lines are ugly, so maybe stack the logs?
		Let's go with that, and remove lower log's top line if it looks bad in the console.

		 _________________
		( underlined     ()
		 _________________
		( underlined     ()

		*/


		let brownCSS = "color: #4E342E;";

		log.apply(console, [theBountyOfNature, 
							brownCSS, 
							`${brownCSS} text-decoration: underline;`, 
							`${brownCSS} text-decoration: none;`
							]);
		

	}

	/*
	 * Other fun ogs: dog, bog, fog, jog, pollywog, hog
	 */
})();


/*
(function dothething() {
  // Act on either the window.console, or the normal console.
  var con = console;
  if (typeof(window) !== 'undefined') {
    con = window.console;
  }

  con.frog = function() {

    var i,
      css = "color: green";

    // Should be enough to make this fine in node.
    var inBrowser = (typeof window !== 'undefined');
    
    // This looks like a frog, right?
    // Taken from here - http://chris.com/ascii/index.php?art=animals/frogs

    var frog;
    if( inBrowser ) {
      frog = ['%c%c',
        "%c         _,-.  %c",
        "%c ,-. ,--'  o ) %c",
        "%c \\(,' '  ,,-' %c",
        "%c,-.\\-.__,\\\\_%c",
        "%c\\(`--'    `\\ %c",
        '%c%c'];
    } else {
      frog = ['',
        "         _,-.  ",
        " ,-. ,--'  o ) ",
        " \\(,' '  ,,-' ",
        ",-.\\-.__,\\\\_",
        "\\(`--'    `\\ ",
        ''];
    }
      

    // Gets args as a string
    var args = Array.prototype.slice.call(arguments);
    var stringOfArgs = args.join(' ');

    // Add the bubble if there is something to log!
    if( stringOfArgs.length > 0 ) {  
      frog[1] = frog[1] + "   ---" + ("-".repeat(stringOfArgs.length)) + "-";
      frog[2] = frog[2] + "-(   " + stringOfArgs + "   )";
      frog[3] = frog[3] + "    ---" + ("-".repeat(stringOfArgs.length)) + "-";
    }

    // Log the frog!
    if( inBrowser ) {
      for( i = 0; i < frog.length; i++ ) {
        console.log(frog[i], css, "");
      }
    } else {
      for( i = 0; i < frog.length; i++ ) {
        console.log(frog[i]);
      }  
    }
  }
})();
*/