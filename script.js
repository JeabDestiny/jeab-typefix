const input=document.getElementById('input');
const output=document.getElementById('output');
const copyBtn=document.getElementById('copyBtn');
const clearBtn=document.getElementById('clearBtn');
const m={'l':'ส',';':'ว','v':'ั','f':'ด','u':'ี','0':'จ','h':'้','k':'า'};
const r={};for(const k in m)r[m[k]]=k;
input.addEventListener('input',()=>{const t=input.value;const th=/[ก-๙]/.test(t);output.value=[...t].map(c=>th?(r[c]||c):(m[c]||c)).join('');});
copyBtn.onclick=async()=>{await navigator.clipboard.writeText(output.value);alert('🐣 คัดลอกแล้ว');};
clearBtn.onclick=()=>{input.value='';output.value='';input.focus();};