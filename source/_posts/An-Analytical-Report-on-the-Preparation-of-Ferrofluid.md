---
title: An Analytical Report on the Preparation of Ferrofluid
date: 2024-07-17 21:15:56
tags: Chemistry
photos:
    - /2024/07/17/An-Analytical-Report-on-the-Preparation-of-Ferrofluid/7.png
---

This report consists of two parts. One is the original design of the process and another is the detailed illustration of how this experiment is done.

## Part I.
In this part, the texts in black are the initial considerations, and those in blue are the reflections of the experiment.
The core of the experiment is the production of the nanoparticles of ferrous ferric oxide ($Fe_3O_4$). The equation of the reaction is as follows:

$$
    FeCl_2 + 2FeCl_3 + 8NH_4OH \rightarrow Fe_3O_4 + 8NH_4Cl + 4H_2O
$$

The steps are as follows:
- i.	Prepare the saturated solution of ferric chloride II and ferric chloride III according to a mole proportion of 1:2. Depending on the solubility of both solutes around 25 ℃ and the amount of ferrous ferric oxide wanted, we can work out the volumes of both saturated solutions needed.
<p style="color: #7CB9E8;">This is a bit of a waste of the solutes. It is fine not to use saturated solutions as we can weigh the two solutes and dissolve them together.</p>
- ii.	Mix the two saturated solutions dispensed in step one with a magnetic stirrer. Dilute the solution to obtain nano-level particles.
- iii.	Keep the magnetic stirrer running, then add ammonia solution in the way of dripping. Keep dripping until the solution is alkaline.
- iv.	Prepare another beaker into which we add both ammonia solution and oleic acid. This process produces ammonium oleate. The equation of the reaction is as follows:
{% asset_img 1.png %}
The ammonium oleate is added to the beaker containing ferrous ferric oxide nanoparticles on the magnetic stirrer. As the nano-level particles of ferrous ferric oxide are formed, the ammonium oleate molecules wrap around each ferrous ferric particle. This step is crucial because it is a method to prevent ferrous ferric oxide particles from aggregating into one larger particle as the following picture shows:
{% asset_img 2.jpg %}
<p style="color: #7CB9E8;">In this step of my real implementation of this design, I added too much oleic acid and ammonium oleate.</p>
- v.	After stirring for a few minutes, the product is made. Now the environment is alkaline. Neutralizing is needed. Heating is a way to achieve this as it lets the ammonium hydroxide which causes the alkaline environment to break down into water and ammonia. The reaction equation is as follows:
$$
    NH_4OH \rightarrow \(when\ heated\)\ NH_3 \uparrow + H_2O
$$
<p style="color: #7CB9E8;">According to my experiment result, heating does not help. The right way is to use acid to neutralize the solution.</p>
- vi.	To split the final product from the solution, attach a magnet at the bottom of the beaker, then pour the water above.
- vii.	Transfer the left black product to a dry container to dry. After it dries, it turns into black blocks and powder. Dissolve those black matters in kerosene, and the preparation of ferrofluid is done.

## Part II.
In this part, the texts in black are the original operations of the experiment, and the texts in blue are the possible improvements that can be implemented in the following attempts.

- i.	Dispense two saturated solutions of ferric oxide and ferrous oxide. The mole proportion of them is 2:1.<span style="color: #7CB9E8;"> Actually, dissolving the solutes directly is more feasible.</span>
{% asset_img 3.jpg %}
- ii.	Mix them and dilute them them with a magnetic stirrer.
{% asset_img 4.jpg %}
- iii.	Drip the ammonia solution into the beaker in step ii and keep it stirring. Keep dripping until the solution is alkaline.<span style="color: #7CB9E8;"> Using a burette instead of a dropper is an easier way.</span>
{% asset_img 5.png %}
- iv.	Configure the ammonia oleate, and add it into the beaker.<span style="color: #7CB9E8;"> As the picture shows, I added too much oleic acid which caused the following disaster.</span>
{% asset_img 6.png %}
- v.	Heat the mixture in the beaker. This step separates the excessive oleic acid.<span style="color: #7CB9E8;"> As the second picture shows, too much oleic acid is separating and we can figure out that there is still much oleic acid in the solution or even attached to the aggregated particles.</span>
- vi.	Later I found that the separation was incomplete, so I added some citric acid. After adding the acid, attach a magnet to the bottom of the beaker. Then we can separate the product in black color.
{% asset_img 7.png %}
- vii.	Wash the product with anhydrous ethanol for two times. This process removes the excessive water and oleic acid.<span style="color: #7CB9E8;"> As the “oleic disaster” has happened, this step does not help much. </span>
{% asset_img 8.jpg %}
{% asset_img 9.jpg %}
{% asset_img 10.jpg %}
{% asset_img 11.jpg %}
- viii.	Transfer the black fluid into a dish and put it in an oven to let it dry.<span style="color: #7CB9E8;"> As the second picture shows, the too much oleic acid it contains appears after other chemicals dries.</span>
{% asset_img 12.jpg %}
{% asset_img 13.jpg %}
- ix.	Add a little kerosene into the dried solid product.
{% asset_img 14.jpg %}

## Final Product:
{% asset_img 15.jpg %}
The Ferro Fluid is attached to the bottom of this little bottle which makes the bottle able to be upside down in midair.<span style="color: #7CB9E8;"> The wall of the bottle is opaque and untransparent, indicating too much oleic acid it contains.</span>

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