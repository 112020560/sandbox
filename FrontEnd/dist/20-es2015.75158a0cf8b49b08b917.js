(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{AgMk:function(b,e,d){"use strict";d.r(e),d.d(e,"ThemeModule",function(){return c});var o=d("SVse"),t=d("iInd"),i=d("NuRj"),n=d("8Y7J");const a=[{path:"",data:{title:"Theme"},children:[{path:"",redirectTo:"colors"},{path:"colors",component:(()=>{class b{constructor(b){this._document=b}themeColors(){Array.from(this._document.querySelectorAll(".theme-color")).forEach(b=>{const e=Object(i.getStyle)("background-color",b),d=this._document.createElement("table");d.innerHTML=`\n        <table class="w-100">\n          <tr>\n            <td class="text-muted">HEX:</td>\n            <td class="font-weight-bold">${Object(i.rgbToHex)(e)}</td>\n          </tr>\n          <tr>\n            <td class="text-muted">RGB:</td>\n            <td class="font-weight-bold">${e}</td>\n          </tr>\n        </table>\n      `,b.parentNode.appendChild(d)})}ngOnInit(){this.themeColors()}}return b.\u0275fac=function(e){return new(e||b)(n.Ob(o.d))},b.\u0275cmp=n.Ib({type:b,selectors:[["ng-component"]],decls:131,vars:0,consts:[[1,"animated","fadeIn"],[1,"card"],[1,"card-header"],[1,"icon-drop"],[1,"card-body"],[1,"row"],[1,"col-xl-2","col-md-3","col-sm-4","col-6","mb-4"],[1,"bg-primary","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-secondary","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-success","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-danger","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-warning","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-info","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-light","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-dark","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"row","mb-3"],[1,"bg-gray-100","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-200","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-300","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-400","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-500","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-600","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-700","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-800","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-900","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-blue","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-light-blue","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-indigo","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-purple","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-pink","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-red","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-orange","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-yellow","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-green","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-teal","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-cyan","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"]],template:function(b,e){1&b&&(n.Ub(0,"div",0),n.Ub(1,"div",1),n.Ub(2,"div",2),n.Pb(3,"i",3),n.Hc(4," Theme colors "),n.Tb(),n.Ub(5,"div",4),n.Ub(6,"div",5),n.Ub(7,"div",6),n.Pb(8,"div",7),n.Ub(9,"h6"),n.Hc(10,"Brand Primary Color"),n.Tb(),n.Tb(),n.Ub(11,"div",6),n.Pb(12,"div",8),n.Ub(13,"h6"),n.Hc(14,"Brand Secondary Color"),n.Tb(),n.Tb(),n.Ub(15,"div",6),n.Pb(16,"div",9),n.Ub(17,"h6"),n.Hc(18,"Brand Success Color"),n.Tb(),n.Tb(),n.Ub(19,"div",6),n.Pb(20,"div",10),n.Ub(21,"h6"),n.Hc(22,"Brand Danger Color"),n.Tb(),n.Tb(),n.Ub(23,"div",6),n.Pb(24,"div",11),n.Ub(25,"h6"),n.Hc(26,"Brand Warning Color"),n.Tb(),n.Tb(),n.Ub(27,"div",6),n.Pb(28,"div",12),n.Ub(29,"h6"),n.Hc(30,"Brand Info Color"),n.Tb(),n.Tb(),n.Ub(31,"div",6),n.Pb(32,"div",13),n.Ub(33,"h6"),n.Hc(34,"Brand Light Color"),n.Tb(),n.Tb(),n.Ub(35,"div",6),n.Pb(36,"div",14),n.Ub(37,"h6"),n.Hc(38,"Brand Dark Color"),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Ub(39,"div",1),n.Ub(40,"div",2),n.Pb(41,"i",3),n.Hc(42," Grays "),n.Tb(),n.Ub(43,"div",4),n.Ub(44,"div",15),n.Ub(45,"div",6),n.Pb(46,"div",16),n.Ub(47,"h6"),n.Hc(48,"Gray 100 Color"),n.Tb(),n.Tb(),n.Ub(49,"div",6),n.Pb(50,"div",17),n.Ub(51,"h6"),n.Hc(52,"Gray 200 Color"),n.Tb(),n.Tb(),n.Ub(53,"div",6),n.Pb(54,"div",18),n.Ub(55,"h6"),n.Hc(56,"Gray 300 Color"),n.Tb(),n.Tb(),n.Ub(57,"div",6),n.Pb(58,"div",19),n.Ub(59,"h6"),n.Hc(60,"Gray 400 Color"),n.Tb(),n.Tb(),n.Ub(61,"div",6),n.Pb(62,"div",20),n.Ub(63,"h6"),n.Hc(64,"Gray 500 Color"),n.Tb(),n.Tb(),n.Ub(65,"div",6),n.Pb(66,"div",21),n.Ub(67,"h6"),n.Hc(68,"Gray 600 Color"),n.Tb(),n.Tb(),n.Ub(69,"div",6),n.Pb(70,"div",22),n.Ub(71,"h6"),n.Hc(72,"Gray 700 Color"),n.Tb(),n.Tb(),n.Ub(73,"div",6),n.Pb(74,"div",23),n.Ub(75,"h6"),n.Hc(76,"Gray 800 Color"),n.Tb(),n.Tb(),n.Ub(77,"div",6),n.Pb(78,"div",24),n.Ub(79,"h6"),n.Hc(80,"Gray 900 Color"),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Ub(81,"div",1),n.Ub(82,"div",2),n.Pb(83,"i",3),n.Hc(84," Additional colors "),n.Tb(),n.Ub(85,"div",4),n.Ub(86,"div",5),n.Ub(87,"div",6),n.Pb(88,"div",25),n.Ub(89,"h6"),n.Hc(90,"Blue Color"),n.Tb(),n.Tb(),n.Ub(91,"div",6),n.Pb(92,"div",26),n.Ub(93,"h6"),n.Hc(94,"Light Blue Color"),n.Tb(),n.Tb(),n.Ub(95,"div",6),n.Pb(96,"div",27),n.Ub(97,"h6"),n.Hc(98,"Indigo Color"),n.Tb(),n.Tb(),n.Ub(99,"div",6),n.Pb(100,"div",28),n.Ub(101,"h6"),n.Hc(102,"Purple Color"),n.Tb(),n.Tb(),n.Ub(103,"div",6),n.Pb(104,"div",29),n.Ub(105,"h6"),n.Hc(106,"Pink Color"),n.Tb(),n.Tb(),n.Ub(107,"div",6),n.Pb(108,"div",30),n.Ub(109,"h6"),n.Hc(110,"Red Color"),n.Tb(),n.Tb(),n.Ub(111,"div",6),n.Pb(112,"div",31),n.Ub(113,"h6"),n.Hc(114,"Orange Color"),n.Tb(),n.Tb(),n.Ub(115,"div",6),n.Pb(116,"div",32),n.Ub(117,"h6"),n.Hc(118,"Yellow Color"),n.Tb(),n.Tb(),n.Ub(119,"div",6),n.Pb(120,"div",33),n.Ub(121,"h6"),n.Hc(122,"Green Color"),n.Tb(),n.Tb(),n.Ub(123,"div",6),n.Pb(124,"div",34),n.Ub(125,"h6"),n.Hc(126,"Teal Color"),n.Tb(),n.Tb(),n.Ub(127,"div",6),n.Pb(128,"div",35),n.Ub(129,"h6"),n.Hc(130,"Cyan Color"),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb())},encapsulation:2}),b})(),data:{title:"Colors"}},{path:"typography",component:(()=>{class b{constructor(){}}return b.\u0275fac=function(e){return new(e||b)},b.\u0275cmp=n.Ib({type:b,selectors:[["ng-component"]],decls:189,vars:0,consts:[[1,"animated","fadeIn"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"table"],[1,"highlighter-rouge"],[1,"h1"],[1,"h2"],[1,"h3"],[1,"h4"],[1,"h5"],[1,"h6"],[1,"bd-example"],[1,"bd-example","bd-example-type"],[1,"display-1"],[1,"display-2"],[1,"display-3"],[1,"display-4"],[1,"row"],[1,"col-sm-3"],[1,"col-sm-9"],[1,"col-sm-3","text-truncate"],[1,"col-sm-4"],[1,"col-sm-8"]],template:function(b,e){1&b&&(n.Ub(0,"div",0),n.Ub(1,"div",1),n.Ub(2,"div",2),n.Hc(3," Headings "),n.Tb(),n.Ub(4,"div",3),n.Ub(5,"p"),n.Hc(6,"Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more."),n.Tb(),n.Ub(7,"table",4),n.Ub(8,"thead"),n.Ub(9,"tr"),n.Ub(10,"th"),n.Hc(11,"Heading"),n.Tb(),n.Ub(12,"th"),n.Hc(13,"Example"),n.Tb(),n.Tb(),n.Tb(),n.Ub(14,"tbody"),n.Ub(15,"tr"),n.Ub(16,"td"),n.Ub(17,"p"),n.Ub(18,"code",5),n.Hc(19,"<h1></h1>"),n.Tb(),n.Tb(),n.Tb(),n.Ub(20,"td"),n.Ub(21,"span",6),n.Hc(22,"h1. Bootstrap heading"),n.Tb(),n.Tb(),n.Tb(),n.Ub(23,"tr"),n.Ub(24,"td"),n.Ub(25,"p"),n.Ub(26,"code",5),n.Hc(27,"<h2></h2>"),n.Tb(),n.Tb(),n.Tb(),n.Ub(28,"td"),n.Ub(29,"span",7),n.Hc(30,"h2. Bootstrap heading"),n.Tb(),n.Tb(),n.Tb(),n.Ub(31,"tr"),n.Ub(32,"td"),n.Ub(33,"p"),n.Ub(34,"code",5),n.Hc(35,"<h3></h3>"),n.Tb(),n.Tb(),n.Tb(),n.Ub(36,"td"),n.Ub(37,"span",8),n.Hc(38,"h3. Bootstrap heading"),n.Tb(),n.Tb(),n.Tb(),n.Ub(39,"tr"),n.Ub(40,"td"),n.Ub(41,"p"),n.Ub(42,"code",5),n.Hc(43,"<h4></h4>"),n.Tb(),n.Tb(),n.Tb(),n.Ub(44,"td"),n.Ub(45,"span",9),n.Hc(46,"h4. Bootstrap heading"),n.Tb(),n.Tb(),n.Tb(),n.Ub(47,"tr"),n.Ub(48,"td"),n.Ub(49,"p"),n.Ub(50,"code",5),n.Hc(51,"<h5></h5>"),n.Tb(),n.Tb(),n.Tb(),n.Ub(52,"td"),n.Ub(53,"span",10),n.Hc(54,"h5. Bootstrap heading"),n.Tb(),n.Tb(),n.Tb(),n.Ub(55,"tr"),n.Ub(56,"td"),n.Ub(57,"p"),n.Ub(58,"code",5),n.Hc(59,"<h6></h6>"),n.Tb(),n.Tb(),n.Tb(),n.Ub(60,"td"),n.Ub(61,"span",11),n.Hc(62,"h6. Bootstrap heading"),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Ub(63,"div",1),n.Ub(64,"div",2),n.Hc(65," Headings "),n.Tb(),n.Ub(66,"div",3),n.Ub(67,"p"),n.Ub(68,"code",5),n.Hc(69,".h1"),n.Tb(),n.Hc(70," through "),n.Ub(71,"code",5),n.Hc(72,".h6"),n.Tb(),n.Hc(73," classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element."),n.Tb(),n.Ub(74,"div",12),n.Ub(75,"p",6),n.Hc(76,"h1. Bootstrap heading"),n.Tb(),n.Ub(77,"p",7),n.Hc(78,"h2. Bootstrap heading"),n.Tb(),n.Ub(79,"p",8),n.Hc(80,"h3. Bootstrap heading"),n.Tb(),n.Ub(81,"p",9),n.Hc(82,"h4. Bootstrap heading"),n.Tb(),n.Ub(83,"p",10),n.Hc(84,"h5. Bootstrap heading"),n.Tb(),n.Ub(85,"p",11),n.Hc(86,"h6. Bootstrap heading"),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Ub(87,"div",1),n.Ub(88,"div",2),n.Hc(89," Display headings "),n.Tb(),n.Ub(90,"div",3),n.Ub(91,"p"),n.Hc(92,"Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a "),n.Ub(93,"strong"),n.Hc(94,"display heading"),n.Tb(),n.Hc(95,"\u2014a larger, slightly more opinionated heading style."),n.Tb(),n.Ub(96,"div",13),n.Ub(97,"table",4),n.Ub(98,"tbody"),n.Ub(99,"tr"),n.Ub(100,"td"),n.Ub(101,"span",14),n.Hc(102,"Display 1"),n.Tb(),n.Tb(),n.Tb(),n.Ub(103,"tr"),n.Ub(104,"td"),n.Ub(105,"span",15),n.Hc(106,"Display 2"),n.Tb(),n.Tb(),n.Tb(),n.Ub(107,"tr"),n.Ub(108,"td"),n.Ub(109,"span",16),n.Hc(110,"Display 3"),n.Tb(),n.Tb(),n.Tb(),n.Ub(111,"tr"),n.Ub(112,"td"),n.Ub(113,"span",17),n.Hc(114,"Display 4"),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Ub(115,"div",1),n.Ub(116,"div",2),n.Hc(117," Inline text elements "),n.Tb(),n.Ub(118,"div",3),n.Ub(119,"p"),n.Hc(120,"Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a "),n.Ub(121,"strong"),n.Hc(122,"display heading"),n.Tb(),n.Hc(123,"\u2014a larger, slightly more opinionated heading style."),n.Tb(),n.Ub(124,"div",12),n.Ub(125,"p"),n.Hc(126,"You can use the mark tag to "),n.Ub(127,"mark"),n.Hc(128,"highlight"),n.Tb(),n.Hc(129," text."),n.Tb(),n.Ub(130,"p"),n.Ub(131,"del"),n.Hc(132,"This line of text is meant to be treated as deleted text."),n.Tb(),n.Tb(),n.Ub(133,"p"),n.Ub(134,"s"),n.Hc(135,"This line of text is meant to be treated as no longer accurate."),n.Tb(),n.Tb(),n.Ub(136,"p"),n.Ub(137,"ins"),n.Hc(138,"This line of text is meant to be treated as an addition to the document."),n.Tb(),n.Tb(),n.Ub(139,"p"),n.Ub(140,"u"),n.Hc(141,"This line of text will render as underlined"),n.Tb(),n.Tb(),n.Ub(142,"p"),n.Ub(143,"small"),n.Hc(144,"This line of text is meant to be treated as fine print."),n.Tb(),n.Tb(),n.Ub(145,"p"),n.Ub(146,"strong"),n.Hc(147,"This line rendered as bold text."),n.Tb(),n.Tb(),n.Ub(148,"p"),n.Ub(149,"em"),n.Hc(150,"This line rendered as italicized text."),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Ub(151,"div",1),n.Ub(152,"div",2),n.Hc(153," Description list alignment "),n.Tb(),n.Ub(154,"div",3),n.Ub(155,"p"),n.Hc(156,"Align terms and descriptions horizontally by using our grid system\u2019s predefined classes (or semantic mixins). For longer terms, you can optionally add a "),n.Ub(157,"code",5),n.Hc(158,".text-truncate"),n.Tb(),n.Hc(159," class to truncate the text with an ellipsis."),n.Tb(),n.Ub(160,"div",12),n.Ub(161,"dl",18),n.Ub(162,"dt",19),n.Hc(163,"Description lists"),n.Tb(),n.Ub(164,"dd",20),n.Hc(165,"A description list is perfect for defining terms."),n.Tb(),n.Ub(166,"dt",19),n.Hc(167,"Euismod"),n.Tb(),n.Ub(168,"dd",20),n.Ub(169,"p"),n.Hc(170,"Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit."),n.Tb(),n.Ub(171,"p"),n.Hc(172,"Donec id elit non mi porta gravida at eget metus."),n.Tb(),n.Tb(),n.Ub(173,"dt",19),n.Hc(174,"Malesuada porta"),n.Tb(),n.Ub(175,"dd",20),n.Hc(176,"Etiam porta sem malesuada magna mollis euismod."),n.Tb(),n.Ub(177,"dt",21),n.Hc(178,"Truncated term is truncated"),n.Tb(),n.Ub(179,"dd",20),n.Hc(180,"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."),n.Tb(),n.Ub(181,"dt",19),n.Hc(182,"Nesting"),n.Tb(),n.Ub(183,"dd",20),n.Ub(184,"dl",18),n.Ub(185,"dt",22),n.Hc(186,"Nested definition list"),n.Tb(),n.Ub(187,"dd",23),n.Hc(188,"Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc."),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb())},encapsulation:2}),b})(),data:{title:"Typography"}}]}];let r=(()=>{class b{}return b.\u0275fac=function(e){return new(e||b)},b.\u0275mod=n.Mb({type:b}),b.\u0275inj=n.Lb({imports:[[t.g.forChild(a)],t.g]}),b})(),c=(()=>{class b{}return b.\u0275fac=function(e){return new(e||b)},b.\u0275mod=n.Mb({type:b}),b.\u0275inj=n.Lb({imports:[[o.c,r]]}),b})()}}]);