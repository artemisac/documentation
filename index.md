---
home: true
heroImage: https://i.imgur.com/eKe9iei.png
tagline: Powerful Anticheat Solution for Minecraft
actionText: Follow the installation →
actionLink: /install/install.md
features:
- title: All-scenario Detections
  details: Artemis takes into account every single potential scenario a player could be in for cheat detection.
- title: Exploit Prevention (Soon)
  details: Artemis is one-step ahead by preventing cheaters from exploiting your server.
- title: Unbeatable Stability
  details: From elaborate exemptions systems to a full prediction system, we undoubtedly are stable for production.
- title: 100% Packet-Based
  details: Fully reliant on a custom-made Packet-based API. No lag or whatnot!
- title: Lightweight
  details: Our plugin takes little to no memory on your server, it's that easy.
- title: Developer API
  details: Artemis can be extended with new modules via our API.

footer: Ghast CC | Copyright © 2018 - 2021
---

![Bukkit](https://img.shields.io/badge/Bukkit%20Version-1.7--1.16.5-blue)

### Preface
Artemis Anticheat has possibly been the longest on-going project I had ever made. I'm happy to open-source this finally to the public. There's a couple things however I'd like to get out of the way right there and then. Please make sure to read everything if you wish to use this for commercial use.

## Introduction

What is Artemis? Well... Imagine this: You run a Minecraft server. A cheater comes online. You're not online. So he proceeds to piss off your players and gain a competitive advantage. How to solve this? Very simple! You need an anticheat. However anticheats are tedious. This, by far to my belief, is the best solution to have been provided online.

Here's an introductory video on Artemis

[Watch the video](https://youtu.be/NJY-iDrdSaQ)

### Features

Artemis is bundled with a variety of features which have been seen or not in the past. It's objective is to remain as simple as possible yet to have an important amount of API's and useful core tools for the easy creation of gameplay enforcement tactics. It's main focus is allowing the end consumer to modify everything to their liking yet to be able to enjoy basic configuration as simple as one could be.

**Artemis, at it's current stage, contains the following:**
- Prediction with E-8 precision of the player's position. Perfect for catching all movement cheats
- Extremely robust core, with all sorts of useful tools at the disposition of any developer
- 3.05 reach check. Extremely hard to false. Yet to be perfect, but yet not too far from it.
- +20 Aim, Aura and Autoclicker checks designed to flag a variety of cheats. Most are extremely thoroughly tested and near flawless
- Variety of supplementary fly, speed and misc checks for secondary opinion on top of the prediction system
- GUI designed with simplicity and efficiency in mind
- New packet system which injects itself before any other packet system to guarantee 100% accurate and precise data.
- Extremely extensive and easy-to-use configuration system for checks
- Mediocre theme configuration system. 
- Interesting common-attribute check information system to dynamically update certain settings
- Smart setback system with little to no issues. 

**The detections currently catch:**
- AntiKnockback
- AntiPotion
- AntiWaterPush
- AutoArmor
- AutoPotion
- AutoClicker
- Aimbot
- Blink (Very experimental)
- BoatFly (Need to finish the vehicle implementation)
- BowAimbot (I removed the aim check because no <3 )
- BunnyHop
- ClickAura
- Criticals
- Derp
- Dolphin
- FastBow (Majority)
- FastBreak (Experimental/Not finished)
- FastEat
- FastLadder
- FastPlace
- FightBot
- Flight
- Glide
- Headless
- HeadRoll
- HighJump
- Inventory Walk
- Jesus
- Jetpack
- Killaura
- Derp
- MultiAura
- NoClip
- NoFall
- NoSlowdown
- NoWeb
- Nuker
- Parkour (Heuristic/Experimental)
- Phase
- Reach
- Regen (Not active)
- SafeWalk (Heuristic/Experimental)
- ScaffoldWalk (Depends)
- ServerCrasher
- Sneak
- SpeedHack
- SpeedNuker
- Spider
- Step
- Timer
- TP-Aura
- TriggerBot (Depends)
- Velocity

### Credits

[Sim0n](https://github.com/sim0n/) - GraphUtil. Thank you Sim0n for allowing me to use it. I really couldn't be asked to recode despite how simplistic it may be. (Authorization given in private)

[Elevated](https://github.com/ElevatedDev) - Cinematic util and various other things. Thank you Elevated. I couldn't be more grateful of all the wisdom you shared with me.

[ToonBasic](https://github.com/toonbasic) - 4-5 BadPackets checks from various things I bought out in the past. Thanks Toon. I couldn't be asked to reinvent the wheel.
