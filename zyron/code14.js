gdjs.finalCode = {};
gdjs.finalCode.localVariables = [];
gdjs.finalCode.GDfinalObjects1= [];
gdjs.finalCode.GDfinalObjects2= [];
gdjs.finalCode.GDfinalbotonObjects1= [];
gdjs.finalCode.GDfinalbotonObjects2= [];
gdjs.finalCode.GDpersonajeObjects1= [];
gdjs.finalCode.GDpersonajeObjects2= [];
gdjs.finalCode.GDcargaObjects1= [];
gdjs.finalCode.GDcargaObjects2= [];
gdjs.finalCode.GDizquierdaObjects1= [];
gdjs.finalCode.GDizquierdaObjects2= [];
gdjs.finalCode.GDderechaObjects1= [];
gdjs.finalCode.GDderechaObjects2= [];
gdjs.finalCode.GDpuzzleObjects1= [];
gdjs.finalCode.GDpuzzleObjects2= [];
gdjs.finalCode.GDpuzzleCObjects1= [];
gdjs.finalCode.GDpuzzleCObjects2= [];
gdjs.finalCode.GDcomienzopuzzleObjects1= [];
gdjs.finalCode.GDcomienzopuzzleObjects2= [];
gdjs.finalCode.GDpisoObjects1= [];
gdjs.finalCode.GDpisoObjects2= [];
gdjs.finalCode.GDtechoObjects1= [];
gdjs.finalCode.GDtechoObjects2= [];
gdjs.finalCode.GDpuertaizquierdaObjects1= [];
gdjs.finalCode.GDpuertaizquierdaObjects2= [];
gdjs.finalCode.GDpuertaderechaObjects1= [];
gdjs.finalCode.GDpuertaderechaObjects2= [];
gdjs.finalCode.GDperdisteObjects1= [];
gdjs.finalCode.GDperdisteObjects2= [];


gdjs.finalCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("finalboton"), gdjs.finalCode.GDfinalbotonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.finalCode.GDfinalbotonObjects1.length;i<l;++i) {
    if ( gdjs.finalCode.GDfinalbotonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.finalCode.GDfinalbotonObjects1[k] = gdjs.finalCode.GDfinalbotonObjects1[i];
        ++k;
    }
}
gdjs.finalCode.GDfinalbotonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "inicial", false);
}}

}


};

gdjs.finalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.finalCode.GDfinalObjects1.length = 0;
gdjs.finalCode.GDfinalObjects2.length = 0;
gdjs.finalCode.GDfinalbotonObjects1.length = 0;
gdjs.finalCode.GDfinalbotonObjects2.length = 0;
gdjs.finalCode.GDpersonajeObjects1.length = 0;
gdjs.finalCode.GDpersonajeObjects2.length = 0;
gdjs.finalCode.GDcargaObjects1.length = 0;
gdjs.finalCode.GDcargaObjects2.length = 0;
gdjs.finalCode.GDizquierdaObjects1.length = 0;
gdjs.finalCode.GDizquierdaObjects2.length = 0;
gdjs.finalCode.GDderechaObjects1.length = 0;
gdjs.finalCode.GDderechaObjects2.length = 0;
gdjs.finalCode.GDpuzzleObjects1.length = 0;
gdjs.finalCode.GDpuzzleObjects2.length = 0;
gdjs.finalCode.GDpuzzleCObjects1.length = 0;
gdjs.finalCode.GDpuzzleCObjects2.length = 0;
gdjs.finalCode.GDcomienzopuzzleObjects1.length = 0;
gdjs.finalCode.GDcomienzopuzzleObjects2.length = 0;
gdjs.finalCode.GDpisoObjects1.length = 0;
gdjs.finalCode.GDpisoObjects2.length = 0;
gdjs.finalCode.GDtechoObjects1.length = 0;
gdjs.finalCode.GDtechoObjects2.length = 0;
gdjs.finalCode.GDpuertaizquierdaObjects1.length = 0;
gdjs.finalCode.GDpuertaizquierdaObjects2.length = 0;
gdjs.finalCode.GDpuertaderechaObjects1.length = 0;
gdjs.finalCode.GDpuertaderechaObjects2.length = 0;
gdjs.finalCode.GDperdisteObjects1.length = 0;
gdjs.finalCode.GDperdisteObjects2.length = 0;

gdjs.finalCode.eventsList0(runtimeScene);
gdjs.finalCode.GDfinalObjects1.length = 0;
gdjs.finalCode.GDfinalObjects2.length = 0;
gdjs.finalCode.GDfinalbotonObjects1.length = 0;
gdjs.finalCode.GDfinalbotonObjects2.length = 0;
gdjs.finalCode.GDpersonajeObjects1.length = 0;
gdjs.finalCode.GDpersonajeObjects2.length = 0;
gdjs.finalCode.GDcargaObjects1.length = 0;
gdjs.finalCode.GDcargaObjects2.length = 0;
gdjs.finalCode.GDizquierdaObjects1.length = 0;
gdjs.finalCode.GDizquierdaObjects2.length = 0;
gdjs.finalCode.GDderechaObjects1.length = 0;
gdjs.finalCode.GDderechaObjects2.length = 0;
gdjs.finalCode.GDpuzzleObjects1.length = 0;
gdjs.finalCode.GDpuzzleObjects2.length = 0;
gdjs.finalCode.GDpuzzleCObjects1.length = 0;
gdjs.finalCode.GDpuzzleCObjects2.length = 0;
gdjs.finalCode.GDcomienzopuzzleObjects1.length = 0;
gdjs.finalCode.GDcomienzopuzzleObjects2.length = 0;
gdjs.finalCode.GDpisoObjects1.length = 0;
gdjs.finalCode.GDpisoObjects2.length = 0;
gdjs.finalCode.GDtechoObjects1.length = 0;
gdjs.finalCode.GDtechoObjects2.length = 0;
gdjs.finalCode.GDpuertaizquierdaObjects1.length = 0;
gdjs.finalCode.GDpuertaizquierdaObjects2.length = 0;
gdjs.finalCode.GDpuertaderechaObjects1.length = 0;
gdjs.finalCode.GDpuertaderechaObjects2.length = 0;
gdjs.finalCode.GDperdisteObjects1.length = 0;
gdjs.finalCode.GDperdisteObjects2.length = 0;


return;

}

gdjs['finalCode'] = gdjs.finalCode;
