(()=>{
const S=window.SITE,L=window.SERVICES;
const $=(s,e=document)=>e.querySelector(s);
const $$=(s,e=document)=>[...e.querySelectorAll(s)];
const P={
leaf:'<path d="M5 19C5 10 10 4 20 4c0 9-5 15-14 15z"/><path d="M5 19l9-9"/>',
grass:'<path d="M3 20h18"/><path d="M6 20c0-4 0-7-1-10M10 20c0-6 1-10 2-14 1 4 2 8 2 14M18 20c0-3-1-6-2-8"/>',
palm:'<path d="M12 21V10"/><path d="M12 10c-3-4-7-4-9-2 3 0 6 1 9 2zM12 10c3-4 7-4 9-2-3 0-6 1-9 2zM12 10c0-4 1-6 3-7-1 3-1 5-3 7zM12 10c0-4-1-6-3-7 1 3 1 5 3 7z"/>',
drop:'<path d="M12 2.7s6 6.3 6 10.8a6 6 0 01-12 0c0-4.5 6-10.8 6-10.8z"/>',
clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
wrench:'<path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>',
layers:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
scissors:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.1 15.9M14.5 14.5L20 20M8.1 8.1L12 12"/>',
sparkle:'<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"/>',
bulb:'<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 00-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0012 3z"/>',
sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
users:'<path d="M16 20v-1a4 4 0 00-4-4H8a4 4 0 00-4 4v1"/><circle cx="10" cy="8" r="3.5"/><path d="M20 20v-1a3.5 3.5 0 00-2.5-3.3"/>',
pin:'<path d="M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
chat:'<path d="M21 12a8 8 0 01-11.6 7.1L3 21l1.9-5.4A8 8 0 1121 12z"/>',
user:'<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 016-6h4a6 6 0 016 6v1"/>'
};
const ic=n=>'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+(P[n]||'')+'</svg>';
const tel='tel:+'+S.intl;
const wa='https://wa.me/'+S.intl;
const pad=n=>String(n).padStart(2,'0');
const card=s=>`<a class="sv rev" data-a="up" href="service.html?id=${s.id}"><div class="pic"><img src="images/serv${s.id}.png" alt="${s.title} الرياض" loading="lazy"><span class="no">${pad(s.id)}</span></div><div class="cb"><span class="ic"><i data-ic="${s.icon}"></i></span><h3>${s.title}</h3><p>${s.short}</p><div class="tg">${s.tags.slice(0,3).map(t=>`<span>${t}</span>`).join('')}</div><span class="more">تفاصيل الخدمة <b>←</b></span></div></a>`;
const sv=$('#sv');
if(sv){
const id=+new URLSearchParams(location.search).get('id');
const s=L.find(x=>x.id===id);
if(!s){location.replace('index.html#services');return}
document.title=s.title+' في الرياض | '+s.kw+' | الغابات الجميلة لتنسيق الحدائق';
const md=$('meta[name="description"]');
if(md)md.setAttribute('content',s.title+' في الرياض. '+s.intro+' اتصل الآن '+S.phone);
const others=[1,2].map(k=>L[(L.indexOf(s)+k)%L.length]);
sv.innerHTML=`
<section class="ph pat">
<div class="wrap ph-in">
<nav class="bc"><a href="index.html">الرئيسية</a><i>/</i><a href="index.html#services">خدماتنا</a><i>/</i><span>${s.title}</span></nav>
<span class="sico"><i data-ic="${s.icon}"></i></span>
<h1>${s.title} في الرياض</h1>
<p>${s.intro}</p>
<div class="cta"><a class="btn pri" href="${tel}">اتصل الآن</a><a class="btn wab" href="${wa}" target="_blank" rel="noopener">واتساب</a></div>
</div>
</section>
<section class="sd"><div class="wrap sd-grid">
<article class="sd-main">
<div class="sd-img"><img src="images/serv${s.id}.png" alt="${s.title} الرياض"></div>
<h2>تفاصيل الخدمة</h2>
${s.body.map(p=>`<p>${p}</p>`).join('')}
${s.kinds?`<h2>${s.kindsTitle}</h2><div class="kd">${s.kinds.map(k=>`<div class="kdi"><h3>${k[0]}</h3><p>${k[1]}</p></div>`).join('')}</div>`:''}
<h2>ماذا تشمل الخدمة؟</h2>
<ul class="inc">${s.inc.map(i=>`<li>${i}</li>`).join('')}</ul>
<h2>خطوات التنفيذ</h2>
<div class="stl">${s.steps.map((t,i)=>`<div class="sti"><b>${i+1}</b><div><h3>${t[0]}</h3><p>${t[1]}</p></div></div>`).join('')}</div>
<h2>لماذا نحن في هذه الخدمة؟</h2>
<div class="bn">${s.why.map(w=>`<div class="bni"><h3>${w[0]}</h3><p>${w[1]}</p></div>`).join('')}</div>
<h2>أسئلة حول الخدمة</h2>
<div class="fq">${s.faq.map(f=>`<div class="fq-i"><button aria-expanded="false"><span>${f[0]}</span><i></i></button><div class="fa"><p>${f[1]}</p></div></div>`).join('')}</div>
<div class="tags">${s.tags.map(t=>`<span>${t}</span>`).join('')}</div>
</article>
<aside class="sd-side">
<div class="box cbox"><h3>اطلب الخدمة الآن</h3><p>نخدم الرياض فقط، تواصل معنا وأخبرنا بما تحتاجه وسنرتب لك موعد المعاينة</p><a class="btn pri" href="${tel}">اتصل ${S.phone}</a><a class="btn wab" href="${wa}" target="_blank" rel="noopener">راسلنا واتساب</a></div>
<div class="box"><h3>خدماتنا</h3><ul class="ol">${L.map(x=>`<li><a href="service.html?id=${x.id}"><span><i data-ic="${x.icon}"></i></span>${x.title}</a></li>`).join('')}</ul></div>
</aside>
</div></section>
<section class="rel"><div class="wrap">
<div class="sec-h"><span class="k">خدمات أخرى</span><h2>اكتشف المزيد من <span>خدماتنا</span></h2></div>
<div class="sv-list">${others.map(card).join('')}</div>
</div></section>`;
}

const home=!!$('#home');
const base=home?'':'index.html';
const items=[['home','الرئيسية'],['about','من نحن'],['services','خدماتنا'],['works','أعمالنا'],['process','كيف نعمل'],['why','لماذا نحن'],['reviews','آراء العملاء'],['faq','أسئلة شائعة'],['contact','تواصل معنا']];
const cur=home?'home':'services';
const sprite=`<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs><linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3f9142"/><stop offset="1" stop-color="#1e3a25"/></linearGradient><linearGradient id="g2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f2bd4b"/><stop offset="1" stop-color="#e49a2f"/></linearGradient></defs>
<symbol id="lg" viewBox="0 0 48 48"><rect width="48" height="48" rx="24" fill="url(#g1)"/><path d="M24 8c-9 4-13 12-10 22 3-1 6-3 8-6 0 3 0 6-1 9 5-1 9-6 9-13 0-5-2-9-6-12z" fill="url(#g2)"/><path d="M24 16v22" stroke="#1e3a25" stroke-width="2" stroke-linecap="round"/><path d="M14 40c6-3 14-3 20 0" stroke="#fff" stroke-width="2.4" stroke-linecap="round" fill="none"/></symbol>
<symbol id="ph" viewBox="0 0 24 24"><path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.6 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.6 3.6a1 1 0 01-.25 1z"/></symbol>
<symbol id="wa" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></symbol></svg>`;
const header=`<header id="hd"><div class="hd-in">
<a class="brand" href="${base}#home" aria-label="الغابات الجميلة لتنسيق الحدائق"><span class="logo"><svg viewBox="0 0 48 48"><use href="#lg"/></svg></span><span class="bt"><b>الغابات الجميلة</b><small>لتنسيق الحدائق • الرياض</small></span></a>
<nav class="nav" id="nav" aria-label="القائمة الرئيسية">${items.map(i=>`<a href="${base}#${i[0]}"${i[0]===cur?' class="on"':''}>${i[1]}</a>`).join('')}</nav>
<a class="callbtn" href="${tel}" aria-label="اتصال"><svg viewBox="0 0 24 24"><use href="#ph"/></svg><span>${S.phone}</span></a>
<button class="burger" id="bg" aria-label="القائمة" aria-expanded="false"><span></span><span></span><span></span></button>
</div></header><div class="ov" id="ov"></div>`;
const footer=`<footer><div class="wrap">
<div class="ft-grid">
<div><div class="brand"><span class="logo"><svg viewBox="0 0 48 48"><use href="#lg"/></svg></span><span class="bt"><b>الغابات الجميلة</b><small>لتنسيق الحدائق • الرياض</small></span></div><p class="fd">نقدم في الرياض خدمات تنسيق الحدائق وزراعة الثيل بكل أنواعه وزراعة النخيل وتركيب وصيانة شبكات الري العادي والأوتوماتيك والعشب الصناعي والإضاءة والنوافير، بإتقان وتعامل راقٍ.</p></div>
<div><h4>روابط سريعة</h4><ul>${items.map(i=>`<li><a href="${base}#${i[0]}">${i[1]}</a></li>`).join('')}</ul></div>
<div><h4>خدماتنا</h4><ul>${L.map(x=>`<li><a href="service.html?id=${x.id}">${x.title}</a></li>`).join('')}</ul></div>
<div><h4>بيانات التواصل</h4><ul><li><a class="ltr" href="${tel}">${S.phone}</a></li><li><a href="${wa}" target="_blank" rel="noopener">واتساب</a></li><li>الرياض – المملكة العربية السعودية</li></ul></div>
</div>
<p class="seo">تنسيق حدائق الرياض • زراعة ثيل طبيعي • زراعة نخيل • شبكات ري الرياض • ري أوتوماتيك • صيانة شبكات الري • عشب صناعي • صيانة حدائق • تقليم أشجار ونخيل • إضاءة حدائق • نوافير وشلالات • تصميم حدائق منزلية • تنسيق حدائق الفلل والاستراحات</p>
<div class="cp"><p>جميع الحقوق محفوظة © 2026 الغابات الجميلة لتنسيق الحدائق</p><p>تصميم وبرمجة <a href="${S.fb}" target="_blank" rel="noopener">GMTWeb</a></p></div>
</div></footer>
<div class="fl"><a class="fb wa" href="${wa}" target="_blank" rel="noopener" aria-label="واتساب"><svg viewBox="0 0 24 24"><use href="#wa"/></svg></a><a class="fb cl" href="${tel}" aria-label="اتصال"><svg viewBox="0 0 24 24"><use href="#ph"/></svg></a></div>`;
document.body.insertAdjacentHTML('afterbegin',sprite+header);
document.body.insertAdjacentHTML('beforeend',footer);

$$('[data-ic]').forEach(e=>{e.innerHTML=ic(e.dataset.ic)});

const hd=$('#hd'),nav=$('#nav'),bg=$('#bg'),ov=$('#ov');
const links=$$('#nav a');
links.forEach((a,i)=>a.style.setProperty('--i',i));
const setMenu=o=>{
nav.classList.toggle('open',o);
ov.classList.toggle('show',o);
bg.classList.toggle('x',o);
bg.setAttribute('aria-expanded',String(o));
document.body.classList.toggle('lock',o);
};
bg.addEventListener('click',()=>setMenu(!nav.classList.contains('open')));
ov.addEventListener('click',()=>setMenu(false));
links.forEach(a=>a.addEventListener('click',()=>setMenu(false)));
addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)});
addEventListener('resize',()=>{if(innerWidth>1180)setMenu(false)});
const onScroll=()=>hd.classList.toggle('sc',scrollY>20);
onScroll();
addEventListener('scroll',onScroll,{passive:true});

