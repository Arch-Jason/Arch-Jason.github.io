---
title: >-
  AI (Object Detection) Implementation in Automatic Adjustment of Beam Angles of
  Front Light of E-Bikes
date: 2024-04-01 22:20:24
tags: 
  - AI
  - CS
  - EE
photos:
  - /2024/04/01/AI-Object-Detection-Implementation-in-Automatic-Adjustment-of-Beam-Angles-of-Front-Light-of-E-Bikes/1.svg
---

As the E-Bikes get more and more pervasive in all cities of China, many problems start to occur. Through my observation, one of the most risk potentials would be the light beams of the front lights of the E-Bikes in dark environments. The unbearable brightness of the light may blind the walking pedestrians, having the risk of causing traffic accidents.
In order to avoid this issue, my plan is to install a light beam angle controlling device which uses the Object Detection to detect the coming pedestrians and alter the beam angle.
After months of attempting. I finally made the whole system running properly. The texts below explains how the system works.
First, we have a normal cellphone running the app developed by me with Flutter installed in front of the E-Bike which captures the view of the front at a frequency of 0.5 times/sec. The captured photo then will be sent to the server running the YOLOv5 object detection model, which detects whether there is a pedestrian approaching the bike. Then the result is sent back to the phone. The phone then sends the binary result (0 for no pedestrians approaching, and vice versa) to the MCU (here I used Arduino for its simplicity) through a Bluetooth module. The MCU then controls the two MOSFETs to switch on/off the higher-beam light or the lower-beam light.

[Here is the source code of my project, including the phone app's code and the server's.](https://drive.google.com/file/d/1irYUDGnrnXnnHmjubSWAGuuoMTTdgUF5/view?usp=sharing)

Photos:
{% asset_img 1.svg %}
{% asset_img 2.jpeg %}
{% asset_img 3.jpeg %}
{% asset_img 4.jpeg %}
{% asset_img 5.jpeg %}
{% asset_img 6.jpeg %}
