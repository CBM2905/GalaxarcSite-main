gdjs.sala3Code = {};
gdjs.sala3Code.localVariables = [];
gdjs.sala3Code.GDestrellaObjects3_2final = [];

gdjs.sala3Code.GDfalso1Objects2_2final = [];

gdjs.sala3Code.GDfalso2Objects2_2final = [];

gdjs.sala3Code.forEachIndex4 = 0;

gdjs.sala3Code.forEachObjects4 = [];

gdjs.sala3Code.forEachTemporary4 = null;

gdjs.sala3Code.forEachTotalCount4 = 0;

gdjs.sala3Code.GDsala1Objects1= [];
gdjs.sala3Code.GDsala1Objects2= [];
gdjs.sala3Code.GDsala1Objects3= [];
gdjs.sala3Code.GDsala1Objects4= [];
gdjs.sala3Code.GDfondopuzzleObjects1= [];
gdjs.sala3Code.GDfondopuzzleObjects2= [];
gdjs.sala3Code.GDfondopuzzleObjects3= [];
gdjs.sala3Code.GDfondopuzzleObjects4= [];
gdjs.sala3Code.GDpiso2Objects1= [];
gdjs.sala3Code.GDpiso2Objects2= [];
gdjs.sala3Code.GDpiso2Objects3= [];
gdjs.sala3Code.GDpiso2Objects4= [];
gdjs.sala3Code.GDestrellaObjects1= [];
gdjs.sala3Code.GDestrellaObjects2= [];
gdjs.sala3Code.GDestrellaObjects3= [];
gdjs.sala3Code.GDestrellaObjects4= [];
gdjs.sala3Code.GDfalso1Objects1= [];
gdjs.sala3Code.GDfalso1Objects2= [];
gdjs.sala3Code.GDfalso1Objects3= [];
gdjs.sala3Code.GDfalso1Objects4= [];
gdjs.sala3Code.GDfalso2Objects1= [];
gdjs.sala3Code.GDfalso2Objects2= [];
gdjs.sala3Code.GDfalso2Objects3= [];
gdjs.sala3Code.GDfalso2Objects4= [];
gdjs.sala3Code.GDpersonajeObjects1= [];
gdjs.sala3Code.GDpersonajeObjects2= [];
gdjs.sala3Code.GDpersonajeObjects3= [];
gdjs.sala3Code.GDpersonajeObjects4= [];
gdjs.sala3Code.GDcargaObjects1= [];
gdjs.sala3Code.GDcargaObjects2= [];
gdjs.sala3Code.GDcargaObjects3= [];
gdjs.sala3Code.GDcargaObjects4= [];
gdjs.sala3Code.GDizquierdaObjects1= [];
gdjs.sala3Code.GDizquierdaObjects2= [];
gdjs.sala3Code.GDizquierdaObjects3= [];
gdjs.sala3Code.GDizquierdaObjects4= [];
gdjs.sala3Code.GDderechaObjects1= [];
gdjs.sala3Code.GDderechaObjects2= [];
gdjs.sala3Code.GDderechaObjects3= [];
gdjs.sala3Code.GDderechaObjects4= [];
gdjs.sala3Code.GDpuzzleObjects1= [];
gdjs.sala3Code.GDpuzzleObjects2= [];
gdjs.sala3Code.GDpuzzleObjects3= [];
gdjs.sala3Code.GDpuzzleObjects4= [];
gdjs.sala3Code.GDpuzzleCObjects1= [];
gdjs.sala3Code.GDpuzzleCObjects2= [];
gdjs.sala3Code.GDpuzzleCObjects3= [];
gdjs.sala3Code.GDpuzzleCObjects4= [];
gdjs.sala3Code.GDcomienzopuzzleObjects1= [];
gdjs.sala3Code.GDcomienzopuzzleObjects2= [];
gdjs.sala3Code.GDcomienzopuzzleObjects3= [];
gdjs.sala3Code.GDcomienzopuzzleObjects4= [];
gdjs.sala3Code.GDpisoObjects1= [];
gdjs.sala3Code.GDpisoObjects2= [];
gdjs.sala3Code.GDpisoObjects3= [];
gdjs.sala3Code.GDpisoObjects4= [];
gdjs.sala3Code.GDtechoObjects1= [];
gdjs.sala3Code.GDtechoObjects2= [];
gdjs.sala3Code.GDtechoObjects3= [];
gdjs.sala3Code.GDtechoObjects4= [];
gdjs.sala3Code.GDpuertaizquierdaObjects1= [];
gdjs.sala3Code.GDpuertaizquierdaObjects2= [];
gdjs.sala3Code.GDpuertaizquierdaObjects3= [];
gdjs.sala3Code.GDpuertaizquierdaObjects4= [];
gdjs.sala3Code.GDpuertaderechaObjects1= [];
gdjs.sala3Code.GDpuertaderechaObjects2= [];
gdjs.sala3Code.GDpuertaderechaObjects3= [];
gdjs.sala3Code.GDpuertaderechaObjects4= [];
gdjs.sala3Code.GDperdisteObjects1= [];
gdjs.sala3Code.GDperdisteObjects2= [];
gdjs.sala3Code.GDperdisteObjects3= [];
gdjs.sala3Code.GDperdisteObjects4= [];


