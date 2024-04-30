let textbox=document.getElementById("textbox");

        textbox.addEventListener('input',function(){
            var text=this.value;//fetch the value from textarea
            let char=text.length;//findout the length
            document.getElementById("char").innerHTML=char;

            text=text.trim();//it used to remove starting and ending spaces
            let word=text.split(" ");
            let cleanlist=word.filter(function(elm){
                return elm!="";//used to remove space between the word
            });
         
            document.getElementById("word").innerHTML=cleanlist.length;
        })