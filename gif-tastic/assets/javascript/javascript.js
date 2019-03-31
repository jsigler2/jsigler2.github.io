var topics = ["doggo", "pupper", "squirrel", "turtle", "pigeon", "pizza rat", "horse"];

$(document).ready(function(){

	view.displayButtons();
	gifFinder.topicButtonClick();
	gifFinder.playGifs();
	gifFinder.addTopicToArray();

});

// view Object

var view = {

	displayButtons: () => {

		$('.button-display').empty()

		for (var i = 0; i < topics.length; i++) {
			var topicButtons = $('<button>').addClass('topic-button btn btn-info').text(topics[i]);
			$('.button-display').append(topicButtons)
		}

	},

};

var gifFinder = {

	topicButtonClick: () => {
	 	$("body").on("click", ".topic-button", function() {
	      var animal = $(this).text();
	      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
	        animal + "&api_key=cp2YE3vqeMKUmaukPsqx72MrfGtu6uxp&limit=24";

	      $.ajax({
	        url: queryURL,
	        method: "GET"
	      }).done(function(response) {

	      	$('.gif-display').empty();
	      	var results = response.data;
	      	console.log(results)
					
						for (var i = 0; i < results.length; i++) {
							var gifDiv = $('<div>');
							gifDiv.addClass('col-4 gif-div');
							
							var gifImage = $('<img>')
							gifImage.attr("src", results[i].images.fixed_height_still.url);
							gifImage.attr("gif-still", results[i].images.fixed_height_still.url);
							gifImage.attr("gif-animate", results[i].images.fixed_height.url);
							gifImage.attr("gif-state", "still")
							gifImage.addClass('image-gif');

							gifDiv.prepend(gifImage);

							$('.gif-display').append(gifDiv);
						}      	
	      	})
	    });
	},

	addTopicToArray: () => {
		$("body").on("click",".add-button", function() {
      event.preventDefault();
			var newTopic = $('#new-gif').val().trim();
			console.log(newTopic);
			topics.push(newTopic);
			$('#new-gif').val("");
			view.displayButtons();
		});
	},

	playGifs: () => {
		$("body").on("click", ".image-gif", function() {
			var state = $(this).attr("gif-state");
		      if (state === "still") {
		        $(this).attr("src", $(this).attr("gif-animate"));
		        $(this).attr("gif-state", "animate");
		      } else {
		        $(this).attr("src", $(this).attr("gif-still"));
		        $(this).attr("gif-state", "still");
		      }
		});
	},
};