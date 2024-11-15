gdjs.sala4Code = {};
gdjs.sala4Code.localVariables = [];
gdjs.sala4Code.forEachIndex3 = 0;

gdjs.sala4Code.forEachObjects3 = [];

gdjs.sala4Code.forEachTemporary3 = null;

gdjs.sala4Code.forEachTotalCount3 = 0;

gdjs.sala4Code.GDsala1Objects1= [];
gdjs.sala4Code.GDsala1Objects2= [];
gdjs.sala4Code.GDsala1Objects3= [];
gdjs.sala4Code.GDsala1Objects4= [];
gdjs.sala4Code.GDsala1Objects5= [];
gdjs.sala4Code.GDfondopuzzleObjects1= [];
gdjs.sala4Code.GDfondopuzzleObjects2= [];
gdjs.sala4Code.GDfondopuzzleObjects3= [];
gdjs.sala4Code.GDfondopuzzleObjects4= [];
gdjs.sala4Code.GDfondopuzzleObjects5= [];
gdjs.sala4Code.GDpiso2Objects1= [];
gdjs.sala4Code.GDpiso2Objects2= [];
gdjs.sala4Code.GDpiso2Objects3= [];
gdjs.sala4Code.GDpiso2Objects4= [];
gdjs.sala4Code.GDpiso2Objects5= [];
gdjs.sala4Code.GDestrellaObjects1= [];
gdjs.sala4Code.GDestrellaObjects2= [];
gdjs.sala4Code.GDestrellaObjects3= [];
gdjs.sala4Code.GDestrellaObjects4= [];
gdjs.sala4Code.GDestrellaObjects5= [];
gdjs.sala4Code.GDpesaObjects1= [];
gdjs.sala4Code.GDpesaObjects2= [];
gdjs.sala4Code.GDpesaObjects3= [];
gdjs.sala4Code.GDpesaObjects4= [];
gdjs.sala4Code.GDpesaObjects5= [];
gdjs.sala4Code.GDKObjects1= [];
gdjs.sala4Code.GDKObjects2= [];
gdjs.sala4Code.GDKObjects3= [];
gdjs.sala4Code.GDKObjects4= [];
gdjs.sala4Code.GDKObjects5= [];
gdjs.sala4Code.GDceroObjects1= [];
gdjs.sala4Code.GDceroObjects2= [];
gdjs.sala4Code.GDceroObjects3= [];
gdjs.sala4Code.GDceroObjects4= [];
gdjs.sala4Code.GDceroObjects5= [];
gdjs.sala4Code.GDpersonajeObjects1= [];
gdjs.sala4Code.GDpersonajeObjects2= [];
gdjs.sala4Code.GDpersonajeObjects3= [];
gdjs.sala4Code.GDpersonajeObjects4= [];
gdjs.sala4Code.GDpersonajeObjects5= [];
gdjs.sala4Code.GDcargaObjects1= [];
gdjs.sala4Code.GDcargaObjects2= [];
gdjs.sala4Code.GDcargaObjects3= [];
gdjs.sala4Code.GDcargaObjects4= [];
gdjs.sala4Code.GDcargaObjects5= [];
gdjs.sala4Code.GDizquierdaObjects1= [];
gdjs.sala4Code.GDizquierdaObjects2= [];
gdjs.sala4Code.GDizquierdaObjects3= [];
gdjs.sala4Code.GDizquierdaObjects4= [];
gdjs.sala4Code.GDizquierdaObjects5= [];
gdjs.sala4Code.GDderechaObjects1= [];
gdjs.sala4Code.GDderechaObjects2= [];
gdjs.sala4Code.GDderechaObjects3= [];
gdjs.sala4Code.GDderechaObjects4= [];
gdjs.sala4Code.GDderechaObjects5= [];
gdjs.sala4Code.GDpuzzleObjects1= [];
gdjs.sala4Code.GDpuzzleObjects2= [];
gdjs.sala4Code.GDpuzzleObjects3= [];
gdjs.sala4Code.GDpuzzleObjects4= [];
gdjs.sala4Code.GDpuzzleObjects5= [];
gdjs.sala4Code.GDpuzzleCObjects1= [];
gdjs.sala4Code.GDpuzzleCObjects2= [];
gdjs.sala4Code.GDpuzzleCObjects3= [];
gdjs.sala4Code.GDpuzzleCObjects4= [];
gdjs.sala4Code.GDpuzzleCObjects5= [];
gdjs.sala4Code.GDcomienzopuzzleObjects1= [];
gdjs.sala4Code.GDcomienzopuzzleObjects2= [];
gdjs.sala4Code.GDcomienzopuzzleObjects3= [];
gdjs.sala4Code.GDcomienzopuzzleObjects4= [];
gdjs.sala4Code.GDcomienzopuzzleObjects5= [];
gdjs.sala4Code.GDpisoObjects1= [];
gdjs.sala4Code.GDpisoObjects2= [];
gdjs.sala4Code.GDpisoObjects3= [];
gdjs.sala4Code.GDpisoObjects4= [];
gdjs.sala4Code.GDpisoObjects5= [];
gdjs.sala4Code.GDtechoObjects1= [];
gdjs.sala4Code.GDtechoObjects2= [];
gdjs.sala4Code.GDtechoObjects3= [];
gdjs.sala4Code.GDtechoObjects4= [];
gdjs.sala4Code.GDtechoObjects5= [];
gdjs.sala4Code.GDpuertaizquierdaObjects1= [];
gdjs.sala4Code.GDpuertaizquierdaObjects2= [];
gdjs.sala4Code.GDpuertaizquierdaObjects3= [];
gdjs.sala4Code.GDpuertaizquierdaObjects4= [];
gdjs.sala4Code.GDpuertaizquierdaObjects5= [];
gdjs.sala4Code.GDpuertaderechaObjects1= [];
gdjs.sala4Code.GDpuertaderechaObjects2= [];
gdjs.sala4Code.GDpuertaderechaObjects3= [];
gdjs.sala4Code.GDpuertaderechaObjects4= [];
gdjs.sala4Code.GDpuertaderechaObjects5= [];
gdjs.sala4Code.GDperdisteObjects1= [];
gdjs.sala4Code.GDperdisteObjects2= [];
gdjs.sala4Code.GDperdisteObjects3= [];
gdjs.sala4Code.GDperdisteObjects4= [];
gdjs.sala4Code.GDperdisteObjects5= [];


