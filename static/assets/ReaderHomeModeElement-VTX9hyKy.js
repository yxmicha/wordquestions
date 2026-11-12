import{Cn as e,Cr as t,Dn as n,Dr as r,Er as i,Kr as a,Nr as o,On as s,Pr as c,Rr as l,Tn as u,Tr as d,Yt as f,kr as p,mr as m,s as h}from"./startup-Bf450457.js";var g=`${h}
:host(.home-mode) {
  display: block;
  min-inline-size: 0;
}

.home {
  display: grid;
  gap: var(--space-10);
  inline-size: min(100%, var(--content-max-inline-size));
  margin-inline: auto;
  padding: var(--space-8) var(--space-4) var(--space-6);
  line-height: 1.65;
}

.home h1,
.home h2,
.home h3 {
  line-height: 1.4;
}

.home h2 {
  margin: 0;
  font-size: var(--text-h2);
}

.home p {
  margin: 0;
}

.home-hero {
  display: grid;
  justify-items: start;
  gap: var(--space-4);
}

.home-hero p {
  max-inline-size: 34rem;
  color: var(--color-ink-muted);
  font-size: var(--text-body-lg);
}

.home-hero reader-button {
  margin-block-start: var(--space-2);
}

.home-section {
  display: grid;
  gap: var(--space-4);
}

.home-section > p {
  color: var(--color-ink-muted);
}

/* Annotated sample of the study screen. It is decorative; the numbered list below carries the meaning. */
.sample-screen {
  display: grid;
  gap: 0;
  border: 1px solid var(--color-rule);
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--color-paper);
  pointer-events: none;
  user-select: none;
}

.sample-passage {
  display: grid;
  gap: var(--space-2);
  padding: var(--space-4);
}

.sample-reference {
  font-size: 1.25rem;
  font-weight: 700;
}

.sample-line {
  display: block;
  block-size: 0.55rem;
  border-radius: var(--radius-pill);
  background: var(--color-paper-muted);
}

.sample-line.is-short {
  inline-size: 62%;
}

.sample-sheet {
  display: grid;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4) var(--space-4);
  border-block-start: 1px solid var(--color-rule);
  background: var(--color-paper);
  box-shadow: 0 -4px 12px var(--color-shadow-12);
}

.sample-row {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: var(--space-3);
  align-items: start;
}

.sample-row > .kind-label {
  justify-self: end;
  padding-block-start: 0.35rem;
}

.sample-row > .badge {
  margin-block-start: 0.125rem;
}

.kind-label {
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1;
}

.kind-label.is-observation {
  color: var(--color-question-observation);
}

.sample-question {
  font-size: var(--text-body-lg);
}

.sample-field {
  padding-block: var(--space-2);
  border-block-end: 2px solid var(--color-rule);
  color: var(--color-ink-muted);
}

.sample-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.sample-button {
  display: inline-grid;
  place-items: center;
  min-block-size: var(--action-min);
  padding-inline: var(--space-4);
  border: 1px solid var(--color-rule);
  border-radius: var(--radius-sm);
  background: var(--color-paper);
  color: var(--color-ink-muted);
  font-weight: 700;
  box-shadow: 0 3px 1px -2px var(--color-shadow-20),
    0 2px 2px var(--color-shadow-14),
    0 1px 5px var(--color-shadow-12);
}

.sample-button.is-easy {
  border-color: var(--color-difficulty-easy);
  background: var(--color-difficulty-easy);
  color: var(--color-on-dark);
}

.sample-button.is-hard {
  border-color: var(--color-difficulty-hard);
  background: var(--color-difficulty-hard);
  color: var(--color-on-dark);
}

.badge {
  display: inline-grid;
  place-items: center;
  flex: 0 0 auto;
  inline-size: 1.5rem;
  block-size: 1.5rem;
  border-radius: var(--radius-pill);
  background: var(--color-primary);
  color: var(--color-paper);
  font-size: 0.8125rem;
  font-weight: 700;
  line-height: 1;
}

.callouts {
  display: grid;
  gap: var(--space-3);
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: callout;
}

.callouts li {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--space-3);
  align-items: start;
  counter-increment: callout;
}

.callouts li::before {
  content: counter(callout);
  display: inline-grid;
  place-items: center;
  inline-size: 1.5rem;
  block-size: 1.5rem;
  margin-block-start: 0.125rem;
  border-radius: var(--radius-pill);
  background: var(--color-primary);
  color: var(--color-paper);
  font-size: 0.8125rem;
  font-weight: 700;
  line-height: 1;
}

.kinds {
  display: grid;
  gap: var(--space-4);
}

.kind {
  display: grid;
  gap: var(--space-3);
  padding: var(--space-4);
  border: 1px solid var(--color-rule);
  border-inline-start: var(--space-1) solid var(--kind-color);
  border-radius: var(--radius-md);
  background: var(--color-paper);
}

.kind-observation {
  --kind-color: var(--color-question-observation);
}

.kind-interpretation {
  --kind-color: var(--color-question-interpretation);
}

.kind-application {
  --kind-color: var(--color-question-application);
}

.kind h3 {
  display: grid;
  margin: 0;
  color: var(--kind-color);
  font-size: var(--text-body-lg);
}

.kind h3 span {
  color: var(--color-ink);
  font-size: var(--text-body);
  font-weight: 400;
}

.kind > p {
  color: var(--color-ink-muted);
}

.kind-sample {
  position: relative;
  display: grid;
  gap: var(--space-1);
  padding: var(--space-6) var(--space-3) var(--space-3);
  border-radius: var(--radius-sm);
  background: var(--color-paper-muted);
}

.kind-sample .kind-label {
  position: absolute;
  inset-block-start: var(--space-2);
  inset-inline-end: var(--space-3);
  color: var(--kind-color);
}

.kind-sample .caption {
  color: var(--color-ink-muted);
  font-size: 0.75rem;
  font-weight: 700;
}

.kind-sample .caption + p {
  margin-block-end: var(--space-2);
}

.kind-sample .answer {
  font-style: italic;
}

.modes {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-3);
  margin: 0;
  padding: 0;
  list-style: none;
}

.mode {
  display: grid;
  align-content: start;
  justify-items: start;
  gap: var(--space-2);
  padding: var(--space-4);
  border-radius: var(--radius-md);
  background: var(--color-paper-muted);
}

.mode.is-current {
  background: var(--color-active);
  color: var(--color-on-active);
}

.mode-icon {
  display: grid;
  place-items: center;
  inline-size: var(--action-min);
  block-size: var(--action-min);
  border-radius: var(--radius-pill);
  background: var(--color-paper);
  color: var(--color-ink);
}

.mode strong {
  font-size: var(--text-body);
}

.mode span {
  color: var(--color-ink-muted);
  font-size: 0.9375rem;
  line-height: 1.5;
}

.mode.is-current span {
  color: var(--color-on-active);
}

.tips {
  display: grid;
  gap: var(--space-3);
  margin: 0;
  padding: var(--space-4) var(--space-4) var(--space-4) var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-paper-muted);
}

.tips li::marker {
  color: var(--color-ink-muted);
}

@media (min-width: 640px) {
  .home {
    padding-block-start: var(--space-12);
  }

  .kinds {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .modes {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media print {
  :host(.home-mode) {
    display: none !important;
  }
}
`,_=l(`<style>`),v=l(`<article class=home><header class=home-hero><h1></h1><p></p><!$><!/></header><section class=home-section aria-labelledby=home-flow-heading><h2 id=home-flow-heading></h2><p></p><div class=sample-screen aria-hidden=true><div class=sample-passage><span class=sample-reference></span><span class=sample-line></span><span class=sample-line></span><span class="sample-line is-short"></span></div><div class=sample-sheet><div class=sample-row><span class=badge>1</span><span class="kind-label is-observation"></span></div><div class=sample-row><span class=badge>2</span><p class=sample-question></p></div><div class=sample-row><span class=badge>3</span><div class=sample-field></div></div><div class=sample-row><span class=badge>4</span><div class=sample-actions><span class="sample-button is-easy"></span><span class="sample-button is-hard"></span><span class=sample-button></span></div></div></div></div><ol class=callouts></ol></section><section class=home-section aria-labelledby=home-kinds-heading><h2 id=home-kinds-heading></h2><p></p><div class=kinds></div><p></p></section><section class=home-section aria-labelledby=home-modes-heading><h2 id=home-modes-heading></h2><p></p><ul class=modes><!$><!/><!$><!/><!$><!/><!$><!/></ul></section><section class=home-section aria-labelledby=home-tips-heading><h2 id=home-tips-heading></h2><ul class=tips>`),y=l(`<li>`),b=l(`<article><h3><!$><!/><span></span></h3><p></p><div class=kind-sample><span class=kind-label></span><span class=caption></span><p></p><span class=caption></span><p class=answer>`),x=l(`<li><span class=mode-icon></span><strong></strong><span>`),S=void 0,C=()=>void 0,w=[{kind:`observation`,name:`question-kind-observation`,ask:`home-kind-observation-ask`,help:`home-kind-observation-help`,question:`home-sample-observation-question`,answer:`home-sample-observation-answer`},{kind:`interpretation`,name:`question-kind-interpretation`,ask:`home-kind-interpretation-ask`,help:`home-kind-interpretation-help`,question:`home-sample-interpretation-question`,answer:`home-sample-interpretation-answer`},{kind:`application`,name:`question-kind-application`,ask:`home-kind-application-ask`,help:`home-kind-application-help`,question:`home-sample-application-question`,answer:`home-sample-application-answer`}],T=[`home-callout-kind`,`home-callout-question`,`home-callout-answer`,`home-callout-level`],ee=[`home-tip-focus`,`home-tip-plan`,`home-tip-physical`,`home-tip-backup`,`home-tip-data`,`home-tip-offline`];function E(){customElements.get(`reader-home-mode`)===void 0&&m(`reader-home-mode`,{catalog:S,onStart:C},l=>{let m=e=>l.catalog?.format(e)??``;return[(()=>{var e=i(_);return p(e,g),e})(),(()=>{var h=i(v),g=h.firstChild,_=g.firstChild,x=_.nextSibling,S=x.nextSibling,[C,E]=r(S.nextSibling),O=g.nextSibling,k=O.firstChild,A=k.nextSibling,j=A.nextSibling,M=j.firstChild,N=M.firstChild,P=M.nextSibling.firstChild,te=P.firstChild.nextSibling,F=P.nextSibling,ne=F.firstChild.nextSibling,I=F.nextSibling,L=I.firstChild.nextSibling,R=I.nextSibling.firstChild.nextSibling.firstChild,z=R.nextSibling,B=z.nextSibling,re=j.nextSibling,V=O.nextSibling,H=V.firstChild,U=H.nextSibling,W=U.nextSibling,G=W.nextSibling,K=V.nextSibling,q=K.firstChild,J=q.nextSibling,Y=J.nextSibling,ie=Y.firstChild,[X,ae]=r(ie.nextSibling),oe=X.nextSibling,[Z,se]=r(oe.nextSibling),ce=Z.nextSibling,[Q,le]=r(ce.nextSibling),ue=Q.nextSibling,[de,fe]=r(ue.nextSibling),$=K.nextSibling.firstChild,pe=$.nextSibling;return p(_,o(()=>m(`home-heading`))),p(x,o(()=>m(`home-intro`))),p(g,a(f,{class:`primary-action home-start`,type:`button`,onClick:()=>l.onStart?.(),get children(){return m(`home-start`)}}),C,E),p(k,o(()=>m(`home-flow-heading`))),p(A,o(()=>m(`home-flow-intro`))),p(N,o(()=>m(`home-sample-reference`))),p(te,o(()=>m(`question-kind-observation`))),p(ne,o(()=>m(`home-sample-observation-question`))),p(L,o(()=>m(`study-answer-label`))),p(R,o(()=>m(`study-too-easy`))),p(z,o(()=>m(`study-too-hard`))),p(B,o(()=>m(`study-skip`))),p(re,o(()=>T.map(e=>(()=>{var t=i(y);return p(t,o(()=>m(e))),t})()))),p(H,o(()=>m(`home-kinds-heading`))),p(U,o(()=>m(`home-kinds-intro`))),p(W,o(()=>w.map(e=>(()=>{var n=i(b),a=n.firstChild,s=a.firstChild,[c,l]=r(s.nextSibling),u=c.nextSibling,f=a.nextSibling,h=f.nextSibling.firstChild,g=h.nextSibling,_=g.nextSibling,v=_.nextSibling,y=v.nextSibling;return p(a,o(()=>m(e.name)),c,l),p(u,o(()=>m(e.ask))),p(f,o(()=>m(e.help))),p(h,o(()=>m(e.name))),p(g,o(()=>m(`home-sample-label`))),p(_,o(()=>m(e.question))),p(v,o(()=>m(`home-sample-answer-label`))),p(y,o(()=>m(e.answer))),d(()=>`kind kind-${e.kind}`,(e,r)=>{t(n,e,r)}),n})()))),p(G,o(()=>m(`home-kinds-note`))),p(q,o(()=>m(`home-modes-heading`))),p(J,o(()=>m(`home-modes-intro`))),p(Y,a(D,{current:!0,get name(){return m(`reader-mode-home`)},get description(){return m(`home-mode-home`)},get children(){return a(e,{})}}),X,ae),p(Y,a(D,{get name(){return m(`reader-mode-study`)},get description(){return m(`home-mode-study`)},get children(){return a(s,{})}}),Z,se),p(Y,a(D,{get name(){return m(`reader-mode-review`)},get description(){return m(`home-mode-review`)},get children(){return a(n,{})}}),Q,le),p(Y,a(D,{get name(){return m(`reader-mode-print`)},get description(){return m(`home-mode-print`)},get children(){return a(u,{})}}),de,fe),p($,o(()=>m(`home-tips-heading`))),p(pe,o(()=>ee.map(e=>(()=>{var t=i(y);return p(t,o(()=>m(e))),t})()))),d(()=>l.catalog?.locale,e=>{c(h,`lang`,e)}),h})()]})}function D(e){var n=i(x),r=n.firstChild,a=r.nextSibling,s=a.nextSibling;return p(r,o(()=>e.children)),p(a,()=>e.name),p(s,()=>e.description),d(()=>e.current===!0?`mode is-current`:`mode`,(e,r)=>{t(n,e,r)}),n}export{E as registerHomeModeElement};