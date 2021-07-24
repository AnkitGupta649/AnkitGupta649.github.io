var gupta=new Array();
gupta[0]="Yaakov";
gupta[1]="John";
gupta[2]="Jen";
gupta[3]="perina";
gupta[4]="Jason";
gupta[5]="Paul";
gupta[6]="Frank";
gupta[7]="Larry";
gupta[8]="Paula";
gupta[9]="Laura";
gupta[10]="Jim";
for(var i=0;i<gupta.length;i++)
{
	if(gupta[i].charAt(0)==='J'||gupta[i].charAt(0)==='j')
	{
		console.log("Good Bye " + gupta[i]);
	}
	else
	{
		console.log("Hello "+gupta[i]);
	}	
}
