var e=class extends Error{source;constructor(e){let t=Error,n=t.stackTraceLimit;n!==void 0&&(t.stackTraceLimit=0),super(),n!==void 0&&(t.stackTraceLimit=n),this.source=e}},t=class extends Error{source;constructor(e,t){super(t instanceof Error?t.message:String(t),{cause:t}),this.source=e}};function n(e){return e instanceof t?e.cause:e}var r=class extends Error{constructor(){super(``)}},i=class extends Error{constructor(){super(``)}},a=1024,o=2048,s=4096,c=1024,l=4096,u=16384,d=1<<17,f={},p={},m={};function h(e){return e===m?void 0:e}var g=typeof Proxy==`function`,_={},v=Symbol(`refresh`),y=new Set;function b(e){for(;e.rn;)e=e.rn;return e}function ee(e,t){if(e=b(e),t=b(t),e===t)return e;t.rn=e;for(let n of t.Oe)e.Oe.add(n);return t.Oe.clear(),e.tn[0].push(...t.tn[0]),e.tn[1].push(...t.tn[1]),t.tn[0].length=0,t.tn[1].length=0,e}function te(e){let t=e.o?.$e;if(!t)return;let n=b(t);if(y.has(n))return n;e.o!==null&&(e.o.$e=void 0)}function ne(e){if(re(e)&&e.o?.Tt){let t=B(e).Tt=Le(e.o?.Tt);if(t.sn!==!0)return t;e.o!==null&&(e.o.Tt=null)}return te(e)?.Ae??e.Ae}function re(e){let t=e.o;return t!==null&&t.Pe!==void 0&&t.Pe!==f}function ie(e,t){let n=b(t),r=e.o?.$e;if(r){if(r.rn){B(e).$e=t,e.T|=c;return}let i=b(r);if(y.has(i)){i!==n&&!re(e)&&(n.an&&b(n.an)===i?(B(e).$e=t,e.T|=c):i.an&&b(i.an)===n||ee(n,i));return}}B(e).$e=t,e.T|=c}var ae=new Set,x={eE:Array(2e3).fill(void 0),tE:!1,Me:0,EE:0},oe={eE:Array(2e3).fill(void 0),tE:!1,Me:0,EE:0};function se(e){e.ie&16?e.ie&=-12:(k(e,oe),e.ie&=-4)}var S=0,C=null,ce=!1,le=!1,ue=!1,de=0,fe=new Set;function pe(e){let t=e.m;return ae.size===0&&y.size===0&&e.Bt.length===0&&t.Xe.length===0&&t.A.length===0&&t.En.size===0&&fe.size===0}function me(){if(fe.size!==0)for(let e of fe){if(e.u!==null){fe.delete(e);continue}e.Re===f&&(e.o?.Pe===void 0||e.o?.Pe===f)&&(e.o?.t||(fe.delete(e),e.T&262144?Ht(e):e.o?.Nt?.()))}}function he(){return{Te:S,Mt:[],_e:new Map,Xe:[],A:[],En:new Set,ue:[],wt:{jt:[[],[]],Bt:[]},sn:!1,cn:new Set}}function ge(e,t){t.sn=e,e.ue.push(...t.ue);for(let n of y)n.Ae===t&&(n.Ae=e);t.Xe.length&&(e.Xe.push(...t.Xe),t.Xe.length=0),t.A.length&&(e.A.push(...t.A),t.A.length=0);for(let n of t.En)e.En.add(n);for(let[n,r]of t._e){let t=e._e.get(n);t||e._e.set(n,t=new Set);for(let e of r)t.add(e)}for(let n of t.cn)e.cn.add(n)}function w(){if(le){ve();return}ce||(ce=!0,!de&&!E.fn&&queueMicrotask(D))}function _e(e){if(le)return;le=!0;let t=`[REACTIVITY_HALTED]`;e===void 0?console.error(t):console.error(t,e)}function ve(){ue||(ue=!0,console.error(`[REACTIVITY_HALTED]`))}var ye=0,be=class{Le=null;jt=[[],[]];Bt=[];qt=0;created=S;addChild(e){this.Bt.push(e),e.Le=this}removeChild(e){let t=this.Bt.indexOf(e);t>=0&&(this.Bt.splice(t,1),e.Le=null)}notify(e,t,n,r){return this.Le?this.Le.notify(e,t,n,r):!1}run(e){if(this.jt[e-1].length){let t=this.jt[e-1];this.jt[e-1]=[],Pe(t,e)}let t=this.Bt,n=++ye;for(let r=0;r<t.length;){let i=t[r];if(i.qt!==n&&(i.qt=n,i.run?.(e),t[r]!==i)){r=0;continue}r++}}enqueue(e,t){e&&(F?b(F).tn[e-1].push(t):this.jt[e-1].push(t)),w()}stashQueues(e){e.jt[0].push(...this.jt[0]),e.jt[1].push(...this.jt[1]),this.jt=[[],[]];for(let t=0;t<this.Bt.length;t++){let n=this.Bt[t],r=e.Bt[t];r||(r={jt:[[],[]],Bt:[]},e.Bt[t]=r),n.stashQueues(r)}}restoreQueues(e){this.jt[0].push(...e.jt[0]),this.jt[1].push(...e.jt[1]);for(let t=0;t<e.Bt.length;t++){let n=e.Bt[t],r=this.Bt[t];r&&r.restoreQueues(n)}}},T=class e extends be{fn=!1;m=he();static Fe;static ke;static ut;static Wt=null;static p=null;static G=null;static M=null;static N=null;static Ft=null;static gt=null;static Ue=null;static de=null;static me=null;static un=null;static Vt=null;static bt=null;static Lt=null;static nt=null;static k=null;static zt=null;static Kt=null;static yt=null;static Tn=null;static dn=null;static In=null;static Nn=null;static ln=null;static Ut=null;static kt=null;static xt=null;static Je=null;static tt=null;static he=null;static et=null;static _n=null;flush(){if(!this.fn){if(C===null&&x.EE<x.Me&&this.jt[0].length===0&&this.jt[1].length===0&&this.Bt.length===0&&pe(this)){this.fn=!0;try{ut(),ke()}finally{this.fn=!1}S++,ce=x.EE>=x.Me||this.jt[0].length!==0||this.jt[1].length!==0||this.m.Mt.length!==0;return}this.fn=!0;try{if(ut(),Ge(x,e.Fe),C){if(!Ie(C)){let t=C;Ge(oe,this.m===t?se:e.Fe),this.m===t&&(Ne=this.m=he()),y.size&&(e.Nn(1),e.Nn(2)),this.stashQueues(t.wt),S++,ce=x.EE>=x.Me||this.m.Mt.length>0,Me(t.Mt),C=null,Ae(null,!0);return}let t=C,n=this.m;if(n!==t&&n.Mt.push(...t.Mt),this.restoreQueues(t.wt),ae.delete(t),C=null,Me(n.Mt),Ae(t),n===t){let e=he();e.Mt=n.Mt,e.Xe=n.Xe,e.A=n.A,e.En=n.En,Ne=this.m=e}}else pe(this)?(ke(),x.EE>=x.Me&&(Ge(x,e.Fe),ke())):(ae.size&&Ge(oe,e.Fe),Ae());S++,ce=x.EE>=x.Me,y.size&&e.Nn(1),this.run(1),y.size&&e.Nn(2),this.run(2)}finally{this.fn=!1}}}notify(t,n,r,i){if(n&1){if(r&1){let n=i??t.o?._;if(n?.l)return!0;if(n&&(!C&&!t.Ae&&Ne.Mt.length&&this.initTransition(),C)){let r=n.source,i=C._e.get(r);i||C._e.set(r,i=new Set);let a=i.size;i.add(t),i.size!==a&&(w(),e.Kt?.(C))}}return!0}return!1}initTransition(e){if(e&&(e=Le(e),e.sn===!0||e===C)||!e&&C&&C.Te===S)return;if(!C)C=e??he();else if(e){let t=C;ge(e,t),this.restoreQueues(t.wt),ae.delete(t),C=e}ae.add(C),C.Te=S;let t=this.m;if(t!==C){for(let e=0;e<t.Mt.length;e++){let n=t.Mt[e];n.Ae=C,C.Mt.push(n)}for(let e=0;e<t.Xe.length;e++){let n=t.Xe[e];n.Ae=C,C.Xe.push(n)}t.A.length&&C.A.push(...t.A);for(let e of t.En)C.En.add(e);if(t.cn.size){for(let e of t.cn)C.cn.add(e);t.cn.clear()}Ne=this.m=C}for(let e of y)e.Ae||=C;w()}};function xe(e){Ne.Mt.push(e)}var Se=!1,Ce=0;function we(){Ce++}function Te(e,t=!1){e.Et=Ce;let n=e.T,r=(n&1024?e.o?.$e:void 0)||F,i=!!(n&512)&&e.o?.Ye!==void 0,a=Se;for(let n=e.u;n!==null;n=n.ae){let e=n.ce;if(a&&(e.ie&=~o),e.ie&4&&n.vt===e.ze&&n!==e.Be&&(e.ie|=s),i&&e.T&8){e.ie|=256;continue}t&&r?(e.ie|=128,ie(e,r)):t&&(e.ie|=128,e.o&&(e.o.$e=void 0)),ze(e)}}function Ee(e){let t=e;if(!t.oe){e.Re!==f&&(e.be=e.Re,e.Re=f),e.T&256&&T.un(e);return}e.Re!==f&&(e.be=e.Re,e.Re=f,e.ge&&e.ge!==3&&(e.He=!0),e.o&&(e.o.De=!1)),t.Ne=!1,t.ie&=~a,t.S&1||(t.S&=-5),t.o!=null&&(t.o.Ke!==null||t.o.Ze!==null)&&T.ke(t,!1,!0),e.T&256&&T.un(e)}var De=null,Oe=[];function ke(){let e=Ne.Mt;for(let t=0;t<e.length;t++){let n=e[t];Ee(n),n.Ae=null,n.T&131072&&(n.T&=~d,Oe.push(n))}e.length=0,De?.()}function Ae(e=null,t=!1){let n=!t;n&&ke(),!t&&E.Bt.length&&je(E);let r=x.EE>=x.Me;if(r&&Ge(x,T.Fe),n){r&&ke();let t=e??E.m;if(t.Xe.length&&T.Tn(t.Xe),t.cn.size){for(let e of t.cn)e.ie&64||ze(e);t.cn.clear(),w()}if(t.A.length&&(T.G(t.A),E.Bt.length&&je(E)),t.En.size&&T.Wt(t.En,e),Oe.length!==0){for(;Oe.length;)Te(Oe.pop());x.EE>=x.Me&&(Ge(x,T.Fe),ke())}me(),y.size&&T.In(e)}}function je(e){for(let t of e.Bt)t.se?.(),je(t)}function Me(e){for(let t=0;t<e.length;t++)e[t].Ae=C}var E=new T,Ne=E.m;function D(e){if(e){de++;try{return e()}finally{try{D()}finally{de--}}}if(!E.fn&&!le)for(;ce||C;)E.flush()}function Pe(e,t){for(let n=0;n<e.length;n++)e[n](t)}function Fe(t,n){if(t.ie&96)return!1;if(t.o?.le?.has(n))return!0;for(let e=t.lt;e;e=e.ot){let t=e.st;for(;t;){if(t===n||t.rt===n)return!0;t=t.o?.St}}return!!(t.S&1&&t.o?._ instanceof e&&t.o?._.source===n)}function Ie(e){if(e.sn)return!0;if(e.ue.length)return!1;let t=!0;for(let[n,r]of e._e){let i=!1;for(let e of r){if(Fe(e,n)){i=!0;break}r.delete(e)}if(!i)e._e.delete(n);else if(n.S&1&&n.o?._?.source===n){t=!1;break}}return t&&T.dn?.(e)&&(t=!1),t&&(e.sn=!0),t}function Le(e){for(;e.sn&&typeof e.sn==`object`;)e=e.sn;return e}function Re(e,t){let n=C;try{return C=Le(e),t()}finally{C=n}}function O(e){return e.ie&32?oe:x}function ze(e){let t=O(e);t.Me>e.qe&&(t.Me=e.qe),Ve(e,t)}function Be(e,t){let n=(e.Le?.Dt?e.Le.Pt?.qe:e.Le?.qe)??-1;n>=e.qe&&(e.qe=n+1);let r=e.qe,i=t.eE[r];if(i===void 0)t.eE[r]=e;else{let t=i.ct;t._t=e,e.ct=t,i.ct=e}r>t.EE&&(t.EE=r)}function Ve(e,t){let n=e.ie;n&1036||(n&1?e.ie=n&-4|10:(e.ie=n|8,t.tE&&!(n&2)&&(t.tE=!1)),n&16||Be(e,t))}function He(e,t){let n=e.ie;n&1052||(e.ie=n|16,Be(e,t))}function k(e,t){let n=e.ie;if(!(n&24))return;e.ie=n&-25;let r=e.qe;if(e.ct===e)t.eE[r]=void 0;else{let n=e._t,i=t.eE[r],a=n??i;e===i?t.eE[r]=n:e.ct._t=n,a.ct=e.ct}e.ct=e,e._t=void 0}function Ue(e){if(!e.tE){e.tE=!0;for(let t=0;t<=e.EE;t++)for(let n=e.eE[t];n!==void 0;n=n._t)n.ie&8&&We(n)}}function We(e,t=2){let n=e.ie;if(!((n&3)>=t)){e.ie=n&-4|t;for(let t=e.u;t!==null;t=t.ae)We(t.ce,1);if(e.T&4096)for(let t=e.o.i;t!==null;t=t.Se)for(let e=t.u;e!==null;e=e.ae)We(e.ce,1)}}function Ge(e,t){for(e.tE=!1,e.Me=0;e.Me<=e.EE;e.Me++){let n=e.eE[e.Me];for(;n!==void 0;)n.ie&8?t(n):Ke(n,e),n=e.eE[e.Me]}e.EE=0}function Ke(e,t){k(e,t);let n=e.qe;for(let t=e.lt;t;t=t.ot){let e=t.st,r=e.rt||e;r.oe&&r.qe>=n&&(n=r.qe+1)}if(e.qe!==n){e.qe=n;for(let t=e.u;t!==null;t=t.ae)He(t.ce,O(t.ce))}}function qe(e){let t=e.Qe;for(;t;){let e=t.ie;t.ie=e|32,e&24&&(k(t,e&32?oe:x),e&8?Ve(t,oe):He(t,oe)),qe(t),t=t.We}}function Je(e,t=!1,n){let r=e.ie;if(r&64)return;if(t){e.ie=r|64;let t=e;(t.o?.ye||t.o?.Ce)&&T.un(t)}t&&e.oe&&e.o!==null&&(e.o.Ie=null);let i=n?e.o?.Ke??null:e.Qe;for(;i;){let e=i.We,t=i;t.T&=-33,k(t,O(t)),st(t),Je(i,!0),i=e}if(n?e.o!==null&&(e.o.Ke=null):(e.Qe=null,e.je=0),t&&!n&&!(r&32)&&e.Le!==null&&!(e.Le.ie&64)){let t=e.It,n=e.We;t===null?e.Le.Qe=n:t.We=n,n!==null&&(n.It=t),e.It=null}if(Ye(e,n),t&&e.Gt){let t=e.Gt;e.Gt=void 0,t()}}function Ye(e,t){let n=t?e.o?.Ze:e.Ge;if(n){if(Array.isArray(n))for(let e=0;e<n.length;e++){let t=n[e];t.call(t)}else n.call(n);t?e.o!==null&&(e.o.Ze=null):e.Ge=null}}function Xe(e,t){let n=e;for(;n.T&4&&n.Le;)n=n.Le;if(n.id!=null)return et(n.id,t?n.je++:n.je);throw Error(``)}function Ze(e){return Xe(e,!0)}function Qe(e,t,n){return e?.id??(t?n?.id:n?.id==null?void 0:Ze(n))}function $e(e){return Xe(e,!1)}function et(e,t){let n=t.toString(36),r=n.length-1;return e+(r?String.fromCharCode(64+r):``)+n}function A(){return P}function tt(e){return P&&(P.Ge?Array.isArray(P.Ge)?P.Ge.push(e):P.Ge=[P.Ge,e]:P.Ge=e),e}function nt(e){return!!(e.ie&96)}function rt(e=!0){Je(this,e)}function j(e){let t=P,n=e?.transparent??!1,r={id:Qe(e,n,t),T:n?4:0,Dt:!0,Pt:t?.Dt?t.Pt:t,Qe:null,We:null,It:null,Ge:null,C:t?.C??E,we:t?.we||_,je:0,o:null,Le:t,dispose:rt};if(t){let e=t.Qe;e===null?t.Qe=r:(r.We=e,e.It=r,t.Qe=r)}return r}function it(e,t){let n=j(t);return G(n,()=>e(()=>n.dispose()))}function at(e){let t=e.st,n=e.ot,r=e.ae,i=e.en;if(r===null?t.ft=i:r.en=i,i!==null)i.ae=r;else if(t.u=r,r===null){t.T&262144?Ht(t):t.o?.Nt?.();let e=t;e.oe&&e.T&32&&!(e.ie&32)&&!(e.S&1)&&ct(e)}return n}function ot(e){let t=e.Be,n=t===null?e.lt:t.ot;if(n!==null){do n=at(n);while(n!==null);t===null?e.lt=null:t.ot=null}}function st(e){let t=e.lt;if(t){do t=at(t);while(t!==null);e.lt=null,e.Be=null}}function ct(e){k(e,O(e)),st(e),Je(e,!0)}var lt=new Set;function ut(){if(lt.size!==0){for(let e of lt)!e.u&&e.T&32&&!(e.S&1)&&!(e.ie&96)&&ct(e);lt.clear()}}function dt(e,t,n=!1){let r=t.Be;if(r!==null&&r.st===e){r.ve&&=n;return}let i=null,a=t.ie&4;if(a&&(i=r===null?t.lt:r.ot,i!==null&&i.st===e)){i.vt=t.ze,t.Be=i,i.ve=n;return}let o=e.ft;if(o!==null&&o.ce===t&&(!a||o.vt===t.ze)){a?o.ve&&=n:o.ve=n;return}let s=t.Be=e.ft={st:e,ce:t,ot:i,en:o,ae:null,vt:t.ze,ve:n};r===null?t.lt=s:r.ot=s,o===null?e.u=s:o.ae=s,we()}function ft(e,t){return!e.o?.le?.has(t)&&((B(e).le??=new Set).add(t),!0)}function pt(e,t){let n=e.o?.le;return n?.delete(t)?(n.size||(e.o.le=void 0),!0):!1}function mt(e){e.o!==null&&(e.o.le=void 0)}function ht(e,t){B(e).fe=!0,t.source&&ft(e,t.source),e.S&2||gt(e,t.source,t)}function gt(t,n,r){if(!n){t.o!==null&&(t.o._=null);return}if(r instanceof e&&r.source===n){B(t)._=r;return}let i=t.o?._;(!(i instanceof e)||i.source!==n)&&(B(t)._=new e(n))}function _t(e,t){for(let n=e.u;n!==null;n=n.ae)t(n.ce,n);for(let n=e.o?.i??null;n!==null;n=n.Se)for(let e=n.u;e!==null;e=e.ae)t(e.ce,e)}function vt(e){e.oe&&e.T&32&&!e.u&&!(e.ie&32)&&!(e.S&1)&&ct(e)}function yt(e){let t,n=new Set,r=e=>{n.has(e)||(n.add(e),!e.u&&e.T&32&&(t??=[]).push(e),_t(e,r))};if(_t(e,r),t)for(let e of t)vt(e)}function bt(e,t){let n=!1,r=new Set,i=e=>{r.has(e)||(r.add(e),e.o?._===t&&(ze(e),n=!0),_t(e,i))};_t(e,i),n&&w()}function xt(e){pt(e,e);let t=!1,n,r=new Set,i=T.de,a=o=>{if(r.has(o)||!pt(o,e))return;r.add(o),o.Te=S;let s=o.o?.le?.values().next().value,c=o.S&2;s?(c||gt(o,s),i?.(o)):(o.S&=-2,c||gt(o),i?.(o),o.o?.fe&&(ze(o),t=!0),o.o!==null&&(o.o.fe=!1),!o.u&&o.T&32&&(n??=[]).push(o)),_t(o,a)};if(_t(e,a),n)for(let e of n)vt(e);t&&w()}function St(e){return typeof e==`object`&&!!e&&typeof e.then==`function`}function Ct(e){let t=e.o?.Ee;t!=null&&(e.o.Ee=null,t())}function wt(t,n,r){let i=!1,a=!1;if(typeof n==`object`&&n&&H(()=>{i=n[Symbol.asyncIterator],a=!i&&St(n)}),!a&&!i)return t.o!==null&&(t.o.Ie=null),t.Ne=!1,n;B(t).Ie=n;let o,s=()=>{let e=ne(t);if(e&&t.S&4&&!Le(e)._e.has(t)){t.Ae=null;return}E.initTransition(e)},c=r=>{if(t.o?.Ie!==n)return;let i=r instanceof e;if(i&&t.Ne){t.o!==null&&(t.o.Ie=null),ht(t,r),t.Te=S;return}s(),Et(t,i?1:2,r),i&&xt(t),t.Te=S,i||yt(t)},l=(e,i)=>{if(t.o?.Ie!==n||t.ie&130)return;s();let a=!!(t.S&4),o=t.o?.De;ot(t),Tt(t),o&&(t.o.De=!0);let l=te(t);if(l&&l.Oe.delete(t),r){try{r(e)}catch(e){c(e);return}a&&Tt(t,!0)}else if(t.o?.Pe!==void 0)t.Re===f&&xe(t),t.Re=e,T.Ue?.(t,e),re(t)?t.T&16384&&T.he?.(t):Te(t),t.Te=S;else if(l){let n=t.ge,r=t.be,i=t.pe;try{(!n&&a||!i||!i(e,r))&&(t.be=e,t.Te=S,T.Ue?.(t,e),Te(t,!0))}catch(e){Et(t,2,e)}}else try{W(t,()=>e)}catch(e){Et(t,2,e)}t.Re===f&&(t.Ne=!1,o&&(t.o.De=!1)),xt(t),w(),D(),i?.()},u=()=>t.T&32&&!t.u&&!(t.S&1)?(ct(t),!0):!1,d=(e,r)=>{let i=e[Symbol.asyncIterator](),a=!1,s=!1,d=!r,f=()=>{if(!s){s=!0;try{let e=i.return?.();St(e)&&e.then(void 0,()=>{})}catch{}}};r?r(f):tt(f),B(t).Ee=f;let p=()=>{u()||m()},m=()=>{let e,r,f=!1,h=!1,g=!0,_=i.next();if((St(_)?_:{then:e=>void e(_)}).then(r=>{if(g&&d)e=r,f=!0,r.done&&(s=!0);else if(t.o?.Ie!==n)return;else r.done?(s=!0,a?(w(),D()):l(void 0),u()):(a=!0,l(r.value,p))},e=>{g&&d?(r=e,h=!0):t.o?.Ie===n&&(s=!0,c(e),u())}),g=!1,h){if(s=!0,c(r),d)throw r;return!0}return f&&!e.done?(o=e.value,a=!0,m()):f&&e.done},h=m();return d=!1,a||h},p=null,m=(e,t)=>{let n=!1;if(typeof e==`object`&&e&&H(()=>{n=e[Symbol.asyncIterator]}),!n)return!1;let r=d(e,t);return t||(p=r),!0};if(a){let r=!1,i=!1,a,s=!0,d=e=>{t.Ge?Array.isArray(t.Ge)?t.Ge.push(e):t.Ge=[t.Ge,e]:t.Ge=e};if(n.then(e=>{s?(o=e,r=!0):t.o?.Ie===n&&!(t.ie&64)&&m(e,d)||(l(e),u())},e=>{s?(a=e,i=!0):(c(e),u())}),s=!1,i)throw c(a),a;if(r)m(o)||(t.Ne=!1);else{if(t.Ne)return t.be;throw E.initTransition(ne(t)),new e(P)}}if(i&&m(n),p!==null){if(!p){if(t.Ne)return t.be;throw E.initTransition(ne(t)),new e(P)}t.Ne=!1}return o}function Tt(e,t=!1){e.o?.le&&mt(e),e.o?.fe&&e.o!==null&&(e.o.fe=!1),e.o!==null&&(e.o.De=!1),e.S=t?0:e.S&4,e.o?._&&gt(e),(e.o?.ye||e.o?.Ce)&&T.de(e),e.o?.i&&e.T&2048&&T.me!==null&&T.me(e);let n=zt(e);n&&n.call(e)}function Et(n,r,i,a,o){r===2&&!(i instanceof t)&&!(i instanceof e)&&(i=new t(n,i));let s=r===1&&i instanceof e?i.source:void 0,c=r===1&&n.o?.Pe!==void 0&&s!==n,l=c&&re(n);a||(r===1&&s?(ft(n,s),n.S=1|n.S&4,gt(n,s,i)):(mt(n),n.S=r|(r===2?0:n.S&4),B(n)._=i),T.de?.(n),n.o?.i&&n.T&2048&&T.me!==null&&T.me(n)),o&&!a&&ie(n,o);let u=a||l,d=a||c?void 0:o,f=zt(n);if(f){if(a&&r===1)return;u?f.call(n,r,i):f.call(n);return}_t(n,(t,n)=>{if(t.Te=S,r===1&&s&&!t.o?.le?.has(s)||r!==1&&(t.o?._!==i||t.o?.le)){if(n.ve&&r!==1&&!(i instanceof e)){ze(t),w();return}!u&&!t.Ae&&xe(t),Et(t,r,i,u,d)}})}T.Fe=e=>{e.ge===3?(k(e,O(e)),e.He=!0,e.C.enqueue(2,e.Ve)):R(e)},T.ke=Je;var M=!1,N=!1,Dt=!1,Ot=!1,P=null,F=null,I=!1,L=null;function kt(e){for(;e;){if(e.xe)return!0;e=e.Le}return!1}function At(e){I=e,e&&!L&&(L=new Set)}function jt(e){e.xe=!0}function Mt(e){e.xe=!1,Nt(e),w()}function Nt(e){let t=e.Qe;for(;t;){if(t.xe){t=t.We;continue}if(t.oe){let e=t;e.T&=-9,e.ie&256&&(e.ie&=-257,e.ie|=2,x.Me>e.qe&&(x.Me=e.qe),Ve(e,x))}Nt(t),t=t.We}}function Pt(){if(L){for(let e of L)delete e.o?.Ye,e.sp!==void 0&&(e.sp=void 0);L=null}I=!1}function R(t,n=!1){we();let r=t.ge;if(!n){if(t.Ae&&(!r||C)&&C!==t.Ae&&E.initTransition(t.Ae),k(t,O(t)),t.o!==null&&(t.o.Ie=null,Ct(t)),t.Ae||r===3)Je(t);else if(t.Qe!==null||t.Ge!==null){qe(t);let e=B(t);e.Ze=t.Ge,e.Ke=t.Qe,t.Ge=null,t.Qe=null,t.je=0}}let i=!!(t.ie&128),a=!!(t.T&128)&&t.o?.Pe!==f&&t.o?.Pe!==void 0,c=!!(t.S&4),l=t.S&2?t.o?._:void 0,u=t.o?.le?.has(t),d=(t.ie&o)!==0,p=t.Ne,g=P;P=t,t.Be=null,t.ze++,t.ie=4,t.Te=S;let _=t.Re===f?t.be:t.Re,v=t.qe,y=!1,b=M,ee=F;M=!0;let te=Ot;if(Ot=!1,i){let e=T.Je(t,!0);e?F=e:e===!1&&(i=!1)}else if(C&&!n&&C.Xe.length){let e=T.Je(t,!1);e&&(i=!0,F=e)}let ne=r&&r!==2,re=N;ne&&(N=!0);try{if(t.T&64)_=t.oe(_),t.o!==null&&(t.o.Ie=null),t.Ne=!1;else{let e=t.o?.Ie,n=t.oe(_),r=typeof n==`object`&&!!n,i=t.o?.Ie!==e;_=i||!r?n:wt(t,n),!i&&!r&&(t.o!==null&&(t.o.Ie=null),t.Ne=!1)}(t.S!==0||t.o!==null)&&Tt(t,n),t.T&1024&&t.o?.$e&&T.et(t)}catch(n){let r=n instanceof e;if(r&&t.Ne)ht(t,n);else{r&&F&&T.tt(t);let e=!1;r&&(B(t).fe=!0,T.nt!==null&&(e=T.nt(t,d))),Et(t,r?1:2,n,void 0,r?t.o?.$e:void 0),r&&u&&!t.o?.Ie&&xt(t),e&&T.k(t)}}finally{M=b,Ot=te,ne&&(N=re),y=(t.ie&s)!==0,t.ie=0|(n?t.ie&256:0),P=g}if(!t.o?._){ot(t);let e=a?h(t.o?.Pe):t.Re===f?t.be:t.Re,o=!1;try{o=!r&&c||!t.pe||!t.pe(e,_)}catch(e){Et(t,2,e)}if(r&&o&&(t.He=!t.o?._,n||t.C.enqueue(r,t.it??=T.ut.bind(null,t))),!t.o?._){if(o){let e=a?t.o?.Pe:void 0;n||r&&(C!==t.Ae||C===null||t.T&32768)||i?(t.be=_,a&&i&&(B(t).Pe=_===void 0?m:_,t.Re=f)):(t.Re=_,p&&(t.Ne=!0),(C||t.Ae)&&T.Ue!==null&&T.Ue(t,_)),t.u!==null&&(!a||i||t.o?.Pe!==e)&&Te(t,i||a)}else if(a)t.Re===f&&xe(t),t.Re=_,p&&(t.Ne=!0),t.T&16384&&T.he(t);else if(t.qe!=v)for(let e=t.u;e!==null;e=e.ae)He(e.ce,O(e.ce))}l!==void 0&&!o&&!t.o?._&&bt(t,l),u&&!(t.S&5)&&xt(t)}F=ee,(t.Re!==f||t.o!==null&&(t.o.Ke!==null||t.o.Ze!==null)||t.S&5)&&(!n||t.S&1)&&(!t.Ae||a)&&xe(t),t.Ae&&r&&C!==t.Ae&&Re(t.Ae,()=>R(t)),y&&(ze(t),w())}function Ft(e){if(!(e.ie&68)){if(e.ie&1)for(let t=e.lt;t;t=t.ot){let n=t.st,r=n.rt||n;if(r.oe&&Ft(r),e.ie&2)break}(e.ie&130||e.o?._&&e.Te<S&&!e.o?.Ie)&&R(e),e.ie&=280}}function z(e,t){let n=t?.transparent??!1,r=typeof t==`object`&&!!t&&`loadingValue`in t,i={id:Qe(t,n,P),T:(n?4:0)|!!t?.ownedWrite|(!P||t?.lazy?32:0)|(t?.sync?64:0)|(t?.H?2:0)|(I&&kt(P)?8:0),pe:t?.equals??Ut,Ge:null,C:P?.C??E,we:P?.we??_,je:0,oe:e,be:r?t.loadingValue:void 0,qe:0,_t:void 0,ct:null,lt:null,Be:null,ze:0,u:null,ft:null,Le:P,We:null,It:null,Qe:null,ie:t?.lazy?512:0,S:r?0:4,Te:S,Re:f,Ae:null,Et:-1,Ne:r,o:null};return t?.unobserved&&(B(i).Nt=t.unobserved),Vt(i,t),i}function B(e){return e.o??={Pe:void 0,Tt:void 0,$e:void 0,ye:void 0,Ce:void 0,St:void 0,t:0,Ie:null,Ee:null,_:void 0,fe:void 0,le:void 0,h:void 0,De:!1,i:null,Nt:void 0,Ye:void 0,Ze:null,Ke:null,dt:void 0}}function It(e,t,n,r,i){let a=i?.transparent??!1,o={id:Qe(i,a,P),T:(a?4:0)|!!i?.ownedWrite|(i?.sync?64:0)|(i?.At??0)|(I&&kt(P)?8:0),pe:!1,Ge:null,C:P?.C??E,we:P?.we??_,je:0,oe:e,be:void 0,qe:0,_t:void 0,ct:null,lt:null,Be:null,ze:0,u:null,ft:null,Le:P,We:null,It:null,Qe:null,ie:512,S:4,Te:S,Re:f,Ae:null,Et:-1,Ne:!1,He:!1,Ot:void 0,Ct:t,Rt:n,Gt:void 0,ge:r,o:null};return i?.unobserved&&(B(o).Nt=i.unobserved),Vt(o,Bt),o}var Lt=null;function Rt(e){Lt=e}function zt(e){let t=e.o?.h;return t===void 0?e.ge?Lt??void 0:void 0:t}var Bt={lazy:!0};function Vt(e,t){e.ct=e;let n=P?.Dt?P.Pt:P;if(P){let t=P.Qe;t===null?P.Qe=e:(e.We=t,t.It=e,P.Qe=e)}n&&(e.qe=n.qe+1),T.Ft!==null&&T.Ft(e),!t?.lazy&&R(e,!0),I&&!t?.lazy&&!(e.S&1)&&!(e.T&2)&&(B(e).Ye=e.be===void 0?p:e.be,e.T|=512,L.add(e))}function V(e,t,n=null){let r={pe:t?.equals??Ut,T:!!t?.ownedWrite|(t?.H?2:0),be:e,u:null,ft:null,Te:S,rt:n,Se:n?.o?.i||null,Re:f,Ae:null,Et:-1,o:null};return t?.unobserved&&(B(r).Nt=t.unobserved),n&&(B(n).i=r,n.T|=l),I&&!(r.T&2)&&!((n?.S??0)&1)&&(B(r).Ye=e===void 0?p:e,r.T|=512,L.add(r)),r}var Ht;function Ut(e,t){return e===t}function H(e,t){if(T.gt===null&&!M)return e();let n=M;M=!1;try{return T.gt===null?e():T.gt(e)}finally{M=n}}function Wt(e,t){e.ie&512?(e.ie&=-513,R(e,!0)):e.ie&64?e.T&32&&R(e,!0):t&&Ft(e)}function U(e){if(Ot)return T.Vt(e);let t=P;t?.Dt&&(t=t.Pt);let n=e,r=e.rt||e;if(typeof n.oe==`function`&&Wt(e,!1),!n.oe&&r===e&&e.o?.Pe===void 0&&e.o?.Ye===void 0&&C===null&&F===null&&!I)return t&&M&&dt(e,t),!t||e.Re===f||t.T&16?e.be:e.Re;if(t&&M&&(dt(e,t,Dt),r.oe)){let n=O(e);r.qe>=n.Me?(We(t),Ue(n),Ft(r)):t.T&65536&&Ft(r);let i=r.qe;i>=t.qe&&e.Le!==t&&(t.qe=i+1)}if(r.S&1){if(t&&!(N&&r.Ae&&C!==r.Ae)){if(F===null||T.kt(r))throw!M&&e!==t&&dt(e,t),r.o?._}else if(t&&r.S&4)throw!M&&e!==t&&dt(e,t),r.o?._;else if(!t&&r.S&4)throw r.o?._}if(r.oe&&r.S&2){if(M&&r.Te<S)return R(r),U(e);throw r.o?._}if(I&&t&&t.T&8){let n=e.o?.Ye;if(n!==void 0){let r=n===p?void 0:n;return(e.Re===f?e.be:e.Re)!==r&&(t.ie|=256),r}}if(e.o?.Pe!==void 0&&e.o?.Pe!==f){if(!(t&&t.T&8192))return h(e.o?.Pe);e.T|=u}if(F!==null&&C!==null&&t!==null&&T.Ut(e,r,t))return e.be;let i=!t||F!==null&&T.xt(e,r,t)||e.Re===f||t.T&16||N&&e.Ae&&C!==e.Ae||e.T&131072&&!Ot&&!(t.T&8192)?e.be:e.Re;return!t&&r===e&&typeof n.oe==`function`&&e.T&32&&!(r.S&1)&&!e.u&&(lt.add(e),w()),i}function W(e,t){if(e.Ae&&C!==e.Ae&&E.initTransition(e.Ae),e.T&128)return T.yt(e,t);let n=e.Re===f?e.be:e.Re;if(typeof t==`function`&&(t=t(n)),!(e.S&4||!e.pe||!e.pe(n,t)))return t;let r=e.Re!==f;return r||xe(e),e.Re=t,e.T&256&&T.Ue!==null&&T.Ue(e,t),e.oe!==void 0&&(e.Te=S),r&&e.Et===Ce&&F===null?t:(Te(e),w(),t)}function Gt(e){k(e,O(e)),!(e.ie&1024)&&e.Re===f&&(xe(e),w()),e.ie=e.ie&-4|a,e.Qt=S}function Kt(e,t){let n=W(e,t);return Gt(e),n}function G(e,t){let n=P,r=M;P=e,M=!1;try{return t()}finally{P=n,M=r}}function qt(e,t=!0){let n=N;N=t;try{return e()}finally{N=n}}function Jt(e,t=A()){if(!t)throw new r;let n=t.we[e.id];if(n===void 0&&(n=e.defaultValue),n===void 0)throw new i;return n}function Yt(e,t,n=A()){if(!n)throw new r;n.we={...n.we,[e.id]:t===void 0?e.defaultValue:t}}function Xt(e,t,n,r){let i=It(e,t,n,r?.user?2:1,r);R(i,!0),!r?.defer&&(i.ge===2||r?.schedule?i.C.enqueue(i.ge,Qt.bind(null,i)):Qt(i))}function Zt(e,t){let r=e===void 0?this.S:e,i=t===void 0?this.o?._:t;if(r&2){if(this.C.notify(this,1,0),this.ge===2){this.S&2&&(this.He=!0,this.C.enqueue(this.ge,this.it??=Qt.bind(null,this)));return}if(!this.C.notify(this,2,2))throw _e(n(i)),i}else this.ge===1&&this.C.notify(this,3,r,i)}function Qt(e){if(!e.He||e.ie&64)return;if(e.S&2&&e.ge===2){let t=n(e.o?._);e.Ot=e.be,e.He=!1;try{e.Rt?e.Rt(t,()=>{let t=e.Gt;e.Gt=void 0,t?.()}):console.error(t)}catch(t){if(!e.C.notify(e,2,2))throw _e(t),t}return}let r=e.Gt;e.Gt=void 0;try{r?.(),e.Gt=e.Ct(e.be,e.Ot)}catch(n){if(B(e)._=new t(e,n),e.S|=2,!e.C.notify(e,2,2))throw _e(n),n}finally{e.Ot=e.be,e.He=!1}}T.ut=Qt;function $t(e,t){let n=()=>{if(!(!r.He||r.ie&64))try{r.He=!1,R(r)}finally{}},r=z(()=>{let t=r.Gt;r.Gt=void 0,t?.();let n=qt(e);r.Gt=n},{...t,lazy:!0});r.Gt=void 0,r.T=r.T&-33|16,r.He=!0,r.ge=3,r.Ve=n,ze(r),w()}Rt(Zt);function en(e){return tt(e)}function K(e){let t=U.bind(null,e);return t[v]=e,t}function tn(e,t){if(typeof e==`function`){let n=z(e,t);return n.T&=-33,[K(n),Kt.bind(null,n)]}let n=V(e,t);return[K(n),W.bind(null,n)]}function q(e,t){return K(z(e,t))}function nn(e,t,n){Xt(e,t.effect||t,t.error,{user:!0,...n})}function rn(e,t,n){Xt(e,t,void 0,n)}function an(e){let t=A();t&&!(t.T&16)?$t(()=>H(e),void 0):E.enqueue(2,()=>{e()})}function on(e,t,n){let r=typeof n?.keyed==`function`?n.keyed:void 0,i=t.length>1,a=t,o={$t:j(),Jt:0,Xt:e,Yt:[],Zt:a,ts:[],ss:[],Ht:r,es:r||n?.keyed===!1?[]:void 0,rs:i&&n?.keyed!==!1?[]:void 0,ns:n?.keyed===!1,hs:n?.fallback},s=z(cn.bind(o),void 0);return o.$t.Pt=s,s.T&=-33,K(s)}var sn={ownedWrite:!0};function cn(){let e=this.Xt()||[],t=e.length;return G(this.$t,()=>{let n,r,i,a,o=this.es?this.ns?()=>(i[r]=V(e[r],sn),this.Zt(K(i[r]),r)):()=>(i[r]=V(e[r],sn),a&&(a[r]=V(r,sn)),this.Zt(K(i[r]),a?K(a[r]):void 0)):this.rs?()=>{let t=e[r];return a[r]=V(r,sn),this.Zt(t,K(a[r]))}:()=>{let t=e[r];return this.Zt(t)};if(t===0)this.Jt!==0&&(this.$t.dispose(!1),this.ss=[],this.Yt=[],this.ts=[],this.Jt=0,this.es&&=[],this.rs&&=[]),this.hs&&!this.ts[0]&&(this.ss[0]?.dispose(),this.ts[0]=G(this.ss[0]=j(),this.hs));else if(this.Jt===0){let s=Array(t),c=Array(t);i=this.es&&Array(t),a=this.rs&&Array(t);try{for(r=0;r<t;r++)s[r]=G(c[r]=j(),o)}catch(e){for(n=0;n<=r;n++)c[n]?.dispose();throw e}this.ss[0]&&this.ss[0].dispose(),this.ts=s,this.ss=c,i&&(this.es=i),a&&(this.rs=a),this.Yt=e.slice(0),this.Jt=t}else{let s,c,l,u,d,f,p,m,h;for(s=0,c=Math.min(this.Jt,t);s<c&&(this.Yt[s]===e[s]||this.es&&ln(this.Ht,this.Yt[s],e[s]));s++)this.es&&W(this.es[s],e[s]);for(c=this.Jt-1,l=t-1;c>=s&&l>=s&&(this.Yt[c]===e[l]||this.es&&ln(this.Ht,this.Yt[c],e[l]));c--,l--);if(s===t&&this.Jt===t){this.Yt=e.slice(0);return}let g=t-this.Jt,_=Array(t),v=Array(t);for(i=this.es?Array(t):void 0,a=this.rs?Array(t):void 0,f=new Map,p=Array(l+1),r=l;r>=s;r--)u=e[r],d=this.Ht?this.Ht(u):u,n=f.get(d),p[r]=n===void 0?-1:n,f.set(d,r);for(n=s;n<=c;n++)u=this.Yt[n],d=this.Ht?this.Ht(u):u,r=f.get(d),r!==void 0&&r!==-1?(_[r]=this.ts[n],v[r]=this.ss[n],i&&(i[r]=this.es[n]),a&&(a[r]=this.rs[n]),r=p[r],f.set(d,r)):(m??=[]).push(this.ss[n]);try{for(r=s;r<=l;r++)v[r]===void 0&&((h??=[]).push(v[r]=j()),_[r]=G(v[r],o))}catch(e){if(h)for(n=0;n<h.length;n++)h[n].dispose();throw e}for(n=0;n<s;n++)_[n]=this.ts[n],v[n]=this.ss[n],i&&(i[n]=this.es[n]),a&&(a[n]=this.rs[n]);for(r=s;r<=l;r++)i&&W(i[r],e[r]),a&&W(a[r],r);for(r=l+1;r<t;r++)_[r]=this.ts[r-g],v[r]=this.ss[r-g],i&&(i[r]=this.es[r-g],W(i[r],e[r])),a&&(a[r]=this.rs[r-g],g!==0&&W(a[r],r));if(this.ts=_,this.ss=v,i&&(this.es=i),a&&(this.rs=a),this.Jt=t,this.Yt=e.slice(0),m)for(n=0;n<m.length;n++)m[n].dispose()}}),this.ts}function ln(e,t,n){return!e||e(t)===e(n)}function un(e,t){let r=z(e,{lazy:!0});return B(r).h=(e,t)=>{let i=e===void 0?r.S:e,a=t===void 0?r.o?._:t;r.S&=~r.R;let o=r.C.notify(r,3,i,a),s=i&~r.R&3;if(s&&(r.S&=~s,r.o?._===a&&!(r.S&3)&&r.o!==null&&(r.o._=void 0)),!o&&i&2)throw _e(n(a)),a},r.R=t,r.T&=-33,R(r,!0),r}function dn(e,t,n,r){let i=e.C;return i.addChild(e.C=n),tt(()=>i.removeChild(e.C)),G(e,()=>{let e=z(t);return un(()=>gn(U(e)),r)})}var fn=Symbol(),pn=class extends be{ee;v=new Set;te;U=!0;D=V(!1,{ownedWrite:!0,H:!0});_;P=V(!1,{ownedWrite:!0,H:!0});W;L=!1;re;ne=fn;constructor(e){super(),this.ee=e}run(e){if(!(!e||U(this.D)))return super.run(e)}notify(e,t,r,i){if(!(t&this.ee))return super.notify(e,t,r,i);if(this.L&&this.re){let e=H(()=>{try{return this.re()}catch{return fn}});e!==this.ne&&(this.ne=e,this.L=!1,this.v.clear())}if(this.ee&1&&this.L)return super.notify(e,t,r,i);if(r&this.ee){this.U=!0;let t=i?.source||e.o?._?.source;if(t){let e=this.v.size===0;this.v.add(t),e&&W(this.D,!0),this.ee&2&&W(this._,n(t.o?._))}}return t&=~this.ee,!t||super.notify(e,t,r,i)}se(){for(let e of this.v)(e.ie&64||!e.o?.t&&!(e.S&this.ee)&&!(this.ee&2&&e.S&1))&&this.v.delete(e);if(!this.v.size&&(this.U=this.ee&1&&this.U&&!this.L&&this.te?!!(this.te.S&this.ee):!1,!this.U&&(W(this.D,!1),this.re)))try{this.ne=H(()=>this.re())}catch{}}};function mn(t,n,r,i){let a=j(),o=new pn(t);t===2&&(o._=V(void 0,{ownedWrite:!0,H:!0})),i&&(o.re=i);let s=o.te=dn(a,n,o,t);return H(()=>{let n=!1;try{U(s)}catch(t){if(t instanceof e)n=!0;else throw t}o.U=n||!!(s.S&t)||s.o?._ instanceof e}),K(z(()=>{if(!U(o.D)){let e=U(s);if(!H(()=>U(o.D)))return o.L=!0,e}return r(o)},{H:!0}))}function hn(e,t,n){return mn(1,e,()=>t(),n?.on)}function gn(e,t){if(typeof e==`function`&&!e.length){if(t?.doNotUnwrap)return e;do e=e();while(typeof e==`function`&&!e.length)}if(!(t?.skipNonRendered&&(e==null||e===!0||e===!1||e===``))){if(Array.isArray(e)){let n=[];return _n(e,n,t)?()=>{let e=[];return _n(n,e,{...t,doNotUnwrap:!1}),e}:n}return e}}function _n(t,n=[],r){let i=null,a=!1;for(let o=0;o<t.length;o++)try{let e=t[o];if(typeof e==`function`&&!e.length){if(r?.doNotUnwrap){n.push(e),a=!0;continue}do e=e();while(typeof e==`function`&&!e.length)}Array.isArray(e)?a=_n(e,n,r)||a:r?.skipNonRendered&&(e==null||e===!0||e===!1||e===``)||n.push(e)}catch(t){if(!(t instanceof e))throw t;i=t}if(i)throw i;return a}var vn=!1;function yn(e,t){let n=Symbol(t&&t.name||``);function r(e){return it(()=>(Yt(r,e.value),xn(()=>e.children)))}return r.id=n,r.defaultValue=e,r}function bn(e){return Jt(e)}function xn(e){let t=q(e,{lazy:!0}),n=q(()=>gn(t()),{lazy:!0,sync:!0});return n.toArray=()=>{let e=n();return Array.isArray(e)?e:e==null?[]:[e]},n}var Sn={id:Symbol(`NoHydrateContext`),defaultValue:!1},J={hydrating:!1,registry:void 0,done:!1};function Cn(){let e=A();if(!e)throw Error(`getNextContextId cannot be used under non-hydrating context`);if(!Jt(Sn))return Ze(e)}var wn=null,Tn=0,En=!1,Dn=null;function On(){if(Dn)return;let e=A();if(e){for(;e._parent;)e=e._parent;jt(e),Dn=e}}function kn(){return!En&&(J.hydrating||Tn>0)}function An(e){if(En||!J.hydrating&&Tn===0){queueMicrotask(e);return}wn||=[],wn.push(e)}function jn(){if(En)return;En=!0,Pn=!0,Pt(),At(!1),D();let e=wn;if(wn=null,e)for(let t of e)t();setTimeout(()=>{globalThis._$HY&&(globalThis._$HY.done=!0),J.registry?.clear()})}function Mn(){!Nn&&Tn===0&&jn()}var Nn=!1,Pn=!1,Fn,In,Ln,Rn,zn,Bn,Vn=(()=>{class e{catch(){return new e}then(){return new e}finally(){return new e}}for(let t of[`all`,`allSettled`,`any`,`race`,`reject`,`resolve`])e[t]=()=>new e;return e})();function Hn(e,t){let n=fetch,r=Promise;try{window.fetch=()=>new Vn,Promise=Vn;let n=e(t);return n&&typeof n[Symbol.asyncIterator]==`function`&&n[Symbol.asyncIterator]().next(),n&&typeof n.then==`function`&&n.then(void 0,()=>{}),n}finally{window.fetch=n,Promise=r}}function Un(e){return{then(t){t(e)}}}function Wn(e,t,n){if(t(),typeof e==`object`&&e){if(Zn(n)&&typeof e.then==`function`)return{then:e.then.bind(e)};if(e.s===2)throw typeof e.then==`function`&&e.then(void 0,()=>{}),e.v;if(e.s===1)return e.v}return e}var Gn=new WeakSet;function Kn(e,t,n){let r=A();return J.done||!J.has(r.id)?e(t):(Gn.has(r)?n?.ssrSource!==`hybrid`&&Xn():Gn.add(r),Wn(J.load(r.id),()=>{let r=Hn(e,t);return n?.ssrSource!==`hybrid`&&r!=null&&r[Jn]&&Xn(),r},n))}var qn={then(){}},Jn=Symbol.for(`solid.LiveSource`),Yn;function Xn(){if(!Yn){let[e,t]=tn(!1);Yn=e,An(()=>{Yn=void 0,t(!0)})}Yn()}function Zn(e){return typeof e==`object`&&!!e&&(`loadingValue`in e||e.seedLoadingValue===!0)}function Qn(e,t){let n=e.return?.(t);return n&&typeof n.then==`function`?n:Un(n??{done:!0,value:t})}function $n(e,t){let n=!0,r=null;return{next(){if(n){n=!1;let r=e.next();return r&&typeof r.then==`function`?r:t?Promise.resolve(r):Un(r)}if(r){let e=r;return r=null,e}let i=e.next();if(i&&typeof i.then==`function`)return i;let a=i;for(;!i.done;){let t=e.next();if(t&&typeof t.then==`function`){r=t;break}i=t,i.done?a!==i&&(r=Promise.resolve(i)):a=i}return Promise.resolve(a)},return(t){return r=null,Qn(e,t)}}}function er(e){return e!=null&&typeof e[Symbol.asyncIterator]==`function`}function tr(e,t,n){let r=$e(A());if(!J.has(r))return null;let i=J.load(r);if(!er(i))return null;let a=$n(i[Symbol.asyncIterator](),Zn(n)),o=!1,s={next(){let e=a.next();return{then(t,n){return e.then(e=>(e.done&&(o=!0),t(e)),e=>{if(o=!0,n)return n(e);throw e})}}},return(e){return a.return(e)}},c={[Symbol.asyncIterator](){return s}};return e(e=>o?t(e):(Hn(t,e),c),n)}function nr(e){let[t,n]=tn(!1,{ownedWrite:!0}),r=e(t);return n(!0),r}function rr(e,t,n){On();let r=n?.ssrSource;if(r===`client`)return nr(r=>e(e=>r()?t(e):qn,n));if(r===`hybrid`&&J.has($e(A()))){let r=!1,i=e=>{let n=t(e);return r=er(n),n};return nr(a=>e(e=>a()&&r?t(e):Kn(i,e,n),n))}let i=tr(e,t,n);return i===null?e(e=>Kn(t,e,n),n):i}function ir(e,t){return!J.hydrating||t?.transparent?q(e,t):rr(q,e,t)}function ar(e,t){return typeof e!=`function`||!J.hydrating?tn(e,t):rr(tn,e,t)}function or(e,t,n,r){if(!J.hydrating||r?.transparent)return e(t,n,r);if(r?.ssrSource===`client`){let i=!1;nr(a=>e(e=>a()?(i=!0,t(e)):e,(e,t)=>{if(i)return n(e,t)},r));return}On(),e(e=>Kn(t,e),n,r)}function sr(e,t,n){return or(rn,e,t,n)}function cr(e,t,n){return or(nn,e,t,n)}function lr(e,t,n){let r=A(),i=r&&r.id!=null?$e(r):void 0,a=i==null?void 0:globalThis._$HY?.modules?.[i];if(a){let e=n?a[n]:a.default;return()=>e}if(!e&&t)throw Error(`lazy() module "${t}" (hydration id "${i}") was not preloaded before hydration. Ensure it is inside a Loading boundary.`);return e}function ur(){Fn=ir,In=ar,Ln=sr,Rn=cr,zn=zr,Bn=lr,J.getNextContextId=Cn,J.isHydrationInProgress=kn,J.onHydrationEnd=An;let e=globalThis._$HY;if(e&&!e.fr){e.f||=Cr,e.fr={pending:kr,subscribe:Ar,claim:Tr,release:Er};let t=e.fe;e.fe=(e,n)=>{t&&t(e,n);for(let t of br)t(e,n)},jr(e)}Nn=J.hydrating,Pn=J.done,Object.defineProperty(J,"hydrating",{get(){return Nn},set(e){let t=Nn;Nn=e,!t&&e?(En=!1,Pn=!1,At(!0),Dn=null):t&&!e&&(Dn&&=(Mt(Dn),null),Mn())},configurable:!0,enumerable:!0}),Object.defineProperty(J,"done",{get(){return Pn},set(e){Pn=e,e&&jn()},configurable:!0,enumerable:!0})}var dr=(...e)=>(Fn||q)(...e),fr=(...e)=>(In||tn)(...e),pr=(...e)=>(Ln||rn)(...e),mr=(...e)=>(Rn||nn)(...e);function hr(){At(!1);let[e,t]=tn(void 0,{equals:!1});return e(),At(!0),t}function gr(e,t,n,r,i=!0){let a=J.boundaryScopes?.get(t);if(!r())return;if(nt(e)){Mn();return}let o=J.registry,s=J.gather;a&&(J.registry=a.registry,J.gather=a.gather);try{i&&J.gather?.(t),Nn=i,i&&(jt(e),Dn=e),n(),D(),i&&(Dn=null),Nn=!1,i&&Mt(e),D()}finally{a&&(J.registry=o,J.gather=s)}Mn()}function _r(e,t){Tn++,J.captureBoundaryScope?.(t);let n=!1,r=()=>{if(n)return!1;n=!0,Tn--,J.boundaryScopes?.delete(t);let e=vr.get(t);return e&&(e.claimed=!1),!0};en(()=>{nt(e)&&(J.cleanupFragment?.(t),r()&&Mn())});let i=hr();return[i,n=>gr(e,t,i,r,n),r]}var vr=new Map,yr=new Set,br=new Set,xr=new Map;function Sr(e){let t=vr.get(e);return t||vr.set(e,t={}),t}function Cr(e){let t=Sr(e);return!En||t.claimed?globalThis.$dfr(e):(t.held=!0,0)}function wr(e){let t=vr.get(e);t&&t.held&&(t.held=!1,globalThis.$dfr(e))}function Tr(e){Sr(e).claimed=!0,wr(e)}function Er(e){let t=vr.get(e);t&&(t.claimed=!1)}function Dr(e,t){if(yr.has(t))return!1;let n=e.r[t+`_fr`];return!n||typeof n!=`object`?!1:n.s?e.v&&e.v[t]||!document.getElementById(t)?!1:!!document.getElementById(`pl-`+t):!0}function Or(e){let t=globalThis._$HY;return t&&t.v&&t.v[e]||document.getElementById(e)?!1:!!document.getElementById(`pl-`+e)}function kr(){let e=globalThis._$HY;if(!e||!e.r)return!1;for(let t in e.r)if(t.length>3&&t.endsWith(`_fr`)&&Dr(e,t.slice(0,-3)))return!0;return!1}function Ar(e){return br.add(e),()=>br.delete(e)}function jr(e){typeof document>`u`||document.readyState!==`loading`||document.addEventListener(`DOMContentLoaded`,()=>{if(e.r){for(let t in e.r){if(t.length<=3||!t.endsWith(`_fr`))continue;let n=e.r[t];n&&typeof n==`object`&&!n.s&&Nr(e,t.slice(0,-3))}setTimeout(()=>Mr(e))}},{once:!0})}function Mr(e){let t=globalThis.$R;if(!t||typeof t!=`object`)return;let n,r=t=>{if(!t||typeof t!=`object`||typeof t.f!=`function`||!t.p||typeof t.p.then!=`function`||t.p.s)return;if(!n){n=new Map;for(let t in e.r)n.set(e.r[t],t)}let r=n.get(t.p);if(r!==void 0){delete e.r[r];return}let i=Error(`Hydration value was truncated: the stream ended before it settled.`);t.f(i),t.p.s=2,t.p.v=i,t.p.then(void 0,()=>{})};for(let e in t){let n=t[e];if(Array.isArray(n))for(let e of n)r(e);else r(n)}}function Nr(e,t){if(yr.has(t))return;yr.add(t);let n=Error(`Hydration fragment "${t}" was truncated: the stream ended before its content arrived.`),r=e.r[t+`_fr`];r&&typeof r==`object`&&(r.s=2,r.v=n);let i=xr.get(t);i&&(xr.delete(t),i(n));for(let e of br)e(t)}function Pr(e){return new Promise((t,n)=>xr.set(e,n))}function Fr(e,t,n,r=!0,i){let a=(i?Promise.race([Promise.resolve(e),i]):Promise.resolve(e)).then(()=>(e&&typeof e==`object`&&(e.s=1),!0),t=>(e&&typeof e==`object`&&(e.s=2,e.v=t),r));if(!n){a.then(e=>t(e));return}let o=n.then(()=>!0,e=>(Ir(e),!1));Promise.all([a,o]).then(([e,n])=>t(n?e:!1))}function Ir(e){console.error(`Hydration module preload failed; rendering boundary content on the client:`,e)}function Lr(e,t,n){J.gather?.(e);let r=()=>queueMicrotask(t);return n?(n.then(r,e=>{Ir(e),queueMicrotask(()=>t(!1))}),!0):(r(),!1)}var Rr=(e,t,n)=>(zn||hn)(e,t,n);function zr(e,t,n){if(!J.hydrating)return hn(e,t,n);let r=!1;return q(()=>{let i=A(),a=i.id,o;if(J.hydrating&&J.has(a+`_assets`)){let e=J.load(a+`_assets`);e&&typeof e==`object`&&(o=J.loadModuleAssets?.(e))}if(J.hydrating&&J.has(a)){let s=J.load(a),c;if(s&&(typeof s!=`object`||s.s==null?c=s:s.s===1||s.s===2?J.gather?.(a):c=s),s&&typeof s==`object`&&s.s===1&&c==null&&!r){if(o){r=!0;let[,e]=_r(i,a);Lr(a,e,o);return}return hn(e,t,n)}if(c){let[e,n,r]=_r(i,a);if(c!==`$$f`)Fr(c,n,o);else{let t=()=>{r()&&(e(),Mn())};o?o.then(()=>queueMicrotask(t),e=>{Ir(e),queueMicrotask(t)}):queueMicrotask(t)}return t()}}if(J.hydrating&&J.has(a+`_fr`)&&!r){let s=J.load(a+`_fr`);if(wr(a),s&&typeof s==`object`&&s.s===1&&!o&&!Or(a))return J.gather?.(a),hn(e,t,n);r=!0;let[,c]=_r(i,a);if(s&&typeof s==`object`&&s.s===1&&Or(a)){let e=()=>c(!1);return o?o.then(()=>queueMicrotask(e),t=>{Ir(t),queueMicrotask(e)}):queueMicrotask(e),t()}if(s&&typeof s==`object`&&(s.s===1||s.s===2)){if(s.s===2){s.catch?.(()=>{});let e=()=>c(!1);o?o.then(()=>queueMicrotask(e),t=>{Ir(t),queueMicrotask(e)}):queueMicrotask(e);return}Lr(a,c,o);return}return Tr(a),Fr(s,c,o,!1,Pr(a)),t()}if(o&&!J.has(a)){let[,e]=_r(i,a);o.then(()=>e(),t=>{Ir(t),e(!1)});return}return hn(e,t,n)})}function Br(e,t){return H(()=>e(t||{}))}function Vr(e,t,n){let r=t?.export,i,a,o=()=>{if(a)return a;let t=a=e();return t.then(e=>{i=()=>r?e[r]:e.default},()=>{a===t&&(a=void 0)}),t},s=e=>{J.hydrating&&(i=Bn(i,n,r));let t=i;t||=(o(),q(()=>o().then(e=>r?e[r]:e.default)));let a;return q(()=>(a=(i||t)())?H(()=>a(e)):``,{sync:!0})};return s.preload=o,s.moduleUrl=n,s}var Hr=0;function Ur(){return J.hydrating?J.getNextContextId():`cl-${Hr++}`}var Wr=e=>`Stale read from <${e}>.`;function Gr(e){let t=`fallback`in e?{keyed:e.keyed,fallback:()=>e.fallback}:{keyed:e.keyed},n=A(),r,i=()=>G(n,()=>on(()=>e.each,e.children,t));return J.hydrating&&(r=i()),()=>(r??=i())()}function Kr(e){let t=e.keyed,n=q(()=>e.when,void 0),r=t?n:q(n,{equals:(e,t)=>!e==!t,sync:!0});return q(()=>{let i=r();if(i){let a=e.children;return typeof a==`function`&&a.length>0?H(t?()=>a(i):()=>a(()=>{if(!H(r))throw Wr(`Show`);return n()}),vn):a}return e.fallback},{sync:!0})}function qr(e){let t=xn(()=>e.children),n=q(()=>{let e=t.toArray(),n=()=>void 0;for(let t=0;t<e.length;t++){let r=t,i=e[t];if(i==null)continue;let a=n,o=q(()=>a()?void 0:i.when,void 0),s=i.keyed?o:q(o,{equals:(e,t)=>!e==!t,sync:!0});n=()=>{let e=a();if(e)return e;let t=s();return t?[r,t,o,i]:void 0}}return n},{sync:!0});return q(()=>{let t=n()();if(!t)return e.fallback;let[r,i,a,o]=t,s=o.children;return typeof s==`function`&&s.length>0?H(o.keyed?()=>s(i):()=>s(()=>{if(H(n)()?.[0]!==r)throw Wr(`Match`);return a()}),vn):s},{sync:!0})}function Jr(e){return e}function Yr(e){return Rr(()=>e.children,()=>e.fallback,`on`in e?{on:()=>e.on}:void 0)}var Xr=`modulepreload`,Zr=function(e){return`/`+e},Qr={},$r=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Zr(t,n),t=s(t),t in Qr)return;Qr[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:Xr,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},ei={INPUT:{value:1,defaultValue:2,checked:1,defaultChecked:2},SELECT:{value:1},OPTION:{value:1,selected:1,defaultSelected:2},TEXTAREA:{value:1,defaultValue:2},VIDEO:{muted:1,defaultMuted:2},AUDIO:{muted:1,defaultMuted:2}},ti=new Set([`innerHTML`,`textContent`,`innerText`,`children`]),Y=Symbol(`slot`),ni=Symbol(`host`),ri=new Set([`beforeinput`,`click`,`dblclick`,`contextmenu`,`focusin`,`focusout`,`input`,`keydown`,`keyup`,`mousedown`,`mousemove`,`mouseout`,`mouseover`,`mouseup`,`pointerdown`,`pointermove`,`pointerout`,`pointerover`,`pointerup`,`touchend`,`touchmove`,`touchstart`]),ii={svg:`http://www.w3.org/2000/svg`,mathml:`http://www.w3.org/1998/Math/MathML`,xlink:`http://www.w3.org/1999/xlink`,xml:`http://www.w3.org/XML/1998/namespace`},ai={transparent:!0,sync:!0},oi={sync:!0};function si(e,t,n){pr(e,t,n?{sync:!0,...n,transparent:!n.scope}:ai)}function ci(e){return dr(()=>e(),oi)}function li(e,t,n,r){let i=n.length,a=t.length,o=i,s=0,c=0,l=t[a-1],u=l[Y],d=l.parentNode===e&&(!u||u===r)?l.nextSibling:r||null,f=null,p,m,h=t=>{if(!t)return!1;let n=t[Y];return t.parentNode===e&&(!n||n===r)};for(;s<a||c<o;){if(t[s]===n[c]&&h(t[s])){s++,c++;continue}for(;t[a-1]===n[o-1]&&h(t[a-1]);)a--,o--;if(a===s){let t;if(o<i){if(c){let i=n[c-1],a=i[Y];t=i.parentNode===e&&(!a||a===r)?i.nextSibling:d}else t=n[o-c]}else t=d;for(;c<o;){let i=n[c++];e.insertBefore(i,t),r&&(i[Y]=r)}}else if(o===c)for(;s<a;){let n=t[s++];if(!f||!f.has(n)){let t=n[Y];n.parentNode===e&&(!t||t===r)&&n.remove()}}else if((p=t[s])===n[o-1]&&n[c]===t[a-1]&&p.parentNode===e&&(!(m=p[Y])||m===r)){if(r)do{let n=t[--a];if(e.insertBefore(n,p),n[Y]=r,c++,s>=a-1||c>=o)break}while(t[s]===n[o-1]&&n[c]===t[a-1]);else do if(e.insertBefore(t[--a],p),c++,s>=a-1||c>=o)break;while(t[s]===n[o-1]&&n[c]===t[a-1])}else{if(!f){f=new Map;let e=c;for(;e<o;)f.set(n[e],e++)}let i=f.get(t[s]);if(i!=null){if(c<i&&i<o){let l=s,u=1,p;for(;++l<a&&l<o&&(p=f.get(t[l]))!=null&&p===i+u;)u++;if(u>i-c){let a=t[s],o=a[Y],l=a.parentNode===e&&(!o||o===r)?a:d;for(;c<i;){let t=n[c++];e.insertBefore(t,l),r&&(t[Y]=r)}}else{let i=t[s++],a=n[c++],o=i[Y];i.parentNode===e&&(!o||o===r)?e.replaceChild(a,i):e.insertBefore(a,d),r&&(a[Y]=r)}}else s++}else{let n=t[s++],i=n[Y];n.parentNode===e&&(!i||i===r)&&n.remove()}}}}var ui=`_$SOLID_EVENT_OWNER`,di=Symbol(),fi=Object.prototype.hasOwnProperty,pi={},mi=new Set,hi=new Map;function gi(e,t,n,r={}){let i;bi(t);try{it(a=>{if(i=a,t===document){let t=e();si(()=>gn(t),()=>{})}else{let i=e();Hi(t,()=>i,t.firstChild?null:void 0,n,{...r.insertOptions,schedule:!0})}},{id:r.renderId}),D()}catch(e){throw i&&i(),xi(t),e}return()=>{i(),xi(t),t.textContent=``}}function _i(e,t,n){let r=document.createElement(`template`);return r.innerHTML=e,n===2?r.content.firstChild.firstChild:r.content.firstChild}function vi(e,t){let n;return t===1?r=>document.importNode(n||=_i(e,r,t),!0):r=>(n||=_i(e,r,t)).cloneNode(!0)}function yi(e){for(let t=0,n=e.length;t<n;t++){let n=e[t];mi.has(n)||(mi.add(n),hi.forEach((e,t)=>wi(n,t,e)))}}function bi(e){let t=Si(e,e);t&&(t.roots=(t.roots||0)+1)}function xi(e){let t=hi.get(e);t&&(t.roots>1?t.roots--:delete t.roots),Ci(e,e)}function Si(e,t=e){if(!e||!t)return;let n=hi.get(e);return n||hi.set(e,n={owners:new Map,handlers:new Map}),n.owners.set(t,(n.owners.get(t)||0)+1),mi.forEach(t=>wi(t,e,n)),n}function Ci(e,t=e){let n=hi.get(e);if(!n)return;let r=n.owners.get(t);r>1?n.owners.set(t,r-1):n.owners.delete(t),!n.owners.size&&(n.handlers.forEach((t,n)=>e.removeEventListener(n,t)),hi.delete(e))}function wi(e,t,n){if(n.handlers.has(e))return;let r=e=>Qi(e,t,n);n.handlers.set(e,r),t.addEventListener(e,r)}function Ti(e,t){let n=e,r=0;for(;n;){if(t.owners.has(n))return{owner:n,distance:r};r++,n=n._$host||n.parentNode||n.host}}function Ei(e,t,n){if(Z(e))return;let r=e.nodeName;t===`value`&&r===`SELECT`?queueMicrotask(()=>e.value=n)||(e.value=n):e[t]=(t===`value`||t===`defaultValue`)&&(r===`INPUT`||r===`TEXTAREA`)?n??``:n}var Di=null;function Oi(e){if(Di!==null)for(let t=0;t<Di.length;t++)Di[t](e);return e}function ki(e,t,n){if(Z(e))return;let r=t===`multiple`&&e.localName===`select`;if(n==null||n===!1)e.removeAttribute(t);else if(e.setAttribute(t,n===!0?``:n),r&&!e._$multiple){let t=e.options;for(let e=0;e<t.length;e++)t[e].defaultSelected&&(t[e].selected=!0)}r&&(e._$multiple=!0),Di!==null&&(t===`href`||t===`action`)&&Oi(e)}function Ai(e,t,n,r){Z(e)||(r==null||r===!1?e.removeAttributeNS(t,n.indexOf(`:`)>-1?n.split(`:`).pop():n):e.setAttributeNS(t,n,r===!0?``:r))}function ji(e,t,n){if(typeof t==`number`&&(t=``+t),typeof n==`number`&&(n=``+n),Z(e)){e._$classes=t&&typeof t==`object`?Yi(t):void 0;return}if(t==null||t===!1){(n||e._$classes)&&(e.removeAttribute(`class`),e._$classes=void 0);return}if(typeof t==`string`){e._$classes=void 0,t!==n&&e.setAttribute(`class`,t);return}let r;typeof n==`string`?(r={},e.removeAttribute(`class`)):r=e._$classes||Yi(n||{}),t=Yi(t);let i=Object.keys(t),a=Object.keys(r),o,s;for(o=0,s=a.length;o<s;o++){let n=a[o];!n||n===`undefined`||t[n]||e.classList.remove(n)}for(o=0,s=i.length;o<s;o++){let n=i[o],a=!!t[n];!n||n===`undefined`||r[n]===a||!a||e.classList.add(n)}e._$classes=t}function Mi(e,t,n,r){if(r){let r=`$$${t}`,i;Array.isArray(n)?(i=n[1],e[r]=n[0]):e[r]=n,e[`${r}Data`]=i;return}if(Array.isArray(n)){let r=n[0],i=t=>r.call(e,n[1],t);return i[di]=n,e.addEventListener(t,i),i}return e.addEventListener(t,n,typeof n!=`function`&&n),n}function Ni(e,t,n){if(Z(e))return;if(!t){(n||e._$styles)&&(ki(e,`style`),e._$styles=void 0);return}let r=e.style;if(typeof t==`string`)return e._$styles=void 0,r.cssText=t;typeof n==`string`&&(r.cssText=``,n=void 0);let i=e._$styles;i||=e._$styles=n?{...n}:{};let a,o;for(o in i)(!fi.call(t,o)||t[o]==null)&&(r.removeProperty(o),delete i[o]);for(o in t)fi.call(t,o)&&(a=t[o],a!=null&&a!==i[o]&&(r.setProperty(o,a),i[o]=a))}function Pi(e,t,n){Z(e)||(n==null?e.style.removeProperty(t):e.style.setProperty(t,n))}function Fi(e,t,n){let r={},i=()=>(typeof t==`function`?t():t)??{};return n||Hi(e,()=>{let e=i();return fi.call(e,`children`)?e.children:void 0}),si(()=>{let t=i(),n=fi.call(t,`ref`)&&t.ref;(typeof n==`function`||Array.isArray(n))&&Li(()=>n,e)},()=>{}),si(()=>{let e=i(),t={};for(let n in e)fi.call(e,n)&&n!==`children`&&n!==`ref`&&(t[n]=e[n]);return t},t=>Ui(e,t,!0,r,!0)),r}function Ii(e,t){Array.isArray(e)?e.flat(1/0).forEach(e=>e&&e(t)):e(t)}function Li(e,t){let n=H(e);G(null,()=>Ii(n,t))}function Ri(e){return e.$s=!0,e}var zi={scope:!0},X=null;function Bi(){X={claimInitial(e,t,n){return Z(e)&&(!t&&n===void 0&&e&&(n=[...e.childNodes]),Array.isArray(n)&&Vi(n)),n},reclaimRegion(e,t,n){if(!J.hydrating||!e||!t.isConnected)return e;let r=Array.isArray(e)?e[0]:e;if(!r||!r.nodeType||r.isConnected)return e;let i;if(n){i=[];let e=n.previousSibling,t=0;for(;e;){if(e.nodeType===8){let n=e.nodeValue;if(n===`/`)t++;else if(n===`$`){if(t===0)break;t--}}i.unshift(e),e=e.previousSibling}}else i=[...t.childNodes];return Vi(i)},dedupEvent(e){return!!(J.registry&&J.events&&J.events.find(([t,n])=>n===e))}}}function Vi(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=r.nodeType;if(i===8){let e=r.nodeValue;if(e===`!$`){r.remove();continue}if(e.startsWith(`pl-`))continue}else if(i===1&&r.localName===`template`&&r.id.startsWith(`pl-`))continue;e[t++]=r}return e.length=t,e}function Hi(e,t,n,r,i){let a=n!==void 0,o=i&&i.host;if(a&&!r&&(r=[]),X!==null&&(r=X.claimInitial(e,a,r)),typeof t!=`function`&&(t=ea(t,r,a,!0),typeof t!=`function`)){$i(e,t,r,n),o&&ta(t,o);return}if(a&&r.length===0){let t=document.createTextNode(``);e.insertBefore(t,n),r=[t]}let s=r;si(r=>{X!==null&&(s=X.reclaimRegion(s,e,n));let c=ea(t(),s,a,!0);return typeof c==`function`?(si(()=>(X!==null&&(s=X.reclaimRegion(s,e,n)),ea(c,s,a)),t=>{s=$i(e,t,s,n),o&&ta(s,o)},r!==void 0&&!(i&&i.schedule)?{...i,schedule:!0}:i),pi):c},t=>{t!==pi&&(s=$i(e,t,s,n),o&&ta(s,o))},t.$s?i?{...i,scope:!0}:zi:i)}function Ui(e,t,n,r={},i=!1){let a=e.nodeName;t||={};for(let n in r)if(!(n in t)){if(n===`children`)continue;r[n]=Zi(e,n,null,r[n],i,a)}for(let o in t){if(o===`children`){n||$i(e,ea(t.children,void 0,!1));continue}r[o]=Zi(e,o,t[o],r[o],i,a)}}function Wi(e){let t=globalThis._$HY;if(!t)return;let n=[];for(let r in e){if(t.modules[r])continue;let i=new URL(e[r],document.baseURI).href;t.loading[r]||(t.loading[r]=$r(()=>import(i).then(e=>{t.modules[r]=e},e=>{throw delete t.loading[r],e}),[])),n.push(t.loading[r])}return n.length?Promise.all(n).then(()=>{}):void 0}function Gi(e,t,n={}){if(ur(),Bi(),globalThis._$HY.done)return gi(e,t,[...t.childNodes],n);let r=(t.nodeType===9?t:t.ownerDocument).head;if(r&&t.contains(r)){let e=r.firstChild;for(;e&&e.nodeType===1&&e.hasAttribute(`data-dh`)&&!e.hasAttribute(`data-dhf`);){let t=e.nextSibling;r.appendChild(e),e=t}}n.renderId||=``,globalThis._$HY.modules||(globalThis._$HY.modules={}),globalThis._$HY.loading||(globalThis._$HY.loading={}),J.completed=globalThis._$HY.completed,J.events=globalThis._$HY.events,J.load=e=>globalThis._$HY.r[e],J.has=e=>e in globalThis._$HY.r,J.gather=e=>oa(t,e),J.loadModuleAssets=Wi,J.cleanupFragment=e=>{let t=document.getElementById(`pl-`+e);if(t){let n=t.nextSibling;for(;n;){let t=n.nextSibling;if(n.nodeType===8&&n.nodeValue===`pl-`+e){n.remove();break}n.remove(),n=t}t.remove()}},J.registry=new Map,J.boundaryScopes||=new Map,J.captureBoundaryScope=e=>{J.registry&&J.boundaryScopes.set(e,{registry:J.registry,gather:J.gather})},J.hydrating=!0;let i=globalThis._$HY.r,a=i&&(i[n.renderId+`_assets`]||i._assets);if(a&&typeof a==`object`){let r=Wi(a);if(r){oa(t,n.renderId);let i=J.registry,a=J.gather,o;return r.then(()=>{J.registry=i,J.gather=a,J.hydrating=!0;try{o=gi(e,t,[...t.childNodes],n)}finally{J.hydrating=!1}},r=>{console.error(`Hydration module preload failed, falling back to client render:`,r),J.hydrating=!1,J.registry=void 0,o=gi(e,t,[...t.childNodes],n)}),()=>o&&o()}}try{return oa(t,n.renderId),gi(e,t,[...t.childNodes],n)}finally{J.hydrating=!1}}function Ki(e){let t,n;if(!Z()||!(t=J.registry.get(n=sa()))){if(!e)throw Error(`Hydration Mismatch. Unable to find DOM nodes for hydration key: ${n}`);return e(!0)}return J.completed&&J.completed.add(t),J.registry.delete(n),t}function qi(e){let t=e,n=0,r=[];if(Z(e))for(;t;){if(t.nodeType===8){let e=t.nodeValue;if(e===`$`)n++;else if(e===`/`){if(n===0)return[t,r];n--}}r.push(t),t=t.nextSibling}return[t,r]}function Ji(){J.events&&!J.events.queued&&(queueMicrotask(()=>{let{completed:e,events:t}=J;if(t){for(t.queued=!1;t.length;){let[n,r]=t[0];if(!e.has(n))return;t.shift();let i,a,o,s;for(let[e,t]of hi){if(!t.handlers.has(r.type))continue;let n=Ti(r.target,t);n&&(i?(s||=[{container:i,state:a,distance:o}],s.push({container:e,state:t,distance:n.distance})):(i=e,a=t,o=n.distance))}if(s){s.sort((e,t)=>e.distance-t.distance);for(let e=0;e<s.length;e++)Qi(r,s[e].container,s[e].state)}else i&&Qi(r,i,a)}J.done&&(J.events=_$HY.events=null,J.completed=_$HY.completed=null)}}),J.events.queued=!0)}function Z(e){if(!J.hydrating)return!1;if(!e||e.isConnected)return!0;let t=J.claimRoots;if(t){for(let n=0;n<t.length;n++)if(t[n].contains(e))return!0}return!1}function Yi(e){if(Array.isArray(e)){let t={};Xi(e,t),e=t}if(e&&typeof e==`object`){let t={},n=Object.keys(e);for(let r=0,i=n.length;r<i;r++){let i=n[r];if(!e[i])continue;let a=i.trim().split(/\s+/);for(let e=0,n=a.length;e<n;e++)a[e]&&(t[a[e]]=!0)}return t}return e}function Xi(e,t){for(let n=0,r=e.length;n<r;n++){let r=e[n];Array.isArray(r)?Xi(r,t):typeof r==`object`&&r?Object.assign(t,r):typeof r!=`boolean`&&(r||r===0)&&(t[r]=!0)}}function Zi(e,t,n,r,i,a){if(t===`style`)return Ni(e,n,r),n;if(t===`class`)return ji(e,n,r),n;if(n===r&&ei[a]?.[t]!==1)return r;if(t===`ref`)return!i&&n&&Li(()=>n,e),n;let o=t.indexOf(`:`)>-1;if(!o&&t.slice(0,2)===`on`){let i=t.slice(2).toLowerCase(),a=ri.has(i);if(!a&&r){if(Array.isArray(n)&&typeof r==`function`&&r[di]===n)return r;e.removeEventListener(i,r,typeof r!=`function`&&r)}if(a||n){let t=Mi(e,i,n,a);if(a&&yi([i]),!a)return t}}else if(o&&t.slice(0,5)===`prop:`||ti.has(t)||ei[a]?.[t]){if(o)t=t.slice(5);else if(Z(e))return n;t===`value`&&a===`SELECT`?queueMicrotask(()=>e.value=n)||(e.value=n):(t===`value`||t===`defaultValue`)&&(a===`INPUT`||a===`TEXTAREA`)?e[t]=n??``:e[t]=n}else{let r=o&&ii[t.split(`:`)[0]];r?Ai(e,r,t,n):ki(e,t,n)}return n}function Qi(e,t,n){if(X!==null&&X.dedupEvent(e))return;let r=e[ui],i;if(r){if(r===!0||r===t||!t.contains(r))return;i=r}let a=n&&(n.owners.size===1&&n.owners.has(t)?t:Ti(e.target,n)?.owner);if(n&&!a||a&&a===i)return;e[ui]=a||!0;let o=i||e.target,s=`$$${e.type}`,c=e.target,l=a||t||e.currentTarget,u=t=>Object.defineProperty(e,"target",{configurable:!0,value:t}),d=()=>{let t=o[s];if(t===void 0&&o.hasAttribute&&o.hasAttribute(`_bnd`)){let n=globalThis[Symbol.for(`solid.bnd`)];n&&(t=n.resolve(o,e.type))}if(t&&!o.disabled){let n=o[`${s}Data`];if(n===void 0?typeof t==`function`?t.call(o,e):t.handleEvent(e):t.call(o,n,e),e.cancelBubble)return}return o.host&&typeof o.host!=`string`&&!o.host._$host&&o.contains(e.target)&&u(o.host),!0},f=()=>{for(;o&&d()&&o!==l&&o.parentNode!==l;)o=o._$host||o.parentNode||o.host};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return o||l||document}}),i)i===e.target&&(o=i._$host||i.parentNode||i.host),o&&o!==l&&f();else if(e.composedPath){let t=e.composedPath();if(t.length){u(t[0]);for(let e=0;e<t.length&&(o=t[e],d());e++){if(o._$host){o=o._$host,f();break}if(o===l||o.parentNode===l)break}}else f()}else f();u(c)}function $i(e,t,n,r){if(X!==null&&Z(e)){if(t&&t!==n){let e=Array.isArray(t);for(let r of e?t:[t])if(r&&r.nodeType){if(!Z(r))return n}else if(e&&(typeof r==`string`||typeof r==`number`))return n}return t}if(t===n)return t;let i=typeof t,a=r!==void 0;if(i===`string`||i===`number`){let r=typeof n;r===`string`||r===`number`?e.firstChild.data=t:ra(e,n)?e.textContent=t:(ia(e,n),e.insertBefore(document.createTextNode(t),e.firstChild))}else if(t===void 0)aa(e,n,r);else if(t.nodeType)Array.isArray(n)?aa(e,n,a?r:null,t):n&&n.nodeType?n.parentNode===e?e.replaceChild(t,n):e.appendChild(t):n&&e.firstChild?e.replaceChild(t,e.firstChild):e.appendChild(t),r&&(t[Y]=r);else if(Array.isArray(t)){let i=n&&Array.isArray(n);for(let e=0,r=t.length;e<r;e++){let r=t[e],a=typeof r;if(a===`string`||a===`number`){let a=i?n[e]:void 0;a&&a.nodeType===3?(a.data!==``+r&&(a.data=r),t[e]=a):t[e]=document.createTextNode(r)}}t.length===0?aa(e,n,r):i?n.length===0?na(e,t,r):li(e,n,t,r):(n&&aa(e,n),na(e,t))}return t}function ea(e,t,n,r){if(e=gn(e,{skipNonRendered:!0,doNotUnwrap:r}),r&&typeof e==`function`)return e;if(n&&!Array.isArray(e)&&(e=[e??``]),J.hydrating&&Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n],i=t&&t[n],a=typeof r;(a===`string`||a===`number`)&&i&&i.nodeType===3&&Z(i)&&(e[n]=i)}return e}function ta(e,t){if(Array.isArray(e))for(let n=0,r=e.length;n<r;n++)ta(e[n],t);else e&&e.nodeType&&e[ni]!==t&&(e[ni]=t,Object.defineProperty(e,"_$host",{get:t,configurable:!0}))}function na(e,t,n=null){for(let r=0,i=t.length;r<i;r++){let i=t[r];e.insertBefore(i,n),n&&(i[Y]=n)}}function ra(e,t){if(t==null)return!0;if(Array.isArray(t))return t.length?e.firstChild===t[0]&&e.lastChild===t[t.length-1]:e.firstChild===null;if(t===``)return e.firstChild===null;if(t.nodeType)return e.firstChild===t&&e.lastChild===t;let n=e.firstChild;return n!==null&&n.nodeType===3&&e.lastChild===n}function ia(e,t){if(Array.isArray(t))for(let n=0;n<t.length;n++){let r=t[n];r.parentNode===e&&r.remove()}else if(t.nodeType)t.parentNode===e&&t.remove();else{let t=e.firstChild;t&&t.nodeType===3&&t.remove()}}function aa(e,t,n,r){if(n===void 0)return ra(e,t)?e.textContent=``:ia(e,t);if(t.length){let i=!1;for(let a=t.length-1;a>=0;a--){let o=t[a];if(r!==o){let t=o[Y],s=o.parentNode===e&&(!t||t===n);r&&!i&&!a?s?e.replaceChild(r,o):e.insertBefore(r,n):s&&o.remove()}else i=!0}}else r&&e.insertBefore(r,n);r&&n&&(r[Y]=n)}function oa(e,t){let n=e.querySelectorAll(`*[_hk]`);for(let r=0;r<n.length;r++){let i=n[r],a=i.getAttribute(`_hk`);if(t){if(!a.startsWith(t))continue}else{let t=i.closest(`[data-fid]`);if(t&&t!==e&&e.contains(t))continue}J.registry.has(a)||J.registry.set(a,i)}}function sa(){return J.getNextContextId()}var ca;function la(e,t){let n=ca;ca=e;try{return t()}finally{ca=n}}function ua(e){return ca===void 0?e():G(j({id:`${ca}view-`}),e)}function da(e){return G(j({id:`${Ur()}-`}),e)}function fa(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return t[n]=Object.assign({},r),ya(r.value)&&!ba(r.value)&&!Array.isArray(r.value)&&(t[n].value=Object.assign({},r.value)),Array.isArray(r.value)&&(t[n].value=r.value.slice(0)),t},{})}function pa(e){return e?Object.keys(e).reduce((t,n)=>{let r=e[n];return t[n]=ya(r)&&`value`in r?r:{value:r},t[n].attribute||(t[n].attribute=va(n)),t[n].parse=`parse`in t[n]?t[n].parse:typeof t[n].value!=`string`,t},{}):{}}function ma(e){return Object.keys(e).reduce((t,n)=>(t[n]=e[n].value,t),{})}function ha(e,t){let n=fa(t);return Object.keys(t).forEach(t=>{let r=n[t],i=e.getAttribute(r.attribute),a=e[t];i!=null&&(r.value=r.parse?ga(i):i),a!=null&&(r.value=Array.isArray(a)?a.slice(0):a),r.reflect&&_a(e,r.attribute,r.value,!!r.parse),Object.defineProperty(e,t,{get(){return r.value},set(e){let n=r.value;r.value=e,r.reflect&&_a(this,r.attribute,r.value,!!r.parse);for(let r=0,i=this.__propertyChangedCallbacks.length;r<i;r++)this.__propertyChangedCallbacks[r](t,e,n)},enumerable:!0,configurable:!0})}),n}function ga(e){if(e)try{return JSON.parse(e)}catch{return e}}function _a(e,t,n,r){if(n==null||n===!1)return e.removeAttribute(t);let i=r?JSON.stringify(n):n;e.__updating[t]=!0,i===`true`&&(i=``),e.setAttribute(t,i),Promise.resolve().then(()=>delete e.__updating[t])}function va(e){return e.replace(/\.?([A-Z]+)/g,(e,t)=>`-`+t.toLowerCase()).replace(`_`,`-`).replace(/^-/,``)}function ya(e){return e!=null&&(typeof e==`object`||typeof e==`function`)}function ba(e){return Object.prototype.toString.call(e)===`[object Function]`}function xa(e){return typeof e==`function`&&e.toString().indexOf(`class`)===0}var Sa;function Ca(e,t){let n=Object.keys(t);return class extends e{static get observedAttributes(){return n.map(e=>t[e].attribute)}constructor(){super(),this.__initialized=!1,this.__released=!1,this.__releaseCallbacks=[],this.__propertyChangedCallbacks=[],this.__updating={},this.props={};for(let e of n)this[e]=void 0}connectedCallback(){if(this.__initialized)return;this.__releaseCallbacks=[],this.__propertyChangedCallbacks=[],this.__updating={},this.props=ha(this,t);let e=ma(this.props),n=this.Component,r=Sa;try{Sa=this,this.__initialized=!0,xa(n)?new n(e,{element:this}):n(e,{element:this})}finally{Sa=r}}async disconnectedCallback(){if(await Promise.resolve(),this.isConnected)return;this.__propertyChangedCallbacks.length=0;let e=null;for(;e=this.__releaseCallbacks.pop();)e(this);delete this.__initialized,this.__released=!0}attributeChangedCallback(e,n,r){if(this.__initialized&&!this.__updating[e]&&(e=this.lookupProp(e),e in t)){if(r==null&&!this[e])return;this[e]=t[e].parse?ga(r):r}}lookupProp(e){if(t)return n.find(n=>e===n||e===t[n].attribute)}get renderRoot(){return this.shadowRoot||this.attachShadow({mode:`open`})}addReleaseCallback(e){this.__releaseCallbacks.push(e)}addPropertyChangedCallback(e){this.__propertyChangedCallbacks.push(e)}}}function wa(e,t={},n={}){let{BaseElement:r=HTMLElement,extension:i,customElements:a=window.customElements}=n;return n=>{if(!e)throw Error(`tag is required to register a Component`);let o=a.get(e);return o?(o.prototype.Component=n,o):(o=Ca(r,pa(t)),o.prototype.Component=n,o.prototype.registeredTag=e,a.define(e,o,i),o)}}function Ta(e){let t=Object.keys(e),n={};for(let r=0;r<t.length;r++){let[i,a]=fr(()=>e[t[r]]);Object.defineProperty(n,t[r],{get:i,set(e){a(()=>e)}})}return n}function Ea(e){if(e.assignedSlot&&e.assignedSlot._$owner)return e.assignedSlot._$owner;let t=e.parentNode;for(;t;){if(t._$owner)return t._$owner;if(t.assignedSlot&&t.assignedSlot._$owner)return t.assignedSlot._$owner;t=t.parentNode}return e._$owner}function Da(e){return(t,n)=>{let{element:r}=n,i=Ea(r),a=!1;function o(){return it(i=>{a=!0;let o=Ta(t);r.addPropertyChangedCallback((e,t)=>o[e]=t),r.addReleaseCallback(()=>{xi(r.renderRoot),r.renderRoot.textContent=``,i()});let s=e(o,n);return bi(r.renderRoot),Hi(r.renderRoot,s)})}if(i)try{return G(i,o)}catch(e){if(a)throw e;return console.warn(`<${r.localName}>: found an _\$owner from a different copy of the Solid runtime (a second solid-js is on this page — likely bundled into a compiled element library). Owners cannot be adopted across copies; rendering without an owner. Context will not cross this boundary.`),o()}return o()}}function Oa(e,t,n){return arguments.length===2&&(n=t,t={}),wa(e,t)(Da(n))}var ka=`.study-reading-page{min-inline-size:0;display:block}`,Aa=`.reading-list,.reading-passage{gap:var(--space-6);min-inline-size:0;display:grid}.reading-passage h2{font-size:var(--text-h2);overflow-wrap:anywhere;text-wrap:balance;word-break:auto-phrase;margin:0;line-height:1.5}.passage-text{min-inline-size:0;max-inline-size:68ch;color:var(--color-ink);font-size:calc(var(--text-body-lg) * var(--reader-font-scale,1));overflow-wrap:anywhere;text-wrap:pretty;word-break:auto-phrase;white-space:pre-line;line-height:1.7;display:block}.passage-verse{color:var(--color-ink);text-align:start;line-height:inherit;overflow-wrap:anywhere;text-wrap:pretty;word-break:auto-phrase;white-space:inherit;cursor:default;-webkit-tap-highlight-color:var(--color-transparent);scroll-margin-block-start:var(--space-8);display:inline}.passage-paragraph{margin:0;display:block}.passage-verse-number{color:var(--color-ink-muted);font-size:var(--text-label);vertical-align:super;margin-inline-end:var(--space-1);line-height:0;display:inline}.passage-phrase,.keep-together{white-space:nowrap}.reading-passage+.reading-passage,.study-reading-passage+.study-reading-passage{border-block-start:var(--border-default) solid var(--color-rule);padding-block-start:var(--space-8)}.study-reading-passage{gap:var(--space-6);min-inline-size:0;display:grid}.study-reading-passage h2{font-size:var(--text-h2);overflow-wrap:anywhere;text-wrap:balance;word-break:auto-phrase;margin:0;line-height:1.5}.passage-text[lang=th]{word-break:normal;line-height:2}.passage-text[lang=th] .passage-verse,.study-passage-verse[lang=th]{word-break:normal}.study-passage-verse{color:var(--color-ink);text-align:start;line-height:inherit;overflow-wrap:anywhere;text-wrap:pretty;word-break:auto-phrase;white-space:inherit;display:inline}.study-passage-verse-number{color:var(--color-ink-muted);font-size:var(--text-label);vertical-align:super;margin-inline-end:var(--space-1);line-height:0;display:inline}.passage-paragraph[data-layout=mid_paragraph],.passage-paragraph[data-layout=centered],.passage-paragraph[data-layout=blank]{text-indent:0}.passage-paragraph[data-layout=centered]{text-align:center}.passage-paragraph[data-layout=blank]{margin-block-start:var(--space-5)}.passage-line[data-layout=paragraph],.passage-line[data-layout=paragraph_ident]{text-indent:var(--space-5);display:block}.passage-line[data-layout=mid_paragraph]{text-indent:0;display:block}.passage-line[data-layout=quote],.passage-line[data-layout=quote_1]{text-indent:calc(-1 * var(--space-10));padding-inline-start:var(--space-10);display:block}.passage-line[data-layout=quote_2]{text-indent:calc(-1 * var(--space-5));padding-inline-start:var(--space-10);display:block}.passage-line[data-layout=centered]{text-align:center;text-indent:0;display:block}.passage-line[data-layout=blank]{text-indent:0;margin-block-start:var(--space-5);display:block}.study-passage-verse-text.is-selected,.study-passage-verse.is-selected{font-weight:700}`,ja=`.study-passage-verse-text{min-inline-size:0;color:inherit;line-height:inherit;display:inline}.study-passage-verse-text .passage-phrase{white-space:nowrap}`,Ma=`.study-passage-verse-text.is-selected{font-weight:700}`,Na=`.study-mode{gap:var(--space-8);min-inline-size:0;padding-block-end:0;display:grid}.study-reading-carousel{min-inline-size:0;overflow:visible clip}.study-reading-track{inline-size:calc(var(--study-reading-page-count) * 100%);transform:translate3d(calc(-1 * var(--study-reading-current-page) * (100% / var(--study-reading-page-count))), 0, 0);display:block;position:relative}.study-reading-page{inline-size:calc(100% / var(--study-reading-page-count));min-inline-size:0;position:absolute;inset-block-start:0}.study-reading-page[data-study-reading=previous]{inset-inline-start:0}.study-reading-page:not([data-study-reading=previous]):not([data-study-reading=next]){position:relative}.study-reading-page[data-study-reading=current]{inset-inline-start:calc(var(--study-reading-current-page) * (100% / var(--study-reading-page-count)))}.study-reading-page[data-study-reading=next]{inset-inline-start:calc((var(--study-reading-current-page) + 1) * (100% / var(--study-reading-page-count)))}@media (prefers-reduced-motion:reduce){.study-reading-track{transition-duration:.01ms}}`,Pa=`:host(.study-mode){gap:var(--space-8);min-inline-size:0;padding-block-end:0;display:grid}:host([data-reader-loading]) .reading-passage h2,:host([data-reader-loading]) .passage-text{opacity:.42;filter:blur(.22em)}`,Q=`
:host {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}

[data-shadow-content] {
  display: contents;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
`,Fa=`${Q}
:host {
  display: inline-block;
  line-height: 0;
  min-inline-size: 0;
  flex: 0 0 auto;
  border: 0;
  padding: 0;
  background: var(--color-transparent);
  box-shadow: none;
}

:host(.reader-icon) {
  inline-size: 1.5rem;
  block-size: 1.5rem;
  fill: none;
  stroke: currentColor;
  stroke-width: var(--reader-icon-stroke-width);
  stroke-linecap: round;
  stroke-linejoin: round;
}

:host(.reader-dice-icon-compact) {
  inline-size: calc(var(--compact-action-min) - var(--space-1));
  block-size: calc(var(--compact-action-min) - var(--space-1));
}

:host(.reader-review-icon) {
  fill: currentColor;
  stroke: none;
}

:host(.reader-unlock-icon) {
  fill: currentColor;
  stroke: currentColor;
  stroke-width: var(--reader-icon-stroke-width-512);
}

svg {
  display: block;
  inline-size: 100%;
  block-size: 100%;
  overflow: visible;
  fill: inherit;
  stroke: inherit;
  stroke-width: inherit;
  stroke-linecap: inherit;
  stroke-linejoin: inherit;
}

:host(.reader-review-icon) svg,
:host(.reader-study-icon) svg {
  fill: inherit;
  stroke: none;
}

:host(.reader-study-icon) svg path {
  fill: inherit;
  stroke: none;
}

:host(.reader-dice-icon) svg,
:host(.reader-dice-icon) svg path {
  fill: inherit;
  stroke: inherit;
  stroke-linejoin: inherit;
}

:host(.reader-study-icon) {
  fill: var(--color-ink-muted);
  stroke: none;
}

:host(.reader-gear-icon) {
  stroke-width: 2.5px;
}

`,Ia=`${Q}
:host {
  display: flex;
  align-items: center;
  inline-size: 100%;
  min-block-size: var(--action-min);
  color: var(--color-ink);
  font: 400 var(--text-body) / 1.65 "Sarabun", Tahoma, sans-serif;
  cursor: pointer;
}

:host(.reader-scope-switch),
:host(.settings-answer-switch) {
  min-block-size: var(--action-min);
  color: var(--color-ink);
  font-size: var(--text-body);
  font-weight: 400;
}

:host(.reader-scope-switch) {
  display: inline-flex;
  inline-size: auto;
  gap: var(--space-2);
  white-space: nowrap;
}

:host(.settings-answer-switch) {
  display: flex;
  justify-content: space-between;
  gap: var(--space-3);
  inline-size: 100%;
  white-space: normal;
}

label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  inline-size: 100%;
  gap: var(--space-3);
  cursor: inherit;
}

.toggle-label {
  flex: 1 1 var(--control-min);
  min-inline-size: min-content;
  color: inherit;
  font: inherit;
  text-wrap: pretty;
  word-break: auto-phrase;
}

input {
  position: absolute;
  inline-size: 1px;
  block-size: 1px;
  opacity: 0;
}

.reader-scope-track {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  inline-size: var(--scope-switch-width);
  block-size: var(--scope-switch-height);
  border: var(--border-default) solid var(--color-rule);
  border-radius: var(--radius-pill);
  padding: var(--space-1);
  background: var(--color-paper);
  transition: background-color var(--motion-micro) var(--ease-standard);
}

.reader-scope-track > span {
  inline-size: var(--scope-switch-knob);
  block-size: var(--scope-switch-knob);
  border-radius: 50%;
  background: var(--color-ink-muted);
  transform: translateX(0);
  transition: transform var(--motion-micro) var(--ease-emphasized), background-color var(--motion-micro) var(--ease-standard);
}

input:checked + .reader-scope-track {
  background: var(--color-active);
}

input:checked + .reader-scope-track > span {
  transform: translateX(var(--scope-switch-offset));
}

input:focus-visible + .reader-scope-track {
  outline: var(--focus-width) solid var(--color-focus);
  outline-offset: var(--space-1);
}
`,La=`${Q}
:host > :not([data-button-hit-target]):not(style) {
  position: relative;
  z-index: 1;
  pointer-events: none;
}

[data-button-hit-target] {
  position: absolute;
  z-index: 2;
  inset: 0;
  inline-size: 100%;
  block-size: 100%;
  margin: 0;
  border: 0;
  padding: 0;
  opacity: 0;
  background: transparent;
  cursor: inherit;
  pointer-events: inherit;
  touch-action: manipulation;
}

:host {
  pointer-events: inherit;
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  min-inline-size: 0;
  min-block-size: var(--action-min);
  block-size: auto;
  min-inline-size: 4rem;
  border: 0;
  border-radius: var(--radius-sm);
  padding: var(--space-3) var(--space-4);
  font: inherit;
  color: inherit;
  cursor: pointer;
  text-align: center;
  user-select: none;
  appearance: none;
  outline: none;
  overflow: hidden;
  touch-action: manipulation;
  -webkit-tap-highlight-color: var(--color-transparent);
  --material-ripple-x: 50%;
  --material-ripple-y: 50%;
  --material-ripple-diameter: 200%;
}

:host::before,
:host::after {
  content: "";
  position: absolute;
  z-index: 0;
  pointer-events: none;
  opacity: 0;
  background: var(--color-primary);
}

:host::before {
  inset: 0;
  will-change: opacity;
}

:host::after {
  inset-block-start: var(--material-ripple-y);
  inset-inline-start: var(--material-ripple-x);
  inline-size: var(--material-ripple-diameter);
  block-size: var(--material-ripple-diameter);
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0.6);
  transition: opacity 150ms linear;
  will-change: transform, opacity;
}

:host(:hover)::before {
  opacity: 0.04;
}

:host(:active)::after,
:host([data-ripple-active])::after {
  opacity: 0.12;
  transform: translate(-50%, -50%) scale(1);
  transition: opacity 75ms linear, transform 225ms cubic-bezier(.4, 0, .2, 1);
}

:host(.primary-action) {
  color: var(--color-on-active);
  background: var(--color-active);
  padding-inline: var(--space-6);
  font-family: "Sarabun", Tahoma, sans-serif;
  font-size: var(--text-body);
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0;
  text-transform: none;
  box-shadow: 0 3px 1px -2px var(--color-shadow-20),
    0 2px 2px var(--color-shadow-14),
    0 1px 5px var(--color-shadow-12);
  transition: background-color var(--motion-micro) var(--ease-standard),
    box-shadow var(--motion-micro) var(--ease-standard);
}

:host(.primary-action)::before,
:host(.primary-action)::after {
  background: var(--color-on-active);
}

:host(.primary-action:hover),
:host(.primary-action:active) {
  color: var(--color-on-active);
  background: var(--color-active);
}

:host(.primary-action:hover) {
  box-shadow: 0 2px 4px -1px var(--color-shadow-20),
    0 4px 5px var(--color-shadow-14),
    0 1px 10px var(--color-shadow-12);
}

:host(.primary-action:active) {
  box-shadow: 0 5px 5px -3px var(--color-shadow-20),
    0 8px 10px var(--color-shadow-14),
    0 3px 14px 2px var(--color-shadow-12);
}

:host(.secondary-action) {
  color: var(--color-ink-muted);
  background: var(--color-paper);
  font-family: "Sarabun", Tahoma, sans-serif;
  font-size: var(--text-body);
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0;
  text-transform: none;
  overflow-wrap: anywhere;
  box-shadow: 0 3px 1px -2px var(--color-shadow-20),
    0 2px 2px var(--color-shadow-14),
    0 1px 5px var(--color-shadow-12);
  transition: color var(--motion-micro) var(--ease-standard),
    background-color var(--motion-micro) var(--ease-standard),
    box-shadow var(--motion-micro) var(--ease-standard);
}

:host(.secondary-action:hover),
:host(.secondary-action:focus) {
  color: var(--color-ink-muted);
  background: var(--color-paper);
  box-shadow: 0 2px 4px -1px var(--color-shadow-20),
    0 4px 5px var(--color-shadow-14),
    0 1px 10px var(--color-shadow-12);
}

:host(.secondary-action:active) {
  color: var(--color-ink-muted);
  background: var(--color-paper-muted);
  box-shadow: 0 5px 5px -3px var(--color-shadow-20),
    0 8px 10px var(--color-shadow-14),
    0 3px 14px 2px var(--color-shadow-12);
}

:host(.secondary-action[data-ripple-active]) {
  color: var(--color-ink-muted);
  background: var(--color-paper-muted);
  box-shadow: 0 5px 5px -3px var(--color-shadow-20),
    0 8px 10px var(--color-shadow-14),
    0 3px 14px 2px var(--color-shadow-12);
}

:host(.secondary-action.study-rating-easy),
:host(.secondary-action.study-rating-easy:hover),
:host(.secondary-action.study-rating-easy:active),
:host(.secondary-action.study-rating-easy[data-ripple-active]) {
  border-color: var(--color-difficulty-easy);
  color: var(--color-on-dark);
  background: var(--color-difficulty-easy);
}

:host(.secondary-action.study-rating-easy)::before,
:host(.secondary-action.study-rating-easy)::after {
  background: var(--color-difficulty-easy);
}

:host(.secondary-action.study-rating-hard),
:host(.secondary-action.study-rating-hard:hover),
:host(.secondary-action.study-rating-hard:active),
:host(.secondary-action.study-rating-hard[data-ripple-active]) {
  border-color: var(--color-difficulty-hard);
  color: var(--color-on-dark);
  background: var(--color-difficulty-hard);
}

:host(.secondary-action.study-rating-hard)::before,
:host(.secondary-action.study-rating-hard)::after {
  background: var(--color-difficulty-hard);
}

:host(.reader-mode-tab) {
  display: inline-grid;
  place-items: center;
  inline-size: var(--action-min);
  min-block-size: var(--action-min);
  min-inline-size: var(--action-min);
  border-radius: var(--radius-pill);
  padding: var(--space-2);
  color: var(--color-ink-muted);
  background: var(--color-transparent);
  font-family: "Sarabun", Tahoma, sans-serif;
  font-size: var(--text-body);
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0;
  text-transform: none;
  box-shadow: none;
}

:host(.reader-mode-tab.is-active),
:host(.reader-mode-tab[aria-selected="true"]),
:host(.reader-mode-tab.is-active:hover),
:host(.reader-mode-tab.is-active:focus),
:host(.reader-mode-tab.is-active:active),
:host(.reader-mode-tab[aria-selected="true"]:hover),
:host(.reader-mode-tab[aria-selected="true"]:focus),
:host(.reader-mode-tab[aria-selected="true"]:active) {
  color: var(--color-ink);
  background: var(--color-active);
}

:host(.reader-mode-tab) > reader-icon.reader-study-icon {
  fill: var(--color-ink-muted);
}

:host(.reader-mode-tab:is(:disabled, [disabled])) > reader-icon.reader-review-icon {
  color: var(--color-ink-muted);
  fill: var(--color-ink-muted);
}

:host(.reader-mode-tab.is-active) > reader-icon.reader-study-icon,
:host(.reader-mode-tab[aria-selected="true"]) > reader-icon.reader-study-icon {
  fill: var(--color-primary-strong);
}

:host(.print-remove-action) {
  display: inline-grid;
  place-items: center;
  inline-size: var(--compact-action-min);
  block-size: var(--compact-action-min);
  min-block-size: var(--compact-action-min);
  min-inline-size: var(--compact-action-min);
  border-radius: var(--radius-pill);
  padding: 0;
  color: var(--color-ink-muted);
  background: var(--color-transparent);
  font-family: "Sarabun", Tahoma, sans-serif;
  font-size: var(--text-body);
  line-height: 1.5;
  letter-spacing: 0;
  text-transform: none;
  text-decoration: none;
  box-shadow: none;
}

:host(.settings-font-size-button) {
  box-shadow: none;
}

:host(.secondary-action:is(:disabled, [disabled])),
:host(.primary-action:is(:disabled, [disabled])) {
  cursor: default;
  box-shadow: none;
  opacity: 0.45;
}

:host(.secondary-action.reader-loading-rating-button:is(:disabled, [disabled])) {
  opacity: 1;
}

:host(.reader-loading-rating-button) .study-rating-label {
  opacity: 0.42;
  filter: blur(0.22em);
}

:host(.primary-action:is(:disabled, [disabled])) {
  color: var(--color-ink-muted);
  background: var(--color-paper-muted);
  opacity: 0.65;
}

:host(.reader-mode-tab:is(:disabled, [disabled])),
:host(.reader-mode-tab:is(:disabled, [disabled]):hover),
:host(.reader-mode-tab:is(:disabled, [disabled]):focus),
:host(.reader-mode-tab:is(:disabled, [disabled]):active) {
  cursor: default;
  color: var(--color-ink-muted);
  background: var(--color-transparent);
  box-shadow: none;
  opacity: 0.35;
}

:host(.reader-settings-button) > reader-icon.reader-gear-icon {
  inline-size: 1.5rem;
  block-size: 1.5rem;
  fill: currentColor;
  stroke: currentColor;
  stroke-width: 2.5px;
  stroke-linejoin: round;
}

:host(:is(:disabled, [disabled]))::before,
:host(:is(:disabled, [disabled]))::after,
:host(:is(:disabled, [disabled]):hover)::before,
:host(:is(:disabled, [disabled]):hover)::after,
:host(:is(:disabled, [disabled]):focus)::before,
:host(:is(:disabled, [disabled]):focus)::after,
:host(:is(:disabled, [disabled]):active)::before,
:host(:is(:disabled, [disabled]):active)::after {
  opacity: 0;
}

:host(:is(:disabled, [disabled]):active)::after {
  transform: translate(-50%, -50%) scale(0.6);
  transition: none;
}

:host([hidden]) {
  pointer-events: none;
}

:host(:focus-visible) {
  outline: var(--focus-width) solid var(--color-focus);
  outline-offset: var(--space-1);
}

:host([disabled]) {
  cursor: default;
}

:host > :not([data-button-hit-target]):not(style) {
  pointer-events: none;
}

:host(.reader-settings-button) {
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  inline-size: max(var(--compact-action-min), 2rem);
  block-size: max(var(--compact-action-min), 2rem);
  min-inline-size: max(var(--compact-action-min), 2rem);
  min-block-size: max(var(--compact-action-min), 2rem);
  border-radius: var(--radius-pill);
  padding: 0;
  color: var(--color-ink-muted);
  background: var(--color-transparent);
  line-height: 1;
  box-shadow: none;
}

:host(.reader-settings-button:hover),
:host(.reader-settings-button:active) {
  color: var(--color-ink-muted);
  background: var(--color-transparent);
  box-shadow: none;
}

:host(.reader-settings-button) > reader-icon.reader-gear-icon {
  inline-size: 1.5rem;
  block-size: 1.5rem;
  fill: currentColor;
  stroke: currentColor;
  stroke-width: 2.5px;
  stroke-linejoin: round;
}

:host(.settings-font-size-button.settings-font-size-decrease) {
  display: inline-grid;
  place-items: center;
  inline-size: var(--action-min);
  min-block-size: var(--action-min);
  min-inline-size: var(--action-min);
  padding: 0;
  line-height: 1;
  font-size: 1rem;
}

:host(.settings-font-size-button.settings-font-size-increase) {
  display: inline-grid;
  place-items: center;
  inline-size: var(--action-min);
  min-block-size: var(--action-min);
  min-inline-size: var(--action-min);
  padding: 0;
  line-height: 1;
  font-size: 1.5rem;
}

:host(.reader-selection-trigger) {
  display: grid;
  flex: 1 1 auto;
  place-items: center;
  min-inline-size: var(--reader-compact-action-min);
  min-block-size: var(--reader-compact-action-min);
  max-inline-size: 100%;
  border-radius: 0 0 var(--radius-sm) var(--radius-sm);
  padding: var(--space-1);
  color: var(--color-ink-muted);
  background: var(--color-transparent);
  font-size: var(--text-label);
  font-weight: 700;
  line-height: 1.5;
  transition: color var(--motion-micro) var(--ease-standard), background-color var(--motion-micro) var(--ease-standard);
}

:host(.reader-selection-trigger:hover) {
  color: var(--color-ink);
  background: var(--color-selection-soft);
}

:host(.reader-selection-trigger[aria-expanded="true"]) {
  color: var(--color-on-active);
  background: var(--color-active);
}

:host(.reader-selection-trigger.reader-version-trigger),
:host(.reader-selection-trigger.reader-chapter-trigger),
:host(.reader-selection-trigger.reader-day-trigger) {
  flex: 0 0 auto;
}

:host(.reader-selection-trigger.reader-version-trigger) {
  grid-template-areas: "version";
}

:host(.reader-selection-trigger.reader-chapter-trigger) {
  grid-template-areas: "chapter";
}

:host(.reader-selection-trigger.reader-day-trigger) {
  grid-template-areas: "day";
}

:host(.reader-selection-trigger.reader-reading-navigation) {
  flex: 0 0 var(--mobile-action-min);
  inline-size: var(--mobile-action-min);
  padding: 2px;
}

:host(.reader-selection-trigger.reader-reading-navigation) > reader-icon {
  inline-size: 1.25rem;
  block-size: 1.25rem;
}

:host(.reader-selection-trigger.reader-reading-navigation:is(:disabled, [disabled])) {
  cursor: default;
  opacity: 0.45;
}

:host(.reader-selection-trigger.reader-version-trigger) > .reader-version-trigger-width,
:host(.reader-selection-trigger.reader-version-trigger) > .reader-selection-trigger-text {
  grid-area: version;
}

:host(.reader-selection-trigger.reader-chapter-trigger) > .reader-chapter-trigger-width,
:host(.reader-selection-trigger.reader-chapter-trigger) > .reader-selection-trigger-text {
  grid-area: chapter;
}

:host(.reader-selection-trigger.reader-day-trigger) > .reader-day-trigger-width,
:host(.reader-selection-trigger.reader-day-trigger) > .reader-selection-trigger-text {
  grid-area: day;
}

.reader-version-trigger-width,
.reader-chapter-trigger-width,
.reader-day-trigger-width {
  display: grid;
  pointer-events: none;
}

.reader-version-trigger-width {
  grid-template-areas: "version";
}

.reader-chapter-trigger-width {
  grid-template-areas: "chapter";
}

.reader-day-trigger-width {
  grid-template-areas: "day";
}

.reader-version-trigger-width > span,
.reader-chapter-trigger-width > span,
.reader-day-trigger-width > span {
  visibility: hidden;
  white-space: nowrap;
}

.reader-version-trigger-width > span {
  grid-area: version;
}

.reader-chapter-trigger-width > span {
  grid-area: chapter;
}

.reader-day-trigger-width > span {
  grid-area: day;
}

.reader-selection-trigger-text {
  min-inline-size: 0;
  max-inline-size: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

:host(.reader-selection-trigger.reader-chapter-trigger.is-loading) > .reader-selection-trigger-text,
:host(.reader-selection-trigger.reader-version-trigger.is-loading) > .reader-selection-trigger-text {
  opacity: 0.42;
  filter: blur(0.22em);
}

:host(.reader-sheet-close) {
  position: absolute;
  inset-block-start: var(--space-2);
  inset-inline-start: var(--space-2);
  z-index: 1;
  display: inline-grid;
  place-items: center;
  inline-size: max(var(--reader-compact-action-min), 2.75rem);
  min-inline-size: max(var(--reader-compact-action-min), 2.75rem);
  block-size: max(var(--reader-compact-action-min), 2.75rem);
  min-block-size: max(var(--reader-compact-action-min), 2.75rem);
  aspect-ratio: 1;
  margin: 0;
  padding: 0;
  border-radius: var(--radius-pill);
}

:host(.reader-sheet-option) {
  display: grid;
  inline-size: 100%;
  min-inline-size: 0;
  min-block-size: var(--reader-compact-action-min);
  align-items: center;
  border-radius: 0;
  padding: var(--space-3) var(--space-4);
  color: var(--color-ink);
  background: var(--color-transparent);
  font-size: var(--text-body);
  line-height: 1.5;
  overflow-wrap: anywhere;
  text-align: start;
  text-wrap: pretty;
  word-break: auto-phrase;
  transition: color var(--motion-micro) var(--ease-standard), background-color var(--motion-micro) var(--ease-standard);
  box-shadow: none;
}

:host(.reader-sheet-option:hover) {
  color: var(--color-ink);
  background: var(--color-selection-soft);
  box-shadow: none;
}

:host(.reader-sheet-option:is(.is-selected, [aria-selected="true"], [data-selected="true"])) {
  color: var(--color-selection-strong);
  background: var(--color-active);
  font-weight: 700;
  box-shadow: none;
}

:host(.reader-sheet-option:focus-visible) {
  outline: var(--focus-width) solid var(--color-focus);
  outline-offset: calc(var(--space-1) * -1);
}

:host(.reader-version-option) {
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: var(--space-3);
}

.reader-version-option-code {
  font-weight: 700;
  white-space: nowrap;
}

.reader-version-option-name {
  min-inline-size: 0;
}

.reader-version-option-flag {
  justify-self: end;
  font-size: 1.25rem;
  line-height: 1;
}

:host(.reader-chapter-option) {
  justify-items: center;
  padding-inline: var(--space-2);
  text-align: center;
}

:host(.reader-day-option) {
  justify-items: center;
  padding-inline: var(--space-2);
  text-align: center;
}

:host(.reader-chapter-option),
:host(.reader-day-option) {
  min-block-size: var(--action-min);
  padding: var(--space-2);
}

:host(.print-section-random-action) {
  display: inline-grid;
  place-items: center;
  inline-size: var(--compact-action-min);
  block-size: var(--compact-action-min);
  min-inline-size: var(--compact-action-min);
  min-block-size: var(--compact-action-min);
  margin: 0;
  border-radius: var(--radius-pill);
  padding: 0;
  color: var(--color-ink-muted);
  background: var(--color-transparent);
  box-shadow: none;
}

:host(.print-section-random-action-balanced) {
  color: var(--color-ink-muted);
}

:host(.reader-book-option) {
  position: relative;
  inline-size: max-content;
  min-inline-size: 100%;
  white-space: nowrap;
}

:host(.reader-book-option.is-selected) {
  z-index: 1;
  margin-inline-end: calc(var(--space-2) * -1);
  border-start-end-radius: 0;
  border-end-end-radius: 0;
  overflow: visible;
  background: var(--color-selection-active-gradient);
}

:host(.reader-book-option.is-selected)::before,
:host(.reader-book-option.is-selected)::after {
  display: none;
}

:host(.reader-chapter-option) {
  justify-items: center;
  padding-inline: var(--space-2);
  text-align: center;
}

:host(.print-section-random-action-easy) {
  color: var(--color-difficulty-easy);
}

:host(.print-section-random-action-hard) {
  color: var(--color-difficulty-hard);
}

:host(.reader-navigation-action) {
  display: inline-grid;
  place-items: center;
  align-content: center;
  justify-content: center;
  inline-size: var(--action-min);
  block-size: var(--action-min);
  min-inline-size: var(--action-min);
  min-block-size: var(--action-min);
  border-radius: 50%;
  padding: var(--space-2);
  line-height: 0;
  background: var(--color-paper);
}

:host(.reader-navigation-action:hover),
:host(.reader-navigation-action:focus),
:host(.reader-navigation-action:active) {
  background: var(--color-paper);
}

:host(.reader-navigation-action[data-ripple-active]) {
  background: var(--color-paper-muted);
}

:host(.reader-print-submit) {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-1);
}

:host(.reader-print-submit) > .reader-print-page-count {
  display: inline-grid;
  place-items: center;
  inline-size: var(--print-page-count-size);
  min-inline-size: var(--print-page-count-size);
  block-size: var(--print-page-count-size);
  padding: 0;
  border: var(--border-default) solid currentColor;
  border-radius: var(--radius-pill);
  font-size: 1rem;
  font-variant-numeric: tabular-nums;
  line-height: 1;
}

:host(.reader-print-action-easy),
:host(.reader-print-action-easy:hover),
:host(.reader-print-action-easy:active),
:host(.reader-print-action-easy[data-ripple-active]) {
  color: var(--color-difficulty-easy);
}

:host(.reader-print-action-easy)::before,
:host(.reader-print-action-easy)::after {
  background: var(--color-difficulty-easy);
}

:host(.reader-print-action-hard),
:host(.reader-print-action-hard:hover),
:host(.reader-print-action-hard:active),
:host(.reader-print-action-hard[data-ripple-active]) {
  color: var(--color-difficulty-hard);
}

:host(.reader-print-action-hard)::before,
:host(.reader-print-action-hard)::after {
  background: var(--color-difficulty-hard);
}

:host(.settings-font-size-button),
:host(.settings-level-adjust) {
  box-shadow: none;
}

`,Ra=`${Q}
:host {
  display: block;
  position: relative;
  inline-size: 100%;
  min-inline-size: 0;
  padding-block-start: 1rem;
}

:host(.material-field) {
  font-family: "Sarabun", Tahoma, sans-serif;
}

:host > label {
  position: absolute;
  inset-block-start: 1rem;
  inset-inline-start: 0;
  color: var(--color-ink-muted);
  font-family: "Sarabun", Tahoma, sans-serif;
  font-size: var(--text-body);
  letter-spacing: 0;
  transform: scale(0.8);
  transform-origin: 0 0;
  pointer-events: none;
  transition: transform var(--motion-micro) var(--ease-standard),
    color var(--motion-micro) var(--ease-standard);
  will-change: transform, color;
}

:host > input,
:host > textarea {
  display: block;
  inline-size: 100%;
  border: 0;
  border-block-end: 1px solid var(--color-rule);
  padding: var(--space-2) 0;
  color: var(--color-ink);
  background: transparent;
  font: 1rem / 1.5 "Sarabun", Tahoma, sans-serif;
  letter-spacing: 0.009375em;
  outline: 0;
}

:host > input:hover,
:host > textarea:hover {
  border-block-end-color: var(--color-ink);
}

:host > input:focus,
:host > textarea:focus {
  caret-color: var(--color-primary);
}

:host(.material-field:not(.study-answer-field):not(:focus-within):not([data-empty="false"]):not(.is-filled)) > label {
  transform: translateY(1rem) scale(1);
}

:host(.material-field[data-empty="false"]:not(.study-answer-field)) > label,
:host(.material-field:not(.study-answer-field):focus-within) > label,
:host(.material-field.is-filled:not(.study-answer-field)) > label {
  transform: translateY(-0.75rem) scale(var(--study-answer-label-floating-scale));
}

:host(.material-field:not(.study-answer-field):focus-within) > label {
  color: var(--color-primary) !important;
}

:host(.material-field.study-answer-field) {
  min-block-size: calc(1rem + 1lh + (2 * var(--space-2)));
}

:host(.settings-bible-access-link-field) > input {
  direction: ltr;
  font-size: 0.8125rem;
}

:host(.material-field.study-answer-field) > label {
  position: relative;
  inset-block-start: auto;
  display: block;
  inline-size: 100%;
  pointer-events: auto;
  cursor: text;
  transform: none;
  transition: none;
  will-change: auto;
  overflow-wrap: anywhere;
  color: var(--color-ink);
  font-size: calc(var(--study-answer-label-size) * var(--reader-font-scale, 1));
  overflow: visible;
  text-overflow: clip;
  text-wrap: pretty;
  white-space: normal;
  word-break: auto-phrase;
}

:host(.material-field.study-answer-field) > textarea {
  position: relative;
  inset-block-start: auto;
  inset-inline: 0;
  min-block-size: 1lh;
  border-block-end-color: transparent;
  field-sizing: content;
  line-height: 1.7;
  resize: none;
}

:host(.material-field.study-answer-field:not(:focus-within):not(.is-filled)) > textarea {
  border-block-end-color: transparent;
}

:host(.material-field.study-answer-field:not(:focus-within):not(.is-filled)) .field-ripple {
  opacity: 1;
  transform: scaleX(1);
  background: var(--color-rule);
}

:host(.reader-loading-answer-field) > label,
:host(.reader-loading-answer-field) > textarea.reader-loading-answer-input {
  border-block-end-color: transparent;
  opacity: 0.42;
  filter: blur(0.22em);
}

.field-ripple {
  position: absolute;
  inset-inline: 0;
  inset-block-end: 0;
  inline-size: 100%;
  block-size: 2px;
  background: var(--color-primary);
  opacity: 0;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform var(--motion-micro) var(--ease-standard), opacity var(--motion-micro) var(--ease-standard);
  will-change: transform, opacity;
}

:host(.material-field:focus-within) .field-ripple {
  opacity: 1;
  transform: scaleX(1);
}

:host > label[lang="th"],
:host > textarea[lang="th"] {
  line-height: 2;
}

:host(.material-field.study-answer-field) > textarea[lang="th"] {
  line-height: 2;
}
`,$=`${Q}
:host {
  min-inline-size: 0;
}

:host(:not([class])) {
  display: contents;
}

:host([hidden]) {
  display: none !important;
}
`,za=`${Q}
:host {
  display: block;
  min-inline-size: 0;
  position: fixed;
  z-index: 10;
  inset-block-end: 0;
  inset-inline-start: 50%;
  inline-size: min(calc(100% - (2 * var(--space-4))), var(--content-max-inline-size));
  max-block-size: var(--study-sheet-max-block-size);
  overflow: hidden;
  border: 0;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  background: var(--color-paper);
  box-shadow: var(--shadow-study-sheet);
  transform: translate3d(-50%, calc(-1 * var(--study-sheet-keyboard-offset, 0px)), 0);
  transition: transform var(--motion-sheet) var(--ease-decelerate);
  will-change: transform;
}

:host(.is-keyboard-visible) {
  transition: none;
}

:host(.study-question-sheet.is-answer-focused) {
  overflow: visible;
}

:host(.study-question-sheet.is-answer-focused)::after {
  content: "";
  position: absolute;
  inset-block-start: 100%;
  inset-inline-start: calc(50% - 50vw);
  inline-size: 100vw;
  block-size: 100vh;
  background: var(--color-paper);
  z-index: 11;
  pointer-events: none;
}

:host > * {
  pointer-events: auto;
}

:host(.study-question-sheet) > * {
  border-radius: inherit;
}

@media (max-width: 640px) {
  :host(.study-question-sheet) {
    inset-inline: 0;
    inline-size: 100%;
    transform: translate3d(0, calc(-1 * var(--study-sheet-keyboard-offset, 0px)), 0);
  }

}

@media (prefers-reduced-motion: reduce) {
  :host(.study-question-sheet) {
    transition-duration: 0.01ms;
  }
}
`,Ba=`${Q}
:host {
  display: none;
  position: fixed;
  z-index: 9;
  inset: 0;
  min-inline-size: 0;
  pointer-events: none;
}

:host(.is-open) {
  display: block;
  pointer-events: auto;
}

.reader-question-backdrop-control {
  display: block;
  inline-size: 100%;
  block-size: 100%;
  margin: 0;
  border: 0;
  padding: 0;
  color: inherit;
  background: transparent;
  font: inherit;
  appearance: none;
  cursor: default;
}

@media (min-width: 641px), (min-height: 800px) {
  :host {
    display: none !important;
  }
}
`,Va=`${$}
:host {
  display: inline-flex;
  align-items: stretch;
  min-inline-size: 0;
}

:host(.reader-mode-switch) {
  position: static;
  border: 0;
  border-radius: var(--radius-pill);
  padding: 0;
  background: var(--color-transparent);
  block-size: var(
    --reader-toolbar-row-height,
    var(--action-min)
  );
  overflow: visible;
  box-shadow: none;
}

@media (max-width: 559px) {
  :host(.reader-mode-switch) {
    gap: var(--space-2);
  }
}
`,Ha=`${$}
:host {
  display: grid;
  justify-items: center;
  align-content: start;
  gap: var(--space-2);
  min-inline-size: 0;
}
`,Ua=`${$}
:host {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-inline-size: 0;
}

:host > .reader-settings-button {
  display: grid;
  place-items: center;
  flex: 0 0 auto;
}

:host(.reader-toolbar-end.is-sheet-open) > .reader-settings-button {
  visibility: hidden;
  pointer-events: none;
}
`,Wa=`${$}
:host {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  min-inline-size: 0;
}

:host(.reader-print-actions) {
  inline-size: fit-content;
  max-inline-size: 100%;
  align-items: center;
  gap: var(--space-2);
}

:host > reader-button {
  flex: 0 0 auto;
}

:host(.reader-print-actions) > reader-button {
  display: inline-grid;
  place-items: center;
  inline-size: var(--action-min);
  block-size: var(--action-min);
  min-block-size: var(--action-min);
  min-inline-size: var(--action-min);
  padding: var(--space-2);
}

:host(.reader-print-actions) > reader-button.reader-print-submit {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: nowrap;
  white-space: nowrap;
  inline-size: var(--print-submit-width);
  min-inline-size: var(--print-submit-width);
}

@media (max-width: 640px) {
  :host(.reader-print-actions) {
    display: flex;
    inline-size: 100%;
    gap: var(--space-1);
  }

  :host(.reader-print-actions) > reader-button {
    flex: 1 1 0;
    inline-size: auto;
    min-inline-size: 0;
    padding: var(--space-1);
  }

  :host(.reader-print-actions) > reader-button.reader-print-submit {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    flex: 1.5 1 0;
    inline-size: auto;
    min-inline-size: 0;
  }

  :host(.reader-print-actions) > reader-button.secondary-action {
    padding-inline: var(--space-2);
    white-space: nowrap;
  }
}

@media print {
  :host(.reader-print-actions) {
    display: none;
  }
}
`,Ga=`${$}
:host {
  display: grid;
  grid-auto-rows: max-content;
  min-inline-size: 0;
  min-block-size: 0;
  max-block-size: 100%;
  align-content: start;
  overflow-y: auto;
  overscroll-behavior: contain;
  border: var(--border-default) solid var(--color-rule);
  border-radius: var(--radius-md);
  background: var(--color-paper);
}

:host > reader-button.reader-sheet-option + reader-button.reader-sheet-option {
  border-block-start: var(--border-default) solid var(--color-rule);
}

:host(.reader-chapter-listbox),
:host(.reader-day-listbox) {
  grid-template-columns: repeat(auto-fill, minmax(var(--action-min), 1fr));
  gap: 0;
  padding: 0;
}

:host(.reader-chapter-listbox) {
  align-self: stretch;
  max-block-size: none;
  border-inline-start: var(--border-default) solid var(--color-rule);
  border-start-start-radius: 0;
  border-end-start-radius: 0;
}

:host(.reader-chapter-listbox) > reader-button.reader-sheet-option,
:host(.reader-day-listbox) > reader-button.reader-sheet-option {
  inline-size: auto;
  min-block-size: var(--action-min);
  padding: var(--space-2);
}

:host(.reader-chapter-listbox) > reader-button.reader-sheet-option + reader-button.reader-sheet-option,
:host(.reader-day-listbox) > reader-button.reader-sheet-option + reader-button.reader-sheet-option {
  border-block-start: 0;
}

@media print {
  :host {
    display: none;
  }
}
`,Ka=`${$}
:host {
  display: block;
  min-inline-size: 0;
  overflow-x: clip;
  touch-action: pan-y;
}

`,qa=`${$}
:host {
  display: block;
  inline-size: 100%;
  min-inline-size: 0;
  overflow: visible;
}

:host(.reader-navigation-content-pending) {
  animation: reader-mode-enter var(--motion-navigation) var(--ease-decelerate) both;
  will-change: transform, opacity;
}

:host(.reader-navigation-content-swipe-tracking),
:host(.reader-navigation-content-swipe-settling) {
  translate: var(--reader-navigation-swipe-offset) 0;
  will-change: transform;
}

:host(.reader-navigation-content-swipe-tracking) {
  animation: none;
  transition: none;
}

:host(.reader-navigation-content-swipe-settling) {
  animation: none;
  transition: translate var(--motion-swipe-settle) var(--ease-emphasized);
}

@keyframes reader-mode-enter {
  from {
    opacity: 0;
    transform: translate3d(0, var(--space-3), 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  :host(.reader-navigation-content-pending) {
    animation: none;
  }

  :host(.reader-navigation-content-swipe-tracking),
  :host(.reader-navigation-content-swipe-settling) {
    transition: none;
  }
}
`,Ja=`${$}
:host {
  position: fixed;
  z-index: 10;
  inset-inline: max(var(--space-4), env(safe-area-inset-left)) max(var(--space-4), env(safe-area-inset-right));
  inset-block-end: max(var(--space-4), env(safe-area-inset-bottom));
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  min-inline-size: 0;
  pointer-events: none;
  opacity: 0;
  transform: translateY(var(--space-4));
  transition: opacity var(--motion-standard) var(--ease-accelerate), transform var(--motion-standard) var(--ease-accelerate);
  will-change: transform, opacity;
}

:host(.is-study-sheet-present) {
  inset-block-end: calc(var(--reader-navigation-sheet-block-size, var(--study-sheet-max-block-size)) + max(var(--space-4), env(safe-area-inset-bottom)));
}

:host(.is-print-navigation) {
  inset-block-end: calc(var(--action-min) + var(--space-4) + env(safe-area-inset-bottom));
}

:host(.is-visible),
:host(:focus-within) {
  pointer-events: auto;
  opacity: 1;
  transform: translateY(0);
  transition-timing-function: var(--ease-decelerate);
}

:host(.is-visible) > reader-button.reader-navigation-action,
:host(:focus-within) > reader-button.reader-navigation-action {
  pointer-events: auto;
}

:host > reader-button.reader-navigation-action {
  display: inline-grid;
  place-items: center;
  align-content: center;
  justify-content: center;
  inline-size: var(--action-min);
  block-size: var(--action-min);
  min-inline-size: var(--action-min);
  min-block-size: var(--action-min);
  border-radius: 50%;
  padding: var(--space-2);
  line-height: 0;
  pointer-events: none;
  background: var(--color-paper);
}

:host > reader-button.reader-navigation-action:hover,
:host > reader-button.reader-navigation-action:focus,
:host > reader-button.reader-navigation-action:active {
  background: var(--color-paper);
}

:host > reader-button.reader-navigation-action[data-ripple-active] {
  background: var(--color-paper-muted);
}

:host > reader-button.reader-navigation-action.is-next:only-of-type {
  margin-inline-start: auto;
}

:host > reader-button.reader-navigation-action.is-previous:only-of-type {
  margin-inline-end: auto;
}

:host > reader-button.reader-navigation-action:focus-visible {
  outline: var(--focus-width) solid var(--color-focus);
  outline-offset: var(--space-1);
}

@media (prefers-reduced-motion: reduce) {
  :host {
    transition-duration: 0.01ms;
  }
}

@media print {
  :host {
    display: none;
  }
}
`,Ya=`${$}
${ka}
${Aa}
${ja}
${Ma}
${Na}
${Pa}
`,Xa=`${$}
:host(.print-mode) {
  display: grid;
  min-inline-size: 0;
  gap: var(--space-6);
}

@media print {
  :host(.print-mode) {
    display: block;
  }
}

@media (max-width: 640px) {
  :host(.print-mode) {
    padding-block-end: calc(var(--action-min) + var(--space-4) + env(safe-area-inset-bottom));
  }
}
`,Za=`${$}
:host(.review-mode) {
  display: grid;
  min-inline-size: 0;
  gap: var(--space-6);
}

@media print {
  :host(.review-mode) {
    display: block;
  }
}

@media (max-width: 640px) {
  :host(.review-mode) {
    padding-block-end: calc(var(--action-min) + var(--space-4) + env(safe-area-inset-bottom));
  }
}
`,Qa=`${$}
:host(.print-section-random-actions) {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  gap: var(--space-1);
  min-inline-size: 0;
}

:host(.print-section-random-actions-empty) {
  margin-block-start: var(--space-1);
}
`,$a=`${$}
:host {
  display: grid;
  min-inline-size: 0;
}

:host(:not([class])) {
  display: grid;
}

h2 {
  min-inline-size: 0;
  margin: 0;
  font-size: var(--text-body);
  line-height: 1.5;
  overflow-wrap: anywhere;
  text-wrap: pretty;
  word-break: auto-phrase;
  font-weight: 400;
}

h2[lang="th"] {
  line-height: 2;
}

:host(.print-preview-question-body) h2 {
  font-size: 16px;
  line-height: 22px;
}

:host(.print-question-body) h2,
:host(.print-preview-question-body) h2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--reader-print-question-max-lines, 5);
  line-clamp: var(--reader-print-question-max-lines, 5);
  overflow: hidden;
}

:host(.print-preview-question-body) h2[lang="th"] {
  line-height: 32px;
}

.print-question-text {
  font-weight: 400;
}

.print-question-type {
  display: none;
}

.print-question-type-observation,
.print-question-type-interpretation,
.print-question-type-application,
.print-question-type-interpretation-application {
  color: var(--color-ink);
}

.print-answer-lines {
  display: none;
  gap: var(--space-5);
  padding-block-start: var(--space-3);
}

.print-answer-lines span {
  display: block;
  min-block-size: var(--space-4);
  border-block-end: var(--border-default) solid var(--color-rule);
}

.review-answer {
  display: grid;
  min-inline-size: 0;
  cursor: pointer;
}

.review-answer:focus-visible {
  outline: var(--focus-width) solid var(--color-focus);
  outline-offset: var(--space-1);
}

@media print {
  :host(.print-question-body) h2,
  :host(.print-preview-question-body) h2 {
    font-size: 16px;
    font-weight: 400;
  }

  :host(.print-preview-question-body) {
    break-inside: avoid;
    padding-block-end: var(--space-1);
  }

  :host(.print-preview-question-body) h2 {
    line-height: 22px;
  }

  :host(.print-preview-question-body) h2[lang="th"] {
    line-height: 32px;
  }

  .print-question-type {
    display: inline;
    color: var(--color-ink);
    font-size: 16px;
    font-weight: 700;
    white-space: nowrap;
  }

  .print-answer-lines {
    display: grid;
    gap: var(--space-2);
    padding-block-start: var(--space-2);
  }

  .print-answer-lines span {
    min-block-size: var(--space-4);
    line-height: 0;
  }
}
`,eo=`${$}
:host(.study-question-sheet-body) {
  display: grid;
  position: relative;
  min-inline-size: 0;
  min-block-size: 0;
  max-block-size: var(--study-sheet-max-block-size);
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: 0 var(--space-4) var(--space-6);
}

.study-question-type {
  position: absolute;
  z-index: 1;
  inset-block-start: var(--space-1);
  inset-inline-end: var(--space-4);
  pointer-events: none;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1;
}

.question-kind-observation {
  color: var(--color-question-observation);
}

.question-kind-interpretation {
  color: var(--color-question-interpretation);
}

.question-kind-application {
  color: var(--color-question-application);
}

.question-kind-interpretation-application {
  color: var(--color-question-interpretation-application);
}

.study-answer-form {
  display: grid;
  min-inline-size: 0;
  gap: var(--space-3);
}

.reader-loading-question-type {
  opacity: 0.42;
  filter: blur(0.22em);
}

@media (max-width: 640px) {
  :host(.study-question-sheet-body) {
    padding-block-end: 0;
  }

  :host(.study-question-sheet-body.has-rating-actions) {
    padding-block-end: calc(var(--action-min) / 2 + var(--space-3));
  }
}

@media (min-width: 768px) {
  :host(.study-question-sheet-body) {
    padding-inline: var(--space-6);
  }
}
`,to=`${$}
:host(.study-answer-actions) {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-2);
  min-inline-size: 0;
}

:host(.study-rating-actions) {
  display: flex;
  align-items: center;
}

:host(.study-answer-actions) > .study-rating-action-slot {
  min-inline-size: 0;
  font-size: max(var(--text-body), 16px);
}

:host(.study-rating-actions) > .study-rating-action-slot {
  display: flex;
  flex: 1 1 0;
  align-items: center;
  min-inline-size: 0;
}

:host(.study-rating-actions) > .study-rating-action-slot > reader-button {
  display: flex;
  flex: 1 1 0;
  align-items: center;
  justify-content: center;
  block-size: var(--action-min);
  min-block-size: var(--action-min);
  padding-inline: 0;
  white-space: nowrap;
}

@media (max-width: 640px) {
  :host(.study-rating-actions) {
    min-inline-size: 0;
    flex-wrap: wrap;
    position: fixed;
    justify-content: space-between;
    inset-inline: var(--space-4);
    inset-block-end: 0;
  }

  :host(.study-rating-actions) > .study-rating-action-slot {
    position: relative;
    flex: 1 1 0;
    min-inline-size: 0;
    block-size: calc(var(--action-min) / 2);
  }

  :host(.study-rating-actions) > .study-rating-action-slot > reader-button {
    position: absolute;
    inset-inline-start: 0;
    inset-inline-end: auto;
    inset-block-end: calc(var(--radius-sm) * -1);
    inline-size: 100%;
    max-inline-size: 100%;
    flex: none;
    block-size: calc(var(--action-min) / 2 + var(--radius-sm));
    min-block-size: calc(var(--action-min) / 2 + var(--radius-sm));
    border-radius: var(--radius-sm);
    padding-inline: var(--space-4);
    padding-block-end: calc(var(--space-3) + var(--radius-sm));
  }
}
`,no=`${$}
:host {
  display: grid;
  gap: var(--space-8);
  inline-size: min(100%, 18rem);
  max-inline-size: var(--content-max-inline-size);
  min-inline-size: 0;
  margin-inline: auto;
}

.settings-section,
.settings-switches {
  display: grid;
  gap: var(--space-4);
  min-inline-size: 0;
}

.settings-switches {
  gap: var(--space-2);
}

.settings-font-size-controls {
  display: inline-flex;
  align-items: center;
  gap: 0;
  justify-self: start;
}

.settings-font-size-controls.is-default {
  border-radius: var(--radius-sm);
  box-shadow: 0 3px 1px -2px var(--color-shadow-20),
    0 2px 2px var(--color-shadow-14),
    0 1px 5px var(--color-shadow-12);
}

.settings-font-size-section {
  justify-items: start;
}

.settings-font-size-letter-small {
  font-size: 1rem;
  line-height: 1;
}

.settings-font-size-letter-large {
  font-size: 1.5rem;
  line-height: 1;
}

:host .settings-font-size-decrease {
  border-start-end-radius: 0;
  border-end-end-radius: 0;
}

:host .settings-font-size-increase {
  border-start-start-radius: 0;
  border-end-start-radius: 0;
  margin-inline-start: calc(var(--border-default) * -1);
}

.settings-chronological-phrase {
  white-space: nowrap;
}

.settings-backup-heading {
  margin: 0;
  font-size: var(--text-h2);
  line-height: 1.2;
}

.settings-backup-status {
  margin: 0;
  color: var(--color-ink-muted);
  font-size: var(--text-body);
  line-height: 1.45;
}

.settings-backup-actions {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-2);
  min-inline-size: 0;
}

.settings-bible-access-link-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) var(--action-min);
  align-items: end;
  gap: var(--space-2);
  min-inline-size: 0;
}

.settings-bible-access-link-row > reader-field {
  min-inline-size: 0;
}

.settings-bible-access-link-copy {
  display: inline-grid;
  place-items: center;
  inline-size: var(--action-min);
  min-inline-size: var(--action-min);
  block-size: var(--action-min);
  padding: var(--space-2);
}

.settings-backup-button {
  display: inline-grid;
  place-items: center;
  inline-size: 100%;
  block-size: var(--action-min);
  min-inline-size: 0;
  padding: var(--space-2);
}

.settings-level-controls {
  display: grid;
  grid-template-columns: var(--action-min) minmax(0, 1fr) var(--action-min);
  align-items: center;
  gap: 0;
}

.settings-level-adjust {
  display: inline-grid;
  place-items: center;
  inline-size: var(--action-min);
  min-block-size: var(--action-min);
  min-inline-size: var(--action-min);
  padding: 0;
  font-size: var(--text-body-lg);
  line-height: 1;
}

.settings-level-value {
  display: inline-grid;
  place-items: center;
  min-inline-size: 0;
  text-align: center;
  font-size: var(--text-h2);
  line-height: 1.2;
}

.settings-level-description {
  margin: 0;
  color: var(--color-ink-muted);
  font-size: var(--text-body);
  line-height: 1.45;
  text-wrap: balance;
}

.settings-install-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  inline-size: 100%;
}

.settings-delete-all-data-section {
  display: none;
}

.settings-delete-all-data-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  inline-size: 100%;
  min-block-size: var(--action-min);
  color: var(--color-difficulty-hard);
  border: var(--border-default) solid currentColor;
}

.settings-install-pwa-mobile {
  display: none;
}

@media (max-width: 767px), (hover: none) and (pointer: coarse) {
  .settings-delete-all-data-section {
    display: grid;
    padding-block-start: var(--space-4);
    border-block-start: var(--border-default) solid var(--color-rule);
  }

  .settings-install-pwa-mobile {
    display: inline;
  }

  .settings-install-pwa-desktop {
    display: none;
  }
}

@media (max-width: 640px) {
  :host {
    gap: var(--space-4);
  }

  .settings-section {
    padding-block-start: var(--space-4);
  }
}
`,ro=`${$}
:host {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-block-size: 100dvb;
  padding-block: 0 var(--space-4);
  overflow-x: clip;
  min-inline-size: 0;
}

:host(.pwa-install-page) {
  background: var(--color-paper);
}

@media print {
  :host(.assessment-page) {
    display: block;
    min-block-size: 0;
    padding: 0;
  }
}
`,io=`${$}
:host {
  display: grid;
  inline-size: min(100%, var(--content-max-inline-size));
  min-inline-size: 0;
  gap: var(--space-8);
  margin-block: 0 var(--space-4);
  padding-block: 0 var(--space-2);
}

:host(.assessment-sheet) > div:has(> .reader-screen) {
  display: flex;
  flex-direction: column;
  min-block-size: calc(100dvb - (2 * var(--space-4)));
}

:host(.assessment-sheet) {
  background: transparent;
}

:host(.assessment-sheet):has(> div > .language-choice-list) {
  flex: 1;
  align-content: center;
  margin-block: 0;
}

:host(.assessment-sheet):has(> div > .question-screen) {
  flex: 1;
  grid-template-rows: auto minmax(0, 1fr);
  margin-block: 0;
}

:host(.assessment-sheet):has(> div > .question-screen) > div {
  display: grid;
  align-content: center;
}

@media (max-width: 640px) {
  :host {
    inline-size: 100%;
    padding-inline: var(--space-4);
  }
}

@media print {
  :host(.assessment-sheet) {
    display: block;
    inline-size: 100%;
    margin: 0;
    border: 0;
    border-radius: 0;
    padding: 0;
    box-shadow: none;
  }
}
`,ao=`${$}
:host {
  display: grid;
  gap: var(--space-8);
  min-inline-size: 0;
}

:host(.reader-screen-study.reader-screen-study-sheet-present) {
  padding-block-end: calc(var(--reader-navigation-sheet-block-size, var(--study-sheet-max-block-size)) + var(--space-4));
}

@media print {
  :host(.reader-screen) {
    display: block;
    overflow: hidden;
  }
}
`,oo=`${$}
:host {
  display: block;
  min-inline-size: 0;
}

.reader-loading-content {
  display: grid;
  gap: var(--space-6);
  inline-size: min(100%, 68ch);
  margin-inline: auto;
  padding-block: var(--space-4);
  color: var(--color-ink);
  font-size: calc(var(--text-body-lg) * var(--reader-font-scale, 1));
  line-height: 1.7;
}

.reader-loading-line {
  display: block;
  border-radius: var(--radius-pill);
  background: var(--color-ink-muted);
  opacity: 0.42;
  filter: blur(0.22em);
}

.reader-loading-reference {
  min-block-size: 1.5em;
  margin: 0;
  color: var(--color-ink-muted);
  font-size: var(--text-h2);
  font-weight: 700;
  line-height: 1.5;
  opacity: 0.42;
  filter: blur(0.22em);
}

.reader-loading-heading-placeholder {
  display: block;
  inline-size: 32%;
  block-size: 0.75em;
  margin-block: 0.375em;
  border-radius: var(--radius-pill);
  background: var(--color-ink-muted);
}

.reader-loading-paragraph {
  display: grid;
  min-inline-size: 0;
}

.reader-loading-line {
  block-size: 0.7em;
  margin-block: 0.5em;
}

.reader-loading-line-wide {
  inline-size: 100%;
}

.reader-loading-line-long {
  inline-size: 88%;
}

.reader-loading-line-medium {
  inline-size: 72%;
}

.reader-loading-line-short {
  inline-size: 54%;
}
`,so=`${$}
:host {
  min-inline-size: 0;
}
`,co=`${$}
:host {
  display: inline-flex;
  align-items: stretch;
  flex: 0 0 auto;
  justify-self: start;
  position: sticky;
  inset-block-start: 0;
  z-index: 5;
  inline-size: max-content;
  min-inline-size: 0;
  max-inline-size: 100%;
  border: 0;
  border-radius: var(--radius-pill);
  padding: 0;
  background: var(--color-paper-muted);
  block-size: var(
    --reader-toolbar-row-height,
    var(--action-min)
  );
  font-size: var(--text-body);
  overflow: hidden;
  box-shadow: 0 3px 1px -2px var(--color-shadow-20),
    0 2px 2px var(--color-shadow-14),
    0 1px 5px var(--color-shadow-12);
}

:host(.reader-selection-switch) > reader-button.reader-selection-trigger {
  block-size: 100%;
  min-block-size: 100%;
  border-radius: 0;
}

:host(.reader-selection-switch) > reader-button.reader-selection-trigger:first-child {
  border-radius: var(--radius-pill) 0 0 var(--radius-pill);
}

:host(.reader-selection-switch) > reader-button.reader-selection-trigger:last-child {
  border-radius: 0 var(--radius-pill) var(--radius-pill) 0;
}

:host(.reader-selection-switch) > .reader-selection-divider {
  flex: 0 0 var(--border-default);
  align-self: stretch;
  margin-block: var(--space-1);
  background: var(--color-paper);
}

:host(.reader-selection-switch) > reader-button.reader-version-trigger {
  align-self: stretch;
  block-size: auto;
  min-block-size: 100%;
  border-inline-start: 0;
}

:host(.reader-selection-switch.is-scroll-mid) {
  block-size: var(--reader-toolbar-compact-height);
  background: var(--color-paper);
  box-shadow: none;
}

:host(.reader-selection-switch.is-scroll-mid) > .reader-selection-divider,
:host(.reader-selection-switch.is-scroll-full) > .reader-selection-divider {
  margin-block: var(--space-2);
  background: var(--color-rule);
}

@media (min-width: 560px) {
  :host(.reader-selection-switch.is-scroll-sticky) {
    inset-inline-start: max(
      env(safe-area-inset-left),
      var(--space-4),
      calc((100vw - min(100vw - (2 * var(--space-4)), var(--content-max-inline-size))) / 2)
    );
    inset-inline-end: auto;
  }
}

:host(.reader-selection-switch.is-scroll-sticky) {
  position: fixed;
  inset-block-start: 0;
  z-index: 7;
  overflow: visible;
}

:host(.reader-selection-switch.is-scroll-full) {
  inline-size: max-content;
  max-inline-size: calc(100vw - (2 * var(--space-4)));
  border-radius: 0;
  background: var(--color-transparent);
  box-shadow: none;
  overflow: visible;
  pointer-events: none;
  block-size: var(--reader-toolbar-passive-height);
}

:host(.reader-selection-switch.is-scroll-full) > reader-button.reader-selection-trigger {
  flex: 0 0 auto;
  min-inline-size: 0;
  border-radius: 0;
  padding-block: 0;
  color: var(--color-ink);
  background: var(--color-transparent);
  box-shadow: none;
  pointer-events: none;
}

:host(.reader-selection-switch.is-scroll-full) > reader-button.reader-reading-navigation {
  display: none;
}

:host(.reader-selection-switch.is-scroll-full) > reader-button.reader-version-trigger {
  padding-inline-start: var(--space-2);
}

@media (max-width: 559px) {
  :host(.reader-selection-switch) {
    inline-size: fit-content;
    flex-wrap: nowrap;
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    block-size: var(--reader-toolbar-mobile-control-height);
    min-block-size: var(--reader-toolbar-mobile-control-height);
    max-inline-size: min(
      100%,
      calc(100vw - (2 * var(--space-4)) - max(var(--compact-action-min), 2rem) - var(--space-2))
    );
  }

  :host(.reader-selection-switch) > reader-button.reader-selection-trigger:not(.reader-reading-navigation) {
    flex: 0 1 auto;
    min-inline-size: 0;
  }

  :host(.reader-selection-switch) > reader-button.reader-selection-trigger,
  :host(.reader-selection-switch) > reader-button.reader-version-trigger {
    min-block-size: var(--reader-toolbar-mobile-control-height);
  }

  :host(.reader-selection-switch.is-scroll-full) > reader-button.reader-selection-trigger,
  :host(.reader-selection-switch.is-scroll-full) > reader-button.reader-version-trigger {
    min-block-size: 0;
  }

  :host(.reader-selection-switch.is-scroll-sticky) {
    inset-inline-start: max(var(--space-4), env(safe-area-inset-left));
    inset-inline-end: calc(
      max(var(--space-4), env(safe-area-inset-right))
      + var(--mobile-action-min)
      + var(--space-2)
    );
    inline-size: auto;
    max-inline-size: none;
    border-radius: 0;
    background: var(--color-paper);
    overflow: visible;
    box-shadow: none;
  }

  :host(.reader-selection-switch.is-scroll-mid) {
    block-size: var(--reader-toolbar-mobile-control-height);
  }

  :host(.reader-selection-switch.is-scroll-full) {
    inset-inline-start: max(var(--space-4), env(safe-area-inset-left));
    inset-inline-end: auto;
    inline-size: max-content;
    max-inline-size: calc(100vw - (2 * var(--space-4)));
    block-size: var(--reader-toolbar-passive-height);
    min-block-size: 0;
    border-radius: 0;
    background: var(--color-transparent);
    box-shadow: none;
    overflow: visible;
  }

  :host(.reader-selection-switch.is-scroll-sticky) > reader-button.reader-selection-trigger,
  :host(.reader-selection-switch.is-scroll-sticky) > reader-button.reader-selection-trigger:first-child,
  :host(.reader-selection-switch.is-scroll-sticky) > reader-button.reader-selection-trigger:last-child {
    border-radius: 0;
  }
}
`,lo=`${$}
:host {
  min-inline-size: 0;
}
`,uo=`${$}
:host(.print-question-list) {
  display: grid;
  gap: 0;
  min-inline-size: 0;
}

.print-question-section {
  inline-size: 100%;
  border-collapse: collapse;
}

.print-question-section + .print-question-section {
  margin-block-start: var(--space-3);
}

.print-question-section th,
.print-question-section td {
  padding: 0;
  text-align: start;
  vertical-align: top;
}

.print-question-section th {
  position: sticky;
  inset-block-start: 0;
  z-index: 1;
  background: var(--color-paper);
}

.print-section-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
  grid-column: 1 / -1;
  margin: 0;
  color: var(--color-ink);
  font-size: var(--text-body);
  font-weight: 400;
  line-height: 1.35;
  background: var(--color-paper);
  break-after: avoid;
  align-self: start;
}

:host(.review-question-list) {
  display: grid;
  gap: 0;
  margin: 0;
  padding: 0;
  list-style: none;
}

@media print {
  :host(.print-question-list) {
    display: none;
  }
}
`,fo=`${$}
:host(.print-question-card) {
  display: block;
  min-inline-size: 0;
  position: relative;
  overflow: hidden;
  touch-action: pan-y;
  user-select: none;
}

.print-question-card-surface {
  position: relative;
  z-index: 1;
  display: grid;
  min-inline-size: 0;
  padding: var(--space-1) var(--space-2);
  background: var(--color-paper);
  touch-action: pan-y;
  border-inline-start: var(--space-1) solid var(--color-difficulty-hard);
  transition: transform var(--motion-standard) var(--ease-emphasized),
    opacity var(--motion-standard) var(--ease-accelerate);
}

:host(.physical-bible-question-card) .print-question-card-surface {
  cursor: pointer;
}

:host(.physical-bible-question-card) .print-question-card-surface:focus-visible {
  outline: var(--focus-width) solid var(--color-focus);
  outline-offset: calc(var(--space-1) * -1);
}

:host(.difficulty-easy) .print-question-card-surface {
  border-inline-start-color: var(--color-difficulty-easy);
}

:host(.difficulty-medium) .print-question-card-surface {
  border-inline-start-color: var(--color-difficulty-medium);
}

.print-swipe-action {
  position: absolute;
  inset: 0;
  z-index: 0;
  display: flex;
  align-items: center;
  padding-inline: var(--space-2);
  color: var(--color-on-dark);
  background: var(--color-difficulty-hard);
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--motion-micro) var(--ease-standard);
}

:host(.is-swiping) .print-swipe-action {
  opacity: 1;
  transition: none;
  will-change: opacity;
}

:host(.is-swiping) .print-question-card-surface {
  transition: none;
  will-change: transform, opacity;
}

:host(.is-swiping-start) .print-swipe-action {
  justify-content: flex-start;
}

:host(.is-swiping-end) .print-swipe-action {
  justify-content: flex-end;
}

.print-question-card-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-inline-size: 0;
  gap: var(--space-1);
}

.print-question-meta {
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  min-inline-size: 0;
  flex-wrap: wrap;
  gap: var(--space-1);
  margin: 0;
  color: var(--color-ink-muted);
  font-size: var(--text-label);
  font-weight: 400;
  line-height: 1.5;
}

.print-question-meta-separator {
  flex: 0 0 auto;
}

.print-question-kind {
  flex: 0 1 auto;
  min-inline-size: 0;
  overflow-wrap: anywhere;
}

.question-kind-observation {
  color: var(--color-question-observation);
}

.question-kind-interpretation {
  color: var(--color-question-interpretation);
}

.question-kind-application {
  color: var(--color-question-application);
}

.question-kind-interpretation-application {
  color: var(--color-question-interpretation-application);
}

@media print {
  :host(.print-question-card) {
    display: grid;
    overflow: visible;
    padding-block-end: var(--space-1);
    margin-block-end: var(--space-1);
    background: var(--color-paper);
  }

  :host(.print-question-card) .print-question-card-heading,
  :host(.print-question-card) > .print-swipe-action,
  :host(.print-question-card) > reader-button.print-remove-action {
    display: none !important;
  }

  :host(.print-question-card) .print-question-card-surface {
    padding: 0;
    margin: 0;
    border-inline-start: 0;
    background: var(--color-paper);
    box-shadow: none;
    transform: none !important;
  }
}
`;`${$}`;var po=`${$}
${ka}`,mo=`${$}
${Aa}`,ho=`${$}
${ja}`,go=`${$}
:host(.study-attribution) {
  display: grid;
  gap: var(--space-2);
  max-inline-size: 68ch;
  min-inline-size: 0;
  color: var(--color-ink-muted);
  font-size: var(--text-body);
  line-height: 1.5;
  white-space: pre-line;
}
`,_o=`${$}
:host(.reader-print-preview) {
  position: relative;
  display: block;
  block-size: 100%;
  min-block-size: 0;
  min-inline-size: 0;
  touch-action: pan-y pinch-zoom;
}

.reader-print-preview-progress {
  position: absolute;
  z-index: 2;
  inset: 0;
  display: grid;
  align-content: center;
  justify-items: center;
  gap: var(--space-4);
  padding: var(--space-6);
  background: var(--color-paper);
}

.reader-print-preview-progress-label {
  max-inline-size: 32rem;
  margin: 0;
  color: var(--color-ink);
  font-size: var(--text-body-lg);
  line-height: 1.5;
  text-align: center;
}

.reader-print-preview-progress-bar {
  appearance: none;
  inline-size: min(100%, 32rem);
  block-size: var(--space-2);
  overflow: hidden;
  border: 0;
  border-radius: 999px;
  background: var(--color-ink-muted);
  accent-color: var(--color-on-active);
}

.reader-print-preview-progress-bar::-webkit-progress-bar {
  background: var(--color-ink-muted);
}

.reader-print-preview-progress-bar::-webkit-progress-value {
  border-radius: inherit;
  background: var(--color-on-active);
}

.reader-print-preview-progress-bar::-moz-progress-bar {
  border-radius: inherit;
  background: var(--color-on-active);
}

.reader-print-preview-error {
  margin: var(--space-4);
  color: var(--color-ink);
}

.reader-print-preview-pages {
  display: grid;
  align-content: start;
  gap: var(--space-4);
  block-size: 100%;
  overflow: auto;
  padding-block: var(--space-4) calc(var(--space-10) + env(safe-area-inset-bottom));
  padding-inline: max(var(--space-2), env(safe-area-inset-left)) max(var(--space-2), env(safe-area-inset-right));
  background: var(--color-paper-muted);
  overscroll-behavior: contain;
  touch-action: pan-x pan-y pinch-zoom;
}

.reader-print-preview-page {
  display: block;
  inline-size: 100%;
  max-inline-size: 720px;
  block-size: auto;
  margin-inline: auto;
  background: var(--color-paper);
  user-select: none;
}

.reader-print-preview-actions {
  position: absolute;
  inset-block-end: calc(var(--space-4) + env(safe-area-inset-bottom));
  inset-inline-end: var(--space-4);
  z-index: 1;
  display: flex;
  gap: var(--space-2);
}

.reader-print-preview-actions > reader-button {
  display: inline-grid;
  place-items: center;
  inline-size: max(var(--reader-compact-action-min), 2.75rem);
  block-size: max(var(--reader-compact-action-min), 2.75rem);
  min-block-size: max(var(--reader-compact-action-min), 2.75rem);
  margin: 0;
  padding: 0;
}

.reader-print-preview-actions > reader-button > reader-icon {
  inline-size: 1.25rem;
  block-size: 1.25rem;
}

`,vo=`${$}
:host(.print-preview-pages) {
  display: none;
}

.print-preview-page,
.print-preview-page-content {
  min-block-size: 0;
}

.print-preview-section + .print-preview-section {
  margin-block-start: var(--space-2);
}

.print-preview-section-heading {
  margin: 0;
  color: #000000;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  break-after: avoid-page;
  break-inside: avoid;
}

.print-question-legend,
.print-page-number {
  display: none;
}

@media print {
  :host(.print-preview-pages) {
    display: block;
    inline-size: 210mm;
    margin: 0;
    font-size: 16px;
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }

  .print-preview-page {
    display: block;
    position: relative;
    box-sizing: border-box;
    inline-size: 210mm;
    block-size: 297mm;
    min-block-size: 0;
    margin: 0;
    padding: 10mm;
    break-inside: avoid;
    page-break-inside: avoid;
  }

  .print-preview-page:not(:last-child) {
    break-after: page;
    page-break-after: always;
  }

  .print-preview-page-content {
    min-block-size: 0;
  }

  .print-question-legend {
    display: flex;
    position: absolute;
    z-index: 2;
    inset-block-start: 10mm;
    inset-inline-end: 10mm;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: var(--space-2);
    max-inline-size: 100%;
    color: #b3b3b3;
    background: var(--color-paper);
    font-size: 16px;
    line-height: 22px;
    text-align: end;
  }

  .print-question-legend-item {
    display: inline-flex;
    gap: var(--space-1);
    white-space: nowrap;
  }

  .print-question-legend-abbreviation {
    font-weight: 700;
  }

  .print-page-number {
    display: block;
    position: absolute;
    inset-block-end: 10mm;
    inset-inline-end: 9.7mm;
    color: #666666;
    font-size: 16px;
    line-height: 1;
    overflow: clip;
  }
}
`,yo=`${$}
:host(.print-preview-question-card) {
  display: block;
  min-inline-size: 0;
  break-inside: avoid;
  padding-block-end: var(--space-1);
  margin-block-end: var(--space-1);
}

@media print {
  :host(.print-preview-question-card) {
    break-inside: avoid;
  }
}
`,bo=Q+`
:host {
  display: contents;
}
`;function xo(e){let t,n,r=!1,i,a,o;function s(){let e=o,t=e===`focusin`?a:i,n=e===`focusin`?i:a,r=e===`focusin`?`pointerover`:`focusin`;i=void 0,a=void 0,o=void 0,!(t!==void 0&&e!==void 0&&Co(t,e))&&n!==void 0&&Co(n,r)}let c=l=>{if(r)return;let u=So(l);l.type===`pointerover`&&(i=u),l.type===`focusin`&&(a=u),(l.type===`pointerover`||l.type===`focusin`)&&(o=l.type),u!==void 0&&t===void 0&&(t=$r(async()=>{let{setupTooltipEnhancement:e}=await import(`./tooltipEnhancement-CdBXmwMG.js`);return{setupTooltipEnhancement:e}},[]).then(({setupTooltipEnhancement:t})=>{r||(n=t(e),e.removeEventListener(`pointerover`,c),e.removeEventListener(`focusin`,c),s())}).catch(e=>{if(t=void 0,i=void 0,a=void 0,o=void 0,e instanceof Error){console.error(`Could not load reader tooltips`,e);return}console.error(`Could not load reader tooltips`,Error(String(e)))}))};return e.addEventListener(`pointerover`,c),e.addEventListener(`focusin`,c),()=>{r=!0,e.removeEventListener(`pointerover`,c),e.removeEventListener(`focusin`,c),n?.()}}function So(e){return e.composedPath().find(e=>e instanceof HTMLElement&&e.hasAttribute(`data-tippy-content`))}function Co(e,t){if(!e.isConnected)return!1;if(t===`focusin`){let t=e.shadowRoot;return e.matches(`:focus`)||t!==null&&t.activeElement!==null?(e.dispatchEvent(new FocusEvent(`focus`,{composed:!0})),!0):!1}return e.matches(`:hover`)?(e.dispatchEvent(new MouseEvent(`mouseenter`,{composed:!0})),!0):!1}var wo=vi(`<style>`),To=vi(`<button data-button-hit-target type=button tabindex=-1 aria-hidden=true>`),Eo=vi(`<span part=line-ripple class=field-ripple aria-hidden=true>`),Do=[`click`,`change`,`focus`,`focusin`,`focusout`,`blur`,`input`,`keydown`,`mousedown`,`pointerdown`,`submit`,`touchstart`];function Oo(e,t=e){let n=[];for(let r of Do){let i=t=>{let n=t.composedPath();if(!n.some(t=>t instanceof HTMLElement&&t!==e&&t.localName===`reader-button`)&&!n.some(e=>e instanceof HTMLElement&&(e.localName===`reader-question-sheet`||e.localName===`reader-question-backdrop`||e.classList.contains(`study-sheet-handle`)||e.classList.contains(`reader-question-backdrop-control`))))for(let i of n){if(!(i instanceof HTMLElement)||i===e)continue;let n=i[`$$`+r];if(typeof n==`function`){t.stopPropagation(),n.call(i,ko(t,i));return}}};t.addEventListener(r,i,!0),n.push(()=>t.removeEventListener(r,i,!0))}return()=>n.forEach(e=>e())}function ko(e,t){return new Proxy(e,{get(e,n){if(n===`currentTarget`)return t;let r=Reflect.get(e,n,e);return typeof r==`function`?r.bind(e):r}})}function Ao(e,t,n){return an(()=>{let e=n?.shadowRoot;return e==null?void 0:xo(e)}),ua(()=>[(()=>{var t=Ki(wo);return Hi(t,e),t})(),ci(()=>typeof t==`function`?t():t)])}function jo(e){return ua(()=>[(()=>{var e=Ki(wo);return Hi(e,La),e})(),ci(e),Ki(To)])}function Mo(e){return ua(()=>[(()=>{var e=Ki(wo);return Hi(e,Ra),e})(),ci(e),Ki(Eo)])}export{yi as $,ao as A,en as At,eo as B,_o as C,yn as Ct,fo as D,Vr as Dt,Ba as E,fr as Et,co as F,Da as G,Ha as H,no as I,ua as J,wa as K,bo as L,po as M,H as Mt,Za as N,A as Nt,uo as O,bn as Ot,Ga as P,g as Pt,ji as Q,to as R,yo as S,Br as St,Qa as T,dr as Tt,Ua as U,Ia as V,Oa as W,Mi as X,la as Y,Oi as Z,Ja as _,Yr as _t,xo as a,ci as at,Xa as b,qr as bt,go as c,Ri as ct,so as d,Pi as dt,si as et,Fa as f,Fi as ft,Ka as g,Gr as gt,qa as h,$r as ht,Ao as i,Hi as it,mo as j,an as jt,za as k,q as kt,lo as l,ki as lt,Va as m,vi as mt,jo as n,qi as nt,io as o,Li as ot,oo as p,Ni as pt,da as q,Mo as r,Gi as rt,ro as s,Ji as st,Oo as t,Ki as tt,$ as u,Ei as ut,ho as v,Jr as vt,$a as w,mr as wt,vo as x,xn as xt,Wa as y,Kr as yt,Ya as z};