if(home){
const spy=new IntersectionObserver(es=>{
es.forEach(en=>{
if(en.isIntersecting){
const key=en.target.dataset.nav||en.target.id;
links.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+key));
}
});
},{rootMargin:'-45% 0px -50% 0px'});
$$('main section').forEach(s=>spy.observe(s));
}

const rv=new IntersectionObserver(es=>{
es.forEach(en=>{
if(en.isIntersecting){
const t=en.target;
t.classList.add('in');
rv.unobserve(t);
setTimeout(()=>t.classList.remove('rev','in'),1900);
}
});
},{threshold:.1});
$$('.rev').forEach(el=>rv.observe(el));

document.addEventListener('click',e=>{
const b=e.target.closest('.fq-i button');
if(!b)return;
const it=b.parentElement,p=b.nextElementSibling,open=it.classList.contains('open');
$$('.fq-i.open').forEach(o=>{
o.classList.remove('open');
o.lastElementChild.style.maxHeight=null;
o.firstElementChild.setAttribute('aria-expanded','false');
});
if(!open){
it.classList.add('open');
p.style.maxHeight=p.scrollHeight+'px';
b.setAttribute('aria-expanded','true');
}
});

const gi=$$('.gi');
if(gi.length){
const lb=document.createElement('div');
lb.className='lb';
lb.innerHTML='<button class="lc" aria-label="إغلاق">×</button><button class="ln" aria-label="التالي">‹</button><button class="lp" aria-label="السابق">›</button><img alt="">';
document.body.appendChild(lb);
let cur2=0;
const show=i=>{
cur2=(i+gi.length)%gi.length;
$('img',lb).src=gi[cur2].querySelector('img').src;
lb.classList.add('show');
document.body.classList.add('lock');
};
const hide=()=>{
lb.classList.remove('show');
document.body.classList.remove('lock');
};
gi.forEach((g,i)=>g.addEventListener('click',()=>show(i)));
$('.lc',lb).addEventListener('click',hide);
$('.ln',lb).addEventListener('click',()=>show(cur2+1));
$('.lp',lb).addEventListener('click',()=>show(cur2-1));
lb.addEventListener('click',e=>{if(e.target===lb)hide()});
addEventListener('keydown',e=>{
if(!lb.classList.contains('show'))return;
if(e.key==='Escape')hide();
if(e.key==='ArrowLeft')show(cur2+1);
if(e.key==='ArrowRight')show(cur2-1);
});
}
})();