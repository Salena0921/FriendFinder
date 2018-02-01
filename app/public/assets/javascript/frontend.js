$(".submit").on("click", function (event) {
    event.preventDefault();
    window.location.href = "survey.html";
});

$(".surveySubmit").on("click", function (event) {
    event.preventDefault();

    var newUser = {
        customerName: $("#exampleInputName").val().trim(),
        customerPhoto: $("#exampleInputLink").val().trim()        
    };    
});
