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
        1. [Windows](#windows)
        2. [Dragability](#dragability)
        3. [Backround Outlines](#background-outlines)
        4. [The Spider](#the-spider)
    4. [Wordpress Mock-up](#wordpress-mock-up-–)
        1. [Windows 2](#windows-2)
        2. Dragability 2
        3. The Spider 2
        4. Header and Menuing


## Design

### What is Tomorrow Started's existing design ?

Tomorrow Started is strongly inspired by the design of the French publisher [NRF](https://en.wikipedia.org/wiki/Nouvelle_Revue_Fran%C3%A7aise)'s [Collection Blanche](https://en.wikipedia.org/wiki/Collection_Blanche), particularly their output in the early to mid 20<sup>th</sup> Century. 

We can see this to be the case with the use of serif fonts, the presence of the double line (in our case wrapping post titles), and the conservative use of color across the website's design – elements definitive to the Collection Blanche's cover design.

**However** the website was designed in the early aughts and has not been revisited since. 
It behaves much like how blogs of the time behaved. 
With the absence of blogs in today's web landscape, and our intent on keeping this one around, we though it not without merit to produce a redesign that could not only hold the same visual queues as the original design but also factor and revel in the tendencies of contemporary web design. 

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
- The proportions of the website's various elements to themselves and relative to each other.

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

---

[# return to table of contents][def]

## Development

### Philosophy –

Much of how we approached the development of the website is in small part informed by a distrust of what is [trendy](https://www.awwwards.com/).
Since most of what is trendy rarely is put in place to resolve a genuine design or usability concern. 
We are flooded with websites that move, change, and reconfigure themselves seemingly at will. 

Designers behave like the projects they are tasked with are really meant to fill out their portfolios, like they have a design system clever enough to overcome the noise they are producing as an side-effect of their efforts. Developers are in turn happy to follow designers, only sometimes ensuring users will actually use the website.

*In a way, contemporary web-design trends tend to obscure the line between page and web design.* 

We stuck mainly to what is now possible with web development not to produce something outrageous and eye catching, but to write code that made use of simple principles that could easily be followed once understood. 

### Philosophy in practice and usage –

To produce this we chose [every layout](https://every-layout.dev/)'s ingenuous and elegant modular scale to make up the foundation of the website's proportions and dimensions. 

Both the showcase and wordpress mock-up stylesheets begin with : 

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

We first set up a scale as a global definition for which we use the the `rem` unit for a wide variety of applications by defining `--s0` and producing equations off of `--ratio` that we can then arbitrarily set.

We also define `--measure` using the `ch` unit that will inform the maximum dimensions of any elements on the website in our universal definitions (`max-inline-size: var(--measure);`). Meaning here that nothing can be longer than `75ch`. 

Though we quickly amend possible unintended issues by setting certain important global exclusions using `max-inline-size: none;`. 

Finally we also set the `box-sizing`, default `font-family`, and `font-size` in our universal definitions.

These kinds of overarching, and systematic decisions can be found as often as we could implement.
We attempted to completely abstain from units that could be driven by the browser or the device on which the browser is loaded. We heavily favored `rem`, `ch`, `vw` and `vh`, and when absolutely necessary `%`, as they pertain to a relative layout of elements. If possible we also made further systems from the formula capabilities of CSS using `var` and `calc`.

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

The showcase website is a static html/css/js website. With no backend we intend to use workarounds, mentioned later, to mimick or behave as if it did in order to support the features required of it. These workarounds are there to also show off how a website could be done without the use of popular templates like wordpress should the developer or client wish to be a little savy and experiment. 

 While it can manage windowed use somewhat, it is really intended to be used in fullscreen mode. This screen size limitation in practical terms is in place due to the design. The whole of the website is presented on a single browser window, and takes up no more than the entirety of that window. 
 
 The posts, archives, about-us, and "randomizer" pages that make up the bulk of the surfing are all loaded in via draggable pop-up windows that can be toggled on or off using the menu.

The idea, as mentioned above, was to replicate a real-life desktop, wherein :
>papers, items, notes, objects, thoughts, mementos, tend to organize and perputually disorganize themselves.

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

The first two `div` are used by the file [action_showcase.js](JS/action_showcase.js) lines 2-59, they allows for the windows to be draggable. 

The following `div. window` defines the window, using the class {window} and contains the various nested elements of the window. We also assign the id {nameofwindow} (be it #archives, #post, #cast etc.) that is used by [menutoggle.js](JS/menutoggle.js) lines 70-128 to toggle them on or off, as well as how we give the specific dimensions of the window in question in the CSS file. 

The following `div .container` defines the layout of the content through the use of the class {container} assigning it `display;flex;`. This helps us with the remaining `div`.

While we can load as many of these as we want, the `div .pane` that makes up the content, is really best used only twice per window. Make sure to look at the [CSS file](CSS/style_showcase.css) lines 255-274 to best understand how these work.

#### *Dragability* 

We make use of code devised by Ariana Freitag to allow elements to be draggable within the website. Their work is used in the the file [action_showcase.js](JS/action_showcase.js) lines 2-59 and [action_wordpress.js](JS/action_wordpress.js) lines 2-51. 

Make sure to look at those files, they left really solid and comprehensive comments on how this all works. Essentially we use `onmousedown` and `onmousemove` events to calculate the distance of the cursor as you drag your mouse to match the distance traveled by the windows. 

#### *Background Outlines*

To ease the user into understanding the concept of windows and dragibility (as well as to double as a design accent) we made use of dashed lines that populate the homepage. They give an indication of where windows will be once toggled on, as well as imply a place where you might want to put back the various elements. Though this remains an implication while in use, if the page is refreshed elemetns go back to those outlined locations automatically. 

The implementation feels a little bit clunky as it requires the use of another stylesheet ([style-forbackgrounbdoutlines.css](CSS/style-forbackgroundoutlines.css)) in order to not clog up the main stylesheet. We feel as though they could have maybe been done using the exisiting `id` and maybe the `::before` tag in CSS for each of the elements on the homepage (as it would forgo elongating the already lengthy HTML file). However, short of coming up with an elegant solution we felt it best to simply populate the HTML with something clearly demarked and write a concise secondary stylesheet. 

#### *The Spider*

The spider on the screen is the intruder in the design. It's functionality is not specified to the user. The user must be oay with interacting with it in order to begin to understand what it does. 

The purpose of the spider is to behave as a button that once clicked on plays a track of music. That track is part of a playlist of 31 songs. Each of these songs corresponds to a day of the month. The song that interacting with the spider will play thus changes daily. Again this is not specified to the user and must be experienced in order to be ascertained. 

We have not yet made this feature but have a strong sense of how one might go about it. Feel free to reach out the owner of this repo to get a debrief on this feature. 


### Wordpress Mock-Up –

#### Windows 2 -

xxx

#### Dragability 2 –

xxx

#### The Spider 2 –

xxx

#### Header and Menuing –

---

[# return to table of contents][def]

[def]: #table-of-contents