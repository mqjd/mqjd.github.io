"use strict";(self.webpackChunkmqjd_blog=self.webpackChunkmqjd_blog||[]).push([[906],{6012:function(e,t,l){l.r(t),l.d(t,{Head:function(){return i.F},default:function(){return g}});var n=l(1151),a=l(7294);function r(e){const t=Object.assign({h2:"h2",a:"a",span:"span",ul:"ul",li:"li",p:"p",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,n.a)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h2,{id:"基础",style:{position:"relative"}},a.createElement(t.a,{href:"#%E5%9F%BA%E7%A1%80","aria-label":"基础 permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"基础"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"设置用户与邮箱"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},'git config --global user.name "John Doe"\ngit config --global user.email johndoe@example.com\n')),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"初始化仓库"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"mkdir test\ncd test\ngit init\n")),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"状态"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"git status\n")),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"添加文件到提交列表"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"# 添加单个文件\ngit add file.txt\n# 添加目录\ngit add dir\n# 添加一类\ngit add *.js\n# 添加所有\ngit add .\n")),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"从提交列表删除"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"# 删除单个文件\ngit reset file.txt\n# 删除目录\ngit reset dir\n# 删除一类\ngit reset *.js\n# 删除所有\ngit reset .\n")),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"文件撤销更改"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"# 撤销单个文件\ngit checkout -- file.txt\n# 撤销所有\ngit checkout .\n")),"\n"),"\n"),"\n",a.createElement(t.h2,{id:"日志",style:{position:"relative"}},a.createElement(t.a,{href:"#%E6%97%A5%E5%BF%97","aria-label":"日志 permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"日志"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"常用"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"git log --graph --pretty=format:'%h - %s (%an, %cd)' --date iso -n 5\n# 显示效果如下\n* 98c6d27 - add image (mqjd, 2022-01-16 21:40:25 +0800)\n* 614339a - add image (mqjd, 2022-01-16 16:36:45 +0800)\n* e6b63c0 - add image (mqjd, 2022-01-16 16:21:51 +0800)\n* aa5df3b - add image (mqjd, 2022-01-15 21:50:53 +0800)\n* 9132436 - add image (mqjd, 2022-01-15 21:45:00 +0800)\n")),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"git log --pretty=format 常用的选项"),"\n",a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,{align:"left"},"选项"),a.createElement(t.th,{align:"left"},"说明"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"%H")),a.createElement(t.td,{align:"left"},"提交的完整哈希值")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"%h")),a.createElement(t.td,{align:"left"},"提交的简写哈希值")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"%T")),a.createElement(t.td,{align:"left"},"树的完整哈希值")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"%t")),a.createElement(t.td,{align:"left"},"树的简写哈希值")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"%P")),a.createElement(t.td,{align:"left"},"父提交的完整哈希值")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"%p")),a.createElement(t.td,{align:"left"},"父提交的简写哈希值")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"%an")),a.createElement(t.td,{align:"left"},"作者名字")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"%ae")),a.createElement(t.td,{align:"left"},"作者的电子邮件地址")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"%ad")),a.createElement(t.td,{align:"left"},"作者修订日期（可以用 --date=选项 来定制格式）")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"%ar")),a.createElement(t.td,{align:"left"},"作者修订日期，按多久以前的方式显示")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"%cn")),a.createElement(t.td,{align:"left"},"提交者的名字")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"%ce")),a.createElement(t.td,{align:"left"},"提交者的电子邮件地址")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"%cd")),a.createElement(t.td,{align:"left"},"提交日期")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"%cr")),a.createElement(t.td,{align:"left"},"提交日期（距今多长时间）")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"%s")),a.createElement(t.td,{align:"left"},"提交说明")))),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"git log 的常用选项"),"\n",a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,{align:"left"},"选项"),a.createElement(t.th,{align:"left"},"说明"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"-p")),a.createElement(t.td,{align:"left"},"按补丁格式显示每个提交引入的差异。")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"--stat")),a.createElement(t.td,{align:"left"},"显示每次提交的文件修改统计信息。")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"--shortstat")),a.createElement(t.td,{align:"left"},"只显示 --stat 中最后的行数修改添加移除统计。")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"--name-only")),a.createElement(t.td,{align:"left"},"仅在提交信息后显示已修改的文件清单。")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"--name-status")),a.createElement(t.td,{align:"left"},"显示新增、修改、删除的文件清单。")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"--abbrev-commit")),a.createElement(t.td,{align:"left"},"仅显示 SHA-1 校验和所有 40 个字符中的前几个字符。")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"--relative-date")),a.createElement(t.td,{align:"left"},"使用较短的相对时间而不是完整格式显示日期（比如“2 weeks ago”）。")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"--graph")),a.createElement(t.td,{align:"left"},"在日志旁以 ASCII 图形显示分支与合并历史。")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"--pretty")),a.createElement(t.td,{align:"left"},"使用其他格式显示历史提交信息。可用的选项包括 oneline、short、full、fuller 和 format（用来定义自己的格式）。")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"--oneline")),a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"--pretty=oneline --abbrev-commit")," 合用的简写。")))),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"限制 git log 输出的选项"),"\n",a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,{align:"left"},"选项"),a.createElement(t.th,{align:"left"},"说明"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"-<n>")),a.createElement(t.td,{align:"left"},"仅显示最近的 n 条提交。")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"--since"),", ",a.createElement(t.code,null,"--after")),a.createElement(t.td,{align:"left"},"仅显示指定时间之后的提交。")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"--until"),", ",a.createElement(t.code,null,"--before")),a.createElement(t.td,{align:"left"},"仅显示指定时间之前的提交。")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"--author")),a.createElement(t.td,{align:"left"},"仅显示作者匹配指定字符串的提交。")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"--committer")),a.createElement(t.td,{align:"left"},"仅显示提交者匹配指定字符串的提交。")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"--grep")),a.createElement(t.td,{align:"left"},"仅显示提交说明中包含指定字符串的提交。")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},a.createElement(t.code,null,"-S")),a.createElement(t.td,{align:"left"},"仅显示添加或删除内容匹配指定字符串的提交。")))),"\n"),"\n"),"\n",a.createElement(t.h2,{id:"代理",style:{position:"relative"}},a.createElement(t.a,{href:"#%E4%BB%A3%E7%90%86","aria-label":"代理 permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"代理"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"设置代理"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"git config --global http.proxy socks5://127.0.0.1:1080\ngit config --global https.proxy socks5://127.0.0.1:1080\n")),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"查看代理"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"git config --get http.proxy\ngit config --get https.proxy\n")),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"删除代理"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"git config --unset http.proxy\ngit config --unset https.proxy\n")),"\n"),"\n"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.a)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},c=l(6459),i=l(505),s=l(917);const m=e=>{let t=Object.assign({},((0,c.Z)(e),e));return(0,s.tZ)(i.Z,t)};function g(e){return a.createElement(m,e,a.createElement(o,e))}},5975:function(e,t,l){var n=l(7103),a=l(7294),r=l(8145),o=l(6083),c=l(5950);t.Z=e=>{let{tags:t}=e;const{tagsPath:l,basePath:i}=(0,o.Z)();return(0,n.tZ)(a.Fragment,null,t.map(((e,t)=>(0,n.tZ)(a.Fragment,{key:e.slug},!!t&&", ",(0,n.tZ)(r.Link,{sx:e=>{var t;return Object.assign({},null===(t=e.styles)||void 0===t?void 0:t.a)},to:(0,c.Z)("/"+i+"/"+l+"/"+e.slug)},e.name)))))}},3105:function(e,t,l){l.d(t,{Z:function(){return I}});var n=l(7294),a=l(917),r=l(7103),o=l(7603),c=l(795),i=l(6083),s=l(6197);const m={position:"relative",width:"24px",height:"24px",borderRadius:"50%",transition:"all 0.45s ease","&:before":{content:'""',position:"absolute",right:"-9px",top:"-9px",height:"24px",width:"24px",transition:"transform 0.45s ease",borderRadius:"50%"},"&:after":{content:'""',width:"8px",height:"8px",borderRadius:"50%",margin:"-4px 0 0 -4px",position:"absolute",top:"50%",left:"50%",transition:"all 0.35s ease",boxShadow:e=>"0 -23px 0 "+(0,o.U2)(e,"colors.toggleIcon")+", 0 23px 0 "+(0,o.U2)(e,"colors.toggleIcon")+", 23px 0 0 "+(0,o.U2)(e,"colors.toggleIcon")+", -23px 0 0 "+(0,o.U2)(e,"colors.toggleIcon")+", 15px 15px 0 "+(0,o.U2)(e,"colors.toggleIcon")+", -15px 15px 0 "+(0,o.U2)(e,"colors.toggleIcon")+", 15px -15px 0 "+(0,o.U2)(e,"colors.toggleIcon")+", -15px -15px 0 "+(0,o.U2)(e,"colors.toggleIcon")}},g={opacity:.65,position:"relative",borderRadius:"4px",width:"40px",height:"25px",display:"flex",alignItems:"center",justifyContent:"center",transition:"opacity 0.3s ease",border:"none",outline:"none",background:"none",cursor:"pointer",padding:0,appearance:"none","&:hover, &:focus":{opacity:1}},d=()=>(0,r.tZ)("button",{type:"button",sx:g},(0,r.tZ)("div",{sx:Object.assign({},m,{transform:"scale(0.55)","&:before":Object.assign({},m["&:before"],{opacity:0}),"&:after":Object.assign({},m["&:after"],{transform:"scale(0)"})})})),u=e=>{let{children:t,fallback:l}=e;const[a,o]=n.useState(!1);return n.useEffect((()=>{o(!0)}),[]),a?(0,r.tZ)(n.Fragment,null,t):l?(0,r.tZ)(n.Fragment,null,l):null};var p=()=>{const[e,t]=(0,s.If)(),l="dark"===e;return(0,r.tZ)(u,{fallback:(0,r.tZ)(d,null)},(0,r.tZ)("button",{onClick:()=>{const e=l?"light":"dark";t(e),document.documentElement.classList.value="theme-ui-"+e},type:"button","aria-label":l?"Activate Light Mode":"Activate Dark Mode",title:l?"Activate Light Mode":"Activate Dark Mode",sx:g},(0,r.tZ)("div",{sx:Object.assign({},m,{border:e=>l?"4px solid "+(0,o.U2)(e,"colors.toggleIcon"):"none",backgroundColor:l?"toggleIcon":"transparent",transform:l?"scale(0.55)":"scale(1)",overflow:l?"visible":"hidden",boxShadow:e=>l?"none":"inset 8px -8px 0px 0px "+(0,o.U2)(e,"colors.toggleIcon"),"&:before":Object.assign({},m["&:before"],{border:e=>l?"2px solid "+(0,o.U2)(e,"colors.toggleIcon"):"none",transform:l?"translate(14px, -14px)":"translate(0, 0)",opacity:l?0:1}),"&:after":Object.assign({},m["&:after"],{transform:l?"scale(1)":"scale(0)"})})})))},f=l(8145),h=l(5950);var b=e=>{let{nav:t}=e;const{basePath:l}=(0,i.Z)();return(0,r.tZ)(n.Fragment,null,t&&t.length>0&&(0,r.tZ)("nav",{sx:{"a:not(:last-of-type)":{mr:3},fontSize:["1em","1.25em","1.25em"],".active":{color:"heading"}}},t.map((e=>(0,r.tZ)(f.Link,{activeClassName:"active",key:e.slug,sx:e=>{var t;return Object.assign({},null===(t=e.styles)||void 0===t?void 0:t.a)},to:(0,h.Z)("/"+l+"/"+e.slug)},e.title)))))},E=l(193);var x=()=>{const{siteTitle:e}=(0,E.Z)(),{basePath:t}=(0,i.Z)();return(0,r.tZ)(f.Link,{to:(0,h.Z)("/"+t),"aria-label":e+" - Back to home",sx:{color:"heading",textDecoration:"none"}},(0,r.tZ)("div",{sx:{my:0,fontWeight:"semibold",fontSize:["1.5em","1.875em"]}},e))};var v=()=>{const{externalLinks:e}=(0,i.Z)();return(0,r.tZ)(n.Fragment,null,e&&e.length>0&&(0,r.tZ)("div",{sx:{"a:not(:first-of-type)":{ml:3},fontSize:["1em","1.25em"]}},e.map((e=>(0,r.tZ)(c.rU,{key:e.url,href:e.url},e.name)))))};var y=()=>{const{navigation:e}=(0,i.Z)();return(0,r.tZ)("header",{sx:{mb:[3,5]}},(0,r.tZ)(c.kC,{sx:{alignItems:"center",justifyContent:"space-between"}},(0,r.tZ)(x,null),(0,r.tZ)(p,null)),(0,r.tZ)("div",{sx:{boxSizing:"border-box",display:"flex",variant:"dividers.bottom",alignItems:"center",justifyContent:"space-between",mt:3,color:"secondary",a:{color:"secondary",":hover":{color:"heading"}},flexFlow:"wrap"}},(0,r.tZ)(b,{nav:e}),(0,r.tZ)(v,null)))};var k=()=>{const{siteTitle:e}=(0,E.Z)();return(0,r.tZ)("footer",{sx:{boxSizing:"border-box",display:"flex",justifyContent:"space-between",mt:[6],color:"secondary",a:{variant:"links.secondary"},flexDirection:["column","column","row"],variant:"dividers.top"}},(0,r.tZ)("div",null,"© ",(new Date).getFullYear()," based on ",e,". All rights reserved."),(0,r.tZ)("div",null,(0,r.tZ)(c.rU,{"aria-label":"Link to the theme's GitHub repository",href:"https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-minimal-blog"},"Theme")," ","based on"," ",(0,r.tZ)(c.rU,{"aria-label":"Link to the theme author's website",href:"https://www.lekoarts.de?utm_source=minimal-blog&utm_medium=Theme"},"LekoArts")))};var Z={".prism-code":{fontSize:"1em",webkitOverflowScrolling:"touch",backgroundColor:"transparent",minWidth:"100%",mb:0,mt:0,overflow:"auto",'&[data-linenumber="false"]':{".token-line":{pl:3}}},".gatsby-highlight[data-language='none'], .gatsby-highlight[data-language='']":{".code-content":{pt:"1rem"}},".code-content":{padding:"2rem 1rem 1rem 1rem",color:"plain-color",backgroundColor:"plain-backgroundColor"},".token":{display:"inline-block"},"p > code, li > code":{bg:"muted",color:"heading",px:2,py:1,borderRadius:"4px",fontSize:"0.95em"},".gatsby-highlight":{fontSize:["1.25em","1.25em"],position:"relative",webkitOverflowScrolling:"touch",borderRadius:"4px",overflow:"hidden",mx:[0,0,0,-3],".token-line":{mx:-3,minWidth:"100%"},"pre code":{float:"left",minWidth:"100%"},'pre[class*="language-"]:before':{bg:"white",borderRadius:"0 0 4px 4px",color:"black",fontSize:"12px",letterSpacing:"0.035rem",padding:"0.1rem 0.5rem",position:"absolute",left:"1rem",textAlign:"right",textTransform:"uppercase",fontFamily:"body",fontWeight:600},'pre[class~="language-golang"]:before, pre[class~="language-go"]:before':{content:'"go"',background:"#79d4fd",color:"black"},'pre[class~="language-javascript"]:before, pre[class~="language-js"]:before':{content:'"js"',background:"#f7df1e",color:"black"},'pre[class~="language-jsx"]:before':{content:'"jsx"',background:"#61dafb",color:"black"},'pre[class~="language-ts"]:before':{content:'"ts"',background:"#61dafb",color:"black"},'pre[class~="language-tsx"]:before':{content:'"tsx"',background:"#61dafb",color:"black"},'pre[class~="language-html"]:before':{content:'"html"',background:"#005a9c",color:"white"},'pre[class~="language-xml"]:before':{content:'"xml"',background:"#005a9c",color:"white"},'pre[class~="language-svg"]:before':{content:'"svg"',background:"#005a9c",color:"white"},'pre[class~="language-graphql"]:before':{content:'"GraphQL"',background:"#E10098"},'pre[class~="language-css"]:before':{content:'"css"',background:"#ff9800",color:"black"},'pre[class~="language-mdx"]:before':{content:'"mdx"',background:"#f9ac00",color:"black"},'pre[class~="language-php"]:before':{content:'"php"',background:"#777bb3",color:"black"},'pre[class~="language-py"]:before, pre[class~="language-python"]:before':{content:'"py"',background:"#306998",color:"white"},'pre[class~="language-text"]:before':{content:'"text"'},"pre[class~='language-shell']:before":{content:"'shell'"},"pre[class~='language-sh']:before":{content:"'sh'"},"pre[class~='language-bash']:before":{content:"'bash'"},"pre[class~='language-yaml']:before":{content:"'yaml'",background:"#ffa8df"},"pre[class~='language-yml']:before":{content:"'yml'",background:"#ffa8df"},"pre[class~='language-markdown']:before":{content:"'md'"},"pre[class~='language-json']:before, pre[class~='language-json5']:before":{content:"'json'",background:"linen"},"pre[class~='language-diff']:before":{content:"'diff'",background:"#e6ffed"}},'.gatsby-highlight > code[class*="language-"], .gatsby-highlight > pre[class=*="language-"]':{wordSpacing:"normal",wordBreak:"normal",overflowWrap:"normal",lineHeight:1.5,tabSize:4,hyphens:"none"},".gatsby-highlight pre::-webkit-scrollbar":{width:2,height:2},".gatsby-highlight pre::-webkit-scrollbar-thumb":{backgroundColor:"primary"},".gatsby-highlight pre::-webkit-scrollbar-track":{background:"muted"},".line-number-style":{display:"inline-block",width:"3em",userSelect:"none",opacity:.3,textAlign:"center",position:"relative"},".code-title":{backgroundColor:"muted",color:"text",fontSize:"1em",px:3,py:2,fontFamily:"body"},".token-line":{pr:3},".highlight-line":{borderLeft:"4px solid rgb(2, 155, 206)",".line-number-style":{width:"calc(3em - 4px)",opacity:.5,left:"-2px"}},".footnotes":{borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:"divide",pt:2,mt:5,overflow:"auto",".sr-only":l(5082).j},".react-live-wrapper":{position:"relative"}},w=l(7462),S=l(3366);const j=["children"],C={border:0,clip:"react(0 0 0 0)",height:"1px",width:"1px",margin:"-1px",padding:0,overflow:"hidden",position:"absolute","&:focus":{padding:3,position:"fixed",top:"15px",left:"15px",backgroundColor:"heading",color:"background",zIndex:1,width:"auto",height:"auto",clip:"auto",textDecoration:"none"}};var z=e=>{let{children:t}=e,l=(0,S.Z)(e,j);return(0,r.tZ)("a",(0,w.Z)({},l,{sx:C,href:"#skip-nav","data-skip-link":"true"}),t)};var I=e=>{let{children:t,className:l=""}=e;return(0,r.tZ)(n.Fragment,null,(0,r.tZ)(a.xB,{styles:e=>({"*":{boxSizing:"inherit"},"[hidden]":{display:"none"},"::selection":{backgroundColor:(0,o.U2)(e,"colors.text"),color:(0,o.U2)(e,"colors.background")}})}),(0,r.tZ)(z,null,"Skip to content"),(0,r.tZ)(c.W2,null,(0,r.tZ)(y,null),(0,r.tZ)(c.xu,{id:"skip-nav",as:"main",variant:"layout.main",sx:Object.assign({},Z),className:l},t),(0,r.tZ)(k,null)))}},505:function(e,t,l){l.d(t,{F:function(){return d},Z:function(){return g}});var n=l(7294),a=l(7103),r=l(795),o=l(3105),c=l(5975),i=l(941);var s=e=>{let{post:t}=e;return null};const m=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var g=e=>{let{data:{post:t},children:l}=e;return(0,a.tZ)(o.Z,null,(0,a.tZ)(r.X6,{as:"h1",variant:"styles.h1"},t.title),(0,a.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:["1em","1.25em"]}},(0,a.tZ)("time",null,t.date),t.tags&&(0,a.tZ)(n.Fragment,null," — ",(0,a.tZ)(c.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,a.tZ)("span",null,t.timeToRead," min read")),(0,a.tZ)("section",{className:"post",sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:m.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},l),(0,a.tZ)(s,{post:t}))};const d=e=>{var t,l,n;let{data:{post:r}}=e;return(0,a.tZ)(i.Z,{title:r.title,description:r.description?r.description:r.excerpt,image:r.banner?null===(t=r.banner)||void 0===t||null===(l=t.childImageSharp)||void 0===l||null===(n=l.resize)||void 0===n?void 0:n.src:void 0,pathname:r.slug,canonicalUrl:r.canonicalUrl})}},941:function(e,t,l){var n=l(7294),a=l(8145),r=l(193),o=l(917);t.Z=e=>{let{title:t="",description:l="",pathname:c="",image:i="",children:s=null,canonicalUrl:m=""}=e;const g=(0,r.Z)(),{siteTitle:d,siteTitleAlt:u,siteUrl:p,siteDescription:f,siteImage:h,author:b,siteLanguage:E}=g,x={title:t?t+" | "+d:u,description:l||f,url:""+p+(c||""),image:""+p+(i||h)};return(0,o.tZ)(n.Fragment,null,(0,o.tZ)("html",{lang:E}),(0,o.tZ)("title",null,x.title),(0,o.tZ)("meta",{name:"description",content:x.description}),(0,o.tZ)("meta",{name:"image",content:x.image}),(0,o.tZ)("meta",{property:"og:title",content:x.title}),(0,o.tZ)("meta",{property:"og:url",content:x.url}),(0,o.tZ)("meta",{property:"og:description",content:x.description}),(0,o.tZ)("meta",{property:"og:image",content:x.image}),(0,o.tZ)("meta",{property:"og:type",content:"website"}),(0,o.tZ)("meta",{property:"og:image:alt",content:x.description}),(0,o.tZ)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.tZ)("meta",{name:"twitter:title",content:x.title}),(0,o.tZ)("meta",{name:"twitter:url",content:x.url}),(0,o.tZ)("meta",{name:"twitter:description",content:x.description}),(0,o.tZ)("meta",{name:"twitter:image",content:x.image}),(0,o.tZ)("meta",{name:"twitter:image:alt",content:x.description}),(0,o.tZ)("meta",{name:"twitter:creator",content:b}),(0,o.tZ)("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),(0,o.tZ)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),(0,o.tZ)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),(0,o.tZ)("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),m?(0,o.tZ)("link",{rel:"canonical",href:m}):null,s)}},193:function(e,t,l){var n=l(8145);t.Z=()=>(0,n.useStaticQuery)("2421966660").site.siteMetadata},5950:function(e,t){t.Z=function(e){return e.replace(/\/\/+/g,"/")}}}]);
//# sourceMappingURL=component---src-templates-post-query-tsx-content-file-path-docs-posts-git-operators-index-mdx-2f3eb9be1f6a6c5481df.js.map