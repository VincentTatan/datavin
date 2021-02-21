---
date: 2020-05-09T10:58:08-04:00
description: "How I build Drowsiness Detection System With Computer Vision, Face Recognition, and Matlab"
featured_image: "/images/drowsiness_detection_system.jpg"
title: "Don’t Sleep: Building your first Drowsiness Detection System"
draft: false
---

## Introduction
It was a very important day, the test and project deadline were due next week but you hadn’t prepared much because of the new Halo release. Out of anxiety, you rushed to library and opened your laptop. However, as you lost your sleep leveling up your character, your mind quickly took you to dreamland. Coffee did no avail as you slept soundly in front of your laptop. Time was running short and You were desperate to stay awake.

## The Solution: Sleepiness Drowsiness System (SDS)
Imagine you were that pitiful guy, you could have activated DDS app installed in your laptop. This would trigger your laptop webcam. Every time you fell drowsy, your laptop would notice and ring an alarm to your headphone. After you woke up,your laptop would notice and turned off the alarm. You could then resume your work.
* The Naive Analysis of Sleepiness
* The Computer Vision Analysis (eye and mouth)

## Modules Descriptions:
* DrowsinessDetection.m: Capture a live camera tracking and run classifier methods for each VideoFrame taken
* EyeDetection.m : Capture and crop eyes for each VideoFrame and run classification variable (ratios)
* MouthDetection.m : Capture and crop mouth for each VideoFrame and run classification variable (lips detected)
* Scoring.m : Classify sleepiness based on the measurements returned by EyeDetection.m and MouthDetection.m
* MeasureTracking.m : Loop through different pictures collected and print different measurements of EyeDetection.m and MeasureDetection.m for analysis.

## The Result
* [Link to Github codes](https://github.com/VincentTatan/DrowsinessDetectionSystem)
* [Link to Medium Article](https://towardsdatascience.com/dont-sleep-building-your-first-drowsiness-detection-system-28a9903015f3)
* [Video Demonstration : Drowsiness Detection System with Matlab](https://www.youtube.com/watch?v=ypd0iz4Z7E0)

[![Demonstration : Drowsiness Detection System with Matlab](https://img.youtube.com/vi/ypd0iz4Z7E0/0.jpg)](https://www.youtube.com/watch?v=ypd0iz4Z7E0)

