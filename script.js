let balance =document.getElementById('my-balance');
let income=document.getElementById('income');
let expense=document.getElementById('expense');
let history=document.getElementById('history');
let text=document.getElementById('text-details');                     
let amount=document.getElementById('amount-sign');


function fnexpense(){
    if(amount.value==""){
        confirm("Please enter an amount");
        

    }
    else{
        if(amount.value>0){

            income.innerText=parseInt(income.innerText) + parseInt(amount.value);
            balance.innerText=parseInt( balance.innerText) + parseInt(amount.value);
            history.innerHTML+=`<button>${text.value}${amount.value}</button>`
        }
        else{
            balance.innerText=parseInt(balance.innerText) - parseInt(amount.value.slice(1,));
            expense.innerText=parseInt(expense.innerText) + parseInt(amount.value.slice(1,));
        }

    }
    

}
