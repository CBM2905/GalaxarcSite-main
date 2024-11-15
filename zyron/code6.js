gdjs.sala3DCode = {};
gdjs.sala3DCode.localVariables = [];
gdjs.sala3DCode.GDestrellaObjects3_2final = [];

gdjs.sala3DCode.GDfalso1Objects2_2final = [];

gdjs.sala3DCode.GDfalso2Objects2_2final = [];

gdjs.sala3DCode.forEachIndex4 = 0;

gdjs.sala3DCode.forEachObjects4 = [];

gdjs.sala3DCode.forEachTemporary4 = null;

gdjs.sala3DCode.forEachTotalCount4 = 0;

gdjs.sala3DCode.GDsala1Objects1= [];
gdjs.sala3DCode.GDsala1Objects2= [];
gdjs.sala3DCode.GDsala1Objects3= [];
gdjs.sala3DCode.GDsala1Objects4= [];
gdjs.sala3DCode.GDfondopuzzleObjects1= [];
gdjs.sala3DCode.GDfondopuzzleObjects2= [];
gdjs.sala3DCode.GDfondopuzzleObjects3= [];
gdjs.sala3DCode.GDfondopuzzleObjects4= [];
gdjs.sala3DCode.GDpiso2Objects1= [];
gdjs.sala3DCode.GDpiso2Objects2= [];
gdjs.sala3DCode.GDpiso2Objects3= [];
gdjs.sala3DCode.GDpiso2Objects4= [];
gdjs.sala3DCode.GDestrellaObjects1= [];
gdjs.sala3DCode.GDestrellaObjects2= [];
gdjs.sala3DCode.GDestrellaObjects3= [];
gdjs.sala3DCode.GDestrellaObjects4= [];
gdjs.sala3DCode.GDfalso1Objects1= [];
gdjs.sala3DCode.GDfalso1Objects2= [];
gdjs.sala3DCode.GDfalso1Objects3= [];
gdjs.sala3DCode.GDfalso1Objects4= [];
gdjs.sala3DCode.GDfalso2Objects1= [];
gdjs.sala3DCode.GDfalso2Objects2= [];
gdjs.sala3DCode.GDfalso2Objects3= [];
gdjs.sala3DCode.GDfalso2Objects4= [];
gdjs.sala3DCode.GDpersonajeObjects1= [];
gdjs.sala3DCode.GDpersonajeObjects2= [];
gdjs.sala3DCode.GDpersonajeObjects3= [];
gdjs.sala3DCode.GDpersonajeObjects4= [];
gdjs.sala3DCode.GDcargaObjects1= [];
gdjs.sala3DCode.GDcargaObjects2= [];
gdjs.sala3DCode.GDcargaObjects3= [];
gdjs.sala3DCode.GDcargaObjects4= [];
gdjs.sala3DCode.GDizquierdaObjects1= [];
gdjs.sala3DCode.GDizquierdaObjects2= [];
gdjs.sala3DCode.GDizquierdaObjects3= [];
gdjs.sala3DCode.GDizquierdaObjects4= [];
gdjs.sala3DCode.GDderechaObjects1= [];
gdjs.sala3DCode.GDderechaObjects2= [];
gdjs.sala3DCode.GDderechaObjects3= [];
gdjs.sala3DCode.GDderechaObjects4= [];
gdjs.sala3DCode.GDpuzzleObjects1= [];
gdjs.sala3DCode.GDpuzzleObjects2= [];
gdjs.sala3DCode.GDpuzzleObjects3= [];
gdjs.sala3DCode.GDpuzzleObjects4= [];
gdjs.sala3DCode.GDpuzzleCObjects1= [];
gdjs.sala3DCode.GDpuzzleCObjects2= [];
gdjs.sala3DCode.GDpuzzleCObjects3= [];
gdjs.sala3DCode.GDpuzzleCObjects4= [];
gdjs.sala3DCode.GDcomienzopuzzleObjects1= [];
gdjs.sala3DCode.GDcomienzopuzzleObjects2= [];
gdjs.sala3DCode.GDcomienzopuzzleObjects3= [];
gdjs.sala3DCode.GDcomienzopuzzleObjects4= [];
gdjs.sala3DCode.GDpisoObjects1= [];
gdjs.sala3DCode.GDpisoObjects2= [];
gdjs.sala3DCode.GDpisoObjects3= [];
gdjs.sala3DCode.GDpisoObjects4= [];
gdjs.sala3DCode.GDtechoObjects1= [];
gdjs.sala3DCode.GDtechoObjects2= [];
gdjs.sala3DCode.GDtechoObjects3= [];
gdjs.sala3DCode.GDtechoObjects4= [];
gdjs.sala3DCode.GDpuertaizquierdaObjects1= [];
gdjs.sala3DCode.GDpuertaizquierdaObjects2= [];
gdjs.sala3DCode.GDpuertaizquierdaObjects3= [];
gdjs.sala3DCode.GDpuertaizquierdaObjects4= [];
gdjs.sala3DCode.GDpuertaderechaObjects1= [];
gdjs.sala3DCode.GDpuertaderechaObjects2= [];
gdjs.sala3DCode.GDpuertaderechaObjects3= [];
gdjs.sala3DCode.GDpuertaderechaObjects4= [];
gdjs.sala3DCode.GDperdisteObjects1= [];
gdjs.sala3DCode.GDperdisteObjects2= [];
gdjs.sala3DCode.GDperdisteObjects3= [];
gdjs.sala3DCode.GDperdisteObjects4= [];


