import{m as r,n as e,o as a,p as s,q as t,r as o,s as n,t as i,u as c,v as f,w as u,x as p,y as d,z as l}from"./index.34a5425d.js";import{a as m}from"./index.esm.87c4845a.js";import{I as x}from"./index.9d84958c.js";const g={"dmg,ipa":f,exe:u,"zip,gz,rar,7z,tar,jar,xz":p,apk:m,db:d,md:l},j=(f,u)=>{for(const[r,e]of Object.entries(g))if(r.split(",").includes(u.toLowerCase()))return e;switch(f){case 1:return x;case 2:return"doc"===u||"docx"===u?o:"xls"===u||"xlsx"===u?n:"ppt"===u||"pptx"===u?i:c;case 3:return t;case 4:return s;case 5:return a;case 6:return e;default:return r}};function y(r){var e,a,s="";if("string"==typeof r||"number"==typeof r)s+=r;else if("object"==typeof r)if(Array.isArray(r))for(e=0;e<r.length;e++)r[e]&&(a=y(r[e]))&&(s&&(s+=" "),s+=a);else for(e in r)r[e]&&(s&&(s+=" "),s+=e);return s}function b(){for(var r,e,a=0,s="";a<arguments.length;)(r=arguments[a++])&&(e=y(r))&&(s&&(s+=" "),s+=e);return s}var z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:b});export{z as a,b as c,j as g};
