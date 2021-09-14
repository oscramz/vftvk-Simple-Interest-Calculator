// Calculates operation values
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear() + parseInt(years);
    
    var interest = (principal * years * rate) / 100; // Computes the interest
    
    // Validates the amount positve value
        if (principal <= 0 || isNaN(principal)) {
            alert("Enter a valid positive amount");
            document.getElementById("principal").focus();
            return
        }
    // Prints the results
    document.getElementById("result").innerHTML="If you deposit: <mark>"+principal+"$.</mark>,\<br\>At an interest rate of: <mark>"+rate+"%.</mark>\<br\>You will receive an amount of: <mark>"+interest+"$.</mark>\<br\>In the year: <mark>"+year+".</mark>\<br\>"
}

// Updates the rate of interest
function updateRate (){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}
