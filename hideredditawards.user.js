// ==UserScript==
// @name        Hide Reddit Awards
// @description Hides awards on posts and comments
// @version     1
// @namespace   de.frp.util.gm.hra
// @include     https://www.reddit.com/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant       none
// ==/UserScript==

function hideAwards(element)
{
  element.parent().parent().css("visibility", "hidden");
}
waitForKeyElements('*[id^="PostAwardBadges"],*[id^="CommentAwardBadges"]', hideAwards);
