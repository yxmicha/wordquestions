import{a as e,i as t,n,o as r,r as i,t as a}from"./readerStudyModeHost-BooVvPft.js";import{t as o}from"./overlayscrollbars-BpE47O9Q.js";var s=Object.create,c=Object.defineProperty,l=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyNames,d=Object.getPrototypeOf,f=Object.prototype.hasOwnProperty,p=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),m=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(var i=u(t),a=0,o=i.length,s;a<o;a++)s=i[a],!f.call(e,s)&&s!==n&&c(e,s,{get:(e=>t[e]).bind(null,s),enumerable:!(r=l(t,s))||r.enumerable});return e},h=(e,t,n)=>(n=e==null?{}:s(d(e)),m(t||!e||!e.__esModule||!f.call(e,`default`)?c(n,`default`,{value:e,enumerable:!0}):n,e)),g=class extends Error{source;constructor(e){let t=Error,n=t.stackTraceLimit;n!==void 0&&(t.stackTraceLimit=0),super(),n!==void 0&&(t.stackTraceLimit=n),this.source=e}},_=class extends Error{source;constructor(e,t){super(t instanceof Error?t.message:String(t),{cause:t}),this.source=e}};function v(e){return e instanceof _?e.cause:e}var y=class extends Error{constructor(){super(``)}},b=class extends Error{constructor(){super(``)}},x=1024,ee=2048,te=4096,ne=1024,re=4096,ie=16384,ae=1<<17,S={},oe={},se={};function ce(e){return e===se?void 0:e}var le=typeof Proxy==`function`,ue={},de=Symbol(`refresh`),fe=new Set;function pe(e){for(;e.rn;)e=e.rn;return e}function me(e,t){if(e=pe(e),t=pe(t),e===t)return e;t.rn=e;for(let n of t.Oe)e.Oe.add(n);return t.Oe.clear(),e.tn[0].push(...t.tn[0]),e.tn[1].push(...t.tn[1]),t.tn[0].length=0,t.tn[1].length=0,e}function he(e){let t=e.o?.$e;if(!t)return;let n=pe(t);if(fe.has(n))return n;e.o!==null&&(e.o.$e=void 0)}function ge(e){if(_e(e)&&e.o?.Tt){let t=rn(e).Tt=Qe(e.o?.Tt);if(t.sn!==!0)return t;e.o!==null&&(e.o.Tt=null)}return he(e)?.Ae??e.Ae}function _e(e){let t=e.o;return t!==null&&t.Pe!==void 0&&t.Pe!==S}function ve(e,t){let n=pe(t),r=e.o?.$e;if(r){if(r.rn){rn(e).$e=t,e.T|=ne;return}let i=pe(r);if(fe.has(i)){i!==n&&!_e(e)&&(n.an&&pe(n.an)===i?(rn(e).$e=t,e.T|=ne):i.an&&pe(i.an)===n||me(n,i));return}}rn(e).$e=t,e.T|=ne}var ye=new Set,C={eE:Array(2e3).fill(void 0),tE:!1,Me:0,EE:0},be={eE:Array(2e3).fill(void 0),tE:!1,Me:0,EE:0};function w(e){e.ie&16?e.ie&=-12:(it(e,be),e.ie&=-4)}var xe=0,T=null,Se=!1,Ce=!1,we=!1,Te=0,Ee=new Set;function De(e){let t=e.m;return ye.size===0&&fe.size===0&&e.Bt.length===0&&t.Xe.length===0&&t.A.length===0&&t.En.size===0&&Ee.size===0}function Oe(){if(Ee.size!==0)for(let e of Ee){if(e.u!==null){Ee.delete(e);continue}e.Re===S&&(e.o?.Pe===void 0||e.o?.Pe===S)&&(e.o?.t||(Ee.delete(e),e.T&262144?fn(e):e.o?.Nt?.()))}}function ke(){return{Te:xe,Mt:[],_e:new Map,Xe:[],A:[],En:new Set,ue:[],wt:{jt:[[],[]],Bt:[]},sn:!1,cn:new Set}}function Ae(e,t){t.sn=e,e.ue.push(...t.ue);for(let n of fe)n.Ae===t&&(n.Ae=e);t.Xe.length&&(e.Xe.push(...t.Xe),t.Xe.length=0),t.A.length&&(e.A.push(...t.A),t.A.length=0);for(let n of t.En)e.En.add(n);for(let[n,r]of t._e){let t=e._e.get(n);t||e._e.set(n,t=new Set);for(let e of r)t.add(e)}for(let n of t.cn)e.cn.add(n)}function je(){if(Ce){Ne();return}Se||(Se=!0,!Te&&!O.fn&&queueMicrotask(Je))}function Me(e){if(Ce)return;Ce=!0;let t=`[REACTIVITY_HALTED]`;e===void 0?console.error(t):console.error(t,e)}function Ne(){we||(we=!0,console.error(`[REACTIVITY_HALTED]`))}var Pe=0,Fe=class{Le=null;jt=[[],[]];Bt=[];qt=0;created=xe;addChild(e){this.Bt.push(e),e.Le=this}removeChild(e){let t=this.Bt.indexOf(e);t>=0&&(this.Bt.splice(t,1),e.Le=null)}notify(e,t,n,r){return this.Le?this.Le.notify(e,t,n,r):!1}run(e){if(this.jt[e-1].length){let t=this.jt[e-1];this.jt[e-1]=[],Ye(t,e)}let t=this.Bt,n=++Pe;for(let r=0;r<t.length;){let i=t[r];if(i.qt!==n&&(i.qt=n,i.run?.(e),t[r]!==i)){r=0;continue}r++}}enqueue(e,t){e&&(P?pe(P).tn[e-1].push(t):this.jt[e-1].push(t)),je()}stashQueues(e){e.jt[0].push(...this.jt[0]),e.jt[1].push(...this.jt[1]),this.jt=[[],[]];for(let t=0;t<this.Bt.length;t++){let n=this.Bt[t],r=e.Bt[t];r||(r={jt:[[],[]],Bt:[]},e.Bt[t]=r),n.stashQueues(r)}}restoreQueues(e){this.jt[0].push(...e.jt[0]),this.jt[1].push(...e.jt[1]);for(let t=0;t<e.Bt.length;t++){let n=e.Bt[t],r=this.Bt[t];r&&r.restoreQueues(n)}}},E=class e extends Fe{fn=!1;m=ke();static Fe;static ke;static ut;static Wt=null;static p=null;static G=null;static M=null;static N=null;static Ft=null;static gt=null;static Ue=null;static de=null;static me=null;static un=null;static Vt=null;static bt=null;static Lt=null;static nt=null;static k=null;static zt=null;static Kt=null;static yt=null;static Tn=null;static dn=null;static In=null;static Nn=null;static ln=null;static Ut=null;static kt=null;static xt=null;static Je=null;static tt=null;static he=null;static et=null;static _n=null;flush(){if(!this.fn){if(T===null&&C.EE<C.Me&&this.jt[0].length===0&&this.jt[1].length===0&&this.Bt.length===0&&De(this)){this.fn=!0;try{Dt(),D()}finally{this.fn=!1}xe++,Se=C.EE>=C.Me||this.jt[0].length!==0||this.jt[1].length!==0||this.m.Mt.length!==0;return}this.fn=!0;try{if(Dt(),st(C,e.Fe),T){if(!Ze(T)){let t=T;st(be,this.m===t?w:e.Fe),this.m===t&&(qe=this.m=ke()),fe.size&&(e.Nn(1),e.Nn(2)),this.stashQueues(t.wt),xe++,Se=C.EE>=C.Me||this.m.Mt.length>0,Ke(t.Mt),T=null,We(null,!0);return}let t=T,n=this.m;if(n!==t&&n.Mt.push(...t.Mt),this.restoreQueues(t.wt),ye.delete(t),T=null,Ke(n.Mt),We(t),n===t){let e=ke();e.Mt=n.Mt,e.Xe=n.Xe,e.A=n.A,e.En=n.En,qe=this.m=e}}else De(this)?(D(),C.EE>=C.Me&&(st(C,e.Fe),D())):(ye.size&&st(be,e.Fe),We());xe++,Se=C.EE>=C.Me,fe.size&&e.Nn(1),this.run(1),fe.size&&e.Nn(2),this.run(2)}finally{this.fn=!1}}}notify(t,n,r,i){if(n&1){if(r&1){let n=i??t.o?._;if(n?.l)return!0;if(n&&(!T&&!t.Ae&&qe.Mt.length&&this.initTransition(),T)){let r=n.source,i=T._e.get(r);i||T._e.set(r,i=new Set);let a=i.size;i.add(t),i.size!==a&&(je(),e.Kt?.(T))}}return!0}return!1}initTransition(e){if(e&&(e=Qe(e),e.sn===!0||e===T)||!e&&T&&T.Te===xe)return;if(!T)T=e??ke();else if(e){let t=T;Ae(e,t),this.restoreQueues(t.wt),ye.delete(t),T=e}ye.add(T),T.Te=xe;let t=this.m;if(t!==T){for(let e=0;e<t.Mt.length;e++){let n=t.Mt[e];n.Ae=T,T.Mt.push(n)}for(let e=0;e<t.Xe.length;e++){let n=t.Xe[e];n.Ae=T,T.Xe.push(n)}t.A.length&&T.A.push(...t.A);for(let e of t.En)T.En.add(e);if(t.cn.size){for(let e of t.cn)T.cn.add(e);t.cn.clear()}qe=this.m=T}for(let e of fe)e.Ae||=T;je()}};function Ie(e){qe.Mt.push(e)}var Le=!1,Re=0;function ze(){Re++}function Be(e,t=!1){e.Et=Re;let n=e.T,r=(n&1024?e.o?.$e:void 0)||P,i=!!(n&512)&&e.o?.Ye!==void 0,a=Le;for(let n=e.u;n!==null;n=n.ae){let e=n.ce;if(a&&(e.ie&=~ee),e.ie&4&&n.vt===e.ze&&n!==e.Be&&(e.ie|=te),i&&e.T&8){e.ie|=256;continue}t&&r?(e.ie|=128,ve(e,r)):t&&(e.ie|=128,e.o&&(e.o.$e=void 0)),tt(e)}}function Ve(e){let t=e;if(!t.oe){e.Re!==S&&(e.be=e.Re,e.Re=S),e.T&256&&E.un(e);return}e.Re!==S&&(e.be=e.Re,e.Re=S,e.ge&&e.ge!==3&&(e.He=!0),e.o&&(e.o.De=!1)),t.Ne=!1,t.ie&=~x,t.S&1||(t.S&=-5),t.o!=null&&(t.o.Ke!==null||t.o.Ze!==null)&&E.ke(t,!1,!0),e.T&256&&E.un(e)}var He=null,Ue=[];function D(){let e=qe.Mt;for(let t=0;t<e.length;t++){let n=e[t];Ve(n),n.Ae=null,n.T&131072&&(n.T&=~ae,Ue.push(n))}e.length=0,He?.()}function We(e=null,t=!1){let n=!t;n&&D(),!t&&O.Bt.length&&Ge(O);let r=C.EE>=C.Me;if(r&&st(C,E.Fe),n){r&&D();let t=e??O.m;if(t.Xe.length&&E.Tn(t.Xe),t.cn.size){for(let e of t.cn)e.ie&64||tt(e);t.cn.clear(),je()}if(t.A.length&&(E.G(t.A),O.Bt.length&&Ge(O)),t.En.size&&E.Wt(t.En,e),Ue.length!==0){for(;Ue.length;)Be(Ue.pop());C.EE>=C.Me&&(st(C,E.Fe),D())}Oe(),fe.size&&E.In(e)}}function Ge(e){for(let t of e.Bt)t.se?.(),Ge(t)}function Ke(e){for(let t=0;t<e.length;t++)e[t].Ae=T}var O=new E,qe=O.m;function Je(e){if(e){Te++;try{return e()}finally{try{Je()}finally{Te--}}}if(!O.fn&&!Ce)for(;Se||T;)O.flush()}function Ye(e,t){for(let n=0;n<e.length;n++)e[n](t)}function Xe(e,t){if(e.ie&96)return!1;if(e.o?.le?.has(t))return!0;for(let n=e.lt;n;n=n.ot){let e=n.st;for(;e;){if(e===t||e.rt===t)return!0;e=e.o?.St}}return!!(e.S&1&&e.o?._ instanceof g&&e.o?._.source===t)}function Ze(e){if(e.sn)return!0;if(e.ue.length)return!1;let t=!0;for(let[n,r]of e._e){let i=!1;for(let e of r){if(Xe(e,n)){i=!0;break}r.delete(e)}if(!i)e._e.delete(n);else if(n.S&1&&n.o?._?.source===n){t=!1;break}}return t&&E.dn?.(e)&&(t=!1),t&&(e.sn=!0),t}function Qe(e){for(;e.sn&&typeof e.sn==`object`;)e=e.sn;return e}function $e(e,t){let n=T;try{return T=Qe(e),t()}finally{T=n}}function et(e){return e.ie&32?be:C}function tt(e){let t=et(e);t.Me>e.qe&&(t.Me=e.qe),rt(e,t)}function nt(e,t){let n=(e.Le?.Dt?e.Le.Pt?.qe:e.Le?.qe)??-1;n>=e.qe&&(e.qe=n+1);let r=e.qe,i=t.eE[r];if(i===void 0)t.eE[r]=e;else{let t=i.ct;t._t=e,e.ct=t,i.ct=e}r>t.EE&&(t.EE=r)}function rt(e,t){let n=e.ie;n&1036||(n&1?e.ie=n&-4|10:(e.ie=n|8,t.tE&&!(n&2)&&(t.tE=!1)),n&16||nt(e,t))}function k(e,t){let n=e.ie;n&1052||(e.ie=n|16,nt(e,t))}function it(e,t){let n=e.ie;if(!(n&24))return;e.ie=n&-25;let r=e.qe;if(e.ct===e)t.eE[r]=void 0;else{let n=e._t,i=t.eE[r],a=n??i;e===i?t.eE[r]=n:e.ct._t=n,a.ct=e.ct}e.ct=e,e._t=void 0}function at(e){if(!e.tE){e.tE=!0;for(let t=0;t<=e.EE;t++)for(let n=e.eE[t];n!==void 0;n=n._t)n.ie&8&&ot(n)}}function ot(e,t=2){let n=e.ie;if(!((n&3)>=t)){e.ie=n&-4|t;for(let t=e.u;t!==null;t=t.ae)ot(t.ce,1);if(e.T&4096)for(let t=e.o.i;t!==null;t=t.Se)for(let e=t.u;e!==null;e=e.ae)ot(e.ce,1)}}function st(e,t){for(e.tE=!1,e.Me=0;e.Me<=e.EE;e.Me++){let n=e.eE[e.Me];for(;n!==void 0;)n.ie&8?t(n):ct(n,e),n=e.eE[e.Me]}e.EE=0}function ct(e,t){it(e,t);let n=e.qe;for(let t=e.lt;t;t=t.ot){let e=t.st,r=e.rt||e;r.oe&&r.qe>=n&&(n=r.qe+1)}if(e.qe!==n){e.qe=n;for(let t=e.u;t!==null;t=t.ae)k(t.ce,et(t.ce))}}function lt(e){let t=e.Qe;for(;t;){let e=t.ie;t.ie=e|32,e&24&&(it(t,e&32?be:C),e&8?rt(t,be):k(t,be)),lt(t),t=t.We}}function ut(e,t=!1,n){let r=e.ie;if(r&64)return;if(t){e.ie=r|64;let t=e;(t.o?.ye||t.o?.Ce)&&E.un(t)}t&&e.oe&&e.o!==null&&(e.o.Ie=null);let i=n?e.o?.Ke??null:e.Qe;for(;i;){let e=i.We,t=i;t.T&=-33,it(t,et(t)),wt(t),ut(i,!0),i=e}if(n?e.o!==null&&(e.o.Ke=null):(e.Qe=null,e.je=0),t&&!n&&!(r&32)&&e.Le!==null&&!(e.Le.ie&64)){let t=e.It,n=e.We;t===null?e.Le.Qe=n:t.We=n,n!==null&&(n.It=t),e.It=null}if(dt(e,n),t&&e.Gt){let t=e.Gt;e.Gt=void 0,t()}}function dt(e,t){let n=t?e.o?.Ze:e.Ge;if(n){if(Array.isArray(n))for(let e=0;e<n.length;e++){let t=n[e];t.call(t)}else n.call(n);t?e.o!==null&&(e.o.Ze=null):e.Ge=null}}function ft(e,t){let n=e;for(;n.T&4&&n.Le;)n=n.Le;if(n.id!=null)return gt(n.id,t?n.je++:n.je);throw Error(``)}function pt(e){return ft(e,!0)}function mt(e,t,n){return e?.id??(t?n?.id:n?.id==null?void 0:pt(n))}function ht(e){return ft(e,!1)}function gt(e,t){let n=t.toString(36),r=n.length-1;return e+(r?String.fromCharCode(64+r):``)+n}function A(){return N}function _t(e){return N&&(N.Ge?Array.isArray(N.Ge)?N.Ge.push(e):N.Ge=[N.Ge,e]:N.Ge=e),e}function vt(e){return!!(e.ie&96)}function yt(e=!0){ut(this,e)}function bt(e){let t=N,n=e?.transparent??!1,r={id:mt(e,n,t),T:n?4:0,Dt:!0,Pt:t?.Dt?t.Pt:t,Qe:null,We:null,It:null,Ge:null,C:t?.C??O,we:t?.we||ue,je:0,o:null,Le:t,dispose:yt};if(t){let e=t.Qe;e===null?t.Qe=r:(r.We=e,e.It=r,t.Qe=r)}return r}function xt(e,t){let n=bt(t);return bn(n,()=>e(()=>n.dispose()))}function St(e){let t=e.st,n=e.ot,r=e.ae,i=e.en;if(r===null?t.ft=i:r.en=i,i!==null)i.ae=r;else if(t.u=r,r===null){t.T&262144?fn(t):t.o?.Nt?.();let e=t;e.oe&&e.T&32&&!(e.ie&32)&&!(e.S&1)&&Tt(e)}return n}function Ct(e){let t=e.Be,n=t===null?e.lt:t.ot;if(n!==null){do n=St(n);while(n!==null);t===null?e.lt=null:t.ot=null}}function wt(e){let t=e.lt;if(t){do t=St(t);while(t!==null);e.lt=null,e.Be=null}}function Tt(e){it(e,et(e)),wt(e),ut(e,!0)}var Et=new Set;function Dt(){if(Et.size!==0){for(let e of Et)!e.u&&e.T&32&&!(e.S&1)&&!(e.ie&96)&&Tt(e);Et.clear()}}function Ot(e,t,n=!1){let r=t.Be;if(r!==null&&r.st===e){r.ve&&=n;return}let i=null,a=t.ie&4;if(a&&(i=r===null?t.lt:r.ot,i!==null&&i.st===e)){i.vt=t.ze,t.Be=i,i.ve=n;return}let o=e.ft;if(o!==null&&o.ce===t&&(!a||o.vt===t.ze)){a?o.ve&&=n:o.ve=n;return}let s=t.Be=e.ft={st:e,ce:t,ot:i,en:o,ae:null,vt:t.ze,ve:n};r===null?t.lt=s:r.ot=s,o===null?e.u=s:o.ae=s,ze()}function kt(e,t){return!e.o?.le?.has(t)&&((rn(e).le??=new Set).add(t),!0)}function j(e,t){let n=e.o?.le;return n?.delete(t)?(n.size||(e.o.le=void 0),!0):!1}function At(e){e.o!==null&&(e.o.le=void 0)}function jt(e,t){rn(e).fe=!0,t.source&&kt(e,t.source),e.S&2||Mt(e,t.source,t)}function Mt(e,t,n){if(!t){e.o!==null&&(e.o._=null);return}if(n instanceof g&&n.source===t){rn(e)._=n;return}let r=e.o?._;(!(r instanceof g)||r.source!==t)&&(rn(e)._=new g(t))}function Nt(e,t){for(let n=e.u;n!==null;n=n.ae)t(n.ce,n);for(let n=e.o?.i??null;n!==null;n=n.Se)for(let e=n.u;e!==null;e=e.ae)t(e.ce,e)}function Pt(e){e.oe&&e.T&32&&!e.u&&!(e.ie&32)&&!(e.S&1)&&Tt(e)}function Ft(e){let t,n=new Set,r=e=>{n.has(e)||(n.add(e),!e.u&&e.T&32&&(t??=[]).push(e),Nt(e,r))};if(Nt(e,r),t)for(let e of t)Pt(e)}function It(e,t){let n=!1,r=new Set,i=e=>{r.has(e)||(r.add(e),e.o?._===t&&(tt(e),n=!0),Nt(e,i))};Nt(e,i),n&&je()}function M(e){j(e,e);let t=!1,n,r=new Set,i=E.de,a=o=>{if(r.has(o)||!j(o,e))return;r.add(o),o.Te=xe;let s=o.o?.le?.values().next().value,c=o.S&2;s?(c||Mt(o,s),i?.(o)):(o.S&=-2,c||Mt(o),i?.(o),o.o?.fe&&(tt(o),t=!0),o.o!==null&&(o.o.fe=!1),!o.u&&o.T&32&&(n??=[]).push(o)),Nt(o,a)};if(Nt(e,a),n)for(let e of n)Pt(e);t&&je()}function Lt(e){return typeof e==`object`&&!!e&&typeof e.then==`function`}function Rt(e){let t=e.o?.Ee;t!=null&&(e.o.Ee=null,t())}function zt(e,t,n){let r=!1,i=!1;if(typeof t==`object`&&t&&mn(()=>{r=t[Symbol.asyncIterator],i=!r&&Lt(t)}),!i&&!r)return e.o!==null&&(e.o.Ie=null),e.Ne=!1,t;rn(e).Ie=t;let a,o=()=>{let t=ge(e);if(t&&e.S&4&&!Qe(t)._e.has(e)){e.Ae=null;return}O.initTransition(t)},s=n=>{if(e.o?.Ie!==t)return;let r=n instanceof g;if(r&&e.Ne){e.o!==null&&(e.o.Ie=null),jt(e,n),e.Te=xe;return}o(),Vt(e,r?1:2,n),r&&M(e),e.Te=xe,r||Ft(e)},c=(r,i)=>{if(e.o?.Ie!==t||e.ie&130)return;o();let a=!!(e.S&4),c=e.o?.De;Ct(e),Bt(e),c&&(e.o.De=!0);let l=he(e);if(l&&l.Oe.delete(e),n){try{n(r)}catch(e){s(e);return}a&&Bt(e,!0)}else if(e.o?.Pe!==void 0)e.Re===S&&Ie(e),e.Re=r,E.Ue?.(e,r),_e(e)?e.T&16384&&E.he?.(e):Be(e),e.Te=xe;else if(l){let t=e.ge,n=e.be,i=e.pe;try{(!t&&a||!i||!i(r,n))&&(e.be=r,e.Te=xe,E.Ue?.(e,r),Be(e,!0))}catch(t){Vt(e,2,t)}}else try{_n(e,()=>r)}catch(t){Vt(e,2,t)}e.Re===S&&(e.Ne=!1,c&&(e.o.De=!1)),M(e),je(),Je(),i?.()},l=()=>e.T&32&&!e.u&&!(e.S&1)?(Tt(e),!0):!1,u=(n,r)=>{let i=n[Symbol.asyncIterator](),o=!1,u=!1,d=!r,f=()=>{if(!u){u=!0;try{let e=i.return?.();Lt(e)&&e.then(void 0,()=>{})}catch{}}};r?r(f):_t(f),rn(e).Ee=f;let p=()=>{l()||m()},m=()=>{let n,r,f=!1,h=!1,g=!0,_=i.next();if((Lt(_)?_:{then:e=>void e(_)}).then(r=>{if(g&&d)n=r,f=!0,r.done&&(u=!0);else if(e.o?.Ie!==t)return;else r.done?(u=!0,o?(je(),Je()):c(void 0),l()):(o=!0,c(r.value,p))},n=>{g&&d?(r=n,h=!0):e.o?.Ie===t&&(u=!0,s(n),l())}),g=!1,h){if(u=!0,s(r),d)throw r;return!0}return f&&!n.done?(a=n.value,o=!0,m()):f&&n.done},h=m();return d=!1,o||h},d=null,f=(e,t)=>{let n=!1;if(typeof e==`object`&&e&&mn(()=>{n=e[Symbol.asyncIterator]}),!n)return!1;let r=u(e,t);return t||(d=r),!0};if(i){let n=!1,r=!1,i,o=!0,u=t=>{e.Ge?Array.isArray(e.Ge)?e.Ge.push(t):e.Ge=[e.Ge,t]:e.Ge=t};if(t.then(r=>{o?(a=r,n=!0):e.o?.Ie===t&&!(e.ie&64)&&f(r,u)||(c(r),l())},e=>{o?(i=e,r=!0):(s(e),l())}),o=!1,r)throw s(i),i;if(n)f(a)||(e.Ne=!1);else{if(e.Ne)return e.be;throw O.initTransition(ge(e)),new g(N)}}if(r&&f(t),d!==null){if(!d){if(e.Ne)return e.be;throw O.initTransition(ge(e)),new g(N)}e.Ne=!1}return a}function Bt(e,t=!1){e.o?.le&&At(e),e.o?.fe&&e.o!==null&&(e.o.fe=!1),e.o!==null&&(e.o.De=!1),e.S=t?0:e.S&4,e.o?._&&Mt(e),(e.o?.ye||e.o?.Ce)&&E.de(e),e.o?.i&&e.T&2048&&E.me!==null&&E.me(e);let n=cn(e);n&&n.call(e)}function Vt(e,t,n,r,i){t===2&&!(n instanceof _)&&!(n instanceof g)&&(n=new _(e,n));let a=t===1&&n instanceof g?n.source:void 0,o=t===1&&e.o?.Pe!==void 0&&a!==e,s=o&&_e(e);r||(t===1&&a?(kt(e,a),e.S=1|e.S&4,Mt(e,a,n)):(At(e),e.S=t|(t===2?0:e.S&4),rn(e)._=n),E.de?.(e),e.o?.i&&e.T&2048&&E.me!==null&&E.me(e)),i&&!r&&ve(e,i);let c=r||s,l=r||o?void 0:i,u=cn(e);if(u){if(r&&t===1)return;c?u.call(e,t,n):u.call(e);return}Nt(e,(e,r)=>{if(e.Te=xe,t===1&&a&&!e.o?.le?.has(a)||t!==1&&(e.o?._!==n||e.o?.le)){if(r.ve&&t!==1&&!(n instanceof g)){tt(e),je();return}!c&&!e.Ae&&Ie(e),Vt(e,t,n,c,l)}})}E.Fe=e=>{e.ge===3?(it(e,et(e)),e.He=!0,e.C.enqueue(2,e.Ve)):en(e)},E.ke=ut;var Ht=!1,Ut=!1,Wt=!1,Gt=!1,N=null,P=null,Kt=!1,qt=null;function Jt(e){for(;e;){if(e.xe)return!0;e=e.Le}return!1}function Yt(e){Kt=e,e&&!qt&&(qt=new Set)}function Xt(e){e.xe=!0}function Zt(e){e.xe=!1,Qt(e),je()}function Qt(e){let t=e.Qe;for(;t;){if(t.xe){t=t.We;continue}if(t.oe){let e=t;e.T&=-9,e.ie&256&&(e.ie&=-257,e.ie|=2,C.Me>e.qe&&(C.Me=e.qe),rt(e,C))}Qt(t),t=t.We}}function $t(){if(qt){for(let e of qt)delete e.o?.Ye,e.sp!==void 0&&(e.sp=void 0);qt=null}Kt=!1}function en(e,t=!1){ze();let n=e.ge;if(!t){if(e.Ae&&(!n||T)&&T!==e.Ae&&O.initTransition(e.Ae),it(e,et(e)),e.o!==null&&(e.o.Ie=null,Rt(e)),e.Ae||n===3)ut(e);else if(e.Qe!==null||e.Ge!==null){lt(e);let t=rn(e);t.Ze=e.Ge,t.Ke=e.Qe,e.Ge=null,e.Qe=null,e.je=0}}let r=!!(e.ie&128),i=!!(e.T&128)&&e.o?.Pe!==S&&e.o?.Pe!==void 0,a=!!(e.S&4),o=e.S&2?e.o?._:void 0,s=e.o?.le?.has(e),c=(e.ie&ee)!==0,l=e.Ne,u=N;N=e,e.Be=null,e.ze++,e.ie=4,e.Te=xe;let d=e.Re===S?e.be:e.Re,f=e.qe,p=!1,m=Ht,h=P;Ht=!0;let _=Gt;if(Gt=!1,r){let t=E.Je(e,!0);t?P=t:t===!1&&(r=!1)}else if(T&&!t&&T.Xe.length){let t=E.Je(e,!1);t&&(r=!0,P=t)}let v=n&&n!==2,y=Ut;v&&(Ut=!0);try{if(e.T&64)d=e.oe(d),e.o!==null&&(e.o.Ie=null),e.Ne=!1;else{let t=e.o?.Ie,n=e.oe(d),r=typeof n==`object`&&!!n,i=e.o?.Ie!==t;d=i||!r?n:zt(e,n),!i&&!r&&(e.o!==null&&(e.o.Ie=null),e.Ne=!1)}(e.S!==0||e.o!==null)&&Bt(e,t),e.T&1024&&e.o?.$e&&E.et(e)}catch(t){let n=t instanceof g;if(n&&e.Ne)jt(e,t);else{n&&P&&E.tt(e);let r=!1;n&&(rn(e).fe=!0,E.nt!==null&&(r=E.nt(e,c))),Vt(e,n?1:2,t,void 0,n?e.o?.$e:void 0),n&&s&&!e.o?.Ie&&M(e),r&&E.k(e)}}finally{Ht=m,Gt=_,v&&(Ut=y),p=(e.ie&te)!==0,e.ie=0|(t?e.ie&256:0),N=u}if(!e.o?._){Ct(e);let c=i?ce(e.o?.Pe):e.Re===S?e.be:e.Re,u=!1;try{u=!n&&a||!e.pe||!e.pe(c,d)}catch(t){Vt(e,2,t)}if(n&&u&&(e.He=!e.o?._,t||e.C.enqueue(n,e.it??=E.ut.bind(null,e))),!e.o?._){if(u){let a=i?e.o?.Pe:void 0;t||n&&(T!==e.Ae||T===null||e.T&32768)||r?(e.be=d,i&&r&&(rn(e).Pe=d===void 0?se:d,e.Re=S)):(e.Re=d,l&&(e.Ne=!0),(T||e.Ae)&&E.Ue!==null&&E.Ue(e,d)),e.u!==null&&(!i||r||e.o?.Pe!==a)&&Be(e,r||i)}else if(i)e.Re===S&&Ie(e),e.Re=d,l&&(e.Ne=!0),e.T&16384&&E.he(e);else if(e.qe!=f)for(let t=e.u;t!==null;t=t.ae)k(t.ce,et(t.ce))}o!==void 0&&!u&&!e.o?._&&It(e,o),s&&!(e.S&5)&&M(e)}P=h,(e.Re!==S||e.o!==null&&(e.o.Ke!==null||e.o.Ze!==null)||e.S&5)&&(!t||e.S&1)&&(!e.Ae||i)&&Ie(e),e.Ae&&n&&T!==e.Ae&&$e(e.Ae,()=>en(e)),p&&(tt(e),je())}function tn(e){if(!(e.ie&68)){if(e.ie&1)for(let t=e.lt;t;t=t.ot){let n=t.st,r=n.rt||n;if(r.oe&&tn(r),e.ie&2)break}(e.ie&130||e.o?._&&e.Te<xe&&!e.o?.Ie)&&en(e),e.ie&=280}}function nn(e,t){let n=t?.transparent??!1,r=typeof t==`object`&&!!t&&`loadingValue`in t,i={id:mt(t,n,N),T:(n?4:0)|!!t?.ownedWrite|(!N||t?.lazy?32:0)|(t?.sync?64:0)|(t?.H?2:0)|(Kt&&Jt(N)?8:0),pe:t?.equals??pn,Ge:null,C:N?.C??O,we:N?.we??ue,je:0,oe:e,be:r?t.loadingValue:void 0,qe:0,_t:void 0,ct:null,lt:null,Be:null,ze:0,u:null,ft:null,Le:N,We:null,It:null,Qe:null,ie:t?.lazy?512:0,S:r?0:4,Te:xe,Re:S,Ae:null,Et:-1,Ne:r,o:null};return t?.unobserved&&(rn(i).Nt=t.unobserved),un(i,t),i}function rn(e){return e.o??={Pe:void 0,Tt:void 0,$e:void 0,ye:void 0,Ce:void 0,St:void 0,t:0,Ie:null,Ee:null,_:void 0,fe:void 0,le:void 0,h:void 0,De:!1,i:null,Nt:void 0,Ye:void 0,Ze:null,Ke:null,dt:void 0}}function an(e,t,n,r,i){let a=i?.transparent??!1,o={id:mt(i,a,N),T:(a?4:0)|!!i?.ownedWrite|(i?.sync?64:0)|(i?.At??0)|(Kt&&Jt(N)?8:0),pe:!1,Ge:null,C:N?.C??O,we:N?.we??ue,je:0,oe:e,be:void 0,qe:0,_t:void 0,ct:null,lt:null,Be:null,ze:0,u:null,ft:null,Le:N,We:null,It:null,Qe:null,ie:512,S:4,Te:xe,Re:S,Ae:null,Et:-1,Ne:!1,He:!1,Ot:void 0,Ct:t,Rt:n,Gt:void 0,ge:r,o:null};return i?.unobserved&&(rn(o).Nt=i.unobserved),un(o,ln),o}var on=null;function sn(e){on=e}function cn(e){let t=e.o?.h;return t===void 0?e.ge?on??void 0:void 0:t}var ln={lazy:!0};function un(e,t){e.ct=e;let n=N?.Dt?N.Pt:N;if(N){let t=N.Qe;t===null?N.Qe=e:(e.We=t,t.It=e,N.Qe=e)}n&&(e.qe=n.qe+1),E.Ft!==null&&E.Ft(e),!t?.lazy&&en(e,!0),Kt&&!t?.lazy&&!(e.S&1)&&!(e.T&2)&&(rn(e).Ye=e.be===void 0?oe:e.be,e.T|=512,qt.add(e))}function dn(e,t,n=null){let r={pe:t?.equals??pn,T:!!t?.ownedWrite|(t?.H?2:0),be:e,u:null,ft:null,Te:xe,rt:n,Se:n?.o?.i||null,Re:S,Ae:null,Et:-1,o:null};return t?.unobserved&&(rn(r).Nt=t.unobserved),n&&(rn(n).i=r,n.T|=re),Kt&&!(r.T&2)&&!((n?.S??0)&1)&&(rn(r).Ye=e===void 0?oe:e,r.T|=512,qt.add(r)),r}var fn;function pn(e,t){return e===t}function mn(e,t){if(E.gt===null&&!Ht)return e();let n=Ht;Ht=!1;try{return E.gt===null?e():E.gt(e)}finally{Ht=n}}function hn(e,t){e.ie&512?(e.ie&=-513,en(e,!0)):e.ie&64?e.T&32&&en(e,!0):t&&tn(e)}function gn(e){if(Gt)return E.Vt(e);let t=N;t?.Dt&&(t=t.Pt);let n=e,r=e.rt||e;if(typeof n.oe==`function`&&hn(e,!1),!n.oe&&r===e&&e.o?.Pe===void 0&&e.o?.Ye===void 0&&T===null&&P===null&&!Kt)return t&&Ht&&Ot(e,t),!t||e.Re===S||t.T&16?e.be:e.Re;if(t&&Ht&&(Ot(e,t,Wt),r.oe)){let n=et(e);r.qe>=n.Me?(ot(t),at(n),tn(r)):t.T&65536&&tn(r);let i=r.qe;i>=t.qe&&e.Le!==t&&(t.qe=i+1)}if(r.S&1){if(t&&!(Ut&&r.Ae&&T!==r.Ae)){if(P===null||E.kt(r))throw!Ht&&e!==t&&Ot(e,t),r.o?._}else if(t&&r.S&4)throw!Ht&&e!==t&&Ot(e,t),r.o?._;else if(!t&&r.S&4)throw r.o?._}if(r.oe&&r.S&2){if(Ht&&r.Te<xe)return en(r),gn(e);throw r.o?._}if(Kt&&t&&t.T&8){let n=e.o?.Ye;if(n!==void 0){let r=n===oe?void 0:n;return(e.Re===S?e.be:e.Re)!==r&&(t.ie|=256),r}}if(e.o?.Pe!==void 0&&e.o?.Pe!==S){if(!(t&&t.T&8192))return ce(e.o?.Pe);e.T|=ie}if(P!==null&&T!==null&&t!==null&&E.Ut(e,r,t))return e.be;let i=!t||P!==null&&E.xt(e,r,t)||e.Re===S||t.T&16||Ut&&e.Ae&&T!==e.Ae||e.T&131072&&!Gt&&!(t.T&8192)?e.be:e.Re;return!t&&r===e&&typeof n.oe==`function`&&e.T&32&&!(r.S&1)&&!e.u&&(Et.add(e),je()),i}function _n(e,t){if(e.Ae&&T!==e.Ae&&O.initTransition(e.Ae),e.T&128)return E.yt(e,t);let n=e.Re===S?e.be:e.Re;if(typeof t==`function`&&(t=t(n)),!(e.S&4||!e.pe||!e.pe(n,t)))return t;let r=e.Re!==S;return r||Ie(e),e.Re=t,e.T&256&&E.Ue!==null&&E.Ue(e,t),e.oe!==void 0&&(e.Te=xe),r&&e.Et===Re&&P===null?t:(Be(e),je(),t)}function vn(e){it(e,et(e)),!(e.ie&1024)&&e.Re===S&&(Ie(e),je()),e.ie=e.ie&-4|x,e.Qt=xe}function yn(e,t){let n=_n(e,t);return vn(e),n}function bn(e,t){let n=N,r=Ht;N=e,Ht=!1;try{return t()}finally{N=n,Ht=r}}function xn(e,t=!0){let n=Ut;Ut=t;try{return e()}finally{Ut=n}}function Sn(e,t=A()){if(!t)throw new y;let n=t.we[e.id];if(n===void 0&&(n=e.defaultValue),n===void 0)throw new b;return n}function Cn(e,t,n=A()){if(!n)throw new y;n.we={...n.we,[e.id]:t===void 0?e.defaultValue:t}}function wn(e,t,n,r){let i=an(e,t,n,r?.user?2:1,r);en(i,!0),!r?.defer&&(i.ge===2||r?.schedule?i.C.enqueue(i.ge,En.bind(null,i)):En(i))}function Tn(e,t){let n=e===void 0?this.S:e,r=t===void 0?this.o?._:t;if(n&2){if(this.C.notify(this,1,0),this.ge===2){this.S&2&&(this.He=!0,this.C.enqueue(this.ge,this.it??=En.bind(null,this)));return}if(!this.C.notify(this,2,2))throw Me(v(r)),r}else this.ge===1&&this.C.notify(this,3,n,r)}function En(e){if(!e.He||e.ie&64)return;if(e.S&2&&e.ge===2){let t=v(e.o?._);e.Ot=e.be,e.He=!1;try{e.Rt?e.Rt(t,()=>{let t=e.Gt;e.Gt=void 0,t?.()}):console.error(t)}catch(t){if(!e.C.notify(e,2,2))throw Me(t),t}return}let t=e.Gt;e.Gt=void 0;try{t?.(),e.Gt=e.Ct(e.be,e.Ot)}catch(t){if(rn(e)._=new _(e,t),e.S|=2,!e.C.notify(e,2,2))throw Me(t),t}finally{e.Ot=e.be,e.He=!1}}E.ut=En;function Dn(e,t){let n=()=>{if(!(!r.He||r.ie&64))try{r.He=!1,en(r)}finally{}},r=nn(()=>{let t=r.Gt;r.Gt=void 0,t?.();let n=xn(e);r.Gt=n},{...t,lazy:!0});r.Gt=void 0,r.T=r.T&-33|16,r.He=!0,r.ge=3,r.Ve=n,tt(r),je()}sn(Tn);function On(e){return _t(e)}function kn(e){let t=gn.bind(null,e);return t[de]=e,t}function An(e,t){if(typeof e==`function`){let n=nn(e,t);return n.T&=-33,[kn(n),yn.bind(null,n)]}let n=dn(e,t);return[kn(n),_n.bind(null,n)]}function jn(e,t){return kn(nn(e,t))}function Mn(e,t,n){wn(e,t.effect||t,t.error,{user:!0,...n})}function Nn(e,t,n){wn(e,t,void 0,n)}function Pn(e){let t=A();t&&!(t.T&16)?Dn(()=>mn(e),void 0):O.enqueue(2,()=>{e()})}var Fn=Symbol(0);function In(e){return Reflect.ownKeys(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))}function Ln(e,t,n){let r=typeof n?.keyed==`function`?n.keyed:void 0,i=t.length>1,a=t,o={$t:bt(),Jt:0,Xt:e,Yt:[],Zt:a,ts:[],ss:[],Ht:r,es:r||n?.keyed===!1?[]:void 0,rs:i&&n?.keyed!==!1?[]:void 0,ns:n?.keyed===!1,hs:n?.fallback},s=nn(zn.bind(o),void 0);return o.$t.Pt=s,s.T&=-33,kn(s)}var Rn={ownedWrite:!0};function zn(){let e=this.Xt()||[],t=e.length;return bn(this.$t,()=>{let n,r,i,a,o=this.es?this.ns?()=>(i[r]=dn(e[r],Rn),this.Zt(kn(i[r]),r)):()=>(i[r]=dn(e[r],Rn),a&&(a[r]=dn(r,Rn)),this.Zt(kn(i[r]),a?kn(a[r]):void 0)):this.rs?()=>{let t=e[r];return a[r]=dn(r,Rn),this.Zt(t,kn(a[r]))}:()=>{let t=e[r];return this.Zt(t)};if(t===0)this.Jt!==0&&(this.$t.dispose(!1),this.ss=[],this.Yt=[],this.ts=[],this.Jt=0,this.es&&=[],this.rs&&=[]),this.hs&&!this.ts[0]&&(this.ss[0]?.dispose(),this.ts[0]=bn(this.ss[0]=bt(),this.hs));else if(this.Jt===0){let s=Array(t),c=Array(t);i=this.es&&Array(t),a=this.rs&&Array(t);try{for(r=0;r<t;r++)s[r]=bn(c[r]=bt(),o)}catch(e){for(n=0;n<=r;n++)c[n]?.dispose();throw e}this.ss[0]&&this.ss[0].dispose(),this.ts=s,this.ss=c,i&&(this.es=i),a&&(this.rs=a),this.Yt=e.slice(0),this.Jt=t}else{let s,c,l,u,d,f,p,m,h;for(s=0,c=Math.min(this.Jt,t);s<c&&(this.Yt[s]===e[s]||this.es&&Bn(this.Ht,this.Yt[s],e[s]));s++)this.es&&_n(this.es[s],e[s]);for(c=this.Jt-1,l=t-1;c>=s&&l>=s&&(this.Yt[c]===e[l]||this.es&&Bn(this.Ht,this.Yt[c],e[l]));c--,l--);if(s===t&&this.Jt===t){this.Yt=e.slice(0);return}let g=t-this.Jt,_=Array(t),v=Array(t);for(i=this.es?Array(t):void 0,a=this.rs?Array(t):void 0,f=new Map,p=Array(l+1),r=l;r>=s;r--)u=e[r],d=this.Ht?this.Ht(u):u,n=f.get(d),p[r]=n===void 0?-1:n,f.set(d,r);for(n=s;n<=c;n++)u=this.Yt[n],d=this.Ht?this.Ht(u):u,r=f.get(d),r!==void 0&&r!==-1?(_[r]=this.ts[n],v[r]=this.ss[n],i&&(i[r]=this.es[n]),a&&(a[r]=this.rs[n]),r=p[r],f.set(d,r)):(m??=[]).push(this.ss[n]);try{for(r=s;r<=l;r++)v[r]===void 0&&((h??=[]).push(v[r]=bt()),_[r]=bn(v[r],o))}catch(e){if(h)for(n=0;n<h.length;n++)h[n].dispose();throw e}for(n=0;n<s;n++)_[n]=this.ts[n],v[n]=this.ss[n],i&&(i[n]=this.es[n]),a&&(a[n]=this.rs[n]);for(r=s;r<=l;r++)i&&_n(i[r],e[r]),a&&_n(a[r],r);for(r=l+1;r<t;r++)_[r]=this.ts[r-g],v[r]=this.ss[r-g],i&&(i[r]=this.es[r-g],_n(i[r],e[r])),a&&(a[r]=this.rs[r-g],g!==0&&_n(a[r],r));if(this.ts=_,this.ss=v,i&&(this.es=i),a&&(this.rs=a),this.Jt=t,this.Yt=e.slice(0),m)for(n=0;n<m.length;n++)m[n].dispose()}}),this.ts}function Bn(e,t,n){return!e||e(t)===e(n)}function Vn(e,t){let n=nn(e,{lazy:!0});return rn(n).h=(e,t)=>{let r=e===void 0?n.S:e,i=t===void 0?n.o?._:t;n.S&=~n.R;let a=n.C.notify(n,3,r,i),o=r&~n.R&3;if(o&&(n.S&=~o,n.o?._===i&&!(n.S&3)&&n.o!==null&&(n.o._=void 0)),!a&&r&2)throw Me(v(i)),i},n.R=t,n.T&=-33,en(n,!0),n}function Hn(e,t,n,r){let i=e.C;return i.addChild(e.C=n),_t(()=>i.removeChild(e.C)),bn(e,()=>{let e=nn(t);return Vn(()=>qn(gn(e)),r)})}var Un=Symbol(),Wn=class extends Fe{ee;v=new Set;te;U=!0;D=dn(!1,{ownedWrite:!0,H:!0});_;P=dn(!1,{ownedWrite:!0,H:!0});W;L=!1;re;ne=Un;constructor(e){super(),this.ee=e}run(e){if(!(!e||gn(this.D)))return super.run(e)}notify(e,t,n,r){if(!(t&this.ee))return super.notify(e,t,n,r);if(this.L&&this.re){let e=mn(()=>{try{return this.re()}catch{return Un}});e!==this.ne&&(this.ne=e,this.L=!1,this.v.clear())}if(this.ee&1&&this.L)return super.notify(e,t,n,r);if(n&this.ee){this.U=!0;let t=r?.source||e.o?._?.source;if(t){let e=this.v.size===0;this.v.add(t),e&&_n(this.D,!0),this.ee&2&&_n(this._,v(t.o?._))}}return t&=~this.ee,!t||super.notify(e,t,n,r)}se(){for(let e of this.v)(e.ie&64||!e.o?.t&&!(e.S&this.ee)&&!(this.ee&2&&e.S&1))&&this.v.delete(e);if(!this.v.size&&(this.U=this.ee&1&&this.U&&!this.L&&this.te?!!(this.te.S&this.ee):!1,!this.U&&(_n(this.D,!1),this.re)))try{this.ne=mn(()=>this.re())}catch{}}};function Gn(e,t,n,r){let i=bt(),a=new Wn(e);e===2&&(a._=dn(void 0,{ownedWrite:!0,H:!0})),r&&(a.re=r);let o=a.te=Hn(i,t,a,e);return mn(()=>{let t=!1;try{gn(o)}catch(e){if(e instanceof g)t=!0;else throw e}a.U=t||!!(o.S&e)||o.o?._ instanceof g}),kn(nn(()=>{if(!gn(a.D)){let e=gn(o);if(!mn(()=>gn(a.D)))return a.L=!0,e}return n(a)},{H:!0}))}function Kn(e,t,n){return Gn(1,e,()=>t(),n?.on)}function qn(e,t){if(typeof e==`function`&&!e.length){if(t?.doNotUnwrap)return e;do e=e();while(typeof e==`function`&&!e.length)}if(!(t?.skipNonRendered&&(e==null||e===!0||e===!1||e===``))){if(Array.isArray(e)){let n=[];return Jn(e,n,t)?()=>{let e=[];return Jn(n,e,{...t,doNotUnwrap:!1}),e}:n}return e}}function Jn(e,t=[],n){let r=null,i=!1;for(let a=0;a<e.length;a++)try{let r=e[a];if(typeof r==`function`&&!r.length){if(n?.doNotUnwrap){t.push(r),i=!0;continue}do r=r();while(typeof r==`function`&&!r.length)}Array.isArray(r)?i=Jn(r,t,n)||i:n?.skipNonRendered&&(r==null||r===!0||r===!1||r===``)||t.push(r)}catch(e){if(!(e instanceof g))throw e;r=e}if(r)throw r;return i}function Yn(){return!0}var Xn={get(e,t,n){return t===Fn?n:e.get(t)},has(e,t){return t===Fn||e.has(t)},set:Yn,deleteProperty:Yn,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Yn,deleteProperty:Yn}},ownKeys(e){return e.keys()}};function Zn(e){return(e=typeof e==`function`?e():e)?e:{}}var Qn=Symbol(0);function $n(...e){if(e.length===1&&typeof e[0]!=`function`)return e[0];let t=!1,n=[];for(let r=0;r<e.length;r++){let i=e[r];t||=!!i&&Fn in i;let a=!!i&&i[Qn];if(a)for(let e=0;e<a.length;e++)n.push(a[e]);else n.push(typeof i==`function`?(t=!0,jn(i)):i)}if(le&&t)return new Proxy({get(e){if(e===Qn)return n;for(let t=n.length-1;t>=0;t--){let r=Zn(n[t]);if(e in r)return r[e]}},has(e){for(let t=n.length-1;t>=0;t--)if(e in Zn(n[t]))return!0;return!1},keys(){let e=new Set;for(let t=0;t<n.length;t++){let r=In(Zn(n[t]));for(let t=0;t<r.length;t++)e.add(r[t])}return[...e]}},Xn);let r=Object.create(null),i=!1,a=n.length-1;for(let e=a;e>=0;e--){let t=n[e];if(!t){e===a&&a--;continue}let o=Object.getOwnPropertyNames(t);for(let n=o.length-1;n>=0;n--){let s=o[n];if(s!==`__proto__`&&s!==`constructor`&&!r[s]){i||=e!==a;let n=Object.getOwnPropertyDescriptor(t,s);r[s]=n.get?{enumerable:!0,configurable:!0,get:n.get.bind(t)}:n}}}if(!i)return n[a];let o={},s=Object.keys(r);for(let e=s.length-1;e>=0;e--){let t=s[e],n=r[t];n.get?Object.defineProperty(o,t,n):o[t]=n.value}return o[Qn]=n,o}function er(e,...t){if(le&&Fn in e)return new Proxy({get(n){return n===Qn||t.includes(n)?void 0:e[n]},has(n){return n!==Qn&&!t.includes(n)&&n in e},keys(){return In(e).filter(e=>!t.includes(e))}},Xn);let n={},r=Object.getOwnPropertyNames(e),i=t.length>4&&r.length>t.length?new Set(t):void 0;for(let a of r)if(i?!i.has(a):!t.includes(a)){let t=Object.getOwnPropertyDescriptor(e,a);!t.get&&!t.set&&t.enumerable&&t.writable&&t.configurable?n[a]=t.value:Object.defineProperty(n,a,t)}return n}var tr=!1;function nr(e,t){let n=Symbol(t&&t.name||``);function r(e){return xt(()=>(Cn(r,e.value),ir(()=>e.children)))}return r.id=n,r.defaultValue=e,r}function rr(e){return Sn(e)}function ir(e){let t=jn(e,{lazy:!0}),n=jn(()=>qn(t()),{lazy:!0,sync:!0});return n.toArray=()=>{let e=n();return Array.isArray(e)?e:e==null?[]:[e]},n}var ar={id:Symbol(`NoHydrateContext`),defaultValue:!1},F={hydrating:!1,registry:void 0,done:!1};function or(){let e=A();if(!e)throw Error(`getNextContextId cannot be used under non-hydrating context`);if(!Sn(ar))return pt(e)}var sr=null,cr=0,lr=!1,ur=null;function dr(){if(ur)return;let e=A();if(e){for(;e._parent;)e=e._parent;Xt(e),ur=e}}function fr(){return!lr&&(F.hydrating||cr>0)}function pr(e){if(lr||!F.hydrating&&cr===0){queueMicrotask(e);return}sr||=[],sr.push(e)}function mr(){if(lr)return;lr=!0,_r=!0,$t(),Yt(!1),Je();let e=sr;if(sr=null,e)for(let t of e)t();setTimeout(()=>{globalThis._$HY&&(globalThis._$HY.done=!0),F.registry?.clear()})}function hr(){!gr&&cr===0&&mr()}var gr=!1,_r=!1,vr,yr,br,xr,Sr,Cr,wr=(()=>{class e{catch(){return new e}then(){return new e}finally(){return new e}}for(let t of[`all`,`allSettled`,`any`,`race`,`reject`,`resolve`])e[t]=()=>new e;return e})();function Tr(e,t){let n=fetch,r=Promise;try{window.fetch=()=>new wr,Promise=wr;let n=e(t);return n&&typeof n[Symbol.asyncIterator]==`function`&&n[Symbol.asyncIterator]().next(),n&&typeof n.then==`function`&&n.then(void 0,()=>{}),n}finally{window.fetch=n,Promise=r}}function Er(e){return{then(t){t(e)}}}function Dr(e,t,n){if(t(),typeof e==`object`&&e){if(Pr(n)&&typeof e.then==`function`)return{then:e.then.bind(e)};if(e.s===2)throw typeof e.then==`function`&&e.then(void 0,()=>{}),e.v;if(e.s===1)return e.v}return e}var Or=new WeakSet;function kr(e,t,n){let r=A();return F.done||!F.has(r.id)?e(t):(Or.has(r)?n?.ssrSource!==`hybrid`&&Nr():Or.add(r),Dr(F.load(r.id),()=>{let r=Tr(e,t);return n?.ssrSource!==`hybrid`&&r!=null&&r[jr]&&Nr(),r},n))}var Ar={then(){}},jr=Symbol.for(`solid.LiveSource`),Mr;function Nr(){if(!Mr){let[e,t]=An(!1);Mr=e,pr(()=>{Mr=void 0,t(!0)})}Mr()}function Pr(e){return typeof e==`object`&&!!e&&(`loadingValue`in e||e.seedLoadingValue===!0)}function Fr(e,t){let n=e.return?.(t);return n&&typeof n.then==`function`?n:Er(n??{done:!0,value:t})}function Ir(e,t){let n=!0,r=null;return{next(){if(n){n=!1;let r=e.next();return r&&typeof r.then==`function`?r:t?Promise.resolve(r):Er(r)}if(r){let e=r;return r=null,e}let i=e.next();if(i&&typeof i.then==`function`)return i;let a=i;for(;!i.done;){let t=e.next();if(t&&typeof t.then==`function`){r=t;break}i=t,i.done?a!==i&&(r=Promise.resolve(i)):a=i}return Promise.resolve(a)},return(t){return r=null,Fr(e,t)}}}function Lr(e){return e!=null&&typeof e[Symbol.asyncIterator]==`function`}function Rr(e,t,n){let r=ht(A());if(!F.has(r))return null;let i=F.load(r);if(!Lr(i))return null;let a=Ir(i[Symbol.asyncIterator](),Pr(n)),o=!1,s={next(){let e=a.next();return{then(t,n){return e.then(e=>(e.done&&(o=!0),t(e)),e=>{if(o=!0,n)return n(e);throw e})}}},return(e){return a.return(e)}},c={[Symbol.asyncIterator](){return s}};return e(e=>o?t(e):(Tr(t,e),c),n)}function zr(e){let[t,n]=An(!1,{ownedWrite:!0}),r=e(t);return n(!0),r}function Br(e,t,n){dr();let r=n?.ssrSource;if(r===`client`)return zr(r=>e(e=>r()?t(e):Ar,n));if(r===`hybrid`&&F.has(ht(A()))){let r=!1,i=e=>{let n=t(e);return r=Lr(n),n};return zr(a=>e(e=>a()&&r?t(e):kr(i,e,n),n))}let i=Rr(e,t,n);return i===null?e(e=>kr(t,e,n),n):i}function Vr(e,t){return!F.hydrating||t?.transparent?jn(e,t):Br(jn,e,t)}function Hr(e,t){return typeof e!=`function`||!F.hydrating?An(e,t):Br(An,e,t)}function Ur(e,t,n,r){if(!F.hydrating||r?.transparent)return e(t,n,r);if(r?.ssrSource===`client`){let i=!1;zr(a=>e(e=>a()?(i=!0,t(e)):e,(e,t)=>{if(i)return n(e,t)},r));return}dr(),e(e=>kr(t,e),n,r)}function Wr(e,t,n){return Ur(Nn,e,t,n)}function Gr(e,t,n){return Ur(Mn,e,t,n)}function Kr(e,t,n){let r=A(),i=r&&r.id!=null?ht(r):void 0,a=i==null?void 0:globalThis._$HY?.modules?.[i];if(a){let e=n?a[n]:a.default;return()=>e}if(!e&&t)throw Error(`lazy() module "${t}" (hydration id "${i}") was not preloaded before hydration. Ensure it is inside a Loading boundary.`);return e}function qr(){vr=Vr,yr=Hr,br=Wr,xr=Gr,Sr=Si,Cr=Kr,F.getNextContextId=or,F.isHydrationInProgress=fr,F.onHydrationEnd=pr;let e=globalThis._$HY;if(e&&!e.fr){e.f||=oi,e.fr={pending:fi,subscribe:pi,claim:ci,release:li};let t=e.fe;e.fe=(e,n)=>{t&&t(e,n);for(let t of ri)t(e,n)},mi(e)}gr=F.hydrating,_r=F.done,Object.defineProperty(F,"hydrating",{get(){return gr},set(e){let t=gr;gr=e,!t&&e?(lr=!1,_r=!1,Yt(!0),ur=null):t&&!e&&(ur&&=(Zt(ur),null),hr())},configurable:!0,enumerable:!0}),Object.defineProperty(F,"done",{get(){return _r},set(e){_r=e,e&&mr()},configurable:!0,enumerable:!0})}var Jr=(...e)=>(vr||jn)(...e),Yr=(...e)=>(yr||An)(...e),Xr=(...e)=>(br||Nn)(...e),Zr=(...e)=>(xr||Mn)(...e);function Qr(){Yt(!1);let[e,t]=An(void 0,{equals:!1});return e(),Yt(!0),t}function $r(e,t,n,r,i=!0){let a=F.boundaryScopes?.get(t);if(!r())return;if(vt(e)){hr();return}let o=F.registry,s=F.gather;a&&(F.registry=a.registry,F.gather=a.gather);try{i&&F.gather?.(t),gr=i,i&&(Xt(e),ur=e),n(),Je(),i&&(ur=null),gr=!1,i&&Zt(e),Je()}finally{a&&(F.registry=o,F.gather=s)}hr()}function ei(e,t){cr++,F.captureBoundaryScope?.(t);let n=!1,r=()=>{if(n)return!1;n=!0,cr--,F.boundaryScopes?.delete(t);let e=ti.get(t);return e&&(e.claimed=!1),!0};On(()=>{vt(e)&&(F.cleanupFragment?.(t),r()&&hr())});let i=Qr();return[i,n=>$r(e,t,i,r,n),r]}var ti=new Map,ni=new Set,ri=new Set,ii=new Map;function ai(e){let t=ti.get(e);return t||ti.set(e,t={}),t}function oi(e){let t=ai(e);return!lr||t.claimed?globalThis.$dfr(e):(t.held=!0,0)}function si(e){let t=ti.get(e);t&&t.held&&(t.held=!1,globalThis.$dfr(e))}function ci(e){ai(e).claimed=!0,si(e)}function li(e){let t=ti.get(e);t&&(t.claimed=!1)}function ui(e,t){if(ni.has(t))return!1;let n=e.r[t+`_fr`];return!n||typeof n!=`object`?!1:n.s?e.v&&e.v[t]||!document.getElementById(t)?!1:!!document.getElementById(`pl-`+t):!0}function di(e){let t=globalThis._$HY;return t&&t.v&&t.v[e]||document.getElementById(e)?!1:!!document.getElementById(`pl-`+e)}function fi(){let e=globalThis._$HY;if(!e||!e.r)return!1;for(let t in e.r)if(t.length>3&&t.endsWith(`_fr`)&&ui(e,t.slice(0,-3)))return!0;return!1}function pi(e){return ri.add(e),()=>ri.delete(e)}function mi(e){typeof document>`u`||document.readyState!==`loading`||document.addEventListener(`DOMContentLoaded`,()=>{if(e.r){for(let t in e.r){if(t.length<=3||!t.endsWith(`_fr`))continue;let n=e.r[t];n&&typeof n==`object`&&!n.s&&gi(e,t.slice(0,-3))}setTimeout(()=>hi(e))}},{once:!0})}function hi(e){let t=globalThis.$R;if(!t||typeof t!=`object`)return;let n,r=t=>{if(!t||typeof t!=`object`||typeof t.f!=`function`||!t.p||typeof t.p.then!=`function`||t.p.s)return;if(!n){n=new Map;for(let t in e.r)n.set(e.r[t],t)}let r=n.get(t.p);if(r!==void 0){delete e.r[r];return}let i=Error(`Hydration value was truncated: the stream ended before it settled.`);t.f(i),t.p.s=2,t.p.v=i,t.p.then(void 0,()=>{})};for(let e in t){let n=t[e];if(Array.isArray(n))for(let e of n)r(e);else r(n)}}function gi(e,t){if(ni.has(t))return;ni.add(t);let n=Error(`Hydration fragment "${t}" was truncated: the stream ended before its content arrived.`),r=e.r[t+`_fr`];r&&typeof r==`object`&&(r.s=2,r.v=n);let i=ii.get(t);i&&(ii.delete(t),i(n));for(let e of ri)e(t)}function _i(e){return new Promise((t,n)=>ii.set(e,n))}function vi(e,t,n,r=!0,i){let a=(i?Promise.race([Promise.resolve(e),i]):Promise.resolve(e)).then(()=>(e&&typeof e==`object`&&(e.s=1),!0),t=>(e&&typeof e==`object`&&(e.s=2,e.v=t),r));if(!n){a.then(e=>t(e));return}let o=n.then(()=>!0,e=>(yi(e),!1));Promise.all([a,o]).then(([e,n])=>t(n?e:!1))}function yi(e){console.error(`Hydration module preload failed; rendering boundary content on the client:`,e)}function bi(e,t,n){F.gather?.(e);let r=()=>queueMicrotask(t);return n?(n.then(r,e=>{yi(e),queueMicrotask(()=>t(!1))}),!0):(r(),!1)}var xi=(e,t,n)=>(Sr||Kn)(e,t,n);function Si(e,t,n){if(!F.hydrating)return Kn(e,t,n);let r=!1;return jn(()=>{let i=A(),a=i.id,o;if(F.hydrating&&F.has(a+`_assets`)){let e=F.load(a+`_assets`);e&&typeof e==`object`&&(o=F.loadModuleAssets?.(e))}if(F.hydrating&&F.has(a)){let s=F.load(a),c;if(s&&(typeof s!=`object`||s.s==null?c=s:s.s===1||s.s===2?F.gather?.(a):c=s),s&&typeof s==`object`&&s.s===1&&c==null&&!r){if(o){r=!0;let[,e]=ei(i,a);bi(a,e,o);return}return Kn(e,t,n)}if(c){let[e,n,r]=ei(i,a);if(c!==`$$f`)vi(c,n,o);else{let t=()=>{r()&&(e(),hr())};o?o.then(()=>queueMicrotask(t),e=>{yi(e),queueMicrotask(t)}):queueMicrotask(t)}return t()}}if(F.hydrating&&F.has(a+`_fr`)&&!r){let s=F.load(a+`_fr`);if(si(a),s&&typeof s==`object`&&s.s===1&&!o&&!di(a))return F.gather?.(a),Kn(e,t,n);r=!0;let[,c]=ei(i,a);if(s&&typeof s==`object`&&s.s===1&&di(a)){let e=()=>c(!1);return o?o.then(()=>queueMicrotask(e),t=>{yi(t),queueMicrotask(e)}):queueMicrotask(e),t()}if(s&&typeof s==`object`&&(s.s===1||s.s===2)){if(s.s===2){s.catch?.(()=>{});let e=()=>c(!1);o?o.then(()=>queueMicrotask(e),t=>{yi(t),queueMicrotask(e)}):queueMicrotask(e);return}bi(a,c,o);return}return ci(a),vi(s,c,o,!1,_i(a)),t()}if(o&&!F.has(a)){let[,e]=ei(i,a);o.then(()=>e(),t=>{yi(t),e(!1)});return}return Kn(e,t,n)})}function I(e,t){return mn(()=>e(t||{}))}function Ci(e,t,n){let r=t?.export,i,a,o=()=>{if(a)return a;let t=a=e();return t.then(e=>{i=()=>r?e[r]:e.default},()=>{a===t&&(a=void 0)}),t},s=e=>{F.hydrating&&(i=Cr(i,n,r));let t=i;t||=(o(),jn(()=>o().then(e=>r?e[r]:e.default)));let a;return jn(()=>(a=(i||t)())?mn(()=>a(e)):``,{sync:!0})};return s.preload=o,s.moduleUrl=n,s}var wi=0;function Ti(){return F.hydrating?F.getNextContextId():`cl-${wi++}`}var Ei=e=>`Stale read from <${e}>.`;function Di(e){let t=`fallback`in e?{keyed:e.keyed,fallback:()=>e.fallback}:{keyed:e.keyed},n=A(),r,i=()=>bn(n,()=>Ln(()=>e.each,e.children,t));return F.hydrating&&(r=i()),()=>(r??=i())()}function Oi(e){let t=e.keyed,n=jn(()=>e.when,void 0),r=t?n:jn(n,{equals:(e,t)=>!e==!t,sync:!0});return jn(()=>{let i=r();if(i){let a=e.children;return typeof a==`function`&&a.length>0?mn(t?()=>a(i):()=>a(()=>{if(!mn(r))throw Ei(`Show`);return n()}),tr):a}return e.fallback},{sync:!0})}function ki(e){let t=ir(()=>e.children),n=jn(()=>{let e=t.toArray(),n=()=>void 0;for(let t=0;t<e.length;t++){let r=t,i=e[t];if(i==null)continue;let a=n,o=jn(()=>a()?void 0:i.when,void 0),s=i.keyed?o:jn(o,{equals:(e,t)=>!e==!t,sync:!0});n=()=>{let e=a();if(e)return e;let t=s();return t?[r,t,o,i]:void 0}}return n},{sync:!0});return jn(()=>{let t=n()();if(!t)return e.fallback;let[r,i,a,o]=t,s=o.children;return typeof s==`function`&&s.length>0?mn(o.keyed?()=>s(i):()=>s(()=>{if(mn(n)()?.[0]!==r)throw Ei(`Match`);return a()}),tr):s},{sync:!0})}function Ai(e){return e}function ji(e){return xi(()=>e.children,()=>e.fallback,`on`in e?{on:()=>e.on}:void 0)}var Mi=`modulepreload`,Ni=function(e){return`/`+e},Pi={},Fi=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Ni(t,n),t=s(t),t in Pi)return;Pi[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:Mi,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Ii={INPUT:{value:1,defaultValue:2,checked:1,defaultChecked:2},SELECT:{value:1},OPTION:{value:1,selected:1,defaultSelected:2},TEXTAREA:{value:1,defaultValue:2},VIDEO:{muted:1,defaultMuted:2},AUDIO:{muted:1,defaultMuted:2}},Li=new Set([`innerHTML`,`textContent`,`innerText`,`children`]),Ri=Symbol(`slot`),zi=Symbol(`host`),Bi=new Set([`beforeinput`,`click`,`dblclick`,`contextmenu`,`focusin`,`focusout`,`input`,`keydown`,`keyup`,`mousedown`,`mousemove`,`mouseout`,`mouseover`,`mouseup`,`pointerdown`,`pointermove`,`pointerout`,`pointerover`,`pointerup`,`touchend`,`touchmove`,`touchstart`]),Vi={svg:`http://www.w3.org/2000/svg`,mathml:`http://www.w3.org/1998/Math/MathML`,xlink:`http://www.w3.org/1999/xlink`,xml:`http://www.w3.org/XML/1998/namespace`},Hi={transparent:!0,sync:!0},Ui={sync:!0};function Wi(e,t,n){Xr(e,t,n?{sync:!0,...n,transparent:!n.scope}:Hi)}function Gi(e){return Jr(()=>e(),Ui)}function Ki(e,t,n,r){let i=n.length,a=t.length,o=i,s=0,c=0,l=t[a-1],u=l[Ri],d=l.parentNode===e&&(!u||u===r)?l.nextSibling:r||null,f=null,p,m,h=t=>{if(!t)return!1;let n=t[Ri];return t.parentNode===e&&(!n||n===r)};for(;s<a||c<o;){if(t[s]===n[c]&&h(t[s])){s++,c++;continue}for(;t[a-1]===n[o-1]&&h(t[a-1]);)a--,o--;if(a===s){let t;if(o<i){if(c){let i=n[c-1],a=i[Ri];t=i.parentNode===e&&(!a||a===r)?i.nextSibling:d}else t=n[o-c]}else t=d;for(;c<o;){let i=n[c++];e.insertBefore(i,t),r&&(i[Ri]=r)}}else if(o===c)for(;s<a;){let n=t[s++];if(!f||!f.has(n)){let t=n[Ri];n.parentNode===e&&(!t||t===r)&&n.remove()}}else if((p=t[s])===n[o-1]&&n[c]===t[a-1]&&p.parentNode===e&&(!(m=p[Ri])||m===r)){if(r)do{let n=t[--a];if(e.insertBefore(n,p),n[Ri]=r,c++,s>=a-1||c>=o)break}while(t[s]===n[o-1]&&n[c]===t[a-1]);else do if(e.insertBefore(t[--a],p),c++,s>=a-1||c>=o)break;while(t[s]===n[o-1]&&n[c]===t[a-1])}else{if(!f){f=new Map;let e=c;for(;e<o;)f.set(n[e],e++)}let i=f.get(t[s]);if(i!=null){if(c<i&&i<o){let l=s,u=1,p;for(;++l<a&&l<o&&(p=f.get(t[l]))!=null&&p===i+u;)u++;if(u>i-c){let a=t[s],o=a[Ri],l=a.parentNode===e&&(!o||o===r)?a:d;for(;c<i;){let t=n[c++];e.insertBefore(t,l),r&&(t[Ri]=r)}}else{let i=t[s++],a=n[c++],o=i[Ri];i.parentNode===e&&(!o||o===r)?e.replaceChild(a,i):e.insertBefore(a,d),r&&(a[Ri]=r)}}else s++}else{let n=t[s++],i=n[Ri];n.parentNode===e&&(!i||i===r)&&n.remove()}}}}var qi=`_$SOLID_EVENT_OWNER`,Ji=Symbol(),Yi=Object.prototype.hasOwnProperty,Xi={},Zi=new Set,Qi=new Map;function $i(e,t,n,r={}){let i;na(t);try{xt(a=>{if(i=a,t===document){let t=e();Wi(()=>qn(t),()=>{})}else{let i=e();R(t,()=>i,t.firstChild?null:void 0,n,{...r.insertOptions,schedule:!0})}},{id:r.renderId}),Je()}catch(e){throw i&&i(),ra(t),e}return()=>{i(),ra(t),t.textContent=``}}function ea(e,t,n){let r=document.createElement(`template`);return r.innerHTML=e,n===2?r.content.firstChild.firstChild:r.content.firstChild}function L(e,t){let n;return t===1?r=>document.importNode(n||=ea(e,r,t),!0):r=>(n||=ea(e,r,t)).cloneNode(!0)}function ta(e){for(let t=0,n=e.length;t<n;t++){let n=e[t];Zi.has(n)||(Zi.add(n),Qi.forEach((e,t)=>oa(n,t,e)))}}function na(e){let t=ia(e,e);t&&(t.roots=(t.roots||0)+1)}function ra(e){let t=Qi.get(e);t&&(t.roots>1?t.roots--:delete t.roots),aa(e,e)}function ia(e,t=e){if(!e||!t)return;let n=Qi.get(e);return n||Qi.set(e,n={owners:new Map,handlers:new Map}),n.owners.set(t,(n.owners.get(t)||0)+1),Zi.forEach(t=>oa(t,e,n)),n}function aa(e,t=e){let n=Qi.get(e);if(!n)return;let r=n.owners.get(t);r>1?n.owners.set(t,r-1):n.owners.delete(t),!n.owners.size&&(n.handlers.forEach((t,n)=>e.removeEventListener(n,t)),Qi.delete(e))}function oa(e,t,n){if(n.handlers.has(e))return;let r=e=>Pa(e,t,n);n.handlers.set(e,r),t.addEventListener(e,r)}function sa(e,t){let n=e,r=0;for(;n;){if(t.owners.has(n))return{owner:n,distance:r};r++,n=n._$host||n.parentNode||n.host}}function ca(e,t,n){if(Aa(e))return;let r=e.nodeName;t===`value`&&r===`SELECT`?queueMicrotask(()=>e.value=n)||(e.value=n):e[t]=(t===`value`||t===`defaultValue`)&&(r===`INPUT`||r===`TEXTAREA`)?n??``:n}var la=null;function ua(e){if(la!==null)for(let t=0;t<la.length;t++)la[t](e);return e}function da(e,t,n){if(Aa(e))return;let r=t===`multiple`&&e.localName===`select`;if(n==null||n===!1)e.removeAttribute(t);else if(e.setAttribute(t,n===!0?``:n),r&&!e._$multiple){let t=e.options;for(let e=0;e<t.length;e++)t[e].defaultSelected&&(t[e].selected=!0)}r&&(e._$multiple=!0),la!==null&&(t===`href`||t===`action`)&&ua(e)}function fa(e,t,n,r){Aa(e)||(r==null||r===!1?e.removeAttributeNS(t,n.indexOf(`:`)>-1?n.split(`:`).pop():n):e.setAttributeNS(t,n,r===!0?``:r))}function pa(e,t,n){if(typeof t==`number`&&(t=``+t),typeof n==`number`&&(n=``+n),Aa(e)){e._$classes=t&&typeof t==`object`?ja(t):void 0;return}if(t==null||t===!1){(n||e._$classes)&&(e.removeAttribute(`class`),e._$classes=void 0);return}if(typeof t==`string`){e._$classes=void 0,t!==n&&e.setAttribute(`class`,t);return}let r;typeof n==`string`?(r={},e.removeAttribute(`class`)):r=e._$classes||ja(n||{}),t=ja(t);let i=Object.keys(t),a=Object.keys(r),o,s;for(o=0,s=a.length;o<s;o++){let n=a[o];!n||n===`undefined`||t[n]||e.classList.remove(n)}for(o=0,s=i.length;o<s;o++){let n=i[o],a=!!t[n];!n||n===`undefined`||r[n]===a||!a||e.classList.add(n)}e._$classes=t}function ma(e,t,n,r){if(r){let r=`$$${t}`,i;Array.isArray(n)?(i=n[1],e[r]=n[0]):e[r]=n,e[`${r}Data`]=i;return}if(Array.isArray(n)){let r=n[0],i=t=>r.call(e,n[1],t);return i[Ji]=n,e.addEventListener(t,i),i}return e.addEventListener(t,n,typeof n!=`function`&&n),n}function ha(e,t,n){if(Aa(e))return;if(!t){(n||e._$styles)&&(da(e,`style`),e._$styles=void 0);return}let r=e.style;if(typeof t==`string`)return e._$styles=void 0,r.cssText=t;typeof n==`string`&&(r.cssText=``,n=void 0);let i=e._$styles;i||=e._$styles=n?{...n}:{};let a,o;for(o in i)(!Yi.call(t,o)||t[o]==null)&&(r.removeProperty(o),delete i[o]);for(o in t)Yi.call(t,o)&&(a=t[o],a!=null&&a!==i[o]&&(r.setProperty(o,a),i[o]=a))}function ga(e,t,n){Aa(e)||(n==null?e.style.removeProperty(t):e.style.setProperty(t,n))}function _a(e,t,n){let r={},i=()=>(typeof t==`function`?t():t)??{};return n||R(e,()=>{let e=i();return Yi.call(e,`children`)?e.children:void 0}),Wi(()=>{let t=i(),n=Yi.call(t,`ref`)&&t.ref;(typeof n==`function`||Array.isArray(n))&&ya(()=>n,e)},()=>{}),Wi(()=>{let e=i(),t={};for(let n in e)Yi.call(e,n)&&n!==`children`&&n!==`ref`&&(t[n]=e[n]);return t},t=>Ta(e,t,!0,r,!0)),r}function va(e,t){Array.isArray(e)?e.flat(1/0).forEach(e=>e&&e(t)):e(t)}function ya(e,t){let n=mn(e);bn(null,()=>va(n,t))}function ba(e){return e.$s=!0,e}var xa={scope:!0},Sa=null;function Ca(){Sa={claimInitial(e,t,n){return Aa(e)&&(!t&&n===void 0&&e&&(n=[...e.childNodes]),Array.isArray(n)&&wa(n)),n},reclaimRegion(e,t,n){if(!F.hydrating||!e||!t.isConnected)return e;let r=Array.isArray(e)?e[0]:e;if(!r||!r.nodeType||r.isConnected)return e;let i;if(n){i=[];let e=n.previousSibling,t=0;for(;e;){if(e.nodeType===8){let n=e.nodeValue;if(n===`/`)t++;else if(n===`$`){if(t===0)break;t--}}i.unshift(e),e=e.previousSibling}}else i=[...t.childNodes];return wa(i)},dedupEvent(e){return!!(F.registry&&F.events&&F.events.find(([t,n])=>n===e))}}}function wa(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=r.nodeType;if(i===8){let e=r.nodeValue;if(e===`!$`){r.remove();continue}if(e.startsWith(`pl-`))continue}else if(i===1&&r.localName===`template`&&r.id.startsWith(`pl-`))continue;e[t++]=r}return e.length=t,e}function R(e,t,n,r,i){let a=n!==void 0,o=i&&i.host;if(a&&!r&&(r=[]),Sa!==null&&(r=Sa.claimInitial(e,a,r)),typeof t!=`function`&&(t=Ia(t,r,a,!0),typeof t!=`function`)){Fa(e,t,r,n),o&&La(t,o);return}if(a&&r.length===0){let t=document.createTextNode(``);e.insertBefore(t,n),r=[t]}let s=r;Wi(r=>{Sa!==null&&(s=Sa.reclaimRegion(s,e,n));let c=Ia(t(),s,a,!0);return typeof c==`function`?(Wi(()=>(Sa!==null&&(s=Sa.reclaimRegion(s,e,n)),Ia(c,s,a)),t=>{s=Fa(e,t,s,n),o&&La(s,o)},r!==void 0&&!(i&&i.schedule)?{...i,schedule:!0}:i),Xi):c},t=>{t!==Xi&&(s=Fa(e,t,s,n),o&&La(s,o))},t.$s?i?{...i,scope:!0}:xa:i)}function Ta(e,t,n,r={},i=!1){let a=e.nodeName;t||={};for(let n in r)if(!(n in t)){if(n===`children`)continue;r[n]=Na(e,n,null,r[n],i,a)}for(let o in t){if(o===`children`){n||Fa(e,Ia(t.children,void 0,!1));continue}r[o]=Na(e,o,t[o],r[o],i,a)}}function Ea(e){let t=globalThis._$HY;if(!t)return;let n=[];for(let r in e){if(t.modules[r])continue;let i=new URL(e[r],document.baseURI).href;t.loading[r]||(t.loading[r]=Fi(()=>import(i).then(e=>{t.modules[r]=e},e=>{throw delete t.loading[r],e}),[])),n.push(t.loading[r])}return n.length?Promise.all(n).then(()=>{}):void 0}function Da(e,t,n={}){if(qr(),Ca(),globalThis._$HY.done)return $i(e,t,[...t.childNodes],n);let r=(t.nodeType===9?t:t.ownerDocument).head;if(r&&t.contains(r)){let e=r.firstChild;for(;e&&e.nodeType===1&&e.hasAttribute(`data-dh`)&&!e.hasAttribute(`data-dhf`);){let t=e.nextSibling;r.appendChild(e),e=t}}n.renderId||=``,globalThis._$HY.modules||(globalThis._$HY.modules={}),globalThis._$HY.loading||(globalThis._$HY.loading={}),F.completed=globalThis._$HY.completed,F.events=globalThis._$HY.events,F.load=e=>globalThis._$HY.r[e],F.has=e=>e in globalThis._$HY.r,F.gather=e=>Ha(t,e),F.loadModuleAssets=Ea,F.cleanupFragment=e=>{let t=document.getElementById(`pl-`+e);if(t){let n=t.nextSibling;for(;n;){let t=n.nextSibling;if(n.nodeType===8&&n.nodeValue===`pl-`+e){n.remove();break}n.remove(),n=t}t.remove()}},F.registry=new Map,F.boundaryScopes||=new Map,F.captureBoundaryScope=e=>{F.registry&&F.boundaryScopes.set(e,{registry:F.registry,gather:F.gather})},F.hydrating=!0;let i=globalThis._$HY.r,a=i&&(i[n.renderId+`_assets`]||i._assets);if(a&&typeof a==`object`){let r=Ea(a);if(r){Ha(t,n.renderId);let i=F.registry,a=F.gather,o;return r.then(()=>{F.registry=i,F.gather=a,F.hydrating=!0;try{o=$i(e,t,[...t.childNodes],n)}finally{F.hydrating=!1}},r=>{console.error(`Hydration module preload failed, falling back to client render:`,r),F.hydrating=!1,F.registry=void 0,o=$i(e,t,[...t.childNodes],n)}),()=>o&&o()}}try{return Ha(t,n.renderId),$i(e,t,[...t.childNodes],n)}finally{F.hydrating=!1}}function z(e){let t,n;if(!Aa()||!(t=F.registry.get(n=Ua()))){if(!e)throw Error(`Hydration Mismatch. Unable to find DOM nodes for hydration key: ${n}`);return e(!0)}return F.completed&&F.completed.add(t),F.registry.delete(n),t}function Oa(e){let t=e,n=0,r=[];if(Aa(e))for(;t;){if(t.nodeType===8){let e=t.nodeValue;if(e===`$`)n++;else if(e===`/`){if(n===0)return[t,r];n--}}r.push(t),t=t.nextSibling}return[t,r]}function ka(){F.events&&!F.events.queued&&(queueMicrotask(()=>{let{completed:e,events:t}=F;if(t){for(t.queued=!1;t.length;){let[n,r]=t[0];if(!e.has(n))return;t.shift();let i,a,o,s;for(let[e,t]of Qi){if(!t.handlers.has(r.type))continue;let n=sa(r.target,t);n&&(i?(s||=[{container:i,state:a,distance:o}],s.push({container:e,state:t,distance:n.distance})):(i=e,a=t,o=n.distance))}if(s){s.sort((e,t)=>e.distance-t.distance);for(let e=0;e<s.length;e++)Pa(r,s[e].container,s[e].state)}else i&&Pa(r,i,a)}F.done&&(F.events=_$HY.events=null,F.completed=_$HY.completed=null)}}),F.events.queued=!0)}function Aa(e){if(!F.hydrating)return!1;if(!e||e.isConnected)return!0;let t=F.claimRoots;if(t){for(let n=0;n<t.length;n++)if(t[n].contains(e))return!0}return!1}function ja(e){if(Array.isArray(e)){let t={};Ma(e,t),e=t}if(e&&typeof e==`object`){let t={},n=Object.keys(e);for(let r=0,i=n.length;r<i;r++){let i=n[r];if(!e[i])continue;let a=i.trim().split(/\s+/);for(let e=0,n=a.length;e<n;e++)a[e]&&(t[a[e]]=!0)}return t}return e}function Ma(e,t){for(let n=0,r=e.length;n<r;n++){let r=e[n];Array.isArray(r)?Ma(r,t):typeof r==`object`&&r?Object.assign(t,r):typeof r!=`boolean`&&(r||r===0)&&(t[r]=!0)}}function Na(e,t,n,r,i,a){if(t===`style`)return ha(e,n,r),n;if(t===`class`)return pa(e,n,r),n;if(n===r&&Ii[a]?.[t]!==1)return r;if(t===`ref`)return!i&&n&&ya(()=>n,e),n;let o=t.indexOf(`:`)>-1;if(!o&&t.slice(0,2)===`on`){let i=t.slice(2).toLowerCase(),a=Bi.has(i);if(!a&&r){if(Array.isArray(n)&&typeof r==`function`&&r[Ji]===n)return r;e.removeEventListener(i,r,typeof r!=`function`&&r)}if(a||n){let t=ma(e,i,n,a);if(a&&ta([i]),!a)return t}}else if(o&&t.slice(0,5)===`prop:`||Li.has(t)||Ii[a]?.[t]){if(o)t=t.slice(5);else if(Aa(e))return n;t===`value`&&a===`SELECT`?queueMicrotask(()=>e.value=n)||(e.value=n):(t===`value`||t===`defaultValue`)&&(a===`INPUT`||a===`TEXTAREA`)?e[t]=n??``:e[t]=n}else{let r=o&&Vi[t.split(`:`)[0]];r?fa(e,r,t,n):da(e,t,n)}return n}function Pa(e,t,n){if(Sa!==null&&Sa.dedupEvent(e))return;let r=e[qi],i;if(r){if(r===!0||r===t||!t.contains(r))return;i=r}let a=n&&(n.owners.size===1&&n.owners.has(t)?t:sa(e.target,n)?.owner);if(n&&!a||a&&a===i)return;e[qi]=a||!0;let o=i||e.target,s=`$$${e.type}`,c=e.target,l=a||t||e.currentTarget,u=t=>Object.defineProperty(e,"target",{configurable:!0,value:t}),d=()=>{let t=o[s];if(t===void 0&&o.hasAttribute&&o.hasAttribute(`_bnd`)){let n=globalThis[Symbol.for(`solid.bnd`)];n&&(t=n.resolve(o,e.type))}if(t&&!o.disabled){let n=o[`${s}Data`];if(n===void 0?typeof t==`function`?t.call(o,e):t.handleEvent(e):t.call(o,n,e),e.cancelBubble)return}return o.host&&typeof o.host!=`string`&&!o.host._$host&&o.contains(e.target)&&u(o.host),!0},f=()=>{for(;o&&d()&&o!==l&&o.parentNode!==l;)o=o._$host||o.parentNode||o.host};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return o||l||document}}),i)i===e.target&&(o=i._$host||i.parentNode||i.host),o&&o!==l&&f();else if(e.composedPath){let t=e.composedPath();if(t.length){u(t[0]);for(let e=0;e<t.length&&(o=t[e],d());e++){if(o._$host){o=o._$host,f();break}if(o===l||o.parentNode===l)break}}else f()}else f();u(c)}function Fa(e,t,n,r){if(Sa!==null&&Aa(e)){if(t&&t!==n){let e=Array.isArray(t);for(let r of e?t:[t])if(r&&r.nodeType){if(!Aa(r))return n}else if(e&&(typeof r==`string`||typeof r==`number`))return n}return t}if(t===n)return t;let i=typeof t,a=r!==void 0;if(i===`string`||i===`number`){let r=typeof n;r===`string`||r===`number`?e.firstChild.data=t:za(e,n)?e.textContent=t:(Ba(e,n),e.insertBefore(document.createTextNode(t),e.firstChild))}else if(t===void 0)Va(e,n,r);else if(t.nodeType)Array.isArray(n)?Va(e,n,a?r:null,t):n&&n.nodeType?n.parentNode===e?e.replaceChild(t,n):e.appendChild(t):n&&e.firstChild?e.replaceChild(t,e.firstChild):e.appendChild(t),r&&(t[Ri]=r);else if(Array.isArray(t)){let i=n&&Array.isArray(n);for(let e=0,r=t.length;e<r;e++){let r=t[e],a=typeof r;if(a===`string`||a===`number`){let a=i?n[e]:void 0;a&&a.nodeType===3?(a.data!==``+r&&(a.data=r),t[e]=a):t[e]=document.createTextNode(r)}}t.length===0?Va(e,n,r):i?n.length===0?Ra(e,t,r):Ki(e,n,t,r):(n&&Va(e,n),Ra(e,t))}return t}function Ia(e,t,n,r){if(e=qn(e,{skipNonRendered:!0,doNotUnwrap:r}),r&&typeof e==`function`)return e;if(n&&!Array.isArray(e)&&(e=[e??``]),F.hydrating&&Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n],i=t&&t[n],a=typeof r;(a===`string`||a===`number`)&&i&&i.nodeType===3&&Aa(i)&&(e[n]=i)}return e}function La(e,t){if(Array.isArray(e))for(let n=0,r=e.length;n<r;n++)La(e[n],t);else e&&e.nodeType&&e[zi]!==t&&(e[zi]=t,Object.defineProperty(e,"_$host",{get:t,configurable:!0}))}function Ra(e,t,n=null){for(let r=0,i=t.length;r<i;r++){let i=t[r];e.insertBefore(i,n),n&&(i[Ri]=n)}}function za(e,t){if(t==null)return!0;if(Array.isArray(t))return t.length?e.firstChild===t[0]&&e.lastChild===t[t.length-1]:e.firstChild===null;if(t===``)return e.firstChild===null;if(t.nodeType)return e.firstChild===t&&e.lastChild===t;let n=e.firstChild;return n!==null&&n.nodeType===3&&e.lastChild===n}function Ba(e,t){if(Array.isArray(t))for(let n=0;n<t.length;n++){let r=t[n];r.parentNode===e&&r.remove()}else if(t.nodeType)t.parentNode===e&&t.remove();else{let t=e.firstChild;t&&t.nodeType===3&&t.remove()}}function Va(e,t,n,r){if(n===void 0)return za(e,t)?e.textContent=``:Ba(e,t);if(t.length){let i=!1;for(let a=t.length-1;a>=0;a--){let o=t[a];if(r!==o){let t=o[Ri],s=o.parentNode===e&&(!t||t===n);r&&!i&&!a?s?e.replaceChild(r,o):e.insertBefore(r,n):s&&o.remove()}else i=!0}}else r&&e.insertBefore(r,n);r&&n&&(r[Ri]=n)}function Ha(e,t){let n=e.querySelectorAll(`*[_hk]`);for(let r=0;r<n.length;r++){let i=n[r],a=i.getAttribute(`_hk`);if(t){if(!a.startsWith(t))continue}else{let t=i.closest(`[data-fid]`);if(t&&t!==e&&e.contains(t))continue}F.registry.has(a)||F.registry.set(a,i)}}function Ua(){return F.getNextContextId()}var Wa;function Ga(e,t){let n=Wa;Wa=e;try{return t()}finally{Wa=n}}function Ka(e){return Wa===void 0?e():bn(bt({id:`${Wa}view-`}),e)}function qa(e){return bn(bt({id:`${Ti()}-`}),e)}function Ja(e){return{}}function Ya(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return t[n]=Object.assign({},r),no(r.value)&&!ro(r.value)&&!Array.isArray(r.value)&&(t[n].value=Object.assign({},r.value)),Array.isArray(r.value)&&(t[n].value=r.value.slice(0)),t},{})}function Xa(e){return e?Object.keys(e).reduce((t,n)=>{let r=e[n];return t[n]=no(r)&&`value`in r?r:{value:r},t[n].attribute||(t[n].attribute=to(n)),t[n].parse=`parse`in t[n]?t[n].parse:typeof t[n].value!=`string`,t},{}):{}}function Za(e){return Object.keys(e).reduce((t,n)=>(t[n]=e[n].value,t),{})}function Qa(e,t){let n=Ya(t);return Object.keys(t).forEach(t=>{let r=n[t],i=e.getAttribute(r.attribute),a=e[t];i!=null&&(r.value=r.parse?$a(i):i),a!=null&&(r.value=Array.isArray(a)?a.slice(0):a),r.reflect&&eo(e,r.attribute,r.value,!!r.parse),Object.defineProperty(e,t,{get(){return r.value},set(e){let n=r.value;r.value=e,r.reflect&&eo(this,r.attribute,r.value,!!r.parse);for(let r=0,i=this.__propertyChangedCallbacks.length;r<i;r++)this.__propertyChangedCallbacks[r](t,e,n)},enumerable:!0,configurable:!0})}),n}function $a(e){if(e)try{return JSON.parse(e)}catch{return e}}function eo(e,t,n,r){if(n==null||n===!1)return e.removeAttribute(t);let i=r?JSON.stringify(n):n;e.__updating[t]=!0,i===`true`&&(i=``),e.setAttribute(t,i),Promise.resolve().then(()=>delete e.__updating[t])}function to(e){return e.replace(/\.?([A-Z]+)/g,(e,t)=>`-`+t.toLowerCase()).replace(`_`,`-`).replace(/^-/,``)}function no(e){return e!=null&&(typeof e==`object`||typeof e==`function`)}function ro(e){return Object.prototype.toString.call(e)===`[object Function]`}function io(e){return typeof e==`function`&&e.toString().indexOf(`class`)===0}var ao;function oo(e,t){let n=Object.keys(t);return class extends e{static get observedAttributes(){return n.map(e=>t[e].attribute)}constructor(){super(),this.__initialized=!1,this.__released=!1,this.__releaseCallbacks=[],this.__propertyChangedCallbacks=[],this.__updating={},this.props={};for(let e of n)this[e]=void 0}connectedCallback(){if(this.__initialized)return;this.__releaseCallbacks=[],this.__propertyChangedCallbacks=[],this.__updating={},this.props=Qa(this,t);let e=Za(this.props),n=this.Component,r=ao;try{ao=this,this.__initialized=!0,io(n)?new n(e,{element:this}):n(e,{element:this})}finally{ao=r}}async disconnectedCallback(){if(await Promise.resolve(),this.isConnected)return;this.__propertyChangedCallbacks.length=0;let e=null;for(;e=this.__releaseCallbacks.pop();)e(this);delete this.__initialized,this.__released=!0}attributeChangedCallback(e,n,r){if(this.__initialized&&!this.__updating[e]&&(e=this.lookupProp(e),e in t)){if(r==null&&!this[e])return;this[e]=t[e].parse?$a(r):r}}lookupProp(e){if(t)return n.find(n=>e===n||e===t[n].attribute)}get renderRoot(){return this.shadowRoot||this.attachShadow({mode:`open`})}addReleaseCallback(e){this.__releaseCallbacks.push(e)}addPropertyChangedCallback(e){this.__propertyChangedCallbacks.push(e)}}}function so(e,t={},n={}){let{BaseElement:r=HTMLElement,extension:i,customElements:a=window.customElements}=n;return n=>{if(!e)throw Error(`tag is required to register a Component`);let o=a.get(e);return o?(o.prototype.Component=n,o):(o=oo(r,Xa(t)),o.prototype.Component=n,o.prototype.registeredTag=e,a.define(e,o,i),o)}}function co(e){let t=Object.keys(e),n={};for(let r=0;r<t.length;r++){let[i,a]=Yr(()=>e[t[r]]);Object.defineProperty(n,t[r],{get:i,set(e){a(()=>e)}})}return n}function lo(e){if(e.assignedSlot&&e.assignedSlot._$owner)return e.assignedSlot._$owner;let t=e.parentNode;for(;t;){if(t._$owner)return t._$owner;if(t.assignedSlot&&t.assignedSlot._$owner)return t.assignedSlot._$owner;t=t.parentNode}return e._$owner}function uo(e){return(t,n)=>{let{element:r}=n,i=lo(r),a=!1;function o(){return xt(i=>{a=!0;let o=co(t);r.addPropertyChangedCallback((e,t)=>o[e]=t),r.addReleaseCallback(()=>{ra(r.renderRoot),r.renderRoot.textContent=``,i()});let s=e(o,n);return na(r.renderRoot),R(r.renderRoot,s)})}if(i)try{return bn(i,o)}catch(e){if(a)throw e;return console.warn(`<${r.localName}>: found an _\$owner from a different copy of the Solid runtime (a second solid-js is on this page — likely bundled into a compiled element library). Owners cannot be adopted across copies; rendering without an owner. Context will not cross this boundary.`),o()}return o()}}function fo(e,t,n){return arguments.length===2&&(n=t,t={}),so(e,t)(uo(n))}function po(e,t=document){return mo(e,t)[0]??null}function mo(e,t=document){let n=[],r=e=>{for(let t of e.children)i(t)},i=t=>{if(t.matches(e)&&n.push(t),t.shadowRoot!==null){r(t.shadowRoot);return}r(t)};return t instanceof Element?(t.matches(e)&&n.push(t),r(t.shadowRoot===null?t:t.shadowRoot)):r(t),n}function ho(e,t){let n=e;for(;n!==null;){if(n.matches(t))return n;let e=n.parentElement;if(e!==null){n=e;continue}let r=n.getRootNode();n=r instanceof ShadowRoot?r.host:null}return null}function go(){let e=document.activeElement;for(;e instanceof HTMLElement;){let t=e.shadowRoot?.activeElement;if(t==null)break;e=t}return e}var _o=`
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
`,vo=`${_o}
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

`,yo=`${_o}
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
`,bo=`${_o}
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
  grid-template-columns: minmax(0, 1fr);
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

`,xo=`${_o}
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
`,B=`${_o}
:host {
  min-inline-size: 0;
}

:host(:not([class])) {
  display: contents;
}

:host([hidden]) {
  display: none !important;
}
`,So=`${_o}
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

:host(.reader-loading-question-sheet) {
  display: var(--reader-loading-question-sheet-display, block);
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
`,Co=`${_o}
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
`,wo=`${B}
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
`,To=`${B}
:host {
  display: grid;
  justify-items: center;
  align-content: start;
  gap: var(--space-2);
  min-inline-size: 0;
}
`,Eo=`${B}
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
`,Do=`${B}
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
`,Oo=`${B}
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
`,ko=`${B}
:host {
  display: block;
  min-inline-size: 0;
  overflow-x: clip;
  touch-action: pan-y;
}

`,Ao=`${B}
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
`,jo=`${B}
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
`,Mo=`${B}
${r}
${e}
${t}
${i}
${n}
${a}
`,No=`${B}
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
`,Po=`${B}
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
`,Fo=`${B}
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
`,Io=`${B}
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
`,Lo=`${B}
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
`,Ro=`${B}
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
`,zo=`${B}
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
`,Bo=`${B}
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
`,Vo=`${B}
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
`,Ho=`${B}
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
`,Uo=`${B}
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
`,Wo=`${B}
:host {
  min-inline-size: 0;
}
`,Go=`${B}
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
  visibility: hidden;
}

:host(.reader-selection-switch.is-scroll-full) > reader-button.reader-version-trigger {
  padding-inline-start: var(--space-1);
}

@media (max-width: 559px) {
  :host(.reader-selection-switch) {
    inline-size: 100%;
    flex-wrap: nowrap;
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    block-size: var(--reader-toolbar-mobile-control-height);
    min-block-size: var(--reader-toolbar-mobile-control-height);
    max-inline-size: 100%;
  }

  :host(.reader-selection-switch) > reader-button.reader-selection-trigger:not(.reader-reading-navigation) {
    flex: 0 1 auto;
    min-inline-size: 0;
  }

  :host(.reader-selection-switch) > reader-button.reader-selection-trigger:is(.reader-day-trigger, .reader-chapter-trigger) {
    flex: 1 1 0;
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
    inset-inline-end: auto;
    inline-size: calc(
      100vw
      - max(var(--space-4), env(safe-area-inset-left))
      - max(var(--space-4), env(safe-area-inset-right))
      - max(var(--compact-action-min), 2rem)
      - var(--space-4)
    );
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
`,Ko=`${B}
:host {
  min-inline-size: 0;
}
`,qo=`${B}
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
`,Jo=`${B}
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
`;`${B}`;var Yo=`${B}
${r}`,Xo=`${B}
${e}`,Zo=`${B}
${t}`,Qo=`${B}
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
`,$o=`${B}
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

`,es=`${B}
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
`,ts=`${B}
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
`,ns=_o+`
:host {
  display: contents;
}
`,rs=L(`<svg aria-hidden=true>`),is=L(`<style>`),as=L(`<reader-icon>`,1);function os(e){let t=()=>(()=>{var t=z(rs);return R(t,ba(()=>e.children)),Wi(()=>e.viewBox,e=>{da(t,`viewBox`,e)}),t})(),n=Ja(()=>Ka(()=>[(()=>{var e=z(is);return R(e,vo),e})(),Gi(t)]));var r=z(as);return _a(r,$n({get class(){return e.className},get viewBox(){return e.viewBox},"aria-hidden":`true`},n,{"prop:content":t}),!1),r._$owner=A(),ka(),r}var ss=L(`<svg><path d="M67.57 104.72Q115.6 88.71 163.42 93.57Q211.75 98.49 253.34 124.08Q254.82 124.99 256 126.19Q257.18 124.99 258.66 124.08Q300.24 98.49 348.58 93.57Q396.4 88.71 444.43 104.72Q446.52 105.42 448.29 106.72Q450.07 108.03 451.36 109.81Q452.65 111.6 453.32 113.7Q454 115.8 454 118V336Q454 349.83 445.17 357.86Q435.56 366.59 421.07 363.69Q397.5 358.64 375 358.5V335.5Q375.24 335.21 375.58 334.85Q377.06 333.27 380.77 330.56Q402.95 331.25 426 336.11V293.46Q439.9 274.42 439.9 250.3Q439.9 229.45 430.89 211.88Q428.68 207.57 426 203.59V128.32Q388.52 117.66 351.42 121.43Q313.3 125.3 280 144V184.66Q265.46 195.98 257.31 211.88Q248.3 229.45 248.3 250.3Q248.3 253.45 248.91 256.54Q249.53 259.63 250.74 262.55Q251.94 265.46 253.69 268.08Q255.44 270.7 257.67 272.93Q259.9 275.16 262.52 276.91Q265.14 278.66 268.05 279.86Q270.97 281.07 274.06 281.69Q277 282.27 280 282.3V350.94Q295.25 343.93 311 339.31V358.1Q311 361.25 311.61 364.34Q312 366.29 312.63 368.18Q292.34 374.84 273.05 386.09Q269.78 388 266 388Q264.62 388 263.27 387.73Q261.92 387.46 260.64 386.93Q259.37 386.41 258.22 385.64Q257.08 384.87 256.1 383.9L256 383.8L255.9 383.9Q254.92 384.87 253.78 385.64Q252.63 386.41 251.36 386.93Q250.08 387.46 248.73 387.73Q247.38 388 246 388Q242.22 388 238.95 386.09Q171.09 346.51 90.93 363.69Q76.44 366.59 66.83 357.86Q58 349.83 58 336V118Q58 115.8 58.68 113.7Q59.35 111.6 60.64 109.81Q61.93 108.03 63.71 106.72Q65.48 105.42 67.57 104.72ZM232 350.94V144Q198.7 125.3 160.58 121.43Q123.48 117.66 86 128.32V336.11Q164.01 319.67 232 350.94Z"></svg>`,2),cs=L(`<svg><path d="M260.5 250.3Q260.5 214.76 288.27 193.69Q311.52 176.05 344.1 176.05Q376.68 176.05 399.93 193.69Q427.7 214.76 427.7 250.3Q427.7 273.97 411.63 291.82Q403.34 301.03 384.02 313.58Q370.72 322.23 366.71 326.47Q362.8 330.6 362.8 335V358.1A19.8 19.8 0 0 1 323.2 358.1V335Q323.2 314.85 337.93 299.26Q345.18 291.6 362.45 280.38Q377.39 270.66 382.2 265.32Q388.1 258.77 388.1 250.3Q388.1 234.42 376 225.24Q363.36 215.65 344.1 215.65Q324.84 215.65 312.2 225.24Q300.1 234.42 300.1 250.3A19.8 19.8 0 0 1 260.5 250.3Z"></svg>`,2),ls=L(`<svg><path d="M124 176H204A14 14 0 0 1 204 204H124A14 14 0 0 1 124 176Z M124 226H190A14 14 0 0 1 190 254H124A14 14 0 0 1 124 226Z"></svg>`,2),us=L(`<svg><path d="M362.8 407.6A19.8 19.8 0 1 1 323.2 407.6A19.8 19.8 0 1 1 362.8 407.6Z"></svg>`,2),ds=L(`<svg><path d="
        M8 0.35
        c0.43 0 0.79 0.31 0.86 0.72
        L8.88 1.2
        H10.7
        V2.35
        H12.65
        c0.43 0 0.79 0.31 0.86 0.72
        l0.02 0.13
        V14.8
        c0 0.43-0.31 0.79-0.72 0.86
        l-0.13 0.02
        H3.32
        c-0.43 0-0.79-0.31-0.86-0.72
        l-0.02-0.13
        V3.2
        c0-0.43 0.31-0.79 0.72-0.86
        l0.13-0.02
        H5.3
        V1.2
        H7.12
        C7.18 0.72 7.55 0.35 8 0.35
        Z

        M5.3 3.35
        H3.55
        V14.45
        H12.45
        V3.35
        H10.7
        V4.65
        H5.3
        Z

        M8 1.35
        c-0.48 0-0.87 0.39-0.87 0.87
        S7.52 3.1 8 3.1
        s0.87-0.39 0.87-0.88
        S8.48 1.35 8 1.35
        Z

        M10.87 7.53
        c0.27 0.27 0.27 0.71 0 0.98
        l-3.35 3.35
        c-0.27 0.27-0.71 0.27-0.98 0
        L5.18 10.5
        c-0.27-0.27-0.27-0.71 0-0.98
        c0.27-0.27 0.71-0.27 0.98 0
        l0.87 0.87
        l2.86-2.86
        c0.27-0.27 0.71-0.27 0.98 0
        Z
      "></svg>`,2),fs=L(`<svg><path d="M6 9V4h12v5"></svg>`,2),ps=L(`<svg><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></svg>`,2),ms=L(`<svg><path d="M6 14h12v6H6z"></svg>`,2),hs=L(`<svg><path d="M18 12h.01"></svg>`,2),gs=L(`<svg><path d="M83.354 42.838l.357-.225c3.073-1.938 4.214-5.848 2.711-9.156a39.997 39.997 0 0 0-3.904-6.75c-2.111-2.944-6.063-3.894-9.268-2.207l-.366.193c-2.304 1.213-5.051 1.043-7.274-.313a29.684 29.684 0 0 0-1.238-.715c-2.281-1.246-3.794-3.539-3.896-6.135l-.016-.416c-.142-3.622-2.943-6.572-6.551-6.924a40.096 40.096 0 0 0-7.816 0c-3.608.352-6.409 3.302-6.551 6.924l-.016.416c-.102 2.597-1.615 4.89-3.896 6.135-.419.229-.831.467-1.238.715-2.223 1.356-4.97 1.526-7.274.313l-.366-.193c-3.206-1.687-7.158-.737-9.268 2.207a39.997 39.997 0 0 0-3.904 6.75c-1.503 3.308-.362 7.218 2.711 9.156l.357.225c2.145 1.353 3.444 3.73 3.367 6.264a26.848 26.848 0 0 0-.001 1.795c.077 2.535-1.223 4.912-3.367 6.264l-.357.225c-3.073 1.938-4.214 5.848-2.711 9.156a39.997 39.997 0 0 0 3.904 6.75c2.111 2.944 6.063 3.894 9.268 2.207l.366-.193c2.304-1.213 5.051-1.043 7.274.313.406.248.819.486 1.238.715 2.281 1.246 3.794 3.539 3.896 6.135l.016.416c.142 3.622 2.943 6.572 6.551 6.924a40.059 40.059 0 0 0 7.815.001c3.608-.352 6.409-3.302 6.551-6.924l.016-.416c.102-2.597 1.615-4.89 3.896-6.135.419-.229.831-.467 1.238-.715 2.223-1.356 4.97-1.526 7.274-.313l.366.193c3.206 1.687 7.158.737 9.268-2.207a39.997 39.997 0 0 0 3.904-6.75c1.503-3.308.362-7.218-2.711-9.156l-.357-.225c-2.145-1.353-3.444-3.73-3.367-6.264a26.848 26.848 0 0 0 .001-1.795c-.076-2.535 1.223-4.912 3.368-6.265zM50 65c-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15s15 6.716 15 15c0 8.284-6.716 15-15 15z"></svg>`,2),_s=L(`<svg><path d="m9 14-5-5 5-5"></svg>`,2),vs=L(`<svg><path d="M4 9h9a7 7 0 1 1 0 14h-2"></svg>`,2),ys=L(`<svg><path d="M4 4v6h6"></svg>`,2),bs=L(`<svg><path d="M5.5 15a7 7 0 1 0 1.1-8.2L4 10"></svg>`,2),xs=L(`<svg><g transform="translate(8 8) scale(0.96875)"><path fill=currentColor stroke=currentColor stroke-width=8 stroke-linejoin=round></svg>`,2),Ss=L(`<svg><path></svg>`,2),Cs=L(`<svg><path d="m6 6 12 12M18 6 6 18"></svg>`,2),ws=L(`<svg><path d="M4 7h16"></svg>`,2),Ts=L(`<svg><path d="m6 7 1 13h10l1-13"></svg>`,2),Es=L(`<svg><path d="M9 7V4h6v3"></svg>`,2),Ds=L(`<svg><path d="M10 11v6M14 11v6"></svg>`,2),Os=L(`<svg><path d="M12 15V4m0 0L8 8m4-4 4 4"></svg>`,2),ks=L(`<svg><path d="M5 14v5h14v-5"></svg>`,2),As=L(`<svg><path d="M12 4v11m0 0 4-4m-4 4-4-4"></svg>`,2),js=L(`<svg><path d="m5 12 4 4L19 6"></svg>`,2),Ms=L(`<svg><rect x=8 y=8 width=12 height=12 rx=2></svg>`,2),Ns=L(`<svg><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"></svg>`,2);function Ps(){return I(os,{className:`reader-icon reader-study-icon`,viewBox:`58 84 396 361`,get children(){return[z(ss),z(cs),z(ls),z(us)]}})}function Fs(){return I(os,{className:`reader-icon reader-review-icon`,viewBox:`0 0 16 16`,get children(){return z(ds)}})}function Is(){return I(os,{className:`reader-icon`,viewBox:`0 0 24 24`,get children(){return[z(fs),z(ps),z(ms),z(hs)]}})}function Ls(){return I(os,{className:`reader-icon reader-gear-icon`,viewBox:`0 0 100 100`,get children(){return z(gs)}})}function Rs(){return I(os,{className:`reader-icon`,viewBox:`0 0 24 24`,get children(){return[z(_s),z(vs)]}})}function zs(){return I(os,{className:`reader-icon`,viewBox:`0 0 24 24`,get children(){return[z(ys),z(bs)]}})}var Bs={balanced:`M449.528 105.602L288.459 8.989C278.469 2.994 267.232 0 255.993 0c-11.225 0-22.463 2.994-32.452 8.989L62.471 105.602c-19.012 11.406-30.64 31.95-30.64 54.117v192.562c0 22.168 11.628 42.711 30.64 54.117l161.069 96.613c9.989 5.988 21.228 8.989 32.452 8.989 11.239 0 22.476-3.001 32.466-8.989l161.069-96.613c19.013-11.406 30.64-31.95 30.64-54.117V159.719c0-22.167-11.627-42.711-30.639-54.117zM250.595 492.733c-6.028-.745-11.936-2.712-17.321-5.948L72.206 390.172c-13.306-7.99-21.456-22.37-21.456-37.891V159.719c0-6.022 1.242-11.862 3.518-17.233l196.328 117.76V492.733zM59.665 133.114c3.37-4.464 7.593-8.318 12.54-11.285l161.069-96.613c6.996-4.196 14.85-6.291 22.718-6.291 7.882 0 15.737 2.095 22.732 6.291l161.069 96.613c4.942 2.967 9.171 6.821 12.54 11.285L255.993 250.881 59.665 133.114zM461.249 352.281c0 15.521-8.15 29.901-21.456 37.891l-161.069 96.613c-5.397 3.236-11.292 5.203-17.32 5.948V260.246l196.328-117.76c2.282 5.37 3.518 11.211 3.518 17.233V352.281zM367.96 114.498c-10.809-8.01-28.626-8.204-39.784-.45-11.158 7.754-11.44 20.543-.631 28.546 10.822 8.002 28.626 8.203 39.784.45 11.158-7.762 11.44-20.537.631-28.546zM183.676 112.289c-10.816-8.003-28.626-8.211-39.784-.45-11.158 7.754-11.44 20.536-.631 28.538 10.808 8.009 28.626 8.204 39.784.456 11.158-7.756 11.439-20.542.631-28.544zM89.285 248.303c11.158 6.083 20.194 1.961 20.194-9.19 0-11.158-9.036-25.129-20.194-31.21-11.158-6.083-20.201-1.967-20.201 9.19 0 11.151 9.043 25.128 20.201 31.21zM202.057 309.771c11.164 6.082 20.207 1.967 20.207-9.184 0-11.157-9.043-25.135-20.207-31.217-11.144-6.076-20.194-1.961-20.194 9.198 0 11.15 9.05 25.121 20.194 31.203zM89.285 361.082c11.158 6.083 20.194 1.967 20.194-9.19 0-11.158-9.036-25.129-20.194-31.21-11.158-6.083-20.201-1.968-20.201 9.19 0 11.157 9.043 25.128 20.201 31.21zM202.057 422.55c11.164 6.082 20.207 1.967 20.207-9.191 0-11.151-9.043-25.128-20.207-31.21-11.144-6.076-20.194-1.961-20.194 9.19 0 11.15 9.05 25.121 20.194 31.211zM145.671 335.43c11.158 6.076 20.201 1.96 20.201-9.198 0-11.151-9.043-25.128-20.201-31.204-11.15-6.082-20.2-1.967-20.2 9.184 0 11.151 9.05 25.129 20.2 31.218zM414.538 204.559c-11.158 6.082-20.194 20.052-20.194 31.21 0 11.158 9.036 15.273 20.194 9.191 11.157-6.083 20.207-20.053 20.207-31.211 0-11.158-9.05-15.273-20.207-9.19zM414.538 270.33c-11.158 6.09-20.194 20.053-20.194 31.211 0 11.158 9.036 15.273 20.194 9.198 11.157-6.082 20.207-20.06 20.207-31.211 0-11.158-9.05-15.266-20.207-9.198zM316.36 302.642c11.158-6.082 20.208-20.053 20.208-31.211 0-11.151-9.05-15.266-20.208-9.19-11.158 6.082-20.194 20.059-20.194 31.21 0 11.158 9.037 15.273 20.194 9.191zM414.538 336.108c-11.158 6.082-20.194 20.053-20.194 31.204 0 11.158 9.036 15.273 20.194 9.198 11.157-6.083 20.207-20.06 20.207-31.218 0-11.151-9.05-15.266-20.207-9.184zM316.36 393.79c-11.158 6.082-20.194 20.053-20.194 31.211 0 11.15 9.037 15.266 20.194 9.184 11.158-6.076 20.208-20.053 20.208-31.204 0-11.158-9.05-15.273-20.208-9.191zM317.569 328.018c-11.158 6.076-20.194 20.053-20.194 31.204 0 11.158 9.036 15.273 20.194 9.191 11.158-6.082 20.208-20.053 20.208-31.21 0-11.151-9.05-15.267-20.208-9.185z`,easy:`M449.525 105.602L288.456 8.989C278.474 2.994 267.228 0 256 0c-11.232 0-22.476 2.994-32.46 8.989L62.469 105.602c-19.01 11.406-30.641 31.95-30.641 54.117v192.562c0 22.168 11.631 42.711 30.641 54.117l161.072 96.613C233.524 508.999 244.772 512 256 512c11.228 0 22.474-3.001 32.456-8.989l161.069-96.613c19.012-11.406 30.647-31.95 30.647-54.117V159.719c0-22.167-11.635-42.711-30.647-54.117zM250.593 492.733c-6.026-.745-11.927-2.719-17.32-5.948L72.203 390.172c-13.31-7.99-21.453-22.37-21.453-37.891V159.719c0-6.022 1.238-11.862 3.514-17.233l196.328 117.76V492.733zM59.663 133.114c3.366-4.464 7.596-8.318 12.541-11.285l161.069-96.613c7.002-4.196 14.856-6.291 22.728-6.291 7.868 0 15.726 2.095 22.725 6.291l161.065 96.613c4.955 2.967 9.184 6.821 12.541 11.285L256 250.881 59.663 133.114zM461.247 352.281c0 15.521-8.15 29.901-21.456 37.891l-161.065 96.613c-5.391 3.229-11.296 5.203-17.321 5.948V260.246l196.325-117.76c2.282 5.37 3.518 11.211 3.518 17.233V352.281zM202.061 309.771c11.158 6.082 20.201 1.967 20.201-9.191 0-11.15-9.043-25.128-20.201-31.21-11.154-6.076-20.201-1.961-20.201 9.19 0 11.158 9.047 25.129 20.201 31.211zM89.283 361.082c11.154 6.076 20.197 1.961 20.197-9.197 0-11.151-9.043-25.122-20.197-31.204-11.155-6.083-20.201-1.968-20.201 9.19 0 11.151 9.047 25.129 20.201 31.211zM145.672 335.424c11.154 6.082 20.201 1.967 20.201-9.191 0-11.151-9.047-25.128-20.201-31.204-11.158-6.082-20.201-1.967-20.201 9.184 0 11.151 9.047 25.128 20.201 31.211zM418.335 207.902c-11.158 6.082-20.208 20.053-20.208 31.21 0 11.151 9.05 15.266 20.208 9.19 11.151-6.082 20.194-20.059 20.194-31.21 0-11.158-9.043-15.273-20.194-9.19zM305.552 269.37c-11.161 6.082-20.201 20.06-20.201 31.21 0 11.158 9.04 15.273 20.201 9.191 11.155-6.082 20.198-20.053 20.198-31.211 0-11.15-9.043-15.266-20.198-9.19zM418.335 320.681c-11.158 6.076-20.208 20.052-20.208 31.204 0 11.158 9.05 15.273 20.208 9.197 11.151-6.083 20.194-20.06 20.194-31.21 0-11.151-9.043-15.266-20.194-9.191zM305.552 382.149c-11.161 6.082-20.201 20.059-20.201 31.21 0 11.158 9.04 15.273 20.201 9.191 11.155-6.083 20.198-20.053 20.198-31.211 0-11.151-9.043-15.266-20.198-9.19zM284.992 107.012c-15.726-11.648-41.627-11.936-57.86-.658-16.227 11.285-16.643 29.875-.913 41.509 15.726 11.648 41.63 11.943 57.867.658 16.226-11.278 16.636-29.867.906-41.509z`,hard:`M449.532 105.602L288.463 8.989C278.474 2.994 267.235 0 256.011 0c-11.239 0-22.483 2.994-32.467 8.989L62.475 105.602c-19.012 11.406-30.647 31.95-30.647 54.117v192.562c0 22.168 11.635 42.711 30.647 54.117l161.069 96.613c9.984 5.988 21.228 8.989 32.467 8.989 11.225 0 22.463-3.001 32.452-8.989l161.069-96.613c19.012-11.406 30.64-31.949 30.64-54.117V159.719c0-22.167-11.628-42.711-30.64-54.117zM250.599 492.733c-6.029-.745-11.93-2.719-17.32-5.948L72.21 390.172c-13.306-7.989-21.456-22.369-21.456-37.891V159.719c0-6.022 1.236-11.862 3.518-17.233l196.328 117.76V492.733zM59.669 133.114c3.364-4.464 7.593-8.318 12.541-11.285l161.069-96.613c6.995-4.196 14.85-6.291 22.732-6.291 7.868 0 15.723 2.095 22.718 6.291l161.069 96.613c4.941 2.967 9.184 6.821 12.54 11.285L256.011 250.881 59.669 133.114zM461.254 352.281c0 15.522-8.15 29.902-21.456 37.891l-161.069 96.613c-5.398 3.229-11.292 5.203-17.321 5.948V260.246l196.328-117.76c2.283 5.37 3.518 11.211 3.518 17.233V352.281zM160.209 119.875c-9.828-7.278-26.021-7.465-36.165-.41-10.144 7.056-10.399 18.67-.57 25.947 9.828 7.277 26.022 7.459 36.159.41 10.15-7.056 10.405-18.671.576-25.947zM279.159 48.686c-9.829-7.277-26.022-7.458-36.172-.403-10.137 7.049-10.393 18.664-.564 25.941 9.829 7.284 26.022 7.458 36.159.416 10.15-7.062 10.405-18.677.577-25.954zM220.59 82.024c-9.834-7.27-26.028-7.458-36.172-.403-10.15 7.049-10.406 18.664-.571 25.941 9.829 7.284 26.022 7.458 36.166.416 10.137-7.062 10.398-18.677.577-25.954zM267.437 184.754c-9.828-7.277-26.015-7.459-36.159-.41-10.15 7.056-10.405 18.671-.577 25.947 9.828 7.284 26.021 7.459 36.172.41 10.137-7.056 10.392-18.671.564-25.947zM386.385 113.564c-9.828-7.271-26.021-7.458-36.158-.403-10.151 7.049-10.406 18.664-.577 25.941 9.828 7.284 26.02 7.458 36.172.416 10.137-7.062 10.392-18.677.564-25.954zM327.817 146.903c-9.829-7.27-26.022-7.458-36.172-.403-10.137 7.049-10.392 18.664-.564 25.941 9.828 7.284 26.021 7.465 36.158.416 10.137-7.056 10.392-18.671.578-25.954zM89.289 248.303c11.158 6.083 20.194 1.961 20.194-9.19 0-11.158-9.036-25.128-20.194-31.21-11.157-6.083-20.207-1.967-20.207 9.19 0 11.151 9.05 25.128 20.207 31.21zM202.061 309.771c11.158 6.082 20.208 1.967 20.208-9.184 0-11.157-9.05-25.135-20.208-31.217-11.15-6.076-20.194-1.961-20.194 9.198 0 11.15 9.043 25.121 20.194 31.203zM89.289 361.082c11.158 6.076 20.194 1.967 20.194-9.19 0-11.158-9.036-25.129-20.194-31.21-11.157-6.083-20.207-1.968-20.207 9.19 0 11.157 9.05 25.128 20.207 31.21zM202.061 422.55c11.158 6.082 20.208 1.967 20.208-9.191 0-11.151-9.05-25.128-20.208-31.21-11.15-6.076-20.194-1.961-20.194 9.19 0 11.15 9.043 25.121 20.194 31.211zM145.675 335.424c11.158 6.082 20.201 1.967 20.201-9.191 0-11.151-9.044-25.128-20.201-31.204-11.158-6.082-20.201-1.967-20.201 9.185 0 11.156 9.043 25.128 20.201 31.21zM418.341 207.902c-11.158 6.082-20.208 20.053-20.208 31.21 0 11.151 9.05 15.273 20.208 9.19 11.144-6.082 20.194-20.059 20.194-31.21 0-11.157-9.05-15.273-20.194-9.19zM305.555 382.149c-11.158 6.082-20.194 20.059-20.194 31.21 0 11.158 9.036 15.273 20.194 9.191 11.158-6.083 20.194-20.053 20.194-31.211 0-11.151-9.036-15.266-20.194-9.19zM418.341 320.681c-11.158 6.076-20.208 20.052-20.208 31.204 0 11.158 9.05 15.273 20.208 9.197 11.144-6.083 20.194-20.06 20.194-31.21 0-11.151-9.05-15.266-20.194-9.191zM305.555 269.37c-11.158 6.082-20.201 20.06-20.201 31.21 0 11.158 9.04 15.273 20.201 9.191 11.155-6.082 20.198-20.053 20.198-31.211 0-11.15-9.043-15.266-20.198-9.19zM361.948 295.028c-11.158 6.076-20.207 20.053-20.207 31.204 0 11.158 9.05 15.273 20.207 9.191 11.158-6.083 20.194-20.053 20.194-31.21 0-11.151-9.036-15.266-20.194-9.185zM317.569 328.018c-11.158 6.076-20.194 20.053-20.194 31.204 0 11.158 9.036 15.273 20.194 9.191 11.158-6.082 20.208-20.053 20.208-31.21 0-11.151-9.05-15.267-20.208-9.185z`};function Vs(e={}){let t=e.variant??`balanced`;return I(os,{className:e.compact===!0?`reader-icon reader-dice-icon reader-dice-icon-compact`:`reader-icon reader-dice-icon`,viewBox:`0 0 512 512`,get children(){var e=z(xs),n=e.firstChild;return Wi(()=>Bs[t],e=>{da(n,`d`,e)}),e}})}function Hs(e){return I(os,{className:`reader-icon`,viewBox:`0 0 24 24`,get children(){var t=z(Ss);return Wi(()=>e.direction===`left`?`m15 18-6-6 6-6`:`m9 18 6-6-6-6`,e=>{da(t,`d`,e)}),t}})}function Us(){return I(os,{className:`reader-icon`,viewBox:`0 0 24 24`,get children(){return z(Cs)}})}function Ws(){return I(os,{className:`reader-icon print-remove-icon`,viewBox:`0 0 24 24`,get children(){return[z(ws),z(Ts),z(Es),z(Ds)]}})}function Gs(){return I(os,{className:`reader-icon`,viewBox:`0 0 24 24`,get children(){return[z(Os),z(ks)]}})}function Ks(){return I(os,{className:`reader-icon`,viewBox:`0 0 24 24`,get children(){return[z(As),z(ks)]}})}function qs(){return I(os,{className:`reader-icon`,viewBox:`0 0 24 24`,get children(){return z(js)}})}function Js(){return I(os,{className:`reader-icon`,viewBox:`0 0 24 24`,get children(){return[z(Ms),z(Ns)]}})}var Ys=class e{constructor(t,n){this.element=t,this.touch1=null,this.touch2=null,this.touchStartX=null,this.touchStartY=null,this.touchEndX=null,this.touchEndY=null,this.touchMove1=null,this.touchMove2=null,this.touchMoveX=null,this.touchMoveY=null,this.velocityX=null,this.velocityY=null,this.longPressTimer=null,this.doubleTapTimer=null,this.doubleTapWaiting=!1,this.thresholdX=0,this.thresholdY=0,this.disregardVelocityThresholdX=0,this.disregardVelocityThresholdY=0,this.swipingHorizontal=!1,this.swipingVertical=!1,this.swipingDirection=null,this.swipedHorizontal=!1,this.swipedVertical=!1,this.originalDistance=null,this.newDistance=null,this.scale=null,this.originalAngle=null,this.newAngle=null,this.rotation=null,this.handlers={panstart:[],panmove:[],panend:[],swipeleft:[],swiperight:[],swipeup:[],swipedown:[],tap:[],doubletap:[],longpress:[],pinch:[],pinchend:[],rotate:[],rotateend:[]},this._onTouchStart=this.onTouchStart.bind(this),this._onTouchMove=this.onTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this.opts=Object.assign({},e.defaults,n),this.element.addEventListener(`touchstart`,this._onTouchStart,Xs),this.element.addEventListener(`touchmove`,this._onTouchMove,Xs),this.element.addEventListener(`touchend`,this._onTouchEnd,Xs),this.opts.mouseSupport&&!(`ontouchstart`in window)&&(this.element.addEventListener(`mousedown`,this._onTouchStart,Xs),document.addEventListener(`mousemove`,this._onTouchMove,Xs),document.addEventListener(`mouseup`,this._onTouchEnd,Xs))}destroy(){this.element.removeEventListener(`touchstart`,this._onTouchStart),this.element.removeEventListener(`touchmove`,this._onTouchMove),this.element.removeEventListener(`touchend`,this._onTouchEnd),this.element.removeEventListener(`mousedown`,this._onTouchStart),document.removeEventListener(`mousemove`,this._onTouchMove),document.removeEventListener(`mouseup`,this._onTouchEnd),clearTimeout(this.longPressTimer??void 0),clearTimeout(this.doubleTapTimer??void 0)}on(e,t){if(this.handlers[e])return this.handlers[e].push(t),{type:e,fn:t,cancel:()=>this.off(e,t)}}off(e,t){if(this.handlers[e]){let n=this.handlers[e].indexOf(t);n!==-1&&this.handlers[e].splice(n,1)}}fire(e,t){for(let n=0;n<this.handlers[e].length;n++)this.handlers[e][n](t)}onTouchStart(e){let t=!1;if(e.type!==`mousedown`){if(this.touch1||(this.touch1=e.changedTouches[0],t=!0),(t&&e.changedTouches.length>1||!t)&&!this.touch2){this.touch2=[...e.changedTouches].find(e=>e.identifier!==this.touch1?.identifier)||null,this.originalDistance=Math.sqrt(((this.touch2?.screenX??0)-(this.touchMove1?.screenX??this.touch1?.screenX??0))**2+((this.touch2?.screenY??0)-(this.touchMove1?.screenY??this.touch1?.screenY??0))**2),this.originalAngle=Math.atan2((this.touch2?.screenY??0)-(this.touchMove1?.screenY??this.touch1?.screenY??0),(this.touch2?.screenX??0)-(this.touchMove1?.screenX??this.touch1?.screenX??0))/(Math.PI/180);return}if(!t)return}(t||e.type===`mousedown`)&&(this.thresholdX=this.opts.threshold(`x`,this),this.thresholdY=this.opts.threshold(`y`,this),this.disregardVelocityThresholdX=this.opts.disregardVelocityThreshold(`x`,this),this.disregardVelocityThresholdY=this.opts.disregardVelocityThreshold(`y`,this),this.touchStartX=e.type===`mousedown`?e.screenX:this.touch1?.screenX||0,this.touchStartY=e.type===`mousedown`?e.screenY:this.touch1?.screenY||0,this.touchMoveX=null,this.touchMoveY=null,this.touchEndX=null,this.touchEndY=null,this.swipingDirection=null,this.longPressTimer=setTimeout(()=>this.fire(`longpress`,e),this.opts.longPressTime),this.scale=1,this.rotation=0,this.fire(`panstart`,e))}onTouchMove(e){if(e.type===`mousemove`&&(!this.touchStartX||this.touchEndX!==null))return;let t,n;if(e.type!==`mousemove`&&(t=[...e.changedTouches].find(e=>e.identifier===this.touch1?.identifier),this.touchMove1=t||this.touchMove1,n=[...e.changedTouches].find(e=>e.identifier===this.touch2?.identifier),this.touchMove2=n||this.touchMove2),e.type===`mousemove`||t){let n=(e.type===`mousemove`?e.screenX:t?.screenX??0)-(this.touchStartX??0);this.velocityX=n-(this.touchMoveX??0),this.touchMoveX=n;let r=(e.type===`mousemove`?e.screenY:t?.screenY??0)-(this.touchStartY??0);this.velocityY=r-(this.touchMoveY??0),this.touchMoveY=r;let i=Math.abs(this.touchMoveX),a=Math.abs(this.touchMoveY);this.swipingHorizontal=i>this.thresholdX,this.swipingVertical=a>this.thresholdY,this.swipingDirection=i>a?this.swipingHorizontal?`horizontal`:`pre-horizontal`:this.swipingVertical?`vertical`:`pre-vertical`,Math.max(i,a)>this.opts.pressThreshold&&clearTimeout(this.longPressTimer??void 0),this.fire(`panmove`,e)}e.type!==`mousemove`&&this.touchMove1!=null&&this.touchMove2!=null&&(this.newDistance=Math.sqrt((this.touchMove2.screenX-this.touchMove1.screenX)**2+(this.touchMove2.screenY-this.touchMove1.screenY)**2),this.scale=this.newDistance/(this.originalDistance??0),this.fire(`pinch`,e),this.newAngle=Math.atan2((this.touchMove2.screenY??0)-(this.touchMove1.screenY??0),(this.touchMove2.screenX??0)-(this.touchMove1.screenX??0))/(Math.PI/180),this.rotation=this.newAngle-(this.originalAngle??0),this.fire(`rotate`,e))}onTouchEnd(e){let t;if(e.type!==`mouseup`&&(t=[...e.changedTouches].find(e=>e.identifier===this.touch1?.identifier),[...e.touches].find(e=>e.identifier===this.touch1?.identifier)||(this.touch1=null,this.touchMove1=null),[...e.touches].find(e=>e.identifier===this.touch2?.identifier)||(this.touch2=null,this.touchMove2=null)),!(e.type===`mouseup`&&(!this.touchStartX||this.touchEndX!==null))){if(e.type===`mouseup`||t){this.touchEndX=e.type===`mouseup`?e.screenX:t?.screenX??0,this.touchEndY=e.type===`mouseup`?e.screenY:t?.screenY??0,this.fire(`panend`,e),clearTimeout(this.longPressTimer??void 0);let n=this.touchEndX-(this.touchStartX??0),r=Math.abs(n),i=this.touchEndY-(this.touchStartY??0),a=Math.abs(i),o=Math.sqrt(n**2+i**2),s=Math.abs(o),c=a/r;r>this.thresholdX||a>this.thresholdY||this.opts.diagonalSwipes&&(s>this.thresholdX||s>this.thresholdY)?(this.swipedHorizontal=r>this.thresholdX||this.opts.diagonalSwipes&&s>this.thresholdX,this.swipedVertical=a>this.thresholdY||this.opts.diagonalSwipes&&s>this.thresholdY,(!this.opts.diagonalSwipes||c<Math.tan((45-this.opts.diagonalLimit)*Math.PI/180)||c>Math.tan((45+this.opts.diagonalLimit)*Math.PI/180))&&(r>=a&&(this.swipedVertical=!1),a>r&&(this.swipedHorizontal=!1)),this.swipedHorizontal&&(n<0?((this.velocityX??0)<-this.opts.velocityThreshold||o>this.disregardVelocityThresholdX)&&this.fire(`swipeleft`,e):((this.velocityX??0)>this.opts.velocityThreshold||o>this.disregardVelocityThresholdX)&&this.fire(`swiperight`,e)),this.swipedVertical&&(i<0?((this.velocityY??0)<-this.opts.velocityThreshold||o>this.disregardVelocityThresholdY)&&this.fire(`swipeup`,e):((this.velocityY??0)>this.opts.velocityThreshold||o>this.disregardVelocityThresholdY)&&this.fire(`swipedown`,e))):r<this.opts.pressThreshold&&a<this.opts.pressThreshold&&(this.doubleTapWaiting?(this.doubleTapWaiting=!1,clearTimeout(this.doubleTapTimer??void 0),this.fire(`doubletap`,e)):(this.doubleTapWaiting=!0,this.doubleTapTimer=setTimeout(()=>this.doubleTapWaiting=!1,this.opts.doubleTapTime),this.fire(`tap`,e)))}!this.touch1&&!this.touch2&&(this.fire(`pinchend`,e),this.fire(`rotateend`,e),this.originalDistance=null,this.newDistance=null,this.scale=null,this.originalAngle=null,this.newAngle=null,this.rotation=null)}}};Ys.defaults={threshold:(e,t)=>Math.max(25,Math.floor(.15*(e===`x`?window.innerWidth||document.body.clientWidth:window.innerHeight||document.body.clientHeight))),velocityThreshold:10,disregardVelocityThreshold:(e,t)=>Math.floor(.5*(e===`x`?t.element.clientWidth:t.element.clientHeight)),pressThreshold:8,diagonalSwipes:!1,diagonalLimit:15,longPressTime:500,doubleTapTime:300,mouseSupport:!0};var Xs=!1;try{window.addEventListener(`test`,null,Object.defineProperty({},"passive",{get:function(){Xs={passive:!0}}}))}catch{}function Zs(e){let t,n,r=!1,i,a,o;function s(){let e=o,t=e===`focusin`?a:i,n=e===`focusin`?i:a,r=e===`focusin`?`pointerover`:`focusin`;i=void 0,a=void 0,o=void 0,!(t!==void 0&&e!==void 0&&$s(t,e))&&n!==void 0&&$s(n,r)}let c=l=>{if(r)return;let u=Qs(l);l.type===`pointerover`&&(i=u),l.type===`focusin`&&(a=u),(l.type===`pointerover`||l.type===`focusin`)&&(o=l.type),u!==void 0&&t===void 0&&(t=Fi(async()=>{let{setupTooltipEnhancement:e}=await import(`./tooltipEnhancement-CdBXmwMG.js`);return{setupTooltipEnhancement:e}},[]).then(({setupTooltipEnhancement:t})=>{r||(n=t(e),e.removeEventListener(`pointerover`,c),e.removeEventListener(`focusin`,c),s())}).catch(e=>{if(t=void 0,i=void 0,a=void 0,o=void 0,e instanceof Error){console.error(`Could not load reader tooltips`,e);return}console.error(`Could not load reader tooltips`,Error(String(e)))}))};return e.addEventListener(`pointerover`,c),e.addEventListener(`focusin`,c),()=>{r=!0,e.removeEventListener(`pointerover`,c),e.removeEventListener(`focusin`,c),n?.()}}function Qs(e){return e.composedPath().find(e=>e instanceof HTMLElement&&e.hasAttribute(`data-tippy-content`))}function $s(e,t){if(!e.isConnected)return!1;if(t===`focusin`){let t=e.shadowRoot;return e.matches(`:focus`)||t!==null&&t.activeElement!==null?(e.dispatchEvent(new FocusEvent(`focus`,{composed:!0})),!0):!1}return e.matches(`:hover`)?(e.dispatchEvent(new MouseEvent(`mouseenter`,{composed:!0})),!0):!1}var ec=L(`<style>`),tc=L(`<button data-button-hit-target type=button tabindex=-1 aria-hidden=true>`),nc=L(`<span part=line-ripple class=field-ripple aria-hidden=true>`),rc=[`click`,`change`,`focus`,`focusin`,`focusout`,`blur`,`input`,`keydown`,`mousedown`,`pointerdown`,`submit`,`touchstart`];function ic(e,t=e){let n=[];for(let r of rc){let i=t=>{let n=t.composedPath();if(!n.some(t=>t instanceof HTMLElement&&t!==e&&t.localName===`reader-button`)&&!n.some(e=>e instanceof HTMLElement&&(e.localName===`reader-question-sheet`||e.localName===`reader-question-backdrop`||e.classList.contains(`study-sheet-handle`)||e.classList.contains(`reader-question-backdrop-control`))))for(let i of n){if(!(i instanceof HTMLElement)||i===e)continue;let n=i[`$$`+r];if(typeof n==`function`){t.stopPropagation(),n.call(i,ac(t,i));return}}};t.addEventListener(r,i,!0),n.push(()=>t.removeEventListener(r,i,!0))}return()=>n.forEach(e=>e())}function ac(e,t){return new Proxy(e,{get(e,n){if(n===`currentTarget`)return t;let r=Reflect.get(e,n,e);return typeof r==`function`?r.bind(e):r}})}function oc(e,t,n){return Pn(()=>{let e=n?.shadowRoot;return e==null?void 0:Zs(e)}),Ka(()=>[(()=>{var t=z(ec);return R(t,e),t})(),Gi(()=>typeof t==`function`?t():t)])}function sc(e){return Ka(()=>[(()=>{var e=z(ec);return R(e,bo),e})(),Gi(e),z(tc)])}function cc(e){return Ka(()=>[(()=>{var e=z(ec);return R(e,xo),e})(),Gi(e),z(nc)])}var lc=L(`<reader-button>`,1);function uc(e){let t=Ja(()=>sc(()=>e.children));var n=z(lc);return _a(n,$n(()=>er(e,`children`),t,{"prop:content":()=>e.children}),!1),n._$owner=A(),ka(),n}var dc=L(`<reader-sheet-layer class=reader-sheet-layer>`,1),fc=L(`<style>`),pc=L(`<div class=reader-sheet-backdrop aria-hidden=true>`),mc=L(`<div class=reader-sheet role=dialog aria-modal=true tabindex=-1 style=--reader-sheet-swipe-offset:0px;will-change:auto><!$><!/><div class=reader-sheet-body>`),hc={sheetId:``,open:!1,placement:`bottom`,onClose:()=>void 0,closeLabel:`Close`,closeIcon:!1,showCloseButton:!0,dismissOnSwipe:!0,initialFocusSelector:void 0,content:[],accessibleLabel:``,accessibleLabelledBy:void 0},gc=[`a[href]`,`area[href]`,`button, reader-button`,`input:not([type="hidden"])`,`select`,`textarea`,`iframe`,`object`,`embed`,`summary`,`[contenteditable="true"]`,`[tabindex]`].join(`,`),_c=56,vc=8,yc=0,bc,xc;function Sc(){yc+=1,yc===1&&(bc=document.documentElement.style.overflowY,xc=document.body.style.overflowY,document.documentElement.style.overflowY=`hidden`,document.body.style.overflowY=`hidden`)}function Cc(){yc!==0&&(--yc,yc===0&&(document.documentElement.style.overflowY=bc??``,document.body.style.overflowY=xc??``,bc=void 0,xc=void 0))}function wc(e,t){let n=getComputedStyle(e),r=n.transitionProperty.split(`,`).map(e=>e.trim()).findIndex(e=>e===t||e===`all`);if(r<0)return 0;let i=n.transitionDuration.split(`,`).map(e=>e.trim()),a=i[r%i.length];return a===void 0?0:a.endsWith(`ms`)?Number.parseFloat(a):a.endsWith(`s`)?Number.parseFloat(a)*1e3:0}function Tc(e){let t=ir(()=>e.children),[n,r]=Yr();Zr(()=>({host:n(),sheetId:e.id,open:e.open,placement:e.placement,onClose:e.onClose,closeLabel:e.closeLabel,closeIcon:e.closeIcon,showCloseButton:e.showCloseButton,dismissOnSwipe:e.dismissOnSwipe,initialFocusSelector:e.initialFocusSelector,content:t(),accessibleLabel:`ariaLabel`in e?e.ariaLabel:void 0,accessibleLabelledBy:`ariaLabelledBy`in e?e.ariaLabelledBy:void 0}),({host:e,sheetId:t,open:n,placement:r,onClose:i,closeLabel:a,closeIcon:o,showCloseButton:s,dismissOnSwipe:c,initialFocusSelector:l,content:u,accessibleLabel:d,accessibleLabelledBy:f})=>{e!==void 0&&(e.sheetId=t,e.open=n,e.placement=r,e.onClose=i,e.closeLabel=a,e.closeIcon=o,e.showCloseButton=s,e.dismissOnSwipe=c,e.initialFocusSelector=l,e.content=u,e.accessibleLabel=d,e.accessibleLabelledBy=f)});var i=z(dc);return ya(()=>e=>{r(e)},i),i.content=()=>t(),i._$owner=A(),Wi(()=>({e:e.id,t:e.open,a:e.placement,o:e.onClose,i:e.closeLabel,n:e.closeIcon,s:e.showCloseButton,h:e.dismissOnSwipe,r:e.initialFocusSelector,d:`ariaLabel`in e?e.ariaLabel:void 0,l:`ariaLabelledBy`in e?e.ariaLabelledBy:void 0}),({e,t,a:n,o:r,i:a,n:o,s,h:c,r:l,d:u,l:d},f)=>{e!==f?.e&&(i.sheetId=e),t!==f?.t&&(i.open=t),n!==f?.a&&(i.placement=n),r!==f?.o&&(i.onClose=r),a!==f?.i&&(i.closeLabel=a),o!==f?.n&&(i.closeIcon=o),s!==f?.s&&(i.showCloseButton=s),c!==f?.h&&(i.dismissOnSwipe=c),l!==f?.r&&(i.initialFocusSelector=l),u!==f?.d&&(i.accessibleLabel=u),d!==f?.l&&(i.accessibleLabelledBy=d)}),i}function Ec(e,t){let n,r,i,a,s=!1,c,l=0,u=e.initialFocusSelector,d=0,f,p,m,h=!1,g=!1,_=!1,v,y=new Map,b=[],[x,ee]=Yr(`closed`),[te,ne]=Yr(0),[re,ie]=Yr(`idle`),ae=`closed`;n=t;function S(){return typeof e.open==`function`?e.open():e.open}function oe(t){let a=n;a!==void 0&&(a.dataset.state=t,a.dataset.placement=e.placement,a.setAttribute(`aria-hidden`,t===`closed`?`true`:`false`),a.toggleAttribute(`inert`,t!==`open`),a.classList.toggle(`is-open`,t===`open`),a.classList.toggle(`is-closed`,t===`closed`),a.classList.toggle(`is-closing`,t===`closing`)),r!==void 0&&(r.classList.toggle(`is-open`,t===`open`),r.classList.toggle(`is-closing`,t===`closing`),r.style.willChange=t===`open`||t===`closing`?`opacity`:``);let o=i;if(o!==void 0){o.dataset.state=t,o.dataset.placement=e.placement,o.classList.toggle(`is-open`,t===`open`),o.classList.toggle(`is-closed`,t===`closed`),o.classList.toggle(`is-closing`,t===`closing`),o.classList.toggle(`is-swipe-tracking`,re()===`tracking`),o.classList.toggle(`is-swipe-settling`,re()===`settling`),o.style.setProperty(`--reader-sheet-swipe-offset`,`${te()}px`),o.style.willChange=t===`open`||t===`closing`?`transform, opacity`:``;for(let e of kc(o,`.reader-sheet-option`))e.style.willChange=t===`open`?`transform, opacity`:``}}function se(e){ae=e,ee(e),oe(e)}function ce(e){y.has(e)||(y.set(e,e.inert),e.inert=!0)}function le(){if(n===void 0||b.length>0)return;let e=n;for(;e!==document.body;){let t=e,n=t.parentNode;if(n===null)return;let r=n instanceof ShadowRoot?n.children:n.childNodes;for(let e of r)e===t||!(e instanceof HTMLElement)||ce(e);let i=new MutationObserver(e=>{for(let n of e)for(let e of n.addedNodes)e instanceof HTMLElement&&e!==t&&ce(e)});i.observe(n,{childList:!0}),b.push(i),e=n instanceof ShadowRoot?n.host:n}}function ue(){for(let e of b)e.disconnect();b.length=0;for(let[e,t]of y)e.inert=t;y.clear()}function de(){return i===void 0?[]:mo(gc,i).filter(e=>e.tabIndex>=0&&!e.matches(`:disabled, [disabled]`)&&e.getClientRects().length>0&&ho(e,`[aria-hidden="true"], [inert]`)===null)}function fe(e){if(n===void 0)return!1;let t=e;for(;t!==null;){if(t===n)return!0;if(t.parentNode!==null){t=t.parentNode;continue}t=t instanceof ShadowRoot?t.host:null}return!1}function pe(e,t){let n=e;for(;n!==null;){if(n instanceof HTMLElement&&t.includes(n))return n;if(n.parentNode!==null){n=n.parentNode;continue}n=n instanceof ShadowRoot?n.host:null}}function me(t){if(t!==l||!S()||i===void 0)return;let n=(e.initialFocusSelector===void 0?null:Oc(i,e.initialFocusSelector))??de()[0]??i;if(getComputedStyle(n).visibility!==`visible`){c=requestAnimationFrame(()=>me(t));return}c=void 0,n.focus()}function he(){l+=1,c!==void 0&&cancelAnimationFrame(c);let e=l;c=requestAnimationFrame(()=>me(e))}function ge(){l+=1,c!==void 0&&(cancelAnimationFrame(c),c=void 0)}function _e(){let e=a;a=void 0,!(e===void 0||!e.isConnected||e.matches(`:disabled, [disabled]`))&&(e.focus({preventScroll:!0}),go()!==e&&queueMicrotask(()=>{e.isConnected&&!e.matches(`:disabled, [disabled]`)&&e.focus({preventScroll:!0})}))}function ve(){let e=go();!(e instanceof HTMLElement)||!fe(e)||(v===void 0&&(v=document.body.getAttribute(`tabindex`)),document.body.tabIndex=-1,document.body.focus({preventScroll:!0}))}function ye(){let e=v;if(v=void 0,e!==void 0){if(e===null){document.body.removeAttribute(`tabindex`);return}document.body.setAttribute(`tabindex`,e)}}function C(){d+=1,f?.(),f=void 0}function be(){p!==void 0&&(window.clearTimeout(p),p=void 0),ne(0),ie(`idle`)}function w(){ie(`settling`),ne(0),p!==void 0&&window.clearTimeout(p);let e=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches?0:xe(getComputedStyle(i??t).getPropertyValue(`--motion-swipe-settle`));p=window.setTimeout(()=>{p=void 0,ie(`idle`)},e)}function xe(e){let t=e.trim();return t.endsWith(`ms`)?Number.parseFloat(t):t.endsWith(`s`)?Number.parseFloat(t)*1e3:0}function T(){let t=Math.max(240,window.innerHeight*.9);return e.placement===`bottom`?t:-t}function Se(t){let n=e.placement===`bottom`?Math.max(0,t):Math.min(0,t),r=Math.max(160,window.innerHeight*.72);ne(Math.sign(n)*Math.min(Math.abs(n),r))}function Ce(e){e!==d||S()||(f?.(),f=void 0,se(`closed`),ue(),_e(),ye(),_&&(_=!1,Cc()))}function we(){C(),ve();let e=d,t=i,n=t?.classList.contains(`is-swipe-tracking`)===!0;if(n&&ie(`idle`),t===void 0||window.matchMedia(`(prefers-reduced-motion: reduce)`).matches||!n&&wc(t,`transform`)===0){Ce(e);return}let r=n=>{n.target===t&&n.propertyName===`transform`&&Ce(e)};t.addEventListener(`transitionend`,r),f=()=>t.removeEventListener(`transitionend`,r),se(`closing`)}function Te(t){if(!S())return;if(t.key===`Escape`){t.preventDefault(),t.stopPropagation(),e.onClose();return}if(t.key!==`Tab`||i===void 0)return;let n=de(),r=n[0],a=n.length-1,o=n[a];if(r===void 0||o===void 0){t.preventDefault(),i.focus();return}let s=go(),c=s===null?void 0:pe(s,n),l=c===void 0?-1:n.indexOf(c);if(t.shiftKey&&l<=0){t.preventDefault(),o.focus();return}!t.shiftKey&&(l===-1||l===a)&&(t.preventDefault(),r.focus())}function Ee(){let e=n?.getAttribute(`data-state`)??i?.getAttribute(`data-state`),t=e===`open`||e===`closing`;if(r?.style.setProperty(`will-change`,t?`opacity`:``),i!==void 0){i.style.setProperty(`will-change`,t?`transform, opacity`:``);for(let t of kc(i,`.reader-sheet-option`))t.style.setProperty(`will-change`,e===`open`?`transform, opacity`:``)}}function De(){let e=S();if(e!==s){if(s=e,e){if(C(),a===void 0){let e=go();a=e instanceof HTMLElement?e:void 0}se(`open`),_||(_=!0,Sc()),be(),le(),he();return}ge(),we()}}return Zr(()=>S(),()=>De()),Zr(()=>e.initialFocusSelector,e=>{e!==u&&(u=e,S()&&he())}),Pn(()=>{De(),document.addEventListener(`keydown`,Te,!0);let t=i===void 0||e.dismissOnSwipe===!1?void 0:new Ys(i,{threshold:()=>_c,disregardVelocityThreshold:()=>_c}),n=t?.on(`panstart`,()=>{h=!1,g=!1,be()}),r=t?.on(`panmove`,()=>{if(t===void 0||h||g)return;let n=t.touchMoveX??0,r=t.touchMoveY??0;if(Math.abs(n)>Math.abs(r)&&Math.abs(n)>vc){h=!0,w();return}if(!(Math.abs(r)<=vc)){if(!(e.placement===`bottom`?r>0:r<0)){h=!0,w();return}ie(`tracking`),Se(r)}}),a=t?.on(`panend`,()=>{if(m!==void 0&&window.clearTimeout(m),h||g){g||w();return}m=window.setTimeout(()=>{m=void 0,g||w()},0)}),o=()=>{S()&&(h=!0,g=!1,w())};i?.addEventListener(`touchcancel`,o,{passive:!0});let s=t?.on(`swipeup`,()=>{!S()||e.placement!==`top`||h||(g=!0,m!==void 0&&(window.clearTimeout(m),m=void 0),ne(T()),e.onClose())}),c=t?.on(`swipedown`,()=>{!S()||e.placement!==`bottom`||e.dismissOnSwipe===!1||h||(g=!0,m!==void 0&&(window.clearTimeout(m),m=void 0),ne(T()),e.onClose())});return()=>{document.removeEventListener(`keydown`,Te,!0),p!==void 0&&window.clearTimeout(p),m!==void 0&&window.clearTimeout(m),n?.cancel(),r?.cancel(),a?.cancel(),i?.removeEventListener(`touchcancel`,o),s?.cancel(),c?.cancel(),t?.destroy(),ge(),C(),ue(),_e(),ye(),_&&(_=!1,Cc())}}),Pn(()=>{let e=n;if(e===void 0)return;let t=new MutationObserver(Ee);return t.observe(e,{attributes:!0,attributeFilter:[`data-state`]}),Ee(),()=>t.disconnect()}),[(()=>{var e=z(fc);return R(e,`
:host {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}

:host(.reader-sheet-layer) {
  position: fixed;
  z-index: 20;
  inset: 0;
  display: flex;
  justify-content: center;
  min-inline-size: 0;
  visibility: hidden;
  pointer-events: none;
}

:host(.reader-sheet-layer[data-placement="top"]) {
  align-items: flex-start;
}

:host(.reader-sheet-layer[data-placement="bottom"]) {
  align-items: flex-end;
}

:host(.reader-sheet-layer[data-state="open"]),
:host(.reader-sheet-layer[data-state="closing"]) {
  visibility: visible;
}

:host(.reader-sheet-layer[data-state="open"]) {
  pointer-events: auto;
}

.reader-sheet-backdrop {
  position: absolute;
  inset: 0;
  inline-size: 100%;
  block-size: 100%;
  border: 0;
  border-radius: 0;
  padding: 0;
  background: var(--color-ink);
  opacity: 0;
  transition: opacity var(--motion-sheet) var(--ease-decelerate);
}

.reader-sheet-backdrop.is-open {
  opacity: 0.4;
  transition-timing-function: var(--ease-decelerate);
}

.reader-sheet-backdrop:is(.is-open, .is-closing) {
  will-change: opacity;
}

.reader-sheet {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  grid-template-rows: auto minmax(0, 1fr);
  inline-size: 100%;
  min-inline-size: 0;
  min-block-size: 0;
  max-block-size: calc(100dvb - env(safe-area-inset-top) - env(safe-area-inset-bottom));
  overflow: hidden;
  border: 0;
  background: var(--color-paper);
  box-shadow: var(--shadow-paper);
  opacity: 0;
  transition: transform var(--motion-sheet) var(--ease-decelerate),
    opacity var(--motion-sheet) var(--ease-decelerate);
}

.reader-sheet:is([data-state="open"], [data-state="closing"]) {
  will-change: transform, opacity;
}

.reader-sheet[data-placement="top"] {
  border-block-start: 0;
  border-radius: 0 0 var(--radius-lg) var(--radius-lg);
  padding-block-start: env(safe-area-inset-top);
  transform: translateY(-100%);
}

.reader-sheet[data-placement="bottom"] {
  border-block-end: 0;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  padding-block-end: env(safe-area-inset-bottom);
  transform: translateY(100%);
}

.reader-sheet[data-state="open"]:is([data-placement="bottom"], [data-placement="top"]) {
  transform: translateY(var(--reader-sheet-swipe-offset, 0px));
}

.reader-sheet[data-state="closing"],
.reader-sheet-backdrop.is-closing {
  transition-timing-function: var(--ease-accelerate);
}

.reader-sheet.is-swipe-tracking {
  will-change: transform;
}

.reader-sheet[data-state="open"].is-swipe-tracking {
  transition: none;
}

.reader-sheet[data-state="open"].is-swipe-settling {
  transition: transform var(--motion-swipe-settle) var(--ease-emphasized),
    opacity var(--motion-swipe-settle) var(--ease-emphasized);
}

.reader-sheet[data-state="open"] {
  opacity: 1;
  transform: translateY(0);
}

.reader-sheet-body {
  grid-column: 1 / -1;
  grid-row: 1;
  display: grid;
  min-inline-size: 0;
  min-block-size: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: var(--space-4);
}

.reader-selection-listbox {
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

.reader-sheet-option + .reader-sheet-option {
  border-block-start: var(--border-default) solid var(--color-rule);
}

.reader-sheet[data-state="open"] .reader-sheet-option[data-sheet-state="open"]:nth-child(-n + 8) {
  animation: reader-sheet-option-enter var(--motion-standard) var(--ease-decelerate) both;
  will-change: transform, opacity;
}

.reader-sheet[data-state="open"] .reader-sheet-option[data-sheet-state="open"]:nth-child(2) {
  animation-delay: var(--motion-stagger-step);
}

.reader-sheet[data-state="open"] .reader-sheet-option[data-sheet-state="open"]:nth-child(3) {
  animation-delay: calc(var(--motion-stagger-step) * 2);
}

.reader-sheet[data-state="open"] .reader-sheet-option[data-sheet-state="open"]:nth-child(4) {
  animation-delay: calc(var(--motion-stagger-step) * 3);
}

.reader-sheet[data-state="open"] .reader-sheet-option[data-sheet-state="open"]:nth-child(5) {
  animation-delay: calc(var(--motion-stagger-step) * 4);
}

.reader-sheet[data-state="open"] .reader-sheet-option[data-sheet-state="open"]:nth-child(6) {
  animation-delay: calc(var(--motion-stagger-step) * 5);
}

.reader-sheet[data-state="open"] .reader-sheet-option[data-sheet-state="open"]:nth-child(7) {
  animation-delay: calc(var(--motion-stagger-step) * 6);
}

.reader-sheet[data-state="open"] .reader-sheet-option[data-sheet-state="open"]:nth-child(8) {
  animation-delay: calc(var(--motion-stagger-step) * 7);
}

@keyframes reader-sheet-option-enter {
  from {
    opacity: 0;
    transform: translateY(var(--space-2));
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.reader-chapter-selection-grid {
  display: grid;
  grid-template-columns: max-content minmax(0, 1fr);
  block-size: 100%;
  min-inline-size: 0;
  min-block-size: 0;
  gap: 0;
}

.reader-book-listbox {
  grid-row: 1 / -1;
  position: relative;
  z-index: 5;
  inline-size: max-content;
  max-inline-size: none;
  margin-block-start: calc(1.5 * var(--text-label) + var(--space-2));
  overflow-x: clip;
  scrollbar-gutter: auto;
  border-inline-end: 0;
  border-start-end-radius: 0;
  border-end-end-radius: 0;
}

.reader-book-listbox > [data-overlayscrollbars-viewport] {
  grid-area: 1;
  block-size: auto !important;
  min-block-size: 0;
}

.reader-book-listbox[data-overlayscrollbars~="host"] {
  display: grid !important;
  grid-template: 1fr / 1fr;
}

.reader-book-listbox .os-scrollbar.reader-book-scrollbar {
  --os-size: 0.5rem;
  --os-padding-perpendicular: 0.125rem;
  --os-track-bg: transparent;
  --os-track-bg-hover: transparent;
  --os-track-bg-active: transparent;
  --os-handle-bg: var(--color-scrollbar-handle);
  --os-handle-bg-hover: var(--color-scrollbar-handle-hover);
  --os-handle-bg-active: var(--color-scrollbar-handle-active);
  --os-handle-border-radius: 999px;
}

.reader-book-selection-bridge {
  display: none;
  position: absolute;
  z-index: 3;
  inset-block: 0;
  inset-inline-start: calc(100% - var(--border-default));
  inline-size: var(--border-default);
  background: var(--color-paper);
  pointer-events: none;
}

.reader-selection-column {
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  block-size: 100%;
  min-inline-size: 0;
  min-block-size: 0;
  gap: var(--space-2);
  overflow: hidden;
}

.reader-chapter-selection-grid > .reader-selection-column:first-child {
  position: relative;
  z-index: 1;
  overflow: visible;
}

.reader-selection-column h3 {
  min-inline-size: 0;
  margin: 0;
  color: var(--color-ink-muted);
  font-size: var(--text-label);
  line-height: 1.5;
  overflow-wrap: anywhere;
  text-wrap: balance;
  word-break: auto-phrase;
}

.reader-chapter-listbox {
  grid-template-columns: repeat(auto-fill, minmax(var(--action-min), 1fr));
  align-self: stretch;
  max-block-size: none;
  gap: 0;
  padding: 0;
  border-inline-start: var(--border-default) solid var(--color-rule);
  border-start-start-radius: 0;
  border-end-start-radius: 0;
}

.reader-chapter-listbox .reader-sheet-option,
.reader-day-listbox .reader-sheet-option {
  inline-size: auto;
  min-block-size: var(--action-min);
  padding: var(--space-2);
}

.reader-chapter-listbox .reader-sheet-option + .reader-sheet-option,
.reader-day-listbox .reader-sheet-option + .reader-sheet-option {
  border-block-start: 0;
}

.reader-day-listbox {
  grid-template-columns: repeat(auto-fill, minmax(var(--action-min), 1fr));
  gap: 0;
  padding: 0;
}

#reader-version-dialog-body,
#reader-language-dialog-body,
#reader-chapter-dialog-body,
#reader-day-dialog-body {
  padding-block-start: calc(var(--reader-compact-action-min) + var(--space-4));
}

#reader-settings-dialog-body {
  padding-block-start: calc(max(var(--reader-compact-action-min), 2.75rem) + var(--space-4));
}

#reader-version-dialog[data-placement="bottom"],
#reader-language-dialog[data-placement="bottom"],
#reader-chapter-dialog[data-placement="bottom"],
#reader-day-dialog[data-placement="bottom"] {
  inset-block-end: 0;
  border-block-end: 0;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
}

#reader-print-preview-dialog {
  display: block;
  block-size: 100dvb;
  inline-size: 100%;
  max-block-size: none;
  max-inline-size: none;
  border: 0;
  border-radius: 0;
  padding-block-start: 0;
  box-shadow: none;
}

#reader-print-preview-dialog .reader-sheet-body {
  display: block;
  block-size: 100%;
  overflow: hidden;
  padding: 0;
}

@media (min-width: 768px) {
  .reader-sheet {
    inline-size: min(calc(100% - (2 * var(--space-4))), var(--content-max-inline-size));
  }

  .reader-sheet[data-placement="bottom"] {
    inset-block-end: var(--space-4);
    max-block-size: calc(
      100dvb - var(--space-8) - env(safe-area-inset-top) - env(safe-area-inset-bottom)
    );
    border-radius: var(--radius-lg);
  }

  .reader-sheet-body {
    padding-inline: var(--space-6);
  }
}

@media (max-width: 640px) {
  .reader-chapter-selection-grid {
    grid-template-columns: max-content minmax(0, 1fr);
  }

  .reader-chapter-selection-grid > .reader-selection-column:first-child {
    grid-template-rows: calc(1.5 * var(--text-label)) minmax(0, 1fr);
  }

  .reader-chapter-selection-grid .reader-book-listbox {
    grid-row: 2;
    margin-block-start: 0;
  }

  .reader-chapter-selection-grid .reader-selection-listbox {
    block-size: calc(
      round(down, calc(100% - (2 * var(--border-default))), var(--action-min))
        + (2 * var(--border-default))
    );
  }

  .reader-chapter-selection-grid .reader-sheet-option {
    block-size: var(--action-min);
  }

  .reader-book-listbox {
    scrollbar-gutter: stable;
  }
}

@media (prefers-reduced-motion: reduce) {
  .reader-sheet[data-state="open"] .reader-sheet-option[data-sheet-state="open"]:nth-child(-n + 8) {
    animation: none;
  }

  .reader-sheet-backdrop,
  .reader-sheet {
    transition-duration: 0.01ms;
  }
}

@media print {
  :host(.reader-sheet-layer) {
    display: none !important;
  }
}

${o}
`),e})(),(()=>{var t=z(pc);return ma(t,`click`,e.onClose,!0),ya(()=>e=>{r=e,oe(ae)},t),Wi(()=>({e:x()===`open`,t:x()===`closing`,a:x()===`open`||x()===`closing`?`opacity`:``}),({e,t:n,a:r},i)=>{e!==i?.e&&t.classList.toggle(`is-open`,e),n!==i?.t&&t.classList.toggle(`is-closing`,n),r!==i?.a&&ga(t,`will-change`,r)}),ka(),t})(),(()=>{var t=z(mc),n=t.firstChild,[r,a]=Oa(n.nextSibling),o=r.nextSibling;return ya(()=>e=>{i=e,oe(ae),Ee()},t),R(t,I(Oi,{get when(){return e.showCloseButton!==!1},get children(){return I(uc,{class:`secondary-action reader-sheet-close`,type:`button`,get"aria-label"(){return e.closeLabel},get onClick(){return e.onClose},get children(){return I(Us,{})}})}}),r,a),R(o,ba(()=>e.children)),Wi(()=>({e:e.id,t:e.placement,a:e.ariaLabelledBy,o:e.ariaLabelledBy===void 0?e.ariaLabel:void 0,i:`${e.id}-body`}),({e,t:n,a:r,o:i,i:a},s)=>{e!==s?.e&&da(t,`id`,e),n!==s?.t&&da(t,`data-placement`,n),r!==s?.a&&da(t,`aria-labelledby`,r),i!==s?.o&&da(t,`aria-label`,i),a!==s?.i&&da(o,`id`,a)}),t})()]}function Dc(){customElements.get(`reader-sheet-layer`)===void 0&&fo(`reader-sheet-layer`,hc,(e,{element:t})=>{let n={id:e.sheetId,open:e.open,placement:e.placement,onClose:e.onClose,closeLabel:e.closeLabel,children:e.content,...e.closeIcon===void 0?{}:{closeIcon:e.closeIcon},...e.showCloseButton===void 0?{}:{showCloseButton:e.showCloseButton},...e.dismissOnSwipe===void 0?{}:{dismissOnSwipe:e.dismissOnSwipe},...e.initialFocusSelector===void 0?{}:{initialFocusSelector:e.initialFocusSelector}};return Ec(e.accessibleLabelledBy===void 0?{...n,ariaLabel:e.accessibleLabel??``}:{...n,ariaLabelledBy:e.accessibleLabelledBy},t)})}function Oc(e,t){return po(t,e)}function kc(e,t){return mo(t,e)}ta([`click`]);var V;(function(e){e.assertEqual=e=>{};function t(e){}e.assertIs=t;function n(e){throw Error()}e.assertNever=n,e.arrayToEnum=e=>{let t={};for(let n of e)t[n]=n;return t},e.getValidEnumValues=t=>{let n=e.objectKeys(t).filter(e=>typeof t[t[e]]!=`number`),r={};for(let e of n)r[e]=t[e];return e.objectValues(r)},e.objectValues=t=>e.objectKeys(t).map(function(e){return t[e]}),e.objectKeys=typeof Object.keys==`function`?e=>Object.keys(e):e=>{let t=[];for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t},e.find=(e,t)=>{for(let n of e)if(t(n))return n},e.isInteger=typeof Number.isInteger==`function`?e=>Number.isInteger(e):e=>typeof e==`number`&&Number.isFinite(e)&&Math.floor(e)===e;function r(e,t=` | `){return e.map(e=>typeof e==`string`?`'${e}'`:e).join(t)}e.joinValues=r,e.jsonStringifyReplacer=(e,t)=>typeof t==`bigint`?t.toString():t})(V||={});var Ac;(function(e){e.mergeShapes=(e,t)=>({...e,...t})})(Ac||={});var H=V.arrayToEnum([`string`,`nan`,`number`,`integer`,`float`,`boolean`,`date`,`bigint`,`symbol`,`function`,`undefined`,`null`,`array`,`object`,`unknown`,`promise`,`void`,`never`,`map`,`set`]),jc=e=>{switch(typeof e){case`undefined`:return H.undefined;case`string`:return H.string;case`number`:return Number.isNaN(e)?H.nan:H.number;case`boolean`:return H.boolean;case`function`:return H.function;case`bigint`:return H.bigint;case`symbol`:return H.symbol;case`object`:return Array.isArray(e)?H.array:e===null?H.null:e.then&&typeof e.then==`function`&&e.catch&&typeof e.catch==`function`?H.promise:typeof Map<`u`&&e instanceof Map?H.map:typeof Set<`u`&&e instanceof Set?H.set:typeof Date<`u`&&e instanceof Date?H.date:H.object;default:return H.unknown}},U=V.arrayToEnum([`invalid_type`,`invalid_literal`,`custom`,`invalid_union`,`invalid_union_discriminator`,`invalid_enum_value`,`unrecognized_keys`,`invalid_arguments`,`invalid_return_type`,`invalid_date`,`invalid_string`,`too_small`,`too_big`,`invalid_intersection_types`,`not_multiple_of`,`not_finite`]),Mc=class e extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=e=>{this.issues=[...this.issues,e]},this.addIssues=(e=[])=>{this.issues=[...this.issues,...e]};let t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name=`ZodError`,this.issues=e}format(e){let t=e||function(e){return e.message},n={_errors:[]},r=e=>{for(let i of e.issues)if(i.code===`invalid_union`)i.unionErrors.map(r);else if(i.code===`invalid_return_type`)r(i.returnTypeError);else if(i.code===`invalid_arguments`)r(i.argumentsError);else if(i.path.length===0)n._errors.push(t(i));else{let e=n,r=0;for(;r<i.path.length;){let n=i.path[r];r===i.path.length-1?(e[n]=e[n]||{_errors:[]},e[n]._errors.push(t(i))):e[n]=e[n]||{_errors:[]},e=e[n],r++}}};return r(this),n}static assert(t){if(!(t instanceof e))throw Error(`Not a ZodError: ${t}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,V.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=e=>e.message){let t={},n=[];for(let r of this.issues)if(r.path.length>0){let n=r.path[0];t[n]=t[n]||[],t[n].push(e(r))}else n.push(e(r));return{formErrors:n,fieldErrors:t}}get formErrors(){return this.flatten()}};Mc.create=e=>new Mc(e);var Nc=(e,t)=>{let n;switch(e.code){case U.invalid_type:n=e.received===H.undefined?`Required`:`Expected ${e.expected}, received ${e.received}`;break;case U.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,V.jsonStringifyReplacer)}`;break;case U.unrecognized_keys:n=`Unrecognized key(s) in object: ${V.joinValues(e.keys,`, `)}`;break;case U.invalid_union:n=`Invalid input`;break;case U.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${V.joinValues(e.options)}`;break;case U.invalid_enum_value:n=`Invalid enum value. Expected ${V.joinValues(e.options)}, received '${e.received}'`;break;case U.invalid_arguments:n=`Invalid function arguments`;break;case U.invalid_return_type:n=`Invalid function return type`;break;case U.invalid_date:n=`Invalid date`;break;case U.invalid_string:typeof e.validation==`object`?`includes`in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position==`number`&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):`startsWith`in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:`endsWith`in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:V.assertNever(e.validation):n=e.validation===`regex`?`Invalid`:`Invalid ${e.validation}`;break;case U.too_small:n=e.type===`array`?`Array must contain ${e.exact?`exactly`:e.inclusive?`at least`:`more than`} ${e.minimum} element(s)`:e.type===`string`?`String must contain ${e.exact?`exactly`:e.inclusive?`at least`:`over`} ${e.minimum} character(s)`:e.type===`number`||e.type===`bigint`?`Number must be ${e.exact?`exactly equal to `:e.inclusive?`greater than or equal to `:`greater than `}${e.minimum}`:e.type===`date`?`Date must be ${e.exact?`exactly equal to `:e.inclusive?`greater than or equal to `:`greater than `}${new Date(Number(e.minimum))}`:`Invalid input`;break;case U.too_big:n=e.type===`array`?`Array must contain ${e.exact?`exactly`:e.inclusive?`at most`:`less than`} ${e.maximum} element(s)`:e.type===`string`?`String must contain ${e.exact?`exactly`:e.inclusive?`at most`:`under`} ${e.maximum} character(s)`:e.type===`number`?`Number must be ${e.exact?`exactly`:e.inclusive?`less than or equal to`:`less than`} ${e.maximum}`:e.type===`bigint`?`BigInt must be ${e.exact?`exactly`:e.inclusive?`less than or equal to`:`less than`} ${e.maximum}`:e.type===`date`?`Date must be ${e.exact?`exactly`:e.inclusive?`smaller than or equal to`:`smaller than`} ${new Date(Number(e.maximum))}`:`Invalid input`;break;case U.custom:n=`Invalid input`;break;case U.invalid_intersection_types:n=`Intersection results could not be merged`;break;case U.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case U.not_finite:n=`Number must be finite`;break;default:n=t.defaultError,V.assertNever(e)}return{message:n}},Pc=Nc;function Fc(){return Pc}var Ic=e=>{let{data:t,path:n,errorMaps:r,issueData:i}=e,a=[...n,...i.path||[]],o={...i,path:a};if(i.message!==void 0)return{...i,path:a,message:i.message};let s=``,c=r.filter(e=>!!e).slice().reverse();for(let e of c)s=e(o,{data:t,defaultError:s}).message;return{...i,path:a,message:s}};function W(e,t){let n=Fc(),r=Ic({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,n,n===Nc?void 0:Nc].filter(e=>!!e)});e.common.issues.push(r)}var Lc=class e{constructor(){this.value=`valid`}dirty(){this.value===`valid`&&(this.value=`dirty`)}abort(){this.value!==`aborted`&&(this.value=`aborted`)}static mergeArray(e,t){let n=[];for(let r of t){if(r.status===`aborted`)return G;r.status===`dirty`&&e.dirty(),n.push(r.value)}return{status:e.value,value:n}}static async mergeObjectAsync(t,n){let r=[];for(let e of n){let t=await e.key,n=await e.value;r.push({key:t,value:n})}return e.mergeObjectSync(t,r)}static mergeObjectSync(e,t){let n={};for(let r of t){let{key:t,value:i}=r;if(t.status===`aborted`||i.status===`aborted`)return G;t.status===`dirty`&&e.dirty(),i.status===`dirty`&&e.dirty(),t.value!==`__proto__`&&(i.value!==void 0||r.alwaysSet)&&(n[t.value]=i.value)}return{status:e.value,value:n}}},G=Object.freeze({status:`aborted`}),Rc=e=>({status:`dirty`,value:e}),zc=e=>({status:`valid`,value:e}),Bc=e=>e.status===`aborted`,Vc=e=>e.status===`dirty`,Hc=e=>e.status===`valid`,Uc=e=>typeof Promise<`u`&&e instanceof Promise,K;(function(e){e.errToObj=e=>typeof e==`string`?{message:e}:e||{},e.toString=e=>typeof e==`string`?e:e?.message})(K||={});var Wc=class{constructor(e,t,n,r){this._cachedPath=[],this.parent=e,this.data=t,this._path=n,this._key=r}get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}},Gc=(e,t)=>{if(Hc(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw Error(`Validation failed but no issues detected.`);return{success:!1,get error(){if(this._error)return this._error;let t=new Mc(e.common.issues);return this._error=t,this._error}}};function q(e){if(!e)return{};let{errorMap:t,invalid_type_error:n,required_error:r,description:i}=e;if(t&&(n||r))throw Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:i}:{errorMap:(t,i)=>{let{message:a}=e;return t.code===`invalid_enum_value`?{message:a??i.defaultError}:i.data===void 0?{message:a??r??i.defaultError}:t.code===`invalid_type`?{message:a??n??i.defaultError}:{message:i.defaultError}},description:i}}var J=class{get description(){return this._def.description}_getType(e){return jc(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:jc(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new Lc,ctx:{common:e.parent.common,data:e.data,parsedType:jc(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){let t=this._parse(e);if(Uc(t))throw Error(`Synchronous parse encountered promise.`);return t}_parseAsync(e){let t=this._parse(e);return Promise.resolve(t)}parse(e,t){let n=this.safeParse(e,t);if(n.success)return n.data;throw n.error}safeParse(e,t){let n={common:{issues:[],async:t?.async??!1,contextualErrorMap:t?.errorMap},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:jc(e)};return Gc(n,this._parseSync({data:e,path:n.path,parent:n}))}"~validate"(e){let t={common:{issues:[],async:!!this[`~standard`].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:jc(e)};if(!this[`~standard`].async)try{let n=this._parseSync({data:e,path:[],parent:t});return Hc(n)?{value:n.value}:{issues:t.common.issues}}catch(e){e?.message?.toLowerCase()?.includes(`encountered`)&&(this[`~standard`].async=!0),t.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:t}).then(e=>Hc(e)?{value:e.value}:{issues:t.common.issues})}async parseAsync(e,t){let n=await this.safeParseAsync(e,t);if(n.success)return n.data;throw n.error}async safeParseAsync(e,t){let n={common:{issues:[],contextualErrorMap:t?.errorMap,async:!0},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:jc(e)},r=this._parse({data:e,path:n.path,parent:n});return Gc(n,await(Uc(r)?r:Promise.resolve(r)))}refine(e,t){let n=e=>typeof t==`string`||t===void 0?{message:t}:typeof t==`function`?t(e):t;return this._refinement((t,r)=>{let i=e(t),a=()=>r.addIssue({code:U.custom,...n(t)});return typeof Promise<`u`&&i instanceof Promise?i.then(e=>e?!0:(a(),!1)):i?!0:(a(),!1)})}refinement(e,t){return this._refinement((n,r)=>e(n)?!0:(r.addIssue(typeof t==`function`?t(n,r):t),!1))}_refinement(e){return new ql({schema:this,typeName:Y.ZodEffects,effect:{type:`refinement`,refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this[`~standard`]={version:1,vendor:`zod`,validate:e=>this[`~validate`](e)}}optional(){return Jl.create(this,this._def)}nullable(){return Yl.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return kl.create(this)}promise(){return Kl.create(this,this._def)}or(e){return Ml.create([this,e],this._def)}and(e){return Il.create(this,e,this._def)}transform(e){return new ql({...q(this._def),schema:this,typeName:Y.ZodEffects,effect:{type:`transform`,transform:e}})}default(e){let t=typeof e==`function`?e:()=>e;return new Xl({...q(this._def),innerType:this,defaultValue:t,typeName:Y.ZodDefault})}brand(){return new $l({typeName:Y.ZodBranded,type:this,...q(this._def)})}catch(e){let t=typeof e==`function`?e:()=>e;return new Zl({...q(this._def),innerType:this,catchValue:t,typeName:Y.ZodCatch})}describe(e){let t=this.constructor;return new t({...this._def,description:e})}pipe(e){return eu.create(this,e)}readonly(){return tu.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}},Kc=/^c[^\s-]{8,}$/i,qc=/^[0-9a-z]+$/,Jc=/^[0-9A-HJKMNP-TV-Z]{26}$/i,Yc=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,Xc=/^[a-z0-9_-]{21}$/i,Zc=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,Qc=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,$c=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,el=`^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`,tl,nl=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,rl=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,il=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,al=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,ol=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,sl=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,cl=`((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`,ll=RegExp(`^${cl}$`);function ul(e){let t=`[0-5]\\d`;return e.precision?t=`${t}\\.\\d{${e.precision}}`:e.precision??(t=`${t}(\\.\\d+)?`),`([01]\\d|2[0-3]):[0-5]\\d(:${t})${e.precision?`+`:`?`}`}function dl(e){return RegExp(`^${ul(e)}$`)}function fl(e){let t=`${cl}T${ul(e)}`,n=[];return n.push(e.local?`Z?`:`Z`),e.offset&&n.push(`([+-]\\d{2}:?\\d{2})`),t=`${t}(${n.join(`|`)})`,RegExp(`^${t}$`)}function pl(e,t){return!!((t===`v4`||!t)&&nl.test(e)||(t===`v6`||!t)&&il.test(e))}function ml(e,t){if(!Zc.test(e))return!1;try{let[n]=e.split(`.`);if(!n)return!1;let r=n.replace(/-/g,`+`).replace(/_/g,`/`).padEnd(n.length+(4-n.length%4)%4,`=`),i=JSON.parse(atob(r));return!(typeof i!=`object`||!i||`typ`in i&&i?.typ!==`JWT`||!i.alg||t&&i.alg!==t)}catch{return!1}}function hl(e,t){return!!((t===`v4`||!t)&&rl.test(e)||(t===`v6`||!t)&&al.test(e))}var gl=class e extends J{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==H.string){let t=this._getOrReturnCtx(e);return W(t,{code:U.invalid_type,expected:H.string,received:t.parsedType}),G}let t=new Lc,n;for(let r of this._def.checks)if(r.kind===`min`)e.data.length<r.value&&(n=this._getOrReturnCtx(e,n),W(n,{code:U.too_small,minimum:r.value,type:`string`,inclusive:!0,exact:!1,message:r.message}),t.dirty());else if(r.kind===`max`)e.data.length>r.value&&(n=this._getOrReturnCtx(e,n),W(n,{code:U.too_big,maximum:r.value,type:`string`,inclusive:!0,exact:!1,message:r.message}),t.dirty());else if(r.kind===`length`){let i=e.data.length>r.value,a=e.data.length<r.value;(i||a)&&(n=this._getOrReturnCtx(e,n),i?W(n,{code:U.too_big,maximum:r.value,type:`string`,inclusive:!0,exact:!0,message:r.message}):a&&W(n,{code:U.too_small,minimum:r.value,type:`string`,inclusive:!0,exact:!0,message:r.message}),t.dirty())}else if(r.kind===`email`)$c.test(e.data)||(n=this._getOrReturnCtx(e,n),W(n,{validation:`email`,code:U.invalid_string,message:r.message}),t.dirty());else if(r.kind===`emoji`)tl||=new RegExp(el,`u`),tl.test(e.data)||(n=this._getOrReturnCtx(e,n),W(n,{validation:`emoji`,code:U.invalid_string,message:r.message}),t.dirty());else if(r.kind===`uuid`)Yc.test(e.data)||(n=this._getOrReturnCtx(e,n),W(n,{validation:`uuid`,code:U.invalid_string,message:r.message}),t.dirty());else if(r.kind===`nanoid`)Xc.test(e.data)||(n=this._getOrReturnCtx(e,n),W(n,{validation:`nanoid`,code:U.invalid_string,message:r.message}),t.dirty());else if(r.kind===`cuid`)Kc.test(e.data)||(n=this._getOrReturnCtx(e,n),W(n,{validation:`cuid`,code:U.invalid_string,message:r.message}),t.dirty());else if(r.kind===`cuid2`)qc.test(e.data)||(n=this._getOrReturnCtx(e,n),W(n,{validation:`cuid2`,code:U.invalid_string,message:r.message}),t.dirty());else if(r.kind===`ulid`)Jc.test(e.data)||(n=this._getOrReturnCtx(e,n),W(n,{validation:`ulid`,code:U.invalid_string,message:r.message}),t.dirty());else if(r.kind===`url`)try{new URL(e.data)}catch{n=this._getOrReturnCtx(e,n),W(n,{validation:`url`,code:U.invalid_string,message:r.message}),t.dirty()}else r.kind===`regex`?(r.regex.lastIndex=0,r.regex.test(e.data)||(n=this._getOrReturnCtx(e,n),W(n,{validation:`regex`,code:U.invalid_string,message:r.message}),t.dirty())):r.kind===`trim`?e.data=e.data.trim():r.kind===`includes`?e.data.includes(r.value,r.position)||(n=this._getOrReturnCtx(e,n),W(n,{code:U.invalid_string,validation:{includes:r.value,position:r.position},message:r.message}),t.dirty()):r.kind===`toLowerCase`?e.data=e.data.toLowerCase():r.kind===`toUpperCase`?e.data=e.data.toUpperCase():r.kind===`startsWith`?e.data.startsWith(r.value)||(n=this._getOrReturnCtx(e,n),W(n,{code:U.invalid_string,validation:{startsWith:r.value},message:r.message}),t.dirty()):r.kind===`endsWith`?e.data.endsWith(r.value)||(n=this._getOrReturnCtx(e,n),W(n,{code:U.invalid_string,validation:{endsWith:r.value},message:r.message}),t.dirty()):r.kind===`datetime`?fl(r).test(e.data)||(n=this._getOrReturnCtx(e,n),W(n,{code:U.invalid_string,validation:`datetime`,message:r.message}),t.dirty()):r.kind===`date`?ll.test(e.data)||(n=this._getOrReturnCtx(e,n),W(n,{code:U.invalid_string,validation:`date`,message:r.message}),t.dirty()):r.kind===`time`?dl(r).test(e.data)||(n=this._getOrReturnCtx(e,n),W(n,{code:U.invalid_string,validation:`time`,message:r.message}),t.dirty()):r.kind===`duration`?Qc.test(e.data)||(n=this._getOrReturnCtx(e,n),W(n,{validation:`duration`,code:U.invalid_string,message:r.message}),t.dirty()):r.kind===`ip`?pl(e.data,r.version)||(n=this._getOrReturnCtx(e,n),W(n,{validation:`ip`,code:U.invalid_string,message:r.message}),t.dirty()):r.kind===`jwt`?ml(e.data,r.alg)||(n=this._getOrReturnCtx(e,n),W(n,{validation:`jwt`,code:U.invalid_string,message:r.message}),t.dirty()):r.kind===`cidr`?hl(e.data,r.version)||(n=this._getOrReturnCtx(e,n),W(n,{validation:`cidr`,code:U.invalid_string,message:r.message}),t.dirty()):r.kind===`base64`?ol.test(e.data)||(n=this._getOrReturnCtx(e,n),W(n,{validation:`base64`,code:U.invalid_string,message:r.message}),t.dirty()):r.kind===`base64url`?sl.test(e.data)||(n=this._getOrReturnCtx(e,n),W(n,{validation:`base64url`,code:U.invalid_string,message:r.message}),t.dirty()):V.assertNever(r);return{status:t.value,value:e.data}}_regex(e,t,n){return this.refinement(t=>e.test(t),{validation:t,code:U.invalid_string,...K.errToObj(n)})}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}email(e){return this._addCheck({kind:`email`,...K.errToObj(e)})}url(e){return this._addCheck({kind:`url`,...K.errToObj(e)})}emoji(e){return this._addCheck({kind:`emoji`,...K.errToObj(e)})}uuid(e){return this._addCheck({kind:`uuid`,...K.errToObj(e)})}nanoid(e){return this._addCheck({kind:`nanoid`,...K.errToObj(e)})}cuid(e){return this._addCheck({kind:`cuid`,...K.errToObj(e)})}cuid2(e){return this._addCheck({kind:`cuid2`,...K.errToObj(e)})}ulid(e){return this._addCheck({kind:`ulid`,...K.errToObj(e)})}base64(e){return this._addCheck({kind:`base64`,...K.errToObj(e)})}base64url(e){return this._addCheck({kind:`base64url`,...K.errToObj(e)})}jwt(e){return this._addCheck({kind:`jwt`,...K.errToObj(e)})}ip(e){return this._addCheck({kind:`ip`,...K.errToObj(e)})}cidr(e){return this._addCheck({kind:`cidr`,...K.errToObj(e)})}datetime(e){return typeof e==`string`?this._addCheck({kind:`datetime`,precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:`datetime`,precision:e?.precision===void 0?null:e?.precision,offset:e?.offset??!1,local:e?.local??!1,...K.errToObj(e?.message)})}date(e){return this._addCheck({kind:`date`,message:e})}time(e){return typeof e==`string`?this._addCheck({kind:`time`,precision:null,message:e}):this._addCheck({kind:`time`,precision:e?.precision===void 0?null:e?.precision,...K.errToObj(e?.message)})}duration(e){return this._addCheck({kind:`duration`,...K.errToObj(e)})}regex(e,t){return this._addCheck({kind:`regex`,regex:e,...K.errToObj(t)})}includes(e,t){return this._addCheck({kind:`includes`,value:e,position:t?.position,...K.errToObj(t?.message)})}startsWith(e,t){return this._addCheck({kind:`startsWith`,value:e,...K.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:`endsWith`,value:e,...K.errToObj(t)})}min(e,t){return this._addCheck({kind:`min`,value:e,...K.errToObj(t)})}max(e,t){return this._addCheck({kind:`max`,value:e,...K.errToObj(t)})}length(e,t){return this._addCheck({kind:`length`,value:e,...K.errToObj(t)})}nonempty(e){return this.min(1,K.errToObj(e))}trim(){return new e({...this._def,checks:[...this._def.checks,{kind:`trim`}]})}toLowerCase(){return new e({...this._def,checks:[...this._def.checks,{kind:`toLowerCase`}]})}toUpperCase(){return new e({...this._def,checks:[...this._def.checks,{kind:`toUpperCase`}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind===`datetime`)}get isDate(){return!!this._def.checks.find(e=>e.kind===`date`)}get isTime(){return!!this._def.checks.find(e=>e.kind===`time`)}get isDuration(){return!!this._def.checks.find(e=>e.kind===`duration`)}get isEmail(){return!!this._def.checks.find(e=>e.kind===`email`)}get isURL(){return!!this._def.checks.find(e=>e.kind===`url`)}get isEmoji(){return!!this._def.checks.find(e=>e.kind===`emoji`)}get isUUID(){return!!this._def.checks.find(e=>e.kind===`uuid`)}get isNANOID(){return!!this._def.checks.find(e=>e.kind===`nanoid`)}get isCUID(){return!!this._def.checks.find(e=>e.kind===`cuid`)}get isCUID2(){return!!this._def.checks.find(e=>e.kind===`cuid2`)}get isULID(){return!!this._def.checks.find(e=>e.kind===`ulid`)}get isIP(){return!!this._def.checks.find(e=>e.kind===`ip`)}get isCIDR(){return!!this._def.checks.find(e=>e.kind===`cidr`)}get isBase64(){return!!this._def.checks.find(e=>e.kind===`base64`)}get isBase64url(){return!!this._def.checks.find(e=>e.kind===`base64url`)}get minLength(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e}};gl.create=e=>new gl({checks:[],typeName:Y.ZodString,coerce:e?.coerce??!1,...q(e)});function _l(e,t){let n=(e.toString().split(`.`)[1]||``).length,r=(t.toString().split(`.`)[1]||``).length,i=n>r?n:r;return Number.parseInt(e.toFixed(i).replace(`.`,``))%Number.parseInt(t.toFixed(i).replace(`.`,``))/10**i}var vl=class e extends J{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==H.number){let t=this._getOrReturnCtx(e);return W(t,{code:U.invalid_type,expected:H.number,received:t.parsedType}),G}let t,n=new Lc;for(let r of this._def.checks)r.kind===`int`?V.isInteger(e.data)||(t=this._getOrReturnCtx(e,t),W(t,{code:U.invalid_type,expected:`integer`,received:`float`,message:r.message}),n.dirty()):r.kind===`min`?(r.inclusive?e.data<r.value:e.data<=r.value)&&(t=this._getOrReturnCtx(e,t),W(t,{code:U.too_small,minimum:r.value,type:`number`,inclusive:r.inclusive,exact:!1,message:r.message}),n.dirty()):r.kind===`max`?(r.inclusive?e.data>r.value:e.data>=r.value)&&(t=this._getOrReturnCtx(e,t),W(t,{code:U.too_big,maximum:r.value,type:`number`,inclusive:r.inclusive,exact:!1,message:r.message}),n.dirty()):r.kind===`multipleOf`?_l(e.data,r.value)!==0&&(t=this._getOrReturnCtx(e,t),W(t,{code:U.not_multiple_of,multipleOf:r.value,message:r.message}),n.dirty()):r.kind===`finite`?Number.isFinite(e.data)||(t=this._getOrReturnCtx(e,t),W(t,{code:U.not_finite,message:r.message}),n.dirty()):V.assertNever(r);return{status:n.value,value:e.data}}gte(e,t){return this.setLimit(`min`,e,!0,K.toString(t))}gt(e,t){return this.setLimit(`min`,e,!1,K.toString(t))}lte(e,t){return this.setLimit(`max`,e,!0,K.toString(t))}lt(e,t){return this.setLimit(`max`,e,!1,K.toString(t))}setLimit(t,n,r,i){return new e({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:K.toString(i)}]})}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}int(e){return this._addCheck({kind:`int`,message:K.toString(e)})}positive(e){return this._addCheck({kind:`min`,value:0,inclusive:!1,message:K.toString(e)})}negative(e){return this._addCheck({kind:`max`,value:0,inclusive:!1,message:K.toString(e)})}nonpositive(e){return this._addCheck({kind:`max`,value:0,inclusive:!0,message:K.toString(e)})}nonnegative(e){return this._addCheck({kind:`min`,value:0,inclusive:!0,message:K.toString(e)})}multipleOf(e,t){return this._addCheck({kind:`multipleOf`,value:e,message:K.toString(t)})}finite(e){return this._addCheck({kind:`finite`,message:K.toString(e)})}safe(e){return this._addCheck({kind:`min`,inclusive:!0,value:-(2**53-1),message:K.toString(e)})._addCheck({kind:`max`,inclusive:!0,value:2**53-1,message:K.toString(e)})}get minValue(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind===`int`||e.kind===`multipleOf`&&V.isInteger(e.value))}get isFinite(){let e=null,t=null;for(let n of this._def.checks)if(n.kind===`finite`||n.kind===`int`||n.kind===`multipleOf`)return!0;else n.kind===`min`?(t===null||n.value>t)&&(t=n.value):n.kind===`max`&&(e===null||n.value<e)&&(e=n.value);return Number.isFinite(t)&&Number.isFinite(e)}};vl.create=e=>new vl({checks:[],typeName:Y.ZodNumber,coerce:e?.coerce||!1,...q(e)});var yl=class e extends J{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==H.bigint)return this._getInvalidInput(e);let t,n=new Lc;for(let r of this._def.checks)r.kind===`min`?(r.inclusive?e.data<r.value:e.data<=r.value)&&(t=this._getOrReturnCtx(e,t),W(t,{code:U.too_small,type:`bigint`,minimum:r.value,inclusive:r.inclusive,message:r.message}),n.dirty()):r.kind===`max`?(r.inclusive?e.data>r.value:e.data>=r.value)&&(t=this._getOrReturnCtx(e,t),W(t,{code:U.too_big,type:`bigint`,maximum:r.value,inclusive:r.inclusive,message:r.message}),n.dirty()):r.kind===`multipleOf`?e.data%r.value!==BigInt(0)&&(t=this._getOrReturnCtx(e,t),W(t,{code:U.not_multiple_of,multipleOf:r.value,message:r.message}),n.dirty()):V.assertNever(r);return{status:n.value,value:e.data}}_getInvalidInput(e){let t=this._getOrReturnCtx(e);return W(t,{code:U.invalid_type,expected:H.bigint,received:t.parsedType}),G}gte(e,t){return this.setLimit(`min`,e,!0,K.toString(t))}gt(e,t){return this.setLimit(`min`,e,!1,K.toString(t))}lte(e,t){return this.setLimit(`max`,e,!0,K.toString(t))}lt(e,t){return this.setLimit(`max`,e,!1,K.toString(t))}setLimit(t,n,r,i){return new e({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:K.toString(i)}]})}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}positive(e){return this._addCheck({kind:`min`,value:BigInt(0),inclusive:!1,message:K.toString(e)})}negative(e){return this._addCheck({kind:`max`,value:BigInt(0),inclusive:!1,message:K.toString(e)})}nonpositive(e){return this._addCheck({kind:`max`,value:BigInt(0),inclusive:!0,message:K.toString(e)})}nonnegative(e){return this._addCheck({kind:`min`,value:BigInt(0),inclusive:!0,message:K.toString(e)})}multipleOf(e,t){return this._addCheck({kind:`multipleOf`,value:e,message:K.toString(t)})}get minValue(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e}};yl.create=e=>new yl({checks:[],typeName:Y.ZodBigInt,coerce:e?.coerce??!1,...q(e)});var bl=class extends J{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==H.boolean){let t=this._getOrReturnCtx(e);return W(t,{code:U.invalid_type,expected:H.boolean,received:t.parsedType}),G}return zc(e.data)}};bl.create=e=>new bl({typeName:Y.ZodBoolean,coerce:e?.coerce||!1,...q(e)});var xl=class e extends J{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==H.date){let t=this._getOrReturnCtx(e);return W(t,{code:U.invalid_type,expected:H.date,received:t.parsedType}),G}if(Number.isNaN(e.data.getTime()))return W(this._getOrReturnCtx(e),{code:U.invalid_date}),G;let t=new Lc,n;for(let r of this._def.checks)r.kind===`min`?e.data.getTime()<r.value&&(n=this._getOrReturnCtx(e,n),W(n,{code:U.too_small,message:r.message,inclusive:!0,exact:!1,minimum:r.value,type:`date`}),t.dirty()):r.kind===`max`?e.data.getTime()>r.value&&(n=this._getOrReturnCtx(e,n),W(n,{code:U.too_big,message:r.message,inclusive:!0,exact:!1,maximum:r.value,type:`date`}),t.dirty()):V.assertNever(r);return{status:t.value,value:new Date(e.data.getTime())}}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}min(e,t){return this._addCheck({kind:`min`,value:e.getTime(),message:K.toString(t)})}max(e,t){return this._addCheck({kind:`max`,value:e.getTime(),message:K.toString(t)})}get minDate(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e==null?null:new Date(e)}get maxDate(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e==null?null:new Date(e)}};xl.create=e=>new xl({checks:[],coerce:e?.coerce||!1,typeName:Y.ZodDate,...q(e)});var Sl=class extends J{_parse(e){if(this._getType(e)!==H.symbol){let t=this._getOrReturnCtx(e);return W(t,{code:U.invalid_type,expected:H.symbol,received:t.parsedType}),G}return zc(e.data)}};Sl.create=e=>new Sl({typeName:Y.ZodSymbol,...q(e)});var Cl=class extends J{_parse(e){if(this._getType(e)!==H.undefined){let t=this._getOrReturnCtx(e);return W(t,{code:U.invalid_type,expected:H.undefined,received:t.parsedType}),G}return zc(e.data)}};Cl.create=e=>new Cl({typeName:Y.ZodUndefined,...q(e)});var wl=class extends J{_parse(e){if(this._getType(e)!==H.null){let t=this._getOrReturnCtx(e);return W(t,{code:U.invalid_type,expected:H.null,received:t.parsedType}),G}return zc(e.data)}};wl.create=e=>new wl({typeName:Y.ZodNull,...q(e)});var Tl=class extends J{constructor(){super(...arguments),this._any=!0}_parse(e){return zc(e.data)}};Tl.create=e=>new Tl({typeName:Y.ZodAny,...q(e)});var El=class extends J{constructor(){super(...arguments),this._unknown=!0}_parse(e){return zc(e.data)}};El.create=e=>new El({typeName:Y.ZodUnknown,...q(e)});var Dl=class extends J{_parse(e){let t=this._getOrReturnCtx(e);return W(t,{code:U.invalid_type,expected:H.never,received:t.parsedType}),G}};Dl.create=e=>new Dl({typeName:Y.ZodNever,...q(e)});var Ol=class extends J{_parse(e){if(this._getType(e)!==H.undefined){let t=this._getOrReturnCtx(e);return W(t,{code:U.invalid_type,expected:H.void,received:t.parsedType}),G}return zc(e.data)}};Ol.create=e=>new Ol({typeName:Y.ZodVoid,...q(e)});var kl=class e extends J{_parse(e){let{ctx:t,status:n}=this._processInputParams(e),r=this._def;if(t.parsedType!==H.array)return W(t,{code:U.invalid_type,expected:H.array,received:t.parsedType}),G;if(r.exactLength!==null){let e=t.data.length>r.exactLength.value,i=t.data.length<r.exactLength.value;(e||i)&&(W(t,{code:e?U.too_big:U.too_small,minimum:i?r.exactLength.value:void 0,maximum:e?r.exactLength.value:void 0,type:`array`,inclusive:!0,exact:!0,message:r.exactLength.message}),n.dirty())}if(r.minLength!==null&&t.data.length<r.minLength.value&&(W(t,{code:U.too_small,minimum:r.minLength.value,type:`array`,inclusive:!0,exact:!1,message:r.minLength.message}),n.dirty()),r.maxLength!==null&&t.data.length>r.maxLength.value&&(W(t,{code:U.too_big,maximum:r.maxLength.value,type:`array`,inclusive:!0,exact:!1,message:r.maxLength.message}),n.dirty()),t.common.async)return Promise.all([...t.data].map((e,n)=>r.type._parseAsync(new Wc(t,e,t.path,n)))).then(e=>Lc.mergeArray(n,e));let i=[...t.data].map((e,n)=>r.type._parseSync(new Wc(t,e,t.path,n)));return Lc.mergeArray(n,i)}get element(){return this._def.type}min(t,n){return new e({...this._def,minLength:{value:t,message:K.toString(n)}})}max(t,n){return new e({...this._def,maxLength:{value:t,message:K.toString(n)}})}length(t,n){return new e({...this._def,exactLength:{value:t,message:K.toString(n)}})}nonempty(e){return this.min(1,e)}};kl.create=(e,t)=>new kl({type:e,minLength:null,maxLength:null,exactLength:null,typeName:Y.ZodArray,...q(t)});function Al(e){if(e instanceof jl){let t={};for(let n in e.shape){let r=e.shape[n];t[n]=Jl.create(Al(r))}return new jl({...e._def,shape:()=>t})}return e instanceof kl?new kl({...e._def,type:Al(e.element)}):e instanceof Jl?Jl.create(Al(e.unwrap())):e instanceof Yl?Yl.create(Al(e.unwrap())):e instanceof Ll?Ll.create(e.items.map(e=>Al(e))):e}var jl=class e extends J{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;let e=this._def.shape(),t=V.objectKeys(e);return this._cached={shape:e,keys:t},this._cached}_parse(e){if(this._getType(e)!==H.object){let t=this._getOrReturnCtx(e);return W(t,{code:U.invalid_type,expected:H.object,received:t.parsedType}),G}let{status:t,ctx:n}=this._processInputParams(e),{shape:r,keys:i}=this._getCached(),a=[];if(!(this._def.catchall instanceof Dl&&this._def.unknownKeys===`strip`))for(let e in n.data)i.includes(e)||a.push(e);let o=[];for(let e of i){let t=r[e],i=n.data[e];o.push({key:{status:`valid`,value:e},value:t._parse(new Wc(n,i,n.path,e)),alwaysSet:e in n.data})}if(this._def.catchall instanceof Dl){let e=this._def.unknownKeys;if(e===`passthrough`)for(let e of a)o.push({key:{status:`valid`,value:e},value:{status:`valid`,value:n.data[e]}});else if(e===`strict`)a.length>0&&(W(n,{code:U.unrecognized_keys,keys:a}),t.dirty());else if(e!==`strip`)throw Error(`Internal ZodObject error: invalid unknownKeys value.`)}else{let e=this._def.catchall;for(let t of a){let r=n.data[t];o.push({key:{status:`valid`,value:t},value:e._parse(new Wc(n,r,n.path,t)),alwaysSet:t in n.data})}}return n.common.async?Promise.resolve().then(async()=>{let e=[];for(let t of o){let n=await t.key,r=await t.value;e.push({key:n,value:r,alwaysSet:t.alwaysSet})}return e}).then(e=>Lc.mergeObjectSync(t,e)):Lc.mergeObjectSync(t,o)}get shape(){return this._def.shape()}strict(t){return new e({...this._def,unknownKeys:`strict`,...t===void 0?{}:{errorMap:(e,n)=>{let r=this._def.errorMap?.(e,n).message??n.defaultError;return e.code===`unrecognized_keys`?{message:K.errToObj(t).message??r}:{message:r}}}})}strip(){return new e({...this._def,unknownKeys:`strip`})}passthrough(){return new e({...this._def,unknownKeys:`passthrough`})}extend(t){return new e({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new e({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:Y.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(t){return new e({...this._def,catchall:t})}pick(t){let n={};for(let e of V.objectKeys(t))t[e]&&this.shape[e]&&(n[e]=this.shape[e]);return new e({...this._def,shape:()=>n})}omit(t){let n={};for(let e of V.objectKeys(this.shape))t[e]||(n[e]=this.shape[e]);return new e({...this._def,shape:()=>n})}deepPartial(){return Al(this)}partial(t){let n={};for(let e of V.objectKeys(this.shape)){let r=this.shape[e];n[e]=t&&!t[e]?r:r.optional()}return new e({...this._def,shape:()=>n})}required(t){let n={};for(let e of V.objectKeys(this.shape))if(t&&!t[e])n[e]=this.shape[e];else{let t=this.shape[e];for(;t instanceof Jl;)t=t._def.innerType;n[e]=t}return new e({...this._def,shape:()=>n})}keyof(){return Ul(V.objectKeys(this.shape))}};jl.create=(e,t)=>new jl({shape:()=>e,unknownKeys:`strip`,catchall:Dl.create(),typeName:Y.ZodObject,...q(t)}),jl.strictCreate=(e,t)=>new jl({shape:()=>e,unknownKeys:`strict`,catchall:Dl.create(),typeName:Y.ZodObject,...q(t)}),jl.lazycreate=(e,t)=>new jl({shape:e,unknownKeys:`strip`,catchall:Dl.create(),typeName:Y.ZodObject,...q(t)});var Ml=class extends J{_parse(e){let{ctx:t}=this._processInputParams(e),n=this._def.options;function r(e){for(let t of e)if(t.result.status===`valid`)return t.result;for(let n of e)if(n.result.status===`dirty`)return t.common.issues.push(...n.ctx.common.issues),n.result;let n=e.map(e=>new Mc(e.ctx.common.issues));return W(t,{code:U.invalid_union,unionErrors:n}),G}if(t.common.async)return Promise.all(n.map(async e=>{let n={...t,common:{...t.common,issues:[]},parent:null};return{result:await e._parseAsync({data:t.data,path:t.path,parent:n}),ctx:n}})).then(r);{let e,r=[];for(let i of n){let n={...t,common:{...t.common,issues:[]},parent:null},a=i._parseSync({data:t.data,path:t.path,parent:n});if(a.status===`valid`)return a;a.status===`dirty`&&!e&&(e={result:a,ctx:n}),n.common.issues.length&&r.push(n.common.issues)}if(e)return t.common.issues.push(...e.ctx.common.issues),e.result;let i=r.map(e=>new Mc(e));return W(t,{code:U.invalid_union,unionErrors:i}),G}}get options(){return this._def.options}};Ml.create=(e,t)=>new Ml({options:e,typeName:Y.ZodUnion,...q(t)});var Nl=e=>e instanceof Vl?Nl(e.schema):e instanceof ql?Nl(e.innerType()):e instanceof Hl?[e.value]:e instanceof Wl?e.options:e instanceof Gl?V.objectValues(e.enum):e instanceof Xl?Nl(e._def.innerType):e instanceof Cl?[void 0]:e instanceof wl?[null]:e instanceof Jl?[void 0,...Nl(e.unwrap())]:e instanceof Yl?[null,...Nl(e.unwrap())]:e instanceof $l||e instanceof tu?Nl(e.unwrap()):e instanceof Zl?Nl(e._def.innerType):[],Pl=class e extends J{_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==H.object)return W(t,{code:U.invalid_type,expected:H.object,received:t.parsedType}),G;let n=this.discriminator,r=t.data[n],i=this.optionsMap.get(r);return i?t.common.async?i._parseAsync({data:t.data,path:t.path,parent:t}):i._parseSync({data:t.data,path:t.path,parent:t}):(W(t,{code:U.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[n]}),G)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,n,r){let i=new Map;for(let e of n){let n=Nl(e.shape[t]);if(!n.length)throw Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(let r of n){if(i.has(r))throw Error(`Discriminator property ${String(t)} has duplicate value ${String(r)}`);i.set(r,e)}}return new e({typeName:Y.ZodDiscriminatedUnion,discriminator:t,options:n,optionsMap:i,...q(r)})}};function Fl(e,t){let n=jc(e),r=jc(t);if(e===t)return{valid:!0,data:e};if(n===H.object&&r===H.object){let n=V.objectKeys(t),r=V.objectKeys(e).filter(e=>n.indexOf(e)!==-1),i={...e,...t};for(let n of r){let r=Fl(e[n],t[n]);if(!r.valid)return{valid:!1};i[n]=r.data}return{valid:!0,data:i}}if(n===H.array&&r===H.array){if(e.length!==t.length)return{valid:!1};let n=[];for(let r=0;r<e.length;r++){let i=e[r],a=t[r],o=Fl(i,a);if(!o.valid)return{valid:!1};n.push(o.data)}return{valid:!0,data:n}}return n===H.date&&r===H.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}var Il=class extends J{_parse(e){let{status:t,ctx:n}=this._processInputParams(e),r=(e,r)=>{if(Bc(e)||Bc(r))return G;let i=Fl(e.value,r.value);return i.valid?((Vc(e)||Vc(r))&&t.dirty(),{status:t.value,value:i.data}):(W(n,{code:U.invalid_intersection_types}),G)};return n.common.async?Promise.all([this._def.left._parseAsync({data:n.data,path:n.path,parent:n}),this._def.right._parseAsync({data:n.data,path:n.path,parent:n})]).then(([e,t])=>r(e,t)):r(this._def.left._parseSync({data:n.data,path:n.path,parent:n}),this._def.right._parseSync({data:n.data,path:n.path,parent:n}))}};Il.create=(e,t,n)=>new Il({left:e,right:t,typeName:Y.ZodIntersection,...q(n)});var Ll=class e extends J{_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==H.array)return W(n,{code:U.invalid_type,expected:H.array,received:n.parsedType}),G;if(n.data.length<this._def.items.length)return W(n,{code:U.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:`array`}),G;!this._def.rest&&n.data.length>this._def.items.length&&(W(n,{code:U.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:`array`}),t.dirty());let r=[...n.data].map((e,t)=>{let r=this._def.items[t]||this._def.rest;return r?r._parse(new Wc(n,e,n.path,t)):null}).filter(e=>!!e);return n.common.async?Promise.all(r).then(e=>Lc.mergeArray(t,e)):Lc.mergeArray(t,r)}get items(){return this._def.items}rest(t){return new e({...this._def,rest:t})}};Ll.create=(e,t)=>{if(!Array.isArray(e))throw Error(`You must pass an array of schemas to z.tuple([ ... ])`);return new Ll({items:e,typeName:Y.ZodTuple,rest:null,...q(t)})};var Rl=class e extends J{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==H.object)return W(n,{code:U.invalid_type,expected:H.object,received:n.parsedType}),G;let r=[],i=this._def.keyType,a=this._def.valueType;for(let e in n.data)r.push({key:i._parse(new Wc(n,e,n.path,e)),value:a._parse(new Wc(n,n.data[e],n.path,e)),alwaysSet:e in n.data});return n.common.async?Lc.mergeObjectAsync(t,r):Lc.mergeObjectSync(t,r)}get element(){return this._def.valueType}static create(t,n,r){return n instanceof J?new e({keyType:t,valueType:n,typeName:Y.ZodRecord,...q(r)}):new e({keyType:gl.create(),valueType:t,typeName:Y.ZodRecord,...q(n)})}},zl=class extends J{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==H.map)return W(n,{code:U.invalid_type,expected:H.map,received:n.parsedType}),G;let r=this._def.keyType,i=this._def.valueType,a=[...n.data.entries()].map(([e,t],a)=>({key:r._parse(new Wc(n,e,n.path,[a,`key`])),value:i._parse(new Wc(n,t,n.path,[a,`value`]))}));if(n.common.async){let e=new Map;return Promise.resolve().then(async()=>{for(let n of a){let r=await n.key,i=await n.value;if(r.status===`aborted`||i.status===`aborted`)return G;(r.status===`dirty`||i.status===`dirty`)&&t.dirty(),e.set(r.value,i.value)}return{status:t.value,value:e}})}{let e=new Map;for(let n of a){let r=n.key,i=n.value;if(r.status===`aborted`||i.status===`aborted`)return G;(r.status===`dirty`||i.status===`dirty`)&&t.dirty(),e.set(r.value,i.value)}return{status:t.value,value:e}}}};zl.create=(e,t,n)=>new zl({valueType:t,keyType:e,typeName:Y.ZodMap,...q(n)});var Bl=class e extends J{_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==H.set)return W(n,{code:U.invalid_type,expected:H.set,received:n.parsedType}),G;let r=this._def;r.minSize!==null&&n.data.size<r.minSize.value&&(W(n,{code:U.too_small,minimum:r.minSize.value,type:`set`,inclusive:!0,exact:!1,message:r.minSize.message}),t.dirty()),r.maxSize!==null&&n.data.size>r.maxSize.value&&(W(n,{code:U.too_big,maximum:r.maxSize.value,type:`set`,inclusive:!0,exact:!1,message:r.maxSize.message}),t.dirty());let i=this._def.valueType;function a(e){let n=new Set;for(let r of e){if(r.status===`aborted`)return G;r.status===`dirty`&&t.dirty(),n.add(r.value)}return{status:t.value,value:n}}let o=[...n.data.values()].map((e,t)=>i._parse(new Wc(n,e,n.path,t)));return n.common.async?Promise.all(o).then(e=>a(e)):a(o)}min(t,n){return new e({...this._def,minSize:{value:t,message:K.toString(n)}})}max(t,n){return new e({...this._def,maxSize:{value:t,message:K.toString(n)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}};Bl.create=(e,t)=>new Bl({valueType:e,minSize:null,maxSize:null,typeName:Y.ZodSet,...q(t)});var Vl=class extends J{get schema(){return this._def.getter()}_parse(e){let{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}};Vl.create=(e,t)=>new Vl({getter:e,typeName:Y.ZodLazy,...q(t)});var Hl=class extends J{_parse(e){if(e.data!==this._def.value){let t=this._getOrReturnCtx(e);return W(t,{received:t.data,code:U.invalid_literal,expected:this._def.value}),G}return{status:`valid`,value:e.data}}get value(){return this._def.value}};Hl.create=(e,t)=>new Hl({value:e,typeName:Y.ZodLiteral,...q(t)});function Ul(e,t){return new Wl({values:e,typeName:Y.ZodEnum,...q(t)})}var Wl=class e extends J{_parse(e){if(typeof e.data!=`string`){let t=this._getOrReturnCtx(e),n=this._def.values;return W(t,{expected:V.joinValues(n),received:t.parsedType,code:U.invalid_type}),G}if(this._cache||=new Set(this._def.values),!this._cache.has(e.data)){let t=this._getOrReturnCtx(e),n=this._def.values;return W(t,{received:t.data,code:U.invalid_enum_value,options:n}),G}return zc(e.data)}get options(){return this._def.values}get enum(){let e={};for(let t of this._def.values)e[t]=t;return e}get Values(){let e={};for(let t of this._def.values)e[t]=t;return e}get Enum(){let e={};for(let t of this._def.values)e[t]=t;return e}extract(t,n=this._def){return e.create(t,{...this._def,...n})}exclude(t,n=this._def){return e.create(this.options.filter(e=>!t.includes(e)),{...this._def,...n})}};Wl.create=Ul;var Gl=class extends J{_parse(e){let t=V.getValidEnumValues(this._def.values),n=this._getOrReturnCtx(e);if(n.parsedType!==H.string&&n.parsedType!==H.number){let e=V.objectValues(t);return W(n,{expected:V.joinValues(e),received:n.parsedType,code:U.invalid_type}),G}if(this._cache||=new Set(V.getValidEnumValues(this._def.values)),!this._cache.has(e.data)){let e=V.objectValues(t);return W(n,{received:n.data,code:U.invalid_enum_value,options:e}),G}return zc(e.data)}get enum(){return this._def.values}};Gl.create=(e,t)=>new Gl({values:e,typeName:Y.ZodNativeEnum,...q(t)});var Kl=class extends J{unwrap(){return this._def.type}_parse(e){let{ctx:t}=this._processInputParams(e);return t.parsedType!==H.promise&&t.common.async===!1?(W(t,{code:U.invalid_type,expected:H.promise,received:t.parsedType}),G):zc((t.parsedType===H.promise?t.data:Promise.resolve(t.data)).then(e=>this._def.type.parseAsync(e,{path:t.path,errorMap:t.common.contextualErrorMap})))}};Kl.create=(e,t)=>new Kl({type:e,typeName:Y.ZodPromise,...q(t)});var ql=class extends J{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===Y.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){let{status:t,ctx:n}=this._processInputParams(e),r=this._def.effect||null,i={addIssue:e=>{W(n,e),e.fatal?t.abort():t.dirty()},get path(){return n.path}};if(i.addIssue=i.addIssue.bind(i),r.type===`preprocess`){let e=r.transform(n.data,i);if(n.common.async)return Promise.resolve(e).then(async e=>{if(t.value===`aborted`)return G;let r=await this._def.schema._parseAsync({data:e,path:n.path,parent:n});return r.status===`aborted`?G:r.status===`dirty`||t.value===`dirty`?Rc(r.value):r});{if(t.value===`aborted`)return G;let r=this._def.schema._parseSync({data:e,path:n.path,parent:n});return r.status===`aborted`?G:r.status===`dirty`||t.value===`dirty`?Rc(r.value):r}}if(r.type===`refinement`){let e=e=>{let t=r.refinement(e,i);if(n.common.async)return Promise.resolve(t);if(t instanceof Promise)throw Error(`Async refinement encountered during synchronous parse operation. Use .parseAsync instead.`);return e};if(n.common.async===!1){let r=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});return r.status===`aborted`?G:(r.status===`dirty`&&t.dirty(),e(r.value),{status:t.value,value:r.value})}return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(n=>n.status===`aborted`?G:(n.status===`dirty`&&t.dirty(),e(n.value).then(()=>({status:t.value,value:n.value}))))}if(r.type===`transform`){if(n.common.async===!1){let e=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});if(!Hc(e))return G;let a=r.transform(e.value,i);if(a instanceof Promise)throw Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);return{status:t.value,value:a}}return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(e=>Hc(e)?Promise.resolve(r.transform(e.value,i)).then(e=>({status:t.value,value:e})):G)}V.assertNever(r)}};ql.create=(e,t,n)=>new ql({schema:e,typeName:Y.ZodEffects,effect:t,...q(n)}),ql.createWithPreprocess=(e,t,n)=>new ql({schema:t,effect:{type:`preprocess`,transform:e},typeName:Y.ZodEffects,...q(n)});var Jl=class extends J{_parse(e){return this._getType(e)===H.undefined?zc(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};Jl.create=(e,t)=>new Jl({innerType:e,typeName:Y.ZodOptional,...q(t)});var Yl=class extends J{_parse(e){return this._getType(e)===H.null?zc(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};Yl.create=(e,t)=>new Yl({innerType:e,typeName:Y.ZodNullable,...q(t)});var Xl=class extends J{_parse(e){let{ctx:t}=this._processInputParams(e),n=t.data;return t.parsedType===H.undefined&&(n=this._def.defaultValue()),this._def.innerType._parse({data:n,path:t.path,parent:t})}removeDefault(){return this._def.innerType}};Xl.create=(e,t)=>new Xl({innerType:e,typeName:Y.ZodDefault,defaultValue:typeof t.default==`function`?t.default:()=>t.default,...q(t)});var Zl=class extends J{_parse(e){let{ctx:t}=this._processInputParams(e),n={...t,common:{...t.common,issues:[]}},r=this._def.innerType._parse({data:n.data,path:n.path,parent:{...n}});return Uc(r)?r.then(e=>({status:`valid`,value:e.status===`valid`?e.value:this._def.catchValue({get error(){return new Mc(n.common.issues)},input:n.data})})):{status:`valid`,value:r.status===`valid`?r.value:this._def.catchValue({get error(){return new Mc(n.common.issues)},input:n.data})}}removeCatch(){return this._def.innerType}};Zl.create=(e,t)=>new Zl({innerType:e,typeName:Y.ZodCatch,catchValue:typeof t.catch==`function`?t.catch:()=>t.catch,...q(t)});var Ql=class extends J{_parse(e){if(this._getType(e)!==H.nan){let t=this._getOrReturnCtx(e);return W(t,{code:U.invalid_type,expected:H.nan,received:t.parsedType}),G}return{status:`valid`,value:e.data}}};Ql.create=e=>new Ql({typeName:Y.ZodNaN,...q(e)});var $l=class extends J{_parse(e){let{ctx:t}=this._processInputParams(e),n=t.data;return this._def.type._parse({data:n,path:t.path,parent:t})}unwrap(){return this._def.type}},eu=class e extends J{_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.common.async)return(async()=>{let e=await this._def.in._parseAsync({data:n.data,path:n.path,parent:n});return e.status===`aborted`?G:e.status===`dirty`?(t.dirty(),Rc(e.value)):this._def.out._parseAsync({data:e.value,path:n.path,parent:n})})();{let e=this._def.in._parseSync({data:n.data,path:n.path,parent:n});return e.status===`aborted`?G:e.status===`dirty`?(t.dirty(),{status:`dirty`,value:e.value}):this._def.out._parseSync({data:e.value,path:n.path,parent:n})}}static create(t,n){return new e({in:t,out:n,typeName:Y.ZodPipeline})}},tu=class extends J{_parse(e){let t=this._def.innerType._parse(e),n=e=>(Hc(e)&&(e.value=Object.freeze(e.value)),e);return Uc(t)?t.then(e=>n(e)):n(t)}unwrap(){return this._def.innerType}};tu.create=(e,t)=>new tu({innerType:e,typeName:Y.ZodReadonly,...q(t)});function nu(e,t){let n=typeof e==`function`?e(t):typeof e==`string`?{message:e}:e;return typeof n==`string`?{message:n}:n}function ru(e,t={},n){return e?Tl.create().superRefine((r,i)=>{let a=e(r);if(a instanceof Promise)return a.then(e=>{if(!e){let e=nu(t,r),a=e.fatal??n??!0;i.addIssue({code:`custom`,...e,fatal:a})}});if(!a){let e=nu(t,r),a=e.fatal??n??!0;i.addIssue({code:`custom`,...e,fatal:a})}}):Tl.create()}var Y;(function(e){e.ZodString=`ZodString`,e.ZodNumber=`ZodNumber`,e.ZodNaN=`ZodNaN`,e.ZodBigInt=`ZodBigInt`,e.ZodBoolean=`ZodBoolean`,e.ZodDate=`ZodDate`,e.ZodSymbol=`ZodSymbol`,e.ZodUndefined=`ZodUndefined`,e.ZodNull=`ZodNull`,e.ZodAny=`ZodAny`,e.ZodUnknown=`ZodUnknown`,e.ZodNever=`ZodNever`,e.ZodVoid=`ZodVoid`,e.ZodArray=`ZodArray`,e.ZodObject=`ZodObject`,e.ZodUnion=`ZodUnion`,e.ZodDiscriminatedUnion=`ZodDiscriminatedUnion`,e.ZodIntersection=`ZodIntersection`,e.ZodTuple=`ZodTuple`,e.ZodRecord=`ZodRecord`,e.ZodMap=`ZodMap`,e.ZodSet=`ZodSet`,e.ZodFunction=`ZodFunction`,e.ZodLazy=`ZodLazy`,e.ZodLiteral=`ZodLiteral`,e.ZodEnum=`ZodEnum`,e.ZodEffects=`ZodEffects`,e.ZodNativeEnum=`ZodNativeEnum`,e.ZodOptional=`ZodOptional`,e.ZodNullable=`ZodNullable`,e.ZodDefault=`ZodDefault`,e.ZodCatch=`ZodCatch`,e.ZodPromise=`ZodPromise`,e.ZodBranded=`ZodBranded`,e.ZodPipeline=`ZodPipeline`,e.ZodReadonly=`ZodReadonly`})(Y||={});var iu=(e,t={message:`Input not instance of ${e.name}`})=>ru(t=>t instanceof e,t),X=gl.create,Z=vl.create,au=bl.create,ou=El.create,su=kl.create,Q=jl.create,cu=Ml.create,lu=Pl.create,uu=Rl.create,du=Hl.create,fu=Wl.create,pu={string:(e=>gl.create({...e,coerce:!0})),number:(e=>vl.create({...e,coerce:!0})),boolean:(e=>bl.create({...e,coerce:!0})),bigint:(e=>yl.create({...e,coerce:!0})),date:(e=>xl.create({...e,coerce:!0}))},mu=G,hu=15e3;function gu(e,t={}){let{timeoutMs:n=hu,...r}=t;return window.fetch(e,{...r,signal:r.signal??AbortSignal.timeout(n)})}function _u(e){return e instanceof TypeError||e instanceof DOMException&&(e.name===`AbortError`||e.name===`TimeoutError`)}var vu=h(p(((e,t)=>{((n,r)=>{typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).Dexie=r()})(e,function(){var e=function(t,n){return(e=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){e.__proto__=t}:function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}))(t,n)},t=function(){return(t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function n(e,t,n){if(n||arguments.length===2)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||((r||=Array.prototype.slice.call(t,0,i))[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}var r=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:global,i=Object.keys,a=Array.isArray;function o(e,t){return typeof t==`object`&&i(t).forEach(function(n){e[n]=t[n]}),e}typeof Promise>`u`||r.Promise||(r.Promise=Promise);var s=Object.getPrototypeOf,c={}.hasOwnProperty;function l(e,t){return c.call(e,t)}function u(e,t){typeof t==`function`&&(t=t(s(e))),(typeof Reflect>`u`?i:Reflect.ownKeys)(t).forEach(function(n){f(e,n,t[n])})}var d=Object.defineProperty;function f(e,t,n,r){d(e,t,o(n&&l(n,`get`)&&typeof n.get==`function`?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},r))}function p(e){return{from:function(t){return e.prototype=Object.create(t.prototype),f(e.prototype,`constructor`,e),{extend:u.bind(null,e.prototype)}}}}var m=Object.getOwnPropertyDescriptor,h=[].slice;function g(e,t,n){return h.call(e,t,n)}function _(e,t){return t(e)}function v(e){if(!e)throw Error(`Assertion Failed`)}function y(e){r.setImmediate?setImmediate(e):setTimeout(e,0)}function b(e,t){if(typeof t==`string`&&l(e,t))return e[t];if(!t)return e;if(typeof t!=`string`){for(var n=[],r=0,i=t.length;r<i;++r){var a=b(e,t[r]);n.push(a)}return n}var o,s=t.indexOf(`.`);return s===-1||(o=e[t.substr(0,s)])==null?void 0:b(o,t.substr(s+1))}function x(e,t,n){if(e&&t!==void 0&&!(`isFrozen`in Object&&Object.isFrozen(e))){if(typeof t!=`string`&&`length`in t){v(typeof n!=`string`&&`length`in n);for(var r=0,i=t.length;r<i;++r)x(e,t[r],n[r])}else{var o=t.indexOf(`.`);if(o!==-1){var s=t.substr(0,o),o=t.substr(o+1);if(o===``)n===void 0?a(e)&&!isNaN(parseInt(s))?e.splice(s,1):delete e[s]:e[s]=n;else{var c=e[s];if(!c||!l(e,s)){if(n===void 0)return;c=e[s]={}}x(c,o,n)}}else n===void 0?a(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=n}}}function ee(e){var t,n={};for(t in e)l(e,t)&&(n[t]=e[t]);return n}var te=[].concat;function ne(e){return te.apply([],e)}var re=`BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey`.split(`,`).concat(ne([8,16,32,64].map(function(e){return[`Int`,`Uint`,`Float`].map(function(t){return t+e+`Array`})}))).filter(function(e){return r[e]}),ie=new Set(re.map(function(e){return r[e]})),ae=null;function S(e){return ae=new WeakMap,e=function e(t){if(!t||typeof t!=`object`)return t;var n=ae.get(t);if(n)return n;if(a(t)){n=[],ae.set(t,n);for(var r=0,i=t.length;r<i;++r)n.push(e(t[r]))}else if(ie.has(t.constructor))n=t;else{var o,c=s(t);for(o in n=c===Object.prototype?{}:Object.create(c),ae.set(t,n),t)l(t,o)&&(n[o]=e(t[o]))}return n}(e),ae=null,e}var oe={}.toString;function se(e){return oe.call(e).slice(8,-1)}var ce=typeof Symbol<`u`?Symbol.iterator:`@@iterator`,le=typeof ce==`symbol`?function(e){var t;return e!=null&&(t=e[ce])&&t.apply(e)}:function(){return null};function ue(e,t){t=e.indexOf(t),0<=t&&e.splice(t,1)}var de={};function fe(e){var t,n,r,i;if(arguments.length===1){if(a(e))return e.slice();if(this===de&&typeof e==`string`)return[e];if(i=le(e))for(n=[];!(r=i.next()).done;)n.push(r.value);else{if(e==null||typeof(t=e.length)!=`number`)return[e];for(n=Array(t);t--;)n[t]=e[t]}}else for(t=arguments.length,n=Array(t);t--;)n[t]=arguments[t];return n}var pe=typeof Symbol<`u`?function(e){return e[Symbol.toStringTag]===`AsyncFunction`}:function(){return!1},re=[`Unknown`,`Constraint`,`Data`,`TransactionInactive`,`ReadOnly`,`Version`,`NotFound`,`InvalidState`,`InvalidAccess`,`Abort`,`Timeout`,`QuotaExceeded`,`Syntax`,`DataClone`],me=[`Modify`,`Bulk`,`OpenFailed`,`VersionChange`,`Schema`,`Upgrade`,`InvalidTable`,`MissingAPI`,`NoSuchDatabase`,`InvalidArgument`,`SubTransaction`,`Unsupported`,`Internal`,`DatabaseClosed`,`PrematureCommit`,`ForeignAwait`].concat(re),he={VersionChanged:`Database version changed by other database connection`,DatabaseClosed:`Database has been closed`,Abort:`Transaction aborted`,TransactionInactive:`Transaction has already completed or failed`,MissingAPI:`IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb`};function ge(e,t){this.name=e,this.message=t}function _e(e,t){return e+`. Errors: `+Object.keys(t).map(function(e){return t[e].toString()}).filter(function(e,t,n){return n.indexOf(e)===t}).join(`
`)}function ve(e,t,n,r){this.failures=t,this.failedKeys=r,this.successCount=n,this.message=_e(e,t)}function ye(e,t){this.name=`BulkError`,this.failures=Object.keys(t).map(function(e){return t[e]}),this.failuresByPos=t,this.message=_e(e,this.failures)}p(ge).from(Error).extend({toString:function(){return this.name+`: `+this.message}}),p(ve).from(ge),p(ye).from(ge);var C=me.reduce(function(e,t){return e[t]=t+`Error`,e},{}),be=ge,w=me.reduce(function(e,t){var n=t+`Error`;function r(e,r){this.name=n,e?typeof e==`string`?(this.message=`${e}${r?`
 `+r:``}`,this.inner=r||null):typeof e==`object`&&(this.message=`${e.name} ${e.message}`,this.inner=e):(this.message=he[t]||n,this.inner=null)}return p(r).from(be),e[t]=r,e},{}),xe=(w.Syntax=SyntaxError,w.Type=TypeError,w.Range=RangeError,re.reduce(function(e,t){return e[t+`Error`]=w[t],e},{}));re=me.reduce(function(e,t){return[`Syntax`,`Type`,`Range`].indexOf(t)===-1&&(e[t+`Error`]=w[t]),e},{});function T(){}function Se(e){return e}function Ce(e,t){return e==null||e===Se?t:function(n){return t(e(n))}}function we(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function Te(e,t){return e===T?t:function(){var n=e.apply(this,arguments),r=(n!==void 0&&(arguments[0]=n),this.onsuccess),i=this.onerror,a=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return r&&(this.onsuccess=this.onsuccess?we(r,this.onsuccess):r),i&&(this.onerror=this.onerror?we(i,this.onerror):i),a===void 0?n:a}}function Ee(e,t){return e===T?t:function(){e.apply(this,arguments);var n=this.onsuccess,r=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?we(n,this.onsuccess):n),r&&(this.onerror=this.onerror?we(r,this.onerror):r)}}function De(e,t){return e===T?t:function(n){var r=e.apply(this,arguments),n=(o(n,r),this.onsuccess),i=this.onerror,a=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return n&&(this.onsuccess=this.onsuccess?we(n,this.onsuccess):n),i&&(this.onerror=this.onerror?we(i,this.onerror):i),r===void 0?a===void 0?void 0:a:o(r,a)}}function Oe(e,t){return e===T?t:function(){return!1!==t.apply(this,arguments)&&e.apply(this,arguments)}}function ke(e,t){return e===T?t:function(){var n=e.apply(this,arguments);if(n&&typeof n.then==`function`){for(var r=this,i=arguments.length,a=Array(i);i--;)a[i]=arguments[i];return n.then(function(){return t.apply(r,a)})}return t.apply(this,arguments)}}re.ModifyError=ve,re.DexieError=ge,re.BulkError=ye;var Ae=typeof location<`u`&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function je(e){Ae=e}var Me={},Ne=100,Pe=typeof Promise>`u`?[]:(me=Promise.resolve(),typeof crypto<`u`&&crypto.subtle?[Pe=crypto.subtle.digest(`SHA-512`,new Uint8Array([0])),s(Pe),me]:[me,s(me),me]),me=Pe[0],Fe=Pe[1],Fe=Fe&&Fe.then,E=me&&me.constructor,Ie=!!Pe[2],Le=function(e,t){We.push([e,t]),ze&&=(queueMicrotask($e),!1)},Re=!0,ze=!0,Be=[],Ve=[],He=Se,Ue={id:`global`,global:!0,ref:0,unhandleds:[],onunhandled:T,pgp:!1,env:{},finalize:T},D=Ue,We=[],Ge=0,Ke=[];function O(e){if(typeof this!=`object`)throw TypeError(`Promises must be constructed via new`);this._listeners=[],this._lib=!1;var t=this._PSD=D;if(typeof e!=`function`){if(e!==Me)throw TypeError(`Not a function`);this._state=arguments[1],this._value=arguments[2],!1===this._state&&Ye(this,this._value)}else this._state=null,this._value=null,++t.ref,function e(t,n){try{n(function(n){if(t._state===null){if(n===t)throw TypeError(`A promise cannot be resolved with itself.`);var r=t._lib&&et();n&&typeof n.then==`function`?e(t,function(e,t){n instanceof O?n._then(e,t):n.then(e,t)}):(t._state=!0,t._value=n,Xe(t)),r&&tt()}},Ye.bind(null,t))}catch(e){Ye(t,e)}}(this,e)}var qe={get:function(){var e=D,t=ct;function n(n,r){var i=this,a=!e.global&&(e!==D||t!==ct),o=a&&!ft(),s=new O(function(t,s){Ze(i,new Je(_t(n,e,a,o),_t(r,e,a,o),t,s,e))});return this._consoleTask&&(s._consoleTask=this._consoleTask),s}return n.prototype=Me,n},set:function(e){f(this,`then`,e&&e.prototype===Me?qe:{get:function(){return e},set:qe.set})}};function Je(e,t,n,r,i){this.onFulfilled=typeof e==`function`?e:null,this.onRejected=typeof t==`function`?t:null,this.resolve=n,this.reject=r,this.psd=i}function Ye(e,t){var n,r;Ve.push(t),e._state===null&&(n=e._lib&&et(),t=He(t),e._state=!1,e._value=t,r=e,Be.some(function(e){return e._value===r._value})||Be.push(r),Xe(e),n)&&tt()}function Xe(e){var t=e._listeners;e._listeners=[];for(var n=0,r=t.length;n<r;++n)Ze(e,t[n]);var i=e._PSD;--i.ref||i.finalize(),Ge===0&&(++Ge,Le(function(){--Ge==0&&nt()},[]))}function Ze(e,t){if(e._state===null)e._listeners.push(t);else{var n=e._state?t.onFulfilled:t.onRejected;if(n===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++Ge,Le(Qe,[n,e,t])}}function Qe(e,t,n){try{var r,i=t._value;!t._state&&Ve.length&&(Ve=[]),r=Ae&&t._consoleTask?t._consoleTask.run(function(){return e(i)}):e(i),t._state||Ve.indexOf(i)!==-1||(e=>{for(var t=Be.length;t;)if(Be[--t]._value===e._value)return Be.splice(t,1)})(t),n.resolve(r)}catch(e){n.reject(e)}finally{--Ge==0&&nt(),--n.psd.ref||n.psd.finalize()}}function $e(){A(Ue,function(){et()&&tt()})}function et(){var e=Re;return ze=Re=!1,e}function tt(){var e,t,n;do for(;0<We.length;)for(e=We,We=[],n=e.length,t=0;t<n;++t){var r=e[t];r[0].apply(null,r[1])}while(0<We.length);ze=Re=!0}function nt(){for(var e=Be,t=(Be=[],e.forEach(function(e){e._PSD.onunhandled.call(null,e._value,e)}),Ke.slice(0)),n=t.length;n;)t[--n]()}function rt(e){return new O(Me,!1,e)}function k(e,t){var n=D;return function(){var r=et(),i=D;try{return ht(n,!0),e.apply(this,arguments)}catch(e){t&&t(e)}finally{ht(i,!1),r&&tt()}}}u(O.prototype,{then:qe,_then:function(e,t){Ze(this,new Je(null,null,e,t,D))},catch:function(e){var t,n;return arguments.length===1?this.then(null,e):(t=e,n=arguments[1],typeof t==`function`?this.then(null,function(e){return(e instanceof t?n:rt)(e)}):this.then(null,function(e){return(e&&e.name===t?n:rt)(e)}))},finally:function(e){return this.then(function(t){return O.resolve(e()).then(function(){return t})},function(t){return O.resolve(e()).then(function(){return rt(t)})})},timeout:function(e,t){var n=this;return e<1/0?new O(function(r,i){var a=setTimeout(function(){return i(new w.Timeout(t))},e);n.then(r,i).finally(clearTimeout.bind(null,a))}):this}}),typeof Symbol<`u`&&Symbol.toStringTag&&f(O.prototype,Symbol.toStringTag,`Dexie.Promise`),Ue.env=gt(),u(O,{all:function(){var e=fe.apply(null,arguments).map(pt);return new O(function(t,n){e.length===0&&t([]);var r=e.length;e.forEach(function(i,a){return O.resolve(i).then(function(n){e[a]=n,--r||t(e)},n)})})},resolve:function(e){return e instanceof O?e:e&&typeof e.then==`function`?new O(function(t,n){e.then(t,n)}):new O(Me,!0,e)},reject:rt,race:function(){var e=fe.apply(null,arguments).map(pt);return new O(function(t,n){e.map(function(e){return O.resolve(e).then(t,n)})})},PSD:{get:function(){return D},set:function(e){return D=e}},totalEchoes:{get:function(){return ct}},newPSD:ut,usePSD:A,scheduler:{get:function(){return Le},set:function(e){Le=e}},rejectionMapper:{get:function(){return He},set:function(e){He=e}},follow:function(e,t){return new O(function(n,r){return ut(function(t,n){var r=D;r.unhandleds=[],r.onunhandled=n,r.finalize=we(function(){var e,r=this;e=function(){r.unhandleds.length===0?t():n(r.unhandleds[0])},Ke.push(function t(){e(),Ke.splice(Ke.indexOf(t),1)}),++Ge,Le(function(){--Ge==0&&nt()},[])},r.finalize),e()},t,n,r)})}}),E&&(E.allSettled&&f(O,`allSettled`,function(){var e=fe.apply(null,arguments).map(pt);return new O(function(t){e.length===0&&t([]);var n=e.length,r=Array(n);e.forEach(function(e,i){return O.resolve(e).then(function(e){return r[i]={status:`fulfilled`,value:e}},function(e){return r[i]={status:`rejected`,reason:e}}).then(function(){return--n||t(r)})})})}),E.any&&typeof AggregateError<`u`&&f(O,`any`,function(){var e=fe.apply(null,arguments).map(pt);return new O(function(t,n){e.length===0&&n(AggregateError([]));var r=e.length,i=Array(r);e.forEach(function(e,a){return O.resolve(e).then(function(e){return t(e)},function(e){i[a]=e,--r||n(AggregateError(i))})})})}),E.withResolvers)&&(O.withResolvers=E.withResolvers);var it={awaits:0,echoes:0,id:0},at=0,ot=[],st=0,ct=0,lt=0;function ut(e,t,n,r){var i=D,a=Object.create(i),t=(a.parent=i,a.ref=0,a.global=!1,a.id=++lt,a.env=Ie?{Promise:O,PromiseProp:{value:O,configurable:!0,writable:!0},all:O.all,race:O.race,allSettled:O.allSettled,any:O.any,resolve:O.resolve,reject:O.reject}:{},t&&o(a,t),++i.ref,a.finalize=function(){--this.parent.ref||this.parent.finalize()},A(a,e,n,r));return a.ref===0&&a.finalize(),t}function dt(){return it.id||=++at,++it.awaits,it.echoes+=Ne,it.id}function ft(){return!!it.awaits&&(--it.awaits==0&&(it.id=0),it.echoes=it.awaits*Ne,!0)}function pt(e){return it.echoes&&e&&e.constructor===E?(dt(),e.then(function(e){return ft(),e},function(e){return ft(),yt(e)})):e}function mt(){var e=ot[ot.length-1];ot.pop(),ht(e,!1)}function ht(e,t){var n,i,a=D;(t?!it.echoes||st++&&e===D:!st||--st&&e===D)||queueMicrotask(t?function(e){++ct,it.echoes&&--it.echoes!=0||(it.echoes=it.awaits=it.id=0),ot.push(D),ht(e,!0)}.bind(null,e):mt),e!==D&&(D=e,a===Ue&&(Ue.env=gt()),Ie)&&(n=Ue.env.Promise,i=e.env,a.global||e.global)&&(Object.defineProperty(r,"Promise",i.PromiseProp),n.all=i.all,n.race=i.race,n.resolve=i.resolve,n.reject=i.reject,i.allSettled&&(n.allSettled=i.allSettled),i.any)&&(n.any=i.any)}function gt(){var e=r.Promise;return Ie?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(r,`Promise`),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function A(e,t,n,r,i){var a=D;try{return ht(e,!0),t(n,r,i)}finally{ht(a,!1)}}function _t(e,t,n,r){return typeof e==`function`?function(){var i=D;n&&dt(),ht(t,!0);try{return e.apply(this,arguments)}finally{ht(i,!1),r&&queueMicrotask(ft)}}:e}function vt(e){Promise===E&&it.echoes===0?st===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}(``+Fe).indexOf(`[native code]`)===-1&&(dt=ft=T);var yt=O.reject,bt=`￿`,xt=`Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.`,St=`String expected.`,Ct=`__dbnames`,wt=`readonly`,Tt=`readwrite`;function Et(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var Dt={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Ot(e){return typeof e!=`string`||/\./.test(e)?function(e){return e}:function(t){return t[e]===void 0&&e in t&&delete(t=S(t))[e],t}}function kt(){throw w.Type(`Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.`)}function j(e,t){try{var n=At(e),r=At(t);if(n!==r)return n===`Array`?1:r===`Array`?-1:n===`binary`?1:r===`binary`?-1:n===`string`?1:r===`string`?-1:n===`Date`?1:r===`Date`?-1:NaN;switch(n){case`number`:case`Date`:case`string`:return t<e?1:e<t?-1:0;case`binary`:for(var i=jt(e),a=jt(t),o=i.length,s=a.length,c=o<s?o:s,l=0;l<c;++l)if(i[l]!==a[l])return i[l]<a[l]?-1:1;return o===s?0:o<s?-1:1;case`Array`:for(var u=e,d=t,f=u.length,p=d.length,m=f<p?f:p,h=0;h<m;++h){var g=j(u[h],d[h]);if(g!==0)return g}return f===p?0:f<p?-1:1}}catch{}return NaN}function At(e){var t=typeof e;return t==`object`&&(ArrayBuffer.isView(e)||(t=se(e))===`ArrayBuffer`)?`binary`:t}function jt(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function Mt(e,t,n){var r=e.schema.yProps;return r?(t&&0<n.numFailures&&(t=t.filter(function(e,t){return!n.failures[t]})),Promise.all(r.map(function(n){return n=n.updatesTable,t?e.db.table(n).where(`k`).anyOf(t).delete():e.db.table(n).clear()})).then(function(){return n})):n}Pt.prototype.execute=function(e){var t=this[`@@propmod`];if(t.add!==void 0){var r=t.add;if(a(r))return n(n([],a(e)?e:[],!0),r,!0).sort();if(typeof r==`number`)return(Number(e)||0)+r;if(typeof r==`bigint`)try{return BigInt(e)+r}catch{return BigInt(0)+r}throw TypeError(`Invalid term ${r}`)}if(t.remove!==void 0){var i=t.remove;if(a(i))return a(e)?e.filter(function(e){return!i.includes(e)}).sort():[];if(typeof i==`number`)return Number(e)-i;if(typeof i==`bigint`)try{return BigInt(e)-i}catch{return BigInt(0)-i}throw TypeError(`Invalid subtrahend ${i}`)}return r=(r=t.replacePrefix)?.[0],r&&typeof e==`string`&&e.startsWith(r)?t.replacePrefix[1]+e.substring(r.length):e};var Nt=Pt;function Pt(e){this[`@@propmod`]=e}function Ft(e,t){for(var n=i(t),r=n.length,a=!1,o=0;o<r;++o){var s=n[o],c=t[s],l=b(e,s);c instanceof Nt?(x(e,s,c.execute(l)),a=!0):l!==c&&(x(e,s,c),a=!0)}return a}M.prototype._trans=function(e,t,n){var r=this._tx||D.trans,i=this.name,a=Ae&&typeof console<`u`&&console.createTask&&console.createTask(`Dexie: ${e===`readonly`?`read`:`write`} ${this.name}`);function o(e,n,r){if(r.schema[i])return t(r.idbtrans,r);throw new w.NotFound(`Table `+i+` not part of transaction`)}var s=et();try{var c=r&&r.db._novip===this.db._novip?r===D.trans?r._promise(e,o,n):ut(function(){return r._promise(e,o,n)},{trans:r,transless:D.transless||D}):function e(t,n,r,i){if(t.idbdb&&(t._state.openComplete||D.letThrough||t._vip)){var a=t._createTransaction(n,r,t._dbSchema);try{a.create(),t._state.PR1398_maxLoop=3}catch(a){return a.name===C.InvalidState&&t.isOpen()&&0<--t._state.PR1398_maxLoop?(console.warn(`Dexie: Need to reopen db`),t.close({disableAutoOpen:!1}),t.open().then(function(){return e(t,n,r,i)})):yt(a)}return a._promise(n,function(e,t){return ut(function(){return D.trans=a,i(e,t,a)})}).then(function(e){if(n===`readwrite`)try{a.idbtrans.commit()}catch{}return n===`readonly`?e:a._completion.then(function(){return e})})}if(t._state.openComplete)return yt(new w.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return yt(new w.DatabaseClosed);t.open().catch(T)}return t._state.dbReadyPromise.then(function(){return e(t,n,r,i)})}(this.db,e,[this.name],o);return a&&(c._consoleTask=a,c=c.catch(function(e){return console.trace(e),yt(e)})),c}finally{s&&tt()}},M.prototype.get=function(e,t){var n=this;return e&&e.constructor===Object?this.where(e).first(t):e==null?yt(new w.Type(`Invalid argument to Table.get()`)):this._trans(`readonly`,function(t){return n.core.get({trans:t,key:e}).then(function(e){return n.hook.reading.fire(e)})}).then(t)},M.prototype.where=function(e){if(typeof e==`string`)return new this.db.WhereClause(this,e);if(a(e))return new this.db.WhereClause(this,`[${e.join(`+`)}]`);var t=i(e);if(t.length===1)return this.where(t[0]).equals(e[t[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter(function(e){if(e.compound&&t.every(function(t){return 0<=e.keyPath.indexOf(t)})){for(var n=0;n<t.length;++n)if(t.indexOf(e.keyPath[n])===-1)return!1;return!0}return!1}).sort(function(e,t){return e.keyPath.length-t.keyPath.length})[0];if(n&&this.db._maxKey!==bt)return s=n.keyPath.slice(0,t.length),this.where(s).equals(s.map(function(t){return e[t]}));!n&&Ae&&console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit from a compound index [${t.join(`+`)}]`);var r=this.schema.idxByName;function o(e,t){return j(e,t)===0}var s=t.reduce(function(t,n){var i=t[0],t=t[1],s=r[n],c=e[n];return[i||s,i||!s?Et(t,s&&s.multi?function(e){return e=b(e,n),a(e)&&e.some(function(e){return o(c,e)})}:function(e){return o(c,b(e,n))}):t]},[null,null]),c=s[0],s=s[1];return c?this.where(c.name).equals(e[c.keyPath]).filter(s):n?this.filter(s):this.where(t).equals(``)},M.prototype.filter=function(e){return this.toCollection().and(e)},M.prototype.count=function(e){return this.toCollection().count(e)},M.prototype.offset=function(e){return this.toCollection().offset(e)},M.prototype.limit=function(e){return this.toCollection().limit(e)},M.prototype.each=function(e){return this.toCollection().each(e)},M.prototype.toArray=function(e){return this.toCollection().toArray(e)},M.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},M.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,a(e)?`[${e.join(`+`)}]`:e))},M.prototype.reverse=function(){return this.toCollection().reverse()},M.prototype.mapToClass=function(t){for(var n=this.db,r=this.name,i=((this.schema.mappedClass=t).prototype instanceof kt&&(t=(t=>{var i=s,a=t;if(typeof a!=`function`&&a!==null)throw TypeError(`Class extends value `+String(a)+` is not a constructor or null`);function o(){this.constructor=i}function s(){return t!==null&&t.apply(this,arguments)||this}return e(i,a),i.prototype=a===null?Object.create(a):(o.prototype=a.prototype,new o),Object.defineProperty(s.prototype,"db",{get:function(){return n},enumerable:!1,configurable:!0}),s.prototype.table=function(){return r},s})(t)),new Set),a=t.prototype;a;a=s(a))Object.getOwnPropertyNames(a).forEach(function(e){return i.add(e)});function o(e){if(!e)return e;var n,r=Object.create(t.prototype);for(n in e)if(!i.has(n))try{r[n]=e[n]}catch{}return r}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=o,this.hook(`reading`,o),t},M.prototype.defineClass=function(){return this.mapToClass(function(e){o(this,e)})},M.prototype.add=function(e,t){var n=this,r=this.schema.primKey,i=r.auto,a=r.keyPath,o=e;return a&&i&&(o=Ot(a)(e)),this._trans(`readwrite`,function(e){return n.core.mutate({trans:e,type:`add`,keys:t==null?null:[t],values:[o]})}).then(function(e){return e.numFailures?O.reject(e.failures[0]):e.lastResult}).then(function(t){if(a)try{x(e,a,t)}catch{}return t})},M.prototype.upsert=function(e,t){var n=this,r=this.schema.primKey.keyPath;return this._trans(`readwrite`,function(i){return n.core.get({trans:i,key:e}).then(function(a){var o=a??{};return Ft(o,t),r&&x(o,r,e),n.core.mutate({trans:i,type:`put`,values:[o],keys:[e],upsert:!0,updates:{keys:[e],changeSpecs:[t]}}).then(function(e){return e.numFailures?O.reject(e.failures[0]):!!a})})})},M.prototype.update=function(e,t){return typeof e!=`object`||a(e)?this.where(`:id`).equals(e).modify(t):(e=b(e,this.schema.primKey.keyPath))===void 0?yt(new w.InvalidArgument(`Given object does not contain its primary key`)):this.where(`:id`).equals(e).modify(t)},M.prototype.put=function(e,t){var n=this,r=this.schema.primKey,i=r.auto,a=r.keyPath,o=e;return a&&i&&(o=Ot(a)(e)),this._trans(`readwrite`,function(e){return n.core.mutate({trans:e,type:`put`,values:[o],keys:t==null?null:[t]})}).then(function(e){return e.numFailures?O.reject(e.failures[0]):e.lastResult}).then(function(t){if(a)try{x(e,a,t)}catch{}return t})},M.prototype.delete=function(e){var t=this;return this._trans(`readwrite`,function(n){return t.core.mutate({trans:n,type:`delete`,keys:[e]}).then(function(n){return Mt(t,[e],n)}).then(function(e){return e.numFailures?O.reject(e.failures[0]):void 0})})},M.prototype.clear=function(){var e=this;return this._trans(`readwrite`,function(t){return e.core.mutate({trans:t,type:`deleteRange`,range:Dt}).then(function(t){return Mt(e,null,t)})}).then(function(e){return e.numFailures?O.reject(e.failures[0]):void 0})},M.prototype.bulkGet=function(e){var t=this;return this._trans(`readonly`,function(n){return t.core.getMany({keys:e,trans:n}).then(function(e){return e.map(function(e){return t.hook.reading.fire(e)})})})},M.prototype.bulkAdd=function(e,t,n){var r=this,i=Array.isArray(t)?t:void 0,a=(n||=i?void 0:t)?n.allKeys:void 0;return this._trans(`readwrite`,function(t){var n=r.schema.primKey,o=n.auto,n=n.keyPath;if(n&&i)throw new w.InvalidArgument(`bulkAdd(): keys argument invalid on tables with inbound keys`);if(i&&i.length!==e.length)throw new w.InvalidArgument(`Arguments objects and keys must have the same length`);var s=e.length,o=n&&o?e.map(Ot(n)):e;return r.core.mutate({trans:t,type:`add`,keys:i,values:o,wantResults:a}).then(function(e){var t=e.numFailures,n=e.failures;if(t===0)return a?e.results:e.lastResult;throw new ye(`${r.name}.bulkAdd(): ${t} of ${s} operations failed`,n)})})},M.prototype.bulkPut=function(e,t,n){var r=this,i=Array.isArray(t)?t:void 0,a=(n||=i?void 0:t)?n.allKeys:void 0;return this._trans(`readwrite`,function(t){var n=r.schema.primKey,o=n.auto,n=n.keyPath;if(n&&i)throw new w.InvalidArgument(`bulkPut(): keys argument invalid on tables with inbound keys`);if(i&&i.length!==e.length)throw new w.InvalidArgument(`Arguments objects and keys must have the same length`);var s=e.length,o=n&&o?e.map(Ot(n)):e;return r.core.mutate({trans:t,type:`put`,keys:i,values:o,wantResults:a}).then(function(e){var t=e.numFailures,n=e.failures;if(t===0)return a?e.results:e.lastResult;throw new ye(`${r.name}.bulkPut(): ${t} of ${s} operations failed`,n)})})},M.prototype.bulkUpdate=function(e){var t=this,n=this.core,r=e.map(function(e){return e.key}),i=e.map(function(e){return e.changes}),a=[];return this._trans(`readwrite`,function(o){return n.getMany({trans:o,keys:r,cache:`clone`}).then(function(s){var c=[],l=[],u=(e.forEach(function(e,n){var r=e.key,i=e.changes,o=s[n];if(o){for(var u=0,d=Object.keys(i);u<d.length;u++){var f=d[u],p=i[f];if(f===t.schema.primKey.keyPath){if(j(p,r)!==0)throw new w.Constraint(`Cannot update primary key in bulkUpdate()`)}else x(o,f,p)}a.push(n),c.push(r),l.push(o)}}),c.length);return n.mutate({trans:o,type:`put`,keys:c,values:l,updates:{keys:r,changeSpecs:i}}).then(function(e){var n=e.numFailures,r=e.failures;if(n===0)return u;for(var i=0,o=Object.keys(r);i<o.length;i++){var s,c=o[i],l=a[Number(c)];l!=null&&(s=r[c],delete r[c],r[l]=s)}throw new ye(`${t.name}.bulkUpdate(): ${n} of ${u} operations failed`,r)})})})},M.prototype.bulkDelete=function(e){var t=this,n=e.length;return this._trans(`readwrite`,function(n){return t.core.mutate({trans:n,type:`delete`,keys:e}).then(function(n){return Mt(t,e,n)})}).then(function(e){var r=e.numFailures,i=e.failures;if(r===0)return e.lastResult;throw new ye(`${t.name}.bulkDelete(): ${r} of ${n} operations failed`,i)})};var It=M;function M(){}function Lt(e){function t(t,r){if(r){for(var i=arguments.length,a=Array(i-1);--i;)a[i-1]=arguments[i];return n[t].subscribe.apply(null,a),e}if(typeof t==`string`)return n[t]}var n={};t.addEventType=s;for(var r=1,o=arguments.length;r<o;++r)s(arguments[r]);return t;function s(e,r,o){var c,l;if(typeof e!=`object`)return r||=Oe,l={subscribers:[],fire:o||=T,subscribe:function(e){l.subscribers.indexOf(e)===-1&&(l.subscribers.push(e),l.fire=r(l.fire,e))},unsubscribe:function(e){l.subscribers=l.subscribers.filter(function(t){return t!==e}),l.fire=l.subscribers.reduce(r,o)}},n[e]=t[e]=l;i(c=e).forEach(function(e){var t=c[e];if(a(t))s(e,c[e][0],c[e][1]);else{if(t!==`asap`)throw new w.InvalidArgument(`Invalid event config`);var n=s(e,Se,function(){for(var e=arguments.length,t=Array(e);e--;)t[e]=arguments[e];n.subscribers.forEach(function(e){y(function(){e.apply(null,t)})})})}})}}function Rt(e,t){return p(t).from({prototype:e}),t}function zt(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function Bt(e,t){e.filter=Et(e.filter,t)}function Vt(e,t,n){var r=e.replayFilter;e.replayFilter=r?function(){return Et(r(),t())}:t,e.justLimit=n&&!r}function Ht(e,t){if(e.isPrimKey)return t.primaryKey;var n=t.getIndexByKeyPath(e.index);if(n)return n;throw new w.Schema(`KeyPath `+e.index+` on object store `+t.name+` is not indexed`)}function Ut(e,t,n){var r=Ht(e,t.schema);return t.openCursor({trans:n,values:!e.keysOnly,reverse:e.dir===`prev`,unique:!!e.unique,query:{index:r,range:e.range}})}function Wt(e,t,n,r){var i,a,o=e.replayFilter?Et(e.filter,e.replayFilter()):e.filter;return e.or?(i={},a=function(e,n,r){var a,s;o&&!o(n,r,function(e){return n.stop(e)},function(e){return n.fail(e)})||((s=``+(a=n.primaryKey))==`[object ArrayBuffer]`&&(s=``+new Uint8Array(a)),l(i,s))||(i[s]=!0,t(e,n,r))},Promise.all([e.or._iterate(a,n),Gt(Ut(e,r,n),e.algorithm,a,!e.keysOnly&&e.valueMapper)])):Gt(Ut(e,r,n),Et(e.algorithm,o),t,!e.keysOnly&&e.valueMapper)}function Gt(e,t,n,r){var i=k(r?function(e,t,i){return n(r(e),t,i)}:n);return e.then(function(e){if(e)return e.start(function(){var n=function(){return e.continue()};t&&!t(e,function(e){return n=e},function(t){e.stop(t),n=T},function(t){e.fail(t),n=T})||i(e.value,e,function(e){return n=e}),n()})})}P.prototype._read=function(e,t){var n=this._ctx;return n.error?n.table._trans(null,yt.bind(null,n.error)):n.table._trans(`readonly`,e).then(t)},P.prototype._write=function(e){var t=this._ctx;return t.error?t.table._trans(null,yt.bind(null,t.error)):t.table._trans(`readwrite`,e,`locked`)},P.prototype._addAlgorithm=function(e){var t=this._ctx;t.algorithm=Et(t.algorithm,e)},P.prototype._iterate=function(e,t){return Wt(this._ctx,e,t,this._ctx.table.core)},P.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return e&&o(n,e),t._ctx=n,t},P.prototype.raw=function(){return this._ctx.valueMapper=null,this},P.prototype.each=function(e){var t=this._ctx;return this._read(function(n){return Wt(t,e,n,t.table.core)})},P.prototype.count=function(e){var t=this;return this._read(function(e){var n,r=t._ctx,i=r.table.core;return zt(r,!0)?i.count({trans:e,query:{index:Ht(r,i.schema),range:r.range}}).then(function(e){return Math.min(e,r.limit)}):(n=0,Wt(r,function(){return++n,!1},e,i).then(function(){return n}))}).then(e)},P.prototype.sortBy=function(e,t){var n=e.split(`.`).reverse(),r=n[0],i=n.length-1;function a(e,t){return t?a(e[n[t]],t-1):e[r]}var o=this._ctx.dir===`next`?1:-1;function s(e,t){return j(a(e,i),a(t,i))*o}return this.toArray(function(e){return e.slice().sort(s)}).then(t)},P.prototype.toArray=function(e){var t=this;return this._read(function(e){var n,r,i,a=t._ctx;return zt(a,!0)&&0<a.limit?(n=a.valueMapper,r=Ht(a,a.table.core.schema),a.table.core.query({trans:e,limit:a.limit,values:!0,direction:a.dir===`prev`?`prev`:void 0,query:{index:r,range:a.range}}).then(function(e){return e=e.result,n?e.map(n):e})):(i=[],Wt(a,function(e){return i.push(e)},e,a.table.core).then(function(){return i}))},e)},P.prototype.offset=function(e){var t=this._ctx;return e<=0||(t.offset+=e,zt(t)?Vt(t,function(){var t=e;return function(e,n){return t===0||(t===1?--t:n(function(){e.advance(t),t=0}),!1)}}):Vt(t,function(){var t=e;return function(){return--t<0}})),this},P.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),Vt(this._ctx,function(){var t=e;return function(e,n,r){return--t<=0&&n(r),0<=t}},!0),this},P.prototype.until=function(e,t){return Bt(this._ctx,function(n,r,i){return!e(n.value)||(r(i),t)}),this},P.prototype.first=function(e){return this.limit(1).toArray(function(e){return e[0]}).then(e)},P.prototype.last=function(e){return this.reverse().first(e)},P.prototype.filter=function(e){var t;return Bt(this._ctx,function(t){return e(t.value)}),(t=this._ctx).isMatch=Et(t.isMatch,e),this},P.prototype.and=function(e){return this.filter(e)},P.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},P.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir===`prev`?`next`:`prev`,this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},P.prototype.desc=function(){return this.reverse()},P.prototype.eachKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(t,n){e(n.key,n)})},P.prototype.eachUniqueKey=function(e){return this._ctx.unique=`unique`,this.eachKey(e)},P.prototype.eachPrimaryKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(t,n){e(n.primaryKey,n)})},P.prototype.keys=function(e){var t=this._ctx,n=(t.keysOnly=!t.isMatch,[]);return this.each(function(e,t){n.push(t.key)}).then(function(){return n}).then(e)},P.prototype.primaryKeys=function(e){var t=this._ctx;if(zt(t,!0)&&0<t.limit)return this._read(function(e){var n=Ht(t,t.table.core.schema);return t.table.core.query({trans:e,values:!1,limit:t.limit,direction:t.dir===`prev`?`prev`:void 0,query:{index:n,range:t.range}})}).then(function(e){return e.result}).then(e);t.keysOnly=!t.isMatch;var n=[];return this.each(function(e,t){n.push(t.primaryKey)}).then(function(){return n}).then(e)},P.prototype.uniqueKeys=function(e){return this._ctx.unique=`unique`,this.keys(e)},P.prototype.firstKey=function(e){return this.limit(1).keys(function(e){return e[0]}).then(e)},P.prototype.lastKey=function(e){return this.reverse().firstKey(e)},P.prototype.distinct=function(){var e,t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];return t&&t.multi&&(e={},Bt(this._ctx,function(t){var t=t.primaryKey.toString(),n=l(e,t);return e[t]=!0,!n})),this},P.prototype.modify=function(e){var t=this,n=this._ctx;return this._write(function(r){function a(e,t){var n=t.failures;p+=e-t.numFailures;for(var r=0,a=i(n);r<a.length;r++)f.push(n[a[r]])}var o=typeof e==`function`?e:function(t){return Ft(t,e)},s=n.table.core,c=s.schema.primaryKey,l=c.outbound,u=c.extractKey,d=200,c=t.db._options.modifyChunkSize,f=(c&&(d=typeof c==`object`?c[s.name]||c[`*`]||200:c),[]),p=0,m=[],h=e===Kt;return t.clone().primaryKeys().then(function(t){function i(f){var p=Math.min(d,t.length-f),m=t.slice(f,f+p);return(h?Promise.resolve([]):s.getMany({trans:r,keys:m,cache:`immutable`})).then(function(g){var _=[],v=[],y=l?[]:null,b=h?m:[];if(!h)for(var x=0;x<p;++x){var ee=g[x],te={value:S(ee),primKey:t[f+x]};!1!==o.call(te,te.value,te)&&(te.value==null?b.push(t[f+x]):l||j(u(ee),u(te.value))===0?(v.push(te.value),l&&y.push(t[f+x])):(b.push(t[f+x]),_.push(te.value)))}return Promise.resolve(0<_.length&&s.mutate({trans:r,type:`add`,values:_}).then(function(e){for(var t in e.failures)b.splice(parseInt(t),1);a(_.length,e)})).then(function(){return(0<v.length||c&&typeof e==`object`)&&s.mutate({trans:r,type:`put`,keys:y,values:v,criteria:c,changeSpec:typeof e!=`function`&&e,isAdditionalChunk:0<f}).then(function(e){return a(v.length,e)})}).then(function(){return(0<b.length||c&&h)&&s.mutate({trans:r,type:`delete`,keys:b,criteria:c,isAdditionalChunk:0<f}).then(function(e){return Mt(n.table,b,e)}).then(function(e){return a(b.length,e)})}).then(function(){return t.length>f+p&&i(f+d)})})}var c=zt(n)&&n.limit===1/0&&(typeof e!=`function`||h)&&{index:n.index,range:n.range};return i(0).then(function(){if(0<f.length)throw new ve(`Error modifying one or more objects`,f,p,m);return t.length})})})},P.prototype.delete=function(){var e=this._ctx,t=e.range;return!zt(e)||e.table.schema.yProps||!e.isPrimKey&&t.type!==3?this.modify(Kt):this._write(function(n){var r=e.table.core.schema.primaryKey,i=t;return e.table.core.count({trans:n,query:{index:r,range:i}}).then(function(t){return e.table.core.mutate({trans:n,type:`deleteRange`,range:i}).then(function(e){var n=e.failures,e=e.numFailures;if(e)throw new ve(`Could not delete some values`,Object.keys(n).map(function(e){return n[e]}),t-e);return t-e})})})};var N=P;function P(){}var Kt=function(e,t){return t.value=null};function qt(e,t){return e<t?-1:e===t?0:1}function Jt(e,t){return t<e?-1:e===t?0:1}function Yt(e,t,n){return e=e instanceof en?new e.Collection(e):e,e._ctx.error=new(n||TypeError)(t),e}function Xt(e){return new e.Collection(e,function(){return $t(``)}).limit(0)}function Zt(e,t,n,r){var i,a,o,s,c,l,u,d=n.length;if(!n.every(function(e){return typeof e==`string`}))return Yt(e,St);function f(e){i=e===`next`?function(e){return e.toUpperCase()}:function(e){return e.toLowerCase()},a=e===`next`?function(e){return e.toLowerCase()}:function(e){return e.toUpperCase()},o=e===`next`?qt:Jt;var t=n.map(function(e){return{lower:a(e),upper:i(e)}}).sort(function(e,t){return o(e.lower,t.lower)});s=t.map(function(e){return e.upper}),c=t.map(function(e){return e.lower}),u=(l=e)===`next`?``:r}f(`next`);var e=new e.Collection(e,function(){return Qt(s[0],c[d-1]+r)}),p=(e._ondirectionchange=function(e){f(e)},0);return e._addAlgorithm(function(e,n,r){var i=e.key;if(typeof i==`string`){var f=a(i);if(t(f,c,p))return!0;for(var m=null,h=p;h<d;++h){var g=((e,t,n,r,i,a)=>{for(var o=Math.min(e.length,r.length),s=-1,c=0;c<o;++c){var l=t[c];if(l!==r[c])return i(e[c],n[c])<0?e.substr(0,c)+n[c]+n.substr(c+1):i(e[c],r[c])<0?e.substr(0,c)+r[c]+n.substr(c+1):0<=s?e.substr(0,s)+t[s]+n.substr(s+1):null;i(e[c],l)<0&&(s=c)}return o<r.length&&a===`next`?e+n.substr(e.length):o<e.length&&a===`prev`?e.substr(0,n.length):s<0?null:e.substr(0,s)+r[s]+n.substr(s+1)})(i,f,s[h],c[h],o,l);g===null&&m===null?p=h+1:(m===null||0<o(m,g))&&(m=g)}n(m===null?r:function(){e.continue(m+u)})}return!1}),e}function Qt(e,t,n,r){return{type:2,lower:e,upper:t,lowerOpen:n,upperOpen:r}}function $t(e){return{type:1,lower:e,upper:e}}Object.defineProperty(tn.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),tn.prototype.between=function(e,t,n,r){n=!1!==n,r=!0===r;try{return 0<this._cmp(e,t)||this._cmp(e,t)===0&&(n||r)&&(!n||!r)?Xt(this):new this.Collection(this,function(){return Qt(e,t,!n,!r)})}catch{return Yt(this,xt)}},tn.prototype.equals=function(e){return e==null?Yt(this,xt):new this.Collection(this,function(){return $t(e)})},tn.prototype.above=function(e){return e==null?Yt(this,xt):new this.Collection(this,function(){return Qt(e,void 0,!0)})},tn.prototype.aboveOrEqual=function(e){return e==null?Yt(this,xt):new this.Collection(this,function(){return Qt(e,void 0,!1)})},tn.prototype.below=function(e){return e==null?Yt(this,xt):new this.Collection(this,function(){return Qt(void 0,e,!1,!0)})},tn.prototype.belowOrEqual=function(e){return e==null?Yt(this,xt):new this.Collection(this,function(){return Qt(void 0,e)})},tn.prototype.startsWith=function(e){return typeof e==`string`?this.between(e,e+bt,!0,!0):Yt(this,St)},tn.prototype.startsWithIgnoreCase=function(e){return e===``?this.startsWith(e):Zt(this,function(e,t){return e.indexOf(t[0])===0},[e],bt)},tn.prototype.equalsIgnoreCase=function(e){return Zt(this,function(e,t){return e===t[0]},[e],``)},tn.prototype.anyOfIgnoreCase=function(){var e=fe.apply(de,arguments);return e.length===0?Xt(this):Zt(this,function(e,t){return t.indexOf(e)!==-1},e,``)},tn.prototype.startsWithAnyOfIgnoreCase=function(){var e=fe.apply(de,arguments);return e.length===0?Xt(this):Zt(this,function(e,t){return t.some(function(t){return e.indexOf(t)===0})},e,bt)},tn.prototype.anyOf=function(){var e,t,n=this,r=fe.apply(de,arguments),i=this._cmp;try{r.sort(i)}catch{return Yt(this,xt)}return r.length===0?Xt(this):((e=new this.Collection(this,function(){return Qt(r[0],r[r.length-1])}))._ondirectionchange=function(e){i=e===`next`?n._ascending:n._descending,r.sort(i)},t=0,e._addAlgorithm(function(e,n,a){for(var o=e.key;0<i(o,r[t]);)if(++t===r.length)return n(a),!1;return i(o,r[t])===0||(n(function(){e.continue(r[t])}),!1)}),e)},tn.prototype.notEqual=function(e){return this.inAnyRange([[-1/0,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},tn.prototype.noneOf=function(){var e=fe.apply(de,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return Yt(this,xt)}var t=e.reduce(function(e,t){return e?e.concat([[e[e.length-1][1],t]]):[[-1/0,t]]},null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},tn.prototype.inAnyRange=function(e,t){var n=this,r=this._cmp,i=this._ascending,a=this._descending,o=this._min,s=this._max;if(e.length===0)return Xt(this);if(!e.every(function(e){return e[0]!==void 0&&e[1]!==void 0&&i(e[0],e[1])<=0}))return Yt(this,`First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower`,w.InvalidArgument);var c=!t||!1!==t.includeLowers,l=t&&!0===t.includeUppers,u,d=i;function f(e,t){return d(e[0],t[0])}try{(u=e.reduce(function(e,t){for(var n=0,i=e.length;n<i;++n){var a=e[n];if(r(t[0],a[1])<0&&0<r(t[1],a[0])){a[0]=o(a[0],t[0]),a[1]=s(a[1],t[1]);break}}return n===i&&e.push(t),e},[])).sort(f)}catch{return Yt(this,xt)}var p=0,m=l?function(e){return 0<i(e,u[p][1])}:function(e){return 0<=i(e,u[p][1])},h=c?function(e){return 0<a(e,u[p][0])}:function(e){return 0<=a(e,u[p][0])},g=m,t=new this.Collection(this,function(){return Qt(u[0][0],u[u.length-1][1],!c,!l)});return t._ondirectionchange=function(e){d=e===`next`?(g=m,i):(g=h,a),u.sort(f)},t._addAlgorithm(function(e,t,r){for(var a,o=e.key;g(o);)if(++p===u.length)return t(r),!1;return!m(a=o)&&!h(a)||(n._cmp(o,u[p][1])===0||n._cmp(o,u[p][0])===0||t(function(){e.continue(d===i?u[p][0]:u[p][1])}),!1)}),t},tn.prototype.startsWithAnyOf=function(){var e=fe.apply(de,arguments);return e.every(function(e){return typeof e==`string`})?e.length===0?Xt(this):this.inAnyRange(e.map(function(e){return[e,e+bt]})):Yt(this,`startsWithAnyOf() only works with strings`)};var en=tn;function tn(){}function nn(e){return k(function(t){return rn(t),e(t.target.error),!1})}function rn(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var an=`storagemutated`,on=`x-storagemutated-1`,sn=Lt(null,an),cn=(ln.prototype._lock=function(){return v(!D.global),++this._reculock,this._reculock!==1||D.global||(D.lockOwnerFor=this),this},ln.prototype._unlock=function(){if(v(!D.global),--this._reculock==0)for(D.global||(D.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var e=this._blockedFuncs.shift();try{A(e[1],e[0])}catch{}}return this},ln.prototype._locked=function(){return this._reculock&&D.lockOwnerFor!==this},ln.prototype.create=function(e){var t=this;if(this.mode){var n=this.db.idbdb,r=this.db._state.dbOpenError;if(v(!this.idbtrans),!e&&!n)switch(r&&r.name){case`DatabaseClosedError`:throw new w.DatabaseClosed(r);case`MissingAPIError`:throw new w.MissingAPI(r.message,r);default:throw new w.OpenFailed(r)}if(!this.active)throw new w.TransactionInactive;v(this._completion._state===null),(e=this.idbtrans=e||(this.db.core||n).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=k(function(n){rn(n),t._reject(e.error)}),e.onabort=k(function(n){rn(n),t.active&&t._reject(new w.Abort(e.error)),t.active=!1,t.on(`abort`).fire(n)}),e.oncomplete=k(function(){t.active=!1,t._resolve(),`mutatedParts`in e&&sn.storagemutated.fire(e.mutatedParts)})}return this},ln.prototype._promise=function(e,t,n){var r,i=this;return e===`readwrite`&&this.mode!==`readwrite`?yt(new w.ReadOnly(`Transaction is readonly`)):this.active?this._locked()?new O(function(r,a){i._blockedFuncs.push([function(){i._promise(e,t,n).then(r,a)},D])}):n?ut(function(){var e=new O(function(e,n){i._lock();var r=t(e,n,i);r&&r.then&&r.then(e,n)});return e.finally(function(){return i._unlock()}),e._lib=!0,e}):((r=new O(function(e,n){var r=t(e,n,i);r&&r.then&&r.then(e,n)}))._lib=!0,r):yt(new w.TransactionInactive)},ln.prototype._root=function(){return this.parent?this.parent._root():this},ln.prototype.waitFor=function(e){var t,n=this._root(),r=O.resolve(e),i=(n._waitingFor?n._waitingFor=n._waitingFor.then(function(){return r}):(n._waitingFor=r,n._waitingQueue=[],t=n.idbtrans.objectStore(n.storeNames[0]),function e(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(t.get(-1/0).onsuccess=e)}()),n._waitingFor);return new O(function(e,t){r.then(function(t){return n._waitingQueue.push(k(e.bind(null,t)))},function(e){return n._waitingQueue.push(k(t.bind(null,e)))}).finally(function(){n._waitingFor===i&&(n._waitingFor=null)})})},ln.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new w.Abort))},ln.prototype.table=function(e){var t=this._memoizedTables||={};if(l(t,e))return t[e];var n=this.schema[e];if(n)return(n=new this.db.Table(e,n,this)).core=this.db.core.table(e),t[e]=n;throw new w.NotFound(`Table `+e+` not part of transaction`)},ln);function ln(){}function un(e,t,n,r,i,a,o,s){return{name:e,keyPath:t,unique:n,multi:r,auto:i,compound:a,src:(n&&!o?`&`:``)+(r?`*`:``)+(i?`++`:``)+dn(t),type:s}}function dn(e){return typeof e==`string`?e:e?`[`+[].join.call(e,`+`)+`]`:``}function fn(e,t,n){return{name:e,primKey:t,indexes:n,mappedClass:null,idxByName:(r=function(e){return[e.name,e]},n.reduce(function(e,t,n){return t=r(t,n),t&&(e[t[0]]=t[1]),e},{}))};var r}var pn=function(e){try{return e.only([[]]),pn=function(){return[[]]},[[]]}catch{return pn=function(){return bt},bt}};function mn(e){return e==null?function(){}:typeof e==`string`?(t=e).split(`.`).length===1?function(e){return e[t]}:function(e){return b(e,t)}:function(t){return b(t,e)};var t}function hn(e){return[].slice.call(e)}var gn=0;function _n(e){return e==null?`:id`:typeof e==`string`?e:`[${e.join(`+`)}]`}function vn(e,t,n){function r(e){if(e.type===3)return null;if(e.type===4)throw Error(`Cannot convert never type to IDBKeyRange`);var n=e.lower,r=e.upper,i=e.lowerOpen,e=e.upperOpen;return n===void 0?r===void 0?null:t.upperBound(r,!!e):r===void 0?t.lowerBound(n,!!i):t.bound(n,r,!!i,!!e)}function i(e){var t,n,i=e.name;return{name:i,schema:e,mutate:function(e){var t=e.trans,n=e.type,a=e.keys,o=e.values,s=e.range;return new Promise(function(e,c){e=k(e);var l=t.objectStore(i),u=l.keyPath==null,d=n===`put`||n===`add`;if(!d&&n!==`delete`&&n!==`deleteRange`)throw Error(`Invalid operation type: `+n);var f,p=(a||o||{length:1}).length;if(a&&o&&a.length!==o.length)throw Error(`Given keys array must have same length as given values array.`);if(p===0)return e({numFailures:0,failures:{},results:[],lastResult:void 0});function m(e){++_,rn(e)}var h=[],g=[],_=0;if(n===`deleteRange`){if(s.type===4)return e({numFailures:_,failures:g,results:[],lastResult:void 0});h.push(f=s.type===3?l.clear():l.delete(r(s)))}else{var u=d?u?[o,a]:[o,null]:[a,null],v=u[0],y=u[1];if(d)for(var b=0;b<p;++b)h.push(f=y&&y[b]!==void 0?l[n](v[b],y[b]):l[n](v[b])),f.onerror=m;else for(b=0;b<p;++b)h.push(f=l[n](v[b])),f.onerror=m}function x(t){t=t.target.result,h.forEach(function(e,t){return e.error!=null&&(g[t]=e.error)}),e({numFailures:_,failures:g,results:n===`delete`?a:h.map(function(e){return e.result}),lastResult:t})}f.onerror=function(e){m(e),x(e)},f.onsuccess=x})},getMany:function(e){var t=e.trans,n=e.keys;return new Promise(function(e,r){e=k(e);for(var a,o=t.objectStore(i),s=n.length,c=Array(s),l=0,u=0,d=function(t){t=t.target,c[t._pos]=t.result,++u===l&&e(c)},f=nn(r),p=0;p<s;++p)n[p]!=null&&((a=o.get(n[p]))._pos=p,a.onsuccess=d,a.onerror=f,++l);l===0&&e(c)})},get:function(e){var t=e.trans,n=e.key;return new Promise(function(e,r){e=k(e);var a=t.objectStore(i).get(n);a.onsuccess=function(t){return e(t.target.result)},a.onerror=nn(r)})},query:(t=c,n=l,function(e){return new Promise(function(a,o){a=k(a);var s,c,l,u,d=e.trans,f=e.values,p=e.limit,m=e.query,h=(h=e.direction)??`next`,g=p===1/0?void 0:p,_=m.index,m=m.range,d=d.objectStore(i),d=_.isPrimaryKey?d:d.index(_.name),_=r(m);if(p===0)return a({result:[]});n?(m={query:_,count:g,direction:h},(s=f?d.getAll(m):d.getAllKeys(m)).onsuccess=function(e){return a({result:e.target.result})},s.onerror=nn(o)):t&&h===`next`?((s=f?d.getAll(_,g):d.getAllKeys(_,g)).onsuccess=function(e){return a({result:e.target.result})},s.onerror=nn(o)):(c=0,l=!f&&`openKeyCursor`in d?d.openKeyCursor(_,h):d.openCursor(_,h),u=[],l.onsuccess=function(){var e=l.result;return!e||(u.push(f?e.value:e.primaryKey),++c===p)?a({result:u}):void e.continue()},l.onerror=nn(o))})}),openCursor:function(e){var t=e.trans,n=e.values,a=e.query,o=e.reverse,s=e.unique;return new Promise(function(e,c){e=k(e);var l=a.index,u=a.range,d=t.objectStore(i),d=l.isPrimaryKey?d:d.index(l.name),l=o?s?`prevunique`:`prev`:s?`nextunique`:`next`,f=!n&&`openKeyCursor`in d?d.openKeyCursor(r(u),l):d.openCursor(r(u),l);f.onerror=nn(c),f.onsuccess=k(function(n){var r,i,a,o,s=f.result;s?(s.___id=++gn,s.done=!1,r=s.continue.bind(s),i=(i=s.continuePrimaryKey)&&i.bind(s),a=s.advance.bind(s),o=function(){throw Error(`Cursor not stopped`)},s.trans=t,s.stop=s.continue=s.continuePrimaryKey=s.advance=function(){throw Error(`Cursor not started`)},s.fail=k(c),s.next=function(){var e=this,t=1;return this.start(function(){return t--?e.continue():e.stop()}).then(function(){return e})},s.start=function(e){function t(){if(f.result)try{e()}catch(e){s.fail(e)}else s.done=!0,s.start=function(){throw Error(`Cursor behind last entry`)},s.stop()}var n=new Promise(function(e,t){e=k(e),f.onerror=nn(t),s.fail=t,s.stop=function(t){s.stop=s.continue=s.continuePrimaryKey=s.advance=o,e(t)}});return f.onsuccess=k(function(e){f.onsuccess=t,t()}),s.continue=r,s.continuePrimaryKey=i,s.advance=a,t(),n},e(s)):e(null)},c)})},count:function(e){var t=e.query,n=e.trans,a=t.index,o=t.range;return new Promise(function(e,t){var s=n.objectStore(i),s=a.isPrimaryKey?s:s.index(a.name),c=r(o),c=c?s.count(c):s.count();c.onsuccess=k(function(t){return e(t.target.result)}),c.onerror=nn(t)})}}}o=n,s=hn((n=e).objectStoreNames),u=0<s.length?o.objectStore(s[0]):{};var o,n={schema:{name:n.name,tables:s.map(function(e){return o.objectStore(e)}).map(function(e){var t=e.keyPath,n=e.autoIncrement,r=a(t),i={},r={name:e.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:t==null,compound:r,keyPath:t,autoIncrement:n,unique:!0,extractKey:mn(t)},indexes:hn(e.indexNames).map(function(t){return e.index(t)}).map(function(e){var t=e.name,n=e.unique,r=e.multiEntry,e=e.keyPath,t={name:t,compound:a(e),keyPath:e,unique:n,multiEntry:r,extractKey:mn(e)};return i[_n(e)]=t}),getIndexByKeyPath:function(e){return i[_n(e)]}};return i[`:id`]=r.primaryKey,t!=null&&(i[_n(t)]=r.primaryKey),r})},hasGetAll:0<s.length&&`getAll`in u&&!(typeof navigator<`u`&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604),hasIdb3Features:`getAllRecords`in u},s=n.schema,c=n.hasGetAll,l=n.hasIdb3Features,u=s.tables.map(i),d={};return u.forEach(function(e){return d[e.name]=e}),{stack:`dbcore`,transaction:e.transaction.bind(e),table:function(e){if(d[e])return d[e];throw Error(`Table '${e}' not found`)},MIN_KEY:-1/0,MAX_KEY:pn(t),schema:s}}function yn(e,n,r,i){return r=r.IDBKeyRange,n=vn(n,r,i),{dbcore:e.dbcore.reduce(function(e,n){return n=n.create,t(t({},e),n(e))},n)}}function bn(e,t){var n=t.db,n=yn(e._middlewares,n,e._deps,t);e.core=n.dbcore,e.tables.forEach(function(t){var n=t.name;e.core.schema.tables.some(function(e){return e.name===n})&&(t.core=e.core.table(n),e[n]instanceof e.Table)&&(e[n].core=t.core)})}function xn(e,t,n,r){n.forEach(function(n){var i=r[n];t.forEach(function(t){var r=function e(t,n){return m(t,n)||(t=s(t))&&e(t,n)}(t,n);(!r||`value`in r&&r.value===void 0)&&(t===e.Transaction.prototype||t instanceof e.Transaction?f(t,n,{get:function(){return this.table(n)},set:function(e){d(this,n,{value:e,writable:!0,configurable:!0,enumerable:!0})}}):t[n]=new e.Table(n,i))})})}function Sn(e,t){t.forEach(function(t){for(var n in t)t[n]instanceof e.Table&&delete t[n]})}function Cn(e,t){return e._cfg.version-t._cfg.version}function wn(e,t,n,r){var a=e._dbSchema,o=(n.objectStoreNames.contains(`$meta`)&&!a.$meta&&(a.$meta=fn(`$meta`,Mn(``)[0],[]),e._storeNames.push(`$meta`)),e._createTransaction(`readwrite`,e._storeNames,a)),s=(o.create(n),o._completion.catch(r),o._reject.bind(o)),c=D.transless||D;ut(function(){if(D.trans=o,D.transless=c,t!==0)return bn(e,n),l=t,((r=o).storeNames.includes(`$meta`)?r.table(`$meta`).get(`version`).then(function(e){return e??l}):O.resolve(l)).then(function(t){var r=e,a=t,s=o,c=n,l=[],t=r._versions,u=r._dbSchema=An(0,r.idbdb,c);return(t=t.filter(function(e){return e._cfg.version>=a})).length===0?O.resolve():(t.forEach(function(e){l.push(function(){var t,n,o,l=u,d=e._cfg.dbschema,f=(jn(r,l,c),jn(r,d,c),u=r._dbSchema=d,En(l,d)),p=(f.add.forEach(function(e){Dn(c,e[0],e[1].primKey,e[1].indexes)}),f.change.forEach(function(e){if(e.recreate)throw new w.Upgrade(`Not yet support for changing primary key`);var t=c.objectStore(e.name);e.add.forEach(function(e){return kn(t,e)}),e.change.forEach(function(e){t.deleteIndex(e.name),kn(t,e)}),e.del.forEach(function(e){return t.deleteIndex(e)})}),e._cfg.contentUpgrade);if(p&&e._cfg.version>a)return bn(r,c),s._memoizedTables={},t=ee(d),f.del.forEach(function(e){t[e]=l[e]}),Sn(r,[r.Transaction.prototype]),xn(r,[r.Transaction.prototype],i(t),t),s.schema=t,(n=pe(p))&&dt(),d=O.follow(function(){var e;(o=p(s))&&n&&(e=ft.bind(null,null),o.then(e,e))}),o&&typeof o.then==`function`?O.resolve(o):d.then(function(){return o})}),l.push(function(t){var n=e._cfg.dbschema,i=t;[].slice.call(i.db.objectStoreNames).forEach(function(e){return n[e]==null&&i.db.deleteObjectStore(e)}),Sn(r,[r.Transaction.prototype]),xn(r,[r.Transaction.prototype],r._storeNames,r._dbSchema),s.schema=r._dbSchema}),l.push(function(t){r.idbdb.objectStoreNames.contains(`$meta`)&&(Math.ceil(r.idbdb.version/10)===e._cfg.version?(r.idbdb.deleteObjectStore(`$meta`),delete r._dbSchema.$meta,r._storeNames=r._storeNames.filter(function(e){return e!==`$meta`})):t.objectStore(`$meta`).put(e._cfg.version,`version`))})}),function e(){return l.length?O.resolve(l.shift()(s.idbtrans)).then(e):O.resolve()}().then(function(){On(u,c)}))}).catch(s);var r,l;i(a).forEach(function(e){Dn(n,e,a[e].primKey,a[e].indexes)}),bn(e,n),O.follow(function(){return e.on.populate.fire(o)}).catch(s)})}function Tn(e,t){On(e._dbSchema,t),t.db.version%10!=0||t.objectStoreNames.contains(`$meta`)||t.db.createObjectStore(`$meta`).add(Math.ceil(t.db.version/10-1),`version`);var n=An(0,e.idbdb,t);jn(e,e._dbSchema,t);for(var r=0,i=En(n,e._dbSchema).change;r<i.length;r++){var a=(e=>{if(e.change.length||e.recreate)return console.warn(`Unable to patch indexes of table ${e.name} because it has changes on the type of index or primary key.`),{value:void 0};var n=t.objectStore(e.name);e.add.forEach(function(t){Ae&&console.debug(`Dexie upgrade patch: Creating missing index ${e.name}.${t.src}`),kn(n,t)})})(i[r]);if(typeof a==`object`)return a.value}}function En(e,t){var n,r={del:[],add:[],change:[]};for(n in e)t[n]||r.del.push(n);for(n in t){var i=e[n],a=t[n];if(i){var o={name:n,def:a,recreate:!1,del:[],add:[],change:[]};if(``+(i.primKey.keyPath||``)!=``+(a.primKey.keyPath||``)||i.primKey.auto!==a.primKey.auto)o.recreate=!0,r.change.push(o);else{var s=i.idxByName,c=a.idxByName,l=void 0;for(l in s)c[l]||o.del.push(l);for(l in c){var u=s[l],d=c[l];u?u.src!==d.src&&o.change.push(d):o.add.push(d)}(0<o.del.length||0<o.add.length||0<o.change.length)&&r.change.push(o)}}else r.add.push([n,a])}return r}function Dn(e,t,n,r){var i=e.db.createObjectStore(t,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});r.forEach(function(e){return kn(i,e)})}function On(e,t){i(e).forEach(function(n){t.db.objectStoreNames.contains(n)||(Ae&&console.debug(`Dexie: Creating missing table`,n),Dn(t,n,e[n].primKey,e[n].indexes))})}function kn(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function An(e,t,n){var r={};return g(t.objectStoreNames,0).forEach(function(e){for(var t=n.objectStore(e),i=un(dn(c=t.keyPath),c||``,!0,!1,!!t.autoIncrement,c&&typeof c!=`string`,!0),a=[],o=0;o<t.indexNames.length;++o){var s=t.index(t.indexNames[o]),c=s.keyPath,s=un(s.name,c,!!s.unique,!!s.multiEntry,!1,c&&typeof c!=`string`,!1);a.push(s)}r[e]=fn(e,i,a)}),r}function jn(e,t,n){for(var i=n.db.objectStoreNames,a=0;a<i.length;++a){var o=i[a],s=n.objectStore(o);e._hasGetAll=`getAll`in s;for(var c=0;c<s.indexNames.length;++c){var l,u=s.indexNames[c],d=s.index(u).keyPath,d=typeof d==`string`?d:`[`+g(d).join(`+`)+`]`;t[o]&&(l=t[o].idxByName[d])&&(l.name=u,delete t[o].idxByName[d],t[o].idxByName[u]=l)}}typeof navigator<`u`&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&r.WorkerGlobalScope&&r instanceof r.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function Mn(e){return e.split(`,`).map(function(e,t){var n=e.split(`:`),r=(r=n[1])?.trim(),n=(e=n[0].trim()).replace(/([&*]|\+\+)/g,``),i=/^\[/.test(n)?n.match(/^\[(.*)\]$/)[1].split(`+`):n;return un(n,i||null,/\&/.test(e),/\*/.test(e),/\+\+/.test(e),a(i),t===0,r)})}Pn.prototype._createTableSchema=fn,Pn.prototype._parseIndexSyntax=Mn,Pn.prototype._parseStoresSpec=function(e,t){var n=this;i(e).forEach(function(r){if(e[r]!==null){var i=n._parseIndexSyntax(e[r]),a=i.shift();if(!a)throw new w.Schema(`Invalid schema for table `+r+`: `+e[r]);if(a.unique=!0,a.multi)throw new w.Schema(`Primary key cannot be multiEntry*`);i.forEach(function(e){if(e.auto)throw new w.Schema(`Only primary key can be marked as autoIncrement (++)`);if(!e.keyPath)throw new w.Schema(`Index must have a name and cannot be an empty string`)}),a=n._createTableSchema(r,a,i),t[r]=a}})},Pn.prototype.stores=function(e){var t=this.db,e=(this._cfg.storesSource=this._cfg.storesSource?o(this._cfg.storesSource,e):e,t._versions),n={},r={};return e.forEach(function(e){o(n,e._cfg.storesSource),r=e._cfg.dbschema={},e._parseStoresSpec(n,r)}),t._dbSchema=r,Sn(t,[t._allTables,t,t.Transaction.prototype]),xn(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],i(r),r),t._storeNames=i(r),this},Pn.prototype.upgrade=function(e){return this._cfg.contentUpgrade=ke(this._cfg.contentUpgrade||T,e),this};var Nn=Pn;function Pn(){}var Fn=(()=>{var e,t,n;return typeof FinalizationRegistry<`u`&&typeof WeakRef<`u`?(e=new Set,t=new FinalizationRegistry(function(t){e.delete(t)}),{toArray:function(){return Array.from(e).map(function(e){return e.deref()}).filter(function(e){return e!==void 0})},add:function(n){var r=new WeakRef(n._novip);e.add(r),t.register(n._novip,r,r),e.size>n._options.maxConnections&&(r=e.values().next().value,e.delete(r),t.unregister(r))},remove:function(n){if(n)for(var r=e.values(),i=r.next();!i.done;){var a=i.value;if(a.deref()===n._novip)return e.delete(a),void t.unregister(a);i=r.next()}}}):(n=[],{toArray:function(){return n},add:function(e){n.push(e._novip)},remove:function(e){e&&(e=n.indexOf(e._novip))!==-1&&n.splice(e,1)}})})();function In(e,t){var n=e._dbNamesDB;return n||(n=e._dbNamesDB=new br(Ct,{addons:[],indexedDB:e,IDBKeyRange:t})).version(1).stores({dbnames:`name`}),n.table(`dbnames`)}function Ln(e){return e&&typeof e.databases==`function`}function Rn(e){return ut(function(){return D.letThrough=!0,e()})}function zn(e){return!(`from`in e)}var Bn=function(e,t){var n;if(!this)return n=new Bn,e&&`d`in e&&o(n,e),n;o(this,arguments.length?{d:1,from:e,to:1<arguments.length?t:e}:{d:0})};function Vn(e,t,n){var r=j(t,n);if(!isNaN(r)){if(0<r)throw RangeError();if(zn(e))return o(e,{from:t,to:n,d:1});var r=e.l,i=e.r;if(j(n,e.from)<0)return r?Vn(r,t,n):e.l={from:t,to:n,d:1,l:null,r:null},Gn(e);if(0<j(t,e.to))return i?Vn(i,t,n):e.r={from:t,to:n,d:1,l:null,r:null},Gn(e);j(t,e.from)<0&&(e.from=t,e.l=null,e.d=i?i.d+1:1),0<j(n,e.to)&&(e.to=n,e.r=null,e.d=e.l?e.l.d+1:1),t=!e.r,r&&!e.l&&Hn(e,r),i&&t&&Hn(e,i)}}function Hn(e,t){zn(t)||function e(t,n){var r=n.from,i=n.l,a=n.r;Vn(t,r,n.to),i&&e(t,i),a&&e(t,a)}(e,t)}function Un(e,t){var n=Wn(t),r=n.next();if(!r.done)for(var i=r.value,a=Wn(e),o=a.next(i.from),s=o.value;!r.done&&!o.done;){if(j(s.from,i.to)<=0&&0<=j(s.to,i.from))return!0;j(i.from,s.from)<0?i=(r=n.next(s.from)).value:s=(o=a.next(i.from)).value}return!1}function Wn(e){var t=zn(e)?null:{s:0,n:e};return{next:function(e){for(var n=0<arguments.length;t;)switch(t.s){case 0:if(t.s=1,n)for(;t.n.l&&j(e,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!n||j(e,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function Gn(e){var n,r,i,a=((a=e.r)?.d||0)-((a=e.l)?.d||0),a=1<a?`r`:a<-1?`l`:``;a&&(n=a==`r`?`l`:`r`,r=t({},e),i=e[a],e.from=i.from,e.to=i.to,e[a]=i[a],r[a]=i[n],(e[n]=r).d=Kn(r)),e.d=Kn(e)}function Kn(e){var t=e.r,e=e.l;return(t?e?Math.max(t.d,e.d):t.d:e?e.d:0)+1}function qn(e,t){return i(t).forEach(function(n){e[n]?Hn(e[n],t[n]):e[n]=function e(t){var n,r,i={};for(n in t)l(t,n)&&(r=t[n],i[n]=!r||typeof r!=`object`||ie.has(r.constructor)?r:e(r));return i}(t[n])}),e}function Jn(e,t){return e.all||t.all||Object.keys(e).some(function(n){return t[n]&&Un(t[n],e[n])})}u(Bn.prototype,((me={add:function(e){return Hn(this,e),this},addKey:function(e){return Vn(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(e){return Vn(t,e,e)}),this},hasKey:function(e){var t=Wn(this).next(e).value;return t&&j(t.from,e)<=0&&0<=j(t.to,e)}})[ce]=function(){return Wn(this)},me));var Yn={},Xn={},Zn=!1;function Qn(e){qn(Xn,e),Zn||(Zn=!0,setTimeout(function(){Zn=!1,$n(Xn,!(Xn={}))},0))}function $n(e,t){t===void 0&&(t=!1);var n=new Set;if(e.all)for(var r=0,i=Object.values(Yn);r<i.length;r++)er(s=i[r],e,n,t);else for(var a in e){var o,s,a=/^idb\:\/\/(.*)\/(.*)\//.exec(a);a&&(o=a[1],a=a[2],s=Yn[`idb://${o}/${a}`])&&er(s,e,n,t)}n.forEach(function(e){return e()})}function er(e,t,n,r){for(var i=[],a=0,o=Object.entries(e.queries.query);a<o.length;a++){for(var s=o[a],c=s[0],l=[],u=0,d=s[1];u<d.length;u++){var f=d[u];Jn(t,f.obsSet)?f.subscribers.forEach(function(e){return n.add(e)}):r&&l.push(f)}r&&i.push([c,l])}if(r)for(var p=0,m=i;p<m.length;p++){var h=m[p],c=h[0],l=h[1];e.queries.query[c]=l}}function tr(e){var t=e._state,n=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?yt(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var r=t.openCanceller,a=Math.round(10*e.verno),o=!1;function s(){if(t.openCanceller!==r)throw new w.DatabaseClosed(`db.open() was cancelled`)}function c(){return new O(function(r,l){if(s(),!n)throw new w.MissingAPI;var u=e.name,p=t.autoSchema||!a?n.open(u):n.open(u,a);if(!p)throw new w.MissingAPI;p.onerror=nn(l),p.onblocked=k(e._fireOnBlocked),p.onupgradeneeded=k(function(r){var i;d=p.transaction,t.autoSchema&&!e._options.allowEmptyDB?(p.onerror=rn,d.abort(),p.result.close(),(i=n.deleteDatabase(u)).onsuccess=i.onerror=k(function(){l(new w.NoSuchDatabase(`Database ${u} doesnt exist`))})):(d.onerror=nn(l),i=r.oldVersion>2**62?0:r.oldVersion,f=i<1,e.idbdb=p.result,o&&Tn(e,d),wn(e,i/10,d,l))},l),p.onsuccess=k(function(){d=null;var n,s,l,m,h,_,v=e.idbdb=p.result,y=g(v.objectStoreNames);if(0<y.length)try{var b=v.transaction((h=y).length===1?h[0]:h,`readonly`);if(t.autoSchema)_=v,m=b,(l=e).verno=_.version/10,m=l._dbSchema=An(0,_,m),l._storeNames=g(_.objectStoreNames,0),xn(l,[l._allTables],i(m),m);else if(jn(e,e._dbSchema,b),s=b,((s=En(An(0,(n=e).idbdb,s),n._dbSchema)).add.length||s.change.some(function(e){return e.add.length||e.change.length}))&&!o)return console.warn(`Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this.`),v.close(),a=v.version+1,o=!0,r(c());bn(e,b)}catch{}Fn.add(e),v.onversionchange=k(function(n){t.vcFired=!0,e.on(`versionchange`).fire(n)}),v.onclose=k(function(){e.close({disableAutoOpen:!1})}),f&&(y=e._deps,h=u,Ln(_=y.indexedDB)||h===Ct||In(_,y.IDBKeyRange).put({name:h}).catch(T)),r()},l)}).catch(function(e){switch(e?.name){case`UnknownError`:if(0<t.PR1398_maxLoop)return t.PR1398_maxLoop--,console.warn(`Dexie: Workaround for Chrome UnknownError on open()`),c();break;case`VersionError`:if(0<a)return a=0,c()}return O.reject(e)})}var l,u=t.dbReadyResolve,d=null,f=!1;return O.race([r,(typeof navigator>`u`?O.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(e){function t(){return indexedDB.databases().finally(e)}l=setInterval(t,100),t()}).finally(function(){return clearInterval(l)}):Promise.resolve()).then(c)]).then(function(){return s(),t.onReadyBeingFired=[],O.resolve(Rn(function(){return e.on.ready.fire(e.vip)})).then(function n(){var r;if(0<t.onReadyBeingFired.length)return r=t.onReadyBeingFired.reduce(ke,T),t.onReadyBeingFired=[],O.resolve(Rn(function(){return r(e.vip)})).then(n)})}).finally(function(){t.openCanceller===r&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function(n){t.dbOpenError=n;try{d&&d.abort()}catch{}return r===t.openCanceller&&e._close(),yt(n)}).finally(function(){t.openComplete=!0,u()}).then(function(){var t;return f&&(t={},e.tables.forEach(function(n){n.schema.indexes.forEach(function(r){r.name&&(t[`idb://${e.name}/${n.name}/${r.name}`]=new Bn(-1/0,[[[]]]))}),t[`idb://${e.name}/${n.name}/`]=t[`idb://${e.name}/${n.name}/:dels`]=new Bn(-1/0,[[[]]])}),sn(an).fire(t),$n(t,!0)),e})}function nr(e){function t(t){return e.next(t)}var n=i(t),r=i(function(t){return e.throw(t)});function i(e){return function(t){var t=e(t),i=t.value;return t.done?i:i&&typeof i.then==`function`?i.then(n,r):a(i)?Promise.all(i).then(n,r):n(i)}}return i(t)()}function rr(e,t,n){for(var r=a(e)?e.slice():[e],i=0;i<n;++i)r.push(t);return r}var ir={stack:`dbcore`,name:`VirtualIndexMiddleware`,level:1,create:function(e){return t(t({},e),{table:function(n){var r=e.table(n),n=r.schema,i=Object.create(null),a=[];function o(e,n,r){var s=_n(e),c=i[s]=i[s]||[],l=e==null?0:typeof e==`string`?1:e.length,u=0<n,s=t(t({},r),{name:u?`${s}(virtual-from:${r.name})`:r.name,lowLevelIndex:r,isVirtual:u,keyTail:n,keyLength:l,extractKey:mn(e),unique:!u&&r.unique});return c.push(s),s.isPrimaryKey||a.push(s),1<l&&o(l===2?e[0]:e.slice(0,l-1),n+1,r),c.sort(function(e,t){return e.keyTail-t.keyTail}),s}var s=o(n.primaryKey.keyPath,0,n.primaryKey);i[`:id`]=[s];for(var c=0,l=n.indexes;c<l.length;c++){var u=l[c];o(u.keyPath,0,u)}function d(n){var r,i=n.query.index;return i.isVirtual?t(t({},n),{query:{index:i.lowLevelIndex,range:(r=n.query.range,i=i.keyTail,{type:r.type===1?2:r.type,lower:rr(r.lower,r.lowerOpen?e.MAX_KEY:e.MIN_KEY,i),lowerOpen:!0,upper:rr(r.upper,r.upperOpen?e.MIN_KEY:e.MAX_KEY,i),upperOpen:!0})}}):n}return t(t({},r),{schema:t(t({},n),{primaryKey:s,indexes:a,getIndexByKeyPath:function(e){return(e=i[_n(e)])&&e[0]}}),count:function(e){return r.count(d(e))},query:function(e){return r.query(d(e))},openCursor:function(t){var n=t.query.index,i=n.keyTail,a=n.keyLength;return n.isVirtual?r.openCursor(d(t)).then(function(e){return e&&o(e)}):r.openCursor(t);function o(n){return Object.create(n,{continue:{value:function(r){r==null?t.unique?n.continue(n.key.slice(0,a).concat(t.reverse?e.MIN_KEY:e.MAX_KEY,i)):n.continue():n.continue(rr(r,t.reverse?e.MAX_KEY:e.MIN_KEY,i))}},continuePrimaryKey:{value:function(t,r){n.continuePrimaryKey(rr(t,e.MAX_KEY,i),r)}},primaryKey:{get:function(){return n.primaryKey}},key:{get:function(){var e=n.key;return a===1?e[0]:e.slice(0,a)}},value:{get:function(){return n.value}}})}}})}})}};function ar(e,t,n,r){return n||={},r||=``,i(e).forEach(function(i){var a,o,s;l(t,i)?(a=e[i],o=t[i],typeof a==`object`&&typeof o==`object`&&a&&o?(s=se(a))===se(o)?s===`Object`?ar(a,o,n,r+i+`.`):a!==o&&(n[r+i]=t[i]):n[r+i]=t[i]:a!==o&&(n[r+i]=t[i])):n[r+i]=void 0}),i(t).forEach(function(i){l(e,i)||(n[r+i]=t[i])}),n}function F(e,t){return t.type===`delete`?t.keys:t.keys||t.values.map(e.extractKey)}var or={stack:`dbcore`,name:`HooksMiddleware`,level:2,create:function(e){return t(t({},e),{table:function(r){var i=e.table(r),a=i.schema.primaryKey;return t(t({},i),{mutate:function(e){var o=D.trans,s=o.table(r).hook,c=s.deleting,u=s.creating,d=s.updating;switch(e.type){case`add`:if(u.fire===T)break;return o._promise(`readwrite`,function(){return f(e)},!0);case`put`:if(u.fire===T&&d.fire===T)break;return o._promise(`readwrite`,function(){return f(e)},!0);case`delete`:if(c.fire===T)break;return o._promise(`readwrite`,function(){return f(e)},!0);case`deleteRange`:if(c.fire===T)break;return o._promise(`readwrite`,function(){return function e(n,r,o){return i.query({trans:n,values:!1,query:{index:a,range:r},limit:o}).then(function(i){var a=i.result;return f({type:`delete`,keys:a,trans:n}).then(function(i){return 0<i.numFailures?Promise.reject(i.failures[0]):a.length<o?{failures:[],numFailures:0,lastResult:void 0}:e(n,t(t({},r),{lower:a[a.length-1],lowerOpen:!0}),o)})})}(e.trans,e.range,1e4)},!0)}return i.mutate(e);function f(e){var r,o,s,f=D.trans,p=e.keys||F(a,e);if(p)return(e=e.type===`add`||e.type===`put`?t(t({},e),{keys:p}):t({},e)).type!==`delete`&&(e.values=n([],e.values,!0)),e.keys&&(e.keys=n([],e.keys,!0)),r=i,s=p,((o=e).type===`add`?Promise.resolve([]):r.getMany({trans:o.trans,keys:s,cache:`immutable`})).then(function(t){var n=p.map(function(n,r){var i,o,s,p=t[r],m={onerror:null,onsuccess:null};return e.type===`delete`?c.fire.call(m,n,p,f):e.type===`add`||p===void 0?(i=u.fire.call(m,n,e.values[r],f),n==null&&i!=null&&(e.keys[r]=n=i,a.outbound||x(e.values[r],a.keyPath,n))):(i=ar(p,e.values[r]),(o=d.fire.call(m,i,n,p,f))&&(s=e.values[r],Object.keys(o).forEach(function(e){l(s,e)?s[e]=o[e]:x(s,e,o[e])}))),m});return i.mutate(e).then(function(r){for(var i=r.failures,a=r.results,o=r.numFailures,r=r.lastResult,s=0;s<p.length;++s){var c=(a||p)[s],l=n[s];c==null?l.onerror&&l.onerror(i[s]):l.onsuccess&&l.onsuccess(e.type===`put`&&t[s]?e.values[s]:c)}return{failures:i,results:a,numFailures:o,lastResult:r}}).catch(function(e){return n.forEach(function(t){return t.onerror&&t.onerror(e)}),Promise.reject(e)})});throw Error(`Keys missing`)}}})}})}};function sr(e,t,n){try{if(!t||t.keys.length<e.length)return null;for(var r=[],i=0,a=0;i<t.keys.length&&a<e.length;++i)j(t.keys[i],e[a])===0&&(r.push(n?S(t.values[i]):t.values[i]),++a);return r.length===e.length?r:null}catch{return null}}var cr={stack:`dbcore`,level:-1,create:function(e){return{table:function(n){var r=e.table(n);return t(t({},r),{getMany:function(e){var t;return e.cache?(t=sr(e.keys,e.trans._cache,e.cache===`clone`))?O.resolve(t):r.getMany(e).then(function(t){return e.trans._cache={keys:e.keys,values:e.cache===`clone`?S(t):t},t}):r.getMany(e)},mutate:function(e){return e.type!==`add`&&(e.trans._cache=null),r.mutate(e)}})}}}};function lr(e,t){return e.trans.mode===`readonly`&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!==`disabled`&&!t.schema.primaryKey.outbound}function ur(e,t){switch(e){case`query`:return t.values&&!t.unique;case`get`:case`getMany`:case`count`:case`openCursor`:return!1}}var dr={stack:`dbcore`,level:0,name:`Observability`,create:function(e){var n=e.schema.name,r=new Bn(e.MIN_KEY,e.MAX_KEY);return t(t({},e),{transaction:function(t,n,r){if(D.subscr&&n!==`readonly`)throw new w.ReadOnly(`Readwrite transaction in liveQuery context. Querier source: ${D.querier}`);return e.transaction(t,n,r)},table:function(o){function s(t){var t=t.query;return[t.index,new Bn((t=t.range).lower??e.MIN_KEY,t.upper??e.MAX_KEY)]}var c=e.table(o),l=c.schema,u=l.primaryKey,d=l.indexes,f=u.extractKey,p=u.outbound,m=u.autoIncrement&&d.filter(function(e){return e.compound&&e.keyPath.includes(u.keyPath)}),h=t(t({},c),{mutate:function(t){function i(e){return e=`idb://${n}/${o}/${e}`,h[e]||(h[e]=new Bn)}var s,d,f,p=t.trans,h=t.mutatedParts||={},g=i(``),_=i(`:dels`),v=t.type,y=t.type===`deleteRange`?[t.range]:t.type===`delete`?[t.keys]:t.values.length<50?[F(u,t).filter(function(e){return e}),t.values]:[],b=y[0],y=y[1],x=t.trans._cache;return a(b)?(g.addKeys(b),(v=v===`delete`||b.length===y.length?sr(b,x):null)||_.addKeys(b),(v||y)&&(s=i,d=v,f=y,l.indexes.forEach(function(e){var t=s(e.name||``);function n(t){return t==null?null:e.extractKey(t)}function r(n){e.multiEntry&&a(n)?n.forEach(function(e){return t.addKey(e)}):t.addKey(n)}(d||f).forEach(function(e,t){var i=d&&n(d[t]),t=f&&n(f[t]);j(i,t)!==0&&(i!=null&&r(i),t!=null)&&r(t)})}))):b?(y={from:(x=b.lower)??e.MIN_KEY,to:(v=b.upper)??e.MAX_KEY},_.add(y),g.add(y)):(g.add(r),_.add(r),l.indexes.forEach(function(e){return i(e.name).add(r)})),c.mutate(t).then(function(e){return!b||t.type!==`add`&&t.type!==`put`||(g.addKeys(e.results),m&&m.forEach(function(n){for(var r=t.values.map(function(e){return n.extractKey(e)}),a=n.keyPath.findIndex(function(e){return e===u.keyPath}),o=0,s=e.results.length;o<s;++o)r[o][a]=e.results[o];i(n.name).addKeys(r)})),p.mutatedParts=qn(p.mutatedParts||{},h),e})}}),g={get:function(e){return[u,new Bn(e.key)]},getMany:function(e){return[u,new Bn().addKeys(e.keys)]},count:s,query:s,openCursor:s};return i(g).forEach(function(e){h[e]=function(i){var a=D.subscr,s=!!a,l=lr(D,c)&&ur(e,i)?i.obsSet={}:a;if(s){var u,a=function(e){return e=`idb://${n}/${o}/${e}`,l[e]||(l[e]=new Bn)},d=a(``),m=a(`:dels`),s=g[e](i),h=s[0],s=s[1];if((e===`query`&&h.isPrimaryKey&&!i.values?m:a(h.name||``)).add(s),!h.isPrimaryKey){if(e!==`count`)return u=e===`query`&&p&&i.values&&c.query(t(t({},i),{values:!1})),c[e].apply(this,arguments).then(function(t){if(e===`query`){if(p&&i.values)return u.then(function(e){return e=e.result,d.addKeys(e),t});var n=i.values?t.result.map(f):t.result;(i.values?d:m).addKeys(n)}else{var r,a;if(e===`openCursor`)return a=i.values,(r=t)&&Object.create(r,{key:{get:function(){return m.addKey(r.primaryKey),r.key}},primaryKey:{get:function(){var e=r.primaryKey;return m.addKey(e),e}},value:{get:function(){return a&&d.addKey(r.primaryKey),r.value}}})}return t});m.add(r)}}return c[e].apply(this,arguments)}}),h}})}};function fr(e,n,r){var i;return r.numFailures===0?n:n.type===`deleteRange`||(i=n.keys?n.keys.length:`values`in n&&n.values?n.values.length:1,r.numFailures===i)?null:(i=t({},n),a(i.keys)&&(i.keys=i.keys.filter(function(e,t){return!(t in r.failures)})),`values`in i&&a(i.values)&&(i.values=i.values.filter(function(e,t){return!(t in r.failures)})),i)}function pr(e,t){return n=e,((r=t).lower===void 0||(r.lowerOpen?0<j(n,r.lower):0<=j(n,r.lower)))&&(n=e,(r=t).upper===void 0||(r.upperOpen?j(n,r.upper)<0:j(n,r.upper)<=0));var n,r}function mr(e,t,n,r,i,o){var s,c,l,u,d,f,p;return!n||n.length===0||(s=t.query.index,c=s.multiEntry,l=t.query.range,u=r.schema.primaryKey.extractKey,d=s.extractKey,f=(s.lowLevelIndex||s).extractKey,(r=n.reduce(function(e,n){var r=e,i=[];if(n.type===`add`||n.type===`put`)for(var o=new Bn,s=n.values.length-1;0<=s;--s){var f,p=n.values[s],m=u(p);!o.hasKey(m)&&(f=d(p),c&&a(f)?f.some(function(e){return pr(e,l)}):pr(f,l))&&(o.addKey(m),i.push(p))}switch(n.type){case`add`:var h=new Bn().addKeys(t.values?e.map(function(e){return u(e)}):e),r=e.concat(t.values?i.filter(function(e){return e=u(e),!h.hasKey(e)&&(h.addKey(e),!0)}):i.map(function(e){return u(e)}).filter(function(e){return!h.hasKey(e)&&(h.addKey(e),!0)}));break;case`put`:var g=new Bn().addKeys(n.values.map(function(e){return u(e)}));r=e.filter(function(e){return!g.hasKey(t.values?u(e):e)}).concat(t.values?i:i.map(function(e){return u(e)}));break;case`delete`:var _=new Bn().addKeys(n.keys);r=e.filter(function(e){return!_.hasKey(t.values?u(e):e)});break;case`deleteRange`:var v=n.range;r=e.filter(function(e){return!pr(u(e),v)})}return r},e))===e)?e:(p=function(e,t){return j(f(e),f(t))||j(u(e),u(t))},r.sort(t.direction===`prev`||t.direction===`prevunique`?function(e,t){return p(t,e)}:p),t.limit&&t.limit<1/0&&(r.length>t.limit?r.length=t.limit:e.length===t.limit&&r.length<t.limit&&(i.dirty=!0)),o?Object.freeze(r):r)}function hr(e,t){return j(e.lower,t.lower)===0&&j(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function gr(e,t){return((e,t,n,r)=>{if(e===void 0)return t===void 0?0:-1;if(t===void 0)return 1;if((e=j(e,t))===0){if(n&&r)return 0;if(n)return 1;if(r)return-1}return e})(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&0<=((e,t,n,r)=>{if(e===void 0)return t===void 0?0:1;if(t===void 0)return-1;if((e=j(e,t))===0){if(n&&r)return 0;if(n)return-1;if(r)return 1}return e})(e.upper,t.upper,e.upperOpen,t.upperOpen)}function _r(e,t,n,r){e.subscribers.add(n),r.addEventListener(`abort`,function(){var r,i;e.subscribers.delete(n),e.subscribers.size===0&&(r=e,i=t,setTimeout(function(){r.subscribers.size===0&&ue(i,r)},3e3))})}var vr={stack:`dbcore`,level:0,name:`Cache`,create:function(e){var n=e.schema.name;return t(t({},e),{transaction:function(t,r,i){var a,o,s=e.transaction(t,r,i);return r===`readwrite`&&(i=(a=new AbortController).signal,s.addEventListener(`abort`,(o=function(i){return function(){if(a.abort(),r===`readwrite`){for(var o=new Set,c=0,l=t;c<l.length;c++){var u=l[c],d=Yn[`idb://${n}/${u}`];if(d){var f=e.table(u),p=d.optimisticOps.filter(function(e){return e.trans===s});if(s._explicit&&i&&s.mutatedParts)for(var m=0,h=Object.values(d.queries.query);m<h.length;m++)for(var g=0,_=(b=h[m]).slice();g<_.length;g++)Jn((x=_[g]).obsSet,s.mutatedParts)&&(ue(b,x),x.subscribers.forEach(function(e){return o.add(e)}));else if(0<p.length){d.optimisticOps=d.optimisticOps.filter(function(e){return e.trans!==s});for(var v=0,y=Object.values(d.queries.query);v<y.length;v++)for(var b,x,ee,te=0,ne=(b=y[v]).slice();te<ne.length;te++)(x=ne[te]).res!=null&&s.mutatedParts&&(i&&!x.dirty?(ee=Object.isFrozen(x.res),ee=mr(x.res,x.req,p,f,x,ee),x.dirty?(ue(b,x),x.subscribers.forEach(function(e){return o.add(e)})):ee!==x.res&&(x.res=ee,x.promise=O.resolve({result:ee}))):(x.dirty&&ue(b,x),x.subscribers.forEach(function(e){return o.add(e)})))}}}o.forEach(function(e){return e()})}}})(!1),{signal:i}),s.addEventListener(`error`,o(!1),{signal:i}),s.addEventListener(`complete`,o(!0),{signal:i})),s},table:function(r){var i=e.table(r),a=i.schema.primaryKey;return t(t({},i),{mutate:function(e){var o,s=D.trans;return!a.outbound&&s.db._options.cache!==`disabled`&&!s.explicit&&s.idbtrans.mode===`readwrite`&&(o=Yn[`idb://${n}/${r}`])?(s=i.mutate(e),e.type!==`add`&&e.type!==`put`||!(50<=e.values.length||F(a,e).some(function(e){return e==null}))?(o.optimisticOps.push(e),e.mutatedParts&&Qn(e.mutatedParts),s.then(function(t){0<t.numFailures&&(ue(o.optimisticOps,e),(t=fr(0,e,t))&&o.optimisticOps.push(t),e.mutatedParts)&&Qn(e.mutatedParts)}),s.catch(function(){ue(o.optimisticOps,e),e.mutatedParts&&Qn(e.mutatedParts)})):s.then(function(n){var r=fr(0,t(t({},e),{values:e.values.map(function(e,r){var i;return n.failures[r]?e:(x(i=(i=a.keyPath)!=null&&i.includes(`.`)?S(e):t({},e),a.keyPath,n.results[r]),i)})}),n);o.optimisticOps.push(r),queueMicrotask(function(){return e.mutatedParts&&Qn(e.mutatedParts)})}),s):i.mutate(e)},query:function(e){var t,a,o,s,c,l,u;return lr(D,i)&&ur(`query`,e)?(t=(o=D.trans)?.db._options.cache===`immutable`,a=(o=D).requery,o=o.signal,l=((e,t,n,r)=>{var i=Yn[`idb://${e}/${t}`];if(!i)return[];if(!(e=i.queries[n]))return[null,!1,i,null];var a=e[(r.query?r.query.index.name:null)||``];if(!a)return[null,!1,i,null];switch(n){case`query`:var o=(s=r.direction)??`next`,s=a.find(function(e){return e.req.limit===r.limit&&e.req.values===r.values&&(e.req.direction??`next`)===o&&hr(e.req.query.range,r.query.range)});return s?[s,!0,i,a]:[a.find(function(e){return(`limit`in e.req?e.req.limit:1/0)>=r.limit&&(e.req.direction??`next`)===o&&(!r.values||e.req.values)&&gr(e.req.query.range,r.query.range)}),!1,i,a];case`count`:return s=a.find(function(e){return hr(e.req.query.range,r.query.range)}),[s,!!s,i,a]}})(n,r,`query`,e),u=l[0],s=l[2],c=l[3],u&&l[1]?u.obsSet=e.obsSet:(l=i.query(e).then(function(e){var n=e.result;if(u&&(u.res=n),t){for(var r=0,i=n.length;r<i;++r)Object.freeze(n[r]);Object.freeze(n)}return e}).catch(function(e){return c&&u&&ue(c,u),Promise.reject(e)}),u={obsSet:e.obsSet,promise:l,subscribers:new Set,type:`query`,req:e,dirty:!1},c?c.push(u):(c=[u],(s||=Yn[`idb://${n}/${r}`]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}}).queries.query[e.query.index.name||``]=c)),_r(u,c,a,o),u.promise.then(function(n){return n=mr(n.result,e,s?.optimisticOps,i,u,t),{result:t?n:S(n)}})):i.query(e)}})}})}};function yr(e,t){return new Proxy(e,{get:function(e,n,r){return n===`db`?t:Reflect.get(e,n,r)}})}xr.prototype.version=function(e){if(isNaN(e)||e<.1)throw new w.Type(`Given version is not a positive number`);if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new w.Schema(`Cannot add version when database is open`);this.verno=Math.max(this.verno,e);var t=this._versions,n=t.filter(function(t){return t._cfg.version===e})[0];return n||(n=new this.Version(e),t.push(n),t.sort(Cn),n.stores({}),this._state.autoSchema=!1),n},xr.prototype._whenReady=function(e){var t=this;return this.idbdb&&(this._state.openComplete||D.letThrough||this._vip)?e():new O(function(e,n){if(t._state.openComplete)return n(new w.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return void n(new w.DatabaseClosed);t.open().catch(T)}t._state.dbReadyPromise.then(e,n)}).then(e)},xr.prototype.use=function(e){var t=e.stack,n=e.create,r=e.level,e=e.name,i=(e&&this.unuse({stack:t,name:e}),this._middlewares[t]||(this._middlewares[t]=[]));return i.push({stack:t,create:n,level:r??10,name:e}),i.sort(function(e,t){return e.level-t.level}),this},xr.prototype.unuse=function(e){var t=e.stack,n=e.name,r=e.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(e){return r?e.create!==r:!!n&&e.name!==n})),this},xr.prototype.open=function(){var e=this;return A(Ue,function(){return tr(e)})},xr.prototype._close=function(){this.on.close.fire(new CustomEvent(`close`));var e=this._state;if(Fn.remove(this),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}e.isBeingOpened||(e.dbReadyPromise=new O(function(t){e.dbReadyResolve=t}),e.openCanceller=new O(function(t,n){e.cancelOpen=n}))},xr.prototype.close=function(e){var e=(e===void 0?{disableAutoOpen:!0}:e).disableAutoOpen,t=this._state;e?(t.isBeingOpened&&t.cancelOpen(new w.DatabaseClosed),this._close(),t.autoOpen=!1,t.dbOpenError=new w.DatabaseClosed):(this._close(),t.autoOpen=this._options.autoOpen||t.isBeingOpened,t.openComplete=!1,t.dbOpenError=null)},xr.prototype.delete=function(e){var t=this,n=(e===void 0&&(e={disableAutoOpen:!0}),0<arguments.length&&typeof arguments[0]!=`object`),r=this._state;return new O(function(i,a){function o(){t.close(e);var n=t._deps.indexedDB.deleteDatabase(t.name);n.onsuccess=k(function(){var e=t._deps,n=t.name,r;Ln(r=e.indexedDB)||n===Ct||In(r,e.IDBKeyRange).delete(n).catch(T),i()}),n.onerror=nn(a),n.onblocked=t._fireOnBlocked}if(n)throw new w.InvalidArgument(`Invalid closeOptions argument to db.delete()`);r.isBeingOpened?r.dbReadyPromise.then(o):o()})},xr.prototype.backendDB=function(){return this.idbdb},xr.prototype.isOpen=function(){return this.idbdb!==null},xr.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&e.name===`DatabaseClosed`},xr.prototype.hasFailed=function(){return this._state.dbOpenError!==null},xr.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(xr.prototype,"tables",{get:function(){var e=this;return i(this._allTables).map(function(t){return e._allTables[t]})},enumerable:!1,configurable:!0}),xr.prototype.transaction=function(){var e=function(e,t,n){var r=arguments.length;if(r<2)throw new w.InvalidArgument(`Too few arguments`);for(var i=Array(r-1);--r;)i[r-1]=arguments[r];return n=i.pop(),[e,ne(i),n]}.apply(this,arguments);return this._transaction.apply(this,e)},xr.prototype._transaction=function(e,t,n){var r,i,a=this,o=D.trans,s=(o&&o.db===this&&e.indexOf(`!`)===-1||(o=null),e.indexOf(`?`)!==-1);e=e.replace(`!`,``).replace(`?`,``);try{if(i=t.map(function(e){if(e=e instanceof a.Table?e.name:e,typeof e!=`string`)throw TypeError(`Invalid table argument to Dexie.transaction(). Only Table or String are allowed`);return e}),e==`r`||e===wt)r=wt;else{if(e!=`rw`&&e!=Tt)throw new w.InvalidArgument(`Invalid transaction mode: `+e);r=Tt}if(o){if(o.mode===wt&&r===Tt){if(!s)throw new w.SubTransaction(`Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY`);o=null}o&&i.forEach(function(e){if(o&&o.storeNames.indexOf(e)===-1){if(!s)throw new w.SubTransaction(`Table `+e+` not included in parent transaction.`);o=null}}),s&&o&&!o.active&&(o=null)}}catch(e){return o?o._promise(null,function(t,n){n(e)}):yt(e)}var c=function e(t,n,r,i,a){return O.resolve().then(function(){var o=D.transless||D,s=t._createTransaction(n,r,t._dbSchema,i),o=(s.explicit=!0,{trans:s,transless:o});if(i)s.idbtrans=i.idbtrans;else try{s.create(),s.idbtrans._explicit=!0,t._state.PR1398_maxLoop=3}catch(i){return i.name===C.InvalidState&&t.isOpen()&&0<--t._state.PR1398_maxLoop?(console.warn(`Dexie: Need to reopen db`),t.close({disableAutoOpen:!1}),t.open().then(function(){return e(t,n,r,null,a)})):yt(i)}var c,l=pe(a),o=(l&&dt(),O.follow(function(){var e;(c=a.call(s,s))&&(l?(e=ft.bind(null,null),c.then(e,e)):typeof c.next==`function`&&typeof c.throw==`function`&&(c=nr(c)))},o));return(c&&typeof c.then==`function`?O.resolve(c).then(function(e){return s.active?e:yt(new w.PrematureCommit(`Transaction committed too early. See http://bit.ly/2kdckMn`))}):o.then(function(){return c})).then(function(e){return i&&s._resolve(),s._completion.then(function(){return e})}).catch(function(e){return s._reject(e),yt(e)})})}.bind(null,this,r,i,o,n);return o?o._promise(r,c,`lock`):D.trans?A(D.transless,function(){return a._whenReady(c)}):this._whenReady(c)},xr.prototype.table=function(e){if(l(this._allTables,e))return this._allTables[e];throw new w.InvalidTable(`Table ${e} does not exist`)};var br=xr;function xr(e,n){var r,i,a,o,s,c=this,l=(this._middlewares={},this.verno=0,xr.dependencies),l=(this._options=n=t({addons:xr.addons,autoOpen:!0,indexedDB:l.indexedDB,IDBKeyRange:l.IDBKeyRange,cache:`cloned`,maxConnections:1e3},n),this._deps={indexedDB:n.indexedDB,IDBKeyRange:n.IDBKeyRange},n.addons),u=(this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this,{dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:T,dbReadyPromise:null,cancelOpen:T,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:n.autoOpen}),d=(u.dbReadyPromise=new O(function(e){u.dbReadyResolve=e}),u.openCanceller=new O(function(e,t){u.cancelOpen=t}),this._state=u,this.name=e,this.on=Lt(this,`populate`,`blocked`,`versionchange`,`close`,{ready:[ke,T]}),this.once=function(e,t){var n=function(){var r=[...arguments];c.on(e).unsubscribe(n),t.apply(c,r)};return c.on(e,n)},this.on.ready.subscribe=_(this.on.ready.subscribe,function(e){return function(t,n){xr.vip(function(){var r,i=c._state;i.openComplete?(i.dbOpenError||O.resolve().then(t),n&&e(t)):i.onReadyBeingFired?(i.onReadyBeingFired.push(t),n&&e(t)):(e(t),r=c,n||e(function e(){r.on.ready.unsubscribe(t),r.on.ready.unsubscribe(e)}))})}}),this.Collection=(r=this,Rt(N.prototype,function(e,t){this.db=r;var n=Dt,i=null;if(t)try{n=t()}catch(e){i=e}var t=e._ctx,e=t.table,a=e.hook.reading.fire;this._ctx={table:e,index:t.index,isPrimKey:!t.index||e.schema.primKey.keyPath&&t.index===e.schema.primKey.name,range:n,keysOnly:!1,dir:`next`,unique:``,algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:i,or:t.or,valueMapper:a===Se?null:a}})),this.Table=(i=this,Rt(It.prototype,function(e,t,n){this.db=i,this._tx=n,this.name=e,this.schema=t,this.hook=i._allTables[e]?i._allTables[e].hook:Lt(null,{creating:[Te,T],reading:[Ce,Se],updating:[De,T],deleting:[Ee,T]})})),this.Transaction=(a=this,Rt(cn.prototype,function(e,t,n,r,i){var o=this;e!==`readonly`&&t.forEach(function(e){e=(e=n[e])?.yProps,e&&(t=t.concat(e.map(function(e){return e.updatesTable})))}),this.db=a,this.mode=e,this.storeNames=t,this.schema=n,this.chromeTransactionDurability=r,this.idbtrans=null,this.on=Lt(this,`complete`,`error`,`abort`),this.parent=i||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new O(function(e,t){o._resolve=e,o._reject=t}),this._completion.then(function(){o.active=!1,o.on.complete.fire()},function(e){var t=o.active;return o.active=!1,o.on.error.fire(e),o.parent?o.parent._reject(e):t&&o.idbtrans&&o.idbtrans.abort(),yt(e)})})),this.Version=(o=this,Rt(Nn.prototype,function(e){this.db=o,this._cfg={version:e,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(s=this,Rt(en.prototype,function(e,t,n){if(this.db=s,this._ctx={table:e,index:t===`:id`?null:t,or:n},this._cmp=this._ascending=j,this._descending=function(e,t){return j(t,e)},this._max=function(e,t){return 0<j(e,t)?e:t},this._min=function(e,t){return j(e,t)<0?e:t},this._IDBKeyRange=s._deps.IDBKeyRange,!this._IDBKeyRange)throw new w.MissingAPI})),this.on(`versionchange`,function(e){console.warn(0<e.newVersion?`Another connection wants to upgrade database '${c.name}'. Closing db now to resume the upgrade.`:`Another connection wants to delete database '${c.name}'. Closing db now to resume the delete request.`),c.close({disableAutoOpen:!1})}),this.on(`blocked`,function(e){console.warn(!e.newVersion||e.newVersion<e.oldVersion?`Dexie.delete('${c.name}') was blocked`:`Upgrade '${c.name}' blocked by other connection holding version ${e.oldVersion/10}`)}),this._maxKey=pn(n.IDBKeyRange),this._createTransaction=function(e,t,n,r){return new c.Transaction(e,t,n,c._options.chromeTransactionDurability,r)},this._fireOnBlocked=function(e){c.on(`blocked`).fire(e),Fn.toArray().filter(function(e){return e.name===c.name&&e!==c&&!e._state.vcFired}).map(function(t){return t.on(`versionchange`).fire(e)})},this.use(cr),this.use(vr),this.use(dr),this.use(ir),this.use(or),new Proxy(this,{get:function(e,t,n){var r;return t===`_vip`||(t===`table`?function(e){return yr(c.table(e),d)}:(r=Reflect.get(e,t,n))instanceof It?yr(r,d):t===`tables`?r.map(function(e){return yr(e,d)}):t===`_createTransaction`?function(){return yr(r.apply(this,arguments),d)}:r)}}));this.vip=d,l.forEach(function(e){return e(c)})}var Sr,Fe=typeof Symbol<`u`&&`observable`in Symbol?Symbol.observable:`@@observable`,Cr=(wr.prototype.subscribe=function(e,t,n){return this._subscribe(e&&typeof e!=`function`?e:{next:e,error:t,complete:n})},wr.prototype[Fe]=function(){return this},wr);function wr(e){this._subscribe=e}try{Sr={indexedDB:r.indexedDB||r.mozIndexedDB||r.webkitIndexedDB||r.msIndexedDB,IDBKeyRange:r.IDBKeyRange||r.webkitIDBKeyRange}}catch{Sr={indexedDB:null,IDBKeyRange:null}}function Tr(e){var t,n=!1,r=new Cr(function(r){var i=pe(e),a,o=!1,s={},c={},l={get closed(){return o},unsubscribe:function(){o||(o=!0,a&&a.abort(),u&&sn.storagemutated.unsubscribe(p))}},u=(r.start&&r.start(l),!1),d=function(){return vt(m)};function f(){return Jn(c,s)}var p=function(e){qn(s,e),f()&&d()},m=function(){var l,m,h;!o&&Sr.indexedDB&&(s={},l={},a&&a.abort(),a=new AbortController,h=(t=>{var n=et();try{i&&dt();var r=ut(e,t);return r=i?r.finally(ft):r}finally{n&&tt()}})(m={subscr:l,signal:a.signal,requery:d,querier:e,trans:null}),u||=(sn.storagemutated.subscribe(p),!0),Promise.resolve(h).then(function(e){n=!0,t=e,o||m.signal.aborted||(f()||(c=l,f())?d():(s={},vt(function(){return!o&&r.next&&r.next(e)})))},function(e){n=!1,[`DatabaseClosedError`,`AbortError`].includes(e?.name)||o||vt(function(){o||r.error&&r.error(e)})}))};return setTimeout(d,0),l});return r.hasValue=function(){return n},r.getValue=function(){return t},r}var Er=br;function Dr(e){var t=kr;try{kr=!0,sn.storagemutated.fire(e),$n(e,!0)}finally{kr=t}}u(Er,t(t({},re),{delete:function(e){return new Er(e,{addons:[]}).delete()},exists:function(e){return new Er(e,{addons:[]}).open().then(function(e){return e.close(),!0}).catch(`NoSuchDatabaseError`,function(){return!1})},getDatabaseNames:function(e){try{return t=Er.dependencies,n=t.indexedDB,t=t.IDBKeyRange,(Ln(n)?Promise.resolve(n.databases()).then(function(e){return e.map(function(e){return e.name}).filter(function(e){return e!==Ct})}):In(n,t).toCollection().primaryKeys()).then(e)}catch{return yt(new w.MissingAPI)}var t,n},defineClass:function(){return function(e){o(this,e)}},ignoreTransaction:function(e){return D.trans?A(D.transless||Ue,e):e()},vip:Rn,async:function(e){return function(){try{var t=nr(e.apply(this,arguments));return t&&typeof t.then==`function`?t:O.resolve(t)}catch(e){return yt(e)}}},spawn:function(e,t,n){try{var r=nr(e.apply(n,t||[]));return r&&typeof r.then==`function`?r:O.resolve(r)}catch(e){return yt(e)}},currentTransaction:{get:function(){return D.trans||null}},waitFor:function(e,t){return e=O.resolve(typeof e==`function`?Er.ignoreTransaction(e):e).timeout(t||6e4),D.trans?D.trans.waitFor(e):e},Promise:O,debug:{get:function(){return Ae},set:function(e){je(e)}},derive:p,extend:o,props:u,override:_,Events:Lt,on:sn,liveQuery:Tr,extendObservabilitySet:qn,getByKeyPath:b,setByKeyPath:x,delByKeyPath:function(e,t){typeof t==`string`?x(e,t,void 0):`length`in t&&[].map.call(t,function(t){x(e,t,void 0)})},shallowClone:ee,deepClone:S,getObjectDiff:ar,cmp:j,asap:y,minKey:-1/0,addons:[],connections:{get:Fn.toArray},errnames:C,dependencies:Sr,cache:Yn,semVer:`4.4.5`,version:`4.4.5`.split(`.`).map(function(e){return parseInt(e)}).reduce(function(e,t,n){return e+t/10**(2*n)})})),Er.maxKey=pn(Er.dependencies.IDBKeyRange),typeof dispatchEvent<`u`&&typeof addEventListener<`u`&&(sn(an,function(e){kr||=(e=new CustomEvent(on,{detail:e}),kr=!0,dispatchEvent(e),!1)}),addEventListener(on,function(e){e=e.detail,kr||Dr(e)}));var Or,kr=!1,Ar=function(){};return typeof BroadcastChannel<`u`&&((Ar=function(){(Or=new BroadcastChannel(on)).onmessage=function(e){return e.data&&Dr(e.data)}})(),typeof Or.unref==`function`&&Or.unref(),sn(an,function(e){kr||Or.postMessage(e)})),typeof addEventListener<`u`&&(addEventListener(`pagehide`,function(e){if(!br.disableBfCache&&e.persisted){Ae&&console.debug(`Dexie: handling persisted pagehide`),Or?.close();for(var t=0,n=Fn.toArray();t<n.length;t++)n[t].close({disableAutoOpen:!1})}}),addEventListener(`pageshow`,function(e){!br.disableBfCache&&e.persisted&&(Ae&&console.debug(`Dexie: handling persisted pageshow`),Ar(),Dr({all:new Bn(-1/0,[[]])}))})),O.rejectionMapper=function(e,t){return!e||e instanceof ge||e instanceof TypeError||e instanceof SyntaxError||!e.name||!xe[e.name]?e:(t=new xe[e.name](t||e.message,e),`stack`in e&&f(t,`stack`,{get:function(){return this.inner.stack}}),t)},je(Ae),t(br,Object.freeze({__proto__:null,DEFAULT_MAX_CONNECTIONS:1e3,Dexie:br,Entity:kt,PropModification:Nt,RangeSet:Bn,add:function(e){return new Nt({add:e})},cmp:j,default:br,liveQuery:Tr,mergeRanges:Hn,rangesOverlap:Un,remove:function(e){return new Nt({remove:e})},replacePrefix:function(e,t){return new Nt({replacePrefix:[e,t]})}}),{default:br}),br})}))(),1),yu=Symbol.for(`Dexie`),bu=globalThis[yu]||(globalThis[yu]=vu.default);if(vu.default.semVer!==bu.semVer)throw Error(`Two different versions of Dexie loaded in the same app: ${vu.default.semVer} and ${bu.semVer}`);var xu={userId:`user_id`,backupRegistered:`backup_registered`,accessLinkToken:`access_link_token`,lastReadingDay:`last_reading_day`,lastBibleVersion:`last_bible_version`,readerBaseFontSize:`base_font_size`,localizationCatalogs:`localization-catalogs`},Su=`inductive-bible-study`,$=new class extends bu{constructor(){super(Su),this.version(1).stores({readings:`cacheKey,cachedAt`,catalogs:`cacheKey,cachedAt`,answers:`key,userId,syncState,updatedAt`,settings:`userId,cachedAt`,profileLevels:`userId,cachedAt`,preferences:`key`}),this.version(2).stores({readings:`cacheKey,cachedAt`,catalogs:`cacheKey,cachedAt`,answers:`key,userId,syncState,updatedAt`,settings:`userId,cachedAt`,profileLevels:`userId,cachedAt`,preferences:`key`,printStates:`readingKey,cachedAt`}),this.version(3).stores({readings:`cacheKey,cachedAt`,catalogs:`cacheKey,cachedAt`,answers:`key,userId,syncState,updatedAt`,settings:`userId,cachedAt`,profileLevels:`userId,cachedAt`,preferences:`key`,printStates:`readingKey,cachedAt`,privateContent:`cacheKey,cachedAt`}),this.version(4).stores({readings:`cacheKey,cachedAt`,catalogs:`cacheKey,cachedAt`,answers:`key,userId,syncState,updatedAt`,settings:`userId,cachedAt`,profileLevels:`userId,cachedAt`,preferences:`key`,printStates:`readingKey,cachedAt`,privateContent:`cacheKey,cachedAt`,backupCredentials:`userId`})}};async function Cu(){await $.transaction(`rw`,[$.readings,$.catalogs,$.answers,$.settings,$.profileLevels,$.preferences,$.printStates,$.privateContent,$.backupCredentials],async()=>{await Promise.all([$.readings.clear(),$.catalogs.clear(),$.answers.clear(),$.settings.clear(),$.profileLevels.clear(),$.preferences.clear(),$.printStates.clear(),$.privateContent.clear(),$.backupCredentials.clear()])})}async function wu(e){return(await $.preferences.get(e))?.value}async function Tu(e,t){await $.preferences.put({key:e,value:t,updatedAt:Date.now()}),window.dispatchEvent(new Event(`ibs-study-data-changed`))}async function Eu(e){return $.backupCredentials.get(e)}async function Du(e){return(await $.settings.get(e))?.cachedAt}async function Ou(e){return(await $.profileLevels.get(e))?.cachedAt}async function ku(e){return(await $.preferences.get(e))?.updatedAt}async function Au(e){await $.backupCredentials.put(e)}async function ju(e){await $.backupCredentials.delete(e)}async function Mu(e,t){await $.readings.put({cacheKey:e,payload:t,cachedAt:Date.now()})}async function Nu(e){return(await $.readings.get(e))?.payload}async function Pu(e,t){await $.catalogs.put({cacheKey:e,payload:t,cachedAt:Date.now()})}async function Fu(e,t){await $.settings.put({userId:e,payload:t,cachedAt:Date.now()}),window.dispatchEvent(new Event(`ibs-study-data-changed`))}async function Iu(e){return(await $.settings.get(e))?.payload}async function Lu(e,t){await $.profileLevels.put({userId:e,profileLevel:t,cachedAt:Date.now()}),window.dispatchEvent(new Event(`ibs-study-data-changed`))}async function Ru(e){return(await $.profileLevels.get(e))?.profileLevel}async function zu(e){return $.printStates.get(e)}async function Bu(e,t){await $.printStates.put({readingKey:e,...t,cachedAt:Date.now()})}async function Vu(e,t,n,r){await $.answers.put({key:Wu(e,t),userId:e,questionId:t,answerText:n,syncState:r,updatedAt:Date.now()}),window.dispatchEvent(new Event(`ibs-study-data-changed`))}async function Hu(e,t){return(await $.answers.bulkGet(t.map(t=>Wu(e,t)))).filter(e=>e!==void 0)}async function Uu(e){return $.answers.where(`userId`).equals(e).toArray()}function Wu(e,t){return`${e}:${t}`}var Gu,Ku;function qu(){return Gu===void 0?(Ku??=Yu(),Ku):Promise.resolve(Gu)}function Ju(e){Gu=e,Ku=Promise.resolve(e)}async function Yu(){let e=await wu(xu.userId);if(e!==void 0)return Gu=e,e;let t=Xu();return await Tu(xu.userId,t),Gu=t,t}function Xu(){let e=new Uint8Array(16);crypto.getRandomValues(e);let t=Date.now();e[0]=Math.floor(t/2**40)%256,e[1]=Math.floor(t/2**32)%256,e[2]=Math.floor(t/2**24)%256,e[3]=Math.floor(t/2**16)%256,e[4]=Math.floor(t/256)%256,e[5]=t%256;let n=new DataView(e.buffer);n.setUint8(6,n.getUint8(6)&15|112),n.setUint8(8,n.getUint8(8)&63|128);let r=Array.from(e,e=>e.toString(16).padStart(2,`0`));return`${r.slice(0,4).join(``)}-${r.slice(4,6).join(``)}-${r.slice(6,8).join(``)}-${r.slice(8,10).join(``)}-${r.slice(10,16).join(``)}`}var Zu={localOnly:`local_only`,pending:`pending`,syncing:`syncing`,synced:`synced`};async function Qu(e,t,n){return await Vu(await qu(),e,t,`local_only`),Zu.localOnly}async function $u(e){let t=e.readings.flatMap(e=>e.questions),n=await Hu(await qu(),t.map(e=>e.question_id));if(n.length===0)return e;let r=new Map(n.map(e=>[e.questionId,e.answerText]));return{...e,readings:e.readings.map(e=>({...e,questions:e.questions.map(e=>{let t=r.get(e.question_id);return t===void 0?e:{...e,answer_text:t}})}))}}var ed=X().trim().min(1).max(64),td=`GEN.EXO.LEV.NUM.DEU.JOS.JDG.RUT.1SA.2SA.1KI.2KI.1CH.2CH.EZR.NEH.EST.JOB.PSA.PRO.ECC.SNG.ISA.JER.LAM.EZK.DAN.HOS.JOL.AMO.OBA.JON.MIC.NAM.HAB.ZEP.HAG.ZEC.MAL.MAT.MRK.LUK.JHN.ACT.ROM.1CO.2CO.GAL.EPH.PHP.COL.1TH.2TH.1TI.2TI.TIT.PHM.HEB.JAS.1PE.2PE.1JN.2JN.3JN.JUD.REV`.split(`.`),nd=fu(td),rd=Q({book:Z().int().min(0).max(65),name:X().min(1),chapter_count:Z().int().positive().max(255)}).strict(),id=rd.extend({book:Z().int().min(0).max(65).transform((e,t)=>{let n=td[e];return n===void 0?(t.addIssue({code:U.custom,message:`Unknown Bible book number`}),mu):nd.parse(n)})}).strict(),ad=id.readonly(),od=id.extend({book:nd}).readonly(),sd=Q({version:ed,abbreviation:X().min(1),name:X().min(1),attribution:X().min(1),copyright:X().min(1),books:su(rd).min(1).readonly()}).strict(),cd=Q({version:ed,abbreviation:X().min(1),name:X().min(1),attribution:X().min(1),copyright:X().min(1),books:su(ad).min(1).readonly()}).strict(),ld=sd.readonly(),ud=cd.extend({requires_bible_access:au(),question_bank_language:X().min(1),picker_order:Z().int().nonnegative().max(4294967295),legacy:au(),reader_default:au(),profile_default:au()}).strict(),dd=ud.readonly(),fd=ud.extend({books:su(od).min(1).readonly()}).strict().readonly(),pd=e=>{let t=new Set(e.versions.map(e=>e.version));return e.versions.length>0&&t.size===e.versions.length},md=Q({versions:su(dd).readonly()}).strict();Q({versions:su(ld).readonly()}).strict().readonly().refine(pd),md.readonly().refine(pd);var hd=md.extend({versions:su(fd).readonly()}).strict().readonly().refine(pd),gd=Q({book:X().min(1),chapter:Z().int().positive().max(255),first_verse:Z().int().positive().max(255),last_verse:Z().int().positive().max(255)}).strict().refine(e=>e.last_verse>=e.first_verse).readonly(),_d=fu([`en`,`de`,`th`]),vd=Q({text:X(),layout:fu([``,`paragraph`,`paragraph_ident`,`mid_paragraph`,`quote`,`quote_1`,`quote_2`,`centered`,`blank`])}).strict().readonly(),yd=Q({verse:Z().int().positive().max(255),last_verse:Z().int().min(0).max(255).default(0),paragraph_start:au(),lines:su(vd).readonly()}).strict().readonly(),bd=Q({first_verse:Z().int().positive().max(255),last_verse:Z().int().positive().max(255),verses:su(yd).readonly().default([])}).strict().refine(e=>e.last_verse>=e.first_verse).readonly(),xd=Q({question_id:X().uuid().brand(`QuestionId`),kind:fu([`O`,`I`,`A`,`I/A`]),visible_text:X().min(1),start_verse:Z().int().positive().max(255),end_verse:Z().int().positive().max(255),level:Z().int().positive().max(15).default(1),hardness:Z().min(0).max(1),lines:Z().int().positive().max(20),answer:X().nullable(),answer_text:X().nullable(),same_at_easier_level:au().default(!1),same_at_harder_level:au().default(!1)}).strict().readonly();Q({sections:su(bd).readonly(),verse_numbers:su(Z().int().positive().max(255)).readonly()}).strict().readonly();var Sd=Q({book:X().min(1),chapter:Z().int().positive().max(255),questions:su(xd).readonly(),text_sections:su(bd).readonly(),verse_numbers:su(Z().int().positive().max(255)).readonly()}).strict().readonly(),Cd=Q({request_id:X().min(1)}).strict();lu(`kind`,[Cd.extend({bible_version:ed,access_key:X().nullable(),kind:du(`reading`),question_scope:fu([`profile_level`,`review`,`print`]),profile_level:Z().int().min(1).max(15),show_answers:au(),readings:su(gd).min(1).readonly()}).strict(),Cd.extend({kind:du(`public_reading_prefetch`),bible_version:ed,question_bank_language:_d,readings:su(gd).min(1).readonly(),assets:su(Q({book:X().min(1),chapter:Z().int().positive().max(255),question_bank_url:X().startsWith(`/`),question_bank_revision:X().regex(/^[a-f0-9]{64}$/),question_bank:iu(Uint8Array),bible_text_url:X().startsWith(`/`),bible_text_revision:X().regex(/^[a-f0-9]{64}$/),bible_text:iu(Uint8Array)}).strict().readonly()).min(1).readonly()}).strict(),Cd.extend({kind:du(`bible_version_catalog`),validate_access_key:au().default(!1),access_key:X().nullable()}).strict(),Cd.extend({kind:du(`bible_access_token`),access_key:X()}).strict(),Cd.extend({kind:du(`offline_content_preload`),access_key:X().nullable()}).strict()]).readonly();var wd=Q({request_id:X().min(1),kind:du(`reading`),status:du(`loaded`),readings:su(Sd).readonly()}).strict(),Td=Q({request_id:X().min(1),kind:du(`public_reading_prefetch`),status:du(`loaded`)}).strict(),Ed=Q({request_id:X().min(1),kind:du(`bible_version_catalog`),status:du(`loaded`),catalog:hd}).strict(),Dd=Q({request_id:X().min(1),kind:du(`bible_access_token`),status:du(`loaded`),token:X()}).strict(),Od=Q({cached:Z().int().nonnegative(),failed:Z().int().nonnegative()}).strict().readonly(),kd=Q({request_id:X().min(1),kind:du(`offline_content_preload`),status:du(`loaded`),public_assets:Od,private_content:Od}).strict(),Ad=Q({request_id:X().min(1),kind:fu([`reading`,`public_reading_prefetch`,`bible_version_catalog`,`bible_access_token`,`offline_content_preload`]),status:du(`error`),message:X().min(1)}).strict(),jd=Q({request_id:X().min(1),kind:fu([`reading`,`public_reading_prefetch`,`bible_version_catalog`,`bible_access_token`,`offline_content_preload`]),status:fu([`loaded`,`error`])}).passthrough(),Md=Q({request_id:X().min(1),kind:du(`reading`),status:du(`loaded`),readings:su(ou()).readonly()}).strict();cu([cu([wd,Td,Ed,Dd,kd]),Ad]).readonly();function Nd(e){return Md.safeParse(e).success}var Pd;function Fd(){if(Pd!==void 0)return Pd;let e=window.__ibsEarlyQuestionBankWorker??new Worker(new URL(`/assets/questionBankWorker-mIJIsK-2.js`,``+import.meta.url),{type:`module`});return Pd=e,window.__ibsEarlyQuestionBankWorker=e,e.addEventListener(`error`,()=>Id(e),{once:!0}),e.addEventListener(`messageerror`,()=>Id(e),{once:!0}),e}function Id(e){Pd===e&&(Pd=void 0),window.__ibsEarlyQuestionBankWorker===e&&delete window.__ibsEarlyQuestionBankWorker,e.terminate()}var Ld,Rd=0,zd=new Map,Bd;function Vd(e){return Kd({...e,kind:`reading`}).then(e=>{if(e.kind!==`reading`)throw Error(`Question worker returned the wrong response kind`);return e})}function Hd(){Yd()}function Ud(e,t=!1){if(!t&&Bd?.accessKey===e)return Bd.promise;let n=Kd({kind:`bible_version_catalog`,access_key:e,validate_access_key:t}).then(e=>{if(e.kind!==`bible_version_catalog`)throw Error(`Question worker returned the wrong response kind`);return e});if(!t){let t={accessKey:e,promise:n};Bd=t,n.catch(()=>{Bd===t&&(Bd=void 0)})}return n}async function Wd(e){let t=await Kd({kind:`bible_access_token`,access_key:e});if(t.kind!==`bible_access_token`)throw Error(`Question worker returned the wrong access response kind`);return t.token}function Gd(e){return Kd({kind:`offline_content_preload`,access_key:e}).then(e=>{if(e.kind!==`offline_content_preload`)throw Error(`Question worker returned the wrong offline-cache response kind`);return e})}function Kd(e){let t=Yd();(e.kind===`bible_version_catalog`||e.kind===`reading`)&&qd(t,e.kind===`reading`?e.bible_version:void 0);let n=`question-bank-${++Rd}`;return new Promise((r,i)=>{zd.set(n,{resolve:r,reject:i});try{t.postMessage({...e,request_id:n})}catch(e){zd.delete(n),i(e instanceof Error?e:Error(`Could not send question bank request`))}})}function qd(e,t){let n=window.__ibsEarlyQuestionBankAssets;if(!(n===void 0||t!==void 0&&n.bible_version!==t)){delete window.__ibsEarlyQuestionBankAssets;try{e.postMessage(n,n.assets.flatMap(({question_bank:e,bible_text:t})=>[Jd(e),Jd(t)]))}catch(e){console.debug(`Early public reading data could not be transferred to the question worker`,e)}}}function Jd(e){if(!(e.buffer instanceof ArrayBuffer))throw Error(`Early public reading data is not transferable`);return e.buffer}function Yd(){if(Ld!==void 0)return Ld;let e=Fd();return e.addEventListener(`message`,Xd),e.addEventListener(`error`,Zd),e.addEventListener(`messageerror`,Qd),Ld=e,e}function Xd(e){let t=jd.safeParse(e.data);if(!t.success){$d(Error(`Question worker returned an invalid response`));return}let n=zd.get(t.data.request_id);if(n!==void 0){if(t.data.status===`error`){let r=Ad.safeParse(e.data);if(!r.success){$d(Error(`Question worker returned an invalid error response`));return}zd.delete(t.data.request_id),n.reject(Error(r.data.message));return}if(t.data.kind===`bible_access_token`){let r=Dd.safeParse(e.data);if(!r.success){$d(Error(`Question worker returned an invalid access response`));return}zd.delete(t.data.request_id),n.resolve(r.data);return}if(t.data.kind===`bible_version_catalog`){let r=Ed.safeParse(e.data);if(!r.success){$d(Error(`Question worker returned an invalid catalog response`));return}zd.delete(t.data.request_id),n.resolve(r.data);return}if(t.data.kind===`offline_content_preload`){let r=kd.safeParse(e.data);if(!r.success){$d(Error(`Question worker returned an invalid offline-cache response`));return}zd.delete(t.data.request_id),n.resolve(r.data);return}if(!Nd(e.data)){$d(Error(`Question worker returned an invalid reading response`));return}zd.delete(t.data.request_id),n.resolve(e.data)}}function Zd(e){$d(Error(e.message||`Question worker stopped unexpectedly`))}function Qd(){$d(Error(`Question worker returned an unreadable message`))}function $d(e){Ld!==void 0&&Id(Ld),Ld=void 0;for(let t of zd.values())t.reject(e);zd.clear()}var ef=[`bible`,`family`,`answers`];function tf(e){if(e===null||!/^[A-Za-z0-9_-]{46}$/.test(e))return;let t=af(e);if(t?.byteLength!==34||t[0]!==3)return;let n=ef[t[1]??-1];if(n!==void 0)return{tier:n,encryptionKey:t.slice(2)}}function nf(e){let t=tf(e);return{extended_bible_access:t!==void 0,answer_access:t?.tier===`answers`,printer_access:t?.tier===`family`||t?.tier===`answers`}}function rf(){let e=/^#!(\/(?:[^/#]+\/)*)([A-Za-z0-9_.-]+)\/?$/.exec(window.location.hash),t=e?.[2];if(t===void 0||tf(t)===void 0)return;let n=e?.[1];return{key:t,destinationHash:n===void 0||n===`/`?``:`#!${n}`}}function af(e){try{let t=e.replaceAll(`-`,`+`).replaceAll(`_`,`/`),n=t.padEnd(Math.ceil(t.length/4)*4,`=`),r=atob(n),i=Uint8Array.from(r,e=>e.charCodeAt(0));return btoa(String.fromCharCode(...i)).replaceAll(`+`,`-`).replaceAll(`/`,`_`).replace(/=+$/,``)===e?i:void 0}catch(e){if(e instanceof DOMException&&e.name===`InvalidCharacterError`)return;throw e}}var of=Q({user_id:X().uuid(),access_key:X().nullable().default(null),chronological_study:au(),extended_bible_access:au(),answer_access:au(),show_answers:au(),printer_access:au(),direct_print:au(),show_level:au(),show_old_versions:au(),use_physical_bible:au(),hide_rating_buttons:au().default(!1),dark_theme:au().nullable().default(null)}).strict().readonly();function sf(e,t){return{...e,chronological_study:t.scope===`chronological`,show_answers:t.showAnswers&&e.answer_access,direct_print:t.directPrint&&e.printer_access,show_old_versions:t.showOldVersions&&e.extended_bible_access,use_physical_bible:t.usePhysicalBible,hide_rating_buttons:t.hideRatingButtons,dark_theme:t.darkTheme}}function cf(e){return{user_id:e,access_key:null,chronological_study:!1,extended_bible_access:!1,answer_access:!1,show_answers:!1,printer_access:!1,direct_print:!1,show_level:!0,show_old_versions:!1,use_physical_bible:!1,hide_rating_buttons:!1,dark_theme:null}}async function lf(){let e=await qu(),t=await Iu(e);if(t===void 0)return cf(e);let{settings:n,hadObsoleteFields:r}=hf({...t}),i=typeof n.access_key==`string`?n.access_key:null,a=of.parse({...cf(e),...n,...nf(i),user_id:e});return(r||a.extended_bible_access!==n.extended_bible_access||a.answer_access!==n.answer_access||a.printer_access!==n.printer_access)&&await Fu(e,a),a}async function uf(e){let t=tf(e);if(t===void 0)throw Error(`Access link is invalid`);let n=await lf();if(n.access_key===e||t.tier===`bible`&&n.access_key!==null&&await ff(n.access_key)===e)return df(e),!1;await Ud(e,!0);let r=e,i=n.user_id,a=nf(r);return await Fu(i,of.parse({...n,access_key:r,...a,show_answers:a.answer_access&&n.show_answers,direct_print:a.printer_access&&n.direct_print,show_old_versions:a.extended_bible_access&&n.show_old_versions,user_id:i})),df(e),!0}function df(e){let t=rf();if(t?.key===e){let e=new URL(window.location.href);e.hash=t.destinationHash,window.history.replaceState(window.history.state,``,`${e.pathname}${e.search}${e.hash}`)}}async function ff(e){let t=tf(e);if(t===void 0)throw Error(`Access key is invalid`);return t.tier===`bible`?e:Wd(e)}async function pf(e,t,n,r,i,a,o){let s=await qu(),c=sf(await lf(),{scope:e,showAnswers:t,directPrint:n,showOldVersions:r,usePhysicalBible:i,hideRatingButtons:a,darkTheme:o});return await Fu(s,c),c}var mf=[`name`,`bible_version_options`];function hf(e){let t=!1;for(let n of mf)Object.prototype.hasOwnProperty.call(e,n)&&(delete e[n],t=!0);return{settings:e,hadObsoleteFields:t}}var gf=`1|GEN 1-3
2|GEN 4-7
3|GEN 8-11
4|JOB 1-5
5|JOB 6-9
6|JOB 10-13
7|JOB 14-16
8|JOB 17-20
9|JOB 21-23
10|JOB 24-28
11|JOB 29-31
12|JOB 32-34
13|JOB 35-37
14|JOB 38-39
15|JOB 40-42
16|GEN 12-15
17|GEN 16-18
18|GEN 19-21
19|GEN 22-24
20|GEN 25-26
21|GEN 27-29
22|GEN 30-31
23|GEN 32-34
24|GEN 35-37
25|GEN 38-40
26|GEN 41-42
27|GEN 43-45
28|GEN 46-47
29|GEN 48-50
30|EXO 1-3
31|EXO 4-6
32|EXO 7-9
33|EXO 10-12
34|EXO 13-15
35|EXO 16-18
36|EXO 19-21
37|EXO 22-24
38|EXO 25-27
39|EXO 28-29
40|EXO 30-32
41|EXO 33-35
42|EXO 36-38
43|EXO 39-40
44|LEV 1-4
45|LEV 5-7
46|LEV 8-10
47|LEV 11-13
48|LEV 14-15
49|LEV 16-18
50|LEV 19-21
51|LEV 22-23
52|LEV 24-25
53|LEV 26-27
54|NUM 1-2
55|NUM 3-4
56|NUM 5-6
57|NUM 7
58|NUM 8-10
59|NUM 11-13
60|NUM 14-15
61|NUM 16-17
62|NUM 18-20
63|NUM 21-22
64|NUM 23-25
65|NUM 26-27
66|NUM 28-30
67|NUM 31-32
68|NUM 33-34
69|NUM 35-36
70|DEU 1-2
71|DEU 3-4
72|DEU 5-7
73|DEU 8-10
74|DEU 11-13
75|DEU 14-16
76|DEU 17-20
77|DEU 21-23
78|DEU 24-27
79|DEU 28-29
80|DEU 30-31
81|DEU 32-34;PSA 90
82|JOS 1-4
83|JOS 5-8
84|JOS 9-11
85|JOS 12-15
86|JOS 16-18
87|JOS 19-21
88|JOS 22-24
89|JDG 1-2
90|JDG 3-5
91|JDG 6-7
92|JDG 8-9
93|JDG 10-12
94|JDG 13-15
95|JDG 16-18
96|JDG 19-21
97|RUT
98|1SA 1-3
99|1SA 4-8
100|1SA 9-12
101|1SA 13-14
102|1SA 15-17
103|1SA 18-20;PSA 11;PSA 59
104|1SA 21-24;PSA 91
105|PSA 7;PSA 27;PSA 31;PSA 34;PSA 52
106|PSA 56;PSA 120;PSA 140-142
107|1SA 25-27
108|PSA 17;PSA 35;PSA 54;PSA 63
109|1SA 28-31;PSA 18
110|PSA 121;PSA 123-125;PSA 128-130
111|2SA 1-4
112|PSA 6;PSA 8-10;PSA 14;PSA 16;PSA 19;PSA 21
113|1CH 1-2
114|PSA 43-45;PSA 49;PSA 84-85;PSA 87
115|1CH 3-5
116|PSA 73;PSA 77-78
117|1CH 6
118|PSA 81;PSA 88;PSA 92-93
119|1CH 7-10
120|PSA 102-104
121|2SA 5;1CH 11-12
122|PSA 133
123|PSA 106-107
124|1CH 13-16
125|PSA 1-2;PSA 15;PSA 22-24;PSA 47;PSA 68
126|PSA 89;PSA 96;PSA 100-101;PSA 105;PSA 132
127|2SA 6-7;1CH 17
128|PSA 25;PSA 29;PSA 33;PSA 36;PSA 39
129|2SA 8-9;1CH 18
130|PSA 50;PSA 53;PSA 60;PSA 75
131|2SA 10;1CH 19;PSA 20
132|PSA 65-67;PSA 69-70
133|2SA 11-12;1CH 20
134|PSA 32;PSA 51;PSA 86;PSA 122
135|2SA 13-15
136|PSA 3-4;PSA 12-13;PSA 28;PSA 55
137|2SA 16-18
138|PSA 26;PSA 40;PSA 58;PSA 61-62;PSA 64
139|2SA 19-21
140|PSA 5;PSA 38;PSA 41-42
141|2SA 22-23;PSA 57
142|PSA 95;PSA 97-99
143|2SA 24;1CH 21-22;PSA 30
144|PSA 108-110
145|1CH 23-25
146|PSA 131;PSA 138-139;PSA 143-145
147|1CH 26-29;PSA 127
148|PSA 111-118
149|1KI 1-2;PSA 37;PSA 71;PSA 94
150|PSA 119
151|1KI 3-4
152|2CH 1;PSA 72
153|SNG
154|PRO 1-3
155|PRO 4-6
156|PRO 7-9
157|PRO 10-12
158|PRO 13-15
159|PRO 16-18
160|PRO 19-21
161|PRO 22-24
162|1KI 5-6;2CH 2-3
163|1KI 7;2CH 4
164|1KI 8;2CH 5
165|2CH 6-7;PSA 136
166|PSA 134;PSA 146-150
167|1KI 9;2CH 8
168|PRO 25-26
169|PRO 27-29
170|ECC 1-6
171|ECC 7-12
172|1KI 10-11;2CH 9
173|PRO 30-31
174|1KI 12-14
175|2CH 10-12
176|1KI 15;2CH 13-16
177|1KI 16;2CH 17
178|1KI 17-19
179|1KI 20-21
180|1KI 22;2CH 18
181|2CH 19-23
182|OBA;PSA 82-83
183|2KI 1-4
184|2KI 5-8
185|2KI 9-11
186|2KI 12-13;2CH 24
187|2KI 14;2CH 25
188|JON
189|2KI 15;2CH 26
190|ISA 1-4
191|ISA 5-8
192|AMO 1-5
193|AMO 6-9
194|2CH 27;ISA 9-12
195|MIC
196|2CH 28;2KI 16-17
197|ISA 13-17
198|ISA 18-22
199|ISA 23-27
200|2KI 18;2CH 29-31;PSA 48
201|HOS 1-7
202|HOS 8-14
203|ISA 28-30
204|ISA 31-34
205|ISA 35-36
206|ISA 37-39;PSA 76
207|ISA 40-43
208|ISA 44-48
209|2KI 19;PSA 46;PSA 80;PSA 135
210|ISA 49-53
211|ISA 54-58
212|ISA 59-63
213|ISA 64-66
214|2KI 20-21
215|2CH 32-33
216|NAM
217|2KI 22-23;2CH 34-35
218|ZEP
219|JER 1-3
220|JER 4-6
221|JER 7-9
222|JER 10-13
223|JER 14-17
224|JER 18-22
225|JER 23-25
226|JER 26-29
227|JER 30-31
228|JER 32-34
229|JER 35-37
230|JER 38-40;PSA 74;PSA 79
231|2KI 24-25;2CH 36
232|HAB
233|JER 41-45
234|JER 46-48
235|JER 49-50
236|JER 51-52
237|LAM 1-2
238|LAM 3-5
239|EZK 1-4
240|EZK 5-8
241|EZK 9-12
242|EZK 13-15
243|EZK 16-17
244|EZK 18-20
245|EZK 21-22
246|EZK 23-24
247|EZK 25-27
248|EZK 28-30
249|EZK 31-33
250|EZK 34-36
251|EZK 37-39
252|EZK 40-42
253|EZK 43-45
254|EZK 46-48
255|JOL
256|DAN 1-3
257|DAN 4-6
258|DAN 7-9
259|DAN 10-12
260|EZR 1-3
261|EZR 4-6;PSA 137
262|HAG
263|ZEC 1-4
264|ZEC 5-9
265|ZEC 10-14
266|EST 1-5
267|EST 6-10
268|EZR 7-10
269|NEH 1-5
270|NEH 6-7
271|NEH 8-10
272|NEH 11-13;PSA 126
273|MAL
274|LUK 1;JHN 1
275|MAT 1;LUK 2
276|MAT 2
277|MAT 3;MRK 1;LUK 3
278|MAT 4;LUK 4-5
279|JHN 2-4
280|MAT 8;MRK 2
281|JHN 5
282|MAT 12;MRK 3;LUK 6
283|MAT 5-7
284|MAT 9;LUK 7
285|MAT 11
286|LUK 11
287|MAT 13;LUK 8
288|MRK 4-5
289|MAT 10
290|MAT 14;MRK 6;LUK 9
291|JHN 6
292|MAT 15;MRK 7
293|MAT 16;MRK 8
294|MAT 17;MRK 9
295|MAT 18
296|JHN 7-8
297|JHN 9-10
298|LUK 10
299|LUK 12-13
300|LUK 14-15
301|LUK 16-17
302|JHN 11
303|LUK 18
304|MAT 19;MRK 10
305|MAT 20-21
306|LUK 19
307|MRK 11;JHN 12
308|MAT 22;MRK 12
309|MAT 23;LUK 20-21
310|MRK 13
311|MAT 24
312|MAT 25
313|MAT 26;MRK 14
314|LUK 22;JHN 13
315|JHN 14-17
316|MAT 27;MRK 15
317|LUK 23;JHN 18-19
318|MAT 28;MRK 16
319|LUK 24;JHN 20-21
320|ACT 1-3
321|ACT 4-6
322|ACT 7-8
323|ACT 9-10
324|ACT 11-12
325|ACT 13-14
326|JAS
327|ACT 15-16
328|GAL 1-3
329|GAL 4-6
330|ACT 17
331|1TH;2TH
332|ACT 18-19
333|1CO 1-4
334|1CO 5-8
335|1CO 9-11
336|1CO 12-14
337|1CO 15-16
338|2CO 1-4
339|2CO 5-9
340|2CO 10-13
341|ROM 1-3
342|ROM 4-7
343|ROM 8-10
344|ROM 11-13
345|ROM 14-16
346|ACT 20-23
347|ACT 24-26
348|ACT 27-28
349|COL;PHM
350|EPH
351|PHP
352|1TI
353|TIT
354|1PE
355|HEB 1-6
356|HEB 7-10
357|HEB 11-13
358|2TI
359|2PE;JUD
360|1JN
361|2JN;3JN
362|REV 1-5
363|REV 6-11
364|REV 12-18
365|REV 19-22
`,_f=Z().int().positive().max(65535).brand(`DayNumber`),vf=X().min(1).brand(`BibleBookAlias`),yf=Z().int().positive().max(255).brand(`ChapterNumber`),bf=fu([`profile_level`,`review`,`print`]),xf=Q({book:X().min(1),chapter:Z().int().positive().max(255),reference:X().min(1),first_verse:Z().int().positive().max(255),last_verse:Z().int().positive().max(255),questions:su(xd).readonly(),review_available:au().default(!1)}).strict(),Sf=xf.extend({text_sections:su(bd).readonly(),verse_numbers:su(Z().int().positive().max(255)).readonly()}).strict().readonly();Q({day_number:_f.nullable(),bible_version:ed,question_scope:bf.default(`profile_level`),show_answers:au().default(!1),attribution:X().min(1),copyright:X().min(1),readings:su(xf).min(1),previous_day:_f.nullable(),next_day:_f.nullable()}).strict().extend({readings:su(Sf).min(1).readonly()}).strict().readonly();var Cf=Q({bible_version:ed,books:su(Q({alias:vf,name:X().min(1),chapter_count:yf}).strict().readonly()).min(1).readonly()}).strict().readonly(),wf=_f.parse(1),Tf=Array.from({length:365},(e,t)=>_f.parse(t+1));async function Ef(){let e=await wu(xu.lastReadingDay);if(e===void 0)return;let t=Number(e),n=_f.safeParse(t);return n.success?n.data:void 0}async function Df(e){await Tu(xu.lastReadingDay,String(e))}async function Of(){let e=await wu(xu.lastBibleVersion);if(e===void 0)return;let t=ed.safeParse(e);return t.success?t.data:void 0}async function kf(e){await Tu(xu.lastBibleVersion,e)}var Af=class extends Error{status;name=`ReadingHttpError`;constructor(e){super(`Reading asset request failed with HTTP ${e}`),this.status=e}},jf=class extends Error{resource;name=`OfflineReadingError`;constructor(e,t){super(`No cached ${e} is available while offline`,t),this.resource=e}};function Mf(e){return ed.parse(e)}function Nf(e){return vf.parse(e)}function Pf(e){return yf.parse(e)}var Ff=5,If=new Map,Lf=new Map;async function Rf(e){let t=await Jf(e),n=Vf(t);return n===void 0?zf(e,t):n}function zf(e,t){let n=If.get(t);if(n!==void 0)return n;let r=Uf(e,t).finally(()=>{If.delete(t)});return If.set(t,r),r}async function Bf(e){let t=await Jf(e),n=Vf(t);if(n!==void 0)return n;let r=(async()=>{let n=await Nu(t);return n===void 0?zf(e,t):$u(n)})();return Hf(t,r),r.catch(()=>{Lf.get(t)===r&&Lf.delete(t)}),r}function Vf(e){let t=Lf.get(e);if(t!==void 0)return Lf.delete(e),Lf.set(e,t),t}function Hf(e,t){for(Lf.delete(e),Lf.set(e,t);Lf.size>Ff;){let e=Lf.keys().next().value;if(e===void 0)return;Lf.delete(e)}}async function Uf(e,t){let n=await Nu(t);if(n!==void 0)return $u(n);try{let n=await Yf(e,await qu());return Mu(t,n).catch(e=>{console.error(`Could not cache the loaded reading for offline use`,e)}),n}catch(e){throw!navigator.onLine||_u(e)?new jf(`reading`,{cause:e}):e}}var Wf=new Map;async function Gf(e){let t=await Jf(e);if(await Nu(t)!==void 0||!navigator.onLine)return;let n=Wf.get(t);if(n!==void 0)return n;let r=Rf(e).then(()=>void 0).finally(()=>Wf.delete(t));return Wf.set(t,r),r}async function Kf(e){let t=`catalog:${e}`,{catalog:n}=await Ud((await lf()).access_key),r=n.versions.find(t=>t.version===e);if(r===void 0)throw Error(`Bible version ${e} is absent from the static catalog`);let i=Cf.parse({bible_version:e,books:r.books.map(e=>({alias:vf.parse(e.book),name:e.name,chapter_count:e.chapter_count}))});return await Pu(t,i),i}async function qf(e){return(await Ud(e)).catalog}async function Jf(e){let t=await qu(),n=await Xf(t),r=e.kind===`chronological`?`day:${e.bible_version}:${e.question_scope}:${e.day_number}`:`chapter:${e.bible_version}:${e.question_scope}:${e.selection.book}:${e.selection.chapter}`;return`reader-data-v4:${t}:${n}:${e.show_answers?`with-reference-answers`:`without-reference-answers`}:${r}`}async function Yf(e,t){let n=await Xf(t),r=await lf(),i=(await Ud(r.access_key)).catalog.versions.find(t=>t.version===e.bible_version);if(i===void 0)throw Error(`Bible version ${e.bible_version} is absent from the static catalog`);let a=new Map(i.books.map(e=>[vf.parse(e.book),e.name])),o=Qf(e,i.books.map(e=>({alias:vf.parse(e.book),name:e.name,chapter_count:yf.parse(e.chapter_count)}))),s=await Vd({bible_version:e.bible_version,question_scope:e.question_scope,profile_level:n,show_answers:e.question_scope!==`review`&&e.show_answers,access_key:r.access_key,readings:o.map(({book:e,chapter:t,first_verse:n,last_verse:r})=>({book:e,chapter:t,first_verse:n,last_verse:r}))}),c=new Map(s.readings.map(e=>[`${e.book}:${e.chapter}`,{questions:e.questions,textSections:e.text_sections,verseNumbers:e.verse_numbers}])),l=await Zf(t,[...c.values()].flatMap(({questions:e})=>e.map(e=>e.question_id))),u=o.map(e=>{let t=c.get(`${e.book}:${e.chapter}`);if(t===void 0)throw Error(`Question worker omitted ${e.book} ${e.chapter}`);let n=Math.min(...t.textSections.map(e=>e.first_verse)),r=Math.max(...t.textSections.map(e=>e.last_verse));if(!Number.isFinite(n)||!Number.isFinite(r))throw Error(`Bible text is empty for ${e.book} ${e.chapter}`);let i=a.get(e.book);if(i===void 0)throw Error(`Bible catalog has no name for ${e.book}`);return{book:e.book,chapter:e.chapter,reference:e.label.replace(`{book}`,i),first_verse:n,last_verse:r,questions:t.questions.map(e=>{let t=l.get(e.question_id);return t===void 0?e:{...e,answer_text:t}}),review_available:t.questions.some(e=>l.has(e.question_id)),text_sections:t.textSections,verse_numbers:t.verseNumbers}}),d=e.kind===`chronological`?e.day_number:null;return{day_number:d,bible_version:e.bible_version,question_scope:e.question_scope,show_answers:e.question_scope!==`review`&&e.show_answers,attribution:i.attribution,copyright:i.copyright,readings:u,previous_day:d!==null&&d>1?_f.parse(d-1):null,next_day:d!==null&&d<365?_f.parse(d+1):null}}async function Xf(e){let t=await Ru(e);return typeof t==`number`&&Number.isInteger(t)&&t>=1&&t<=15?t:6}async function Zf(e,t){let n=new Map,r=await Hu(e,t);for(let e of r)n.set(e.questionId,e.answerText);return n}function Qf(e,t){if(e.kind===`chapter`)return[{book:e.selection.book,chapter:e.selection.chapter,first_verse:1,last_verse:255,label:`{book} ${e.selection.chapter}`}];let n=gf.split(/\r?\n/).find(t=>t.startsWith(`${e.day_number}|`));if(n===void 0)throw Error(`Chronological reading day ${e.day_number} is missing`);let r=n.split(`|`,2)[1];if(r===void 0)throw Error(`Chronological reading day ${e.day_number} is malformed`);return r.split(`;`).flatMap(e=>{let[n,r=``]=e.split(` `,2),i=t.find(e=>e.alias===n);if(i===void 0)throw Error(`Reading plan contains unsupported book ${n}`);if(r===``)return Array.from({length:i.chapter_count},(e,t)=>$f(i.alias,t+1));let[a,o]=r.split(`:`,2);if(a===void 0)throw Error(`Reading plan has no chapter in ${e}`);let s=a.split(`-`,2).map(ep),c=s[0],l=s[1]??c;if(c===void 0||l===void 0||l<c)throw Error(`Reading plan has an invalid chapter range in ${e}`);if(l>i.chapter_count)throw Error(`Reading plan exceeds ${i.alias}'s ${i.chapter_count} chapters`);let u=o===void 0?void 0:tp(o);return Array.from({length:l-c+1},(e,t)=>{let n=c+t;return u===void 0?$f(i.alias,n):{book:i.alias,chapter:yf.parse(n),first_verse:u.first,last_verse:u.last,label:u.first===u.last?`{book} ${n}:${u.first}`:`{book} ${n}:${u.first}-${u.last}`}})})}function $f(e,t){return{book:e,chapter:yf.parse(t),first_verse:1,last_verse:255,label:`{book} ${t}`}}function ep(e){let t=Number(e);if(!Number.isInteger(t)||t<1||t>255)throw Error(`Reading plan contains an invalid number: ${e}`);return t}function tp(e){let[t,n]=e.split(`-`,2);if(t===void 0)throw Error(`Reading plan contains an invalid verse range: ${e}`);let r=ep(t),i=n===void 0?r:ep(n);if(i<r)throw Error(`Reading plan contains a reversed verse range: ${e}`);return{first:r,last:i}}var np=[`en`,`th`,`de`];function rp(e,t){let n=t.find(t=>t.version===e)?.question_bank_language;if(n===`en`||n===`de`||n===`th`)return n;throw Error(`No question bank is configured for Bible version ${e}`)}function ip(e,t){let n=t.find(t=>t.question_bank_language===e&&t.profile_default)??t.find(t=>t.question_bank_language===e&&t.reader_default);if(n===void 0)throw Error(`No Bible version is configured for reader language ${e}`);return n.version}var ap=5,op=[`I/A`,`A`,`I`,`O`];function sp(e){return e.readings.flatMap((e,t)=>e.questions.map((n,r)=>({reading:e,readingIndex:t,questionIndex:r,question:n,sectionKey:lp(t,n)})))}function cp(e,t){let n=new Map;for(let r of e){if(r.question.level>t)continue;let e=n.get(r.sectionKey);(e===void 0||r.question.level>e)&&n.set(r.sectionKey,r.question.level)}return e.filter(e=>e.question.level===n.get(e.sectionKey))}function lp(e,t){return`${e}:${t.start_verse}-${t.end_verse}`}function up(e){let t=new Map;for(let n of sp(e)){let e=t.get(n.sectionKey);e===void 0?t.set(n.sectionKey,[n]):e.push(n)}return t}function dp(e,t,n){return e.find(e=>e.readingIndex===t&&n>=e.question.start_verse&&n<=e.question.end_verse)}function fp(e){let t=new Set(e.excludedQuestionIds??[]),n=e.contexts.filter(e=>!t.has(e.question.question_id)),r=Math.min(ap,Tp(e.contexts)),i=Cp(e.profileLevel).slice(-r)[e.questionOffset??0];return(i===void 0?op:[i,...op.filter(e=>e!==i)]).reduce((e,t)=>e??n.find(e=>e.question.kind===t),void 0)}function pp(e,t,n){return e.filter(e=>e.readingIndex===t).reduce((e,t)=>e===void 0||Sp(t,n)<Sp(e,n)?t:e,void 0)}function mp(e,t){return e.find(e=>e.readingIndex>t)}function hp(e,t,n){return e.find(e=>e.readingIndex===t&&e.question.start_verse>n)}function gp(e,t,n=[],r=`balanced`){let i=e.filter(e=>!n.includes(e.question.question_id)),a=[],o=new Set,s=Math.min(ap,Tp(e));if(r!==`balanced`){for(let e of Dp(r)){for(let t of kp(i.filter(t=>xp(t.question.hardness)===e))){if(a.length>=s)break;a.push(t)}if(a.length>=s)break}return a.sort((e,t)=>e.questionIndex-t.questionIndex).map(e=>e.question.question_id)}for(let e of Cp(t).slice(-s)){if(a.length>=s)break;let t=wp(i,e,r,o);t!==void 0&&(a.push(t),o.add(t.question.question_id))}for(let e of Ep(i,r)){if(a.length>=s)break;o.has(e.question.question_id)||(a.push(e),o.add(e.question.question_id))}return a.sort((e,t)=>e.questionIndex-t.questionIndex).map(e=>e.question.question_id)}function _p(e,t,n=[],r=`balanced`,i={}){let a=up(e),o={},s=new Set(n);for(let[e,c]of a){let a=i[e],l=a===void 0?c.filter(e=>!s.has(e.question.question_id)).length:a.filter(e=>!s.has(e)).length,u=l===0?Math.min(ap,Tp(c)):l;o[e]=gp(c,t,n,r).slice(0,u)}return o}function vp(e,t=[],n={}){return[...up(e).entries()].some(([e,r])=>{let i=r.filter(e=>!t.includes(e.question.question_id)).length,a=n[e],o=a===void 0?i:a.filter(e=>!t.includes(e)).length,s=Math.min(ap,Tp(r)),c=Math.min(s,i);return o!==c||i>c})}function yp(e,t,n,r,i,a=`balanced`){let o=up(e).get(n)??[],s=i[n],c=new Set(r),l=s===void 0?o.filter(e=>!c.has(e.question.question_id)).length:s.filter(e=>!c.has(e)).length,u=l===0?Math.min(ap,Tp(o)):l;return{...i,[n]:gp(o,t,r,a).slice(0,u)}}function bp(e){return e.length>Math.min(ap,Tp(e))}function xp(e){return e<.34?`difficulty-easy`:e<.67?`difficulty-medium`:`difficulty-hard`}function Sp(e,t){return t<e.question.start_verse?e.question.start_verse-t:t>e.question.end_verse?t-e.question.end_verse:0}function Cp(e){return e<=2?[`O`,`O`,`O`,`O`,`A`]:e<=4?[`O`,`O`,`O`,`I`,`A`]:e<=6?[`O`,`O`,`I`,`I`,`A`]:e<=10?[`O`,`I`,`I`,`A`,`I/A`]:[`I`,`I`,`A`,`I/A`,`I/A`]}function wp(e,t,n,r){let i=[t,...op.filter(e=>e!==t)];for(let t of i){let i=Op(e.filter(e=>e.question.kind===t&&!r.has(e.question.question_id)),n);if(i!==void 0)return i}}function Tp(e){let t=e[0];if(t===void 0)return 0;let{start_verse:n,end_verse:r}=t.question;return new Set(t.reading.verse_numbers.filter(e=>e>=n&&e<=r)).size}function Ep(e,t){return kp(e)}function Dp(e){return e===`easy`?[`difficulty-easy`,`difficulty-medium`,`difficulty-hard`]:[`difficulty-hard`,`difficulty-medium`,`difficulty-easy`]}function Op(e,t){let n=Ep(e,t);return t===`balanced`?Ap(n):n[0]}function kp(e){let t=[...e],n=new Uint32Array(t.length);globalThis.crypto.getRandomValues(n);for(let e=t.length-1;e>0;--e){let r=(n[e]??0)%(e+1),i=t[e],a=t[r];i!==void 0&&a!==void 0&&(t[e]=a,t[r]=i)}return t}function Ap(e){return e[0]}function jp(){customElements.get(`reader-print-actions`)===void 0&&fo(`reader-print-actions`,{content:void 0},(e,{element:t})=>{let n=t;return On(ic(n)),oc(Do,e.content,n)})}var Mp=L(`<reader-field>`,1);function Np(e){let t=Ja(()=>cc(()=>e.children));var n=z(Mp);return _a(n,$n(()=>er(e,`children`),t,{"prop:content":()=>e.children}),!1),n._$owner=A(),ka(),n}var Pp=class{constructor(e){this.value=e}valueOf(){return this.value}},Fp=class extends Pp{constructor(e=`???`){super(e)}toString(e){return`{${this.value}}`}},Ip=class extends Pp{constructor(e,t={}){super(e),this.opts=t}toString(e){if(e)try{return e.memoizeIntlObject(Intl.NumberFormat,this.opts).format(this.value)}catch(t){e.reportError(t)}return this.value.toString(10)}},Lp=class e extends Pp{static supportsValue(t){if(typeof t==`number`||t instanceof Date)return!0;if(t instanceof Pp)return e.supportsValue(t.valueOf());if(`Temporal`in globalThis){let e=globalThis.Temporal;if(t instanceof e.Instant||t instanceof e.PlainDateTime||t instanceof e.PlainDate||t instanceof e.PlainMonthDay||t instanceof e.PlainTime||t instanceof e.PlainYearMonth)return!0}return!1}constructor(t,n={}){t instanceof e?(n={...t.opts,...n},t=t.value):t instanceof Pp&&(t=t.valueOf()),typeof t==`object`&&`calendarId`in t&&n.calendar===void 0&&(n={...n,calendar:t.calendarId}),super(t),this.opts=n}[Symbol.toPrimitive](e){return e===`string`?this.toString():this.toNumber()}toNumber(){let e=this.value;if(typeof e==`number`)return e;if(e instanceof Date)return e.getTime();if(`epochMilliseconds`in e)return e.epochMilliseconds;if(`toZonedDateTime`in e)return e.toZonedDateTime(`UTC`).epochMilliseconds;throw TypeError(`Unwrapping a non-number value as a number`)}toString(e){if(e)try{return e.memoizeIntlObject(Intl.DateTimeFormat,this.opts).format(this.value)}catch(t){e.reportError(t)}return typeof this.value==`number`||this.value instanceof Date?new Date(this.value).toISOString():this.value.toString()}},Rp=100,zp=`⁨`,Bp=`⁩`;function Vp(e,t,n){return n===t||n instanceof Ip&&t instanceof Ip&&n.value===t.value||t instanceof Ip&&typeof n==`string`&&n===e.memoizeIntlObject(Intl.PluralRules,t.opts).select(t.value)}function Hp(e,t,n){return t[n]?Zp(e,t[n].value):(e.reportError(RangeError(`No default`)),new Fp)}function Up(e,t){let n=[],r=Object.create(null);for(let i of t)i.type===`narg`?r[i.name]=Wp(e,i.value):n.push(Wp(e,i));return{positional:n,named:r}}function Wp(e,t){switch(t.type){case`str`:return t.value;case`num`:return new Ip(t.value,{minimumFractionDigits:t.precision});case`var`:return Gp(e,t);case`mesg`:return Kp(e,t);case`term`:return qp(e,t);case`func`:return Jp(e,t);case`select`:return Yp(e,t);default:return new Fp}}function Gp(e,{name:t}){let n;if(e.params){if(Object.prototype.hasOwnProperty.call(e.params,t))n=e.params[t];else return new Fp(`$${t}`)}else if(e.args&&Object.prototype.hasOwnProperty.call(e.args,t))n=e.args[t];else return e.reportError(ReferenceError(`Unknown variable: $${t}`)),new Fp(`$${t}`);if(n instanceof Pp)return n;switch(typeof n){case`string`:return n;case`number`:return new Ip(n);case`object`:if(Lp.supportsValue(n))return new Lp(n);default:return e.reportError(TypeError(`Variable type not supported: $${t}, ${typeof n}`)),new Fp(`$${t}`)}}function Kp(e,{name:t,attr:n}){let r=e.bundle._messages.get(t);if(!r)return e.reportError(ReferenceError(`Unknown message: ${t}`)),new Fp(t);if(n){let i=r.attributes[n];return i?Zp(e,i):(e.reportError(ReferenceError(`Unknown attribute: ${n}`)),new Fp(`${t}.${n}`))}return r.value?Zp(e,r.value):(e.reportError(ReferenceError(`No value: ${t}`)),new Fp(t))}function qp(e,{name:t,attr:n,args:r}){let i=`-${t}`,a=e.bundle._terms.get(i);if(!a)return e.reportError(ReferenceError(`Unknown term: ${i}`)),new Fp(i);if(n){let t=a.attributes[n];if(t){e.params=Up(e,r).named;let n=Zp(e,t);return e.params=null,n}return e.reportError(ReferenceError(`Unknown attribute: ${n}`)),new Fp(`${i}.${n}`)}e.params=Up(e,r).named;let o=Zp(e,a.value);return e.params=null,o}function Jp(e,{name:t,args:n}){let r=e.bundle._functions[t];if(!r)return e.reportError(ReferenceError(`Unknown function: ${t}()`)),new Fp(`${t}()`);if(typeof r!=`function`)return e.reportError(TypeError(`Function ${t}() is not callable`)),new Fp(`${t}()`);try{let t=Up(e,n);return r(t.positional,t.named)}catch(n){return e.reportError(n),new Fp(`${t}()`)}}function Yp(e,{selector:t,variants:n,star:r}){let i=Wp(e,t);if(i instanceof Fp)return Hp(e,n,r);for(let t of n)if(Vp(e,i,Wp(e,t.key)))return Zp(e,t.value);return Hp(e,n,r)}function Xp(e,t){if(e.dirty.has(t))return e.reportError(RangeError(`Cyclic reference`)),new Fp;e.dirty.add(t);let n=[],r=e.bundle._useIsolating&&t.length>1;for(let i of t){if(typeof i==`string`){n.push(e.bundle._transform(i));continue}if(e.placeables++,e.placeables>Rp)throw e.dirty.delete(t),RangeError(`Too many placeables expanded: ${e.placeables}, max allowed is ${Rp}`);r&&n.push(zp),n.push(Wp(e,i).toString(e)),r&&n.push(Bp)}return e.dirty.delete(t),n.join(``)}function Zp(e,t){return typeof t==`string`?e.bundle._transform(t):Xp(e,t)}var Qp=class{constructor(e,t,n){this.dirty=new WeakSet,this.params=null,this.placeables=0,this.bundle=e,this.errors=t,this.args=n}reportError(e){if(!this.errors||!(e instanceof Error))throw e;this.errors.push(e)}memoizeIntlObject(e,t){let n=this.bundle._intls.get(e);n||(n={},this.bundle._intls.set(e,n));let r=JSON.stringify(t);return n[r]||(n[r]=new e(this.bundle.locales,t)),n[r]}};function $p(e,t){let n=Object.create(null);for(let[r,i]of Object.entries(e))t.includes(r)&&(n[r]=i.valueOf());return n}var em=[`unitDisplay`,`currencyDisplay`,`useGrouping`,`minimumIntegerDigits`,`minimumFractionDigits`,`maximumFractionDigits`,`minimumSignificantDigits`,`maximumSignificantDigits`];function tm(e,t){let n=e[0];if(n instanceof Fp)return new Fp(`NUMBER(${n.valueOf()})`);if(n instanceof Ip)return new Ip(n.valueOf(),{...n.opts,...$p(t,em)});if(n instanceof Lp)return new Ip(n.toNumber(),{...$p(t,em)});throw TypeError(`Invalid argument to NUMBER`)}var nm=[`dateStyle`,`timeStyle`,`fractionalSecondDigits`,`dayPeriod`,`hour12`,`weekday`,`era`,`year`,`month`,`day`,`hour`,`minute`,`second`,`timeZoneName`];function rm(e,t){let n=e[0];if(n instanceof Fp)return new Fp(`DATETIME(${n.valueOf()})`);if(n instanceof Lp||n instanceof Ip)return new Lp(n,$p(t,nm));throw TypeError(`Invalid argument to DATETIME`)}var im=new Map;function am(e){let t=Array.isArray(e)?e.join(` `):e,n=im.get(t);return n===void 0&&(n=new Map,im.set(t,n)),n}var om=class{constructor(e,{functions:t,useIsolating:n=!0,transform:r=e=>e}={}){this._terms=new Map,this._messages=new Map,this.locales=Array.isArray(e)?e:[e],this._functions={NUMBER:tm,DATETIME:rm,...t},this._useIsolating=n,this._transform=r,this._intls=am(e)}hasMessage(e){return this._messages.has(e)}getMessage(e){return this._messages.get(e)}addResource(e,{allowOverrides:t=!1}={}){let n=[];for(let r=0;r<e.body.length;r++){let i=e.body[r];if(i.id.startsWith(`-`)){if(t===!1&&this._terms.has(i.id)){n.push(Error(`Attempt to override an existing term: "${i.id}"`));continue}this._terms.set(i.id,i)}else{if(t===!1&&this._messages.has(i.id)){n.push(Error(`Attempt to override an existing message: "${i.id}"`));continue}this._messages.set(i.id,i)}}return n}formatPattern(e,t=null,n=null){if(typeof e==`string`)return this._transform(e);let r=new Qp(this,n,t);try{return Xp(r,e).toString(r)}catch(e){if(r.errors&&e instanceof Error)return r.errors.push(e),new Fp().toString(r);throw e}}},sm=/^(-?[a-zA-Z][\w-]*) *= */gm,cm=/\.([a-zA-Z][\w-]*) *= */y,lm=/\*?\[/y,um=/(-?[0-9]+(?:\.([0-9]+))?)/y,dm=/([a-zA-Z][\w-]*)/y,fm=/([$-])?([a-zA-Z][\w-]*)(?:\.([a-zA-Z][\w-]*))?/y,pm=/^[A-Z][A-Z0-9_-]*$/,mm=/([^{}\n\r]+)/y,hm=/([^\\"\n\r]*)/y,gm=/\\([\\"])/y,_m=/\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{6})/y,vm=/^\n+/,ym=/ +$/,bm=/ *\r?\n/g,xm=/( *)$/,Sm=/{\s*/y,Cm=/\s*}/y,wm=/\[\s*/y,Tm=/\s*] */y,Em=/\s*\(\s*/y,Dm=/\s*->\s*/y,Om=/\s*:\s*/y,km=/\s*,?\s*/y,Am=/\s+/y,jm=class{constructor(e){this.body=[],sm.lastIndex=0;let t=0;for(;;){let n=sm.exec(e);if(n===null)break;t=sm.lastIndex;try{this.body.push(s(n[1]))}catch(e){if(e instanceof SyntaxError)continue;throw e}}function n(n){return n.lastIndex=t,n.test(e)}function r(n,r){if(e[t]===n)return t++,!0;if(r)throw new r(`Expected ${n}`);return!1}function i(e,r){if(n(e))return t=e.lastIndex,!0;if(r)throw new r(`Expected ${e.toString()}`);return!1}function a(n){n.lastIndex=t;let r=n.exec(e);if(r===null)throw SyntaxError(`Expected ${n.toString()}`);return t=n.lastIndex,r}function o(e){return a(e)[1]}function s(e){let t=l(),n=c();if(t===null&&Object.keys(n).length===0)throw SyntaxError(`Expected message value or attributes`);return{id:e,value:t,attributes:n}}function c(){let e=Object.create(null);for(;n(cm);){let t=o(cm),n=l();if(n===null)throw SyntaxError(`Expected attribute value`);e[t]=n}return e}function l(){let r;if(n(mm)&&(r=o(mm)),e[t]===`{`||e[t]===`}`)return u(r?[r]:[],1/0);let i=x();return i?r?u([r,i],i.length):(i.value=ee(i.value,vm),u([i],i.length)):r?ee(r,ym):null}function u(r=[],i){for(;;){if(n(mm)){r.push(o(mm));continue}if(e[t]===`{`){r.push(d());continue}if(e[t]===`}`)throw SyntaxError(`Unbalanced closing brace`);let a=x();if(a){r.push(a),i=Math.min(i,a.length);continue}break}let a=r.length-1,s=r[a];typeof s==`string`&&(r[a]=ee(s,ym));let c=[];for(let e of r)e instanceof Mm&&(e=e.value.slice(0,e.value.length-i)),e&&c.push(e);return c}function d(){i(Sm,SyntaxError);let e=f();if(i(Cm))return e;if(i(Dm)){let t=h();return i(Cm,SyntaxError),{type:`select`,selector:e,...t}}throw SyntaxError(`Unclosed placeable`)}function f(){if(e[t]===`{`)return d();if(n(fm)){let[,e,t,n=null]=a(fm);if(e===`$`)return{type:`var`,name:t};if(i(Em)){let r=p();if(e===`-`)return{type:`term`,name:t,attr:n,args:r};if(pm.test(t))return{type:`func`,name:t,args:r};throw SyntaxError(`Function names must be all upper-case`)}return e===`-`?{type:`term`,name:t,attr:n,args:[]}:{type:`mesg`,name:t,attr:n}}return _()}function p(){let n=[];for(;;){switch(e[t]){case`)`:return t++,n;case void 0:throw SyntaxError(`Unclosed argument list`)}n.push(m()),i(km)}}function m(){let e=f();return e.type===`mesg`&&i(Om)?{type:`narg`,name:e.name,value:_()}:e}function h(){let e=[],t=0,i;for(;n(lm);){r(`*`)&&(i=t);let n=g(),a=l();if(a===null)throw SyntaxError(`Expected variant value`);e[t++]={key:n,value:a}}if(t===0)return null;if(i===void 0)throw SyntaxError(`Expected default variant`);return{variants:e,star:i}}function g(){i(wm,SyntaxError);let e;return e=n(um)?v():{type:`str`,value:o(dm)},i(Tm,SyntaxError),e}function _(){if(n(um))return v();if(e[t]===`"`)return y();throw SyntaxError(`Invalid expression`)}function v(){let[,e,t=``]=a(um);return{type:`num`,value:parseFloat(e),precision:t.length}}function y(){r(`"`,SyntaxError);let n=``;for(;;){if(n+=o(hm),e[t]===`\\`){n+=b();continue}if(r(`"`))return{type:`str`,value:n};throw SyntaxError(`Unclosed string literal`)}}function b(){if(n(gm))return o(gm);if(n(_m)){let[,e,t]=a(_m),n=parseInt(e||t,16);return n<=55295||57344<=n?String.fromCodePoint(n):`�`}throw SyntaxError(`Unknown escape sequence`)}function x(){let n=t;switch(i(Am),e[t]){case`.`:case`[`:case`*`:case`}`:case void 0:return!1;case`{`:return te(e.slice(n,t))}return e[t-1]===` `&&te(e.slice(n,t))}function ee(e,t){return e.replace(t,``)}function te(e){let t=e.replace(bm,`
`),n=xm.exec(e)[1].length;return new Mm(t,n)}}},Mm=class{constructor(e,t){this.value=e,this.length=t}},Nm=RegExp(`^([a-z]{2,3}|\\*)(?:-([a-z]{4}|\\*))?(?:-([a-z]{2}|\\*))?(?:-(([0-9][a-z0-9]{3}|[a-z0-9]{5,8})|\\*))?$`,`i`),Pm=class{constructor(e){let t=Nm.exec(e.replace(/_/g,`-`));if(!t){this.isWellFormed=!1;return}let[,n,r,i,a]=t;n&&(this.language=n.toLowerCase()),r&&(this.script=r[0].toUpperCase()+r.slice(1)),i&&(this.region=i.toUpperCase()),this.variant=a,this.isWellFormed=!0}isEqual(e){return this.language===e.language&&this.script===e.script&&this.region===e.region&&this.variant===e.variant}matches(e,t=!1,n=!1){return(this.language===e.language||t&&this.language===void 0||n&&e.language===void 0)&&(this.script===e.script||t&&this.script===void 0||n&&e.script===void 0)&&(this.region===e.region||t&&this.region===void 0||n&&e.region===void 0)&&(this.variant===e.variant||t&&this.variant===void 0||n&&e.variant===void 0)}toString(){return[this.language,this.script,this.region,this.variant].filter(e=>e!==void 0).join(`-`)}clearVariants(){this.variant=void 0}clearRegion(){this.region=void 0}addLikelySubtags(){let e=Lm(this.toString().toLowerCase());return e?(this.language=e.language,this.script=e.script,this.region=e.region,this.variant=e.variant,!0):!1}},Fm={ar:`ar-arab-eg`,"az-arab":`az-arab-ir`,"az-ir":`az-arab-ir`,be:`be-cyrl-by`,da:`da-latn-dk`,el:`el-grek-gr`,en:`en-latn-us`,fa:`fa-arab-ir`,ja:`ja-jpan-jp`,ko:`ko-kore-kr`,pt:`pt-latn-br`,sr:`sr-cyrl-rs`,"sr-ru":`sr-latn-ru`,sv:`sv-latn-se`,ta:`ta-taml-in`,uk:`uk-cyrl-ua`,zh:`zh-hans-cn`,"zh-hant":`zh-hant-tw`,"zh-hk":`zh-hant-hk`,"zh-mo":`zh-hant-mo`,"zh-tw":`zh-hant-tw`,"zh-gb":`zh-hant-gb`,"zh-us":`zh-hant-us`},Im=[`az`,`bg`,`cs`,`de`,`es`,`fi`,`fr`,`hu`,`it`,`lt`,`lv`,`nl`,`pl`,`ro`,`ru`];function Lm(e){if(Object.prototype.hasOwnProperty.call(Fm,e))return new Pm(Fm[e]);let t=new Pm(e);return t.language&&Im.includes(t.language)?(t.region=t.language.toUpperCase(),t):null}function Rm(e,t,n){let r=new Set,i=new Map;for(let e of t)new Pm(e).isWellFormed&&i.set(e,new Pm(e));outer:for(let t of e){let e=t.toLowerCase(),a=new Pm(e);if(a.language!==void 0){for(let t of i.keys())if(e===t.toLowerCase()){if(r.add(t),i.delete(t),n===`lookup`)return Array.from(r);if(n===`filtering`)continue;continue outer}for(let[e,t]of i.entries())if(t.matches(a,!0,!1)){if(r.add(e),i.delete(e),n===`lookup`)return Array.from(r);if(n===`filtering`)continue;continue outer}if(a.addLikelySubtags()){for(let[e,t]of i.entries())if(t.matches(a,!0,!1)){if(r.add(e),i.delete(e),n===`lookup`)return Array.from(r);if(n===`filtering`)continue;continue outer}}a.clearVariants();for(let[e,t]of i.entries())if(t.matches(a,!0,!0)){if(r.add(e),i.delete(e),n===`lookup`)return Array.from(r);if(n===`filtering`)continue;continue outer}if(a.clearRegion(),a.addLikelySubtags()){for(let[e,t]of i.entries())if(t.matches(a,!0,!1)){if(r.add(e),i.delete(e),n===`lookup`)return Array.from(r);if(n===`filtering`)continue;continue outer}}a.clearRegion();for(let[e,t]of i.entries())if(t.matches(a,!0,!0)){if(r.add(e),i.delete(e),n===`lookup`)return Array.from(r);if(n===`filtering`)continue;continue outer}}}return Array.from(r)}function zm(e,t,{strategy:n=`filtering`,defaultLocale:r}={}){let i=Rm(Array.from(e??[]).map(String),Array.from(t??[]).map(String),n);if(n===`lookup`){if(r===void 0)throw Error("defaultLocale cannot be undefined for strategy `lookup`");i.length===0&&i.push(r)}else r&&!i.includes(r)&&i.push(r);return i}function Bm(e,t){return Array.isArray(t)?t.map(t=>Vm(e,t)):Vm(e,t)}function Vm(e,t){for(let n of e)if(n.hasMessage(t))return n;return null}var Hm=`app-title-assessment = Inductive Bible Study
app-title-chooser = Choose your Bible study language
app-title-reader = Inductive Bible Study
app-reader-heading = Bible reading
app-reader-header-note = Read and review at your own pace
app-assessment-privacy = New profiles start at study level 6
app-reader-privacy = Questions are selected for your current study level
app-chooser-heading = Choose your language
app-chooser-header-note = Select English, ไทย, or Deutsch to begin
app-chooser-privacy = Choose a language and starting Bible version. New profiles begin at level 6.

local-data-title = Data is stored on this device
local-data-body = Answers, notes and study progress are stored in this browser. If you set up a backup, settings and answers are encrypted with your passkey before they are sent to the server.
local-data-warning = Clearing this site's browser data permanently removes local data. Delete any encrypted backup separately in Settings.
privacy-link = Privacy
privacy-title = Privacy
privacy-local-data = Local data
privacy-local-data-intro = This application stores study data locally. If the user chooses to set up a backup, settings and answers are encrypted with a passkey before being stored on the server.
privacy-includes = This includes, for example:
privacy-answers = answers
privacy-notes = notes
privacy-study-progress = study progress
privacy-settings = settings
privacy-indexeddb = This data is stored using browser storage such as IndexedDB.
privacy-not-uploaded = Study data stays on the device unless the user chooses an encrypted backup. The server stores only the encrypted settings and answers and the passkey credential record.
privacy-cannot-access = The operator cannot read the encrypted backup. The same passkey is required to restore it.
privacy-delete-warning = Clearing this site's browser data may permanently delete local data. It does not delete a server backup; delete that separately in Settings.
privacy-offline-storage = Offline storage
privacy-offline-intro = The application uses browser storage, a service worker and browser caching to provide its functionality and allow the application to work offline.
privacy-offline-use = These technologies are used only for application functionality and local data storage.
privacy-no-tracking-storage = They are not used for advertising, profiling or cross-site tracking.
privacy-necessary-storage = Storage that is strictly necessary to provide functionality requested by the user does not require consent under §25(2)(2) TDDDG.
privacy-hosting = Hosting
privacy-hosting-intro = This website is delivered through services provided by:
privacy-united-states = United States
privacy-technical-info = When the website is accessed, Cloudflare processes technical information required to deliver and protect the website.
privacy-technical-info-list = This may include:
privacy-ip-address = IP address
privacy-date-time = date and time of requests
privacy-requested-resources = requested resources
privacy-browser-device = browser and device information
privacy-routing-network = routing and network information
privacy-other-technical = other technical request information
privacy-cloudflare-processing = Cloudflare processes this information in connection with delivering, securing and operating the website.
privacy-no-content-transmission = Plaintext answers and settings are not sent. If a user chooses backup, encrypted data and passkey credential requests pass through Cloudflare to the server.
privacy-international = Cloudflare may process data internationally, including in the United States. Cloudflare provides safeguards for international transfers through its Data Processing Addendum, including the EU-U.S. Data Privacy Framework where applicable and the EU Standard Contractual Clauses.
privacy-cloudflare-policy = Further information about Cloudflare's processing is available in
privacy-cloudflare-policy-link = Cloudflare's Privacy Policy
privacy-no-analytics = No analytics or advertising
privacy-no-analytics-intro = This website does not use:
privacy-advertising = advertising
privacy-advertising-trackers = advertising trackers
privacy-cross-site-tracking = cross-site tracking
privacy-third-party-analytics = third-party analytics
privacy-profiling = profiling based on application data
privacy-retention = Retention
privacy-retention-study = Encrypted settings and answers are retained on the server only when a user creates a backup, until the user deletes it in Settings. The operator cannot decrypt the backup.
privacy-retention-technical = Technical information processed by Cloudflare is retained according to Cloudflare's service configuration and applicable contractual and legal requirements.
privacy-retention-visitors = The operator does not maintain a separate database of visitors or study activity.
privacy-contact = Contact
privacy-contact-body = For contact relating to this website, use the registrant contact mechanism provided for this domain through RDAP/WHOIS.
privacy-data-protection-rights = Data protection rights
privacy-rights-intro = Where personal data is processed in connection with delivery of the website, applicable data-protection law may provide rights including access, rectification, deletion, restriction of processing and objection.
privacy-rights-local-data = The operator cannot access locally stored study data or decrypt a backup. Users can delete local data from browser storage and delete an encrypted server backup separately in Settings.
privacy-rights-complaint = Where applicable, users also have the right to lodge a complaint with a competent data-protection supervisory authority.

language-chooser-label = Language

assessment-step = Question { $step }
assessment-progress = { $step } of { $total }
assessment-select-answer = Choose one answer
assessment-complete-eyebrow = Assessment complete
assessment-complete-heading = You are ready to begin the lesson
assessment-complete-body = Your answers are ready
assessment-start = Start lesson
assessment-retry = Try again
assessment-save-error = Your assessment result could not be saved
assessment-submit-error-heading = The lesson could not be started

profile-start-error-heading = The lesson could not be started
profile-start-error-body = Your starting level could not be saved. Try again to continue.
profile-retry = Try again
profile-lookup-error-heading = The lesson could not be opened
profile-lookup-error-body = Your saved level could not be checked

reader-aria-label = Bible reading in chronological order
reader-chapter-aria-label = Bible chapter selection
reader-plan-title = Chronological reading plan
reader-intro = Read the Bible and review the questions selected for you
reader-version-label = Bible version
reader-loading = Loading reading text
reader-error-eyebrow = Reading could not be opened
reader-error-http = Reading could not be loaded (HTTP { $status })
reader-error-generic = Reading could not be loaded. Please try again
reader-retry = Try again
reader-day-eyebrow = Daily reading
reader-day-heading = Day { $day }
reader-title-day = Day { $day } - Word Questions
reader-title-chapter = { $reference } - Word Questions
reader-questions-heading = Questions for review
reader-question-meta = { $kind } · Verses { $start_verse }–{ $end_verse }
reader-question-meta-single = { $kind } · Verse { $verse }
reader-navigation-label = Change reading day
reader-previous-day = Previous day
reader-next-day = Next day
reader-day-trigger = Choose reading day
reader-day-dialog-label = Reading day
reader-day-option = Day { $day }
reader-chapter-navigation-label = Change Bible chapter
reader-chapter-heading = { $book } { $chapter }
reader-previous-chapter = Previous chapter
reader-next-chapter = Next chapter
reader-controls = Reader controls
reader-settings = Settings
reader-close = Close
reader-back-to-reading = Back to reading
reader-language-label = Bible language
reader-language-english = English
reader-language-thai = ไทย
reader-language-german = Deutsch
reader-chapter-trigger = Choose { $book }, chapter { $chapter }
reader-chapter-dialog-label = Book and chapter
reader-choose-book = Book
reader-choose-chapter = Chapter
reader-toolbar-print = Print questions
reader-toolbar-undo = Undo
reader-toolbar-reset = Reset questions
reader-toolbar-randomize = Randomize questions
reader-toolbar-randomize-easy = Prefer easy questions
reader-toolbar-randomize-hard = Prefer hard questions
reader-toolbar-remove-one-per-section = Remove one question from each section
reader-toolbar-remove-easiest-question = Remove the easiest question from each section
print-preview-aria-label = Print preview
print-preview-heading = Review your worksheet
print-preview-page = Page { $page }
print-preview-print = Print
print-preview-close = Close
print-preview-error = The worksheet could not be prepared. Please try again
print-preview-progress-preparing = Preparing your print preview…
print-preview-progress-loading = Loading fonts…
print-preview-progress-serializing = Preparing page { $page } of { $total }…
print-preview-progress-initializing = Starting the PDF engine…
print-preview-progress-creating = Creating page { $page } of { $total }…
print-preview-progress-merging = Combining the PDF pages…
print-preview-progress-finalizing = Finishing the PDF…
print-preview-progress-rendering = Rendering preview page { $page } of { $total }…
print-preview-cancel = Cancel
reader-mode-label = Reading mode
reader-mode-study = Study mode
reader-mode-review = Review mode
reader-mode-print = Print mode
study-bible-questions-aria-label = Bible questions
study-no-bible-questions = There are no Bible questions left

review-aria-label = Reviewed answers

study-aria-label = Study question
study-show-question = Show question
study-hide-question = Hide question
study-answer-label = My answer
study-question-meta = { $kind } · { $verse_range }
reference-answer = Example answer
study-answer-submit = Answer
study-too-easy = Too easy
study-too-hard = Too hard
study-skip = Skip
print-aria-label = Questions for printing
print-no-questions = No questions remain to print
print-randomize-section = Randomize questions in { $reference }
print-randomize-section-title = Randomize questions in this section
print-randomize-section-easy = Prefer easy questions in { $reference }
print-randomize-section-easy-title = Prefer easy questions in this section
print-randomize-section-hard = Prefer hard questions in { $reference }
print-randomize-section-hard-title = Prefer hard questions in this section
print-remove-question = Remove question
print-page-number = { $page } / { $total }
difficulty-easy = Easy
difficulty-medium = Medium
difficulty-hard = Hard

question-kind-observation = Observation
question-kind-interpretation = Interpretation
question-kind-application = Application
question-kind-interpretation-application = Interpretation and application
question-kind-print-observation = O
question-kind-print-interpretation = I
question-kind-print-application = A
question-kind-print-interpretation-application = I/A

settings-use-physical-bible = Use a physical Bible
settings-one-year-plan = One Year Plan
settings-chronological-study = Use chronological Bible study
settings-chapter-selection = Choose any chapter
settings-bible-access-link = Bible access link
settings-bible-access-link-loading = Creating link…
settings-bible-access-link-error = Could not create access link.
settings-copy-bible-access-link = Copy Bible access link
settings-bible-access-link-copied = Bible access link copied.
settings-bible-access-link-copy-error = Could not copy Bible access link.
settings-backup-title = Encrypted backup
settings-backup-create = Set up backup
settings-backup-save = Save backup
settings-backup-restore = Restore backup
settings-backup-delete = Delete server backup
settings-backup-restore-confirm = Restoring replaces the settings and answers currently stored on this device. Continue?
settings-backup-delete-confirm = Delete the encrypted backup and its passkey record from the server?
settings-backup-save-success = Encrypted backup saved.
settings-backup-delete-success = Encrypted backup deleted.
settings-backup-error = Passkey backup failed: { $reason }
settings-delete-all-data = Delete all data
settings-delete-all-data-confirm = Permanently delete all study data stored on this device? Your encrypted server backup will remain and must be deleted separately.
settings-delete-all-data-busy = Deleting data…
settings-delete-all-data-error = Could not delete all data on this device. Try again.
settings-show-answers = Show answers
settings-hide-rating-buttons = Hide too easy / too hard buttons
settings-dark-theme = Dark theme
settings-show-old-versions = Show old Bible versions
settings-direct-print = Brother HL-1210W
settings-old-versions = Old versions
settings-install-pwa-mobile = Add to home screen
settings-install-pwa-desktop = Open as a standalone app
pwa-install-heading = Use Word Questions as an app
pwa-install-install = Install
pwa-install-not-now = Not now
settings-decrease-level = Decrease focus
settings-increase-level = Increase focus
settings-focus = Focus: { $description }
settings-decrease-text-size = Decrease text size
settings-increase-text-size = Increase text size
settings-font-size-letter = A
settings-difficulty-description =
    { $level ->
        [1] identify explicit facts
        [2] connect nearby facts
        [3] recognize sequence or pattern
        [4] infer direct meaning
        [5] identify meaningful relationships
        [6] derive grounded response
        [7] follow structure and progression
        [8] identify central idea
        [9] identify purpose or emphasis
        [10] derive specific application
        [11] recognize correction or challenge
        [12] infer motives or orientation
        [13] synthesize the whole
        [14] derive transferable principles
       *[15] lead sustained practice
    }

metadata-book = Book
metadata-chapter = Chapter
metadata-reference = Reference
metadata-version = Version: { $version }
`,Um=`app-title-assessment = Bibel Fragen
app-title-chooser = Sprache für die Bibelarbeit wählen
app-title-reader = Bibel Fragen
app-reader-heading = Bibellesen
app-reader-header-note = Lies und wiederhole in deinem eigenen Tempo
app-assessment-privacy = Neue Profile beginnen auf Lernstufe 6
app-reader-privacy = Fragen werden passend zu deiner aktuellen Lernstufe ausgewählt
app-chooser-heading = Sprache wählen
app-chooser-header-note = Wähle English, ไทย oder Deutsch, um zu beginnen
app-chooser-privacy = Wähle eine Sprache und eine erste Bibelübersetzung. Neue Profile beginnen auf Stufe 6.

local-data-title = Daten werden auf diesem Gerät gespeichert
local-data-body = Antworten, Notizen und Lernfortschritt werden in diesem Browser gespeichert. Wenn du ein Backup einrichtest, werden Einstellungen und Antworten vor der Übertragung mit deinem Passkey verschlüsselt.
local-data-warning = Das Löschen der Browserdaten entfernt lokale Daten dauerhaft. Ein verschlüsseltes Backup musst du separat in den Einstellungen löschen.
privacy-link = Datenschutz
privacy-title = Datenschutz
privacy-local-data = Lokale Daten
privacy-local-data-intro = Diese Anwendung speichert Lerndaten lokal. Wenn der Nutzer ein Backup einrichtet, werden Einstellungen und Antworten vor der Speicherung auf dem Server mit einem Passkey verschlüsselt.
privacy-includes = Dazu gehören zum Beispiel:
privacy-answers = Antworten
privacy-notes = Notizen
privacy-study-progress = Lernfortschritt
privacy-settings = Einstellungen
privacy-indexeddb = Diese Daten werden mit Browser-Speicher wie IndexedDB gespeichert.
privacy-not-uploaded = Lerndaten bleiben auf dem Gerät, sofern der Nutzer kein verschlüsseltes Backup einrichtet. Der Server speichert nur verschlüsselte Einstellungen und Antworten sowie den Passkey-Datensatz.
privacy-cannot-access = Der Betreiber kann das verschlüsselte Backup nicht lesen. Zum Wiederherstellen ist derselbe Passkey erforderlich.
privacy-delete-warning = Das Löschen der Browserdaten kann lokale Daten dauerhaft entfernen. Ein Server-Backup wird dadurch nicht gelöscht; dieses muss separat in den Einstellungen entfernt werden.
privacy-offline-storage = Offline-Speicher
privacy-offline-intro = Die Anwendung verwendet Browser-Speicher, einen Service Worker und Browser-Caching, damit sie funktioniert und offline genutzt werden kann.
privacy-offline-use = Diese Technologien werden nur für die Anwendungsfunktion und die lokale Datenspeicherung verwendet.
privacy-no-tracking-storage = Sie werden nicht für Werbung, Profilbildung oder websiteübergreifendes Tracking verwendet.
privacy-necessary-storage = Speicher, der für eine vom Nutzer gewünschte Funktion unbedingt erforderlich ist, benötigt nach §25(2)(2) TDDDG keine Einwilligung.
privacy-hosting = Hosting
privacy-hosting-intro = Diese Website wird durch Dienste von folgendem Anbieter bereitgestellt:
privacy-united-states = Vereinigte Staaten
privacy-technical-info = Beim Zugriff auf die Website verarbeitet Cloudflare technische Informationen, die für die Bereitstellung und den Schutz der Website erforderlich sind.
privacy-technical-info-list = Dazu können gehören:
privacy-ip-address = IP-Adresse
privacy-date-time = Datum und Uhrzeit der Anfragen
privacy-requested-resources = angeforderte Ressourcen
privacy-browser-device = Browser- und Geräteinformationen
privacy-routing-network = Routing- und Netzwerkinformationen
privacy-other-technical = sonstige technische Anfrageinformationen
privacy-cloudflare-processing = Cloudflare verarbeitet diese Informationen im Zusammenhang mit der Bereitstellung, Absicherung und dem Betrieb der Website.
privacy-no-content-transmission = Antworten und Einstellungen werden nicht unverschlüsselt gesendet. Wenn ein Nutzer ein Backup einrichtet, laufen verschlüsselte Daten und Passkey-Anfragen über Cloudflare zum Server.
privacy-international = Cloudflare kann Daten international verarbeiten, auch in den Vereinigten Staaten. Cloudflare bietet Schutzmaßnahmen für internationale Übermittlungen durch sein Data Processing Addendum, einschließlich des EU-U.S. Data Privacy Frameworks, sofern anwendbar, sowie der EU-Standardvertragsklauseln.
privacy-cloudflare-policy = Weitere Informationen zur Verarbeitung durch Cloudflare findest du in der
privacy-cloudflare-policy-link = Datenschutzrichtlinie von Cloudflare
privacy-no-analytics = Keine Analyse oder Werbung
privacy-no-analytics-intro = Diese Website verwendet keine:
privacy-advertising = Werbung
privacy-advertising-trackers = Werbe-Tracker
privacy-cross-site-tracking = websiteübergreifendes Tracking
privacy-third-party-analytics = Analyse durch Dritte
privacy-profiling = Profilbildung anhand von Anwendungsdaten
privacy-retention = Aufbewahrung
privacy-retention-study = Verschlüsselte Einstellungen und Antworten werden nur nach Einrichtung eines Backups auf dem Server gespeichert und bleiben dort, bis der Nutzer sie in den Einstellungen löscht. Der Betreiber kann das Backup nicht entschlüsseln.
privacy-retention-technical = Von Cloudflare verarbeitete technische Informationen werden entsprechend der Dienstkonfiguration von Cloudflare sowie den anwendbaren vertraglichen und gesetzlichen Anforderungen aufbewahrt.
privacy-retention-visitors = Der Betreiber führt keine separate Datenbank über Besucher oder Lernaktivitäten.
privacy-contact = Kontakt
privacy-contact-body = Für Kontakt zu dieser Website nutze bitte die für diese Domain vorgesehene Kontaktmöglichkeit des Registranten über RDAP/WHOIS.
privacy-data-protection-rights = Datenschutzrechte
privacy-rights-intro = Wenn personenbezogene Daten im Zusammenhang mit der Bereitstellung der Website verarbeitet werden, können nach dem anwendbaren Datenschutzrecht Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Widerspruch bestehen.
privacy-rights-local-data = Der Betreiber kann lokal gespeicherte Lerndaten nicht abrufen und ein Backup nicht entschlüsseln. Nutzer können lokale Daten im Browser-Speicher und ein verschlüsseltes Server-Backup separat in den Einstellungen löschen.
privacy-rights-complaint = Soweit anwendbar, haben Nutzer außerdem das Recht, sich bei einer zuständigen Datenschutzaufsichtsbehörde zu beschweren.

language-chooser-label = Sprache

assessment-step = Frage { $step }
assessment-progress = { $step } von { $total }
assessment-select-answer = Wähle eine Antwort
assessment-complete-eyebrow = Einstufung abgeschlossen
assessment-complete-heading = Du kannst mit der Lektion beginnen
assessment-complete-body = Deine Antworten sind bereit
assessment-start = Lektion beginnen
assessment-retry = Erneut versuchen
assessment-save-error = Dein Ergebnis konnte nicht gespeichert werden
assessment-submit-error-heading = Die Lektion konnte nicht gestartet werden

profile-start-error-heading = Die Lektion konnte nicht gestartet werden
profile-start-error-body = Deine Startstufe konnte nicht gespeichert werden. Versuche es erneut.
profile-retry = Erneut versuchen
profile-lookup-error-heading = Die Lektion konnte nicht geöffnet werden
profile-lookup-error-body = Deine gespeicherte Stufe konnte nicht geprüft werden

reader-aria-label = Bibellesen in chronologischer Reihenfolge
reader-chapter-aria-label = Bibellesen nach Kapitelauswahl
reader-plan-title = Chronologischer Leseplan
reader-intro = Lies die Bibel und wiederhole die für dich ausgewählten Fragen
reader-version-label = Bibelübersetzung
reader-loading = Lesetext wird geladen
reader-error-eyebrow = Lesung konnte nicht geöffnet werden
reader-error-http = Lesung konnte nicht geladen werden (HTTP { $status })
reader-error-generic = Lesung konnte nicht geladen werden. Bitte versuche es erneut
reader-retry = Erneut versuchen
reader-day-eyebrow = Tageslesung
reader-day-heading = Tag { $day }
reader-title-day = Tag { $day } - Wortfragen
reader-title-chapter = { $reference } - Wortfragen
reader-questions-heading = Fragen zur Wiederholung
reader-question-meta = { $kind } · Verse { $start_verse }–{ $end_verse }
reader-question-meta-single = { $kind } · Vers { $verse }
reader-navigation-label = Lesetag ändern
reader-previous-day = Vorheriger Tag
reader-next-day = Nächster Tag
reader-day-trigger = Lesetag auswählen
reader-day-dialog-label = Lesetag
reader-day-option = Tag { $day }
reader-chapter-navigation-label = Bibelkapitel wechseln
reader-chapter-heading = { $book } { $chapter }
reader-previous-chapter = Vorheriges Kapitel
reader-next-chapter = Nächstes Kapitel
reader-controls = Lesesteuerung
reader-settings = Einstellungen
reader-close = Schließen
reader-back-to-reading = Zurück zum Lesen
reader-language-label = Bibelsprache
reader-language-english = English
reader-language-thai = ไทย
reader-language-german = Deutsch
reader-chapter-trigger = { $book }, Kapitel { $chapter } auswählen
reader-chapter-dialog-label = Buch und Kapitel
reader-choose-book = Buch
reader-choose-chapter = Kapitel
reader-toolbar-print = Fragen drucken
reader-toolbar-undo = Rückgängig
reader-toolbar-reset = Fragen zurücksetzen
reader-toolbar-randomize = Fragen zufällig auswählen
reader-toolbar-randomize-easy = Leichte Fragen bevorzugen
reader-toolbar-randomize-hard = Schwierige Fragen bevorzugen
reader-toolbar-remove-one-per-section = Eine Frage aus jedem Abschnitt entfernen
reader-toolbar-remove-easiest-question = Die einfachste Frage pro Abschnitt entfernen
print-preview-aria-label = Druckvorschau
print-preview-heading = Arbeitsblatt prüfen
print-preview-page = Seite { $page }
print-preview-print = Drucken
print-preview-close = Schließen
print-preview-error = Das Arbeitsblatt konnte nicht vorbereitet werden. Bitte versuche es erneut
print-preview-progress-preparing = Druckvorschau wird vorbereitet …
print-preview-progress-loading = Schriftarten werden geladen …
print-preview-progress-serializing = Seite { $page } von { $total } wird vorbereitet …
print-preview-progress-initializing = PDF-System wird gestartet …
print-preview-progress-creating = PDF-Seite { $page } von { $total } wird erstellt …
print-preview-progress-merging = PDF-Seiten werden zusammengefügt …
print-preview-progress-finalizing = PDF-Datei wird fertiggestellt …
print-preview-progress-rendering = Vorschauseite { $page } von { $total } wird gerendert …
print-preview-cancel = Abbrechen
reader-mode-label = Lesemodus
reader-mode-study = Studienmodus
reader-mode-review = Wiederholungsmodus
reader-mode-print = Druckmodus
study-bible-questions-aria-label = Bibelfragen
study-no-bible-questions = Keine Bibelfragen mehr übrig

review-aria-label = Gespeicherte Antworten

study-aria-label = Studienfrage
study-show-question = Frage anzeigen
study-hide-question = Frage ausblenden
study-answer-label = Meine Antwort
study-question-meta = { $kind } · { $verse_range }
reference-answer = Beispielantwort
study-answer-submit = Antworten
study-too-easy = Zu leicht
study-too-hard = Zu schwer
study-skip = Überspringen
print-aria-label = Fragen zum Drucken
print-no-questions = Keine Fragen zum Drucken übrig
print-randomize-section = Fragen in { $reference } zufällig auswählen
print-randomize-section-title = Fragen in diesem Abschnitt zufällig auswählen
print-randomize-section-easy = Leichte Fragen in { $reference } bevorzugen
print-randomize-section-easy-title = Leichte Fragen in diesem Abschnitt bevorzugen
print-randomize-section-hard = Schwere Fragen in { $reference } bevorzugen
print-randomize-section-hard-title = Schwere Fragen in diesem Abschnitt bevorzugen
print-remove-question = Frage entfernen
print-page-number = Seite { $page } / { $total }
difficulty-easy = Leicht
difficulty-medium = Mittel
difficulty-hard = Schwer

question-kind-observation = Entdecken
question-kind-interpretation = Verstehen
question-kind-application = Anwenden
question-kind-interpretation-application = Verstehen und Anwenden
question-kind-print-observation = E
question-kind-print-interpretation = V
question-kind-print-application = A
question-kind-print-interpretation-application = V/A

settings-use-physical-bible = Gedruckte Bibel verwenden
settings-one-year-plan = Einjahresplan
settings-chronological-study = Chronologischen Leseplan verwenden
settings-chapter-selection = Beliebiges Kapitel wählen
settings-bible-access-link = Bibelzugangslink
settings-bible-access-link-loading = Link wird erstellt …
settings-bible-access-link-error = Zugangslink konnte nicht erstellt werden.
settings-copy-bible-access-link = Bibelzugangslink kopieren
settings-bible-access-link-copied = Bibelzugangslink kopiert.
settings-bible-access-link-copy-error = Bibelzugangslink konnte nicht kopiert werden.
settings-backup-title = Verschlüsseltes Backup
settings-backup-create = Backup einrichten
settings-backup-save = Backup speichern
settings-backup-restore = Backup wiederherstellen
settings-backup-delete = Server-Backup löschen
settings-backup-restore-confirm = Beim Wiederherstellen werden die aktuell auf diesem Gerät gespeicherten Einstellungen und Antworten ersetzt. Fortfahren?
settings-backup-delete-confirm = Das verschlüsselte Backup und den Passkey-Datensatz auf dem Server löschen?
settings-backup-save-success = Verschlüsseltes Backup gespeichert.
settings-backup-delete-success = Verschlüsseltes Backup gelöscht.
settings-backup-error = Passkey-Backup fehlgeschlagen: { $reason }
settings-delete-all-data = Alle Daten löschen
settings-delete-all-data-confirm = Alle Lerndaten auf diesem Gerät dauerhaft löschen? Dein verschlüsseltes Server-Backup bleibt erhalten und muss separat gelöscht werden.
settings-delete-all-data-busy = Daten werden gelöscht …
settings-delete-all-data-error = Die Daten auf diesem Gerät konnten nicht vollständig gelöscht werden. Versuche es erneut.
settings-show-answers = Antworten anzeigen
settings-hide-rating-buttons = „Zu leicht“-/„Zu schwer“-Buttons ausblenden
settings-dark-theme = Dunkles Design
settings-show-old-versions = Alte Bibelversionen anzeigen
settings-direct-print = Brother HL-1210W
settings-old-versions = Alte Versionen
settings-install-pwa-mobile = Zum Startbildschirm hinzufügen
settings-install-pwa-desktop = Als eigenständige App öffnen
pwa-install-heading = Bibel Fragen als App verwenden
pwa-install-install = Installieren
pwa-install-not-now = Nicht jetzt
settings-decrease-level = Fokus verringern
settings-increase-level = Fokus erhöhen
settings-focus = Fokus: { $description }
settings-decrease-text-size = Textgröße verkleinern
settings-increase-text-size = Textgröße vergrößern
settings-font-size-letter = A
settings-difficulty-description =
    { $level ->
        [1] Explizite Fakten erkennen
        [2] Naheliegende Fakten verbinden
        [3] Abfolge oder Muster erkennen
        [4] Direkte Bedeutung erschließen
        [5] Bedeutsame Beziehungen erkennen
        [6] Eine begründete Antwort ableiten
        [7] Struktur und Entwicklung verfolgen
        [8] Zentrale Aussage erkennen
        [9] Zweck oder Betonung erkennen
        [10] Konkrete Anwendung ableiten
        [11] Korrektur oder Herausforderung erkennen
        [12] Motive oder Ausrichtung erschließen
        [13] Das Ganze zusammenführen
        [14] Übertragbare Grundsätze ableiten
       *[15] Nachhaltige Praxis anleiten
    }

metadata-book = Buch
metadata-chapter = Kapitel
metadata-reference = Referenz
metadata-version = Übersetzung: { $version }
`,Wm=`app-title-assessment = การศึกษาพระคัมภีร์แบบอุปนัย
app-title-chooser = เลือกภาษาสำหรับศึกษาพระคัมภีร์
app-title-reader = การศึกษาพระคัมภีร์แบบอุปนัย
app-reader-heading = อ่านพระคัมภีร์
app-reader-header-note = อ่านและทบทวนตามจังหวะของคุณ
app-assessment-privacy = โปรไฟล์ใหม่เริ่มต้นที่ระดับการศึกษา 6
app-reader-privacy = คำถามคัดเลือกตามระดับการศึกษาปัจจุบันของคุณ
app-chooser-heading = เลือกภาษา
app-chooser-header-note = เลือก English, ไทย หรือ Deutsch เพื่อเริ่มต้น
app-chooser-privacy = เลือกภาษาและฉบับพระคัมภีร์เริ่มต้น โปรไฟล์ใหม่จะเริ่มที่ระดับ 6

local-data-title = ข้อมูลถูกจัดเก็บไว้ในอุปกรณ์นี้
local-data-body = คำตอบ บันทึก และความคืบหน้าในการศึกษาจะถูกเก็บไว้ในเบราว์เซอร์นี้ หากตั้งค่าการสำรองข้อมูล การตั้งค่าและคำตอบจะถูกเข้ารหัสด้วยพาสคีย์ก่อนส่งไปยังเซิร์ฟเวอร์
local-data-warning = การล้างข้อมูลเว็บไซต์นี้จะลบข้อมูลในเครื่องอย่างถาวร หากมีข้อมูลสำรองที่เข้ารหัสไว้ ให้ลบแยกต่างหากในการตั้ง⁠ค่า
privacy-link = ความเป็นส่วนตัว
privacy-title = ความเป็นส่วนตัว
privacy-local-data = ข้อมูลในเครื่อง
privacy-local-data-intro = แอปพลิเคชันนี้จัดเก็บข้อมูลการศึกษาไว้ในเครื่อง หากผู้ใช้เลือกตั้งค่าการสำรองข้อมูล การตั้งค่าและคำตอบจะถูกเข้ารหัสด้วยพาสคีย์ก่อนจัดเก็บบนเซิร์ฟเวอร์
privacy-includes = ตัวอย่างข้อมูลที่จัดเก็บ ได้แก่:
privacy-answers = คำตอบ
privacy-notes = บันทึก
privacy-study-progress = ความคืบหน้าในการศึกษา
privacy-settings = การตั้งค่า
privacy-indexeddb = ข้อมูลนี้จัดเก็บด้วยพื้นที่จัดเก็บของเบราว์เซอร์ เช่น IndexedDB
privacy-not-uploaded = ข้อมูลการศึกษาจะอยู่ในอุปกรณ์ เว้นแต่ผู้ใช้เลือกสำรองข้อมูลแบบเข้ารหัส เซิร์ฟเวอร์จัดเก็บเฉพาะการตั้งค่าและคำตอบที่เข้ารหัสกับข้อมูลรับรองพาสคีย์
privacy-cannot-access = ผู้ดำเนินการไม่สามารถอ่านข้อมูลสำรองที่เข้ารหัสได้ ต้องใช้พาสคีย์เดิมเพื่อกู้คืน
privacy-delete-warning = การล้างข้อมูลเว็บไซต์นี้อาจลบข้อมูลในเครื่องอย่างถาวร แต่จะไม่ลบข้อมูลสำรองบนเซิร์ฟเวอร์ ซึ่งต้องลบแยกต่างหากในการตั้งค่า
privacy-offline-storage = พื้นที่จัดเก็บสำหรับใช้งานออฟไลน์
privacy-offline-intro = แอปพลิเคชันใช้พื้นที่จัดเก็บของเบราว์เซอร์ เซอร์วิสเวิร์กเกอร์ และแคชของเบราว์เซอร์ เพื่อให้ใช้งานได้และทำงานออฟไลน์
privacy-offline-use = เทคโนโลยีเหล่านี้ใช้เพื่อการทำงานของแอปพลิเคชันและการจัดเก็บข้อมูลในเครื่องเท่านั้น
privacy-no-tracking-storage = เทคโนโลยีเหล่านี้ไม่ได้ใช้เพื่อโฆษณา การจัดทำโปรไฟล์ หรือการติดตามข้ามเว็บไซต์
privacy-necessary-storage = พื้นที่จัดเก็บที่จำเป็นอย่างเคร่งครัดต่อการทำงานที่ผู้ใช้ร้องขอ ไม่ต้องได้รับความยินยอมตาม §25(2)(2) TDDDG
privacy-hosting = การโฮสต์
privacy-hosting-intro = เว็บไซต์นี้ส่งมอบผ่านบริการของ:
privacy-united-states = สหรัฐอเมริกา
privacy-technical-info = เมื่อเข้าชมเว็บไซต์ Cloudflare จะประมวลผลข้อมูลทางเทคนิคที่จำเป็นต่อการส่งมอบและปกป้องเว็บไซต์
privacy-technical-info-list = ข้อมูลนี้อาจรวมถึง:
privacy-ip-address = ที่อยู่ IP
privacy-date-time = วันที่และเวลาของคำขอ
privacy-requested-resources = ทรัพยากรที่ร้องขอ
privacy-browser-device = ข้อมูลเบราว์เซอร์และอุปกรณ์
privacy-routing-network = ข้อมูลการกำหนดเส้นทางและเครือข่าย
privacy-other-technical = ข้อมูลทางเทคนิคอื่น ๆ ของคำขอ
privacy-cloudflare-processing = Cloudflare ประมวลผลข้อมูลนี้เพื่อส่งมอบ รักษาความปลอดภัย และดำเนินงานเว็บไซต์
privacy-no-content-transmission = ไม่มีการส่งคำตอบและการตั้งค่าแบบอ่านข้อความได้ หากผู้ใช้เลือกสำรองข้อมูล ข้อมูลที่เข้ารหัสและคำขอพาสคีย์จะผ่าน Cloudflare ไปยังเซิร์ฟเวอร์
privacy-international = Cloudflare อาจประมวลผลข้อมูลในต่างประเทศ รวมถึงในสหรัฐอเมริกา โดยมีมาตรการคุ้มครองการโอนข้อมูลระหว่างประเทศตามภาคผนวกการประมวลผลข้อมูล รวมถึงกรอบ EU-U.S. Data Privacy Framework เมื่อมีผลบังคับใช้ และข้อสัญญามาตรฐานของสหภาพยุโรป
privacy-cloudflare-policy = ดูข้อมูลเพิ่มเติมเกี่ยวกับการประมวลผลของ Cloudflare ได้ที่
privacy-cloudflare-policy-link = นโยบายความเป็นส่วนตัวของ Cloudflare
privacy-no-analytics = ไม่มีการวิเคราะห์หรือโฆษณา
privacy-no-analytics-intro = เว็บไซต์นี้ไม่มีการใช้:
privacy-advertising = โฆษณา
privacy-advertising-trackers = ตัวติดตามโฆษณา
privacy-cross-site-tracking = การติดตามข้ามเว็บไซต์
privacy-third-party-analytics = การวิเคราะห์โดยบุคคลที่สาม
privacy-profiling = การจัดทำโปรไฟล์จากข้อมูลของแอปพลิเคชัน
privacy-retention = การเก็บรักษาข้อมูล
privacy-retention-study = เซิร์ฟเวอร์จะเก็บการตั้งค่าและคำตอบที่เข้ารหัสไว้เฉพาะเมื่อผู้ใช้ตั้งค่าการสำรองข้อมูล จนกว่าผู้ใช้จะลบในการตั้งค่า ผู้ดำเนินการไม่สามารถถอดรหัสข้อมูลสำรองได้
privacy-retention-technical = ข้อมูลทางเทคนิคที่ Cloudflare ประมวลผลจะถูกเก็บรักษาตามการตั้งค่าบริการของ Cloudflare และข้อกำหนดตามสัญญาและกฎหมายที่เกี่ยวข้อง
privacy-retention-visitors = ผู้ดำเนินการไม่มีฐานข้อมูลแยกต่างหากสำหรับผู้เข้าชมหรือกิจกรรมการศึกษา
privacy-contact = ติดต่อ
privacy-contact-body = หากต้องการติดต่อเกี่ยวกับเว็บไซต์นี้ ให้ใช้ช่องทางติดต่อผู้จดทะเบียนที่จัดไว้สำหรับโดเมนนี้ผ่าน RDAP/WHOIS
privacy-data-protection-rights = สิทธิในการคุ้มครองข้อมูล
privacy-rights-intro = ในกรณีที่มีการประมวลผลข้อมูลส่วนบุคคลเพื่อการส่งมอบเว็บไซต์ กฎหมายคุ้มครองข้อมูลที่เกี่ยวข้องอาจให้สิทธิ รวมถึงการเข้าถึง แก้ไข ลบ จำกัดการประมวลผล และคัดค้าน
privacy-rights-local-data = ผู้ดำเนินการไม่สามารถเข้าถึงข้อมูลการศึกษาในเครื่องหรือถอดรหัสข้อมูลสำรองได้ ผู้ใช้สามารถลบข้อมูลในเบราว์เซอร์และลบข้อมูลสำรองที่เข้ารหัสบนเซิร์ฟเวอร์แยกต่างหากในการตั้งค่า
privacy-rights-complaint = หากมีผลบังคับใช้ ผู้ใช้ยังมีสิทธิยื่นเรื่องร้องเรียนต่อหน่วยงานกำกับดูแลด้านการคุ้มครองข้อมูลที่มีอำนาจ

language-chooser-label = ภาษา

assessment-step = คำถามที่ { $step }
assessment-progress = { $step } จาก { $total }
assessment-select-answer = เลือกหนึ่งคำตอบ
assessment-complete-eyebrow = ทำแบบประเมินเสร็จแล้ว
assessment-complete-heading = พร้อมเริ่มบทเรียนแล้ว
assessment-complete-body = คำตอบของคุณพร้อมแล้ว
assessment-start = เริ่มบทเรียน
assessment-retry = ลองอีกครั้ง
assessment-save-error = ไม่สามารถบันทึกผลการประเมินได้
assessment-submit-error-heading = เริ่มบทเรียนไม่ได้

profile-start-error-heading = เริ่มบทเรียนไม่ได้
profile-start-error-body = บันทึกระดับเริ่มต้นของคุณไม่ได้ โปรดลองอีกครั้งเพื่อดำเนินการต่อ
profile-retry = ลองอีกครั้ง
profile-lookup-error-heading = เปิดบทเรียนไม่ได้
profile-lookup-error-body = ไม่สามารถตรวจสอบระดับของคุณได้

reader-aria-label = บทอ่านพระคัมภีร์ตามลำดับเหตุการณ์
reader-chapter-aria-label = การอ่านพระคัมภีร์ตามบทที่เลือก
reader-plan-title = แผนการอ่านตามลำดับเหตุการณ์
reader-intro = อ่านพระคัมภีร์และทบทวนคำถามที่เลือกไว้สำหรับคุณ
reader-version-label = ฉบับพระคัมภีร์
reader-loading = กำลังโหลดเนื้อหาการอ่าน
reader-error-eyebrow = เปิดบทอ่านไม่สำเร็จ
reader-error-http = ไม่สามารถโหลดบทอ่านได้ (HTTP { $status })
reader-error-generic = ไม่สามารถโหลดบทอ่านได้ โปรดลองอีกครั้ง
reader-retry = ลองอีกครั้ง
reader-day-eyebrow = บทอ่านประจำวัน
reader-day-heading = วันที่ { $day }
reader-title-day = วันที่ { $day } - คำถามพระคำ
reader-title-chapter = { $reference } - คำถามพระคำ
reader-questions-heading = คำถามสำหรับทบทวน
reader-question-meta = { $kind } · ข้อ { $start_verse }–{ $end_verse }
reader-question-meta-single = { $kind } · ข้อ { $verse }
reader-navigation-label = เปลี่ยนวันอ่าน
reader-previous-day = วันก่อนหน้า
reader-next-day = วันถัดไป
reader-day-trigger = เลือกวันที่อ่าน
reader-day-dialog-label = วันที่อ่าน
reader-day-option = วันที่ { $day }
reader-chapter-navigation-label = เปลี่ยนบทพระคัมภีร์
reader-chapter-heading = { $book } { $chapter }
reader-previous-chapter = บทก่อนหน้า
reader-next-chapter = บทถัดไป
reader-controls = ส่วนควบคุมบทอ่าน
reader-settings = การตั้งค่า
reader-close = ปิด
reader-back-to-reading = กลับไปบทอ่าน
reader-language-label = ภาษาพระคัมภีร์
reader-language-english = English
reader-language-thai = ไทย
reader-language-german = Deutsch
reader-chapter-trigger = เลือก { $book } บทที่ { $chapter }
reader-chapter-dialog-label = หนังสือและบท
reader-choose-book = หนังสือ
reader-choose-chapter = บท
reader-toolbar-print = พิมพ์คำถาม
reader-toolbar-undo = เลิกทำ
reader-toolbar-reset = เริ่มคำถามใหม่ทั้งหมด
reader-toolbar-randomize = สุ่มคำถาม
reader-toolbar-randomize-easy = เน้นคำถามง่าย
reader-toolbar-randomize-hard = เน้นคำถามยาก
reader-toolbar-remove-one-per-section = ลบคำถามออกหนึ่งข้อจากทุกส่วน
reader-toolbar-remove-easiest-question = ลบคำถามที่ง่ายที่สุดออกจากแต่ละส่วน
print-preview-aria-label = ตัวอย่างก่อนพิมพ์
print-preview-heading = ตรวจสอบใบงานของคุณ
print-preview-page = หน้า { $page }
print-preview-print = พิมพ์
print-preview-close = ปิด
print-preview-error = ไม่สามารถเตรียมใบงานได้ โปรดลองอีกครั้ง
print-preview-progress-preparing = กำลังเตรียมตัวอย่างก่อนพิมพ์…
print-preview-progress-loading = กำลังเตรียมแบบอักษร…
print-preview-progress-serializing = กำลังเตรียมหน้า { $page } จาก { $total }…
print-preview-progress-initializing = กำลังเริ่มระบบสร้าง PDF…
print-preview-progress-creating = กำลังสร้างหน้า { $page } จาก { $total }…
print-preview-progress-merging = กำลังรวมหน้า PDF…
print-preview-progress-finalizing = กำลังจัดเตรียมไฟล์ PDF…
print-preview-progress-rendering = กำลังแสดงตัวอย่างหน้า { $page } จาก { $total }…
print-preview-cancel = ยกเลิก
reader-mode-label = โหมดการอ่าน
reader-mode-study = โหมดศึกษา
reader-mode-review = โหมดทบทวน
reader-mode-print = โหมดพิมพ์
study-bible-questions-aria-label = คำถามพระคัมภีร์
study-no-bible-questions = ไม่มีคำถามพระคัมภีร์เหลืออยู่

review-aria-label = คำตอบสำหรับทบทวน

study-aria-label = คำถามสำหรับศึกษา
study-show-question = แสดงคำถาม
study-hide-question = ซ่อนคำถาม
study-answer-label = คำตอบของฉัน
study-question-meta = { $kind } · { $verse_range }
reference-answer = ตัวอย่างคำตอบ
study-answer-submit = ตอบ
study-too-easy = ง่ายเกินไป
study-too-hard = ยากเกินไป
study-skip = ข้าม
print-aria-label = คำถามสำหรับพิมพ์
print-no-questions = ไม่มีคำถามที่เหลือสำหรับพิมพ์
print-randomize-section = สุ่มคำถามใน { $reference }
print-randomize-section-title = สุ่มคำถามในส่วนนี้
print-randomize-section-easy = เน้นคำถามง่ายใน { $reference }
print-randomize-section-easy-title = เน้นคำถามง่ายในส่วนนี้
print-randomize-section-hard = เน้นคำถามยากใน { $reference }
print-randomize-section-hard-title = เน้นคำถามยากในส่วนนี้
print-remove-question = ลบคำถาม
print-page-number = หน้า { $page } / { $total }
difficulty-easy = ง่าย
difficulty-medium = ปานกลาง
difficulty-hard = ยาก

question-kind-observation = สังเกต
question-kind-interpretation = ตีความ
question-kind-application = ประยุกต์ใช้
question-kind-interpretation-application = ตีความและประยุกต์ใช้
question-kind-print-observation = ส
question-kind-print-interpretation = ต
question-kind-print-application = ป
question-kind-print-interpretation-application = ต/ป

settings-use-physical-bible = ใช้พระคัมภีร์ฉบับเล่ม
settings-one-year-plan = แผนอ่านหนึ่งปี
settings-chronological-study = ใช้แผนอ่านตามลำดับเวลา
settings-chapter-selection = เลือกบทใดก็ได้
settings-bible-access-link = ลิงก์เข้าถึงพระคัมภีร์
settings-bible-access-link-loading = กำลังสร้างลิงก์…
settings-bible-access-link-error = สร้างลิงก์เข้าถึงไม่สำเร็จ
settings-copy-bible-access-link = คัดลอกลิงก์เข้าถึงพระคัมภีร์
settings-bible-access-link-copied = คัดลอกลิงก์เข้าถึงพระคัมภีร์แล้ว
settings-bible-access-link-copy-error = คัดลอกลิงก์เข้าถึงพระคัมภีร์ไม่สำเร็จ
settings-backup-title = ข้อมูลสำรองที่เข้ารหัส
settings-backup-create = ตั้งค่าการสำรองข้อมูล
settings-backup-save = บันทึกข้อมูลสำรอง
settings-backup-restore = กู้คืนข้อมูลสำรอง
settings-backup-delete = ลบข้อมูลสำรองบนเซิร์ฟเวอร์
settings-backup-restore-confirm = การกู้คืนจะแทนที่การตั้งค่าและคำตอบที่เก็บอยู่ในอุปกรณ์นี้ ดำเนินการต่อหรือไม่?
settings-backup-delete-confirm = ลบข้อมูลสำรองที่เข้ารหัสและข้อมูลพาสคีย์ออกจากเซิร์ฟเวอร์หรือไม่?
settings-backup-save-success = บันทึกข้อมูลสำรองที่เข้ารหัสแล้ว
settings-backup-delete-success = ลบข้อมูลสำรองที่เข้ารหัสแล้ว
settings-backup-error = การสำรองข้อมูล Passkey ล้มเหลว: { $reason }
settings-delete-all-data = ลบข้อมูลทั้งหมด
settings-delete-all-data-confirm = ลบข้อมูลการศึกษาทั้งหมดที่จัดเก็บไว้ในอุปกรณ์นี้อย่างถาวรหรือไม่ ข้อมูลสำรองที่เข้ารหัสบนเซิร์ฟเวอร์จะยังคงอยู่และต้องลบแยกต่างหาก
settings-delete-all-data-busy = กำลังลบข้อมูล…
settings-delete-all-data-error = ลบข้อมูลทั้งหมดในอุปกรณ์นี้ไม่สำเร็จ โปรดลองอีกครั้ง
settings-show-answers = แสดงคำตอบ
settings-hide-rating-buttons = ซ่อนปุ่ม “ง่ายเกินไป” / “ยากเกินไป”
settings-dark-theme = ธีมมืด
settings-show-old-versions = แสดงพระคัมภีร์ฉบับเก่า
settings-direct-print = Brother HL-1210W
settings-old-versions = ฉบับเก่า
settings-install-pwa-mobile = เพิ่มไปยังหน้าจอหลัก
settings-install-pwa-desktop = เปิดเป็นแอปแยกต่างหาก
pwa-install-heading = ใช้แอปศึกษาพระคัมภีร์
pwa-install-install = ติดตั้ง
pwa-install-not-now = ไว้ก่อน
settings-decrease-level = ลดโฟกัส
settings-increase-level = เพิ่มโฟกัส
settings-focus = โฟกัส: { $description }
settings-decrease-text-size = ลดขนาดตัวอักษร
settings-increase-text-size = เพิ่มขนาดตัวอักษร
settings-font-size-letter = ก
settings-difficulty-description =
    { $level ->
        [1] ระบุข้อเท็จจริงที่มีอยู่ในข้อความ
        [2] เชื่อมโยงข้อเท็จจริงที่อยู่ใกล้กัน
        [3] มองเห็นลำดับหรือรูปแบบ
        [4] อนุมานความหมายโดยตรง
        [5] ระบุความสัมพันธ์ที่มีความหมาย
        [6] สรุปคำตอบที่มีหลักฐานรองรับ
        [7] ติดตามโครงสร้างและการดำเนินเรื่อง
        [8] ระบุใจความสำคัญ
        [9] ระบุจุดประสงค์หรือการเน้นย้ำ
        [10] สรุปการนำไปใช้ที่เฉพาะเจาะจง
        [11] มองเห็นคำตักเตือนหรือความท้าทาย
        [12] อนุมานแรงจูงใจหรือแนวทาง
        [13] สังเคราะห์ภาพรวมทั้งหมด
        [14] สรุปหลักการที่นำไปใช้กับเรื่องอื่นได้
       *[15] นำไปสู่การฝึกปฏิบัติอย่างต่อเนื่อง
    }

metadata-book = หนังสือ
metadata-chapter = บท
metadata-reference = ข้ออ้างอิง
metadata-version = ฉบับ: { $version }
`,Gm=[`en-US`,`th`,`de`],Km=[`en-US`,`th`,`de`],qm=fu(Gm),Jm=fu(Km),Ym=Q({default_locale:qm,catalogs:su(Q({locale:qm,source:X().min(1)}).strict().readonly()).length(Gm.length).superRefine((e,t)=>{for(let n of Gm)e.some(e=>e.locale===n)||t.addIssue({code:U.custom,message:`Missing ${n} catalog`})}).readonly()}).strict().readonly(),Xm=class extends Error{name=`CatalogPayloadError`;constructor(e){super(`Localization response is invalid`,e)}},Zm=class extends Error{locale;errors;name=`CatalogParseError`;constructor(e,t){super(`Localization catalog ${e} could not be parsed`),this.locale=e,this.errors=t}},Qm=class extends Error{id;name=`CatalogMessageError`;constructor(e,t){super(`Localization message ${e} could not be formatted`,t),this.id=e}},$m=class{locale;bundles;constructor(e,t){this.locale=e,this.bundles=t}format(e,t){let n=Bm(this.bundles,e),r=n?.getMessage(e);if(n===null||r===void 0||r.value===null)throw new Qm(e);let i=[],a=n.formatPattern(r.value,t,i);if(i.length>0)throw new Qm(e,{cause:i[0]});return a}},eh=class{defaultLocale;sources;bundles=new Map;constructor(e,t){this.defaultLocale=e,this.sources=t}chooserLocale(e){let t=zm(e,Km,{strategy:`lookup`,defaultLocale:`en-US`});return Jm.parse(t[0])}catalog(e){let t=this.bundle(e),n=this.bundle(`en-US`);return new $m(e,e===`en-US`?[t]:[t,n])}bundle(e){let t=this.bundles.get(e);if(t!==void 0)return t;let n=this.sources.get(e);if(n===void 0)throw new Xm;let r=new om(e,{useIsolating:!1}),i=r.addResource(new jm(n));if(i.length>0)throw new Zm(e,i);return this.bundles.set(e,r),r}};async function th(){return rh()}var nh;function rh(){if(nh!==void 0)return nh;let e=Ym.safeParse({default_locale:`th`,catalogs:[{locale:`en-US`,source:Hm},{locale:`th`,source:Wm},{locale:`de`,source:Um}]});if(!e.success)throw new Xm({cause:e.error});let t=new Map(e.data.catalogs.map(({locale:e,source:t})=>[e,t]));return nh=new eh(e.data.default_locale,t),nh}function ih(e,t){let n=t.find(t=>t.version===e)?.question_bank_language;return oh(n)}function ah(e,t){let n=e.split(`-`,1)[0],r=t.find(e=>e.question_bank_language===n&&e.reader_default&&!e.requires_bible_access)??t.find(e=>e.question_bank_language===n&&!e.requires_bible_access)??t.find(e=>!e.requires_bible_access);if(r===void 0)throw Error(`The public Bible version catalog is empty`);return r.version}function oh(e){return Gm.find(t=>t.split(`-`,1)[0]===e)??`en-US`}function sh(e){return e}function ch(e){switch(e){case`O`:return`question-kind-observation`;case`I`:return`question-kind-interpretation`;case`A`:return`question-kind-application`;case`I/A`:return`question-kind-interpretation-application`;default:return sh(e)}}function lh(e){switch(e){case`O`:return`question-kind-print-observation`;case`I`:return`question-kind-print-interpretation`;case`A`:return`question-kind-print-application`;case`I/A`:return`question-kind-print-interpretation-application`;default:return sh(e)}}function uh(e){return e<.34?`difficulty-easy`:e<.67?`difficulty-medium`:`difficulty-hard`}var dh=Z().int().min(1).max(15).brand(`ProfileLevel`),fh=dh.parse(6),ph=class extends Error{operation;status;name=`ProfileCompletionHttpError`;constructor(e,t){super(`${e} failed with HTTP ${t}`),this.operation=e,this.status=t}},mh=class extends Error{operation;name=`ProfileCompletionRequestError`;constructor(e,t){super(`${e} request failed`,t),this.operation=e}};async function hh(e){try{await Lu(await qu(),e)}catch(e){throw new mh(`Profile completion`,{cause:e})}}async function gh(){return await Ru(await qu())??null}function _h(e,t){return t===`increase`?e<15:e>1}async function vh(e){let t=await qu(),n=await Ru(t);if(n==null)throw new ph(`Profile level adjustment`,404);let r=dh.parse(e===`increase`?Math.min(n+1,15):Math.max(n-1,1));return await Lu(t,r),r}var yh=[50,75,100,112.5,125,150,175];async function bh(){let e=Number.parseFloat(await wu(xu.readerBaseFontSize)??``);return wh(e)?e:100}function xh(e){Tu(xu.readerBaseFontSize,String(e)),Sh(e)}function Sh(e){let t=Math.min(e,150);document.documentElement.style.fontSize=`${t}%`,document.documentElement.style.setProperty(`--reader-font-scale`,String(e/t))}function Ch(e,t){let n=yh.indexOf(e),r=t===`increase`?n+1:n-1;return yh[Math.max(0,Math.min(yh.length-1,r))]??e}function wh(e){return yh.some(t=>t===e)}function Th(e){return e!==null&&e.trim().length>0}function Eh(e){let[t,n]=Yr(new Map),r=0;function i(){n(new Map),r+=1}async function a(t,i){let a=r;await Qu(t,i,e.canSync()),a===r&&n(e=>{let n=new Map(e);return n.set(t,i),n})}function o(e){return t().get(e.question_id)??e.answer_text}return{effectiveAnswer:o,reset:i,saveAnswer:a}}function Dh(e,t,n){if(t.includes(e.question.question_id))return!1;let r=n[e.sectionKey];return r===void 0||r.includes(e.question.question_id)}function Oh(e,t){let n=[];for(let r of e){let e=n[n.length-1];if(e!==void 0&&e.heading.sectionKey===r.sectionKey){t.has(r.question.question_id)&&e.questions.push(r);continue}n.push({heading:r,questions:t.has(r.question.question_id)?[r]:[]})}return n.filter(e=>e.questions.length>0)}var kh=1031,Ah=718,jh=`400 16px "Sarabun", Tahoma, sans-serif`,Mh=22,Nh=8,Ph=22,Fh=32,Ih=16,Lh=8,Rh=8,zh=8,Bh;function Vh(e,t,n,r,i){let a=sp(e);return Uh(Oh(a,new Set(a.filter(e=>Dh(e,t,n)).map(e=>e.question.question_id))),e=>{let t=e.question.answer;return!r||t===null?null:{text:t,label:i.format(`reference-answer`)}},i)}function Hh(e,t,n,r=[],i={}){let a=sp(e);return Uh(Oh(a,new Set(a.filter(e=>Th(t(e.question))&&Dh(e,r,i)).map(e=>e.question.question_id))),e=>{let n=t(e.question);return n===null||n.trim().length===0?null:{text:n,label:``}},n)}function Uh(e,t,n){let r=[],i={sections:[]},a=0,o=()=>{i.sections.length>0&&r.push(i),i={sections:[]},a=0};for(let r of e)for(let e of r.questions){let s=i.sections[i.sections.length-1]?.heading.sectionKey===r.heading.sectionKey?0:Mh+(i.sections.length===0?0:Nh),c=Gh(e,t(e),n);i.sections.length>0&&a+s+c>kh&&o(),i.sections[i.sections.length-1]?.heading.sectionKey!==r.heading.sectionKey&&(i.sections.push({heading:r.heading,questions:[]}),a+=Mh+(i.sections.length===1?0:Nh));let l=i.sections[i.sections.length-1];l!==void 0&&(l.questions.push(e),a+=c)}return i.sections.length>0&&r.push(i),r}function Wh(e,t,n,r=[],i={}){return Hh(e,t,n,r,i).length}function Gh(e,t,n){let r=`${n.format(lh(e.question.kind))}: ${e.question.visible_text}`,i=n.locale===`th`?Fh:Ph;return Math.min(5,Kh(r))*i+(t===null?Rh+e.question.lines*Ih+Math.max(0,e.question.lines-1)*Lh:Kh(t.label.length===0?t.text:`${t.label}: ${t.text}`)*i)+zh}function Kh(e){return Bh===void 0&&typeof document<`u`&&(Bh=document.createElement(`canvas`).getContext(`2d`)),Bh==null?Math.max(1,Math.ceil([...e].length/72)):(Bh.font=jh,Math.max(1,Math.ceil(Bh.measureText(e).width/Ah)))}var qh=L(`<reader-navigation-layer class=reader-navigation-layer>`,1);function Jh(e){let t=ir(()=>e.children);var n=z(qh);return n.content=()=>t(),n._$owner=A(),Wi(()=>({e:e.state,t:e.onNavigate,a:e.mode,o:e.sheetPresent,i:e.swipeNavigation}),({e,t,a:r,o:i,i:a},o)=>{e!==o?.e&&(n.state=e),t!==o?.t&&(n.onNavigate=t),r!==o?.a&&(n.mode=r),i!==o?.o&&(n.sheetPresent=i),a!==o?.i&&(n.swipeNavigation=a)}),n}var Yh={O:{className:`question-kind-observation`,printClassName:`print-question-type-observation`},I:{className:`question-kind-interpretation`,printClassName:`print-question-type-interpretation`},A:{className:`question-kind-application`,printClassName:`print-question-type-application`},"I/A":{className:`question-kind-interpretation-application`,printClassName:`print-question-type-interpretation-application`}};function Xh(e){return Yh[e].className}function Zh(e){return Yh[e].printClassName}function Qh(e){let t=e.reading.reference.indexOf(`:`),n=t===-1?e.reading.reference:e.reading.reference.slice(0,t),{start_verse:r,end_verse:i}=e.question;return`${n}:${r===i?`${r}`:`${r}–${i}`}`}var $h=`#ffffff`,eg=`#121212`;function tg(e){let t=document.documentElement;e===null?t.removeAttribute(`data-theme`):t.dataset.theme=e?`dark`:`light`;let n=e===null?void 0:e?eg:$h;for(let e of document.querySelectorAll(`meta[name='theme-color'][data-theme-color]`))e.content=n??(e.dataset.themeColor===`dark`?eg:$h)}async function ng(){let e=(await Promise.allSettled([Cu(),Promise.resolve().then(()=>{window.localStorage.clear(),window.sessionStorage.clear()}),rg(),ig()])).flatMap(e=>e.status===`rejected`?[e.reason]:[]);if(e.length>0)throw AggregateError(e,`Could not clear all browser data`)}async function rg(){if(!(`serviceWorker`in navigator))return;let e=await navigator.serviceWorker.getRegistrations();await Promise.all(e.map(e=>e.unregister()))}async function ig(){if(!(`caches`in window))return;let e=await window.caches.keys();await Promise.all(e.map(e=>window.caches.delete(e)))}var ag=L(`<reader-question-list>`,1);function og(e){let t=ir(()=>e.children);var n=z(ag);return _a(n,$n(()=>er(e,`children`),{"prop:content":()=>t()}),!1),n._$owner=A(),ka(),n}var sg=L(`<reader-print-answer class=print-reference-answer>`,1),cg=L(`<style>
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
        `),lg=L(`<span><!$><!/>:`),ug=``,dg=``,fg=`en`;function pg(e){var t=z(sg);return t._$owner=A(),Wi(()=>({e:e.contentLanguage,t:e.answerLabel,a:e.answerText,o:e.contentLanguage}),({e,t:n,a:r,o:i},a)=>{e!==a?.e&&da(t,`lang`,e),n!==a?.t&&(t.answerLabel=n),r!==a?.a&&(t.answerText=r),i!==a?.o&&(t.contentLanguage=i)}),t}function mg(){customElements.get(`reader-print-answer`)===void 0&&fo(`reader-print-answer`,{answerLabel:ug,answerText:dg,contentLanguage:fg},e=>[z(cg),I(Oi,{get when(){return e.answerLabel.length>0},get children(){return[(()=>{var t=z(lg),n=t.firstChild,[r,i]=Oa(n.nextSibling);return R(t,()=>e.answerLabel,r,i),t})(),` `]}}),Gi(()=>e.answerText)])}var hg=L(`<reader-print-question-body>`,1),gg=L(`<h2><span><!$><!/>:</span> <span class=print-question-text>`),_g=L(`<div class=review-answer tabindex=0>`),vg=L(`<div class=print-answer-lines aria-hidden=true>`),yg=L(`<span>&nbsp;`),bg=L(`<span>`);function xg(e){let t=e.context.question,n=e.answerText===void 0?e.showAnswers&&t.answer!==null?t.answer:null:e.answerText,r=e.answerLabel??e.catalog.format(`reference-answer`);var i=z(hg);return ga(i,`--reader-print-question-max-lines`,5),i.content=()=>[(()=>{var n=z(gg),r=n.firstChild,i=r.firstChild,[a,o]=Oa(i.nextSibling),s=r.nextSibling.nextSibling;return R(r,ba(()=>e.catalog.format(lh(t.kind))),a,o),R(s,()=>t.visible_text),Wi(()=>({e:e.contentLanguage,t:`print-question-type ${Zh(t.kind)}`}),({e,t},i)=>{e!==i?.e&&da(n,`lang`,e),pa(r,t,i?.t)}),n})(),I(Oi,{when:n!==null,get fallback(){var n=z(vg);return R(n,I(Di,{get each(){return Array.from({length:Math.max(1,t.lines)})},children:()=>z(e.blankLine===`space`?yg:bg)})),n},get children(){return I(Oi,{get when(){return e.onAnswerClick!==void 0},get fallback(){return I(Sg,{answerLabel:r,answerText:n??``,get contentLanguage(){return e.contentLanguage}})},get children(){var t=z(_g);return t.$$keydown=t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),e.onAnswerClick?.())},t.$$click=()=>e.onAnswerClick?.(),R(t,I(Sg,{answerLabel:r,answerText:n??``,get contentLanguage(){return e.contentLanguage}})),ka(),t}})}})],i._$owner=A(),Wi(()=>e.blankLine===`space`?`print-preview-question-body`:`print-question-body`,(e,t)=>{pa(i,e,t)}),i}function Sg(e){return I(pg,{get answerLabel(){return e.answerLabel??``},get answerText(){return e.answerText},get contentLanguage(){return e.contentLanguage}})}ta([`click`,`keydown`]);var Cg=L(`<reader-print-question-card role=article>`,1),wg=L(`<div class=print-swipe-action aria-hidden=true>`),Tg=L(`<div class=print-question-card-surface><div class=print-question-card-heading><p class=print-question-meta><span></span><span class=print-question-meta-separator aria-hidden=true>·</span><span></span></p><!$><!/></div><!$><!/>`),Eg=80;function Dg(e){let[t,n]=Yr(0),r,i,a=!1,o=e.context.question,s=xp(o.hardness);Pn(()=>{let t=e.onRemove;if(i===void 0||t===void 0)return;let r=new Ys(i,{threshold:()=>Eg,disregardVelocityThreshold:()=>Eg}),s=r.on(`panstart`,()=>{a=!1,n(0)}),c=r.on(`panmove`,()=>{let e=r.touchMoveX??0,t=r.touchMoveY??0;if(Math.abs(t)>Math.abs(e)&&Math.abs(t)>8){a=!0,n(0);return}Math.abs(e)>8&&n(Og(e))}),l=r.on(`panend`,()=>{let e=(r.touchEndX??r.touchMoveX??0)-(r.touchStartX??0),i=(r.touchEndY??r.touchMoveY??0)-(r.touchStartY??0);if(!a&&Math.abs(e)>Eg&&Math.abs(e)>=Math.abs(i)){a=!0,t(o.question_id);return}a=!1,n(0)});return()=>{s?.cancel(),c?.cancel(),l?.cancel(),r.destroy()}}),Zr(()=>t(),e=>{r?.classList.toggle(`is-swiping`,e!==0),r?.classList.toggle(`is-swiping-start`,e>0),r?.classList.toggle(`is-swiping-end`,e<0)});var c=z(Cg);return ya(()=>e=>{r=e},c),c.content=()=>[(()=>{var t=z(wg);return R(t,I(Oi,{get when(){return e.onRemove!==void 0},get children(){return I(Ws,{})}})),t})(),(()=>{var n=z(Tg),r=n.firstChild,a=r.firstChild,s=a.firstChild,c=s.nextSibling.nextSibling,l=a.nextSibling,[u,d]=Oa(l.nextSibling),f=r.nextSibling,[p,m]=Oa(f.nextSibling);return n.$$keydown=t=>{e.onQuestionClick===void 0||t.key!==`Enter`&&t.key!==` `||(t.preventDefault(),e.onQuestionClick())},n.$$click=()=>e.onQuestionClick?.(),ya(()=>e=>{i=e},n),R(s,ba(()=>e.catalog.format(uh(o.hardness)))),R(c,ba(()=>e.catalog.format(ch(o.kind)))),R(r,I(Oi,{get when(){return e.onRemove!==void 0},get children(){return I(uc,{class:`print-remove-action`,type:`button`,get"aria-label"(){return e.catalog.format(`print-remove-question`)},get"data-tippy-content"(){return e.catalog.format(`print-remove-question`)},onClick:()=>e.onRemove?.(o.question_id),get children(){return I(Ws,{})}})}}),u,d),R(n,I(xg,{get context(){return e.context},get catalog(){return e.catalog},get contentLanguage(){return e.contentLanguage},get showAnswers(){return e.showAnswers},get answerText(){return e.answerText},get answerLabel(){return e.answerLabel},get onAnswerClick(){return e.onAnswerClick},blankLine:`empty`}),p,m),Wi(()=>({e:e.onQuestionClick!==void 0,t:e.onQuestionClick===void 0?void 0:`button`,a:e.onQuestionClick===void 0?void 0:`0`,o:`translateX(${t()}px)`,i:e.catalog.locale,n:`print-question-kind ${Xh(o.kind)}`}),({e,t,a:r,o:i,i:o,n:s},l)=>{e!==l?.e&&n.classList.toggle(`is-question-clickable`,e),t!==l?.t&&da(n,`role`,t),r!==l?.a&&da(n,`tabindex`,r),i!==l?.o&&ga(n,`transform`,i),o!==l?.i&&da(a,`lang`,o),pa(c,s,l?.n)}),ka(),n})()],c._$owner=A(),Wi(()=>({e:`print-question-card ${s} ${e.cardClass??``}`,t:o.question_id}),({e,t},n)=>{pa(c,e,n?.e),t!==n?.t&&da(c,`data-question-id`,t)}),c}function Og(e){return Math.max(-160,Math.min(160,e))}ta([`click`,`keydown`]);var kg=L(`<reader-print-preview-question class=print-preview-question-card role=article>`,1);function Ag(e){var t=z(kg);return t.content=()=>I(xg,{get context(){return e.context},get catalog(){return e.catalog},get contentLanguage(){return e.contentLanguage},get showAnswers(){return e.showAnswers},get answerText(){return e.answerText},get answerLabel(){return e.answerLabel},blankLine:`space`}),t._$owner=A(),t}var jg=L(`<reader-print-preview-pages class=print-preview-pages aria-hidden=true>`,1),Mg=L(`<article class=print-preview-page><div class=print-preview-page-content><div class=print-question-legend></div><!$><!/></div><div class=print-page-number>`),Ng=L(`<span class=print-question-legend-item><span class=print-question-legend-abbreviation><!$><!/>:</span> <!$><!/>`),Pg=L(`<section class=print-preview-section><h3 class=print-preview-section-heading></h3><!$><!/>`);function Fg(e){var t=z(jg);return t.content=()=>I(Di,{get each(){return e.pages},children:(t,n)=>(()=>{var r=z(Mg),i=r.firstChild,a=i.firstChild,o=a.nextSibling,[s,c]=Oa(o.nextSibling),l=i.nextSibling;return R(a,I(Di,{get each(){return Lg(t)},children:t=>(()=>{var n=z(Ng),r=n.firstChild,i=r.firstChild,[a,o]=Oa(i.nextSibling),s=r.nextSibling.nextSibling,[c,l]=Oa(s.nextSibling);return R(r,ba(()=>e.catalog.format(lh(t))),a,o),R(n,ba(()=>e.catalog.format(ch(t))),c,l),n})()})),R(i,I(Di,{get each(){return t.sections},children:t=>(()=>{var n=z(Pg),r=n.firstChild,i=r.nextSibling,[a,o]=Oa(i.nextSibling);return R(r,ba(()=>Qh(t.heading))),R(n,I(Di,{get each(){return t.questions},children:t=>I(Ag,{context:t,get catalog(){return e.catalog},get contentLanguage(){return e.contentLanguage},get showAnswers(){return e.showAnswers},get answerText(){return e.getAnswer?.(t.question)},get answerLabel(){return e.answerLabel}})}),a,o),Wi(()=>e.contentLanguage,e=>{da(r,`lang`,e)}),n})()}),s,c),R(l,ba(()=>e.catalog.format(`print-page-number`,{page:n()+1,total:e.pages.length}))),r})()}),t._$owner=A(),t}var Ig=[`O`,`I`,`A`];function Lg(e){let t=new Set;for(let n of e.sections)for(let e of n.questions)e.question.kind===`I/A`?(t.add(`I`),t.add(`A`)):t.add(e.question.kind);return Ig.filter(e=>t.has(e))}function Rg(e){return new URL(e,{BASE_URL:`/`,DEV:!1,MODE:`production`,PROD:!0,SSR:!1}.VITE_API_ORIGIN??`https://api.wordquestions.com`).href}function zg(){customElements.get(`reader-print-preview-pages`)===void 0&&fo(`reader-print-preview-pages`,{content:void 0},(e,{element:t})=>{let n=t;return On(ic(n)),oc(es,e.content,n)})}function Bg(){customElements.get(`reader-print-preview-question`)===void 0&&fo(`reader-print-preview-question`,{content:void 0},(e,{element:t})=>{let n=t;return On(ic(n)),oc(ts,e.content,n)})}function Vg(){customElements.get(`reader-print-question-body`)===void 0&&fo(`reader-print-question-body`,{content:void 0},(e,{element:t})=>{let n=t;return On(ic(n)),oc(Io,e.content,n)})}function Hg(){customElements.get(`reader-print-question-card`)===void 0&&fo(`reader-print-question-card`,{content:void 0},(e,{element:t})=>{let n=t;return On(ic(n)),oc(Jo,e.content,n)})}function Ug(){customElements.get(`reader-question-list`)===void 0&&fo(`reader-question-list`,{content:void 0},(e,{element:t})=>{let n=t;return On(ic(n)),oc(qo,e.content,n)})}function Wg(){zg(),Bg(),Vg(),Hg(),Ug(),mg()}export{Tf as $,Eo as $n,Dc as $t,dh as A,Ao as An,Di as Ar,ku as At,vp as B,Ho as Bn,Yr as Br,au as Bt,ph as C,Qo as Cn,ba as Cr,Ju as Ct,vh as D,vo as Dn,ha as Dr,Bu as Dt,gh as E,Wo as En,_a as Er,Tu as Et,ch as F,$o as Fn,ir as Fr,ju as Ft,sp as G,Go as Gn,On as Gr,du as Gt,hp as H,Yo as Hn,rr as Hr,lu as Ht,Np as I,Fo as In,I as Ir,Uu as It,yp as J,Ro as Jn,A as Jr,uu as Jt,dp as K,zo as Kn,Pn as Kr,Z as Kt,jp as L,Co as Ln,nr as Lr,xu as Lt,ah as M,jo as Mn,Ai as Mr,Ou as Mt,th as N,Zo as Nn,Oi as Nr,zu as Nt,hh as O,Uo as On,L as Or,Eu as Ot,ih as P,No as Pn,ki as Pr,Du as Pt,Af as Q,To as Qn,Tc as Qt,ip as R,Jo as Rn,Zr as Rr,gu as Rt,xh as S,Bo as Sn,ka as Sr,ed as St,_h as T,B as Tn,ca as Tr,Au as Tt,pp as U,Po as Un,$n as Ur,fu as Ut,mp as V,Xo as Vn,Ci as Vr,pu as Vt,fp as W,Oo as Wn,er as Wr,iu as Wt,np as X,Lo as Xn,cu as Xt,_p as Y,Mo as Yn,X as Yt,rp as Z,yo as Zn,ou as Zt,Th as _,Fs as _n,Oa as _r,sf as _t,og as a,Zs as an,uo as ar,Rf as at,bh as b,Rs as bn,Gi as br,Gd as bt,Xh as c,Ks as cn,qa as cr,Mf as ct,Wh as d,Us as dn,ma as dr,kf as dt,uc as en,ho as er,wf as et,Hh as f,Js as fn,ua as fr,Df as ft,Eh as g,zs as gn,z as gr,pf as gt,Dh as h,Is as hn,Wi as hr,uf as ht,Dg as i,oc as in,fo as ir,Bf as it,rh as j,ko as jn,ji as jr,Ru as jt,fh as k,wo as kn,Fi as kr,wu as kt,Qh as l,Gs as ln,Ka as lr,Pf as lt,Oh as m,Ls as mn,ta as mr,lf as mt,Rg as n,sc as nn,po as nr,Of as nt,ng as o,Ys as on,so as or,Kf as ot,Vh as p,Vs as pn,pa as pr,ff as pt,cp as q,ns as qn,mn as qr,Q as qt,Fg as r,cc as rn,mo as rr,Ef as rt,tg as s,Hs as sn,Ja as sr,Nf as st,Wg as t,ic as tn,go as tr,qf as tt,Jh as u,qs as un,Ga as ur,Gf as ut,Ch as v,Ps as vn,Da as vr,rf as vt,mh as w,Ko as wn,da as wr,qu as wt,yh as x,Vo as xn,ya as xr,Hd as xt,Sh as y,Ws as yn,R as yr,Ud as yt,bp as z,So as zn,Jr as zr,su as zt};