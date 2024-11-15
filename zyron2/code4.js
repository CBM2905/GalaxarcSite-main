gdjs.sala6Code = {};
gdjs.sala6Code.localVariables = [];
gdjs.sala6Code.forEachIndex3 = 0;

gdjs.sala6Code.forEachObjects3 = [];

gdjs.sala6Code.forEachTemporary3 = null;

gdjs.sala6Code.forEachTotalCount3 = 0;

gdjs.sala6Code.GDsala1Objects1= [];
gdjs.sala6Code.GDsala1Objects2= [];
gdjs.sala6Code.GDsala1Objects3= [];
gdjs.sala6Code.GDsala1Objects4= [];
gdjs.sala6Code.GDsala1Objects5= [];
gdjs.sala6Code.GDfondopuzzleObjects1= [];
gdjs.sala6Code.GDfondopuzzleObjects2= [];
gdjs.sala6Code.GDfondopuzzleObjects3= [];
gdjs.sala6Code.GDfondopuzzleObjects4= [];
gdjs.sala6Code.GDfondopuzzleObjects5= [];
gdjs.sala6Code.GDletraObjects1= [];
gdjs.sala6Code.GDletraObjects2= [];
gdjs.sala6Code.GDletraObjects3= [];
gdjs.sala6Code.GDletraObjects4= [];
gdjs.sala6Code.GDletraObjects5= [];
gdjs.sala6Code.GDletra2Objects1= [];
gdjs.sala6Code.GDletra2Objects2= [];
gdjs.sala6Code.GDletra2Objects3= [];
gdjs.sala6Code.GDletra2Objects4= [];
gdjs.sala6Code.GDletra2Objects5= [];
gdjs.sala6Code.GDletra3Objects1= [];
gdjs.sala6Code.GDletra3Objects2= [];
gdjs.sala6Code.GDletra3Objects3= [];
gdjs.sala6Code.GDletra3Objects4= [];
gdjs.sala6Code.GDletra3Objects5= [];
gdjs.sala6Code.GDletra4Objects1= [];
gdjs.sala6Code.GDletra4Objects2= [];
gdjs.sala6Code.GDletra4Objects3= [];
gdjs.sala6Code.GDletra4Objects4= [];
gdjs.sala6Code.GDletra4Objects5= [];
gdjs.sala6Code.GDletra5Objects1= [];
gdjs.sala6Code.GDletra5Objects2= [];
gdjs.sala6Code.GDletra5Objects3= [];
gdjs.sala6Code.GDletra5Objects4= [];
gdjs.sala6Code.GDletra5Objects5= [];
gdjs.sala6Code.GDpersonajeObjects1= [];
gdjs.sala6Code.GDpersonajeObjects2= [];
gdjs.sala6Code.GDpersonajeObjects3= [];
gdjs.sala6Code.GDpersonajeObjects4= [];
gdjs.sala6Code.GDpersonajeObjects5= [];
gdjs.sala6Code.GDcargaObjects1= [];
gdjs.sala6Code.GDcargaObjects2= [];
gdjs.sala6Code.GDcargaObjects3= [];
gdjs.sala6Code.GDcargaObjects4= [];
gdjs.sala6Code.GDcargaObjects5= [];
gdjs.sala6Code.GDizquierdaObjects1= [];
gdjs.sala6Code.GDizquierdaObjects2= [];
gdjs.sala6Code.GDizquierdaObjects3= [];
gdjs.sala6Code.GDizquierdaObjects4= [];
gdjs.sala6Code.GDizquierdaObjects5= [];
gdjs.sala6Code.GDderechaObjects1= [];
gdjs.sala6Code.GDderechaObjects2= [];
gdjs.sala6Code.GDderechaObjects3= [];
gdjs.sala6Code.GDderechaObjects4= [];
gdjs.sala6Code.GDderechaObjects5= [];
gdjs.sala6Code.GDpuzzleObjects1= [];
gdjs.sala6Code.GDpuzzleObjects2= [];
gdjs.sala6Code.GDpuzzleObjects3= [];
gdjs.sala6Code.GDpuzzleObjects4= [];
gdjs.sala6Code.GDpuzzleObjects5= [];
gdjs.sala6Code.GDpuzzleCObjects1= [];
gdjs.sala6Code.GDpuzzleCObjects2= [];
gdjs.sala6Code.GDpuzzleCObjects3= [];
gdjs.sala6Code.GDpuzzleCObjects4= [];
gdjs.sala6Code.GDpuzzleCObjects5= [];
gdjs.sala6Code.GDcomienzopuzzleObjects1= [];
gdjs.sala6Code.GDcomienzopuzzleObjects2= [];
gdjs.sala6Code.GDcomienzopuzzleObjects3= [];
gdjs.sala6Code.GDcomienzopuzzleObjects4= [];
gdjs.sala6Code.GDcomienzopuzzleObjects5= [];
gdjs.sala6Code.GDpisoObjects1= [];
gdjs.sala6Code.GDpisoObjects2= [];
gdjs.sala6Code.GDpisoObjects3= [];
gdjs.sala6Code.GDpisoObjects4= [];
gdjs.sala6Code.GDpisoObjects5= [];
gdjs.sala6Code.GDtechoObjects1= [];
gdjs.sala6Code.GDtechoObjects2= [];
gdjs.sala6Code.GDtechoObjects3= [];
gdjs.sala6Code.GDtechoObjects4= [];
gdjs.sala6Code.GDtechoObjects5= [];
gdjs.sala6Code.GDpuertaizquierdaObjects1= [];
gdjs.sala6Code.GDpuertaizquierdaObjects2= [];
gdjs.sala6Code.GDpuertaizquierdaObjects3= [];
gdjs.sala6Code.GDpuertaizquierdaObjects4= [];
gdjs.sala6Code.GDpuertaizquierdaObjects5= [];
gdjs.sala6Code.GDpuertaderechaObjects1= [];
gdjs.sala6Code.GDpuertaderechaObjects2= [];
gdjs.sala6Code.GDpuertaderechaObjects3= [];
gdjs.sala6Code.GDpuertaderechaObjects4= [];
gdjs.sala6Code.GDpuertaderechaObjects5= [];
gdjs.sala6Code.GDperdisteObjects1= [];
gdjs.sala6Code.GDperdisteObjects2= [];
gdjs.sala6Code.GDperdisteObjects3= [];
gdjs.sala6Code.GDperdisteObjects4= [];
gdjs.sala6Code.GDperdisteObjects5= [];


