(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
  <div class="advice-container">
    <h2 class="advice-title"></h2>
    <p class="advice-content"></p>
    <picture>
      <source media="(min-width:377px)" srcset="./images/pattern-divider-desktop.svg">
      <source media="(max-width:376px)" srcset="./images/pattern-divider-mobile.svg">
      <img src="./images/pattern-divider-desktop.svg" alt="divider" class="advice-divider">
    </picture>
    <div class="advice-btn">
      <img src="./images/icon-dice.svg" alt="dice button">
    </div>
  </div>
`;async function s(){const i=await(await fetch("https://api.adviceslip.com/advice")).json();document.querySelector(".advice-title").innerText=`Advice # ${i.slip.id}`,document.querySelector(".advice-content").innerText=`"${i.slip.advice}"`}s();const d=document.querySelector(".advice-btn");d.addEventListener("click",()=>{s()});
