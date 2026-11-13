import { initExperience } from './experience.js?v=4';

export function initMedia(c){
 const q=s=>document.querySelector(s), esc=s=>String(s||'').replace(/[&<>"']/g,x=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]));
 q('#media-intro').textContent=c.mediaIntro;
 q('#media-craft').innerHTML=c.mediaCraft.map(x=>`<article class="craft-card reveal"><div class="craft-meta"><span>${x.number}</span><small>${esc(x.subtitle)}</small></div><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p><ul>${x.terms.map(t=>`<li>${esc(t)}</li>`).join('')}</ul></article>`).join('');
 q('#media-tools').innerHTML=c.mediaTools.map((t,i)=>`<article class="tool reveal"><b aria-hidden="true">${['Pr','Ae','Ps','Lr','Ca'][i]}</b><div><h4>${esc(t)}</h4><p>${esc(c.mediaToolDetails[i])}</p><ul>${(c.mediaToolSkills[i]||[]).map(t=>`<li>${esc(t)}</li>`).join('')}</ul></div></article>`).join('');
 q('#media-process').innerHTML=c.mediaProcess.map((x,i)=>`<article class="process-step reveal"><span>0${i+1}</span><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p></article>`).join('');
 q('#gear-list').innerHTML=c.gear.map((g,i)=>`<li><span>0${i+1}</span><div><strong>${esc(g)}</strong><p>${esc(c.gearDetails[i])}</p></div></li>`).join('');
 q('#editing-styles').innerHTML=c.editingStyles.map(x=>`<article class="editing-card reveal"><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p><div class="tags">${x.tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div></article>`).join('');
 void initExperience(q('#experience'));
}
