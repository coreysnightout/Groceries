$(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();

    var arrayList = ["List1", "List2", "List3", "List4", "List5", "List6", "List7", "List8", "List9", "List10"];


    var newArray = arrayList.map(function(List){
       return $("#" + List).val();
    });

    newArray.sort();

    newArray.forEach(function(caps) {
      $("ul").append("<li>" + caps.toUpperCase() + "</li>");
    });
    $("form").hide();
    $(".output").show();
  });
    // var upperCasedArray = newArray.map(function(capital) {
    //   return capital.toUpperCase();
    // });

});
