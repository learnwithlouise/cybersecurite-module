function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5paPrcdk1U0":
        Script1();
        break;
      case "6HRetG0CO41":
        Script2();
        break;
      case "5oaAdn8Q46s":
        Script3();
        break;
      case "5c9uFlFZWHZ":
        Script4();
        break;
      case "6l1wsImC6Kr":
        Script5();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  player.once(() => {
const target = object('61edyebimVI');
const duration = 13250;
const easing = 'ease-out';
const id = '5pJQEdd7Zpq';
const shakeAmount = 5;
const delay = 500;
addToTimeline(
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('6T0Vdh5QKKj');
const duration = 1250;
const easing = 'ease-out';
const id = '6MHMYEIjj9t';
const delay = 0;
addToTimeline(
target.animate(
[ {opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('6Y0fnCAuA6N');
const duration = 750;
const easing = 'ease-out';
const id = '5plZfBg2wNR';
const floatAmount = 5;
const delay = 500;
addToTimeline(
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  const target = object('64LfrMNkGFB');
const duration = 1500;
const easing = 'ease-out';
const id = '5r1NDisM3km';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('5Y5Z25GMAmx');
const duration = 1500;
const easing = 'ease-out';
const id = '6M52me3lxva';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
