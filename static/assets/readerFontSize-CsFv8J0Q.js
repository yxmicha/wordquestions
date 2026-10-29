import{C as e,a as t,c as n,d as r,g as i,i as a,n as o,p as s,x as c}from"./userIdentity-C_j6BXDX.js";import{a as l,c as u,f as d,h as ee,l as f,m as te,n as p,o as m,p as h,r as g,t as ne,u as _}from"./types-BIdNkPo_.js";import{c as re,n as v}from"./settings-Bhxk_ZcB.js";import{t as y}from"./answerSync-Bl2eBB5H.js";var b=d().trim().min(1).max(64),x=`GEN.EXO.LEV.NUM.DEU.JOS.JDG.RUT.1SA.2SA.1KI.2KI.1CH.2CH.EZR.NEH.EST.JOB.PSA.PRO.ECC.SNG.ISA.JER.LAM.EZK.DAN.HOS.JOL.AMO.OBA.JON.MIC.NAM.HAB.ZEP.HAG.ZEC.MAL.MAT.MRK.LUK.JHN.ACT.ROM.1CO.2CO.GAL.EPH.PHP.COL.1TH.2TH.1TI.2TI.TIT.PHM.HEB.JAS.1PE.2PE.1JN.2JN.3JN.JUD.REV`.split(`.`),S=m(x),C=_({book:f().int().min(0).max(65),name:d().min(1),chapter_count:f().int().positive().max(255)}).strict(),w=C.extend({book:f().int().min(0).max(65).transform((e,t)=>{let n=x[e];return n===void 0?(t.addIssue({code:ee.custom,message:`Unknown Bible book number`}),ne):S.parse(n)})}).strict(),ie=w.readonly(),ae=w.extend({book:S}).readonly(),oe=_({version:b,abbreviation:d().min(1),name:d().min(1),attribution:d().min(1),copyright:d().min(1),books:p(C).min(1).readonly()}).strict(),se=_({version:b,abbreviation:d().min(1),name:d().min(1),attribution:d().min(1),copyright:d().min(1),books:p(ie).min(1).readonly()}).strict(),ce=oe.readonly(),le=se.extend({requires_bible_access:g(),question_bank_language:d().min(1),picker_order:f().int().nonnegative().max(4294967295),legacy:g(),reader_default:g(),profile_default:g()}).strict(),ue=le.readonly(),de=le.extend({books:p(ae).min(1).readonly()}).strict().readonly(),T=e=>{let t=new Set(e.versions.map(e=>e.version));return e.versions.length>0&&t.size===e.versions.length},E=_({versions:p(ue).readonly()}).strict();_({versions:p(ce).readonly()}).strict().readonly().refine(T),E.readonly().refine(T);var fe=E.extend({versions:p(de).readonly()}).strict().readonly().refine(T),pe=_({book:d().min(1),chapter:f().int().positive().max(255),first_verse:f().int().positive().max(255),last_verse:f().int().positive().max(255)}).strict().refine(e=>e.last_verse>=e.first_verse).readonly(),me=_({text:d(),layout:m([``,`paragraph`,`paragraph_ident`,`mid_paragraph`,`quote`,`quote_1`,`quote_2`,`centered`,`blank`])}).strict().readonly(),he=_({verse:f().int().positive().max(255),last_verse:f().int().min(0).max(255).default(0),paragraph_start:g(),lines:p(me).readonly()}).strict().readonly(),D=_({first_verse:f().int().positive().max(255),last_verse:f().int().positive().max(255),verses:p(he).readonly().default([])}).strict().refine(e=>e.last_verse>=e.first_verse).readonly(),O=_({question_id:d().uuid().brand(`QuestionId`),kind:m([`O`,`I`,`A`,`I/A`]),visible_text:d().min(1),start_verse:f().int().positive().max(255),end_verse:f().int().positive().max(255),level:f().int().positive().max(15).default(1),hardness:f().min(0).max(1),lines:f().int().positive().max(20),answer:d().nullable(),answer_text:d().nullable(),same_at_easier_level:g().default(!1),same_at_harder_level:g().default(!1)}).strict().readonly();_({sections:p(D).readonly(),verse_numbers:p(f().int().positive().max(255)).readonly()}).strict().readonly();var ge=_({book:d().min(1),chapter:f().int().positive().max(255),questions:p(O).readonly(),text_sections:p(D).readonly(),verse_numbers:p(f().int().positive().max(255)).readonly()}).strict().readonly(),k=_({request_id:d().min(1)}).strict(),_e=k.extend({bible_version:b,access_key:d().nullable(),kind:u(`reading`),question_scope:m([`profile_level`,`review`,`print`]),profile_level:f().int().min(1).max(15),show_answers:g(),readings:p(pe).min(1).readonly()}).strict(),ve=k.extend({kind:u(`bible_version_catalog`),access_key:d().nullable()}).strict(),ye=k.extend({kind:u(`offline_content_preload`),access_key:d().nullable()}).strict();l(`kind`,[_e,ve,ye]).readonly();var be=_({request_id:d().min(1),kind:u(`reading`),status:u(`loaded`),readings:p(ge).readonly()}).strict(),A=_({request_id:d().min(1),kind:u(`bible_version_catalog`),status:u(`loaded`),catalog:fe}).strict(),j=_({cached:f().int().nonnegative(),failed:f().int().nonnegative()}).strict().readonly(),M=_({request_id:d().min(1),kind:u(`offline_content_preload`),status:u(`loaded`),public_assets:j,private_content:j}).strict(),N=_({request_id:d().min(1),kind:m([`reading`,`bible_version_catalog`,`offline_content_preload`]),status:u(`error`),message:d().min(1)}).strict(),xe=_({request_id:d().min(1),kind:m([`reading`,`bible_version_catalog`,`offline_content_preload`]),status:m([`loaded`,`error`])}).passthrough(),Se=_({request_id:d().min(1),kind:u(`reading`),status:u(`loaded`),readings:p(te()).readonly()}).strict(),Ce=h([be,A,M]);h([Ce,N]).readonly();function we(e){return Se.safeParse(e).success}var P,Te=0,F=new Map;function Ee(e){return L({...e,kind:`reading`}).then(e=>{if(e.kind!==`reading`)throw Error(`Question worker returned the wrong response kind`);return e})}function I(e){return L({kind:`bible_version_catalog`,access_key:e}).then(e=>{if(e.kind!==`bible_version_catalog`)throw Error(`Question worker returned the wrong response kind`);return e})}function De(e){return L({kind:`offline_content_preload`,access_key:e}).then(e=>{if(e.kind!==`offline_content_preload`)throw Error(`Question worker returned the wrong offline-cache response kind`);return e})}function L(e){let t=Oe(),n=`question-bank-${++Te}`;return new Promise((r,i)=>{F.set(n,{resolve:r,reject:i});try{t.postMessage({...e,request_id:n})}catch(e){F.delete(n),i(e instanceof Error?e:Error(`Could not send question bank request`))}})}function Oe(){if(P!==void 0)return P;let e=new Worker(new URL(`/assets/questionBankWorker-Dmky3IvX.js`,``+import.meta.url),{type:`module`});return e.addEventListener(`message`,ke),e.addEventListener(`error`,Ae),e.addEventListener(`messageerror`,je),P=e,e}function ke(e){let t=xe.safeParse(e.data);if(!t.success){R(Error(`Question worker returned an invalid response`));return}let n=F.get(t.data.request_id);if(n!==void 0){if(t.data.status===`error`){let r=N.safeParse(e.data);if(!r.success){R(Error(`Question worker returned an invalid error response`));return}F.delete(t.data.request_id),n.reject(Error(r.data.message));return}if(t.data.kind===`bible_version_catalog`){let r=A.safeParse(e.data);if(!r.success){R(Error(`Question worker returned an invalid catalog response`));return}F.delete(t.data.request_id),n.resolve(r.data);return}if(t.data.kind===`offline_content_preload`){let r=M.safeParse(e.data);if(!r.success){R(Error(`Question worker returned an invalid offline-cache response`));return}F.delete(t.data.request_id),n.resolve(r.data);return}if(!we(e.data)){R(Error(`Question worker returned an invalid reading response`));return}F.delete(t.data.request_id),n.resolve(e.data)}}function Ae(e){R(Error(e.message||`Question worker stopped unexpectedly`))}function je(){R(Error(`Question worker returned an unreadable message`))}function R(e){P?.terminate(),P=void 0;for(let t of F.values())t.reject(e);F.clear()}var Me=`1|GEN 1-3
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
`,z=f().int().positive().max(65535).brand(`DayNumber`),B=d().min(1).brand(`BibleBookAlias`),V=f().int().positive().max(255).brand(`ChapterNumber`),Ne=m([`profile_level`,`review`,`print`]),H=_({book:d().min(1),chapter:f().int().positive().max(255),reference:d().min(1),first_verse:f().int().positive().max(255),last_verse:f().int().positive().max(255),questions:p(O).readonly(),review_available:g().default(!1)}).strict(),Pe=H.extend({text_sections:p(D).readonly(),verse_numbers:p(f().int().positive().max(255)).readonly()}).strict().readonly();_({day_number:z.nullable(),bible_version:b,question_scope:Ne.default(`profile_level`),show_answers:g().default(!1),attribution:d().min(1),copyright:d().min(1),readings:p(H).min(1),previous_day:z.nullable(),next_day:z.nullable()}).strict().extend({readings:p(Pe).min(1).readonly()}).strict().readonly();var Fe=_({alias:B,name:d().min(1),chapter_count:V}).strict().readonly(),Ie=_({bible_version:b,books:p(Fe).min(1).readonly()}).strict().readonly(),Le=z.parse(1),Re=Array.from({length:365},(e,t)=>z.parse(t+1));async function ze(){let t=await r(e.lastReadingDay);if(t===void 0)return;let n=Number(t),i=z.safeParse(n);return i.success?i.data:void 0}async function Be(n){await t(e.lastReadingDay,String(n))}async function Ve(){let t=await r(e.lastBibleVersion);if(t===void 0)return;let n=b.safeParse(t);return n.success?n.data:void 0}async function He(n){await t(e.lastBibleVersion,n)}var Ue=class extends Error{status;name=`ReadingHttpError`;constructor(e){super(`Reading asset request failed with HTTP ${e}`),this.status=e}},We=class extends Error{resource;name=`OfflineReadingError`;constructor(e,t){super(`No cached ${e} is available while offline`,t),this.resource=e}};function Ge(e){return b.parse(e)}function Ke(e){return B.parse(e)}function qe(e){return V.parse(e)}var Je=5,U=new Map,W=new Map;async function G(e){let t=await Y(e),n=q(t);return n===void 0?K(e,t):n}function K(e,t){let n=U.get(t);if(n!==void 0)return n;let r=Ze(e,t).finally(()=>{U.delete(t)});return U.set(t,r),r}async function Ye(e){let t=await Y(e),n=q(t);if(n!==void 0)return n;let r=(async()=>{let n=await i(t);return n===void 0?K(e,t):y(n)})();return Xe(t,r),r.catch(()=>{W.get(t)===r&&W.delete(t)}),r}function q(e){let t=W.get(e);if(t!==void 0)return W.delete(e),W.set(e,t),t}function Xe(e,t){for(W.delete(e),W.set(e,t);W.size>Je;){let e=W.keys().next().value;if(e===void 0)return;W.delete(e)}}async function Ze(e,t){let r=await i(t);if(r!==void 0)return y(r);try{let r=await tt(e,await o());return n(t,r).catch(e=>{console.error(`Could not cache the loaded reading for offline use`,e)}),r}catch(e){throw!navigator.onLine||re(e)?new We(`reading`,{cause:e}):e}}var J=new Map;async function Qe(e){let t=await Y(e);if(await i(t)!==void 0||!navigator.onLine)return;let n=J.get(t);if(n!==void 0)return n;let r=G(e).then(()=>void 0).finally(()=>J.delete(t));return J.set(t,r),r}async function $e(e){let t=`catalog:${e}`,{catalog:n}=await I((await v()).access_key),r=n.versions.find(t=>t.version===e);if(r===void 0)throw Error(`Bible version ${e} is absent from the static catalog`);let i=Ie.parse({bible_version:e,books:r.books.map(e=>({alias:B.parse(e.book),name:e.name,chapter_count:e.chapter_count}))});return await a(t,i),i}async function et(e){return(await I(e)).catalog}async function Y(e){let t=await o(),n=await nt(t),r=e.kind===`chronological`?`day:${e.bible_version}:${e.question_scope}:${e.day_number}`:`chapter:${e.bible_version}:${e.question_scope}:${e.selection.book}:${e.selection.chapter}`;return`reader-data-v4:${t}:${n}:${e.show_answers?`with-reference-answers`:`without-reference-answers`}:${r}`}async function tt(e,t){let n=await nt(t),r=await v(),i=(await I(r.access_key)).catalog.versions.find(t=>t.version===e.bible_version);if(i===void 0)throw Error(`Bible version ${e.bible_version} is absent from the static catalog`);let a=new Map(i.books.map(e=>[B.parse(e.book),e.name])),o=it(e,i.books.map(e=>({alias:B.parse(e.book),name:e.name,chapter_count:V.parse(e.chapter_count)}))),s=await Ee({bible_version:e.bible_version,question_scope:e.question_scope,profile_level:n,show_answers:e.question_scope!==`review`&&e.show_answers,access_key:r.access_key,readings:o.map(({book:e,chapter:t,first_verse:n,last_verse:r})=>({book:e,chapter:t,first_verse:n,last_verse:r}))}),c=new Map(s.readings.map(e=>[`${e.book}:${e.chapter}`,{questions:e.questions,textSections:e.text_sections,verseNumbers:e.verse_numbers}])),l=await rt(t,[...c.values()].flatMap(({questions:e})=>e.map(e=>e.question_id))),u=o.map(e=>{let t=c.get(`${e.book}:${e.chapter}`);if(t===void 0)throw Error(`Question worker omitted ${e.book} ${e.chapter}`);let n=Math.min(...t.textSections.map(e=>e.first_verse)),r=Math.max(...t.textSections.map(e=>e.last_verse));if(!Number.isFinite(n)||!Number.isFinite(r))throw Error(`Bible text is empty for ${e.book} ${e.chapter}`);let i=a.get(e.book);if(i===void 0)throw Error(`Bible catalog has no name for ${e.book}`);return{book:e.book,chapter:e.chapter,reference:e.label.replace(`{book}`,i),first_verse:n,last_verse:r,questions:t.questions.map(e=>{let t=l.get(e.question_id);return t===void 0?e:{...e,answer_text:t}}),review_available:t.questions.some(e=>l.has(e.question_id)),text_sections:t.textSections,verse_numbers:t.verseNumbers}}),d=e.kind===`chronological`?e.day_number:null;return{day_number:d,bible_version:e.bible_version,question_scope:e.question_scope,show_answers:e.question_scope!==`review`&&e.show_answers,attribution:i.attribution,copyright:i.copyright,readings:u,previous_day:d!==null&&d>1?z.parse(d-1):null,next_day:d!==null&&d<365?z.parse(d+1):null}}async function nt(e){let t=await s(e);return typeof t==`number`&&Number.isInteger(t)&&t>=1&&t<=15?t:6}async function rt(e,t){let n=new Map,r=await c(e,t);for(let e of r)n.set(e.questionId,e.answerText);return n}function it(e,t){if(e.kind===`chapter`)return[{book:e.selection.book,chapter:e.selection.chapter,first_verse:1,last_verse:255,label:`{book} ${e.selection.chapter}`}];let n=Me.split(/\r?\n/).find(t=>t.startsWith(`${e.day_number}|`));if(n===void 0)throw Error(`Chronological reading day ${e.day_number} is missing`);let r=n.split(`|`,2)[1];if(r===void 0)throw Error(`Chronological reading day ${e.day_number} is malformed`);return r.split(`;`).flatMap(e=>{let[n,r=``]=e.split(` `,2),i=t.find(e=>e.alias===n);if(i===void 0)throw Error(`Reading plan contains unsupported book ${n}`);if(r===``)return Array.from({length:i.chapter_count},(e,t)=>X(i.alias,t+1));let[a,o]=r.split(`:`,2);if(a===void 0)throw Error(`Reading plan has no chapter in ${e}`);let s=a.split(`-`,2).map(Z),c=s[0],l=s[1]??c;if(c===void 0||l===void 0||l<c)throw Error(`Reading plan has an invalid chapter range in ${e}`);if(l>i.chapter_count)throw Error(`Reading plan exceeds ${i.alias}'s ${i.chapter_count} chapters`);let u=o===void 0?void 0:at(o);return Array.from({length:l-c+1},(e,t)=>{let n=c+t;return u===void 0?X(i.alias,n):{book:i.alias,chapter:V.parse(n),first_verse:u.first,last_verse:u.last,label:u.first===u.last?`{book} ${n}:${u.first}`:`{book} ${n}:${u.first}-${u.last}`}})})}function X(e,t){return{book:e,chapter:V.parse(t),first_verse:1,last_verse:255,label:`{book} ${t}`}}function Z(e){let t=Number(e);if(!Number.isInteger(t)||t<1||t>255)throw Error(`Reading plan contains an invalid number: ${e}`);return t}function at(e){let[t,n]=e.split(`-`,2);if(t===void 0)throw Error(`Reading plan contains an invalid verse range: ${e}`);let r=Z(t),i=n===void 0?r:Z(n);if(i<r)throw Error(`Reading plan contains a reversed verse range: ${e}`);return{first:r,last:i}}var ot=f().int().min(1).max(15).brand(`ProfileLevel`),st=ot.parse(6),Q=[50,75,100,112.5,125,150,175];async function ct(){let t=Number.parseFloat(await r(e.readerBaseFontSize)??``);return dt(t)?t:100}function lt(n){t(e.readerBaseFontSize,String(n)),$(n)}function $(e){let t=Math.min(e,150);document.documentElement.style.fontSize=`${t}%`,document.documentElement.style.setProperty(`--reader-font-scale`,String(e/t))}function ut(e,t){let n=Q.indexOf(e),r=t===`increase`?n+1:n-1;return Q[Math.max(0,Math.min(Q.length-1,r))]??e}function dt(e){return Q.some(t=>t===e)}export{I as C,Be as S,b as T,Ke as _,lt as a,Qe as b,Ue as c,et as d,Ve as f,$e as g,G as h,Q as i,Re as l,Ye as m,$ as n,st as o,ze as p,ct as r,ot as s,ut as t,Le as u,Ge as v,De as w,He as x,qe as y};