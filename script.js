
var a=[1,1,2,2,3,3,4,4,5,5];
var l=a.length;
var c=1;
var click=true;
for(var i=0;i<2;i++)
{
	document.getElementById('m').innerHTML+="<div class='mdiv' id='mdiv"+i+"'>";
	for(var j=0;j<l/2;j++)
	{
		var rand=Math.floor(Math.random() * a.length);
		document.getElementById('mdiv'+i).innerHTML+="<div class='w' id='p"+c+"' onclick=\"flipsc('p"+c+"','im"+a[rand]+".jpg')\"></div>";
		a.splice(rand,1);
		c++;
	}
	document.getElementById('m').innerHTML+="</div>";
}

var frst="",scd="",frstid="",scdid="";
function flipsc(x,n)
{
	if(click)
	{

		click=false;
		document.getElementById(x).style.animation="flipp 1s forwards";
		if(frst=="")
		{
			frst=n;
			frstid=x;
		}
		else if(scd=="")
		{
			scd=n;
			scdid=x;
		}
		setTimeout(function(){
			document.getElementById(x).style.backgroundImage="url('"+n+"')";
		},500);
		setTimeout(function(){
			if(frst!="" && scd!="" && frst!=scd)
			{
				document.getElementById(frstid).style.animation="flippc 1s forwards";
				document.getElementById(scdid).style.animation="flippc 1s forwards";
				setTimeout(function(){
					document.getElementById(frstid).style.backgroundImage="url('q.jpg')";
					document.getElementById(scdid).style.backgroundImage="url('q.jpg')";
					frst="";
					scd="";
					frstid="";
					scdid="";
				},500);
			}
			if(frst!="" && scd!="" && frst==scd)
			{
				document.getElementById(frstid).onclick="";
				document.getElementById(scdid).onclick="";
				frst="";
				scd="";
				frstid="";
				scdid="";
			}
			click=true;
		},1000);
	}
}