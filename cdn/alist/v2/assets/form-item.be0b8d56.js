import{j as e,R as a,ae as n,af as l,s as t,I as o,ah as r,ai as s,aj as c,ak as u,al as i,am as d,an as m,ao as g,ap as h}from"./vendor.38c2f4fc.js";import{C as p}from"./index.c185e438.js";const v=v=>{var C;const{t:E}=e();return a.createElement(n,{shadow:"md",p:"2",rounded:"lg",isRequired:v.required},a.createElement(l,null,E(v.label)," ",v.onDelete&&a.createElement(t,{color:"red.300",boxSize:6,_hover:{cursor:"pointer"},as:p,onClick:v.onDelete})),"string"===v.type?a.createElement(o,{isReadOnly:v.readOnly,value:v.value,onChange:e=>{v.onChange&&v.onChange(e.target.value)}}):"text"===v.type?a.createElement(r,{isReadOnly:v.readOnly,value:v.value,onChange:e=>{v.onChange&&v.onChange(e.target.value)}}):"bool"===v.type?a.createElement(s,{isReadOnly:v.readOnly,isChecked:v.value,onChange:()=>{v.onChange&&v.onChange()}}):"select"===v.type?a.createElement(c,{isDisabled:v.readOnly,value:v.value,onChange:e=>{v.onChange&&v.onChange(e.target.value)}},a.createElement("option",{value:""},E("select")),null==(C=v.values)?void 0:C.map((e=>a.createElement("option",{key:e,value:e},E(e))))):"number"===v.type?a.createElement(u,{defaultValue:v.value,onChange:(e,a)=>{v.onChange&&v.onChange(a)}},a.createElement(i,null),a.createElement(d,null,a.createElement(m,null),a.createElement(g,null))):null,(v.description||v.onDelete)&&a.createElement(h,null,E(v.description?v.description:"")," ",v.onDelete&&E("Deprecated")))};export{v as F};
