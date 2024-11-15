gdjs.lvl9Code = {};
gdjs.lvl9Code.localVariables = [];
gdjs.lvl9Code.GDestrellaObjects3_2final = [];

gdjs.lvl9Code.GDfalso1Objects2_2final = [];

gdjs.lvl9Code.GDfalso2Objects1_2final = [];

gdjs.lvl9Code.forEachIndex3 = 0;

gdjs.lvl9Code.forEachIndex4 = 0;

gdjs.lvl9Code.forEachObjects3 = [];

gdjs.lvl9Code.forEachObjects4 = [];

gdjs.lvl9Code.forEachTemporary3 = null;

gdjs.lvl9Code.forEachTemporary4 = null;

gdjs.lvl9Code.forEachTotalCount3 = 0;

gdjs.lvl9Code.forEachTotalCount4 = 0;

gdjs.lvl9Code.GDfondoObjects1= [];
gdjs.lvl9Code.GDfondoObjects2= [];
gdjs.lvl9Code.GDfondoObjects3= [];
gdjs.lvl9Code.GDfondoObjects4= [];
gdjs.lvl9Code.GDfondoObjects5= [];
gdjs.lvl9Code.GDstage_95959Objects1= [];
gdjs.lvl9Code.GDstage_95959Objects2= [];
gdjs.lvl9Code.GDstage_95959Objects3= [];
gdjs.lvl9Code.GDstage_95959Objects4= [];
gdjs.lvl9Code.GDstage_95959Objects5= [];
gdjs.lvl9Code.GDpisoObjects1= [];
gdjs.lvl9Code.GDpisoObjects2= [];
gdjs.lvl9Code.GDpisoObjects3= [];
gdjs.lvl9Code.GDpisoObjects4= [];
gdjs.lvl9Code.GDpisoObjects5= [];
gdjs.lvl9Code.GDestrellaObjects1= [];
gdjs.lvl9Code.GDestrellaObjects2= [];
gdjs.lvl9Code.GDestrellaObjects3= [];
gdjs.lvl9Code.GDestrellaObjects4= [];
gdjs.lvl9Code.GDestrellaObjects5= [];
gdjs.lvl9Code.GDfalso1Objects1= [];
gdjs.lvl9Code.GDfalso1Objects2= [];
gdjs.lvl9Code.GDfalso1Objects3= [];
gdjs.lvl9Code.GDfalso1Objects4= [];
gdjs.lvl9Code.GDfalso1Objects5= [];
gdjs.lvl9Code.GDfalso2Objects1= [];
gdjs.lvl9Code.GDfalso2Objects2= [];
gdjs.lvl9Code.GDfalso2Objects3= [];
gdjs.lvl9Code.GDfalso2Objects4= [];
gdjs.lvl9Code.GDfalso2Objects5= [];
gdjs.lvl9Code.GDcargaObjects1= [];
gdjs.lvl9Code.GDcargaObjects2= [];
gdjs.lvl9Code.GDcargaObjects3= [];
gdjs.lvl9Code.GDcargaObjects4= [];
gdjs.lvl9Code.GDcargaObjects5= [];
gdjs.lvl9Code.GDsalirObjects1= [];
gdjs.lvl9Code.GDsalirObjects2= [];
gdjs.lvl9Code.GDsalirObjects3= [];
gdjs.lvl9Code.GDsalirObjects4= [];
gdjs.lvl9Code.GDsalirObjects5= [];
gdjs.lvl9Code.GDclearObjects1= [];
gdjs.lvl9Code.GDclearObjects2= [];
gdjs.lvl9Code.GDclearObjects3= [];
gdjs.lvl9Code.GDclearObjects4= [];
gdjs.lvl9Code.GDclearObjects5= [];
gdjs.lvl9Code.GDclickObjects1= [];
gdjs.lvl9Code.GDclickObjects2= [];
gdjs.lvl9Code.GDclickObjects3= [];
gdjs.lvl9Code.GDclickObjects4= [];
gdjs.lvl9Code.GDclickObjects5= [];


gdjs.lvl9Code.asyncCallback27987972 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl9Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("salir"), gdjs.lvl9Code.GDsalirObjects2);

