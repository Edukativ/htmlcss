(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{324:function(t,n,e){var content=e(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(65).default)("17afc60a",content,!0,{sourceMap:!1})},325:function(t,n,e){"use strict";e(326)},326:function(t,n,e){"use strict";var o=e(2),c=e(11),r=e(4),l=e(31),m=e(7),d=e(49),f=e(155),v=e(15),h=e(57),x=e(154),_=e(223),w=e(6),C=e(24),k=w("replace"),z=TypeError,y=r("".indexOf),A=r("".replace),M=r("".slice),T=Math.max;o({target:"String",proto:!0},{replaceAll:function(t,n){var e,o,r,w,j,O,J,L,E,H=l(this),N=0,P=0,S="";if(!d(t)){if((e=f(t))&&(o=v(l(x(t))),!~y(o,"g")))throw new z("`.replaceAll` does not allow non-global regexes");if(r=h(t,k))return c(r,t,H,n);if(C&&e)return A(v(H),t,n)}for(w=v(H),j=v(t),(O=m(n))||(n=v(n)),J=j.length,L=T(1,J),N=y(w,j);-1!==N;)E=O?v(n(j,N,w)):_(j,w,N,[],void 0,n),S+=M(w,P,N)+E,P=N+J,N=N+L>w.length?-1:y(w,j,N+L);return P<w.length&&(S+=M(w,P)),S}})},327:function(t,n,e){"use strict";e(324)},328:function(t,n,e){var o=e(64)((function(i){return i[1]}));o.push([t.i,"._smallcaps[data-v-39ac9620]{font-size:14px;font-weight:600}._no-appearance[data-v-39ac9620]{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-color:transparent!important;box-shadow:none!important;outline:0}@media not (min-width:992px){.comment[data-v-39ac9620]{margin-left:0!important}}.comment h4[data-v-39ac9620],.comment h5[data-v-39ac9620],.comment p[data-v-39ac9620]{color:#505050;font-size:16px;font-weight:700}.comment h5[data-v-39ac9620]{color:#c7c7c7;font-size:13px;font-weight:500;text-transform:uppercase}.comment p[data-v-39ac9620]{color:#47425d;font-weight:500;padding:6px 0}.comment a[data-v-39ac9620],.comment a[data-v-39ac9620]:hover{background-color:#d65050;color:#fff;display:inline-block;font-size:13px;padding:8px 16px}.comment[data-v-39ac9620]:not(:first-child){margin-top:25px;padding-top:25px}",""]),o.locals={},t.exports=o},329:function(t,n,e){"use strict";e.r(n);e(27),e(58),e(325);var o={props:["comment"],name:"CommentComponent",computed:{normalizeText:function(){return this.comment.text.replaceAll("\n","<br>")}}},c=(e(327),e(26)),component=Object(c.a)(o,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"comment col-md-12",attrs:{"data-aos":"fade-up"}},[n("h4",[t._v(t._s(t.comment.from))]),t._v(" "),n("h5",[t._v(t._s(t.comment.date))]),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.normalizeText)}}),t._v(" "),n("NuxtLink",{attrs:{to:"##"}},[t._v("Ответить")])],1)}),[],!1,null,"39ac9620",null);n.default=component.exports},331:function(t,n,e){"use strict";e.r(n);var o={props:["comments"],name:"CommentsComponent"},c=e(26),component=Object(c.a)(o,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"comments"},[n("div",{staticClass:"row justify-content-center"},t._l(t.comments,(function(t){return n("app-comment",{key:t.id,attrs:{comment:t}})})),1)])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{AppComment:e(329).default})}}]);