!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function t(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),Object.defineProperty(n,"prototype",{writable:!1}),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"56rb":function(e,i,o){"use strict";o.r(i),o.d(i,"TenantModule",function(){return P});var a=o("SVse"),c=o("s7LF"),r=o("iInd"),l=o("2IVB"),b=o("hmn9"),d=o("8Y7J"),s=o("YHJu"),u=o("hhfa"),p=o("c/fn"),f=o("S0UM"),g=o("ZRSf"),h=o("gtx6"),v=o("y1st"),T=o("MEzG");function C(n,e){1&n&&(d.Ub(0,"p"),d.Hc(1,"Cargando..."),d.Tb())}var m=function(){return{height:"6px"}};function U(n,e){1&n&&d.Pb(0,"p-progressBar",16),2&n&&d.Cc(d.nc(2,m))}function y(n,e){if(1&n){var t=d.Vb();d.Ub(0,"div",24),d.Pb(1,"i",25),d.Ub(2,"input",26),d.bc("input",function(n){return d.yc(t),d.ec(),d.wc(2).filterGlobal(n.target.value,"contains")}),d.Tb(),d.Tb()}}function M(n,e){if(1&n&&(d.Ub(0,"th",28),d.Hc(1),d.Tb()),2&n){var t=e.$implicit;d.Cb(1),d.Jc(" ",t.header," ")}}function I(n,e){if(1&n&&(d.Ub(0,"tr"),d.Fc(1,M,2,1,"th",27),d.Tb()),2&n){var t=e.$implicit;d.Cb(1),d.lc("ngForOf",t)}}function w(n,e){if(1&n){var t=d.Vb();d.Ub(0,"tr",29),d.Ub(1,"td",30),d.Hc(2),d.Tb(),d.Ub(3,"td",30),d.Hc(4),d.Tb(),d.Ub(5,"td",30),d.Hc(6),d.Tb(),d.Ub(7,"td",30),d.Hc(8),d.Tb(),d.Ub(9,"td",30),d.Hc(10),d.Tb(),d.Ub(11,"td",30),d.Hc(12),d.Tb(),d.Ub(13,"td",31),d.Ub(14,"button",32),d.bc("click",function(){d.yc(t);var n=e.$implicit;return d.ec(2).showEditor(n.Configuration)}),d.Tb(),d.Tb(),d.Ub(15,"td",30),d.Hc(16),d.fc(17,"date"),d.Tb(),d.Ub(18,"td",30),d.Hc(19),d.Tb(),d.Ub(20,"td",30),d.Hc(21),d.Tb(),d.Tb()}if(2&n){var i=e.$implicit;d.lc("pSelectableRow",i),d.Cb(2),d.Ic(i.id),d.Cb(2),d.Ic(i.TenantId),d.Cb(2),d.Ic(i.Name),d.Cb(2),d.Ic(i.Description),d.Cb(2),d.Ic(i.EnvironmentId),d.Cb(2),d.Ic(i.ApplicationId),d.Cb(4),d.Ic(d.hc(17,10,i.CreateAt,"dd/MM/yyyy")),d.Cb(3),d.Ic(i.ExpiredAt),d.Cb(2),d.Ic(i.AprovedBy)}}function A(n,e){if(1&n){var t=d.Vb();d.Ub(0,"div",33),d.Ub(1,"button",34),d.bc("click",function(){return d.yc(t),d.ec(2).showDialogToAdd()}),d.Tb(),d.Tb()}}function x(n,e){if(1&n){var t=d.Vb();d.Ub(0,"div",17),d.Ub(1,"p-table",18,19),d.bc("selectionChange",function(n){return d.yc(t),d.ec().selectedTenant=n})("onRowSelect",function(n){return d.yc(t),d.ec().onRowSelect(n)}),d.Fc(3,y,3,0,"ng-template",20),d.Fc(4,I,2,1,"ng-template",21),d.Fc(5,w,22,13,"ng-template",22),d.Fc(6,A,2,0,"ng-template",23),d.Tb(),d.Tb()}if(2&n){var i=d.ec();d.Cb(1),d.lc("columns",i.cols)("value",i.tenants)("paginator",!0)("rows",10)("resizableColumns",!0)("selection",i.selectedTenant)}}function k(n,e){if(1&n){var t=d.Vb();d.Ub(0,"div",35),d.Ub(1,"div",36),d.Ub(2,"label",37),d.Hc(3,"Id"),d.Tb(),d.Tb(),d.Ub(4,"div",38),d.Ub(5,"input",39),d.bc("ngModelChange",function(n){return d.yc(t),d.ec().tenant.id=n}),d.Tb(),d.Tb(),d.Ub(6,"div",36),d.Ub(7,"label",37),d.Hc(8,"TenantId"),d.Tb(),d.Tb(),d.Ub(9,"div",38),d.Ub(10,"input",40),d.bc("ngModelChange",function(n){return d.yc(t),d.ec().tenant.TenantId=n}),d.Tb(),d.Tb(),d.Ub(11,"div",36),d.Ub(12,"label",41),d.Hc(13,"Nombre"),d.Tb(),d.Tb(),d.Ub(14,"div",38),d.Ub(15,"input",42),d.bc("ngModelChange",function(n){return d.yc(t),d.ec().tenant.Name=n}),d.Tb(),d.Tb(),d.Ub(16,"div",36),d.Ub(17,"label",43),d.Hc(18,"Descripcion"),d.Tb(),d.Tb(),d.Ub(19,"div",38),d.Ub(20,"input",44),d.bc("ngModelChange",function(n){return d.yc(t),d.ec().tenant.Description=n}),d.Tb(),d.Tb(),d.Ub(21,"div",36),d.Ub(22,"label",45),d.Hc(23,"Ambiente"),d.Tb(),d.Tb(),d.Ub(24,"div",38),d.Ub(25,"p-dropdown",46),d.bc("ngModelChange",function(n){return d.yc(t),d.ec().tenant.EnvironmentId=n}),d.Tb(),d.Tb(),d.Ub(26,"div",36),d.Ub(27,"label",47),d.Hc(28,"Aplicativos"),d.Tb(),d.Tb(),d.Ub(29,"div",38),d.Ub(30,"p-multiSelect",46),d.bc("ngModelChange",function(n){return d.yc(t),d.ec().tenant.ApplicationId=n}),d.Tb(),d.Tb(),d.Ub(31,"div",36),d.Ub(32,"label",48),d.Hc(33,"Creado"),d.Tb(),d.Tb(),d.Ub(34,"div",38),d.Ub(35,"input",49),d.bc("ngModelChange",function(n){return d.yc(t),d.ec().tenant.CreateAt=n}),d.fc(36,"date"),d.Tb(),d.Tb(),d.Ub(37,"div",36),d.Ub(38,"label",50),d.Hc(39,"Expira"),d.Tb(),d.Tb(),d.Ub(40,"div",38),d.Ub(41,"input",51),d.bc("ngModelChange",function(n){return d.yc(t),d.ec().tenant.ExpiredAt=n}),d.Tb(),d.Tb(),d.Ub(42,"div",36),d.Ub(43,"label",52),d.Hc(44,"Aprobado por"),d.Tb(),d.Tb(),d.Ub(45,"div",38),d.Ub(46,"input",53),d.bc("ngModelChange",function(n){return d.yc(t),d.ec().tenant.AprovedBy=n}),d.Tb(),d.Tb(),d.Ub(47,"div",36),d.Ub(48,"label",48),d.Hc(49,"AppSetting"),d.Tb(),d.Tb(),d.Ub(50,"div",38),d.Ub(51,"button",32),d.bc("click",function(){d.yc(t);var n=d.ec();return n.showEditor(n.tenant.Configuration)}),d.Tb(),d.Tb(),d.Tb()}if(2&n){var i=d.ec();d.Cb(5),d.lc("ngModel",i.tenant.id),d.Cb(5),d.lc("ngModel",i.tenant.TenantId),d.Cb(5),d.lc("ngModel",i.tenant.Name),d.Cb(5),d.lc("ngModel",i.tenant.Description),d.Cb(5),d.lc("options",i.environments)("ngModel",i.tenant.EnvironmentId),d.Cb(5),d.lc("options",i.applications)("ngModel",i.tenant.ApplicationId),d.Cb(5),d.lc("ngModel",i.tenant.CreateAt)("ngModel",d.hc(36,12,i.tenant.CreateAt,"dd/MM/yyyy")),d.Cb(6),d.lc("ngModel",i.tenant.ExpiredAt),d.Cb(5),d.lc("ngModel",i.tenant.AprovedBy)}}var E,S,H,O=function(){return{width:"60vw",height:"70vw"}},D=function(){return{width:"700px"}},j=[{path:"",component:(E=function(){function e(t,i){var o=this;n(this,e),this.configService=t,this.router=i,this.tenants=[],this.isJsonModified=!1,this.editorOptions=new b.b,this.editorOptions.mode="code",this.editorOptions.modes=["code","text","tree","view"],this.editorOptions.onChange=function(){return o.fetchdata()}}return t(e,[{key:"fetchdata",value:function(){try{this.isJsonModified=!0,console.log("se edito"),this.retriveData=this.editor.get()}catch(n){console.log(n),this.isJsonModified=!1}}},{key:"ngOnInit",value:function(){this.displayConfig=!1,this.cols=[{field:"id",header:"Id"},{field:"TenantId",header:"TenantId"},{field:"Name",header:"Nombre"},{field:"Description",header:"Descripcion"},{field:"EnvironmentId",header:"Ambiente"},{field:"ApplicationId",header:"Aplicaciones"},{field:"Configuration",header:"AppSettings"},{field:"CreateAt",header:"Creado"},{field:"ExpiredAt",header:"Expira"},{field:"AprovedBy",header:"Aprobado por"}],this.onLoadTenants(),this.onLoadEnvironment(),this.onLoadApplications()}},{key:"onLoadTenants",value:function(){var n=this;this.configService.getTenantList().subscribe(function(e){e&&(console.log("respuesta"),n.tenants=[],n.tenants=e,console.log(n.tenants))},function(n){console.error(n)})}},{key:"onLoadEnvironment",value:function(){var n=this;this.configService.getAllEnvironments().subscribe(function(e){n.environments=e.map(function(n){var e={};return e.label=n.EnvironmetId,e.value=n.EnvironmetId,e}),console.log(n.environments)})}},{key:"onLoadApplications",value:function(){var n=this;this.configService.getApplicationList().subscribe(function(e){n.applications=e.map(function(n){var e={};return e.label=n.ApplicationId,e.value=n.ApplicationId,e}),console.log("Aplicaciones"),console.log(n.applications)})}},{key:"showDialogToAdd",value:function(){this.newtenant=!0,this.tenant={},this.tenant.CreateAt=new Date,this.displayDialog=!0}},{key:"onRowSelect",value:function(n){this.newtenant=!1,this.tenant=this.cloneProcedure(n.data),this.displayDialog=!0,this.data=this.tenant.Configuration}},{key:"cloneProcedure",value:function(n){return Object.assign({},n)}},{key:"onUpdate",value:function(){var n=this;this.newtenant?(this.isJsonModified&&(this.data=this.retriveData),this.tenant.Configuration=this.data,console.log("aplicacion a guardar"),console.log(this.tenant),this.configService.createTenant(this.tenant).subscribe(function(e){console.log(e),n.onLoadTenants()},function(n){console.error(n)})):(this.isJsonModified&&(this.data=this.retriveData),this.tenant.Configuration=this.data,this.configService.updateTenant(this.tenant.id,this.tenant).subscribe(function(e){console.log(e),n.onLoadTenants()},function(n){console.error(n)})),this.tenant=null,this.displayDialog=!1}},{key:"onDelete",value:function(){var n=this;this.configService.deleteTenant(this.selectedTenant.id).subscribe(function(e){console.log(e),n.onLoadTenants()},function(n){console.error(n)})}},{key:"showEditor",value:function(n){this.displayConfig=!0}},{key:"onChange",value:function(n){}}]),e}(),E.\u0275fac=function(n){return new(n||E)(d.Ob(l.a),d.Ob(r.c))},E.\u0275cmp=d.Ib({type:E,selectors:[["app-list"]],viewQuery:function(n,e){var t;1&n&&d.Lc(b.a,1),2&n&&d.vc(t=d.cc())&&(e.editor=t.first)},decls:18,vars:21,consts:[[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header"],[1,"fa","fa-align-justify"],[1,"card-body"],[4,"ngIf"],["mode","indeterminate",3,"style",4,"ngIf"],["class","table-responsive",4,"ngIf"],["header","Editar Config","showEffect","fade",3,"visible","focusOnShow","responsive","modal","baseZIndex","visibleChange"],[1,"ace_editor.ace-jsoneditor",3,"options","data"],["header","Mantenimiento del Tenant","showEffect","fade",3,"visible","focusOnShow","responsive","modal","visibleChange"],["class","p-grid ui-fluid",4,"ngIf"],[1,"ui-dialog-buttonpane","ui-helper-clearfix"],["type","button","pButton","","icon","pi pi-times","label","Delete",1,"ui-button-danger",3,"click"],["type","button","pButton","","icon","pi pi-check","label","Save",3,"click"],["mode","indeterminate"],[1,"table-responsive"],["columnResizeMode","expand","selectionMode","single",3,"columns","value","paginator","rows","resizableColumns","selection","selectionChange","onRowSelect"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","summary"],[2,"text-align","right"],[1,"fa","fa-search",2,"margin","4px 4px 0 0"],["type","text","pInputText","","size","50","placeholder","Global Filter",2,"width","auto",3,"input"],["pResizableColumn","",4,"ngFor","ngForOf"],["pResizableColumn",""],[3,"pSelectableRow"],[1,"ui-resizable-column"],[1,"ui-resizable-column","column-center"],["pButton","","type","button","icon","pi pi-cog",1,"ui-button-secondary",3,"click"],[2,"text-align","left"],["type","button","pButton","","icon","pi pi-plus","label","Agregar",3,"click"],[1,"p-grid","ui-fluid"],[1,"p-col-4"],["for","TenantId"],[1,"p-col-8"],["pInputText","","id","TenantId","autofocus","","readonly","",3,"ngModel","ngModelChange"],["pInputText","","id","TenantId","autofocus","",3,"ngModel","ngModelChange"],["for","Name"],["pInputText","","id","Name",3,"ngModel","ngModelChange"],["for","Description"],["pInputText","","id","Description",3,"ngModel","ngModelChange"],["for","EnvironmentId"],[3,"options","ngModel","ngModelChange"],["for","ApplicationId"],["for","CreateAt"],["pInputText","","id","CreateAt",3,"ngModel","ngModelChange"],["for","ExpiredAt"],["pInputText","","id","ExpiredAt",3,"ngModel","ngModelChange"],["for","AprovedBy"],["pInputText","","id","AprovedBy",3,"ngModel","ngModelChange"]],template:function(n,e){1&n&&(d.Ub(0,"div",0),d.Ub(1,"div",1),d.Ub(2,"div",2),d.Ub(3,"div",3),d.Pb(4,"i",4),d.Hc(5," Tenants configurados "),d.Tb(),d.Ub(6,"div",5),d.Fc(7,C,2,0,"p",6),d.Fc(8,U,1,3,"p-progressBar",7),d.Fc(9,x,7,6,"div",8),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Ub(10,"p-dialog",9),d.bc("visibleChange",function(n){return e.displayConfig=n}),d.Pb(11,"json-editor",10),d.Tb(),d.Ub(12,"p-dialog",11),d.bc("visibleChange",function(n){return e.displayDialog=n}),d.Fc(13,k,52,15,"div",12),d.Ub(14,"p-footer"),d.Ub(15,"div",13),d.Ub(16,"button",14),d.bc("click",function(){return e.onDelete()}),d.Tb(),d.Ub(17,"button",15),d.bc("click",function(){return e.onUpdate()}),d.Tb(),d.Tb(),d.Tb(),d.Tb()),2&n&&(d.Cb(7),d.lc("ngIf",0===e.tenants.length),d.Cb(1),d.lc("ngIf",0==e.tenants.length),d.Cb(1),d.lc("ngIf",e.tenants.length>0),d.Cb(1),d.Cc(d.nc(19,O)),d.lc("visible",e.displayConfig)("focusOnShow",!1)("responsive",!0)("modal",!0)("baseZIndex",1e4),d.Cb(1),d.lc("options",e.editorOptions)("data",e.data),d.Cb(1),d.Cc(d.nc(20,D)),d.lc("visible",e.displayDialog)("focusOnShow",!1)("responsive",!0)("modal",!0),d.Cb(1),d.lc("ngIf",e.tenant))},directives:[a.l,s.a,b.a,u.a,p.a,f.a,g.c,u.c,h.a,a.k,g.a,g.b,c.b,c.j,c.m,v.a,T.a],pipes:[a.e],styles:[".column-center[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%]     json-editor, [_nghost-%COMP%]     json-editor .jsoneditor, [_nghost-%COMP%]     json-editor>div, [_nghost-%COMP%]     json-editor jsoneditor-outer{height:600px}.ui-dialog[_ngcontent-%COMP%]{width:auto!important}"]}),E),data:{title:"Tenants"}}],L=((S=t(function e(){n(this,e)})).\u0275fac=function(n){return new(n||S)},S.\u0275mod=d.Mb({type:S}),S.\u0275inj=d.Lb({imports:[[r.g.forChild(j)],r.g]}),S),F=o("SXvI"),P=((H=t(function e(){n(this,e)})).\u0275fac=function(n){return new(n||H)},H.\u0275mod=d.Mb({type:H}),H.\u0275inj=d.Lb({imports:[[a.c,L,c.h,c.p,g.d,s.b,h.b,v.b,p.b,F.a,f.b,T.b,b.c]]}),H)}}])}();