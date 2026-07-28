---
title: ESP32 OBD-CAN Tool
date: 2026-04-29 15:54:20
tags:
    - EE
    - DIY
photos:
    - /2026/04/29/ESP32-OBD-CAN-Tool/pcb.png
---

Simply a DIY OBD-CAN tool. I used ESP32-S3 as the MCU. I managed to port and flash an slcan firmware (https://github.com/mintynet/esp32-slcan/tree/master/esp32-twai-can) to the board, and hooked it up with my computer to read some engine-related data (see the video below).

{% asset_img PXL_20260428_111143114.jpg %}
{% asset_img pcb.png %}
{% asset_img Schematic_ESP32-OBD-CAN-Tool.svg %}
{% asset_img pcb_in_oven_lmao.jpg %}

<video controls>
    <source src="/2026/04/29/ESP32-OBD-CAN-Tool/demo.mp4" type="video/mp4">
</video>