var totalIncome=300000;
var taxableIncome;
var savings=150000;
var tax;

if(savings>totalIncome) {
  console.log('Savings cant be more than income !')
} else {

  if (taxableIncome<250000) {
    console.log('No Tax * ')
  }
  
  else if((totalIncome > 250000) && (totalIncome < 500000)) {

    rebate=(50 * savings)/100;

    if(rebate>50000) {
        rebate=50000;
        taxableIncome = totalIncome - rebate;
      } else {
        taxableIncome = totalIncome - rebate;
      }
    
    
    tax = (10*taxableIncome)/100;
    console.log('Tax to be pay :', +tax+" rs");
    
  } 
  else if ((totalIncome >= 500000) && (totalIncome <= 1000000)) {
    
    rebate = (30* savings)/100;

    if(rebate>50000) {
        rebate=50000;
        taxableIncome = totalIncome - rebate;
      } else {
        taxableIncome = totalIncome - rebate;
      }

  if(rebate>=50000) {
    rebate=50000;
  }
  taxableIncome = totalIncome - rebate;
  tax = (20* taxableIncome)/100;
  console.log('Tax to be pay :', +tax+" rs"); 

  }
  else if(totalIncome > 1000000) {
    rebate = (10* savings)/100;

    if(rebate>50000) {
        rebate=50000;
        taxableIncome = totalIncome - rebate;
      } else {
        taxableIncome = totalIncome - rebate;
      }

  if(rebate>=50000) {
    rebate=50000;
  }
  taxableIncome = totalIncome - rebate;
  tax = (30* taxableIncome)/100;
  console.log('Tax to be pay :', +tax+" rs"); 
    
}


}