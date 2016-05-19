

$(document).ready(function(){
  var socket = io.connect(url());

socket.on('connect',function(){
$(location).attr('href',"#page0")
});
socket.on('connect_error',function(){
$(location).attr('href',"#disconnect")
 
}); 
socket.on('device_state',function(data){

if(data.state==1){
$('#STATE_DEVICE').text("CONNECTED");

}else{
$('#STATE_DEVICE').text("DISCONNECTED");

}});
function get_weather(){


socket.emit('weather' ,{"location":  DEV_BAT,"value":ON});


}
 




socket.on('gaserr',function(data){

alert(data.msg);
});
 socket.on('state' ,function(data){
          
            console.log(data);
STATE_LIGHT_LIV=data.light_liv;
 STATE_LIGHT_BATH=data.light_bath;
 STATE_LIGHT_OUT=data.light_out;
 STATE_LIGHT_KIT=data.light_kit;
 STATE_WINDOW=data.window;
 STATE_WEATHER1=data.weather1;
 STATE_WEATHER2=data.weather2;
 STATE_WEATHER3=data.weather3;
 STATE_WEATHER4=data.weather4;
 STATE_WEATHER5=data.weather5;
 STATE_BOX=data.box;
 STATE_GAS=data.gas;
 STATE_CUTTON=data.cutton;
 STATE_DEVICE=data.device_online;
 BOX_PW=data.box_pw;
 BOX_ERR=data.box_err;
 
 board_state();
view_button();
             


        });








 


<!-- operate once -->
refresh_state(); 


self.setInterval(get_weather,10000);

    

   
<!-- led button event-->

     
$('.img2').click(function(){
alert("끄끄끄");
});   
 
<!-- led button event-->
$('#btn_liv_on').click(function(){ 
socket.emit('light' ,{"location":  DEV_LIV,"value":ON}); });
$('#btn_liv_off').click(function(){socket.emit('light' ,{"location":  DEV_LIV,"value":OFF});});

$('#btn_bat_on').click(function(){socket.emit('light' ,{"location":  DEV_BAT,"value":ON});});
$('#btn_bat_off').click(function(){socket.emit('light' ,{"location":  DEV_BAT,"value":OFF});});

$('#btn_kit_on').click(function(){socket.emit('light' ,{"location":  DEV_KIT,"value":ON});});
$('#btn_kit_off').click(function(){socket.emit('light' ,{"location":  DEV_KIT,"value":OFF});});

$('#btn_out_off').click(function(){socket.emit('light' ,{"location":  DEV_OUT,"value":OFF});});
$('#btn_out_on').click(function(){socket.emit('light' ,{"location":  DEV_OUT,"value":ON});});

$('#btn_all_on').click(function(){socket.emit('light' ,{"location":  DEV_LIGHT_ALL,"value":ON});});
$('#btn_all_off').click(function(){socket.emit('light' ,{"location":  DEV_LIGHT_ALL,"value":OFF});});

<!-- cutton button event-->
$('#btn_cutton_up').click(function(){socket.emit('cutton' ,{"value":UP});});
$('#btn_cutton_down').click(function(){socket.emit('cutton' ,{"value":DOWN});});



<!--  window button  event-->
$('#btn_window_open').click(function(){socket.emit('window' ,{"value":OPEN});});
$('#btn_window_close').click(function(){socket.emit('window' ,{"value":CLOSE});});



<!-- gas button event-->
$('#btn_gas_open').click(function(){socket.emit('gas' ,{"value":OPEN});});$('#btn_gas_close').click(function(){socket.emit('gas' ,{"value":CLOSE});});


$('#btn_box_open').click(function(){socket.emit('box' ,{"value":OPEN});})

 });


 






