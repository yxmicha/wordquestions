import{i as e,r as t}from"./shadowDom-CuHwaBUO.js";import{n}from"./apiClient-C1w_3IRo.js";import{n as r}from"./settings-CFXNMaT1.js";import{t as i}from"./apiUrl-8x45TCk8.js";var a=`/assets/Sarabun-Bold-nl20RW0s.ttf`,o=`/assets/Sarabun-Regular-CeBv8KNi.ttf`,s,c=538.5,l=12,u=24,d=4,f=`${l}px "Sarabun", Tahoma, sans-serif`,p=new Intl.Segmenter(void 0,{granularity:`grapheme`});async function m(n={}){b(n.signal),n.onProgress?.({phase:`loading`,completed:0,total:0}),await x(),b(n.signal);let r=t(`.print-preview-pages`);if(r===null)throw Error(`Print preview is not available`);let i=e(`.print-preview-page`,r.shadowRoot??r);if(i.length===0)throw Error(`Print preview has no pages`);let a=await L();b(n.signal),n.onProgress?.({phase:`loading`,completed:1,total:1});let o=T(),s=[];n.onProgress?.({phase:`serializing`,completed:0,total:i.length});for(let[e,t]of i.entries())await x(),b(n.signal),s.push(C(t,document.documentElement.lang,o).outerHTML),n.onProgress?.({phase:`serializing`,completed:e+1,total:i.length});return g(s,B,a,n)}async function h(e,t,n={}){return _(e,144,t,n)}function g(e,t,n,r){b(r.signal),r.onProgress?.({phase:`initializing`,completed:0,total:1});let i=v();return new Promise((a,o)=>{let s=!1,c,l=()=>{i.removeEventListener(`message`,d),i.removeEventListener(`error`,f),i.removeEventListener(`messageerror`,p),c!==void 0&&r.signal?.removeEventListener(`abort`,c),i.terminate()},u=e=>{s||(s=!0,l(),o(e))},d=e=>{e.data.type===`progress`?r.onProgress?.(e.data):e.data.type===`created`?(s=!0,l(),a(new Uint8Array(e.data.bytes))):e.data.type===`error`&&u(Error(e.data.message))},f=e=>{u(Error(e.message||`PDF worker failed`))},p=()=>{u(Error(`PDF worker could not receive its request`))};if(i.addEventListener(`message`,d),i.addEventListener(`error`,f),i.addEventListener(`messageerror`,p),c=()=>u(S()),r.signal?.aborted){c();return}r.signal?.addEventListener(`abort`,c,{once:!0});let m={type:`create`,pages:e,css:t,fonts:{regular:y(n.regular),bold:y(n.bold)}};try{i.postMessage(m,[m.fonts.regular,m.fonts.bold])}catch(e){u(e instanceof Error?e:Error(String(e)))}})}function _(e,t,n,r={}){b(r.signal),r.onProgress?.({phase:`initializing`,completed:0,total:1});let i=v();return new Promise((a,o)=>{let s=!1,c,l=()=>{i.removeEventListener(`message`,f),i.removeEventListener(`error`,p),i.removeEventListener(`messageerror`,m),c!==void 0&&r.signal?.removeEventListener(`abort`,c),i.terminate()},u=e=>{s||(s=!0,l(),o(e))},d=[],f=e=>{if(e.data.type===`progress`)r.onProgress?.(e.data);else if(e.data.type===`render-page`){let t=new Uint8Array(e.data.page);d[e.data.pageIndex]=t,n?.(t,e.data.pageIndex,e.data.pageCount)}else if(e.data.type===`render-complete`){let t=[];for(let n=0;n<e.data.pageCount;n+=1){let e=d[n];if(e===void 0){u(Error(`PDF worker did not render every page`));return}t.push(e)}s=!0,l(),a(t)}else e.data.type===`error`&&u(Error(e.data.message))},p=e=>{u(Error(e.message||`PDF worker failed`))},m=()=>{u(Error(`PDF worker could not receive its request`))};if(i.addEventListener(`message`,f),i.addEventListener(`error`,p),i.addEventListener(`messageerror`,m),c=()=>u(S()),r.signal?.aborted){c();return}r.signal?.addEventListener(`abort`,c,{once:!0});let h={type:`render`,bytes:y(e),dpi:t};try{i.postMessage(h,[h.bytes])}catch(e){u(e instanceof Error?e:Error(String(e)))}})}function v(){return new Worker(new URL(`/assets/pdfWorker-6WvU2ljr.js`,``+import.meta.url),{type:`module`})}function y(e){let t=new Uint8Array(e.byteLength);return t.set(e),t.buffer}function b(e){if(e?.aborted)throw S()}function x(){return new Promise(e=>window.setTimeout(e,0))}function S(){let e=Error(`PDF preparation was cancelled`);return e.name=`AbortError`,e}function C(n,r,i){let a=document.createElement(`div`);a.className=`pdf-document`;let o=document.createElement(`div`);o.className=`pdf-page`;let s=document.createElement(`div`);s.className=`pdf-page-content`;let l=n.shadowRoot??n,u=e(`.print-preview-section`,l),d=t(`.print-question-legend`,l),f=d===null?[]:Array.from(e(`.print-question-legend-item`,d.shadowRoot??d),e=>e.textContent?.replace(/\s+/g,` `).trim()??``),p=u[0]===void 0?void 0:t(`.print-preview-section-heading`,u[0].shadowRoot??u[0]),m=p?.textContent?.replace(/\s+/g,` `).trim()??``,h=c,g=E(f,h,i);if(g.length>0){let e=document.createElement(`div`);e.className=`pdf-legend`,e.lang=r,e.style.color=`#767676`,e.style.height=`${Math.max(0,g.length-1)*16.2}px`;for(let t of g){let n=document.createElement(`div`);n.className=`pdf-legend-line`,n.textContent=t,n.style.marginLeft=`${Math.max(0,h-D(t,i)+.75)}px`,e.append(n)}s.append(e)}if(m!==``){let e=document.createElement(`div`);e.className=`pdf-heading`,e.textContent=m,e.lang=p?.lang??r,s.append(e)}for(let[n,r]of u.entries()){let a=document.createElement(`div`);a.className=`pdf-section`;let o=r.shadowRoot??r,c=t(`.print-preview-section-heading`,o);if(c!==null&&(n!==0||m===``)){let e=document.createElement(`div`);e.className=`pdf-question pdf-heading`,e.textContent=c.textContent?.replace(/\s+/g,` `).trim()??``,e.lang=c.lang,a.append(e)}for(let n of e(`.print-preview-question-card`,o)){let r=document.createElement(`div`);r.className=`pdf-question`;let o=n.shadowRoot??n,s=t(`h2`,o),c=s===null?null:t(`.print-question-type`,s.shadowRoot??s),l=s===null?null:t(`.print-question-text`,s.shadowRoot??s),u=c?.textContent?.trim()??``,d=l?.textContent?.trim()??``;r.lang=s?.lang??``,O(r,u,d,i,5);let f=t(`.print-reference-answer`,o);if(f!==null){let e=document.createElement(`div`);e.className=`pdf-answer`,e.lang=f.lang;let t=f.shadowRoot??f,n=t.querySelector(`span`)?.textContent?.trim()??``;O(e,n,w(t).replace(/\s+/g,` `).trim().slice(n.length).replace(/^\s+/,``),i),r.append(e)}else{let t=document.createElement(`div`);t.className=`pdf-answer-lines`;let n=e(`.print-answer-lines span`,o).length;for(let e=0;e<n;e+=1){let e=document.createElement(`div`);e.className=`pdf-answer-line`,t.append(e)}r.append(t)}a.append(r)}s.append(a)}o.append(s);let _=t(`.print-page-number`,l);if(_!==null){let e=document.createElement(`div`);e.className=`pdf-page-number`,e.lang=r,e.textContent=_.textContent?.replace(/\s+/g,` `).trim()??``;let t=D(e.textContent,i),n=t>35?.75:1.18;e.style.marginLeft=`${c-t+n}px`,o.append(e)}return a.append(o),a}function w(e){let t=``;for(let n of Array.from(e.childNodes)){if(n.nodeType===Node.TEXT_NODE){t+=n.nodeValue??``;continue}!(n instanceof Element)||n.localName===`style`||n.localName===`script`||(t+=w(n.shadowRoot??n))}return t}function T(){let e=document.createElement(`canvas`).getContext(`2d`);return e!==null&&(e.font=f),{context:e,widths:new Map}}function E(e,t,n){if(n.context===null)return[e.join(`   `)];let r=[],i=``;for(let a of e){let e=i===``?a:`${i}   ${a}`;i!==``&&D(e,n)>t?(r.push(i),i=a):i=e}return i!==``&&r.push(i),r}function D(e,t){let n=t.widths.get(e);if(n!==void 0)return n;let r=t.context?.measureText(e).width??0;return t.widths.set(e,r),r}function O(e,t,n,r,i){let a=j(`${t.length===0?``:`${t} `}${n}`,r),o=i!==void 0&&a.length>i,s=!o||i===void 0?a:[...a.slice(0,i-1),k(a[i-1]??``,r)];for(let[t,n]of s.entries()){let i=document.createElement(`div`);i.className=`pdf-question-line`;let a=o&&t===s.length-1?`${n}…`:n;e.lang===`th`?A(i,a,r):i.textContent=a,e.append(i)}}function k(e,t){let n=[...p.segment(e)].map(({segment:e})=>e);for(;n.length>0&&D(`${n.join(``)}…`,t)>c;)n.pop();return n.join(``)}function A(e,t,n){let r=D(t,n),i=document.createElement(`canvas`),a=i.getContext(`2d`);if(a===null){e.textContent=t;return}a.font=f;let o=a.measureText(t),s=Math.min(0,o.actualBoundingBoxLeft),c=Math.max(r,o.actualBoundingBoxRight),p=Math.max(1,Math.ceil(c-s+8));i.width=p*2,i.height=48,a.scale(2,2),a.font=f,a.fillStyle=`#000000`,a.textBaseline=`alphabetic`;let m=Math.max(o.actualBoundingBoxAscent,o.fontBoundingBoxAscent),h=Math.max(o.actualBoundingBoxDescent,o.fontBoundingBoxDescent),g=Math.min(Math.max(l,Math.ceil(m)+d),u-Math.ceil(h)-d);a.fillText(t,d-s,g);let _=document.createElement(`img`);_.className=`pdf-thai-line-image`,_.alt=``,_.setAttribute(`aria-hidden`,`true`),_.src=i.toDataURL(`image/png`),_.style.width=`${p}px`,_.style.height=`${u}px`,_.style.marginInlineStart=`-4px`;let v=document.createElement(`span`);v.className=`pdf-thai-line-text`,v.textContent=t,e.append(_,v)}function j(e,t){if(t.context===null)return[e];let n=[];for(let r of e.split(/\r?\n/)){let e=``;for(let i of r.trim().split(/\s+/).filter(e=>e.length>0)){if(D(i,t)>c){e!==``&&(n.push(e),e=``);for(let{segment:r}of p.segment(i)){let i=`${e}${r}`;e!==``&&D(i,t)>c?(n.push(e),e=r):e=i}continue}let r=e===``?i:`${e} ${i}`;e!==``&&D(r,t)>c?(n.push(e),e=i):e=r}(e!==``||n.length===0)&&n.push(e)}return n}async function M(e){let t=await r(),a=await n(i(`/api/print`),{method:`POST`,headers:{"content-type":`application/json`},body:JSON.stringify({pdf:z(e),key:t.access_key??``}),timeoutMs:3e4});if(!a.ok)throw Error(`Print request failed with HTTP ${a.status}`)}function N(e){if(e.length===0)return Promise.resolve(!1);let t=F(e),n=URL.createObjectURL(new Blob([t],{type:`text/html;charset=utf-8`})),r=window.open(n,`_blank`);return r===null?(URL.revokeObjectURL(n),Promise.resolve(!1)):(r.opener=null,new Promise(e=>{let t=!1,i=!1,a=window.setTimeout(()=>o(!1),3e4),o=i=>{if(!t){if(t=!0,window.clearTimeout(a),r.removeEventListener(`load`,s),URL.revokeObjectURL(n),!i){r.close(),e(!1);return}try{r.focus(),r.print(),e(!0)}catch{r.close(),e(!1)}}},s=()=>{if(r.closed||r.location.href!==n||i)return;i=!0;let e=Array.from(r.document.images);if(e.length===0){o(!1);return}Promise.all(e.map(P)).then(()=>o(!0),()=>o(!1))};r.addEventListener(`load`,s)}))}function P(e){return e.complete?e.naturalWidth===0?Promise.reject(Error(`A print page image failed to load`)):typeof e.decode==`function`?e.decode():Promise.resolve():new Promise((t,n)=>{e.addEventListener(`load`,()=>{e.naturalWidth===0?n(Error(`A print page image failed to load`)):typeof e.decode==`function`?e.decode().then(t,n):t()},{once:!0}),e.addEventListener(`error`,()=>n(Error(`A print page image failed to load`)),{once:!0})})}function F(e){let t=e.map((e,t)=>`
    <section class="print-page">
      <img src="${I(e)}" alt="Print page ${t+1}">
    </section>
  `).join(``);return`<!doctype html>
<html lang="${I(document.documentElement.lang)}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Print preview</title>
    <style>
      @page { size: A4 portrait; margin: 0; }
      * { box-sizing: border-box; }
      html, body { margin: 0; min-width: 0; background: #ffffff; }
      .print-page { width: 210mm; height: 297mm; break-after: page; page-break-after: always; }
      .print-page:last-child { break-after: auto; page-break-after: auto; }
      .print-page img { display: block; width: 100%; height: 100%; object-fit: contain; }
      @media screen {
        body { display: grid; justify-content: center; gap: 16px; padding: 16px; background: #eeeeee; }
        .print-page { width: min(100%, 720px); height: auto; aspect-ratio: 210 / 297; background: #ffffff; box-shadow: 0 1px 8px #0003; }
      }
      @media print {
        html, body { background: #ffffff; }
        .print-page { margin: 0; box-shadow: none; }
      }
    </style>
  </head>
  <body>${t}</body>
</html>`}function I(e){return e.replaceAll(`&`,`&amp;`).replaceAll(`"`,`&quot;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`)}async function L(){return s??=Promise.all([R(o),R(a)]).then(([e,t])=>({regular:e,bold:t})),s}async function R(e){let t=await n(e);if(!t.ok)throw Error(`Could not load PDF font: ${t.status}`);return new Uint8Array(await t.arrayBuffer())}function z(e){let t=``,n=32768;for(let r=0;r<e.length;r+=n)t+=String.fromCharCode(...e.subarray(r,r+n));return window.btoa(t)}var B=`
@page { size: A4; margin: 10mm; }
html, body { margin: 0; min-width: 0; background: #ffffff; }
.pdf-document { display: block; color: #000000; background: #ffffff; }
.pdf-page {
  display: block;
  position: relative;
  width: ${c}px;
  margin-top: 0;
  margin-right: -47.5px;
  margin-left: -48px;
}
/* Scale the Oxide canvas to A4, then offset its fixed 20mm canvas origin. */
.pdf-page { padding-top: 18px; }
.pdf-page-content { display: block; width: ${c}px; transform: translateY(216.33px); }
.pdf-legend {
  display: block;
  width: ${c}px;
  margin: 0 0 1.5px;
  padding-left: 0;
  font-family: "Sarabun";
  font-size: 12px;
  line-height: 1.35;
  text-align: right;
}
.pdf-legend-line {
  display: block;
  white-space: nowrap;
}
.pdf-section { display: block; margin: 0; }
.pdf-section + .pdf-section { margin-top: 8.75px; }
.pdf-heading {
  display: block;
  margin: 0;
  color: #000000;
  font-family: "Sarabun";
  font-size: 12px;
  font-weight: 400;
  line-height: 1.35;
}
.pdf-heading.pdf-question { margin-bottom: 2px; }
.pdf-question {
  display: block;
  width: ${c}px;
  max-width: ${c}px;
  margin: 0 0 4px;
  color: #000000;
  font-family: "Sarabun";
  font-size: 12px;
  font-weight: 400;
  line-height: 1.35;
  white-space: normal;
  overflow-wrap: anywhere;
}
.pdf-question.pdf-legend { color: #767676; }
.pdf-question-line { display: block; position: relative; height: 16.2px; margin: 0; padding: 0; line-height: 16.2px; white-space: nowrap; }
/* Thai combining marks need the same double line-height as the browser print layout. */
.pdf-question[lang="th"] .pdf-question-line, .pdf-answer[lang="th"] .pdf-question-line { height: ${u}px; line-height: ${u}px; }
.pdf-thai-line-image { display: block; }
.pdf-thai-line-text { position: absolute; inset: 0; color: #ffffff; white-space: nowrap; }
.pdf-heading[lang="th"], .pdf-question[lang="th"], .pdf-answer[lang="th"] { font-family: "Sarabun", "Sarabun Thai"; }
.pdf-answer-lines { display: block; padding-top: 8px; }
.pdf-answer-line { display: block; width: ${c}px; height: 1px; margin: 9px 0 0; background-color: #909090; font-size: 0; line-height: 0; }
.pdf-answer-line + .pdf-answer-line { margin-top: 17px; }
.pdf-answer { display: block; }
.pdf-page-number {
  display: block;
  width: 32px;
  color: #666666;
  font-family: "Sarabun";
  font-size: 12px;
  line-height: 1;
  white-space: nowrap;
}
.pdf-page-number[lang="th"] { font-family: "Sarabun", "Sarabun Thai"; }
`;export{m as createReadingPdf,N as openRenderedReadingPagesForPrinting,M as printReadingToCups,h as renderReadingPdfPages};