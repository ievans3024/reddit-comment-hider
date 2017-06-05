// ==UserScript==
// @name         Reddit Comment Hider
// @namespace    http://noisemarine.com/
// @source       http://github.com/ievans3024/reddit-comment-hider
// @version      0.1
// @description  Hides comments under desired URLs
// @author       ievans3024
// @match        http*://*.reddit.com/r/Terraria/*/*/
// ==/UserScript==
;(
  function () {
    "use strict";
    document.addEventListener(
      'DOMContentLoaded',
      function () {
        let button_container = document.createElement('div'),
            show_hide_button = document.createElement('button'),
            comments = document.querySelector('div.commentarea'),
            container = document.querySelector('div.content');
        show_hide_button.id = 'noisemarine-show-hide';
        show_hide_button.style = 'margin: 0.5em 0 1.5em 0;';
        show_hide_button.appendChild(document.createTextNode('Show / Hide Comments'));
        show_hide_button.addEventListener(
          'click',
          function () {
            if (comments.style.length > 0) {
              comments.style = '';
            }
            else {
              comments.style = 'display: none;';
            }
          }
        );
        button_container.id = 'noisemarine-show-hide-container';
        button_container.appendChild(show_hide_button);
        comments.style = 'display: none;';
        container.insertBefore(button_container, comments);
      }
    );
  }
)();