{for(var i = 0, len = gdjs.lvl9Code.GDsalirObjects2.length ;i < len;++i) {
    gdjs.lvl9Code.GDsalirObjects2[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}gdjs.lvl9Code.localVariables.length = 0;
}
gdjs.lvl9Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl9Code.localVariables);
for (const obj of gdjs.lvl9Code.GDsalirObjects1) asyncObjectsList.addObject("salir", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.lvl9Code.asyncCallback27987972(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl9Code.asyncCallback27990084 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl9Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "niveles", false);
}gdjs.lvl9Code.localVariables.length = 0;
}
gdjs.lvl9Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl9Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.lvl9Code.asyncCallback27990084(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl9Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("clear"), gdjs.lvl9Code.GDclearObjects2);
gdjs.copyArray(runtimeScene.getObjects("estrella"), gdjs.lvl9Code.GDestrellaObjects2);
gdjs.copyArray(runtimeScene.getObjects("falso1"), gdjs.lvl9Code.GDfalso1Objects2);
gdjs.copyArray(runtimeScene.getObjects("falso2"), gdjs.lvl9Code.GDfalso2Objects2);
{for(var i = 0, len = gdjs.lvl9Code.GDclearObjects2.length ;i < len;++i) {
    gdjs.lvl9Code.GDclearObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.lvl9Code.GDestrellaObjects2.length ;i < len;++i) {
    gdjs.lvl9Code.GDestrellaObjects2[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.lvl9Code.GDfalso1Objects2.length ;i < len;++i) {
    gdjs.lvl9Code.GDfalso1Objects2[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.lvl9Code.GDfalso2Objects2.length ;i < len;++i) {
    gdjs.lvl9Code.GDfalso2Objects2[i].getBehavior("Animation").pauseAnimation();
}
}{gdjs.evtTools.input.showCursor(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.doesSceneExist(runtimeScene, "lvl7");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("estrella"), gdjs.lvl9Code.GDestrellaObjects1);
gdjs.copyArray(runtimeScene.getObjects("falso1"), gdjs.lvl9Code.GDfalso1Objects1);
gdjs.copyArray(runtimeScene.getObjects("falso2"), gdjs.lvl9Code.GDfalso2Objects1);
gdjs.copyArray(runtimeScene.getObjects("stage_9"), gdjs.lvl9Code.GDstage_95959Objects1);
{for(var i = 0, len = gdjs.lvl9Code.GDstage_95959Objects1.length ;i < len;++i) {
    gdjs.lvl9Code.GDstage_95959Objects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.lvl9Code.GDestrellaObjects1.length ;i < len;++i) {
    gdjs.lvl9Code.GDestrellaObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.lvl9Code.GDfalso1Objects1.length ;i < len;++i) {
    gdjs.lvl9Code.GDfalso1Objects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.lvl9Code.GDfalso2Objects1.length ;i < len;++i) {
    gdjs.lvl9Code.GDfalso2Objects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}}

}


};gdjs.lvl9Code.asyncCallback28364356 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl9Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("stage_9"), gdjs.lvl9Code.GDstage_95959Objects3);

