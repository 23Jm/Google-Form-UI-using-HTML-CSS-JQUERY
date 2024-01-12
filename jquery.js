$(document).ready(function(){
    $(".input-field").focusout(function(){
        //make floating label more accurate
        var value=$(this).val();
        if(value==="")
         {
            $(this).removeClass('has-value');
         }
         else{
            $(this).addClass("has-value");
         }
    })
})