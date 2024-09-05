import{d as t,r as s,u as c,j as e}from"./index-BvWLsnEw.js";import{c as l}from"./createLucideIcon-TOlaLyPz.js";/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=l("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),m=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
  width: 100%;
`,u=t.div`
  display: flex;
  min-width: 300px;
  justify-content: center;
  align-items: center;
`,h=t.input`
  display: flex;
  padding: 1rem 2rem;
  font-size: 1.25rem;
  border: 2px solid #4a5568;
  border-radius: 9999px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #2b6cb0;
  }
`,p=t.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: #4a5568;
`,x=t.a`
  color: #4a5568;
  margin-left: 0.5rem;
  transition: color 0.3s;

  &:hover {
    color: #c4302b;
  }
`,g=()=>{const[r,n]=s.useState(""),i=c(),a=o=>{o.preventDefault(),r.trim()&&(i(`/character/${encodeURIComponent(r.trim())}`),n(""))};return e.jsxs(m,{children:[e.jsx(u,{children:e.jsx("form",{onSubmit:a,style:{width:"100%"},children:e.jsx(h,{type:"text",placeholder:"캐릭터 검색...",value:r,onChange:o=>n(o.target.value)})})}),e.jsxs(p,{children:["로아모아 개발자 유튜브ㅋㅋ",e.jsx(x,{href:"https://www.youtube.com/@yang",target:"_blank",rel:"noopener noreferrer",children:e.jsx(d,{size:20})})]})]})};export{g as default};