gdjs.sala4Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.sala4Code.GDpersonajeObjects1, gdjs.sala4Code.GDpersonajeObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sala4Code.GDpersonajeObjects2.length;i<l;++i) {
    if ( gdjs.sala4Code.GDpersonajeObjects2[i].getBehavior("TopDownMovement").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.sala4Code.GDpersonajeObjects2[k] = gdjs.sala4Code.GDpersonajeObjects2[i];
        ++k;
    }
}
gdjs.sala4Code.GDpersonajeObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.sala4Code.GDpersonajeObjects2 */
{for(var i = 0, len = gdjs.sala4Code.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala4Code.GDpersonajeObjects2[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

/* Reuse gdjs.sala4Code.GDpersonajeObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sala4Code.GDpersonajeObjects1.length;i<l;++i) {
    if ( gdjs.sala4Code.GDpersonajeObjects1[i].getBehavior("TopDownMovement").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.sala4Code.GDpersonajeObjects1[k] = gdjs.sala4Code.GDpersonajeObjects1[i];
        ++k;
    }
}
gdjs.sala4Code.GDpersonajeObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.sala4Code.GDpersonajeObjects1 */
{for(var i = 0, len = gdjs.sala4Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala4Code.GDpersonajeObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


};gdjs.sala4Code.asyncCallback39222428 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("personaje"), gdjs.sala4Code.GDpersonajeObjects2);

{for(var i = 0, len = gdjs.sala4Code.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala4Code.GDpersonajeObjects2[i].getBehavior("TopDownMovement").ignoreDefaultControls(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(false);
}gdjs.sala4Code.localVariables.length = 0;
}
gdjs.sala4Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4Code.localVariables);
for (const obj of gdjs.sala4Code.GDpersonajeObjects1) asyncObjectsList.addObject("personaje", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.sala4Code.asyncCallback39222428(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4Code.asyncCallback39224772 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("personaje"), gdjs.sala4Code.GDpersonajeObjects2);

{for(var i = 0, len = gdjs.sala4Code.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala4Code.GDpersonajeObjects2[i].getBehavior("TopDownMovement").ignoreDefaultControls(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setBoolean(false);
}gdjs.sala4Code.localVariables.length = 0;
}
gdjs.sala4Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4Code.localVariables);
for (const obj of gdjs.sala4Code.GDpersonajeObjects1) asyncObjectsList.addObject("personaje", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.sala4Code.asyncCallback39224772(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala4Code.GDpersonajeObjects2});
gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaizquierdaObjects2Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala4Code.GDpuertaizquierdaObjects2});
gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaizquierdaObjects2Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala4Code.GDpuertaizquierdaObjects2});
gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala4Code.GDpersonajeObjects2});
gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaderechaObjects2Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala4Code.GDpuertaderechaObjects2});
gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaderechaObjects2Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala4Code.GDpuertaderechaObjects2});
gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala4Code.GDpersonajeObjects2});
gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpisoObjects2Objects = Hashtable.newFrom({"piso": gdjs.sala4Code.GDpisoObjects2});
gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpisoObjects2Objects = Hashtable.newFrom({"piso": gdjs.sala4Code.GDpisoObjects2});
gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects1Objects = Hashtable.newFrom({"personaje": gdjs.sala4Code.GDpersonajeObjects1});
gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDtechoObjects1Objects = Hashtable.newFrom({"techo": gdjs.sala4Code.GDtechoObjects1});
gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDtechoObjects1Objects = Hashtable.newFrom({"techo": gdjs.sala4Code.GDtechoObjects1});
gdjs.sala4Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala4Code.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("puertaizquierda"), gdjs.sala4Code.GDpuertaizquierdaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects2Objects, gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaizquierdaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.sala4Code.GDpersonajeObjects2 */
/* Reuse gdjs.sala4Code.GDpuertaizquierdaObjects2 */
{for(var i = 0, len = gdjs.sala4Code.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala4Code.GDpersonajeObjects2[i].separateFromObjectsList(gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaizquierdaObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala4Code.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("puertaderecha"), gdjs.sala4Code.GDpuertaderechaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects2Objects, gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaderechaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.sala4Code.GDpersonajeObjects2 */
/* Reuse gdjs.sala4Code.GDpuertaderechaObjects2 */
{for(var i = 0, len = gdjs.sala4Code.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala4Code.GDpersonajeObjects2[i].separateFromObjectsList(gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaderechaObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala4Code.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("piso"), gdjs.sala4Code.GDpisoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects2Objects, gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpisoObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.sala4Code.GDpersonajeObjects2 */
/* Reuse gdjs.sala4Code.GDpisoObjects2 */
{for(var i = 0, len = gdjs.sala4Code.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala4Code.GDpersonajeObjects2[i].separateFromObjectsList(gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpisoObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala4Code.GDpersonajeObjects1);
gdjs.copyArray(runtimeScene.getObjects("techo"), gdjs.sala4Code.GDtechoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects1Objects, gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDtechoObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.sala4Code.GDpersonajeObjects1 */
/* Reuse gdjs.sala4Code.GDtechoObjects1 */
{for(var i = 0, len = gdjs.sala4Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala4Code.GDpersonajeObjects1[i].separateFromObjectsList(gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDtechoObjects1Objects, false);
}
}}

}


};gdjs.sala4Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.doesSceneExist(runtimeScene, "sala4");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("K"), gdjs.sala4Code.GDKObjects2);
gdjs.copyArray(runtimeScene.getObjects("cero"), gdjs.sala4Code.GDceroObjects2);
gdjs.copyArray(runtimeScene.getObjects("derecha"), gdjs.sala4Code.GDderechaObjects2);
gdjs.copyArray(runtimeScene.getObjects("izquierda"), gdjs.sala4Code.GDizquierdaObjects2);
gdjs.copyArray(runtimeScene.getObjects("puzzle"), gdjs.sala4Code.GDpuzzleObjects2);
{for(var i = 0, len = gdjs.sala4Code.GDizquierdaObjects2.length ;i < len;++i) {
    gdjs.sala4Code.GDizquierdaObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.sala4Code.GDderechaObjects2.length ;i < len;++i) {
    gdjs.sala4Code.GDderechaObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.sala4Code.GDpuzzleObjects2.length ;i < len;++i) {
    gdjs.sala4Code.GDpuzzleObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.sala4Code.GDKObjects2.length ;i < len;++i) {
    gdjs.sala4Code.GDKObjects2[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.sala4Code.GDceroObjects2.length ;i < len;++i) {
    gdjs.sala4Code.GDceroObjects2[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("K"), gdjs.sala4Code.GDKObjects1);
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4Code.GDcargaObjects1);
gdjs.copyArray(runtimeScene.getObjects("cero"), gdjs.sala4Code.GDceroObjects1);
gdjs.copyArray(runtimeScene.getObjects("comienzopuzzle"), gdjs.sala4Code.GDcomienzopuzzleObjects1);
gdjs.copyArray(runtimeScene.getObjects("derecha"), gdjs.sala4Code.GDderechaObjects1);
gdjs.copyArray(runtimeScene.getObjects("estrella"), gdjs.sala4Code.GDestrellaObjects1);
gdjs.copyArray(runtimeScene.getObjects("izquierda"), gdjs.sala4Code.GDizquierdaObjects1);
gdjs.copyArray(runtimeScene.getObjects("perdiste"), gdjs.sala4Code.GDperdisteObjects1);
gdjs.copyArray(runtimeScene.getObjects("pesa"), gdjs.sala4Code.GDpesaObjects1);
gdjs.copyArray(runtimeScene.getObjects("puzzle"), gdjs.sala4Code.GDpuzzleObjects1);
{for(var i = 0, len = gdjs.sala4Code.GDcargaObjects1.length ;i < len;++i) {
    gdjs.sala4Code.GDcargaObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.sala4Code.GDizquierdaObjects1.length ;i < len;++i) {
    gdjs.sala4Code.GDizquierdaObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala4Code.GDderechaObjects1.length ;i < len;++i) {
    gdjs.sala4Code.GDderechaObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala4Code.GDpuzzleObjects1.length ;i < len;++i) {
    gdjs.sala4Code.GDpuzzleObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala4Code.GDestrellaObjects1.length ;i < len;++i) {
    gdjs.sala4Code.GDestrellaObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala4Code.GDcomienzopuzzleObjects1.length ;i < len;++i) {
    gdjs.sala4Code.GDcomienzopuzzleObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala4Code.GDperdisteObjects1.length ;i < len;++i) {
    gdjs.sala4Code.GDperdisteObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{gdjs.evtTools.input.showCursor(runtimeScene);
}{for(var i = 0, len = gdjs.sala4Code.GDpesaObjects1.length ;i < len;++i) {
    gdjs.sala4Code.GDpesaObjects1[i].activateBehavior("Arrastrable", false);
}
}{for(var i = 0, len = gdjs.sala4Code.GDceroObjects1.length ;i < len;++i) {
    gdjs.sala4Code.GDceroObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.sala4Code.GDKObjects1.length ;i < len;++i) {
    gdjs.sala4Code.GDKObjects1[i].hide();
}
}{gdjs.evtTools.input.showCursor(runtimeScene);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


};gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala4Code.GDpersonajeObjects2});
gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaizquierdaObjects2Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala4Code.GDpuertaizquierdaObjects2});
gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala4Code.GDpersonajeObjects3});
gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala4Code.GDpuertaizquierdaObjects3});
gdjs.sala4Code.asyncCallback39229228 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala1D", false);
}gdjs.sala4Code.localVariables.length = 0;
}
gdjs.sala4Code.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4Code.asyncCallback39229228(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala4Code.GDpersonajeObjects3});
gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala4Code.GDpuertaizquierdaObjects3});
gdjs.sala4Code.asyncCallback39232300 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala2D", false);
}gdjs.sala4Code.localVariables.length = 0;
}
gdjs.sala4Code.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4Code.asyncCallback39232300(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala4Code.GDpersonajeObjects3});
gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala4Code.GDpuertaizquierdaObjects3});
gdjs.sala4Code.asyncCallback39236340 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala3D", false);
}gdjs.sala4Code.localVariables.length = 0;
}
gdjs.sala4Code.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4Code.asyncCallback39236340(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala4Code.GDpersonajeObjects3});
gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala4Code.GDpuertaizquierdaObjects3});
gdjs.sala4Code.asyncCallback39240396 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala4D", false);
}gdjs.sala4Code.localVariables.length = 0;
}
gdjs.sala4Code.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4Code.asyncCallback39240396(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala4Code.GDpersonajeObjects3});
gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala4Code.GDpuertaizquierdaObjects3});
gdjs.sala4Code.asyncCallback39244436 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala5D", false);
}gdjs.sala4Code.localVariables.length = 0;
}
gdjs.sala4Code.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4Code.asyncCallback39244436(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala4Code.GDpersonajeObjects3});
gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala4Code.GDpuertaizquierdaObjects3});
gdjs.sala4Code.asyncCallback39248508 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala6D", false);
}gdjs.sala4Code.localVariables.length = 0;
}
gdjs.sala4Code.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4Code.asyncCallback39248508(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala4Code.GDpersonajeObjects3});
gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala4Code.GDpuertaizquierdaObjects3});
gdjs.sala4Code.asyncCallback39252548 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala7D", false);
}gdjs.sala4Code.localVariables.length = 0;
}
gdjs.sala4Code.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4Code.asyncCallback39252548(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala4Code.GDpersonajeObjects3});
gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala4Code.GDpuertaizquierdaObjects3});
gdjs.sala4Code.asyncCallback39256588 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala8D", false);
}gdjs.sala4Code.localVariables.length = 0;
}
gdjs.sala4Code.eventsList12 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4Code.asyncCallback39256588(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala4Code.GDpersonajeObjects3});
gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala4Code.GDpuertaizquierdaObjects3});
gdjs.sala4Code.asyncCallback39260628 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala9D", false);
}gdjs.sala4Code.localVariables.length = 0;
}
gdjs.sala4Code.eventsList13 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4Code.asyncCallback39260628(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala4Code.GDpersonajeObjects2});
gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaizquierdaObjects2Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala4Code.GDpuertaizquierdaObjects2});
gdjs.sala4Code.asyncCallback39264732 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala10D", false);
}gdjs.sala4Code.localVariables.length = 0;
}
gdjs.sala4Code.eventsList14 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4Code.asyncCallback39264732(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4Code.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.sala4Code.GDpersonajeObjects2, gdjs.sala4Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala4Code.GDpuertaizquierdaObjects2, gdjs.sala4Code.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects3Objects, gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala4Code.GDizquierdaObjects2, gdjs.sala4Code.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala4Code.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala4Code.GDpersonajeObjects2, gdjs.sala4Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala4Code.GDpuertaizquierdaObjects2, gdjs.sala4Code.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects3Objects, gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala4Code.GDizquierdaObjects2, gdjs.sala4Code.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala4Code.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4Code.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala4Code.GDpersonajeObjects2, gdjs.sala4Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala4Code.GDpuertaizquierdaObjects2, gdjs.sala4Code.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects3Objects, gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala4Code.GDizquierdaObjects2, gdjs.sala4Code.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala4Code.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala4Code.GDpersonajeObjects2, gdjs.sala4Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala4Code.GDpuertaizquierdaObjects2, gdjs.sala4Code.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects3Objects, gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala4Code.GDizquierdaObjects2, gdjs.sala4Code.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala4Code.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4Code.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala4Code.GDpersonajeObjects2, gdjs.sala4Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala4Code.GDpuertaizquierdaObjects2, gdjs.sala4Code.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects3Objects, gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala4Code.GDizquierdaObjects2, gdjs.sala4Code.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala4Code.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4Code.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala4Code.GDpersonajeObjects2, gdjs.sala4Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala4Code.GDpuertaizquierdaObjects2, gdjs.sala4Code.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects3Objects, gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala4Code.GDizquierdaObjects2, gdjs.sala4Code.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala4Code.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4Code.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala4Code.GDpersonajeObjects2, gdjs.sala4Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala4Code.GDpuertaizquierdaObjects2, gdjs.sala4Code.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects3Objects, gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala4Code.GDizquierdaObjects2, gdjs.sala4Code.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala4Code.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4Code.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala4Code.GDpersonajeObjects2, gdjs.sala4Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala4Code.GDpuertaizquierdaObjects2, gdjs.sala4Code.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects3Objects, gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala4Code.GDizquierdaObjects2, gdjs.sala4Code.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala4Code.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4Code.eventsList12(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala4Code.GDpersonajeObjects2, gdjs.sala4Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala4Code.GDpuertaizquierdaObjects2, gdjs.sala4Code.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects3Objects, gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala4Code.GDizquierdaObjects2, gdjs.sala4Code.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala4Code.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4Code.eventsList13(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.sala4Code.GDpersonajeObjects2 */
/* Reuse gdjs.sala4Code.GDpuertaizquierdaObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects2Objects, gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaizquierdaObjects2Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4Code.GDcargaObjects2);
/* Reuse gdjs.sala4Code.GDizquierdaObjects2 */
{for(var i = 0, len = gdjs.sala4Code.GDizquierdaObjects2.length ;i < len;++i) {
    gdjs.sala4Code.GDizquierdaObjects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4Code.GDcargaObjects2.length ;i < len;++i) {
    gdjs.sala4Code.GDcargaObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4Code.eventsList14(runtimeScene);} //End of subevents
}

}


};gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala4Code.GDpersonajeObjects2});
gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaderechaObjects2Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala4Code.GDpuertaderechaObjects2});
gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala4Code.GDpersonajeObjects3});
gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala4Code.GDpuertaderechaObjects3});
gdjs.sala4Code.asyncCallback39270068 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala1", false);
}gdjs.sala4Code.localVariables.length = 0;
}
gdjs.sala4Code.eventsList16 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4Code.asyncCallback39270068(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala4Code.GDpersonajeObjects3});
gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala4Code.GDpuertaderechaObjects3});
gdjs.sala4Code.asyncCallback39274236 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala2", false);
}gdjs.sala4Code.localVariables.length = 0;
}
gdjs.sala4Code.eventsList17 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4Code.asyncCallback39274236(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala4Code.GDpersonajeObjects3});
gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala4Code.GDpuertaderechaObjects3});
gdjs.sala4Code.asyncCallback39278380 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala3", false);
}gdjs.sala4Code.localVariables.length = 0;
}
gdjs.sala4Code.eventsList18 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4Code.asyncCallback39278380(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala4Code.GDpersonajeObjects3});
gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala4Code.GDpuertaderechaObjects3});
gdjs.sala4Code.asyncCallback39282540 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala4", false);
}gdjs.sala4Code.localVariables.length = 0;
}
gdjs.sala4Code.eventsList19 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4Code.asyncCallback39282540(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala4Code.GDpersonajeObjects3});
gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala4Code.GDpuertaderechaObjects3});
gdjs.sala4Code.asyncCallback39286684 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala4D", false);
}gdjs.sala4Code.localVariables.length = 0;
}
gdjs.sala4Code.eventsList20 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4Code.asyncCallback39286684(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala4Code.GDpersonajeObjects3});
gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala4Code.GDpuertaderechaObjects3});
gdjs.sala4Code.asyncCallback39290860 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala6", false);
}gdjs.sala4Code.localVariables.length = 0;
}
gdjs.sala4Code.eventsList21 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4Code.asyncCallback39290860(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala4Code.GDpersonajeObjects3});
gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala4Code.GDpuertaderechaObjects3});
gdjs.sala4Code.asyncCallback39295004 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala5D", false);
}gdjs.sala4Code.localVariables.length = 0;
}
gdjs.sala4Code.eventsList22 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4Code.asyncCallback39295004(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala4Code.GDpersonajeObjects3});
gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala4Code.GDpuertaderechaObjects3});
gdjs.sala4Code.asyncCallback39299148 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala8", false);
}gdjs.sala4Code.localVariables.length = 0;
}
gdjs.sala4Code.eventsList23 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4Code.asyncCallback39299148(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala4Code.GDpersonajeObjects3});
gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala4Code.GDpuertaderechaObjects3});
gdjs.sala4Code.asyncCallback39303292 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala9", false);
}gdjs.sala4Code.localVariables.length = 0;
}
gdjs.sala4Code.eventsList24 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4Code.asyncCallback39303292(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala4Code.GDpersonajeObjects2});
gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaderechaObjects2Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala4Code.GDpuertaderechaObjects2});
gdjs.sala4Code.asyncCallback39307500 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala10", false);
}gdjs.sala4Code.localVariables.length = 0;
}
gdjs.sala4Code.eventsList25 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4Code.asyncCallback39307500(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4Code.eventsList26 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.sala4Code.GDpersonajeObjects2, gdjs.sala4Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala4Code.GDpuertaderechaObjects2, gdjs.sala4Code.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects3Objects, gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala4Code.GDderechaObjects2, gdjs.sala4Code.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala4Code.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4Code.eventsList16(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala4Code.GDpersonajeObjects2, gdjs.sala4Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala4Code.GDpuertaderechaObjects2, gdjs.sala4Code.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects3Objects, gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala4Code.GDderechaObjects2, gdjs.sala4Code.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala4Code.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4Code.eventsList17(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala4Code.GDpersonajeObjects2, gdjs.sala4Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala4Code.GDpuertaderechaObjects2, gdjs.sala4Code.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects3Objects, gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala4Code.GDderechaObjects2, gdjs.sala4Code.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala4Code.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4Code.eventsList18(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala4Code.GDpersonajeObjects2, gdjs.sala4Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala4Code.GDpuertaderechaObjects2, gdjs.sala4Code.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects3Objects, gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala4Code.GDderechaObjects2, gdjs.sala4Code.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala4Code.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4Code.eventsList19(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala4Code.GDpersonajeObjects2, gdjs.sala4Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala4Code.GDpuertaderechaObjects2, gdjs.sala4Code.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects3Objects, gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala4Code.GDderechaObjects2, gdjs.sala4Code.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala4Code.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4Code.eventsList20(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala4Code.GDpersonajeObjects2, gdjs.sala4Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala4Code.GDpuertaderechaObjects2, gdjs.sala4Code.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects3Objects, gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala4Code.GDderechaObjects2, gdjs.sala4Code.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala4Code.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4Code.eventsList21(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala4Code.GDpersonajeObjects2, gdjs.sala4Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala4Code.GDpuertaderechaObjects2, gdjs.sala4Code.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects3Objects, gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala4Code.GDderechaObjects2, gdjs.sala4Code.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala4Code.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4Code.eventsList22(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala4Code.GDpersonajeObjects2, gdjs.sala4Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala4Code.GDpuertaderechaObjects2, gdjs.sala4Code.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects3Objects, gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala4Code.GDderechaObjects2, gdjs.sala4Code.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala4Code.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4Code.eventsList23(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala4Code.GDpersonajeObjects2, gdjs.sala4Code.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala4Code.GDpuertaderechaObjects2, gdjs.sala4Code.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects3Objects, gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4Code.GDcargaObjects3);
gdjs.copyArray(gdjs.sala4Code.GDderechaObjects2, gdjs.sala4Code.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala4Code.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4Code.eventsList24(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.sala4Code.GDpersonajeObjects2 */
/* Reuse gdjs.sala4Code.GDpuertaderechaObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects2Objects, gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaderechaObjects2Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4Code.GDcargaObjects2);
/* Reuse gdjs.sala4Code.GDderechaObjects2 */
{for(var i = 0, len = gdjs.sala4Code.GDderechaObjects2.length ;i < len;++i) {
    gdjs.sala4Code.GDderechaObjects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4Code.GDcargaObjects2.length ;i < len;++i) {
    gdjs.sala4Code.GDcargaObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4Code.eventsList25(runtimeScene);} //End of subevents
}

}


};gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects1Objects = Hashtable.newFrom({"personaje": gdjs.sala4Code.GDpersonajeObjects1});
gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuzzleCObjects1Objects = Hashtable.newFrom({"puzzleC": gdjs.sala4Code.GDpuzzleCObjects1});
gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects1Objects = Hashtable.newFrom({"personaje": gdjs.sala4Code.GDpersonajeObjects1});
gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuzzleCObjects1Objects = Hashtable.newFrom({"puzzleC": gdjs.sala4Code.GDpuzzleCObjects1});
gdjs.sala4Code.asyncCallback21287620 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4Code.localVariables);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "puzzle4");
}gdjs.sala4Code.localVariables.length = 0;
}
gdjs.sala4Code.eventsList27 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.sala4Code.asyncCallback21287620(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4Code.asyncCallback21702980 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("comienzopuzzle"), gdjs.sala4Code.GDcomienzopuzzleObjects2);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "puzzle");
}{for(var i = 0, len = gdjs.sala4Code.GDcomienzopuzzleObjects2.length ;i < len;++i) {
    gdjs.sala4Code.GDcomienzopuzzleObjects2[i].getBehavior("Animation").resumeAnimation();
}
}
{ //Subevents
gdjs.sala4Code.eventsList27(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.sala4Code.localVariables.length = 0;
}
gdjs.sala4Code.eventsList28 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.sala4Code.asyncCallback21702980(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4Code.eventsList29 = function(runtimeScene) {

{

/* Reuse gdjs.sala4Code.GDpersonajeObjects1 */
/* Reuse gdjs.sala4Code.GDpuzzleObjects1 */
/* Reuse gdjs.sala4Code.GDpuzzleCObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects1Objects, gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuzzleCObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala4Code.GDpuzzleObjects1.length;i<l;++i) {
    if ( gdjs.sala4Code.GDpuzzleObjects1[i].isVisible() ) {
        isConditionTrue_1 = true;
        gdjs.sala4Code.GDpuzzleObjects1[k] = gdjs.sala4Code.GDpuzzleObjects1[i];
        ++k;
    }
}
gdjs.sala4Code.GDpuzzleObjects1.length = k;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4Code.GDcargaObjects1);
/* Reuse gdjs.sala4Code.GDpersonajeObjects1 */
/* Reuse gdjs.sala4Code.GDpuzzleObjects1 */
{for(var i = 0, len = gdjs.sala4Code.GDpuzzleObjects1.length ;i < len;++i) {
    gdjs.sala4Code.GDpuzzleObjects1[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala4Code.GDpersonajeObjects1[i].getBehavior("TopDownMovement").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.sala4Code.GDcargaObjects1.length ;i < len;++i) {
    gdjs.sala4Code.GDcargaObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 4, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4Code.eventsList28(runtimeScene);} //End of subevents
}

}


};gdjs.sala4Code.eventsList30 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala4Code.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("puertaizquierda"), gdjs.sala4Code.GDpuertaizquierdaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects2Objects, gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaizquierdaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("izquierda"), gdjs.sala4Code.GDizquierdaObjects2);
{for(var i = 0, len = gdjs.sala4Code.GDizquierdaObjects2.length ;i < len;++i) {
    gdjs.sala4Code.GDizquierdaObjects2[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.random(10));
}
{ //Subevents
gdjs.sala4Code.eventsList15(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala4Code.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("puertaderecha"), gdjs.sala4Code.GDpuertaderechaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects2Objects, gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuertaderechaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("derecha"), gdjs.sala4Code.GDderechaObjects2);
{for(var i = 0, len = gdjs.sala4Code.GDderechaObjects2.length ;i < len;++i) {
    gdjs.sala4Code.GDderechaObjects2[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.random(10));
}
{ //Subevents
gdjs.sala4Code.eventsList26(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala4Code.GDpersonajeObjects1);
gdjs.copyArray(runtimeScene.getObjects("puzzleC"), gdjs.sala4Code.GDpuzzleCObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpersonajeObjects1Objects, gdjs.sala4Code.mapOfGDgdjs_9546sala4Code_9546GDpuzzleCObjects1Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("puzzle"), gdjs.sala4Code.GDpuzzleObjects1);
{for(var i = 0, len = gdjs.sala4Code.GDpuzzleObjects1.length ;i < len;++i) {
    gdjs.sala4Code.GDpuzzleObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.sala4Code.eventsList29(runtimeScene);} //End of subevents
}

}


};gdjs.sala4Code.asyncCallback21667348 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("cero"), gdjs.sala4Code.GDceroObjects5);

{for(var i = 0, len = gdjs.sala4Code.GDceroObjects5.length ;i < len;++i) {
    gdjs.sala4Code.GDceroObjects5[i].deleteFromScene(runtimeScene);
}
}gdjs.sala4Code.localVariables.length = 0;
}
gdjs.sala4Code.eventsList31 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4Code.localVariables);
for (const obj of gdjs.sala4Code.GDceroObjects3) asyncObjectsList.addObject("cero", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4Code.asyncCallback21667348(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4Code.asyncCallback21668188 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("K"), gdjs.sala4Code.GDKObjects3);

gdjs.copyArray(runtimeScene.getObjects("pesa"), gdjs.sala4Code.GDpesaObjects3);
{for(var i = 0, len = gdjs.sala4Code.GDKObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDKObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.sala4Code.GDpesaObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDpesaObjects3[i].activateBehavior("Arrastrable", true);
}
}gdjs.sala4Code.localVariables.length = 0;
}
gdjs.sala4Code.eventsList32 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4Code.localVariables);
for (const obj of gdjs.sala4Code.GDKObjects2) asyncObjectsList.addObject("K", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4Code.asyncCallback21668188(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4Code.eventsList33 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), false, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(7).setBoolean(true);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setBoolean(true);
}}

}


};gdjs.sala4Code.asyncCallback21708708 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala4Code.GDpersonajeObjects4);
gdjs.copyArray(runtimeScene.getObjects("puzzle"), gdjs.sala4Code.GDpuzzleObjects4);
{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "puzzle");
}{for(var i = 0, len = gdjs.sala4Code.GDpuzzleObjects4.length ;i < len;++i) {
    gdjs.sala4Code.GDpuzzleObjects4[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.sala4Code.GDpersonajeObjects4.length ;i < len;++i) {
    gdjs.sala4Code.GDpersonajeObjects4[i].getBehavior("TopDownMovement").ignoreDefaultControls(false);
}
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "puzzle4");
}
{ //Subevents
gdjs.sala4Code.eventsList33(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.sala4Code.localVariables.length = 0;
}
gdjs.sala4Code.eventsList34 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.sala4Code.asyncCallback21708708(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4Code.asyncCallback21707804 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4Code.GDcargaObjects3);
{for(var i = 0, len = gdjs.sala4Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 4, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4Code.eventsList34(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.sala4Code.localVariables.length = 0;
}
gdjs.sala4Code.eventsList35 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4Code.asyncCallback21707804(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4Code.asyncCallback21293796 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala4Code.GDpersonajeObjects4);
gdjs.copyArray(runtimeScene.getObjects("puzzle"), gdjs.sala4Code.GDpuzzleObjects4);
{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "puzzle");
}{for(var i = 0, len = gdjs.sala4Code.GDpuzzleObjects4.length ;i < len;++i) {
    gdjs.sala4Code.GDpuzzleObjects4[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.sala4Code.GDpersonajeObjects4.length ;i < len;++i) {
    gdjs.sala4Code.GDpersonajeObjects4[i].getBehavior("TopDownMovement").ignoreDefaultControls(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(true);
}gdjs.sala4Code.localVariables.length = 0;
}
gdjs.sala4Code.eventsList36 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.sala4Code.asyncCallback21293796(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4Code.asyncCallback21263636 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4Code.GDcargaObjects3);
{for(var i = 0, len = gdjs.sala4Code.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 4, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4Code.eventsList36(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.sala4Code.localVariables.length = 0;
}
gdjs.sala4Code.eventsList37 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.sala4Code.asyncCallback21263636(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4Code.asyncCallback21263060 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("perdiste"), gdjs.sala4Code.GDperdisteObjects2);
{for(var i = 0, len = gdjs.sala4Code.GDperdisteObjects2.length ;i < len;++i) {
    gdjs.sala4Code.GDperdisteObjects2[i].getBehavior("Animation").resumeAnimation();
}
}
{ //Subevents
gdjs.sala4Code.eventsList37(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.sala4Code.localVariables.length = 0;
}
gdjs.sala4Code.eventsList38 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.sala4Code.asyncCallback21263060(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4Code.eventsList39 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("cero"), gdjs.sala4Code.GDceroObjects2);

for (gdjs.sala4Code.forEachIndex3 = 0;gdjs.sala4Code.forEachIndex3 < gdjs.sala4Code.GDceroObjects2.length;++gdjs.sala4Code.forEachIndex3) {
gdjs.sala4Code.GDceroObjects3.length = 0;


gdjs.sala4Code.forEachTemporary3 = gdjs.sala4Code.GDceroObjects2[gdjs.sala4Code.forEachIndex3];
gdjs.sala4Code.GDceroObjects3.push(gdjs.sala4Code.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sala4Code.GDceroObjects3.length;i<l;++i) {
    if ( gdjs.sala4Code.GDceroObjects3[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.sala4Code.GDceroObjects3[k] = gdjs.sala4Code.GDceroObjects3[i];
        ++k;
    }
}
gdjs.sala4Code.GDceroObjects3.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.sala4Code.GDceroObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDceroObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.sala4Code.GDceroObjects3.length ;i < len;++i) {
    gdjs.sala4Code.GDceroObjects3[i].getBehavior("PlatformerObject").setGravity(1000);
}
}
{ //Subevents: 
gdjs.sala4Code.eventsList31(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("K"), gdjs.sala4Code.GDKObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sala4Code.GDKObjects2.length;i<l;++i) {
    if ( gdjs.sala4Code.GDKObjects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.sala4Code.GDKObjects2[k] = gdjs.sala4Code.GDKObjects2[i];
        ++k;
    }
}
gdjs.sala4Code.GDKObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.sala4Code.GDKObjects2 */
{for(var i = 0, len = gdjs.sala4Code.GDKObjects2.length ;i < len;++i) {
    gdjs.sala4Code.GDKObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.sala4Code.GDKObjects2.length ;i < len;++i) {
    gdjs.sala4Code.GDKObjects2[i].getBehavior("PlatformerObject").setGravity(1000);
}
}
{ //Subevents
gdjs.sala4Code.eventsList32(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("pesa"), gdjs.sala4Code.GDpesaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala4Code.GDpesaObjects2.length;i<l;++i) {
    if ( gdjs.sala4Code.GDpesaObjects2[i].behaviorActivated("Arrastrable") ) {
        isConditionTrue_1 = true;
        gdjs.sala4Code.GDpesaObjects2[k] = gdjs.sala4Code.GDpesaObjects2[i];
        ++k;
    }
}
gdjs.sala4Code.GDpesaObjects2.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala4Code.GDpesaObjects2.length;i<l;++i) {
    if ( gdjs.sala4Code.GDpesaObjects2[i].getY() < 200 ) {
        isConditionTrue_1 = true;
        gdjs.sala4Code.GDpesaObjects2[k] = gdjs.sala4Code.GDpesaObjects2[i];
        ++k;
    }
}
gdjs.sala4Code.GDpesaObjects2.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21694964);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("estrella"), gdjs.sala4Code.GDestrellaObjects2);
{for(var i = 0, len = gdjs.sala4Code.GDestrellaObjects2.length ;i < len;++i) {
    gdjs.sala4Code.GDestrellaObjects2[i].getBehavior("Animation").resumeAnimation();
}
}
{ //Subevents
gdjs.sala4Code.eventsList35(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "puzzle4") >= 30;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21262876);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.sala4Code.eventsList38(runtimeScene);} //End of subevents
}

}


};gdjs.sala4Code.eventsList40 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala4Code.GDpersonajeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala4Code.GDpersonajeObjects1.length;i<l;++i) {
    if ( !(gdjs.sala4Code.GDpersonajeObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_1 = true;
        gdjs.sala4Code.GDpersonajeObjects1[k] = gdjs.sala4Code.GDpersonajeObjects1[i];
        ++k;
    }
}
gdjs.sala4Code.GDpersonajeObjects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.sala4Code.GDpersonajeObjects1 */
{for(var i = 0, len = gdjs.sala4Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala4Code.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("abrir");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala4Code.GDpersonajeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = !(gdjs.evtTools.input.anyKeyPressed(runtimeScene));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala4Code.GDpersonajeObjects1.length;i<l;++i) {
    if ( !(gdjs.sala4Code.GDpersonajeObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_1 = true;
        gdjs.sala4Code.GDpersonajeObjects1[k] = gdjs.sala4Code.GDpersonajeObjects1[i];
        ++k;
    }
}
gdjs.sala4Code.GDpersonajeObjects1.length = k;
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
/* Reuse gdjs.sala4Code.GDpersonajeObjects1 */
{for(var i = 0, len = gdjs.sala4Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala4Code.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("descanso");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala4Code.GDpersonajeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sala4Code.GDpersonajeObjects1.length;i<l;++i) {
    if ( gdjs.sala4Code.GDpersonajeObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.sala4Code.GDpersonajeObjects1[k] = gdjs.sala4Code.GDpersonajeObjects1[i];
        ++k;
    }
}
gdjs.sala4Code.GDpersonajeObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.sala4Code.GDpersonajeObjects1 */
{for(var i = 0, len = gdjs.sala4Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala4Code.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("caminar");
}
}
{ //Subevents
gdjs.sala4Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala4Code.GDpersonajeObjects1);
{for(var i = 0, len = gdjs.sala4Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala4Code.GDpersonajeObjects1[i].getBehavior("TopDownMovement").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.sala4Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala4Code.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("perder");
}
}
{ //Subevents
gdjs.sala4Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala4Code.GDpersonajeObjects1);
{for(var i = 0, len = gdjs.sala4Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala4Code.GDpersonajeObjects1[i].getBehavior("TopDownMovement").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.sala4Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala4Code.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("ganar");
}
}
{ //Subevents
gdjs.sala4Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.sala4Code.eventsList3(runtimeScene);
}


{


gdjs.sala4Code.eventsList4(runtimeScene);
}


{


gdjs.sala4Code.eventsList30(runtimeScene);
}


{


gdjs.sala4Code.eventsList39(runtimeScene);
}


};

gdjs.sala4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.sala4Code.GDsala1Objects1.length = 0;
gdjs.sala4Code.GDsala1Objects2.length = 0;
gdjs.sala4Code.GDsala1Objects3.length = 0;
gdjs.sala4Code.GDsala1Objects4.length = 0;
gdjs.sala4Code.GDsala1Objects5.length = 0;
gdjs.sala4Code.GDfondopuzzleObjects1.length = 0;
gdjs.sala4Code.GDfondopuzzleObjects2.length = 0;
gdjs.sala4Code.GDfondopuzzleObjects3.length = 0;
gdjs.sala4Code.GDfondopuzzleObjects4.length = 0;
gdjs.sala4Code.GDfondopuzzleObjects5.length = 0;
gdjs.sala4Code.GDpiso2Objects1.length = 0;
gdjs.sala4Code.GDpiso2Objects2.length = 0;
gdjs.sala4Code.GDpiso2Objects3.length = 0;
gdjs.sala4Code.GDpiso2Objects4.length = 0;
gdjs.sala4Code.GDpiso2Objects5.length = 0;
gdjs.sala4Code.GDestrellaObjects1.length = 0;
gdjs.sala4Code.GDestrellaObjects2.length = 0;
gdjs.sala4Code.GDestrellaObjects3.length = 0;
gdjs.sala4Code.GDestrellaObjects4.length = 0;
gdjs.sala4Code.GDestrellaObjects5.length = 0;
gdjs.sala4Code.GDpesaObjects1.length = 0;
gdjs.sala4Code.GDpesaObjects2.length = 0;
gdjs.sala4Code.GDpesaObjects3.length = 0;
gdjs.sala4Code.GDpesaObjects4.length = 0;
gdjs.sala4Code.GDpesaObjects5.length = 0;
gdjs.sala4Code.GDKObjects1.length = 0;
gdjs.sala4Code.GDKObjects2.length = 0;
gdjs.sala4Code.GDKObjects3.length = 0;
gdjs.sala4Code.GDKObjects4.length = 0;
gdjs.sala4Code.GDKObjects5.length = 0;
gdjs.sala4Code.GDceroObjects1.length = 0;
gdjs.sala4Code.GDceroObjects2.length = 0;
gdjs.sala4Code.GDceroObjects3.length = 0;
gdjs.sala4Code.GDceroObjects4.length = 0;
gdjs.sala4Code.GDceroObjects5.length = 0;
gdjs.sala4Code.GDpersonajeObjects1.length = 0;
gdjs.sala4Code.GDpersonajeObjects2.length = 0;
gdjs.sala4Code.GDpersonajeObjects3.length = 0;
gdjs.sala4Code.GDpersonajeObjects4.length = 0;
gdjs.sala4Code.GDpersonajeObjects5.length = 0;
gdjs.sala4Code.GDcargaObjects1.length = 0;
gdjs.sala4Code.GDcargaObjects2.length = 0;
gdjs.sala4Code.GDcargaObjects3.length = 0;
gdjs.sala4Code.GDcargaObjects4.length = 0;
gdjs.sala4Code.GDcargaObjects5.length = 0;
gdjs.sala4Code.GDizquierdaObjects1.length = 0;
gdjs.sala4Code.GDizquierdaObjects2.length = 0;
gdjs.sala4Code.GDizquierdaObjects3.length = 0;
gdjs.sala4Code.GDizquierdaObjects4.length = 0;
gdjs.sala4Code.GDizquierdaObjects5.length = 0;
gdjs.sala4Code.GDderechaObjects1.length = 0;
gdjs.sala4Code.GDderechaObjects2.length = 0;
gdjs.sala4Code.GDderechaObjects3.length = 0;
gdjs.sala4Code.GDderechaObjects4.length = 0;
gdjs.sala4Code.GDderechaObjects5.length = 0;
gdjs.sala4Code.GDpuzzleObjects1.length = 0;
gdjs.sala4Code.GDpuzzleObjects2.length = 0;
gdjs.sala4Code.GDpuzzleObjects3.length = 0;
gdjs.sala4Code.GDpuzzleObjects4.length = 0;
gdjs.sala4Code.GDpuzzleObjects5.length = 0;
gdjs.sala4Code.GDpuzzleCObjects1.length = 0;
gdjs.sala4Code.GDpuzzleCObjects2.length = 0;
gdjs.sala4Code.GDpuzzleCObjects3.length = 0;
gdjs.sala4Code.GDpuzzleCObjects4.length = 0;
gdjs.sala4Code.GDpuzzleCObjects5.length = 0;
gdjs.sala4Code.GDcomienzopuzzleObjects1.length = 0;
gdjs.sala4Code.GDcomienzopuzzleObjects2.length = 0;
gdjs.sala4Code.GDcomienzopuzzleObjects3.length = 0;
gdjs.sala4Code.GDcomienzopuzzleObjects4.length = 0;
gdjs.sala4Code.GDcomienzopuzzleObjects5.length = 0;
gdjs.sala4Code.GDpisoObjects1.length = 0;
gdjs.sala4Code.GDpisoObjects2.length = 0;
gdjs.sala4Code.GDpisoObjects3.length = 0;
gdjs.sala4Code.GDpisoObjects4.length = 0;
gdjs.sala4Code.GDpisoObjects5.length = 0;
gdjs.sala4Code.GDtechoObjects1.length = 0;
gdjs.sala4Code.GDtechoObjects2.length = 0;
gdjs.sala4Code.GDtechoObjects3.length = 0;
gdjs.sala4Code.GDtechoObjects4.length = 0;
gdjs.sala4Code.GDtechoObjects5.length = 0;
gdjs.sala4Code.GDpuertaizquierdaObjects1.length = 0;
gdjs.sala4Code.GDpuertaizquierdaObjects2.length = 0;
gdjs.sala4Code.GDpuertaizquierdaObjects3.length = 0;
gdjs.sala4Code.GDpuertaizquierdaObjects4.length = 0;
gdjs.sala4Code.GDpuertaizquierdaObjects5.length = 0;
gdjs.sala4Code.GDpuertaderechaObjects1.length = 0;
gdjs.sala4Code.GDpuertaderechaObjects2.length = 0;
gdjs.sala4Code.GDpuertaderechaObjects3.length = 0;
gdjs.sala4Code.GDpuertaderechaObjects4.length = 0;
gdjs.sala4Code.GDpuertaderechaObjects5.length = 0;
gdjs.sala4Code.GDperdisteObjects1.length = 0;
gdjs.sala4Code.GDperdisteObjects2.length = 0;
gdjs.sala4Code.GDperdisteObjects3.length = 0;
gdjs.sala4Code.GDperdisteObjects4.length = 0;
gdjs.sala4Code.GDperdisteObjects5.length = 0;

gdjs.sala4Code.eventsList40(runtimeScene);
gdjs.sala4Code.GDsala1Objects1.length = 0;
gdjs.sala4Code.GDsala1Objects2.length = 0;
gdjs.sala4Code.GDsala1Objects3.length = 0;
gdjs.sala4Code.GDsala1Objects4.length = 0;
gdjs.sala4Code.GDsala1Objects5.length = 0;
gdjs.sala4Code.GDfondopuzzleObjects1.length = 0;
gdjs.sala4Code.GDfondopuzzleObjects2.length = 0;
gdjs.sala4Code.GDfondopuzzleObjects3.length = 0;
gdjs.sala4Code.GDfondopuzzleObjects4.length = 0;
gdjs.sala4Code.GDfondopuzzleObjects5.length = 0;
gdjs.sala4Code.GDpiso2Objects1.length = 0;
gdjs.sala4Code.GDpiso2Objects2.length = 0;
gdjs.sala4Code.GDpiso2Objects3.length = 0;
gdjs.sala4Code.GDpiso2Objects4.length = 0;
gdjs.sala4Code.GDpiso2Objects5.length = 0;
gdjs.sala4Code.GDestrellaObjects1.length = 0;
gdjs.sala4Code.GDestrellaObjects2.length = 0;
gdjs.sala4Code.GDestrellaObjects3.length = 0;
gdjs.sala4Code.GDestrellaObjects4.length = 0;
gdjs.sala4Code.GDestrellaObjects5.length = 0;
gdjs.sala4Code.GDpesaObjects1.length = 0;
gdjs.sala4Code.GDpesaObjects2.length = 0;
gdjs.sala4Code.GDpesaObjects3.length = 0;
gdjs.sala4Code.GDpesaObjects4.length = 0;
gdjs.sala4Code.GDpesaObjects5.length = 0;
gdjs.sala4Code.GDKObjects1.length = 0;
gdjs.sala4Code.GDKObjects2.length = 0;
gdjs.sala4Code.GDKObjects3.length = 0;
gdjs.sala4Code.GDKObjects4.length = 0;
gdjs.sala4Code.GDKObjects5.length = 0;
gdjs.sala4Code.GDceroObjects1.length = 0;
gdjs.sala4Code.GDceroObjects2.length = 0;
gdjs.sala4Code.GDceroObjects3.length = 0;
gdjs.sala4Code.GDceroObjects4.length = 0;
gdjs.sala4Code.GDceroObjects5.length = 0;
gdjs.sala4Code.GDpersonajeObjects1.length = 0;
gdjs.sala4Code.GDpersonajeObjects2.length = 0;
gdjs.sala4Code.GDpersonajeObjects3.length = 0;
gdjs.sala4Code.GDpersonajeObjects4.length = 0;
gdjs.sala4Code.GDpersonajeObjects5.length = 0;
gdjs.sala4Code.GDcargaObjects1.length = 0;
gdjs.sala4Code.GDcargaObjects2.length = 0;
gdjs.sala4Code.GDcargaObjects3.length = 0;
gdjs.sala4Code.GDcargaObjects4.length = 0;
gdjs.sala4Code.GDcargaObjects5.length = 0;
gdjs.sala4Code.GDizquierdaObjects1.length = 0;
gdjs.sala4Code.GDizquierdaObjects2.length = 0;
gdjs.sala4Code.GDizquierdaObjects3.length = 0;
gdjs.sala4Code.GDizquierdaObjects4.length = 0;
gdjs.sala4Code.GDizquierdaObjects5.length = 0;
gdjs.sala4Code.GDderechaObjects1.length = 0;
gdjs.sala4Code.GDderechaObjects2.length = 0;
gdjs.sala4Code.GDderechaObjects3.length = 0;
gdjs.sala4Code.GDderechaObjects4.length = 0;
gdjs.sala4Code.GDderechaObjects5.length = 0;
gdjs.sala4Code.GDpuzzleObjects1.length = 0;
gdjs.sala4Code.GDpuzzleObjects2.length = 0;
gdjs.sala4Code.GDpuzzleObjects3.length = 0;
gdjs.sala4Code.GDpuzzleObjects4.length = 0;
gdjs.sala4Code.GDpuzzleObjects5.length = 0;
gdjs.sala4Code.GDpuzzleCObjects1.length = 0;
gdjs.sala4Code.GDpuzzleCObjects2.length = 0;
gdjs.sala4Code.GDpuzzleCObjects3.length = 0;
gdjs.sala4Code.GDpuzzleCObjects4.length = 0;
gdjs.sala4Code.GDpuzzleCObjects5.length = 0;
gdjs.sala4Code.GDcomienzopuzzleObjects1.length = 0;
gdjs.sala4Code.GDcomienzopuzzleObjects2.length = 0;
gdjs.sala4Code.GDcomienzopuzzleObjects3.length = 0;
gdjs.sala4Code.GDcomienzopuzzleObjects4.length = 0;
gdjs.sala4Code.GDcomienzopuzzleObjects5.length = 0;
gdjs.sala4Code.GDpisoObjects1.length = 0;
gdjs.sala4Code.GDpisoObjects2.length = 0;
gdjs.sala4Code.GDpisoObjects3.length = 0;
gdjs.sala4Code.GDpisoObjects4.length = 0;
gdjs.sala4Code.GDpisoObjects5.length = 0;
gdjs.sala4Code.GDtechoObjects1.length = 0;
gdjs.sala4Code.GDtechoObjects2.length = 0;
gdjs.sala4Code.GDtechoObjects3.length = 0;
gdjs.sala4Code.GDtechoObjects4.length = 0;
gdjs.sala4Code.GDtechoObjects5.length = 0;
gdjs.sala4Code.GDpuertaizquierdaObjects1.length = 0;
gdjs.sala4Code.GDpuertaizquierdaObjects2.length = 0;
gdjs.sala4Code.GDpuertaizquierdaObjects3.length = 0;
gdjs.sala4Code.GDpuertaizquierdaObjects4.length = 0;
gdjs.sala4Code.GDpuertaizquierdaObjects5.length = 0;
gdjs.sala4Code.GDpuertaderechaObjects1.length = 0;
gdjs.sala4Code.GDpuertaderechaObjects2.length = 0;
gdjs.sala4Code.GDpuertaderechaObjects3.length = 0;
gdjs.sala4Code.GDpuertaderechaObjects4.length = 0;
gdjs.sala4Code.GDpuertaderechaObjects5.length = 0;
gdjs.sala4Code.GDperdisteObjects1.length = 0;
gdjs.sala4Code.GDperdisteObjects2.length = 0;
gdjs.sala4Code.GDperdisteObjects3.length = 0;
gdjs.sala4Code.GDperdisteObjects4.length = 0;
gdjs.sala4Code.GDperdisteObjects5.length = 0;


return;

}

gdjs['sala4Code'] = gdjs.sala4Code;
