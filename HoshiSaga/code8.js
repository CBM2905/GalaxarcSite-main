gdjs.lvl7Code = {};
gdjs.lvl7Code.localVariables = [];
gdjs.lvl7Code.forEachIndex3 = 0;

gdjs.lvl7Code.forEachObjects3 = [];

gdjs.lvl7Code.forEachTemporary3 = null;

gdjs.lvl7Code.forEachTotalCount3 = 0;

gdjs.lvl7Code.GDfondoObjects1= [];
gdjs.lvl7Code.GDfondoObjects2= [];
gdjs.lvl7Code.GDfondoObjects3= [];
gdjs.lvl7Code.GDfondoObjects4= [];
gdjs.lvl7Code.GDfondoObjects5= [];
gdjs.lvl7Code.GDstage_95957Objects1= [];
gdjs.lvl7Code.GDstage_95957Objects2= [];
gdjs.lvl7Code.GDstage_95957Objects3= [];
gdjs.lvl7Code.GDstage_95957Objects4= [];
gdjs.lvl7Code.GDstage_95957Objects5= [];
gdjs.lvl7Code.GDpisoObjects1= [];
gdjs.lvl7Code.GDpisoObjects2= [];
gdjs.lvl7Code.GDpisoObjects3= [];
gdjs.lvl7Code.GDpisoObjects4= [];
gdjs.lvl7Code.GDpisoObjects5= [];
gdjs.lvl7Code.GDpesaObjects1= [];
gdjs.lvl7Code.GDpesaObjects2= [];
gdjs.lvl7Code.GDpesaObjects3= [];
gdjs.lvl7Code.GDpesaObjects4= [];
gdjs.lvl7Code.GDpesaObjects5= [];
gdjs.lvl7Code.GDKObjects1= [];
gdjs.lvl7Code.GDKObjects2= [];
gdjs.lvl7Code.GDKObjects3= [];
gdjs.lvl7Code.GDKObjects4= [];
gdjs.lvl7Code.GDKObjects5= [];
gdjs.lvl7Code.GDceroObjects1= [];
gdjs.lvl7Code.GDceroObjects2= [];
gdjs.lvl7Code.GDceroObjects3= [];
gdjs.lvl7Code.GDceroObjects4= [];
gdjs.lvl7Code.GDceroObjects5= [];
gdjs.lvl7Code.GDestrellaObjects1= [];
gdjs.lvl7Code.GDestrellaObjects2= [];
gdjs.lvl7Code.GDestrellaObjects3= [];
gdjs.lvl7Code.GDestrellaObjects4= [];
gdjs.lvl7Code.GDestrellaObjects5= [];
gdjs.lvl7Code.GDcargaObjects1= [];
gdjs.lvl7Code.GDcargaObjects2= [];
gdjs.lvl7Code.GDcargaObjects3= [];
gdjs.lvl7Code.GDcargaObjects4= [];
gdjs.lvl7Code.GDcargaObjects5= [];
gdjs.lvl7Code.GDsalirObjects1= [];
gdjs.lvl7Code.GDsalirObjects2= [];
gdjs.lvl7Code.GDsalirObjects3= [];
gdjs.lvl7Code.GDsalirObjects4= [];
gdjs.lvl7Code.GDsalirObjects5= [];
gdjs.lvl7Code.GDclearObjects1= [];
gdjs.lvl7Code.GDclearObjects2= [];
gdjs.lvl7Code.GDclearObjects3= [];
gdjs.lvl7Code.GDclearObjects4= [];
gdjs.lvl7Code.GDclearObjects5= [];
gdjs.lvl7Code.GDclickObjects1= [];
gdjs.lvl7Code.GDclickObjects2= [];
gdjs.lvl7Code.GDclickObjects3= [];
gdjs.lvl7Code.GDclickObjects4= [];
gdjs.lvl7Code.GDclickObjects5= [];


gdjs.lvl7Code.asyncCallback26568868 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl7Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("salir"), gdjs.lvl7Code.GDsalirObjects2);

