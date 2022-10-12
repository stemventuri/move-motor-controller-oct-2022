radio.set_group(1)
basic.show_leds("""
    . . . . .
        . # . # .
        # . . . #
        . . . . #
        . . . # .
""")

def on_forever():
    if input.button_is_pressed(Button.A):
        radio.send_number(1)
    elif input.button_is_pressed(Button.B):
        radio.send_number(2)
    elif input.button_is_pressed(Button.AB):
        radio.send_number(3)
basic.forever(on_forever)