{for(var i = 0, len = gdjs.lvl9Code.GDstage_95959Objects3.length ;i < len;++i) {
    gdjs.lvl9Code.GDstage_95959Objects3[i].deleteFromScene(runtimeScene);
}
}gdjs.lvl9Code.localVariables.length = 0;
}
gdjs.lvl9Code.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl9Code.localVariables);
for (const obj of gdjs.lvl9Code.GDstage_95959Objects2) asyncObjectsList.addObject("stage_9", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.lvl9Code.asyncCallback28364356(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl9Code.asyncCallback28363716 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl9Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("stage_9"), gdjs.lvl9Code.GDstage_95959Objects2);

{for(var i = 0, len = gdjs.lvl9Code.GDstage_95959Objects2.length ;i < len;++i) {
    gdjs.lvl9Code.GDstage_95959Objects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
{ //Subevents
gdjs.lvl9Code.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.lvl9Code.localVariables.length = 0;
}
gdjs.lvl9Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl9Code.localVariables);
for (const obj of gdjs.lvl9Code.GDstage_95959Objects1) asyncObjectsList.addObject("stage_9", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.lvl9Code.asyncCallback28363716(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl9Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("stage_9"), gdjs.lvl9Code.GDstage_95959Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl9Code.GDstage_95959Objects2.length;i<l;++i) {
    if ( gdjs.lvl9Code.GDstage_95959Objects2[i].getX() < 329 ) {
        isConditionTrue_0 = true;
        gdjs.lvl9Code.GDstage_95959Objects2[k] = gdjs.lvl9Code.GDstage_95959Objects2[i];
        ++k;
    }
}
gdjs.lvl9Code.GDstage_95959Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.lvl9Code.GDstage_95959Objects2 */
{for(var i = 0, len = gdjs.lvl9Code.GDstage_95959Objects2.length ;i < len;++i) {
    gdjs.lvl9Code.GDstage_95959Objects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("stage_9"), gdjs.lvl9Code.GDstage_95959Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl9Code.GDstage_95959Objects1.length;i<l;++i) {
    if ( gdjs.lvl9Code.GDstage_95959Objects1[i].getX() >= 329 ) {
        isConditionTrue_0 = true;
        gdjs.lvl9Code.GDstage_95959Objects1[k] = gdjs.lvl9Code.GDstage_95959Objects1[i];
        ++k;
    }
}
gdjs.lvl9Code.GDstage_95959Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.lvl9Code.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.lvl9Code.eventsList6 = function(runtimeScene) {

};gdjs.lvl9Code.mapOfGDgdjs_9546lvl9Code_9546GDestrellaObjects3Objects = Hashtable.newFrom({"estrella": gdjs.lvl9Code.GDestrellaObjects3});
gdjs.lvl9Code.mapOfGDgdjs_9546lvl9Code_9546GDpisoObjects3Objects = Hashtable.newFrom({"piso": gdjs.lvl9Code.GDpisoObjects3});
gdjs.lvl9Code.asyncCallback28368620 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl9Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("estrella"), gdjs.lvl9Code.GDestrellaObjects4);

{for(var i = 0, len = gdjs.lvl9Code.GDestrellaObjects4.length ;i < len;++i) {
    gdjs.lvl9Code.GDestrellaObjects4[i].getBehavior("PlatformerObject").setJumpSpeed(gdjs.lvl9Code.GDestrellaObjects4[i].getBehavior("PlatformerObject").getJumpSpeed() - (200));
}
}gdjs.lvl9Code.localVariables.length = 0;
}
gdjs.lvl9Code.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl9Code.localVariables);
for (const obj of gdjs.lvl9Code.GDestrellaObjects3) asyncObjectsList.addObject("estrella", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.lvl9Code.asyncCallback28368620(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl9Code.mapOfGDgdjs_9546lvl9Code_9546GDestrellaObjects3Objects = Hashtable.newFrom({"estrella": gdjs.lvl9Code.GDestrellaObjects3});
gdjs.lvl9Code.mapOfGDgdjs_9546lvl9Code_9546GDpisoObjects3Objects = Hashtable.newFrom({"piso": gdjs.lvl9Code.GDpisoObjects3});
gdjs.lvl9Code.eventsList8 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(10), false, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setBoolean(true);
}}

}


};gdjs.lvl9Code.asyncCallback28374612 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl9Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "niveles", false);
}
{ //Subevents
gdjs.lvl9Code.eventsList8(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.lvl9Code.localVariables.length = 0;
}
gdjs.lvl9Code.eventsList9 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl9Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.lvl9Code.asyncCallback28374612(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl9Code.asyncCallback28373724 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl9Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.lvl9Code.GDcargaObjects3);
gdjs.copyArray(runtimeScene.getObjects("clear"), gdjs.lvl9Code.GDclearObjects3);
{for(var i = 0, len = gdjs.lvl9Code.GDclearObjects3.length ;i < len;++i) {
    gdjs.lvl9Code.GDclearObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.lvl9Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.lvl9Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 4, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.lvl9Code.eventsList9(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.lvl9Code.localVariables.length = 0;
}
gdjs.lvl9Code.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl9Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.lvl9Code.asyncCallback28373724(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl9Code.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("estrella"), gdjs.lvl9Code.GDestrellaObjects3);

for (gdjs.lvl9Code.forEachIndex4 = 0;gdjs.lvl9Code.forEachIndex4 < gdjs.lvl9Code.GDestrellaObjects3.length;++gdjs.lvl9Code.forEachIndex4) {
gdjs.lvl9Code.GDestrellaObjects4.length = 0;


gdjs.lvl9Code.forEachTemporary4 = gdjs.lvl9Code.GDestrellaObjects3[gdjs.lvl9Code.forEachIndex4];
gdjs.lvl9Code.GDestrellaObjects4.push(gdjs.lvl9Code.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.lvl9Code.GDestrellaObjects4.length;i<l;++i) {
    if ( gdjs.lvl9Code.GDestrellaObjects4[i].getBehavior("PlatformerObject").getJumpSpeed() < 200 ) {
        isConditionTrue_1 = true;
        gdjs.lvl9Code.GDestrellaObjects4[k] = gdjs.lvl9Code.GDestrellaObjects4[i];
        ++k;
    }
}
gdjs.lvl9Code.GDestrellaObjects4.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.lvl9Code.GDestrellaObjects4.length;i<l;++i) {
    if ( gdjs.lvl9Code.GDestrellaObjects4[i].getBehavior("Arrastrable").wasJustDropped() ) {
        isConditionTrue_1 = true;
        gdjs.lvl9Code.GDestrellaObjects4[k] = gdjs.lvl9Code.GDestrellaObjects4[i];
        ++k;
    }
}
gdjs.lvl9Code.GDestrellaObjects4.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.lvl9Code.GDestrellaObjects4.length ;i < len;++i) {
    gdjs.lvl9Code.GDestrellaObjects4[i].getBehavior("PlatformerObject").setJumpSpeed(600);
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("estrella"), gdjs.lvl9Code.GDestrellaObjects3);
gdjs.copyArray(runtimeScene.getObjects("piso"), gdjs.lvl9Code.GDpisoObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.lvl9Code.mapOfGDgdjs_9546lvl9Code_9546GDestrellaObjects3Objects, gdjs.lvl9Code.mapOfGDgdjs_9546lvl9Code_9546GDpisoObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.lvl9Code.GDestrellaObjects3.length;i<l;++i) {
    if ( gdjs.lvl9Code.GDestrellaObjects3[i].getBehavior("PlatformerObject").getJumpSpeed() >= 200 ) {
        isConditionTrue_1 = true;
        gdjs.lvl9Code.GDestrellaObjects3[k] = gdjs.lvl9Code.GDestrellaObjects3[i];
        ++k;
    }
}
gdjs.lvl9Code.GDestrellaObjects3.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.lvl9Code.GDestrellaObjects3 */
{for(var i = 0, len = gdjs.lvl9Code.GDestrellaObjects3.length ;i < len;++i) {
    gdjs.lvl9Code.GDestrellaObjects3[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
{ //Subevents
gdjs.lvl9Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("estrella"), gdjs.lvl9Code.GDestrellaObjects3);
gdjs.copyArray(runtimeScene.getObjects("piso"), gdjs.lvl9Code.GDpisoObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.lvl9Code.mapOfGDgdjs_9546lvl9Code_9546GDestrellaObjects3Objects, gdjs.lvl9Code.mapOfGDgdjs_9546lvl9Code_9546GDpisoObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{gdjs.lvl9Code.GDestrellaObjects3_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(gdjs.lvl9Code.GDestrellaObjects3, gdjs.lvl9Code.GDestrellaObjects4);

for (var i = 0, k = 0, l = gdjs.lvl9Code.GDestrellaObjects4.length;i<l;++i) {
    if ( gdjs.lvl9Code.GDestrellaObjects4[i].getBehavior("PlatformerObject").getJumpSpeed() == 400 ) {
        isConditionTrue_2 = true;
        gdjs.lvl9Code.GDestrellaObjects4[k] = gdjs.lvl9Code.GDestrellaObjects4[i];
        ++k;
    }
}
gdjs.lvl9Code.GDestrellaObjects4.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.lvl9Code.GDestrellaObjects4.length; j < jLen ; ++j) {
        if ( gdjs.lvl9Code.GDestrellaObjects3_2final.indexOf(gdjs.lvl9Code.GDestrellaObjects4[j]) === -1 )
            gdjs.lvl9Code.GDestrellaObjects3_2final.push(gdjs.lvl9Code.GDestrellaObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.lvl9Code.GDestrellaObjects3, gdjs.lvl9Code.GDestrellaObjects4);

for (var i = 0, k = 0, l = gdjs.lvl9Code.GDestrellaObjects4.length;i<l;++i) {
    if ( gdjs.lvl9Code.GDestrellaObjects4[i].getBehavior("PlatformerObject").getJumpSpeed() == 600 ) {
        isConditionTrue_2 = true;
        gdjs.lvl9Code.GDestrellaObjects4[k] = gdjs.lvl9Code.GDestrellaObjects4[i];
        ++k;
    }
}
gdjs.lvl9Code.GDestrellaObjects4.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.lvl9Code.GDestrellaObjects4.length; j < jLen ; ++j) {
        if ( gdjs.lvl9Code.GDestrellaObjects3_2final.indexOf(gdjs.lvl9Code.GDestrellaObjects4[j]) === -1 )
            gdjs.lvl9Code.GDestrellaObjects3_2final.push(gdjs.lvl9Code.GDestrellaObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.lvl9Code.GDestrellaObjects3_2final, gdjs.lvl9Code.GDestrellaObjects3);
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.lvl9Code.GDestrellaObjects3 */
{for(var i = 0, len = gdjs.lvl9Code.GDestrellaObjects3.length ;i < len;++i) {
    gdjs.lvl9Code.GDestrellaObjects3[i].setAnimationFrame(gdjs.lvl9Code.GDestrellaObjects3[i].getAnimationFrame() + (1));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("estrella"), gdjs.lvl9Code.GDestrellaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl9Code.GDestrellaObjects2.length;i<l;++i) {
    if ( gdjs.lvl9Code.GDestrellaObjects2[i].getAnimationFrame() == 6 ) {
        isConditionTrue_0 = true;
        gdjs.lvl9Code.GDestrellaObjects2[k] = gdjs.lvl9Code.GDestrellaObjects2[i];
        ++k;
    }
}
gdjs.lvl9Code.GDestrellaObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("salir"), gdjs.lvl9Code.GDsalirObjects2);
{for(var i = 0, len = gdjs.lvl9Code.GDsalirObjects2.length ;i < len;++i) {
    gdjs.lvl9Code.GDsalirObjects2[i].hide();
}
}
{ //Subevents
gdjs.lvl9Code.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.lvl9Code.eventsList12 = function(runtimeScene) {

};gdjs.lvl9Code.mapOfGDgdjs_9546lvl9Code_9546GDfalso1Objects3Objects = Hashtable.newFrom({"falso1": gdjs.lvl9Code.GDfalso1Objects3});
gdjs.lvl9Code.mapOfGDgdjs_9546lvl9Code_9546GDpisoObjects3Objects = Hashtable.newFrom({"piso": gdjs.lvl9Code.GDpisoObjects3});
gdjs.lvl9Code.asyncCallback28380076 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl9Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("falso1"), gdjs.lvl9Code.GDfalso1Objects4);

{for(var i = 0, len = gdjs.lvl9Code.GDfalso1Objects4.length ;i < len;++i) {
    gdjs.lvl9Code.GDfalso1Objects4[i].getBehavior("PlatformerObject").setJumpSpeed(gdjs.lvl9Code.GDfalso1Objects4[i].getBehavior("PlatformerObject").getJumpSpeed() - (200));
}
}gdjs.lvl9Code.localVariables.length = 0;
}
gdjs.lvl9Code.eventsList13 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl9Code.localVariables);
for (const obj of gdjs.lvl9Code.GDfalso1Objects3) asyncObjectsList.addObject("falso1", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl9Code.asyncCallback28380076(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl9Code.mapOfGDgdjs_9546lvl9Code_9546GDfalso1Objects2Objects = Hashtable.newFrom({"falso1": gdjs.lvl9Code.GDfalso1Objects2});
gdjs.lvl9Code.mapOfGDgdjs_9546lvl9Code_9546GDpisoObjects2Objects = Hashtable.newFrom({"piso": gdjs.lvl9Code.GDpisoObjects2});
gdjs.lvl9Code.asyncCallback28384204 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl9Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("falso1"), gdjs.lvl9Code.GDfalso1Objects3);

{for(var i = 0, len = gdjs.lvl9Code.GDfalso1Objects3.length ;i < len;++i) {
    gdjs.lvl9Code.GDfalso1Objects3[i].setAnimationFrame(gdjs.lvl9Code.GDfalso1Objects3[i].getAnimationFrame() + (1));
}
}gdjs.lvl9Code.localVariables.length = 0;
}
gdjs.lvl9Code.eventsList14 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl9Code.localVariables);
for (const obj of gdjs.lvl9Code.GDfalso1Objects2) asyncObjectsList.addObject("falso1", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.lvl9Code.asyncCallback28384204(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl9Code.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("falso1"), gdjs.lvl9Code.GDfalso1Objects3);

for (gdjs.lvl9Code.forEachIndex4 = 0;gdjs.lvl9Code.forEachIndex4 < gdjs.lvl9Code.GDfalso1Objects3.length;++gdjs.lvl9Code.forEachIndex4) {
gdjs.lvl9Code.GDfalso1Objects4.length = 0;


gdjs.lvl9Code.forEachTemporary4 = gdjs.lvl9Code.GDfalso1Objects3[gdjs.lvl9Code.forEachIndex4];
gdjs.lvl9Code.GDfalso1Objects4.push(gdjs.lvl9Code.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.lvl9Code.GDfalso1Objects4.length;i<l;++i) {
    if ( gdjs.lvl9Code.GDfalso1Objects4[i].getBehavior("PlatformerObject").getJumpSpeed() < 200 ) {
        isConditionTrue_1 = true;
        gdjs.lvl9Code.GDfalso1Objects4[k] = gdjs.lvl9Code.GDfalso1Objects4[i];
        ++k;
    }
}
gdjs.lvl9Code.GDfalso1Objects4.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.lvl9Code.GDfalso1Objects4.length;i<l;++i) {
    if ( gdjs.lvl9Code.GDfalso1Objects4[i].getBehavior("Arrastrable").wasJustDropped() ) {
        isConditionTrue_1 = true;
        gdjs.lvl9Code.GDfalso1Objects4[k] = gdjs.lvl9Code.GDfalso1Objects4[i];
        ++k;
    }
}
gdjs.lvl9Code.GDfalso1Objects4.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.lvl9Code.GDfalso1Objects4.length ;i < len;++i) {
    gdjs.lvl9Code.GDfalso1Objects4[i].getBehavior("PlatformerObject").setJumpSpeed(600);
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("falso1"), gdjs.lvl9Code.GDfalso1Objects3);
gdjs.copyArray(runtimeScene.getObjects("piso"), gdjs.lvl9Code.GDpisoObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.lvl9Code.mapOfGDgdjs_9546lvl9Code_9546GDfalso1Objects3Objects, gdjs.lvl9Code.mapOfGDgdjs_9546lvl9Code_9546GDpisoObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.lvl9Code.GDfalso1Objects3.length;i<l;++i) {
    if ( gdjs.lvl9Code.GDfalso1Objects3[i].getBehavior("PlatformerObject").getJumpSpeed() >= 200 ) {
        isConditionTrue_1 = true;
        gdjs.lvl9Code.GDfalso1Objects3[k] = gdjs.lvl9Code.GDfalso1Objects3[i];
        ++k;
    }
}
gdjs.lvl9Code.GDfalso1Objects3.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.lvl9Code.GDfalso1Objects3 */
{for(var i = 0, len = gdjs.lvl9Code.GDfalso1Objects3.length ;i < len;++i) {
    gdjs.lvl9Code.GDfalso1Objects3[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
{ //Subevents
gdjs.lvl9Code.eventsList13(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("falso1"), gdjs.lvl9Code.GDfalso1Objects2);
gdjs.copyArray(runtimeScene.getObjects("piso"), gdjs.lvl9Code.GDpisoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.lvl9Code.mapOfGDgdjs_9546lvl9Code_9546GDfalso1Objects2Objects, gdjs.lvl9Code.mapOfGDgdjs_9546lvl9Code_9546GDpisoObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{gdjs.lvl9Code.GDfalso1Objects2_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(gdjs.lvl9Code.GDfalso1Objects2, gdjs.lvl9Code.GDfalso1Objects3);

for (var i = 0, k = 0, l = gdjs.lvl9Code.GDfalso1Objects3.length;i<l;++i) {
    if ( gdjs.lvl9Code.GDfalso1Objects3[i].getBehavior("PlatformerObject").getJumpSpeed() == 400 ) {
        isConditionTrue_2 = true;
        gdjs.lvl9Code.GDfalso1Objects3[k] = gdjs.lvl9Code.GDfalso1Objects3[i];
        ++k;
    }
}
gdjs.lvl9Code.GDfalso1Objects3.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.lvl9Code.GDfalso1Objects3.length; j < jLen ; ++j) {
        if ( gdjs.lvl9Code.GDfalso1Objects2_2final.indexOf(gdjs.lvl9Code.GDfalso1Objects3[j]) === -1 )
            gdjs.lvl9Code.GDfalso1Objects2_2final.push(gdjs.lvl9Code.GDfalso1Objects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.lvl9Code.GDfalso1Objects2, gdjs.lvl9Code.GDfalso1Objects3);

for (var i = 0, k = 0, l = gdjs.lvl9Code.GDfalso1Objects3.length;i<l;++i) {
    if ( gdjs.lvl9Code.GDfalso1Objects3[i].getBehavior("PlatformerObject").getJumpSpeed() == 600 ) {
        isConditionTrue_2 = true;
        gdjs.lvl9Code.GDfalso1Objects3[k] = gdjs.lvl9Code.GDfalso1Objects3[i];
        ++k;
    }
}
gdjs.lvl9Code.GDfalso1Objects3.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.lvl9Code.GDfalso1Objects3.length; j < jLen ; ++j) {
        if ( gdjs.lvl9Code.GDfalso1Objects2_2final.indexOf(gdjs.lvl9Code.GDfalso1Objects3[j]) === -1 )
            gdjs.lvl9Code.GDfalso1Objects2_2final.push(gdjs.lvl9Code.GDfalso1Objects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.lvl9Code.GDfalso1Objects2_2final, gdjs.lvl9Code.GDfalso1Objects2);
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.lvl9Code.eventsList14(runtimeScene);} //End of subevents
}

}


};gdjs.lvl9Code.eventsList16 = function(runtimeScene) {

};gdjs.lvl9Code.mapOfGDgdjs_9546lvl9Code_9546GDfalso2Objects2Objects = Hashtable.newFrom({"falso2": gdjs.lvl9Code.GDfalso2Objects2});
gdjs.lvl9Code.mapOfGDgdjs_9546lvl9Code_9546GDpisoObjects2Objects = Hashtable.newFrom({"piso": gdjs.lvl9Code.GDpisoObjects2});
gdjs.lvl9Code.asyncCallback28388668 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl9Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("falso2"), gdjs.lvl9Code.GDfalso2Objects3);

{for(var i = 0, len = gdjs.lvl9Code.GDfalso2Objects3.length ;i < len;++i) {
    gdjs.lvl9Code.GDfalso2Objects3[i].getBehavior("PlatformerObject").setJumpSpeed(gdjs.lvl9Code.GDfalso2Objects3[i].getBehavior("PlatformerObject").getJumpSpeed() - (200));
}
}gdjs.lvl9Code.localVariables.length = 0;
}
gdjs.lvl9Code.eventsList17 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl9Code.localVariables);
for (const obj of gdjs.lvl9Code.GDfalso2Objects2) asyncObjectsList.addObject("falso2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.lvl9Code.asyncCallback28388668(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl9Code.mapOfGDgdjs_9546lvl9Code_9546GDfalso2Objects1Objects = Hashtable.newFrom({"falso2": gdjs.lvl9Code.GDfalso2Objects1});
gdjs.lvl9Code.mapOfGDgdjs_9546lvl9Code_9546GDpisoObjects1Objects = Hashtable.newFrom({"piso": gdjs.lvl9Code.GDpisoObjects1});
gdjs.lvl9Code.asyncCallback27833252 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl9Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("falso2"), gdjs.lvl9Code.GDfalso2Objects2);

{for(var i = 0, len = gdjs.lvl9Code.GDfalso2Objects2.length ;i < len;++i) {
    gdjs.lvl9Code.GDfalso2Objects2[i].setAnimationFrame(gdjs.lvl9Code.GDfalso2Objects2[i].getAnimationFrame() + (1));
}
}gdjs.lvl9Code.localVariables.length = 0;
}
gdjs.lvl9Code.eventsList18 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl9Code.localVariables);
for (const obj of gdjs.lvl9Code.GDfalso2Objects1) asyncObjectsList.addObject("falso2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.lvl9Code.asyncCallback27833252(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl9Code.eventsList19 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("falso2"), gdjs.lvl9Code.GDfalso2Objects2);

for (gdjs.lvl9Code.forEachIndex3 = 0;gdjs.lvl9Code.forEachIndex3 < gdjs.lvl9Code.GDfalso2Objects2.length;++gdjs.lvl9Code.forEachIndex3) {
gdjs.lvl9Code.GDfalso2Objects3.length = 0;


gdjs.lvl9Code.forEachTemporary3 = gdjs.lvl9Code.GDfalso2Objects2[gdjs.lvl9Code.forEachIndex3];
gdjs.lvl9Code.GDfalso2Objects3.push(gdjs.lvl9Code.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.lvl9Code.GDfalso2Objects3.length;i<l;++i) {
    if ( gdjs.lvl9Code.GDfalso2Objects3[i].getBehavior("PlatformerObject").getJumpSpeed() < 200 ) {
        isConditionTrue_1 = true;
        gdjs.lvl9Code.GDfalso2Objects3[k] = gdjs.lvl9Code.GDfalso2Objects3[i];
        ++k;
    }
}
gdjs.lvl9Code.GDfalso2Objects3.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.lvl9Code.GDfalso2Objects3.length;i<l;++i) {
    if ( gdjs.lvl9Code.GDfalso2Objects3[i].getBehavior("Arrastrable").wasJustDropped() ) {
        isConditionTrue_1 = true;
        gdjs.lvl9Code.GDfalso2Objects3[k] = gdjs.lvl9Code.GDfalso2Objects3[i];
        ++k;
    }
}
gdjs.lvl9Code.GDfalso2Objects3.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.lvl9Code.GDfalso2Objects3.length ;i < len;++i) {
    gdjs.lvl9Code.GDfalso2Objects3[i].getBehavior("PlatformerObject").setJumpSpeed(600);
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("falso2"), gdjs.lvl9Code.GDfalso2Objects2);
gdjs.copyArray(runtimeScene.getObjects("piso"), gdjs.lvl9Code.GDpisoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.lvl9Code.mapOfGDgdjs_9546lvl9Code_9546GDfalso2Objects2Objects, gdjs.lvl9Code.mapOfGDgdjs_9546lvl9Code_9546GDpisoObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.lvl9Code.GDfalso2Objects2.length;i<l;++i) {
    if ( gdjs.lvl9Code.GDfalso2Objects2[i].getBehavior("PlatformerObject").getJumpSpeed() >= 200 ) {
        isConditionTrue_1 = true;
        gdjs.lvl9Code.GDfalso2Objects2[k] = gdjs.lvl9Code.GDfalso2Objects2[i];
        ++k;
    }
}
gdjs.lvl9Code.GDfalso2Objects2.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.lvl9Code.GDfalso2Objects2 */
{for(var i = 0, len = gdjs.lvl9Code.GDfalso2Objects2.length ;i < len;++i) {
    gdjs.lvl9Code.GDfalso2Objects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
{ //Subevents
gdjs.lvl9Code.eventsList17(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("falso2"), gdjs.lvl9Code.GDfalso2Objects1);
gdjs.copyArray(runtimeScene.getObjects("piso"), gdjs.lvl9Code.GDpisoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.lvl9Code.mapOfGDgdjs_9546lvl9Code_9546GDfalso2Objects1Objects, gdjs.lvl9Code.mapOfGDgdjs_9546lvl9Code_9546GDpisoObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{gdjs.lvl9Code.GDfalso2Objects1_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(gdjs.lvl9Code.GDfalso2Objects1, gdjs.lvl9Code.GDfalso2Objects2);

for (var i = 0, k = 0, l = gdjs.lvl9Code.GDfalso2Objects2.length;i<l;++i) {
    if ( gdjs.lvl9Code.GDfalso2Objects2[i].getBehavior("PlatformerObject").getJumpSpeed() == 400 ) {
        isConditionTrue_2 = true;
        gdjs.lvl9Code.GDfalso2Objects2[k] = gdjs.lvl9Code.GDfalso2Objects2[i];
        ++k;
    }
}
gdjs.lvl9Code.GDfalso2Objects2.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.lvl9Code.GDfalso2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.lvl9Code.GDfalso2Objects1_2final.indexOf(gdjs.lvl9Code.GDfalso2Objects2[j]) === -1 )
            gdjs.lvl9Code.GDfalso2Objects1_2final.push(gdjs.lvl9Code.GDfalso2Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.lvl9Code.GDfalso2Objects1, gdjs.lvl9Code.GDfalso2Objects2);

for (var i = 0, k = 0, l = gdjs.lvl9Code.GDfalso2Objects2.length;i<l;++i) {
    if ( gdjs.lvl9Code.GDfalso2Objects2[i].getBehavior("PlatformerObject").getJumpSpeed() == 600 ) {
        isConditionTrue_2 = true;
        gdjs.lvl9Code.GDfalso2Objects2[k] = gdjs.lvl9Code.GDfalso2Objects2[i];
        ++k;
    }
}
gdjs.lvl9Code.GDfalso2Objects2.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.lvl9Code.GDfalso2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.lvl9Code.GDfalso2Objects1_2final.indexOf(gdjs.lvl9Code.GDfalso2Objects2[j]) === -1 )
            gdjs.lvl9Code.GDfalso2Objects1_2final.push(gdjs.lvl9Code.GDfalso2Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.lvl9Code.GDfalso2Objects1_2final, gdjs.lvl9Code.GDfalso2Objects1);
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.lvl9Code.eventsList18(runtimeScene);} //End of subevents
}

}


};gdjs.lvl9Code.eventsList20 = function(runtimeScene) {

{


gdjs.lvl9Code.eventsList11(runtimeScene);
}


{


gdjs.lvl9Code.eventsList15(runtimeScene);
}


{


gdjs.lvl9Code.eventsList19(runtimeScene);
}


};gdjs.lvl9Code.eventsList21 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.lvl9Code.GDcargaObjects1);
gdjs.copyArray(runtimeScene.getObjects("salir"), gdjs.lvl9Code.GDsalirObjects1);
{for(var i = 0, len = gdjs.lvl9Code.GDsalirObjects1.length ;i < len;++i) {
    gdjs.lvl9Code.GDsalirObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.lvl9Code.GDcargaObjects1.length ;i < len;++i) {
    gdjs.lvl9Code.GDcargaObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Flash", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.lvl9Code.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("salir"), gdjs.lvl9Code.GDsalirObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl9Code.GDsalirObjects1.length;i<l;++i) {
    if ( gdjs.lvl9Code.GDsalirObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lvl9Code.GDsalirObjects1[k] = gdjs.lvl9Code.GDsalirObjects1[i];
        ++k;
    }
}
gdjs.lvl9Code.GDsalirObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.lvl9Code.GDcargaObjects1);
{for(var i = 0, len = gdjs.lvl9Code.GDcargaObjects1.length ;i < len;++i) {
    gdjs.lvl9Code.GDcargaObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Flash", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(0);
}
{ //Subevents
gdjs.lvl9Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.lvl9Code.eventsList2(runtimeScene);
}


{


gdjs.lvl9Code.eventsList5(runtimeScene);
}


{


gdjs.lvl9Code.eventsList20(runtimeScene);
}


};

