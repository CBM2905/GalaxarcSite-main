gdjs.lvl5Code = {};
gdjs.lvl5Code.localVariables = [];
gdjs.lvl5Code.GDfondoObjects1= [];
gdjs.lvl5Code.GDfondoObjects2= [];
gdjs.lvl5Code.GDfondoObjects3= [];
gdjs.lvl5Code.GDfondoObjects4= [];
gdjs.lvl5Code.GDfondoObjects5= [];
gdjs.lvl5Code.GDfalso1Objects1= [];
gdjs.lvl5Code.GDfalso1Objects2= [];
gdjs.lvl5Code.GDfalso1Objects3= [];
gdjs.lvl5Code.GDfalso1Objects4= [];
gdjs.lvl5Code.GDfalso1Objects5= [];
gdjs.lvl5Code.GDestrellaObjects1= [];
gdjs.lvl5Code.GDestrellaObjects2= [];
gdjs.lvl5Code.GDestrellaObjects3= [];
gdjs.lvl5Code.GDestrellaObjects4= [];
gdjs.lvl5Code.GDestrellaObjects5= [];
gdjs.lvl5Code.GDStage_95955Objects1= [];
gdjs.lvl5Code.GDStage_95955Objects2= [];
gdjs.lvl5Code.GDStage_95955Objects3= [];
gdjs.lvl5Code.GDStage_95955Objects4= [];
gdjs.lvl5Code.GDStage_95955Objects5= [];
gdjs.lvl5Code.GDfalso2Objects1= [];
gdjs.lvl5Code.GDfalso2Objects2= [];
gdjs.lvl5Code.GDfalso2Objects3= [];
gdjs.lvl5Code.GDfalso2Objects4= [];
gdjs.lvl5Code.GDfalso2Objects5= [];
gdjs.lvl5Code.GDfalso3Objects1= [];
gdjs.lvl5Code.GDfalso3Objects2= [];
gdjs.lvl5Code.GDfalso3Objects3= [];
gdjs.lvl5Code.GDfalso3Objects4= [];
gdjs.lvl5Code.GDfalso3Objects5= [];
gdjs.lvl5Code.GDfalso4Objects1= [];
gdjs.lvl5Code.GDfalso4Objects2= [];
gdjs.lvl5Code.GDfalso4Objects3= [];
gdjs.lvl5Code.GDfalso4Objects4= [];
gdjs.lvl5Code.GDfalso4Objects5= [];
gdjs.lvl5Code.GDfalso5Objects1= [];
gdjs.lvl5Code.GDfalso5Objects2= [];
gdjs.lvl5Code.GDfalso5Objects3= [];
gdjs.lvl5Code.GDfalso5Objects4= [];
gdjs.lvl5Code.GDfalso5Objects5= [];
gdjs.lvl5Code.GDfalso6Objects1= [];
gdjs.lvl5Code.GDfalso6Objects2= [];
gdjs.lvl5Code.GDfalso6Objects3= [];
gdjs.lvl5Code.GDfalso6Objects4= [];
gdjs.lvl5Code.GDfalso6Objects5= [];
gdjs.lvl5Code.GDcargaObjects1= [];
gdjs.lvl5Code.GDcargaObjects2= [];
gdjs.lvl5Code.GDcargaObjects3= [];
gdjs.lvl5Code.GDcargaObjects4= [];
gdjs.lvl5Code.GDcargaObjects5= [];
gdjs.lvl5Code.GDsalirObjects1= [];
gdjs.lvl5Code.GDsalirObjects2= [];
gdjs.lvl5Code.GDsalirObjects3= [];
gdjs.lvl5Code.GDsalirObjects4= [];
gdjs.lvl5Code.GDsalirObjects5= [];
gdjs.lvl5Code.GDclearObjects1= [];
gdjs.lvl5Code.GDclearObjects2= [];
gdjs.lvl5Code.GDclearObjects3= [];
gdjs.lvl5Code.GDclearObjects4= [];
gdjs.lvl5Code.GDclearObjects5= [];
gdjs.lvl5Code.GDclickObjects1= [];
gdjs.lvl5Code.GDclickObjects2= [];
gdjs.lvl5Code.GDclickObjects3= [];
gdjs.lvl5Code.GDclickObjects4= [];
gdjs.lvl5Code.GDclickObjects5= [];


gdjs.lvl5Code.asyncCallback26568868 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl5Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("salir"), gdjs.lvl5Code.GDsalirObjects2);

