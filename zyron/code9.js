gdjs.sala5Code = {};
gdjs.sala5Code.localVariables = [];
gdjs.sala5Code.forEachIndex3 = 0;

gdjs.sala5Code.forEachObjects3 = [];

gdjs.sala5Code.forEachTemporary3 = null;

gdjs.sala5Code.forEachTotalCount3 = 0;

gdjs.sala5Code.GDsala1Objects1= [];
gdjs.sala5Code.GDsala1Objects2= [];
gdjs.sala5Code.GDsala1Objects3= [];
gdjs.sala5Code.GDsala1Objects4= [];
gdjs.sala5Code.GDsala1Objects5= [];
gdjs.sala5Code.GDfondopuzzleObjects1= [];
gdjs.sala5Code.GDfondopuzzleObjects2= [];
gdjs.sala5Code.GDfondopuzzleObjects3= [];
gdjs.sala5Code.GDfondopuzzleObjects4= [];
gdjs.sala5Code.GDfondopuzzleObjects5= [];
gdjs.sala5Code.GDpuntoObjects1= [];
gdjs.sala5Code.GDpuntoObjects2= [];
gdjs.sala5Code.GDpuntoObjects3= [];
gdjs.sala5Code.GDpuntoObjects4= [];
gdjs.sala5Code.GDpuntoObjects5= [];
gdjs.sala5Code.GDestrellaObjects1= [];
gdjs.sala5Code.GDestrellaObjects2= [];
gdjs.sala5Code.GDestrellaObjects3= [];
gdjs.sala5Code.GDestrellaObjects4= [];
gdjs.sala5Code.GDestrellaObjects5= [];
gdjs.sala5Code.GDestrella2Objects1= [];
gdjs.sala5Code.GDestrella2Objects2= [];
gdjs.sala5Code.GDestrella2Objects3= [];
gdjs.sala5Code.GDestrella2Objects4= [];
gdjs.sala5Code.GDestrella2Objects5= [];
gdjs.sala5Code.GDestrella3Objects1= [];
gdjs.sala5Code.GDestrella3Objects2= [];
gdjs.sala5Code.GDestrella3Objects3= [];
gdjs.sala5Code.GDestrella3Objects4= [];
gdjs.sala5Code.GDestrella3Objects5= [];
gdjs.sala5Code.GDestrella4Objects1= [];
gdjs.sala5Code.GDestrella4Objects2= [];
gdjs.sala5Code.GDestrella4Objects3= [];
gdjs.sala5Code.GDestrella4Objects4= [];
gdjs.sala5Code.GDestrella4Objects5= [];
gdjs.sala5Code.GDestrella5Objects1= [];
gdjs.sala5Code.GDestrella5Objects2= [];
gdjs.sala5Code.GDestrella5Objects3= [];
gdjs.sala5Code.GDestrella5Objects4= [];
gdjs.sala5Code.GDestrella5Objects5= [];
gdjs.sala5Code.GDpersonajeObjects1= [];
gdjs.sala5Code.GDpersonajeObjects2= [];
gdjs.sala5Code.GDpersonajeObjects3= [];
gdjs.sala5Code.GDpersonajeObjects4= [];
gdjs.sala5Code.GDpersonajeObjects5= [];
gdjs.sala5Code.GDcargaObjects1= [];
gdjs.sala5Code.GDcargaObjects2= [];
gdjs.sala5Code.GDcargaObjects3= [];
gdjs.sala5Code.GDcargaObjects4= [];
gdjs.sala5Code.GDcargaObjects5= [];
gdjs.sala5Code.GDizquierdaObjects1= [];
gdjs.sala5Code.GDizquierdaObjects2= [];
gdjs.sala5Code.GDizquierdaObjects3= [];
gdjs.sala5Code.GDizquierdaObjects4= [];
gdjs.sala5Code.GDizquierdaObjects5= [];
gdjs.sala5Code.GDderechaObjects1= [];
gdjs.sala5Code.GDderechaObjects2= [];
gdjs.sala5Code.GDderechaObjects3= [];
gdjs.sala5Code.GDderechaObjects4= [];
gdjs.sala5Code.GDderechaObjects5= [];
gdjs.sala5Code.GDpuzzleObjects1= [];
gdjs.sala5Code.GDpuzzleObjects2= [];
gdjs.sala5Code.GDpuzzleObjects3= [];
gdjs.sala5Code.GDpuzzleObjects4= [];
gdjs.sala5Code.GDpuzzleObjects5= [];
gdjs.sala5Code.GDpuzzleCObjects1= [];
gdjs.sala5Code.GDpuzzleCObjects2= [];
gdjs.sala5Code.GDpuzzleCObjects3= [];
gdjs.sala5Code.GDpuzzleCObjects4= [];
gdjs.sala5Code.GDpuzzleCObjects5= [];
gdjs.sala5Code.GDcomienzopuzzleObjects1= [];
gdjs.sala5Code.GDcomienzopuzzleObjects2= [];
gdjs.sala5Code.GDcomienzopuzzleObjects3= [];
gdjs.sala5Code.GDcomienzopuzzleObjects4= [];
gdjs.sala5Code.GDcomienzopuzzleObjects5= [];
gdjs.sala5Code.GDpisoObjects1= [];
gdjs.sala5Code.GDpisoObjects2= [];
gdjs.sala5Code.GDpisoObjects3= [];
gdjs.sala5Code.GDpisoObjects4= [];
gdjs.sala5Code.GDpisoObjects5= [];
gdjs.sala5Code.GDtechoObjects1= [];
gdjs.sala5Code.GDtechoObjects2= [];
gdjs.sala5Code.GDtechoObjects3= [];
gdjs.sala5Code.GDtechoObjects4= [];
gdjs.sala5Code.GDtechoObjects5= [];
gdjs.sala5Code.GDpuertaizquierdaObjects1= [];
gdjs.sala5Code.GDpuertaizquierdaObjects2= [];
gdjs.sala5Code.GDpuertaizquierdaObjects3= [];
gdjs.sala5Code.GDpuertaizquierdaObjects4= [];
gdjs.sala5Code.GDpuertaizquierdaObjects5= [];
gdjs.sala5Code.GDpuertaderechaObjects1= [];
gdjs.sala5Code.GDpuertaderechaObjects2= [];
gdjs.sala5Code.GDpuertaderechaObjects3= [];
gdjs.sala5Code.GDpuertaderechaObjects4= [];
gdjs.sala5Code.GDpuertaderechaObjects5= [];
gdjs.sala5Code.GDperdisteObjects1= [];
gdjs.sala5Code.GDperdisteObjects2= [];
gdjs.sala5Code.GDperdisteObjects3= [];
gdjs.sala5Code.GDperdisteObjects4= [];
gdjs.sala5Code.GDperdisteObjects5= [];


