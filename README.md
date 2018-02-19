# Alpha(based on the same architecture as V2)
Alpha version of Peer Query


## How to run it
The site is built on Node.js and Semantic UI. In the json.package file you will find all the dependiaries which are:
* express
* sitemap
* body-parser


## What you should know
**This version is only a Proof of Concept so does not include all the features for a full site.**
This site runs on Steem Connect v2 so to use it you MUST have your own Steem Connect v2 app - not account.
The code here is the complete code source code - less the host server configuarion files for Amazon ELB.
That means it contains **everything** that is used to run **www.peerquery.com**, logos, internal links, personal comments, everything!

## The following features work:
* Steem Connect v2 login
* Posting a post
* Voting post and comment with slidebar
* Responding/ Commenting
* Resteeming a post
* Limited users profile
* Viewing any Steem post using the permlink - not just "queries"
* Exploring all Steem post via the tag broswer
* Exploring content on Steem
* Sharing content
* Advanced wallet interface
* Parsing content containing mixed HTML and MarkDown
* Parsing naked links into URLs
* Parsing mentions into account links
* and several other features > see https://www.peerquery.com


## What does NOT exist:
* Threaded comments
* Parsing content with Markdown parser
* Auto linking of images, profile and Youtube videos
*No sidebar


## Lazy loading
The current cersion of the site is entirely client rendered - not server rendered. This means could be bad for SEO, however it is good for the server load.

Also, the navbar, sidebar and footer are loaded into "div"s by JQuery. This means that all pages share the very same single navbar, and footer.

For a Proof of Concept site, this makes the development process easier as you only edit the navbar, sidebar or footer once and the changes are applied site wide.


## Auth system
The entire Steem Connect v2 system is located in the navbar.html(which is shared on all pages). The login system is quite messy but works perfectly. It has been trimmed down from a more sophisticaed system(V1) however it still contains a few in-active code from the version 1.


## Its all yours for re-use!
Do whatever you want with it. You are responsible for whatever you do with it.


## How to start the server
* Create your dev folder
* Do npm install into it
* Copy all these files into it
* Do npm install of (express), (body-parser) and (sitemap).
* Now simply do "node server.js" in the command prompt(while in the dev folder)
* Visit (http://localhost) or (http://localhost:80) to see Peer Query running


## Full documentation
Coming soon.


## Recommendation
Contributors are welcome, however if kindly use https://utopian.io to contribute.

