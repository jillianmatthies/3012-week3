(function() {
	var images = document.querySelectorAll(".image-holder");
	var heading = document.querySelector(".heading");
	var subHead = document.querySelector(".main-copy h2");
	var theSeasonText = document.querySelector(".main-copy p");
	var appliedClass;

	function changeElements() {
		heading.classList.remove(appliedClass);
		subHead.classList.remove(appliedClass); 


		appliedClass = this.id;

		heading.classList.add(this.id);
		subHead.classList.add(this.id); 

		subHead.firstChild.nodeValue = dynamicContent[this.id].headline;
		theSeasonText.firstChild.nodeValue = dynamicContent[this.id].text;
		//applied class is a css rule 
		//if it's the spring id these are the things we're grabbing from dynamicContent file 
		//with just one id we can pretty much change everything from the page
	}


	[].forEach.call(images, function(image){
		image.addEventListener("click", changeElements, true);
	});

subHead.firstChild.nodeValue = dynamicContent["spring"].headline;
theSeasonText.firstChild.nodeValue = dynamicContent["spring"].text;
heading.classList.add("spring");

})();