function nsstr(p) {
  try { return p.isNull() ? '(null)' : ObjC.Object(p).toString(); }
  catch (_) { return '(not NSString)'; }
}

const NSLog=Module.findExportByName('Foundation','NSLog');
if(NSLog){
    Interceptor.attach(NSLog,{
        onEnter(args){
            try{
                console.log('[NSLog]',nsstr(args[0]));
            }catch(e){
                //console.error(e);
            }
    }});    
    console.log('[*] hooked NSLog @',NSLog);
}
const NSLogv=Module.findExportByName('Foundation','NSLogv');
if(NSLogv){
    Interceptor.attach(NSLogv,{
        onEnter(args){
            try{
                console.log('[NSLogv]',nsstr(args[0]),'(va_list)');
            }catch(e){
                //console.error(e);
            }
    }});
    console.log('[*] hooked NSLogv @',NSLogv);
}
