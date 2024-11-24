function NumberOfNotes(){
    const amountInput=document.getElementById("amount").value;
    const resultDiv=document.getElementById("result")
    resultDiv.innerHTML = "";
    let amount = parseInt(amountInput);
    if (isNaN(amount) || amount < 1) {
                resultDiv.style.display = 'block';
                resultDiv.innerHTML = "<p style='color: red;'>Please enter a valid amount.</p>";
                return;
            }
        
     let hundred=0 , fifties=0 ,tens=0, thousand=0, remainder = 0;
      
        if( amount>= 1000){
            thousand=Math.floor(amount/1000);
            amount=amount % 1000;
        }
            
        if( amount>= 100){
            hundred=Math.floor(amount/100);
            amount=amount % 100;
    }
        if(amount>=50){
            fifties=Math.floor(amount/50);
            amount=amount % 50;
        }
        if(amount>=10){
           tens=Math.floor(amount/10);
           amount=amount % 10;
              
        }
        remainder = amount;
        
      resultDiv.style.display = 'block';
        resultDiv.innerHTML = `
            <p>The number of thousand notes is: <strong>${thousand}</strong></p>
            <p>The number of hundred notes is: <strong>${hundred}</strong></p>
            <p>The number of fifty notes is: <strong>${fifties}</strong></p>
            <p>The number of ten notes is: <strong>${tens}</strong></p>
            <p>Remaining amount that cannot be converted into notes:<strong> ${remainder}</strong></p>
        `;
    
    }
    
    
    