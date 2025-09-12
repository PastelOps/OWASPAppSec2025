const swiftFunctionPtr = Module.getExportByName(null, '$s7DVIA_v213DVIAUtilitiesC11loadWebView7withURL14viewControllerySS_So06UIViewJ0CtFZ');
console.log(swiftFunctionPtr)
Interceptor.attach(swiftFunctionPtr, {
    onEnter(args) {
    // Note that Swift String below <=15 Bytes can be printed like this
    const tmpAddr = args[1].and('0xFFFFFFFFFF').toString(16);
    const lsbAddr = ptr(new UInt64('0x' + tmpAddr));
    console.log(lsbAddr.add(32).readCString());

    //Longer Swift String > 15 Bytes require a different method to print.
    }
});
