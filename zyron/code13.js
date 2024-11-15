gdjs.sala10Code = {};
gdjs.sala10Code.localVariables = [];
gdjs.sala10Code.GDsala1Objects1= [];
gdjs.sala10Code.GDsala1Objects2= [];
gdjs.sala10Code.GDsala1Objects3= [];
gdjs.sala10Code.GDsala1Objects4= [];
gdjs.sala10Code.GDsala1Objects5= [];
gdjs.sala10Code.GDderecha2Objects1= [];
gdjs.sala10Code.GDderecha2Objects2= [];
gdjs.sala10Code.GDderecha2Objects3= [];
gdjs.sala10Code.GDderecha2Objects4= [];
gdjs.sala10Code.GDderecha2Objects5= [];
gdjs.sala10Code.GDcasillero1Objects1= [];
gdjs.sala10Code.GDcasillero1Objects2= [];
gdjs.sala10Code.GDcasillero1Objects3= [];
gdjs.sala10Code.GDcasillero1Objects4= [];
gdjs.sala10Code.GDcasillero1Objects5= [];
gdjs.sala10Code.GDcasillero2Objects1= [];
gdjs.sala10Code.GDcasillero2Objects2= [];
gdjs.sala10Code.GDcasillero2Objects3= [];
gdjs.sala10Code.GDcasillero2Objects4= [];
gdjs.sala10Code.GDcasillero2Objects5= [];
gdjs.sala10Code.GDpersonajeObjects1= [];
gdjs.sala10Code.GDpersonajeObjects2= [];
gdjs.sala10Code.GDpersonajeObjects3= [];
gdjs.sala10Code.GDpersonajeObjects4= [];
gdjs.sala10Code.GDpersonajeObjects5= [];
gdjs.sala10Code.GDcargaObjects1= [];
gdjs.sala10Code.GDcargaObjects2= [];
gdjs.sala10Code.GDcargaObjects3= [];
gdjs.sala10Code.GDcargaObjects4= [];
gdjs.sala10Code.GDcargaObjects5= [];
gdjs.sala10Code.GDizquierdaObjects1= [];
gdjs.sala10Code.GDizquierdaObjects2= [];
gdjs.sala10Code.GDizquierdaObjects3= [];
gdjs.sala10Code.GDizquierdaObjects4= [];
gdjs.sala10Code.GDizquierdaObjects5= [];
gdjs.sala10Code.GDderechaObjects1= [];
gdjs.sala10Code.GDderechaObjects2= [];
gdjs.sala10Code.GDderechaObjects3= [];
gdjs.sala10Code.GDderechaObjects4= [];
gdjs.sala10Code.GDderechaObjects5= [];
gdjs.sala10Code.GDpuzzleObjects1= [];
gdjs.sala10Code.GDpuzzleObjects2= [];
gdjs.sala10Code.GDpuzzleObjects3= [];
gdjs.sala10Code.GDpuzzleObjects4= [];
gdjs.sala10Code.GDpuzzleObjects5= [];
gdjs.sala10Code.GDpuzzleCObjects1= [];
gdjs.sala10Code.GDpuzzleCObjects2= [];
gdjs.sala10Code.GDpuzzleCObjects3= [];
gdjs.sala10Code.GDpuzzleCObjects4= [];
gdjs.sala10Code.GDpuzzleCObjects5= [];
gdjs.sala10Code.GDcomienzopuzzleObjects1= [];
gdjs.sala10Code.GDcomienzopuzzleObjects2= [];
gdjs.sala10Code.GDcomienzopuzzleObjects3= [];
gdjs.sala10Code.GDcomienzopuzzleObjects4= [];
gdjs.sala10Code.GDcomienzopuzzleObjects5= [];
gdjs.sala10Code.GDpisoObjects1= [];
gdjs.sala10Code.GDpisoObjects2= [];
gdjs.sala10Code.GDpisoObjects3= [];
gdjs.sala10Code.GDpisoObjects4= [];
gdjs.sala10Code.GDpisoObjects5= [];
gdjs.sala10Code.GDtechoObjects1= [];
gdjs.sala10Code.GDtechoObjects2= [];
gdjs.sala10Code.GDtechoObjects3= [];
gdjs.sala10Code.GDtechoObjects4= [];
gdjs.sala10Code.GDtechoObjects5= [];
gdjs.sala10Code.GDpuertaizquierdaObjects1= [];
gdjs.sala10Code.GDpuertaizquierdaObjects2= [];
gdjs.sala10Code.GDpuertaizquierdaObjects3= [];
gdjs.sala10Code.GDpuertaizquierdaObjects4= [];
gdjs.sala10Code.GDpuertaizquierdaObjects5= [];
gdjs.sala10Code.GDpuertaderechaObjects1= [];
gdjs.sala10Code.GDpuertaderechaObjects2= [];
gdjs.sala10Code.GDpuertaderechaObjects3= [];
gdjs.sala10Code.GDpuertaderechaObjects4= [];
gdjs.sala10Code.GDpuertaderechaObjects5= [];
gdjs.sala10Code.GDperdisteObjects1= [];
gdjs.sala10Code.GDperdisteObjects2= [];
gdjs.sala10Code.GDperdisteObjects3= [];
gdjs.sala10Code.GDperdisteObjects4= [];
gdjs.sala10Code.GDperdisteObjects5= [];


