// Once document is fully loaded
$(document).ready(function () {
    //Name input 
    let nameInput = $("#name");
    let nameOutput = $("#nameOutput")

    nameInput.focus(function (e) { 
        $("#nameOutput").text("Hello there! What's your name ? ");
    });

    nameInput.blur(function (e) { 
        var name = nameInput.val();
        name.trim() == "" 
            ? 
            nameOutput.text("Looks like you forgot to enter your name, please try again.")
            :
            nameOutput.text(name); 
    });



    // Date Input
    let dateInput = $("#date")
    let ageOutput = $("#ageOutput")
    var age = 0; // used to calculate age from dateInput

    dateInput.focus(function (e) { 
        ageOutput.text("Lemme guess, your age is...");
    });

    dateInput.blur(function (e) { 
        if(dateInput.val().trim() == "") {
            ageOutput.text("Could you enter your birthday ? "); 
        } else {
            ageOutput.text("Your age is " + age + " years old!")
        }
         
    });

    $("#date").change(function (e) { //for every input changed 
        let date = dateInput.val(); //yyyy-mm-dd
        age = getAge(date)
    });


    //Dark/Light Mode
    let darkMode = $("#dark")
    let lightMode = $("#light");
    lightMode.prop("checked", true)
    $(".form-check-input").change(function (e) { 
        e.preventDefault();
        var checkedElement = $("input[name='modeOptions']:checked").val();
        //set classes to 2nd panel
        $(".panel").each(function (index, element) {
            if(index == 1) { // 2nd panel
                if(darkMode.val() == checkedElement) {
                    $(element).removeClass("bg-light text-black");
                    $(element).addClass("bg-dark text-white");
                } else {
                    $(element).removeClass("bg-dark text-white");
                    $(element).addClass("bg-light text-black");
                }
                return;
            }
        });
    });



    //Skills
    $('button').click(function (e) { 
        e.preventDefault();
        //create copy of element
        let original = $(this)
        let el = $(this).clone()
        
        //sets original element to invisible and append cloned to output
        $(this).toggleClass('invisible');
        $("#skillsOutput").append(el);

        //set event handlers to cloned element
        $(el).hover(function(){
            $(this).removeClass("btn-success");
            $(this).addClass("btn-danger");
            }, function(){
            $(this).removeClass("btn-danger");
            $(this).addClass("btn-success");
          });

        $(el).click(function (e) { 
            e.preventDefault();
            $(original).toggleClass('invisible');
            $(this).remove()
        });
        
    });
    

});

function getAge(dateString) {
    var today = new Date();
    var dob = new Date(dateString);
    var age = today.getFullYear() - dob.getFullYear();
    var m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) 
    {
        age--;
    }
    return age;

}
