function initFreshChat() {
  window.fcWidget.init({
    token: '65bdf1af-2348-467a-ba1c-e1383fcb9ce9',
    host: 'https://wchat.freshchat.com',
    tags: ['docs'],
  });
}
function initialize(i, t) {
  var e;
  i.getElementById(t)
    ? initFreshChat()
    : (((e = i.createElement('script')).id = t),
      (e.async = !0),
      (e.src = 'https://wchat.freshchat.com/js/widget.js'),
      (e.onload = initFreshChat),
      i.head.appendChild(e));
}
function initiateCall() {
  initialize(document, 'freshchat-js-sdk');
}
window.addEventListener
  ? window.addEventListener('load', initiateCall, !1)
  : window.attachEvent('load', initiateCall, !1);
