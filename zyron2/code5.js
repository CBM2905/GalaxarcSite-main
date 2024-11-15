gdjs.sala6DCode = {};
gdjs.sala6DCode.localVariables = [];
gdjs.sala6DCode.forEachIndex3 = 0;

gdjs.sala6DCode.forEachObjects3 = [];

gdjs.sala6DCode.forEachTemporary3 = null;

gdjs.sala6DCode.forEachTotalCount3 = 0;

gdjs.sala6DCode.GDsala1Objects1= [];
gdjs.sala6DCode.GDsala1Objects2= [];
gdjs.sala6DCode.GDsala1Objects3= [];
gdjs.sala6DCode.GDsala1Objects4= [];
gdjs.sala6DCode.GDsala1Objects5= [];
gdjs.sala6DCode.GDfondopuzzleObjects1= [];
gdjs.sala6DCode.GDfondopuzzleObjects2= [];
gdjs.sala6DCode.GDfondopuzzleObjects3= [];
gdjs.sala6DCode.GDfondopuzzleObjects4= [];
gdjs.sala6DCode.GDfondopuzzleObjects5= [];
gdjs.sala6DCode.GDletraObjects1= [];
gdjs.sala6DCode.GDletraObjects2= [];
gdjs.sala6DCode.GDletraObjects3= [];
gdjs.sala6DCode.GDletraObjects4= [];
gdjs.sala6DCode.GDletraObjects5= [];
gdjs.sala6DCode.GDletra2Objects1= [];
gdjs.sala6DCode.GDletra2Objects2= [];
gdjs.sala6DCode.GDletra2Objects3= [];
gdjs.sala6DCode.GDletra2Objects4= [];
gdjs.sala6DCode.GDletra2Objects5= [];
gdjs.sala6DCode.GDletra3Objects1= [];
gdjs.sala6DCode.GDletra3Objects2= [];
gdjs.sala6DCode.GDletra3Objects3= [];
gdjs.sala6DCode.GDletra3Objects4= [];
gdjs.sala6DCode.GDletra3Objects5= [];
gdjs.sala6DCode.GDletra4Objects1= [];
gdjs.sala6DCode.GDletra4Objects2= [];
gdjs.sala6DCode.GDletra4Objects3= [];
gdjs.sala6DCode.GDletra4Objects4= [];
gdjs.sala6DCode.GDletra4Objects5= [];
gdjs.sala6DCode.GDletra5Objects1= [];
gdjs.sala6DCode.GDletra5Objects2= [];
gdjs.sala6DCode.GDletra5Objects3= [];
gdjs.sala6DCode.GDletra5Objects4= [];
gdjs.sala6DCode.GDletra5Objects5= [];
gdjs.sala6DCode.GDpersonajeObjects1= [];
gdjs.sala6DCode.GDpersonajeObjects2= [];
gdjs.sala6DCode.GDpersonajeObjects3= [];
gdjs.sala6DCode.GDpersonajeObjects4= [];
gdjs.sala6DCode.GDpersonajeObjects5= [];
gdjs.sala6DCode.GDcargaObjects1= [];
gdjs.sala6DCode.GDcargaObjects2= [];
gdjs.sala6DCode.GDcargaObjects3= [];
gdjs.sala6DCode.GDcargaObjects4= [];
gdjs.sala6DCode.GDcargaObjects5= [];
gdjs.sala6DCode.GDizquierdaObjects1= [];
gdjs.sala6DCode.GDizquierdaObjects2= [];
gdjs.sala6DCode.GDizquierdaObjects3= [];
gdjs.sala6DCode.GDizquierdaObjects4= [];
gdjs.sala6DCode.GDizquierdaObjects5= [];
gdjs.sala6DCode.GDderechaObjects1= [];
gdjs.sala6DCode.GDderechaObjects2= [];
gdjs.sala6DCode.GDderechaObjects3= [];
gdjs.sala6DCode.GDderechaObjects4= [];
gdjs.sala6DCode.GDderechaObjects5= [];
gdjs.sala6DCode.GDpuzzleObjects1= [];
gdjs.sala6DCode.GDpuzzleObjects2= [];
gdjs.sala6DCode.GDpuzzleObjects3= [];
gdjs.sala6DCode.GDpuzzleObjects4= [];
gdjs.sala6DCode.GDpuzzleObjects5= [];
gdjs.sala6DCode.GDpuzzleCObjects1= [];
gdjs.sala6DCode.GDpuzzleCObjects2= [];
gdjs.sala6DCode.GDpuzzleCObjects3= [];
gdjs.sala6DCode.GDpuzzleCObjects4= [];
gdjs.sala6DCode.GDpuzzleCObjects5= [];
gdjs.sala6DCode.GDcomienzopuzzleObjects1= [];
gdjs.sala6DCode.GDcomienzopuzzleObjects2= [];
gdjs.sala6DCode.GDcomienzopuzzleObjects3= [];
gdjs.sala6DCode.GDcomienzopuzzleObjects4= [];
gdjs.sala6DCode.GDcomienzopuzzleObjects5= [];
gdjs.sala6DCode.GDpisoObjects1= [];
gdjs.sala6DCode.GDpisoObjects2= [];
gdjs.sala6DCode.GDpisoObjects3= [];
gdjs.sala6DCode.GDpisoObjects4= [];
gdjs.sala6DCode.GDpisoObjects5= [];
gdjs.sala6DCode.GDtechoObjects1= [];
gdjs.sala6DCode.GDtechoObjects2= [];
gdjs.sala6DCode.GDtechoObjects3= [];
gdjs.sala6DCode.GDtechoObjects4= [];
gdjs.sala6DCode.GDtechoObjects5= [];
gdjs.sala6DCode.GDpuertaizquierdaObjects1= [];
gdjs.sala6DCode.GDpuertaizquierdaObjects2= [];
gdjs.sala6DCode.GDpuertaizquierdaObjects3= [];
gdjs.sala6DCode.GDpuertaizquierdaObjects4= [];
gdjs.sala6DCode.GDpuertaizquierdaObjects5= [];
gdjs.sala6DCode.GDpuertaderechaObjects1= [];
gdjs.sala6DCode.GDpuertaderechaObjects2= [];
gdjs.sala6DCode.GDpuertaderechaObjects3= [];
gdjs.sala6DCode.GDpuertaderechaObjects4= [];
gdjs.sala6DCode.GDpuertaderechaObjects5= [];
gdjs.sala6DCode.GDperdisteObjects1= [];
gdjs.sala6DCode.GDperdisteObjects2= [];
gdjs.sala6DCode.GDperdisteObjects3= [];
gdjs.sala6DCode.GDperdisteObjects4= [];
gdjs.sala6DCode.GDperdisteObjects5= [];