gdjs.sala3DCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.sala3DCode.GDpersonajeObjects1, gdjs.sala3DCode.GDpersonajeObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sala3DCode.GDpersonajeObjects2.length;i<l;++i) {
    if ( gdjs.sala3DCode.GDpersonajeObjects2[i].getBehavior("TopDownMovement").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.sala3DCode.GDpersonajeObjects2[k] = gdjs.sala3DCode.GDpersonajeObjects2[i];
        ++k;
    }
}
gdjs.sala3DCode.GDpersonajeObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.sala3DCode.GDpersonajeObjects2 */
{for(var i = 0, len = gdjs.sala3DCode.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala3DCode.GDpersonajeObjects2[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

/* Reuse gdjs.sala3DCode.GDpersonajeObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sala3DCode.GDpersonajeObjects1.length;i<l;++i) {
    if ( gdjs.sala3DCode.GDpersonajeObjects1[i].getBehavior("TopDownMovement").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.sala3DCode.GDpersonajeObjects1[k] = gdjs.sala3DCode.GDpersonajeObjects1[i];
        ++k;
    }
}
gdjs.sala3DCode.GDpersonajeObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.sala3DCode.GDpersonajeObjects1 */
{for(var i = 0, len = gdjs.sala3DCode.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala3DCode.GDpersonajeObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


};gdjs.sala3DCode.asyncCallback39222428 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3DCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("personaje"), gdjs.sala3DCode.GDpersonajeObjects2);

{for(var i = 0, len = gdjs.sala3DCode.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala3DCode.GDpersonajeObjects2[i].getBehavior("TopDownMovement").ignoreDefaultControls(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(false);
}gdjs.sala3DCode.localVariables.length = 0;
}
gdjs.sala3DCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3DCode.localVariables);
for (const obj of gdjs.sala3DCode.GDpersonajeObjects1) asyncObjectsList.addObject("personaje", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.sala3DCode.asyncCallback39222428(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3DCode.asyncCallback39224772 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3DCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("personaje"), gdjs.sala3DCode.GDpersonajeObjects2);

{for(var i = 0, len = gdjs.sala3DCode.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala3DCode.GDpersonajeObjects2[i].getBehavior("TopDownMovement").ignoreDefaultControls(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setBoolean(false);
}gdjs.sala3DCode.localVariables.length = 0;
}
gdjs.sala3DCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3DCode.localVariables);
for (const obj of gdjs.sala3DCode.GDpersonajeObjects1) asyncObjectsList.addObject("personaje", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.sala3DCode.asyncCallback39224772(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala3DCode.GDpersonajeObjects2});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaizquierdaObjects2Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala3DCode.GDpuertaizquierdaObjects2});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaizquierdaObjects2Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala3DCode.GDpuertaizquierdaObjects2});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala3DCode.GDpersonajeObjects2});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaderechaObjects2Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala3DCode.GDpuertaderechaObjects2});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaderechaObjects2Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala3DCode.GDpuertaderechaObjects2});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala3DCode.GDpersonajeObjects2});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpisoObjects2Objects = Hashtable.newFrom({"piso": gdjs.sala3DCode.GDpisoObjects2});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpisoObjects2Objects = Hashtable.newFrom({"piso": gdjs.sala3DCode.GDpisoObjects2});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects1Objects = Hashtable.newFrom({"personaje": gdjs.sala3DCode.GDpersonajeObjects1});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDtechoObjects1Objects = Hashtable.newFrom({"techo": gdjs.sala3DCode.GDtechoObjects1});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDtechoObjects1Objects = Hashtable.newFrom({"techo": gdjs.sala3DCode.GDtechoObjects1});
gdjs.sala3DCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala3DCode.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("puertaizquierda"), gdjs.sala3DCode.GDpuertaizquierdaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects2Objects, gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaizquierdaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.sala3DCode.GDpersonajeObjects2 */
/* Reuse gdjs.sala3DCode.GDpuertaizquierdaObjects2 */
{for(var i = 0, len = gdjs.sala3DCode.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala3DCode.GDpersonajeObjects2[i].separateFromObjectsList(gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaizquierdaObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala3DCode.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("puertaderecha"), gdjs.sala3DCode.GDpuertaderechaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects2Objects, gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaderechaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.sala3DCode.GDpersonajeObjects2 */
/* Reuse gdjs.sala3DCode.GDpuertaderechaObjects2 */
{for(var i = 0, len = gdjs.sala3DCode.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala3DCode.GDpersonajeObjects2[i].separateFromObjectsList(gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaderechaObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala3DCode.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("piso"), gdjs.sala3DCode.GDpisoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects2Objects, gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpisoObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.sala3DCode.GDpersonajeObjects2 */
/* Reuse gdjs.sala3DCode.GDpisoObjects2 */
{for(var i = 0, len = gdjs.sala3DCode.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala3DCode.GDpersonajeObjects2[i].separateFromObjectsList(gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpisoObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala3DCode.GDpersonajeObjects1);
gdjs.copyArray(runtimeScene.getObjects("techo"), gdjs.sala3DCode.GDtechoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects1Objects, gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDtechoObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.sala3DCode.GDpersonajeObjects1 */
/* Reuse gdjs.sala3DCode.GDtechoObjects1 */
{for(var i = 0, len = gdjs.sala3DCode.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala3DCode.GDpersonajeObjects1[i].separateFromObjectsList(gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDtechoObjects1Objects, false);
}
}}

}


};gdjs.sala3DCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.doesSceneExist(runtimeScene, "sala3");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("derecha"), gdjs.sala3DCode.GDderechaObjects2);
gdjs.copyArray(runtimeScene.getObjects("estrella"), gdjs.sala3DCode.GDestrellaObjects2);
gdjs.copyArray(runtimeScene.getObjects("falso1"), gdjs.sala3DCode.GDfalso1Objects2);
gdjs.copyArray(runtimeScene.getObjects("falso2"), gdjs.sala3DCode.GDfalso2Objects2);
gdjs.copyArray(runtimeScene.getObjects("izquierda"), gdjs.sala3DCode.GDizquierdaObjects2);
gdjs.copyArray(runtimeScene.getObjects("puzzle"), gdjs.sala3DCode.GDpuzzleObjects2);
{for(var i = 0, len = gdjs.sala3DCode.GDizquierdaObjects2.length ;i < len;++i) {
    gdjs.sala3DCode.GDizquierdaObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.sala3DCode.GDderechaObjects2.length ;i < len;++i) {
    gdjs.sala3DCode.GDderechaObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.sala3DCode.GDpuzzleObjects2.length ;i < len;++i) {
    gdjs.sala3DCode.GDpuzzleObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.sala3DCode.GDestrellaObjects2.length ;i < len;++i) {
    gdjs.sala3DCode.GDestrellaObjects2[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.sala3DCode.GDfalso1Objects2.length ;i < len;++i) {
    gdjs.sala3DCode.GDfalso1Objects2[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.sala3DCode.GDfalso2Objects2.length ;i < len;++i) {
    gdjs.sala3DCode.GDfalso2Objects2[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3DCode.GDcargaObjects1);
gdjs.copyArray(runtimeScene.getObjects("comienzopuzzle"), gdjs.sala3DCode.GDcomienzopuzzleObjects1);
gdjs.copyArray(runtimeScene.getObjects("derecha"), gdjs.sala3DCode.GDderechaObjects1);
gdjs.copyArray(runtimeScene.getObjects("estrella"), gdjs.sala3DCode.GDestrellaObjects1);
gdjs.copyArray(runtimeScene.getObjects("falso1"), gdjs.sala3DCode.GDfalso1Objects1);
gdjs.copyArray(runtimeScene.getObjects("falso2"), gdjs.sala3DCode.GDfalso2Objects1);
gdjs.copyArray(runtimeScene.getObjects("izquierda"), gdjs.sala3DCode.GDizquierdaObjects1);
gdjs.copyArray(runtimeScene.getObjects("perdiste"), gdjs.sala3DCode.GDperdisteObjects1);
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala3DCode.GDpersonajeObjects1);
gdjs.copyArray(runtimeScene.getObjects("puzzle"), gdjs.sala3DCode.GDpuzzleObjects1);
{for(var i = 0, len = gdjs.sala3DCode.GDcargaObjects1.length ;i < len;++i) {
    gdjs.sala3DCode.GDcargaObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.sala3DCode.GDizquierdaObjects1.length ;i < len;++i) {
    gdjs.sala3DCode.GDizquierdaObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala3DCode.GDderechaObjects1.length ;i < len;++i) {
    gdjs.sala3DCode.GDderechaObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala3DCode.GDpuzzleObjects1.length ;i < len;++i) {
    gdjs.sala3DCode.GDpuzzleObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala3DCode.GDestrellaObjects1.length ;i < len;++i) {
    gdjs.sala3DCode.GDestrellaObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala3DCode.GDfalso1Objects1.length ;i < len;++i) {
    gdjs.sala3DCode.GDfalso1Objects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala3DCode.GDfalso2Objects1.length ;i < len;++i) {
    gdjs.sala3DCode.GDfalso2Objects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala3DCode.GDcomienzopuzzleObjects1.length ;i < len;++i) {
    gdjs.sala3DCode.GDcomienzopuzzleObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala3DCode.GDperdisteObjects1.length ;i < len;++i) {
    gdjs.sala3DCode.GDperdisteObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{gdjs.evtTools.input.showCursor(runtimeScene);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{for(var i = 0, len = gdjs.sala3DCode.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala3DCode.GDpersonajeObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


};gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala3DCode.GDpersonajeObjects2});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaizquierdaObjects2Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala3DCode.GDpuertaizquierdaObjects2});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala3DCode.GDpersonajeObjects3});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala3DCode.GDpuertaizquierdaObjects3});
gdjs.sala3DCode.asyncCallback39229228 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala1D", false);
}gdjs.sala3DCode.localVariables.length = 0;
}
gdjs.sala3DCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala3DCode.asyncCallback39229228(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala3DCode.GDpersonajeObjects3});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala3DCode.GDpuertaizquierdaObjects3});
gdjs.sala3DCode.asyncCallback39232300 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala2D", false);
}gdjs.sala3DCode.localVariables.length = 0;
}
gdjs.sala3DCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala3DCode.asyncCallback39232300(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala3DCode.GDpersonajeObjects3});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala3DCode.GDpuertaizquierdaObjects3});
gdjs.sala3DCode.asyncCallback39236340 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala3D", false);
}gdjs.sala3DCode.localVariables.length = 0;
}
gdjs.sala3DCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala3DCode.asyncCallback39236340(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala3DCode.GDpersonajeObjects3});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala3DCode.GDpuertaizquierdaObjects3});
gdjs.sala3DCode.asyncCallback39240396 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala4D", false);
}gdjs.sala3DCode.localVariables.length = 0;
}
gdjs.sala3DCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala3DCode.asyncCallback39240396(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala3DCode.GDpersonajeObjects3});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala3DCode.GDpuertaizquierdaObjects3});
gdjs.sala3DCode.asyncCallback39244436 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala5D", false);
}gdjs.sala3DCode.localVariables.length = 0;
}
gdjs.sala3DCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala3DCode.asyncCallback39244436(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala3DCode.GDpersonajeObjects3});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala3DCode.GDpuertaizquierdaObjects3});
gdjs.sala3DCode.asyncCallback39248508 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala6D", false);
}gdjs.sala3DCode.localVariables.length = 0;
}
gdjs.sala3DCode.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala3DCode.asyncCallback39248508(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala3DCode.GDpersonajeObjects3});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala3DCode.GDpuertaizquierdaObjects3});
gdjs.sala3DCode.asyncCallback39252548 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala7D", false);
}gdjs.sala3DCode.localVariables.length = 0;
}
gdjs.sala3DCode.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala3DCode.asyncCallback39252548(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala3DCode.GDpersonajeObjects3});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala3DCode.GDpuertaizquierdaObjects3});
gdjs.sala3DCode.asyncCallback39256588 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala8D", false);
}gdjs.sala3DCode.localVariables.length = 0;
}
gdjs.sala3DCode.eventsList12 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala3DCode.asyncCallback39256588(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala3DCode.GDpersonajeObjects3});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala3DCode.GDpuertaizquierdaObjects3});
gdjs.sala3DCode.asyncCallback39260628 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala9D", false);
}gdjs.sala3DCode.localVariables.length = 0;
}
gdjs.sala3DCode.eventsList13 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala3DCode.asyncCallback39260628(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala3DCode.GDpersonajeObjects2});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaizquierdaObjects2Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala3DCode.GDpuertaizquierdaObjects2});
gdjs.sala3DCode.asyncCallback39264732 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala10D", false);
}gdjs.sala3DCode.localVariables.length = 0;
}
gdjs.sala3DCode.eventsList14 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala3DCode.asyncCallback39264732(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3DCode.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.sala3DCode.GDpersonajeObjects2, gdjs.sala3DCode.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala3DCode.GDpuertaizquierdaObjects2, gdjs.sala3DCode.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects3Objects, gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3DCode.GDcargaObjects3);
gdjs.copyArray(gdjs.sala3DCode.GDizquierdaObjects2, gdjs.sala3DCode.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala3DCode.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala3DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3DCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala3DCode.GDpersonajeObjects2, gdjs.sala3DCode.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala3DCode.GDpuertaizquierdaObjects2, gdjs.sala3DCode.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects3Objects, gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 2;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3DCode.GDcargaObjects3);
gdjs.copyArray(gdjs.sala3DCode.GDizquierdaObjects2, gdjs.sala3DCode.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala3DCode.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala3DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3DCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala3DCode.GDpersonajeObjects2, gdjs.sala3DCode.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala3DCode.GDpuertaizquierdaObjects2, gdjs.sala3DCode.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects3Objects, gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 3;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3DCode.GDcargaObjects3);
gdjs.copyArray(gdjs.sala3DCode.GDizquierdaObjects2, gdjs.sala3DCode.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala3DCode.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala3DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3DCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala3DCode.GDpersonajeObjects2, gdjs.sala3DCode.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala3DCode.GDpuertaizquierdaObjects2, gdjs.sala3DCode.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects3Objects, gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 4;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3DCode.GDcargaObjects3);
gdjs.copyArray(gdjs.sala3DCode.GDizquierdaObjects2, gdjs.sala3DCode.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala3DCode.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala3DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3DCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala3DCode.GDpersonajeObjects2, gdjs.sala3DCode.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala3DCode.GDpuertaizquierdaObjects2, gdjs.sala3DCode.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects3Objects, gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 5;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3DCode.GDcargaObjects3);
gdjs.copyArray(gdjs.sala3DCode.GDizquierdaObjects2, gdjs.sala3DCode.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala3DCode.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala3DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3DCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala3DCode.GDpersonajeObjects2, gdjs.sala3DCode.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala3DCode.GDpuertaizquierdaObjects2, gdjs.sala3DCode.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects3Objects, gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 6;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3DCode.GDcargaObjects3);
gdjs.copyArray(gdjs.sala3DCode.GDizquierdaObjects2, gdjs.sala3DCode.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala3DCode.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala3DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3DCode.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala3DCode.GDpersonajeObjects2, gdjs.sala3DCode.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala3DCode.GDpuertaizquierdaObjects2, gdjs.sala3DCode.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects3Objects, gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 7;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3DCode.GDcargaObjects3);
gdjs.copyArray(gdjs.sala3DCode.GDizquierdaObjects2, gdjs.sala3DCode.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala3DCode.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala3DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3DCode.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala3DCode.GDpersonajeObjects2, gdjs.sala3DCode.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala3DCode.GDpuertaizquierdaObjects2, gdjs.sala3DCode.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects3Objects, gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 8;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3DCode.GDcargaObjects3);
gdjs.copyArray(gdjs.sala3DCode.GDizquierdaObjects2, gdjs.sala3DCode.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala3DCode.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala3DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3DCode.eventsList12(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala3DCode.GDpersonajeObjects2, gdjs.sala3DCode.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala3DCode.GDpuertaizquierdaObjects2, gdjs.sala3DCode.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects3Objects, gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 9;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3DCode.GDcargaObjects3);
gdjs.copyArray(gdjs.sala3DCode.GDizquierdaObjects2, gdjs.sala3DCode.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala3DCode.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala3DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3DCode.eventsList13(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.sala3DCode.GDpersonajeObjects2 */
/* Reuse gdjs.sala3DCode.GDpuertaizquierdaObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects2Objects, gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaizquierdaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 10;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3DCode.GDcargaObjects2);
/* Reuse gdjs.sala3DCode.GDizquierdaObjects2 */
{for(var i = 0, len = gdjs.sala3DCode.GDizquierdaObjects2.length ;i < len;++i) {
    gdjs.sala3DCode.GDizquierdaObjects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala3DCode.GDcargaObjects2.length ;i < len;++i) {
    gdjs.sala3DCode.GDcargaObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3DCode.eventsList14(runtimeScene);} //End of subevents
}

}


};gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala3DCode.GDpersonajeObjects2});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaderechaObjects2Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala3DCode.GDpuertaderechaObjects2});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala3DCode.GDpersonajeObjects3});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala3DCode.GDpuertaderechaObjects3});
gdjs.sala3DCode.asyncCallback39270068 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala1", false);
}gdjs.sala3DCode.localVariables.length = 0;
}
gdjs.sala3DCode.eventsList16 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala3DCode.asyncCallback39270068(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala3DCode.GDpersonajeObjects3});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala3DCode.GDpuertaderechaObjects3});
gdjs.sala3DCode.asyncCallback39274236 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala2", false);
}gdjs.sala3DCode.localVariables.length = 0;
}
gdjs.sala3DCode.eventsList17 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala3DCode.asyncCallback39274236(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala3DCode.GDpersonajeObjects3});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala3DCode.GDpuertaderechaObjects3});
gdjs.sala3DCode.asyncCallback39278380 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala3", false);
}gdjs.sala3DCode.localVariables.length = 0;
}
gdjs.sala3DCode.eventsList18 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala3DCode.asyncCallback39278380(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala3DCode.GDpersonajeObjects3});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala3DCode.GDpuertaderechaObjects3});
gdjs.sala3DCode.asyncCallback39282540 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala4", false);
}gdjs.sala3DCode.localVariables.length = 0;
}
gdjs.sala3DCode.eventsList19 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala3DCode.asyncCallback39282540(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala3DCode.GDpersonajeObjects3});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala3DCode.GDpuertaderechaObjects3});
gdjs.sala3DCode.asyncCallback39286684 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala4D", false);
}gdjs.sala3DCode.localVariables.length = 0;
}
gdjs.sala3DCode.eventsList20 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala3DCode.asyncCallback39286684(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala3DCode.GDpersonajeObjects3});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala3DCode.GDpuertaderechaObjects3});
gdjs.sala3DCode.asyncCallback39290860 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala6", false);
}gdjs.sala3DCode.localVariables.length = 0;
}
gdjs.sala3DCode.eventsList21 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala3DCode.asyncCallback39290860(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala3DCode.GDpersonajeObjects3});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala3DCode.GDpuertaderechaObjects3});
gdjs.sala3DCode.asyncCallback39295004 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala5D", false);
}gdjs.sala3DCode.localVariables.length = 0;
}
gdjs.sala3DCode.eventsList22 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala3DCode.asyncCallback39295004(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala3DCode.GDpersonajeObjects3});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala3DCode.GDpuertaderechaObjects3});
gdjs.sala3DCode.asyncCallback39299148 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala8", false);
}gdjs.sala3DCode.localVariables.length = 0;
}
gdjs.sala3DCode.eventsList23 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala3DCode.asyncCallback39299148(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala3DCode.GDpersonajeObjects3});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala3DCode.GDpuertaderechaObjects3});
gdjs.sala3DCode.asyncCallback39303292 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala9", false);
}gdjs.sala3DCode.localVariables.length = 0;
}
gdjs.sala3DCode.eventsList24 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala3DCode.asyncCallback39303292(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala3DCode.GDpersonajeObjects2});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaderechaObjects2Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala3DCode.GDpuertaderechaObjects2});
gdjs.sala3DCode.asyncCallback39307500 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala10", false);
}gdjs.sala3DCode.localVariables.length = 0;
}
gdjs.sala3DCode.eventsList25 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala3DCode.asyncCallback39307500(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3DCode.eventsList26 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.sala3DCode.GDpersonajeObjects2, gdjs.sala3DCode.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala3DCode.GDpuertaderechaObjects2, gdjs.sala3DCode.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects3Objects, gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3DCode.GDcargaObjects3);
gdjs.copyArray(gdjs.sala3DCode.GDderechaObjects2, gdjs.sala3DCode.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala3DCode.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala3DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3DCode.eventsList16(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala3DCode.GDpersonajeObjects2, gdjs.sala3DCode.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala3DCode.GDpuertaderechaObjects2, gdjs.sala3DCode.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects3Objects, gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 2;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3DCode.GDcargaObjects3);
gdjs.copyArray(gdjs.sala3DCode.GDderechaObjects2, gdjs.sala3DCode.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala3DCode.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala3DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3DCode.eventsList17(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala3DCode.GDpersonajeObjects2, gdjs.sala3DCode.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala3DCode.GDpuertaderechaObjects2, gdjs.sala3DCode.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects3Objects, gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 3;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3DCode.GDcargaObjects3);
gdjs.copyArray(gdjs.sala3DCode.GDderechaObjects2, gdjs.sala3DCode.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala3DCode.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala3DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3DCode.eventsList18(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala3DCode.GDpersonajeObjects2, gdjs.sala3DCode.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala3DCode.GDpuertaderechaObjects2, gdjs.sala3DCode.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects3Objects, gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 4;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3DCode.GDcargaObjects3);
gdjs.copyArray(gdjs.sala3DCode.GDderechaObjects2, gdjs.sala3DCode.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala3DCode.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala3DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3DCode.eventsList19(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala3DCode.GDpersonajeObjects2, gdjs.sala3DCode.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala3DCode.GDpuertaderechaObjects2, gdjs.sala3DCode.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects3Objects, gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 5;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3DCode.GDcargaObjects3);
gdjs.copyArray(gdjs.sala3DCode.GDderechaObjects2, gdjs.sala3DCode.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala3DCode.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala3DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3DCode.eventsList20(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala3DCode.GDpersonajeObjects2, gdjs.sala3DCode.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala3DCode.GDpuertaderechaObjects2, gdjs.sala3DCode.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects3Objects, gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 6;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3DCode.GDcargaObjects3);
gdjs.copyArray(gdjs.sala3DCode.GDderechaObjects2, gdjs.sala3DCode.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala3DCode.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala3DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3DCode.eventsList21(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala3DCode.GDpersonajeObjects2, gdjs.sala3DCode.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala3DCode.GDpuertaderechaObjects2, gdjs.sala3DCode.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects3Objects, gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 7;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3DCode.GDcargaObjects3);
gdjs.copyArray(gdjs.sala3DCode.GDderechaObjects2, gdjs.sala3DCode.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala3DCode.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala3DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3DCode.eventsList22(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala3DCode.GDpersonajeObjects2, gdjs.sala3DCode.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala3DCode.GDpuertaderechaObjects2, gdjs.sala3DCode.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects3Objects, gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 8;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3DCode.GDcargaObjects3);
gdjs.copyArray(gdjs.sala3DCode.GDderechaObjects2, gdjs.sala3DCode.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala3DCode.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala3DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3DCode.eventsList23(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala3DCode.GDpersonajeObjects2, gdjs.sala3DCode.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala3DCode.GDpuertaderechaObjects2, gdjs.sala3DCode.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects3Objects, gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 9;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3DCode.GDcargaObjects3);
gdjs.copyArray(gdjs.sala3DCode.GDderechaObjects2, gdjs.sala3DCode.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala3DCode.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala3DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3DCode.eventsList24(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.sala3DCode.GDpersonajeObjects2 */
/* Reuse gdjs.sala3DCode.GDpuertaderechaObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects2Objects, gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaderechaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 10;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3DCode.GDcargaObjects2);
/* Reuse gdjs.sala3DCode.GDderechaObjects2 */
{for(var i = 0, len = gdjs.sala3DCode.GDderechaObjects2.length ;i < len;++i) {
    gdjs.sala3DCode.GDderechaObjects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala3DCode.GDcargaObjects2.length ;i < len;++i) {
    gdjs.sala3DCode.GDcargaObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3DCode.eventsList25(runtimeScene);} //End of subevents
}

}


};gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects1Objects = Hashtable.newFrom({"personaje": gdjs.sala3DCode.GDpersonajeObjects1});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuzzleCObjects1Objects = Hashtable.newFrom({"puzzleC": gdjs.sala3DCode.GDpuzzleCObjects1});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects1Objects = Hashtable.newFrom({"personaje": gdjs.sala3DCode.GDpersonajeObjects1});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuzzleCObjects1Objects = Hashtable.newFrom({"puzzleC": gdjs.sala3DCode.GDpuzzleCObjects1});
gdjs.sala3DCode.asyncCallback20762556 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3DCode.localVariables);
gdjs.sala3DCode.localVariables.length = 0;
}
gdjs.sala3DCode.eventsList27 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.sala3DCode.asyncCallback20762556(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3DCode.asyncCallback21424332 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3DCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("comienzopuzzle"), gdjs.sala3DCode.GDcomienzopuzzleObjects2);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "puzzle");
}{for(var i = 0, len = gdjs.sala3DCode.GDcomienzopuzzleObjects2.length ;i < len;++i) {
    gdjs.sala3DCode.GDcomienzopuzzleObjects2[i].getBehavior("Animation").resumeAnimation();
}
}
{ //Subevents
gdjs.sala3DCode.eventsList27(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.sala3DCode.localVariables.length = 0;
}
gdjs.sala3DCode.eventsList28 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.sala3DCode.asyncCallback21424332(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3DCode.eventsList29 = function(runtimeScene) {

{

/* Reuse gdjs.sala3DCode.GDpersonajeObjects1 */
/* Reuse gdjs.sala3DCode.GDpuzzleObjects1 */
/* Reuse gdjs.sala3DCode.GDpuzzleCObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects1Objects, gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuzzleCObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala3DCode.GDpuzzleObjects1.length;i<l;++i) {
    if ( gdjs.sala3DCode.GDpuzzleObjects1[i].isVisible() ) {
        isConditionTrue_1 = true;
        gdjs.sala3DCode.GDpuzzleObjects1[k] = gdjs.sala3DCode.GDpuzzleObjects1[i];
        ++k;
    }
}
gdjs.sala3DCode.GDpuzzleObjects1.length = k;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3DCode.GDcargaObjects1);
/* Reuse gdjs.sala3DCode.GDpersonajeObjects1 */
/* Reuse gdjs.sala3DCode.GDpuzzleObjects1 */
{for(var i = 0, len = gdjs.sala3DCode.GDpuzzleObjects1.length ;i < len;++i) {
    gdjs.sala3DCode.GDpuzzleObjects1[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala3DCode.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala3DCode.GDpersonajeObjects1[i].getBehavior("TopDownMovement").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.sala3DCode.GDcargaObjects1.length ;i < len;++i) {
    gdjs.sala3DCode.GDcargaObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 4, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3DCode.eventsList28(runtimeScene);} //End of subevents
}

}


};gdjs.sala3DCode.eventsList30 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala3DCode.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("puertaizquierda"), gdjs.sala3DCode.GDpuertaizquierdaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects2Objects, gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaizquierdaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("izquierda"), gdjs.sala3DCode.GDizquierdaObjects2);
{for(var i = 0, len = gdjs.sala3DCode.GDizquierdaObjects2.length ;i < len;++i) {
    gdjs.sala3DCode.GDizquierdaObjects2[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.random(10));
}
{ //Subevents
gdjs.sala3DCode.eventsList15(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala3DCode.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("puertaderecha"), gdjs.sala3DCode.GDpuertaderechaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects2Objects, gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuertaderechaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("derecha"), gdjs.sala3DCode.GDderechaObjects2);
{for(var i = 0, len = gdjs.sala3DCode.GDderechaObjects2.length ;i < len;++i) {
    gdjs.sala3DCode.GDderechaObjects2[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.random(10));
}
{ //Subevents
gdjs.sala3DCode.eventsList26(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala3DCode.GDpersonajeObjects1);
gdjs.copyArray(runtimeScene.getObjects("puzzleC"), gdjs.sala3DCode.GDpuzzleCObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpersonajeObjects1Objects, gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpuzzleCObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 0;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false, false);
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("puzzle"), gdjs.sala3DCode.GDpuzzleObjects1);
{for(var i = 0, len = gdjs.sala3DCode.GDpuzzleObjects1.length ;i < len;++i) {
    gdjs.sala3DCode.GDpuzzleObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.sala3DCode.eventsList29(runtimeScene);} //End of subevents
}

}


};gdjs.sala3DCode.eventsList31 = function(runtimeScene) {

};gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDestrellaObjects3Objects = Hashtable.newFrom({"estrella": gdjs.sala3DCode.GDestrellaObjects3});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpiso2Objects3Objects = Hashtable.newFrom({"piso2": gdjs.sala3DCode.GDpiso2Objects3});
gdjs.sala3DCode.asyncCallback20650580 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3DCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("estrella"), gdjs.sala3DCode.GDestrellaObjects4);

{for(var i = 0, len = gdjs.sala3DCode.GDestrellaObjects4.length ;i < len;++i) {
    gdjs.sala3DCode.GDestrellaObjects4[i].getBehavior("PlatformerObject").setJumpSpeed(gdjs.sala3DCode.GDestrellaObjects4[i].getBehavior("PlatformerObject").getJumpSpeed() - (200));
}
}gdjs.sala3DCode.localVariables.length = 0;
}
gdjs.sala3DCode.eventsList32 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3DCode.localVariables);
for (const obj of gdjs.sala3DCode.GDestrellaObjects3) asyncObjectsList.addObject("estrella", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala3DCode.asyncCallback20650580(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDestrellaObjects3Objects = Hashtable.newFrom({"estrella": gdjs.sala3DCode.GDestrellaObjects3});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpiso2Objects3Objects = Hashtable.newFrom({"piso2": gdjs.sala3DCode.GDpiso2Objects3});
gdjs.sala3DCode.eventsList33 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), false, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(7).setBoolean(true);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setBoolean(true);
}}

}


};gdjs.sala3DCode.asyncCallback21688020 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3DCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala3DCode.GDpersonajeObjects3);
gdjs.copyArray(runtimeScene.getObjects("puzzle"), gdjs.sala3DCode.GDpuzzleObjects3);
{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "puzzle");
}{for(var i = 0, len = gdjs.sala3DCode.GDpuzzleObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDpuzzleObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.sala3DCode.GDpersonajeObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDpersonajeObjects3[i].getBehavior("TopDownMovement").ignoreDefaultControls(false);
}
}
{ //Subevents
gdjs.sala3DCode.eventsList33(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.sala3DCode.localVariables.length = 0;
}
gdjs.sala3DCode.eventsList34 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.sala3DCode.asyncCallback21688020(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3DCode.eventsList35 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("estrella"), gdjs.sala3DCode.GDestrellaObjects3);

for (gdjs.sala3DCode.forEachIndex4 = 0;gdjs.sala3DCode.forEachIndex4 < gdjs.sala3DCode.GDestrellaObjects3.length;++gdjs.sala3DCode.forEachIndex4) {
gdjs.sala3DCode.GDestrellaObjects4.length = 0;


gdjs.sala3DCode.forEachTemporary4 = gdjs.sala3DCode.GDestrellaObjects3[gdjs.sala3DCode.forEachIndex4];
gdjs.sala3DCode.GDestrellaObjects4.push(gdjs.sala3DCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala3DCode.GDestrellaObjects4.length;i<l;++i) {
    if ( gdjs.sala3DCode.GDestrellaObjects4[i].getBehavior("PlatformerObject").getJumpSpeed() < 200 ) {
        isConditionTrue_1 = true;
        gdjs.sala3DCode.GDestrellaObjects4[k] = gdjs.sala3DCode.GDestrellaObjects4[i];
        ++k;
    }
}
gdjs.sala3DCode.GDestrellaObjects4.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala3DCode.GDestrellaObjects4.length;i<l;++i) {
    if ( gdjs.sala3DCode.GDestrellaObjects4[i].getBehavior("Arrastrable").wasJustDropped() ) {
        isConditionTrue_1 = true;
        gdjs.sala3DCode.GDestrellaObjects4[k] = gdjs.sala3DCode.GDestrellaObjects4[i];
        ++k;
    }
}
gdjs.sala3DCode.GDestrellaObjects4.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.sala3DCode.GDestrellaObjects4.length ;i < len;++i) {
    gdjs.sala3DCode.GDestrellaObjects4[i].getBehavior("PlatformerObject").setJumpSpeed(600);
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("estrella"), gdjs.sala3DCode.GDestrellaObjects3);
gdjs.copyArray(runtimeScene.getObjects("piso2"), gdjs.sala3DCode.GDpiso2Objects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDestrellaObjects3Objects, gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpiso2Objects3Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala3DCode.GDestrellaObjects3.length;i<l;++i) {
    if ( gdjs.sala3DCode.GDestrellaObjects3[i].getBehavior("PlatformerObject").getJumpSpeed() >= 200 ) {
        isConditionTrue_1 = true;
        gdjs.sala3DCode.GDestrellaObjects3[k] = gdjs.sala3DCode.GDestrellaObjects3[i];
        ++k;
    }
}
gdjs.sala3DCode.GDestrellaObjects3.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.sala3DCode.GDestrellaObjects3 */
{for(var i = 0, len = gdjs.sala3DCode.GDestrellaObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDestrellaObjects3[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
{ //Subevents
gdjs.sala3DCode.eventsList32(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("estrella"), gdjs.sala3DCode.GDestrellaObjects3);
gdjs.copyArray(runtimeScene.getObjects("piso2"), gdjs.sala3DCode.GDpiso2Objects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDestrellaObjects3Objects, gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpiso2Objects3Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{gdjs.sala3DCode.GDestrellaObjects3_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(gdjs.sala3DCode.GDestrellaObjects3, gdjs.sala3DCode.GDestrellaObjects4);

for (var i = 0, k = 0, l = gdjs.sala3DCode.GDestrellaObjects4.length;i<l;++i) {
    if ( gdjs.sala3DCode.GDestrellaObjects4[i].getBehavior("PlatformerObject").getJumpSpeed() == 400 ) {
        isConditionTrue_2 = true;
        gdjs.sala3DCode.GDestrellaObjects4[k] = gdjs.sala3DCode.GDestrellaObjects4[i];
        ++k;
    }
}
gdjs.sala3DCode.GDestrellaObjects4.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.sala3DCode.GDestrellaObjects4.length; j < jLen ; ++j) {
        if ( gdjs.sala3DCode.GDestrellaObjects3_2final.indexOf(gdjs.sala3DCode.GDestrellaObjects4[j]) === -1 )
            gdjs.sala3DCode.GDestrellaObjects3_2final.push(gdjs.sala3DCode.GDestrellaObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.sala3DCode.GDestrellaObjects3, gdjs.sala3DCode.GDestrellaObjects4);

for (var i = 0, k = 0, l = gdjs.sala3DCode.GDestrellaObjects4.length;i<l;++i) {
    if ( gdjs.sala3DCode.GDestrellaObjects4[i].getBehavior("PlatformerObject").getJumpSpeed() == 600 ) {
        isConditionTrue_2 = true;
        gdjs.sala3DCode.GDestrellaObjects4[k] = gdjs.sala3DCode.GDestrellaObjects4[i];
        ++k;
    }
}
gdjs.sala3DCode.GDestrellaObjects4.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.sala3DCode.GDestrellaObjects4.length; j < jLen ; ++j) {
        if ( gdjs.sala3DCode.GDestrellaObjects3_2final.indexOf(gdjs.sala3DCode.GDestrellaObjects4[j]) === -1 )
            gdjs.sala3DCode.GDestrellaObjects3_2final.push(gdjs.sala3DCode.GDestrellaObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.sala3DCode.GDestrellaObjects3_2final, gdjs.sala3DCode.GDestrellaObjects3);
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.sala3DCode.GDestrellaObjects3 */
{for(var i = 0, len = gdjs.sala3DCode.GDestrellaObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDestrellaObjects3[i].setAnimationFrame(gdjs.sala3DCode.GDestrellaObjects3[i].getAnimationFrame() + (1));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("estrella"), gdjs.sala3DCode.GDestrellaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sala3DCode.GDestrellaObjects2.length;i<l;++i) {
    if ( gdjs.sala3DCode.GDestrellaObjects2[i].getAnimationFrame() == 6 ) {
        isConditionTrue_0 = true;
        gdjs.sala3DCode.GDestrellaObjects2[k] = gdjs.sala3DCode.GDestrellaObjects2[i];
        ++k;
    }
}
gdjs.sala3DCode.GDestrellaObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21524588);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3DCode.GDcargaObjects2);
{for(var i = 0, len = gdjs.sala3DCode.GDcargaObjects2.length ;i < len;++i) {
    gdjs.sala3DCode.GDcargaObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 4, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3DCode.eventsList34(runtimeScene);} //End of subevents
}

}


};gdjs.sala3DCode.eventsList36 = function(runtimeScene) {

};gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDfalso1Objects3Objects = Hashtable.newFrom({"falso1": gdjs.sala3DCode.GDfalso1Objects3});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpiso2Objects3Objects = Hashtable.newFrom({"piso2": gdjs.sala3DCode.GDpiso2Objects3});
gdjs.sala3DCode.asyncCallback21273012 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3DCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("falso1"), gdjs.sala3DCode.GDfalso1Objects4);

{for(var i = 0, len = gdjs.sala3DCode.GDfalso1Objects4.length ;i < len;++i) {
    gdjs.sala3DCode.GDfalso1Objects4[i].getBehavior("PlatformerObject").setJumpSpeed(gdjs.sala3DCode.GDfalso1Objects4[i].getBehavior("PlatformerObject").getJumpSpeed() - (200));
}
}gdjs.sala3DCode.localVariables.length = 0;
}
gdjs.sala3DCode.eventsList37 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3DCode.localVariables);
for (const obj of gdjs.sala3DCode.GDfalso1Objects3) asyncObjectsList.addObject("falso1", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala3DCode.asyncCallback21273012(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDfalso1Objects2Objects = Hashtable.newFrom({"falso1": gdjs.sala3DCode.GDfalso1Objects2});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpiso2Objects2Objects = Hashtable.newFrom({"piso2": gdjs.sala3DCode.GDpiso2Objects2});
gdjs.sala3DCode.asyncCallback21273084 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3DCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("falso1"), gdjs.sala3DCode.GDfalso1Objects3);

{for(var i = 0, len = gdjs.sala3DCode.GDfalso1Objects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDfalso1Objects3[i].setAnimationFrame(gdjs.sala3DCode.GDfalso1Objects3[i].getAnimationFrame() + (1));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala3DCode.localVariables.length = 0;
}
gdjs.sala3DCode.eventsList38 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3DCode.localVariables);
for (const obj of gdjs.sala3DCode.GDfalso1Objects2) asyncObjectsList.addObject("falso1", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.sala3DCode.asyncCallback21273084(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3DCode.eventsList39 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("falso1"), gdjs.sala3DCode.GDfalso1Objects3);

for (gdjs.sala3DCode.forEachIndex4 = 0;gdjs.sala3DCode.forEachIndex4 < gdjs.sala3DCode.GDfalso1Objects3.length;++gdjs.sala3DCode.forEachIndex4) {
gdjs.sala3DCode.GDfalso1Objects4.length = 0;


gdjs.sala3DCode.forEachTemporary4 = gdjs.sala3DCode.GDfalso1Objects3[gdjs.sala3DCode.forEachIndex4];
gdjs.sala3DCode.GDfalso1Objects4.push(gdjs.sala3DCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala3DCode.GDfalso1Objects4.length;i<l;++i) {
    if ( gdjs.sala3DCode.GDfalso1Objects4[i].getBehavior("PlatformerObject").getJumpSpeed() < 200 ) {
        isConditionTrue_1 = true;
        gdjs.sala3DCode.GDfalso1Objects4[k] = gdjs.sala3DCode.GDfalso1Objects4[i];
        ++k;
    }
}
gdjs.sala3DCode.GDfalso1Objects4.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala3DCode.GDfalso1Objects4.length;i<l;++i) {
    if ( gdjs.sala3DCode.GDfalso1Objects4[i].getBehavior("Arrastrable").wasJustDropped() ) {
        isConditionTrue_1 = true;
        gdjs.sala3DCode.GDfalso1Objects4[k] = gdjs.sala3DCode.GDfalso1Objects4[i];
        ++k;
    }
}
gdjs.sala3DCode.GDfalso1Objects4.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.sala3DCode.GDfalso1Objects4.length ;i < len;++i) {
    gdjs.sala3DCode.GDfalso1Objects4[i].getBehavior("PlatformerObject").setJumpSpeed(600);
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("falso1"), gdjs.sala3DCode.GDfalso1Objects3);
gdjs.copyArray(runtimeScene.getObjects("piso2"), gdjs.sala3DCode.GDpiso2Objects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDfalso1Objects3Objects, gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpiso2Objects3Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala3DCode.GDfalso1Objects3.length;i<l;++i) {
    if ( gdjs.sala3DCode.GDfalso1Objects3[i].getBehavior("PlatformerObject").getJumpSpeed() >= 200 ) {
        isConditionTrue_1 = true;
        gdjs.sala3DCode.GDfalso1Objects3[k] = gdjs.sala3DCode.GDfalso1Objects3[i];
        ++k;
    }
}
gdjs.sala3DCode.GDfalso1Objects3.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.sala3DCode.GDfalso1Objects3 */
{for(var i = 0, len = gdjs.sala3DCode.GDfalso1Objects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDfalso1Objects3[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
{ //Subevents
gdjs.sala3DCode.eventsList37(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("falso1"), gdjs.sala3DCode.GDfalso1Objects2);
gdjs.copyArray(runtimeScene.getObjects("piso2"), gdjs.sala3DCode.GDpiso2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDfalso1Objects2Objects, gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpiso2Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{gdjs.sala3DCode.GDfalso1Objects2_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(gdjs.sala3DCode.GDfalso1Objects2, gdjs.sala3DCode.GDfalso1Objects3);

for (var i = 0, k = 0, l = gdjs.sala3DCode.GDfalso1Objects3.length;i<l;++i) {
    if ( gdjs.sala3DCode.GDfalso1Objects3[i].getBehavior("PlatformerObject").getJumpSpeed() == 400 ) {
        isConditionTrue_2 = true;
        gdjs.sala3DCode.GDfalso1Objects3[k] = gdjs.sala3DCode.GDfalso1Objects3[i];
        ++k;
    }
}
gdjs.sala3DCode.GDfalso1Objects3.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.sala3DCode.GDfalso1Objects3.length; j < jLen ; ++j) {
        if ( gdjs.sala3DCode.GDfalso1Objects2_2final.indexOf(gdjs.sala3DCode.GDfalso1Objects3[j]) === -1 )
            gdjs.sala3DCode.GDfalso1Objects2_2final.push(gdjs.sala3DCode.GDfalso1Objects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.sala3DCode.GDfalso1Objects2, gdjs.sala3DCode.GDfalso1Objects3);

for (var i = 0, k = 0, l = gdjs.sala3DCode.GDfalso1Objects3.length;i<l;++i) {
    if ( gdjs.sala3DCode.GDfalso1Objects3[i].getBehavior("PlatformerObject").getJumpSpeed() == 600 ) {
        isConditionTrue_2 = true;
        gdjs.sala3DCode.GDfalso1Objects3[k] = gdjs.sala3DCode.GDfalso1Objects3[i];
        ++k;
    }
}
gdjs.sala3DCode.GDfalso1Objects3.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.sala3DCode.GDfalso1Objects3.length; j < jLen ; ++j) {
        if ( gdjs.sala3DCode.GDfalso1Objects2_2final.indexOf(gdjs.sala3DCode.GDfalso1Objects3[j]) === -1 )
            gdjs.sala3DCode.GDfalso1Objects2_2final.push(gdjs.sala3DCode.GDfalso1Objects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.sala3DCode.GDfalso1Objects2_2final, gdjs.sala3DCode.GDfalso1Objects2);
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.sala3DCode.eventsList38(runtimeScene);} //End of subevents
}

}


};gdjs.sala3DCode.eventsList40 = function(runtimeScene) {

};gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDfalso2Objects3Objects = Hashtable.newFrom({"falso2": gdjs.sala3DCode.GDfalso2Objects3});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpiso2Objects3Objects = Hashtable.newFrom({"piso2": gdjs.sala3DCode.GDpiso2Objects3});
gdjs.sala3DCode.asyncCallback21195716 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3DCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("falso2"), gdjs.sala3DCode.GDfalso2Objects4);

{for(var i = 0, len = gdjs.sala3DCode.GDfalso2Objects4.length ;i < len;++i) {
    gdjs.sala3DCode.GDfalso2Objects4[i].getBehavior("PlatformerObject").setJumpSpeed(gdjs.sala3DCode.GDfalso2Objects4[i].getBehavior("PlatformerObject").getJumpSpeed() - (200));
}
}gdjs.sala3DCode.localVariables.length = 0;
}
gdjs.sala3DCode.eventsList41 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3DCode.localVariables);
for (const obj of gdjs.sala3DCode.GDfalso2Objects3) asyncObjectsList.addObject("falso2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala3DCode.asyncCallback21195716(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDfalso2Objects2Objects = Hashtable.newFrom({"falso2": gdjs.sala3DCode.GDfalso2Objects2});
gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpiso2Objects2Objects = Hashtable.newFrom({"piso2": gdjs.sala3DCode.GDpiso2Objects2});
gdjs.sala3DCode.asyncCallback21355092 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3DCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("falso2"), gdjs.sala3DCode.GDfalso2Objects3);

