gdjs.lvl1Code = {};
gdjs.lvl1Code.localVariables = [];
gdjs.lvl1Code.GDfondoObjects1= [];
gdjs.lvl1Code.GDfondoObjects2= [];
gdjs.lvl1Code.GDfondoObjects3= [];
gdjs.lvl1Code.GDfondoObjects4= [];
gdjs.lvl1Code.GDfondoObjects5= [];
gdjs.lvl1Code.GDfondoObjects6= [];
gdjs.lvl1Code.GDpisoObjects1= [];
gdjs.lvl1Code.GDpisoObjects2= [];
gdjs.lvl1Code.GDpisoObjects3= [];
gdjs.lvl1Code.GDpisoObjects4= [];
gdjs.lvl1Code.GDpisoObjects5= [];
gdjs.lvl1Code.GDpisoObjects6= [];
gdjs.lvl1Code.GDladrilloObjects1= [];
gdjs.lvl1Code.GDladrilloObjects2= [];
gdjs.lvl1Code.GDladrilloObjects3= [];
gdjs.lvl1Code.GDladrilloObjects4= [];
gdjs.lvl1Code.GDladrilloObjects5= [];
gdjs.lvl1Code.GDladrilloObjects6= [];
gdjs.lvl1Code.GDladrilloestrellaObjects1= [];
gdjs.lvl1Code.GDladrilloestrellaObjects2= [];
gdjs.lvl1Code.GDladrilloestrellaObjects3= [];
gdjs.lvl1Code.GDladrilloestrellaObjects4= [];
gdjs.lvl1Code.GDladrilloestrellaObjects5= [];
gdjs.lvl1Code.GDladrilloestrellaObjects6= [];
gdjs.lvl1Code.GDsombraObjects1= [];
gdjs.lvl1Code.GDsombraObjects2= [];
gdjs.lvl1Code.GDsombraObjects3= [];
gdjs.lvl1Code.GDsombraObjects4= [];
gdjs.lvl1Code.GDsombraObjects5= [];
gdjs.lvl1Code.GDsombraObjects6= [];
gdjs.lvl1Code.GDestrellitaObjects1= [];
gdjs.lvl1Code.GDestrellitaObjects2= [];
gdjs.lvl1Code.GDestrellitaObjects3= [];
gdjs.lvl1Code.GDestrellitaObjects4= [];
gdjs.lvl1Code.GDestrellitaObjects5= [];
gdjs.lvl1Code.GDestrellitaObjects6= [];
gdjs.lvl1Code.GDpisoestrellitaObjects1= [];
gdjs.lvl1Code.GDpisoestrellitaObjects2= [];
gdjs.lvl1Code.GDpisoestrellitaObjects3= [];
gdjs.lvl1Code.GDpisoestrellitaObjects4= [];
gdjs.lvl1Code.GDpisoestrellitaObjects5= [];
gdjs.lvl1Code.GDpisoestrellitaObjects6= [];
gdjs.lvl1Code.GDStage_95951Objects1= [];
gdjs.lvl1Code.GDStage_95951Objects2= [];
gdjs.lvl1Code.GDStage_95951Objects3= [];
gdjs.lvl1Code.GDStage_95951Objects4= [];
gdjs.lvl1Code.GDStage_95951Objects5= [];
gdjs.lvl1Code.GDStage_95951Objects6= [];
gdjs.lvl1Code.GDcargaObjects1= [];
gdjs.lvl1Code.GDcargaObjects2= [];
gdjs.lvl1Code.GDcargaObjects3= [];
gdjs.lvl1Code.GDcargaObjects4= [];
gdjs.lvl1Code.GDcargaObjects5= [];
gdjs.lvl1Code.GDcargaObjects6= [];
gdjs.lvl1Code.GDsalirObjects1= [];
gdjs.lvl1Code.GDsalirObjects2= [];
gdjs.lvl1Code.GDsalirObjects3= [];
gdjs.lvl1Code.GDsalirObjects4= [];
gdjs.lvl1Code.GDsalirObjects5= [];
gdjs.lvl1Code.GDsalirObjects6= [];
gdjs.lvl1Code.GDclearObjects1= [];
gdjs.lvl1Code.GDclearObjects2= [];
gdjs.lvl1Code.GDclearObjects3= [];
gdjs.lvl1Code.GDclearObjects4= [];
gdjs.lvl1Code.GDclearObjects5= [];
gdjs.lvl1Code.GDclearObjects6= [];
gdjs.lvl1Code.GDclickObjects1= [];
gdjs.lvl1Code.GDclickObjects2= [];
gdjs.lvl1Code.GDclickObjects3= [];
gdjs.lvl1Code.GDclickObjects4= [];
gdjs.lvl1Code.GDclickObjects5= [];
gdjs.lvl1Code.GDclickObjects6= [];


