// welcome pg submit button
const firstBtn = document.getElementById("firstBtn");
firstBtn.addEventListener('click', function () {
    const loginForm = document.getElementById("login-form");
    loginForm.style.display = "none"; // make the whole thing vanish
})
firstBtn.addEventListener('click', function () {
    const transactionArea = document.getElementById("transactionArea");
    transactionArea.style.display = "block"; //make the whole thing visual
})
const depositeBtn = document.getElementById("depositeBtn"); // deposite money
depositeBtn.addEventListener("click",function(){
    const depositeInput= document.getElementById("depositeInput");
    const depositeNum= parseFloat(depositeInput.value);
    const initialDeposite=document.getElementById("initialDeposite");
    const initialDepositeNum=parseFloat(initialDeposite.innerText);
    const totalDeposite=initialDepositeNum+depositeNum;
    initialDeposite.innerText=totalDeposite;
})
depositeBtn.addEventListener("click",function(){  // total money after deposite
    const depositeInput= document.getElementById("depositeInput");
    const depositeNum= parseFloat(depositeInput.value);
    const lastBalance=document.getElementById("lastBalance");
    const lastBalanceNum=parseFloat(lastBalance.innerText);
    const totalBalance=lastBalanceNum+depositeNum;
    lastBalance.innerText=totalBalance;
})
const witdrawBtn = document.getElementById("witdrawBtn"); // witdrawal money
witdrawBtn.addEventListener("click",function(){
    const witdrawInput= document.getElementById("witdrawInput");
    const witdrawNum= parseFloat(witdrawInput.value);
    const initialWitdraw=document.getElementById("initialWitdraw");
    const initialWitdrawNum=parseFloat(initialWitdraw.innerText);
    const totalWitdraw=initialWitdrawNum+witdrawNum;
    initialWitdraw.innerText=totalWitdraw;
})
witdrawBtn.addEventListener("click",function(){   // total money after witdraw
    const witdrawInput= document.getElementById("witdrawInput");
    const witdrawNum= parseFloat(witdrawInput.value);
    const lastBalance=document.getElementById("lastBalance");
    const lastBalanceNum=parseFloat(lastBalance.innerText);
    const totalBalance=lastBalanceNum-witdrawNum;
    lastBalance.innerText=totalBalance;
})