{for(var i = 0, len = gdjs.lvl5Code.GDsalirObjects2.length ;i < len;++i) {
    gdjs.lvl5Code.GDsalirObjects2[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}gdjs.lvl5Code.localVariables.length = 0;
}
gdjs.lvl5Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl5Code.localVariables);
for (const obj of gdjs.lvl5Code.GDsalirObjects1) asyncObjectsList.addObject("salir", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.lvl5Code.asyncCallback26568868(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl5Code.asyncCallback26570292 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl5Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "niveles", false);
}gdjs.lvl5Code.localVariables.length = 0;
}
gdjs.lvl5Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl5Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.lvl5Code.asyncCallback26570292(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl5Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("clear"), gdjs.lvl5Code.GDclearObjects1);
gdjs.copyArray(runtimeScene.getObjects("estrella"), gdjs.lvl5Code.GDestrellaObjects1);
gdjs.copyArray(runtimeScene.getObjects("falso1"), gdjs.lvl5Code.GDfalso1Objects1);
gdjs.copyArray(runtimeScene.getObjects("falso2"), gdjs.lvl5Code.GDfalso2Objects1);
gdjs.copyArray(runtimeScene.getObjects("falso3"), gdjs.lvl5Code.GDfalso3Objects1);
gdjs.copyArray(runtimeScene.getObjects("falso4"), gdjs.lvl5Code.GDfalso4Objects1);
gdjs.copyArray(runtimeScene.getObjects("falso5"), gdjs.lvl5Code.GDfalso5Objects1);
gdjs.copyArray(runtimeScene.getObjects("falso6"), gdjs.lvl5Code.GDfalso6Objects1);
{for(var i = 0, len = gdjs.lvl5Code.GDestrellaObjects1.length ;i < len;++i) {
    gdjs.lvl5Code.GDestrellaObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.lvl5Code.GDfalso1Objects1.length ;i < len;++i) {
    gdjs.lvl5Code.GDfalso1Objects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.lvl5Code.GDfalso2Objects1.length ;i < len;++i) {
    gdjs.lvl5Code.GDfalso2Objects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.lvl5Code.GDfalso3Objects1.length ;i < len;++i) {
    gdjs.lvl5Code.GDfalso3Objects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.lvl5Code.GDfalso4Objects1.length ;i < len;++i) {
    gdjs.lvl5Code.GDfalso4Objects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.lvl5Code.GDfalso5Objects1.length ;i < len;++i) {
    gdjs.lvl5Code.GDfalso5Objects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.lvl5Code.GDfalso6Objects1.length ;i < len;++i) {
    gdjs.lvl5Code.GDfalso6Objects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.lvl5Code.GDclearObjects1.length ;i < len;++i) {
    gdjs.lvl5Code.GDclearObjects1[i].hide();
}
}{gdjs.evtTools.input.showCursor(runtimeScene);
}}

}


};gdjs.lvl5Code.asyncCallback25775412 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl5Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Stage_5"), gdjs.lvl5Code.GDStage_95955Objects3);

