const m={'l':'ส',';':'ว','y':'ั','f':'ด','u':'ี'},r={};
for(let k in m) r[m[k]]=k;

const inputBox=document.getElementById('in');
const outputBox=document.getElementById('out');

inputBox.oninput=()=>{
  let t=inputBox.value, th=/[ก-๙]/.test(t);
  outputBox.value=[...t].map(c=>th?(r[c]||c):(m[c]||c)).join('');
};