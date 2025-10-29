document.getElementById('btn-deposite').addEventListener('click', function(event){
   event.preventDefault();
   const depositeFiled = document.getElementById('deposite-field');
   const depositeFiledValue = depositeFiled.value;
   const convertedDepositeFiled = parseFloat(depositeFiledValue);
   const balanceTotal = document.getElementById('balance-total');
   const balanceTotalValue = balanceTotal.innerText;
   const convertedBalanceTotal = parseFloat(balanceTotalValue);
   const depositeTotal = document.getElementById('deposite-total');
   const depositeTotalValue = depositeTotal.innerText;
   const convertedDepositeTotal = parseFloat(depositeTotalValue);


   if(depositeFiled){
   const newDeposite = convertedDepositeFiled + convertedBalanceTotal;
   balanceTotal.innerText = newDeposite;
  
   }
   if(depositeTotal){
      const newDepositeTotal = convertedDepositeFiled + convertedDepositeTotal;
      depositeTotal.innerText = newDepositeTotal;
     
   }
   
})