gdjs.lvl1Code.asyncCallback27987972 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl1Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("salir"), gdjs.lvl1Code.GDsalirObjects2);

{for(var i = 0, len = gdjs.lvl1Code.GDsalirObjects2.length ;i < len;++i) {
    gdjs.lvl1Code.GDsalirObjects2[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}gdjs.lvl1Code.localVariables.length = 0;
}
gdjs.lvl1Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl1Code.localVariables);
for (const obj of gdjs.lvl1Code.GDsalirObjects1) asyncObjectsList.addObject("salir", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.lvl1Code.asyncCallback27987972(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl1Code.asyncCallback27990084 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl1Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "niveles", false);
}gdjs.lvl1Code.localVariables.length = 0;
}
gdjs.lvl1Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl1Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.lvl1Code.asyncCallback27990084(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl1Code.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(6).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(true);
}}

}


};gdjs.lvl1Code.asyncCallback27240900 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl1Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "niveles", false);
}
{ //Subevents
gdjs.lvl1Code.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.lvl1Code.localVariables.length = 0;
}
gdjs.lvl1Code.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl1Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.lvl1Code.asyncCallback27240900(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl1Code.asyncCallback27239980 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl1Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.lvl1Code.GDcargaObjects4);
gdjs.copyArray(runtimeScene.getObjects("clear"), gdjs.lvl1Code.GDclearObjects4);
{for(var i = 0, len = gdjs.lvl1Code.GDclearObjects4.length ;i < len;++i) {
    gdjs.lvl1Code.GDclearObjects4[i].hide(false);
}
}{for(var i = 0, len = gdjs.lvl1Code.GDcargaObjects4.length ;i < len;++i) {
    gdjs.lvl1Code.GDcargaObjects4[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 4, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.lvl1Code.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.lvl1Code.localVariables.length = 0;
}
gdjs.lvl1Code.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl1Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.lvl1Code.asyncCallback27239980(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl1Code.asyncCallback27239348 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl1Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("estrellita"), gdjs.lvl1Code.GDestrellitaObjects3);
{for(var i = 0, len = gdjs.lvl1Code.GDestrellitaObjects3.length ;i < len;++i) {
    gdjs.lvl1Code.GDestrellitaObjects3[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
{ //Subevents
gdjs.lvl1Code.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.lvl1Code.localVariables.length = 0;
}
gdjs.lvl1Code.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl1Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.lvl1Code.asyncCallback27239348(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl1Code.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Stage_1"), gdjs.lvl1Code.GDStage_95951Objects2);
gdjs.copyArray(runtimeScene.getObjects("clear"), gdjs.lvl1Code.GDclearObjects2);
gdjs.copyArray(runtimeScene.getObjects("estrellita"), gdjs.lvl1Code.GDestrellitaObjects2);
gdjs.copyArray(runtimeScene.getObjects("ladrillo"), gdjs.lvl1Code.GDladrilloObjects2);
gdjs.copyArray(runtimeScene.getObjects("ladrilloestrella"), gdjs.lvl1Code.GDladrilloestrellaObjects2);
gdjs.copyArray(runtimeScene.getObjects("sombra"), gdjs.lvl1Code.GDsombraObjects2);
{for(var i = 0, len = gdjs.lvl1Code.GDladrilloObjects2.length ;i < len;++i) {
    gdjs.lvl1Code.GDladrilloObjects2[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.lvl1Code.GDladrilloestrellaObjects2.length ;i < len;++i) {
    gdjs.lvl1Code.GDladrilloestrellaObjects2[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.lvl1Code.GDsombraObjects2.length ;i < len;++i) {
    gdjs.lvl1Code.GDsombraObjects2[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.lvl1Code.GDestrellitaObjects2.length ;i < len;++i) {
    gdjs.lvl1Code.GDestrellitaObjects2[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.lvl1Code.GDclearObjects2.length ;i < len;++i) {
    gdjs.lvl1Code.GDclearObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.lvl1Code.GDStage_95951Objects2.length ;i < len;++i) {
    gdjs.lvl1Code.GDStage_95951Objects2[i].getBehavior("PlatformerObject").ignoreDefaultControls(false);
}
}{gdjs.evtTools.input.showCursor(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ladrillo"), gdjs.lvl1Code.GDladrilloObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl1Code.GDladrilloObjects2.length;i<l;++i) {
    if ( gdjs.lvl1Code.GDladrilloObjects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lvl1Code.GDladrilloObjects2[k] = gdjs.lvl1Code.GDladrilloObjects2[i];
        ++k;
    }
}
gdjs.lvl1Code.GDladrilloObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.lvl1Code.GDladrilloObjects2 */
{for(var i = 0, len = gdjs.lvl1Code.GDladrilloObjects2.length ;i < len;++i) {
    gdjs.lvl1Code.GDladrilloObjects2[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ladrilloestrella"), gdjs.lvl1Code.GDladrilloestrellaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl1Code.GDladrilloestrellaObjects2.length;i<l;++i) {
    if ( gdjs.lvl1Code.GDladrilloestrellaObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lvl1Code.GDladrilloestrellaObjects2[k] = gdjs.lvl1Code.GDladrilloestrellaObjects2[i];
        ++k;
    }
}
gdjs.lvl1Code.GDladrilloestrellaObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.lvl1Code.GDladrilloestrellaObjects2 */
gdjs.copyArray(runtimeScene.getObjects("salir"), gdjs.lvl1Code.GDsalirObjects2);
{for(var i = 0, len = gdjs.lvl1Code.GDladrilloestrellaObjects2.length ;i < len;++i) {
    gdjs.lvl1Code.GDladrilloestrellaObjects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.lvl1Code.GDsalirObjects2.length ;i < len;++i) {
    gdjs.lvl1Code.GDsalirObjects2[i].hide();
}
}
{ //Subevents
gdjs.lvl1Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("sombra"), gdjs.lvl1Code.GDsombraObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl1Code.GDsombraObjects1.length;i<l;++i) {
    if ( gdjs.lvl1Code.GDsombraObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lvl1Code.GDsombraObjects1[k] = gdjs.lvl1Code.GDsombraObjects1[i];
        ++k;
    }
}
gdjs.lvl1Code.GDsombraObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.lvl1Code.GDsombraObjects1 */
{for(var i = 0, len = gdjs.lvl1Code.GDsombraObjects1.length ;i < len;++i) {
    gdjs.lvl1Code.GDsombraObjects1[i].getBehavior("Animation").resumeAnimation();
}
}}

}


};gdjs.lvl1Code.asyncCallback27245996 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl1Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Stage_1"), gdjs.lvl1Code.GDStage_95951Objects3);

{for(var i = 0, len = gdjs.lvl1Code.GDStage_95951Objects3.length ;i < len;++i) {
    gdjs.lvl1Code.GDStage_95951Objects3[i].deleteFromScene(runtimeScene);
}
}gdjs.lvl1Code.localVariables.length = 0;
}
gdjs.lvl1Code.eventsList7 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl1Code.localVariables);
for (const obj of gdjs.lvl1Code.GDStage_95951Objects2) asyncObjectsList.addObject("Stage_1", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.lvl1Code.asyncCallback27245996(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl1Code.asyncCallback27245340 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl1Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Stage_1"), gdjs.lvl1Code.GDStage_95951Objects2);

{for(var i = 0, len = gdjs.lvl1Code.GDStage_95951Objects2.length ;i < len;++i) {
    gdjs.lvl1Code.GDStage_95951Objects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
{ //Subevents
gdjs.lvl1Code.eventsList7(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.lvl1Code.localVariables.length = 0;
}
gdjs.lvl1Code.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl1Code.localVariables);
for (const obj of gdjs.lvl1Code.GDStage_95951Objects1) asyncObjectsList.addObject("Stage_1", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.lvl1Code.asyncCallback27245340(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl1Code.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Stage_1"), gdjs.lvl1Code.GDStage_95951Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl1Code.GDStage_95951Objects2.length;i<l;++i) {
    if ( gdjs.lvl1Code.GDStage_95951Objects2[i].getX() < 329 ) {
        isConditionTrue_0 = true;
        gdjs.lvl1Code.GDStage_95951Objects2[k] = gdjs.lvl1Code.GDStage_95951Objects2[i];
        ++k;
    }
}
gdjs.lvl1Code.GDStage_95951Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.lvl1Code.GDStage_95951Objects2 */
{for(var i = 0, len = gdjs.lvl1Code.GDStage_95951Objects2.length ;i < len;++i) {
    gdjs.lvl1Code.GDStage_95951Objects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Stage_1"), gdjs.lvl1Code.GDStage_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl1Code.GDStage_95951Objects1.length;i<l;++i) {
    if ( gdjs.lvl1Code.GDStage_95951Objects1[i].getX() >= 329 ) {
        isConditionTrue_0 = true;
        gdjs.lvl1Code.GDStage_95951Objects1[k] = gdjs.lvl1Code.GDStage_95951Objects1[i];
        ++k;
    }
}
gdjs.lvl1Code.GDStage_95951Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.lvl1Code.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.lvl1Code.mapOfGDgdjs_9546lvl1Code_9546GDestrellitaObjects1Objects = Hashtable.newFrom({"estrellita": gdjs.lvl1Code.GDestrellitaObjects1});
gdjs.lvl1Code.mapOfGDgdjs_9546lvl1Code_9546GDpisoObjects1Objects = Hashtable.newFrom({"piso": gdjs.lvl1Code.GDpisoObjects1});
gdjs.lvl1Code.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("estrellita"), gdjs.lvl1Code.GDestrellitaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl1Code.GDestrellitaObjects2.length;i<l;++i) {
    if ( gdjs.lvl1Code.GDestrellitaObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.lvl1Code.GDestrellitaObjects2[k] = gdjs.lvl1Code.GDestrellitaObjects2[i];
        ++k;
    }
}
gdjs.lvl1Code.GDestrellitaObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.lvl1Code.GDestrellitaObjects2 */
{for(var i = 0, len = gdjs.lvl1Code.GDestrellitaObjects2.length ;i < len;++i) {
    gdjs.lvl1Code.GDestrellitaObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("estrellita"), gdjs.lvl1Code.GDestrellitaObjects1);
gdjs.copyArray(runtimeScene.getObjects("piso"), gdjs.lvl1Code.GDpisoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.platform.isOnPlatform(gdjs.lvl1Code.mapOfGDgdjs_9546lvl1Code_9546GDestrellitaObjects1Objects, "PlatformerObject", gdjs.lvl1Code.mapOfGDgdjs_9546lvl1Code_9546GDpisoObjects1Objects, false);
if (isConditionTrue_0) {
/* Reuse gdjs.lvl1Code.GDestrellitaObjects1 */
{for(var i = 0, len = gdjs.lvl1Code.GDestrellitaObjects1.length ;i < len;++i) {
    gdjs.lvl1Code.GDestrellitaObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};gdjs.lvl1Code.eventsList11 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.lvl1Code.GDcargaObjects1);
gdjs.copyArray(runtimeScene.getObjects("salir"), gdjs.lvl1Code.GDsalirObjects1);
{for(var i = 0, len = gdjs.lvl1Code.GDsalirObjects1.length ;i < len;++i) {
    gdjs.lvl1Code.GDsalirObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.lvl1Code.GDcargaObjects1.length ;i < len;++i) {
    gdjs.lvl1Code.GDcargaObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Flash", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.lvl1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("salir"), gdjs.lvl1Code.GDsalirObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl1Code.GDsalirObjects1.length;i<l;++i) {
    if ( gdjs.lvl1Code.GDsalirObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lvl1Code.GDsalirObjects1[k] = gdjs.lvl1Code.GDsalirObjects1[i];
        ++k;
    }
}
gdjs.lvl1Code.GDsalirObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.lvl1Code.GDcargaObjects1);
{for(var i = 0, len = gdjs.lvl1Code.GDcargaObjects1.length ;i < len;++i) {
    gdjs.lvl1Code.GDcargaObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Flash", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(0);
}
{ //Subevents
gdjs.lvl1Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.lvl1Code.eventsList6(runtimeScene);
}


{


gdjs.lvl1Code.eventsList9(runtimeScene);
}


{


gdjs.lvl1Code.eventsList10(runtimeScene);
}


};

gdjs.lvl1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.lvl1Code.GDfondoObjects1.length = 0;
gdjs.lvl1Code.GDfondoObjects2.length = 0;
gdjs.lvl1Code.GDfondoObjects3.length = 0;
gdjs.lvl1Code.GDfondoObjects4.length = 0;
gdjs.lvl1Code.GDfondoObjects5.length = 0;
gdjs.lvl1Code.GDfondoObjects6.length = 0;
gdjs.lvl1Code.GDpisoObjects1.length = 0;
gdjs.lvl1Code.GDpisoObjects2.length = 0;
gdjs.lvl1Code.GDpisoObjects3.length = 0;
gdjs.lvl1Code.GDpisoObjects4.length = 0;
gdjs.lvl1Code.GDpisoObjects5.length = 0;
gdjs.lvl1Code.GDpisoObjects6.length = 0;
gdjs.lvl1Code.GDladrilloObjects1.length = 0;
gdjs.lvl1Code.GDladrilloObjects2.length = 0;
gdjs.lvl1Code.GDladrilloObjects3.length = 0;
gdjs.lvl1Code.GDladrilloObjects4.length = 0;
gdjs.lvl1Code.GDladrilloObjects5.length = 0;
gdjs.lvl1Code.GDladrilloObjects6.length = 0;
gdjs.lvl1Code.GDladrilloestrellaObjects1.length = 0;
gdjs.lvl1Code.GDladrilloestrellaObjects2.length = 0;
gdjs.lvl1Code.GDladrilloestrellaObjects3.length = 0;
gdjs.lvl1Code.GDladrilloestrellaObjects4.length = 0;
gdjs.lvl1Code.GDladrilloestrellaObjects5.length = 0;
gdjs.lvl1Code.GDladrilloestrellaObjects6.length = 0;
gdjs.lvl1Code.GDsombraObjects1.length = 0;
gdjs.lvl1Code.GDsombraObjects2.length = 0;
gdjs.lvl1Code.GDsombraObjects3.length = 0;
gdjs.lvl1Code.GDsombraObjects4.length = 0;
gdjs.lvl1Code.GDsombraObjects5.length = 0;
gdjs.lvl1Code.GDsombraObjects6.length = 0;
gdjs.lvl1Code.GDestrellitaObjects1.length = 0;
gdjs.lvl1Code.GDestrellitaObjects2.length = 0;
gdjs.lvl1Code.GDestrellitaObjects3.length = 0;
gdjs.lvl1Code.GDestrellitaObjects4.length = 0;
gdjs.lvl1Code.GDestrellitaObjects5.length = 0;
gdjs.lvl1Code.GDestrellitaObjects6.length = 0;
gdjs.lvl1Code.GDpisoestrellitaObjects1.length = 0;
gdjs.lvl1Code.GDpisoestrellitaObjects2.length = 0;
gdjs.lvl1Code.GDpisoestrellitaObjects3.length = 0;
gdjs.lvl1Code.GDpisoestrellitaObjects4.length = 0;
gdjs.lvl1Code.GDpisoestrellitaObjects5.length = 0;
gdjs.lvl1Code.GDpisoestrellitaObjects6.length = 0;
gdjs.lvl1Code.GDStage_95951Objects1.length = 0;
gdjs.lvl1Code.GDStage_95951Objects2.length = 0;
gdjs.lvl1Code.GDStage_95951Objects3.length = 0;
gdjs.lvl1Code.GDStage_95951Objects4.length = 0;
gdjs.lvl1Code.GDStage_95951Objects5.length = 0;
gdjs.lvl1Code.GDStage_95951Objects6.length = 0;
gdjs.lvl1Code.GDcargaObjects1.length = 0;
gdjs.lvl1Code.GDcargaObjects2.length = 0;
gdjs.lvl1Code.GDcargaObjects3.length = 0;
gdjs.lvl1Code.GDcargaObjects4.length = 0;
gdjs.lvl1Code.GDcargaObjects5.length = 0;
gdjs.lvl1Code.GDcargaObjects6.length = 0;
gdjs.lvl1Code.GDsalirObjects1.length = 0;
gdjs.lvl1Code.GDsalirObjects2.length = 0;
gdjs.lvl1Code.GDsalirObjects3.length = 0;
gdjs.lvl1Code.GDsalirObjects4.length = 0;
gdjs.lvl1Code.GDsalirObjects5.length = 0;
gdjs.lvl1Code.GDsalirObjects6.length = 0;
gdjs.lvl1Code.GDclearObjects1.length = 0;
gdjs.lvl1Code.GDclearObjects2.length = 0;
gdjs.lvl1Code.GDclearObjects3.length = 0;
gdjs.lvl1Code.GDclearObjects4.length = 0;
gdjs.lvl1Code.GDclearObjects5.length = 0;
gdjs.lvl1Code.GDclearObjects6.length = 0;
gdjs.lvl1Code.GDclickObjects1.length = 0;
gdjs.lvl1Code.GDclickObjects2.length = 0;
gdjs.lvl1Code.GDclickObjects3.length = 0;
gdjs.lvl1Code.GDclickObjects4.length = 0;
gdjs.lvl1Code.GDclickObjects5.length = 0;
gdjs.lvl1Code.GDclickObjects6.length = 0;

gdjs.lvl1Code.eventsList11(runtimeScene);
gdjs.lvl1Code.GDfondoObjects1.length = 0;
gdjs.lvl1Code.GDfondoObjects2.length = 0;
gdjs.lvl1Code.GDfondoObjects3.length = 0;
gdjs.lvl1Code.GDfondoObjects4.length = 0;
gdjs.lvl1Code.GDfondoObjects5.length = 0;
gdjs.lvl1Code.GDfondoObjects6.length = 0;
gdjs.lvl1Code.GDpisoObjects1.length = 0;
gdjs.lvl1Code.GDpisoObjects2.length = 0;
gdjs.lvl1Code.GDpisoObjects3.length = 0;
gdjs.lvl1Code.GDpisoObjects4.length = 0;
gdjs.lvl1Code.GDpisoObjects5.length = 0;
gdjs.lvl1Code.GDpisoObjects6.length = 0;
gdjs.lvl1Code.GDladrilloObjects1.length = 0;
gdjs.lvl1Code.GDladrilloObjects2.length = 0;
gdjs.lvl1Code.GDladrilloObjects3.length = 0;
gdjs.lvl1Code.GDladrilloObjects4.length = 0;
gdjs.lvl1Code.GDladrilloObjects5.length = 0;
gdjs.lvl1Code.GDladrilloObjects6.length = 0;
gdjs.lvl1Code.GDladrilloestrellaObjects1.length = 0;
gdjs.lvl1Code.GDladrilloestrellaObjects2.length = 0;
gdjs.lvl1Code.GDladrilloestrellaObjects3.length = 0;
gdjs.lvl1Code.GDladrilloestrellaObjects4.length = 0;
gdjs.lvl1Code.GDladrilloestrellaObjects5.length = 0;
gdjs.lvl1Code.GDladrilloestrellaObjects6.length = 0;
gdjs.lvl1Code.GDsombraObjects1.length = 0;
gdjs.lvl1Code.GDsombraObjects2.length = 0;
gdjs.lvl1Code.GDsombraObjects3.length = 0;
gdjs.lvl1Code.GDsombraObjects4.length = 0;
gdjs.lvl1Code.GDsombraObjects5.length = 0;
gdjs.lvl1Code.GDsombraObjects6.length = 0;
gdjs.lvl1Code.GDestrellitaObjects1.length = 0;
gdjs.lvl1Code.GDestrellitaObjects2.length = 0;
gdjs.lvl1Code.GDestrellitaObjects3.length = 0;
gdjs.lvl1Code.GDestrellitaObjects4.length = 0;
gdjs.lvl1Code.GDestrellitaObjects5.length = 0;
gdjs.lvl1Code.GDestrellitaObjects6.length = 0;
gdjs.lvl1Code.GDpisoestrellitaObjects1.length = 0;
gdjs.lvl1Code.GDpisoestrellitaObjects2.length = 0;
gdjs.lvl1Code.GDpisoestrellitaObjects3.length = 0;
gdjs.lvl1Code.GDpisoestrellitaObjects4.length = 0;
gdjs.lvl1Code.GDpisoestrellitaObjects5.length = 0;
gdjs.lvl1Code.GDpisoestrellitaObjects6.length = 0;
gdjs.lvl1Code.GDStage_95951Objects1.length = 0;
gdjs.lvl1Code.GDStage_95951Objects2.length = 0;
gdjs.lvl1Code.GDStage_95951Objects3.length = 0;
gdjs.lvl1Code.GDStage_95951Objects4.length = 0;
gdjs.lvl1Code.GDStage_95951Objects5.length = 0;
gdjs.lvl1Code.GDStage_95951Objects6.length = 0;
gdjs.lvl1Code.GDcargaObjects1.length = 0;
gdjs.lvl1Code.GDcargaObjects2.length = 0;
gdjs.lvl1Code.GDcargaObjects3.length = 0;
gdjs.lvl1Code.GDcargaObjects4.length = 0;
gdjs.lvl1Code.GDcargaObjects5.length = 0;
gdjs.lvl1Code.GDcargaObjects6.length = 0;
gdjs.lvl1Code.GDsalirObjects1.length = 0;
gdjs.lvl1Code.GDsalirObjects2.length = 0;
gdjs.lvl1Code.GDsalirObjects3.length = 0;
gdjs.lvl1Code.GDsalirObjects4.length = 0;
gdjs.lvl1Code.GDsalirObjects5.length = 0;
gdjs.lvl1Code.GDsalirObjects6.length = 0;
gdjs.lvl1Code.GDclearObjects1.length = 0;
gdjs.lvl1Code.GDclearObjects2.length = 0;
gdjs.lvl1Code.GDclearObjects3.length = 0;
gdjs.lvl1Code.GDclearObjects4.length = 0;
gdjs.lvl1Code.GDclearObjects5.length = 0;
gdjs.lvl1Code.GDclearObjects6.length = 0;
gdjs.lvl1Code.GDclickObjects1.length = 0;
gdjs.lvl1Code.GDclickObjects2.length = 0;
gdjs.lvl1Code.GDclickObjects3.length = 0;
gdjs.lvl1Code.GDclickObjects4.length = 0;
gdjs.lvl1Code.GDclickObjects5.length = 0;
gdjs.lvl1Code.GDclickObjects6.length = 0;


return;

}

gdjs['lvl1Code'] = gdjs.lvl1Code;
