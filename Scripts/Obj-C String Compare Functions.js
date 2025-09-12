function hookMethod(cls,meth) {
    try {
        const impl=cls[meth].implementation;
        Interceptor.attach(impl,{
            onEnter(args){
                try {
                    this.a=new ObjC.Object(args[0]).toString();
                    this.b=new ObjC.Object(args[2]).toString();
                    this.cls=cls.$className;
                    this.meth=meth;
                } catch (e) {console.error(e);}
            },
            onLeave(ret){
                try{
                    console.log(`[ObjC] -[${this.cls} ${this.meth}] a="${this.a}" b="${this.b}" -> ${ret}`);
                } catch (e) {console.error(e);}
            }
        });
        console.log('[+] hooked',cls.$className,meth);
    } catch (e) {console.error(e);}
}

const NSString = ObjC.classes.NSString;
const methods = ['- isEqualToString:','- compare:','- caseInsensitiveCompare:','- localizedCompare:','- localizedCaseInsensitiveCompare:','- localizedStandardCompare:','- hasPrefix:','- hasSuffix:','- containsString:','- rangeOfString:'];
methods.forEach(meth=>
    hookMethod(NSString,meth)
);

console.log('[+] ObjC NSString hooks active.');