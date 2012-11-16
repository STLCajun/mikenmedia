$(document).ready(function() {
 // executes when HTML-Document is loaded and DOM is ready
  getCapabilities();
  getProcess();
    
    
    
    
});

function getNews() {
    var query = "http://mikenmedia.net/?json=get_recent_posts&count=10&jsoncallback=?";

}

function getCapabilities() {
    var query = "http://mikenmedia.net/?json=get_recent_posts&post_type=capability&orderby=id&order=asc"
    
   
    $('.capabilities').empty();
        $.getJSON(query, function(data) {
    	  var items = [];
    
    	  $.each(data.posts, function(key, val) {
    	    items.push('<div data-role="collapsible" data-content-theme="c" data-theme="e"><h3>' + val.title + '</h3>' + val.content + '</div>');
    	  });
    
          $('.capabilities').html(items.join(''));
          $('.capabilities').trigger('create');          
            
    	});
        
}

function getProcess() {
    var query = "http://mikenmedia.net/?json=get_recent_posts&post_type=process&orderby=id&order=asc"
   
    $('.processes').empty();
        $.getJSON(query, function(data) {
    	  var items = [];
    
    	  $.each(data.posts, function(key, val) {
    	    items.push('<div data-role="collapsible" data-content-theme="c" data-theme="e"><h3>' + val.title + '</h3>' + val.content + '</div>');
    	  });
    
          $('.processes').html(items.join(''));
          $('.processes').trigger('create');          
            
    	});

}