{for(var i = 0, len = gdjs.lvl5Code.GDStage_95955Objects3.length ;i < len;++i) {
    gdjs.lvl5Code.GDStage_95955Objects3[i].deleteFromScene(runtimeScene);
}
}gdjs.lvl5Code.localVariables.length = 0;
}
gdjs.lvl5Code.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl5Code.localVariables);
for (const obj of gdjs.lvl5Code.GDStage_95955Objects2) asyncObjectsList.addObject("Stage_5", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.lvl5Code.asyncCallback25775412(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl5Code.asyncCallback25773980 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl5Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Stage_5"), gdjs.lvl5Code.GDStage_95955Objects2);

{for(var i = 0, len = gdjs.lvl5Code.GDStage_95955Objects2.length ;i < len;++i) {
    gdjs.lvl5Code.GDStage_95955Objects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
{ //Subevents
gdjs.lvl5Code.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.lvl5Code.localVariables.length = 0;
}
gdjs.lvl5Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl5Code.localVariables);
for (const obj of gdjs.lvl5Code.GDStage_95955Objects1) asyncObjectsList.addObject("Stage_5", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.lvl5Code.asyncCallback25773980(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl5Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Stage_5"), gdjs.lvl5Code.GDStage_95955Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl5Code.GDStage_95955Objects2.length;i<l;++i) {
    if ( gdjs.lvl5Code.GDStage_95955Objects2[i].getX() < 300 ) {
        isConditionTrue_0 = true;
        gdjs.lvl5Code.GDStage_95955Objects2[k] = gdjs.lvl5Code.GDStage_95955Objects2[i];
        ++k;
    }
}
gdjs.lvl5Code.GDStage_95955Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.lvl5Code.GDStage_95955Objects2 */
{for(var i = 0, len = gdjs.lvl5Code.GDStage_95955Objects2.length ;i < len;++i) {
    gdjs.lvl5Code.GDStage_95955Objects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Stage_5"), gdjs.lvl5Code.GDStage_95955Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl5Code.GDStage_95955Objects1.length;i<l;++i) {
    if ( gdjs.lvl5Code.GDStage_95955Objects1[i].getX() >= 300 ) {
        isConditionTrue_0 = true;
        gdjs.lvl5Code.GDStage_95955Objects1[k] = gdjs.lvl5Code.GDStage_95955Objects1[i];
        ++k;
    }
}
gdjs.lvl5Code.GDStage_95955Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.lvl5Code.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.lvl5Code.eventsList6 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4), false, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setBoolean(true);
}}

}


};gdjs.lvl5Code.asyncCallback25767860 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl5Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "niveles", false);
}
{ //Subevents
gdjs.lvl5Code.eventsList6(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.lvl5Code.localVariables.length = 0;
}
gdjs.lvl5Code.eventsList7 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl5Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.lvl5Code.asyncCallback25767860(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl5Code.asyncCallback25767724 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl5Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.lvl5Code.GDcargaObjects3);
gdjs.copyArray(runtimeScene.getObjects("clear"), gdjs.lvl5Code.GDclearObjects3);
gdjs.copyArray(asyncObjectsList.getObjects("estrella"), gdjs.lvl5Code.GDestrellaObjects3);

gdjs.copyArray(runtimeScene.getObjects("salir"), gdjs.lvl5Code.GDsalirObjects3);
{for(var i = 0, len = gdjs.lvl5Code.GDestrellaObjects3.length ;i < len;++i) {
    gdjs.lvl5Code.GDestrellaObjects3[i].setZOrder(gdjs.lvl5Code.GDestrellaObjects3[i].getZOrder() + (2));
}
}{for(var i = 0, len = gdjs.lvl5Code.GDsalirObjects3.length ;i < len;++i) {
    gdjs.lvl5Code.GDsalirObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.lvl5Code.GDclearObjects3.length ;i < len;++i) {
    gdjs.lvl5Code.GDclearObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.lvl5Code.GDestrellaObjects3.length ;i < len;++i) {
    gdjs.lvl5Code.GDestrellaObjects3[i].setZOrder(gdjs.lvl5Code.GDestrellaObjects3[i].getZOrder() - (2));
}
}{for(var i = 0, len = gdjs.lvl5Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.lvl5Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 4, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.lvl5Code.eventsList7(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.lvl5Code.localVariables.length = 0;
}
gdjs.lvl5Code.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl5Code.localVariables);
for (const obj of gdjs.lvl5Code.GDestrellaObjects2) asyncObjectsList.addObject("estrella", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.lvl5Code.asyncCallback25767724(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl5Code.asyncCallback25920196 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl5Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("falso1"), gdjs.lvl5Code.GDfalso1Objects3);

{for(var i = 0, len = gdjs.lvl5Code.GDfalso1Objects3.length ;i < len;++i) {
    gdjs.lvl5Code.GDfalso1Objects3[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs.lvl5Code.GDfalso1Objects3.length ;i < len;++i) {
    gdjs.lvl5Code.GDfalso1Objects3[i].setZOrder(gdjs.lvl5Code.GDfalso1Objects3[i].getZOrder() - (2));
}
}{for(var i = 0, len = gdjs.lvl5Code.GDfalso1Objects3.length ;i < len;++i) {
    gdjs.lvl5Code.GDfalso1Objects3[i].getBehavior("Animation").pauseAnimation();
}
}gdjs.lvl5Code.localVariables.length = 0;
}
gdjs.lvl5Code.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl5Code.localVariables);
for (const obj of gdjs.lvl5Code.GDfalso1Objects2) asyncObjectsList.addObject("falso1", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.lvl5Code.asyncCallback25920196(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl5Code.asyncCallback25921724 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl5Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("falso2"), gdjs.lvl5Code.GDfalso2Objects3);

{for(var i = 0, len = gdjs.lvl5Code.GDfalso2Objects3.length ;i < len;++i) {
    gdjs.lvl5Code.GDfalso2Objects3[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs.lvl5Code.GDfalso2Objects3.length ;i < len;++i) {
    gdjs.lvl5Code.GDfalso2Objects3[i].setZOrder(gdjs.lvl5Code.GDfalso2Objects3[i].getZOrder() - (2));
}
}{for(var i = 0, len = gdjs.lvl5Code.GDfalso2Objects3.length ;i < len;++i) {
    gdjs.lvl5Code.GDfalso2Objects3[i].getBehavior("Animation").pauseAnimation();
}
}gdjs.lvl5Code.localVariables.length = 0;
}
gdjs.lvl5Code.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl5Code.localVariables);
for (const obj of gdjs.lvl5Code.GDfalso2Objects2) asyncObjectsList.addObject("falso2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.lvl5Code.asyncCallback25921724(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl5Code.asyncCallback25923292 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl5Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("falso3"), gdjs.lvl5Code.GDfalso3Objects3);

{for(var i = 0, len = gdjs.lvl5Code.GDfalso3Objects3.length ;i < len;++i) {
    gdjs.lvl5Code.GDfalso3Objects3[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs.lvl5Code.GDfalso3Objects3.length ;i < len;++i) {
    gdjs.lvl5Code.GDfalso3Objects3[i].setZOrder(gdjs.lvl5Code.GDfalso3Objects3[i].getZOrder() - (2));
}
}{for(var i = 0, len = gdjs.lvl5Code.GDfalso3Objects3.length ;i < len;++i) {
    gdjs.lvl5Code.GDfalso3Objects3[i].getBehavior("Animation").pauseAnimation();
}
}gdjs.lvl5Code.localVariables.length = 0;
}
gdjs.lvl5Code.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl5Code.localVariables);
for (const obj of gdjs.lvl5Code.GDfalso3Objects2) asyncObjectsList.addObject("falso3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.lvl5Code.asyncCallback25923292(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl5Code.asyncCallback25924756 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl5Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("falso4"), gdjs.lvl5Code.GDfalso4Objects3);

{for(var i = 0, len = gdjs.lvl5Code.GDfalso4Objects3.length ;i < len;++i) {
    gdjs.lvl5Code.GDfalso4Objects3[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs.lvl5Code.GDfalso4Objects3.length ;i < len;++i) {
    gdjs.lvl5Code.GDfalso4Objects3[i].setZOrder(gdjs.lvl5Code.GDfalso4Objects3[i].getZOrder() - (2));
}
}{for(var i = 0, len = gdjs.lvl5Code.GDfalso4Objects3.length ;i < len;++i) {
    gdjs.lvl5Code.GDfalso4Objects3[i].getBehavior("Animation").pauseAnimation();
}
}gdjs.lvl5Code.localVariables.length = 0;
}
gdjs.lvl5Code.eventsList12 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl5Code.localVariables);
for (const obj of gdjs.lvl5Code.GDfalso4Objects2) asyncObjectsList.addObject("falso4", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.lvl5Code.asyncCallback25924756(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl5Code.asyncCallback25926316 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl5Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("falso5"), gdjs.lvl5Code.GDfalso5Objects3);

{for(var i = 0, len = gdjs.lvl5Code.GDfalso5Objects3.length ;i < len;++i) {
    gdjs.lvl5Code.GDfalso5Objects3[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs.lvl5Code.GDfalso5Objects3.length ;i < len;++i) {
    gdjs.lvl5Code.GDfalso5Objects3[i].setZOrder(gdjs.lvl5Code.GDfalso5Objects3[i].getZOrder() - (2));
}
}{for(var i = 0, len = gdjs.lvl5Code.GDfalso5Objects3.length ;i < len;++i) {
    gdjs.lvl5Code.GDfalso5Objects3[i].getBehavior("Animation").pauseAnimation();
}
}gdjs.lvl5Code.localVariables.length = 0;
}
gdjs.lvl5Code.eventsList13 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl5Code.localVariables);
for (const obj of gdjs.lvl5Code.GDfalso5Objects2) asyncObjectsList.addObject("falso5", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.lvl5Code.asyncCallback25926316(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl5Code.asyncCallback25927828 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl5Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("falso6"), gdjs.lvl5Code.GDfalso6Objects2);

{for(var i = 0, len = gdjs.lvl5Code.GDfalso6Objects2.length ;i < len;++i) {
    gdjs.lvl5Code.GDfalso6Objects2[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs.lvl5Code.GDfalso6Objects2.length ;i < len;++i) {
    gdjs.lvl5Code.GDfalso6Objects2[i].setZOrder(gdjs.lvl5Code.GDfalso6Objects2[i].getZOrder() - (2));
}
}{for(var i = 0, len = gdjs.lvl5Code.GDfalso6Objects2.length ;i < len;++i) {
    gdjs.lvl5Code.GDfalso6Objects2[i].getBehavior("Animation").pauseAnimation();
}
}gdjs.lvl5Code.localVariables.length = 0;
}
gdjs.lvl5Code.eventsList14 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl5Code.localVariables);
for (const obj of gdjs.lvl5Code.GDfalso6Objects1) asyncObjectsList.addObject("falso6", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.lvl5Code.asyncCallback25927828(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl5Code.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("estrella"), gdjs.lvl5Code.GDestrellaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl5Code.GDestrellaObjects2.length;i<l;++i) {
    if ( gdjs.lvl5Code.GDestrellaObjects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lvl5Code.GDestrellaObjects2[k] = gdjs.lvl5Code.GDestrellaObjects2[i];
        ++k;
    }
}
gdjs.lvl5Code.GDestrellaObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.lvl5Code.GDestrellaObjects2 */
{for(var i = 0, len = gdjs.lvl5Code.GDestrellaObjects2.length ;i < len;++i) {
    gdjs.lvl5Code.GDestrellaObjects2[i].getBehavior("Animation").resumeAnimation();
}
}
{ //Subevents
gdjs.lvl5Code.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("falso1"), gdjs.lvl5Code.GDfalso1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl5Code.GDfalso1Objects2.length;i<l;++i) {
    if ( gdjs.lvl5Code.GDfalso1Objects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lvl5Code.GDfalso1Objects2[k] = gdjs.lvl5Code.GDfalso1Objects2[i];
        ++k;
    }
}
gdjs.lvl5Code.GDfalso1Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.lvl5Code.GDfalso1Objects2 */
{for(var i = 0, len = gdjs.lvl5Code.GDfalso1Objects2.length ;i < len;++i) {
    gdjs.lvl5Code.GDfalso1Objects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.lvl5Code.GDfalso1Objects2.length ;i < len;++i) {
    gdjs.lvl5Code.GDfalso1Objects2[i].setZOrder(gdjs.lvl5Code.GDfalso1Objects2[i].getZOrder() + (2));
}
}
{ //Subevents
gdjs.lvl5Code.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("falso2"), gdjs.lvl5Code.GDfalso2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl5Code.GDfalso2Objects2.length;i<l;++i) {
    if ( gdjs.lvl5Code.GDfalso2Objects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lvl5Code.GDfalso2Objects2[k] = gdjs.lvl5Code.GDfalso2Objects2[i];
        ++k;
    }
}
gdjs.lvl5Code.GDfalso2Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.lvl5Code.GDfalso2Objects2 */
{for(var i = 0, len = gdjs.lvl5Code.GDfalso2Objects2.length ;i < len;++i) {
    gdjs.lvl5Code.GDfalso2Objects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.lvl5Code.GDfalso2Objects2.length ;i < len;++i) {
    gdjs.lvl5Code.GDfalso2Objects2[i].setZOrder(gdjs.lvl5Code.GDfalso2Objects2[i].getZOrder() + (2));
}
}
{ //Subevents
gdjs.lvl5Code.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("falso3"), gdjs.lvl5Code.GDfalso3Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl5Code.GDfalso3Objects2.length;i<l;++i) {
    if ( gdjs.lvl5Code.GDfalso3Objects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lvl5Code.GDfalso3Objects2[k] = gdjs.lvl5Code.GDfalso3Objects2[i];
        ++k;
    }
}
gdjs.lvl5Code.GDfalso3Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.lvl5Code.GDfalso3Objects2 */
{for(var i = 0, len = gdjs.lvl5Code.GDfalso3Objects2.length ;i < len;++i) {
    gdjs.lvl5Code.GDfalso3Objects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.lvl5Code.GDfalso3Objects2.length ;i < len;++i) {
    gdjs.lvl5Code.GDfalso3Objects2[i].setZOrder(gdjs.lvl5Code.GDfalso3Objects2[i].getZOrder() + (2));
}
}
{ //Subevents
gdjs.lvl5Code.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("falso4"), gdjs.lvl5Code.GDfalso4Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl5Code.GDfalso4Objects2.length;i<l;++i) {
    if ( gdjs.lvl5Code.GDfalso4Objects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lvl5Code.GDfalso4Objects2[k] = gdjs.lvl5Code.GDfalso4Objects2[i];
        ++k;
    }
}
gdjs.lvl5Code.GDfalso4Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.lvl5Code.GDfalso4Objects2 */
{for(var i = 0, len = gdjs.lvl5Code.GDfalso4Objects2.length ;i < len;++i) {
    gdjs.lvl5Code.GDfalso4Objects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.lvl5Code.GDfalso4Objects2.length ;i < len;++i) {
    gdjs.lvl5Code.GDfalso4Objects2[i].setZOrder(gdjs.lvl5Code.GDfalso4Objects2[i].getZOrder() + (2));
}
}
{ //Subevents
gdjs.lvl5Code.eventsList12(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("falso5"), gdjs.lvl5Code.GDfalso5Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl5Code.GDfalso5Objects2.length;i<l;++i) {
    if ( gdjs.lvl5Code.GDfalso5Objects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lvl5Code.GDfalso5Objects2[k] = gdjs.lvl5Code.GDfalso5Objects2[i];
        ++k;
    }
}
gdjs.lvl5Code.GDfalso5Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.lvl5Code.GDfalso5Objects2 */
{for(var i = 0, len = gdjs.lvl5Code.GDfalso5Objects2.length ;i < len;++i) {
    gdjs.lvl5Code.GDfalso5Objects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.lvl5Code.GDfalso5Objects2.length ;i < len;++i) {
    gdjs.lvl5Code.GDfalso5Objects2[i].setZOrder(gdjs.lvl5Code.GDfalso5Objects2[i].getZOrder() + (2));
}
}
{ //Subevents
gdjs.lvl5Code.eventsList13(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("falso6"), gdjs.lvl5Code.GDfalso6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl5Code.GDfalso6Objects1.length;i<l;++i) {
    if ( gdjs.lvl5Code.GDfalso6Objects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lvl5Code.GDfalso6Objects1[k] = gdjs.lvl5Code.GDfalso6Objects1[i];
        ++k;
    }
}
gdjs.lvl5Code.GDfalso6Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.lvl5Code.GDfalso6Objects1 */
{for(var i = 0, len = gdjs.lvl5Code.GDfalso6Objects1.length ;i < len;++i) {
    gdjs.lvl5Code.GDfalso6Objects1[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.lvl5Code.GDfalso6Objects1.length ;i < len;++i) {
    gdjs.lvl5Code.GDfalso6Objects1[i].setZOrder(gdjs.lvl5Code.GDfalso6Objects1[i].getZOrder() + (2));
}
}
{ //Subevents
gdjs.lvl5Code.eventsList14(runtimeScene);} //End of subevents
}

}


};gdjs.lvl5Code.eventsList16 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.lvl5Code.GDcargaObjects1);
gdjs.copyArray(runtimeScene.getObjects("salir"), gdjs.lvl5Code.GDsalirObjects1);
{for(var i = 0, len = gdjs.lvl5Code.GDsalirObjects1.length ;i < len;++i) {
    gdjs.lvl5Code.GDsalirObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.lvl5Code.GDcargaObjects1.length ;i < len;++i) {
    gdjs.lvl5Code.GDcargaObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Flash", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.lvl5Code.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("salir"), gdjs.lvl5Code.GDsalirObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl5Code.GDsalirObjects1.length;i<l;++i) {
    if ( gdjs.lvl5Code.GDsalirObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lvl5Code.GDsalirObjects1[k] = gdjs.lvl5Code.GDsalirObjects1[i];
        ++k;
    }
}
gdjs.lvl5Code.GDsalirObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.lvl5Code.GDcargaObjects1);
{for(var i = 0, len = gdjs.lvl5Code.GDcargaObjects1.length ;i < len;++i) {
    gdjs.lvl5Code.GDcargaObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Flash", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(0);
}
{ //Subevents
gdjs.lvl5Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.lvl5Code.eventsList2(runtimeScene);
}


{


gdjs.lvl5Code.eventsList5(runtimeScene);
}


{


gdjs.lvl5Code.eventsList15(runtimeScene);
}


};

gdjs.lvl5Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.lvl5Code.GDfondoObjects1.length = 0;
gdjs.lvl5Code.GDfondoObjects2.length = 0;
gdjs.lvl5Code.GDfondoObjects3.length = 0;
gdjs.lvl5Code.GDfondoObjects4.length = 0;
gdjs.lvl5Code.GDfondoObjects5.length = 0;
gdjs.lvl5Code.GDfalso1Objects1.length = 0;
gdjs.lvl5Code.GDfalso1Objects2.length = 0;
gdjs.lvl5Code.GDfalso1Objects3.length = 0;
gdjs.lvl5Code.GDfalso1Objects4.length = 0;
gdjs.lvl5Code.GDfalso1Objects5.length = 0;
gdjs.lvl5Code.GDestrellaObjects1.length = 0;
gdjs.lvl5Code.GDestrellaObjects2.length = 0;
gdjs.lvl5Code.GDestrellaObjects3.length = 0;
gdjs.lvl5Code.GDestrellaObjects4.length = 0;
gdjs.lvl5Code.GDestrellaObjects5.length = 0;
gdjs.lvl5Code.GDStage_95955Objects1.length = 0;
gdjs.lvl5Code.GDStage_95955Objects2.length = 0;
gdjs.lvl5Code.GDStage_95955Objects3.length = 0;
gdjs.lvl5Code.GDStage_95955Objects4.length = 0;
gdjs.lvl5Code.GDStage_95955Objects5.length = 0;
gdjs.lvl5Code.GDfalso2Objects1.length = 0;
gdjs.lvl5Code.GDfalso2Objects2.length = 0;
gdjs.lvl5Code.GDfalso2Objects3.length = 0;
gdjs.lvl5Code.GDfalso2Objects4.length = 0;
gdjs.lvl5Code.GDfalso2Objects5.length = 0;
gdjs.lvl5Code.GDfalso3Objects1.length = 0;
gdjs.lvl5Code.GDfalso3Objects2.length = 0;
gdjs.lvl5Code.GDfalso3Objects3.length = 0;
gdjs.lvl5Code.GDfalso3Objects4.length = 0;
gdjs.lvl5Code.GDfalso3Objects5.length = 0;
gdjs.lvl5Code.GDfalso4Objects1.length = 0;
gdjs.lvl5Code.GDfalso4Objects2.length = 0;
gdjs.lvl5Code.GDfalso4Objects3.length = 0;
gdjs.lvl5Code.GDfalso4Objects4.length = 0;
gdjs.lvl5Code.GDfalso4Objects5.length = 0;
gdjs.lvl5Code.GDfalso5Objects1.length = 0;
gdjs.lvl5Code.GDfalso5Objects2.length = 0;
gdjs.lvl5Code.GDfalso5Objects3.length = 0;
gdjs.lvl5Code.GDfalso5Objects4.length = 0;
gdjs.lvl5Code.GDfalso5Objects5.length = 0;
gdjs.lvl5Code.GDfalso6Objects1.length = 0;
gdjs.lvl5Code.GDfalso6Objects2.length = 0;
gdjs.lvl5Code.GDfalso6Objects3.length = 0;
gdjs.lvl5Code.GDfalso6Objects4.length = 0;
gdjs.lvl5Code.GDfalso6Objects5.length = 0;
gdjs.lvl5Code.GDcargaObjects1.length = 0;
gdjs.lvl5Code.GDcargaObjects2.length = 0;
gdjs.lvl5Code.GDcargaObjects3.length = 0;
gdjs.lvl5Code.GDcargaObjects4.length = 0;
gdjs.lvl5Code.GDcargaObjects5.length = 0;
gdjs.lvl5Code.GDsalirObjects1.length = 0;
gdjs.lvl5Code.GDsalirObjects2.length = 0;
gdjs.lvl5Code.GDsalirObjects3.length = 0;
gdjs.lvl5Code.GDsalirObjects4.length = 0;
gdjs.lvl5Code.GDsalirObjects5.length = 0;
gdjs.lvl5Code.GDclearObjects1.length = 0;
gdjs.lvl5Code.GDclearObjects2.length = 0;
gdjs.lvl5Code.GDclearObjects3.length = 0;
gdjs.lvl5Code.GDclearObjects4.length = 0;
gdjs.lvl5Code.GDclearObjects5.length = 0;
gdjs.lvl5Code.GDclickObjects1.length = 0;
gdjs.lvl5Code.GDclickObjects2.length = 0;
gdjs.lvl5Code.GDclickObjects3.length = 0;
gdjs.lvl5Code.GDclickObjects4.length = 0;
gdjs.lvl5Code.GDclickObjects5.length = 0;

gdjs.lvl5Code.eventsList16(runtimeScene);
gdjs.lvl5Code.GDfondoObjects1.length = 0;
gdjs.lvl5Code.GDfondoObjects2.length = 0;
gdjs.lvl5Code.GDfondoObjects3.length = 0;
gdjs.lvl5Code.GDfondoObjects4.length = 0;
gdjs.lvl5Code.GDfondoObjects5.length = 0;
gdjs.lvl5Code.GDfalso1Objects1.length = 0;
gdjs.lvl5Code.GDfalso1Objects2.length = 0;
gdjs.lvl5Code.GDfalso1Objects3.length = 0;
gdjs.lvl5Code.GDfalso1Objects4.length = 0;
gdjs.lvl5Code.GDfalso1Objects5.length = 0;
gdjs.lvl5Code.GDestrellaObjects1.length = 0;
gdjs.lvl5Code.GDestrellaObjects2.length = 0;
gdjs.lvl5Code.GDestrellaObjects3.length = 0;
gdjs.lvl5Code.GDestrellaObjects4.length = 0;
gdjs.lvl5Code.GDestrellaObjects5.length = 0;
gdjs.lvl5Code.GDStage_95955Objects1.length = 0;
gdjs.lvl5Code.GDStage_95955Objects2.length = 0;
gdjs.lvl5Code.GDStage_95955Objects3.length = 0;
gdjs.lvl5Code.GDStage_95955Objects4.length = 0;
gdjs.lvl5Code.GDStage_95955Objects5.length = 0;
gdjs.lvl5Code.GDfalso2Objects1.length = 0;
gdjs.lvl5Code.GDfalso2Objects2.length = 0;
gdjs.lvl5Code.GDfalso2Objects3.length = 0;
gdjs.lvl5Code.GDfalso2Objects4.length = 0;
gdjs.lvl5Code.GDfalso2Objects5.length = 0;
gdjs.lvl5Code.GDfalso3Objects1.length = 0;
gdjs.lvl5Code.GDfalso3Objects2.length = 0;
gdjs.lvl5Code.GDfalso3Objects3.length = 0;
gdjs.lvl5Code.GDfalso3Objects4.length = 0;
gdjs.lvl5Code.GDfalso3Objects5.length = 0;
gdjs.lvl5Code.GDfalso4Objects1.length = 0;
gdjs.lvl5Code.GDfalso4Objects2.length = 0;
gdjs.lvl5Code.GDfalso4Objects3.length = 0;
gdjs.lvl5Code.GDfalso4Objects4.length = 0;
gdjs.lvl5Code.GDfalso4Objects5.length = 0;
gdjs.lvl5Code.GDfalso5Objects1.length = 0;
gdjs.lvl5Code.GDfalso5Objects2.length = 0;
gdjs.lvl5Code.GDfalso5Objects3.length = 0;
gdjs.lvl5Code.GDfalso5Objects4.length = 0;
gdjs.lvl5Code.GDfalso5Objects5.length = 0;
gdjs.lvl5Code.GDfalso6Objects1.length = 0;
gdjs.lvl5Code.GDfalso6Objects2.length = 0;
gdjs.lvl5Code.GDfalso6Objects3.length = 0;
gdjs.lvl5Code.GDfalso6Objects4.length = 0;
gdjs.lvl5Code.GDfalso6Objects5.length = 0;
gdjs.lvl5Code.GDcargaObjects1.length = 0;
gdjs.lvl5Code.GDcargaObjects2.length = 0;
gdjs.lvl5Code.GDcargaObjects3.length = 0;
gdjs.lvl5Code.GDcargaObjects4.length = 0;
gdjs.lvl5Code.GDcargaObjects5.length = 0;
gdjs.lvl5Code.GDsalirObjects1.length = 0;
gdjs.lvl5Code.GDsalirObjects2.length = 0;
gdjs.lvl5Code.GDsalirObjects3.length = 0;
gdjs.lvl5Code.GDsalirObjects4.length = 0;
gdjs.lvl5Code.GDsalirObjects5.length = 0;
gdjs.lvl5Code.GDclearObjects1.length = 0;
gdjs.lvl5Code.GDclearObjects2.length = 0;
gdjs.lvl5Code.GDclearObjects3.length = 0;
gdjs.lvl5Code.GDclearObjects4.length = 0;
gdjs.lvl5Code.GDclearObjects5.length = 0;
gdjs.lvl5Code.GDclickObjects1.length = 0;
gdjs.lvl5Code.GDclickObjects2.length = 0;
gdjs.lvl5Code.GDclickObjects3.length = 0;
gdjs.lvl5Code.GDclickObjects4.length = 0;
gdjs.lvl5Code.GDclickObjects5.length = 0;


return;

}

gdjs['lvl5Code'] = gdjs.lvl5Code;
