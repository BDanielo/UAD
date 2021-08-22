// ==UserScript==
// @icon         https://download.megaup.net/images/favicon.ico
// @name         UAD Universal auto download
// @description  Automatically download file from megaup.net, 1fichier.oom, anonfiles.com, uploaded.net
// @updateURL      https://adsbypasser.github.io/releases/adsbypasser.full.es7.meta.js
// @downloadURL    https://adsbypasser.github.io/releases/adsbypasser.full.es7.user.js
// @match        *.megaup.net/*
// @match        *.zippyshare.com/*
// @match        *.1fichier.com/*
// @match        *.gofile.io/*
// @match        *.anonfiles.com/*
// @match        *.drive.google.com/*
// @match        *.uploaded.net/*
// @match        *.journaldupirate.net/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @run-at       document-end
// @grant        window.close
// ==/UserScript==
document.title="⏳"+document.title;
var timeW=0; //time to wait before click
var timeC=1100; //time to wait for download before closing tab
var selector = new Array();
var warn;
var timeSelector;
switch(window.location.hostname) {
    case 'megaup.net':
        timeW=5100;
        timeC=-1;
        selector[0]="#btnsubmit";
        break;
    case '1fichier.com':
        selector[0]='.ui-icon-closethick';
        selector[1]='input[name="dl_no_ssl"]';
        selector[2]='input[name="dlinline"]';
        selector[3]='input[type="submit"]';
        warn='.ct_warn';
        break;
    case 'anonfiles.com':
        selector[0]="#download-url";
        break;
    case 'uploaded.net':
        selector[0]=".free";
        break;
    case 'www6.journaldupirate.net':
        selector[0]='input[value="Continuer pour voir le lien"]';
        selector[1]='div.alert a';
        timeC=8000;
        break;
/*    case 'uptobox.com':
        selector[0]="[href*='/dl/']";
        timeSelector='';
        break;
/*    case 'google.com':
        selector[0]='div[data-tooltip="Download"]';
        break;
    case 'zippyshare.com':
        selector[0]=".download";
        break;
    case 'gofile.io':
        selector[0]=".contentName";
        break;8*/
    timeC+=timeW;
}

select(timeW);

function select(time) {setTimeout(function() {
    if(document.querySelector(warn) !== null) {
                $(".ct_warn").append(' <a href="https://debridup.com" target="_blank">Debridup</a> ');
    }
    else {
        for(var i=0;i<selector.length;i++) {
            if(document.querySelector(selector[i])) {
                document.querySelector(selector[i]).click();
            }
        }
        if (timeC>=0) {close();}
    }
}, time);}

function close() {setTimeout(function() {
    window.close(document.URL);
}, timeC);}