gdjs.lvl9Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.lvl9Code.GDfondoObjects1.length = 0;
gdjs.lvl9Code.GDfondoObjects2.length = 0;
gdjs.lvl9Code.GDfondoObjects3.length = 0;
gdjs.lvl9Code.GDfondoObjects4.length = 0;
gdjs.lvl9Code.GDfondoObjects5.length = 0;
gdjs.lvl9Code.GDstage_95959Objects1.length = 0;
gdjs.lvl9Code.GDstage_95959Objects2.length = 0;
gdjs.lvl9Code.GDstage_95959Objects3.length = 0;
gdjs.lvl9Code.GDstage_95959Objects4.length = 0;
gdjs.lvl9Code.GDstage_95959Objects5.length = 0;
gdjs.lvl9Code.GDpisoObjects1.length = 0;
gdjs.lvl9Code.GDpisoObjects2.length = 0;
gdjs.lvl9Code.GDpisoObjects3.length = 0;
gdjs.lvl9Code.GDpisoObjects4.length = 0;
gdjs.lvl9Code.GDpisoObjects5.length = 0;
gdjs.lvl9Code.GDestrellaObjects1.length = 0;
gdjs.lvl9Code.GDestrellaObjects2.length = 0;
gdjs.lvl9Code.GDestrellaObjects3.length = 0;
gdjs.lvl9Code.GDestrellaObjects4.length = 0;
gdjs.lvl9Code.GDestrellaObjects5.length = 0;
gdjs.lvl9Code.GDfalso1Objects1.length = 0;
gdjs.lvl9Code.GDfalso1Objects2.length = 0;
gdjs.lvl9Code.GDfalso1Objects3.length = 0;
gdjs.lvl9Code.GDfalso1Objects4.length = 0;
gdjs.lvl9Code.GDfalso1Objects5.length = 0;
gdjs.lvl9Code.GDfalso2Objects1.length = 0;
gdjs.lvl9Code.GDfalso2Objects2.length = 0;
gdjs.lvl9Code.GDfalso2Objects3.length = 0;
gdjs.lvl9Code.GDfalso2Objects4.length = 0;
gdjs.lvl9Code.GDfalso2Objects5.length = 0;
gdjs.lvl9Code.GDcargaObjects1.length = 0;
gdjs.lvl9Code.GDcargaObjects2.length = 0;
gdjs.lvl9Code.GDcargaObjects3.length = 0;
gdjs.lvl9Code.GDcargaObjects4.length = 0;
gdjs.lvl9Code.GDcargaObjects5.length = 0;
gdjs.lvl9Code.GDsalirObjects1.length = 0;
gdjs.lvl9Code.GDsalirObjects2.length = 0;
gdjs.lvl9Code.GDsalirObjects3.length = 0;
gdjs.lvl9Code.GDsalirObjects4.length = 0;
gdjs.lvl9Code.GDsalirObjects5.length = 0;
gdjs.lvl9Code.GDclearObjects1.length = 0;
gdjs.lvl9Code.GDclearObjects2.length = 0;
gdjs.lvl9Code.GDclearObjects3.length = 0;
gdjs.lvl9Code.GDclearObjects4.length = 0;
gdjs.lvl9Code.GDclearObjects5.length = 0;
gdjs.lvl9Code.GDclickObjects1.length = 0;
gdjs.lvl9Code.GDclickObjects2.length = 0;
gdjs.lvl9Code.GDclickObjects3.length = 0;
gdjs.lvl9Code.GDclickObjects4.length = 0;
gdjs.lvl9Code.GDclickObjects5.length = 0;