gdjs.sala5Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.sala5Code.GDpersonajeObjects1, gdjs.sala5Code.GDpersonajeObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sala5Code.GDpersonajeObjects2.length;i<l;++i) {
    if ( gdjs.sala5Code.GDpersonajeObjects2[i].getBehavior("TopDownMovement").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.sala5Code.GDpersonajeObjects2[k] = gdjs.sala5Code.GDpersonajeObjects2[i];
        ++k;
    }
}
gdjs.sala5Code.GDpersonajeObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.sala5Code.GDpersonajeObjects2 */
{for(var i = 0, len = gdjs.sala5Code.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala5Code.GDpersonajeObjects2[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

/* Reuse gdjs.sala5Code.GDpersonajeObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sala5Code.GDpersonajeObjects1.length;i<l;++i) {
    if ( gdjs.sala5Code.GDpersonajeObjects1[i].getBehavior("TopDownMovement").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.sala5Code.GDpersonajeObjects1[k] = gdjs.sala5Code.GDpersonajeObjects1[i];
        ++k;
    }
}
gdjs.sala5Code.GDpersonajeObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.sala5Code.GDpersonajeObjects1 */
{for(var i = 0, len = gdjs.sala5Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala5Code.GDpersonajeObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


};gdjs.sala5Code.asyncCallback39222428 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala5Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("personaje"), gdjs.sala5Code.GDpersonajeObjects2);

{for(var i = 0, len = gdjs.sala5Code.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala5Code.GDpersonajeObjects2[i].getBehavior("TopDownMovement").ignoreDefaultControls(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(false);
}gdjs.sala5Code.localVariables.length = 0;
}
gdjs.sala5Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala5Code.localVariables);
for (const obj of gdjs.sala5Code.GDpersonajeObjects1) asyncObjectsList.addObject("personaje", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.sala5Code.asyncCallback39222428(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala5Code.asyncCallback39224772 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala5Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("personaje"), gdjs.sala5Code.GDpersonajeObjects2);

{for(var i = 0, len = gdjs.sala5Code.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala5Code.GDpersonajeObjects2[i].getBehavior("TopDownMovement").ignoreDefaultControls(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setBoolean(false);
}gdjs.sala5Code.localVariables.length = 0;
}
gdjs.sala5Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala5Code.localVariables);
for (const obj of gdjs.sala5Code.GDpersonajeObjects1) asyncObjectsList.addObject("personaje", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.sala5Code.asyncCallback39224772(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala5Code.GDpersonajeObjects2});
gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaizquierdaObjects2Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala5Code.GDpuertaizquierdaObjects2});
gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaizquierdaObjects2Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala5Code.GDpuertaizquierdaObjects2});
gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala5Code.GDpersonajeObjects2});
gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaderechaObjects2Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala5Code.GDpuertaderechaObjects2});
gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaderechaObjects2Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala5Code.GDpuertaderechaObjects2});
gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala5Code.GDpersonajeObjects2});
gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpisoObjects2Objects = Hashtable.newFrom({"piso": gdjs.sala5Code.GDpisoObjects2});
gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpisoObjects2Objects = Hashtable.newFrom({"piso": gdjs.sala5Code.GDpisoObjects2});
gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects1Objects = Hashtable.newFrom({"personaje": gdjs.sala5Code.GDpersonajeObjects1});
gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDtechoObjects1Objects = Hashtable.newFrom({"techo": gdjs.sala5Code.GDtechoObjects1});
gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDtechoObjects1Objects = Hashtable.newFrom({"techo": gdjs.sala5Code.GDtechoObjects1});
gdjs.sala5Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala5Code.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("puertaizquierda"), gdjs.sala5Code.GDpuertaizquierdaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects2Objects, gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaizquierdaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.sala5Code.GDpersonajeObjects2 */
/* Reuse gdjs.sala5Code.GDpuertaizquierdaObjects2 */
{for(var i = 0, len = gdjs.sala5Code.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala5Code.GDpersonajeObjects2[i].separateFromObjectsList(gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaizquierdaObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala5Code.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("puertaderecha"), gdjs.sala5Code.GDpuertaderechaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects2Objects, gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaderechaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.sala5Code.GDpersonajeObjects2 */
/* Reuse gdjs.sala5Code.GDpuertaderechaObjects2 */
{for(var i = 0, len = gdjs.sala5Code.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala5Code.GDpersonajeObjects2[i].separateFromObjectsList(gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaderechaObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala5Code.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("piso"), gdjs.sala5Code.GDpisoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects2Objects, gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpisoObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.sala5Code.GDpersonajeObjects2 */
/* Reuse gdjs.sala5Code.GDpisoObjects2 */
{for(var i = 0, len = gdjs.sala5Code.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala5Code.GDpersonajeObjects2[i].separateFromObjectsList(gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpisoObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala5Code.GDpersonajeObjects1);
gdjs.copyArray(runtimeScene.getObjects("techo"), gdjs.sala5Code.GDtechoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects1Objects, gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDtechoObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.sala5Code.GDpersonajeObjects1 */
/* Reuse gdjs.sala5Code.GDtechoObjects1 */
{for(var i = 0, len = gdjs.sala5Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala5Code.GDpersonajeObjects1[i].separateFromObjectsList(gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDtechoObjects1Objects, false);
}
}}

}


};gdjs.sala5Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.doesSceneExist(runtimeScene, "sala4");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("derecha"), gdjs.sala5Code.GDderechaObjects2);
gdjs.copyArray(runtimeScene.getObjects("izquierda"), gdjs.sala5Code.GDizquierdaObjects2);
gdjs.copyArray(runtimeScene.getObjects("puzzle"), gdjs.sala5Code.GDpuzzleObjects2);
{for(var i = 0, len = gdjs.sala5Code.GDizquierdaObjects2.length ;i < len;++i) {
    gdjs.sala5Code.GDizquierdaObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.sala5Code.GDderechaObjects2.length ;i < len;++i) {
    gdjs.sala5Code.GDderechaObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.sala5Code.GDpuzzleObjects2.length ;i < len;++i) {
    gdjs.sala5Code.GDpuzzleObjects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala5Code.GDcargaObjects1);
gdjs.copyArray(runtimeScene.getObjects("comienzopuzzle"), gdjs.sala5Code.GDcomienzopuzzleObjects1);
gdjs.copyArray(runtimeScene.getObjects("derecha"), gdjs.sala5Code.GDderechaObjects1);
gdjs.copyArray(runtimeScene.getObjects("estrella"), gdjs.sala5Code.GDestrellaObjects1);
gdjs.copyArray(runtimeScene.getObjects("estrella2"), gdjs.sala5Code.GDestrella2Objects1);
gdjs.copyArray(runtimeScene.getObjects("estrella3"), gdjs.sala5Code.GDestrella3Objects1);
gdjs.copyArray(runtimeScene.getObjects("estrella4"), gdjs.sala5Code.GDestrella4Objects1);
gdjs.copyArray(runtimeScene.getObjects("estrella5"), gdjs.sala5Code.GDestrella5Objects1);
gdjs.copyArray(runtimeScene.getObjects("izquierda"), gdjs.sala5Code.GDizquierdaObjects1);
gdjs.copyArray(runtimeScene.getObjects("perdiste"), gdjs.sala5Code.GDperdisteObjects1);
gdjs.copyArray(runtimeScene.getObjects("punto"), gdjs.sala5Code.GDpuntoObjects1);
gdjs.copyArray(runtimeScene.getObjects("puzzle"), gdjs.sala5Code.GDpuzzleObjects1);
{for(var i = 0, len = gdjs.sala5Code.GDcargaObjects1.length ;i < len;++i) {
    gdjs.sala5Code.GDcargaObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.sala5Code.GDizquierdaObjects1.length ;i < len;++i) {
    gdjs.sala5Code.GDizquierdaObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala5Code.GDderechaObjects1.length ;i < len;++i) {
    gdjs.sala5Code.GDderechaObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala5Code.GDpuzzleObjects1.length ;i < len;++i) {
    gdjs.sala5Code.GDpuzzleObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala5Code.GDestrellaObjects1.length ;i < len;++i) {
    gdjs.sala5Code.GDestrellaObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala5Code.GDcomienzopuzzleObjects1.length ;i < len;++i) {
    gdjs.sala5Code.GDcomienzopuzzleObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala5Code.GDperdisteObjects1.length ;i < len;++i) {
    gdjs.sala5Code.GDperdisteObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala5Code.GDestrella2Objects1.length ;i < len;++i) {
    gdjs.sala5Code.GDestrella2Objects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala5Code.GDestrella3Objects1.length ;i < len;++i) {
    gdjs.sala5Code.GDestrella3Objects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala5Code.GDestrella4Objects1.length ;i < len;++i) {
    gdjs.sala5Code.GDestrella4Objects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala5Code.GDestrella5Objects1.length ;i < len;++i) {
    gdjs.sala5Code.GDestrella5Objects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala5Code.GDpuntoObjects1.length ;i < len;++i) {
    gdjs.sala5Code.GDpuntoObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{gdjs.evtTools.input.showCursor(runtimeScene);
}{gdjs.evtTools.input.showCursor(runtimeScene);
}{for(var i = 0, len = gdjs.sala5Code.GDestrellaObjects1.length ;i < len;++i) {
    gdjs.sala5Code.GDestrellaObjects1[i].returnVariable(gdjs.sala5Code.GDestrellaObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


};gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala5Code.GDpersonajeObjects2});
gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaizquierdaObjects2Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala5Code.GDpuertaizquierdaObjects2});
gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala5Code.GDpersonajeObjects3});
gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala5Code.GDpuertaizquierdaObjects3});
gdjs.sala5Code.asyncCallback39229228 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala5Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala1D", false);
}gdjs.sala5Code.localVariables.length = 0;
}
gdjs.sala5Code.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala5Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala5Code.asyncCallback39229228(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala5Code.GDpersonajeObjects3});
gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala5Code.GDpuertaizquierdaObjects3});
gdjs.sala5Code.asyncCallback39232300 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala5Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala2D", false);
}gdjs.sala5Code.localVariables.length = 0;
}
gdjs.sala5Code.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala5Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala5Code.asyncCallback39232300(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala5Code.GDpersonajeObjects3});
gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala5Code.GDpuertaizquierdaObjects3});
gdjs.sala5Code.asyncCallback39236340 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala5Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala3D", false);
}gdjs.sala5Code.localVariables.length = 0;
}
gdjs.sala5Code.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala5Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala5Code.asyncCallback39236340(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala5Code.GDpersonajeObjects3});
gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala5Code.GDpuertaizquierdaObjects3});
gdjs.sala5Code.asyncCallback39240396 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala5Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala4D", false);
}gdjs.sala5Code.localVariables.length = 0;
}
gdjs.sala5Code.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala5Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala5Code.asyncCallback39240396(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala5Code.GDpersonajeObjects3});
gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala5Code.GDpuertaizquierdaObjects3});
gdjs.sala5Code.asyncCallback39244436 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala5Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala5D", false);
}gdjs.sala5Code.localVariables.length = 0;
}
gdjs.sala5Code.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala5Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala5Code.asyncCallback39244436(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala5Code.GDpersonajeObjects3});
gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala5Code.GDpuertaizquierdaObjects3});
gdjs.sala5Code.asyncCallback39248508 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala5Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala6D", false);
}gdjs.sala5Code.localVariables.length = 0;
}
gdjs.sala5Code.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala5Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala5Code.asyncCallback39248508(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala5Code.GDpersonajeObjects2});
gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaizquierdaObjects2Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala5Code.GDpuertaizquierdaObjects2});
gdjs.sala5Code.asyncCallback39264732 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala5Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala10", false);
}gdjs.sala5Code.localVariables.length = 0;
}
gdjs.sala5Code.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala5Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala5Code.asyncCallback39264732(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala5Code.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.sala5Code.GDpersonajeObjects2, gdjs.sala5Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala5Code.GDpuertaizquierdaObjects2, gdjs.sala5Code.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects3Objects, gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala5Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala5Code.GDizquierdaObjects2, gdjs.sala5Code.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala5Code.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala5Code.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala5Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala5Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala5Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala5Code.GDpersonajeObjects2, gdjs.sala5Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala5Code.GDpuertaizquierdaObjects2, gdjs.sala5Code.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects3Objects, gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala5Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala5Code.GDizquierdaObjects2, gdjs.sala5Code.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala5Code.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala5Code.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala5Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala5Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala5Code.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala5Code.GDpersonajeObjects2, gdjs.sala5Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala5Code.GDpuertaizquierdaObjects2, gdjs.sala5Code.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects3Objects, gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala5Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala5Code.GDizquierdaObjects2, gdjs.sala5Code.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala5Code.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala5Code.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala5Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala5Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala5Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala5Code.GDpersonajeObjects2, gdjs.sala5Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala5Code.GDpuertaizquierdaObjects2, gdjs.sala5Code.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects3Objects, gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala5Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala5Code.GDizquierdaObjects2, gdjs.sala5Code.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala5Code.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala5Code.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala5Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala5Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala5Code.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala5Code.GDpersonajeObjects2, gdjs.sala5Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala5Code.GDpuertaizquierdaObjects2, gdjs.sala5Code.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects3Objects, gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala5Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala5Code.GDizquierdaObjects2, gdjs.sala5Code.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala5Code.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala5Code.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala5Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala5Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala5Code.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala5Code.GDpersonajeObjects2, gdjs.sala5Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala5Code.GDpuertaizquierdaObjects2, gdjs.sala5Code.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects3Objects, gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala5Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala5Code.GDizquierdaObjects2, gdjs.sala5Code.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala5Code.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala5Code.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala5Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala5Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala5Code.eventsList10(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.sala5Code.GDpersonajeObjects2 */
/* Reuse gdjs.sala5Code.GDpuertaizquierdaObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects2Objects, gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaizquierdaObjects2Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala5Code.GDcargaObjects2);
/* Reuse gdjs.sala5Code.GDizquierdaObjects2 */
{for(var i = 0, len = gdjs.sala5Code.GDizquierdaObjects2.length ;i < len;++i) {
    gdjs.sala5Code.GDizquierdaObjects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala5Code.GDcargaObjects2.length ;i < len;++i) {
    gdjs.sala5Code.GDcargaObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala5Code.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala5Code.GDpersonajeObjects2});
gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaderechaObjects2Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala5Code.GDpuertaderechaObjects2});
gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala5Code.GDpersonajeObjects3});
gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala5Code.GDpuertaderechaObjects3});
gdjs.sala5Code.asyncCallback39270068 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala5Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala1", false);
}gdjs.sala5Code.localVariables.length = 0;
}
gdjs.sala5Code.eventsList13 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala5Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala5Code.asyncCallback39270068(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala5Code.GDpersonajeObjects3});
gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala5Code.GDpuertaderechaObjects3});
gdjs.sala5Code.asyncCallback39274236 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala5Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala2", false);
}gdjs.sala5Code.localVariables.length = 0;
}
gdjs.sala5Code.eventsList14 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala5Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala5Code.asyncCallback39274236(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala5Code.GDpersonajeObjects3});
gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala5Code.GDpuertaderechaObjects3});
gdjs.sala5Code.asyncCallback39278380 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala5Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala3", false);
}gdjs.sala5Code.localVariables.length = 0;
}
gdjs.sala5Code.eventsList15 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala5Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala5Code.asyncCallback39278380(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala5Code.GDpersonajeObjects3});
gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala5Code.GDpuertaderechaObjects3});
gdjs.sala5Code.asyncCallback39282540 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala5Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala4", false);
}gdjs.sala5Code.localVariables.length = 0;
}
gdjs.sala5Code.eventsList16 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala5Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala5Code.asyncCallback39282540(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala5Code.GDpersonajeObjects3});
gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala5Code.GDpuertaderechaObjects3});
gdjs.sala5Code.asyncCallback39286684 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala5Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala5", false);
}gdjs.sala5Code.localVariables.length = 0;
}
gdjs.sala5Code.eventsList17 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala5Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala5Code.asyncCallback39286684(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala5Code.GDpersonajeObjects3});
gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala5Code.GDpuertaderechaObjects3});
gdjs.sala5Code.asyncCallback39290860 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala5Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala6", false);
}gdjs.sala5Code.localVariables.length = 0;
}
gdjs.sala5Code.eventsList18 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala5Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala5Code.asyncCallback39290860(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala5Code.GDpersonajeObjects2});
gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaderechaObjects2Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala5Code.GDpuertaderechaObjects2});
gdjs.sala5Code.asyncCallback39307500 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala5Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala10", false);
}gdjs.sala5Code.localVariables.length = 0;
}
gdjs.sala5Code.eventsList19 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala5Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala5Code.asyncCallback39307500(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala5Code.eventsList20 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.sala5Code.GDpersonajeObjects2, gdjs.sala5Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala5Code.GDpuertaderechaObjects2, gdjs.sala5Code.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects3Objects, gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala5Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala5Code.GDderechaObjects2, gdjs.sala5Code.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala5Code.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala5Code.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala5Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala5Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala5Code.eventsList13(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala5Code.GDpersonajeObjects2, gdjs.sala5Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala5Code.GDpuertaderechaObjects2, gdjs.sala5Code.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects3Objects, gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala5Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala5Code.GDderechaObjects2, gdjs.sala5Code.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala5Code.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala5Code.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala5Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala5Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala5Code.eventsList14(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala5Code.GDpersonajeObjects2, gdjs.sala5Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala5Code.GDpuertaderechaObjects2, gdjs.sala5Code.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects3Objects, gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala5Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala5Code.GDderechaObjects2, gdjs.sala5Code.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala5Code.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala5Code.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala5Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala5Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala5Code.eventsList15(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala5Code.GDpersonajeObjects2, gdjs.sala5Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala5Code.GDpuertaderechaObjects2, gdjs.sala5Code.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects3Objects, gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala5Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala5Code.GDderechaObjects2, gdjs.sala5Code.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala5Code.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala5Code.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala5Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala5Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala5Code.eventsList16(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala5Code.GDpersonajeObjects2, gdjs.sala5Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala5Code.GDpuertaderechaObjects2, gdjs.sala5Code.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects3Objects, gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala5Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala5Code.GDderechaObjects2, gdjs.sala5Code.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala5Code.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala5Code.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala5Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala5Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala5Code.eventsList17(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala5Code.GDpersonajeObjects2, gdjs.sala5Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala5Code.GDpuertaderechaObjects2, gdjs.sala5Code.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects3Objects, gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala5Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala5Code.GDderechaObjects2, gdjs.sala5Code.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala5Code.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala5Code.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala5Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala5Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala5Code.eventsList18(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.sala5Code.GDpersonajeObjects2 */
/* Reuse gdjs.sala5Code.GDpuertaderechaObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects2Objects, gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaderechaObjects2Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala5Code.GDcargaObjects2);
/* Reuse gdjs.sala5Code.GDderechaObjects2 */
{for(var i = 0, len = gdjs.sala5Code.GDderechaObjects2.length ;i < len;++i) {
    gdjs.sala5Code.GDderechaObjects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala5Code.GDcargaObjects2.length ;i < len;++i) {
    gdjs.sala5Code.GDcargaObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala5Code.eventsList19(runtimeScene);} //End of subevents
}

}


};gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects1Objects = Hashtable.newFrom({"personaje": gdjs.sala5Code.GDpersonajeObjects1});
gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuzzleCObjects1Objects = Hashtable.newFrom({"puzzleC": gdjs.sala5Code.GDpuzzleCObjects1});
gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects1Objects = Hashtable.newFrom({"personaje": gdjs.sala5Code.GDpersonajeObjects1});
gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuzzleCObjects1Objects = Hashtable.newFrom({"puzzleC": gdjs.sala5Code.GDpuzzleCObjects1});
gdjs.sala5Code.asyncCallback21803156 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala5Code.localVariables);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "puzzle4");
}gdjs.sala5Code.localVariables.length = 0;
}
gdjs.sala5Code.eventsList21 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala5Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.sala5Code.asyncCallback21803156(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala5Code.asyncCallback21802316 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala5Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("comienzopuzzle"), gdjs.sala5Code.GDcomienzopuzzleObjects2);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "puzzle");
}{for(var i = 0, len = gdjs.sala5Code.GDcomienzopuzzleObjects2.length ;i < len;++i) {
    gdjs.sala5Code.GDcomienzopuzzleObjects2[i].getBehavior("Animation").resumeAnimation();
}
}
{ //Subevents
gdjs.sala5Code.eventsList21(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.sala5Code.localVariables.length = 0;
}
gdjs.sala5Code.eventsList22 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala5Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.sala5Code.asyncCallback21802316(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala5Code.eventsList23 = function(runtimeScene) {

{

/* Reuse gdjs.sala5Code.GDpersonajeObjects1 */
/* Reuse gdjs.sala5Code.GDpuzzleObjects1 */
/* Reuse gdjs.sala5Code.GDpuzzleCObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects1Objects, gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuzzleCObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala5Code.GDpuzzleObjects1.length;i<l;++i) {
    if ( gdjs.sala5Code.GDpuzzleObjects1[i].isVisible() ) {
        isConditionTrue_1 = true;
        gdjs.sala5Code.GDpuzzleObjects1[k] = gdjs.sala5Code.GDpuzzleObjects1[i];
        ++k;
    }
}
gdjs.sala5Code.GDpuzzleObjects1.length = k;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala5Code.GDcargaObjects1);
/* Reuse gdjs.sala5Code.GDpersonajeObjects1 */
/* Reuse gdjs.sala5Code.GDpuzzleObjects1 */
{for(var i = 0, len = gdjs.sala5Code.GDpuzzleObjects1.length ;i < len;++i) {
    gdjs.sala5Code.GDpuzzleObjects1[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala5Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala5Code.GDpersonajeObjects1[i].getBehavior("TopDownMovement").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.sala5Code.GDcargaObjects1.length ;i < len;++i) {
    gdjs.sala5Code.GDcargaObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 4, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala5Code.eventsList22(runtimeScene);} //End of subevents
}

}


};gdjs.sala5Code.eventsList24 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala5Code.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("puertaizquierda"), gdjs.sala5Code.GDpuertaizquierdaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects2Objects, gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaizquierdaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("izquierda"), gdjs.sala5Code.GDizquierdaObjects2);
{for(var i = 0, len = gdjs.sala5Code.GDizquierdaObjects2.length ;i < len;++i) {
    gdjs.sala5Code.GDizquierdaObjects2[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.random(7));
}
{ //Subevents
gdjs.sala5Code.eventsList12(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala5Code.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("puertaderecha"), gdjs.sala5Code.GDpuertaderechaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects2Objects, gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuertaderechaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("derecha"), gdjs.sala5Code.GDderechaObjects2);
{for(var i = 0, len = gdjs.sala5Code.GDderechaObjects2.length ;i < len;++i) {
    gdjs.sala5Code.GDderechaObjects2[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.random(7));
}
{ //Subevents
gdjs.sala5Code.eventsList20(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala5Code.GDpersonajeObjects1);
gdjs.copyArray(runtimeScene.getObjects("puzzleC"), gdjs.sala5Code.GDpuzzleCObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpersonajeObjects1Objects, gdjs.sala5Code.mapOfGDgdjs_9546sala5Code_9546GDpuzzleCObjects1Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("puzzle"), gdjs.sala5Code.GDpuzzleObjects1);
{for(var i = 0, len = gdjs.sala5Code.GDpuzzleObjects1.length ;i < len;++i) {
    gdjs.sala5Code.GDpuzzleObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.sala5Code.eventsList23(runtimeScene);} //End of subevents
}

}


};gdjs.sala5Code.eventsList25 = function(runtimeScene) {

};gdjs.sala5Code.eventsList26 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(9), false, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(9).setBoolean(true);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setBoolean(true);
}}

}


};gdjs.sala5Code.asyncCallback21781156 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala5Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala5Code.GDpersonajeObjects4);
{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "puzzle");
}{for(var i = 0, len = gdjs.sala5Code.GDpersonajeObjects4.length ;i < len;++i) {
    gdjs.sala5Code.GDpersonajeObjects4[i].getBehavior("TopDownMovement").ignoreDefaultControls(false);
}
}
{ //Subevents
gdjs.sala5Code.eventsList26(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.sala5Code.localVariables.length = 0;
}
gdjs.sala5Code.eventsList27 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala5Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.sala5Code.asyncCallback21781156(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala5Code.asyncCallback21781660 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala5Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala5Code.GDcargaObjects3);
gdjs.copyArray(runtimeScene.getObjects("puzzle"), gdjs.sala5Code.GDpuzzleObjects3);
{for(var i = 0, len = gdjs.sala5Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala5Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 4, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.sala5Code.GDpuzzleObjects3.length ;i < len;++i) {
    gdjs.sala5Code.GDpuzzleObjects3[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.sala5Code.eventsList27(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.sala5Code.localVariables.length = 0;
}
gdjs.sala5Code.eventsList28 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala5Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala5Code.asyncCallback21781660(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala5Code.asyncCallback21756236 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala5Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala5Code.GDpersonajeObjects4);
gdjs.copyArray(runtimeScene.getObjects("puzzle"), gdjs.sala5Code.GDpuzzleObjects4);
{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "puzzle");
}{for(var i = 0, len = gdjs.sala5Code.GDpuzzleObjects4.length ;i < len;++i) {
    gdjs.sala5Code.GDpuzzleObjects4[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.sala5Code.GDpersonajeObjects4.length ;i < len;++i) {
    gdjs.sala5Code.GDpersonajeObjects4[i].getBehavior("TopDownMovement").ignoreDefaultControls(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(true);
}gdjs.sala5Code.localVariables.length = 0;
}
gdjs.sala5Code.eventsList29 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala5Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.sala5Code.asyncCallback21756236(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala5Code.asyncCallback21782500 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala5Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala5Code.GDcargaObjects3);
{for(var i = 0, len = gdjs.sala5Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala5Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 4, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala5Code.eventsList29(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.sala5Code.localVariables.length = 0;
}
gdjs.sala5Code.eventsList30 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala5Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.sala5Code.asyncCallback21782500(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala5Code.asyncCallback21782020 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala5Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("perdiste"), gdjs.sala5Code.GDperdisteObjects2);
{for(var i = 0, len = gdjs.sala5Code.GDperdisteObjects2.length ;i < len;++i) {
    gdjs.sala5Code.GDperdisteObjects2[i].getBehavior("Animation").resumeAnimation();
}
}
{ //Subevents
gdjs.sala5Code.eventsList30(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.sala5Code.localVariables.length = 0;
}
gdjs.sala5Code.eventsList31 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala5Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.sala5Code.asyncCallback21782020(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala5Code.eventsList32 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("punto"), gdjs.sala5Code.GDpuntoObjects2);

for (gdjs.sala5Code.forEachIndex3 = 0;gdjs.sala5Code.forEachIndex3 < gdjs.sala5Code.GDpuntoObjects2.length;++gdjs.sala5Code.forEachIndex3) {
gdjs.sala5Code.GDpuntoObjects3.length = 0;


gdjs.sala5Code.forEachTemporary3 = gdjs.sala5Code.GDpuntoObjects2[gdjs.sala5Code.forEachIndex3];
gdjs.sala5Code.GDpuntoObjects3.push(gdjs.sala5Code.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala5Code.GDpuntoObjects3.length;i<l;++i) {
    if ( gdjs.sala5Code.GDpuntoObjects3[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.sala5Code.GDpuntoObjects3[k] = gdjs.sala5Code.GDpuntoObjects3[i];
        ++k;
    }
}
gdjs.sala5Code.GDpuntoObjects3.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala5Code.GDpuntoObjects3.length;i<l;++i) {
    if ( gdjs.sala5Code.GDpuntoObjects3[i].getBehavior("Animation").isAnimationPaused() ) {
        isConditionTrue_1 = true;
        gdjs.sala5Code.GDpuntoObjects3[k] = gdjs.sala5Code.GDpuntoObjects3[i];
        ++k;
    }
}
gdjs.sala5Code.GDpuntoObjects3.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21805460);
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.sala5Code.GDpuntoObjects3.length ;i < len;++i) {
    gdjs.sala5Code.GDpuntoObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("estrella"), gdjs.sala5Code.GDestrellaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sala5Code.GDestrellaObjects2.length;i<l;++i) {
    if ( gdjs.sala5Code.GDestrellaObjects2[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.sala5Code.GDestrellaObjects2[k] = gdjs.sala5Code.GDestrellaObjects2[i];
        ++k;
    }
}
gdjs.sala5Code.GDestrellaObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.sala5Code.GDestrellaObjects2 */
{for(var i = 0, len = gdjs.sala5Code.GDestrellaObjects2.length ;i < len;++i) {
    gdjs.sala5Code.GDestrellaObjects2[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("estrella2"), gdjs.sala5Code.GDestrella2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sala5Code.GDestrella2Objects2.length;i<l;++i) {
    if ( gdjs.sala5Code.GDestrella2Objects2[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.sala5Code.GDestrella2Objects2[k] = gdjs.sala5Code.GDestrella2Objects2[i];
        ++k;
    }
}
gdjs.sala5Code.GDestrella2Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.sala5Code.GDestrella2Objects2 */
{for(var i = 0, len = gdjs.sala5Code.GDestrella2Objects2.length ;i < len;++i) {
    gdjs.sala5Code.GDestrella2Objects2[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("estrella3"), gdjs.sala5Code.GDestrella3Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sala5Code.GDestrella3Objects2.length;i<l;++i) {
    if ( gdjs.sala5Code.GDestrella3Objects2[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.sala5Code.GDestrella3Objects2[k] = gdjs.sala5Code.GDestrella3Objects2[i];
        ++k;
    }
}
gdjs.sala5Code.GDestrella3Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.sala5Code.GDestrella3Objects2 */
{for(var i = 0, len = gdjs.sala5Code.GDestrella3Objects2.length ;i < len;++i) {
    gdjs.sala5Code.GDestrella3Objects2[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("estrella4"), gdjs.sala5Code.GDestrella4Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sala5Code.GDestrella4Objects2.length;i<l;++i) {
    if ( gdjs.sala5Code.GDestrella4Objects2[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.sala5Code.GDestrella4Objects2[k] = gdjs.sala5Code.GDestrella4Objects2[i];
        ++k;
    }
}
gdjs.sala5Code.GDestrella4Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.sala5Code.GDestrella4Objects2 */
{for(var i = 0, len = gdjs.sala5Code.GDestrella4Objects2.length ;i < len;++i) {
    gdjs.sala5Code.GDestrella4Objects2[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("estrella5"), gdjs.sala5Code.GDestrella5Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sala5Code.GDestrella5Objects2.length;i<l;++i) {
    if ( gdjs.sala5Code.GDestrella5Objects2[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.sala5Code.GDestrella5Objects2[k] = gdjs.sala5Code.GDestrella5Objects2[i];
        ++k;
    }
}
gdjs.sala5Code.GDestrella5Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.sala5Code.GDestrella5Objects2 */
{for(var i = 0, len = gdjs.sala5Code.GDestrella5Objects2.length ;i < len;++i) {
    gdjs.sala5Code.GDestrella5Objects2[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("estrella"), gdjs.sala5Code.GDestrellaObjects2);
gdjs.copyArray(runtimeScene.getObjects("estrella2"), gdjs.sala5Code.GDestrella2Objects2);
gdjs.copyArray(runtimeScene.getObjects("estrella3"), gdjs.sala5Code.GDestrella3Objects2);
gdjs.copyArray(runtimeScene.getObjects("estrella4"), gdjs.sala5Code.GDestrella4Objects2);
gdjs.copyArray(runtimeScene.getObjects("estrella5"), gdjs.sala5Code.GDestrella5Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala5Code.GDestrellaObjects2.length;i<l;++i) {
    if ( gdjs.sala5Code.GDestrellaObjects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_1 = true;
        gdjs.sala5Code.GDestrellaObjects2[k] = gdjs.sala5Code.GDestrellaObjects2[i];
        ++k;
    }
}
gdjs.sala5Code.GDestrellaObjects2.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala5Code.GDestrella2Objects2.length;i<l;++i) {
    if ( gdjs.sala5Code.GDestrella2Objects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_1 = true;
        gdjs.sala5Code.GDestrella2Objects2[k] = gdjs.sala5Code.GDestrella2Objects2[i];
        ++k;
    }
}
gdjs.sala5Code.GDestrella2Objects2.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala5Code.GDestrella3Objects2.length;i<l;++i) {
    if ( gdjs.sala5Code.GDestrella3Objects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_1 = true;
        gdjs.sala5Code.GDestrella3Objects2[k] = gdjs.sala5Code.GDestrella3Objects2[i];
        ++k;
    }
}
gdjs.sala5Code.GDestrella3Objects2.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala5Code.GDestrella4Objects2.length;i<l;++i) {
    if ( gdjs.sala5Code.GDestrella4Objects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_1 = true;
        gdjs.sala5Code.GDestrella4Objects2[k] = gdjs.sala5Code.GDestrella4Objects2[i];
        ++k;
    }
}
gdjs.sala5Code.GDestrella4Objects2.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala5Code.GDestrella5Objects2.length;i<l;++i) {
    if ( gdjs.sala5Code.GDestrella5Objects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_1 = true;
        gdjs.sala5Code.GDestrella5Objects2[k] = gdjs.sala5Code.GDestrella5Objects2[i];
        ++k;
    }
}
gdjs.sala5Code.GDestrella5Objects2.length = k;
}
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21781588);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.sala5Code.eventsList28(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 10;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21781332);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.sala5Code.eventsList31(runtimeScene);} //End of subevents
}

}


};gdjs.sala5Code.eventsList33 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala5Code.GDpersonajeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala5Code.GDpersonajeObjects1.length;i<l;++i) {
    if ( !(gdjs.sala5Code.GDpersonajeObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_1 = true;
        gdjs.sala5Code.GDpersonajeObjects1[k] = gdjs.sala5Code.GDpersonajeObjects1[i];
        ++k;
    }
}
gdjs.sala5Code.GDpersonajeObjects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.sala5Code.GDpersonajeObjects1 */
{for(var i = 0, len = gdjs.sala5Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala5Code.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("abrir");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala5Code.GDpersonajeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = !(gdjs.evtTools.input.anyKeyPressed(runtimeScene));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala5Code.GDpersonajeObjects1.length;i<l;++i) {
    if ( !(gdjs.sala5Code.GDpersonajeObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_1 = true;
        gdjs.sala5Code.GDpersonajeObjects1[k] = gdjs.sala5Code.GDpersonajeObjects1[i];
        ++k;
    }
}
gdjs.sala5Code.GDpersonajeObjects1.length = k;
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
/* Reuse gdjs.sala5Code.GDpersonajeObjects1 */
{for(var i = 0, len = gdjs.sala5Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala5Code.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("descanso");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala5Code.GDpersonajeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sala5Code.GDpersonajeObjects1.length;i<l;++i) {
    if ( gdjs.sala5Code.GDpersonajeObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.sala5Code.GDpersonajeObjects1[k] = gdjs.sala5Code.GDpersonajeObjects1[i];
        ++k;
    }
}
gdjs.sala5Code.GDpersonajeObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.sala5Code.GDpersonajeObjects1 */
{for(var i = 0, len = gdjs.sala5Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala5Code.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("caminar");
}
}
{ //Subevents
gdjs.sala5Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala5Code.GDpersonajeObjects1);
{for(var i = 0, len = gdjs.sala5Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala5Code.GDpersonajeObjects1[i].getBehavior("TopDownMovement").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.sala5Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala5Code.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("perder");
}
}
{ //Subevents
gdjs.sala5Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala5Code.GDpersonajeObjects1);
{for(var i = 0, len = gdjs.sala5Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala5Code.GDpersonajeObjects1[i].getBehavior("TopDownMovement").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.sala5Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala5Code.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("ganar");
}
}
{ //Subevents
gdjs.sala5Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.sala5Code.eventsList3(runtimeScene);
}


{


gdjs.sala5Code.eventsList4(runtimeScene);
}


{


gdjs.sala5Code.eventsList24(runtimeScene);
}


{


gdjs.sala5Code.eventsList32(runtimeScene);
}


};

gdjs.sala5Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.sala5Code.GDsala1Objects1.length = 0;
gdjs.sala5Code.GDsala1Objects2.length = 0;
gdjs.sala5Code.GDsala1Objects3.length = 0;
gdjs.sala5Code.GDsala1Objects4.length = 0;
gdjs.sala5Code.GDsala1Objects5.length = 0;
gdjs.sala5Code.GDfondopuzzleObjects1.length = 0;
gdjs.sala5Code.GDfondopuzzleObjects2.length = 0;
gdjs.sala5Code.GDfondopuzzleObjects3.length = 0;
gdjs.sala5Code.GDfondopuzzleObjects4.length = 0;
gdjs.sala5Code.GDfondopuzzleObjects5.length = 0;
gdjs.sala5Code.GDpuntoObjects1.length = 0;
gdjs.sala5Code.GDpuntoObjects2.length = 0;
gdjs.sala5Code.GDpuntoObjects3.length = 0;
gdjs.sala5Code.GDpuntoObjects4.length = 0;
gdjs.sala5Code.GDpuntoObjects5.length = 0;
gdjs.sala5Code.GDestrellaObjects1.length = 0;
gdjs.sala5Code.GDestrellaObjects2.length = 0;
gdjs.sala5Code.GDestrellaObjects3.length = 0;
gdjs.sala5Code.GDestrellaObjects4.length = 0;
gdjs.sala5Code.GDestrellaObjects5.length = 0;
gdjs.sala5Code.GDestrella2Objects1.length = 0;
gdjs.sala5Code.GDestrella2Objects2.length = 0;
gdjs.sala5Code.GDestrella2Objects3.length = 0;
gdjs.sala5Code.GDestrella2Objects4.length = 0;
gdjs.sala5Code.GDestrella2Objects5.length = 0;
gdjs.sala5Code.GDestrella3Objects1.length = 0;
gdjs.sala5Code.GDestrella3Objects2.length = 0;
gdjs.sala5Code.GDestrella3Objects3.length = 0;
gdjs.sala5Code.GDestrella3Objects4.length = 0;
gdjs.sala5Code.GDestrella3Objects5.length = 0;
gdjs.sala5Code.GDestrella4Objects1.length = 0;
gdjs.sala5Code.GDestrella4Objects2.length = 0;
gdjs.sala5Code.GDestrella4Objects3.length = 0;
gdjs.sala5Code.GDestrella4Objects4.length = 0;
gdjs.sala5Code.GDestrella4Objects5.length = 0;
gdjs.sala5Code.GDestrella5Objects1.length = 0;
gdjs.sala5Code.GDestrella5Objects2.length = 0;
gdjs.sala5Code.GDestrella5Objects3.length = 0;
gdjs.sala5Code.GDestrella5Objects4.length = 0;
gdjs.sala5Code.GDestrella5Objects5.length = 0;
gdjs.sala5Code.GDpersonajeObjects1.length = 0;
gdjs.sala5Code.GDpersonajeObjects2.length = 0;
gdjs.sala5Code.GDpersonajeObjects3.length = 0;
gdjs.sala5Code.GDpersonajeObjects4.length = 0;
gdjs.sala5Code.GDpersonajeObjects5.length = 0;
gdjs.sala5Code.GDcargaObjects1.length = 0;
gdjs.sala5Code.GDcargaObjects2.length = 0;
gdjs.sala5Code.GDcargaObjects3.length = 0;
gdjs.sala5Code.GDcargaObjects4.length = 0;
gdjs.sala5Code.GDcargaObjects5.length = 0;
gdjs.sala5Code.GDizquierdaObjects1.length = 0;
gdjs.sala5Code.GDizquierdaObjects2.length = 0;
gdjs.sala5Code.GDizquierdaObjects3.length = 0;
gdjs.sala5Code.GDizquierdaObjects4.length = 0;
gdjs.sala5Code.GDizquierdaObjects5.length = 0;
gdjs.sala5Code.GDderechaObjects1.length = 0;
gdjs.sala5Code.GDderechaObjects2.length = 0;
gdjs.sala5Code.GDderechaObjects3.length = 0;
gdjs.sala5Code.GDderechaObjects4.length = 0;
gdjs.sala5Code.GDderechaObjects5.length = 0;
gdjs.sala5Code.GDpuzzleObjects1.length = 0;
gdjs.sala5Code.GDpuzzleObjects2.length = 0;
gdjs.sala5Code.GDpuzzleObjects3.length = 0;
gdjs.sala5Code.GDpuzzleObjects4.length = 0;
gdjs.sala5Code.GDpuzzleObjects5.length = 0;
gdjs.sala5Code.GDpuzzleCObjects1.length = 0;
gdjs.sala5Code.GDpuzzleCObjects2.length = 0;
gdjs.sala5Code.GDpuzzleCObjects3.length = 0;
gdjs.sala5Code.GDpuzzleCObjects4.length = 0;
gdjs.sala5Code.GDpuzzleCObjects5.length = 0;
gdjs.sala5Code.GDcomienzopuzzleObjects1.length = 0;
gdjs.sala5Code.GDcomienzopuzzleObjects2.length = 0;
gdjs.sala5Code.GDcomienzopuzzleObjects3.length = 0;
gdjs.sala5Code.GDcomienzopuzzleObjects4.length = 0;
gdjs.sala5Code.GDcomienzopuzzleObjects5.length = 0;
gdjs.sala5Code.GDpisoObjects1.length = 0;
gdjs.sala5Code.GDpisoObjects2.length = 0;
gdjs.sala5Code.GDpisoObjects3.length = 0;
gdjs.sala5Code.GDpisoObjects4.length = 0;
gdjs.sala5Code.GDpisoObjects5.length = 0;
gdjs.sala5Code.GDtechoObjects1.length = 0;
gdjs.sala5Code.GDtechoObjects2.length = 0;
gdjs.sala5Code.GDtechoObjects3.length = 0;
gdjs.sala5Code.GDtechoObjects4.length = 0;
gdjs.sala5Code.GDtechoObjects5.length = 0;
gdjs.sala5Code.GDpuertaizquierdaObjects1.length = 0;
gdjs.sala5Code.GDpuertaizquierdaObjects2.length = 0;
gdjs.sala5Code.GDpuertaizquierdaObjects3.length = 0;
gdjs.sala5Code.GDpuertaizquierdaObjects4.length = 0;
gdjs.sala5Code.GDpuertaizquierdaObjects5.length = 0;
gdjs.sala5Code.GDpuertaderechaObjects1.length = 0;
gdjs.sala5Code.GDpuertaderechaObjects2.length = 0;
gdjs.sala5Code.GDpuertaderechaObjects3.length = 0;
gdjs.sala5Code.GDpuertaderechaObjects4.length = 0;
gdjs.sala5Code.GDpuertaderechaObjects5.length = 0;
gdjs.sala5Code.GDperdisteObjects1.length = 0;
gdjs.sala5Code.GDperdisteObjects2.length = 0;
gdjs.sala5Code.GDperdisteObjects3.length = 0;
gdjs.sala5Code.GDperdisteObjects4.length = 0;
gdjs.sala5Code.GDperdisteObjects5.length = 0;

gdjs.sala5Code.eventsList33(runtimeScene);
gdjs.sala5Code.GDsala1Objects1.length = 0;
gdjs.sala5Code.GDsala1Objects2.length = 0;
gdjs.sala5Code.GDsala1Objects3.length = 0;
gdjs.sala5Code.GDsala1Objects4.length = 0;
gdjs.sala5Code.GDsala1Objects5.length = 0;
gdjs.sala5Code.GDfondopuzzleObjects1.length = 0;
gdjs.sala5Code.GDfondopuzzleObjects2.length = 0;
gdjs.sala5Code.GDfondopuzzleObjects3.length = 0;
gdjs.sala5Code.GDfondopuzzleObjects4.length = 0;
gdjs.sala5Code.GDfondopuzzleObjects5.length = 0;
gdjs.sala5Code.GDpuntoObjects1.length = 0;
gdjs.sala5Code.GDpuntoObjects2.length = 0;
gdjs.sala5Code.GDpuntoObjects3.length = 0;
gdjs.sala5Code.GDpuntoObjects4.length = 0;
gdjs.sala5Code.GDpuntoObjects5.length = 0;
gdjs.sala5Code.GDestrellaObjects1.length = 0;
gdjs.sala5Code.GDestrellaObjects2.length = 0;
gdjs.sala5Code.GDestrellaObjects3.length = 0;
gdjs.sala5Code.GDestrellaObjects4.length = 0;
gdjs.sala5Code.GDestrellaObjects5.length = 0;
gdjs.sala5Code.GDestrella2Objects1.length = 0;
gdjs.sala5Code.GDestrella2Objects2.length = 0;
gdjs.sala5Code.GDestrella2Objects3.length = 0;
gdjs.sala5Code.GDestrella2Objects4.length = 0;
gdjs.sala5Code.GDestrella2Objects5.length = 0;
gdjs.sala5Code.GDestrella3Objects1.length = 0;
gdjs.sala5Code.GDestrella3Objects2.length = 0;
gdjs.sala5Code.GDestrella3Objects3.length = 0;
gdjs.sala5Code.GDestrella3Objects4.length = 0;
gdjs.sala5Code.GDestrella3Objects5.length = 0;
gdjs.sala5Code.GDestrella4Objects1.length = 0;
gdjs.sala5Code.GDestrella4Objects2.length = 0;
gdjs.sala5Code.GDestrella4Objects3.length = 0;
gdjs.sala5Code.GDestrella4Objects4.length = 0;
gdjs.sala5Code.GDestrella4Objects5.length = 0;
gdjs.sala5Code.GDestrella5Objects1.length = 0;
gdjs.sala5Code.GDestrella5Objects2.length = 0;
gdjs.sala5Code.GDestrella5Objects3.length = 0;
gdjs.sala5Code.GDestrella5Objects4.length = 0;
gdjs.sala5Code.GDestrella5Objects5.length = 0;
gdjs.sala5Code.GDpersonajeObjects1.length = 0;
gdjs.sala5Code.GDpersonajeObjects2.length = 0;
gdjs.sala5Code.GDpersonajeObjects3.length = 0;
gdjs.sala5Code.GDpersonajeObjects4.length = 0;
gdjs.sala5Code.GDpersonajeObjects5.length = 0;
gdjs.sala5Code.GDcargaObjects1.length = 0;
gdjs.sala5Code.GDcargaObjects2.length = 0;
gdjs.sala5Code.GDcargaObjects3.length = 0;
gdjs.sala5Code.GDcargaObjects4.length = 0;
gdjs.sala5Code.GDcargaObjects5.length = 0;
gdjs.sala5Code.GDizquierdaObjects1.length = 0;
gdjs.sala5Code.GDizquierdaObjects2.length = 0;
gdjs.sala5Code.GDizquierdaObjects3.length = 0;
gdjs.sala5Code.GDizquierdaObjects4.length = 0;
gdjs.sala5Code.GDizquierdaObjects5.length = 0;
gdjs.sala5Code.GDderechaObjects1.length = 0;
gdjs.sala5Code.GDderechaObjects2.length = 0;
gdjs.sala5Code.GDderechaObjects3.length = 0;
gdjs.sala5Code.GDderechaObjects4.length = 0;
gdjs.sala5Code.GDderechaObjects5.length = 0;
gdjs.sala5Code.GDpuzzleObjects1.length = 0;
gdjs.sala5Code.GDpuzzleObjects2.length = 0;
gdjs.sala5Code.GDpuzzleObjects3.length = 0;
gdjs.sala5Code.GDpuzzleObjects4.length = 0;
gdjs.sala5Code.GDpuzzleObjects5.length = 0;
gdjs.sala5Code.GDpuzzleCObjects1.length = 0;
gdjs.sala5Code.GDpuzzleCObjects2.length = 0;
gdjs.sala5Code.GDpuzzleCObjects3.length = 0;
gdjs.sala5Code.GDpuzzleCObjects4.length = 0;
gdjs.sala5Code.GDpuzzleCObjects5.length = 0;
gdjs.sala5Code.GDcomienzopuzzleObjects1.length = 0;
gdjs.sala5Code.GDcomienzopuzzleObjects2.length = 0;
gdjs.sala5Code.GDcomienzopuzzleObjects3.length = 0;
gdjs.sala5Code.GDcomienzopuzzleObjects4.length = 0;
gdjs.sala5Code.GDcomienzopuzzleObjects5.length = 0;
gdjs.sala5Code.GDpisoObjects1.length = 0;
gdjs.sala5Code.GDpisoObjects2.length = 0;
gdjs.sala5Code.GDpisoObjects3.length = 0;
gdjs.sala5Code.GDpisoObjects4.length = 0;
gdjs.sala5Code.GDpisoObjects5.length = 0;
gdjs.sala5Code.GDtechoObjects1.length = 0;
gdjs.sala5Code.GDtechoObjects2.length = 0;
gdjs.sala5Code.GDtechoObjects3.length = 0;
gdjs.sala5Code.GDtechoObjects4.length = 0;
gdjs.sala5Code.GDtechoObjects5.length = 0;
gdjs.sala5Code.GDpuertaizquierdaObjects1.length = 0;
gdjs.sala5Code.GDpuertaizquierdaObjects2.length = 0;
gdjs.sala5Code.GDpuertaizquierdaObjects3.length = 0;
gdjs.sala5Code.GDpuertaizquierdaObjects4.length = 0;
gdjs.sala5Code.GDpuertaizquierdaObjects5.length = 0;
gdjs.sala5Code.GDpuertaderechaObjects1.length = 0;
gdjs.sala5Code.GDpuertaderechaObjects2.length = 0;
gdjs.sala5Code.GDpuertaderechaObjects3.length = 0;
gdjs.sala5Code.GDpuertaderechaObjects4.length = 0;
gdjs.sala5Code.GDpuertaderechaObjects5.length = 0;
gdjs.sala5Code.GDperdisteObjects1.length = 0;
gdjs.sala5Code.GDperdisteObjects2.length = 0;
gdjs.sala5Code.GDperdisteObjects3.length = 0;
gdjs.sala5Code.GDperdisteObjects4.length = 0;
gdjs.sala5Code.GDperdisteObjects5.length = 0;


return;

}

gdjs['sala5Code'] = gdjs.sala5Code;
