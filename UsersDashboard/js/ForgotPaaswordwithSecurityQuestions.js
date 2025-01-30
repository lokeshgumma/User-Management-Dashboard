function validationOfSecurityQuestions(){
    const Security1 =document.getElementById('Security1')
    const Security1Value = Security1.value 
    const Security2 =document.getElementById('Security2')
    const Security2Value = Security2.value
    const EmptyValue =""
    if(Security1Value==EmptyValue){
        alert('Please Provide Answer')
        return;
    }
    else if(Security2Value==EmptyValue){
        alert('Please Provide Answer')
        return;
    }
    window.open("changepassword.html")
}
function BackLogin()
{
    window.open('login.html')
}