gdjs.sala3Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.sala3Code.GDpersonajeObjects1, gdjs.sala3Code.GDpersonajeObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sala3Code.GDpersonajeObjects2.length;i<l;++i) {
    if ( gdjs.sala3Code.GDpersonajeObjects2[i].getBehavior("TopDownMovement").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.sala3Code.GDpersonajeObjects2[k] = gdjs.sala3Code.GDpersonajeObjects2[i];
        ++k;
    }
}
gdjs.sala3Code.GDpersonajeObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.sala3Code.GDpersonajeObjects2 */
{for(var i = 0, len = gdjs.sala3Code.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala3Code.GDpersonajeObjects2[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

/* Reuse gdjs.sala3Code.GDpersonajeObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sala3Code.GDpersonajeObjects1.length;i<l;++i) {
    if ( gdjs.sala3Code.GDpersonajeObjects1[i].getBehavior("TopDownMovement").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.sala3Code.GDpersonajeObjects1[k] = gdjs.sala3Code.GDpersonajeObjects1[i];
        ++k;
    }
}
gdjs.sala3Code.GDpersonajeObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.sala3Code.GDpersonajeObjects1 */
{for(var i = 0, len = gdjs.sala3Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala3Code.GDpersonajeObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


};gdjs.sala3Code.asyncCallback39222428 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("personaje"), gdjs.sala3Code.GDpersonajeObjects2);

{for(var i = 0, len = gdjs.sala3Code.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala3Code.GDpersonajeObjects2[i].getBehavior("TopDownMovement").ignoreDefaultControls(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(false);
}gdjs.sala3Code.localVariables.length = 0;
}
gdjs.sala3Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3Code.localVariables);
for (const obj of gdjs.sala3Code.GDpersonajeObjects1) asyncObjectsList.addObject("personaje", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.sala3Code.asyncCallback39222428(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3Code.asyncCallback39224772 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("personaje"), gdjs.sala3Code.GDpersonajeObjects2);

{for(var i = 0, len = gdjs.sala3Code.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala3Code.GDpersonajeObjects2[i].getBehavior("TopDownMovement").ignoreDefaultControls(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setBoolean(false);
}gdjs.sala3Code.localVariables.length = 0;
}
gdjs.sala3Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3Code.localVariables);
for (const obj of gdjs.sala3Code.GDpersonajeObjects1) asyncObjectsList.addObject("personaje", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.sala3Code.asyncCallback39224772(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala3Code.GDpersonajeObjects2});
gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaizquierdaObjects2Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala3Code.GDpuertaizquierdaObjects2});
gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaizquierdaObjects2Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala3Code.GDpuertaizquierdaObjects2});
gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala3Code.GDpersonajeObjects2});
gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaderechaObjects2Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala3Code.GDpuertaderechaObjects2});
gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaderechaObjects2Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala3Code.GDpuertaderechaObjects2});
gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala3Code.GDpersonajeObjects2});
gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpisoObjects2Objects = Hashtable.newFrom({"piso": gdjs.sala3Code.GDpisoObjects2});
gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpisoObjects2Objects = Hashtable.newFrom({"piso": gdjs.sala3Code.GDpisoObjects2});
gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects1Objects = Hashtable.newFrom({"personaje": gdjs.sala3Code.GDpersonajeObjects1});
gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDtechoObjects1Objects = Hashtable.newFrom({"techo": gdjs.sala3Code.GDtechoObjects1});
gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDtechoObjects1Objects = Hashtable.newFrom({"techo": gdjs.sala3Code.GDtechoObjects1});
gdjs.sala3Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala3Code.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("puertaizquierda"), gdjs.sala3Code.GDpuertaizquierdaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects2Objects, gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaizquierdaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.sala3Code.GDpersonajeObjects2 */
/* Reuse gdjs.sala3Code.GDpuertaizquierdaObjects2 */
{for(var i = 0, len = gdjs.sala3Code.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala3Code.GDpersonajeObjects2[i].separateFromObjectsList(gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaizquierdaObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala3Code.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("puertaderecha"), gdjs.sala3Code.GDpuertaderechaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects2Objects, gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaderechaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.sala3Code.GDpersonajeObjects2 */
/* Reuse gdjs.sala3Code.GDpuertaderechaObjects2 */
{for(var i = 0, len = gdjs.sala3Code.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala3Code.GDpersonajeObjects2[i].separateFromObjectsList(gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaderechaObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala3Code.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("piso"), gdjs.sala3Code.GDpisoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects2Objects, gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpisoObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.sala3Code.GDpersonajeObjects2 */
/* Reuse gdjs.sala3Code.GDpisoObjects2 */
{for(var i = 0, len = gdjs.sala3Code.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala3Code.GDpersonajeObjects2[i].separateFromObjectsList(gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpisoObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala3Code.GDpersonajeObjects1);
gdjs.copyArray(runtimeScene.getObjects("techo"), gdjs.sala3Code.GDtechoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects1Objects, gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDtechoObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.sala3Code.GDpersonajeObjects1 */
/* Reuse gdjs.sala3Code.GDtechoObjects1 */
{for(var i = 0, len = gdjs.sala3Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala3Code.GDpersonajeObjects1[i].separateFromObjectsList(gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDtechoObjects1Objects, false);
}
}}

}


};gdjs.sala3Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.doesSceneExist(runtimeScene, "sala3");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("derecha"), gdjs.sala3Code.GDderechaObjects2);
gdjs.copyArray(runtimeScene.getObjects("estrella"), gdjs.sala3Code.GDestrellaObjects2);
gdjs.copyArray(runtimeScene.getObjects("falso1"), gdjs.sala3Code.GDfalso1Objects2);
gdjs.copyArray(runtimeScene.getObjects("falso2"), gdjs.sala3Code.GDfalso2Objects2);
gdjs.copyArray(runtimeScene.getObjects("izquierda"), gdjs.sala3Code.GDizquierdaObjects2);
gdjs.copyArray(runtimeScene.getObjects("puzzle"), gdjs.sala3Code.GDpuzzleObjects2);
{for(var i = 0, len = gdjs.sala3Code.GDizquierdaObjects2.length ;i < len;++i) {
    gdjs.sala3Code.GDizquierdaObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.sala3Code.GDderechaObjects2.length ;i < len;++i) {
    gdjs.sala3Code.GDderechaObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.sala3Code.GDpuzzleObjects2.length ;i < len;++i) {
    gdjs.sala3Code.GDpuzzleObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.sala3Code.GDestrellaObjects2.length ;i < len;++i) {
    gdjs.sala3Code.GDestrellaObjects2[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.sala3Code.GDfalso1Objects2.length ;i < len;++i) {
    gdjs.sala3Code.GDfalso1Objects2[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.sala3Code.GDfalso2Objects2.length ;i < len;++i) {
    gdjs.sala3Code.GDfalso2Objects2[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3Code.GDcargaObjects1);
gdjs.copyArray(runtimeScene.getObjects("comienzopuzzle"), gdjs.sala3Code.GDcomienzopuzzleObjects1);
gdjs.copyArray(runtimeScene.getObjects("derecha"), gdjs.sala3Code.GDderechaObjects1);
gdjs.copyArray(runtimeScene.getObjects("estrella"), gdjs.sala3Code.GDestrellaObjects1);
gdjs.copyArray(runtimeScene.getObjects("falso1"), gdjs.sala3Code.GDfalso1Objects1);
gdjs.copyArray(runtimeScene.getObjects("falso2"), gdjs.sala3Code.GDfalso2Objects1);
gdjs.copyArray(runtimeScene.getObjects("izquierda"), gdjs.sala3Code.GDizquierdaObjects1);
gdjs.copyArray(runtimeScene.getObjects("perdiste"), gdjs.sala3Code.GDperdisteObjects1);
gdjs.copyArray(runtimeScene.getObjects("puzzle"), gdjs.sala3Code.GDpuzzleObjects1);
{for(var i = 0, len = gdjs.sala3Code.GDcargaObjects1.length ;i < len;++i) {
    gdjs.sala3Code.GDcargaObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.sala3Code.GDizquierdaObjects1.length ;i < len;++i) {
    gdjs.sala3Code.GDizquierdaObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala3Code.GDderechaObjects1.length ;i < len;++i) {
    gdjs.sala3Code.GDderechaObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala3Code.GDpuzzleObjects1.length ;i < len;++i) {
    gdjs.sala3Code.GDpuzzleObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala3Code.GDestrellaObjects1.length ;i < len;++i) {
    gdjs.sala3Code.GDestrellaObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala3Code.GDfalso1Objects1.length ;i < len;++i) {
    gdjs.sala3Code.GDfalso1Objects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala3Code.GDfalso2Objects1.length ;i < len;++i) {
    gdjs.sala3Code.GDfalso2Objects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala3Code.GDcomienzopuzzleObjects1.length ;i < len;++i) {
    gdjs.sala3Code.GDcomienzopuzzleObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala3Code.GDperdisteObjects1.length ;i < len;++i) {
    gdjs.sala3Code.GDperdisteObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{gdjs.evtTools.input.showCursor(runtimeScene);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


};gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala3Code.GDpersonajeObjects2});
gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaizquierdaObjects2Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala3Code.GDpuertaizquierdaObjects2});
gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala3Code.GDpersonajeObjects3});
gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala3Code.GDpuertaizquierdaObjects3});
gdjs.sala3Code.asyncCallback39229228 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala1D", false);
}gdjs.sala3Code.localVariables.length = 0;
}
gdjs.sala3Code.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala3Code.asyncCallback39229228(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala3Code.GDpersonajeObjects3});
gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala3Code.GDpuertaizquierdaObjects3});
gdjs.sala3Code.asyncCallback39232300 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala2D", false);
}gdjs.sala3Code.localVariables.length = 0;
}
gdjs.sala3Code.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala3Code.asyncCallback39232300(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala3Code.GDpersonajeObjects3});
gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala3Code.GDpuertaizquierdaObjects3});
gdjs.sala3Code.asyncCallback39236340 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala3D", false);
}gdjs.sala3Code.localVariables.length = 0;
}
gdjs.sala3Code.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala3Code.asyncCallback39236340(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala3Code.GDpersonajeObjects3});
gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala3Code.GDpuertaizquierdaObjects3});
gdjs.sala3Code.asyncCallback39240396 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala4D", false);
}gdjs.sala3Code.localVariables.length = 0;
}
gdjs.sala3Code.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala3Code.asyncCallback39240396(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala3Code.GDpersonajeObjects3});
gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala3Code.GDpuertaizquierdaObjects3});
gdjs.sala3Code.asyncCallback39244436 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala5D", false);
}gdjs.sala3Code.localVariables.length = 0;
}
gdjs.sala3Code.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala3Code.asyncCallback39244436(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala3Code.GDpersonajeObjects3});
gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala3Code.GDpuertaizquierdaObjects3});
gdjs.sala3Code.asyncCallback39248508 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala6D", false);
}gdjs.sala3Code.localVariables.length = 0;
}
gdjs.sala3Code.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala3Code.asyncCallback39248508(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala3Code.GDpersonajeObjects2});
gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaizquierdaObjects2Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala3Code.GDpuertaizquierdaObjects2});
gdjs.sala3Code.asyncCallback39264732 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala10", false);
}gdjs.sala3Code.localVariables.length = 0;
}
gdjs.sala3Code.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala3Code.asyncCallback39264732(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3Code.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.sala3Code.GDpersonajeObjects2, gdjs.sala3Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala3Code.GDpuertaizquierdaObjects2, gdjs.sala3Code.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects3Objects, gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala3Code.GDizquierdaObjects2, gdjs.sala3Code.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala3Code.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala3Code.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala3Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala3Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala3Code.GDpersonajeObjects2, gdjs.sala3Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala3Code.GDpuertaizquierdaObjects2, gdjs.sala3Code.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects3Objects, gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala3Code.GDizquierdaObjects2, gdjs.sala3Code.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala3Code.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala3Code.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala3Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala3Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3Code.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala3Code.GDpersonajeObjects2, gdjs.sala3Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala3Code.GDpuertaizquierdaObjects2, gdjs.sala3Code.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects3Objects, gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala3Code.GDizquierdaObjects2, gdjs.sala3Code.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala3Code.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala3Code.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala3Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala3Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala3Code.GDpersonajeObjects2, gdjs.sala3Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala3Code.GDpuertaizquierdaObjects2, gdjs.sala3Code.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects3Objects, gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala3Code.GDizquierdaObjects2, gdjs.sala3Code.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala3Code.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala3Code.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala3Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala3Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3Code.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala3Code.GDpersonajeObjects2, gdjs.sala3Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala3Code.GDpuertaizquierdaObjects2, gdjs.sala3Code.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects3Objects, gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala3Code.GDizquierdaObjects2, gdjs.sala3Code.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala3Code.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala3Code.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala3Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala3Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3Code.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala3Code.GDpersonajeObjects2, gdjs.sala3Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala3Code.GDpuertaizquierdaObjects2, gdjs.sala3Code.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects3Objects, gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala3Code.GDizquierdaObjects2, gdjs.sala3Code.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala3Code.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala3Code.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala3Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala3Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3Code.eventsList10(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.sala3Code.GDpersonajeObjects2 */
/* Reuse gdjs.sala3Code.GDpuertaizquierdaObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects2Objects, gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaizquierdaObjects2Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3Code.GDcargaObjects2);
/* Reuse gdjs.sala3Code.GDizquierdaObjects2 */
{for(var i = 0, len = gdjs.sala3Code.GDizquierdaObjects2.length ;i < len;++i) {
    gdjs.sala3Code.GDizquierdaObjects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala3Code.GDcargaObjects2.length ;i < len;++i) {
    gdjs.sala3Code.GDcargaObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3Code.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala3Code.GDpersonajeObjects2});
gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaderechaObjects2Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala3Code.GDpuertaderechaObjects2});
gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala3Code.GDpersonajeObjects3});
gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala3Code.GDpuertaderechaObjects3});
gdjs.sala3Code.asyncCallback39270068 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala1", false);
}gdjs.sala3Code.localVariables.length = 0;
}
gdjs.sala3Code.eventsList13 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala3Code.asyncCallback39270068(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala3Code.GDpersonajeObjects3});
gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala3Code.GDpuertaderechaObjects3});
gdjs.sala3Code.asyncCallback39274236 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala2", false);
}gdjs.sala3Code.localVariables.length = 0;
}
gdjs.sala3Code.eventsList14 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala3Code.asyncCallback39274236(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala3Code.GDpersonajeObjects3});
gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala3Code.GDpuertaderechaObjects3});
gdjs.sala3Code.asyncCallback39278380 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala3", false);
}gdjs.sala3Code.localVariables.length = 0;
}
gdjs.sala3Code.eventsList15 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala3Code.asyncCallback39278380(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala3Code.GDpersonajeObjects3});
gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala3Code.GDpuertaderechaObjects3});
gdjs.sala3Code.asyncCallback39282540 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala4", false);
}gdjs.sala3Code.localVariables.length = 0;
}
gdjs.sala3Code.eventsList16 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala3Code.asyncCallback39282540(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala3Code.GDpersonajeObjects3});
gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala3Code.GDpuertaderechaObjects3});
gdjs.sala3Code.asyncCallback39286684 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala5", false);
}gdjs.sala3Code.localVariables.length = 0;
}
gdjs.sala3Code.eventsList17 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala3Code.asyncCallback39286684(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala3Code.GDpersonajeObjects3});
gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala3Code.GDpuertaderechaObjects3});
gdjs.sala3Code.asyncCallback39290860 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala6", false);
}gdjs.sala3Code.localVariables.length = 0;
}
gdjs.sala3Code.eventsList18 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala3Code.asyncCallback39290860(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala3Code.GDpersonajeObjects2});
gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaderechaObjects2Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala3Code.GDpuertaderechaObjects2});
gdjs.sala3Code.asyncCallback39307500 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala10", false);
}gdjs.sala3Code.localVariables.length = 0;
}
gdjs.sala3Code.eventsList19 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala3Code.asyncCallback39307500(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3Code.eventsList20 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.sala3Code.GDpersonajeObjects2, gdjs.sala3Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala3Code.GDpuertaderechaObjects2, gdjs.sala3Code.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects3Objects, gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala3Code.GDderechaObjects2, gdjs.sala3Code.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala3Code.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala3Code.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala3Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala3Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3Code.eventsList13(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala3Code.GDpersonajeObjects2, gdjs.sala3Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala3Code.GDpuertaderechaObjects2, gdjs.sala3Code.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects3Objects, gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala3Code.GDderechaObjects2, gdjs.sala3Code.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala3Code.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala3Code.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala3Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala3Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3Code.eventsList14(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala3Code.GDpersonajeObjects2, gdjs.sala3Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala3Code.GDpuertaderechaObjects2, gdjs.sala3Code.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects3Objects, gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala3Code.GDderechaObjects2, gdjs.sala3Code.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala3Code.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala3Code.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala3Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala3Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3Code.eventsList15(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala3Code.GDpersonajeObjects2, gdjs.sala3Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala3Code.GDpuertaderechaObjects2, gdjs.sala3Code.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects3Objects, gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala3Code.GDderechaObjects2, gdjs.sala3Code.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala3Code.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala3Code.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala3Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala3Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3Code.eventsList16(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala3Code.GDpersonajeObjects2, gdjs.sala3Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala3Code.GDpuertaderechaObjects2, gdjs.sala3Code.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects3Objects, gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala3Code.GDderechaObjects2, gdjs.sala3Code.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala3Code.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala3Code.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala3Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala3Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3Code.eventsList17(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala3Code.GDpersonajeObjects2, gdjs.sala3Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala3Code.GDpuertaderechaObjects2, gdjs.sala3Code.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects3Objects, gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala3Code.GDderechaObjects2, gdjs.sala3Code.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala3Code.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala3Code.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala3Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala3Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3Code.eventsList18(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.sala3Code.GDpersonajeObjects2 */
/* Reuse gdjs.sala3Code.GDpuertaderechaObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects2Objects, gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaderechaObjects2Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3Code.GDcargaObjects2);
/* Reuse gdjs.sala3Code.GDderechaObjects2 */
{for(var i = 0, len = gdjs.sala3Code.GDderechaObjects2.length ;i < len;++i) {
    gdjs.sala3Code.GDderechaObjects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala3Code.GDcargaObjects2.length ;i < len;++i) {
    gdjs.sala3Code.GDcargaObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3Code.eventsList19(runtimeScene);} //End of subevents
}

}


};gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects1Objects = Hashtable.newFrom({"personaje": gdjs.sala3Code.GDpersonajeObjects1});
gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuzzleCObjects1Objects = Hashtable.newFrom({"puzzleC": gdjs.sala3Code.GDpuzzleCObjects1});
gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects1Objects = Hashtable.newFrom({"personaje": gdjs.sala3Code.GDpersonajeObjects1});
gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuzzleCObjects1Objects = Hashtable.newFrom({"puzzleC": gdjs.sala3Code.GDpuzzleCObjects1});
gdjs.sala3Code.asyncCallback11352612 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3Code.localVariables);
gdjs.sala3Code.localVariables.length = 0;
}
gdjs.sala3Code.eventsList21 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.sala3Code.asyncCallback11352612(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3Code.asyncCallback21223100 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("comienzopuzzle"), gdjs.sala3Code.GDcomienzopuzzleObjects2);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "puzzle");
}{for(var i = 0, len = gdjs.sala3Code.GDcomienzopuzzleObjects2.length ;i < len;++i) {
    gdjs.sala3Code.GDcomienzopuzzleObjects2[i].getBehavior("Animation").resumeAnimation();
}
}
{ //Subevents
gdjs.sala3Code.eventsList21(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.sala3Code.localVariables.length = 0;
}
gdjs.sala3Code.eventsList22 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.sala3Code.asyncCallback21223100(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3Code.eventsList23 = function(runtimeScene) {

{

/* Reuse gdjs.sala3Code.GDpersonajeObjects1 */
/* Reuse gdjs.sala3Code.GDpuzzleObjects1 */
/* Reuse gdjs.sala3Code.GDpuzzleCObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects1Objects, gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuzzleCObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala3Code.GDpuzzleObjects1.length;i<l;++i) {
    if ( gdjs.sala3Code.GDpuzzleObjects1[i].isVisible() ) {
        isConditionTrue_1 = true;
        gdjs.sala3Code.GDpuzzleObjects1[k] = gdjs.sala3Code.GDpuzzleObjects1[i];
        ++k;
    }
}
gdjs.sala3Code.GDpuzzleObjects1.length = k;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3Code.GDcargaObjects1);
/* Reuse gdjs.sala3Code.GDpersonajeObjects1 */
/* Reuse gdjs.sala3Code.GDpuzzleObjects1 */
{for(var i = 0, len = gdjs.sala3Code.GDpuzzleObjects1.length ;i < len;++i) {
    gdjs.sala3Code.GDpuzzleObjects1[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala3Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala3Code.GDpersonajeObjects1[i].getBehavior("TopDownMovement").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.sala3Code.GDcargaObjects1.length ;i < len;++i) {
    gdjs.sala3Code.GDcargaObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 4, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3Code.eventsList22(runtimeScene);} //End of subevents
}

}


};gdjs.sala3Code.eventsList24 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala3Code.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("puertaizquierda"), gdjs.sala3Code.GDpuertaizquierdaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects2Objects, gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaizquierdaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("izquierda"), gdjs.sala3Code.GDizquierdaObjects2);
{for(var i = 0, len = gdjs.sala3Code.GDizquierdaObjects2.length ;i < len;++i) {
    gdjs.sala3Code.GDizquierdaObjects2[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.random(7));
}
{ //Subevents
gdjs.sala3Code.eventsList12(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala3Code.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("puertaderecha"), gdjs.sala3Code.GDpuertaderechaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects2Objects, gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuertaderechaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("derecha"), gdjs.sala3Code.GDderechaObjects2);
{for(var i = 0, len = gdjs.sala3Code.GDderechaObjects2.length ;i < len;++i) {
    gdjs.sala3Code.GDderechaObjects2[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.random(7));
}
{ //Subevents
gdjs.sala3Code.eventsList20(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala3Code.GDpersonajeObjects1);
gdjs.copyArray(runtimeScene.getObjects("puzzleC"), gdjs.sala3Code.GDpuzzleCObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpersonajeObjects1Objects, gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpuzzleCObjects1Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("puzzle"), gdjs.sala3Code.GDpuzzleObjects1);
{for(var i = 0, len = gdjs.sala3Code.GDpuzzleObjects1.length ;i < len;++i) {
    gdjs.sala3Code.GDpuzzleObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.sala3Code.eventsList23(runtimeScene);} //End of subevents
}

}


};gdjs.sala3Code.eventsList25 = function(runtimeScene) {

};gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDestrellaObjects3Objects = Hashtable.newFrom({"estrella": gdjs.sala3Code.GDestrellaObjects3});
gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpiso2Objects3Objects = Hashtable.newFrom({"piso2": gdjs.sala3Code.GDpiso2Objects3});
gdjs.sala3Code.asyncCallback20637372 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("estrella"), gdjs.sala3Code.GDestrellaObjects4);

{for(var i = 0, len = gdjs.sala3Code.GDestrellaObjects4.length ;i < len;++i) {
    gdjs.sala3Code.GDestrellaObjects4[i].getBehavior("PlatformerObject").setJumpSpeed(gdjs.sala3Code.GDestrellaObjects4[i].getBehavior("PlatformerObject").getJumpSpeed() - (200));
}
}gdjs.sala3Code.localVariables.length = 0;
}
gdjs.sala3Code.eventsList26 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3Code.localVariables);
for (const obj of gdjs.sala3Code.GDestrellaObjects3) asyncObjectsList.addObject("estrella", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala3Code.asyncCallback20637372(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDestrellaObjects3Objects = Hashtable.newFrom({"estrella": gdjs.sala3Code.GDestrellaObjects3});
gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpiso2Objects3Objects = Hashtable.newFrom({"piso2": gdjs.sala3Code.GDpiso2Objects3});
gdjs.sala3Code.eventsList27 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), false, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(7).setBoolean(true);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setBoolean(true);
}}

}


};gdjs.sala3Code.asyncCallback20937316 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala3Code.GDpersonajeObjects3);
gdjs.copyArray(runtimeScene.getObjects("puzzle"), gdjs.sala3Code.GDpuzzleObjects3);
{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "puzzle");
}{for(var i = 0, len = gdjs.sala3Code.GDpuzzleObjects3.length ;i < len;++i) {
    gdjs.sala3Code.GDpuzzleObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.sala3Code.GDpersonajeObjects3.length ;i < len;++i) {
    gdjs.sala3Code.GDpersonajeObjects3[i].getBehavior("TopDownMovement").ignoreDefaultControls(false);
}
}
{ //Subevents
gdjs.sala3Code.eventsList27(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.sala3Code.localVariables.length = 0;
}
gdjs.sala3Code.eventsList28 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.sala3Code.asyncCallback20937316(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3Code.eventsList29 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("estrella"), gdjs.sala3Code.GDestrellaObjects3);

for (gdjs.sala3Code.forEachIndex4 = 0;gdjs.sala3Code.forEachIndex4 < gdjs.sala3Code.GDestrellaObjects3.length;++gdjs.sala3Code.forEachIndex4) {
gdjs.sala3Code.GDestrellaObjects4.length = 0;


gdjs.sala3Code.forEachTemporary4 = gdjs.sala3Code.GDestrellaObjects3[gdjs.sala3Code.forEachIndex4];
gdjs.sala3Code.GDestrellaObjects4.push(gdjs.sala3Code.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala3Code.GDestrellaObjects4.length;i<l;++i) {
    if ( gdjs.sala3Code.GDestrellaObjects4[i].getBehavior("PlatformerObject").getJumpSpeed() < 200 ) {
        isConditionTrue_1 = true;
        gdjs.sala3Code.GDestrellaObjects4[k] = gdjs.sala3Code.GDestrellaObjects4[i];
        ++k;
    }
}
gdjs.sala3Code.GDestrellaObjects4.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala3Code.GDestrellaObjects4.length;i<l;++i) {
    if ( gdjs.sala3Code.GDestrellaObjects4[i].getBehavior("Arrastrable").wasJustDropped() ) {
        isConditionTrue_1 = true;
        gdjs.sala3Code.GDestrellaObjects4[k] = gdjs.sala3Code.GDestrellaObjects4[i];
        ++k;
    }
}
gdjs.sala3Code.GDestrellaObjects4.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.sala3Code.GDestrellaObjects4.length ;i < len;++i) {
    gdjs.sala3Code.GDestrellaObjects4[i].getBehavior("PlatformerObject").setJumpSpeed(600);
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("estrella"), gdjs.sala3Code.GDestrellaObjects3);
gdjs.copyArray(runtimeScene.getObjects("piso2"), gdjs.sala3Code.GDpiso2Objects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDestrellaObjects3Objects, gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpiso2Objects3Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala3Code.GDestrellaObjects3.length;i<l;++i) {
    if ( gdjs.sala3Code.GDestrellaObjects3[i].getBehavior("PlatformerObject").getJumpSpeed() >= 200 ) {
        isConditionTrue_1 = true;
        gdjs.sala3Code.GDestrellaObjects3[k] = gdjs.sala3Code.GDestrellaObjects3[i];
        ++k;
    }
}
gdjs.sala3Code.GDestrellaObjects3.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.sala3Code.GDestrellaObjects3 */
{for(var i = 0, len = gdjs.sala3Code.GDestrellaObjects3.length ;i < len;++i) {
    gdjs.sala3Code.GDestrellaObjects3[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
{ //Subevents
gdjs.sala3Code.eventsList26(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("estrella"), gdjs.sala3Code.GDestrellaObjects3);
gdjs.copyArray(runtimeScene.getObjects("piso2"), gdjs.sala3Code.GDpiso2Objects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDestrellaObjects3Objects, gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpiso2Objects3Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{gdjs.sala3Code.GDestrellaObjects3_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(gdjs.sala3Code.GDestrellaObjects3, gdjs.sala3Code.GDestrellaObjects4);

for (var i = 0, k = 0, l = gdjs.sala3Code.GDestrellaObjects4.length;i<l;++i) {
    if ( gdjs.sala3Code.GDestrellaObjects4[i].getBehavior("PlatformerObject").getJumpSpeed() == 400 ) {
        isConditionTrue_2 = true;
        gdjs.sala3Code.GDestrellaObjects4[k] = gdjs.sala3Code.GDestrellaObjects4[i];
        ++k;
    }
}
gdjs.sala3Code.GDestrellaObjects4.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.sala3Code.GDestrellaObjects4.length; j < jLen ; ++j) {
        if ( gdjs.sala3Code.GDestrellaObjects3_2final.indexOf(gdjs.sala3Code.GDestrellaObjects4[j]) === -1 )
            gdjs.sala3Code.GDestrellaObjects3_2final.push(gdjs.sala3Code.GDestrellaObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.sala3Code.GDestrellaObjects3, gdjs.sala3Code.GDestrellaObjects4);

for (var i = 0, k = 0, l = gdjs.sala3Code.GDestrellaObjects4.length;i<l;++i) {
    if ( gdjs.sala3Code.GDestrellaObjects4[i].getBehavior("PlatformerObject").getJumpSpeed() == 600 ) {
        isConditionTrue_2 = true;
        gdjs.sala3Code.GDestrellaObjects4[k] = gdjs.sala3Code.GDestrellaObjects4[i];
        ++k;
    }
}
gdjs.sala3Code.GDestrellaObjects4.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.sala3Code.GDestrellaObjects4.length; j < jLen ; ++j) {
        if ( gdjs.sala3Code.GDestrellaObjects3_2final.indexOf(gdjs.sala3Code.GDestrellaObjects4[j]) === -1 )
            gdjs.sala3Code.GDestrellaObjects3_2final.push(gdjs.sala3Code.GDestrellaObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.sala3Code.GDestrellaObjects3_2final, gdjs.sala3Code.GDestrellaObjects3);
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.sala3Code.GDestrellaObjects3 */
{for(var i = 0, len = gdjs.sala3Code.GDestrellaObjects3.length ;i < len;++i) {
    gdjs.sala3Code.GDestrellaObjects3[i].setAnimationFrame(gdjs.sala3Code.GDestrellaObjects3[i].getAnimationFrame() + (1));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("estrella"), gdjs.sala3Code.GDestrellaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sala3Code.GDestrellaObjects2.length;i<l;++i) {
    if ( gdjs.sala3Code.GDestrellaObjects2[i].getAnimationFrame() == 6 ) {
        isConditionTrue_0 = true;
        gdjs.sala3Code.GDestrellaObjects2[k] = gdjs.sala3Code.GDestrellaObjects2[i];
        ++k;
    }
}
gdjs.sala3Code.GDestrellaObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20926412);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3Code.GDcargaObjects2);
{for(var i = 0, len = gdjs.sala3Code.GDcargaObjects2.length ;i < len;++i) {
    gdjs.sala3Code.GDcargaObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 4, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3Code.eventsList28(runtimeScene);} //End of subevents
}

}


};gdjs.sala3Code.eventsList30 = function(runtimeScene) {

};gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDfalso1Objects3Objects = Hashtable.newFrom({"falso1": gdjs.sala3Code.GDfalso1Objects3});
gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpiso2Objects3Objects = Hashtable.newFrom({"piso2": gdjs.sala3Code.GDpiso2Objects3});
gdjs.sala3Code.asyncCallback21005532 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("falso1"), gdjs.sala3Code.GDfalso1Objects4);

{for(var i = 0, len = gdjs.sala3Code.GDfalso1Objects4.length ;i < len;++i) {
    gdjs.sala3Code.GDfalso1Objects4[i].getBehavior("PlatformerObject").setJumpSpeed(gdjs.sala3Code.GDfalso1Objects4[i].getBehavior("PlatformerObject").getJumpSpeed() - (200));
}
}gdjs.sala3Code.localVariables.length = 0;
}
gdjs.sala3Code.eventsList31 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3Code.localVariables);
for (const obj of gdjs.sala3Code.GDfalso1Objects3) asyncObjectsList.addObject("falso1", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala3Code.asyncCallback21005532(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDfalso1Objects2Objects = Hashtable.newFrom({"falso1": gdjs.sala3Code.GDfalso1Objects2});
gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpiso2Objects2Objects = Hashtable.newFrom({"piso2": gdjs.sala3Code.GDpiso2Objects2});
gdjs.sala3Code.asyncCallback21424788 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("falso1"), gdjs.sala3Code.GDfalso1Objects3);

{for(var i = 0, len = gdjs.sala3Code.GDfalso1Objects3.length ;i < len;++i) {
    gdjs.sala3Code.GDfalso1Objects3[i].setAnimationFrame(gdjs.sala3Code.GDfalso1Objects3[i].getAnimationFrame() + (1));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala3Code.localVariables.length = 0;
}
gdjs.sala3Code.eventsList32 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3Code.localVariables);
for (const obj of gdjs.sala3Code.GDfalso1Objects2) asyncObjectsList.addObject("falso1", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.sala3Code.asyncCallback21424788(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3Code.eventsList33 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("falso1"), gdjs.sala3Code.GDfalso1Objects3);

for (gdjs.sala3Code.forEachIndex4 = 0;gdjs.sala3Code.forEachIndex4 < gdjs.sala3Code.GDfalso1Objects3.length;++gdjs.sala3Code.forEachIndex4) {
gdjs.sala3Code.GDfalso1Objects4.length = 0;


gdjs.sala3Code.forEachTemporary4 = gdjs.sala3Code.GDfalso1Objects3[gdjs.sala3Code.forEachIndex4];
gdjs.sala3Code.GDfalso1Objects4.push(gdjs.sala3Code.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala3Code.GDfalso1Objects4.length;i<l;++i) {
    if ( gdjs.sala3Code.GDfalso1Objects4[i].getBehavior("PlatformerObject").getJumpSpeed() < 200 ) {
        isConditionTrue_1 = true;
        gdjs.sala3Code.GDfalso1Objects4[k] = gdjs.sala3Code.GDfalso1Objects4[i];
        ++k;
    }
}
gdjs.sala3Code.GDfalso1Objects4.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala3Code.GDfalso1Objects4.length;i<l;++i) {
    if ( gdjs.sala3Code.GDfalso1Objects4[i].getBehavior("Arrastrable").wasJustDropped() ) {
        isConditionTrue_1 = true;
        gdjs.sala3Code.GDfalso1Objects4[k] = gdjs.sala3Code.GDfalso1Objects4[i];
        ++k;
    }
}
gdjs.sala3Code.GDfalso1Objects4.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.sala3Code.GDfalso1Objects4.length ;i < len;++i) {
    gdjs.sala3Code.GDfalso1Objects4[i].getBehavior("PlatformerObject").setJumpSpeed(600);
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("falso1"), gdjs.sala3Code.GDfalso1Objects3);
gdjs.copyArray(runtimeScene.getObjects("piso2"), gdjs.sala3Code.GDpiso2Objects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDfalso1Objects3Objects, gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpiso2Objects3Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala3Code.GDfalso1Objects3.length;i<l;++i) {
    if ( gdjs.sala3Code.GDfalso1Objects3[i].getBehavior("PlatformerObject").getJumpSpeed() >= 200 ) {
        isConditionTrue_1 = true;
        gdjs.sala3Code.GDfalso1Objects3[k] = gdjs.sala3Code.GDfalso1Objects3[i];
        ++k;
    }
}
gdjs.sala3Code.GDfalso1Objects3.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.sala3Code.GDfalso1Objects3 */
{for(var i = 0, len = gdjs.sala3Code.GDfalso1Objects3.length ;i < len;++i) {
    gdjs.sala3Code.GDfalso1Objects3[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
{ //Subevents
gdjs.sala3Code.eventsList31(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("falso1"), gdjs.sala3Code.GDfalso1Objects2);
gdjs.copyArray(runtimeScene.getObjects("piso2"), gdjs.sala3Code.GDpiso2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDfalso1Objects2Objects, gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpiso2Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{gdjs.sala3Code.GDfalso1Objects2_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(gdjs.sala3Code.GDfalso1Objects2, gdjs.sala3Code.GDfalso1Objects3);

for (var i = 0, k = 0, l = gdjs.sala3Code.GDfalso1Objects3.length;i<l;++i) {
    if ( gdjs.sala3Code.GDfalso1Objects3[i].getBehavior("PlatformerObject").getJumpSpeed() == 400 ) {
        isConditionTrue_2 = true;
        gdjs.sala3Code.GDfalso1Objects3[k] = gdjs.sala3Code.GDfalso1Objects3[i];
        ++k;
    }
}
gdjs.sala3Code.GDfalso1Objects3.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.sala3Code.GDfalso1Objects3.length; j < jLen ; ++j) {
        if ( gdjs.sala3Code.GDfalso1Objects2_2final.indexOf(gdjs.sala3Code.GDfalso1Objects3[j]) === -1 )
            gdjs.sala3Code.GDfalso1Objects2_2final.push(gdjs.sala3Code.GDfalso1Objects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.sala3Code.GDfalso1Objects2, gdjs.sala3Code.GDfalso1Objects3);

for (var i = 0, k = 0, l = gdjs.sala3Code.GDfalso1Objects3.length;i<l;++i) {
    if ( gdjs.sala3Code.GDfalso1Objects3[i].getBehavior("PlatformerObject").getJumpSpeed() == 600 ) {
        isConditionTrue_2 = true;
        gdjs.sala3Code.GDfalso1Objects3[k] = gdjs.sala3Code.GDfalso1Objects3[i];
        ++k;
    }
}
gdjs.sala3Code.GDfalso1Objects3.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.sala3Code.GDfalso1Objects3.length; j < jLen ; ++j) {
        if ( gdjs.sala3Code.GDfalso1Objects2_2final.indexOf(gdjs.sala3Code.GDfalso1Objects3[j]) === -1 )
            gdjs.sala3Code.GDfalso1Objects2_2final.push(gdjs.sala3Code.GDfalso1Objects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.sala3Code.GDfalso1Objects2_2final, gdjs.sala3Code.GDfalso1Objects2);
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.sala3Code.eventsList32(runtimeScene);} //End of subevents
}

}


};gdjs.sala3Code.eventsList34 = function(runtimeScene) {

};gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDfalso2Objects3Objects = Hashtable.newFrom({"falso2": gdjs.sala3Code.GDfalso2Objects3});
gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpiso2Objects3Objects = Hashtable.newFrom({"piso2": gdjs.sala3Code.GDpiso2Objects3});
gdjs.sala3Code.asyncCallback21143716 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("falso2"), gdjs.sala3Code.GDfalso2Objects4);

{for(var i = 0, len = gdjs.sala3Code.GDfalso2Objects4.length ;i < len;++i) {
    gdjs.sala3Code.GDfalso2Objects4[i].getBehavior("PlatformerObject").setJumpSpeed(gdjs.sala3Code.GDfalso2Objects4[i].getBehavior("PlatformerObject").getJumpSpeed() - (200));
}
}gdjs.sala3Code.localVariables.length = 0;
}
gdjs.sala3Code.eventsList35 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3Code.localVariables);
for (const obj of gdjs.sala3Code.GDfalso2Objects3) asyncObjectsList.addObject("falso2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala3Code.asyncCallback21143716(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDfalso2Objects2Objects = Hashtable.newFrom({"falso2": gdjs.sala3Code.GDfalso2Objects2});
gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpiso2Objects2Objects = Hashtable.newFrom({"piso2": gdjs.sala3Code.GDpiso2Objects2});
gdjs.sala3Code.asyncCallback21156476 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("falso2"), gdjs.sala3Code.GDfalso2Objects3);

