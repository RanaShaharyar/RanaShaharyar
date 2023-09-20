var j=0,cid=[],mid=[]; 
//Add Courses
function NumberOfCourse()
{
    var n=document.getElementById('Cou').value;

   for(var i=0; i<n; i++)
   {   
       cid[j]="ch"+j; mid[j]="m" + j;
       document.getElementById('tab').removeAttribute("style","display:none");
        const pre = document.getElementById("tb");
        let html = "<tr><td><input type='text'></td><td><input type='number' min='1' max='4' id='"+cid[j]+"'></td><td><input type='number' min='0' max='100' id='"+mid[j]+"'></td></tr>";
        pre.insertAdjacentHTML("beforeend", html);
        j=j+1;
   }
}
//Calculate Gpa
function calculate()
{
    document.getElementById('dis').removeAttribute("style","display:none");
    var marks,credith,tgp=0,tch=0;
    for(var k=0; k<j; k++)
    {
        marks=document.getElementById(mid[k]);
        credith=document.getElementById(cid[k]);
        tch+=credith.value*1;
        if(marks.value>=85)
        {
            tgp=tgp+(credith.value*4);
        }
        else if(marks.value>=80 && marks.value<=84)
        {
            tgp=tgp+(credith.value*3.66);
        }
        else if(marks.value>=75 && marks.value<=79)
        {
            tgp=tgp+(credith.value*3.33);
        }
        else if(marks.value>=71 && marks.value<=74)
        {
            tgp=tgp+(credith.value*3);
        }
        else if(marks.value>=68 && marks.value<=70)
        {
            tgp=tgp+(credith.value*2.66);
        }
        else if(marks.value>=64 && marks.value<=67)
        {
            tgp=tgp+(credith.value*2.33);
        }
        else if(marks.value>=61 && marks.value<=63)
        {
            tgp=tgp+(credith.value*2);
        }
        else if(marks.value>=58 && marks.value<=60)
        {
            tgp=tgp+(credith.value*1.66);
        }
        else if(marks.value>=54 && marks.value<=57)
        {
            tgp=tgp+(credith.value*1.30);
        }
        else if(marks.value>=50 && marks.value<=53)
        {
            tgp=tgp+(credith.value*1);
        }
        else
        {
            tgp=tgp+(credith.value*0);
        }
    }  
    document.getElementById('res').innerHTML=tgp/tch;
}
function reset()
{
    document.getElementById('tb').innerHTML="";
    document.getElementById('Cou').value="";
    document.getElementById('dis').setAttribute("style","display:none;");
    document.getElementById('tab').setAttribute("style","display:none;");

}
