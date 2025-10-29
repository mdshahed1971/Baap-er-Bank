document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawFiled = document.getElementById('withdraw-field');
    const withdrawFiledValue = withdrawFiled.value;
    const convertedWithdrawFiled = parseFloat(withdrawFiledValue);
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalValue = withdrawTotal.innerText;
    const convertedWithdrawTotal = parseFloat(withdrawTotalValue);
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalValue = balanceTotal.innerText;
    const convertedBalanceTotal = parseFloat(balanceTotalValue);
   
    if(withdrawFiledValue){
        const newWithdrawTotal = convertedBalanceTotal - convertedWithdrawFiled;
        balanceTotal.innerText = newWithdrawTotal;
    }
      const newWithdrawTotal = convertedWithdrawTotal + convertedWithdrawFiled;
      withdrawTotal.innerText = newWithdrawTotal;
      
      withdrawFiled.value = '';
})