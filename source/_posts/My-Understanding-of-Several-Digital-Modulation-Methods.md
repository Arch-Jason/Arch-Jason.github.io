---
title: My Understanding of Several Digital Modulation Methods
date: 2024-09-06 21:36:21
tags:
    - Mathematics
photos:
    - /2024/09/06/My-Understanding-of-Several-Digital-Modulation-Methods/demo.gif
---

In this article, I will discuss the basics of several commonly used digital signal modulation methods, including ASK, FSK, PSK, and MPSK.

ASK, FSK, PSK are easy. You can jump to MPSK to get some Mathematical insights.

## ASK (Amplitude-Shift Keying)

As the name says, ASK works by shiting the amplitude of the wave (sine wave) to express the binary message (0/1). I have made a simulation of it with Simulink:
{% asset_img 1.png %}
We have two carrier signals of different amplitudes and a switch to shift the amplitude of the output-modulated signal. Then we can make a rule like if the original source signal is 0, switch to the carrier signal of the lower amplitude; if the original source signal is 1, switch to the carrier signal of the higher amplitude. Then this modulation simply works. The modulated signal along with the source signal should be like this:
{% asset_img 2.png %}

## FSK (Frequency-Shift Keying)

This is all the same as the ASK, but the thing to shift is the frequency, not the amplitude. Thus, we can simply create two sine carrier waves of different frequencies and let other things remain the same.
The result of the modulated signal along with the source signal should be like this:
{% asset_img 3.png %}
As you can see in the picture, some areas of the modulated signal are denser, meaning a higher frequency, which represents the binary value 1, and vice versa.

## PSK (Phase-Shift Keying)

This would be the same as the ASK and the FSK, except for its shifting phase.
The result of the modulated signal along with the source signal should be like this:
{% asset_img 4.png %}
The interpretation of this figure is that different phases represent different states of the binary value.

## MPSK (Multiple Phase-Shift Keying)

This is the most tricky part of this article as it utilizes the knowledge of trigonometry.
To explain how this works, we must introduce a new trick of generating signals – IQ modulation. The IQ modulation basically sums a cosine wave and a sine to generate a new signal of different amplitude and phase. I made a demonstration with Desmos.
 {% asset_img demo.gif %}
As you can see, as the amplitudes of the In-Phase wave $f_1$ and the Quadrature wave $f_2$ change, the amplitude and phase of the generated signal $f_1 + f_2$ also change. Thus, we can control the output signal through the two amplitudes of the In-Phase and Quadrature sine wave.

In the case of MPSK, we only need to consider the phase of the modulated signal.

Take QPSK (Quadrature Phase-Shift Keying) as an example. We divide the signal into four different phases in the cycle. Each state represents two-digit binary data (like 00, 01, 10, 11). Just like this picture shows (from Wikipedia):
 {% asset_img QPSK_timing_diagram.png %}

I have also made a toy with python to convert a file's datastream to a wav audio with QPSK, and the audio file can be converted back to the original file!

`Modulation.py`
```python
import numpy as np
import matplotlib.pyplot as plt
from bitarray import bitarray
from scipy.io.wavfile import write
import sys

filename = sys.argv[1]
audioname = sys.argv[2]

t = np.linspace(0, 2*np.pi, 20)
q = np.sin(t)
i = np.cos(t)

def mod(d, i, q):
    if d == 0:
        return (np.sqrt(2)/2)*i + (np.sqrt(2)/2)*q
    if d == 1:
        return -(np.sqrt(2)/2)*i + (np.sqrt(2)/2)*q
    if d == 2:
        return -(np.sqrt(2)/2)*i - (np.sqrt(2)/2)*q
    if d == 3:
        return (np.sqrt(2)/2)*i - (np.sqrt(2)/2)*q

data = []

with open(filename, 'rb') as file:
    bits = bitarray()
    bits.fromfile(file)
    data = bits.tolist()
    file.close()

modulated = []
for _ in range(0, len(data), 2):
    print(str(_//8) + "Bytes")
    modulated += mod(data[_]*2 + data[_+1], i, q).tolist()

write(audioname, 44100, np.array(modulated))
```

`Demodulation.py`
```python
import numpy as np
from bitarray import bitarray
from scipy.io.wavfile import read
import sys

audioname = sys.argv[1]
filename = sys.argv[2]

# 生成 I 和 Q 信号
t = np.linspace(0, 2*np.pi, 20)
i = np.cos(t)
q = np.sin(t)

# QPSK解调函数
def demodulate(signal_i, signal_q):
    if signal_i >= 0 and signal_q >= 0:
        return 0
    elif signal_i < 0 and signal_q >= 0:
        return 1
    elif signal_i < 0 and signal_q < 0:
        return 2
    elif signal_i >= 0 and signal_q < 0:
        return 3

print(audioname)

_, modulated_data = read(audioname)

# 创建空的解调数据列表
decoded_data = []

# 解调每对信号
num_samples = len(modulated_data)
for i in range(0, num_samples - len(t) + 1, len(t)):
    sample = modulated_data[i:i+len(t)]
    # 计算I和Q信号的相关性
    signal_i = np.dot(sample, np.cos(t))
    signal_q = np.dot(sample, np.sin(t))
    decoded_bit = demodulate(signal_i, signal_q)
    # 将解调的比特添加到结果中
    decoded_data.append(decoded_bit)

# 将解调数据转换为位数组并写入文件
decoded_bits = bitarray()
for bit in decoded_data:
    decoded_bits.extend(bitarray(format(bit, '02b')))

with open(filename, 'wb') as file:
    decoded_bits.tofile(file)
```

<script>
MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']]
  }
};
</script>
<script id="MathJax-script" async
  src="/2022/12/15/Copper-Artwork-Made-by-Electrolysis/tex-chtml.js">
</script>