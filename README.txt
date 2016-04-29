The Sandwastes 
==============
A Text Adventure
By Zach Reich
~~~
You start in the middle of a vast desert (hence the name). You see mountains in the North, a river to the East, a shack to the South, and a cactus to the West.


Prompt:
======
You are in the desert.
You see mountains in the North.
You see a river to the East.
You see a shack to the South.
You see a cactus to the West.
Make it to the mountains.
Go.


NORTH (mountains)
=================
The mountains are miles away: you'll never make it there on foot. To the West you see something sticking out of the ground.
~~~
West (sticking out of ground)
============================
You notice that the object is in fact a small boat, dirty yet intact. It seems like it would be easy to pull out of the ground. To the North you see another cactus...
~~~
North (another cactus)
=====================
A cactus. Rumor has it, there's water inside these. To survive in the desert, you need water, but the cactus is to pointy to get the water by hand...
~~~
[with shovel] A cactus. Rumor has it, there's water inside these. To survive in the desert, you need water.


SOUTH (shack)
=============
The abandoned shack is sagging under its own weight; the dirt and sand over the windows make in hard to see inside. Could be dangerous. There is a door, barely hanging in the frame.
~~~
<use door/open door> The door is open.
~~~
<north/go inside door/go inside shack>
~~~
The Shack
=========
Walking inside, you fan away a dense cloud of dust. As the dust clears, you see:
~A small cactus in a flower pot.
~A a shovel.
~A boat oar.


WEST (cactus)
=============
A cactus. Rumor has it, there's water inside these. To survive in the desert, you need water, but the cactus is too pointy to get the water by hand...
~~~
[with shovel] A cactus. Rumor has it, there's water inside these. To survive in the desert, you need water.


EAST (river)
============
You notice the lake flows from North to South. If you only had some kind of vehical, you might make it to the mountains...
~~~
[with boat] You notice the lake flows from North to South. You have a boat, but without something to push you along the current you'll never make it to the mountains.
~~~
[with oar] You notice the lake flows form North to South. You have an oar. Great.
~~~
[with boat and oar] You notice the lake flows from North to South. You have a boat and an oar. Now you can use your boat.
~~~
<use boat> Your boat is in the water, the oar is in your hand; to the North!
(continue typing "north", "use oar" or "use boat" 10 times; after 5 times, display "almost there...")
~~~
You made it to the mountains. You win!