{for(var i = 0, len = gdjs.lvl7Code.GDsalirObjects2.length ;i < len;++i) {
    gdjs.lvl7Code.GDsalirObjects2[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}gdjs.lvl7Code.localVariables.length = 0;
}
gdjs.lvl7Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl7Code.localVariables);
for (const obj of gdjs.lvl7Code.GDsalirObjects1) asyncObjectsList.addObject("salir", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.lvl7Code.asyncCallback26568868(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl7Code.asyncCallback26570292 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl7Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "niveles", false);
}gdjs.lvl7Code.localVariables.length = 0;
}
gdjs.lvl7Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl7Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.lvl7Code.asyncCallback26570292(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl7Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("K"), gdjs.lvl7Code.GDKObjects2);
gdjs.copyArray(runtimeScene.getObjects("cero"), gdjs.lvl7Code.GDceroObjects2);
gdjs.copyArray(runtimeScene.getObjects("clear"), gdjs.lvl7Code.GDclearObjects2);
gdjs.copyArray(runtimeScene.getObjects("estrella"), gdjs.lvl7Code.GDestrellaObjects2);
gdjs.copyArray(runtimeScene.getObjects("pesa"), gdjs.lvl7Code.GDpesaObjects2);
{for(var i = 0, len = gdjs.lvl7Code.GDclearObjects2.length ;i < len;++i) {
    gdjs.lvl7Code.GDclearObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.lvl7Code.GDpesaObjects2.length ;i < len;++i) {
    gdjs.lvl7Code.GDpesaObjects2[i].activateBehavior("Arrastrable", false);
}
}{for(var i = 0, len = gdjs.lvl7Code.GDestrellaObjects2.length ;i < len;++i) {
    gdjs.lvl7Code.GDestrellaObjects2[i].getBehavior("Animation").pauseAnimation();
}
}{gdjs.evtTools.input.showCursor(runtimeScene);
}{for(var i = 0, len = gdjs.lvl7Code.GDceroObjects2.length ;i < len;++i) {
    gdjs.lvl7Code.GDceroObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.lvl7Code.GDKObjects2.length ;i < len;++i) {
    gdjs.lvl7Code.GDKObjects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.doesSceneExist(runtimeScene, "lvl7");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("K"), gdjs.lvl7Code.GDKObjects1);
gdjs.copyArray(runtimeScene.getObjects("cero"), gdjs.lvl7Code.GDceroObjects1);
gdjs.copyArray(runtimeScene.getObjects("stage_7"), gdjs.lvl7Code.GDstage_95957Objects1);
{for(var i = 0, len = gdjs.lvl7Code.GDstage_95957Objects1.length ;i < len;++i) {
    gdjs.lvl7Code.GDstage_95957Objects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.lvl7Code.GDKObjects1.length ;i < len;++i) {
    gdjs.lvl7Code.GDKObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.lvl7Code.GDceroObjects1.length ;i < len;++i) {
    gdjs.lvl7Code.GDceroObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}}

}


};gdjs.lvl7Code.asyncCallback26221060 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl7Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("stage_7"), gdjs.lvl7Code.GDstage_95957Objects3);

