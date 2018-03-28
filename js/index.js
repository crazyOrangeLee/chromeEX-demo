console.log("I am here");

var $logo = document.querySelector('img[src="/new/static/image/emoji.gif"]')
var styles = getComputedStyle($logo)

$logo.style.left = parseInt(styles.left, 10) + 4 + 'px'
$logo.style.top = parseInt(styles.top, 10) + 7 + 'px'
$logo.style.width = '30px'
$logo.style.height = '30px'

$logo.src = 'http://file.family.baidu.com/portal/voteImages/N6EwLDjdnIYZZHgBkzLVOQ==.undefined'




// 类似ajax方式调用
var xmlhttp;
if (window.XMLHttpRequest)
{// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
}
else
{// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttp.onreadystatechange=function()
{
	if (xmlhttp.readyState==4 && xmlhttp.status==200)
  	{
  		console.log(xmlhttp.responseText);
  		alert(xmlhttp.responseText);
  	}
}
xmlhttp.open("GET","https://crazyorangelee.github.io/reminder/reminder.json",true);
xmlhttp.send();

console.log("Done");

// 远程调用js文件并使用里边的变量
// document.write("<script type=\"text/javascript\" src=\"https://crazyorangelee.github.io/reminder/reminder.js\"></script>");
// alert('吃药');