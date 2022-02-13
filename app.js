function getPin(){
    const pin=Math.round(Math.random() * 10000);
    const pinString=pin+'';
    if(pinString.length ==4){
        return pin;
    }
    else{
        console.log('this is three digit',pin)
        return getPin();
    }

}



function generatePin(){
    const pin=getPin();
  document.getElementById('input-pin').value=pin;
};
document.getElementById('key-pad').addEventListener('click',function(event){
   const number =event.target.innerText;
   const calcInput=document.getElementById('typed-number');
   if(isNaN(number)){
    if(number == 'C'){
        calcInput.value='';
       }
   }
   else{
    const previousNumber=calcInput.value;
    const newNumber=previousNumber + number;
    calcInput.value=newNumber;
   }
});
function verifyPin(){
   const inputPin=document.getElementById('input-pin').value;
   const typedNumber=document.getElementById('typed-number').value;
   const successMessage=document.getElementById('notify-success');
   const errorMessage=document.getElementById('notify-faill');
   if(inputPin == typedNumber){
       successMessage.style.display='block';
       errorMessage.style.display='none';
   }
   else{
    successMessage.style.display='none';
    errorMessage.style.display='block';
   }
}