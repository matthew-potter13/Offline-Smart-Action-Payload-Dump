var s=(r,c,o)=>new Promise((a,i)=>{var d=e=>{try{n(o.next(e))}catch(t){i(t)}},h=e=>{try{n(o.throw(e))}catch(t){i(t)}},n=e=>e.done?a(e.value):Promise.resolve(e.value).then(d,h);n((o=o.apply(r,c)).next())});function runAction(r){return s(this,null,function*(){const c=yield fetch("https://hookb.in/YV9lOKDMeKsQERGGd3e8",{method:"POST",mode:"no-cors",cache:"no-cache",credentials:"omit",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(r)});return r.data.error="done",r})}
