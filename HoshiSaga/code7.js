gdjs.lvl6Code = {};
gdjs.lvl6Code.localVariables = [];
gdjs.lvl6Code.forEachIndex3 = 0;

gdjs.lvl6Code.forEachObjects3 = [];

gdjs.lvl6Code.forEachTemporary3 = null;

gdjs.lvl6Code.forEachTotalCount3 = 0;

gdjs.lvl6Code.GDfondoObjects1= [];
gdjs.lvl6Code.GDfondoObjects2= [];
gdjs.lvl6Code.GDfondoObjects3= [];
gdjs.lvl6Code.GDfondoObjects4= [];
gdjs.lvl6Code.GDfondoObjects5= [];
gdjs.lvl6Code.GDstage_95956Objects1= [];
gdjs.lvl6Code.GDstage_95956Objects2= [];
gdjs.lvl6Code.GDstage_95956Objects3= [];
gdjs.lvl6Code.GDstage_95956Objects4= [];
gdjs.lvl6Code.GDstage_95956Objects5= [];
gdjs.lvl6Code.GDletraObjects1= [];
gdjs.lvl6Code.GDletraObjects2= [];
gdjs.lvl6Code.GDletraObjects3= [];
gdjs.lvl6Code.GDletraObjects4= [];
gdjs.lvl6Code.GDletraObjects5= [];
gdjs.lvl6Code.GDletra2Objects1= [];
gdjs.lvl6Code.GDletra2Objects2= [];
gdjs.lvl6Code.GDletra2Objects3= [];
gdjs.lvl6Code.GDletra2Objects4= [];
gdjs.lvl6Code.GDletra2Objects5= [];
gdjs.lvl6Code.GDletra3Objects1= [];
gdjs.lvl6Code.GDletra3Objects2= [];
gdjs.lvl6Code.GDletra3Objects3= [];
gdjs.lvl6Code.GDletra3Objects4= [];
gdjs.lvl6Code.GDletra3Objects5= [];
gdjs.lvl6Code.GDletra4Objects1= [];
gdjs.lvl6Code.GDletra4Objects2= [];
gdjs.lvl6Code.GDletra4Objects3= [];
gdjs.lvl6Code.GDletra4Objects4= [];
gdjs.lvl6Code.GDletra4Objects5= [];
gdjs.lvl6Code.GDletra5Objects1= [];
gdjs.lvl6Code.GDletra5Objects2= [];
gdjs.lvl6Code.GDletra5Objects3= [];
gdjs.lvl6Code.GDletra5Objects4= [];
gdjs.lvl6Code.GDletra5Objects5= [];
gdjs.lvl6Code.GDcargaObjects1= [];
gdjs.lvl6Code.GDcargaObjects2= [];
gdjs.lvl6Code.GDcargaObjects3= [];
gdjs.lvl6Code.GDcargaObjects4= [];
gdjs.lvl6Code.GDcargaObjects5= [];
gdjs.lvl6Code.GDsalirObjects1= [];
gdjs.lvl6Code.GDsalirObjects2= [];
gdjs.lvl6Code.GDsalirObjects3= [];
gdjs.lvl6Code.GDsalirObjects4= [];
gdjs.lvl6Code.GDsalirObjects5= [];
gdjs.lvl6Code.GDclearObjects1= [];
gdjs.lvl6Code.GDclearObjects2= [];
gdjs.lvl6Code.GDclearObjects3= [];
gdjs.lvl6Code.GDclearObjects4= [];
gdjs.lvl6Code.GDclearObjects5= [];
gdjs.lvl6Code.GDclickObjects1= [];
gdjs.lvl6Code.GDclickObjects2= [];
gdjs.lvl6Code.GDclickObjects3= [];
gdjs.lvl6Code.GDclickObjects4= [];
gdjs.lvl6Code.GDclickObjects5= [];


gdjs.lvl6Code.asyncCallback27987972 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("salir"), gdjs.lvl6Code.GDsalirObjects2);

