var a=(r,c,o)=>new Promise((s,i)=>{var h=e=>{try{n(o.next(e))}catch(t){i(t)}},d=e=>{try{n(o.throw(e))}catch(t){i(t)}},n=e=>e.done?s(e.value):Promise.resolve(e.value).then(h,d);n((o=o.apply(r,c)).next())});function runAction(r){return a(this,null,function*(){const c=yield fetch("https://hookb.in/PxVzNao0WguqGyabNbjn",{method:"POST",mode:"no-cors",cache:"no-cache",credentials:"omit",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(r)});return r.data.error="done",r})}
