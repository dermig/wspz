require("./main.js")

var $ = require("jquery");

$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return decodeURI(results[1]) || 0;
    }
}

$(document).ready(function () {
  $("form input#inputSubject").val($.urlParam('subject'));
})
