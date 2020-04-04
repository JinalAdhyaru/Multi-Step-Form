function validation1() {
    var count = 0;
    var letters = /^[A-Za-z]+$/;
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var radio_check = document.getElementsByName('gender');
    var dob = document.getElementById('bdate').value;
    var country = document.getElementById('country').value;
    if(fname == ""){
        document.getElementById('fsname').innerHTML =" ** Please enter your first name.";
        return false;
    }
    else if(!fname.match(letters)){
        document.getElementById('fsname').innerHTML =" ** only characters are allowed";
        return false;
    }
    else {
        document.getElementById('fsname').innerHTML ="";    
        count++;       
    }
    if(lname == ""){
        document.getElementById('lsname').innerHTML =" ** Please enter your last name.";
        return false;
    }
    else if(!lname.match(letters)){
        document.getElementById('lsname').innerHTML =" ** only characters are allowed";
        return false;
    }
    else {
        document.getElementById('lsname').innerHTML ="";      
        count++; 
    }
    if (radio_check[0].checked == false && radio_check[1].checked == false  && radio_check[2].checked == false) {
        document.getElementById('gen').innerHTML =" ** Please enter gender.";
    } 
    else {
        document.getElementById('gen').innerHTML ="";
        count++;
    }
    if(dob == ""){
        document.getElementById('dob').innerHTML =" ** Please enter your date of birth.";
        return false;
    }  
    else {
        document.getElementById('dob').innerHTML =""; 
        count++;      
    }  
    if(country == ""){
        document.getElementById('cntry').innerHTML =" ** Please enter your country.";
        return false;
    }  
    else if(!country.match(letters)){
        document.getElementById('cntry').innerHTML =" ** only characters are allowed";
        return false;
    }
    else {
        document.getElementById('cntry').innerHTML =""; 
        count++;      
    }    
    if(count == 5) {   
        document.getElementById("first").style.display = "none";
        document.getElementById("second").style.display = "block";
        document.getElementById("active2").style.color = "red";
    }
}

function prev_step1() {
    document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
    document.getElementById("active1").style.color = "red";
    document.getElementById("active2").style.color = "gray";
}

function next_step2() {
    document.getElementById("second").style.display = "none";
    document.getElementById("third").style.display = "block";
    document.getElementById("active3").style.color = "red";
}

function prev_step2() {
    document.getElementById("third").style.display = "none";
    document.getElementById("second").style.display = "block";
    document.getElementById("active2").style.color = "red";
    document.getElementById("active3").style.color = "gray";
}

function uploadImage(files)
{
    var x = document.createElement('img');
    x.src = URL.createObjectURL(files[0]);
    x.height =250;
    x.width=250;
    var y = document.getElementById('image');
    y.appendChild(x);
}

function validation() {
    var count = 0;
    var pass = document.getElementById('password').value;
    var confirmpass = document.getElementById('confirmpassword').value;
    var emails = document.getElementById('emails').value;
    if(emails == ""){
        document.getElementById('emailids').innerHTML =" ** Please fill the email address field";
        return false;
    }
    else if(emails.indexOf('@') <= 0 ){
        document.getElementById('emailids').innerHTML =" ** @ Invalid Position";
        return false;
    }
    else if((emails.charAt(emails.length-4)!='.') && (emails.charAt(emails.length-3)!='.')){
        document.getElementById('emailids').innerHTML =" ** . Invalid Position";
        return false;
    }
    else {
        document.getElementById('emailids').innerHTML ="";    
        count++;       
    }
    if(pass == ""){
        document.getElementById('passwords').innerHTML =" ** Please fill the password field";
        return false;
    }
    else if((pass.length <= 5) || (pass.length > 20)) {
        document.getElementById('passwords').innerHTML =" ** Passwords length must be between  5 and 20 characters long.";
        return false;	
    }
    else {
        document.getElementById('passwords').innerHTML ="";      
        count++; 
    }
    if(confirmpass == ""){
        document.getElementById('confrmpass').innerHTML =" ** Please fill the confirmpassword field";
        return false;
    }  
    else if(pass!=confirmpass){
        document.getElementById('confrmpass').innerHTML =" ** Password does not match the confirm password field.";
        return false;
    }
    else {
        document.getElementById('confrmpass').innerHTML =""; 
        count++;      
    }    
    if(count == 3) {   
        alert("Thank You!! Your details have been recorded successfully.")
        return true;
    }
}