{for(var i = 0, len = gdjs.lvl6Code.GDsalirObjects2.length ;i < len;++i) {
    gdjs.lvl6Code.GDsalirObjects2[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
for (const obj of gdjs.lvl6Code.GDsalirObjects1) asyncObjectsList.addObject("salir", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback27987972(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback27990084 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "niveles", false);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback27990084(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("clear"), gdjs.lvl6Code.GDclearObjects2);
{for(var i = 0, len = gdjs.lvl6Code.GDclearObjects2.length ;i < len;++i) {
    gdjs.lvl6Code.GDclearObjects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.doesSceneExist(runtimeScene, "lvl2");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("letra"), gdjs.lvl6Code.GDletraObjects1);
gdjs.copyArray(runtimeScene.getObjects("letra2"), gdjs.lvl6Code.GDletra2Objects1);
gdjs.copyArray(runtimeScene.getObjects("letra3"), gdjs.lvl6Code.GDletra3Objects1);
gdjs.copyArray(runtimeScene.getObjects("letra4"), gdjs.lvl6Code.GDletra4Objects1);
gdjs.copyArray(runtimeScene.getObjects("letra5"), gdjs.lvl6Code.GDletra5Objects1);
gdjs.copyArray(runtimeScene.getObjects("stage_6"), gdjs.lvl6Code.GDstage_95956Objects1);
{for(var i = 0, len = gdjs.lvl6Code.GDstage_95956Objects1.length ;i < len;++i) {
    gdjs.lvl6Code.GDstage_95956Objects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.lvl6Code.GDletraObjects1.length ;i < len;++i) {
    gdjs.lvl6Code.GDletraObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.lvl6Code.GDletra2Objects1.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra2Objects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.lvl6Code.GDletra3Objects1.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra3Objects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.lvl6Code.GDletra4Objects1.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra4Objects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.lvl6Code.GDletra5Objects1.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra5Objects1[i].getBehavior("Animation").pauseAnimation();
}
}}

}


};gdjs.lvl6Code.asyncCallback28601180 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("stage_6"), gdjs.lvl6Code.GDstage_95956Objects3);

{for(var i = 0, len = gdjs.lvl6Code.GDstage_95956Objects3.length ;i < len;++i) {
    gdjs.lvl6Code.GDstage_95956Objects3[i].deleteFromScene(runtimeScene);
}
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
for (const obj of gdjs.lvl6Code.GDstage_95956Objects2) asyncObjectsList.addObject("stage_6", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28601180(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28600524 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("stage_6"), gdjs.lvl6Code.GDstage_95956Objects2);

{for(var i = 0, len = gdjs.lvl6Code.GDstage_95956Objects2.length ;i < len;++i) {
    gdjs.lvl6Code.GDstage_95956Objects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
{ //Subevents
gdjs.lvl6Code.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
for (const obj of gdjs.lvl6Code.GDstage_95956Objects1) asyncObjectsList.addObject("stage_6", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28600524(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("stage_6"), gdjs.lvl6Code.GDstage_95956Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl6Code.GDstage_95956Objects2.length;i<l;++i) {
    if ( gdjs.lvl6Code.GDstage_95956Objects2[i].getX() < 329 ) {
        isConditionTrue_0 = true;
        gdjs.lvl6Code.GDstage_95956Objects2[k] = gdjs.lvl6Code.GDstage_95956Objects2[i];
        ++k;
    }
}
gdjs.lvl6Code.GDstage_95956Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.lvl6Code.GDstage_95956Objects2 */
{for(var i = 0, len = gdjs.lvl6Code.GDstage_95956Objects2.length ;i < len;++i) {
    gdjs.lvl6Code.GDstage_95956Objects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("stage_6"), gdjs.lvl6Code.GDstage_95956Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl6Code.GDstage_95956Objects1.length;i<l;++i) {
    if ( gdjs.lvl6Code.GDstage_95956Objects1[i].getX() >= 329 ) {
        isConditionTrue_0 = true;
        gdjs.lvl6Code.GDstage_95956Objects1[k] = gdjs.lvl6Code.GDstage_95956Objects1[i];
        ++k;
    }
}
gdjs.lvl6Code.GDstage_95956Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.lvl6Code.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.lvl6Code.asyncCallback28602764 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28602764(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28603812 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28603812(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28604844 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28604844(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28605892 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28605892(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28606924 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28606924(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28607892 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28607892(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28608932 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList12 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28608932(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28609964 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList13 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28609964(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28610996 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList14 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28610996(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28612092 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList15 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28612092(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28613124 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList16 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28613124(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28614156 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList17 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28614156(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28615188 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList18 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28615188(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28616220 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList19 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28616220(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28617252 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList20 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28617252(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28618284 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList21 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28618284(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28619316 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList22 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28619316(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28620212 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList23 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28620212(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28621244 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList24 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28621244(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28622276 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList25 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28622276(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28623308 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList26 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28623308(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28624340 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList27 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28624340(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28625372 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList28 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28625372(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28626404 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList29 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28626404(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28627436 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList30 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28627436(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28628468 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList31 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28628468(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.eventsList32 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletraObjects3, gdjs.lvl6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletraObjects4[i].setAnimationFrame(0);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "b");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletraObjects3, gdjs.lvl6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletraObjects4[i].setAnimationFrame(1);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "c");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletraObjects3, gdjs.lvl6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletraObjects4[i].setAnimationFrame(2);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletraObjects3, gdjs.lvl6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletraObjects4[i].setAnimationFrame(3);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "e");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletraObjects3, gdjs.lvl6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletraObjects4[i].setAnimationFrame(4);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList10(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "f");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletraObjects3, gdjs.lvl6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletraObjects4[i].setAnimationFrame(5);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList11(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "g");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletraObjects3, gdjs.lvl6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletraObjects4[i].setAnimationFrame(6);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList12(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "h");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletraObjects3, gdjs.lvl6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletraObjects4[i].setAnimationFrame(7);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList13(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "i");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletraObjects3, gdjs.lvl6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletraObjects4[i].setAnimationFrame(8);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList14(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "j");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletraObjects3, gdjs.lvl6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletraObjects4[i].setAnimationFrame(9);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList15(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "k");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletraObjects3, gdjs.lvl6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletraObjects4[i].setAnimationFrame(10);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList16(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "l");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletraObjects3, gdjs.lvl6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletraObjects4[i].setAnimationFrame(11);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList17(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "m");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletraObjects3, gdjs.lvl6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletraObjects4[i].setAnimationFrame(12);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList18(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "n");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletraObjects3, gdjs.lvl6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletraObjects4[i].setAnimationFrame(13);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList19(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "o");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletraObjects3, gdjs.lvl6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletraObjects4[i].setAnimationFrame(14);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList20(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "p");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletraObjects3, gdjs.lvl6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletraObjects4[i].setAnimationFrame(15);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList21(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "q");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletraObjects3, gdjs.lvl6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletraObjects4[i].setAnimationFrame(16);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList22(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "r");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletraObjects3, gdjs.lvl6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletraObjects4[i].setAnimationFrame(17);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList23(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletraObjects3, gdjs.lvl6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletraObjects4[i].setAnimationFrame(18);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList24(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "t");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletraObjects3, gdjs.lvl6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletraObjects4[i].setAnimationFrame(19);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList25(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "u");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletraObjects3, gdjs.lvl6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletraObjects4[i].setAnimationFrame(20);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList26(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "v");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletraObjects3, gdjs.lvl6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletraObjects4[i].setAnimationFrame(21);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList27(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletraObjects3, gdjs.lvl6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletraObjects4[i].setAnimationFrame(22);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList28(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "x");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletraObjects3, gdjs.lvl6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletraObjects4[i].setAnimationFrame(23);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList29(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "y");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletraObjects3, gdjs.lvl6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletraObjects4[i].setAnimationFrame(24);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList30(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletraObjects3, gdjs.lvl6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletraObjects4[i].setAnimationFrame(25);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList31(runtimeScene);} //End of subevents
}

}


};gdjs.lvl6Code.asyncCallback28630068 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList33 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28630068(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28631116 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList34 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28631116(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28632148 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList35 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28632148(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28633196 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList36 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28633196(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28634228 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList37 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28634228(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28635196 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList38 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28635196(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28636236 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList39 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28636236(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28637268 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList40 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28637268(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28638300 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList41 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28638300(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28639396 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList42 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28639396(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28640428 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList43 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28640428(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28641460 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList44 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28641460(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28642492 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList45 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28642492(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28643524 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList46 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28643524(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28644556 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList47 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28644556(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28645588 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList48 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28645588(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28646620 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList49 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28646620(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28647516 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList50 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28647516(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28648548 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList51 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28648548(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28649580 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList52 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28649580(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28650612 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList53 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28650612(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28651644 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList54 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28651644(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28652676 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList55 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28652676(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28653708 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList56 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28653708(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28654740 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList57 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28654740(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28655772 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList58 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28655772(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.eventsList59 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra2Objects3, gdjs.lvl6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra2Objects4[i].setAnimationFrame(0);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList33(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "b");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra2Objects3, gdjs.lvl6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra2Objects4[i].setAnimationFrame(1);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList34(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "c");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra2Objects3, gdjs.lvl6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra2Objects4[i].setAnimationFrame(2);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList35(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra2Objects3, gdjs.lvl6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra2Objects4[i].setAnimationFrame(3);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList36(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "e");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra2Objects3, gdjs.lvl6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra2Objects4[i].setAnimationFrame(4);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList37(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "f");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra2Objects3, gdjs.lvl6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra2Objects4[i].setAnimationFrame(5);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList38(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "g");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra2Objects3, gdjs.lvl6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra2Objects4[i].setAnimationFrame(6);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList39(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "h");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra2Objects3, gdjs.lvl6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra2Objects4[i].setAnimationFrame(7);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList40(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "i");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra2Objects3, gdjs.lvl6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra2Objects4[i].setAnimationFrame(8);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList41(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "j");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra2Objects3, gdjs.lvl6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra2Objects4[i].setAnimationFrame(9);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList42(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "k");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra2Objects3, gdjs.lvl6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra2Objects4[i].setAnimationFrame(10);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList43(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "l");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra2Objects3, gdjs.lvl6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra2Objects4[i].setAnimationFrame(11);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList44(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "m");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra2Objects3, gdjs.lvl6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra2Objects4[i].setAnimationFrame(12);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList45(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "n");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra2Objects3, gdjs.lvl6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra2Objects4[i].setAnimationFrame(13);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList46(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "o");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra2Objects3, gdjs.lvl6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra2Objects4[i].setAnimationFrame(14);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList47(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "p");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra2Objects3, gdjs.lvl6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra2Objects4[i].setAnimationFrame(15);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList48(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "q");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra2Objects3, gdjs.lvl6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra2Objects4[i].setAnimationFrame(16);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList49(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "r");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra2Objects3, gdjs.lvl6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra2Objects4[i].setAnimationFrame(17);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList50(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra2Objects3, gdjs.lvl6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra2Objects4[i].setAnimationFrame(18);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList51(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "t");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra2Objects3, gdjs.lvl6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra2Objects4[i].setAnimationFrame(19);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList52(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "u");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra2Objects3, gdjs.lvl6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra2Objects4[i].setAnimationFrame(20);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList53(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "v");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra2Objects3, gdjs.lvl6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra2Objects4[i].setAnimationFrame(21);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList54(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra2Objects3, gdjs.lvl6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra2Objects4[i].setAnimationFrame(22);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList55(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "x");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra2Objects3, gdjs.lvl6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra2Objects4[i].setAnimationFrame(23);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList56(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "y");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra2Objects3, gdjs.lvl6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra2Objects4[i].setAnimationFrame(24);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList57(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra2Objects3, gdjs.lvl6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra2Objects4[i].setAnimationFrame(25);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList58(runtimeScene);} //End of subevents
}

}


};gdjs.lvl6Code.asyncCallback28657268 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList60 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28657268(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28658316 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList61 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28658316(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28659348 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList62 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28659348(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28660396 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList63 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28660396(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28661428 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList64 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28661428(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28662396 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList65 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28662396(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28663436 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList66 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28663436(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28664468 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList67 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28664468(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28665500 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList68 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28665500(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28666596 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList69 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28666596(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28667628 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList70 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28667628(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28668660 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList71 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28668660(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28669692 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList72 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28669692(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28670724 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList73 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28670724(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28671756 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList74 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28671756(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28672788 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList75 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28672788(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28673820 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList76 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28673820(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28674716 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList77 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28674716(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28675748 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList78 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28675748(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28676780 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList79 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28676780(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28677812 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList80 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28677812(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28678844 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList81 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28678844(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28679876 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList82 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28679876(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28680908 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList83 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28680908(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28681940 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList84 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28681940(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28682972 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList85 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28682972(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.eventsList86 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra3Objects3, gdjs.lvl6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra3Objects4[i].setAnimationFrame(0);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList60(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "b");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra3Objects3, gdjs.lvl6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra3Objects4[i].setAnimationFrame(1);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList61(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "c");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra3Objects3, gdjs.lvl6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra3Objects4[i].setAnimationFrame(2);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList62(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra3Objects3, gdjs.lvl6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra3Objects4[i].setAnimationFrame(3);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList63(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "e");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra3Objects3, gdjs.lvl6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra3Objects4[i].setAnimationFrame(4);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList64(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "f");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra3Objects3, gdjs.lvl6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra3Objects4[i].setAnimationFrame(5);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList65(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "g");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra3Objects3, gdjs.lvl6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra3Objects4[i].setAnimationFrame(6);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList66(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "h");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra3Objects3, gdjs.lvl6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra3Objects4[i].setAnimationFrame(7);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList67(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "i");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra3Objects3, gdjs.lvl6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra3Objects4[i].setAnimationFrame(8);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList68(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "j");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra3Objects3, gdjs.lvl6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra3Objects4[i].setAnimationFrame(9);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList69(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "k");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra3Objects3, gdjs.lvl6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra3Objects4[i].setAnimationFrame(10);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList70(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "l");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra3Objects3, gdjs.lvl6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra3Objects4[i].setAnimationFrame(11);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList71(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "m");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra3Objects3, gdjs.lvl6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra3Objects4[i].setAnimationFrame(12);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList72(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "n");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra3Objects3, gdjs.lvl6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra3Objects4[i].setAnimationFrame(13);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList73(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "o");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra3Objects3, gdjs.lvl6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra3Objects4[i].setAnimationFrame(14);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList74(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "p");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra3Objects3, gdjs.lvl6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra3Objects4[i].setAnimationFrame(15);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList75(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "q");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra3Objects3, gdjs.lvl6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra3Objects4[i].setAnimationFrame(16);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList76(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "r");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra3Objects3, gdjs.lvl6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra3Objects4[i].setAnimationFrame(17);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList77(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra3Objects3, gdjs.lvl6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra3Objects4[i].setAnimationFrame(18);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList78(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "t");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra3Objects3, gdjs.lvl6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra3Objects4[i].setAnimationFrame(19);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList79(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "u");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra3Objects3, gdjs.lvl6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra3Objects4[i].setAnimationFrame(20);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList80(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "v");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra3Objects3, gdjs.lvl6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra3Objects4[i].setAnimationFrame(21);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList81(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra3Objects3, gdjs.lvl6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra3Objects4[i].setAnimationFrame(22);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList82(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "x");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra3Objects3, gdjs.lvl6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra3Objects4[i].setAnimationFrame(23);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList83(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "y");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra3Objects3, gdjs.lvl6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra3Objects4[i].setAnimationFrame(24);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList84(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra3Objects3, gdjs.lvl6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra3Objects4[i].setAnimationFrame(25);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList85(runtimeScene);} //End of subevents
}

}


};gdjs.lvl6Code.asyncCallback28684484 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList87 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28684484(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28685532 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList88 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28685532(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28686564 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList89 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28686564(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28687612 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList90 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28687612(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28688644 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList91 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28688644(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28689612 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList92 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28689612(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28690652 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList93 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28690652(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28691684 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList94 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28691684(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28692716 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList95 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28692716(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28693812 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList96 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28693812(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28694844 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList97 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28694844(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28695876 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList98 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28695876(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28696908 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList99 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28696908(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28697940 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList100 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28697940(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28698972 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList101 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28698972(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28700004 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList102 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28700004(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28701036 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList103 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28701036(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28701932 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList104 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28701932(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28702964 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList105 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28702964(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28703996 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList106 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28703996(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28705028 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList107 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28705028(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28706060 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList108 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28706060(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28707092 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList109 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28707092(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28708124 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList110 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28708124(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28709156 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList111 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28709156(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28710188 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList112 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28710188(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.eventsList113 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra4Objects3, gdjs.lvl6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra4Objects4[i].setAnimationFrame(0);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList87(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "b");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra4Objects3, gdjs.lvl6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra4Objects4[i].setAnimationFrame(1);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList88(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "c");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra4Objects3, gdjs.lvl6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra4Objects4[i].setAnimationFrame(2);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList89(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra4Objects3, gdjs.lvl6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra4Objects4[i].setAnimationFrame(3);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList90(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "e");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra4Objects3, gdjs.lvl6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra4Objects4[i].setAnimationFrame(4);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList91(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "f");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra4Objects3, gdjs.lvl6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra4Objects4[i].setAnimationFrame(5);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList92(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "g");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra4Objects3, gdjs.lvl6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra4Objects4[i].setAnimationFrame(6);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList93(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "h");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra4Objects3, gdjs.lvl6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra4Objects4[i].setAnimationFrame(7);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList94(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "i");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra4Objects3, gdjs.lvl6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra4Objects4[i].setAnimationFrame(8);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList95(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "j");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra4Objects3, gdjs.lvl6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra4Objects4[i].setAnimationFrame(9);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList96(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "k");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra4Objects3, gdjs.lvl6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra4Objects4[i].setAnimationFrame(10);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList97(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "l");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra4Objects3, gdjs.lvl6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra4Objects4[i].setAnimationFrame(11);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList98(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "m");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra4Objects3, gdjs.lvl6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra4Objects4[i].setAnimationFrame(12);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList99(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "n");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra4Objects3, gdjs.lvl6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra4Objects4[i].setAnimationFrame(13);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList100(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "o");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra4Objects3, gdjs.lvl6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra4Objects4[i].setAnimationFrame(14);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList101(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "p");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra4Objects3, gdjs.lvl6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra4Objects4[i].setAnimationFrame(15);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList102(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "q");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra4Objects3, gdjs.lvl6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra4Objects4[i].setAnimationFrame(16);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList103(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "r");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra4Objects3, gdjs.lvl6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra4Objects4[i].setAnimationFrame(17);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList104(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra4Objects3, gdjs.lvl6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra4Objects4[i].setAnimationFrame(18);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList105(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "t");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra4Objects3, gdjs.lvl6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra4Objects4[i].setAnimationFrame(19);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList106(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "u");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra4Objects3, gdjs.lvl6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra4Objects4[i].setAnimationFrame(20);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList107(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "v");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra4Objects3, gdjs.lvl6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra4Objects4[i].setAnimationFrame(21);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList108(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra4Objects3, gdjs.lvl6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra4Objects4[i].setAnimationFrame(22);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList109(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "x");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra4Objects3, gdjs.lvl6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra4Objects4[i].setAnimationFrame(23);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList110(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "y");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra4Objects3, gdjs.lvl6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra4Objects4[i].setAnimationFrame(24);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList111(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra4Objects3, gdjs.lvl6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra4Objects4[i].setAnimationFrame(25);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList112(runtimeScene);} //End of subevents
}

}


};gdjs.lvl6Code.asyncCallback28711684 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList114 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28711684(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28712732 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList115 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28712732(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28713764 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList116 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28713764(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28714812 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList117 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28714812(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28715844 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList118 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28715844(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28716812 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList119 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28716812(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28717852 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList120 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28717852(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28718884 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList121 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28718884(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28719916 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList122 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28719916(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28721012 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList123 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28721012(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28722044 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList124 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28722044(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28723076 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList125 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28723076(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28724108 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList126 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28724108(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28725140 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList127 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28725140(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28726172 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList128 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28726172(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28727204 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList129 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28727204(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28728236 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList130 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28728236(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28729132 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList131 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28729132(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28730164 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList132 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28730164(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28731196 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList133 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28731196(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28732228 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList134 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28732228(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28733260 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList135 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28733260(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28734292 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList136 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28734292(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28735324 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList137 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28735324(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28736356 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList138 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28736356(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28737388 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList139 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28737388(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.eventsList140 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra5Objects3, gdjs.lvl6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra5Objects4[i].setAnimationFrame(0);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList114(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "b");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra5Objects3, gdjs.lvl6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra5Objects4[i].setAnimationFrame(1);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList115(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "c");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra5Objects3, gdjs.lvl6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra5Objects4[i].setAnimationFrame(2);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList116(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra5Objects3, gdjs.lvl6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra5Objects4[i].setAnimationFrame(3);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList117(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "e");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra5Objects3, gdjs.lvl6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra5Objects4[i].setAnimationFrame(4);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList118(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "f");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra5Objects3, gdjs.lvl6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra5Objects4[i].setAnimationFrame(5);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList119(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "g");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra5Objects3, gdjs.lvl6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra5Objects4[i].setAnimationFrame(6);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList120(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "h");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra5Objects3, gdjs.lvl6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra5Objects4[i].setAnimationFrame(7);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList121(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "i");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra5Objects3, gdjs.lvl6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra5Objects4[i].setAnimationFrame(8);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList122(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "j");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra5Objects3, gdjs.lvl6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra5Objects4[i].setAnimationFrame(9);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList123(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "k");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra5Objects3, gdjs.lvl6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra5Objects4[i].setAnimationFrame(10);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList124(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "l");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra5Objects3, gdjs.lvl6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra5Objects4[i].setAnimationFrame(11);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList125(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "m");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra5Objects3, gdjs.lvl6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra5Objects4[i].setAnimationFrame(12);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList126(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "n");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra5Objects3, gdjs.lvl6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra5Objects4[i].setAnimationFrame(13);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList127(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "o");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra5Objects3, gdjs.lvl6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra5Objects4[i].setAnimationFrame(14);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList128(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "p");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra5Objects3, gdjs.lvl6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra5Objects4[i].setAnimationFrame(15);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList129(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "q");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra5Objects3, gdjs.lvl6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra5Objects4[i].setAnimationFrame(16);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList130(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "r");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra5Objects3, gdjs.lvl6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra5Objects4[i].setAnimationFrame(17);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList131(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra5Objects3, gdjs.lvl6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra5Objects4[i].setAnimationFrame(18);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList132(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "t");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra5Objects3, gdjs.lvl6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra5Objects4[i].setAnimationFrame(19);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList133(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "u");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra5Objects3, gdjs.lvl6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra5Objects4[i].setAnimationFrame(20);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList134(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "v");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra5Objects3, gdjs.lvl6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra5Objects4[i].setAnimationFrame(21);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList135(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra5Objects3, gdjs.lvl6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra5Objects4[i].setAnimationFrame(22);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList136(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "x");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra5Objects3, gdjs.lvl6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra5Objects4[i].setAnimationFrame(23);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList137(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "y");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra5Objects3, gdjs.lvl6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra5Objects4[i].setAnimationFrame(24);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList138(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl6Code.GDletra5Objects3, gdjs.lvl6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.lvl6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.lvl6Code.GDletra5Objects4[i].setAnimationFrame(25);
}
}
{ //Subevents
gdjs.lvl6Code.eventsList139(runtimeScene);} //End of subevents
}

}


};gdjs.lvl6Code.asyncCallback28738092 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList141 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28738092(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.eventsList142 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), false, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setBoolean(true);
}}

}


};gdjs.lvl6Code.asyncCallback28741332 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "niveles", false);
}
{ //Subevents
gdjs.lvl6Code.eventsList142(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList143 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28741332(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback28740572 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl6Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.lvl6Code.GDcargaObjects2);
gdjs.copyArray(runtimeScene.getObjects("clear"), gdjs.lvl6Code.GDclearObjects2);
{for(var i = 0, len = gdjs.lvl6Code.GDclearObjects2.length ;i < len;++i) {
    gdjs.lvl6Code.GDclearObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.lvl6Code.GDcargaObjects2.length ;i < len;++i) {
    gdjs.lvl6Code.GDcargaObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 4, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.lvl6Code.eventsList143(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.lvl6Code.localVariables.length = 0;
}
gdjs.lvl6Code.eventsList144 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback28740572(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.eventsList145 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("letra"), gdjs.lvl6Code.GDletraObjects2);

for (gdjs.lvl6Code.forEachIndex3 = 0;gdjs.lvl6Code.forEachIndex3 < gdjs.lvl6Code.GDletraObjects2.length;++gdjs.lvl6Code.forEachIndex3) {
gdjs.lvl6Code.GDletraObjects3.length = 0;


gdjs.lvl6Code.forEachTemporary3 = gdjs.lvl6Code.GDletraObjects2[gdjs.lvl6Code.forEachIndex3];
gdjs.lvl6Code.GDletraObjects3.push(gdjs.lvl6Code.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.lvl6Code.eventsList32(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("letra2"), gdjs.lvl6Code.GDletra2Objects2);

for (gdjs.lvl6Code.forEachIndex3 = 0;gdjs.lvl6Code.forEachIndex3 < gdjs.lvl6Code.GDletra2Objects2.length;++gdjs.lvl6Code.forEachIndex3) {
gdjs.lvl6Code.GDletra2Objects3.length = 0;


gdjs.lvl6Code.forEachTemporary3 = gdjs.lvl6Code.GDletra2Objects2[gdjs.lvl6Code.forEachIndex3];
gdjs.lvl6Code.GDletra2Objects3.push(gdjs.lvl6Code.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.lvl6Code.eventsList59(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("letra3"), gdjs.lvl6Code.GDletra3Objects2);

for (gdjs.lvl6Code.forEachIndex3 = 0;gdjs.lvl6Code.forEachIndex3 < gdjs.lvl6Code.GDletra3Objects2.length;++gdjs.lvl6Code.forEachIndex3) {
gdjs.lvl6Code.GDletra3Objects3.length = 0;


gdjs.lvl6Code.forEachTemporary3 = gdjs.lvl6Code.GDletra3Objects2[gdjs.lvl6Code.forEachIndex3];
gdjs.lvl6Code.GDletra3Objects3.push(gdjs.lvl6Code.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.lvl6Code.eventsList86(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("letra4"), gdjs.lvl6Code.GDletra4Objects2);

for (gdjs.lvl6Code.forEachIndex3 = 0;gdjs.lvl6Code.forEachIndex3 < gdjs.lvl6Code.GDletra4Objects2.length;++gdjs.lvl6Code.forEachIndex3) {
gdjs.lvl6Code.GDletra4Objects3.length = 0;


gdjs.lvl6Code.forEachTemporary3 = gdjs.lvl6Code.GDletra4Objects2[gdjs.lvl6Code.forEachIndex3];
gdjs.lvl6Code.GDletra4Objects3.push(gdjs.lvl6Code.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 3;
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.lvl6Code.eventsList113(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("letra5"), gdjs.lvl6Code.GDletra5Objects2);

for (gdjs.lvl6Code.forEachIndex3 = 0;gdjs.lvl6Code.forEachIndex3 < gdjs.lvl6Code.GDletra5Objects2.length;++gdjs.lvl6Code.forEachIndex3) {
gdjs.lvl6Code.GDletra5Objects3.length = 0;


gdjs.lvl6Code.forEachTemporary3 = gdjs.lvl6Code.GDletra5Objects2[gdjs.lvl6Code.forEachIndex3];
gdjs.lvl6Code.GDletra5Objects3.push(gdjs.lvl6Code.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 4;
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.lvl6Code.eventsList140(runtimeScene);} //Subevents end.
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 5;
if (isConditionTrue_0) {

{ //Subevents
gdjs.lvl6Code.eventsList141(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("letra"), gdjs.lvl6Code.GDletraObjects1);
gdjs.copyArray(runtimeScene.getObjects("letra2"), gdjs.lvl6Code.GDletra2Objects1);
gdjs.copyArray(runtimeScene.getObjects("letra3"), gdjs.lvl6Code.GDletra3Objects1);
gdjs.copyArray(runtimeScene.getObjects("letra4"), gdjs.lvl6Code.GDletra4Objects1);
gdjs.copyArray(runtimeScene.getObjects("letra5"), gdjs.lvl6Code.GDletra5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.lvl6Code.GDletraObjects1.length;i<l;++i) {
    if ( gdjs.lvl6Code.GDletraObjects1[i].getAnimationFrame() == 21 ) {
        isConditionTrue_1 = true;
        gdjs.lvl6Code.GDletraObjects1[k] = gdjs.lvl6Code.GDletraObjects1[i];
        ++k;
    }
}
gdjs.lvl6Code.GDletraObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.lvl6Code.GDletra2Objects1.length;i<l;++i) {
    if ( gdjs.lvl6Code.GDletra2Objects1[i].getAnimationFrame() == 21 ) {
        isConditionTrue_1 = true;
        gdjs.lvl6Code.GDletra2Objects1[k] = gdjs.lvl6Code.GDletra2Objects1[i];
        ++k;
    }
}
gdjs.lvl6Code.GDletra2Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.lvl6Code.GDletra3Objects1.length;i<l;++i) {
    if ( gdjs.lvl6Code.GDletra3Objects1[i].getAnimationFrame() == 21 ) {
        isConditionTrue_1 = true;
        gdjs.lvl6Code.GDletra3Objects1[k] = gdjs.lvl6Code.GDletra3Objects1[i];
        ++k;
    }
}
gdjs.lvl6Code.GDletra3Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.lvl6Code.GDletra4Objects1.length;i<l;++i) {
    if ( gdjs.lvl6Code.GDletra4Objects1[i].getAnimationFrame() == 21 ) {
        isConditionTrue_1 = true;
        gdjs.lvl6Code.GDletra4Objects1[k] = gdjs.lvl6Code.GDletra4Objects1[i];
        ++k;
    }
}
gdjs.lvl6Code.GDletra4Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.lvl6Code.GDletra5Objects1.length;i<l;++i) {
    if ( gdjs.lvl6Code.GDletra5Objects1[i].getAnimationFrame() == 21 ) {
        isConditionTrue_1 = true;
        gdjs.lvl6Code.GDletra5Objects1[k] = gdjs.lvl6Code.GDletra5Objects1[i];
        ++k;
    }
}
gdjs.lvl6Code.GDletra5Objects1.length = k;
}
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("salir"), gdjs.lvl6Code.GDsalirObjects1);
{for(var i = 0, len = gdjs.lvl6Code.GDsalirObjects1.length ;i < len;++i) {
    gdjs.lvl6Code.GDsalirObjects1[i].hide();
}
}
{ //Subevents
gdjs.lvl6Code.eventsList144(runtimeScene);} //End of subevents
}

}


};gdjs.lvl6Code.eventsList146 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.lvl6Code.GDcargaObjects1);
gdjs.copyArray(runtimeScene.getObjects("salir"), gdjs.lvl6Code.GDsalirObjects1);
{for(var i = 0, len = gdjs.lvl6Code.GDsalirObjects1.length ;i < len;++i) {
    gdjs.lvl6Code.GDsalirObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.lvl6Code.GDcargaObjects1.length ;i < len;++i) {
    gdjs.lvl6Code.GDcargaObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Flash", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.lvl6Code.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("salir"), gdjs.lvl6Code.GDsalirObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl6Code.GDsalirObjects1.length;i<l;++i) {
    if ( gdjs.lvl6Code.GDsalirObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lvl6Code.GDsalirObjects1[k] = gdjs.lvl6Code.GDsalirObjects1[i];
        ++k;
    }
}
gdjs.lvl6Code.GDsalirObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.lvl6Code.GDcargaObjects1);
{for(var i = 0, len = gdjs.lvl6Code.GDcargaObjects1.length ;i < len;++i) {
    gdjs.lvl6Code.GDcargaObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Flash", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(0);
}
{ //Subevents
gdjs.lvl6Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.lvl6Code.eventsList2(runtimeScene);
}


{


gdjs.lvl6Code.eventsList5(runtimeScene);
}


{


gdjs.lvl6Code.eventsList145(runtimeScene);
}


};

gdjs.lvl6Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.lvl6Code.GDfondoObjects1.length = 0;
gdjs.lvl6Code.GDfondoObjects2.length = 0;
gdjs.lvl6Code.GDfondoObjects3.length = 0;
gdjs.lvl6Code.GDfondoObjects4.length = 0;
gdjs.lvl6Code.GDfondoObjects5.length = 0;
gdjs.lvl6Code.GDstage_95956Objects1.length = 0;
gdjs.lvl6Code.GDstage_95956Objects2.length = 0;
gdjs.lvl6Code.GDstage_95956Objects3.length = 0;
gdjs.lvl6Code.GDstage_95956Objects4.length = 0;
gdjs.lvl6Code.GDstage_95956Objects5.length = 0;
gdjs.lvl6Code.GDletraObjects1.length = 0;
gdjs.lvl6Code.GDletraObjects2.length = 0;
gdjs.lvl6Code.GDletraObjects3.length = 0;
gdjs.lvl6Code.GDletraObjects4.length = 0;
gdjs.lvl6Code.GDletraObjects5.length = 0;
gdjs.lvl6Code.GDletra2Objects1.length = 0;
gdjs.lvl6Code.GDletra2Objects2.length = 0;
gdjs.lvl6Code.GDletra2Objects3.length = 0;
gdjs.lvl6Code.GDletra2Objects4.length = 0;
gdjs.lvl6Code.GDletra2Objects5.length = 0;
gdjs.lvl6Code.GDletra3Objects1.length = 0;
gdjs.lvl6Code.GDletra3Objects2.length = 0;
gdjs.lvl6Code.GDletra3Objects3.length = 0;
gdjs.lvl6Code.GDletra3Objects4.length = 0;
gdjs.lvl6Code.GDletra3Objects5.length = 0;
gdjs.lvl6Code.GDletra4Objects1.length = 0;
gdjs.lvl6Code.GDletra4Objects2.length = 0;
gdjs.lvl6Code.GDletra4Objects3.length = 0;
gdjs.lvl6Code.GDletra4Objects4.length = 0;
gdjs.lvl6Code.GDletra4Objects5.length = 0;
gdjs.lvl6Code.GDletra5Objects1.length = 0;
gdjs.lvl6Code.GDletra5Objects2.length = 0;
gdjs.lvl6Code.GDletra5Objects3.length = 0;
gdjs.lvl6Code.GDletra5Objects4.length = 0;
gdjs.lvl6Code.GDletra5Objects5.length = 0;
gdjs.lvl6Code.GDcargaObjects1.length = 0;
gdjs.lvl6Code.GDcargaObjects2.length = 0;
gdjs.lvl6Code.GDcargaObjects3.length = 0;
gdjs.lvl6Code.GDcargaObjects4.length = 0;
gdjs.lvl6Code.GDcargaObjects5.length = 0;
gdjs.lvl6Code.GDsalirObjects1.length = 0;
gdjs.lvl6Code.GDsalirObjects2.length = 0;
gdjs.lvl6Code.GDsalirObjects3.length = 0;
gdjs.lvl6Code.GDsalirObjects4.length = 0;
gdjs.lvl6Code.GDsalirObjects5.length = 0;
gdjs.lvl6Code.GDclearObjects1.length = 0;
gdjs.lvl6Code.GDclearObjects2.length = 0;
gdjs.lvl6Code.GDclearObjects3.length = 0;
gdjs.lvl6Code.GDclearObjects4.length = 0;
gdjs.lvl6Code.GDclearObjects5.length = 0;
gdjs.lvl6Code.GDclickObjects1.length = 0;
gdjs.lvl6Code.GDclickObjects2.length = 0;
gdjs.lvl6Code.GDclickObjects3.length = 0;
gdjs.lvl6Code.GDclickObjects4.length = 0;
gdjs.lvl6Code.GDclickObjects5.length = 0;

gdjs.lvl6Code.eventsList146(runtimeScene);
gdjs.lvl6Code.GDfondoObjects1.length = 0;
gdjs.lvl6Code.GDfondoObjects2.length = 0;
gdjs.lvl6Code.GDfondoObjects3.length = 0;
gdjs.lvl6Code.GDfondoObjects4.length = 0;
gdjs.lvl6Code.GDfondoObjects5.length = 0;
gdjs.lvl6Code.GDstage_95956Objects1.length = 0;
gdjs.lvl6Code.GDstage_95956Objects2.length = 0;
gdjs.lvl6Code.GDstage_95956Objects3.length = 0;
gdjs.lvl6Code.GDstage_95956Objects4.length = 0;
gdjs.lvl6Code.GDstage_95956Objects5.length = 0;
gdjs.lvl6Code.GDletraObjects1.length = 0;
gdjs.lvl6Code.GDletraObjects2.length = 0;
gdjs.lvl6Code.GDletraObjects3.length = 0;
gdjs.lvl6Code.GDletraObjects4.length = 0;
gdjs.lvl6Code.GDletraObjects5.length = 0;
gdjs.lvl6Code.GDletra2Objects1.length = 0;
gdjs.lvl6Code.GDletra2Objects2.length = 0;
gdjs.lvl6Code.GDletra2Objects3.length = 0;
gdjs.lvl6Code.GDletra2Objects4.length = 0;
gdjs.lvl6Code.GDletra2Objects5.length = 0;
gdjs.lvl6Code.GDletra3Objects1.length = 0;
gdjs.lvl6Code.GDletra3Objects2.length = 0;
gdjs.lvl6Code.GDletra3Objects3.length = 0;
gdjs.lvl6Code.GDletra3Objects4.length = 0;
gdjs.lvl6Code.GDletra3Objects5.length = 0;
gdjs.lvl6Code.GDletra4Objects1.length = 0;
gdjs.lvl6Code.GDletra4Objects2.length = 0;
gdjs.lvl6Code.GDletra4Objects3.length = 0;
gdjs.lvl6Code.GDletra4Objects4.length = 0;
gdjs.lvl6Code.GDletra4Objects5.length = 0;
gdjs.lvl6Code.GDletra5Objects1.length = 0;
gdjs.lvl6Code.GDletra5Objects2.length = 0;
gdjs.lvl6Code.GDletra5Objects3.length = 0;
gdjs.lvl6Code.GDletra5Objects4.length = 0;
gdjs.lvl6Code.GDletra5Objects5.length = 0;
gdjs.lvl6Code.GDcargaObjects1.length = 0;
gdjs.lvl6Code.GDcargaObjects2.length = 0;
gdjs.lvl6Code.GDcargaObjects3.length = 0;
gdjs.lvl6Code.GDcargaObjects4.length = 0;
gdjs.lvl6Code.GDcargaObjects5.length = 0;
gdjs.lvl6Code.GDsalirObjects1.length = 0;
gdjs.lvl6Code.GDsalirObjects2.length = 0;
gdjs.lvl6Code.GDsalirObjects3.length = 0;
gdjs.lvl6Code.GDsalirObjects4.length = 0;
gdjs.lvl6Code.GDsalirObjects5.length = 0;
gdjs.lvl6Code.GDclearObjects1.length = 0;
gdjs.lvl6Code.GDclearObjects2.length = 0;
gdjs.lvl6Code.GDclearObjects3.length = 0;
gdjs.lvl6Code.GDclearObjects4.length = 0;
gdjs.lvl6Code.GDclearObjects5.length = 0;
gdjs.lvl6Code.GDclickObjects1.length = 0;
gdjs.lvl6Code.GDclickObjects2.length = 0;
gdjs.lvl6Code.GDclickObjects3.length = 0;
gdjs.lvl6Code.GDclickObjects4.length = 0;
gdjs.lvl6Code.GDclickObjects5.length = 0;


return;

}

gdjs['lvl6Code'] = gdjs.lvl6Code;