gdjs.sala10Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects1, gdjs.sala10Code.GDpersonajeObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sala10Code.GDpersonajeObjects2.length;i<l;++i) {
    if ( gdjs.sala10Code.GDpersonajeObjects2[i].getBehavior("TopDownMovement").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.sala10Code.GDpersonajeObjects2[k] = gdjs.sala10Code.GDpersonajeObjects2[i];
        ++k;
    }
}
gdjs.sala10Code.GDpersonajeObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.sala10Code.GDpersonajeObjects2 */
{for(var i = 0, len = gdjs.sala10Code.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala10Code.GDpersonajeObjects2[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

/* Reuse gdjs.sala10Code.GDpersonajeObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sala10Code.GDpersonajeObjects1.length;i<l;++i) {
    if ( gdjs.sala10Code.GDpersonajeObjects1[i].getBehavior("TopDownMovement").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.sala10Code.GDpersonajeObjects1[k] = gdjs.sala10Code.GDpersonajeObjects1[i];
        ++k;
    }
}
gdjs.sala10Code.GDpersonajeObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.sala10Code.GDpersonajeObjects1 */
{for(var i = 0, len = gdjs.sala10Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala10Code.GDpersonajeObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


};gdjs.sala10Code.asyncCallback39222428 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("personaje"), gdjs.sala10Code.GDpersonajeObjects2);

{for(var i = 0, len = gdjs.sala10Code.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala10Code.GDpersonajeObjects2[i].getBehavior("TopDownMovement").ignoreDefaultControls(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
for (const obj of gdjs.sala10Code.GDpersonajeObjects1) asyncObjectsList.addObject("personaje", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.sala10Code.asyncCallback39222428(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.asyncCallback39224772 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("personaje"), gdjs.sala10Code.GDpersonajeObjects2);

{for(var i = 0, len = gdjs.sala10Code.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala10Code.GDpersonajeObjects2[i].getBehavior("TopDownMovement").ignoreDefaultControls(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setBoolean(false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
for (const obj of gdjs.sala10Code.GDpersonajeObjects1) asyncObjectsList.addObject("personaje", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.sala10Code.asyncCallback39224772(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects2});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects2Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala10Code.GDpuertaizquierdaObjects2});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects2Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala10Code.GDpuertaizquierdaObjects2});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects2});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaderechaObjects2Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala10Code.GDpuertaderechaObjects2});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaderechaObjects2Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala10Code.GDpuertaderechaObjects2});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects2});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpisoObjects2Objects = Hashtable.newFrom({"piso": gdjs.sala10Code.GDpisoObjects2});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpisoObjects2Objects = Hashtable.newFrom({"piso": gdjs.sala10Code.GDpisoObjects2});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects1Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects1});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDtechoObjects1Objects = Hashtable.newFrom({"techo": gdjs.sala10Code.GDtechoObjects1});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDtechoObjects1Objects = Hashtable.newFrom({"techo": gdjs.sala10Code.GDtechoObjects1});
gdjs.sala10Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala10Code.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("puertaizquierda"), gdjs.sala10Code.GDpuertaizquierdaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects2Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.sala10Code.GDpersonajeObjects2 */
/* Reuse gdjs.sala10Code.GDpuertaizquierdaObjects2 */
{for(var i = 0, len = gdjs.sala10Code.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala10Code.GDpersonajeObjects2[i].separateFromObjectsList(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala10Code.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("puertaderecha"), gdjs.sala10Code.GDpuertaderechaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects2Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaderechaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.sala10Code.GDpersonajeObjects2 */
/* Reuse gdjs.sala10Code.GDpuertaderechaObjects2 */
{for(var i = 0, len = gdjs.sala10Code.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala10Code.GDpersonajeObjects2[i].separateFromObjectsList(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaderechaObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala10Code.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("piso"), gdjs.sala10Code.GDpisoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects2Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpisoObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.sala10Code.GDpersonajeObjects2 */
/* Reuse gdjs.sala10Code.GDpisoObjects2 */
{for(var i = 0, len = gdjs.sala10Code.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala10Code.GDpersonajeObjects2[i].separateFromObjectsList(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpisoObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala10Code.GDpersonajeObjects1);
gdjs.copyArray(runtimeScene.getObjects("techo"), gdjs.sala10Code.GDtechoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects1Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDtechoObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.sala10Code.GDpersonajeObjects1 */
/* Reuse gdjs.sala10Code.GDtechoObjects1 */
{for(var i = 0, len = gdjs.sala10Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala10Code.GDpersonajeObjects1[i].separateFromObjectsList(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDtechoObjects1Objects, false);
}
}}

}


};gdjs.sala10Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.doesSceneExist(runtimeScene, "sala10");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("derecha"), gdjs.sala10Code.GDderechaObjects2);
gdjs.copyArray(runtimeScene.getObjects("derecha2"), gdjs.sala10Code.GDderecha2Objects2);
gdjs.copyArray(runtimeScene.getObjects("izquierda"), gdjs.sala10Code.GDizquierdaObjects2);
gdjs.copyArray(runtimeScene.getObjects("puzzle"), gdjs.sala10Code.GDpuzzleObjects2);
{for(var i = 0, len = gdjs.sala10Code.GDpuzzleObjects2.length ;i < len;++i) {
    gdjs.sala10Code.GDpuzzleObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.sala10Code.GDderechaObjects2.length ;i < len;++i) {
    gdjs.sala10Code.GDderechaObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.sala10Code.GDderecha2Objects2.length ;i < len;++i) {
    gdjs.sala10Code.GDderecha2Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.sala10Code.GDizquierdaObjects2.length ;i < len;++i) {
    gdjs.sala10Code.GDizquierdaObjects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects1);
gdjs.copyArray(runtimeScene.getObjects("derecha"), gdjs.sala10Code.GDderechaObjects1);
gdjs.copyArray(runtimeScene.getObjects("derecha2"), gdjs.sala10Code.GDderecha2Objects1);
gdjs.copyArray(runtimeScene.getObjects("izquierda"), gdjs.sala10Code.GDizquierdaObjects1);
gdjs.copyArray(runtimeScene.getObjects("puzzle"), gdjs.sala10Code.GDpuzzleObjects1);
{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects1.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.sala10Code.GDderechaObjects1.length ;i < len;++i) {
    gdjs.sala10Code.GDderechaObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDpuzzleObjects1.length ;i < len;++i) {
    gdjs.sala10Code.GDpuzzleObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDizquierdaObjects1.length ;i < len;++i) {
    gdjs.sala10Code.GDizquierdaObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDderecha2Objects1.length ;i < len;++i) {
    gdjs.sala10Code.GDderecha2Objects1[i].getBehavior("Animation").pauseAnimation();
}
}{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(gdjs.random(2));
}}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects3});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala10Code.GDpuertaizquierdaObjects3});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects4Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects4});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects4Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala10Code.GDpuertaizquierdaObjects4});
gdjs.sala10Code.asyncCallback38910060 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala1D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback38910060(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects4Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects4});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects4Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala10Code.GDpuertaizquierdaObjects4});
gdjs.sala10Code.asyncCallback38914228 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala2D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback38914228(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects4Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects4});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects4Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala10Code.GDpuertaizquierdaObjects4});
gdjs.sala10Code.asyncCallback38918372 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala3D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback38918372(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects4Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects4});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects4Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala10Code.GDpuertaizquierdaObjects4});
gdjs.sala10Code.asyncCallback38922532 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala4D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback38922532(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects4Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects4});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects4Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala10Code.GDpuertaizquierdaObjects4});
gdjs.sala10Code.asyncCallback38926676 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala5D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback38926676(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects4Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects4});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects4Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala10Code.GDpuertaizquierdaObjects4});
gdjs.sala10Code.asyncCallback38930852 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala6D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback38930852(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects3});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala10Code.GDpuertaizquierdaObjects3});
gdjs.sala10Code.asyncCallback38934996 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala10", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback38934996(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects3, gdjs.sala10Code.GDpersonajeObjects4);

gdjs.copyArray(gdjs.sala10Code.GDpuertaizquierdaObjects3, gdjs.sala10Code.GDpuertaizquierdaObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects4Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects4Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects4);
gdjs.copyArray(gdjs.sala10Code.GDizquierdaObjects3, gdjs.sala10Code.GDizquierdaObjects4);

