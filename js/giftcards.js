
var amount = document.getElementsByName("name");

function setImage(amount) {
    switch (amount) {
    case 1:
        document.getElementById("imageShow").innerHTML = "<img src='images/giftcard_10.png'>";
        break;
    case 2:
        document.getElementById("imageShow").innerHTML = "<img src='images/giftcard_30.png'>";
        break;
    case 3:
        document.getElementById("imageShow").innerHTML = "<img src='images/giftcard_50.png'>";
        break;
    case 4:
        document.getElementById("imageShow").innerHTML = "<img src='images/giftcard_75.png'>";
        break;
    case 5:
        document.getElementById("imageShow").innerHTML = "<img src='images/giftcard_100.png'>";
        break;
    case 6:
        document.getElementById("imageShow").innerHTML = "<img src='images/giftcard_150.png'>";
        break;
	

        }
    }
window.onload = ready;
function ready()
{
var getForm = document.forms[0];

getForm.onsubmit = yourSelection;
 function yourSelection()
{
	 if((getForm.field[0].checked == false)&&
			(getForm.field[1].checked == false)&&
			(getForm.field[2].checked == false)&&
			(getForm.field[3].checked == false)&&
			(getForm.field[4].checked == false)&&
			(getForm.field[5].checked == false)
			)
			{
          alert("Make a selection");
          return false;
          }
		  getForm.style.display = "none";
			  document.getElementsByClassName("para")[1].style.display = "none"
			  document.getElementById("thanks").innerHTML
             += "Thank you for your purchase!";
		  return false;
}		 

}