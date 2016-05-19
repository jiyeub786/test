
function board_state(){


$('.board_liv').text(STATE_LIGHT_LIV);
$('.board_bat').text(STATE_LIGHT_BATH);
$('.board_kit').text(STATE_LIGHT_KIT);
$('.board_out').text(STATE_LIGHT_OUT);
 

$('.board_temp').text(STATE_WEATHER1);
$('.board_uv').text(STATE_WEATHER2);
$('.board_humi').text(STATE_WEATHER3);
$('.board_rain').text(STATE_WEATHER4);
$('.board_light').text(STATE_WEATHER5);


$('.board_window').text( STATE_WINDOW); 
$('.board_cutton').text(STATE_CUTTON);
$('.board_gas').text(STATE_GAS);
$('.board_box').text(STATE_BOX);
 
$('.board_boxpw').text(BOX_PW);
 $('.board_boxerr').text(BOX_ERR);
 


}




function refresh_state(){
 
view_button();
}

function view_button(){
 
if(STATE_LIGHT_LIV=="ON"){ 
$('#btn_liv_on').hide();
$('#btn_liv_off').show();}
if(STATE_LIGHT_LIV=="OFF"){ 
$('#btn_liv_on').show();
$('#btn_liv_off').hide();}
if(STATE_LIGHT_BATH=="ON"){ 
$('#btn_bat_on').hide();
$('#btn_bat_off').show();}
if(STATE_LIGHT_BATH=="OFF"){ 
$('#btn_bat_on').show();
$('#btn_bat_off').hide();}

if(STATE_LIGHT_KIT=="ON"){ 
$('#btn_kit_on').hide();
$('#btn_kit_off').show();}
if(STATE_LIGHT_KIT=="OFF"){ 
$('#btn_kit_on').show();
$('#btn_kit_off').hide();}

if(STATE_LIGHT_OUT=="ON"){ 
$('#btn_out_on').hide();
$('#btn_out_off').show();}
if(STATE_LIGHT_OUT=="OFF"){ 
$('#btn_out_on').show();
$('#btn_out_off').hide();}

if(STATE_CUTTON=="UP"){ 
$('#btn_cutton_up').hide();
$('#btn_cutton_down').show();}
if(STATE_CUTTON=="DOWN"){ 
$('#btn_cutton_up').show();
$('#btn_cutton_down').hide();} 


if(STATE_WINDOW=="OPEN"){ 
$('#btn_window_open').hide();
$('#btn_window_close').show();}
if(STATE_WINDOW=="CLOSE"){ 
$('#btn_window_open').show();
$('#btn_window_close').hide();} 
if(STATE_GAS=="OPEN"){ 
$('#btn_gas_open').hide();
$('#btn_gas_close').show();}
if(STATE_GAS=="CLOSE"){ 
$('#btn_gas_open').show();
$('#btn_gas_close').hide();}


}

