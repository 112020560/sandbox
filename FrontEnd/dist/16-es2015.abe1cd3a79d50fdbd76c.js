(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"6dU7":function(a,e,i){"use strict";i.r(e),i.d(e,"DashboardModule",function(){return y});var b=i("s7LF"),t=i("hrfs"),r=i("FE24"),s=i("8Y7J");const o={provide:b.i,useExisting:Object(s.U)(()=>n),multi:!0};let n=(()=>{class a{constructor(){this.btnCheckboxTrue=!0,this.btnCheckboxFalse=!1,this.state=!1,this.onChange=Function.prototype,this.onTouched=Function.prototype}onClick(){this.isDisabled||(this.toggle(!this.state),this.onChange(this.value))}ngOnInit(){this.toggle(this.trueValue===this.value)}get trueValue(){return void 0===this.btnCheckboxTrue||this.btnCheckboxTrue}get falseValue(){return void 0!==this.btnCheckboxFalse&&this.btnCheckboxFalse}toggle(a){this.state=a,this.value=this.state?this.trueValue:this.falseValue}writeValue(a){this.state=this.trueValue===a,this.value=a?this.trueValue:this.falseValue}setDisabledState(a){this.isDisabled=a}registerOnChange(a){this.onChange=a}registerOnTouched(a){this.onTouched=a}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275dir=s.Jb({type:a,selectors:[["","btnCheckbox",""]],hostVars:3,hostBindings:function(a,e){1&a&&s.bc("click",function(){return e.onClick()}),2&a&&(s.Db("aria-pressed",e.state),s.Gb("active",e.state))},inputs:{btnCheckboxTrue:"btnCheckboxTrue",btnCheckboxFalse:"btnCheckboxFalse"},features:[s.Bb([o])]}),a})();const d={provide:b.i,useExisting:Object(s.U)(()=>l),multi:!0};let l=(()=>{class a{constructor(a,e,i,b){this.el=a,this.cdr=e,this.renderer=i,this.group=b,this.onChange=Function.prototype,this.onTouched=Function.prototype,this.role="radio",this._hasFocus=!1}get value(){return this.group?this.group.value:this._value}set value(a){this.group?this.group.value=a:this._value=a}get disabled(){return this._disabled}set disabled(a){this.setDisabledState(a)}get controlOrGroupDisabled(){return!!(this.disabled||this.group&&this.group.disabled)||void 0}get hasDisabledClass(){return this.controlOrGroupDisabled&&!this.isActive}get isActive(){return this.btnRadio===this.value}get tabindex(){return this.controlOrGroupDisabled?void 0:this.isActive||null==this.group?0:-1}get hasFocus(){return this._hasFocus}toggleIfAllowed(){this.canToggle()&&(this.value=this.uncheckable&&this.btnRadio===this.value?void 0:this.btnRadio,this._onChange(this.value))}onSpacePressed(a){this.toggleIfAllowed(),a.preventDefault()}focus(){this.el.nativeElement.focus()}onFocus(){this._hasFocus=!0}onBlur(){this._hasFocus=!1,this.onTouched()}canToggle(){return!this.controlOrGroupDisabled&&(this.uncheckable||this.btnRadio!==this.value)}ngOnInit(){this.uncheckable=void 0!==this.uncheckable}_onChange(a){this.group?this.group.value=a:(this.onTouched(),this.onChange(a))}writeValue(a){this.value=a,this.cdr.markForCheck()}registerOnChange(a){this.onChange=a}registerOnTouched(a){this.onTouched=a}setDisabledState(a){this._disabled=a,a?this.renderer.setAttribute(this.el.nativeElement,"disabled","disabled"):this.renderer.removeAttribute(this.el.nativeElement,"disabled")}}return a.\u0275fac=function(e){return new(e||a)(s.Ob(s.l),s.Ob(s.h),s.Ob(s.F),s.Ob(Object(s.U)(()=>u),8))},a.\u0275dir=s.Jb({type:a,selectors:[["","btnRadio",""]],hostVars:8,hostBindings:function(a,e){1&a&&s.bc("click",function(){return e.toggleIfAllowed()})("keydown.space",function(a){return e.onSpacePressed(a)})("focus",function(){return e.onFocus()})("blur",function(){return e.onBlur()}),2&a&&(s.Db("role",e.role)("aria-disabled",e.controlOrGroupDisabled)("aria-checked",e.isActive)("tabindex",e.tabindex),s.Gb("disabled",e.hasDisabledClass)("active",e.isActive))},inputs:{value:"value",disabled:"disabled",uncheckable:"uncheckable",btnRadio:"btnRadio"},features:[s.Bb([d])]}),a})();const c={provide:b.i,useExisting:Object(s.U)(()=>u),multi:!0};let u=(()=>{class a{constructor(a){this.cdr=a,this.onChange=Function.prototype,this.onTouched=Function.prototype,this.role="radiogroup"}get value(){return this._value}set value(a){this._value=a,this.onChange(a)}get tabindex(){return this._disabled?null:0}writeValue(a){this._value=a,this.cdr.markForCheck()}registerOnChange(a){this.onChange=a}registerOnTouched(a){this.onTouched=a}setDisabledState(a){this.radioButtons&&(this._disabled=a,this.radioButtons.forEach(e=>{e.setDisabledState(a)}),this.cdr.markForCheck())}onFocus(){if(this._disabled)return;const a=this.getActiveOrFocusedRadio();if(a)a.focus();else{const a=this.radioButtons.find(a=>!a.disabled);a&&a.focus()}}onBlur(){this.onTouched&&this.onTouched()}selectNext(a){this.selectInDirection("next"),a.preventDefault()}selectPrevious(a){this.selectInDirection("previous"),a.preventDefault()}get disabled(){return this._disabled}selectInDirection(a){if(this._disabled)return;function e(e,i){let b=(e+("next"===a?1:-1))%i.length;return b<0&&(b=i.length-1),b}const i=this.getActiveOrFocusedRadio();if(i){const a=this.radioButtons.toArray(),b=a.indexOf(i);for(let i=e(b,a);i!==b;i=e(i,a))if(a[i].canToggle()){a[i].toggleIfAllowed(),a[i].focus();break}}}getActiveOrFocusedRadio(){return this.radioButtons.find(a=>a.isActive)||this.radioButtons.find(a=>a.hasFocus)}}return a.\u0275fac=function(e){return new(e||a)(s.Ob(s.h))},a.\u0275dir=s.Jb({type:a,selectors:[["","btnRadioGroup",""]],contentQueries:function(a,e,i){if(1&a&&s.Hb(i,l,0),2&a){let a;s.vc(a=s.cc())&&(e.radioButtons=a)}},hostVars:2,hostBindings:function(a,e){1&a&&s.bc("focus",function(){return e.onFocus()})("blur",function(){return e.onBlur()})("keydown.ArrowRight",function(a){return e.selectNext(a)})("keydown.ArrowDown",function(a){return e.selectNext(a)})("keydown.ArrowLeft",function(a){return e.selectPrevious(a)})("keydown.ArrowUp",function(a){return e.selectPrevious(a)}),2&a&&s.Db("role",e.role)("tabindex",e.tabindex)},features:[s.Bb([c])]}),a})(),h=(()=>{class a{static forRoot(){return{ngModule:a,providers:[]}}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=s.Mb({type:a}),a.\u0275inj=s.Lb({}),a})();var v=i("iInd"),g=i("NuRj"),T=i("H++W");function U(a,e){1&a&&(s.Ub(0,"div",134),s.Ub(1,"a",135),s.Hc(2,"Action"),s.Tb(),s.Ub(3,"a",135),s.Hc(4,"Another action"),s.Tb(),s.Ub(5,"a",135),s.Hc(6,"Something else here"),s.Tb(),s.Ub(7,"a",135),s.Hc(8,"Something else here"),s.Tb(),s.Tb())}function p(a,e){1&a&&(s.Ub(0,"div",134),s.Ub(1,"a",135),s.Hc(2,"Action"),s.Tb(),s.Ub(3,"a",135),s.Hc(4,"Another action"),s.Tb(),s.Ub(5,"a",135),s.Hc(6,"Something else here"),s.Tb(),s.Tb())}function m(a,e){1&a&&(s.Ub(0,"div",134),s.Ub(1,"a",135),s.Hc(2,"Action"),s.Tb(),s.Ub(3,"a",135),s.Hc(4,"Another action"),s.Tb(),s.Ub(5,"a",135),s.Hc(6,"Something else here"),s.Tb(),s.Tb())}const C=[{path:"",component:(()=>{class a{constructor(){this.radioModel="Month",this.lineChart1Data=[{data:[65,59,84,84,51,55,40],label:"Series A"}],this.lineChart1Labels=["January","February","March","April","May","June","July"],this.lineChart1Options={tooltips:{enabled:!1,custom:T.CustomTooltips},maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:35,max:89}}]},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}},legend:{display:!1}},this.lineChart1Colours=[{backgroundColor:Object(g.getStyle)("--primary"),borderColor:"rgba(255,255,255,.55)"}],this.lineChart1Legend=!1,this.lineChart1Type="line",this.lineChart2Data=[{data:[1,18,9,17,34,22,11],label:"Series A"}],this.lineChart2Labels=["January","February","March","April","May","June","July"],this.lineChart2Options={tooltips:{enabled:!1,custom:T.CustomTooltips},maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:-4,max:39}}]},elements:{line:{tension:1e-5,borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}},legend:{display:!1}},this.lineChart2Colours=[{backgroundColor:Object(g.getStyle)("--info"),borderColor:"rgba(255,255,255,.55)"}],this.lineChart2Legend=!1,this.lineChart2Type="line",this.lineChart3Data=[{data:[78,81,80,45,34,12,40],label:"Series A"}],this.lineChart3Labels=["January","February","March","April","May","June","July"],this.lineChart3Options={tooltips:{enabled:!1,custom:T.CustomTooltips},maintainAspectRatio:!1,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}},legend:{display:!1}},this.lineChart3Colours=[{backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)"}],this.lineChart3Legend=!1,this.lineChart3Type="line",this.barChart1Data=[{data:[78,81,80,45,34,12,40,78,81,80,45,34,12,40,12,40],label:"Series A",barPercentage:.6}],this.barChart1Labels=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"],this.barChart1Options={tooltips:{enabled:!1,custom:T.CustomTooltips},maintainAspectRatio:!1,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},legend:{display:!1}},this.barChart1Colours=[{backgroundColor:"rgba(255,255,255,.3)",borderWidth:0}],this.barChart1Legend=!1,this.barChart1Type="bar",this.mainChartElements=27,this.mainChartData1=[],this.mainChartData2=[],this.mainChartData3=[],this.mainChartData=[{data:this.mainChartData1,label:"Current"},{data:this.mainChartData2,label:"Previous"},{data:this.mainChartData3,label:"BEP"}],this.mainChartLabels=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Thursday","Wednesday","Thursday","Friday","Saturday","Sunday"],this.mainChartOptions={tooltips:{enabled:!1,custom:T.CustomTooltips,intersect:!0,mode:"index",position:"nearest",callbacks:{labelColor:function(a,e){return{backgroundColor:e.data.datasets[a.datasetIndex].borderColor}}}},responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{drawOnChartArea:!1},ticks:{callback:function(a){return a.charAt(0)}}}],yAxes:[{ticks:{beginAtZero:!0,maxTicksLimit:5,stepSize:Math.ceil(50),max:250}}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},legend:{display:!1}},this.mainChartColours=[{backgroundColor:Object(g.hexToRgba)(Object(g.getStyle)("--info"),10),borderColor:Object(g.getStyle)("--info"),pointHoverBackgroundColor:"#fff"},{backgroundColor:"transparent",borderColor:Object(g.getStyle)("--success"),pointHoverBackgroundColor:"#fff"},{backgroundColor:"transparent",borderColor:Object(g.getStyle)("--danger"),pointHoverBackgroundColor:"#fff",borderWidth:1,borderDash:[8,5]}],this.mainChartLegend=!1,this.mainChartType="line",this.brandBoxChartData1=[{data:[65,59,84,84,51,55,40],label:"Facebook"}],this.brandBoxChartData2=[{data:[1,13,9,17,34,41,38],label:"Twitter"}],this.brandBoxChartData3=[{data:[78,81,80,45,34,12,40],label:"LinkedIn"}],this.brandBoxChartData4=[{data:[35,23,56,22,97,23,64],label:"Google+"}],this.brandBoxChartLabels=["January","February","March","April","May","June","July"],this.brandBoxChartOptions={tooltips:{enabled:!1,custom:T.CustomTooltips},responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},legend:{display:!1}},this.brandBoxChartColours=[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff"}],this.brandBoxChartLegend=!1,this.brandBoxChartType="line"}random(a,e){return Math.floor(Math.random()*(e-a+1)+a)}ngOnInit(){for(let a=0;a<=this.mainChartElements;a++)this.mainChartData1.push(this.random(50,200)),this.mainChartData2.push(this.random(80,100)),this.mainChartData3.push(65)}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=s.Ib({type:a,selectors:[["ng-component"]],decls:553,vars:57,consts:[[1,"animated","fadeIn"],[1,"row"],[1,"col-sm-6","col-lg-3"],[1,"card","text-white","bg-info"],[1,"card-body","pb-0"],["type","button",1,"btn","btn-transparent","p-0","float-right"],[1,"icon-location-pin"],[1,"text-value"],[1,"chart-wrapper","mt-3","mx-3",2,"height","70px"],["baseChart","",1,"chart",3,"datasets","labels","options","colors","legend","chartType"],[1,"card","text-white","bg-primary"],["dropdown","",1,"btn-group","float-right"],["type","button","dropdownToggle","",1,"btn","btn-transparent","dropdown-toggle","p-0"],[1,"icon-settings"],["class","dropdown-menu dropdown-menu-right",4,"dropdownMenu"],[1,"card","text-white","bg-warning"],[1,"chart-wrapper","mt-3",2,"height","70px"],[1,"card","text-white","bg-danger"],[1,"card"],[1,"card-body"],[1,"col-sm-5"],[1,"card-title","mb-0"],[1,"small","text-muted"],[1,"col-sm-7","d-none","d-md-block"],["type","button",1,"btn","btn-primary","float-right"],[1,"icon-cloud-download"],["data-toggle","buttons",1,"btn-group","btn-group-toggle","float-right","mr-3"],["btnRadio","Day","id","option1",1,"btn","btn-outline-secondary",3,"ngModel","ngModelChange"],["btnRadio","Month","id","option2",1,"btn","btn-outline-secondary",3,"ngModel","ngModelChange"],["btnRadio","Year","id","option3",1,"btn","btn-outline-secondary",3,"ngModel","ngModelChange"],[1,"chart-wrapper",2,"height","300px","margin-top","40px"],[1,"card-footer"],[1,"row","text-center"],[1,"col-sm-12","col-md","mb-sm-2","mb-0"],[1,"text-muted"],[1,"progress","progress-xs","mt-2"],["role","progressbar","aria-valuenow","40","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-success",2,"width","40%"],["role","progressbar","aria-valuenow","20","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-info",2,"width","20%"],["role","progressbar","aria-valuenow","60","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-warning",2,"width","60%"],["role","progressbar","aria-valuenow","80","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-danger",2,"width","80%"],["role","progressbar","aria-valuenow","40","aria-valuemin","0","aria-valuemax","100",1,"progress-bar",2,"width","40%"],[1,"brand-card"],[1,"brand-card-header","bg-facebook"],[1,"fa","fa-facebook"],[1,"chart-wrapper"],[1,"brand-card-body"],[1,"text-uppercase","text-muted","small"],[1,"brand-card-header","bg-twitter"],[1,"fa","fa-twitter"],[1,"brand-card-header","bg-linkedin"],[1,"fa","fa-linkedin"],[1,"brand-card-header","bg-google-plus"],[1,"fa","fa-google-plus"],[1,"col-md-12"],[1,"card-header"],[1,"col-sm-6"],[1,"callout","callout-info"],[1,"h4"],[1,"callout","callout-danger"],[1,"mt-0"],[1,"progress-group","mb-4"],[1,"progress-group-prepend"],[1,"progress-group-text"],[1,"progress-group-bars"],[1,"progress","progress-xs"],["role","progressbar","aria-valuenow","34","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-info",2,"width","34%"],["role","progressbar","aria-valuenow","78","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-danger",2,"width","78%"],["role","progressbar","aria-valuenow","56","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-info",2,"width","56%"],["role","progressbar","aria-valuenow","94","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-danger",2,"width","94%"],["role","progressbar","aria-valuenow","12","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-info",2,"width","12%"],["role","progressbar","aria-valuenow","67","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-danger",2,"width","67%"],["role","progressbar","aria-valuenow","43","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-info",2,"width","43%"],["role","progressbar","aria-valuenow","91","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-danger",2,"width","91%"],["role","progressbar","aria-valuenow","22","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-info",2,"width","22%"],["role","progressbar","aria-valuenow","73","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-danger",2,"width","73%"],["role","progressbar","aria-valuenow","53","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-info",2,"width","53%"],["role","progressbar","aria-valuenow","82","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-danger",2,"width","82%"],["role","progressbar","aria-valuenow","9","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-info",2,"width","9%"],["role","progressbar","aria-valuenow","69","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-danger",2,"width","69%"],[1,"callout","callout-warning"],[1,"callout","callout-success"],[1,"progress-group"],[1,"progress-group-header"],[1,"icon-user","progress-group-icon"],[1,"ml-auto","font-weight-bold"],["role","progressbar","aria-valuenow","43","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-warning",2,"width","43%"],[1,"progress-group","mb-5"],[1,"icon-user-female","progress-group-icon"],[1,"progress-group-header","align-items-end"],[1,"icon-globe","progress-group-icon"],[1,"ml-auto","font-weight-bold","mr-2"],[1,"text-muted","small"],["role","progressbar","aria-valuenow","56","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-success",2,"width","56%"],[1,"icon-social-facebook","progress-group-icon"],["role","progressbar","aria-valuenow","15","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-success",2,"width","15%"],[1,"icon-social-twitter","progress-group-icon"],["role","progressbar","aria-valuenow","11","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-success",2,"width","11%"],[1,"icon-social-linkedin","progress-group-icon"],["role","progressbar","aria-valuenow","8","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-success",2,"width","8%"],[1,"table","table-responsive-sm","table-hover","table-outline","mb-0"],[1,"thead-light"],[1,"text-center"],[1,"icon-people"],[1,"avatar"],["src","assets/img/avatars/1.jpg","alt","admin@bootstrapmaster.com",1,"img-avatar"],[1,"avatar-status","badge-success"],["title","us","id","us",1,"flag-icon","flag-icon-us","h4","mb-0"],[1,"clearfix"],[1,"float-left"],[1,"float-right"],["role","progressbar","aria-valuenow","50","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-success",2,"width","50%"],[1,"fa","fa-cc-mastercard",2,"font-size","24px"],["src","assets/img/avatars/2.jpg","alt","admin@bootstrapmaster.com",1,"img-avatar"],[1,"avatar-status","badge-danger"],["title","br","id","br",1,"flag-icon","flag-icon-br","h4","mb-0"],["role","progressbar","aria-valuenow","10","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-info",2,"width","10%"],[1,"fa","fa-cc-visa",2,"font-size","24px"],["src","assets/img/avatars/3.jpg","alt","admin@bootstrapmaster.com",1,"img-avatar"],[1,"avatar-status","badge-warning"],["title","in","id","in",1,"flag-icon","flag-icon-in","h4","mb-0"],["role","progressbar","aria-valuenow","74","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-warning",2,"width","74%"],[1,"fa","fa-cc-stripe",2,"font-size","24px"],["src","assets/img/avatars/4.jpg","alt","admin@bootstrapmaster.com",1,"img-avatar"],[1,"avatar-status","badge-secondary"],["title","fr","id","fr",1,"flag-icon","flag-icon-fr","h4","mb-0"],["role","progressbar","aria-valuenow","98","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-danger",2,"width","98%"],[1,"fa","fa-paypal",2,"font-size","24px"],["src","assets/img/avatars/5.jpg","alt","admin@bootstrapmaster.com",1,"img-avatar"],["title","es","id","es",1,"flag-icon","flag-icon-es","h4","mb-0"],[1,"fa","fa-google-wallet",2,"font-size","24px"],["src","assets/img/avatars/6.jpg","alt","admin@bootstrapmaster.com",1,"img-avatar"],["title","pl","id","pl",1,"flag-icon","flag-icon-pl","h4","mb-0"],["role","progressbar","aria-valuenow","43","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-success",2,"width","43%"],[1,"fa","fa-cc-amex",2,"font-size","24px"],[1,"dropdown-menu","dropdown-menu-right"],["href","#",1,"dropdown-item"]],template:function(a,e){if(1&a){s.Ub(0,"div",0),s.Ub(1,"div",1),s.Ub(2,"div",2),s.Ub(3,"div",3),s.Ub(4,"div",4),s.Ub(5,"button",5),s.Pb(6,"i",6),s.Tb(),s.Ub(7,"div",7),s.Hc(8,"9.823"),s.Tb(),s.Ub(9,"div"),s.Hc(10,"Members online"),s.Tb(),s.Tb(),s.Ub(11,"div",8),s.Pb(12,"canvas",9),s.Tb(),s.Tb(),s.Tb(),s.Ub(13,"div",2),s.Ub(14,"div",10),s.Ub(15,"div",4),s.Ub(16,"div",11),s.Ub(17,"button",12),s.Pb(18,"i",13),s.Tb(),s.Fc(19,U,9,0,"div",14),s.Tb(),s.Ub(20,"div",7),s.Hc(21,"9.823"),s.Tb(),s.Ub(22,"div"),s.Hc(23,"Members online"),s.Tb(),s.Tb(),s.Ub(24,"div",8),s.Pb(25,"canvas",9),s.Tb(),s.Tb(),s.Tb(),s.Ub(26,"div",2),s.Ub(27,"div",15),s.Ub(28,"div",4),s.Ub(29,"div",11),s.Ub(30,"button",12),s.Pb(31,"i",13),s.Tb(),s.Fc(32,p,7,0,"div",14),s.Tb(),s.Ub(33,"div",7),s.Hc(34,"9.823"),s.Tb(),s.Ub(35,"div"),s.Hc(36,"Members online"),s.Tb(),s.Tb(),s.Ub(37,"div",16),s.Pb(38,"canvas",9),s.Tb(),s.Tb(),s.Tb(),s.Ub(39,"div",2),s.Ub(40,"div",17),s.Ub(41,"div",4),s.Ub(42,"div",11),s.Ub(43,"button",12),s.Pb(44,"i",13),s.Tb(),s.Fc(45,m,7,0,"div",14),s.Tb(),s.Ub(46,"div",7),s.Hc(47,"9.823"),s.Tb(),s.Ub(48,"div"),s.Hc(49,"Members online"),s.Tb(),s.Tb(),s.Ub(50,"div",8),s.Pb(51,"canvas",9),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(52,"div",18),s.Ub(53,"div",19),s.Ub(54,"div",1),s.Ub(55,"div",20),s.Ub(56,"h4",21),s.Hc(57,"Traffic"),s.Tb(),s.Ub(58,"div",22),s.Hc(59,"November 2017"),s.Tb(),s.Tb(),s.Ub(60,"div",23),s.Ub(61,"button",24),s.Pb(62,"i",25),s.Tb(),s.Ub(63,"div",26),s.Ub(64,"label",27),s.bc("ngModelChange",function(a){return e.radioModel=a}),s.Hc(65,"Day"),s.Tb(),s.Ub(66,"label",28),s.bc("ngModelChange",function(a){return e.radioModel=a}),s.Hc(67,"Month"),s.Tb(),s.Ub(68,"label",29),s.bc("ngModelChange",function(a){return e.radioModel=a}),s.Hc(69,"Year"),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(70,"div",30),s.Pb(71,"canvas",9),s.Tb(),s.Tb(),s.Ub(72,"div",31),s.Ub(73,"div",32),s.Ub(74,"div",33),s.Ub(75,"div",34),s.Hc(76,"Visits"),s.Tb(),s.Ub(77,"strong"),s.Hc(78,"29.703 Users (40%)"),s.Tb(),s.Ub(79,"div",35),s.Pb(80,"div",36),s.Tb(),s.Tb(),s.Ub(81,"div",33),s.Ub(82,"div",34),s.Hc(83,"Unique"),s.Tb(),s.Ub(84,"strong"),s.Hc(85,"24.093 Users (20%)"),s.Tb(),s.Ub(86,"div",35),s.Pb(87,"div",37),s.Tb(),s.Tb(),s.Ub(88,"div",33),s.Ub(89,"div",34),s.Hc(90,"Pageviews"),s.Tb(),s.Ub(91,"strong"),s.Hc(92,"78.706 Views (60%)"),s.Tb(),s.Ub(93,"div",35),s.Pb(94,"div",38),s.Tb(),s.Tb(),s.Ub(95,"div",33),s.Ub(96,"div",34),s.Hc(97,"New Users"),s.Tb(),s.Ub(98,"strong"),s.Hc(99,"22.123 Users (80%)"),s.Tb(),s.Ub(100,"div",35),s.Pb(101,"div",39),s.Tb(),s.Tb(),s.Ub(102,"div",33),s.Ub(103,"div",34),s.Hc(104,"Bounce Rate"),s.Tb(),s.Ub(105,"strong"),s.Hc(106,"40.15%"),s.Tb(),s.Ub(107,"div",35),s.Pb(108,"div",40),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(109,"div",1),s.Ub(110,"div",2),s.Ub(111,"div",41),s.Ub(112,"div",42),s.Pb(113,"i",43),s.Ub(114,"div",44),s.Pb(115,"canvas",9),s.Tb(),s.Tb(),s.Ub(116,"div",45),s.Ub(117,"div"),s.Ub(118,"div",7),s.Hc(119,"89k"),s.Tb(),s.Ub(120,"div",46),s.Hc(121,"friends"),s.Tb(),s.Tb(),s.Ub(122,"div"),s.Ub(123,"div",7),s.Hc(124,"459"),s.Tb(),s.Ub(125,"div",46),s.Hc(126,"feeds"),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(127,"div",2),s.Ub(128,"div",41),s.Ub(129,"div",47),s.Pb(130,"i",48),s.Ub(131,"div",44),s.Pb(132,"canvas",9),s.Tb(),s.Tb(),s.Ub(133,"div",45),s.Ub(134,"div"),s.Ub(135,"div",7),s.Hc(136,"973k"),s.Tb(),s.Ub(137,"div",46),s.Hc(138,"followers"),s.Tb(),s.Tb(),s.Ub(139,"div"),s.Ub(140,"div",7),s.Hc(141,"1.792"),s.Tb(),s.Ub(142,"div",46),s.Hc(143,"tweets"),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(144,"div",2),s.Ub(145,"div",41),s.Ub(146,"div",49),s.Pb(147,"i",50),s.Ub(148,"div",44),s.Pb(149,"canvas",9),s.Tb(),s.Tb(),s.Ub(150,"div",45),s.Ub(151,"div"),s.Ub(152,"div",7),s.Hc(153,"500+"),s.Tb(),s.Ub(154,"div",46),s.Hc(155,"contacts"),s.Tb(),s.Tb(),s.Ub(156,"div"),s.Ub(157,"div",7),s.Hc(158,"292"),s.Tb(),s.Ub(159,"div",46),s.Hc(160,"feeds"),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(161,"div",2),s.Ub(162,"div",41),s.Ub(163,"div",51),s.Pb(164,"i",52),s.Ub(165,"div",44),s.Pb(166,"canvas",9),s.Tb(),s.Tb(),s.Ub(167,"div",45),s.Ub(168,"div"),s.Ub(169,"div",7),s.Hc(170,"894"),s.Tb(),s.Ub(171,"div",46),s.Hc(172,"followers"),s.Tb(),s.Tb(),s.Ub(173,"div"),s.Ub(174,"div",7),s.Hc(175,"92"),s.Tb(),s.Ub(176,"div",46),s.Hc(177,"circles"),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(178,"div",1),s.Ub(179,"div",53),s.Ub(180,"div",18),s.Ub(181,"div",54),s.Hc(182," Traffic & Sales "),s.Tb(),s.Ub(183,"div",19),s.Ub(184,"div",1),s.Ub(185,"div",55),s.Ub(186,"div",1),s.Ub(187,"div",55),s.Ub(188,"div",56),s.Ub(189,"small",34),s.Hc(190,"New Clients"),s.Tb(),s.Pb(191,"br"),s.Ub(192,"strong",57),s.Hc(193,"9,123"),s.Tb(),s.Tb(),s.Tb(),s.Ub(194,"div",55),s.Ub(195,"div",58),s.Ub(196,"small",34),s.Hc(197,"Recuring Clients"),s.Tb(),s.Pb(198,"br"),s.Ub(199,"strong",57),s.Hc(200,"22,643"),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Pb(201,"hr",59),s.Ub(202,"div",60),s.Ub(203,"div",61),s.Ub(204,"span",62),s.Hc(205," Monday "),s.Tb(),s.Tb(),s.Ub(206,"div",63),s.Ub(207,"div",64),s.Pb(208,"div",65),s.Tb(),s.Ub(209,"div",64),s.Pb(210,"div",66),s.Tb(),s.Tb(),s.Tb(),s.Ub(211,"div",60),s.Ub(212,"div",61),s.Ub(213,"span",62),s.Hc(214," Tuesday "),s.Tb(),s.Tb(),s.Ub(215,"div",63),s.Ub(216,"div",64),s.Pb(217,"div",67),s.Tb(),s.Ub(218,"div",64),s.Pb(219,"div",68),s.Tb(),s.Tb(),s.Tb(),s.Ub(220,"div",60),s.Ub(221,"div",61),s.Ub(222,"span",62),s.Hc(223," Wednesday "),s.Tb(),s.Tb(),s.Ub(224,"div",63),s.Ub(225,"div",64),s.Pb(226,"div",69),s.Tb(),s.Ub(227,"div",64),s.Pb(228,"div",70),s.Tb(),s.Tb(),s.Tb(),s.Ub(229,"div",60),s.Ub(230,"div",61),s.Ub(231,"span",62),s.Hc(232," Thursday "),s.Tb(),s.Tb(),s.Ub(233,"div",63),s.Ub(234,"div",64),s.Pb(235,"div",71),s.Tb(),s.Ub(236,"div",64),s.Pb(237,"div",72),s.Tb(),s.Tb(),s.Tb(),s.Ub(238,"div",60),s.Ub(239,"div",61),s.Ub(240,"span",62),s.Hc(241," Friday "),s.Tb(),s.Tb(),s.Ub(242,"div",63),s.Ub(243,"div",64),s.Pb(244,"div",73),s.Tb(),s.Ub(245,"div",64),s.Pb(246,"div",74),s.Tb(),s.Tb(),s.Tb(),s.Ub(247,"div",60),s.Ub(248,"div",61),s.Ub(249,"span",62),s.Hc(250," Saturday "),s.Tb(),s.Tb(),s.Ub(251,"div",63),s.Ub(252,"div",64),s.Pb(253,"div",75),s.Tb(),s.Ub(254,"div",64),s.Pb(255,"div",76),s.Tb(),s.Tb(),s.Tb(),s.Ub(256,"div",60),s.Ub(257,"div",61),s.Ub(258,"span",62),s.Hc(259," Sunday "),s.Tb(),s.Tb(),s.Ub(260,"div",63),s.Ub(261,"div",64),s.Pb(262,"div",77),s.Tb(),s.Ub(263,"div",64),s.Pb(264,"div",78),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(265,"div",55),s.Ub(266,"div",1),s.Ub(267,"div",55),s.Ub(268,"div",79),s.Ub(269,"small",34),s.Hc(270,"Pageviews"),s.Tb(),s.Pb(271,"br"),s.Ub(272,"strong",57),s.Hc(273,"78,623"),s.Tb(),s.Tb(),s.Tb(),s.Ub(274,"div",55),s.Ub(275,"div",80),s.Ub(276,"small",34),s.Hc(277,"Organic"),s.Tb(),s.Pb(278,"br"),s.Ub(279,"strong",57),s.Hc(280,"49,123"),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Pb(281,"hr",59),s.Ub(282,"div",81),s.Ub(283,"div",82),s.Pb(284,"i",83),s.Ub(285,"div"),s.Hc(286,"Male"),s.Tb(),s.Ub(287,"div",84),s.Hc(288,"43%"),s.Tb(),s.Tb(),s.Ub(289,"div",63),s.Ub(290,"div",64),s.Pb(291,"div",85),s.Tb(),s.Tb(),s.Tb(),s.Ub(292,"div",86),s.Ub(293,"div",82),s.Pb(294,"i",87),s.Ub(295,"div"),s.Hc(296,"Female"),s.Tb(),s.Ub(297,"div",84),s.Hc(298,"37%"),s.Tb(),s.Tb(),s.Ub(299,"div",63),s.Ub(300,"div",64),s.Pb(301,"div",85),s.Tb(),s.Tb(),s.Tb(),s.Ub(302,"div",81),s.Ub(303,"div",88),s.Pb(304,"i",89),s.Ub(305,"div"),s.Hc(306,"Organic Search"),s.Tb(),s.Ub(307,"div",90),s.Hc(308,"191.235"),s.Tb(),s.Ub(309,"div",91),s.Hc(310,"(56%)"),s.Tb(),s.Tb(),s.Ub(311,"div",63),s.Ub(312,"div",64),s.Pb(313,"div",92),s.Tb(),s.Tb(),s.Tb(),s.Ub(314,"div",81),s.Ub(315,"div",88),s.Pb(316,"i",93),s.Ub(317,"div"),s.Hc(318,"Facebook"),s.Tb(),s.Ub(319,"div",90),s.Hc(320,"51.223"),s.Tb(),s.Ub(321,"div",91),s.Hc(322,"(15%)"),s.Tb(),s.Tb(),s.Ub(323,"div",63),s.Ub(324,"div",64),s.Pb(325,"div",94),s.Tb(),s.Tb(),s.Tb(),s.Ub(326,"div",81),s.Ub(327,"div",88),s.Pb(328,"i",95),s.Ub(329,"div"),s.Hc(330,"Twitter"),s.Tb(),s.Ub(331,"div",90),s.Hc(332,"37.564"),s.Tb(),s.Ub(333,"div",91),s.Hc(334,"(11%)"),s.Tb(),s.Tb(),s.Ub(335,"div",63),s.Ub(336,"div",64),s.Pb(337,"div",96),s.Tb(),s.Tb(),s.Tb(),s.Ub(338,"div",81),s.Ub(339,"div",88),s.Pb(340,"i",97),s.Ub(341,"div"),s.Hc(342,"LinkedIn"),s.Tb(),s.Ub(343,"div",90),s.Hc(344,"27.319"),s.Tb(),s.Ub(345,"div",91),s.Hc(346,"(8%)"),s.Tb(),s.Tb(),s.Ub(347,"div",63),s.Ub(348,"div",64),s.Pb(349,"div",98),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Pb(350,"br"),s.Ub(351,"table",99),s.Ub(352,"thead",100),s.Ub(353,"tr"),s.Ub(354,"th",101),s.Pb(355,"i",102),s.Tb(),s.Ub(356,"th"),s.Hc(357,"User"),s.Tb(),s.Ub(358,"th",101),s.Hc(359,"Country"),s.Tb(),s.Ub(360,"th"),s.Hc(361,"Usage"),s.Tb(),s.Ub(362,"th",101),s.Hc(363,"Payment Method"),s.Tb(),s.Ub(364,"th"),s.Hc(365,"Activity"),s.Tb(),s.Tb(),s.Tb(),s.Ub(366,"tbody"),s.Ub(367,"tr"),s.Ub(368,"td",101),s.Ub(369,"div",103),s.Pb(370,"img",104),s.Pb(371,"span",105),s.Tb(),s.Tb(),s.Ub(372,"td"),s.Ub(373,"div"),s.Hc(374,"Yiorgos Avraamu"),s.Tb(),s.Ub(375,"div",22),s.Ub(376,"span"),s.Hc(377,"New"),s.Tb(),s.Hc(378," | Registered: Jan 1, 2015 "),s.Tb(),s.Tb(),s.Ub(379,"td",101),s.Pb(380,"i",106),s.Tb(),s.Ub(381,"td"),s.Ub(382,"div",107),s.Ub(383,"div",108),s.Ub(384,"strong"),s.Hc(385,"50%"),s.Tb(),s.Tb(),s.Ub(386,"div",109),s.Ub(387,"small",34),s.Hc(388,"Jun 11, 2015 - Jul 10, 2015"),s.Tb(),s.Tb(),s.Tb(),s.Ub(389,"div",64),s.Pb(390,"div",110),s.Tb(),s.Tb(),s.Ub(391,"td",101),s.Pb(392,"i",111),s.Tb(),s.Ub(393,"td"),s.Ub(394,"div",22),s.Hc(395,"Last login"),s.Tb(),s.Ub(396,"strong"),s.Hc(397,"10 sec ago"),s.Tb(),s.Tb(),s.Tb(),s.Ub(398,"tr"),s.Ub(399,"td",101),s.Ub(400,"div",103),s.Pb(401,"img",112),s.Pb(402,"span",113),s.Tb(),s.Tb(),s.Ub(403,"td"),s.Ub(404,"div"),s.Hc(405,"Avram Tarasios"),s.Tb(),s.Ub(406,"div",22),s.Ub(407,"span"),s.Hc(408,"Recurring"),s.Tb(),s.Hc(409," | Registered: Jan 1, 2015 "),s.Tb(),s.Tb(),s.Ub(410,"td",101),s.Pb(411,"i",114),s.Tb(),s.Ub(412,"td"),s.Ub(413,"div",107),s.Ub(414,"div",108),s.Ub(415,"strong"),s.Hc(416,"10%"),s.Tb(),s.Tb(),s.Ub(417,"div",109),s.Ub(418,"small",34),s.Hc(419,"Jun 11, 2015 - Jul 10, 2015"),s.Tb(),s.Tb(),s.Tb(),s.Ub(420,"div",64),s.Pb(421,"div",115),s.Tb(),s.Tb(),s.Ub(422,"td",101),s.Pb(423,"i",116),s.Tb(),s.Ub(424,"td"),s.Ub(425,"div",22),s.Hc(426,"Last login"),s.Tb(),s.Ub(427,"strong"),s.Hc(428,"5 minutes ago"),s.Tb(),s.Tb(),s.Tb(),s.Ub(429,"tr"),s.Ub(430,"td",101),s.Ub(431,"div",103),s.Pb(432,"img",117),s.Pb(433,"span",118),s.Tb(),s.Tb(),s.Ub(434,"td"),s.Ub(435,"div"),s.Hc(436,"Quintin Ed"),s.Tb(),s.Ub(437,"div",22),s.Ub(438,"span"),s.Hc(439,"New"),s.Tb(),s.Hc(440," | Registered: Jan 1, 2015 "),s.Tb(),s.Tb(),s.Ub(441,"td",101),s.Pb(442,"i",119),s.Tb(),s.Ub(443,"td"),s.Ub(444,"div",107),s.Ub(445,"div",108),s.Ub(446,"strong"),s.Hc(447,"74%"),s.Tb(),s.Tb(),s.Ub(448,"div",109),s.Ub(449,"small",34),s.Hc(450,"Jun 11, 2015 - Jul 10, 2015"),s.Tb(),s.Tb(),s.Tb(),s.Ub(451,"div",64),s.Pb(452,"div",120),s.Tb(),s.Tb(),s.Ub(453,"td",101),s.Pb(454,"i",121),s.Tb(),s.Ub(455,"td"),s.Ub(456,"div",22),s.Hc(457,"Last login"),s.Tb(),s.Ub(458,"strong"),s.Hc(459,"1 hour ago"),s.Tb(),s.Tb(),s.Tb(),s.Ub(460,"tr"),s.Ub(461,"td",101),s.Ub(462,"div",103),s.Pb(463,"img",122),s.Pb(464,"span",123),s.Tb(),s.Tb(),s.Ub(465,"td"),s.Ub(466,"div"),s.Hc(467,"En\xe9as Kwadwo"),s.Tb(),s.Ub(468,"div",22),s.Ub(469,"span"),s.Hc(470,"New"),s.Tb(),s.Hc(471," | Registered: Jan 1, 2015 "),s.Tb(),s.Tb(),s.Ub(472,"td",101),s.Pb(473,"i",124),s.Tb(),s.Ub(474,"td"),s.Ub(475,"div",107),s.Ub(476,"div",108),s.Ub(477,"strong"),s.Hc(478,"98%"),s.Tb(),s.Tb(),s.Ub(479,"div",109),s.Ub(480,"small",34),s.Hc(481,"Jun 11, 2015 - Jul 10, 2015"),s.Tb(),s.Tb(),s.Tb(),s.Ub(482,"div",64),s.Pb(483,"div",125),s.Tb(),s.Tb(),s.Ub(484,"td",101),s.Pb(485,"i",126),s.Tb(),s.Ub(486,"td"),s.Ub(487,"div",22),s.Hc(488,"Last login"),s.Tb(),s.Ub(489,"strong"),s.Hc(490,"Last month"),s.Tb(),s.Tb(),s.Tb(),s.Ub(491,"tr"),s.Ub(492,"td",101),s.Ub(493,"div",103),s.Pb(494,"img",127),s.Pb(495,"span",105),s.Tb();s.Tb(),s.Ub(496,"td"),s.Ub(497,"div"),s.Hc(498,"Agapetus Tade\xe1\u0161"),s.Tb(),s.Ub(499,"div",22),s.Ub(500,"span"),s.Hc(501,"New"),s.Tb(),s.Hc(502," | Registered: Jan 1, 2015 "),s.Tb(),s.Tb(),s.Ub(503,"td",101),s.Pb(504,"i",128),s.Tb(),s.Ub(505,"td"),s.Ub(506,"div",107),s.Ub(507,"div",108),s.Ub(508,"strong"),s.Hc(509,"22%"),s.Tb(),s.Tb(),s.Ub(510,"div",109),s.Ub(511,"small",34),s.Hc(512,"Jun 11, 2015 - Jul 10, 2015"),s.Tb(),s.Tb(),s.Tb(),s.Ub(513,"div",64),s.Pb(514,"div",73),s.Tb(),s.Tb(),s.Ub(515,"td",101),s.Pb(516,"i",129),s.Tb(),s.Ub(517,"td"),s.Ub(518,"div",22),s.Hc(519,"Last login"),s.Tb(),s.Ub(520,"strong"),s.Hc(521,"Last week"),s.Tb(),s.Tb(),s.Tb(),s.Ub(522,"tr"),s.Ub(523,"td",101),s.Ub(524,"div",103),s.Pb(525,"img",130),s.Pb(526,"span",113),s.Tb(),s.Tb(),s.Ub(527,"td"),s.Ub(528,"div"),s.Hc(529,"Friderik D\xe1vid"),s.Tb(),s.Ub(530,"div",22),s.Ub(531,"span"),s.Hc(532,"New"),s.Tb(),s.Hc(533," | Registered: Jan 1, 2015 "),s.Tb(),s.Tb(),s.Ub(534,"td",101),s.Pb(535,"i",131),s.Tb(),s.Ub(536,"td"),s.Ub(537,"div",107),s.Ub(538,"div",108),s.Ub(539,"strong"),s.Hc(540,"43%"),s.Tb(),s.Tb(),s.Ub(541,"div",109),s.Ub(542,"small",34),s.Hc(543,"Jun 11, 2015 - Jul 10, 2015"),s.Tb(),s.Tb(),s.Tb(),s.Ub(544,"div",64),s.Pb(545,"div",132),s.Tb(),s.Tb(),s.Ub(546,"td",101),s.Pb(547,"i",133),s.Tb(),s.Ub(548,"td"),s.Ub(549,"div",22),s.Hc(550,"Last login"),s.Tb(),s.Ub(551,"strong"),s.Hc(552,"Yesterday"),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Tb()}2&a&&(s.Cb(12),s.lc("datasets",e.lineChart2Data)("labels",e.lineChart2Labels)("options",e.lineChart2Options)("colors",e.lineChart2Colours)("legend",e.lineChart2Legend)("chartType",e.lineChart2Type),s.Cb(13),s.lc("datasets",e.lineChart1Data)("labels",e.lineChart1Labels)("options",e.lineChart1Options)("colors",e.lineChart1Colours)("legend",e.lineChart1Legend)("chartType",e.lineChart1Type),s.Cb(13),s.lc("datasets",e.lineChart3Data)("labels",e.lineChart3Labels)("options",e.lineChart3Options)("colors",e.lineChart3Colours)("legend",e.lineChart3Legend)("chartType",e.lineChart3Type),s.Cb(13),s.lc("datasets",e.barChart1Data)("labels",e.barChart1Labels)("options",e.barChart1Options)("colors",e.barChart1Colours)("legend",e.barChart1Legend)("chartType",e.barChart1Type),s.Cb(13),s.lc("ngModel",e.radioModel),s.Cb(2),s.lc("ngModel",e.radioModel),s.Cb(2),s.lc("ngModel",e.radioModel),s.Cb(3),s.lc("datasets",e.mainChartData)("labels",e.mainChartLabels)("options",e.mainChartOptions)("colors",e.mainChartColours)("legend",e.mainChartLegend)("chartType",e.mainChartType),s.Cb(44),s.lc("datasets",e.brandBoxChartData1)("labels",e.brandBoxChartLabels)("options",e.brandBoxChartOptions)("colors",e.brandBoxChartColours)("legend",e.brandBoxChartLegend)("chartType",e.brandBoxChartType),s.Cb(17),s.lc("datasets",e.brandBoxChartData2)("labels",e.brandBoxChartLabels)("options",e.brandBoxChartOptions)("colors",e.brandBoxChartColours)("legend",e.brandBoxChartLegend)("chartType",e.brandBoxChartType),s.Cb(17),s.lc("datasets",e.brandBoxChartData3)("labels",e.brandBoxChartLabels)("options",e.brandBoxChartOptions)("colors",e.brandBoxChartColours)("legend",e.brandBoxChartLegend)("chartType",e.brandBoxChartType),s.Cb(17),s.lc("datasets",e.brandBoxChartData4)("labels",e.brandBoxChartLabels)("options",e.brandBoxChartOptions)("colors",e.brandBoxChartColours)("legend",e.brandBoxChartLegend)("chartType",e.brandBoxChartType))},directives:[t.a,r.a,r.d,r.b,l,b.j,b.m],encapsulation:2}),a})(),data:{title:"Dashboard"}}];let f=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=s.Mb({type:a}),a.\u0275inj=s.Lb({imports:[[v.g.forChild(C)],v.g]}),a})(),y=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=s.Mb({type:a}),a.\u0275inj=s.Lb({imports:[[b.h,f,t.b,r.c,h.forRoot()]]}),a})()}}]);