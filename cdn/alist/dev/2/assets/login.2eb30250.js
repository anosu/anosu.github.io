import{j as e,D as s,h as t,r as a,R as r,C as n,V as l,ae as o,af as i,I as c,A as u}from"./vendor.3bf5fbfd.js";import{h as d,e as m}from"./index.a49ff53c.js";import"./index.fc04bfad.js";const f=()=>{const{t:f}=e(),p=s(),g=t(),[E,b]=a.exports.useState(""),h=()=>{d(E),m.get("login").then((e=>{const s=e.data;200===s.code?(g({title:f(s.message),status:"success",duration:3e3,isClosable:!0}),p.push("settings/0")):g({title:f(s.message),status:"error",duration:3e3,isClosable:!0})}))};return r.createElement(n,{p:"4",h:"full"},r.createElement(l,{w:{base:"full",md:"50%"}},r.createElement(o,{isRequired:!0},r.createElement(i,null,f("password")),r.createElement(c,{type:"password",value:E,onChange:e=>b(e.target.value),onKeyUp:e=>{"Enter"===e.key&&h()}})),r.createElement(u,{onClick:h},f("login"))))};export{f as default};