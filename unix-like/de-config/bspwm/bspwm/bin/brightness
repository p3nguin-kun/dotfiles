#!/usr/bin/env bash

notify_cmd(){ 
    dunstify --replace=11111 -a 'no' --hints=int:value:"$(get_brightness)" "☀️ Brightness: $(get_brightness)%"
}

get_brightness(){
    brightnessctl i | grep -oP '\(\K[^%\)]+'
}

brightness_up(){
    brightnessctl set 5%+
}

brightness_down(){
    brightnessctl set 5%-
}

if command -v brightnessctl &>/dev/null; then
	case "$1" in
		--up) brightness_up && notify_cmd ;;
		--down) brightness_down && notify_cmd ;;
		*) echo "$(get_brightness)%" ;;
	esac
fi
