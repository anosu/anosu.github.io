import{j as e,R as a,ad as n,ae as l,n as t,K as o,ag as r,ah as s,ai as u,aj as c,ak as d,al as i,am as m,an as g,ao as h}from"./vendor.af020e3c.js";import{y as v}from"./index.8812dfa0.js";const p=p=>{var C;const{t:E}=e();return a.createElement(n,{shadow:"md",p:"2",rounded:"lg",isRequired:p.required},a.createElement(l,null,E(p.label)," ",p.onDelete&&a.createElement(t,{color:"red.300",boxSize:6,_hover:{cursor:"pointer"},as:v,onClick:p.onDelete})),"string"===p.type?a.createElement(o,{isReadOnly:p.readOnly,value:p.value,onChange:e=>{p.onChange&&p.onChange(e.target.value)}}):"text"===p.type?a.createElement(r,{isReadOnly:p.readOnly,value:p.value,onChange:e=>{p.onChange&&p.onChange(e.target.value)}}):"bool"===p.type?a.createElement(s,{isReadOnly:p.readOnly,isChecked:p.value,onChange:()=>{p.onChange&&p.onChange()}}):"select"===p.type?a.createElement(u,{isDisabled:p.readOnly,value:p.value,onChange:e=>{p.onChange&&p.onChange(e.target.value)}},a.createElement("option",{value:""},E("select")),null==(C=p.values)?void 0:C.map((e=>a.createElement("option",{key:e,value:e},E(e))))):"number"===p.type?a.createElement(c,{defaultValue:p.value,onChange:(e,a)=>{p.onChange&&p.onChange(a)}},a.createElement(d,null),a.createElement(i,null,a.createElement(m,null),a.createElement(g,null))):null,(p.description||p.onDelete)&&a.createElement(h,null,E(p.description?p.description:"")," ",p.onDelete&&E("Deprecated")))};export{p as F};
