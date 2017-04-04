function makeStory() {
    // get form values (2 points)
    var adjective1 = document.getElementById('adjective1').value;
    var adjective2 = document.getElementById('adjective2').value;
    var adverb = document.getElementById('adverb').value;
    var letter = document.getElementById('letter').value;
    var noun1 = document.getElementById('noun1').value;
    var noun2 = document.getElementById('noun2').value;
    var noun3 = document.getElementById('noun3').value;
    var noun4 = document.getElementById('noun4').value;
    var body = document.getElementById('body').value;
    var plural1 = document.getElementById('plural1').value;
    var plural2 = document.getElementById('plural2').value;
    var plural3 = document.getElementById('plural3').value;
    var plural4 = document.getElementById('plural4').value;
    var plural5 = document.getElementById('plural5').value;
    var plural6 = document.getElementById('plural6').value;

    // Set title of story. Use at least one form value in the title. (2 points)
    var title = " Eat, Drink, and be sick ";


    // Build story. you can add as many paragraphs as you like. (3 points)
    var paragraph1 = " An inspector from the Department of Health and " + noun1 + " Services paid a surprise visit to our " + adjective1 +     " school cafeteria. The lunch special, prepared by our "  + adjective2 + "dietician, was spaghetti and " + noun2 + " balls with a choice of either a " + noun3 + " salad or French " + plural1 + " . "  ;

    var paragraph2 = " The inspector found the meat "  + plural2 + " to be overcooked and discovered a live " + noun4 + " in the fries, causing him to have a " + body + " ache. In response, he threw up all over his " + plural3 + " In his report, the inspector " + adverb + " recommended that the school cafeteria serve only nutritious " + plural4 + " ,as well as low-calorie " + plural5 + ", and that all of the saturated " + plural6 + " be eliminated. He rated the cafeteria a " + letter + " -minus. ";




    // Display story by putting title & paragraphs into appropriate divs. (3 points)
document.getElementById('title').innerHTML = title;
document.getElementById('paragraph1').innerHTML = paragraph1;
document.getElementById('paragraph2').innerHTML = paragraph2;

}