{for(var i = 0, len = gdjs.sala10Code.GDizquierdaObjects4.length ;i < len;++i) {
    gdjs.sala10Code.GDizquierdaObjects4[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects4.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects4[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects3, gdjs.sala10Code.GDpersonajeObjects4);

gdjs.copyArray(gdjs.sala10Code.GDpuertaizquierdaObjects3, gdjs.sala10Code.GDpuertaizquierdaObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects4Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects4Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects4);
gdjs.copyArray(gdjs.sala10Code.GDizquierdaObjects3, gdjs.sala10Code.GDizquierdaObjects4);

{for(var i = 0, len = gdjs.sala10Code.GDizquierdaObjects4.length ;i < len;++i) {
    gdjs.sala10Code.GDizquierdaObjects4[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects4.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects4[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects3, gdjs.sala10Code.GDpersonajeObjects4);

gdjs.copyArray(gdjs.sala10Code.GDpuertaizquierdaObjects3, gdjs.sala10Code.GDpuertaizquierdaObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects4Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects4Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects4);
gdjs.copyArray(gdjs.sala10Code.GDizquierdaObjects3, gdjs.sala10Code.GDizquierdaObjects4);

{for(var i = 0, len = gdjs.sala10Code.GDizquierdaObjects4.length ;i < len;++i) {
    gdjs.sala10Code.GDizquierdaObjects4[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects4.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects4[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects3, gdjs.sala10Code.GDpersonajeObjects4);

gdjs.copyArray(gdjs.sala10Code.GDpuertaizquierdaObjects3, gdjs.sala10Code.GDpuertaizquierdaObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects4Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects4Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects4);
gdjs.copyArray(gdjs.sala10Code.GDizquierdaObjects3, gdjs.sala10Code.GDizquierdaObjects4);

{for(var i = 0, len = gdjs.sala10Code.GDizquierdaObjects4.length ;i < len;++i) {
    gdjs.sala10Code.GDizquierdaObjects4[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects4.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects4[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects3, gdjs.sala10Code.GDpersonajeObjects4);

gdjs.copyArray(gdjs.sala10Code.GDpuertaizquierdaObjects3, gdjs.sala10Code.GDpuertaizquierdaObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects4Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects4Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects4);
gdjs.copyArray(gdjs.sala10Code.GDizquierdaObjects3, gdjs.sala10Code.GDizquierdaObjects4);

{for(var i = 0, len = gdjs.sala10Code.GDizquierdaObjects4.length ;i < len;++i) {
    gdjs.sala10Code.GDizquierdaObjects4[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects4.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects4[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects3, gdjs.sala10Code.GDpersonajeObjects4);

gdjs.copyArray(gdjs.sala10Code.GDpuertaizquierdaObjects3, gdjs.sala10Code.GDpuertaizquierdaObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects4Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects4Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects4);
gdjs.copyArray(gdjs.sala10Code.GDizquierdaObjects3, gdjs.sala10Code.GDizquierdaObjects4);

{for(var i = 0, len = gdjs.sala10Code.GDizquierdaObjects4.length ;i < len;++i) {
    gdjs.sala10Code.GDizquierdaObjects4[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects4.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects4[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList10(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.sala10Code.GDpersonajeObjects3 */
/* Reuse gdjs.sala10Code.GDpuertaizquierdaObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects3);
/* Reuse gdjs.sala10Code.GDizquierdaObjects3 */
{for(var i = 0, len = gdjs.sala10Code.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects3});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuzzleCObjects3Objects = Hashtable.newFrom({"puzzleC": gdjs.sala10Code.GDpuzzleCObjects3});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects4Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects4});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuzzleCObjects4Objects = Hashtable.newFrom({"puzzleC": gdjs.sala10Code.GDpuzzleCObjects4});
gdjs.sala10Code.asyncCallback38940132 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala1D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList13 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback38940132(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects4Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects4});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuzzleCObjects4Objects = Hashtable.newFrom({"puzzleC": gdjs.sala10Code.GDpuzzleCObjects4});
gdjs.sala10Code.asyncCallback38944052 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala2D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList14 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback38944052(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects4Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects4});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuzzleCObjects4Objects = Hashtable.newFrom({"puzzleC": gdjs.sala10Code.GDpuzzleCObjects4});
gdjs.sala10Code.asyncCallback38947884 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala3D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList15 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback38947884(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects4Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects4});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuzzleCObjects4Objects = Hashtable.newFrom({"puzzleC": gdjs.sala10Code.GDpuzzleCObjects4});
gdjs.sala10Code.asyncCallback38951436 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala4D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList16 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback38951436(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects4Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects4});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuzzleCObjects4Objects = Hashtable.newFrom({"puzzleC": gdjs.sala10Code.GDpuzzleCObjects4});
gdjs.sala10Code.asyncCallback38955332 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala5D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList17 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback38955332(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects4Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects4});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuzzleCObjects4Objects = Hashtable.newFrom({"puzzleC": gdjs.sala10Code.GDpuzzleCObjects4});
gdjs.sala10Code.asyncCallback38959196 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala6D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList18 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback38959196(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects3});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuzzleCObjects3Objects = Hashtable.newFrom({"puzzleC": gdjs.sala10Code.GDpuzzleCObjects3});
gdjs.sala10Code.asyncCallback38963028 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala10", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList19 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback38963028(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.eventsList20 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects3, gdjs.sala10Code.GDpersonajeObjects4);

gdjs.copyArray(gdjs.sala10Code.GDpuzzleCObjects3, gdjs.sala10Code.GDpuzzleCObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects4Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuzzleCObjects4Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects4);
gdjs.copyArray(gdjs.sala10Code.GDpuzzleObjects3, gdjs.sala10Code.GDpuzzleObjects4);

{for(var i = 0, len = gdjs.sala10Code.GDpuzzleObjects4.length ;i < len;++i) {
    gdjs.sala10Code.GDpuzzleObjects4[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects4.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects4[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList13(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects3, gdjs.sala10Code.GDpersonajeObjects4);

gdjs.copyArray(gdjs.sala10Code.GDpuzzleCObjects3, gdjs.sala10Code.GDpuzzleCObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects4Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuzzleCObjects4Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects4);
gdjs.copyArray(gdjs.sala10Code.GDpuzzleObjects3, gdjs.sala10Code.GDpuzzleObjects4);

{for(var i = 0, len = gdjs.sala10Code.GDpuzzleObjects4.length ;i < len;++i) {
    gdjs.sala10Code.GDpuzzleObjects4[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects4.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects4[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList14(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects3, gdjs.sala10Code.GDpersonajeObjects4);

gdjs.copyArray(gdjs.sala10Code.GDpuzzleCObjects3, gdjs.sala10Code.GDpuzzleCObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects4Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuzzleCObjects4Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects4);
gdjs.copyArray(gdjs.sala10Code.GDpuzzleObjects3, gdjs.sala10Code.GDpuzzleObjects4);

{for(var i = 0, len = gdjs.sala10Code.GDpuzzleObjects4.length ;i < len;++i) {
    gdjs.sala10Code.GDpuzzleObjects4[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects4.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects4[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList15(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects3, gdjs.sala10Code.GDpersonajeObjects4);

gdjs.copyArray(gdjs.sala10Code.GDpuzzleCObjects3, gdjs.sala10Code.GDpuzzleCObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects4Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuzzleCObjects4Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects4);
gdjs.copyArray(gdjs.sala10Code.GDpuzzleObjects3, gdjs.sala10Code.GDpuzzleObjects4);

{for(var i = 0, len = gdjs.sala10Code.GDpuzzleObjects4.length ;i < len;++i) {
    gdjs.sala10Code.GDpuzzleObjects4[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects4.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects4[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList16(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects3, gdjs.sala10Code.GDpersonajeObjects4);

gdjs.copyArray(gdjs.sala10Code.GDpuzzleCObjects3, gdjs.sala10Code.GDpuzzleCObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects4Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuzzleCObjects4Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects4);
gdjs.copyArray(gdjs.sala10Code.GDpuzzleObjects3, gdjs.sala10Code.GDpuzzleObjects4);

{for(var i = 0, len = gdjs.sala10Code.GDpuzzleObjects4.length ;i < len;++i) {
    gdjs.sala10Code.GDpuzzleObjects4[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects4.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects4[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList17(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects3, gdjs.sala10Code.GDpersonajeObjects4);

gdjs.copyArray(gdjs.sala10Code.GDpuzzleCObjects3, gdjs.sala10Code.GDpuzzleCObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects4Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuzzleCObjects4Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects4);
gdjs.copyArray(gdjs.sala10Code.GDpuzzleObjects3, gdjs.sala10Code.GDpuzzleObjects4);

{for(var i = 0, len = gdjs.sala10Code.GDpuzzleObjects4.length ;i < len;++i) {
    gdjs.sala10Code.GDpuzzleObjects4[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects4.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects4[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList18(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.sala10Code.GDpersonajeObjects3 */
/* Reuse gdjs.sala10Code.GDpuzzleCObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuzzleCObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects3);
/* Reuse gdjs.sala10Code.GDpuzzleObjects3 */
{for(var i = 0, len = gdjs.sala10Code.GDpuzzleObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDpuzzleObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList19(runtimeScene);} //End of subevents
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects3});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala10Code.GDpuertaderechaObjects3});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects4Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects4});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaderechaObjects4Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala10Code.GDpuertaderechaObjects4});
gdjs.sala10Code.asyncCallback38968380 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala1D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList21 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback38968380(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects4Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects4});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaderechaObjects4Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala10Code.GDpuertaderechaObjects4});
gdjs.sala10Code.asyncCallback38972548 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala2D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList22 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback38972548(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects4Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects4});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaderechaObjects4Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala10Code.GDpuertaderechaObjects4});
gdjs.sala10Code.asyncCallback38976692 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala3D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList23 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback38976692(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects4Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects4});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaderechaObjects4Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala10Code.GDpuertaderechaObjects4});
gdjs.sala10Code.asyncCallback38980852 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala4D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList24 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback38980852(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects4Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects4});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaderechaObjects4Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala10Code.GDpuertaderechaObjects4});
gdjs.sala10Code.asyncCallback38984996 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala5D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList25 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback38984996(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects4Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects4});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaderechaObjects4Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala10Code.GDpuertaderechaObjects4});
gdjs.sala10Code.asyncCallback38989172 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala6D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList26 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback38989172(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects3});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala10Code.GDpuertaderechaObjects3});
gdjs.sala10Code.asyncCallback38993316 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala10", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList27 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback38993316(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.eventsList28 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects3, gdjs.sala10Code.GDpersonajeObjects4);

gdjs.copyArray(gdjs.sala10Code.GDpuertaderechaObjects3, gdjs.sala10Code.GDpuertaderechaObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects4Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaderechaObjects4Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects4);
gdjs.copyArray(gdjs.sala10Code.GDderechaObjects3, gdjs.sala10Code.GDderechaObjects4);

{for(var i = 0, len = gdjs.sala10Code.GDderechaObjects4.length ;i < len;++i) {
    gdjs.sala10Code.GDderechaObjects4[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects4.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects4[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList21(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects3, gdjs.sala10Code.GDpersonajeObjects4);

gdjs.copyArray(gdjs.sala10Code.GDpuertaderechaObjects3, gdjs.sala10Code.GDpuertaderechaObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects4Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaderechaObjects4Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects4);
gdjs.copyArray(gdjs.sala10Code.GDderechaObjects3, gdjs.sala10Code.GDderechaObjects4);

{for(var i = 0, len = gdjs.sala10Code.GDderechaObjects4.length ;i < len;++i) {
    gdjs.sala10Code.GDderechaObjects4[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects4.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects4[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList22(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects3, gdjs.sala10Code.GDpersonajeObjects4);

gdjs.copyArray(gdjs.sala10Code.GDpuertaderechaObjects3, gdjs.sala10Code.GDpuertaderechaObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects4Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaderechaObjects4Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects4);
gdjs.copyArray(gdjs.sala10Code.GDderechaObjects3, gdjs.sala10Code.GDderechaObjects4);

{for(var i = 0, len = gdjs.sala10Code.GDderechaObjects4.length ;i < len;++i) {
    gdjs.sala10Code.GDderechaObjects4[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects4.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects4[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList23(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects3, gdjs.sala10Code.GDpersonajeObjects4);

gdjs.copyArray(gdjs.sala10Code.GDpuertaderechaObjects3, gdjs.sala10Code.GDpuertaderechaObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects4Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaderechaObjects4Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects4);
gdjs.copyArray(gdjs.sala10Code.GDderechaObjects3, gdjs.sala10Code.GDderechaObjects4);

{for(var i = 0, len = gdjs.sala10Code.GDderechaObjects4.length ;i < len;++i) {
    gdjs.sala10Code.GDderechaObjects4[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects4.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects4[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList24(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects3, gdjs.sala10Code.GDpersonajeObjects4);

gdjs.copyArray(gdjs.sala10Code.GDpuertaderechaObjects3, gdjs.sala10Code.GDpuertaderechaObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects4Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaderechaObjects4Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects4);
gdjs.copyArray(gdjs.sala10Code.GDderechaObjects3, gdjs.sala10Code.GDderechaObjects4);

{for(var i = 0, len = gdjs.sala10Code.GDderechaObjects4.length ;i < len;++i) {
    gdjs.sala10Code.GDderechaObjects4[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects4.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects4[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList25(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects3, gdjs.sala10Code.GDpersonajeObjects4);

gdjs.copyArray(gdjs.sala10Code.GDpuertaderechaObjects3, gdjs.sala10Code.GDpuertaderechaObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects4Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaderechaObjects4Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects4);
gdjs.copyArray(gdjs.sala10Code.GDderechaObjects3, gdjs.sala10Code.GDderechaObjects4);

{for(var i = 0, len = gdjs.sala10Code.GDderechaObjects4.length ;i < len;++i) {
    gdjs.sala10Code.GDderechaObjects4[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects4.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects4[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList26(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.sala10Code.GDpersonajeObjects3 */
/* Reuse gdjs.sala10Code.GDpuertaderechaObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects3);
/* Reuse gdjs.sala10Code.GDderechaObjects3 */
{for(var i = 0, len = gdjs.sala10Code.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList27(runtimeScene);} //End of subevents
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects3});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDcasillero2Objects3Objects = Hashtable.newFrom({"casillero2": gdjs.sala10Code.GDcasillero2Objects3});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects3});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDcasillero2Objects3Objects = Hashtable.newFrom({"casillero2": gdjs.sala10Code.GDcasillero2Objects3});
gdjs.sala10Code.asyncCallback39002676 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "final", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList29 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback39002676(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.eventsList30 = function(runtimeScene) {

{

/* Reuse gdjs.sala10Code.GDcasillero2Objects3 */
/* Reuse gdjs.sala10Code.GDpersonajeObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDcasillero2Objects3Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects3);
/* Reuse gdjs.sala10Code.GDderecha2Objects3 */
{for(var i = 0, len = gdjs.sala10Code.GDderecha2Objects3.length ;i < len;++i) {
    gdjs.sala10Code.GDderecha2Objects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList29(runtimeScene);} //End of subevents
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects2});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDcasillero2Objects2Objects = Hashtable.newFrom({"casillero2": gdjs.sala10Code.GDcasillero2Objects2});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects3});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDcasillero2Objects3Objects = Hashtable.newFrom({"casillero2": gdjs.sala10Code.GDcasillero2Objects3});
gdjs.sala10Code.asyncCallback39012604 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala1D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList31 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback39012604(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects3});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDcasillero2Objects3Objects = Hashtable.newFrom({"casillero2": gdjs.sala10Code.GDcasillero2Objects3});
gdjs.sala10Code.asyncCallback39016044 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala2D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList32 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback39016044(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects3});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDcasillero2Objects3Objects = Hashtable.newFrom({"casillero2": gdjs.sala10Code.GDcasillero2Objects3});
gdjs.sala10Code.asyncCallback39019636 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala3D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList33 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback39019636(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects3});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDcasillero2Objects3Objects = Hashtable.newFrom({"casillero2": gdjs.sala10Code.GDcasillero2Objects3});
gdjs.sala10Code.asyncCallback39022948 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala4D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList34 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback39022948(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects3});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDcasillero2Objects3Objects = Hashtable.newFrom({"casillero2": gdjs.sala10Code.GDcasillero2Objects3});
gdjs.sala10Code.asyncCallback39026604 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala5D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList35 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback39026604(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects3});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDcasillero2Objects3Objects = Hashtable.newFrom({"casillero2": gdjs.sala10Code.GDcasillero2Objects3});
gdjs.sala10Code.asyncCallback39030228 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala6D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList36 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback39030228(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects2});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDcasillero2Objects2Objects = Hashtable.newFrom({"casillero2": gdjs.sala10Code.GDcasillero2Objects2});
gdjs.sala10Code.asyncCallback39033820 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala10", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList37 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback39033820(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.eventsList38 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.sala10Code.GDcasillero2Objects2, gdjs.sala10Code.GDcasillero2Objects3);

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects2, gdjs.sala10Code.GDpersonajeObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDcasillero2Objects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala10Code.GDderecha2Objects2, gdjs.sala10Code.GDderecha2Objects3);

{for(var i = 0, len = gdjs.sala10Code.GDderecha2Objects3.length ;i < len;++i) {
    gdjs.sala10Code.GDderecha2Objects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList31(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDcasillero2Objects2, gdjs.sala10Code.GDcasillero2Objects3);

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects2, gdjs.sala10Code.GDpersonajeObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDcasillero2Objects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala10Code.GDderecha2Objects2, gdjs.sala10Code.GDderecha2Objects3);

{for(var i = 0, len = gdjs.sala10Code.GDderecha2Objects3.length ;i < len;++i) {
    gdjs.sala10Code.GDderecha2Objects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList32(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDcasillero2Objects2, gdjs.sala10Code.GDcasillero2Objects3);

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects2, gdjs.sala10Code.GDpersonajeObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDcasillero2Objects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala10Code.GDderecha2Objects2, gdjs.sala10Code.GDderecha2Objects3);

{for(var i = 0, len = gdjs.sala10Code.GDderecha2Objects3.length ;i < len;++i) {
    gdjs.sala10Code.GDderecha2Objects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList33(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDcasillero2Objects2, gdjs.sala10Code.GDcasillero2Objects3);

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects2, gdjs.sala10Code.GDpersonajeObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDcasillero2Objects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala10Code.GDderecha2Objects2, gdjs.sala10Code.GDderecha2Objects3);

{for(var i = 0, len = gdjs.sala10Code.GDderecha2Objects3.length ;i < len;++i) {
    gdjs.sala10Code.GDderecha2Objects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList34(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDcasillero2Objects2, gdjs.sala10Code.GDcasillero2Objects3);

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects2, gdjs.sala10Code.GDpersonajeObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDcasillero2Objects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala10Code.GDderecha2Objects2, gdjs.sala10Code.GDderecha2Objects3);

{for(var i = 0, len = gdjs.sala10Code.GDderecha2Objects3.length ;i < len;++i) {
    gdjs.sala10Code.GDderecha2Objects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList35(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDcasillero2Objects2, gdjs.sala10Code.GDcasillero2Objects3);

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects2, gdjs.sala10Code.GDpersonajeObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDcasillero2Objects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala10Code.GDderecha2Objects2, gdjs.sala10Code.GDderecha2Objects3);

{for(var i = 0, len = gdjs.sala10Code.GDderecha2Objects3.length ;i < len;++i) {
    gdjs.sala10Code.GDderecha2Objects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList36(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.sala10Code.GDcasillero2Objects2 */
/* Reuse gdjs.sala10Code.GDpersonajeObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects2Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDcasillero2Objects2Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects2);
/* Reuse gdjs.sala10Code.GDderecha2Objects2 */
{for(var i = 0, len = gdjs.sala10Code.GDderecha2Objects2.length ;i < len;++i) {
    gdjs.sala10Code.GDderecha2Objects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects2.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList37(runtimeScene);} //End of subevents
}

}


};gdjs.sala10Code.eventsList39 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala10Code.GDpersonajeObjects3);
gdjs.copyArray(runtimeScene.getObjects("puertaizquierda"), gdjs.sala10Code.GDpuertaizquierdaObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("izquierda"), gdjs.sala10Code.GDizquierdaObjects3);
{for(var i = 0, len = gdjs.sala10Code.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDizquierdaObjects3[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.random(10));
}
{ //Subevents
gdjs.sala10Code.eventsList12(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala10Code.GDpersonajeObjects3);
gdjs.copyArray(runtimeScene.getObjects("puzzleC"), gdjs.sala10Code.GDpuzzleCObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuzzleCObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("puzzle"), gdjs.sala10Code.GDpuzzleObjects3);
{for(var i = 0, len = gdjs.sala10Code.GDpuzzleObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDpuzzleObjects3[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.random(7));
}
{ //Subevents
gdjs.sala10Code.eventsList20(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala10Code.GDpersonajeObjects3);
gdjs.copyArray(runtimeScene.getObjects("puertaderecha"), gdjs.sala10Code.GDpuertaderechaObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("derecha"), gdjs.sala10Code.GDderechaObjects3);
{for(var i = 0, len = gdjs.sala10Code.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDderechaObjects3[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.random(7));
}
{ //Subevents
gdjs.sala10Code.eventsList28(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("casillero2"), gdjs.sala10Code.GDcasillero2Objects3);
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala10Code.GDpersonajeObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDcasillero2Objects3Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(6), true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(8), true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(9), true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), true, false);
}
}
}
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("derecha2"), gdjs.sala10Code.GDderecha2Objects3);
{for(var i = 0, len = gdjs.sala10Code.GDderecha2Objects3.length ;i < len;++i) {
    gdjs.sala10Code.GDderecha2Objects3[i].hide(false);
}
}
{ //Subevents
gdjs.sala10Code.eventsList30(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("casillero2"), gdjs.sala10Code.GDcasillero2Objects2);
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala10Code.GDpersonajeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects2Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDcasillero2Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false, false);
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
}
}
{
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(6), false, false);
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
}
}
{
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), false, false);
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
}
}
{
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(8), false, false);
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
}
}
{
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(9), false, false);
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
}
}
{
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), false, false);
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
}
}
{
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("derecha2"), gdjs.sala10Code.GDderecha2Objects2);
{for(var i = 0, len = gdjs.sala10Code.GDderecha2Objects2.length ;i < len;++i) {
    gdjs.sala10Code.GDderecha2Objects2[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.random(7));
}
{ //Subevents
gdjs.sala10Code.eventsList38(runtimeScene);} //End of subevents
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects2});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaderechaObjects2Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala10Code.GDpuertaderechaObjects2});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects3});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala10Code.GDpuertaderechaObjects3});
gdjs.sala10Code.asyncCallback39039684 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala1D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList40 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback39039684(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects3});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala10Code.GDpuertaderechaObjects3});
gdjs.sala10Code.asyncCallback39043852 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala2D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList41 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback39043852(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects3});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala10Code.GDpuertaderechaObjects3});
gdjs.sala10Code.asyncCallback39047996 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala3D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList42 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback39047996(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects3});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala10Code.GDpuertaderechaObjects3});
gdjs.sala10Code.asyncCallback39052156 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala4D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList43 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback39052156(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects3});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala10Code.GDpuertaderechaObjects3});
gdjs.sala10Code.asyncCallback39056300 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala5D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList44 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback39056300(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects3});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala10Code.GDpuertaderechaObjects3});
gdjs.sala10Code.asyncCallback39060476 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala6D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList45 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback39060476(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects2});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaderechaObjects2Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala10Code.GDpuertaderechaObjects2});
gdjs.sala10Code.asyncCallback39064620 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala10", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList46 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback39064620(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.eventsList47 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects2, gdjs.sala10Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala10Code.GDpuertaderechaObjects2, gdjs.sala10Code.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala10Code.GDderechaObjects2, gdjs.sala10Code.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala10Code.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList40(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects2, gdjs.sala10Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala10Code.GDpuertaderechaObjects2, gdjs.sala10Code.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala10Code.GDderechaObjects2, gdjs.sala10Code.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala10Code.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList41(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects2, gdjs.sala10Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala10Code.GDpuertaderechaObjects2, gdjs.sala10Code.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala10Code.GDderechaObjects2, gdjs.sala10Code.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala10Code.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList42(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects2, gdjs.sala10Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala10Code.GDpuertaderechaObjects2, gdjs.sala10Code.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala10Code.GDderechaObjects2, gdjs.sala10Code.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala10Code.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList43(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects2, gdjs.sala10Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala10Code.GDpuertaderechaObjects2, gdjs.sala10Code.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala10Code.GDderechaObjects2, gdjs.sala10Code.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala10Code.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList44(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects2, gdjs.sala10Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala10Code.GDpuertaderechaObjects2, gdjs.sala10Code.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala10Code.GDderechaObjects2, gdjs.sala10Code.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala10Code.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList45(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.sala10Code.GDpersonajeObjects2 */
/* Reuse gdjs.sala10Code.GDpuertaderechaObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects2Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaderechaObjects2Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects2);
/* Reuse gdjs.sala10Code.GDderechaObjects2 */
{for(var i = 0, len = gdjs.sala10Code.GDderechaObjects2.length ;i < len;++i) {
    gdjs.sala10Code.GDderechaObjects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects2.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList46(runtimeScene);} //End of subevents
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects2});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuzzleCObjects2Objects = Hashtable.newFrom({"puzzleC": gdjs.sala10Code.GDpuzzleCObjects2});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects3});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuzzleCObjects3Objects = Hashtable.newFrom({"puzzleC": gdjs.sala10Code.GDpuzzleCObjects3});
gdjs.sala10Code.asyncCallback39069756 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala1D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList48 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback39069756(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects3});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuzzleCObjects3Objects = Hashtable.newFrom({"puzzleC": gdjs.sala10Code.GDpuzzleCObjects3});
gdjs.sala10Code.asyncCallback39073676 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala2D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList49 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback39073676(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects3});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuzzleCObjects3Objects = Hashtable.newFrom({"puzzleC": gdjs.sala10Code.GDpuzzleCObjects3});
gdjs.sala10Code.asyncCallback39077508 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala3D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList50 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback39077508(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects3});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuzzleCObjects3Objects = Hashtable.newFrom({"puzzleC": gdjs.sala10Code.GDpuzzleCObjects3});
gdjs.sala10Code.asyncCallback39081060 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala4D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList51 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback39081060(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects3});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuzzleCObjects3Objects = Hashtable.newFrom({"puzzleC": gdjs.sala10Code.GDpuzzleCObjects3});
gdjs.sala10Code.asyncCallback39084956 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala5D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList52 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback39084956(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects3});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuzzleCObjects3Objects = Hashtable.newFrom({"puzzleC": gdjs.sala10Code.GDpuzzleCObjects3});
gdjs.sala10Code.asyncCallback39088820 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala6D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList53 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback39088820(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects2});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuzzleCObjects2Objects = Hashtable.newFrom({"puzzleC": gdjs.sala10Code.GDpuzzleCObjects2});
gdjs.sala10Code.asyncCallback39092652 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala10", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList54 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback39092652(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.eventsList55 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects2, gdjs.sala10Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala10Code.GDpuzzleCObjects2, gdjs.sala10Code.GDpuzzleCObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuzzleCObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala10Code.GDpuzzleObjects2, gdjs.sala10Code.GDpuzzleObjects3);

