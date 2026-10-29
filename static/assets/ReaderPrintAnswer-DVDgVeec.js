import{Nt as e,St as t,W as n,at as r,et as i,it as a,lt as o,mt as s,nt as c,tt as l,yt as u}from"./shadowSupport-DjUPibfs.js";var d=s(`<reader-print-answer class=print-reference-answer>`,1),f=s(`<style>
:host {
  box-sizing: border-box;
  display: block;
  min-inline-size: 0;
  margin: 0;
  color: var(--color-ink);
  font-size: var(--text-body);
  font-weight: 400;
  line-height: 1.4;
  white-space: pre-wrap;
}

*, *::before, *::after {
  box-sizing: inherit;
}

:host([lang="th"]) {
  line-height: 2;
}

:host > span {
  font-weight: 700;
}

@media print {
  :host {
    color: #000000;
    font-size: 16px;
    line-height: 22px;
  }

  :host([lang="th"]) {
    line-height: 32px;
  }
}
        `),p=s(`<span><!$><!/>:`),m=``,h=``,g=`en`;function _(t){var n=l(d);return n._$owner=e(),i(()=>({e:t.contentLanguage,t:t.answerLabel,a:t.answerText,o:t.contentLanguage}),({e,t,a:r,o:i},a)=>{e!==a?.e&&o(n,`lang`,e),t!==a?.t&&(n.answerLabel=t),r!==a?.a&&(n.answerText=r),i!==a?.o&&(n.contentLanguage=i)}),n}function v(){customElements.get(`reader-print-answer`)===void 0&&n(`reader-print-answer`,{answerLabel:m,answerText:h,contentLanguage:g},e=>[l(f),t(u,{get when(){return e.answerLabel.length>0},get children(){return[(()=>{var t=l(p),n=t.firstChild,[r,i]=c(n.nextSibling);return a(t,()=>e.answerLabel,r,i),t})(),` `]}}),r(()=>e.answerText)])}export{v as n,_ as t};