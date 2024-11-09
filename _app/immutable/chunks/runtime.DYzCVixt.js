var vn=Array.isArray,pn=Array.from,hn=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,jt=Object.getOwnPropertyDescriptors,dn=Object.prototype,En=Array.prototype,Yt=Object.getPrototypeOf;function yn(t){return typeof t=="function"}const wn=()=>{};function Tn(t){return t()}function Ht(t){for(var n=0;n<t.length;n++)t[n]()}const m=2,ft=4,k=8,_t=16,y=32,J=64,R=128,H=256,d=512,A=1024,D=2048,x=4096,C=8192,Ut=16384,ct=32768,mn=65536,Bt=1<<18,et=Symbol("$state");function vt(t){return t===this.v}function Vt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function pt(t){return!Vt(t,this.v)}function Gt(t){throw new Error("effect_in_teardown")}function Kt(){throw new Error("effect_in_unowned_derived")}function $t(t){throw new Error("effect_orphan")}function Zt(){throw new Error("effect_update_depth_exceeded")}function An(){throw new Error("hydration_failed")}function gn(t){throw new Error("props_invalid_value")}function Rn(){throw new Error("state_descriptors_fixed")}function In(){throw new Error("state_prototype_fixed")}function Wt(){throw new Error("state_unsafe_local_read")}function Xt(){throw new Error("state_unsafe_mutation")}function Q(t){return{f:0,v:t,reactions:null,equals:vt,version:0}}function On(t){return zt(Q(t))}function Sn(t){var r;const n=Q(t);return n.equals=pt,f!==null&&f.l!==null&&((r=f.l).s??(r.s=[])).push(n),n}function zt(t){return l!==null&&l.f&m&&(E===null?un([t]):E.push(t)),t}function xn(t,n){return l!==null&&X()&&l.f&m&&(E===null||!E.includes(t))&&Xt(),t.equals(n)||(t.v=n,t.version=Pt(),ht(t,A),X()&&i!==null&&i.f&d&&!(i.f&y)&&(v!==null&&v.includes(t)?(h(i,A),K(i)):T===null?ln([t]):T.push(t))),n}function ht(t,n){var r=t.reactions;if(r!==null)for(var e=X(),s=r.length,o=0;o<s;o++){var u=r[o],_=u.f;_&A||!e&&u===i||(h(u,n),_&(d|R)&&(_&m?ht(u,D):K(u)))}}const Nn=1,kn=2,Dn=16,Cn=1,Pn=2,qn=4,Fn=8,bn=16,Ln=4,Mn=1,jn=2,Jt="[",Qt="[!",tn="]",dt={},Yn=Symbol();function Et(t){console.warn("hydration_mismatch")}let N=!1;function Hn(t){N=t}let w;function U(t){if(t===null)throw Et(),dt;return w=t}function Un(){return U(P(w))}function Bn(t){if(N){if(P(w)!==null)throw Et(),dt;w=t}}function Vn(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===tn){if(t===0)return n;t-=1}else(r===Jt||r===Qt)&&(t+=1)}var e=P(n);n.remove(),n=e}}var st,yt,wt;function Gn(){if(st===void 0){st=window;var t=Element.prototype,n=Node.prototype;yt=rt(n,"firstChild").get,wt=rt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__e=void 0,Text.prototype.__t=void 0}}function Tt(t=""){return document.createTextNode(t)}function Z(t){return yt.call(t)}function P(t){return wt.call(t)}function Kn(t){if(!N)return Z(t);var n=Z(w);return n===null&&(n=w.appendChild(Tt())),U(n),n}function $n(t,n){if(!N){var r=Z(t);return r instanceof Comment&&r.data===""?P(r):r}return w}function Zn(t,n=1,r=!1){let e=N?w:t;for(;n--;)e=P(e);if(!N)return e;var s=e.nodeType;if(r&&s!==3){var o=Tt();return e==null||e.before(o),U(o),o}return U(e),e}function Wn(t){t.textContent=""}function mt(t){i===null&&l===null&&$t(),l!==null&&l.f&R&&Kt(),tt&&Gt()}function ot(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function q(t,n,r,e=!0){var s=(t&J)!==0,o=i,u={ctx:f,deps:null,nodes_start:null,nodes_end:null,f:t|A,first:null,fn:n,last:null,next:null,parent:s?null:o,prev:null,teardown:null,transitions:null,version:0};if(r){var _=O;try{ut(!0),G(u),u.f|=Ut}catch(c){throw V(u),c}finally{ut(_)}}else n!==null&&K(u);var a=r&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null;return!a&&!s&&e&&(o!==null&&ot(u,o),l!==null&&l.f&m&&ot(u,l)),u}function Xn(t){const n=q(k,null,!1);return h(n,d),n.teardown=t,n}function zn(t){mt();var n=i!==null&&(i.f&k)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push(t)}else{var e=At(t);return e}}function Jn(t){return mt(),gt(t)}function Qn(t){const n=q(J,t,!0);return()=>{V(n)}}function At(t){return q(ft,t,!1)}function gt(t){return q(k,t,!0)}function tr(t){return gt(t)}function nr(t,n=0){return q(k|_t|n,t,!0)}function rr(t,n=!0){return q(k|y,t,!0,n)}function Rt(t){var n=t.teardown;if(n!==null){const r=tt,e=l;lt(!0),at(null);try{n.call(null)}finally{lt(r),at(e)}}}function V(t,n=!0){var r=!1;if((n||t.f&Bt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var o=e===s?null:P(e);e.remove(),e=o}r=!0}nt(t,n&&!r),M(t,0),h(t,C);var u=t.transitions;if(u!==null)for(const a of u)a.stop();Rt(t);var _=t.parent;_!==null&&t.f&y&&_.first!==null&&It(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function It(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function er(t,n){var r=[];Ot(t,r,!0),nn(r,()=>{V(t),n&&n()})}function nn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Ot(t,n,r){if(!(t.f&x)){if(t.f^=x,t.transitions!==null)for(const u of t.transitions)(u.is_global||r)&&n.push(u);for(var e=t.first;e!==null;){var s=e.next,o=(e.f&ct)!==0||(e.f&y)!==0;Ot(e,n,o?r:!1),e=s}}}function sr(t){St(t,!0)}function St(t,n){if(t.f&x){t.f^=x,j(t)&&G(t);for(var r=t.first;r!==null;){var e=r.next,s=(r.f&ct)!==0||(r.f&y)!==0;St(r,s?n:!1),r=e}if(t.transitions!==null)for(const o of t.transitions)(o.is_global||n)&&o.in()}}let B=!1,W=[];function xt(){B=!1;const t=W.slice();W=[],Ht(t)}function or(t){B||(B=!0,queueMicrotask(xt)),W.push(t)}function rn(){B&&xt()}function en(t){let n=m|A;i===null&&(n|=R);const r={deps:null,deriveds:null,equals:vt,f:n,first:null,fn:t,last:null,reactions:null,v:null,version:0};if(l!==null&&l.f&m){var e=l;e.deriveds===null?e.deriveds=[r]:e.deriveds.push(r)}return r}function ur(t){const n=en(t);return n.equals=pt,n}function Nt(t){nt(t);var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)sn(n[r])}}function kt(t){var n;Nt(t),n=qt(t);var r=(I||t.f&R)&&t.deps!==null?D:d;h(t,r),t.equals(n)||(t.v=n,t.version=Pt())}function sn(t){Nt(t),M(t,0),h(t,C),t.first=t.last=t.deps=t.reactions=t.fn=null}const Dt=0,on=1;let Y=Dt,L=!1,O=!1,tt=!1;function ut(t){O=t}function lt(t){tt=t}let g=[],S=0,l=null;function at(t){l=t}let i=null,E=null;function un(t){E=t}let v=null,p=0,T=null;function ln(t){T=t}let Ct=0,I=!1,f=null;function Pt(){return Ct++}function X(){return f!==null&&f.l===null}function j(t){var u,_;var n=t.f;if(n&A)return!0;if(n&D){var r=t.deps,e=(n&R)!==0;if(r!==null){var s;if(n&H){for(s=0;s<r.length;s++)((u=r[s]).reactions??(u.reactions=[])).push(t);t.f^=H}for(s=0;s<r.length;s++){var o=r[s];if(j(o)&&kt(o),o.version>t.version)return!0;e&&!I&&!((_=o==null?void 0:o.reactions)!=null&&_.includes(t))&&(o.reactions??(o.reactions=[])).push(t)}}e||h(t,d)}return!1}function an(t,n,r){throw t}function qt(t){var F;var n=v,r=p,e=T,s=l,o=I,u=E;v=null,p=0,T=null,l=t.f&(y|J)?null:t,I=!O&&(t.f&R)!==0,E=null;try{var _=(0,t.fn)(),a=t.deps;if(v!==null){var c;if(M(t,p),a!==null&&p>0)for(a.length=p+v.length,c=0;c<v.length;c++)a[p+c]=v[c];else t.deps=a=v;if(!I)for(c=p;c<a.length;c++)((F=a[c]).reactions??(F.reactions=[])).push(t)}else a!==null&&p<a.length&&(M(t,p),a.length=p);return _}finally{v=n,p=r,T=e,l=s,I=o,E=u}}function fn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&m&&(h(n,D),n.f&(R|H)||(n.f^=H),M(n,0))}function M(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)fn(t,r[e])}function nt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;V(r,n),r=e}}function G(t){var n=t.f;if(!(n&C)){h(t,d);var r=t.ctx,e=i,s=f;i=t,f=r;try{n&_t||nt(t),Rt(t);var o=qt(t);t.teardown=typeof o=="function"?o:null,t.version=Ct}catch(u){an(u)}finally{i=e,f=s}}}function Ft(){S>1e3&&(S=0,Zt()),S++}function bt(t){var n=t.length;if(n!==0){Ft();var r=O;O=!0;try{for(var e=0;e<n;e++){var s=t[e];if(s.first===null&&!(s.f&y))it([s]);else{var o=[];Lt(s,o),it(o)}}}finally{O=r}}}function it(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(C|x))&&j(e)&&(G(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?It(e):e.fn=null))}}function _n(){if(L=!1,S>1001)return;const t=g;g=[],bt(t),L||(S=0)}function K(t){Y===Dt&&(L||(L=!0,queueMicrotask(_n)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&y){if(!(r&d))return;h(n,D)}}g.push(n)}function Lt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,o=(s&(C|x))===0,u=(s&y)!==0,_=(s&d)!==0,a=r.first;if(o&&(!u||!_)){if(u&&h(r,d),s&k){if(!u&&j(r)&&(G(r),a=r.first),a!==null){r=a;continue}}else if(s&ft)if(u||_){if(a!==null){r=a;continue}}else e.push(r)}var c=r.next;if(c===null){let b=r.parent;for(;b!==null;){if(t===b)break t;var F=b.next;if(F!==null){r=F;continue t}b=b.parent}}r=c}for(var $=0;$<e.length;$++)a=e[$],n.push(a),Lt(a,n)}function Mt(t){var n=Y,r=g;try{Ft();const s=[];Y=on,g=s,L=!1,bt(r);var e=t==null?void 0:t();return rn(),(g.length>0||s.length>0)&&Mt(),S=0,e}finally{Y=n,g=r}}async function lr(){await Promise.resolve(),Mt()}function ar(t){var n=t.f;if(n&C)return t.v;if(l!==null){E!==null&&E.includes(t)&&Wt();var r=l.deps;v===null&&r!==null&&r[p]===t?p++:v===null?v=[t]:v.push(t),T!==null&&i!==null&&i.f&d&&!(i.f&y)&&T.includes(t)&&(h(i,A),K(i))}if(n&m){var e=t;j(e)&&kt(e)}return t.v}function ir(t){const n=l;try{return l=null,t()}finally{l=n}}const cn=~(A|D|d);function h(t,n){t.f=t.f&cn|n}function fr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},n||(f.l={s:null,u:null,r1:[],r2:Q(!1)})}function _r(t){const n=f;if(n!==null){const e=n.e;if(e!==null){n.e=null;for(var r=0;r<e.length;r++)At(e[r])}f=n.p,n.m=!0}return{}}function cr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(et in t)z(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&et in r&&z(r)}}}function z(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{z(t[e],n)}catch{}const r=Yt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=jt(r);for(let s in e){const o=e[s].get;if(o)try{o.call(t)}catch{}}}}}export{kn as $,Ht as A,ir as B,Tn as C,ar as D,cr as E,wn as F,Xn as G,Jt as H,Sn as I,xn as J,$n as K,tr as L,Kn as M,Bn as N,Zn as O,nr as P,Vt as Q,er as R,Qt as S,Mn as T,Yn as U,Vn as V,sr as W,x as X,Nn as Y,Dn as Z,Q as _,Gn as a,Ot as a0,nn as a1,V as a2,ct as a3,_t as a4,Ut as a5,At as a6,yn as a7,or as a8,Ln as a9,et as aa,dn as ab,En as ac,Rn as ad,rt as ae,In as af,Yt as ag,gt as ah,gn as ai,mn as aj,qn as ak,pt as al,Cn as am,Pn as an,Fn as ao,en as ap,ur as aq,bn as ar,Mt as as,lr as at,On as au,P as b,Tt as c,hn as d,dt as e,U as f,Z as g,N as h,vn as i,Un as j,w as k,tn as l,Et as m,An as n,Wn as o,pn as p,Qn as q,rr as r,Hn as s,fr as t,i as u,_r as v,f as w,jn as x,Jn as y,zn as z};
