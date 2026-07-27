---
title: Louie
description: 2 kN LOX/IPA rocket engine, Race to Space 2023/24
year: 2023
---

## About

Louie was LURA's first liquid rocket engine; we designed it mostly from textbooks and copying bits we liked off Google images. It was our entry to the inaugural Race to Space competition, designed for 2 kN of thrust on isopropanol and liquid oxygen and water-cooled through channels running the length of the chamber.

Our ambitions were deliberately modest. The project mantra was to see whether we could get it to survive three seconds without completely melting; we managed that, and we were happy. That it also came within 200 N of its design thrust was the cherry on top.

The name is Ed's doing. He set up LURA's liquid engine work and ran this project, and he likes monkeys, so the engine became Louie after the Jungle Book's King Louie, who has an entire song about being taught to make fire. Every LURA engine and pump since has been named after a monkey, and the tradition looks safe.

{% figure "/images/louie-nos-firing.jpg", "Louie in all his glory." %}
{% figure "/images/louie-team-photo.JPG", "The team that made it happen." %}

## Construction

The engine used a construction known as "CSJ", for chamber, saddle and jacket. The name isn't ours; it came from the people who got there before us. The combustion chamber, throat and nozzle were machined as a single piece with the cooling channels milled into its outer contour. A two-part saddle then clamped around the throat, and the assembly slid into the jacket, which was essentially a large tube carrying ports for coolant in and out, instrumentation and mounting. The saddle earns its keep by holding the coolant introduced at the nozzle end tight against the chamber's channels; without it the flow passes over the top of them and most of the cooling effect is lost.

