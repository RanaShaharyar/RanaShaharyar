function Functions(){
    var number = document.getElementById('num');
    var result=number.value%2;
    var values=1,string,prime;
    if(result == 0)
    {
        string="Is Even";
    }
    else if(result !=0 && number.value > -1){
        string="Is Odd";
    }
    else{
        document.getElementById('error').innerText="Enter Postive Number!";
    }
    
    if(number.value > -1)
    {
        //Factorial
    var i=1;
    while(i<=number.value)
    {
     values = values * i;
    i++;
    }
    document.getElementById('Fac').innerHTML= values;
    //Prime Number
    var flag=0,n=number.value;
        for(var i = 2; i <= n/2; i++)  
        {  
            if(n % i == 0)  
            {  
                prime="Not Prime";  
                flag=1;  
                break;  
            }  
        }  
        if (flag==0 && n!=1) {
           prime="Is Prime"; 
        }
        else{
            prime="Not Prime"; 
        } 
    }
    if(number.value> -1)
    {
        document.getElementById('tab').removeAttribute("style","display:none");
        document.getElementById('EO').innerText=string;
        document.getElementById('Fac').innerText=values;
        document.getElementById('Pri').innerText=prime;
    }
}
function Functions1(){
        document.getElementById('num').value="";
        document.getElementById('error').innerHTML="";
        document.getElementById('tab').setAttribute("style","display:none");

}
