document.querySelector("#signinbutton").addEventListener("click",function () {

    const e_input = document.querySelector("#emailinput").value;
    const  p_input = document.querySelector("#pwinput").value;

    if (e_input ==="subyyallk@gmail.com" && p_input=== "1234"){

        window.location = "menu.html";


    }
    else {

        alert("PLEASE TYPE CORRECT INFORMATION !!! ")

    }

});