{for(var i = 0, len = gdjs.sala10Code.GDpuzzleObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDpuzzleObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList48(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects2, gdjs.sala10Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala10Code.GDpuzzleCObjects2, gdjs.sala10Code.GDpuzzleCObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuzzleCObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala10Code.GDpuzzleObjects2, gdjs.sala10Code.GDpuzzleObjects3);

{for(var i = 0, len = gdjs.sala10Code.GDpuzzleObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDpuzzleObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList49(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects2, gdjs.sala10Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala10Code.GDpuzzleCObjects2, gdjs.sala10Code.GDpuzzleCObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuzzleCObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala10Code.GDpuzzleObjects2, gdjs.sala10Code.GDpuzzleObjects3);

{for(var i = 0, len = gdjs.sala10Code.GDpuzzleObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDpuzzleObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList50(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects2, gdjs.sala10Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala10Code.GDpuzzleCObjects2, gdjs.sala10Code.GDpuzzleCObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuzzleCObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala10Code.GDpuzzleObjects2, gdjs.sala10Code.GDpuzzleObjects3);

{for(var i = 0, len = gdjs.sala10Code.GDpuzzleObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDpuzzleObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList51(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects2, gdjs.sala10Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala10Code.GDpuzzleCObjects2, gdjs.sala10Code.GDpuzzleCObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuzzleCObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala10Code.GDpuzzleObjects2, gdjs.sala10Code.GDpuzzleObjects3);

{for(var i = 0, len = gdjs.sala10Code.GDpuzzleObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDpuzzleObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList52(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects2, gdjs.sala10Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala10Code.GDpuzzleCObjects2, gdjs.sala10Code.GDpuzzleCObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuzzleCObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala10Code.GDpuzzleObjects2, gdjs.sala10Code.GDpuzzleObjects3);

{for(var i = 0, len = gdjs.sala10Code.GDpuzzleObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDpuzzleObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList53(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.sala10Code.GDpersonajeObjects2 */
/* Reuse gdjs.sala10Code.GDpuzzleCObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects2Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuzzleCObjects2Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects2);
/* Reuse gdjs.sala10Code.GDpuzzleObjects2 */
{for(var i = 0, len = gdjs.sala10Code.GDpuzzleObjects2.length ;i < len;++i) {
    gdjs.sala10Code.GDpuzzleObjects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects2.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList54(runtimeScene);} //End of subevents
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects2});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDcasillero2Objects2Objects = Hashtable.newFrom({"casillero2": gdjs.sala10Code.GDcasillero2Objects2});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects3});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDcasillero2Objects3Objects = Hashtable.newFrom({"casillero2": gdjs.sala10Code.GDcasillero2Objects3});
gdjs.sala10Code.asyncCallback39097700 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala1D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList56 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback39097700(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects3});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDcasillero2Objects3Objects = Hashtable.newFrom({"casillero2": gdjs.sala10Code.GDcasillero2Objects3});
gdjs.sala10Code.asyncCallback39101620 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala2D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList57 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback39101620(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects3});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDcasillero2Objects3Objects = Hashtable.newFrom({"casillero2": gdjs.sala10Code.GDcasillero2Objects3});
gdjs.sala10Code.asyncCallback39105452 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala3D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList58 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback39105452(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects3});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDcasillero2Objects3Objects = Hashtable.newFrom({"casillero2": gdjs.sala10Code.GDcasillero2Objects3});
gdjs.sala10Code.asyncCallback39109004 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala4D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList59 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback39109004(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects3});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDcasillero2Objects3Objects = Hashtable.newFrom({"casillero2": gdjs.sala10Code.GDcasillero2Objects3});
gdjs.sala10Code.asyncCallback39112900 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala5D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList60 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback39112900(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects3});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDcasillero2Objects3Objects = Hashtable.newFrom({"casillero2": gdjs.sala10Code.GDcasillero2Objects3});
gdjs.sala10Code.asyncCallback39116764 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala6D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList61 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback39116764(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects2});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDcasillero2Objects2Objects = Hashtable.newFrom({"casillero2": gdjs.sala10Code.GDcasillero2Objects2});
gdjs.sala10Code.asyncCallback39120596 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala10", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList62 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback39120596(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.eventsList63 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.sala10Code.GDcasillero2Objects2, gdjs.sala10Code.GDcasillero2Objects3);

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects2, gdjs.sala10Code.GDpersonajeObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDcasillero2Objects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala10Code.GDderecha2Objects2, gdjs.sala10Code.GDderecha2Objects3);

{for(var i = 0, len = gdjs.sala10Code.GDderecha2Objects3.length ;i < len;++i) {
    gdjs.sala10Code.GDderecha2Objects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList56(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDcasillero2Objects2, gdjs.sala10Code.GDcasillero2Objects3);

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects2, gdjs.sala10Code.GDpersonajeObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDcasillero2Objects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala10Code.GDderecha2Objects2, gdjs.sala10Code.GDderecha2Objects3);

{for(var i = 0, len = gdjs.sala10Code.GDderecha2Objects3.length ;i < len;++i) {
    gdjs.sala10Code.GDderecha2Objects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList57(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDcasillero2Objects2, gdjs.sala10Code.GDcasillero2Objects3);

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects2, gdjs.sala10Code.GDpersonajeObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDcasillero2Objects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala10Code.GDderecha2Objects2, gdjs.sala10Code.GDderecha2Objects3);

{for(var i = 0, len = gdjs.sala10Code.GDderecha2Objects3.length ;i < len;++i) {
    gdjs.sala10Code.GDderecha2Objects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList58(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDcasillero2Objects2, gdjs.sala10Code.GDcasillero2Objects3);

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects2, gdjs.sala10Code.GDpersonajeObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDcasillero2Objects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala10Code.GDderecha2Objects2, gdjs.sala10Code.GDderecha2Objects3);

{for(var i = 0, len = gdjs.sala10Code.GDderecha2Objects3.length ;i < len;++i) {
    gdjs.sala10Code.GDderecha2Objects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList59(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDcasillero2Objects2, gdjs.sala10Code.GDcasillero2Objects3);

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects2, gdjs.sala10Code.GDpersonajeObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDcasillero2Objects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala10Code.GDderecha2Objects2, gdjs.sala10Code.GDderecha2Objects3);

{for(var i = 0, len = gdjs.sala10Code.GDderecha2Objects3.length ;i < len;++i) {
    gdjs.sala10Code.GDderecha2Objects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList60(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDcasillero2Objects2, gdjs.sala10Code.GDcasillero2Objects3);

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects2, gdjs.sala10Code.GDpersonajeObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects3Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDcasillero2Objects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala10Code.GDderecha2Objects2, gdjs.sala10Code.GDderecha2Objects3);

{for(var i = 0, len = gdjs.sala10Code.GDderecha2Objects3.length ;i < len;++i) {
    gdjs.sala10Code.GDderecha2Objects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList61(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.sala10Code.GDcasillero2Objects2 */
/* Reuse gdjs.sala10Code.GDpersonajeObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects2Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDcasillero2Objects2Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects2);
/* Reuse gdjs.sala10Code.GDderecha2Objects2 */
{for(var i = 0, len = gdjs.sala10Code.GDderecha2Objects2.length ;i < len;++i) {
    gdjs.sala10Code.GDderecha2Objects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects2.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList62(runtimeScene);} //End of subevents
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects2});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects2Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala10Code.GDpuertaizquierdaObjects2});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects2});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects2Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala10Code.GDpuertaizquierdaObjects2});
gdjs.sala10Code.asyncCallback39129300 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "final", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList64 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback39129300(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.eventsList65 = function(runtimeScene) {

{

/* Reuse gdjs.sala10Code.GDpersonajeObjects2 */
/* Reuse gdjs.sala10Code.GDpuertaizquierdaObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects2Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects2);
gdjs.copyArray(runtimeScene.getObjects("derecha"), gdjs.sala10Code.GDderechaObjects2);
{for(var i = 0, len = gdjs.sala10Code.GDderechaObjects2.length ;i < len;++i) {
    gdjs.sala10Code.GDderechaObjects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects2.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList64(runtimeScene);} //End of subevents
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects1Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects1});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects1Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala10Code.GDpuertaizquierdaObjects1});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects2});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects2Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala10Code.GDpuertaizquierdaObjects2});
gdjs.sala10Code.asyncCallback39139852 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala1D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList66 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback39139852(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects2});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects2Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala10Code.GDpuertaizquierdaObjects2});
gdjs.sala10Code.asyncCallback39143780 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala2D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList67 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback39143780(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects2});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects2Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala10Code.GDpuertaizquierdaObjects2});
gdjs.sala10Code.asyncCallback39147820 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala3D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList68 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback39147820(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects2});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects2Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala10Code.GDpuertaizquierdaObjects2});
gdjs.sala10Code.asyncCallback39151876 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala4D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList69 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback39151876(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects2});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects2Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala10Code.GDpuertaizquierdaObjects2});
gdjs.sala10Code.asyncCallback39155916 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala5D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList70 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback39155916(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects2});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects2Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala10Code.GDpuertaizquierdaObjects2});
gdjs.sala10Code.asyncCallback39159988 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala6D", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList71 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback39159988(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects1Objects = Hashtable.newFrom({"personaje": gdjs.sala10Code.GDpersonajeObjects1});
gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects1Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala10Code.GDpuertaizquierdaObjects1});
gdjs.sala10Code.asyncCallback39164028 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala10Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala10", false);
}gdjs.sala10Code.localVariables.length = 0;
}
gdjs.sala10Code.eventsList72 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala10Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala10Code.asyncCallback39164028(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala10Code.eventsList73 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects1, gdjs.sala10Code.GDpersonajeObjects2);

gdjs.copyArray(gdjs.sala10Code.GDpuertaizquierdaObjects1, gdjs.sala10Code.GDpuertaizquierdaObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects2Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects2Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects2);
gdjs.copyArray(gdjs.sala10Code.GDizquierdaObjects1, gdjs.sala10Code.GDizquierdaObjects2);

{for(var i = 0, len = gdjs.sala10Code.GDizquierdaObjects2.length ;i < len;++i) {
    gdjs.sala10Code.GDizquierdaObjects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects2.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList66(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects1, gdjs.sala10Code.GDpersonajeObjects2);

gdjs.copyArray(gdjs.sala10Code.GDpuertaizquierdaObjects1, gdjs.sala10Code.GDpuertaizquierdaObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects2Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects2Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects2);
gdjs.copyArray(gdjs.sala10Code.GDizquierdaObjects1, gdjs.sala10Code.GDizquierdaObjects2);

{for(var i = 0, len = gdjs.sala10Code.GDizquierdaObjects2.length ;i < len;++i) {
    gdjs.sala10Code.GDizquierdaObjects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects2.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList67(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects1, gdjs.sala10Code.GDpersonajeObjects2);

gdjs.copyArray(gdjs.sala10Code.GDpuertaizquierdaObjects1, gdjs.sala10Code.GDpuertaizquierdaObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects2Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects2Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects2);
gdjs.copyArray(gdjs.sala10Code.GDizquierdaObjects1, gdjs.sala10Code.GDizquierdaObjects2);

{for(var i = 0, len = gdjs.sala10Code.GDizquierdaObjects2.length ;i < len;++i) {
    gdjs.sala10Code.GDizquierdaObjects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects2.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList68(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects1, gdjs.sala10Code.GDpersonajeObjects2);

gdjs.copyArray(gdjs.sala10Code.GDpuertaizquierdaObjects1, gdjs.sala10Code.GDpuertaizquierdaObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects2Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects2Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects2);
gdjs.copyArray(gdjs.sala10Code.GDizquierdaObjects1, gdjs.sala10Code.GDizquierdaObjects2);

{for(var i = 0, len = gdjs.sala10Code.GDizquierdaObjects2.length ;i < len;++i) {
    gdjs.sala10Code.GDizquierdaObjects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects2.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList69(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects1, gdjs.sala10Code.GDpersonajeObjects2);

gdjs.copyArray(gdjs.sala10Code.GDpuertaizquierdaObjects1, gdjs.sala10Code.GDpuertaizquierdaObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects2Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects2Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects2);
gdjs.copyArray(gdjs.sala10Code.GDizquierdaObjects1, gdjs.sala10Code.GDizquierdaObjects2);

{for(var i = 0, len = gdjs.sala10Code.GDizquierdaObjects2.length ;i < len;++i) {
    gdjs.sala10Code.GDizquierdaObjects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects2.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList70(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala10Code.GDpersonajeObjects1, gdjs.sala10Code.GDpersonajeObjects2);

gdjs.copyArray(gdjs.sala10Code.GDpuertaizquierdaObjects1, gdjs.sala10Code.GDpuertaizquierdaObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects2Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects2Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects2);
gdjs.copyArray(gdjs.sala10Code.GDizquierdaObjects1, gdjs.sala10Code.GDizquierdaObjects2);

{for(var i = 0, len = gdjs.sala10Code.GDizquierdaObjects2.length ;i < len;++i) {
    gdjs.sala10Code.GDizquierdaObjects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects2.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList71(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.sala10Code.GDpersonajeObjects1 */
/* Reuse gdjs.sala10Code.GDpuertaizquierdaObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects1Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects1Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala10Code.GDcargaObjects1);
/* Reuse gdjs.sala10Code.GDizquierdaObjects1 */
{for(var i = 0, len = gdjs.sala10Code.GDizquierdaObjects1.length ;i < len;++i) {
    gdjs.sala10Code.GDizquierdaObjects1[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala10Code.GDcargaObjects1.length ;i < len;++i) {
    gdjs.sala10Code.GDcargaObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala10Code.eventsList72(runtimeScene);} //End of subevents
}

}


};gdjs.sala10Code.eventsList74 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala10Code.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("puertaderecha"), gdjs.sala10Code.GDpuertaderechaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects2Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaderechaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("derecha"), gdjs.sala10Code.GDderechaObjects2);
{for(var i = 0, len = gdjs.sala10Code.GDderechaObjects2.length ;i < len;++i) {
    gdjs.sala10Code.GDderechaObjects2[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.random(7));
}
{ //Subevents
gdjs.sala10Code.eventsList47(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala10Code.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("puzzleC"), gdjs.sala10Code.GDpuzzleCObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects2Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuzzleCObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("puzzle"), gdjs.sala10Code.GDpuzzleObjects2);
{for(var i = 0, len = gdjs.sala10Code.GDpuzzleObjects2.length ;i < len;++i) {
    gdjs.sala10Code.GDpuzzleObjects2[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.random(7));
}
{ //Subevents
gdjs.sala10Code.eventsList55(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("casillero2"), gdjs.sala10Code.GDcasillero2Objects2);
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala10Code.GDpersonajeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects2Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDcasillero2Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("derecha2"), gdjs.sala10Code.GDderecha2Objects2);
{for(var i = 0, len = gdjs.sala10Code.GDderecha2Objects2.length ;i < len;++i) {
    gdjs.sala10Code.GDderecha2Objects2[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.random(7));
}
{ //Subevents
gdjs.sala10Code.eventsList63(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala10Code.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("puertaizquierda"), gdjs.sala10Code.GDpuertaizquierdaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects2Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(6), true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(8), true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(9), true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), true, false);
}
}
}
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("izquierda"), gdjs.sala10Code.GDizquierdaObjects2);
{for(var i = 0, len = gdjs.sala10Code.GDizquierdaObjects2.length ;i < len;++i) {
    gdjs.sala10Code.GDizquierdaObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.sala10Code.eventsList65(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala10Code.GDpersonajeObjects1);
gdjs.copyArray(runtimeScene.getObjects("puertaizquierda"), gdjs.sala10Code.GDpuertaizquierdaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpersonajeObjects1Objects, gdjs.sala10Code.mapOfGDgdjs_9546sala10Code_9546GDpuertaizquierdaObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false, false);
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
}
}
{
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(6), false, false);
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
}
}
{
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), false, false);
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
}
}
{
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(8), false, false);
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
}
}
{
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(9), false, false);
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
}
}
{
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), false, false);
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
}
}
{
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("izquierda"), gdjs.sala10Code.GDizquierdaObjects1);
{for(var i = 0, len = gdjs.sala10Code.GDizquierdaObjects1.length ;i < len;++i) {
    gdjs.sala10Code.GDizquierdaObjects1[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.random(10));
}
{ //Subevents
gdjs.sala10Code.eventsList73(runtimeScene);} //End of subevents
}

}


};gdjs.sala10Code.eventsList75 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) == 1;
if (isConditionTrue_0) {

{ //Subevents
gdjs.sala10Code.eventsList39(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) == 2;
if (isConditionTrue_0) {

{ //Subevents
gdjs.sala10Code.eventsList74(runtimeScene);} //End of subevents
}

}


};gdjs.sala10Code.eventsList76 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala10Code.GDpersonajeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala10Code.GDpersonajeObjects1.length;i<l;++i) {
    if ( !(gdjs.sala10Code.GDpersonajeObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_1 = true;
        gdjs.sala10Code.GDpersonajeObjects1[k] = gdjs.sala10Code.GDpersonajeObjects1[i];
        ++k;
    }
}
gdjs.sala10Code.GDpersonajeObjects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.sala10Code.GDpersonajeObjects1 */
{for(var i = 0, len = gdjs.sala10Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala10Code.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("abrir");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala10Code.GDpersonajeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = !(gdjs.evtTools.input.anyKeyPressed(runtimeScene));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala10Code.GDpersonajeObjects1.length;i<l;++i) {
    if ( !(gdjs.sala10Code.GDpersonajeObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_1 = true;
        gdjs.sala10Code.GDpersonajeObjects1[k] = gdjs.sala10Code.GDpersonajeObjects1[i];
        ++k;
    }
}
gdjs.sala10Code.GDpersonajeObjects1.length = k;
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
/* Reuse gdjs.sala10Code.GDpersonajeObjects1 */
{for(var i = 0, len = gdjs.sala10Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala10Code.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("descanso");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala10Code.GDpersonajeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sala10Code.GDpersonajeObjects1.length;i<l;++i) {
    if ( gdjs.sala10Code.GDpersonajeObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.sala10Code.GDpersonajeObjects1[k] = gdjs.sala10Code.GDpersonajeObjects1[i];
        ++k;
    }
}
gdjs.sala10Code.GDpersonajeObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.sala10Code.GDpersonajeObjects1 */
{for(var i = 0, len = gdjs.sala10Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala10Code.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("caminar");
}
}
{ //Subevents
gdjs.sala10Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala10Code.GDpersonajeObjects1);
{for(var i = 0, len = gdjs.sala10Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala10Code.GDpersonajeObjects1[i].getBehavior("TopDownMovement").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.sala10Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala10Code.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("perder");
}
}
{ //Subevents
gdjs.sala10Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala10Code.GDpersonajeObjects1);
{for(var i = 0, len = gdjs.sala10Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala10Code.GDpersonajeObjects1[i].getBehavior("TopDownMovement").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.sala10Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala10Code.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("ganar");
}
}
{ //Subevents
gdjs.sala10Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.sala10Code.eventsList3(runtimeScene);
}


{


gdjs.sala10Code.eventsList4(runtimeScene);
}


{


gdjs.sala10Code.eventsList75(runtimeScene);
}


};

gdjs.sala10Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.sala10Code.GDsala1Objects1.length = 0;
gdjs.sala10Code.GDsala1Objects2.length = 0;
gdjs.sala10Code.GDsala1Objects3.length = 0;
gdjs.sala10Code.GDsala1Objects4.length = 0;
gdjs.sala10Code.GDsala1Objects5.length = 0;
gdjs.sala10Code.GDderecha2Objects1.length = 0;
gdjs.sala10Code.GDderecha2Objects2.length = 0;
gdjs.sala10Code.GDderecha2Objects3.length = 0;
gdjs.sala10Code.GDderecha2Objects4.length = 0;
gdjs.sala10Code.GDderecha2Objects5.length = 0;
gdjs.sala10Code.GDcasillero1Objects1.length = 0;
gdjs.sala10Code.GDcasillero1Objects2.length = 0;
gdjs.sala10Code.GDcasillero1Objects3.length = 0;
gdjs.sala10Code.GDcasillero1Objects4.length = 0;
gdjs.sala10Code.GDcasillero1Objects5.length = 0;
gdjs.sala10Code.GDcasillero2Objects1.length = 0;
gdjs.sala10Code.GDcasillero2Objects2.length = 0;
gdjs.sala10Code.GDcasillero2Objects3.length = 0;
gdjs.sala10Code.GDcasillero2Objects4.length = 0;
gdjs.sala10Code.GDcasillero2Objects5.length = 0;
gdjs.sala10Code.GDpersonajeObjects1.length = 0;
gdjs.sala10Code.GDpersonajeObjects2.length = 0;
gdjs.sala10Code.GDpersonajeObjects3.length = 0;
gdjs.sala10Code.GDpersonajeObjects4.length = 0;
gdjs.sala10Code.GDpersonajeObjects5.length = 0;
gdjs.sala10Code.GDcargaObjects1.length = 0;
gdjs.sala10Code.GDcargaObjects2.length = 0;
gdjs.sala10Code.GDcargaObjects3.length = 0;
gdjs.sala10Code.GDcargaObjects4.length = 0;
gdjs.sala10Code.GDcargaObjects5.length = 0;
gdjs.sala10Code.GDizquierdaObjects1.length = 0;
gdjs.sala10Code.GDizquierdaObjects2.length = 0;
gdjs.sala10Code.GDizquierdaObjects3.length = 0;
gdjs.sala10Code.GDizquierdaObjects4.length = 0;
gdjs.sala10Code.GDizquierdaObjects5.length = 0;
gdjs.sala10Code.GDderechaObjects1.length = 0;
gdjs.sala10Code.GDderechaObjects2.length = 0;
gdjs.sala10Code.GDderechaObjects3.length = 0;
gdjs.sala10Code.GDderechaObjects4.length = 0;
gdjs.sala10Code.GDderechaObjects5.length = 0;
gdjs.sala10Code.GDpuzzleObjects1.length = 0;
gdjs.sala10Code.GDpuzzleObjects2.length = 0;
gdjs.sala10Code.GDpuzzleObjects3.length = 0;
gdjs.sala10Code.GDpuzzleObjects4.length = 0;
gdjs.sala10Code.GDpuzzleObjects5.length = 0;
gdjs.sala10Code.GDpuzzleCObjects1.length = 0;
gdjs.sala10Code.GDpuzzleCObjects2.length = 0;
gdjs.sala10Code.GDpuzzleCObjects3.length = 0;
gdjs.sala10Code.GDpuzzleCObjects4.length = 0;
gdjs.sala10Code.GDpuzzleCObjects5.length = 0;
gdjs.sala10Code.GDcomienzopuzzleObjects1.length = 0;
gdjs.sala10Code.GDcomienzopuzzleObjects2.length = 0;
gdjs.sala10Code.GDcomienzopuzzleObjects3.length = 0;
gdjs.sala10Code.GDcomienzopuzzleObjects4.length = 0;
gdjs.sala10Code.GDcomienzopuzzleObjects5.length = 0;
gdjs.sala10Code.GDpisoObjects1.length = 0;
gdjs.sala10Code.GDpisoObjects2.length = 0;
gdjs.sala10Code.GDpisoObjects3.length = 0;
gdjs.sala10Code.GDpisoObjects4.length = 0;
gdjs.sala10Code.GDpisoObjects5.length = 0;
gdjs.sala10Code.GDtechoObjects1.length = 0;
gdjs.sala10Code.GDtechoObjects2.length = 0;
gdjs.sala10Code.GDtechoObjects3.length = 0;
gdjs.sala10Code.GDtechoObjects4.length = 0;
gdjs.sala10Code.GDtechoObjects5.length = 0;
gdjs.sala10Code.GDpuertaizquierdaObjects1.length = 0;
gdjs.sala10Code.GDpuertaizquierdaObjects2.length = 0;
gdjs.sala10Code.GDpuertaizquierdaObjects3.length = 0;
gdjs.sala10Code.GDpuertaizquierdaObjects4.length = 0;
gdjs.sala10Code.GDpuertaizquierdaObjects5.length = 0;
gdjs.sala10Code.GDpuertaderechaObjects1.length = 0;
gdjs.sala10Code.GDpuertaderechaObjects2.length = 0;
gdjs.sala10Code.GDpuertaderechaObjects3.length = 0;
gdjs.sala10Code.GDpuertaderechaObjects4.length = 0;
gdjs.sala10Code.GDpuertaderechaObjects5.length = 0;
gdjs.sala10Code.GDperdisteObjects1.length = 0;
gdjs.sala10Code.GDperdisteObjects2.length = 0;
gdjs.sala10Code.GDperdisteObjects3.length = 0;
gdjs.sala10Code.GDperdisteObjects4.length = 0;
gdjs.sala10Code.GDperdisteObjects5.length = 0;

gdjs.sala10Code.eventsList76(runtimeScene);
gdjs.sala10Code.GDsala1Objects1.length = 0;
gdjs.sala10Code.GDsala1Objects2.length = 0;
gdjs.sala10Code.GDsala1Objects3.length = 0;
gdjs.sala10Code.GDsala1Objects4.length = 0;
gdjs.sala10Code.GDsala1Objects5.length = 0;
gdjs.sala10Code.GDderecha2Objects1.length = 0;
gdjs.sala10Code.GDderecha2Objects2.length = 0;
gdjs.sala10Code.GDderecha2Objects3.length = 0;
gdjs.sala10Code.GDderecha2Objects4.length = 0;
gdjs.sala10Code.GDderecha2Objects5.length = 0;
gdjs.sala10Code.GDcasillero1Objects1.length = 0;
gdjs.sala10Code.GDcasillero1Objects2.length = 0;
gdjs.sala10Code.GDcasillero1Objects3.length = 0;
gdjs.sala10Code.GDcasillero1Objects4.length = 0;
gdjs.sala10Code.GDcasillero1Objects5.length = 0;
gdjs.sala10Code.GDcasillero2Objects1.length = 0;
gdjs.sala10Code.GDcasillero2Objects2.length = 0;
gdjs.sala10Code.GDcasillero2Objects3.length = 0;
gdjs.sala10Code.GDcasillero2Objects4.length = 0;
gdjs.sala10Code.GDcasillero2Objects5.length = 0;
gdjs.sala10Code.GDpersonajeObjects1.length = 0;
gdjs.sala10Code.GDpersonajeObjects2.length = 0;
gdjs.sala10Code.GDpersonajeObjects3.length = 0;
gdjs.sala10Code.GDpersonajeObjects4.length = 0;
gdjs.sala10Code.GDpersonajeObjects5.length = 0;
gdjs.sala10Code.GDcargaObjects1.length = 0;
gdjs.sala10Code.GDcargaObjects2.length = 0;
gdjs.sala10Code.GDcargaObjects3.length = 0;
gdjs.sala10Code.GDcargaObjects4.length = 0;
gdjs.sala10Code.GDcargaObjects5.length = 0;
gdjs.sala10Code.GDizquierdaObjects1.length = 0;
gdjs.sala10Code.GDizquierdaObjects2.length = 0;
gdjs.sala10Code.GDizquierdaObjects3.length = 0;
gdjs.sala10Code.GDizquierdaObjects4.length = 0;
gdjs.sala10Code.GDizquierdaObjects5.length = 0;
gdjs.sala10Code.GDderechaObjects1.length = 0;
gdjs.sala10Code.GDderechaObjects2.length = 0;
gdjs.sala10Code.GDderechaObjects3.length = 0;
gdjs.sala10Code.GDderechaObjects4.length = 0;
gdjs.sala10Code.GDderechaObjects5.length = 0;
gdjs.sala10Code.GDpuzzleObjects1.length = 0;
gdjs.sala10Code.GDpuzzleObjects2.length = 0;
gdjs.sala10Code.GDpuzzleObjects3.length = 0;
gdjs.sala10Code.GDpuzzleObjects4.length = 0;
gdjs.sala10Code.GDpuzzleObjects5.length = 0;
gdjs.sala10Code.GDpuzzleCObjects1.length = 0;
gdjs.sala10Code.GDpuzzleCObjects2.length = 0;
gdjs.sala10Code.GDpuzzleCObjects3.length = 0;
gdjs.sala10Code.GDpuzzleCObjects4.length = 0;
gdjs.sala10Code.GDpuzzleCObjects5.length = 0;
gdjs.sala10Code.GDcomienzopuzzleObjects1.length = 0;
gdjs.sala10Code.GDcomienzopuzzleObjects2.length = 0;
gdjs.sala10Code.GDcomienzopuzzleObjects3.length = 0;
gdjs.sala10Code.GDcomienzopuzzleObjects4.length = 0;
gdjs.sala10Code.GDcomienzopuzzleObjects5.length = 0;
gdjs.sala10Code.GDpisoObjects1.length = 0;
gdjs.sala10Code.GDpisoObjects2.length = 0;
gdjs.sala10Code.GDpisoObjects3.length = 0;
gdjs.sala10Code.GDpisoObjects4.length = 0;
gdjs.sala10Code.GDpisoObjects5.length = 0;
gdjs.sala10Code.GDtechoObjects1.length = 0;
gdjs.sala10Code.GDtechoObjects2.length = 0;
gdjs.sala10Code.GDtechoObjects3.length = 0;
gdjs.sala10Code.GDtechoObjects4.length = 0;
gdjs.sala10Code.GDtechoObjects5.length = 0;
gdjs.sala10Code.GDpuertaizquierdaObjects1.length = 0;
gdjs.sala10Code.GDpuertaizquierdaObjects2.length = 0;
gdjs.sala10Code.GDpuertaizquierdaObjects3.length = 0;
gdjs.sala10Code.GDpuertaizquierdaObjects4.length = 0;
gdjs.sala10Code.GDpuertaizquierdaObjects5.length = 0;
gdjs.sala10Code.GDpuertaderechaObjects1.length = 0;
gdjs.sala10Code.GDpuertaderechaObjects2.length = 0;
gdjs.sala10Code.GDpuertaderechaObjects3.length = 0;
gdjs.sala10Code.GDpuertaderechaObjects4.length = 0;
gdjs.sala10Code.GDpuertaderechaObjects5.length = 0;
gdjs.sala10Code.GDperdisteObjects1.length = 0;
gdjs.sala10Code.GDperdisteObjects2.length = 0;
gdjs.sala10Code.GDperdisteObjects3.length = 0;
gdjs.sala10Code.GDperdisteObjects4.length = 0;
gdjs.sala10Code.GDperdisteObjects5.length = 0;


return;

}

gdjs['sala10Code'] = gdjs.sala10Code;
