import{Nt as e,St as t,fr as n,n as r,pr as i}from"./startup-C0d4c2dC.js";var a=`/assets/Sarabun-Bold-nl20RW0s.ttf`,o=`/assets/Sarabun-Regular-CeBv8KNi.ttf`,s,c=538.5,l=12,u=24,d=4,f=`${l}px "Sarabun", Tahoma, sans-serif`,p=new Intl.Segmenter(void 0,{granularity:`grapheme`});function m(e){return e.replace(/[\u200b\u200c\u200d\u2060\ufeff]/g,``)}async function h(e={}){x(e.signal),e.onProgress?.({phase:`loading`,completed:0,total:0}),await S(),x(e.signal);let t=n(`.print-preview-pages`);if(t===null)throw Error(`Print preview is not available`);let r=i(`.print-preview-page`,t.shadowRoot??t);if(r.length===0)throw Error(`Print preview has no pages`);let a=await z();x(e.signal),e.onProgress?.({phase:`loading`,completed:1,total:1});let o=E(),s=[];e.onProgress?.({phase:`serializing`,completed:0,total:r.length});for(let[t,n]of r.entries())await S(),x(e.signal),s.push(w(n,document.documentElement.lang,o).outerHTML),e.onProgress?.({phase:`serializing`,completed:t+1,total:r.length});return _(s,H,a,e)}async function g(e,t,n={}){return v(e,144,t,n)}function _(e,t,n,r){x(r.signal),r.onProgress?.({phase:`initializing`,completed:0,total:1});let i=y();return new Promise((a,o)=>{let s=!1,c,l=()=>{i.removeEventListener(`message`,d),i.removeEventListener(`error`,f),i.removeEventListener(`messageerror`,p),c!==void 0&&r.signal?.removeEventListener(`abort`,c),i.terminate()},u=e=>{s||(s=!0,l(),o(e))},d=e=>{e.data.type===`progress`?r.onProgress?.(e.data):e.data.type===`created`?(s=!0,l(),a(new Uint8Array(e.data.bytes))):e.data.type===`error`&&u(Error(e.data.message))},f=e=>{u(Error(e.message||`PDF worker failed`))},p=()=>{u(Error(`PDF worker could not receive its request`))};if(i.addEventListener(`message`,d),i.addEventListener(`error`,f),i.addEventListener(`messageerror`,p),c=()=>u(C()),r.signal?.aborted){c();return}r.signal?.addEventListener(`abort`,c,{once:!0});let m={type:`create`,pages:e,css:t,fonts:{regular:b(n.regular),bold:b(n.bold)}};try{i.postMessage(m,[m.fonts.regular,m.fonts.bold])}catch(e){u(e instanceof Error?e:Error(String(e)))}})}function v(e,t,n,r={}){x(r.signal),r.onProgress?.({phase:`initializing`,completed:0,total:1});let i=y();return new Promise((a,o)=>{let s=!1,c,l=()=>{i.removeEventListener(`message`,f),i.removeEventListener(`error`,p),i.removeEventListener(`messageerror`,m),c!==void 0&&r.signal?.removeEventListener(`abort`,c),i.terminate()},u=e=>{s||(s=!0,l(),o(e))},d=[],f=e=>{if(e.data.type===`progress`)r.onProgress?.(e.data);else if(e.data.type===`render-page`){let t=new Uint8Array(e.data.page);d[e.data.pageIndex]=t,n?.(t,e.data.pageIndex,e.data.pageCount)}else if(e.data.type===`render-complete`){let t=[];for(let n=0;n<e.data.pageCount;n+=1){let e=d[n];if(e===void 0){u(Error(`PDF worker did not render every page`));return}t.push(e)}s=!0,l(),a(t)}else e.data.type===`error`&&u(Error(e.data.message))},p=e=>{u(Error(e.message||`PDF worker failed`))},m=()=>{u(Error(`PDF worker could not receive its request`))};if(i.addEventListener(`message`,f),i.addEventListener(`error`,p),i.addEventListener(`messageerror`,m),c=()=>u(C()),r.signal?.aborted){c();return}r.signal?.addEventListener(`abort`,c,{once:!0});let h={type:`render`,bytes:b(e),dpi:t};try{i.postMessage(h,[h.bytes])}catch(e){u(e instanceof Error?e:Error(String(e)))}})}function y(){return new Worker(new URL(`/assets/pdfWorker-6WvU2ljr.js`,``+import.meta.url),{type:`module`})}function b(e){let t=new Uint8Array(e.byteLength);return t.set(e),t.buffer}function x(e){if(e?.aborted)throw C()}function S(){return new Promise(e=>window.setTimeout(e,0))}function C(){let e=Error(`PDF preparation was cancelled`);return e.name=`AbortError`,e}function w(e,t,r){let a=document.createElement(`div`);a.className=`pdf-document`;let o=document.createElement(`div`);o.className=`pdf-page`;let s=document.createElement(`div`);s.className=`pdf-page-content`;let l=e.shadowRoot??e,u=i(`.print-preview-section`,l),d=n(`.print-question-legend`,l),f=d===null?[]:Array.from(i(`.print-question-legend-item`,d.shadowRoot??d),e=>m(e.textContent?.replace(/\s+/g,` `).trim()??``)),p=u[0]===void 0?void 0:n(`.print-preview-section-heading`,u[0].shadowRoot??u[0]),h=m(p?.textContent?.replace(/\s+/g,` `).trim()??``),g=c,_=D(f,g,r);if(_.length>0){let e=document.createElement(`div`);e.className=`pdf-legend`,e.lang=t,e.style.color=`#767676`,e.style.height=`${Math.max(0,_.length-1)*16.2}px`;for(let t of _){let n=document.createElement(`div`);n.className=`pdf-legend-line`,n.textContent=t,n.style.marginLeft=`${Math.max(0,g-O(t,r)+.75)}px`,e.append(n)}s.append(e)}if(h!==``){let e=document.createElement(`div`);e.className=`pdf-heading`,e.textContent=h,e.lang=p?.lang??t,s.append(e)}for(let[e,t]of u.entries()){let a=document.createElement(`div`);a.className=`pdf-section`;let o=t.shadowRoot??t,c=n(`.print-preview-section-heading`,o);if(c!==null&&(e!==0||h===``)){let e=document.createElement(`div`);e.className=`pdf-question pdf-heading`,e.textContent=m(c.textContent?.replace(/\s+/g,` `).trim()??``),e.lang=c.lang,a.append(e)}for(let e of i(`.print-preview-question-card`,o)){let t=document.createElement(`div`);t.className=`pdf-question`;let o=e.shadowRoot??e,s=n(`h2`,o),c=s===null?null:n(`.print-question-type`,s.shadowRoot??s),l=s===null?null:n(`.print-question-text`,s.shadowRoot??s),u=c?.textContent?.trim()??``,d=l?.textContent?.trim()??``;t.lang=s?.lang??``,k(t,u,d,r,5);let f=n(`.print-reference-answer`,o);if(f!==null){let e=document.createElement(`div`);e.className=`pdf-answer`,e.lang=f.lang;let n=f.shadowRoot??f,i=n.querySelector(`span`)?.textContent?.trim()??``;k(e,i,T(n).replace(/\s+/g,` `).trim().slice(i.length).replace(/^\s+/,``),r),t.append(e)}else{let e=document.createElement(`div`);e.className=`pdf-answer-lines`;let n=i(`.print-answer-lines span`,o).length;for(let t=0;t<n;t+=1){let t=document.createElement(`div`);t.className=`pdf-answer-line`,e.append(t)}t.append(e)}a.append(t)}s.append(a)}o.append(s);let v=n(`.print-page-number`,l);if(v!==null){let e=document.createElement(`div`);e.className=`pdf-page-number`,e.lang=t,e.textContent=m(v.textContent?.replace(/\s+/g,` `).trim()??``);let n=O(e.textContent,r),i=n>35?.75:1.18;e.style.marginLeft=`${c-n+i}px`,o.append(e)}return a.append(o),a}function T(e){let t=``;for(let n of Array.from(e.childNodes)){if(n.nodeType===Node.TEXT_NODE){t+=n.nodeValue??``;continue}!(n instanceof Element)||n.localName===`style`||n.localName===`script`||(t+=T(n.shadowRoot??n))}return t}function E(){let e=document.createElement(`canvas`).getContext(`2d`);return e!==null&&(e.font=f),{context:e,widths:new Map}}function D(e,t,n){if(n.context===null)return[e.join(`   `)];let r=[],i=``;for(let a of e){let e=i===``?a:`${i}   ${a}`;i!==``&&O(e,n)>t?(r.push(i),i=a):i=e}return i!==``&&r.push(i),r}function O(e,t){let n=t.widths.get(e);if(n!==void 0)return n;let r=t.context?.measureText(e).width??0;return t.widths.set(e,r),r}function k(e,t,n,r,i){let a=N(`${t.length===0?``:`${t} `}${n}`,r),o=i!==void 0&&a.length>i,s=!o||i===void 0?a:[...a.slice(0,i-1),A(a[i-1]??``,r)];for(let[t,n]of s.entries()){let i=document.createElement(`div`);i.className=`pdf-question-line`;let a=o&&t===s.length-1?`${n}…`:n;e.lang===`th`?j(i,a,r):i.textContent=m(a),e.append(i)}}function A(e,t){let n=[...p.segment(e)].map(({segment:e})=>e);for(;n.length>0&&O(`${n.join(``)}…`,t)>c;)n.pop();return n.join(``)}function j(e,t,n){let r=m(t),i=O(r,n),a=document.createElement(`canvas`),o=a.getContext(`2d`);if(o===null){e.textContent=r;return}o.font=f;let s=o.measureText(r),c=Math.min(0,s.actualBoundingBoxLeft),p=Math.max(1,Math.ceil(Math.max(i,s.actualBoundingBoxRight)-c+8));a.width=p*2,a.height=48,o.scale(2,2),o.font=f,o.fillStyle=`#000000`,o.textBaseline=`alphabetic`;let h=Math.max(s.actualBoundingBoxAscent,s.fontBoundingBoxAscent),g=Math.max(s.actualBoundingBoxDescent,s.fontBoundingBoxDescent),_=Math.min(Math.max(l,Math.ceil(h)+d),u-Math.ceil(g)-d);o.fillText(r,d-c,_);let v=document.createElement(`img`);v.className=`pdf-thai-line-image`,v.alt=``,v.setAttribute(`aria-hidden`,`true`),v.src=a.toDataURL(`image/png`),v.style.width=`${p}px`,v.style.height=`${u}px`,v.style.marginInlineStart=`-4px`;let y=document.createElement(`span`);y.className=`pdf-thai-line-text`,y.textContent=r,e.append(v,y)}function M(e){let t=[];for(let n of e.trim().split(/\s+/).filter(e=>e.length>0)){let e=n.split(/(?<=\u200b)/);for(let[n,r]of e.entries())t.push({text:r,joiner:n===0?` `:``})}return t}function N(e,t){if(t.context===null)return[e];let n=[];for(let r of e.split(/\r?\n/)){let e=``;for(let{text:i,joiner:a}of M(r)){if(O(i,t)>c){e!==``&&(n.push(e),e=``);for(let{segment:r}of p.segment(i)){let i=`${e}${r}`;e!==``&&O(i,t)>c?(n.push(e),e=r):e=i}continue}let r=e===``?i:`${e}${a}${i}`;e!==``&&O(r,t)>c?(n.push(e),e=i):e=r}(e!==``||n.length===0)&&n.push(e)}return n}async function P(n){let i=await t(),a=await e(r(`/api/print`),{method:`POST`,headers:{"content-type":`application/json`},body:JSON.stringify({pdf:V(n),key:i.access_key??``}),timeoutMs:3e4});if(!a.ok)throw Error(`Print request failed with HTTP ${a.status}`)}function F(e){if(e.length===0)return Promise.resolve(!1);let t=L(e),n=URL.createObjectURL(new Blob([t],{type:`text/html;charset=utf-8`})),r=window.open(n,`_blank`);return r===null?(URL.revokeObjectURL(n),Promise.resolve(!1)):(r.opener=null,new Promise(e=>{let t=!1,i=!1,a=window.setTimeout(()=>o(!1),3e4),o=i=>{if(!t){if(t=!0,window.clearTimeout(a),r.removeEventListener(`load`,s),URL.revokeObjectURL(n),!i){r.close(),e(!1);return}try{r.focus(),r.print(),e(!0)}catch{r.close(),e(!1)}}},s=()=>{if(r.closed||r.location.href!==n||i)return;i=!0;let e=Array.from(r.document.images);if(e.length===0){o(!1);return}Promise.all(e.map(I)).then(()=>o(!0),()=>o(!1))};r.addEventListener(`load`,s)}))}function I(e){return e.complete?e.naturalWidth===0?Promise.reject(Error(`A print page image failed to load`)):typeof e.decode==`function`?e.decode():Promise.resolve():new Promise((t,n)=>{e.addEventListener(`load`,()=>{e.naturalWidth===0?n(Error(`A print page image failed to load`)):typeof e.decode==`function`?e.decode().then(t,n):t()},{once:!0}),e.addEventListener(`error`,()=>n(Error(`A print page image failed to load`)),{once:!0})})}function L(e){let t=e.map((e,t)=>`
    <section class="print-page">
      <img src="${R(e)}" alt="Print page ${t+1}">
    </section>
  `).join(``);return`<!doctype html>
<html lang="${R(document.documentElement.lang)}">
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
</html>`}function R(e){return e.replaceAll(`&`,`&amp;`).replaceAll(`"`,`&quot;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`)}async function z(){return s??=Promise.all([B(o),B(a)]).then(([e,t])=>({regular:e,bold:t})),s}async function B(t){let n=await e(t);if(!n.ok)throw Error(`Could not load PDF font: ${n.status}`);return new Uint8Array(await n.arrayBuffer())}function V(e){let t=``,n=32768;for(let r=0;r<e.length;r+=n)t+=String.fromCharCode(...e.subarray(r,r+n));return window.btoa(t)}var H=`
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
`;export{h as createReadingPdf,F as openRenderedReadingPagesForPrinting,P as printReadingToCups,g as renderReadingPdfPages};