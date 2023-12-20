# tomorrowstarted

## Description

This repo is for the 2023-2024 redesign of the [tomorrow started](https://www.tomorrowstarted.com/) website. 

## Background

We began working on this project in early October of 2023. 
As of December 22, 2023 we have landed on two solutions for the redesign of tomorrow started.

- The first is a showcase website that incorporates experimental design directives. It is not meant to replace the existing design of the website outright but rather to produce an experimental web design concept. 
- The second is a wordpress mock-up that is meant to be the basis for a wordpress theme that would then be applied to tomorrowstarted.com.


Both solutions make use of very similar design launching points and a large part of the work entailed retaining synonymity across each design.
Given the different end goals for both solutions we were able to also diverge in various ways and produce two distinct designs out of a singular concept.

## Table of Contents

1. [Design](#design)
    1. [What is Tomorrow Started's existing design ?](#what-is-tomorrow-starteds-existing-design)
    2. [What to keep, and what not to keep](#what-to-keep-and-what-not-to-keep-–)
    3. [Design directives for a new approach](#design-directives-for-a-new-approach-–)
2. [Development](#development)
    1. [Philoshopy](#philosophy-–)
    2. [Philosophy in practice and usage](#philosophy-in-practice-and-usage-–)
    3. [Showcase Website](#showcase-website-–)
        1. Windows
        2. Dragability
        3. Backround Outlines
        4. The Spider
    4. [Wordpress Mock-up](#wordpress-mock-up-–)
        1. Windows
        2. Dragability
        3. The Spider
        4. Header and Menuing
3. [Not Yet Resolved](#not-yet-resolved)
    1. [Still to do : Showcase Website](#still-to-do--showcase-website-–)
        1. iframe, and the question of how many posts is too many
        2. Making a back-end out of thin air
        3. The Daily Track feature
    2. [Still to do : Wordpress Mock-Up](#still-to-do--wordpress-mock-up-–)

<br>

## Design

### What is Tomorrow Started's existing design ?

Tomorrow Started is strongly inspired by the design of the French publisher [NRF](https://en.wikipedia.org/wiki/Nouvelle_Revue_Fran%C3%A7aise)'s [Collection Blanche](https://en.wikipedia.org/wiki/Collection_Blanche), particularly their output in the early to mid 20<sup>th</sup> Century. 

We can see this to be the case with the use of serif fonts, the presence of the double line (in our case wrapping post titles), and the conservative use of color across the website's design – elements definitive to the Collection Blanche's cover design.

**However** the website was designed in the early aughts and has not been revisited since. 
It behaves much like how blogs of the time behaved. 
With the absence of blogs in today's web landscape, and our intent on keeping this one around, we thought it not without merit to produce a redesign that could not only hold the same visual queues as the original design but also factor and revel in the tendencies of contemporary web design. 

<br>

### What to keep, and what not to keep – 

Part of the effort was maintaining what worked and rehousing, or totally eliminating, what felt outdated. 

What was clear we wanted to keep was :
- The presence of NRF callbacks (serif fonts, double lines, and restrained use of color).
- The structure of the website, namely the post feed, the *about us / cast of characters* page, the ability to sort by categories, and the ability to look through past posts. 
- The structure of each post was to remain intact so as to seamlessly bridge the new content with the older content when applied the redesign to the website. 
- The presence of *endorsed* links as it is a key component of the website's allure. 

What we weren't sure about keeping :
- The layout of the header, the fact that it can be scrolled past.
- The layout of the menus, the fact that they are not anchored to the body of the page. 
- The proportions of the website's various elements by themself and relative to each other.

<br>

### Design directives for a new approach –

Early in the process we landed on a key pillar that informed the core design concept, emulating a real-life desktop. How papers, items, notes, objects, thoughts, mementos, tend to organize and perputually disorganize themselves. How a desktop can be a reflection of an individual's mind. 

This emphasis on something analog as a driver for future design decisions rapidly informed some key elements of the redesign : 

1. To carry a literary sensibility in favor of iconography and graphic feedback. 
    1. We intended to hold on, whenever possible, to textual representation of different elements and finding solutions to provide feedback that remained contained inside the limitations of type design.
    2. We tried to forgo as many boxes or  any other graphic feedback as possible, leaving these mainly for the windows used across the showcase website and the wordpress mockup. Elements therefore tend to lay on the screen like type on a page. 
2. Much of what is seen is also interactive and movable. 
    1. Like on a desktop we wanted the user to be able to reorganize and layout the different elements of the websites.
    2. Provide a sense of hiearchy and layout that informs how the user may want to organize and layout their space. Create potential for unique overlaps of different elements.
    3. Hold restraint in the design vocabulary to limit possible interactions. 
3. Motion and animations are to be user-driven
    1. Unless the user moved something, everything would remain quite still.
    2. Avoid disctractions by generating them.

<br>

---

[# return to table of contents][def]

<br>

## Development

<br>

### Philosophy –

Much of how we approached the development of the website is in small part informed by a distrust of what is [trendy](https://www.awwwards.com/).
Since most of what is trendy rarely is put in place to resolve a genuine design or usability concern. 
We are flooded with websites that move, change, and reconfigure themselves seemingly at will. 

Designers behave like the projects they are tasked with are really meant to fill out their portfolios, like they have a design system clever enough to overcome the noise they are producing as an side-effect of their efforts. Developers are in turn happy to follow designers, only sometimes ensuring users will actually use the website.

*In a way, contemporary web-design trends tend to obscure the line between page and web design.* 

We stuck mainly to what is now possible with web development not to produce something outrageous and eye catching, but to write code that made use of simple principles that could easily be followed once understood. 

<br>

### Philosophy in practice and usage –

To produce this we chose [every layout][def2]'s modular scale to make up the foundation of the website's proportions and dimensions. 

Both the showcase website and wordpress mock-up stylesheets begin with : 

    /* global definitions */
    :root {
    	/* this sets a lot of our sizing rules and defines various spacing paramters */
    	--ratio: 1.314 /* pi */;
    	--s-5: calc(var(--s-4) / var(--ratio));
    	--s-4: calc(var(--s-3) / var(--ratio));
    	--s-3: calc(var(--s-2) / var(--ratio));
    	--s-2: calc(var(--s-1) / var(--ratio));
    	--s-1: calc(var(--s0) / var(--ratio));
    	--s0: 1rem;
    	--s1: calc(var(--s0) * var(--ratio));
    	--s2: calc(var(--s1) * var(--ratio));
    	--s3: calc(var(--s2) * var(--ratio));
    	--s4: calc(var(--s3) * var(--ratio));
    	--s5: calc(var(--s4) * var(--ratio));
    	/* this is mainly used to define/exclude/capture the max-inline-size, in units of characters */
    	--measure: 75ch;
    }

    /* universal definitions */
    * {
    	box-sizing: border-box;
    	max-inline-size: var(--measure);
        font-family: Arial, Helvetica, sans-serif;
    	font-size: var(--s0); 
    }

    /* important exclusions to the max-inline-size definition */
    html,
    body,
    div,
    header,
    nav,
    main,
    footer {
      max-inline-size: none;
    }

We first set up a scale as a global definition for which we use the the `rem` unit for a wide variety of applications by defining `--s0` and producing equations off of `--ratio`, creating proportional curves.

We also define `--measure` using the `ch` unit that will inform the maximum dimensions of any elements on the website in our universal definitions (`max-inline-size: var(--measure);`). We set that at `75ch`, 75 character units atr the given scale. 

Though we quickly amend possible unintended issues by setting certain important global exclusions using `max-inline-size: none;`. 

Finally we also set the `box-sizing`, default `font-family`, and `font-size` in our universal definitions.

These kinds of overarching, and systematic decisions can be found as often as we could implement.
We attempted to completely abstain from units that could be driven by the browser or the device on which the browser is loaded. We heavily favored `rem`, `ch`, `vw` and `vh`, and when absolutely necessary `%`, as they pertain to a relative layout of elements. If possible we also made further systems from the formula capabilities of CSS using `var` and `calc`.

<br>

### Showcase Website –

Relevant files :

- [landingpage_showcase.html](html_showcase/landingpage_showcase.html)
- [index_showcase.html](html_showcase/index_showcase.html)

---

- [style_showcase.css](CSS/style_showcase.css)
- [style-foraction_showcasejs.css](CSS/style-foraction_showcasejs.css)
- [style-forbackgroundoutlines.css](CSS/style-forbackgroundoutlines.css)

---

- [action_showcase.js](JS/action_showcase.js)
- [menutoggle.js](JS/menutoggle.js)

<br>

The showcase website is a static html/css/js website. With no backend we intend to use workarounds, mentioned later, to mimick or behave as if it did – in order to support the features required of it. These workarounds are there to also show off how a website could be done without the use of popular templates like wordpress should the developer or client wish to be a little savy and experiment. 

While the website can manage windowed use somewhat, it is really intended to be used in fullscreen mode. This screen size limitation in practical terms is in place due to the design. The whole of the website is presented on a single browser window, and takes up no more than the entirety of that window. 
 
The posts, archives, about-us, and "randomizer" pages that make up the bulk of the surfing are all loaded in via draggable pop-up windows that can be toggled on or off using the menu navigation bar.

The idea, as mentioned above, was to replicate a real-life desktop, wherein :
>papers, items, notes, objects, thoughts, mementos, tend to organize and perputually disorganize themselves.

<br>

#### *Windows*

We define the initial position of the various windows (again for posts, archives, about-us, and "randomizer"), and hide them on load in using `display:none`. The file [menutoggle.js](JS/menutoggle.js) is used to reveal them when specific elements are clicked on the menu navigation bar. 

These windows are made up of the following structure :

    <div id="drag[nameofwindow]">
    <div id="drag[nameofwindow]header">
        <div class="window" id="[nameofwindow]">
            <div class="container">
                <div class="pane hide-scrollbar masked-overflow">
                    <!-- content -->
                </div>
                <div class="pane hide-scrollbar masked-overflow">
                    <!-- content -->
                </div>
            </div>
        </div>
    </div>
    </div>

The first two `div` are used by the file [action_showcase.js](JS/action_showcase.js) lines 2-59, they allow for the windows to be draggable. 

The following `div .window` defines the window, it contains the various nested elements of the window. We also assign the id {nameofwindow} (be it #archives, #post, #cast etc.) that is used by [menutoggle.js](JS/menutoggle.js) to toggle them on or off, as well as how we call out the specific dimensions of the window in question in the CSS file. 

The following `div .container` defines the layout of the content through the use of the class {container} assigning it `display;flex;`. This helps us with the remaining `div`s.

While we can load as many of these as we want, the `div .pane` that makes up the content, is really best used only twice per window. Make sure to look at the [CSS file](CSS/style_showcase.css) lines 255-274 to best understand how these work.

<br>

#### *Dragability* 

We make use of code devised by Ariana Freitag to allow elements to be draggable within the website. Their work is used in the the file [action_showcase.js](JS/action_showcase.js) lines 2-59 and [action_wordpress.js](JS/action_wordpress.js) lines 2-51. 

Make sure to look at those files, ariana left really comments on how this all works. Essentially we use `onmousedown` and `onmousemove` events to calculate the distance of the cursor as you drag your mouse to match the distance traveled by the windows, and `onmouseup` to stop the process. 

<br>

#### *Background Outlines*

To ease the user into understanding the concept of windows and dragibility (as well as to double as a design accent) we made use of dashed lines that populate the homepage. They give an indication of where windows will be once toggled on, as well as imply a place where you might want to put back the various elements. Though this remains an implication while in use, if the page is refreshed elemetns go back to those outlined locations automatically. 

The present implementation feels a little bit clunky as it requires the use of another stylesheet ([style-forbackgrounbdoutlines.css](CSS/style-forbackgroundoutlines.css)) in order to not clog up the main stylesheet. We feel as though they could have maybe been done using the windows' exisiting `id` and maybe the `::before` tag in CSS for each of the elements on the homepage (as it would forgo elongating the already lengthy HTML file). However, short of coming up with an elegant solution we felt it best to simply populate the HTML with something clearly demarked and write a concise secondary stylesheet. 

<br>

#### *The Spider*

The spider on the screen is the intruder in the design. Its functionality is not specified to the user. The user must be okay with interacting with it in order to begin to understand what it does. 

The purpose of the spider is to behave as a button that once clicked on plays a track of music. That track is part of a playlist of 31 songs. Each of these songs corresponds to a day of the month. The song that interacting with the spider will play thus changes daily, using the browser to call that day out. Again this is not specified to the user and must be experienced in order to be ascertained. 

We have not yet made this feature but have a strong sense of how one might go about it. Feel free to reach out the owner of this repo to get a debrief on this feature. 

<br>

### Wordpress Mock-Up –

Relevant files :

- [landingpage_wordpress.html](html_wordpress/landingpage_wordpresse.html)
- [index_wordpress.html](html_wordpress/index_wordpress.html)

---

- [style_wordpress.css](CSS/style_wordpress.css)
- [style-foraction_wordpressjs.css](CSS/style-foraction_wordpressjs.css)
- [style-forbackgroundoutlines.css](CSS/style-forbackgroundoutlines.css)

---

- [action_showcase.js](JS/action_showcase.js)
- [menutoggle.js](JS/menutoggle.js)

<br>

The wordpress mock-up is a far more straightforward design. With a post feed and a drop down menu that hides a searchbar, various features, and some links to stores/resources we like. Given the simplicity of the design it was important to bring over as many insights learned from the showcase website as possible. As such, you'll find that this feels very much a *light* version of the showcase website. 

What we built here is a static HTML/CSS version of what should eventually become a wordpress theme. The scope of this repo covers the design and the mock-up. Though we will try and give as much relevant insight into how this came to be, so as to have this run smoothly as a wordpress theme.

This mockup is intended to run well and look good across most screens and devices. A single responsive design that can accomodate mobile, laptop, and desktop use. As such we have stripped away many of the experimental features (notably the replacement of the majority of windows in favor of a single feed). What has not gone away is the feeling that this is the same identity. Much of the CSS is borrowed from the showcase design, and in an effort to make that clear we have tried our best to also match the structure of the two main stylesheets. 

<br>

#### *Windows*

Here we have done away with all the windows prominently used in the showcase website, retaining only the about-us window as we felt it essential to bridging the gap between the two solutions of the redesign prompt. The window looks, and behaves, the same as it does on the showcase website. In fact, you'll notice that the way that the photos under the *cast of characters* subheader benefit from [every layout][def2]'s `grid` class in both designs. 

Do make sure to read the article they've written about their solution. What we inluded is slightly edited to match our exact needs, considering it is also the only instance across the whole site that we make use of it. 

<br>

#### *Dragability*

Another reason to strip down the design for this mock-up, compared to the showcase design, is the way in which our dragibility of windows is implemented. There are usability concerns which could not be reliably met in a responsive design. It was that question of usability that won the argument for switching over to a single feed system. Essentially, simply too much content to try and parse with the showcase website on what would could be a screen as small as that of an iphone se. 

We were aware of the existence of thise [interact.js](https://interactjs.io) project, and strongly considered using it. We held off on making use of it in favor of Ariana's vanilla js script, for fear it might have not meshed easily once used with wordpress.

We tend to provide plenty of padding to a draggable element so that a user can comfortably drag without fussing over being too precise on what they intend to drag, and how dragging could lead to accidental scrolling or clicking. 

The two elements we kept draggable for the wordpress mock-up are the *about-us* page and the *spider* daily track button. They are at once inconsequential enough to the experience of browsing the website and their inclusion essential to the identity of the redesign.

<br>

#### *The Spider*

The spider button behaves in the same manner as it does on the showcase website. With the same function and the same assets being used across both. The only difference is that we change its initial position to be mindful of the change in layout. 

<br>

#### *Header and Menuing*

For the wordpress mock-up we needed to overhaul how we presented content to the user. This is because we did away with the windows used in the showcase website in favor of the single post feed. The idea was to make a menu that felt like it was living on the webpage like words on the pages of a book. There would not be boxes or any graphic interference that would deleneate the various elements. Instead just using type, with feedback provided by the possibilities of type-setting. 

The solution required solving another (more interesting) problem. How to dynamically change the height of one of two elements and alter the height of the other without pushing it one down the page. In other words, we wanted to maintain the `height` of the parent while changing the proportions of the children dynamically.

The reason behind solving this was because of the use of a fade-out effect on the feed. Scrollable elements look like they appear/disappear on and off the page. 

There are plenty of ways to resolve the dynamic height problem, this is the solution we went with.

We begin by setting the `body` tag as the parent, and `header` and `main` as the children. 

- `main`'s dimensions must respond to the changing `height` of `header` while remaining locked to the bottom of the `viewport`. 
- as the `header`'s dimensions change it should alter the `height` of `main` and not push it down the page. 

This is how we lay out our CSS, using `flex` :

For the `body` we give assign to `height` and `width`  slightly less that 100 percent of the `vh` and `vw`. With the `align-items: stretch;`, that setting our display as `flex` allows, our children occupy the most amount of room made available by the parent. Setting `flex-direction: column;` and `justify-content: flex-start;` ensures that whichever child comes first in the HTML will be on above the others.

    body {
	    width: 98vw;
	    height: 96vh;

	    display: flex;
	    flex-direction: column;
	    justify-content: flex-start;
	    align-items: stretch;
	    position: fixed;
    
        [...]

        overflow: hidden;
    }

For the `header` tag we set `flex: 0 0 auto;`, meaning that it will not have to grow (the first `0`) or shrink (the second `0`) given any other child's dimensions. `auto` means it'll take the up the amount of space it requires (no more, no less). This is defined because it assigns it priority of the other child. 

    header {
    	display: flex;
    	flex-wrap: wrap;
    	flex: 0 0 auto;
    	justify-content: center;

    	padding-left: 5vw;
    	padding-right: 5vw;
        padding-bottom: 4vh;

    	overflow: hidden;
    }

For the `main` tag we set `flex: 1 1 auto;`, meaning that it will take up all the space not taken by the top child (defined by the first `1`) and that it will shrink to fit the space left over by the top child (defined by the second `1`). `auto` means the content will take up the amount of space it requires (no more, no less).

    main {
    	display: flex;
    	overflow-x: hidden;
    	flex: 1 1 auto;

    	padding-left: 7vw;
    	padding-right: 7vw;	
    }

<br>

---

[# return to table of contents][def]

<br>

## Not Yet Resolved

Given the short design and development time of this project, and most importantly the skill ceiling of the developer who worked on what you find here, there are a few aspects of both solutions that could not be addressed. They are listed out below. 


### Still to do : Showcase Website –

Part of the challenge of making this website is the absence of a backend. We wish to generate something that has the functionalities of a dynamic website, yet remains static. Part of the reason we opted for a static website is the ease of hosting/maintenance that comes with this option. We want this webiste to function as its title implies, a showcase. The focus is not on the content but on the method by which we display that content. As it pertains to Tomorrow Started it still felt important to be able to house content of the blog as it has existed.

Most of the challenges we still have not resolved have to do with this decision. Though we believe that going with a dynamic website would have presented other, unnecessary, problems given the scope of this project.

<br>

#### *iframe, and the question of how many posts is too many*

We looked into using `iframe` tags to populate the website's posts by making individual HTML pages for each post. There are a few reasons to do so: 

- It noticably lightens the load of essentially the only HTML page on the site (aside from the landing page). That makes it far easier to parse the HTML and rapidly get a sense of the purposefully strange website.
- It allows us to set up the parameters required to then replicate a lot of the functionality of a backend (namely category and date tagging used for categories and archives respectively). The fact that we are only calling to internal links for the `iframe`s gives us confidence regarding loading the content.
- It lets us create a system wherein a cursory understanding of the template used for individual posts could let someone update or populate the website with new posts. Their order within the various windows is made as straightforward as changing the order of single line `iframe` elements.

The main hurdle in implementing the `iframe` solution is how we handle the irregular height of any given individual post. In the end, we found this wonderful [article](https://betterprogramming.pub/how-to-automatically-resize-an-iframe-7be6bfbb1214) written by [Bret Cameron](https://bretcameron.medium.com/) that seems to resolve this issue in an elegant fashion. We have included a [transcript](z_design-and-project-files/iframetest.txt) of the article, as well as copied the code he wrote to make his point ([parent](z_design-and-project-files/iframetestparent.html) and [child](z_design-and-project-files/iframetestchild.html)). 

We've read through this solution and a dozen others available online. We found that not only as a resource to understand the problem but also as something that meets our requirements this one is by far the most comprehensive. We also read this [article](https://blog.codeminer42.com/enhancing-user-experience-with-dynamic-iframe-height/) by [Mateus Wilding](https://blog.codeminer42.com/author/mateus-wilding/) and quite liked it. 

<br>

#### *Making a back-end out of thin air*

The reason we give so much attention to the `iframe` question is because of what we believe it opens up to create a sensible and approximative mock back-end. The way in which we can solve the *categories*. *archives*, and (not mentioned thus far) *search* function is by assigning each post their appropriate "tags" that can then be toggled like we do with menus (using a variant/matured version of [menutoggle.js](JS/menutoggle.js)).

Part of the challenge is that so far our javascript has been rather bruttish. We need to either spend more time maturing it or find a developer currently able to build something more sensible. The problem could be solved by stuffing as many lines into a javascript file as we want, but that presents all sorts of unforseen, though easily guessed, issues for the future.

We think that using systematized `id` or `title` "tags" assigned to each `iframe` is a way to produce a convincing imitation of a backend, given the right scripts. 

<br>

#### *The Daily Track feature*

The daily track feature is theoretically easy enough. We simply did not have the time to devote to its implementation.

The daily track feature was borne out of a series of posts we'd made in the Summer of 2023 where we picked a song for the morning and one for the evening. They had no relation to one another, but put together they did string together a sense of mood. *A playlist by means of association*. We thought it neat to use browser's ability to call out the days of the month and exploit that to load in a song from a pre-determined track list.

To us, from all the back here, it seems like it requires outlining a script that loads in the tracks from the location of the tracklist. Appropriately naming the various tracks on the tracklist to coincide with how the browser records the days of the month (days 1 thru 31). Connecting the current date with the correct track. Loading the track in when the play button is pressed. 

To make sure the feature stays abstract we thought it neat to make it such that a user could only play or pause a track. We do not provide the name of the track, let the user know songs change every day, or give insight to the rest of the tracklists. These songs come and go!

### Still to do : Wordpress Mock-Up –

xxx

<br>

---

[# return to table of contents][def]

<br>

[def]: #table-of-contents
[def2]: https://every-layout.dev/
