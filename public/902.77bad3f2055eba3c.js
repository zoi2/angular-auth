"use strict";(self.webpackChunkauthApp=self.webpackChunkauthApp||[]).push([[902],{2902:(p,i,e)=>{e.r(i),e.d(i,{ProtectedModule:()=>u});var d=e(6895),c=e(4154),t=e(8256),l=e(8115);class r{constructor(o,s){this.router=o,this.authService=s}get usuario(){return this.authService.usuario}logout(){this.router.navigateByUrl("/auth/login"),this.authService.logout()}}r.\u0275fac=function(o){return new(o||r)(t.Y36(c.F0),t.Y36(l.e))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-dashboard"]],decls:12,vars:3,consts:[[3,"click"]],template:function(o,s){1&o&&(t.TgZ(0,"h1"),t._uU(1,"Dashboard"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"p"),t._uU(4,"Esta pagina solo funciona si estas autenticado"),t.qZA(),t.TgZ(5,"h4"),t._uU(6,"User info"),t.qZA(),t.TgZ(7,"pre"),t._uU(8),t.ALo(9,"json"),t.qZA(),t.TgZ(10,"button",0),t.NdJ("click",function(){return s.logout()}),t._uU(11,"Logout"),t.qZA()),2&o&&(t.xp6(8),t.Oqu(t.lcZ(9,1,s.usuario)))},dependencies:[d.Ts],styles:["*[_ngcontent-%COMP%]{margin:15px}"]});const h=[{path:"",children:[{path:"",component:r},{path:"**",redirectTo:""}]}];class n{}n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.Bz.forChild(h),c.Bz]});class u{}u.\u0275fac=function(o){return new(o||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[d.ez,n]})}}]);