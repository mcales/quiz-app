var numberCorrect = 0;
var questionNumber = 0;
var defaultAnswer = 9;

//Array of Question Objects
var questions = [{
	ques : "Which field of physics is most associated with Isaac Newton?",
	ans : ["Mechanics                  ", "Thermodynamics               ", "Electricity & Magnetism", "Quantum Mechanics"],
	correct : 0,
	desc : "Mechanics is also commonly called Newtonian mechanics. Newton published the Principia which provided the framework for classical physics",
	img: 'images/newton.jpg'
},
{	ques : "For what discovery did Albert Einstein recieve the Nobel prize?",
	ans : ["Relativity                     ", "Quarks              ", "Photoelectric Effect", "Brownian Motion"],
	correct : 2,
	desc : "Albert Einstein recieved the Nobel Prize for his description of the Photoelectric Effect in 1921.",
	img: 'images/einstein.jpg'
},
{	ques : "Which scientist is credited with finding the first photographic evidence of relativity?",
	ans : ["Arthur Eddington", "Albert Einstein", "Neils Bohr         ", "Stephen Hawking       "],
	correct : "0",
	desc :"Arthur Eddington is credited with showing evidence of relativistic lensing in an image of a solar eclipse in 1919.",
	img: 'images/eclipse.jpg'
},
{	ques : "Who is considered the father of modern quantum mechanics?",
	ans : ["Neils Bohr               ", "Max Planck         ", "Erwin Schroedinger", "Albert Einstein         "],
	correct : 1,
	desc : "Max Plack's influence was instrumental in early quantum mechanical models and theory.",
	img: 'images/atom.jpg'
},
{	ques : "What particle is believed to have been discovered at the LHC in Switzerland?",
	ans : ["Higgs Boson               ", "Quarks            ", "Neutrino                      ", "Positron             "],
	correct : 0,
	desc : "The LHC was built, in part, to find evidence that the Higgs Boson is more than just a theoretical model. Their results indicate strong evidence of the Higgs Boson.",
	img: 'images/lhc.jpg'
}];

$(document).ready(function(){
newQuestion();

//submit button
$('.question-section').on('click', '#submit', function(){
	if(verifyAns()){
	getAnswer();
	questionNumber++;
	newQuestion();
}
});

$('.question-section').on('click', '#retry', function(){
	newGame();
});
 
$('a.new').click(newGame);
});

//writes the values of the next question to the page
function newQuestion(){

	//To display Questions and answers
	if(questionNumber < 5){
	$(".question-box").html(questions[questionNumber].ques);
	$(".answer0").html('<input type="radio" name="option" class="option" value="0">' + questions[questionNumber].ans[0]);
	$(".answer1").html('<input type="radio" name="option" class="option" value="1">' + questions[questionNumber].ans[1]);
	$(".answer2").html('<input type="radio" name="option" class="option" value="2">' + questions[questionNumber].ans[2]);
	$(".answer3").html('<input type="radio" name="option" class="option" value="3">' + questions[questionNumber].ans[3]);
	$(".image-section").html('<img src="' + questions[questionNumber].img + '" alt="name" width="200" height="250">');
	if (questionNumber > 0){
		$(".fact").html(questions[questionNumber - 1].desc);
	}
	else{
		$(".fact").html('');
	}
	$('.progress-tracker').html((questionNumber + 1) + ' of 5');}

	//To display the Quiz complete screen
	else{
	$(".question-box").html('Congratulations! you answered ' + numberCorrect + ' out of 5 questions correcly.');
	$(".answer0").css("display", "none");
	$(".answer1").css("display", "none");
	$(".answer2").css("display", "none");
	$(".answer3").css("display", "none");
	$(".submit").css("display", "none");
    $(".retry").css("display", "inline");
    $(".fact").html(questions[questionNumber - 1].desc);
    $(".image-section").html('<img src="images/planets.jpg" alt="name" width="200" height="250">');
	}
};

//checks if answered
function verifyAns(){
	if ( !($("input").is(':checked')) ){
		alert('Please answer the question');
		return false;
	}
	else{
		return true;
	};
};

//checks if an answer is correct
function getAnswer (){
	defaultAnswer = $("input[type='radio']:checked").val();
	if (defaultAnswer == questions[questionNumber].correct){
		numberCorrect++;
		};
	};

//resets variables
function resetGame (){
	numberCorrect = 0;
	questionNumber = 0;
	$(".answer0").css("display", "block");
	$(".answer1").css("display", "block");
	$(".answer2").css("display", "block");
	$(".answer3").css("display", "block");
	$(".submit").css("display", "inline");
	$(".retry").css("display", "none");
};

function newGame(){
	resetGame();
	newQuestion();
}