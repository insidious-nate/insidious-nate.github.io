var user_n = new Array(2);
var user_p = new Array(2);
var temp_usr_n = new Array(1);
var temp_usr_p = new Array(1);
var storedItem1 = localStorage.getItem("storedItem1");
var storedItem2 = localStorage.getItem("storedItem2");
var logIn = false;


function save(){
    
    user_n[0]="admin";
    user_p[0]="password";
    user_n[1]="cj";
    user_p[1]="pswrd";
    logIn=false;
    var user_name= document.getElementById("u_id").value;
    localStorage.setItem("storedItem1", user_name); // save the item
    var user_pswrd= document.getElementById("u_pswrd").value;
    localStorage.setItem("storedItem2", user_pswrd); // save the item
    temp_usr_n[0]=user_name;
    temp_usr_p[0]=user_pswrd;
    login();

}
function login(){
    localStorage.getItem("storedItem1");
    localStorage.getItem("storedItem2");
    logIn=false;
    
    for(let i=0; i<=user_n.length; i++){
        
        if(user_n[i]==temp_usr_n[0] && user_p[i]==temp_usr_p[0]){
            console.log("login successfull!");
            //console.log(storedItem2);
            logIn=true;
            
        }
    }
    if(logIn){
        
        //alert('login successful');
        window.open("../admin/storePage.html");
        //window.open("../admin/storePage.html","_self");
        //logIn=false;
        //window.close();
    } else {
        alert('invalid login. \n refresh, and try again.');
    }
}
