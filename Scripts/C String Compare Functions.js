function readCString(p){
    try{
       if (p.isNull()){ return 'NULL'; }
       return Memory.readUtf8String(p);
    } catch(_) {
        try{
            const buf=Memory.readByteArray(p,32);
            return Array.from(new Uint8Array(buf)).map(b=>('0'+b.toString(16)).slice(-2)).join(' ');
        } catch(_){
            return'<unreadable>';
        }
}}

const exp_methods = ['strcmp','strncmp','strcasecmp','strncasecmp','memcmp']
exp_methods.forEach(meth=>{
        const p=Module.findExportByName(null,meth);
        if(p) {
            Interceptor.attach(p,{
                onEnter(args) {
                    this.a=readCString(args[0]);
                    this.b=readCString(args[1]);
                    this.n=(meth.includes('ncmp')||meth==='memcmp')
                },
                onLeave(ret){
                    console.log(`[C] ${meth}("${this.a}", "${this.b}"${this.n!==null?',n='+this.n:''}) -> ${ret}`);
                }
    })}}
);

console.log('[*] C string compare hooks active');