{for(var i = 0, len = gdjs.lvl7Code.GDstage_95957Objects3.length ;i < len;++i) {
    gdjs.lvl7Code.GDstage_95957Objects3[i].deleteFromScene(runtimeScene);
}
}gdjs.lvl7Code.localVariables.length = 0;
}
gdjs.lvl7Code.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl7Code.localVariables);
for (const obj of gdjs.lvl7Code.GDstage_95957Objects2) asyncObjectsList.addObject("stage_7", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.lvl7Code.asyncCallback26221060(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl7Code.asyncCallback26220772 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl7Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("stage_7"), gdjs.lvl7Code.GDstage_95957Objects2);

{for(var i = 0, len = gdjs.lvl7Code.GDstage_95957Objects2.length ;i < len;++i) {
    gdjs.lvl7Code.GDstage_95957Objects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
{ //Subevents
gdjs.lvl7Code.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.lvl7Code.localVariables.length = 0;
}
gdjs.lvl7Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl7Code.localVariables);
for (const obj of gdjs.lvl7Code.GDstage_95957Objects1) asyncObjectsList.addObject("stage_7", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.lvl7Code.asyncCallback26220772(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl7Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("stage_7"), gdjs.lvl7Code.GDstage_95957Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl7Code.GDstage_95957Objects2.length;i<l;++i) {
    if ( gdjs.lvl7Code.GDstage_95957Objects2[i].getX() < 329 ) {
        isConditionTrue_0 = true;
        gdjs.lvl7Code.GDstage_95957Objects2[k] = gdjs.lvl7Code.GDstage_95957Objects2[i];
        ++k;
    }
}
gdjs.lvl7Code.GDstage_95957Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.lvl7Code.GDstage_95957Objects2 */
{for(var i = 0, len = gdjs.lvl7Code.GDstage_95957Objects2.length ;i < len;++i) {
    gdjs.lvl7Code.GDstage_95957Objects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("stage_7"), gdjs.lvl7Code.GDstage_95957Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl7Code.GDstage_95957Objects1.length;i<l;++i) {
    if ( gdjs.lvl7Code.GDstage_95957Objects1[i].getX() >= 329 ) {
        isConditionTrue_0 = true;
        gdjs.lvl7Code.GDstage_95957Objects1[k] = gdjs.lvl7Code.GDstage_95957Objects1[i];
        ++k;
    }
}
gdjs.lvl7Code.GDstage_95957Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.lvl7Code.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.lvl7Code.asyncCallback26222476 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl7Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("cero"), gdjs.lvl7Code.GDceroObjects5);

{for(var i = 0, len = gdjs.lvl7Code.GDceroObjects5.length ;i < len;++i) {
    gdjs.lvl7Code.GDceroObjects5[i].deleteFromScene(runtimeScene);
}
}gdjs.lvl7Code.localVariables.length = 0;
}
gdjs.lvl7Code.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl7Code.localVariables);
for (const obj of gdjs.lvl7Code.GDceroObjects3) asyncObjectsList.addObject("cero", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.lvl7Code.asyncCallback26222476(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl7Code.asyncCallback26223476 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl7Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("K"), gdjs.lvl7Code.GDKObjects3);

gdjs.copyArray(runtimeScene.getObjects("pesa"), gdjs.lvl7Code.GDpesaObjects3);
{for(var i = 0, len = gdjs.lvl7Code.GDKObjects3.length ;i < len;++i) {
    gdjs.lvl7Code.GDKObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.lvl7Code.GDpesaObjects3.length ;i < len;++i) {
    gdjs.lvl7Code.GDpesaObjects3[i].activateBehavior("Arrastrable", true);
}
}gdjs.lvl7Code.localVariables.length = 0;
}
gdjs.lvl7Code.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl7Code.localVariables);
for (const obj of gdjs.lvl7Code.GDKObjects2) asyncObjectsList.addObject("K", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.lvl7Code.asyncCallback26223476(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl7Code.eventsList8 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), false, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(7).setBoolean(true);
}}

}


};gdjs.lvl7Code.asyncCallback26226052 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl7Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "niveles", false);
}
{ //Subevents
gdjs.lvl7Code.eventsList8(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.lvl7Code.localVariables.length = 0;
}
gdjs.lvl7Code.eventsList9 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl7Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.lvl7Code.asyncCallback26226052(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl7Code.asyncCallback26225524 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl7Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.lvl7Code.GDcargaObjects2);
gdjs.copyArray(runtimeScene.getObjects("clear"), gdjs.lvl7Code.GDclearObjects2);
{for(var i = 0, len = gdjs.lvl7Code.GDclearObjects2.length ;i < len;++i) {
    gdjs.lvl7Code.GDclearObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.lvl7Code.GDcargaObjects2.length ;i < len;++i) {
    gdjs.lvl7Code.GDcargaObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 4, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.lvl7Code.eventsList9(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.lvl7Code.localVariables.length = 0;
}
gdjs.lvl7Code.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl7Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.lvl7Code.asyncCallback26225524(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl7Code.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("cero"), gdjs.lvl7Code.GDceroObjects2);

for (gdjs.lvl7Code.forEachIndex3 = 0;gdjs.lvl7Code.forEachIndex3 < gdjs.lvl7Code.GDceroObjects2.length;++gdjs.lvl7Code.forEachIndex3) {
gdjs.lvl7Code.GDceroObjects3.length = 0;


gdjs.lvl7Code.forEachTemporary3 = gdjs.lvl7Code.GDceroObjects2[gdjs.lvl7Code.forEachIndex3];
gdjs.lvl7Code.GDceroObjects3.push(gdjs.lvl7Code.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl7Code.GDceroObjects3.length;i<l;++i) {
    if ( gdjs.lvl7Code.GDceroObjects3[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lvl7Code.GDceroObjects3[k] = gdjs.lvl7Code.GDceroObjects3[i];
        ++k;
    }
}
gdjs.lvl7Code.GDceroObjects3.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.lvl7Code.GDceroObjects3.length ;i < len;++i) {
    gdjs.lvl7Code.GDceroObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.lvl7Code.GDceroObjects3.length ;i < len;++i) {
    gdjs.lvl7Code.GDceroObjects3[i].getBehavior("PlatformerObject").setGravity(1000);
}
}
{ //Subevents: 
gdjs.lvl7Code.eventsList6(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("K"), gdjs.lvl7Code.GDKObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl7Code.GDKObjects2.length;i<l;++i) {
    if ( gdjs.lvl7Code.GDKObjects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lvl7Code.GDKObjects2[k] = gdjs.lvl7Code.GDKObjects2[i];
        ++k;
    }
}
gdjs.lvl7Code.GDKObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.lvl7Code.GDKObjects2 */
{for(var i = 0, len = gdjs.lvl7Code.GDKObjects2.length ;i < len;++i) {
    gdjs.lvl7Code.GDKObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.lvl7Code.GDKObjects2.length ;i < len;++i) {
    gdjs.lvl7Code.GDKObjects2[i].getBehavior("PlatformerObject").setGravity(1000);
}
}
{ //Subevents
gdjs.lvl7Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("pesa"), gdjs.lvl7Code.GDpesaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.lvl7Code.GDpesaObjects1.length;i<l;++i) {
    if ( gdjs.lvl7Code.GDpesaObjects1[i].behaviorActivated("Arrastrable") ) {
        isConditionTrue_1 = true;
        gdjs.lvl7Code.GDpesaObjects1[k] = gdjs.lvl7Code.GDpesaObjects1[i];
        ++k;
    }
}
gdjs.lvl7Code.GDpesaObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.lvl7Code.GDpesaObjects1.length;i<l;++i) {
    if ( gdjs.lvl7Code.GDpesaObjects1[i].getY() < 200 ) {
        isConditionTrue_1 = true;
        gdjs.lvl7Code.GDpesaObjects1[k] = gdjs.lvl7Code.GDpesaObjects1[i];
        ++k;
    }
}
gdjs.lvl7Code.GDpesaObjects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("estrella"), gdjs.lvl7Code.GDestrellaObjects1);
gdjs.copyArray(runtimeScene.getObjects("salir"), gdjs.lvl7Code.GDsalirObjects1);
{for(var i = 0, len = gdjs.lvl7Code.GDestrellaObjects1.length ;i < len;++i) {
    gdjs.lvl7Code.GDestrellaObjects1[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.lvl7Code.GDsalirObjects1.length ;i < len;++i) {
    gdjs.lvl7Code.GDsalirObjects1[i].hide();
}
}
{ //Subevents
gdjs.lvl7Code.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.lvl7Code.eventsList12 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.lvl7Code.GDcargaObjects1);
gdjs.copyArray(runtimeScene.getObjects("salir"), gdjs.lvl7Code.GDsalirObjects1);
{for(var i = 0, len = gdjs.lvl7Code.GDsalirObjects1.length ;i < len;++i) {
    gdjs.lvl7Code.GDsalirObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.lvl7Code.GDcargaObjects1.length ;i < len;++i) {
    gdjs.lvl7Code.GDcargaObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Flash", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.lvl7Code.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("salir"), gdjs.lvl7Code.GDsalirObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl7Code.GDsalirObjects1.length;i<l;++i) {
    if ( gdjs.lvl7Code.GDsalirObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lvl7Code.GDsalirObjects1[k] = gdjs.lvl7Code.GDsalirObjects1[i];
        ++k;
    }
}
gdjs.lvl7Code.GDsalirObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.lvl7Code.GDcargaObjects1);
{for(var i = 0, len = gdjs.lvl7Code.GDcargaObjects1.length ;i < len;++i) {
    gdjs.lvl7Code.GDcargaObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Flash", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(0);
}
{ //Subevents
gdjs.lvl7Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.lvl7Code.eventsList2(runtimeScene);
}


{


gdjs.lvl7Code.eventsList5(runtimeScene);
}


{


gdjs.lvl7Code.eventsList11(runtimeScene);
}


};

gdjs.lvl7Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.lvl7Code.GDfondoObjects1.length = 0;
gdjs.lvl7Code.GDfondoObjects2.length = 0;
gdjs.lvl7Code.GDfondoObjects3.length = 0;
gdjs.lvl7Code.GDfondoObjects4.length = 0;
gdjs.lvl7Code.GDfondoObjects5.length = 0;
gdjs.lvl7Code.GDstage_95957Objects1.length = 0;
gdjs.lvl7Code.GDstage_95957Objects2.length = 0;
gdjs.lvl7Code.GDstage_95957Objects3.length = 0;
gdjs.lvl7Code.GDstage_95957Objects4.length = 0;
gdjs.lvl7Code.GDstage_95957Objects5.length = 0;
gdjs.lvl7Code.GDpisoObjects1.length = 0;
gdjs.lvl7Code.GDpisoObjects2.length = 0;
gdjs.lvl7Code.GDpisoObjects3.length = 0;
gdjs.lvl7Code.GDpisoObjects4.length = 0;
gdjs.lvl7Code.GDpisoObjects5.length = 0;
gdjs.lvl7Code.GDpesaObjects1.length = 0;
gdjs.lvl7Code.GDpesaObjects2.length = 0;
gdjs.lvl7Code.GDpesaObjects3.length = 0;
gdjs.lvl7Code.GDpesaObjects4.length = 0;
gdjs.lvl7Code.GDpesaObjects5.length = 0;
gdjs.lvl7Code.GDKObjects1.length = 0;
gdjs.lvl7Code.GDKObjects2.length = 0;
gdjs.lvl7Code.GDKObjects3.length = 0;
gdjs.lvl7Code.GDKObjects4.length = 0;
gdjs.lvl7Code.GDKObjects5.length = 0;
gdjs.lvl7Code.GDceroObjects1.length = 0;
gdjs.lvl7Code.GDceroObjects2.length = 0;
gdjs.lvl7Code.GDceroObjects3.length = 0;
gdjs.lvl7Code.GDceroObjects4.length = 0;
gdjs.lvl7Code.GDceroObjects5.length = 0;
gdjs.lvl7Code.GDestrellaObjects1.length = 0;
gdjs.lvl7Code.GDestrellaObjects2.length = 0;
gdjs.lvl7Code.GDestrellaObjects3.length = 0;
gdjs.lvl7Code.GDestrellaObjects4.length = 0;
gdjs.lvl7Code.GDestrellaObjects5.length = 0;
gdjs.lvl7Code.GDcargaObjects1.length = 0;
gdjs.lvl7Code.GDcargaObjects2.length = 0;
gdjs.lvl7Code.GDcargaObjects3.length = 0;
gdjs.lvl7Code.GDcargaObjects4.length = 0;
gdjs.lvl7Code.GDcargaObjects5.length = 0;
gdjs.lvl7Code.GDsalirObjects1.length = 0;
gdjs.lvl7Code.GDsalirObjects2.length = 0;
gdjs.lvl7Code.GDsalirObjects3.length = 0;
gdjs.lvl7Code.GDsalirObjects4.length = 0;
gdjs.lvl7Code.GDsalirObjects5.length = 0;
gdjs.lvl7Code.GDclearObjects1.length = 0;
gdjs.lvl7Code.GDclearObjects2.length = 0;
gdjs.lvl7Code.GDclearObjects3.length = 0;
gdjs.lvl7Code.GDclearObjects4.length = 0;
gdjs.lvl7Code.GDclearObjects5.length = 0;
gdjs.lvl7Code.GDclickObjects1.length = 0;
gdjs.lvl7Code.GDclickObjects2.length = 0;
gdjs.lvl7Code.GDclickObjects3.length = 0;
gdjs.lvl7Code.GDclickObjects4.length = 0;
gdjs.lvl7Code.GDclickObjects5.length = 0;

gdjs.lvl7Code.eventsList12(runtimeScene);
gdjs.lvl7Code.GDfondoObjects1.length = 0;
gdjs.lvl7Code.GDfondoObjects2.length = 0;
gdjs.lvl7Code.GDfondoObjects3.length = 0;
gdjs.lvl7Code.GDfondoObjects4.length = 0;
gdjs.lvl7Code.GDfondoObjects5.length = 0;
gdjs.lvl7Code.GDstage_95957Objects1.length = 0;
gdjs.lvl7Code.GDstage_95957Objects2.length = 0;
gdjs.lvl7Code.GDstage_95957Objects3.length = 0;
gdjs.lvl7Code.GDstage_95957Objects4.length = 0;
gdjs.lvl7Code.GDstage_95957Objects5.length = 0;
gdjs.lvl7Code.GDpisoObjects1.length = 0;
gdjs.lvl7Code.GDpisoObjects2.length = 0;
gdjs.lvl7Code.GDpisoObjects3.length = 0;
gdjs.lvl7Code.GDpisoObjects4.length = 0;
gdjs.lvl7Code.GDpisoObjects5.length = 0;
gdjs.lvl7Code.GDpesaObjects1.length = 0;
gdjs.lvl7Code.GDpesaObjects2.length = 0;
gdjs.lvl7Code.GDpesaObjects3.length = 0;
gdjs.lvl7Code.GDpesaObjects4.length = 0;
gdjs.lvl7Code.GDpesaObjects5.length = 0;
gdjs.lvl7Code.GDKObjects1.length = 0;
gdjs.lvl7Code.GDKObjects2.length = 0;
gdjs.lvl7Code.GDKObjects3.length = 0;
gdjs.lvl7Code.GDKObjects4.length = 0;
gdjs.lvl7Code.GDKObjects5.length = 0;
gdjs.lvl7Code.GDceroObjects1.length = 0;
gdjs.lvl7Code.GDceroObjects2.length = 0;
gdjs.lvl7Code.GDceroObjects3.length = 0;
gdjs.lvl7Code.GDceroObjects4.length = 0;
gdjs.lvl7Code.GDceroObjects5.length = 0;
gdjs.lvl7Code.GDestrellaObjects1.length = 0;
gdjs.lvl7Code.GDestrellaObjects2.length = 0;
gdjs.lvl7Code.GDestrellaObjects3.length = 0;
gdjs.lvl7Code.GDestrellaObjects4.length = 0;
gdjs.lvl7Code.GDestrellaObjects5.length = 0;
gdjs.lvl7Code.GDcargaObjects1.length = 0;
gdjs.lvl7Code.GDcargaObjects2.length = 0;
gdjs.lvl7Code.GDcargaObjects3.length = 0;
gdjs.lvl7Code.GDcargaObjects4.length = 0;
gdjs.lvl7Code.GDcargaObjects5.length = 0;
gdjs.lvl7Code.GDsalirObjects1.length = 0;
gdjs.lvl7Code.GDsalirObjects2.length = 0;
gdjs.lvl7Code.GDsalirObjects3.length = 0;
gdjs.lvl7Code.GDsalirObjects4.length = 0;
gdjs.lvl7Code.GDsalirObjects5.length = 0;
gdjs.lvl7Code.GDclearObjects1.length = 0;
gdjs.lvl7Code.GDclearObjects2.length = 0;
gdjs.lvl7Code.GDclearObjects3.length = 0;
gdjs.lvl7Code.GDclearObjects4.length = 0;
gdjs.lvl7Code.GDclearObjects5.length = 0;
gdjs.lvl7Code.GDclickObjects1.length = 0;
gdjs.lvl7Code.GDclickObjects2.length = 0;
gdjs.lvl7Code.GDclickObjects3.length = 0;
gdjs.lvl7Code.GDclickObjects4.length = 0;
gdjs.lvl7Code.GDclickObjects5.length = 0;


return;

}

gdjs['lvl7Code'] = gdjs.lvl7Code;
