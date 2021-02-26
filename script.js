getMsg();

function sendMsg(){
    database = firebase.database();
    var id=document.getElementById("input")
    updateMsg(id.value)
    id.value=""
}

function getMsg(){
    database = firebase.database();
    var msgRef=database.ref('Msg');
    msgRef.on("value",function(data){
        var dis=document.getElementById("displayText")
        dis.innerHTML=data.val();
    });
}

function updateMsg(Msg){
    database = firebase.database();
    database.ref('/').update({
        Msg:Msg
    });
}