gdjs.lvl9Code.eventsList21(runtimeScene);
gdjs.lvl9Code.GDfondoObjects1.length = 0;
gdjs.lvl9Code.GDfondoObjects2.length = 0;
gdjs.lvl9Code.GDfondoObjects3.length = 0;
gdjs.lvl9Code.GDfondoObjects4.length = 0;
gdjs.lvl9Code.GDfondoObjects5.length = 0;
gdjs.lvl9Code.GDstage_95959Objects1.length = 0;
gdjs.lvl9Code.GDstage_95959Objects2.length = 0;
gdjs.lvl9Code.GDstage_95959Objects3.length = 0;
gdjs.lvl9Code.GDstage_95959Objects4.length = 0;
gdjs.lvl9Code.GDstage_95959Objects5.length = 0;
gdjs.lvl9Code.GDpisoObjects1.length = 0;
gdjs.lvl9Code.GDpisoObjects2.length = 0;
gdjs.lvl9Code.GDpisoObjects3.length = 0;
gdjs.lvl9Code.GDpisoObjects4.length = 0;
gdjs.lvl9Code.GDpisoObjects5.length = 0;
gdjs.lvl9Code.GDestrellaObjects1.length = 0;
gdjs.lvl9Code.GDestrellaObjects2.length = 0;
gdjs.lvl9Code.GDestrellaObjects3.length = 0;
gdjs.lvl9Code.GDestrellaObjects4.length = 0;
gdjs.lvl9Code.GDestrellaObjects5.length = 0;
gdjs.lvl9Code.GDfalso1Objects1.length = 0;
gdjs.lvl9Code.GDfalso1Objects2.length = 0;
gdjs.lvl9Code.GDfalso1Objects3.length = 0;
gdjs.lvl9Code.GDfalso1Objects4.length = 0;
gdjs.lvl9Code.GDfalso1Objects5.length = 0;
gdjs.lvl9Code.GDfalso2Objects1.length = 0;
gdjs.lvl9Code.GDfalso2Objects2.length = 0;
gdjs.lvl9Code.GDfalso2Objects3.length = 0;
gdjs.lvl9Code.GDfalso2Objects4.length = 0;
gdjs.lvl9Code.GDfalso2Objects5.length = 0;
gdjs.lvl9Code.GDcargaObjects1.length = 0;
gdjs.lvl9Code.GDcargaObjects2.length = 0;
gdjs.lvl9Code.GDcargaObjects3.length = 0;
gdjs.lvl9Code.GDcargaObjects4.length = 0;
gdjs.lvl9Code.GDcargaObjects5.length = 0;
gdjs.lvl9Code.GDsalirObjects1.length = 0;
gdjs.lvl9Code.GDsalirObjects2.length = 0;
gdjs.lvl9Code.GDsalirObjects3.length = 0;
gdjs.lvl9Code.GDsalirObjects4.length = 0;
gdjs.lvl9Code.GDsalirObjects5.length = 0;
gdjs.lvl9Code.GDclearObjects1.length = 0;
gdjs.lvl9Code.GDclearObjects2.length = 0;
gdjs.lvl9Code.GDclearObjects3.length = 0;
gdjs.lvl9Code.GDclearObjects4.length = 0;
gdjs.lvl9Code.GDclearObjects5.length = 0;
gdjs.lvl9Code.GDclickObjects1.length = 0;
gdjs.lvl9Code.GDclickObjects2.length = 0;
gdjs.lvl9Code.GDclickObjects3.length = 0;
gdjs.lvl9Code.GDclickObjects4.length = 0;
gdjs.lvl9Code.GDclickObjects5.length = 0;


return;

}

gdjs['lvl9Code'] = gdjs.lvl9Code;
