---
title: DIY VFD
date: 2023-08-12 22:12:30
tags:
photos:
    - /2023/08/12/DIY-VFD/process2.jpg
---

The VFD (Variable-Frequency Drive) is a kind of power control unit for AC induction motors. As a railway fan, I know that a lot of electric railway vehicles use this type of technology to let the motors run power-efficienitly. Additionally, the VFD usually causes the motor to produce a special sound which is very interesting. The sound is just like what this video shows:

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=413224031&bvid=BV1cV411C74b&cid=190538884&p=1&high_quality=1&danmaku=0" allowfullscreen="allowfullscreen" width="100%" height="500" scrolling="no" frameborder="0" sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"></iframe>

Because of my passion for DIY, I wanted to build one myself. The whole system consists of two parts: the logical signal generator and the H-bridge circuits. For the former, I used STC89C52RC MCU, the code for which is available [here](https://github.com/Arch-Jason/8051-vvvf). For the H-bridge circuits, I used the G160N60 IGBT and the IR2104 IGBT driver IC.

{% asset_img logical.jpg Logical Signal Generator %}
{% asset_img driver.jpg H-bridge %}
{% asset_img process1.jpg process %}
{% asset_img process2.jpg process %}
{% asset_img process3.jpg process %}

The logic of the code is as follows: First, we store an int array of the numbers of the sine wave on a half cycle. Then we create a triangular wave. Compare the two waves. If the value of the triangular wave is below that of the sine wave, switch on one route of the H-bridge. Otherwise the H-bridge remains off. For the other half of the sine cycle, swap the route of the H-bridge.

{% asset_img sine.jpg Sine Wave %}

This project lasted one month during the summer vacation of 2023. During the debugging and constructing process, I damaged a few ICs and the most unforgetable thing is the smoke and heat from the bread board. Anyway I'm really happy to say this project was quite successful and definitely improved my coding skills knowledge of electricity.

The overview video:

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=489743181&bvid=BV1nN411z7oj&cid=1231236589&p=1&high_quality=1&danmaku=0" allowfullscreen="allowfullscreen" width="100%" height="500" scrolling="no" frameborder="0" sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"></iframe>

{% asset_img overview1.jpg Overview %}