import{S as u,i}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="46833359-edc83954567fc8c41d0a60462",d="https://pixabay.com/api/";function m(s){const o=`${d}?key=${f}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()}).then(r=>{if(r.hits.length===0)throw new Error("No images found");return r.hits}).catch(r=>{throw r})}let c;function p(s){const o=document.querySelector(".gallery"),r=s.map(n=>`
    <a href="${n.largeImageURL}" class="gallery-item">
      <img src="${n.webformatURL}" alt="${n.tags}" loading="lazy" />
      <div class="info">
        <p>Likes <span class="info-number">${n.likes}</span></p>
        <p>Views <span class="info-number">${n.views}</span></p>
        <p>Comments <span class="info-number">${n.comments}</span></p>
        <p>Downloads <span class="info-number">${n.downloads}</span></p>
      </div>
    </a>
  `).join("");o.innerHTML=r,c?c.refresh():c=new u(".gallery a")}function h(){const s=document.querySelector(".gallery");s.innerHTML=""}const y=document.querySelector(".search-form"),l=document.querySelector(".loader");y.addEventListener("submit",s=>{s.preventDefault();const o=s.currentTarget.elements.searchQuery.value.trim();if(!o){i.error({message:"Please enter a search query!"});return}l.classList.remove("hidden"),h(),m(o).then(r=>{p(r)}).catch(()=>{i.error({message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{l.classList.add("hidden")})});
//# sourceMappingURL=index.js.map
