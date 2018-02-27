module.exports = function solveEquation(equation) {

var i=0;	
var j=0;
var a=0;
var b=0;
var c=0;
var D=0;
var x=[];
var PorMa=0;
var PorMb=0;
var PorMc=0;
var l=0;

  while(i<equation.length)
  {
  	if(equation[i]=='-'&&l==0)
  	{
  		PorMa=1;
  		l++;
  	}
  	else
  	{
  		if(equation[i]=='-'&&l==1)
  		{
  			PorMb=1;
  			l++;
  		}
  		else
  		{
  			if(equation[i]=='-'&&l==2)
  			{
  				PorMc=1;
  			}
  			if(equation[i]=='+')
  			{
  				l++;
  			}
  			else
  			{
  				if(i==0)
  				{
  					l++;
  				}
  			}
  		}
  	}



  	if(equation[i]!=' '&&equation[i]!='*'&&equation[i]!='+'&&equation[i]!='-'&&equation[i]!='^'){

  	if(equation[i]=='x'){
		j++;

  	}
  	else{

  	if(j==0)
  	{
	a=a*10+parseInt(equation[i]);
  	}
  	else
  	{
  		if(j==1)
  		{
  		b=b*10+parseInt(equation[i]);
  		}
	  		else
	  		{
		  		if(j==2)
		  		{
		  			c=c*10+parseInt(equation[i]);			
		  		}
	  		}
  	}
  	}
  }
  if(equation[i]=='^'){
  		i++;	
  		}
  
i++;

}
if(PorMa==1){
	a=a*(-1);
}
if(PorMb==1){
	b=b*(-1);
}
if(PorMc==1){
	c=c*(-1);
}
D=b*b-4*a*c;
if(a>0){
x[0]=Math.round((-b-Math.sqrt(D))/(2*a));
x[1]=Math.round((-b+Math.sqrt(D))/(2*a));}
else{
	x[0]=Math.round((-b+Math.sqrt(D))/(2*a));
x[1]=Math.round((-b-Math.sqrt(D))/(2*a));
}


return x;
}