{for(var i = 0, len = gdjs.sala3DCode.GDfalso2Objects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDfalso2Objects3[i].setAnimationFrame(gdjs.sala3DCode.GDfalso2Objects3[i].getAnimationFrame() + (1));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala3DCode.localVariables.length = 0;
}
gdjs.sala3DCode.eventsList42 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3DCode.localVariables);
for (const obj of gdjs.sala3DCode.GDfalso2Objects2) asyncObjectsList.addObject("falso2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.sala3DCode.asyncCallback21355092(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3DCode.eventsList43 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("falso2"), gdjs.sala3DCode.GDfalso2Objects3);

for (gdjs.sala3DCode.forEachIndex4 = 0;gdjs.sala3DCode.forEachIndex4 < gdjs.sala3DCode.GDfalso2Objects3.length;++gdjs.sala3DCode.forEachIndex4) {
gdjs.sala3DCode.GDfalso2Objects4.length = 0;


gdjs.sala3DCode.forEachTemporary4 = gdjs.sala3DCode.GDfalso2Objects3[gdjs.sala3DCode.forEachIndex4];
gdjs.sala3DCode.GDfalso2Objects4.push(gdjs.sala3DCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala3DCode.GDfalso2Objects4.length;i<l;++i) {
    if ( gdjs.sala3DCode.GDfalso2Objects4[i].getBehavior("PlatformerObject").getJumpSpeed() < 200 ) {
        isConditionTrue_1 = true;
        gdjs.sala3DCode.GDfalso2Objects4[k] = gdjs.sala3DCode.GDfalso2Objects4[i];
        ++k;
    }
}
gdjs.sala3DCode.GDfalso2Objects4.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala3DCode.GDfalso2Objects4.length;i<l;++i) {
    if ( gdjs.sala3DCode.GDfalso2Objects4[i].getBehavior("Arrastrable").wasJustDropped() ) {
        isConditionTrue_1 = true;
        gdjs.sala3DCode.GDfalso2Objects4[k] = gdjs.sala3DCode.GDfalso2Objects4[i];
        ++k;
    }
}
gdjs.sala3DCode.GDfalso2Objects4.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.sala3DCode.GDfalso2Objects4.length ;i < len;++i) {
    gdjs.sala3DCode.GDfalso2Objects4[i].getBehavior("PlatformerObject").setJumpSpeed(600);
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("falso2"), gdjs.sala3DCode.GDfalso2Objects3);
gdjs.copyArray(runtimeScene.getObjects("piso2"), gdjs.sala3DCode.GDpiso2Objects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDfalso2Objects3Objects, gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpiso2Objects3Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala3DCode.GDfalso2Objects3.length;i<l;++i) {
    if ( gdjs.sala3DCode.GDfalso2Objects3[i].getBehavior("PlatformerObject").getJumpSpeed() >= 200 ) {
        isConditionTrue_1 = true;
        gdjs.sala3DCode.GDfalso2Objects3[k] = gdjs.sala3DCode.GDfalso2Objects3[i];
        ++k;
    }
}
gdjs.sala3DCode.GDfalso2Objects3.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.sala3DCode.GDfalso2Objects3 */
{for(var i = 0, len = gdjs.sala3DCode.GDfalso2Objects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDfalso2Objects3[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
{ //Subevents
gdjs.sala3DCode.eventsList41(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("falso2"), gdjs.sala3DCode.GDfalso2Objects2);
gdjs.copyArray(runtimeScene.getObjects("piso2"), gdjs.sala3DCode.GDpiso2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDfalso2Objects2Objects, gdjs.sala3DCode.mapOfGDgdjs_9546sala3DCode_9546GDpiso2Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{gdjs.sala3DCode.GDfalso2Objects2_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(gdjs.sala3DCode.GDfalso2Objects2, gdjs.sala3DCode.GDfalso2Objects3);

for (var i = 0, k = 0, l = gdjs.sala3DCode.GDfalso2Objects3.length;i<l;++i) {
    if ( gdjs.sala3DCode.GDfalso2Objects3[i].getBehavior("PlatformerObject").getJumpSpeed() == 400 ) {
        isConditionTrue_2 = true;
        gdjs.sala3DCode.GDfalso2Objects3[k] = gdjs.sala3DCode.GDfalso2Objects3[i];
        ++k;
    }
}
gdjs.sala3DCode.GDfalso2Objects3.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.sala3DCode.GDfalso2Objects3.length; j < jLen ; ++j) {
        if ( gdjs.sala3DCode.GDfalso2Objects2_2final.indexOf(gdjs.sala3DCode.GDfalso2Objects3[j]) === -1 )
            gdjs.sala3DCode.GDfalso2Objects2_2final.push(gdjs.sala3DCode.GDfalso2Objects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.sala3DCode.GDfalso2Objects2, gdjs.sala3DCode.GDfalso2Objects3);

for (var i = 0, k = 0, l = gdjs.sala3DCode.GDfalso2Objects3.length;i<l;++i) {
    if ( gdjs.sala3DCode.GDfalso2Objects3[i].getBehavior("PlatformerObject").getJumpSpeed() == 600 ) {
        isConditionTrue_2 = true;
        gdjs.sala3DCode.GDfalso2Objects3[k] = gdjs.sala3DCode.GDfalso2Objects3[i];
        ++k;
    }
}
gdjs.sala3DCode.GDfalso2Objects3.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.sala3DCode.GDfalso2Objects3.length; j < jLen ; ++j) {
        if ( gdjs.sala3DCode.GDfalso2Objects2_2final.indexOf(gdjs.sala3DCode.GDfalso2Objects3[j]) === -1 )
            gdjs.sala3DCode.GDfalso2Objects2_2final.push(gdjs.sala3DCode.GDfalso2Objects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.sala3DCode.GDfalso2Objects2_2final, gdjs.sala3DCode.GDfalso2Objects2);
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.sala3DCode.eventsList42(runtimeScene);} //End of subevents
}

}


};gdjs.sala3DCode.asyncCallback21701340 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3DCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala3DCode.GDpersonajeObjects4);
gdjs.copyArray(runtimeScene.getObjects("puzzle"), gdjs.sala3DCode.GDpuzzleObjects4);
{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "puzzle");
}{for(var i = 0, len = gdjs.sala3DCode.GDpuzzleObjects4.length ;i < len;++i) {
    gdjs.sala3DCode.GDpuzzleObjects4[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.sala3DCode.GDpersonajeObjects4.length ;i < len;++i) {
    gdjs.sala3DCode.GDpersonajeObjects4[i].getBehavior("TopDownMovement").ignoreDefaultControls(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(true);
}gdjs.sala3DCode.localVariables.length = 0;
}
gdjs.sala3DCode.eventsList44 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.sala3DCode.asyncCallback21701340(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3DCode.asyncCallback21699724 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3DCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3DCode.GDcargaObjects3);
{for(var i = 0, len = gdjs.sala3DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala3DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 4, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3DCode.eventsList44(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.sala3DCode.localVariables.length = 0;
}
gdjs.sala3DCode.eventsList45 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.sala3DCode.asyncCallback21699724(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3DCode.asyncCallback21126532 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3DCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("perdiste"), gdjs.sala3DCode.GDperdisteObjects2);
{for(var i = 0, len = gdjs.sala3DCode.GDperdisteObjects2.length ;i < len;++i) {
    gdjs.sala3DCode.GDperdisteObjects2[i].getBehavior("Animation").resumeAnimation();
}
}
{ //Subevents
gdjs.sala3DCode.eventsList45(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.sala3DCode.localVariables.length = 0;
}
gdjs.sala3DCode.eventsList46 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.sala3DCode.asyncCallback21126532(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3DCode.eventsList47 = function(runtimeScene) {

{


gdjs.sala3DCode.eventsList35(runtimeScene);
}


{


gdjs.sala3DCode.eventsList39(runtimeScene);
}


{


gdjs.sala3DCode.eventsList43(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) >= 15;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21126612);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.sala3DCode.eventsList46(runtimeScene);} //End of subevents
}

}


};gdjs.sala3DCode.eventsList48 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala3DCode.GDpersonajeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala3DCode.GDpersonajeObjects1.length;i<l;++i) {
    if ( !(gdjs.sala3DCode.GDpersonajeObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_1 = true;
        gdjs.sala3DCode.GDpersonajeObjects1[k] = gdjs.sala3DCode.GDpersonajeObjects1[i];
        ++k;
    }
}
gdjs.sala3DCode.GDpersonajeObjects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.sala3DCode.GDpersonajeObjects1 */
{for(var i = 0, len = gdjs.sala3DCode.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala3DCode.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("abrir");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala3DCode.GDpersonajeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = !(gdjs.evtTools.input.anyKeyPressed(runtimeScene));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala3DCode.GDpersonajeObjects1.length;i<l;++i) {
    if ( !(gdjs.sala3DCode.GDpersonajeObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_1 = true;
        gdjs.sala3DCode.GDpersonajeObjects1[k] = gdjs.sala3DCode.GDpersonajeObjects1[i];
        ++k;
    }
}
gdjs.sala3DCode.GDpersonajeObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), false, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4), false, false);
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.sala3DCode.GDpersonajeObjects1 */
{for(var i = 0, len = gdjs.sala3DCode.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala3DCode.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("descanso");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala3DCode.GDpersonajeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sala3DCode.GDpersonajeObjects1.length;i<l;++i) {
    if ( gdjs.sala3DCode.GDpersonajeObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.sala3DCode.GDpersonajeObjects1[k] = gdjs.sala3DCode.GDpersonajeObjects1[i];
        ++k;
    }
}
gdjs.sala3DCode.GDpersonajeObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.sala3DCode.GDpersonajeObjects1 */
{for(var i = 0, len = gdjs.sala3DCode.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala3DCode.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("caminar");
}
}
{ //Subevents
gdjs.sala3DCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala3DCode.GDpersonajeObjects1);
{for(var i = 0, len = gdjs.sala3DCode.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala3DCode.GDpersonajeObjects1[i].getBehavior("TopDownMovement").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.sala3DCode.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala3DCode.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("perder");
}
}
{ //Subevents
gdjs.sala3DCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala3DCode.GDpersonajeObjects1);
{for(var i = 0, len = gdjs.sala3DCode.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala3DCode.GDpersonajeObjects1[i].getBehavior("TopDownMovement").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.sala3DCode.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala3DCode.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("ganar");
}
}
{ //Subevents
gdjs.sala3DCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.sala3DCode.eventsList3(runtimeScene);
}


{


gdjs.sala3DCode.eventsList4(runtimeScene);
}


{


gdjs.sala3DCode.eventsList30(runtimeScene);
}


{


gdjs.sala3DCode.eventsList47(runtimeScene);
}


};

gdjs.sala3DCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.sala3DCode.GDsala1Objects1.length = 0;
gdjs.sala3DCode.GDsala1Objects2.length = 0;
gdjs.sala3DCode.GDsala1Objects3.length = 0;
gdjs.sala3DCode.GDsala1Objects4.length = 0;
gdjs.sala3DCode.GDfondopuzzleObjects1.length = 0;
gdjs.sala3DCode.GDfondopuzzleObjects2.length = 0;
gdjs.sala3DCode.GDfondopuzzleObjects3.length = 0;
gdjs.sala3DCode.GDfondopuzzleObjects4.length = 0;
gdjs.sala3DCode.GDpiso2Objects1.length = 0;
gdjs.sala3DCode.GDpiso2Objects2.length = 0;
gdjs.sala3DCode.GDpiso2Objects3.length = 0;
gdjs.sala3DCode.GDpiso2Objects4.length = 0;
gdjs.sala3DCode.GDestrellaObjects1.length = 0;
gdjs.sala3DCode.GDestrellaObjects2.length = 0;
gdjs.sala3DCode.GDestrellaObjects3.length = 0;
gdjs.sala3DCode.GDestrellaObjects4.length = 0;
gdjs.sala3DCode.GDfalso1Objects1.length = 0;
gdjs.sala3DCode.GDfalso1Objects2.length = 0;
gdjs.sala3DCode.GDfalso1Objects3.length = 0;
gdjs.sala3DCode.GDfalso1Objects4.length = 0;
gdjs.sala3DCode.GDfalso2Objects1.length = 0;
gdjs.sala3DCode.GDfalso2Objects2.length = 0;
gdjs.sala3DCode.GDfalso2Objects3.length = 0;
gdjs.sala3DCode.GDfalso2Objects4.length = 0;
gdjs.sala3DCode.GDpersonajeObjects1.length = 0;
gdjs.sala3DCode.GDpersonajeObjects2.length = 0;
gdjs.sala3DCode.GDpersonajeObjects3.length = 0;
gdjs.sala3DCode.GDpersonajeObjects4.length = 0;
gdjs.sala3DCode.GDcargaObjects1.length = 0;
gdjs.sala3DCode.GDcargaObjects2.length = 0;
gdjs.sala3DCode.GDcargaObjects3.length = 0;
gdjs.sala3DCode.GDcargaObjects4.length = 0;
gdjs.sala3DCode.GDizquierdaObjects1.length = 0;
gdjs.sala3DCode.GDizquierdaObjects2.length = 0;
gdjs.sala3DCode.GDizquierdaObjects3.length = 0;
gdjs.sala3DCode.GDizquierdaObjects4.length = 0;
gdjs.sala3DCode.GDderechaObjects1.length = 0;
gdjs.sala3DCode.GDderechaObjects2.length = 0;
gdjs.sala3DCode.GDderechaObjects3.length = 0;
gdjs.sala3DCode.GDderechaObjects4.length = 0;
gdjs.sala3DCode.GDpuzzleObjects1.length = 0;
gdjs.sala3DCode.GDpuzzleObjects2.length = 0;
gdjs.sala3DCode.GDpuzzleObjects3.length = 0;
gdjs.sala3DCode.GDpuzzleObjects4.length = 0;
gdjs.sala3DCode.GDpuzzleCObjects1.length = 0;
gdjs.sala3DCode.GDpuzzleCObjects2.length = 0;
gdjs.sala3DCode.GDpuzzleCObjects3.length = 0;
gdjs.sala3DCode.GDpuzzleCObjects4.length = 0;
gdjs.sala3DCode.GDcomienzopuzzleObjects1.length = 0;
gdjs.sala3DCode.GDcomienzopuzzleObjects2.length = 0;
gdjs.sala3DCode.GDcomienzopuzzleObjects3.length = 0;
gdjs.sala3DCode.GDcomienzopuzzleObjects4.length = 0;
gdjs.sala3DCode.GDpisoObjects1.length = 0;
gdjs.sala3DCode.GDpisoObjects2.length = 0;
gdjs.sala3DCode.GDpisoObjects3.length = 0;
gdjs.sala3DCode.GDpisoObjects4.length = 0;
gdjs.sala3DCode.GDtechoObjects1.length = 0;
gdjs.sala3DCode.GDtechoObjects2.length = 0;
gdjs.sala3DCode.GDtechoObjects3.length = 0;
gdjs.sala3DCode.GDtechoObjects4.length = 0;
gdjs.sala3DCode.GDpuertaizquierdaObjects1.length = 0;
gdjs.sala3DCode.GDpuertaizquierdaObjects2.length = 0;
gdjs.sala3DCode.GDpuertaizquierdaObjects3.length = 0;
gdjs.sala3DCode.GDpuertaizquierdaObjects4.length = 0;
gdjs.sala3DCode.GDpuertaderechaObjects1.length = 0;
gdjs.sala3DCode.GDpuertaderechaObjects2.length = 0;
gdjs.sala3DCode.GDpuertaderechaObjects3.length = 0;
gdjs.sala3DCode.GDpuertaderechaObjects4.length = 0;
gdjs.sala3DCode.GDperdisteObjects1.length = 0;
gdjs.sala3DCode.GDperdisteObjects2.length = 0;
gdjs.sala3DCode.GDperdisteObjects3.length = 0;
gdjs.sala3DCode.GDperdisteObjects4.length = 0;

gdjs.sala3DCode.eventsList48(runtimeScene);
gdjs.sala3DCode.GDsala1Objects1.length = 0;
gdjs.sala3DCode.GDsala1Objects2.length = 0;
gdjs.sala3DCode.GDsala1Objects3.length = 0;
gdjs.sala3DCode.GDsala1Objects4.length = 0;
gdjs.sala3DCode.GDfondopuzzleObjects1.length = 0;
gdjs.sala3DCode.GDfondopuzzleObjects2.length = 0;
gdjs.sala3DCode.GDfondopuzzleObjects3.length = 0;
gdjs.sala3DCode.GDfondopuzzleObjects4.length = 0;
gdjs.sala3DCode.GDpiso2Objects1.length = 0;
gdjs.sala3DCode.GDpiso2Objects2.length = 0;
gdjs.sala3DCode.GDpiso2Objects3.length = 0;
gdjs.sala3DCode.GDpiso2Objects4.length = 0;
gdjs.sala3DCode.GDestrellaObjects1.length = 0;
gdjs.sala3DCode.GDestrellaObjects2.length = 0;
gdjs.sala3DCode.GDestrellaObjects3.length = 0;
gdjs.sala3DCode.GDestrellaObjects4.length = 0;
gdjs.sala3DCode.GDfalso1Objects1.length = 0;
gdjs.sala3DCode.GDfalso1Objects2.length = 0;
gdjs.sala3DCode.GDfalso1Objects3.length = 0;
gdjs.sala3DCode.GDfalso1Objects4.length = 0;
gdjs.sala3DCode.GDfalso2Objects1.length = 0;
gdjs.sala3DCode.GDfalso2Objects2.length = 0;
gdjs.sala3DCode.GDfalso2Objects3.length = 0;
gdjs.sala3DCode.GDfalso2Objects4.length = 0;
gdjs.sala3DCode.GDpersonajeObjects1.length = 0;
gdjs.sala3DCode.GDpersonajeObjects2.length = 0;
gdjs.sala3DCode.GDpersonajeObjects3.length = 0;
gdjs.sala3DCode.GDpersonajeObjects4.length = 0;
gdjs.sala3DCode.GDcargaObjects1.length = 0;
gdjs.sala3DCode.GDcargaObjects2.length = 0;
gdjs.sala3DCode.GDcargaObjects3.length = 0;
gdjs.sala3DCode.GDcargaObjects4.length = 0;
gdjs.sala3DCode.GDizquierdaObjects1.length = 0;
gdjs.sala3DCode.GDizquierdaObjects2.length = 0;
gdjs.sala3DCode.GDizquierdaObjects3.length = 0;
gdjs.sala3DCode.GDizquierdaObjects4.length = 0;
gdjs.sala3DCode.GDderechaObjects1.length = 0;
gdjs.sala3DCode.GDderechaObjects2.length = 0;
gdjs.sala3DCode.GDderechaObjects3.length = 0;
gdjs.sala3DCode.GDderechaObjects4.length = 0;
gdjs.sala3DCode.GDpuzzleObjects1.length = 0;
gdjs.sala3DCode.GDpuzzleObjects2.length = 0;
gdjs.sala3DCode.GDpuzzleObjects3.length = 0;
gdjs.sala3DCode.GDpuzzleObjects4.length = 0;
gdjs.sala3DCode.GDpuzzleCObjects1.length = 0;
gdjs.sala3DCode.GDpuzzleCObjects2.length = 0;
gdjs.sala3DCode.GDpuzzleCObjects3.length = 0;
gdjs.sala3DCode.GDpuzzleCObjects4.length = 0;
gdjs.sala3DCode.GDcomienzopuzzleObjects1.length = 0;
gdjs.sala3DCode.GDcomienzopuzzleObjects2.length = 0;
gdjs.sala3DCode.GDcomienzopuzzleObjects3.length = 0;
gdjs.sala3DCode.GDcomienzopuzzleObjects4.length = 0;
gdjs.sala3DCode.GDpisoObjects1.length = 0;
gdjs.sala3DCode.GDpisoObjects2.length = 0;
gdjs.sala3DCode.GDpisoObjects3.length = 0;
gdjs.sala3DCode.GDpisoObjects4.length = 0;
gdjs.sala3DCode.GDtechoObjects1.length = 0;
gdjs.sala3DCode.GDtechoObjects2.length = 0;
gdjs.sala3DCode.GDtechoObjects3.length = 0;
gdjs.sala3DCode.GDtechoObjects4.length = 0;
gdjs.sala3DCode.GDpuertaizquierdaObjects1.length = 0;
gdjs.sala3DCode.GDpuertaizquierdaObjects2.length = 0;
gdjs.sala3DCode.GDpuertaizquierdaObjects3.length = 0;
gdjs.sala3DCode.GDpuertaizquierdaObjects4.length = 0;
gdjs.sala3DCode.GDpuertaderechaObjects1.length = 0;
gdjs.sala3DCode.GDpuertaderechaObjects2.length = 0;
gdjs.sala3DCode.GDpuertaderechaObjects3.length = 0;
gdjs.sala3DCode.GDpuertaderechaObjects4.length = 0;
gdjs.sala3DCode.GDperdisteObjects1.length = 0;
gdjs.sala3DCode.GDperdisteObjects2.length = 0;
gdjs.sala3DCode.GDperdisteObjects3.length = 0;
gdjs.sala3DCode.GDperdisteObjects4.length = 0;


return;

}

gdjs['sala3DCode'] = gdjs.sala3DCode;