gdjs.sala6DCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.sala6DCode.GDpersonajeObjects1, gdjs.sala6DCode.GDpersonajeObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sala6DCode.GDpersonajeObjects2.length;i<l;++i) {
    if ( gdjs.sala6DCode.GDpersonajeObjects2[i].getBehavior("TopDownMovement").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.sala6DCode.GDpersonajeObjects2[k] = gdjs.sala6DCode.GDpersonajeObjects2[i];
        ++k;
    }
}
gdjs.sala6DCode.GDpersonajeObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.sala6DCode.GDpersonajeObjects2 */
{for(var i = 0, len = gdjs.sala6DCode.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala6DCode.GDpersonajeObjects2[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

/* Reuse gdjs.sala6DCode.GDpersonajeObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sala6DCode.GDpersonajeObjects1.length;i<l;++i) {
    if ( gdjs.sala6DCode.GDpersonajeObjects1[i].getBehavior("TopDownMovement").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.sala6DCode.GDpersonajeObjects1[k] = gdjs.sala6DCode.GDpersonajeObjects1[i];
        ++k;
    }
}
gdjs.sala6DCode.GDpersonajeObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.sala6DCode.GDpersonajeObjects1 */
{for(var i = 0, len = gdjs.sala6DCode.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala6DCode.GDpersonajeObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


};gdjs.sala6DCode.asyncCallback17695492 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("personaje"), gdjs.sala6DCode.GDpersonajeObjects2);

{for(var i = 0, len = gdjs.sala6DCode.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala6DCode.GDpersonajeObjects2[i].getBehavior("TopDownMovement").ignoreDefaultControls(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(false);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
for (const obj of gdjs.sala6DCode.GDpersonajeObjects1) asyncObjectsList.addObject("personaje", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17695492(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17886916 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("personaje"), gdjs.sala6DCode.GDpersonajeObjects2);

{for(var i = 0, len = gdjs.sala6DCode.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala6DCode.GDpersonajeObjects2[i].getBehavior("TopDownMovement").ignoreDefaultControls(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setBoolean(false);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
for (const obj of gdjs.sala6DCode.GDpersonajeObjects1) asyncObjectsList.addObject("personaje", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17886916(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala6DCode.GDpersonajeObjects2});
gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpuertaizquierdaObjects2Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala6DCode.GDpuertaizquierdaObjects2});
gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpuertaizquierdaObjects2Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala6DCode.GDpuertaizquierdaObjects2});
gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala6DCode.GDpersonajeObjects2});
gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpuertaderechaObjects2Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala6DCode.GDpuertaderechaObjects2});
gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpuertaderechaObjects2Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala6DCode.GDpuertaderechaObjects2});
gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala6DCode.GDpersonajeObjects2});
gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpisoObjects2Objects = Hashtable.newFrom({"piso": gdjs.sala6DCode.GDpisoObjects2});
gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpisoObjects2Objects = Hashtable.newFrom({"piso": gdjs.sala6DCode.GDpisoObjects2});
gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpersonajeObjects1Objects = Hashtable.newFrom({"personaje": gdjs.sala6DCode.GDpersonajeObjects1});
gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDtechoObjects1Objects = Hashtable.newFrom({"techo": gdjs.sala6DCode.GDtechoObjects1});
gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDtechoObjects1Objects = Hashtable.newFrom({"techo": gdjs.sala6DCode.GDtechoObjects1});
gdjs.sala6DCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala6DCode.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("puertaizquierda"), gdjs.sala6DCode.GDpuertaizquierdaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpersonajeObjects2Objects, gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpuertaizquierdaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.sala6DCode.GDpersonajeObjects2 */
/* Reuse gdjs.sala6DCode.GDpuertaizquierdaObjects2 */
{for(var i = 0, len = gdjs.sala6DCode.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala6DCode.GDpersonajeObjects2[i].separateFromObjectsList(gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpuertaizquierdaObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala6DCode.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("puertaderecha"), gdjs.sala6DCode.GDpuertaderechaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpersonajeObjects2Objects, gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpuertaderechaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.sala6DCode.GDpersonajeObjects2 */
/* Reuse gdjs.sala6DCode.GDpuertaderechaObjects2 */
{for(var i = 0, len = gdjs.sala6DCode.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala6DCode.GDpersonajeObjects2[i].separateFromObjectsList(gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpuertaderechaObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala6DCode.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("piso"), gdjs.sala6DCode.GDpisoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpersonajeObjects2Objects, gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpisoObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.sala6DCode.GDpersonajeObjects2 */
/* Reuse gdjs.sala6DCode.GDpisoObjects2 */
{for(var i = 0, len = gdjs.sala6DCode.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala6DCode.GDpersonajeObjects2[i].separateFromObjectsList(gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpisoObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala6DCode.GDpersonajeObjects1);
gdjs.copyArray(runtimeScene.getObjects("techo"), gdjs.sala6DCode.GDtechoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpersonajeObjects1Objects, gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDtechoObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.sala6DCode.GDpersonajeObjects1 */
/* Reuse gdjs.sala6DCode.GDtechoObjects1 */
{for(var i = 0, len = gdjs.sala6DCode.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala6DCode.GDpersonajeObjects1[i].separateFromObjectsList(gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDtechoObjects1Objects, false);
}
}}

}


};gdjs.sala6DCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.doesSceneExist(runtimeScene, "sala1");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("derecha"), gdjs.sala6DCode.GDderechaObjects2);
gdjs.copyArray(runtimeScene.getObjects("izquierda"), gdjs.sala6DCode.GDizquierdaObjects2);
gdjs.copyArray(runtimeScene.getObjects("puzzle"), gdjs.sala6DCode.GDpuzzleObjects2);
{for(var i = 0, len = gdjs.sala6DCode.GDizquierdaObjects2.length ;i < len;++i) {
    gdjs.sala6DCode.GDizquierdaObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.sala6DCode.GDderechaObjects2.length ;i < len;++i) {
    gdjs.sala6DCode.GDderechaObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.sala6DCode.GDpuzzleObjects2.length ;i < len;++i) {
    gdjs.sala6DCode.GDpuzzleObjects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala6DCode.GDcargaObjects1);
gdjs.copyArray(runtimeScene.getObjects("comienzopuzzle"), gdjs.sala6DCode.GDcomienzopuzzleObjects1);
gdjs.copyArray(runtimeScene.getObjects("derecha"), gdjs.sala6DCode.GDderechaObjects1);
gdjs.copyArray(runtimeScene.getObjects("izquierda"), gdjs.sala6DCode.GDizquierdaObjects1);
gdjs.copyArray(runtimeScene.getObjects("letra"), gdjs.sala6DCode.GDletraObjects1);
gdjs.copyArray(runtimeScene.getObjects("letra2"), gdjs.sala6DCode.GDletra2Objects1);
gdjs.copyArray(runtimeScene.getObjects("letra3"), gdjs.sala6DCode.GDletra3Objects1);
gdjs.copyArray(runtimeScene.getObjects("letra4"), gdjs.sala6DCode.GDletra4Objects1);
gdjs.copyArray(runtimeScene.getObjects("letra5"), gdjs.sala6DCode.GDletra5Objects1);
gdjs.copyArray(runtimeScene.getObjects("perdiste"), gdjs.sala6DCode.GDperdisteObjects1);
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala6DCode.GDpersonajeObjects1);
gdjs.copyArray(runtimeScene.getObjects("puzzle"), gdjs.sala6DCode.GDpuzzleObjects1);
{for(var i = 0, len = gdjs.sala6DCode.GDcargaObjects1.length ;i < len;++i) {
    gdjs.sala6DCode.GDcargaObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.sala6DCode.GDizquierdaObjects1.length ;i < len;++i) {
    gdjs.sala6DCode.GDizquierdaObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala6DCode.GDderechaObjects1.length ;i < len;++i) {
    gdjs.sala6DCode.GDderechaObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala6DCode.GDpuzzleObjects1.length ;i < len;++i) {
    gdjs.sala6DCode.GDpuzzleObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala6DCode.GDletraObjects1.length ;i < len;++i) {
    gdjs.sala6DCode.GDletraObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala6DCode.GDletra2Objects1.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra2Objects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala6DCode.GDletra3Objects1.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra3Objects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala6DCode.GDletra4Objects1.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra4Objects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala6DCode.GDletra5Objects1.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra5Objects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala6DCode.GDcomienzopuzzleObjects1.length ;i < len;++i) {
    gdjs.sala6DCode.GDcomienzopuzzleObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala6DCode.GDperdisteObjects1.length ;i < len;++i) {
    gdjs.sala6DCode.GDperdisteObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(21);
}{for(var i = 0, len = gdjs.sala6DCode.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala6DCode.GDpersonajeObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


};gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala6DCode.GDpersonajeObjects2});
gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpuertaizquierdaObjects2Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala6DCode.GDpuertaizquierdaObjects2});
gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala6DCode.GDpersonajeObjects3});
gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala6DCode.GDpuertaizquierdaObjects3});
gdjs.sala6DCode.asyncCallback17685908 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala1D", false);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17685908(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala6DCode.GDpersonajeObjects2});
gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpuertaizquierdaObjects2Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala6DCode.GDpuertaizquierdaObjects2});
gdjs.sala6DCode.asyncCallback17689084 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala2D", false);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17689084(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.sala6DCode.GDpersonajeObjects2, gdjs.sala6DCode.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala6DCode.GDpuertaizquierdaObjects2, gdjs.sala6DCode.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpersonajeObjects3Objects, gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala6DCode.GDcargaObjects3);
gdjs.copyArray(gdjs.sala6DCode.GDizquierdaObjects2, gdjs.sala6DCode.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala6DCode.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala6DCode.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala6DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala6DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala6DCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.sala6DCode.GDpersonajeObjects2 */
/* Reuse gdjs.sala6DCode.GDpuertaizquierdaObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpersonajeObjects2Objects, gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpuertaizquierdaObjects2Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala6DCode.GDcargaObjects2);
/* Reuse gdjs.sala6DCode.GDizquierdaObjects2 */
{for(var i = 0, len = gdjs.sala6DCode.GDizquierdaObjects2.length ;i < len;++i) {
    gdjs.sala6DCode.GDizquierdaObjects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala6DCode.GDcargaObjects2.length ;i < len;++i) {
    gdjs.sala6DCode.GDcargaObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala6DCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala6DCode.GDpersonajeObjects2});
gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpuertaderechaObjects2Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala6DCode.GDpuertaderechaObjects2});
gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala6DCode.GDpersonajeObjects3});
gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala6DCode.GDpuertaderechaObjects3});
gdjs.sala6DCode.asyncCallback17694524 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala1", false);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17694524(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala6DCode.GDpersonajeObjects2});
gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpuertaderechaObjects2Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala6DCode.GDpuertaderechaObjects2});
gdjs.sala6DCode.asyncCallback17698692 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala6", false);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17698692(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.sala6DCode.GDpersonajeObjects2, gdjs.sala6DCode.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala6DCode.GDpuertaderechaObjects2, gdjs.sala6DCode.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpersonajeObjects3Objects, gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala6DCode.GDcargaObjects3);
gdjs.copyArray(gdjs.sala6DCode.GDderechaObjects2, gdjs.sala6DCode.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala6DCode.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala6DCode.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala6DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala6DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala6DCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.sala6DCode.GDpersonajeObjects2 */
/* Reuse gdjs.sala6DCode.GDpuertaderechaObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpersonajeObjects2Objects, gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpuertaderechaObjects2Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala6DCode.GDcargaObjects2);
/* Reuse gdjs.sala6DCode.GDderechaObjects2 */
{for(var i = 0, len = gdjs.sala6DCode.GDderechaObjects2.length ;i < len;++i) {
    gdjs.sala6DCode.GDderechaObjects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala6DCode.GDcargaObjects2.length ;i < len;++i) {
    gdjs.sala6DCode.GDcargaObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala6DCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpersonajeObjects1Objects = Hashtable.newFrom({"personaje": gdjs.sala6DCode.GDpersonajeObjects1});
gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpuzzleCObjects1Objects = Hashtable.newFrom({"puzzleC": gdjs.sala6DCode.GDpuzzleCObjects1});
gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpersonajeObjects1Objects = Hashtable.newFrom({"personaje": gdjs.sala6DCode.GDpersonajeObjects1});
gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpuzzleCObjects1Objects = Hashtable.newFrom({"puzzleC": gdjs.sala6DCode.GDpuzzleCObjects1});
gdjs.sala6DCode.asyncCallback17706052 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList11 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17706052(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17705188 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("comienzopuzzle"), gdjs.sala6DCode.GDcomienzopuzzleObjects2);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "puzzle");
}{for(var i = 0, len = gdjs.sala6DCode.GDcomienzopuzzleObjects2.length ;i < len;++i) {
    gdjs.sala6DCode.GDcomienzopuzzleObjects2[i].getBehavior("Animation").resumeAnimation();
}
}
{ //Subevents
gdjs.sala6DCode.eventsList11(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList12 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17705188(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.eventsList13 = function(runtimeScene) {

{

/* Reuse gdjs.sala6DCode.GDpersonajeObjects1 */
/* Reuse gdjs.sala6DCode.GDpuzzleObjects1 */
/* Reuse gdjs.sala6DCode.GDpuzzleCObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpersonajeObjects1Objects, gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpuzzleCObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala6DCode.GDpuzzleObjects1.length;i<l;++i) {
    if ( gdjs.sala6DCode.GDpuzzleObjects1[i].isVisible() ) {
        isConditionTrue_1 = true;
        gdjs.sala6DCode.GDpuzzleObjects1[k] = gdjs.sala6DCode.GDpuzzleObjects1[i];
        ++k;
    }
}
gdjs.sala6DCode.GDpuzzleObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "");
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala6DCode.GDcargaObjects1);
/* Reuse gdjs.sala6DCode.GDpersonajeObjects1 */
/* Reuse gdjs.sala6DCode.GDpuzzleObjects1 */
{for(var i = 0, len = gdjs.sala6DCode.GDpuzzleObjects1.length ;i < len;++i) {
    gdjs.sala6DCode.GDpuzzleObjects1[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala6DCode.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala6DCode.GDpersonajeObjects1[i].getBehavior("TopDownMovement").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.sala6DCode.GDcargaObjects1.length ;i < len;++i) {
    gdjs.sala6DCode.GDcargaObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 4, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala6DCode.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.sala6DCode.eventsList14 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala6DCode.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("puertaizquierda"), gdjs.sala6DCode.GDpuertaizquierdaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpersonajeObjects2Objects, gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpuertaizquierdaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("izquierda"), gdjs.sala6DCode.GDizquierdaObjects2);
{for(var i = 0, len = gdjs.sala6DCode.GDizquierdaObjects2.length ;i < len;++i) {
    gdjs.sala6DCode.GDizquierdaObjects2[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.random(2));
}
{ //Subevents
gdjs.sala6DCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala6DCode.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("puertaderecha"), gdjs.sala6DCode.GDpuertaderechaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpersonajeObjects2Objects, gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpuertaderechaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("derecha"), gdjs.sala6DCode.GDderechaObjects2);
{for(var i = 0, len = gdjs.sala6DCode.GDderechaObjects2.length ;i < len;++i) {
    gdjs.sala6DCode.GDderechaObjects2[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.random(2));
}
{ //Subevents
gdjs.sala6DCode.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala6DCode.GDpersonajeObjects1);
gdjs.copyArray(runtimeScene.getObjects("puzzleC"), gdjs.sala6DCode.GDpuzzleCObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpersonajeObjects1Objects, gdjs.sala6DCode.mapOfGDgdjs_9546sala6DCode_9546GDpuzzleCObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), false, false);
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("puzzle"), gdjs.sala6DCode.GDpuzzleObjects1);
{for(var i = 0, len = gdjs.sala6DCode.GDpuzzleObjects1.length ;i < len;++i) {
    gdjs.sala6DCode.GDpuzzleObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.sala6DCode.asyncCallback17709476 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList15 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17709476(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17710524 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList16 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17710524(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17711556 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList17 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17711556(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17712604 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList18 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17712604(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17713636 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList19 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17713636(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17714604 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList20 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17714604(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17715644 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList21 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17715644(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17716676 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList22 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17716676(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17717708 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList23 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17717708(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17718804 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList24 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17718804(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17719836 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList25 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17719836(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17720868 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList26 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17720868(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17721900 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList27 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17721900(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17722932 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList28 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17722932(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17723964 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList29 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17723964(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17724996 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList30 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17724996(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17726028 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList31 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17726028(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17726924 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList32 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17726924(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17727956 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList33 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17727956(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17728988 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList34 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17728988(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17730020 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList35 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17730020(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17731052 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList36 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17731052(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17732084 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList37 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17732084(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17733116 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList38 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17733116(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17734148 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList39 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17734148(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17735180 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList40 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17735180(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.eventsList41 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletraObjects3, gdjs.sala6DCode.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletraObjects4[i].setAnimationFrame(0);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList15(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "b");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletraObjects3, gdjs.sala6DCode.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletraObjects4[i].setAnimationFrame(1);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList16(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "c");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletraObjects3, gdjs.sala6DCode.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletraObjects4[i].setAnimationFrame(2);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList17(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletraObjects3, gdjs.sala6DCode.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletraObjects4[i].setAnimationFrame(3);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList18(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "e");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletraObjects3, gdjs.sala6DCode.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletraObjects4[i].setAnimationFrame(4);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList19(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "f");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletraObjects3, gdjs.sala6DCode.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletraObjects4[i].setAnimationFrame(5);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList20(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "g");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletraObjects3, gdjs.sala6DCode.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletraObjects4[i].setAnimationFrame(6);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList21(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "h");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletraObjects3, gdjs.sala6DCode.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletraObjects4[i].setAnimationFrame(7);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList22(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "i");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletraObjects3, gdjs.sala6DCode.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletraObjects4[i].setAnimationFrame(8);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList23(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "j");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletraObjects3, gdjs.sala6DCode.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletraObjects4[i].setAnimationFrame(9);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList24(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "k");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletraObjects3, gdjs.sala6DCode.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletraObjects4[i].setAnimationFrame(10);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList25(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "l");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletraObjects3, gdjs.sala6DCode.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletraObjects4[i].setAnimationFrame(11);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList26(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "m");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletraObjects3, gdjs.sala6DCode.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletraObjects4[i].setAnimationFrame(12);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList27(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "n");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletraObjects3, gdjs.sala6DCode.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletraObjects4[i].setAnimationFrame(13);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList28(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "o");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletraObjects3, gdjs.sala6DCode.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletraObjects4[i].setAnimationFrame(14);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList29(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "p");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletraObjects3, gdjs.sala6DCode.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletraObjects4[i].setAnimationFrame(15);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList30(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "q");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletraObjects3, gdjs.sala6DCode.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletraObjects4[i].setAnimationFrame(16);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList31(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "r");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletraObjects3, gdjs.sala6DCode.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletraObjects4[i].setAnimationFrame(17);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList32(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletraObjects3, gdjs.sala6DCode.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletraObjects4[i].setAnimationFrame(18);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList33(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "t");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletraObjects3, gdjs.sala6DCode.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletraObjects4[i].setAnimationFrame(19);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList34(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "u");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletraObjects3, gdjs.sala6DCode.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletraObjects4[i].setAnimationFrame(20);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList35(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "v");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletraObjects3, gdjs.sala6DCode.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletraObjects4[i].setAnimationFrame(21);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList36(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletraObjects3, gdjs.sala6DCode.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletraObjects4[i].setAnimationFrame(22);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList37(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "x");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletraObjects3, gdjs.sala6DCode.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletraObjects4[i].setAnimationFrame(23);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList38(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "y");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletraObjects3, gdjs.sala6DCode.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletraObjects4[i].setAnimationFrame(24);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList39(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletraObjects3, gdjs.sala6DCode.GDletraObjects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletraObjects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletraObjects4[i].setAnimationFrame(25);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList40(runtimeScene);} //End of subevents
}

}


};gdjs.sala6DCode.asyncCallback17738508 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList42 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17738508(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17739556 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList43 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17739556(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17740588 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList44 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17740588(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17741636 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList45 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17741636(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17742668 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList46 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17742668(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17743636 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList47 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17743636(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17744676 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList48 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17744676(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17745708 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList49 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17745708(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17746740 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList50 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17746740(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17747836 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList51 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17747836(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17748868 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList52 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17748868(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17749900 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList53 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17749900(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17750932 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList54 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17750932(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17751964 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList55 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17751964(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17752996 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList56 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17752996(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17754028 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList57 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17754028(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17755060 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList58 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17755060(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17755956 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList59 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17755956(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17756988 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList60 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17756988(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17758020 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList61 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17758020(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17759052 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList62 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17759052(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17760084 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList63 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17760084(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17761116 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList64 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17761116(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17762148 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList65 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17762148(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17763180 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList66 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17763180(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17764212 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList67 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17764212(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.eventsList68 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra2Objects3, gdjs.sala6DCode.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra2Objects4[i].setAnimationFrame(0);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList42(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "b");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra2Objects3, gdjs.sala6DCode.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra2Objects4[i].setAnimationFrame(1);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList43(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "c");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra2Objects3, gdjs.sala6DCode.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra2Objects4[i].setAnimationFrame(2);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList44(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra2Objects3, gdjs.sala6DCode.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra2Objects4[i].setAnimationFrame(3);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList45(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "e");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra2Objects3, gdjs.sala6DCode.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra2Objects4[i].setAnimationFrame(4);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList46(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "f");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra2Objects3, gdjs.sala6DCode.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra2Objects4[i].setAnimationFrame(5);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList47(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "g");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra2Objects3, gdjs.sala6DCode.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra2Objects4[i].setAnimationFrame(6);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList48(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "h");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra2Objects3, gdjs.sala6DCode.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra2Objects4[i].setAnimationFrame(7);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList49(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "i");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra2Objects3, gdjs.sala6DCode.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra2Objects4[i].setAnimationFrame(8);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList50(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "j");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra2Objects3, gdjs.sala6DCode.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra2Objects4[i].setAnimationFrame(9);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList51(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "k");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra2Objects3, gdjs.sala6DCode.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra2Objects4[i].setAnimationFrame(10);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList52(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "l");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra2Objects3, gdjs.sala6DCode.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra2Objects4[i].setAnimationFrame(11);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList53(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "m");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra2Objects3, gdjs.sala6DCode.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra2Objects4[i].setAnimationFrame(12);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList54(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "n");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra2Objects3, gdjs.sala6DCode.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra2Objects4[i].setAnimationFrame(13);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList55(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "o");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra2Objects3, gdjs.sala6DCode.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra2Objects4[i].setAnimationFrame(14);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList56(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "p");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra2Objects3, gdjs.sala6DCode.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra2Objects4[i].setAnimationFrame(15);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList57(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "q");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra2Objects3, gdjs.sala6DCode.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra2Objects4[i].setAnimationFrame(16);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList58(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "r");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra2Objects3, gdjs.sala6DCode.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra2Objects4[i].setAnimationFrame(17);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList59(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra2Objects3, gdjs.sala6DCode.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra2Objects4[i].setAnimationFrame(18);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList60(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "t");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra2Objects3, gdjs.sala6DCode.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra2Objects4[i].setAnimationFrame(19);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList61(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "u");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra2Objects3, gdjs.sala6DCode.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra2Objects4[i].setAnimationFrame(20);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList62(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "v");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra2Objects3, gdjs.sala6DCode.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra2Objects4[i].setAnimationFrame(21);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList63(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra2Objects3, gdjs.sala6DCode.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra2Objects4[i].setAnimationFrame(22);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList64(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "x");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra2Objects3, gdjs.sala6DCode.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra2Objects4[i].setAnimationFrame(23);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList65(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "y");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra2Objects3, gdjs.sala6DCode.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra2Objects4[i].setAnimationFrame(24);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList66(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra2Objects3, gdjs.sala6DCode.GDletra2Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra2Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra2Objects4[i].setAnimationFrame(25);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList67(runtimeScene);} //End of subevents
}

}


};gdjs.sala6DCode.asyncCallback17767644 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList69 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17767644(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17768692 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList70 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17768692(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17769724 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList71 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17769724(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17770772 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList72 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17770772(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17771804 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList73 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17771804(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17772772 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList74 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17772772(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17773812 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList75 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17773812(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17774844 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList76 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17774844(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17775876 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList77 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17775876(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17776972 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList78 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17776972(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17778004 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList79 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17778004(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17779036 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList80 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17779036(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17780068 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList81 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17780068(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17781100 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList82 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17781100(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17782132 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList83 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17782132(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17783164 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList84 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17783164(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17784196 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList85 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17784196(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17785092 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList86 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17785092(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17786124 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList87 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17786124(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17787156 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList88 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17787156(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17788188 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList89 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17788188(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17789220 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList90 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17789220(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17790252 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList91 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17790252(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17791284 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList92 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17791284(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17792316 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList93 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17792316(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17793348 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList94 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17793348(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.eventsList95 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra3Objects3, gdjs.sala6DCode.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra3Objects4[i].setAnimationFrame(0);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList69(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "b");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra3Objects3, gdjs.sala6DCode.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra3Objects4[i].setAnimationFrame(1);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList70(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "c");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra3Objects3, gdjs.sala6DCode.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra3Objects4[i].setAnimationFrame(2);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList71(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra3Objects3, gdjs.sala6DCode.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra3Objects4[i].setAnimationFrame(3);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList72(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "e");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra3Objects3, gdjs.sala6DCode.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra3Objects4[i].setAnimationFrame(4);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList73(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "f");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra3Objects3, gdjs.sala6DCode.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra3Objects4[i].setAnimationFrame(5);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList74(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "g");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra3Objects3, gdjs.sala6DCode.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra3Objects4[i].setAnimationFrame(6);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList75(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "h");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra3Objects3, gdjs.sala6DCode.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra3Objects4[i].setAnimationFrame(7);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList76(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "i");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra3Objects3, gdjs.sala6DCode.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra3Objects4[i].setAnimationFrame(8);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList77(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "j");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra3Objects3, gdjs.sala6DCode.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra3Objects4[i].setAnimationFrame(9);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList78(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "k");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra3Objects3, gdjs.sala6DCode.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra3Objects4[i].setAnimationFrame(10);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList79(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "l");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra3Objects3, gdjs.sala6DCode.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra3Objects4[i].setAnimationFrame(11);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList80(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "m");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra3Objects3, gdjs.sala6DCode.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra3Objects4[i].setAnimationFrame(12);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList81(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "n");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra3Objects3, gdjs.sala6DCode.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra3Objects4[i].setAnimationFrame(13);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList82(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "o");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra3Objects3, gdjs.sala6DCode.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra3Objects4[i].setAnimationFrame(14);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList83(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "p");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra3Objects3, gdjs.sala6DCode.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra3Objects4[i].setAnimationFrame(15);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList84(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "q");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra3Objects3, gdjs.sala6DCode.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra3Objects4[i].setAnimationFrame(16);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList85(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "r");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra3Objects3, gdjs.sala6DCode.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra3Objects4[i].setAnimationFrame(17);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList86(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra3Objects3, gdjs.sala6DCode.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra3Objects4[i].setAnimationFrame(18);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList87(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "t");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra3Objects3, gdjs.sala6DCode.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra3Objects4[i].setAnimationFrame(19);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList88(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "u");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra3Objects3, gdjs.sala6DCode.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra3Objects4[i].setAnimationFrame(20);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList89(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "v");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra3Objects3, gdjs.sala6DCode.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra3Objects4[i].setAnimationFrame(21);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList90(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra3Objects3, gdjs.sala6DCode.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra3Objects4[i].setAnimationFrame(22);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList91(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "x");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra3Objects3, gdjs.sala6DCode.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra3Objects4[i].setAnimationFrame(23);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList92(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "y");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra3Objects3, gdjs.sala6DCode.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra3Objects4[i].setAnimationFrame(24);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList93(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra3Objects3, gdjs.sala6DCode.GDletra3Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra3Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra3Objects4[i].setAnimationFrame(25);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList94(runtimeScene);} //End of subevents
}

}


};gdjs.sala6DCode.asyncCallback17796788 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList96 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17796788(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17797836 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList97 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17797836(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17798868 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList98 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17798868(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17799916 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList99 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17799916(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17800948 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList100 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17800948(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17801916 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList101 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17801916(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17802956 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList102 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17802956(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17803988 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList103 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17803988(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17805020 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList104 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17805020(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17806116 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList105 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17806116(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17807148 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList106 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17807148(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17808180 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList107 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17808180(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17809212 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList108 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17809212(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17810244 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList109 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17810244(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17811276 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList110 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17811276(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17812308 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList111 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17812308(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17813340 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList112 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17813340(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17814236 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList113 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17814236(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17815268 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList114 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17815268(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17816300 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList115 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17816300(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17817332 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList116 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17817332(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17818364 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList117 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17818364(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17819396 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList118 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17819396(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17820428 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList119 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17820428(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17821460 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList120 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17821460(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17822492 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList121 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17822492(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.eventsList122 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra4Objects3, gdjs.sala6DCode.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra4Objects4[i].setAnimationFrame(0);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList96(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "b");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra4Objects3, gdjs.sala6DCode.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra4Objects4[i].setAnimationFrame(1);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList97(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "c");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra4Objects3, gdjs.sala6DCode.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra4Objects4[i].setAnimationFrame(2);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList98(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra4Objects3, gdjs.sala6DCode.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra4Objects4[i].setAnimationFrame(3);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList99(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "e");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra4Objects3, gdjs.sala6DCode.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra4Objects4[i].setAnimationFrame(4);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList100(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "f");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra4Objects3, gdjs.sala6DCode.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra4Objects4[i].setAnimationFrame(5);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList101(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "g");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra4Objects3, gdjs.sala6DCode.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra4Objects4[i].setAnimationFrame(6);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList102(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "h");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra4Objects3, gdjs.sala6DCode.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra4Objects4[i].setAnimationFrame(7);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList103(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "i");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra4Objects3, gdjs.sala6DCode.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra4Objects4[i].setAnimationFrame(8);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList104(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "j");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra4Objects3, gdjs.sala6DCode.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra4Objects4[i].setAnimationFrame(9);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList105(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "k");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra4Objects3, gdjs.sala6DCode.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra4Objects4[i].setAnimationFrame(10);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList106(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "l");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra4Objects3, gdjs.sala6DCode.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra4Objects4[i].setAnimationFrame(11);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList107(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "m");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra4Objects3, gdjs.sala6DCode.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra4Objects4[i].setAnimationFrame(12);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList108(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "n");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra4Objects3, gdjs.sala6DCode.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra4Objects4[i].setAnimationFrame(13);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList109(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "o");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra4Objects3, gdjs.sala6DCode.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra4Objects4[i].setAnimationFrame(14);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList110(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "p");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra4Objects3, gdjs.sala6DCode.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra4Objects4[i].setAnimationFrame(15);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList111(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "q");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra4Objects3, gdjs.sala6DCode.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra4Objects4[i].setAnimationFrame(16);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList112(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "r");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra4Objects3, gdjs.sala6DCode.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra4Objects4[i].setAnimationFrame(17);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList113(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra4Objects3, gdjs.sala6DCode.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra4Objects4[i].setAnimationFrame(18);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList114(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "t");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra4Objects3, gdjs.sala6DCode.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra4Objects4[i].setAnimationFrame(19);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList115(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "u");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra4Objects3, gdjs.sala6DCode.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra4Objects4[i].setAnimationFrame(20);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList116(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "v");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra4Objects3, gdjs.sala6DCode.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra4Objects4[i].setAnimationFrame(21);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList117(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra4Objects3, gdjs.sala6DCode.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra4Objects4[i].setAnimationFrame(22);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList118(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "x");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra4Objects3, gdjs.sala6DCode.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra4Objects4[i].setAnimationFrame(23);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList119(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "y");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra4Objects3, gdjs.sala6DCode.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra4Objects4[i].setAnimationFrame(24);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList120(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra4Objects3, gdjs.sala6DCode.GDletra4Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra4Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra4Objects4[i].setAnimationFrame(25);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList121(runtimeScene);} //End of subevents
}

}


};gdjs.sala6DCode.asyncCallback17825924 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList123 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17825924(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17826972 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList124 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17826972(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17828004 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList125 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17828004(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17829052 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList126 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17829052(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17830084 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList127 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17830084(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17831052 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList128 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17831052(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17832092 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList129 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17832092(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17833124 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList130 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17833124(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17834156 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList131 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17834156(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17835252 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList132 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17835252(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17836284 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList133 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17836284(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17837316 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList134 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17837316(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17838348 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList135 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17838348(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17839380 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList136 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17839380(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17840412 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList137 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17840412(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17841444 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList138 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17841444(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17842476 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList139 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17842476(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17843372 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList140 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17843372(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17844404 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList141 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17844404(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17845436 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList142 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17845436(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17846468 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList143 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17846468(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17847500 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList144 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17847500(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17848532 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList145 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17848532(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17849564 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList146 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17849564(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17850596 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList147 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17850596(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17851628 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList148 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17851628(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.eventsList149 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra5Objects3, gdjs.sala6DCode.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra5Objects4[i].setAnimationFrame(0);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList123(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "b");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra5Objects3, gdjs.sala6DCode.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra5Objects4[i].setAnimationFrame(1);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList124(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "c");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra5Objects3, gdjs.sala6DCode.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra5Objects4[i].setAnimationFrame(2);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList125(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra5Objects3, gdjs.sala6DCode.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra5Objects4[i].setAnimationFrame(3);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList126(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "e");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra5Objects3, gdjs.sala6DCode.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra5Objects4[i].setAnimationFrame(4);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList127(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "f");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra5Objects3, gdjs.sala6DCode.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra5Objects4[i].setAnimationFrame(5);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList128(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "g");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra5Objects3, gdjs.sala6DCode.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra5Objects4[i].setAnimationFrame(6);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList129(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "h");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra5Objects3, gdjs.sala6DCode.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra5Objects4[i].setAnimationFrame(7);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList130(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "i");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra5Objects3, gdjs.sala6DCode.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra5Objects4[i].setAnimationFrame(8);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList131(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "j");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra5Objects3, gdjs.sala6DCode.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra5Objects4[i].setAnimationFrame(9);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList132(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "k");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra5Objects3, gdjs.sala6DCode.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra5Objects4[i].setAnimationFrame(10);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList133(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "l");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra5Objects3, gdjs.sala6DCode.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra5Objects4[i].setAnimationFrame(11);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList134(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "m");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra5Objects3, gdjs.sala6DCode.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra5Objects4[i].setAnimationFrame(12);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList135(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "n");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra5Objects3, gdjs.sala6DCode.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra5Objects4[i].setAnimationFrame(13);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList136(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "o");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra5Objects3, gdjs.sala6DCode.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra5Objects4[i].setAnimationFrame(14);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList137(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "p");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra5Objects3, gdjs.sala6DCode.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra5Objects4[i].setAnimationFrame(15);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList138(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "q");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra5Objects3, gdjs.sala6DCode.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra5Objects4[i].setAnimationFrame(16);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList139(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "r");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra5Objects3, gdjs.sala6DCode.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra5Objects4[i].setAnimationFrame(17);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList140(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra5Objects3, gdjs.sala6DCode.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra5Objects4[i].setAnimationFrame(18);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList141(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "t");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra5Objects3, gdjs.sala6DCode.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra5Objects4[i].setAnimationFrame(19);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList142(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "u");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra5Objects3, gdjs.sala6DCode.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra5Objects4[i].setAnimationFrame(20);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList143(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "v");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra5Objects3, gdjs.sala6DCode.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra5Objects4[i].setAnimationFrame(21);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList144(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra5Objects3, gdjs.sala6DCode.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra5Objects4[i].setAnimationFrame(22);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList145(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "x");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra5Objects3, gdjs.sala6DCode.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra5Objects4[i].setAnimationFrame(23);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList146(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "y");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra5Objects3, gdjs.sala6DCode.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra5Objects4[i].setAnimationFrame(24);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList147(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.sala6DCode.GDletra5Objects3, gdjs.sala6DCode.GDletra5Objects4);

{for(var i = 0, len = gdjs.sala6DCode.GDletra5Objects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDletra5Objects4[i].setAnimationFrame(25);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList148(runtimeScene);} //End of subevents
}

}


};gdjs.sala6DCode.eventsList150 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), false, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setBoolean(true);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setBoolean(true);
}}

}


};gdjs.sala6DCode.asyncCallback17854940 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala6DCode.GDpersonajeObjects4);
gdjs.copyArray(runtimeScene.getObjects("puzzle"), gdjs.sala6DCode.GDpuzzleObjects4);
{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "puzzle");
}{for(var i = 0, len = gdjs.sala6DCode.GDpuzzleObjects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDpuzzleObjects4[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.sala6DCode.GDpersonajeObjects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDpersonajeObjects4[i].getBehavior("TopDownMovement").ignoreDefaultControls(false);
}
}
{ //Subevents
gdjs.sala6DCode.eventsList150(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList151 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17854940(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17854060 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala6DCode.GDcargaObjects3);
{for(var i = 0, len = gdjs.sala6DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala6DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 4, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala6DCode.eventsList151(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList152 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17854060(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17858828 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala6DCode.GDpersonajeObjects4);
gdjs.copyArray(runtimeScene.getObjects("puzzle"), gdjs.sala6DCode.GDpuzzleObjects4);
{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "puzzle");
}{for(var i = 0, len = gdjs.sala6DCode.GDpuzzleObjects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDpuzzleObjects4[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.sala6DCode.GDpersonajeObjects4.length ;i < len;++i) {
    gdjs.sala6DCode.GDpersonajeObjects4[i].getBehavior("TopDownMovement").ignoreDefaultControls(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(true);
}gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList153 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17858828(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17857876 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala6DCode.GDcargaObjects3);
{for(var i = 0, len = gdjs.sala6DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala6DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 4, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala6DCode.eventsList153(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList154 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17857876(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.asyncCallback17857300 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala6DCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("perdiste"), gdjs.sala6DCode.GDperdisteObjects2);
{for(var i = 0, len = gdjs.sala6DCode.GDperdisteObjects2.length ;i < len;++i) {
    gdjs.sala6DCode.GDperdisteObjects2[i].getBehavior("Animation").resumeAnimation();
}
}
{ //Subevents
gdjs.sala6DCode.eventsList154(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.sala6DCode.localVariables.length = 0;
}
gdjs.sala6DCode.eventsList155 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala6DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.sala6DCode.asyncCallback17857300(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala6DCode.eventsList156 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("letra"), gdjs.sala6DCode.GDletraObjects2);

for (gdjs.sala6DCode.forEachIndex3 = 0;gdjs.sala6DCode.forEachIndex3 < gdjs.sala6DCode.GDletraObjects2.length;++gdjs.sala6DCode.forEachIndex3) {
gdjs.sala6DCode.GDletraObjects3.length = 0;


gdjs.sala6DCode.forEachTemporary3 = gdjs.sala6DCode.GDletraObjects2[gdjs.sala6DCode.forEachIndex3];
gdjs.sala6DCode.GDletraObjects3.push(gdjs.sala6DCode.forEachTemporary3);
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
gdjs.sala6DCode.eventsList41(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("letra2"), gdjs.sala6DCode.GDletra2Objects2);

for (gdjs.sala6DCode.forEachIndex3 = 0;gdjs.sala6DCode.forEachIndex3 < gdjs.sala6DCode.GDletra2Objects2.length;++gdjs.sala6DCode.forEachIndex3) {
gdjs.sala6DCode.GDletra2Objects3.length = 0;


gdjs.sala6DCode.forEachTemporary3 = gdjs.sala6DCode.GDletra2Objects2[gdjs.sala6DCode.forEachIndex3];
gdjs.sala6DCode.GDletra2Objects3.push(gdjs.sala6DCode.forEachTemporary3);
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
gdjs.sala6DCode.eventsList68(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("letra3"), gdjs.sala6DCode.GDletra3Objects2);

for (gdjs.sala6DCode.forEachIndex3 = 0;gdjs.sala6DCode.forEachIndex3 < gdjs.sala6DCode.GDletra3Objects2.length;++gdjs.sala6DCode.forEachIndex3) {
gdjs.sala6DCode.GDletra3Objects3.length = 0;


gdjs.sala6DCode.forEachTemporary3 = gdjs.sala6DCode.GDletra3Objects2[gdjs.sala6DCode.forEachIndex3];
gdjs.sala6DCode.GDletra3Objects3.push(gdjs.sala6DCode.forEachTemporary3);
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
gdjs.sala6DCode.eventsList95(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("letra4"), gdjs.sala6DCode.GDletra4Objects2);

for (gdjs.sala6DCode.forEachIndex3 = 0;gdjs.sala6DCode.forEachIndex3 < gdjs.sala6DCode.GDletra4Objects2.length;++gdjs.sala6DCode.forEachIndex3) {
gdjs.sala6DCode.GDletra4Objects3.length = 0;


gdjs.sala6DCode.forEachTemporary3 = gdjs.sala6DCode.GDletra4Objects2[gdjs.sala6DCode.forEachIndex3];
gdjs.sala6DCode.GDletra4Objects3.push(gdjs.sala6DCode.forEachTemporary3);
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
gdjs.sala6DCode.eventsList122(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("letra5"), gdjs.sala6DCode.GDletra5Objects2);

for (gdjs.sala6DCode.forEachIndex3 = 0;gdjs.sala6DCode.forEachIndex3 < gdjs.sala6DCode.GDletra5Objects2.length;++gdjs.sala6DCode.forEachIndex3) {
gdjs.sala6DCode.GDletra5Objects3.length = 0;


gdjs.sala6DCode.forEachTemporary3 = gdjs.sala6DCode.GDletra5Objects2[gdjs.sala6DCode.forEachIndex3];
gdjs.sala6DCode.GDletra5Objects3.push(gdjs.sala6DCode.forEachTemporary3);
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
gdjs.sala6DCode.eventsList149(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("letra"), gdjs.sala6DCode.GDletraObjects2);
gdjs.copyArray(runtimeScene.getObjects("letra2"), gdjs.sala6DCode.GDletra2Objects2);
gdjs.copyArray(runtimeScene.getObjects("letra3"), gdjs.sala6DCode.GDletra3Objects2);
gdjs.copyArray(runtimeScene.getObjects("letra4"), gdjs.sala6DCode.GDletra4Objects2);
gdjs.copyArray(runtimeScene.getObjects("letra5"), gdjs.sala6DCode.GDletra5Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala6DCode.GDletraObjects2.length;i<l;++i) {
    if ( gdjs.sala6DCode.GDletraObjects2[i].getAnimationFrame() == 21 ) {
        isConditionTrue_1 = true;
        gdjs.sala6DCode.GDletraObjects2[k] = gdjs.sala6DCode.GDletraObjects2[i];
        ++k;
    }
}
gdjs.sala6DCode.GDletraObjects2.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala6DCode.GDletra2Objects2.length;i<l;++i) {
    if ( gdjs.sala6DCode.GDletra2Objects2[i].getAnimationFrame() == 21 ) {
        isConditionTrue_1 = true;
        gdjs.sala6DCode.GDletra2Objects2[k] = gdjs.sala6DCode.GDletra2Objects2[i];
        ++k;
    }
}
gdjs.sala6DCode.GDletra2Objects2.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala6DCode.GDletra3Objects2.length;i<l;++i) {
    if ( gdjs.sala6DCode.GDletra3Objects2[i].getAnimationFrame() == 21 ) {
        isConditionTrue_1 = true;
        gdjs.sala6DCode.GDletra3Objects2[k] = gdjs.sala6DCode.GDletra3Objects2[i];
        ++k;
    }
}
gdjs.sala6DCode.GDletra3Objects2.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala6DCode.GDletra4Objects2.length;i<l;++i) {
    if ( gdjs.sala6DCode.GDletra4Objects2[i].getAnimationFrame() == 21 ) {
        isConditionTrue_1 = true;
        gdjs.sala6DCode.GDletra4Objects2[k] = gdjs.sala6DCode.GDletra4Objects2[i];
        ++k;
    }
}
gdjs.sala6DCode.GDletra4Objects2.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala6DCode.GDletra5Objects2.length;i<l;++i) {
    if ( gdjs.sala6DCode.GDletra5Objects2[i].getAnimationFrame() == 21 ) {
        isConditionTrue_1 = true;
        gdjs.sala6DCode.GDletra5Objects2[k] = gdjs.sala6DCode.GDletra5Objects2[i];
        ++k;
    }
}
gdjs.sala6DCode.GDletra5Objects2.length = k;
}
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17854140);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.sala6DCode.eventsList152(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 20;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17857092);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.sala6DCode.eventsList155(runtimeScene);} //End of subevents
}

}


};gdjs.sala6DCode.eventsList157 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala6DCode.GDpersonajeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala6DCode.GDpersonajeObjects1.length;i<l;++i) {
    if ( !(gdjs.sala6DCode.GDpersonajeObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_1 = true;
        gdjs.sala6DCode.GDpersonajeObjects1[k] = gdjs.sala6DCode.GDpersonajeObjects1[i];
        ++k;
    }
}
gdjs.sala6DCode.GDpersonajeObjects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.sala6DCode.GDpersonajeObjects1 */
{for(var i = 0, len = gdjs.sala6DCode.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala6DCode.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("abrir");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala6DCode.GDpersonajeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = !(gdjs.evtTools.input.anyKeyPressed(runtimeScene));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala6DCode.GDpersonajeObjects1.length;i<l;++i) {
    if ( !(gdjs.sala6DCode.GDpersonajeObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_1 = true;
        gdjs.sala6DCode.GDpersonajeObjects1[k] = gdjs.sala6DCode.GDpersonajeObjects1[i];
        ++k;
    }
}
gdjs.sala6DCode.GDpersonajeObjects1.length = k;
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
/* Reuse gdjs.sala6DCode.GDpersonajeObjects1 */
{for(var i = 0, len = gdjs.sala6DCode.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala6DCode.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("descanso");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala6DCode.GDpersonajeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sala6DCode.GDpersonajeObjects1.length;i<l;++i) {
    if ( gdjs.sala6DCode.GDpersonajeObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.sala6DCode.GDpersonajeObjects1[k] = gdjs.sala6DCode.GDpersonajeObjects1[i];
        ++k;
    }
}
gdjs.sala6DCode.GDpersonajeObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.sala6DCode.GDpersonajeObjects1 */
{for(var i = 0, len = gdjs.sala6DCode.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala6DCode.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("caminar");
}
}
{ //Subevents
gdjs.sala6DCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala6DCode.GDpersonajeObjects1);
{for(var i = 0, len = gdjs.sala6DCode.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala6DCode.GDpersonajeObjects1[i].getBehavior("TopDownMovement").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.sala6DCode.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala6DCode.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("perder");
}
}
{ //Subevents
gdjs.sala6DCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala6DCode.GDpersonajeObjects1);
{for(var i = 0, len = gdjs.sala6DCode.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala6DCode.GDpersonajeObjects1[i].getBehavior("TopDownMovement").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.sala6DCode.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala6DCode.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("ganar");
}
}
{ //Subevents
gdjs.sala6DCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.sala6DCode.eventsList3(runtimeScene);
}


{


gdjs.sala6DCode.eventsList4(runtimeScene);
}


{


gdjs.sala6DCode.eventsList14(runtimeScene);
}


{


gdjs.sala6DCode.eventsList156(runtimeScene);
}


};

gdjs.sala6DCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.sala6DCode.GDsala1Objects1.length = 0;
gdjs.sala6DCode.GDsala1Objects2.length = 0;
gdjs.sala6DCode.GDsala1Objects3.length = 0;
gdjs.sala6DCode.GDsala1Objects4.length = 0;
gdjs.sala6DCode.GDsala1Objects5.length = 0;
gdjs.sala6DCode.GDfondopuzzleObjects1.length = 0;
gdjs.sala6DCode.GDfondopuzzleObjects2.length = 0;
gdjs.sala6DCode.GDfondopuzzleObjects3.length = 0;
gdjs.sala6DCode.GDfondopuzzleObjects4.length = 0;
gdjs.sala6DCode.GDfondopuzzleObjects5.length = 0;
gdjs.sala6DCode.GDletraObjects1.length = 0;
gdjs.sala6DCode.GDletraObjects2.length = 0;
gdjs.sala6DCode.GDletraObjects3.length = 0;
gdjs.sala6DCode.GDletraObjects4.length = 0;
gdjs.sala6DCode.GDletraObjects5.length = 0;
gdjs.sala6DCode.GDletra2Objects1.length = 0;
gdjs.sala6DCode.GDletra2Objects2.length = 0;
gdjs.sala6DCode.GDletra2Objects3.length = 0;
gdjs.sala6DCode.GDletra2Objects4.length = 0;
gdjs.sala6DCode.GDletra2Objects5.length = 0;
gdjs.sala6DCode.GDletra3Objects1.length = 0;
gdjs.sala6DCode.GDletra3Objects2.length = 0;
gdjs.sala6DCode.GDletra3Objects3.length = 0;
gdjs.sala6DCode.GDletra3Objects4.length = 0;
gdjs.sala6DCode.GDletra3Objects5.length = 0;
gdjs.sala6DCode.GDletra4Objects1.length = 0;
gdjs.sala6DCode.GDletra4Objects2.length = 0;
gdjs.sala6DCode.GDletra4Objects3.length = 0;
gdjs.sala6DCode.GDletra4Objects4.length = 0;
gdjs.sala6DCode.GDletra4Objects5.length = 0;
gdjs.sala6DCode.GDletra5Objects1.length = 0;
gdjs.sala6DCode.GDletra5Objects2.length = 0;
gdjs.sala6DCode.GDletra5Objects3.length = 0;
gdjs.sala6DCode.GDletra5Objects4.length = 0;
gdjs.sala6DCode.GDletra5Objects5.length = 0;
gdjs.sala6DCode.GDpersonajeObjects1.length = 0;
gdjs.sala6DCode.GDpersonajeObjects2.length = 0;
gdjs.sala6DCode.GDpersonajeObjects3.length = 0;
gdjs.sala6DCode.GDpersonajeObjects4.length = 0;
gdjs.sala6DCode.GDpersonajeObjects5.length = 0;
gdjs.sala6DCode.GDcargaObjects1.length = 0;
gdjs.sala6DCode.GDcargaObjects2.length = 0;
gdjs.sala6DCode.GDcargaObjects3.length = 0;
gdjs.sala6DCode.GDcargaObjects4.length = 0;
gdjs.sala6DCode.GDcargaObjects5.length = 0;
gdjs.sala6DCode.GDizquierdaObjects1.length = 0;
gdjs.sala6DCode.GDizquierdaObjects2.length = 0;
gdjs.sala6DCode.GDizquierdaObjects3.length = 0;
gdjs.sala6DCode.GDizquierdaObjects4.length = 0;
gdjs.sala6DCode.GDizquierdaObjects5.length = 0;
gdjs.sala6DCode.GDderechaObjects1.length = 0;
gdjs.sala6DCode.GDderechaObjects2.length = 0;
gdjs.sala6DCode.GDderechaObjects3.length = 0;
gdjs.sala6DCode.GDderechaObjects4.length = 0;
gdjs.sala6DCode.GDderechaObjects5.length = 0;
gdjs.sala6DCode.GDpuzzleObjects1.length = 0;
gdjs.sala6DCode.GDpuzzleObjects2.length = 0;
gdjs.sala6DCode.GDpuzzleObjects3.length = 0;
gdjs.sala6DCode.GDpuzzleObjects4.length = 0;
gdjs.sala6DCode.GDpuzzleObjects5.length = 0;
gdjs.sala6DCode.GDpuzzleCObjects1.length = 0;
gdjs.sala6DCode.GDpuzzleCObjects2.length = 0;
gdjs.sala6DCode.GDpuzzleCObjects3.length = 0;
gdjs.sala6DCode.GDpuzzleCObjects4.length = 0;
gdjs.sala6DCode.GDpuzzleCObjects5.length = 0;
gdjs.sala6DCode.GDcomienzopuzzleObjects1.length = 0;
gdjs.sala6DCode.GDcomienzopuzzleObjects2.length = 0;
gdjs.sala6DCode.GDcomienzopuzzleObjects3.length = 0;
gdjs.sala6DCode.GDcomienzopuzzleObjects4.length = 0;
gdjs.sala6DCode.GDcomienzopuzzleObjects5.length = 0;
gdjs.sala6DCode.GDpisoObjects1.length = 0;
gdjs.sala6DCode.GDpisoObjects2.length = 0;
gdjs.sala6DCode.GDpisoObjects3.length = 0;
gdjs.sala6DCode.GDpisoObjects4.length = 0;
gdjs.sala6DCode.GDpisoObjects5.length = 0;
gdjs.sala6DCode.GDtechoObjects1.length = 0;
gdjs.sala6DCode.GDtechoObjects2.length = 0;
gdjs.sala6DCode.GDtechoObjects3.length = 0;
gdjs.sala6DCode.GDtechoObjects4.length = 0;
gdjs.sala6DCode.GDtechoObjects5.length = 0;
gdjs.sala6DCode.GDpuertaizquierdaObjects1.length = 0;
gdjs.sala6DCode.GDpuertaizquierdaObjects2.length = 0;
gdjs.sala6DCode.GDpuertaizquierdaObjects3.length = 0;
gdjs.sala6DCode.GDpuertaizquierdaObjects4.length = 0;
gdjs.sala6DCode.GDpuertaizquierdaObjects5.length = 0;
gdjs.sala6DCode.GDpuertaderechaObjects1.length = 0;
gdjs.sala6DCode.GDpuertaderechaObjects2.length = 0;
gdjs.sala6DCode.GDpuertaderechaObjects3.length = 0;
gdjs.sala6DCode.GDpuertaderechaObjects4.length = 0;
gdjs.sala6DCode.GDpuertaderechaObjects5.length = 0;
gdjs.sala6DCode.GDperdisteObjects1.length = 0;
gdjs.sala6DCode.GDperdisteObjects2.length = 0;
gdjs.sala6DCode.GDperdisteObjects3.length = 0;
gdjs.sala6DCode.GDperdisteObjects4.length = 0;
gdjs.sala6DCode.GDperdisteObjects5.length = 0;

gdjs.sala6DCode.eventsList157(runtimeScene);
gdjs.sala6DCode.GDsala1Objects1.length = 0;
gdjs.sala6DCode.GDsala1Objects2.length = 0;
gdjs.sala6DCode.GDsala1Objects3.length = 0;
gdjs.sala6DCode.GDsala1Objects4.length = 0;
gdjs.sala6DCode.GDsala1Objects5.length = 0;
gdjs.sala6DCode.GDfondopuzzleObjects1.length = 0;
gdjs.sala6DCode.GDfondopuzzleObjects2.length = 0;
gdjs.sala6DCode.GDfondopuzzleObjects3.length = 0;
gdjs.sala6DCode.GDfondopuzzleObjects4.length = 0;
gdjs.sala6DCode.GDfondopuzzleObjects5.length = 0;
gdjs.sala6DCode.GDletraObjects1.length = 0;
gdjs.sala6DCode.GDletraObjects2.length = 0;
gdjs.sala6DCode.GDletraObjects3.length = 0;
gdjs.sala6DCode.GDletraObjects4.length = 0;
gdjs.sala6DCode.GDletraObjects5.length = 0;
gdjs.sala6DCode.GDletra2Objects1.length = 0;
gdjs.sala6DCode.GDletra2Objects2.length = 0;
gdjs.sala6DCode.GDletra2Objects3.length = 0;
gdjs.sala6DCode.GDletra2Objects4.length = 0;
gdjs.sala6DCode.GDletra2Objects5.length = 0;
gdjs.sala6DCode.GDletra3Objects1.length = 0;
gdjs.sala6DCode.GDletra3Objects2.length = 0;
gdjs.sala6DCode.GDletra3Objects3.length = 0;
gdjs.sala6DCode.GDletra3Objects4.length = 0;
gdjs.sala6DCode.GDletra3Objects5.length = 0;
gdjs.sala6DCode.GDletra4Objects1.length = 0;
gdjs.sala6DCode.GDletra4Objects2.length = 0;
gdjs.sala6DCode.GDletra4Objects3.length = 0;
gdjs.sala6DCode.GDletra4Objects4.length = 0;
gdjs.sala6DCode.GDletra4Objects5.length = 0;
gdjs.sala6DCode.GDletra5Objects1.length = 0;
gdjs.sala6DCode.GDletra5Objects2.length = 0;
gdjs.sala6DCode.GDletra5Objects3.length = 0;
gdjs.sala6DCode.GDletra5Objects4.length = 0;
gdjs.sala6DCode.GDletra5Objects5.length = 0;
gdjs.sala6DCode.GDpersonajeObjects1.length = 0;
gdjs.sala6DCode.GDpersonajeObjects2.length = 0;
gdjs.sala6DCode.GDpersonajeObjects3.length = 0;
gdjs.sala6DCode.GDpersonajeObjects4.length = 0;
gdjs.sala6DCode.GDpersonajeObjects5.length = 0;
gdjs.sala6DCode.GDcargaObjects1.length = 0;
gdjs.sala6DCode.GDcargaObjects2.length = 0;
gdjs.sala6DCode.GDcargaObjects3.length = 0;
gdjs.sala6DCode.GDcargaObjects4.length = 0;
gdjs.sala6DCode.GDcargaObjects5.length = 0;
gdjs.sala6DCode.GDizquierdaObjects1.length = 0;
gdjs.sala6DCode.GDizquierdaObjects2.length = 0;
gdjs.sala6DCode.GDizquierdaObjects3.length = 0;
gdjs.sala6DCode.GDizquierdaObjects4.length = 0;
gdjs.sala6DCode.GDizquierdaObjects5.length = 0;
gdjs.sala6DCode.GDderechaObjects1.length = 0;
gdjs.sala6DCode.GDderechaObjects2.length = 0;
gdjs.sala6DCode.GDderechaObjects3.length = 0;
gdjs.sala6DCode.GDderechaObjects4.length = 0;
gdjs.sala6DCode.GDderechaObjects5.length = 0;
gdjs.sala6DCode.GDpuzzleObjects1.length = 0;
gdjs.sala6DCode.GDpuzzleObjects2.length = 0;
gdjs.sala6DCode.GDpuzzleObjects3.length = 0;
gdjs.sala6DCode.GDpuzzleObjects4.length = 0;
gdjs.sala6DCode.GDpuzzleObjects5.length = 0;
gdjs.sala6DCode.GDpuzzleCObjects1.length = 0;
gdjs.sala6DCode.GDpuzzleCObjects2.length = 0;
gdjs.sala6DCode.GDpuzzleCObjects3.length = 0;
gdjs.sala6DCode.GDpuzzleCObjects4.length = 0;
gdjs.sala6DCode.GDpuzzleCObjects5.length = 0;
gdjs.sala6DCode.GDcomienzopuzzleObjects1.length = 0;
gdjs.sala6DCode.GDcomienzopuzzleObjects2.length = 0;
gdjs.sala6DCode.GDcomienzopuzzleObjects3.length = 0;
gdjs.sala6DCode.GDcomienzopuzzleObjects4.length = 0;
gdjs.sala6DCode.GDcomienzopuzzleObjects5.length = 0;
gdjs.sala6DCode.GDpisoObjects1.length = 0;
gdjs.sala6DCode.GDpisoObjects2.length = 0;
gdjs.sala6DCode.GDpisoObjects3.length = 0;
gdjs.sala6DCode.GDpisoObjects4.length = 0;
gdjs.sala6DCode.GDpisoObjects5.length = 0;
gdjs.sala6DCode.GDtechoObjects1.length = 0;
gdjs.sala6DCode.GDtechoObjects2.length = 0;
gdjs.sala6DCode.GDtechoObjects3.length = 0;
gdjs.sala6DCode.GDtechoObjects4.length = 0;
gdjs.sala6DCode.GDtechoObjects5.length = 0;
gdjs.sala6DCode.GDpuertaizquierdaObjects1.length = 0;
gdjs.sala6DCode.GDpuertaizquierdaObjects2.length = 0;
gdjs.sala6DCode.GDpuertaizquierdaObjects3.length = 0;
gdjs.sala6DCode.GDpuertaizquierdaObjects4.length = 0;
gdjs.sala6DCode.GDpuertaizquierdaObjects5.length = 0;
gdjs.sala6DCode.GDpuertaderechaObjects1.length = 0;
gdjs.sala6DCode.GDpuertaderechaObjects2.length = 0;
gdjs.sala6DCode.GDpuertaderechaObjects3.length = 0;
gdjs.sala6DCode.GDpuertaderechaObjects4.length = 0;
gdjs.sala6DCode.GDpuertaderechaObjects5.length = 0;
gdjs.sala6DCode.GDperdisteObjects1.length = 0;
gdjs.sala6DCode.GDperdisteObjects2.length = 0;
gdjs.sala6DCode.GDperdisteObjects3.length = 0;
gdjs.sala6DCode.GDperdisteObjects4.length = 0;
gdjs.sala6DCode.GDperdisteObjects5.length = 0;


return;

}

gdjs['sala6DCode'] = gdjs.sala6DCode;
