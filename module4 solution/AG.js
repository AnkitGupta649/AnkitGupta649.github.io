var gupta=new Array();
gupta[0]="Ankit";
gupta[1]="Anurag";
gupta[2]="krati";
gupta[3]="perru";
gupta[4]="manoj";
gupta[5]="sarukh";
gupta[6]="gutthi";
gupta[7]="kapil";
gupta[8]="jitendra";
gupta[9]="akhshay";
gupta[10]="Jeetu";
for(var i=0;i<gupta.length;i++)
{
	if(gupta[i].charAt(0)==='J'||gupta[i].charAt(0)==='j')
	{
		console.log("Goodbye " + gupta[i]);
	}
	else
	{
		console.log("Hello "+gupta[i]);
	}	
}