Very little of this was our own idea. We leant heavily on the work of the [Swiss Propulsion Laboratory](https://ibb.ch/spl_old/products/index.html), on the SEPR engine fitted to the Mirage III, on an [XCOR patent](https://patents.google.com/patent/US7854395B1/en) and on some photographs of a [Masten Space Systems engine](https://www.reddit.com/r/rocketry/comments/ywawmt/this_is_masten_space_systems_engine_how_do_you/). SPL's [news pages](https://ibb.ch/spl_old/news/index.html) carry a good deal of detail on the Mirage engine, and are worth a read.

<!-- TODO figure: {% figure "[TODO: path]", "SPL's take on the CSJ construction." %} -->
<!-- TODO figure: {% figure "[TODO: path]", "The SEPR engine from the Mirage III." %} -->
<!-- TODO figure: {% figure "[TODO: path]", "XCOR's arrangement, from the patent." %} -->
<!-- TODO figure: {% figure "[TODO: path]", "The Masten Space Systems engine that set us off." %} -->

## Manufacturing

The combustion chamber was the part I had been told was impossible to manufacture. It wasn't; it needed a manufacturing partner willing to take it on, which is a different thing. An in-house shop with its own queue of work is entitled to decide a job isn't for them, and my experience in industry made me comfortable rejecting the assertion and looking elsewhere. We sent the work to a machine shop in China, who turned the parts around in 14 days.

{% pdf "/louie-drawing-pack.pdf", "Louie's drawing pack." %}

<!-- TODO figure: {% figure "[TODO: path]", "The chamber, throat and nozzle, machined from one piece with the cooling channels on the outside." %} -->
<!-- TODO figure: {% figure "[TODO: path]", "The two-part saddle." %} -->
<!-- TODO figure: {% figure "[TODO: path]", "The jacket, with its coolant and instrumentation ports." %} -->

Expediting the order that hard left the paperwork trailing behind it. Some of the customs documents hadn't been filed in time, so on the afternoon before our test slot we drove to the DHL sorting facility in the East Midlands and collected the parts ourselves. Then back to Leeds to have the thrust stand welded, which the university workshop did for us in fifteen minutes, and to buy hydraulic fittings for the coolant plumbing before the suppliers shut; I had specified a size which is perfectly standard and which nobody keeps on a shelf. We test-assembled the engine in the car.

Hydrostatic testing and final assembly finished at 2 am. We were back in the car at 4 am, at Westcott for 9 am, and it was half past six that evening before the engine ran. About thirty hours from a DHL loading bay to a hot fire, and a good deal of that was [Airborne Engineering Ltd.](https://www.ael.co.uk/)'s patience rather than ours.

<!-- TODO figure: {% figure "[TODO: path]", "Hydrostatic testing the night before test day, with a cheap Amazon pressure tester and the appropriate footwear." %} -->

## Nitrous Run

The engine was always meant to run on liquid oxygen, but AEL's LOX rig wasn't going to be available in time for Race to Space that year, so we put nitrous oxide in it instead. One of us did the sums and concluded the injector holes would be about the right size for the swap. The sums were not very good, and the injector stiffness we ended up with on nitrous (the pressure drop across the injector relative to chamber pressure) was low enough to make the engine difficult to start.

Integration itself was painless; AEL had provided an interface control document up front and everything mated as it should. What gave us trouble was the sealing. The injector was an ox-centred triplet, with two O-rings between each propellant circuit and a vent hole drilled into the cavity between them. I had come up with a scheme for compressing all of the O-rings at once using a single large thread. It worked terribly; on our first attempt to fire the engine, every one of them leaked.

<!-- TODO figure: {% figure "[TODO: path]", "The injector drawing." %} -->

The vent holes were not my idea, and I had been fairly rude about them. A friend on the team had found them recommended in [NASA SP-8089](https://ntrs.nasa.gov/citations/19760023196) and put them in anyway, which is ten points to him: when the seals let go, those vents are quite possibly what stopped us losing the engine.

The O-rings were PTFE, chosen for compatibility with liquid oxygen, and since we were running nitrous that day they didn't need to be. Two of the team drove - carefully - to the local O-ring shop and came back with Viton replacements, one size of which was out of stock and had to be made up from cord and superglue.

Even with the seals sorted it did not want to light, and AEL got it going in the end with some tricks on the timing of the nitrous inlet valve. When it finally ran, and kept running, and didn't melt, we were ecstatic. I think that came across; the team took the "Best Team Spirit" award at the competition, which after the week we'd had felt like the right one to win.

<!-- TODO figure: {% figure "[TODO: path]", "Louie running on nitrous." %} -->

{% youtube "https://www.youtube.com/watch?v=yoBdH_BQp-I", "Louie's first hot fire." %}

<!-- TODO figure: {% figure "[TODO: path]", "Us with the Airborne Engineering team afterwards." %} -->

We collected a good deal of data and, in all honesty, never looked at most of it. The exception was the coolant temperatures. The video below puts AEL's slow-motion footage above a plot of coolant temperature along one of the channels, running from the nozzle to the injector face; the x-axis is distance along the engine rather than time. Ours are the blue traces and AEL's the orange. Theirs respond much faster, which we put down to size - roughly 1 mm outside diameter against our 3 mm, ours having been chosen large enough that they couldn't physically block the channel they were sampling. Ours also want calibrating; they don't agree with AEL's, or with each other, especially well. The trend is clearly the same in both, though, and you can watch the coolant heating up as it works its way from the nozzle towards the injector face. From AEL's data it looks as though we reached steady state during the burn, the coolant wall temperature going flat after a point.

{% youtube "https://www.youtube.com/watch?v=U0Xdk01DY0s", "Coolant temperature along the chamber, overlaid on AEL's slow-motion footage." %}

## Oxygen Run

Louie was really a 2022/23 project. By the following year our propulsion effort had moved on to [Zola](/projects/zola/), but we put the engine back on the test stand once more to settle a question left over from the first campaign, and to run it on the oxidiser it had been designed for in the first place. Could the Viton O-rings we'd bodged in for the nitrous run be made to work on liquid oxygen? Viton was never the obvious choice; the PTFE seals it replaced had been there for LOX compatibility to begin with. By then Louie was hardware we had finished with, which made it a cheap question to ask.

The answer was no. It gave us a beautiful flame for a couple of seconds before the seals failed and the propellant manifold caught fire. Lesson learned: buy the expensive seals.

{% figure "/images/louie-lox-firing.png", "Firing on LOX, before the incident." %}
{% figure "/images/louie-teardown.JPG", "Post incident." %}

<!-- TODO video: the LOX firing. Needs the YouTube URL, then: {% raw %}{% youtube "URL", "Louie on liquid oxygen." %}{% endraw %} -->


<!-- TODO figure: {% figure "[TODO: path]", "Louie's two seconds of grace..." %} -->
<!-- TODO figure: {% figure "[TODO: path]", "...and the injector afterwards." %} -->
