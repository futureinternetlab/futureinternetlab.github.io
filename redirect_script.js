
$(document).ready(function(){

	// MIRROR IMAGE: First we need to redirect to GWIQ, to read the 'gwid' value from the cookie

	// MIRROR IMAGE: Then we'll redirect back to futureinternetlab.com, passing the 'gwid' as a variable

	// Next we'll append the 'gwid' to the end of the survey link

	var gwid = "xyz"
	var iframeURL = "<iframe src='https://futureinternetlab.typeform.com/to/ACu24s?gwid=" + gwid + "'" + "scrolling='no'></iframe>"
	
	//Finally we'll load the iframe into the body element, with the full survey URL including 'gwid' used as the iframe source
	$('body').html(iframeURL);

});