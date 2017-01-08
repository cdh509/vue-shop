// // document
// !(function(doc, win) {
//     var docEle = doc.documentElement,
//         evt = "onorientationchange" in window ? "orientationchange" : "resize",
//         fn = function() {
//             var width = docEle.clientWidth;
//             width && (docEle.style.fontSize = 16 * (width / 375) + "px");
//         };
//     win.addEventListener(evt, fn, false);
//     doc.addEventListener("DOMContentLoaded", fn, false);         
// }(document, window));

// // ios android
// if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
//     document.write('<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, target-densityDpi=device-dpi" />');
// } else if (/(Android)/i.test(navigator.userAgent)) {
//     document.write('<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />');
// }