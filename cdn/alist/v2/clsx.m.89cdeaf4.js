import{m as e,n as r,o as a,p as s,q as t,r as o,s as n,t as i,u as f,v as c,w as u,x as p,y as l,z as d}from"./index.c5eca8fd.js";import{a as m}from"./index.esm.e413e1b5.js";import{I as x}from"./index.ab0eb0a4.js";const b={"dmg,ipa":c,exe:u,"zip,gz,rar,7z,tar,jar,xz":p,apk:m,db:l,md:d},g=(c,u)=>{for(const[e,r]of Object.entries(b))if(e.split(",").includes(u.toLowerCase()))return r;switch(c){case 1:return x;case 2:return"doc"===u||"docx"===u?o:"xls"===u||"xlsx"===u?n:"ppt"===u||"pptx"===u?i:f;case 3:return t;case 4:return s;case 5:return a;case 6:return r;default:return e}};function j(e){var r,a,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(a=j(e[r]))&&(s&&(s+=" "),s+=a);else for(r in e)e[r]&&(s&&(s+=" "),s+=r);return s}function y(){for(var e,r,a=0,s="";a<arguments.length;)(e=arguments[a++])&&(r=j(e))&&(s&&(s+=" "),s+=r);return s}var z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:y});export{z as a,y as c,g};
