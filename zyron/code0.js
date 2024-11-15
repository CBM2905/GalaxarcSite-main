gdjs.inicialCode = {};
gdjs.inicialCode.localVariables = [];
gdjs.inicialCode.GDfondoObjects1= [];
gdjs.inicialCode.GDfondoObjects2= [];
gdjs.inicialCode.GDiniciarObjects1= [];
gdjs.inicialCode.GDiniciarObjects2= [];
gdjs.inicialCode.GDpersonajeObjects1= [];
gdjs.inicialCode.GDpersonajeObjects2= [];
gdjs.inicialCode.GDcargaObjects1= [];
gdjs.inicialCode.GDcargaObjects2= [];
gdjs.inicialCode.GDizquierdaObjects1= [];
gdjs.inicialCode.GDizquierdaObjects2= [];
gdjs.inicialCode.GDderechaObjects1= [];
gdjs.inicialCode.GDderechaObjects2= [];
gdjs.inicialCode.GDpuzzleObjects1= [];
gdjs.inicialCode.GDpuzzleObjects2= [];
gdjs.inicialCode.GDpuzzleCObjects1= [];
gdjs.inicialCode.GDpuzzleCObjects2= [];
gdjs.inicialCode.GDcomienzopuzzleObjects1= [];
gdjs.inicialCode.GDcomienzopuzzleObjects2= [];
gdjs.inicialCode.GDpisoObjects1= [];
gdjs.inicialCode.GDpisoObjects2= [];
gdjs.inicialCode.GDtechoObjects1= [];
gdjs.inicialCode.GDtechoObjects2= [];
gdjs.inicialCode.GDpuertaizquierdaObjects1= [];
gdjs.inicialCode.GDpuertaizquierdaObjects2= [];
gdjs.inicialCode.GDpuertaderechaObjects1= [];
gdjs.inicialCode.GDpuertaderechaObjects2= [];
gdjs.inicialCode.GDperdisteObjects1= [];
gdjs.inicialCode.GDperdisteObjects2= [];


gdjs.inicialCode.asyncCallback20631852 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.inicialCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala1", false);
}gdjs.inicialCode.localVariables.length = 0;
}
gdjs.inicialCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.inicialCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.inicialCode.asyncCallback20631852(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.inicialCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("iniciar"), gdjs.inicialCode.GDiniciarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.inicialCode.GDiniciarObjects1.length;i<l;++i) {
    if ( gdjs.inicialCode.GDiniciarObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.inicialCode.GDiniciarObjects1[k] = gdjs.inicialCode.GDiniciarObjects1[i];
        ++k;
    }
}
gdjs.inicialCode.GDiniciarObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.inicialCode.GDcargaObjects1);
{for(var i = 0, len = gdjs.inicialCode.GDcargaObjects1.length ;i < len;++i) {
    gdjs.inicialCode.GDcargaObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 4, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.inicialCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.inicialCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.inicialCode.GDfondoObjects1.length = 0;
gdjs.inicialCode.GDfondoObjects2.length = 0;
gdjs.inicialCode.GDiniciarObjects1.length = 0;
gdjs.inicialCode.GDiniciarObjects2.length = 0;
gdjs.inicialCode.GDpersonajeObjects1.length = 0;
gdjs.inicialCode.GDpersonajeObjects2.length = 0;
gdjs.inicialCode.GDcargaObjects1.length = 0;
gdjs.inicialCode.GDcargaObjects2.length = 0;
gdjs.inicialCode.GDizquierdaObjects1.length = 0;
gdjs.inicialCode.GDizquierdaObjects2.length = 0;
gdjs.inicialCode.GDderechaObjects1.length = 0;
gdjs.inicialCode.GDderechaObjects2.length = 0;
gdjs.inicialCode.GDpuzzleObjects1.length = 0;
gdjs.inicialCode.GDpuzzleObjects2.length = 0;
gdjs.inicialCode.GDpuzzleCObjects1.length = 0;
gdjs.inicialCode.GDpuzzleCObjects2.length = 0;
gdjs.inicialCode.GDcomienzopuzzleObjects1.length = 0;
gdjs.inicialCode.GDcomienzopuzzleObjects2.length = 0;
gdjs.inicialCode.GDpisoObjects1.length = 0;
gdjs.inicialCode.GDpisoObjects2.length = 0;
gdjs.inicialCode.GDtechoObjects1.length = 0;
gdjs.inicialCode.GDtechoObjects2.length = 0;
gdjs.inicialCode.GDpuertaizquierdaObjects1.length = 0;
gdjs.inicialCode.GDpuertaizquierdaObjects2.length = 0;
gdjs.inicialCode.GDpuertaderechaObjects1.length = 0;
gdjs.inicialCode.GDpuertaderechaObjects2.length = 0;
gdjs.inicialCode.GDperdisteObjects1.length = 0;
gdjs.inicialCode.GDperdisteObjects2.length = 0;

gdjs.inicialCode.eventsList1(runtimeScene);
gdjs.inicialCode.GDfondoObjects1.length = 0;
gdjs.inicialCode.GDfondoObjects2.length = 0;
gdjs.inicialCode.GDiniciarObjects1.length = 0;
gdjs.inicialCode.GDiniciarObjects2.length = 0;
gdjs.inicialCode.GDpersonajeObjects1.length = 0;
gdjs.inicialCode.GDpersonajeObjects2.length = 0;
gdjs.inicialCode.GDcargaObjects1.length = 0;
gdjs.inicialCode.GDcargaObjects2.length = 0;
gdjs.inicialCode.GDizquierdaObjects1.length = 0;
gdjs.inicialCode.GDizquierdaObjects2.length = 0;
gdjs.inicialCode.GDderechaObjects1.length = 0;
gdjs.inicialCode.GDderechaObjects2.length = 0;
gdjs.inicialCode.GDpuzzleObjects1.length = 0;
gdjs.inicialCode.GDpuzzleObjects2.length = 0;
gdjs.inicialCode.GDpuzzleCObjects1.length = 0;
gdjs.inicialCode.GDpuzzleCObjects2.length = 0;
gdjs.inicialCode.GDcomienzopuzzleObjects1.length = 0;
gdjs.inicialCode.GDcomienzopuzzleObjects2.length = 0;
gdjs.inicialCode.GDpisoObjects1.length = 0;
gdjs.inicialCode.GDpisoObjects2.length = 0;
gdjs.inicialCode.GDtechoObjects1.length = 0;
gdjs.inicialCode.GDtechoObjects2.length = 0;
gdjs.inicialCode.GDpuertaizquierdaObjects1.length = 0;
gdjs.inicialCode.GDpuertaizquierdaObjects2.length = 0;
gdjs.inicialCode.GDpuertaderechaObjects1.length = 0;
gdjs.inicialCode.GDpuertaderechaObjects2.length = 0;
gdjs.inicialCode.GDperdisteObjects1.length = 0;
gdjs.inicialCode.GDperdisteObjects2.length = 0;


return;

}

gdjs['inicialCode'] = gdjs.inicialCode;
