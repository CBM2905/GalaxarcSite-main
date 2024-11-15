gdjs.inicioCode = {};
gdjs.inicioCode.localVariables = [];
gdjs.inicioCode.GDfondoObjects1= [];
gdjs.inicioCode.GDfondoObjects2= [];
gdjs.inicioCode.GDtituloObjects1= [];
gdjs.inicioCode.GDtituloObjects2= [];
gdjs.inicioCode.GDjugarObjects1= [];
gdjs.inicioCode.GDjugarObjects2= [];
gdjs.inicioCode.GDresetObjects1= [];
gdjs.inicioCode.GDresetObjects2= [];
gdjs.inicioCode.GDtextoObjects1= [];
gdjs.inicioCode.GDtextoObjects2= [];
gdjs.inicioCode.GDtexto2Objects1= [];
gdjs.inicioCode.GDtexto2Objects2= [];
gdjs.inicioCode.GDtexto3Objects1= [];
gdjs.inicioCode.GDtexto3Objects2= [];
gdjs.inicioCode.GDcargaObjects1= [];
gdjs.inicioCode.GDcargaObjects2= [];
gdjs.inicioCode.GDsalirObjects1= [];
gdjs.inicioCode.GDsalirObjects2= [];
gdjs.inicioCode.GDclearObjects1= [];
gdjs.inicioCode.GDclearObjects2= [];
gdjs.inicioCode.GDclickObjects1= [];
gdjs.inicioCode.GDclickObjects2= [];


gdjs.inicioCode.asyncCallback27987972 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.inicioCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("salir"), gdjs.inicioCode.GDsalirObjects2);

{for(var i = 0, len = gdjs.inicioCode.GDsalirObjects2.length ;i < len;++i) {
    gdjs.inicioCode.GDsalirObjects2[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}gdjs.inicioCode.localVariables.length = 0;
}
gdjs.inicioCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.inicioCode.localVariables);
for (const obj of gdjs.inicioCode.GDsalirObjects1) asyncObjectsList.addObject("salir", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.inicioCode.asyncCallback27987972(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.inicioCode.asyncCallback27080044 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.inicioCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "niveles", false);
}gdjs.inicioCode.localVariables.length = 0;
}
gdjs.inicioCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.inicioCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.inicioCode.asyncCallback27080044(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.inicioCode.eventsList2 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.inicioCode.GDcargaObjects1);
gdjs.copyArray(runtimeScene.getObjects("salir"), gdjs.inicioCode.GDsalirObjects1);
{for(var i = 0, len = gdjs.inicioCode.GDsalirObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDsalirObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.inicioCode.GDcargaObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDcargaObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Flash", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.inicioCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("jugar"), gdjs.inicioCode.GDjugarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.inicioCode.GDjugarObjects1.length;i<l;++i) {
    if ( gdjs.inicioCode.GDjugarObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.inicioCode.GDjugarObjects1[k] = gdjs.inicioCode.GDjugarObjects1[i];
        ++k;
    }
}
gdjs.inicioCode.GDjugarObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.inicioCode.GDcargaObjects1);
{for(var i = 0, len = gdjs.inicioCode.GDcargaObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDcargaObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 3, "Flash", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.inicioCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.inicioCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.inicioCode.GDfondoObjects1.length = 0;
gdjs.inicioCode.GDfondoObjects2.length = 0;
gdjs.inicioCode.GDtituloObjects1.length = 0;
gdjs.inicioCode.GDtituloObjects2.length = 0;
gdjs.inicioCode.GDjugarObjects1.length = 0;
gdjs.inicioCode.GDjugarObjects2.length = 0;
gdjs.inicioCode.GDresetObjects1.length = 0;
gdjs.inicioCode.GDresetObjects2.length = 0;
gdjs.inicioCode.GDtextoObjects1.length = 0;
gdjs.inicioCode.GDtextoObjects2.length = 0;
gdjs.inicioCode.GDtexto2Objects1.length = 0;
gdjs.inicioCode.GDtexto2Objects2.length = 0;
gdjs.inicioCode.GDtexto3Objects1.length = 0;
gdjs.inicioCode.GDtexto3Objects2.length = 0;
gdjs.inicioCode.GDcargaObjects1.length = 0;
gdjs.inicioCode.GDcargaObjects2.length = 0;
gdjs.inicioCode.GDsalirObjects1.length = 0;
gdjs.inicioCode.GDsalirObjects2.length = 0;
gdjs.inicioCode.GDclearObjects1.length = 0;
gdjs.inicioCode.GDclearObjects2.length = 0;
gdjs.inicioCode.GDclickObjects1.length = 0;
gdjs.inicioCode.GDclickObjects2.length = 0;

gdjs.inicioCode.eventsList2(runtimeScene);
gdjs.inicioCode.GDfondoObjects1.length = 0;
gdjs.inicioCode.GDfondoObjects2.length = 0;
gdjs.inicioCode.GDtituloObjects1.length = 0;
gdjs.inicioCode.GDtituloObjects2.length = 0;
gdjs.inicioCode.GDjugarObjects1.length = 0;
gdjs.inicioCode.GDjugarObjects2.length = 0;
gdjs.inicioCode.GDresetObjects1.length = 0;
gdjs.inicioCode.GDresetObjects2.length = 0;
gdjs.inicioCode.GDtextoObjects1.length = 0;
gdjs.inicioCode.GDtextoObjects2.length = 0;
gdjs.inicioCode.GDtexto2Objects1.length = 0;
gdjs.inicioCode.GDtexto2Objects2.length = 0;
gdjs.inicioCode.GDtexto3Objects1.length = 0;
gdjs.inicioCode.GDtexto3Objects2.length = 0;
gdjs.inicioCode.GDcargaObjects1.length = 0;
gdjs.inicioCode.GDcargaObjects2.length = 0;
gdjs.inicioCode.GDsalirObjects1.length = 0;
gdjs.inicioCode.GDsalirObjects2.length = 0;
gdjs.inicioCode.GDclearObjects1.length = 0;
gdjs.inicioCode.GDclearObjects2.length = 0;
gdjs.inicioCode.GDclickObjects1.length = 0;
gdjs.inicioCode.GDclickObjects2.length = 0;


return;

}

gdjs['inicioCode'] = gdjs.inicioCode;
