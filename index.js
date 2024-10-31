import{S as u,i as a}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d="46833359-edc83954567fc8c41d0a60462",f="https://pixabay.com/api/";function m(s){const o=`${f}?key=${d}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()}).then(r=>{if(r.hits.length===0)throw new Error("No images found");return r.hits}).catch(r=>{throw r})}let i;function h(s){const o=document.querySelector(".gallery"),r=s.map(n=>`
    <a href="${n.largeImageURL}" class="gallery-item">
      <img src="${n.webformatURL}" alt="${n.tags}" loading="lazy" />
      <div class="info">
        <p>Likes: ${n.likes}</p>
        <p>Views: ${n.views}</p>
        <p>Comments: ${n.comments}</p>
        <p>Downloads: ${n.downloads}</p>
      </div>
    </a>
  `).join("");o.innerHTML=r,i?i.refresh():i=new u(".gallery a")}function p(){const s=document.querySelector(".gallery");s.innerHTML=""}const y=document.querySelector(".search-form"),l=document.querySelector(".loader");y.addEventListener("submit",s=>{s.preventDefault();const o=s.currentTarget.elements.searchQuery.value.trim();if(!o){a.error({message:"Please enter a search query!"});return}l.classList.remove("hidden"),p(),m(o).then(r=>{h(r)}).catch(()=>{a.error({message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{l.classList.add("hidden")})});
//# sourceMappingURL=index.js.map