gdjs.sala6Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.sala6Code.GDpersonajeObjects1, gdjs.sala6Code.GDpersonajeObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sala6Code.GDpersonajeObjects2.length;i<l;++i) {
    if ( gdjs.sala6Code.GDpersonajeObjects2[i].getBehavior("TopDownMovement").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.sala6Code.GDpersonajeObjects2[k] = gdjs.sala6Code.GDpersonajeObjects2[i];
        ++k;
    }
}
gdjs.sala6Code.GDpersonajeObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.sala6Code.GDpersonajeObjects2 */
{for(var i = 0, len = gdjs.sala6Code.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala6Code.GDpersonajeObjects2[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

/* Reuse gdjs.sala6Code.GDpersonajeObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sala6Code.GDpersonajeObjects1.length;i<l;++i) {
    if ( gdjs.sala6Code.GDpersonajeObjects1[i].getBehavior("TopDownMovement").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.sala6Code.GDpersonajeObjects1[k] = gdjs.sala6Code.GDpersonajeObjects1[i];
        ++k;
    }
}
gdjs.sala6Code.GDpersonajeObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.sala6Code.GDpersonajeObjects1 */
{for(var i = 0, len = gdjs.sala6Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala6Code.GDpersonajeObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


};gdjs.sala6Code.asyncCallback17695492 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("personaje"), gdjs.sala6Code.GDpersonajeObjects2);

{for(var i = 0, len = gdjs.sala6Code.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala6Code.GDpersonajeObjects2[i].getBehavior("TopDownMovement").ignoreDefaultControls(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(false);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
for (const obj of gdjs.sala6Code.GDpersonajeObjects1) asyncObjectsList.addObject("personaje", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.sala6Code.asyncCallback17695492(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback17886916 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("personaje"), gdjs.sala6Code.GDpersonajeObjects2);

{for(var i = 0, len = gdjs.sala6Code.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala6Code.GDpersonajeObjects2[i].getBehavior("TopDownMovement").ignoreDefaultControls(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setBoolean(false);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
for (const obj of gdjs.sala6Code.GDpersonajeObjects1) asyncObjectsList.addObject("personaje", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.sala6Code.asyncCallback17886916(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala6Code.GDpersonajeObjects2});
gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpuertaizquierdaObjects2Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala6Code.GDpuertaizquierdaObjects2});
gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpuertaizquierdaObjects2Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala6Code.GDpuertaizquierdaObjects2});
gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala6Code.GDpersonajeObjects2});
gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpuertaderechaObjects2Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala6Code.GDpuertaderechaObjects2});
gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpuertaderechaObjects2Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala6Code.GDpuertaderechaObjects2});
gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala6Code.GDpersonajeObjects2});
gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpisoObjects2Objects = Hashtable.newFrom({"piso": gdjs.sala6Code.GDpisoObjects2});
gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpisoObjects2Objects = Hashtable.newFrom({"piso": gdjs.sala6Code.GDpisoObjects2});
gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpersonajeObjects1Objects = Hashtable.newFrom({"personaje": gdjs.sala6Code.GDpersonajeObjects1});
gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDtechoObjects1Objects = Hashtable.newFrom({"techo": gdjs.sala6Code.GDtechoObjects1});
gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDtechoObjects1Objects = Hashtable.newFrom({"techo": gdjs.sala6Code.GDtechoObjects1});
gdjs.sala6Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala6Code.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("puertaizquierda"), gdjs.sala6Code.GDpuertaizquierdaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpersonajeObjects2Objects, gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpuertaizquierdaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.sala6Code.GDpersonajeObjects2 */
/* Reuse gdjs.sala6Code.GDpuertaizquierdaObjects2 */
{for(var i = 0, len = gdjs.sala6Code.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala6Code.GDpersonajeObjects2[i].separateFromObjectsList(gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpuertaizquierdaObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala6Code.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("puertaderecha"), gdjs.sala6Code.GDpuertaderechaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpersonajeObjects2Objects, gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpuertaderechaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.sala6Code.GDpersonajeObjects2 */
/* Reuse gdjs.sala6Code.GDpuertaderechaObjects2 */
{for(var i = 0, len = gdjs.sala6Code.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala6Code.GDpersonajeObjects2[i].separateFromObjectsList(gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpuertaderechaObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala6Code.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("piso"), gdjs.sala6Code.GDpisoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpersonajeObjects2Objects, gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpisoObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.sala6Code.GDpersonajeObjects2 */
/* Reuse gdjs.sala6Code.GDpisoObjects2 */
{for(var i = 0, len = gdjs.sala6Code.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala6Code.GDpersonajeObjects2[i].separateFromObjectsList(gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpisoObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala6Code.GDpersonajeObjects1);
gdjs.copyArray(runtimeScene.getObjects("techo"), gdjs.sala6Code.GDtechoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpersonajeObjects1Objects, gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDtechoObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.sala6Code.GDpersonajeObjects1 */
/* Reuse gdjs.sala6Code.GDtechoObjects1 */
{for(var i = 0, len = gdjs.sala6Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala6Code.GDpersonajeObjects1[i].separateFromObjectsList(gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDtechoObjects1Objects, false);
}
}}

}


};gdjs.sala6Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.doesSceneExist(runtimeScene, "sala1");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("derecha"), gdjs.sala6Code.GDderechaObjects2);
gdjs.copyArray(runtimeScene.getObjects("izquierda"), gdjs.sala6Code.GDizquierdaObjects2);
gdjs.copyArray(runtimeScene.getObjects("puzzle"), gdjs.sala6Code.GDpuzzleObjects2);
{for(var i = 0, len = gdjs.sala6Code.GDizquierdaObjects2.length ;i < len;++i) {
    gdjs.sala6Code.GDizquierdaObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.sala6Code.GDderechaObjects2.length ;i < len;++i) {
    gdjs.sala6Code.GDderechaObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.sala6Code.GDpuzzleObjects2.length ;i < len;++i) {
    gdjs.sala6Code.GDpuzzleObjects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala6Code.GDcargaObjects1);
gdjs.copyArray(runtimeScene.getObjects("comienzopuzzle"), gdjs.sala6Code.GDcomienzopuzzleObjects1);
gdjs.copyArray(runtimeScene.getObjects("derecha"), gdjs.sala6Code.GDderechaObjects1);
gdjs.copyArray(runtimeScene.getObjects("izquierda"), gdjs.sala6Code.GDizquierdaObjects1);
gdjs.copyArray(runtimeScene.getObjects("letra"), gdjs.sala6Code.GDletraObjects1);
gdjs.copyArray(runtimeScene.getObjects("letra2"), gdjs.sala6Code.GDletra2Objects1);
gdjs.copyArray(runtimeScene.getObjects("letra3"), gdjs.sala6Code.GDletra3Objects1);
gdjs.copyArray(runtimeScene.getObjects("letra4"), gdjs.sala6Code.GDletra4Objects1);
gdjs.copyArray(runtimeScene.getObjects("letra5"), gdjs.sala6Code.GDletra5Objects1);
gdjs.copyArray(runtimeScene.getObjects("perdiste"), gdjs.sala6Code.GDperdisteObjects1);
gdjs.copyArray(runtimeScene.getObjects("puzzle"), gdjs.sala6Code.GDpuzzleObjects1);
{for(var i = 0, len = gdjs.sala6Code.GDcargaObjects1.length ;i < len;++i) {
    gdjs.sala6Code.GDcargaObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.sala6Code.GDizquierdaObjects1.length ;i < len;++i) {
    gdjs.sala6Code.GDizquierdaObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala6Code.GDderechaObjects1.length ;i < len;++i) {
    gdjs.sala6Code.GDderechaObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala6Code.GDpuzzleObjects1.length ;i < len;++i) {
    gdjs.sala6Code.GDpuzzleObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala6Code.GDletraObjects1.length ;i < len;++i) {
    gdjs.sala6Code.GDletraObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala6Code.GDletra2Objects1.length ;i < len;++i) {
    gdjs.sala6Code.GDletra2Objects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala6Code.GDletra3Objects1.length ;i < len;++i) {
    gdjs.sala6Code.GDletra3Objects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala6Code.GDletra4Objects1.length ;i < len;++i) {
    gdjs.sala6Code.GDletra4Objects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala6Code.GDletra5Objects1.length ;i < len;++i) {
    gdjs.sala6Code.GDletra5Objects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala6Code.GDcomienzopuzzleObjects1.length ;i < len;++i) {
    gdjs.sala6Code.GDcomienzopuzzleObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala6Code.GDperdisteObjects1.length ;i < len;++i) {
    gdjs.sala6Code.GDperdisteObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(21);
}}

}


};gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala6Code.GDpersonajeObjects2});
gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpuertaizquierdaObjects2Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala6Code.GDpuertaizquierdaObjects2});
gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala6Code.GDpersonajeObjects3});
gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala6Code.GDpuertaizquierdaObjects3});
gdjs.sala6Code.asyncCallback21067916 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala1D", false);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala6Code.asyncCallback21067916(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala6Code.GDpersonajeObjects2});
gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpuertaizquierdaObjects2Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala6Code.GDpuertaizquierdaObjects2});
gdjs.sala6Code.asyncCallback21072084 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala2D", false);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala6Code.asyncCallback21072084(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.sala6Code.GDpersonajeObjects2, gdjs.sala6Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala6Code.GDpuertaizquierdaObjects2, gdjs.sala6Code.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpersonajeObjects3Objects, gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala6Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala6Code.GDizquierdaObjects2, gdjs.sala6Code.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala6Code.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala6Code.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala6Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala6Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala6Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.sala6Code.GDpersonajeObjects2 */
/* Reuse gdjs.sala6Code.GDpuertaizquierdaObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpersonajeObjects2Objects, gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpuertaizquierdaObjects2Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala6Code.GDcargaObjects2);
/* Reuse gdjs.sala6Code.GDizquierdaObjects2 */
{for(var i = 0, len = gdjs.sala6Code.GDizquierdaObjects2.length ;i < len;++i) {
    gdjs.sala6Code.GDizquierdaObjects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala6Code.GDcargaObjects2.length ;i < len;++i) {
    gdjs.sala6Code.GDcargaObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala6Code.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala6Code.GDpersonajeObjects2});
gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpuertaderechaObjects2Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala6Code.GDpuertaderechaObjects2});
gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala6Code.GDpersonajeObjects3});
gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala6Code.GDpuertaderechaObjects3});
gdjs.sala6Code.asyncCallback21077524 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala1", false);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala6Code.asyncCallback21077524(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala6Code.GDpersonajeObjects2});
gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpuertaderechaObjects2Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala6Code.GDpuertaderechaObjects2});
gdjs.sala6Code.asyncCallback21069860 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala6", false);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala6Code.asyncCallback21069860(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.sala6Code.GDpersonajeObjects2, gdjs.sala6Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala6Code.GDpuertaderechaObjects2, gdjs.sala6Code.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpersonajeObjects3Objects, gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala6Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala6Code.GDderechaObjects2, gdjs.sala6Code.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala6Code.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala6Code.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala6Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala6Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala6Code.eventsList8(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.sala6Code.GDpersonajeObjects2 */
/* Reuse gdjs.sala6Code.GDpuertaderechaObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpersonajeObjects2Objects, gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpuertaderechaObjects2Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala6Code.GDcargaObjects2);
/* Reuse gdjs.sala6Code.GDderechaObjects2 */
{for(var i = 0, len = gdjs.sala6Code.GDderechaObjects2.length ;i < len;++i) {
    gdjs.sala6Code.GDderechaObjects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala6Code.GDcargaObjects2.length ;i < len;++i) {
    gdjs.sala6Code.GDcargaObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala6Code.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpersonajeObjects1Objects = Hashtable.newFrom({"personaje": gdjs.sala6Code.GDpersonajeObjects1});
gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpuzzleCObjects1Objects = Hashtable.newFrom({"puzzleC": gdjs.sala6Code.GDpuzzleCObjects1});
gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpersonajeObjects1Objects = Hashtable.newFrom({"personaje": gdjs.sala6Code.GDpersonajeObjects1});
gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpuzzleCObjects1Objects = Hashtable.newFrom({"puzzleC": gdjs.sala6Code.GDpuzzleCObjects1});
gdjs.sala6Code.asyncCallback15287244 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList11 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.sala6Code.asyncCallback15287244(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20792900 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("comienzopuzzle"), gdjs.sala6Code.GDcomienzopuzzleObjects2);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "puzzle");
}{for(var i = 0, len = gdjs.sala6Code.GDcomienzopuzzleObjects2.length ;i < len;++i) {
    gdjs.sala6Code.GDcomienzopuzzleObjects2[i].getBehavior("Animation").resumeAnimation();
}
}
{ //Subevents
gdjs.sala6Code.eventsList11(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList12 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.sala6Code.asyncCallback20792900(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.eventsList13 = function(runtimeScene) {

{

/* Reuse gdjs.sala6Code.GDpersonajeObjects1 */
/* Reuse gdjs.sala6Code.GDpuzzleObjects1 */
/* Reuse gdjs.sala6Code.GDpuzzleCObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpersonajeObjects1Objects, gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpuzzleCObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala6Code.GDpuzzleObjects1.length;i<l;++i) {
    if ( gdjs.sala6Code.GDpuzzleObjects1[i].isVisible() ) {
        isConditionTrue_1 = true;
        gdjs.sala6Code.GDpuzzleObjects1[k] = gdjs.sala6Code.GDpuzzleObjects1[i];
        ++k;
    }
}
gdjs.sala6Code.GDpuzzleObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "");
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala6Code.GDcargaObjects1);
/* Reuse gdjs.sala6Code.GDpersonajeObjects1 */
/* Reuse gdjs.sala6Code.GDpuzzleObjects1 */
{for(var i = 0, len = gdjs.sala6Code.GDpuzzleObjects1.length ;i < len;++i) {
    gdjs.sala6Code.GDpuzzleObjects1[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala6Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala6Code.GDpersonajeObjects1[i].getBehavior("TopDownMovement").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.sala6Code.GDcargaObjects1.length ;i < len;++i) {
    gdjs.sala6Code.GDcargaObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 4, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala6Code.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.sala6Code.eventsList14 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala6Code.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("puertaizquierda"), gdjs.sala6Code.GDpuertaizquierdaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpersonajeObjects2Objects, gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpuertaizquierdaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("izquierda"), gdjs.sala6Code.GDizquierdaObjects2);
{for(var i = 0, len = gdjs.sala6Code.GDizquierdaObjects2.length ;i < len;++i) {
    gdjs.sala6Code.GDizquierdaObjects2[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.random(2));
}
{ //Subevents
gdjs.sala6Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala6Code.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("puertaderecha"), gdjs.sala6Code.GDpuertaderechaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpersonajeObjects2Objects, gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpuertaderechaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("derecha"), gdjs.sala6Code.GDderechaObjects2);
{for(var i = 0, len = gdjs.sala6Code.GDderechaObjects2.length ;i < len;++i) {
    gdjs.sala6Code.GDderechaObjects2[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.random(2));
}
{ //Subevents
gdjs.sala6Code.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala6Code.GDpersonajeObjects1);
gdjs.copyArray(runtimeScene.getObjects("puzzleC"), gdjs.sala6Code.GDpuzzleCObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpersonajeObjects1Objects, gdjs.sala6Code.mapOfGDgdjs_9546sala6Code_9546GDpuzzleCObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), false, false);
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("puzzle"), gdjs.sala6Code.GDpuzzleObjects1);
{for(var i = 0, len = gdjs.sala6Code.GDpuzzleObjects1.length ;i < len;++i) {
    gdjs.sala6Code.GDpuzzleObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.sala6Code.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.sala6Code.asyncCallback21075028 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList15 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback21075028(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20808140 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList16 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20808140(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20826084 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList17 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20826084(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20837876 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList18 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20837876(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20833492 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList19 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20833492(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20806892 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList20 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20806892(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback21060292 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList21 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback21060292(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback21070628 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList22 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback21070628(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20816412 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList23 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20816412(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback15287772 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList24 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback15287772(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20850692 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList25 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20850692(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20803092 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList26 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20803092(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20855452 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList27 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20855452(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20821644 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList28 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20821644(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback21074676 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList29 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback21074676(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20866396 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList30 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20866396(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20891316 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList31 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20891316(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20796588 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList32 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20796588(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20812244 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList33 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20812244(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20814260 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList34 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20814260(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback21057196 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList35 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback21057196(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20857596 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList36 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20857596(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20905804 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList37 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20905804(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20947620 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList38 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20947620(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20866164 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList39 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20866164(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20920116 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList40 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20920116(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.eventsList41 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletraObjects3, gdjs.sala6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletraObjects4[i].setAnimationFrame(0);
}
}
{ //Subevents
gdjs.sala6Code.eventsList15(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "b");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletraObjects3, gdjs.sala6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletraObjects4[i].setAnimationFrame(1);
}
}
{ //Subevents
gdjs.sala6Code.eventsList16(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "c");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletraObjects3, gdjs.sala6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletraObjects4[i].setAnimationFrame(2);
}
}
{ //Subevents
gdjs.sala6Code.eventsList17(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletraObjects3, gdjs.sala6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletraObjects4[i].setAnimationFrame(3);
}
}
{ //Subevents
gdjs.sala6Code.eventsList18(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "e");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletraObjects3, gdjs.sala6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletraObjects4[i].setAnimationFrame(4);
}
}
{ //Subevents
gdjs.sala6Code.eventsList19(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "f");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletraObjects3, gdjs.sala6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletraObjects4[i].setAnimationFrame(5);
}
}
{ //Subevents
gdjs.sala6Code.eventsList20(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "g");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletraObjects3, gdjs.sala6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletraObjects4[i].setAnimationFrame(6);
}
}
{ //Subevents
gdjs.sala6Code.eventsList21(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "h");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletraObjects3, gdjs.sala6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletraObjects4[i].setAnimationFrame(7);
}
}
{ //Subevents
gdjs.sala6Code.eventsList22(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "i");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletraObjects3, gdjs.sala6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletraObjects4[i].setAnimationFrame(8);
}
}
{ //Subevents
gdjs.sala6Code.eventsList23(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "j");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletraObjects3, gdjs.sala6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletraObjects4[i].setAnimationFrame(9);
}
}
{ //Subevents
gdjs.sala6Code.eventsList24(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "k");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletraObjects3, gdjs.sala6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletraObjects4[i].setAnimationFrame(10);
}
}
{ //Subevents
gdjs.sala6Code.eventsList25(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "l");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletraObjects3, gdjs.sala6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletraObjects4[i].setAnimationFrame(11);
}
}
{ //Subevents
gdjs.sala6Code.eventsList26(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "m");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletraObjects3, gdjs.sala6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletraObjects4[i].setAnimationFrame(12);
}
}
{ //Subevents
gdjs.sala6Code.eventsList27(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "n");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletraObjects3, gdjs.sala6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletraObjects4[i].setAnimationFrame(13);
}
}
{ //Subevents
gdjs.sala6Code.eventsList28(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "o");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletraObjects3, gdjs.sala6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletraObjects4[i].setAnimationFrame(14);
}
}
{ //Subevents
gdjs.sala6Code.eventsList29(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "p");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletraObjects3, gdjs.sala6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletraObjects4[i].setAnimationFrame(15);
}
}
{ //Subevents
gdjs.sala6Code.eventsList30(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "q");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletraObjects3, gdjs.sala6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletraObjects4[i].setAnimationFrame(16);
}
}
{ //Subevents
gdjs.sala6Code.eventsList31(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "r");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletraObjects3, gdjs.sala6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletraObjects4[i].setAnimationFrame(17);
}
}
{ //Subevents
gdjs.sala6Code.eventsList32(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletraObjects3, gdjs.sala6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletraObjects4[i].setAnimationFrame(18);
}
}
{ //Subevents
gdjs.sala6Code.eventsList33(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "t");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletraObjects3, gdjs.sala6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletraObjects4[i].setAnimationFrame(19);
}
}
{ //Subevents
gdjs.sala6Code.eventsList34(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "u");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletraObjects3, gdjs.sala6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletraObjects4[i].setAnimationFrame(20);
}
}
{ //Subevents
gdjs.sala6Code.eventsList35(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "v");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletraObjects3, gdjs.sala6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletraObjects4[i].setAnimationFrame(21);
}
}
{ //Subevents
gdjs.sala6Code.eventsList36(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletraObjects3, gdjs.sala6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletraObjects4[i].setAnimationFrame(22);
}
}
{ //Subevents
gdjs.sala6Code.eventsList37(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "x");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletraObjects3, gdjs.sala6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletraObjects4[i].setAnimationFrame(23);
}
}
{ //Subevents
gdjs.sala6Code.eventsList38(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "y");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletraObjects3, gdjs.sala6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletraObjects4[i].setAnimationFrame(24);
}
}
{ //Subevents
gdjs.sala6Code.eventsList39(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletraObjects3, gdjs.sala6Code.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6Code.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletraObjects4[i].setAnimationFrame(25);
}
}
{ //Subevents
gdjs.sala6Code.eventsList40(runtimeScene);} //End of subevents
}

}


};gdjs.sala6Code.asyncCallback20933972 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList42 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20933972(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback21067132 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList43 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback21067132(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback21076660 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList44 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback21076660(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback21076452 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList45 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback21076452(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20825468 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList46 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20825468(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback21078324 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList47 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback21078324(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20880412 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList48 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20880412(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20893652 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList49 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20893652(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20908564 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList50 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20908564(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20908724 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList51 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20908724(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20936516 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList52 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20936516(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20949796 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList53 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20949796(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback21033156 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList54 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback21033156(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback15199404 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList55 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback15199404(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback15200044 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList56 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback15200044(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback15213740 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList57 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback15213740(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback15210068 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList58 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback15210068(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20709100 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList59 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20709100(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20710244 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList60 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20710244(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20952284 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList61 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20952284(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20953236 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList62 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20953236(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20870804 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList63 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20870804(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20871852 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList64 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20871852(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20872884 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList65 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20872884(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20873916 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList66 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20873916(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback21043684 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList67 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback21043684(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.eventsList68 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra2Objects3, gdjs.sala6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra2Objects4[i].setAnimationFrame(0);
}
}
{ //Subevents
gdjs.sala6Code.eventsList42(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "b");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra2Objects3, gdjs.sala6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra2Objects4[i].setAnimationFrame(1);
}
}
{ //Subevents
gdjs.sala6Code.eventsList43(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "c");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra2Objects3, gdjs.sala6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra2Objects4[i].setAnimationFrame(2);
}
}
{ //Subevents
gdjs.sala6Code.eventsList44(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra2Objects3, gdjs.sala6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra2Objects4[i].setAnimationFrame(3);
}
}
{ //Subevents
gdjs.sala6Code.eventsList45(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "e");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra2Objects3, gdjs.sala6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra2Objects4[i].setAnimationFrame(4);
}
}
{ //Subevents
gdjs.sala6Code.eventsList46(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "f");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra2Objects3, gdjs.sala6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra2Objects4[i].setAnimationFrame(5);
}
}
{ //Subevents
gdjs.sala6Code.eventsList47(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "g");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra2Objects3, gdjs.sala6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra2Objects4[i].setAnimationFrame(6);
}
}
{ //Subevents
gdjs.sala6Code.eventsList48(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "h");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra2Objects3, gdjs.sala6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra2Objects4[i].setAnimationFrame(7);
}
}
{ //Subevents
gdjs.sala6Code.eventsList49(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "i");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra2Objects3, gdjs.sala6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra2Objects4[i].setAnimationFrame(8);
}
}
{ //Subevents
gdjs.sala6Code.eventsList50(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "j");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra2Objects3, gdjs.sala6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra2Objects4[i].setAnimationFrame(9);
}
}
{ //Subevents
gdjs.sala6Code.eventsList51(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "k");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra2Objects3, gdjs.sala6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra2Objects4[i].setAnimationFrame(10);
}
}
{ //Subevents
gdjs.sala6Code.eventsList52(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "l");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra2Objects3, gdjs.sala6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra2Objects4[i].setAnimationFrame(11);
}
}
{ //Subevents
gdjs.sala6Code.eventsList53(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "m");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra2Objects3, gdjs.sala6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra2Objects4[i].setAnimationFrame(12);
}
}
{ //Subevents
gdjs.sala6Code.eventsList54(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "n");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra2Objects3, gdjs.sala6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra2Objects4[i].setAnimationFrame(13);
}
}
{ //Subevents
gdjs.sala6Code.eventsList55(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "o");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra2Objects3, gdjs.sala6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra2Objects4[i].setAnimationFrame(14);
}
}
{ //Subevents
gdjs.sala6Code.eventsList56(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "p");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra2Objects3, gdjs.sala6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra2Objects4[i].setAnimationFrame(15);
}
}
{ //Subevents
gdjs.sala6Code.eventsList57(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "q");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra2Objects3, gdjs.sala6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra2Objects4[i].setAnimationFrame(16);
}
}
{ //Subevents
gdjs.sala6Code.eventsList58(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "r");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra2Objects3, gdjs.sala6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra2Objects4[i].setAnimationFrame(17);
}
}
{ //Subevents
gdjs.sala6Code.eventsList59(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra2Objects3, gdjs.sala6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra2Objects4[i].setAnimationFrame(18);
}
}
{ //Subevents
gdjs.sala6Code.eventsList60(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "t");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra2Objects3, gdjs.sala6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra2Objects4[i].setAnimationFrame(19);
}
}
{ //Subevents
gdjs.sala6Code.eventsList61(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "u");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra2Objects3, gdjs.sala6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra2Objects4[i].setAnimationFrame(20);
}
}
{ //Subevents
gdjs.sala6Code.eventsList62(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "v");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra2Objects3, gdjs.sala6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra2Objects4[i].setAnimationFrame(21);
}
}
{ //Subevents
gdjs.sala6Code.eventsList63(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra2Objects3, gdjs.sala6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra2Objects4[i].setAnimationFrame(22);
}
}
{ //Subevents
gdjs.sala6Code.eventsList64(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "x");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra2Objects3, gdjs.sala6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra2Objects4[i].setAnimationFrame(23);
}
}
{ //Subevents
gdjs.sala6Code.eventsList65(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "y");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra2Objects3, gdjs.sala6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra2Objects4[i].setAnimationFrame(24);
}
}
{ //Subevents
gdjs.sala6Code.eventsList66(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra2Objects3, gdjs.sala6Code.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra2Objects4[i].setAnimationFrame(25);
}
}
{ //Subevents
gdjs.sala6Code.eventsList67(runtimeScene);} //End of subevents
}

}


};gdjs.sala6Code.asyncCallback21043252 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList69 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback21043252(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback21045652 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList70 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback21045652(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20882724 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList71 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20882724(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20883892 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList72 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20883892(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20884924 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList73 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20884924(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20885860 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList74 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20885860(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20886908 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList75 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20886908(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20715372 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList76 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20715372(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20716516 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList77 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20716516(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20717596 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList78 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20717596(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20718612 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList79 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20718612(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20719628 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList80 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20719628(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20882884 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList81 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20882884(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20787228 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList82 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20787228(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20788228 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList83 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20788228(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20789228 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList84 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20789228(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20790244 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList85 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20790244(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20791388 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList86 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20791388(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20786508 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList87 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20786508(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20925580 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList88 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20925580(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20926596 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList89 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20926596(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20927612 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList90 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20927612(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20928628 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList91 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20928628(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20929644 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList92 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20929644(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20929180 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList93 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20929180(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20938932 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList94 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20938932(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.eventsList95 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra3Objects3, gdjs.sala6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra3Objects4[i].setAnimationFrame(0);
}
}
{ //Subevents
gdjs.sala6Code.eventsList69(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "b");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra3Objects3, gdjs.sala6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra3Objects4[i].setAnimationFrame(1);
}
}
{ //Subevents
gdjs.sala6Code.eventsList70(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "c");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra3Objects3, gdjs.sala6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra3Objects4[i].setAnimationFrame(2);
}
}
{ //Subevents
gdjs.sala6Code.eventsList71(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra3Objects3, gdjs.sala6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra3Objects4[i].setAnimationFrame(3);
}
}
{ //Subevents
gdjs.sala6Code.eventsList72(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "e");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra3Objects3, gdjs.sala6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra3Objects4[i].setAnimationFrame(4);
}
}
{ //Subevents
gdjs.sala6Code.eventsList73(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "f");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra3Objects3, gdjs.sala6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra3Objects4[i].setAnimationFrame(5);
}
}
{ //Subevents
gdjs.sala6Code.eventsList74(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "g");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra3Objects3, gdjs.sala6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra3Objects4[i].setAnimationFrame(6);
}
}
{ //Subevents
gdjs.sala6Code.eventsList75(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "h");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra3Objects3, gdjs.sala6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra3Objects4[i].setAnimationFrame(7);
}
}
{ //Subevents
gdjs.sala6Code.eventsList76(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "i");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra3Objects3, gdjs.sala6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra3Objects4[i].setAnimationFrame(8);
}
}
{ //Subevents
gdjs.sala6Code.eventsList77(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "j");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra3Objects3, gdjs.sala6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra3Objects4[i].setAnimationFrame(9);
}
}
{ //Subevents
gdjs.sala6Code.eventsList78(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "k");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra3Objects3, gdjs.sala6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra3Objects4[i].setAnimationFrame(10);
}
}
{ //Subevents
gdjs.sala6Code.eventsList79(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "l");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra3Objects3, gdjs.sala6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra3Objects4[i].setAnimationFrame(11);
}
}
{ //Subevents
gdjs.sala6Code.eventsList80(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "m");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra3Objects3, gdjs.sala6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra3Objects4[i].setAnimationFrame(12);
}
}
{ //Subevents
gdjs.sala6Code.eventsList81(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "n");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra3Objects3, gdjs.sala6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra3Objects4[i].setAnimationFrame(13);
}
}
{ //Subevents
gdjs.sala6Code.eventsList82(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "o");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra3Objects3, gdjs.sala6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra3Objects4[i].setAnimationFrame(14);
}
}
{ //Subevents
gdjs.sala6Code.eventsList83(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "p");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra3Objects3, gdjs.sala6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra3Objects4[i].setAnimationFrame(15);
}
}
{ //Subevents
gdjs.sala6Code.eventsList84(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "q");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra3Objects3, gdjs.sala6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra3Objects4[i].setAnimationFrame(16);
}
}
{ //Subevents
gdjs.sala6Code.eventsList85(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "r");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra3Objects3, gdjs.sala6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra3Objects4[i].setAnimationFrame(17);
}
}
{ //Subevents
gdjs.sala6Code.eventsList86(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra3Objects3, gdjs.sala6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra3Objects4[i].setAnimationFrame(18);
}
}
{ //Subevents
gdjs.sala6Code.eventsList87(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "t");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra3Objects3, gdjs.sala6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra3Objects4[i].setAnimationFrame(19);
}
}
{ //Subevents
gdjs.sala6Code.eventsList88(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "u");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra3Objects3, gdjs.sala6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra3Objects4[i].setAnimationFrame(20);
}
}
{ //Subevents
gdjs.sala6Code.eventsList89(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "v");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra3Objects3, gdjs.sala6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra3Objects4[i].setAnimationFrame(21);
}
}
{ //Subevents
gdjs.sala6Code.eventsList90(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra3Objects3, gdjs.sala6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra3Objects4[i].setAnimationFrame(22);
}
}
{ //Subevents
gdjs.sala6Code.eventsList91(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "x");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra3Objects3, gdjs.sala6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra3Objects4[i].setAnimationFrame(23);
}
}
{ //Subevents
gdjs.sala6Code.eventsList92(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "y");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra3Objects3, gdjs.sala6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra3Objects4[i].setAnimationFrame(24);
}
}
{ //Subevents
gdjs.sala6Code.eventsList93(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra3Objects3, gdjs.sala6Code.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra3Objects4[i].setAnimationFrame(25);
}
}
{ //Subevents
gdjs.sala6Code.eventsList94(runtimeScene);} //End of subevents
}

}


};gdjs.sala6Code.asyncCallback20942628 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList96 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20942628(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20943676 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList97 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20943676(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20940444 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList98 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20940444(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20910508 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList99 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20910508(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20911820 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList100 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20911820(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20912948 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList101 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20912948(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20913988 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList102 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20913988(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20915020 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList103 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20915020(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20916052 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList104 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20916052(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20915556 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList105 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20915556(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20895948 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList106 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20895948(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20896964 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList107 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20896964(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20897996 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList108 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20897996(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20899028 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList109 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20899028(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20900060 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList110 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20900060(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20901092 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList111 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20901092(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20901628 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList112 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20901628(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20960276 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList113 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20960276(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20961300 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList114 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20961300(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20962332 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList115 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20962332(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20963364 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList116 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20963364(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20964396 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList117 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20964396(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20965428 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList118 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20965428(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20966460 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList119 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20966460(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20967492 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList120 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20967492(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20968524 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList121 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20968524(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.eventsList122 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra4Objects3, gdjs.sala6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra4Objects4[i].setAnimationFrame(0);
}
}
{ //Subevents
gdjs.sala6Code.eventsList96(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "b");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra4Objects3, gdjs.sala6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra4Objects4[i].setAnimationFrame(1);
}
}
{ //Subevents
gdjs.sala6Code.eventsList97(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "c");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra4Objects3, gdjs.sala6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra4Objects4[i].setAnimationFrame(2);
}
}
{ //Subevents
gdjs.sala6Code.eventsList98(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra4Objects3, gdjs.sala6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra4Objects4[i].setAnimationFrame(3);
}
}
{ //Subevents
gdjs.sala6Code.eventsList99(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "e");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra4Objects3, gdjs.sala6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra4Objects4[i].setAnimationFrame(4);
}
}
{ //Subevents
gdjs.sala6Code.eventsList100(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "f");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra4Objects3, gdjs.sala6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra4Objects4[i].setAnimationFrame(5);
}
}
{ //Subevents
gdjs.sala6Code.eventsList101(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "g");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra4Objects3, gdjs.sala6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra4Objects4[i].setAnimationFrame(6);
}
}
{ //Subevents
gdjs.sala6Code.eventsList102(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "h");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra4Objects3, gdjs.sala6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra4Objects4[i].setAnimationFrame(7);
}
}
{ //Subevents
gdjs.sala6Code.eventsList103(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "i");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra4Objects3, gdjs.sala6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra4Objects4[i].setAnimationFrame(8);
}
}
{ //Subevents
gdjs.sala6Code.eventsList104(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "j");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra4Objects3, gdjs.sala6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra4Objects4[i].setAnimationFrame(9);
}
}
{ //Subevents
gdjs.sala6Code.eventsList105(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "k");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra4Objects3, gdjs.sala6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra4Objects4[i].setAnimationFrame(10);
}
}
{ //Subevents
gdjs.sala6Code.eventsList106(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "l");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra4Objects3, gdjs.sala6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra4Objects4[i].setAnimationFrame(11);
}
}
{ //Subevents
gdjs.sala6Code.eventsList107(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "m");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra4Objects3, gdjs.sala6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra4Objects4[i].setAnimationFrame(12);
}
}
{ //Subevents
gdjs.sala6Code.eventsList108(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "n");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra4Objects3, gdjs.sala6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra4Objects4[i].setAnimationFrame(13);
}
}
{ //Subevents
gdjs.sala6Code.eventsList109(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "o");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra4Objects3, gdjs.sala6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra4Objects4[i].setAnimationFrame(14);
}
}
{ //Subevents
gdjs.sala6Code.eventsList110(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "p");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra4Objects3, gdjs.sala6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra4Objects4[i].setAnimationFrame(15);
}
}
{ //Subevents
gdjs.sala6Code.eventsList111(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "q");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra4Objects3, gdjs.sala6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra4Objects4[i].setAnimationFrame(16);
}
}
{ //Subevents
gdjs.sala6Code.eventsList112(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "r");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra4Objects3, gdjs.sala6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra4Objects4[i].setAnimationFrame(17);
}
}
{ //Subevents
gdjs.sala6Code.eventsList113(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra4Objects3, gdjs.sala6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra4Objects4[i].setAnimationFrame(18);
}
}
{ //Subevents
gdjs.sala6Code.eventsList114(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "t");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra4Objects3, gdjs.sala6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra4Objects4[i].setAnimationFrame(19);
}
}
{ //Subevents
gdjs.sala6Code.eventsList115(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "u");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra4Objects3, gdjs.sala6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra4Objects4[i].setAnimationFrame(20);
}
}
{ //Subevents
gdjs.sala6Code.eventsList116(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "v");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra4Objects3, gdjs.sala6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra4Objects4[i].setAnimationFrame(21);
}
}
{ //Subevents
gdjs.sala6Code.eventsList117(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra4Objects3, gdjs.sala6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra4Objects4[i].setAnimationFrame(22);
}
}
{ //Subevents
gdjs.sala6Code.eventsList118(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "x");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra4Objects3, gdjs.sala6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra4Objects4[i].setAnimationFrame(23);
}
}
{ //Subevents
gdjs.sala6Code.eventsList119(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "y");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra4Objects3, gdjs.sala6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra4Objects4[i].setAnimationFrame(24);
}
}
{ //Subevents
gdjs.sala6Code.eventsList120(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra4Objects3, gdjs.sala6Code.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra4Objects4[i].setAnimationFrame(25);
}
}
{ //Subevents
gdjs.sala6Code.eventsList121(runtimeScene);} //End of subevents
}

}


};gdjs.sala6Code.asyncCallback20971956 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList123 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20971956(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20973004 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList124 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20973004(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20974036 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList125 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20974036(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20975084 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList126 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20975084(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20976116 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList127 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20976116(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20971460 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList128 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20971460(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback20961836 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList129 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback20961836(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback17511620 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList130 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback17511620(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback17512620 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList131 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback17512620(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback17513756 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList132 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback17513756(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback17514756 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList133 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback17514756(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback17515772 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList134 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback17515772(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback17516788 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList135 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback17516788(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback17517804 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList136 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback17517804(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback17518820 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList137 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback17518820(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback17519836 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList138 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback17519836(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback17520852 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList139 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback17520852(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback17521996 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList140 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback17521996(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback17523012 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList141 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback17523012(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback17524028 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList142 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback17524028(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback17525044 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList143 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback17525044(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback17526060 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList144 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback17526060(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback17527076 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList145 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback17527076(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback17528092 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList146 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback17528092(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback17529108 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList147 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback17529108(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback17530124 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList148 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6Code.asyncCallback17530124(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.eventsList149 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra5Objects3, gdjs.sala6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra5Objects4[i].setAnimationFrame(0);
}
}
{ //Subevents
gdjs.sala6Code.eventsList123(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "b");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra5Objects3, gdjs.sala6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra5Objects4[i].setAnimationFrame(1);
}
}
{ //Subevents
gdjs.sala6Code.eventsList124(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "c");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra5Objects3, gdjs.sala6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra5Objects4[i].setAnimationFrame(2);
}
}
{ //Subevents
gdjs.sala6Code.eventsList125(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra5Objects3, gdjs.sala6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra5Objects4[i].setAnimationFrame(3);
}
}
{ //Subevents
gdjs.sala6Code.eventsList126(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "e");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra5Objects3, gdjs.sala6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra5Objects4[i].setAnimationFrame(4);
}
}
{ //Subevents
gdjs.sala6Code.eventsList127(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "f");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra5Objects3, gdjs.sala6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra5Objects4[i].setAnimationFrame(5);
}
}
{ //Subevents
gdjs.sala6Code.eventsList128(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "g");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra5Objects3, gdjs.sala6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra5Objects4[i].setAnimationFrame(6);
}
}
{ //Subevents
gdjs.sala6Code.eventsList129(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "h");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra5Objects3, gdjs.sala6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra5Objects4[i].setAnimationFrame(7);
}
}
{ //Subevents
gdjs.sala6Code.eventsList130(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "i");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra5Objects3, gdjs.sala6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra5Objects4[i].setAnimationFrame(8);
}
}
{ //Subevents
gdjs.sala6Code.eventsList131(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "j");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra5Objects3, gdjs.sala6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra5Objects4[i].setAnimationFrame(9);
}
}
{ //Subevents
gdjs.sala6Code.eventsList132(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "k");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra5Objects3, gdjs.sala6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra5Objects4[i].setAnimationFrame(10);
}
}
{ //Subevents
gdjs.sala6Code.eventsList133(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "l");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra5Objects3, gdjs.sala6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra5Objects4[i].setAnimationFrame(11);
}
}
{ //Subevents
gdjs.sala6Code.eventsList134(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "m");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra5Objects3, gdjs.sala6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra5Objects4[i].setAnimationFrame(12);
}
}
{ //Subevents
gdjs.sala6Code.eventsList135(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "n");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra5Objects3, gdjs.sala6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra5Objects4[i].setAnimationFrame(13);
}
}
{ //Subevents
gdjs.sala6Code.eventsList136(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "o");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra5Objects3, gdjs.sala6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra5Objects4[i].setAnimationFrame(14);
}
}
{ //Subevents
gdjs.sala6Code.eventsList137(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "p");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra5Objects3, gdjs.sala6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra5Objects4[i].setAnimationFrame(15);
}
}
{ //Subevents
gdjs.sala6Code.eventsList138(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "q");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra5Objects3, gdjs.sala6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra5Objects4[i].setAnimationFrame(16);
}
}
{ //Subevents
gdjs.sala6Code.eventsList139(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "r");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra5Objects3, gdjs.sala6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra5Objects4[i].setAnimationFrame(17);
}
}
{ //Subevents
gdjs.sala6Code.eventsList140(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra5Objects3, gdjs.sala6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra5Objects4[i].setAnimationFrame(18);
}
}
{ //Subevents
gdjs.sala6Code.eventsList141(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "t");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra5Objects3, gdjs.sala6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra5Objects4[i].setAnimationFrame(19);
}
}
{ //Subevents
gdjs.sala6Code.eventsList142(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "u");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra5Objects3, gdjs.sala6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra5Objects4[i].setAnimationFrame(20);
}
}
{ //Subevents
gdjs.sala6Code.eventsList143(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "v");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra5Objects3, gdjs.sala6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra5Objects4[i].setAnimationFrame(21);
}
}
{ //Subevents
gdjs.sala6Code.eventsList144(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra5Objects3, gdjs.sala6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra5Objects4[i].setAnimationFrame(22);
}
}
{ //Subevents
gdjs.sala6Code.eventsList145(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "x");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra5Objects3, gdjs.sala6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra5Objects4[i].setAnimationFrame(23);
}
}
{ //Subevents
gdjs.sala6Code.eventsList146(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "y");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra5Objects3, gdjs.sala6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra5Objects4[i].setAnimationFrame(24);
}
}
{ //Subevents
gdjs.sala6Code.eventsList147(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6Code.GDletra5Objects3, gdjs.sala6Code.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6Code.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6Code.GDletra5Objects4[i].setAnimationFrame(25);
}
}
{ //Subevents
gdjs.sala6Code.eventsList148(runtimeScene);} //End of subevents
}

}


};gdjs.sala6Code.eventsList150 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), false, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setBoolean(true);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setBoolean(true);
}}

}


};gdjs.sala6Code.asyncCallback17533636 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala6Code.GDpersonajeObjects4);
gdjs.copyArray(runtimeScene.getObjects("puzzle"), gdjs.sala6Code.GDpuzzleObjects4);
{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "puzzle");
}{for(var i = 0, len = gdjs.sala6Code.GDpuzzleObjects4.length ;i < len;++i) {
    gdjs.sala6Code.GDpuzzleObjects4[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.sala6Code.GDpersonajeObjects4.length ;i < len;++i) {
    gdjs.sala6Code.GDpersonajeObjects4[i].getBehavior("TopDownMovement").ignoreDefaultControls(false);
}
}
{ //Subevents
gdjs.sala6Code.eventsList150(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList151 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.sala6Code.asyncCallback17533636(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback17532556 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala6Code.GDcargaObjects3);
{for(var i = 0, len = gdjs.sala6Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala6Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 4, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala6Code.eventsList151(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList152 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala6Code.asyncCallback17532556(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback17537468 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala6Code.GDpersonajeObjects4);
gdjs.copyArray(runtimeScene.getObjects("puzzle"), gdjs.sala6Code.GDpuzzleObjects4);
{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "puzzle");
}{for(var i = 0, len = gdjs.sala6Code.GDpuzzleObjects4.length ;i < len;++i) {
    gdjs.sala6Code.GDpuzzleObjects4[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.sala6Code.GDpersonajeObjects4.length ;i < len;++i) {
    gdjs.sala6Code.GDpersonajeObjects4[i].getBehavior("TopDownMovement").ignoreDefaultControls(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(true);
}gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList153 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.sala6Code.asyncCallback17537468(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback17536516 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala6Code.GDcargaObjects3);
{for(var i = 0, len = gdjs.sala6Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala6Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 4, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala6Code.eventsList153(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList154 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.sala6Code.asyncCallback17536516(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.asyncCallback17535940 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("perdiste"), gdjs.sala6Code.GDperdisteObjects2);
{for(var i = 0, len = gdjs.sala6Code.GDperdisteObjects2.length ;i < len;++i) {
    gdjs.sala6Code.GDperdisteObjects2[i].getBehavior("Animation").resumeAnimation();
}
}
{ //Subevents
gdjs.sala6Code.eventsList154(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.sala6Code.localVariables.length = 0;
}
gdjs.sala6Code.eventsList155 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.sala6Code.asyncCallback17535940(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6Code.eventsList156 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("letra"), gdjs.sala6Code.GDletraObjects2);

for (gdjs.sala6Code.forEachIndex3 = 0;gdjs.sala6Code.forEachIndex3 < gdjs.sala6Code.GDletraObjects2.length;++gdjs.sala6Code.forEachIndex3) {
gdjs.sala6Code.GDletraObjects3.length = 0;


gdjs.sala6Code.forEachTemporary3 = gdjs.sala6Code.GDletraObjects2[gdjs.sala6Code.forEachIndex3];
gdjs.sala6Code.GDletraObjects3.push(gdjs.sala6Code.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 5;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 10;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 15;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.sala6Code.eventsList41(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("letra2"), gdjs.sala6Code.GDletra2Objects2);

for (gdjs.sala6Code.forEachIndex3 = 0;gdjs.sala6Code.forEachIndex3 < gdjs.sala6Code.GDletra2Objects2.length;++gdjs.sala6Code.forEachIndex3) {
gdjs.sala6Code.GDletra2Objects3.length = 0;


gdjs.sala6Code.forEachTemporary3 = gdjs.sala6Code.GDletra2Objects2[gdjs.sala6Code.forEachIndex3];
gdjs.sala6Code.GDletra2Objects3.push(gdjs.sala6Code.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 6;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 11;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 16;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.sala6Code.eventsList68(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("letra3"), gdjs.sala6Code.GDletra3Objects2);

for (gdjs.sala6Code.forEachIndex3 = 0;gdjs.sala6Code.forEachIndex3 < gdjs.sala6Code.GDletra3Objects2.length;++gdjs.sala6Code.forEachIndex3) {
gdjs.sala6Code.GDletra3Objects3.length = 0;


gdjs.sala6Code.forEachTemporary3 = gdjs.sala6Code.GDletra3Objects2[gdjs.sala6Code.forEachIndex3];
gdjs.sala6Code.GDletra3Objects3.push(gdjs.sala6Code.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 7;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 12;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 17;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.sala6Code.eventsList95(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("letra4"), gdjs.sala6Code.GDletra4Objects2);

for (gdjs.sala6Code.forEachIndex3 = 0;gdjs.sala6Code.forEachIndex3 < gdjs.sala6Code.GDletra4Objects2.length;++gdjs.sala6Code.forEachIndex3) {
gdjs.sala6Code.GDletra4Objects3.length = 0;


gdjs.sala6Code.forEachTemporary3 = gdjs.sala6Code.GDletra4Objects2[gdjs.sala6Code.forEachIndex3];
gdjs.sala6Code.GDletra4Objects3.push(gdjs.sala6Code.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 3;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 8;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 13;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 18;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.sala6Code.eventsList122(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("letra5"), gdjs.sala6Code.GDletra5Objects2);

for (gdjs.sala6Code.forEachIndex3 = 0;gdjs.sala6Code.forEachIndex3 < gdjs.sala6Code.GDletra5Objects2.length;++gdjs.sala6Code.forEachIndex3) {
gdjs.sala6Code.GDletra5Objects3.length = 0;


gdjs.sala6Code.forEachTemporary3 = gdjs.sala6Code.GDletra5Objects2[gdjs.sala6Code.forEachIndex3];
gdjs.sala6Code.GDletra5Objects3.push(gdjs.sala6Code.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 4;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 9;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 14;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 19;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.sala6Code.eventsList149(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("letra"), gdjs.sala6Code.GDletraObjects2);
gdjs.copyArray(runtimeScene.getObjects("letra2"), gdjs.sala6Code.GDletra2Objects2);
gdjs.copyArray(runtimeScene.getObjects("letra3"), gdjs.sala6Code.GDletra3Objects2);
gdjs.copyArray(runtimeScene.getObjects("letra4"), gdjs.sala6Code.GDletra4Objects2);
gdjs.copyArray(runtimeScene.getObjects("letra5"), gdjs.sala6Code.GDletra5Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala6Code.GDletraObjects2.length;i<l;++i) {
    if ( gdjs.sala6Code.GDletraObjects2[i].getAnimationFrame() == 21 ) {
        isConditionTrue_1 = true;
        gdjs.sala6Code.GDletraObjects2[k] = gdjs.sala6Code.GDletraObjects2[i];
        ++k;
    }
}
gdjs.sala6Code.GDletraObjects2.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala6Code.GDletra2Objects2.length;i<l;++i) {
    if ( gdjs.sala6Code.GDletra2Objects2[i].getAnimationFrame() == 21 ) {
        isConditionTrue_1 = true;
        gdjs.sala6Code.GDletra2Objects2[k] = gdjs.sala6Code.GDletra2Objects2[i];
        ++k;
    }
}
gdjs.sala6Code.GDletra2Objects2.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala6Code.GDletra3Objects2.length;i<l;++i) {
    if ( gdjs.sala6Code.GDletra3Objects2[i].getAnimationFrame() == 21 ) {
        isConditionTrue_1 = true;
        gdjs.sala6Code.GDletra3Objects2[k] = gdjs.sala6Code.GDletra3Objects2[i];
        ++k;
    }
}
gdjs.sala6Code.GDletra3Objects2.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala6Code.GDletra4Objects2.length;i<l;++i) {
    if ( gdjs.sala6Code.GDletra4Objects2[i].getAnimationFrame() == 21 ) {
        isConditionTrue_1 = true;
        gdjs.sala6Code.GDletra4Objects2[k] = gdjs.sala6Code.GDletra4Objects2[i];
        ++k;
    }
}
gdjs.sala6Code.GDletra4Objects2.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala6Code.GDletra5Objects2.length;i<l;++i) {
    if ( gdjs.sala6Code.GDletra5Objects2[i].getAnimationFrame() == 21 ) {
        isConditionTrue_1 = true;
        gdjs.sala6Code.GDletra5Objects2[k] = gdjs.sala6Code.GDletra5Objects2[i];
        ++k;
    }
}
gdjs.sala6Code.GDletra5Objects2.length = k;
}
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17532636);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.sala6Code.eventsList152(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 20;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17535732);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.sala6Code.eventsList155(runtimeScene);} //End of subevents
}

}


};gdjs.sala6Code.eventsList157 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala6Code.GDpersonajeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala6Code.GDpersonajeObjects1.length;i<l;++i) {
    if ( !(gdjs.sala6Code.GDpersonajeObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_1 = true;
        gdjs.sala6Code.GDpersonajeObjects1[k] = gdjs.sala6Code.GDpersonajeObjects1[i];
        ++k;
    }
}
gdjs.sala6Code.GDpersonajeObjects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.sala6Code.GDpersonajeObjects1 */
{for(var i = 0, len = gdjs.sala6Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala6Code.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("abrir");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala6Code.GDpersonajeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = !(gdjs.evtTools.input.anyKeyPressed(runtimeScene));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala6Code.GDpersonajeObjects1.length;i<l;++i) {
    if ( !(gdjs.sala6Code.GDpersonajeObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_1 = true;
        gdjs.sala6Code.GDpersonajeObjects1[k] = gdjs.sala6Code.GDpersonajeObjects1[i];
        ++k;
    }
}
gdjs.sala6Code.GDpersonajeObjects1.length = k;
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
/* Reuse gdjs.sala6Code.GDpersonajeObjects1 */
{for(var i = 0, len = gdjs.sala6Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala6Code.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("descanso");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala6Code.GDpersonajeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sala6Code.GDpersonajeObjects1.length;i<l;++i) {
    if ( gdjs.sala6Code.GDpersonajeObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.sala6Code.GDpersonajeObjects1[k] = gdjs.sala6Code.GDpersonajeObjects1[i];
        ++k;
    }
}
gdjs.sala6Code.GDpersonajeObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.sala6Code.GDpersonajeObjects1 */
{for(var i = 0, len = gdjs.sala6Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala6Code.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("caminar");
}
}
{ //Subevents
gdjs.sala6Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala6Code.GDpersonajeObjects1);
{for(var i = 0, len = gdjs.sala6Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala6Code.GDpersonajeObjects1[i].getBehavior("TopDownMovement").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.sala6Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala6Code.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("perder");
}
}
{ //Subevents
gdjs.sala6Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala6Code.GDpersonajeObjects1);
{for(var i = 0, len = gdjs.sala6Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala6Code.GDpersonajeObjects1[i].getBehavior("TopDownMovement").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.sala6Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala6Code.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("ganar");
}
}
{ //Subevents
gdjs.sala6Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.sala6Code.eventsList3(runtimeScene);
}


{


gdjs.sala6Code.eventsList4(runtimeScene);
}


{


gdjs.sala6Code.eventsList14(runtimeScene);
}


{


gdjs.sala6Code.eventsList156(runtimeScene);
}


};

gdjs.sala6Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.sala6Code.GDsala1Objects1.length = 0;
gdjs.sala6Code.GDsala1Objects2.length = 0;
gdjs.sala6Code.GDsala1Objects3.length = 0;
gdjs.sala6Code.GDsala1Objects4.length = 0;
gdjs.sala6Code.GDsala1Objects5.length = 0;
gdjs.sala6Code.GDfondopuzzleObjects1.length = 0;
gdjs.sala6Code.GDfondopuzzleObjects2.length = 0;
gdjs.sala6Code.GDfondopuzzleObjects3.length = 0;
gdjs.sala6Code.GDfondopuzzleObjects4.length = 0;
gdjs.sala6Code.GDfondopuzzleObjects5.length = 0;
gdjs.sala6Code.GDletraObjects1.length = 0;
gdjs.sala6Code.GDletraObjects2.length = 0;
gdjs.sala6Code.GDletraObjects3.length = 0;
gdjs.sala6Code.GDletraObjects4.length = 0;
gdjs.sala6Code.GDletraObjects5.length = 0;
gdjs.sala6Code.GDletra2Objects1.length = 0;
gdjs.sala6Code.GDletra2Objects2.length = 0;
gdjs.sala6Code.GDletra2Objects3.length = 0;
gdjs.sala6Code.GDletra2Objects4.length = 0;
gdjs.sala6Code.GDletra2Objects5.length = 0;
gdjs.sala6Code.GDletra3Objects1.length = 0;
gdjs.sala6Code.GDletra3Objects2.length = 0;
gdjs.sala6Code.GDletra3Objects3.length = 0;
gdjs.sala6Code.GDletra3Objects4.length = 0;
gdjs.sala6Code.GDletra3Objects5.length = 0;
gdjs.sala6Code.GDletra4Objects1.length = 0;
gdjs.sala6Code.GDletra4Objects2.length = 0;
gdjs.sala6Code.GDletra4Objects3.length = 0;
gdjs.sala6Code.GDletra4Objects4.length = 0;
gdjs.sala6Code.GDletra4Objects5.length = 0;
gdjs.sala6Code.GDletra5Objects1.length = 0;
gdjs.sala6Code.GDletra5Objects2.length = 0;
gdjs.sala6Code.GDletra5Objects3.length = 0;
gdjs.sala6Code.GDletra5Objects4.length = 0;
gdjs.sala6Code.GDletra5Objects5.length = 0;
gdjs.sala6Code.GDpersonajeObjects1.length = 0;
gdjs.sala6Code.GDpersonajeObjects2.length = 0;
gdjs.sala6Code.GDpersonajeObjects3.length = 0;
gdjs.sala6Code.GDpersonajeObjects4.length = 0;
gdjs.sala6Code.GDpersonajeObjects5.length = 0;
gdjs.sala6Code.GDcargaObjects1.length = 0;
gdjs.sala6Code.GDcargaObjects2.length = 0;
gdjs.sala6Code.GDcargaObjects3.length = 0;
gdjs.sala6Code.GDcargaObjects4.length = 0;
gdjs.sala6Code.GDcargaObjects5.length = 0;
gdjs.sala6Code.GDizquierdaObjects1.length = 0;
gdjs.sala6Code.GDizquierdaObjects2.length = 0;
gdjs.sala6Code.GDizquierdaObjects3.length = 0;
gdjs.sala6Code.GDizquierdaObjects4.length = 0;
gdjs.sala6Code.GDizquierdaObjects5.length = 0;
gdjs.sala6Code.GDderechaObjects1.length = 0;
gdjs.sala6Code.GDderechaObjects2.length = 0;
gdjs.sala6Code.GDderechaObjects3.length = 0;
gdjs.sala6Code.GDderechaObjects4.length = 0;
gdjs.sala6Code.GDderechaObjects5.length = 0;
gdjs.sala6Code.GDpuzzleObjects1.length = 0;
gdjs.sala6Code.GDpuzzleObjects2.length = 0;
gdjs.sala6Code.GDpuzzleObjects3.length = 0;
gdjs.sala6Code.GDpuzzleObjects4.length = 0;
gdjs.sala6Code.GDpuzzleObjects5.length = 0;
gdjs.sala6Code.GDpuzzleCObjects1.length = 0;
gdjs.sala6Code.GDpuzzleCObjects2.length = 0;
gdjs.sala6Code.GDpuzzleCObjects3.length = 0;
gdjs.sala6Code.GDpuzzleCObjects4.length = 0;
gdjs.sala6Code.GDpuzzleCObjects5.length = 0;
gdjs.sala6Code.GDcomienzopuzzleObjects1.length = 0;
gdjs.sala6Code.GDcomienzopuzzleObjects2.length = 0;
gdjs.sala6Code.GDcomienzopuzzleObjects3.length = 0;
gdjs.sala6Code.GDcomienzopuzzleObjects4.length = 0;
gdjs.sala6Code.GDcomienzopuzzleObjects5.length = 0;
gdjs.sala6Code.GDpisoObjects1.length = 0;
gdjs.sala6Code.GDpisoObjects2.length = 0;
gdjs.sala6Code.GDpisoObjects3.length = 0;
gdjs.sala6Code.GDpisoObjects4.length = 0;
gdjs.sala6Code.GDpisoObjects5.length = 0;
gdjs.sala6Code.GDtechoObjects1.length = 0;
gdjs.sala6Code.GDtechoObjects2.length = 0;
gdjs.sala6Code.GDtechoObjects3.length = 0;
gdjs.sala6Code.GDtechoObjects4.length = 0;
gdjs.sala6Code.GDtechoObjects5.length = 0;
gdjs.sala6Code.GDpuertaizquierdaObjects1.length = 0;
gdjs.sala6Code.GDpuertaizquierdaObjects2.length = 0;
gdjs.sala6Code.GDpuertaizquierdaObjects3.length = 0;
gdjs.sala6Code.GDpuertaizquierdaObjects4.length = 0;
gdjs.sala6Code.GDpuertaizquierdaObjects5.length = 0;
gdjs.sala6Code.GDpuertaderechaObjects1.length = 0;
gdjs.sala6Code.GDpuertaderechaObjects2.length = 0;
gdjs.sala6Code.GDpuertaderechaObjects3.length = 0;
gdjs.sala6Code.GDpuertaderechaObjects4.length = 0;
gdjs.sala6Code.GDpuertaderechaObjects5.length = 0;
gdjs.sala6Code.GDperdisteObjects1.length = 0;
gdjs.sala6Code.GDperdisteObjects2.length = 0;
gdjs.sala6Code.GDperdisteObjects3.length = 0;
gdjs.sala6Code.GDperdisteObjects4.length = 0;
gdjs.sala6Code.GDperdisteObjects5.length = 0;

gdjs.sala6Code.eventsList157(runtimeScene);
gdjs.sala6Code.GDsala1Objects1.length = 0;
gdjs.sala6Code.GDsala1Objects2.length = 0;
gdjs.sala6Code.GDsala1Objects3.length = 0;
gdjs.sala6Code.GDsala1Objects4.length = 0;
gdjs.sala6Code.GDsala1Objects5.length = 0;
gdjs.sala6Code.GDfondopuzzleObjects1.length = 0;
gdjs.sala6Code.GDfondopuzzleObjects2.length = 0;
gdjs.sala6Code.GDfondopuzzleObjects3.length = 0;
gdjs.sala6Code.GDfondopuzzleObjects4.length = 0;
gdjs.sala6Code.GDfondopuzzleObjects5.length = 0;
gdjs.sala6Code.GDletraObjects1.length = 0;
gdjs.sala6Code.GDletraObjects2.length = 0;
gdjs.sala6Code.GDletraObjects3.length = 0;
gdjs.sala6Code.GDletraObjects4.length = 0;
gdjs.sala6Code.GDletraObjects5.length = 0;
gdjs.sala6Code.GDletra2Objects1.length = 0;
gdjs.sala6Code.GDletra2Objects2.length = 0;
gdjs.sala6Code.GDletra2Objects3.length = 0;
gdjs.sala6Code.GDletra2Objects4.length = 0;
gdjs.sala6Code.GDletra2Objects5.length = 0;
gdjs.sala6Code.GDletra3Objects1.length = 0;
gdjs.sala6Code.GDletra3Objects2.length = 0;
gdjs.sala6Code.GDletra3Objects3.length = 0;
gdjs.sala6Code.GDletra3Objects4.length = 0;
gdjs.sala6Code.GDletra3Objects5.length = 0;
gdjs.sala6Code.GDletra4Objects1.length = 0;
gdjs.sala6Code.GDletra4Objects2.length = 0;
gdjs.sala6Code.GDletra4Objects3.length = 0;
gdjs.sala6Code.GDletra4Objects4.length = 0;
gdjs.sala6Code.GDletra4Objects5.length = 0;
gdjs.sala6Code.GDletra5Objects1.length = 0;
gdjs.sala6Code.GDletra5Objects2.length = 0;
gdjs.sala6Code.GDletra5Objects3.length = 0;
gdjs.sala6Code.GDletra5Objects4.length = 0;
gdjs.sala6Code.GDletra5Objects5.length = 0;
gdjs.sala6Code.GDpersonajeObjects1.length = 0;
gdjs.sala6Code.GDpersonajeObjects2.length = 0;
gdjs.sala6Code.GDpersonajeObjects3.length = 0;
gdjs.sala6Code.GDpersonajeObjects4.length = 0;
gdjs.sala6Code.GDpersonajeObjects5.length = 0;
gdjs.sala6Code.GDcargaObjects1.length = 0;
gdjs.sala6Code.GDcargaObjects2.length = 0;
gdjs.sala6Code.GDcargaObjects3.length = 0;
gdjs.sala6Code.GDcargaObjects4.length = 0;
gdjs.sala6Code.GDcargaObjects5.length = 0;
gdjs.sala6Code.GDizquierdaObjects1.length = 0;
gdjs.sala6Code.GDizquierdaObjects2.length = 0;
gdjs.sala6Code.GDizquierdaObjects3.length = 0;
gdjs.sala6Code.GDizquierdaObjects4.length = 0;
gdjs.sala6Code.GDizquierdaObjects5.length = 0;
gdjs.sala6Code.GDderechaObjects1.length = 0;
gdjs.sala6Code.GDderechaObjects2.length = 0;
gdjs.sala6Code.GDderechaObjects3.length = 0;
gdjs.sala6Code.GDderechaObjects4.length = 0;
gdjs.sala6Code.GDderechaObjects5.length = 0;
gdjs.sala6Code.GDpuzzleObjects1.length = 0;
gdjs.sala6Code.GDpuzzleObjects2.length = 0;
gdjs.sala6Code.GDpuzzleObjects3.length = 0;
gdjs.sala6Code.GDpuzzleObjects4.length = 0;
gdjs.sala6Code.GDpuzzleObjects5.length = 0;
gdjs.sala6Code.GDpuzzleCObjects1.length = 0;
gdjs.sala6Code.GDpuzzleCObjects2.length = 0;
gdjs.sala6Code.GDpuzzleCObjects3.length = 0;
gdjs.sala6Code.GDpuzzleCObjects4.length = 0;
gdjs.sala6Code.GDpuzzleCObjects5.length = 0;
gdjs.sala6Code.GDcomienzopuzzleObjects1.length = 0;
gdjs.sala6Code.GDcomienzopuzzleObjects2.length = 0;
gdjs.sala6Code.GDcomienzopuzzleObjects3.length = 0;
gdjs.sala6Code.GDcomienzopuzzleObjects4.length = 0;
gdjs.sala6Code.GDcomienzopuzzleObjects5.length = 0;
gdjs.sala6Code.GDpisoObjects1.length = 0;
gdjs.sala6Code.GDpisoObjects2.length = 0;
gdjs.sala6Code.GDpisoObjects3.length = 0;
gdjs.sala6Code.GDpisoObjects4.length = 0;
gdjs.sala6Code.GDpisoObjects5.length = 0;
gdjs.sala6Code.GDtechoObjects1.length = 0;
gdjs.sala6Code.GDtechoObjects2.length = 0;
gdjs.sala6Code.GDtechoObjects3.length = 0;
gdjs.sala6Code.GDtechoObjects4.length = 0;
gdjs.sala6Code.GDtechoObjects5.length = 0;
gdjs.sala6Code.GDpuertaizquierdaObjects1.length = 0;
gdjs.sala6Code.GDpuertaizquierdaObjects2.length = 0;
gdjs.sala6Code.GDpuertaizquierdaObjects3.length = 0;
gdjs.sala6Code.GDpuertaizquierdaObjects4.length = 0;
gdjs.sala6Code.GDpuertaizquierdaObjects5.length = 0;
gdjs.sala6Code.GDpuertaderechaObjects1.length = 0;
gdjs.sala6Code.GDpuertaderechaObjects2.length = 0;
gdjs.sala6Code.GDpuertaderechaObjects3.length = 0;
gdjs.sala6Code.GDpuertaderechaObjects4.length = 0;
gdjs.sala6Code.GDpuertaderechaObjects5.length = 0;
gdjs.sala6Code.GDperdisteObjects1.length = 0;
gdjs.sala6Code.GDperdisteObjects2.length = 0;
gdjs.sala6Code.GDperdisteObjects3.length = 0;
gdjs.sala6Code.GDperdisteObjects4.length = 0;
gdjs.sala6Code.GDperdisteObjects5.length = 0;


return;

}

gdjs['sala6Code'] = gdjs.sala6Code;
