function hook(clsName, sel, argIndex){
    try {
        const cls=ObjC.classes[clsName];
        if(!cls||!cls[sel]) return;
        const impl=cls[sel].implementation;
        Interceptor.attach(impl,{
            onEnter(args){
                this.tag=clsName+' '+sel;
                try {
                    if(sel.indexOf('Characters:length:')!==-1){
                        const p=args[argIndex];
                        this.msg='utf16="'+ Memory.readUtf16String(p);
                    } else {
                        const p=args[argIndex];
                        this.msg='cstr="'+readCString(p);
                    }
                } catch(e){ this.msg='<parse err>' + e; }
            },
            onLeave(ret){
                try{
                    const out=new ObjC.Object(ret).toString();
                    console.log('ObjC',this.tag+' -> "'+out+'" [src '+this.msg+']');
                } catch(_){
                    console.log('ObjC',this.tag+' -> <non-objc return> [src '+this.msg+']');
                }
            }
        });
        console.log('[*] hooked',clsName,sel);
    } catch(_){}
}

hook('NSString','- initWithUTF8String:',2);
hook('NSString','+ stringWithUTF8String:',2);
hook('NSString','- initWithCString:encoding:',2);
hook('NSString','+ stringWithCString:encoding:',2);
hook('NSString','- initWithCharacters:length:',2);
hook('NSString','+ stringWithCharacters:length:',2);
hook('NSMutableString','- initWithUTF8String:',2);
hook('NSMutableString','- initWithCString:encoding:',2);
