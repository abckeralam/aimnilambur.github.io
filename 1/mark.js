function handleClick()
          {         
        var amountCorrect = 0;          
        for(var i = 1; i <= 100; i++) {
          var radios = document.getElementsByName(+i);
          for(var j = 0; j < radios.length; j++) {
            var radio = radios[j];
            if(radio.value == "0" && radio.checked) {
              amountCorrect++;
            }
          }
         }                   
         document.body.scrollTop = 0; // For Safari
         document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
         document.getElementById("quiz").innerHTML = "your mark is:" +  amountCorrect +"/"+ 100;
        }
             