webpackJsonp([5],{"+d8b":function(t,e){},"6rkO":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Au9i"),a=i("LOkV"),n={name:"evaluation",data:function(){return{index:1,questionCount:0,hasNext:!1,subject:[],options:[{label:"几乎总是如此（或总是如此）",value:"4"},{label:"经常如此",value:"3"},{label:"偶尔如此",value:"2"},{label:"几乎从未如此（或从未如此）",value:"1"}],value:[]}},computed:{progress:function(){return Math.ceil(this.index/this.questionCount*100)}},mounted:function(){this.getSubject()},methods:{getSubject:function(){var t=this;a.a.request({method:"get",url:"c/api/query_question_list"}).then(function(e){if(0===e.code){var i=(e.data||{}).questionList||[];t.subject=i,t.questionCount=i.length,t.value=Array(i.length).fill("")}else Object(s.Toast)(e.msg)})},answerQuestion:function(){var t=this,e=[];this.value.forEach(function(t){e.push(Number(t))}),a.a.request({method:"post",url:"c/api/answer_all_question",data:{valueList:e}}).then(function(e){if(0===e.code){Object(s.Toast)({message:"提交成功",iconClass:"icon icon-success"});var i=e.data.examId;t.$router.push("/report/"+i)}else Object(s.Toast)(e.msg)})},handlePrevious:function(){this.index-1>=1&&(this.index-=1)},handleNext:function(){var t=this;this.index+1<=this.subject.length?this.value[this.index-1]?this.index+=1:Object(s.Toast)("请选择答案"):s.MessageBox.confirm("确定提交测试内容?").then(function(e){t.answerQuestion()})}}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"evaluation"},[s("div",{staticClass:"title-image"},[s("img",{staticStyle:{width:"100%"},attrs:{src:i("DZ7F"),alt:""}})]),t._v(" "),s("div",{staticClass:"wrapper"},[s("div",{staticClass:"evaluation-header"},[s("div",{staticStyle:{display:"flex"}},[s("div",{staticStyle:{flex:"1","font-size":"0.16rem",color:"#C6CBE0"}},[t._v("0")]),t._v(" "),s("div",{staticStyle:{flex:"1"}},[t.questionCount?s("div",{staticClass:"progress-detail"},[t._v(t._s(t.index)+"/"+t._s(t.questionCount))]):t._e()]),t._v(" "),s("div",{staticStyle:{flex:"1","font-size":"0.16rem","text-align":"right",color:"#C6CBE0"}},[t._v(t._s(t.questionCount))])]),t._v(" "),s("mt-progress",{staticStyle:{"border-radius":"0.06rem"},attrs:{value:t.progress,"bar-height":12}}),t._v(" "),s("div",{staticStyle:{color:"#FF0000","text-align":"right","font-size":"0.12rem"}},[t._v("请一次性完成，不要在中途退出。")])],1),t._v(" "),s("div",{staticClass:"evaluation-body"},t._l(t.subject,function(e,i){return s("div",{key:i,staticClass:"evaluation-subject"},[i+1===t.index?s("mt-radio",{attrs:{title:i+1+"."+e,align:"right",options:t.options},model:{value:t.value[i],callback:function(e){t.$set(t.value,i,e)},expression:"value[i]"}}):t._e()],1)})),t._v(" "),s("div",{staticClass:"evaluation-footer"},[s("div",{staticStyle:{display:"flex"}},[s("div",{staticStyle:{flex:"1",padding:"0 0.1rem"}},[s("mt-button",{staticStyle:{background:"#FFA366"},attrs:{type:"danger",size:"large",disabled:1===t.index},on:{click:t.handlePrevious}},[t._v("上一题")])],1),t._v(" "),s("div",{staticStyle:{flex:"1",padding:"0 0.1rem"}},[s("mt-button",{staticStyle:{background:"#5B7AFF"},attrs:{type:"primary",size:"large"},on:{click:t.handleNext}},[t._v(t._s(t.index&&t.subject.length&&t.index===t.subject.length?"提交":"下一题"))])],1)])])])])},staticRenderFns:[]};var o=i("VU/8")(n,l,!1,function(t){i("+d8b")},null,null);e.default=o.exports},DZ7F:function(t,e,i){t.exports=i.p+"static/img/image_title@2x.ace4364.png"}});