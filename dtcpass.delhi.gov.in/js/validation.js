
function charsonly(evt) 
{
    evt = evt || window.event;
    var charCode = evt.which || evt.keyCode;
    var charStr = String.fromCharCode(charCode);
    if (/\d/.test(charStr)) 
    {
        return false;
    }
};


function limitlength(obj, length)
{
	var maxlength=length;
	if (obj.value.length>maxlength)
	obj.value=obj.value.substring(0, maxlength);
}

function numbersonly(e){
var unicode=e.charCode? e.charCode : e.keyCode;
if (unicode!=8){ //if the key isn't the backspace key (which we should allow)
if (unicode<48||unicode>57) //if not a number
return false ;//disable key press
}
}