{for(var i = 0, len = gdjs.sala3Code.GDfalso2Objects3.length ;i < len;++i) {
    gdjs.sala3Code.GDfalso2Objects3[i].setAnimationFrame(gdjs.sala3Code.GDfalso2Objects3[i].getAnimationFrame() + (1));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala3Code.localVariables.length = 0;
}
gdjs.sala3Code.eventsList36 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3Code.localVariables);
for (const obj of gdjs.sala3Code.GDfalso2Objects2) asyncObjectsList.addObject("falso2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.sala3Code.asyncCallback21156476(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3Code.eventsList37 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("falso2"), gdjs.sala3Code.GDfalso2Objects3);

for (gdjs.sala3Code.forEachIndex4 = 0;gdjs.sala3Code.forEachIndex4 < gdjs.sala3Code.GDfalso2Objects3.length;++gdjs.sala3Code.forEachIndex4) {
gdjs.sala3Code.GDfalso2Objects4.length = 0;


gdjs.sala3Code.forEachTemporary4 = gdjs.sala3Code.GDfalso2Objects3[gdjs.sala3Code.forEachIndex4];
gdjs.sala3Code.GDfalso2Objects4.push(gdjs.sala3Code.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala3Code.GDfalso2Objects4.length;i<l;++i) {
    if ( gdjs.sala3Code.GDfalso2Objects4[i].getBehavior("PlatformerObject").getJumpSpeed() < 200 ) {
        isConditionTrue_1 = true;
        gdjs.sala3Code.GDfalso2Objects4[k] = gdjs.sala3Code.GDfalso2Objects4[i];
        ++k;
    }
}
gdjs.sala3Code.GDfalso2Objects4.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala3Code.GDfalso2Objects4.length;i<l;++i) {
    if ( gdjs.sala3Code.GDfalso2Objects4[i].getBehavior("Arrastrable").wasJustDropped() ) {
        isConditionTrue_1 = true;
        gdjs.sala3Code.GDfalso2Objects4[k] = gdjs.sala3Code.GDfalso2Objects4[i];
        ++k;
    }
}
gdjs.sala3Code.GDfalso2Objects4.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.sala3Code.GDfalso2Objects4.length ;i < len;++i) {
    gdjs.sala3Code.GDfalso2Objects4[i].getBehavior("PlatformerObject").setJumpSpeed(600);
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("falso2"), gdjs.sala3Code.GDfalso2Objects3);
gdjs.copyArray(runtimeScene.getObjects("piso2"), gdjs.sala3Code.GDpiso2Objects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDfalso2Objects3Objects, gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpiso2Objects3Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala3Code.GDfalso2Objects3.length;i<l;++i) {
    if ( gdjs.sala3Code.GDfalso2Objects3[i].getBehavior("PlatformerObject").getJumpSpeed() >= 200 ) {
        isConditionTrue_1 = true;
        gdjs.sala3Code.GDfalso2Objects3[k] = gdjs.sala3Code.GDfalso2Objects3[i];
        ++k;
    }
}
gdjs.sala3Code.GDfalso2Objects3.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.sala3Code.GDfalso2Objects3 */
{for(var i = 0, len = gdjs.sala3Code.GDfalso2Objects3.length ;i < len;++i) {
    gdjs.sala3Code.GDfalso2Objects3[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
{ //Subevents
gdjs.sala3Code.eventsList35(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("falso2"), gdjs.sala3Code.GDfalso2Objects2);
gdjs.copyArray(runtimeScene.getObjects("piso2"), gdjs.sala3Code.GDpiso2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDfalso2Objects2Objects, gdjs.sala3Code.mapOfGDgdjs_9546sala3Code_9546GDpiso2Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{gdjs.sala3Code.GDfalso2Objects2_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(gdjs.sala3Code.GDfalso2Objects2, gdjs.sala3Code.GDfalso2Objects3);

for (var i = 0, k = 0, l = gdjs.sala3Code.GDfalso2Objects3.length;i<l;++i) {
    if ( gdjs.sala3Code.GDfalso2Objects3[i].getBehavior("PlatformerObject").getJumpSpeed() == 400 ) {
        isConditionTrue_2 = true;
        gdjs.sala3Code.GDfalso2Objects3[k] = gdjs.sala3Code.GDfalso2Objects3[i];
        ++k;
    }
}
gdjs.sala3Code.GDfalso2Objects3.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.sala3Code.GDfalso2Objects3.length; j < jLen ; ++j) {
        if ( gdjs.sala3Code.GDfalso2Objects2_2final.indexOf(gdjs.sala3Code.GDfalso2Objects3[j]) === -1 )
            gdjs.sala3Code.GDfalso2Objects2_2final.push(gdjs.sala3Code.GDfalso2Objects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.sala3Code.GDfalso2Objects2, gdjs.sala3Code.GDfalso2Objects3);

for (var i = 0, k = 0, l = gdjs.sala3Code.GDfalso2Objects3.length;i<l;++i) {
    if ( gdjs.sala3Code.GDfalso2Objects3[i].getBehavior("PlatformerObject").getJumpSpeed() == 600 ) {
        isConditionTrue_2 = true;
        gdjs.sala3Code.GDfalso2Objects3[k] = gdjs.sala3Code.GDfalso2Objects3[i];
        ++k;
    }
}
gdjs.sala3Code.GDfalso2Objects3.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.sala3Code.GDfalso2Objects3.length; j < jLen ; ++j) {
        if ( gdjs.sala3Code.GDfalso2Objects2_2final.indexOf(gdjs.sala3Code.GDfalso2Objects3[j]) === -1 )
            gdjs.sala3Code.GDfalso2Objects2_2final.push(gdjs.sala3Code.GDfalso2Objects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.sala3Code.GDfalso2Objects2_2final, gdjs.sala3Code.GDfalso2Objects2);
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.sala3Code.eventsList36(runtimeScene);} //End of subevents
}

}


};gdjs.sala3Code.asyncCallback21177092 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala3Code.GDpersonajeObjects4);
gdjs.copyArray(runtimeScene.getObjects("puzzle"), gdjs.sala3Code.GDpuzzleObjects4);
{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "puzzle");
}{for(var i = 0, len = gdjs.sala3Code.GDpuzzleObjects4.length ;i < len;++i) {
    gdjs.sala3Code.GDpuzzleObjects4[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.sala3Code.GDpersonajeObjects4.length ;i < len;++i) {
    gdjs.sala3Code.GDpersonajeObjects4[i].getBehavior("TopDownMovement").ignoreDefaultControls(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(true);
}gdjs.sala3Code.localVariables.length = 0;
}
gdjs.sala3Code.eventsList38 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.sala3Code.asyncCallback21177092(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3Code.asyncCallback21168948 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala3Code.GDcargaObjects3);
{for(var i = 0, len = gdjs.sala3Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala3Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 4, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala3Code.eventsList38(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.sala3Code.localVariables.length = 0;
}
gdjs.sala3Code.eventsList39 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.sala3Code.asyncCallback21168948(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3Code.asyncCallback21167700 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala3Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("perdiste"), gdjs.sala3Code.GDperdisteObjects2);
{for(var i = 0, len = gdjs.sala3Code.GDperdisteObjects2.length ;i < len;++i) {
    gdjs.sala3Code.GDperdisteObjects2[i].getBehavior("Animation").resumeAnimation();
}
}
{ //Subevents
gdjs.sala3Code.eventsList39(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.sala3Code.localVariables.length = 0;
}
gdjs.sala3Code.eventsList40 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala3Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.sala3Code.asyncCallback21167700(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala3Code.eventsList41 = function(runtimeScene) {

{


gdjs.sala3Code.eventsList29(runtimeScene);
}


{


gdjs.sala3Code.eventsList33(runtimeScene);
}


{


gdjs.sala3Code.eventsList37(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) >= 15;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21167780);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.sala3Code.eventsList40(runtimeScene);} //End of subevents
}

}


};gdjs.sala3Code.eventsList42 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala3Code.GDpersonajeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala3Code.GDpersonajeObjects1.length;i<l;++i) {
    if ( !(gdjs.sala3Code.GDpersonajeObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_1 = true;
        gdjs.sala3Code.GDpersonajeObjects1[k] = gdjs.sala3Code.GDpersonajeObjects1[i];
        ++k;
    }
}
gdjs.sala3Code.GDpersonajeObjects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.sala3Code.GDpersonajeObjects1 */
{for(var i = 0, len = gdjs.sala3Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala3Code.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("abrir");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala3Code.GDpersonajeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = !(gdjs.evtTools.input.anyKeyPressed(runtimeScene));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala3Code.GDpersonajeObjects1.length;i<l;++i) {
    if ( !(gdjs.sala3Code.GDpersonajeObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_1 = true;
        gdjs.sala3Code.GDpersonajeObjects1[k] = gdjs.sala3Code.GDpersonajeObjects1[i];
        ++k;
    }
}
gdjs.sala3Code.GDpersonajeObjects1.length = k;
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
/* Reuse gdjs.sala3Code.GDpersonajeObjects1 */
{for(var i = 0, len = gdjs.sala3Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala3Code.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("descanso");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala3Code.GDpersonajeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sala3Code.GDpersonajeObjects1.length;i<l;++i) {
    if ( gdjs.sala3Code.GDpersonajeObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.sala3Code.GDpersonajeObjects1[k] = gdjs.sala3Code.GDpersonajeObjects1[i];
        ++k;
    }
}
gdjs.sala3Code.GDpersonajeObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.sala3Code.GDpersonajeObjects1 */
{for(var i = 0, len = gdjs.sala3Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala3Code.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("caminar");
}
}
{ //Subevents
gdjs.sala3Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala3Code.GDpersonajeObjects1);
{for(var i = 0, len = gdjs.sala3Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala3Code.GDpersonajeObjects1[i].getBehavior("TopDownMovement").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.sala3Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala3Code.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("perder");
}
}
{ //Subevents
gdjs.sala3Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala3Code.GDpersonajeObjects1);
{for(var i = 0, len = gdjs.sala3Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala3Code.GDpersonajeObjects1[i].getBehavior("TopDownMovement").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.sala3Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala3Code.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("ganar");
}
}
{ //Subevents
gdjs.sala3Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.sala3Code.eventsList3(runtimeScene);
}


{


gdjs.sala3Code.eventsList4(runtimeScene);
}


{


gdjs.sala3Code.eventsList24(runtimeScene);
}


{


gdjs.sala3Code.eventsList41(runtimeScene);
}


};

gdjs.sala3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.sala3Code.GDsala1Objects1.length = 0;
gdjs.sala3Code.GDsala1Objects2.length = 0;
gdjs.sala3Code.GDsala1Objects3.length = 0;
gdjs.sala3Code.GDsala1Objects4.length = 0;
gdjs.sala3Code.GDfondopuzzleObjects1.length = 0;
gdjs.sala3Code.GDfondopuzzleObjects2.length = 0;
gdjs.sala3Code.GDfondopuzzleObjects3.length = 0;
gdjs.sala3Code.GDfondopuzzleObjects4.length = 0;
gdjs.sala3Code.GDpiso2Objects1.length = 0;
gdjs.sala3Code.GDpiso2Objects2.length = 0;
gdjs.sala3Code.GDpiso2Objects3.length = 0;
gdjs.sala3Code.GDpiso2Objects4.length = 0;
gdjs.sala3Code.GDestrellaObjects1.length = 0;
gdjs.sala3Code.GDestrellaObjects2.length = 0;
gdjs.sala3Code.GDestrellaObjects3.length = 0;
gdjs.sala3Code.GDestrellaObjects4.length = 0;
gdjs.sala3Code.GDfalso1Objects1.length = 0;
gdjs.sala3Code.GDfalso1Objects2.length = 0;
gdjs.sala3Code.GDfalso1Objects3.length = 0;
gdjs.sala3Code.GDfalso1Objects4.length = 0;
gdjs.sala3Code.GDfalso2Objects1.length = 0;
gdjs.sala3Code.GDfalso2Objects2.length = 0;
gdjs.sala3Code.GDfalso2Objects3.length = 0;
gdjs.sala3Code.GDfalso2Objects4.length = 0;
gdjs.sala3Code.GDpersonajeObjects1.length = 0;
gdjs.sala3Code.GDpersonajeObjects2.length = 0;
gdjs.sala3Code.GDpersonajeObjects3.length = 0;
gdjs.sala3Code.GDpersonajeObjects4.length = 0;
gdjs.sala3Code.GDcargaObjects1.length = 0;
gdjs.sala3Code.GDcargaObjects2.length = 0;
gdjs.sala3Code.GDcargaObjects3.length = 0;
gdjs.sala3Code.GDcargaObjects4.length = 0;
gdjs.sala3Code.GDizquierdaObjects1.length = 0;
gdjs.sala3Code.GDizquierdaObjects2.length = 0;
gdjs.sala3Code.GDizquierdaObjects3.length = 0;
gdjs.sala3Code.GDizquierdaObjects4.length = 0;
gdjs.sala3Code.GDderechaObjects1.length = 0;
gdjs.sala3Code.GDderechaObjects2.length = 0;
gdjs.sala3Code.GDderechaObjects3.length = 0;
gdjs.sala3Code.GDderechaObjects4.length = 0;
gdjs.sala3Code.GDpuzzleObjects1.length = 0;
gdjs.sala3Code.GDpuzzleObjects2.length = 0;
gdjs.sala3Code.GDpuzzleObjects3.length = 0;
gdjs.sala3Code.GDpuzzleObjects4.length = 0;
gdjs.sala3Code.GDpuzzleCObjects1.length = 0;
gdjs.sala3Code.GDpuzzleCObjects2.length = 0;
gdjs.sala3Code.GDpuzzleCObjects3.length = 0;
gdjs.sala3Code.GDpuzzleCObjects4.length = 0;
gdjs.sala3Code.GDcomienzopuzzleObjects1.length = 0;
gdjs.sala3Code.GDcomienzopuzzleObjects2.length = 0;
gdjs.sala3Code.GDcomienzopuzzleObjects3.length = 0;
gdjs.sala3Code.GDcomienzopuzzleObjects4.length = 0;
gdjs.sala3Code.GDpisoObjects1.length = 0;
gdjs.sala3Code.GDpisoObjects2.length = 0;
gdjs.sala3Code.GDpisoObjects3.length = 0;
gdjs.sala3Code.GDpisoObjects4.length = 0;
gdjs.sala3Code.GDtechoObjects1.length = 0;
gdjs.sala3Code.GDtechoObjects2.length = 0;
gdjs.sala3Code.GDtechoObjects3.length = 0;
gdjs.sala3Code.GDtechoObjects4.length = 0;
gdjs.sala3Code.GDpuertaizquierdaObjects1.length = 0;
gdjs.sala3Code.GDpuertaizquierdaObjects2.length = 0;
gdjs.sala3Code.GDpuertaizquierdaObjects3.length = 0;
gdjs.sala3Code.GDpuertaizquierdaObjects4.length = 0;
gdjs.sala3Code.GDpuertaderechaObjects1.length = 0;
gdjs.sala3Code.GDpuertaderechaObjects2.length = 0;
gdjs.sala3Code.GDpuertaderechaObjects3.length = 0;
gdjs.sala3Code.GDpuertaderechaObjects4.length = 0;
gdjs.sala3Code.GDperdisteObjects1.length = 0;
gdjs.sala3Code.GDperdisteObjects2.length = 0;
gdjs.sala3Code.GDperdisteObjects3.length = 0;
gdjs.sala3Code.GDperdisteObjects4.length = 0;

gdjs.sala3Code.eventsList42(runtimeScene);
gdjs.sala3Code.GDsala1Objects1.length = 0;
gdjs.sala3Code.GDsala1Objects2.length = 0;
gdjs.sala3Code.GDsala1Objects3.length = 0;
gdjs.sala3Code.GDsala1Objects4.length = 0;
gdjs.sala3Code.GDfondopuzzleObjects1.length = 0;
gdjs.sala3Code.GDfondopuzzleObjects2.length = 0;
gdjs.sala3Code.GDfondopuzzleObjects3.length = 0;
gdjs.sala3Code.GDfondopuzzleObjects4.length = 0;
gdjs.sala3Code.GDpiso2Objects1.length = 0;
gdjs.sala3Code.GDpiso2Objects2.length = 0;
gdjs.sala3Code.GDpiso2Objects3.length = 0;
gdjs.sala3Code.GDpiso2Objects4.length = 0;
gdjs.sala3Code.GDestrellaObjects1.length = 0;
gdjs.sala3Code.GDestrellaObjects2.length = 0;
gdjs.sala3Code.GDestrellaObjects3.length = 0;
gdjs.sala3Code.GDestrellaObjects4.length = 0;
gdjs.sala3Code.GDfalso1Objects1.length = 0;
gdjs.sala3Code.GDfalso1Objects2.length = 0;
gdjs.sala3Code.GDfalso1Objects3.length = 0;
gdjs.sala3Code.GDfalso1Objects4.length = 0;
gdjs.sala3Code.GDfalso2Objects1.length = 0;
gdjs.sala3Code.GDfalso2Objects2.length = 0;
gdjs.sala3Code.GDfalso2Objects3.length = 0;
gdjs.sala3Code.GDfalso2Objects4.length = 0;
gdjs.sala3Code.GDpersonajeObjects1.length = 0;
gdjs.sala3Code.GDpersonajeObjects2.length = 0;
gdjs.sala3Code.GDpersonajeObjects3.length = 0;
gdjs.sala3Code.GDpersonajeObjects4.length = 0;
gdjs.sala3Code.GDcargaObjects1.length = 0;
gdjs.sala3Code.GDcargaObjects2.length = 0;
gdjs.sala3Code.GDcargaObjects3.length = 0;
gdjs.sala3Code.GDcargaObjects4.length = 0;
gdjs.sala3Code.GDizquierdaObjects1.length = 0;
gdjs.sala3Code.GDizquierdaObjects2.length = 0;
gdjs.sala3Code.GDizquierdaObjects3.length = 0;
gdjs.sala3Code.GDizquierdaObjects4.length = 0;
gdjs.sala3Code.GDderechaObjects1.length = 0;
gdjs.sala3Code.GDderechaObjects2.length = 0;
gdjs.sala3Code.GDderechaObjects3.length = 0;
gdjs.sala3Code.GDderechaObjects4.length = 0;
gdjs.sala3Code.GDpuzzleObjects1.length = 0;
gdjs.sala3Code.GDpuzzleObjects2.length = 0;
gdjs.sala3Code.GDpuzzleObjects3.length = 0;
gdjs.sala3Code.GDpuzzleObjects4.length = 0;
gdjs.sala3Code.GDpuzzleCObjects1.length = 0;
gdjs.sala3Code.GDpuzzleCObjects2.length = 0;
gdjs.sala3Code.GDpuzzleCObjects3.length = 0;
gdjs.sala3Code.GDpuzzleCObjects4.length = 0;
gdjs.sala3Code.GDcomienzopuzzleObjects1.length = 0;
gdjs.sala3Code.GDcomienzopuzzleObjects2.length = 0;
gdjs.sala3Code.GDcomienzopuzzleObjects3.length = 0;
gdjs.sala3Code.GDcomienzopuzzleObjects4.length = 0;
gdjs.sala3Code.GDpisoObjects1.length = 0;
gdjs.sala3Code.GDpisoObjects2.length = 0;
gdjs.sala3Code.GDpisoObjects3.length = 0;
gdjs.sala3Code.GDpisoObjects4.length = 0;
gdjs.sala3Code.GDtechoObjects1.length = 0;
gdjs.sala3Code.GDtechoObjects2.length = 0;
gdjs.sala3Code.GDtechoObjects3.length = 0;
gdjs.sala3Code.GDtechoObjects4.length = 0;
gdjs.sala3Code.GDpuertaizquierdaObjects1.length = 0;
gdjs.sala3Code.GDpuertaizquierdaObjects2.length = 0;
gdjs.sala3Code.GDpuertaizquierdaObjects3.length = 0;
gdjs.sala3Code.GDpuertaizquierdaObjects4.length = 0;
gdjs.sala3Code.GDpuertaderechaObjects1.length = 0;
gdjs.sala3Code.GDpuertaderechaObjects2.length = 0;
gdjs.sala3Code.GDpuertaderechaObjects3.length = 0;
gdjs.sala3Code.GDpuertaderechaObjects4.length = 0;
gdjs.sala3Code.GDperdisteObjects1.length = 0;
gdjs.sala3Code.GDperdisteObjects2.length = 0;
gdjs.sala3Code.GDperdisteObjects3.length = 0;
gdjs.sala3Code.GDperdisteObjects4.length = 0;


return;

}

gdjs['sala3Code'] = gdjs.sala3Code;
