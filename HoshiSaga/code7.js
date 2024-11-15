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


gdjs.lvl6Code.asyncCallback26568868 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26568868(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26570292 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26570292(runtimeScene, asyncObjectsList)));
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


};gdjs.lvl6Code.asyncCallback26026748 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26026748(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26027028 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26027028(runtimeScene, asyncObjectsList)));
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


};gdjs.lvl6Code.asyncCallback26028772 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26028772(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26029724 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26029724(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26030340 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26030340(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26031620 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26031620(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26032532 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26032532(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26033564 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26033564(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26034476 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26034476(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26035388 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26035388(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26036340 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26036340(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26037340 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26037340(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26038300 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26038300(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26039212 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26039212(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26040164 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26040164(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26041076 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26041076(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26042028 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26042028(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26042940 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26042940(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26043892 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26043892(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26044916 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26044916(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26045876 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26045876(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26046788 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26046788(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26047740 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26047740(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26048652 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26048652(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26049604 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26049604(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26050516 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26050516(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26051468 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26051468(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26052380 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26052380(runtimeScene, asyncObjectsList)));
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


};gdjs.lvl6Code.asyncCallback26053780 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26053780(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26054732 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26054732(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26055348 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26055348(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26056628 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26056628(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26057540 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26057540(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26058572 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26058572(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26059484 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26059484(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26060396 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26060396(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26061348 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26061348(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26062348 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26062348(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26063308 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26063308(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26064220 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26064220(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26065172 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26065172(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26066084 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26066084(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26067036 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26067036(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26067948 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26067948(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26068900 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26068900(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26069924 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26069924(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26070884 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26070884(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26071796 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26071796(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26072748 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26072748(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26073660 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26073660(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26074612 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26074612(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26075524 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26075524(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26076476 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26076476(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26077388 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26077388(runtimeScene, asyncObjectsList)));
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


};gdjs.lvl6Code.asyncCallback26078796 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26078796(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26079748 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26079748(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26080364 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26080364(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26081644 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26081644(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26082556 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26082556(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26083588 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26083588(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26084500 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26084500(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26085412 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26085412(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26086364 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26086364(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26087364 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26087364(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26088324 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26088324(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26089236 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26089236(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26090188 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26090188(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26091100 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26091100(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26092052 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26092052(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26092964 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26092964(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26093916 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26093916(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26094940 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26094940(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26095900 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26095900(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26096812 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26096812(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26097764 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26097764(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26098676 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26098676(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26099628 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26099628(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26100540 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26100540(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26101492 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26101492(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26102404 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26102404(runtimeScene, asyncObjectsList)));
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


};gdjs.lvl6Code.asyncCallback26103812 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26103812(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26104764 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26104764(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26105380 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26105380(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26106660 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26106660(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26107572 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26107572(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26108604 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26108604(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26109516 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26109516(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26110428 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26110428(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26111380 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26111380(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26112380 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26112380(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26113340 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26113340(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26114252 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26114252(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26115204 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26115204(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26116116 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26116116(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26117068 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26117068(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26117980 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26117980(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26118932 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26118932(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26119956 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26119956(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26120916 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26120916(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26121828 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26121828(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26122780 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26122780(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26123692 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26123692(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26124644 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26124644(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26125556 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26125556(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26126508 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26126508(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26127420 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26127420(runtimeScene, asyncObjectsList)));
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


};gdjs.lvl6Code.asyncCallback26128820 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26128820(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26129772 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26129772(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26130388 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26130388(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26131668 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26131668(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26132580 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26132580(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26133612 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26133612(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26134524 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26134524(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26135436 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26135436(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26136388 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26136388(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26137388 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26137388(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26138348 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26138348(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26139260 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26139260(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26140212 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26140212(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26141124 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26141124(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26142076 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26142076(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26142988 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26142988(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26143940 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26143940(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26144964 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26144964(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26145924 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26145924(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26146836 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26146836(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26147788 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26147788(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26148700 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26148700(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26149652 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26149652(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26150564 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26150564(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26151516 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26151516(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26152428 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26152428(runtimeScene, asyncObjectsList)));
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


};gdjs.lvl6Code.asyncCallback26153436 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26153436(runtimeScene, asyncObjectsList)));
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


};gdjs.lvl6Code.asyncCallback26155692 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26155692(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl6Code.asyncCallback26154540 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.lvl6Code.asyncCallback26154540(runtimeScene, asyncObjectsList)));
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
