
export function init(){
var sid;var $=function(s){return document.querySelector(s)},app=$('#app'),R=function(a,b){return a+Math.random()*(b-a)},
RM=matchMedia('(prefers-reduced-motion:reduce)').matches,T=[],iv=null,later=function(f,ms){T.push(setTimeout(f,ms))};
function set(s){app.dataset.s=s;app.className=s==='idle'?'':s+(s==='open'||s==='reveal'?'':'')}
/* stars */
var st=$('#stars'),h='';
for(var i=0;i<170;i++){var big=i<14,sz=big?R(2.2,3.2):R(.8,2);
h+='<div class="star'+(big?' big':'')+'" style="left:'+R(0,100)+'%;top:'+R(0,72)+'%;width:'+sz+'px;height:'+sz+'px;--o:'+(big?1:R(.3,.95))+';--d:'+R(2.5,7)+'s;--t:-'+R(0,7)+'s"></div>'}
for(i=0;i<16;i++)h+='<div class="dust" style="left:'+R(0,100)+'%;top:'+R(25,75)+'%;width:3px;height:3px;--d:'+R(7,14)+'s;--t:-'+R(0,10)+'s"></div>';
st.innerHTML=h;
var bigs=st.querySelectorAll('.big');
bigs.forEach(function(s){var b=document.createElement('button');b.className='hit';b.setAttribute('aria-label','Twinkling star');b.style.left=s.style.left;b.style.top=s.style.top;
b.onclick=function(){var r=b.getBoundingClientRect();spark(r.left+13,r.top+13)};st.appendChild(b)});
function spark(x,y){for(var i=0;i<7;i++){var e=document.createElement('i');e.className='sp';e.style.cssText='position:fixed;left:'+x+'px;top:'+y+'px;--dx:'+R(-30,30)+'px;--dy:'+R(-30,30)+'px';document.body.appendChild(e);setTimeout(function(n){n.remove()},1700,e)}}
st.style.pointerEvents='none';
/* shooting stars */
function shoot(){if(!RM&&!document.hidden){var e=document.createElement('div');e.className='shoot';e.style.left=R(5,65)+'%';e.style.top=R(4,34)+'%';e.onanimationend=function(){e.remove()};app.appendChild(e)}sid=setTimeout(shoot,R(3500,9000))}
if(!RM)sid=setTimeout(shoot,2500);
/* moon */
$('#moon').onclick=function(){var m=this;m.classList.remove('sh');void m.offsetWidth;m.classList.add('sh')};
/* parallax */
var pm=function(e){if(e.pointerType==='touch')return;app.style.setProperty('--px',(e.clientX/innerWidth-.5)*2);app.style.setProperty('--py',(e.clientY/innerHeight-.5)*2)};addEventListener('pointermove',pm);
/* petals */
var P=$('#petals'),cols=['#E8AAB9','#E8AAB9','#BD8298','#F5EEDC','#F5EEDC','#E8AAB9','#A8B8DA'];
function petal(){if(P.childElementCount>90)return;var e=document.createElement('span');e.className='petal';
var c=Math.random()<.07?cols[6]:cols[Math.floor(R(0,6))];
e.style.cssText='--x:'+R(-2,100)+'%;--s:'+R(9,19)+'px;--c:'+c+';--t:'+R(7,13)+'s;--dx:'+R(-120,140)+'px;--r:'+R(-540,540)+'deg';
e.onanimationend=function(){e.remove()};P.appendChild(e)}
function shower(n,gap){var k=RM?Math.min(n,18):n;for(var i=0;i<k;i++)later(petal,i*gap)}
/* bouquet */
(function(){var pal=[['#F7D6DE','#E8AAB9'],['#E8AAB9','#BD8298'],['#FBF4E6','#E9DBC4'],['#F8E0E6','#EDB8C6']],d='<defs>';
pal.forEach(function(p,i){d+='<linearGradient id="t'+i+'" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="'+p[1]+'"/><stop offset="1" stop-color="'+p[0]+'"/></linearGradient>'});
d+='<linearGradient id="lf" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#6f836d"/><stop offset="1" stop-color="#8FA18B"/></linearGradient><linearGradient id="pp" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FBF5E7"/><stop offset="1" stop-color="#E4D7BC"/></linearGradient><radialGradient id="pr" cx=".32" cy=".28"><stop offset="0" stop-color="#fff"/><stop offset=".35" stop-color="#F8F3E6"/><stop offset="1" stop-color="#A9A7C0"/></radialGradient></defs>';
var s=d+'<path d="M150,258 C96,214 62,150 54,84 C96,128 142,196 150,258Z" fill="url(#lf)"/><path d="M150,258 C204,214 238,150 246,84 C204,128 158,196 150,258Z" fill="url(#lf)"/><path d="M150,258 C118,200 112,150 124,100 C140,150 152,206 150,258Z" fill="url(#lf)" opacity=".85"/><path d="M150,258 C182,200 188,150 176,100 C160,150 148,206 150,258Z" fill="url(#lf)" opacity=".85"/>';
var tl=[[150,48,0,0,1.05],[60,138,-46,1,.7],[240,136,44,3,.7],[106,70,-18,1,.95],[194,68,16,2,.95],[76,104,-34,0,.88],[224,102,32,3,.88],[98,120,-24,2,.8],[204,122,22,0,.8],[132,92,-8,3,.92],[170,90,8,1,.92],[150,106,2,2,.88]];
tl.forEach(function(t){var x=t[0],y=t[1]+54,i=t[3];s+='<path d="M150,254 Q'+(150+(x-150)*.3)+',170 '+x+','+y+'" stroke="#7d9179" stroke-width="3.2" fill="none" stroke-linecap="round"/>'});
tl.forEach(function(t){var x=t[0],y=t[1]+54,a=t[2],k=t[4],i=t[3];
s+='<g transform="translate('+x+' '+y+') rotate('+a+') scale('+k+')"><path d="M0,0 C-24,-4 -29,-36 -13,-58 C-6,-44 -2,-22 0,0Z" fill="url(#t'+i+')" opacity=".9"/><path d="M0,0 C24,-4 29,-36 13,-58 C6,-44 2,-22 0,0Z" fill="url(#t'+i+')" opacity=".9"/><path d="M-1,2 C-22,-8 -24,-36 -9,-56 C-4,-38 -2,-18 -1,2Z" fill="url(#t'+i+')" opacity=".95"/><path d="M0,3 C-20,-6 -22,-42 0,-62 C22,-42 20,-6 0,3Z" fill="url(#t'+i+')"/><path d="M-8,-12 C-12,-30 -8,-46 -2,-54" stroke="#fff" stroke-opacity=".45" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M1,-6 C4,-26 3,-44 0,-58" stroke="#BD8298" stroke-opacity=".3" stroke-width="1" fill="none"/></g>'});
s+='<path d="M70,172 C100,186 200,186 230,172 L172,298 Q150,306 128,298Z" fill="url(#pp)"/><path d="M70,172 L126,298 L100,232Z" fill="#E4D7BC" opacity=".85"/><path d="M230,172 L174,298 L200,232Z" fill="#E4D7BC" opacity=".85"/><path d="M108,188 L150,290 L192,188" stroke="#C9B896" stroke-width="1" fill="none" opacity=".7"/>';
s+='<path d="M110,208 Q150,224 190,208 L192,220 Q150,236 108,220Z" fill="#526889"/><path d="M150,215 C124,194 108,214 124,228 C136,232 146,224 150,215Z" fill="#6c83a8"/><path d="M150,215 C176,194 192,214 176,228 C164,232 154,224 150,215Z" fill="#6c83a8"/><path d="M148,222 L134,262 L146,254 L152,266Z" fill="#526889"/><path d="M152,222 L166,262 L154,254 L148,266Z" fill="#3f5370"/><circle cx="150" cy="219" r="5" fill="#526889"/>';
[[94,184],[110,192],[190,192],[206,184],[150,296],[126,290],[174,290]].forEach(function(p){s+='<circle cx="'+p[0]+'" cy="'+p[1]+'" r="3.6" fill="url(#pr)"/>'});
$('#bq').innerHTML=s})();
/* parchment pearls + corner flourishes */
(function(){var p=$('#parch'),h='',cs=[['left','top',1,1],['right','top',-1,1],['left','bottom',1,-1],['right','bottom',-1,-1]];
cs.forEach(function(c){var a=c[0],b=c[1],sx=c[2],sy=c[3];
[[22,22,14],[40,19,10],[19,40,10],[58,17,8],[17,58,8]].forEach(function(q,i){h+='<i class="pearl'+(i<3?' g':'')+'" style="'+a+':'+q[0]+'px;'+b+':'+q[1]+'px;width:'+q[2]+'px;height:'+q[2]+'px;--t:'+(-Math.random()*4)+'s"></i>'});
h+='<svg class="fl" style="'+a+':26px;'+b+':26px;transform:scale('+sx+','+sy+')" viewBox="0 0 56 56"><path d="M10,34 C14,22 24,12 44,8 M10,34 C16,36 20,32 22,26 C16,24 11,28 10,34Z M26,22 C32,24 36,20 36,14 C30,14 26,17 26,22Z" stroke="#B08E4A" stroke-width="1.1" fill="rgba(143,161,139,.35)" stroke-linecap="round"/></svg>'});
p.insertAdjacentHTML('afterbegin',h)})();
/* sequence */
function reveal(){if(app.dataset.s!=='idle')return;set('reveal');app.classList.add('reveal','glow');
var b=$('#pbtn');b.classList.add('b');
var sp=$('#sparks'),h='';for(var i=0;i<16;i++)h+='<i class="sp" style="--dx:'+R(-90,90)+'px;--dy:'+R(-150,-30)+'px;animation-delay:'+R(0,.7)+'s"></i>';sp.innerHTML=h;
later(function(){app.classList.add('flare');shower(70,60)},700);
later(function(){app.classList.add('hid');$('#stage').classList.add('on');$('#stage').scrollTop=0},2000);
later(function(){$('#parch').classList.add('unf')},3300);
later(function(){$('#parch').classList.add('go')},4600);
later(function(){app.classList.remove('flare');app.classList.add('open');app.dataset.s='open';$('#h').focus({preventScroll:true});
iv=setInterval(function(){if(!document.hidden)petal()},2600)},7200)}
function reset(){T.forEach(clearTimeout);T=[];clearInterval(iv);iv=null;P.innerHTML='';$('#sparks').innerHTML='';
$('#pbtn').classList.remove('b');$('#stage').classList.remove('on');['unf','go'].forEach(function(c){$('#parch').classList.remove(c)});
set('idle');app.className='';app.dataset.s='idle';$('#pbtn').focus({preventScroll:true})}
$('#pbtn').onclick=reveal;$('#rp').onclick=reset;$('#bs').onclick=function(){shower(45,50)};
return function(){T.forEach(clearTimeout);clearInterval(iv);clearTimeout(sid);removeEventListener('pointermove',pm)}}
