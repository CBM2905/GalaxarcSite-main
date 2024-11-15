gdjs.sala4DCode = {};
gdjs.sala4DCode.localVariables = [];
gdjs.sala4DCode.forEachIndex3 = 0;

gdjs.sala4DCode.forEachObjects3 = [];

gdjs.sala4DCode.forEachTemporary3 = null;

gdjs.sala4DCode.forEachTotalCount3 = 0;

gdjs.sala4DCode.GDsala1Objects1= [];
gdjs.sala4DCode.GDsala1Objects2= [];
gdjs.sala4DCode.GDsala1Objects3= [];
gdjs.sala4DCode.GDsala1Objects4= [];
gdjs.sala4DCode.GDsala1Objects5= [];
gdjs.sala4DCode.GDfondopuzzleObjects1= [];
gdjs.sala4DCode.GDfondopuzzleObjects2= [];
gdjs.sala4DCode.GDfondopuzzleObjects3= [];
gdjs.sala4DCode.GDfondopuzzleObjects4= [];
gdjs.sala4DCode.GDfondopuzzleObjects5= [];
gdjs.sala4DCode.GDpiso2Objects1= [];
gdjs.sala4DCode.GDpiso2Objects2= [];
gdjs.sala4DCode.GDpiso2Objects3= [];
gdjs.sala4DCode.GDpiso2Objects4= [];
gdjs.sala4DCode.GDpiso2Objects5= [];
gdjs.sala4DCode.GDestrellaObjects1= [];
gdjs.sala4DCode.GDestrellaObjects2= [];
gdjs.sala4DCode.GDestrellaObjects3= [];
gdjs.sala4DCode.GDestrellaObjects4= [];
gdjs.sala4DCode.GDestrellaObjects5= [];
gdjs.sala4DCode.GDpesaObjects1= [];
gdjs.sala4DCode.GDpesaObjects2= [];
gdjs.sala4DCode.GDpesaObjects3= [];
gdjs.sala4DCode.GDpesaObjects4= [];
gdjs.sala4DCode.GDpesaObjects5= [];
gdjs.sala4DCode.GDKObjects1= [];
gdjs.sala4DCode.GDKObjects2= [];
gdjs.sala4DCode.GDKObjects3= [];
gdjs.sala4DCode.GDKObjects4= [];
gdjs.sala4DCode.GDKObjects5= [];
gdjs.sala4DCode.GDceroObjects1= [];
gdjs.sala4DCode.GDceroObjects2= [];
gdjs.sala4DCode.GDceroObjects3= [];
gdjs.sala4DCode.GDceroObjects4= [];
gdjs.sala4DCode.GDceroObjects5= [];
gdjs.sala4DCode.GDpersonajeObjects1= [];
gdjs.sala4DCode.GDpersonajeObjects2= [];
gdjs.sala4DCode.GDpersonajeObjects3= [];
gdjs.sala4DCode.GDpersonajeObjects4= [];
gdjs.sala4DCode.GDpersonajeObjects5= [];
gdjs.sala4DCode.GDcargaObjects1= [];
gdjs.sala4DCode.GDcargaObjects2= [];
gdjs.sala4DCode.GDcargaObjects3= [];
gdjs.sala4DCode.GDcargaObjects4= [];
gdjs.sala4DCode.GDcargaObjects5= [];
gdjs.sala4DCode.GDizquierdaObjects1= [];
gdjs.sala4DCode.GDizquierdaObjects2= [];
gdjs.sala4DCode.GDizquierdaObjects3= [];
gdjs.sala4DCode.GDizquierdaObjects4= [];
gdjs.sala4DCode.GDizquierdaObjects5= [];
gdjs.sala4DCode.GDderechaObjects1= [];
gdjs.sala4DCode.GDderechaObjects2= [];
gdjs.sala4DCode.GDderechaObjects3= [];
gdjs.sala4DCode.GDderechaObjects4= [];
gdjs.sala4DCode.GDderechaObjects5= [];
gdjs.sala4DCode.GDpuzzleObjects1= [];
gdjs.sala4DCode.GDpuzzleObjects2= [];
gdjs.sala4DCode.GDpuzzleObjects3= [];
gdjs.sala4DCode.GDpuzzleObjects4= [];
gdjs.sala4DCode.GDpuzzleObjects5= [];
gdjs.sala4DCode.GDpuzzleCObjects1= [];
gdjs.sala4DCode.GDpuzzleCObjects2= [];
gdjs.sala4DCode.GDpuzzleCObjects3= [];
gdjs.sala4DCode.GDpuzzleCObjects4= [];
gdjs.sala4DCode.GDpuzzleCObjects5= [];
gdjs.sala4DCode.GDcomienzopuzzleObjects1= [];
gdjs.sala4DCode.GDcomienzopuzzleObjects2= [];
gdjs.sala4DCode.GDcomienzopuzzleObjects3= [];
gdjs.sala4DCode.GDcomienzopuzzleObjects4= [];
gdjs.sala4DCode.GDcomienzopuzzleObjects5= [];
gdjs.sala4DCode.GDpisoObjects1= [];
gdjs.sala4DCode.GDpisoObjects2= [];
gdjs.sala4DCode.GDpisoObjects3= [];
gdjs.sala4DCode.GDpisoObjects4= [];
gdjs.sala4DCode.GDpisoObjects5= [];
gdjs.sala4DCode.GDtechoObjects1= [];
gdjs.sala4DCode.GDtechoObjects2= [];
gdjs.sala4DCode.GDtechoObjects3= [];
gdjs.sala4DCode.GDtechoObjects4= [];
gdjs.sala4DCode.GDtechoObjects5= [];
gdjs.sala4DCode.GDpuertaizquierdaObjects1= [];
gdjs.sala4DCode.GDpuertaizquierdaObjects2= [];
gdjs.sala4DCode.GDpuertaizquierdaObjects3= [];
gdjs.sala4DCode.GDpuertaizquierdaObjects4= [];
gdjs.sala4DCode.GDpuertaizquierdaObjects5= [];
gdjs.sala4DCode.GDpuertaderechaObjects1= [];
gdjs.sala4DCode.GDpuertaderechaObjects2= [];
gdjs.sala4DCode.GDpuertaderechaObjects3= [];
gdjs.sala4DCode.GDpuertaderechaObjects4= [];
gdjs.sala4DCode.GDpuertaderechaObjects5= [];
gdjs.sala4DCode.GDperdisteObjects1= [];
gdjs.sala4DCode.GDperdisteObjects2= [];
gdjs.sala4DCode.GDperdisteObjects3= [];
gdjs.sala4DCode.GDperdisteObjects4= [];
gdjs.sala4DCode.GDperdisteObjects5= [];


gdjs.sala4DCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.sala4DCode.GDpersonajeObjects1, gdjs.sala4DCode.GDpersonajeObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sala4DCode.GDpersonajeObjects2.length;i<l;++i) {
    if ( gdjs.sala4DCode.GDpersonajeObjects2[i].getBehavior("TopDownMovement").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.sala4DCode.GDpersonajeObjects2[k] = gdjs.sala4DCode.GDpersonajeObjects2[i];
        ++k;
    }
}
gdjs.sala4DCode.GDpersonajeObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.sala4DCode.GDpersonajeObjects2 */
{for(var i = 0, len = gdjs.sala4DCode.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala4DCode.GDpersonajeObjects2[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

/* Reuse gdjs.sala4DCode.GDpersonajeObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sala4DCode.GDpersonajeObjects1.length;i<l;++i) {
    if ( gdjs.sala4DCode.GDpersonajeObjects1[i].getBehavior("TopDownMovement").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.sala4DCode.GDpersonajeObjects1[k] = gdjs.sala4DCode.GDpersonajeObjects1[i];
        ++k;
    }
}
gdjs.sala4DCode.GDpersonajeObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.sala4DCode.GDpersonajeObjects1 */
{for(var i = 0, len = gdjs.sala4DCode.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala4DCode.GDpersonajeObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


};gdjs.sala4DCode.asyncCallback37256868 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4DCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("personaje"), gdjs.sala4DCode.GDpersonajeObjects2);

{for(var i = 0, len = gdjs.sala4DCode.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala4DCode.GDpersonajeObjects2[i].getBehavior("TopDownMovement").ignoreDefaultControls(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(false);
}gdjs.sala4DCode.localVariables.length = 0;
}
gdjs.sala4DCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4DCode.localVariables);
for (const obj of gdjs.sala4DCode.GDpersonajeObjects1) asyncObjectsList.addObject("personaje", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.sala4DCode.asyncCallback37256868(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4DCode.asyncCallback37258372 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4DCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("personaje"), gdjs.sala4DCode.GDpersonajeObjects2);

{for(var i = 0, len = gdjs.sala4DCode.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala4DCode.GDpersonajeObjects2[i].getBehavior("TopDownMovement").ignoreDefaultControls(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setBoolean(false);
}gdjs.sala4DCode.localVariables.length = 0;
}
gdjs.sala4DCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4DCode.localVariables);
for (const obj of gdjs.sala4DCode.GDpersonajeObjects1) asyncObjectsList.addObject("personaje", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.sala4DCode.asyncCallback37258372(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala4DCode.GDpersonajeObjects2});
gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaizquierdaObjects2Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala4DCode.GDpuertaizquierdaObjects2});
gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaizquierdaObjects2Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala4DCode.GDpuertaizquierdaObjects2});
gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala4DCode.GDpersonajeObjects2});
gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaderechaObjects2Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala4DCode.GDpuertaderechaObjects2});
gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaderechaObjects2Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala4DCode.GDpuertaderechaObjects2});
gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala4DCode.GDpersonajeObjects2});
gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpisoObjects2Objects = Hashtable.newFrom({"piso": gdjs.sala4DCode.GDpisoObjects2});
gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpisoObjects2Objects = Hashtable.newFrom({"piso": gdjs.sala4DCode.GDpisoObjects2});
gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects1Objects = Hashtable.newFrom({"personaje": gdjs.sala4DCode.GDpersonajeObjects1});
gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDtechoObjects1Objects = Hashtable.newFrom({"techo": gdjs.sala4DCode.GDtechoObjects1});
gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDtechoObjects1Objects = Hashtable.newFrom({"techo": gdjs.sala4DCode.GDtechoObjects1});
gdjs.sala4DCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala4DCode.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("puertaizquierda"), gdjs.sala4DCode.GDpuertaizquierdaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects2Objects, gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaizquierdaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.sala4DCode.GDpersonajeObjects2 */
/* Reuse gdjs.sala4DCode.GDpuertaizquierdaObjects2 */
{for(var i = 0, len = gdjs.sala4DCode.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala4DCode.GDpersonajeObjects2[i].separateFromObjectsList(gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaizquierdaObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala4DCode.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("puertaderecha"), gdjs.sala4DCode.GDpuertaderechaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects2Objects, gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaderechaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.sala4DCode.GDpersonajeObjects2 */
/* Reuse gdjs.sala4DCode.GDpuertaderechaObjects2 */
{for(var i = 0, len = gdjs.sala4DCode.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala4DCode.GDpersonajeObjects2[i].separateFromObjectsList(gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaderechaObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala4DCode.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("piso"), gdjs.sala4DCode.GDpisoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects2Objects, gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpisoObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.sala4DCode.GDpersonajeObjects2 */
/* Reuse gdjs.sala4DCode.GDpisoObjects2 */
{for(var i = 0, len = gdjs.sala4DCode.GDpersonajeObjects2.length ;i < len;++i) {
    gdjs.sala4DCode.GDpersonajeObjects2[i].separateFromObjectsList(gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpisoObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala4DCode.GDpersonajeObjects1);
gdjs.copyArray(runtimeScene.getObjects("techo"), gdjs.sala4DCode.GDtechoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects1Objects, gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDtechoObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.sala4DCode.GDpersonajeObjects1 */
/* Reuse gdjs.sala4DCode.GDtechoObjects1 */
{for(var i = 0, len = gdjs.sala4DCode.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala4DCode.GDpersonajeObjects1[i].separateFromObjectsList(gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDtechoObjects1Objects, false);
}
}}

}


};gdjs.sala4DCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.doesSceneExist(runtimeScene, "sala4");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("K"), gdjs.sala4DCode.GDKObjects2);
gdjs.copyArray(runtimeScene.getObjects("cero"), gdjs.sala4DCode.GDceroObjects2);
gdjs.copyArray(runtimeScene.getObjects("derecha"), gdjs.sala4DCode.GDderechaObjects2);
gdjs.copyArray(runtimeScene.getObjects("izquierda"), gdjs.sala4DCode.GDizquierdaObjects2);
gdjs.copyArray(runtimeScene.getObjects("puzzle"), gdjs.sala4DCode.GDpuzzleObjects2);
{for(var i = 0, len = gdjs.sala4DCode.GDizquierdaObjects2.length ;i < len;++i) {
    gdjs.sala4DCode.GDizquierdaObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.sala4DCode.GDderechaObjects2.length ;i < len;++i) {
    gdjs.sala4DCode.GDderechaObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.sala4DCode.GDpuzzleObjects2.length ;i < len;++i) {
    gdjs.sala4DCode.GDpuzzleObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.sala4DCode.GDKObjects2.length ;i < len;++i) {
    gdjs.sala4DCode.GDKObjects2[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.sala4DCode.GDceroObjects2.length ;i < len;++i) {
    gdjs.sala4DCode.GDceroObjects2[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("K"), gdjs.sala4DCode.GDKObjects1);
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4DCode.GDcargaObjects1);
gdjs.copyArray(runtimeScene.getObjects("cero"), gdjs.sala4DCode.GDceroObjects1);
gdjs.copyArray(runtimeScene.getObjects("comienzopuzzle"), gdjs.sala4DCode.GDcomienzopuzzleObjects1);
gdjs.copyArray(runtimeScene.getObjects("derecha"), gdjs.sala4DCode.GDderechaObjects1);
gdjs.copyArray(runtimeScene.getObjects("estrella"), gdjs.sala4DCode.GDestrellaObjects1);
gdjs.copyArray(runtimeScene.getObjects("izquierda"), gdjs.sala4DCode.GDizquierdaObjects1);
gdjs.copyArray(runtimeScene.getObjects("perdiste"), gdjs.sala4DCode.GDperdisteObjects1);
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala4DCode.GDpersonajeObjects1);
gdjs.copyArray(runtimeScene.getObjects("pesa"), gdjs.sala4DCode.GDpesaObjects1);
gdjs.copyArray(runtimeScene.getObjects("puzzle"), gdjs.sala4DCode.GDpuzzleObjects1);
{for(var i = 0, len = gdjs.sala4DCode.GDcargaObjects1.length ;i < len;++i) {
    gdjs.sala4DCode.GDcargaObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.sala4DCode.GDizquierdaObjects1.length ;i < len;++i) {
    gdjs.sala4DCode.GDizquierdaObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala4DCode.GDderechaObjects1.length ;i < len;++i) {
    gdjs.sala4DCode.GDderechaObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala4DCode.GDpuzzleObjects1.length ;i < len;++i) {
    gdjs.sala4DCode.GDpuzzleObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala4DCode.GDestrellaObjects1.length ;i < len;++i) {
    gdjs.sala4DCode.GDestrellaObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala4DCode.GDcomienzopuzzleObjects1.length ;i < len;++i) {
    gdjs.sala4DCode.GDcomienzopuzzleObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.sala4DCode.GDperdisteObjects1.length ;i < len;++i) {
    gdjs.sala4DCode.GDperdisteObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{gdjs.evtTools.input.showCursor(runtimeScene);
}{for(var i = 0, len = gdjs.sala4DCode.GDpesaObjects1.length ;i < len;++i) {
    gdjs.sala4DCode.GDpesaObjects1[i].activateBehavior("Arrastrable", false);
}
}{for(var i = 0, len = gdjs.sala4DCode.GDceroObjects1.length ;i < len;++i) {
    gdjs.sala4DCode.GDceroObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.sala4DCode.GDKObjects1.length ;i < len;++i) {
    gdjs.sala4DCode.GDKObjects1[i].hide();
}
}{gdjs.evtTools.input.showCursor(runtimeScene);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{for(var i = 0, len = gdjs.sala4DCode.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala4DCode.GDpersonajeObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


};gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala4DCode.GDpersonajeObjects2});
gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaizquierdaObjects2Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala4DCode.GDpuertaizquierdaObjects2});
gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala4DCode.GDpersonajeObjects3});
gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala4DCode.GDpuertaizquierdaObjects3});
gdjs.sala4DCode.asyncCallback37261780 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala1D", false);
}gdjs.sala4DCode.localVariables.length = 0;
}
gdjs.sala4DCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4DCode.asyncCallback37261780(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala4DCode.GDpersonajeObjects3});
gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala4DCode.GDpuertaizquierdaObjects3});
gdjs.sala4DCode.asyncCallback37263868 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala2D", false);
}gdjs.sala4DCode.localVariables.length = 0;
}
gdjs.sala4DCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4DCode.asyncCallback37263868(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala4DCode.GDpersonajeObjects3});
gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala4DCode.GDpuertaizquierdaObjects3});
gdjs.sala4DCode.asyncCallback37265980 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala3D", false);
}gdjs.sala4DCode.localVariables.length = 0;
}
gdjs.sala4DCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4DCode.asyncCallback37265980(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala4DCode.GDpersonajeObjects3});
gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala4DCode.GDpuertaizquierdaObjects3});
gdjs.sala4DCode.asyncCallback37268028 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala4D", false);
}gdjs.sala4DCode.localVariables.length = 0;
}
gdjs.sala4DCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4DCode.asyncCallback37268028(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala4DCode.GDpersonajeObjects3});
gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala4DCode.GDpuertaizquierdaObjects3});
gdjs.sala4DCode.asyncCallback37270268 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala5D", false);
}gdjs.sala4DCode.localVariables.length = 0;
}
gdjs.sala4DCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4DCode.asyncCallback37270268(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala4DCode.GDpersonajeObjects3});
gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala4DCode.GDpuertaizquierdaObjects3});
gdjs.sala4DCode.asyncCallback37272204 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala6D", false);
}gdjs.sala4DCode.localVariables.length = 0;
}
gdjs.sala4DCode.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4DCode.asyncCallback37272204(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala4DCode.GDpersonajeObjects3});
gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala4DCode.GDpuertaizquierdaObjects3});
gdjs.sala4DCode.asyncCallback37274444 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala7D", false);
}gdjs.sala4DCode.localVariables.length = 0;
}
gdjs.sala4DCode.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4DCode.asyncCallback37274444(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala4DCode.GDpersonajeObjects3});
gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala4DCode.GDpuertaizquierdaObjects3});
gdjs.sala4DCode.asyncCallback37276340 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala8D", false);
}gdjs.sala4DCode.localVariables.length = 0;
}
gdjs.sala4DCode.eventsList12 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4DCode.asyncCallback37276340(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala4DCode.GDpersonajeObjects3});
gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaizquierdaObjects3Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala4DCode.GDpuertaizquierdaObjects3});
gdjs.sala4DCode.asyncCallback37278564 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala9D", false);
}gdjs.sala4DCode.localVariables.length = 0;
}
gdjs.sala4DCode.eventsList13 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4DCode.asyncCallback37278564(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala4DCode.GDpersonajeObjects2});
gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaizquierdaObjects2Objects = Hashtable.newFrom({"puertaizquierda": gdjs.sala4DCode.GDpuertaizquierdaObjects2});
gdjs.sala4DCode.asyncCallback37280756 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala10D", false);
}gdjs.sala4DCode.localVariables.length = 0;
}
gdjs.sala4DCode.eventsList14 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4DCode.asyncCallback37280756(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4DCode.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.sala4DCode.GDpersonajeObjects2, gdjs.sala4DCode.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala4DCode.GDpuertaizquierdaObjects2, gdjs.sala4DCode.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects3Objects, gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4DCode.GDcargaObjects3);
gdjs.copyArray(gdjs.sala4DCode.GDizquierdaObjects2, gdjs.sala4DCode.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala4DCode.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4DCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala4DCode.GDpersonajeObjects2, gdjs.sala4DCode.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala4DCode.GDpuertaizquierdaObjects2, gdjs.sala4DCode.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects3Objects, gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4DCode.GDcargaObjects3);
gdjs.copyArray(gdjs.sala4DCode.GDizquierdaObjects2, gdjs.sala4DCode.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala4DCode.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4DCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala4DCode.GDpersonajeObjects2, gdjs.sala4DCode.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala4DCode.GDpuertaizquierdaObjects2, gdjs.sala4DCode.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects3Objects, gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4DCode.GDcargaObjects3);
gdjs.copyArray(gdjs.sala4DCode.GDizquierdaObjects2, gdjs.sala4DCode.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala4DCode.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4DCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala4DCode.GDpersonajeObjects2, gdjs.sala4DCode.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala4DCode.GDpuertaizquierdaObjects2, gdjs.sala4DCode.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects3Objects, gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4DCode.GDcargaObjects3);
gdjs.copyArray(gdjs.sala4DCode.GDizquierdaObjects2, gdjs.sala4DCode.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala4DCode.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4DCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala4DCode.GDpersonajeObjects2, gdjs.sala4DCode.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala4DCode.GDpuertaizquierdaObjects2, gdjs.sala4DCode.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects3Objects, gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4DCode.GDcargaObjects3);
gdjs.copyArray(gdjs.sala4DCode.GDizquierdaObjects2, gdjs.sala4DCode.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala4DCode.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4DCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala4DCode.GDpersonajeObjects2, gdjs.sala4DCode.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala4DCode.GDpuertaizquierdaObjects2, gdjs.sala4DCode.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects3Objects, gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4DCode.GDcargaObjects3);
gdjs.copyArray(gdjs.sala4DCode.GDizquierdaObjects2, gdjs.sala4DCode.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala4DCode.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4DCode.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala4DCode.GDpersonajeObjects2, gdjs.sala4DCode.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala4DCode.GDpuertaizquierdaObjects2, gdjs.sala4DCode.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects3Objects, gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4DCode.GDcargaObjects3);
gdjs.copyArray(gdjs.sala4DCode.GDizquierdaObjects2, gdjs.sala4DCode.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala4DCode.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4DCode.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala4DCode.GDpersonajeObjects2, gdjs.sala4DCode.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala4DCode.GDpuertaizquierdaObjects2, gdjs.sala4DCode.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects3Objects, gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4DCode.GDcargaObjects3);
gdjs.copyArray(gdjs.sala4DCode.GDizquierdaObjects2, gdjs.sala4DCode.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala4DCode.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4DCode.eventsList12(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala4DCode.GDpersonajeObjects2, gdjs.sala4DCode.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala4DCode.GDpuertaizquierdaObjects2, gdjs.sala4DCode.GDpuertaizquierdaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects3Objects, gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaizquierdaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4DCode.GDcargaObjects3);
gdjs.copyArray(gdjs.sala4DCode.GDizquierdaObjects2, gdjs.sala4DCode.GDizquierdaObjects3);

{for(var i = 0, len = gdjs.sala4DCode.GDizquierdaObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDizquierdaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4DCode.eventsList13(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.sala4DCode.GDpersonajeObjects2 */
/* Reuse gdjs.sala4DCode.GDpuertaizquierdaObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects2Objects, gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaizquierdaObjects2Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4DCode.GDcargaObjects2);
/* Reuse gdjs.sala4DCode.GDizquierdaObjects2 */
{for(var i = 0, len = gdjs.sala4DCode.GDizquierdaObjects2.length ;i < len;++i) {
    gdjs.sala4DCode.GDizquierdaObjects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4DCode.GDcargaObjects2.length ;i < len;++i) {
    gdjs.sala4DCode.GDcargaObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4DCode.eventsList14(runtimeScene);} //End of subevents
}

}


};gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala4DCode.GDpersonajeObjects2});
gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaderechaObjects2Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala4DCode.GDpuertaderechaObjects2});
gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala4DCode.GDpersonajeObjects3});
gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala4DCode.GDpuertaderechaObjects3});
gdjs.sala4DCode.asyncCallback37283604 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala1", false);
}gdjs.sala4DCode.localVariables.length = 0;
}
gdjs.sala4DCode.eventsList16 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4DCode.asyncCallback37283604(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala4DCode.GDpersonajeObjects3});
gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala4DCode.GDpuertaderechaObjects3});
gdjs.sala4DCode.asyncCallback37285692 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala2", false);
}gdjs.sala4DCode.localVariables.length = 0;
}
gdjs.sala4DCode.eventsList17 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4DCode.asyncCallback37285692(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala4DCode.GDpersonajeObjects3});
gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala4DCode.GDpuertaderechaObjects3});
gdjs.sala4DCode.asyncCallback37287804 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala3", false);
}gdjs.sala4DCode.localVariables.length = 0;
}
gdjs.sala4DCode.eventsList18 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4DCode.asyncCallback37287804(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala4DCode.GDpersonajeObjects3});
gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala4DCode.GDpuertaderechaObjects3});
gdjs.sala4DCode.asyncCallback37289852 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala4", false);
}gdjs.sala4DCode.localVariables.length = 0;
}
gdjs.sala4DCode.eventsList19 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4DCode.asyncCallback37289852(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala4DCode.GDpersonajeObjects3});
gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala4DCode.GDpuertaderechaObjects3});
gdjs.sala4DCode.asyncCallback37292092 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala4D", false);
}gdjs.sala4DCode.localVariables.length = 0;
}
gdjs.sala4DCode.eventsList20 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4DCode.asyncCallback37292092(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala4DCode.GDpersonajeObjects3});
gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala4DCode.GDpuertaderechaObjects3});
gdjs.sala4DCode.asyncCallback37294028 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala6", false);
}gdjs.sala4DCode.localVariables.length = 0;
}
gdjs.sala4DCode.eventsList21 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4DCode.asyncCallback37294028(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala4DCode.GDpersonajeObjects3});
gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala4DCode.GDpuertaderechaObjects3});
gdjs.sala4DCode.asyncCallback37296268 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala5D", false);
}gdjs.sala4DCode.localVariables.length = 0;
}
gdjs.sala4DCode.eventsList22 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4DCode.asyncCallback37296268(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala4DCode.GDpersonajeObjects3});
gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala4DCode.GDpuertaderechaObjects3});
gdjs.sala4DCode.asyncCallback37298164 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala8", false);
}gdjs.sala4DCode.localVariables.length = 0;
}
gdjs.sala4DCode.eventsList23 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4DCode.asyncCallback37298164(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects3Objects = Hashtable.newFrom({"personaje": gdjs.sala4DCode.GDpersonajeObjects3});
gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaderechaObjects3Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala4DCode.GDpuertaderechaObjects3});
gdjs.sala4DCode.asyncCallback37300388 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala9", false);
}gdjs.sala4DCode.localVariables.length = 0;
}
gdjs.sala4DCode.eventsList24 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4DCode.asyncCallback37300388(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects2Objects = Hashtable.newFrom({"personaje": gdjs.sala4DCode.GDpersonajeObjects2});
gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaderechaObjects2Objects = Hashtable.newFrom({"puertaderecha": gdjs.sala4DCode.GDpuertaderechaObjects2});
gdjs.sala4DCode.asyncCallback37302580 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4DCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sala10", false);
}gdjs.sala4DCode.localVariables.length = 0;
}
gdjs.sala4DCode.eventsList25 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4DCode.asyncCallback37302580(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4DCode.eventsList26 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.sala4DCode.GDpersonajeObjects2, gdjs.sala4DCode.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala4DCode.GDpuertaderechaObjects2, gdjs.sala4DCode.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects3Objects, gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4DCode.GDcargaObjects3);
gdjs.copyArray(gdjs.sala4DCode.GDderechaObjects2, gdjs.sala4DCode.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala4DCode.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4DCode.eventsList16(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala4DCode.GDpersonajeObjects2, gdjs.sala4DCode.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala4DCode.GDpuertaderechaObjects2, gdjs.sala4DCode.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects3Objects, gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4DCode.GDcargaObjects3);
gdjs.copyArray(gdjs.sala4DCode.GDderechaObjects2, gdjs.sala4DCode.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala4DCode.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4DCode.eventsList17(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala4DCode.GDpersonajeObjects2, gdjs.sala4DCode.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala4DCode.GDpuertaderechaObjects2, gdjs.sala4DCode.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects3Objects, gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4DCode.GDcargaObjects3);
gdjs.copyArray(gdjs.sala4DCode.GDderechaObjects2, gdjs.sala4DCode.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala4DCode.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4DCode.eventsList18(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala4DCode.GDpersonajeObjects2, gdjs.sala4DCode.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala4DCode.GDpuertaderechaObjects2, gdjs.sala4DCode.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects3Objects, gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4DCode.GDcargaObjects3);
gdjs.copyArray(gdjs.sala4DCode.GDderechaObjects2, gdjs.sala4DCode.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala4DCode.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4DCode.eventsList19(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala4DCode.GDpersonajeObjects2, gdjs.sala4DCode.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala4DCode.GDpuertaderechaObjects2, gdjs.sala4DCode.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects3Objects, gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4DCode.GDcargaObjects3);
gdjs.copyArray(gdjs.sala4DCode.GDderechaObjects2, gdjs.sala4DCode.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala4DCode.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4DCode.eventsList20(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala4DCode.GDpersonajeObjects2, gdjs.sala4DCode.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala4DCode.GDpuertaderechaObjects2, gdjs.sala4DCode.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects3Objects, gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4DCode.GDcargaObjects3);
gdjs.copyArray(gdjs.sala4DCode.GDderechaObjects2, gdjs.sala4DCode.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala4DCode.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4DCode.eventsList21(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala4DCode.GDpersonajeObjects2, gdjs.sala4DCode.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala4DCode.GDpuertaderechaObjects2, gdjs.sala4DCode.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects3Objects, gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4DCode.GDcargaObjects3);
gdjs.copyArray(gdjs.sala4DCode.GDderechaObjects2, gdjs.sala4DCode.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala4DCode.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4DCode.eventsList22(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala4DCode.GDpersonajeObjects2, gdjs.sala4DCode.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala4DCode.GDpuertaderechaObjects2, gdjs.sala4DCode.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects3Objects, gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4DCode.GDcargaObjects3);
gdjs.copyArray(gdjs.sala4DCode.GDderechaObjects2, gdjs.sala4DCode.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala4DCode.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4DCode.eventsList23(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.sala4DCode.GDpersonajeObjects2, gdjs.sala4DCode.GDpersonajeObjects3);

gdjs.copyArray(gdjs.sala4DCode.GDpuertaderechaObjects2, gdjs.sala4DCode.GDpuertaderechaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects3Objects, gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaderechaObjects3Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4DCode.GDcargaObjects3);
gdjs.copyArray(gdjs.sala4DCode.GDderechaObjects2, gdjs.sala4DCode.GDderechaObjects3);

{for(var i = 0, len = gdjs.sala4DCode.GDderechaObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDderechaObjects3[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4DCode.eventsList24(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.sala4DCode.GDpersonajeObjects2 */
/* Reuse gdjs.sala4DCode.GDpuertaderechaObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects2Objects, gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaderechaObjects2Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4DCode.GDcargaObjects2);
/* Reuse gdjs.sala4DCode.GDderechaObjects2 */
{for(var i = 0, len = gdjs.sala4DCode.GDderechaObjects2.length ;i < len;++i) {
    gdjs.sala4DCode.GDderechaObjects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4DCode.GDcargaObjects2.length ;i < len;++i) {
    gdjs.sala4DCode.GDcargaObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4DCode.eventsList25(runtimeScene);} //End of subevents
}

}


};gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects1Objects = Hashtable.newFrom({"personaje": gdjs.sala4DCode.GDpersonajeObjects1});
gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuzzleCObjects1Objects = Hashtable.newFrom({"puzzleC": gdjs.sala4DCode.GDpuzzleCObjects1});
gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects1Objects = Hashtable.newFrom({"personaje": gdjs.sala4DCode.GDpersonajeObjects1});
gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuzzleCObjects1Objects = Hashtable.newFrom({"puzzleC": gdjs.sala4DCode.GDpuzzleCObjects1});
gdjs.sala4DCode.asyncCallback36145396 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4DCode.localVariables);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "puzzle4");
}gdjs.sala4DCode.localVariables.length = 0;
}
gdjs.sala4DCode.eventsList27 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.sala4DCode.asyncCallback36145396(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4DCode.asyncCallback36144676 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4DCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("comienzopuzzle"), gdjs.sala4DCode.GDcomienzopuzzleObjects2);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "puzzle");
}{for(var i = 0, len = gdjs.sala4DCode.GDcomienzopuzzleObjects2.length ;i < len;++i) {
    gdjs.sala4DCode.GDcomienzopuzzleObjects2[i].getBehavior("Animation").resumeAnimation();
}
}
{ //Subevents
gdjs.sala4DCode.eventsList27(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.sala4DCode.localVariables.length = 0;
}
gdjs.sala4DCode.eventsList28 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.sala4DCode.asyncCallback36144676(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4DCode.eventsList29 = function(runtimeScene) {

{

/* Reuse gdjs.sala4DCode.GDpersonajeObjects1 */
/* Reuse gdjs.sala4DCode.GDpuzzleObjects1 */
/* Reuse gdjs.sala4DCode.GDpuzzleCObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects1Objects, gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuzzleCObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala4DCode.GDpuzzleObjects1.length;i<l;++i) {
    if ( gdjs.sala4DCode.GDpuzzleObjects1[i].isVisible() ) {
        isConditionTrue_1 = true;
        gdjs.sala4DCode.GDpuzzleObjects1[k] = gdjs.sala4DCode.GDpuzzleObjects1[i];
        ++k;
    }
}
gdjs.sala4DCode.GDpuzzleObjects1.length = k;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4DCode.GDcargaObjects1);
/* Reuse gdjs.sala4DCode.GDpersonajeObjects1 */
/* Reuse gdjs.sala4DCode.GDpuzzleObjects1 */
{for(var i = 0, len = gdjs.sala4DCode.GDpuzzleObjects1.length ;i < len;++i) {
    gdjs.sala4DCode.GDpuzzleObjects1[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.sala4DCode.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala4DCode.GDpersonajeObjects1[i].getBehavior("TopDownMovement").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.sala4DCode.GDcargaObjects1.length ;i < len;++i) {
    gdjs.sala4DCode.GDcargaObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 4, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4DCode.eventsList28(runtimeScene);} //End of subevents
}

}


};gdjs.sala4DCode.eventsList30 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala4DCode.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("puertaizquierda"), gdjs.sala4DCode.GDpuertaizquierdaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects2Objects, gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaizquierdaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("izquierda"), gdjs.sala4DCode.GDizquierdaObjects2);
{for(var i = 0, len = gdjs.sala4DCode.GDizquierdaObjects2.length ;i < len;++i) {
    gdjs.sala4DCode.GDizquierdaObjects2[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.random(10));
}
{ //Subevents
gdjs.sala4DCode.eventsList15(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala4DCode.GDpersonajeObjects2);
gdjs.copyArray(runtimeScene.getObjects("puertaderecha"), gdjs.sala4DCode.GDpuertaderechaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects2Objects, gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuertaderechaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("derecha"), gdjs.sala4DCode.GDderechaObjects2);
{for(var i = 0, len = gdjs.sala4DCode.GDderechaObjects2.length ;i < len;++i) {
    gdjs.sala4DCode.GDderechaObjects2[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.random(10));
}
{ //Subevents
gdjs.sala4DCode.eventsList26(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala4DCode.GDpersonajeObjects1);
gdjs.copyArray(runtimeScene.getObjects("puzzleC"), gdjs.sala4DCode.GDpuzzleCObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpersonajeObjects1Objects, gdjs.sala4DCode.mapOfGDgdjs_9546sala4DCode_9546GDpuzzleCObjects1Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("puzzle"), gdjs.sala4DCode.GDpuzzleObjects1);
{for(var i = 0, len = gdjs.sala4DCode.GDpuzzleObjects1.length ;i < len;++i) {
    gdjs.sala4DCode.GDpuzzleObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.sala4DCode.eventsList29(runtimeScene);} //End of subevents
}

}


};gdjs.sala4DCode.asyncCallback36146556 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4DCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("cero"), gdjs.sala4DCode.GDceroObjects5);

{for(var i = 0, len = gdjs.sala4DCode.GDceroObjects5.length ;i < len;++i) {
    gdjs.sala4DCode.GDceroObjects5[i].deleteFromScene(runtimeScene);
}
}gdjs.sala4DCode.localVariables.length = 0;
}
gdjs.sala4DCode.eventsList31 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4DCode.localVariables);
for (const obj of gdjs.sala4DCode.GDceroObjects3) asyncObjectsList.addObject("cero", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4DCode.asyncCallback36146556(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4DCode.asyncCallback36147572 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4DCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("K"), gdjs.sala4DCode.GDKObjects3);

gdjs.copyArray(runtimeScene.getObjects("pesa"), gdjs.sala4DCode.GDpesaObjects3);
{for(var i = 0, len = gdjs.sala4DCode.GDKObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDKObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.sala4DCode.GDpesaObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDpesaObjects3[i].activateBehavior("Arrastrable", true);
}
}gdjs.sala4DCode.localVariables.length = 0;
}
gdjs.sala4DCode.eventsList32 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4DCode.localVariables);
for (const obj of gdjs.sala4DCode.GDKObjects2) asyncObjectsList.addObject("K", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4DCode.asyncCallback36147572(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4DCode.eventsList33 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), false, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(7).setBoolean(true);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setBoolean(true);
}}

}


};gdjs.sala4DCode.asyncCallback36150020 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4DCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala4DCode.GDpersonajeObjects4);
gdjs.copyArray(runtimeScene.getObjects("puzzle"), gdjs.sala4DCode.GDpuzzleObjects4);
{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "puzzle");
}{for(var i = 0, len = gdjs.sala4DCode.GDpuzzleObjects4.length ;i < len;++i) {
    gdjs.sala4DCode.GDpuzzleObjects4[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.sala4DCode.GDpersonajeObjects4.length ;i < len;++i) {
    gdjs.sala4DCode.GDpersonajeObjects4[i].getBehavior("TopDownMovement").ignoreDefaultControls(false);
}
}
{ //Subevents
gdjs.sala4DCode.eventsList33(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.sala4DCode.localVariables.length = 0;
}
gdjs.sala4DCode.eventsList34 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.sala4DCode.asyncCallback36150020(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4DCode.asyncCallback36149428 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4DCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4DCode.GDcargaObjects3);
{for(var i = 0, len = gdjs.sala4DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 4, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4DCode.eventsList34(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.sala4DCode.localVariables.length = 0;
}
gdjs.sala4DCode.eventsList35 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.sala4DCode.asyncCallback36149428(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4DCode.asyncCallback36153116 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4DCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala4DCode.GDpersonajeObjects4);
gdjs.copyArray(runtimeScene.getObjects("puzzle"), gdjs.sala4DCode.GDpuzzleObjects4);
{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "puzzle");
}{for(var i = 0, len = gdjs.sala4DCode.GDpuzzleObjects4.length ;i < len;++i) {
    gdjs.sala4DCode.GDpuzzleObjects4[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.sala4DCode.GDpersonajeObjects4.length ;i < len;++i) {
    gdjs.sala4DCode.GDpersonajeObjects4[i].getBehavior("TopDownMovement").ignoreDefaultControls(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(true);
}gdjs.sala4DCode.localVariables.length = 0;
}
gdjs.sala4DCode.eventsList36 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.sala4DCode.asyncCallback36153116(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4DCode.asyncCallback36152556 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4DCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.sala4DCode.GDcargaObjects3);
{for(var i = 0, len = gdjs.sala4DCode.GDcargaObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDcargaObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 4, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.sala4DCode.eventsList36(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.sala4DCode.localVariables.length = 0;
}
gdjs.sala4DCode.eventsList37 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.sala4DCode.asyncCallback36152556(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4DCode.asyncCallback36152316 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.sala4DCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("perdiste"), gdjs.sala4DCode.GDperdisteObjects2);
{for(var i = 0, len = gdjs.sala4DCode.GDperdisteObjects2.length ;i < len;++i) {
    gdjs.sala4DCode.GDperdisteObjects2[i].getBehavior("Animation").resumeAnimation();
}
}
{ //Subevents
gdjs.sala4DCode.eventsList37(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.sala4DCode.localVariables.length = 0;
}
gdjs.sala4DCode.eventsList38 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.sala4DCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.sala4DCode.asyncCallback36152316(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.sala4DCode.eventsList39 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("cero"), gdjs.sala4DCode.GDceroObjects2);

for (gdjs.sala4DCode.forEachIndex3 = 0;gdjs.sala4DCode.forEachIndex3 < gdjs.sala4DCode.GDceroObjects2.length;++gdjs.sala4DCode.forEachIndex3) {
gdjs.sala4DCode.GDceroObjects3.length = 0;


gdjs.sala4DCode.forEachTemporary3 = gdjs.sala4DCode.GDceroObjects2[gdjs.sala4DCode.forEachIndex3];
gdjs.sala4DCode.GDceroObjects3.push(gdjs.sala4DCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sala4DCode.GDceroObjects3.length;i<l;++i) {
    if ( gdjs.sala4DCode.GDceroObjects3[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.sala4DCode.GDceroObjects3[k] = gdjs.sala4DCode.GDceroObjects3[i];
        ++k;
    }
}
gdjs.sala4DCode.GDceroObjects3.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.sala4DCode.GDceroObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDceroObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.sala4DCode.GDceroObjects3.length ;i < len;++i) {
    gdjs.sala4DCode.GDceroObjects3[i].getBehavior("PlatformerObject").setGravity(1000);
}
}
{ //Subevents: 
gdjs.sala4DCode.eventsList31(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("K"), gdjs.sala4DCode.GDKObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sala4DCode.GDKObjects2.length;i<l;++i) {
    if ( gdjs.sala4DCode.GDKObjects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.sala4DCode.GDKObjects2[k] = gdjs.sala4DCode.GDKObjects2[i];
        ++k;
    }
}
gdjs.sala4DCode.GDKObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.sala4DCode.GDKObjects2 */
{for(var i = 0, len = gdjs.sala4DCode.GDKObjects2.length ;i < len;++i) {
    gdjs.sala4DCode.GDKObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.sala4DCode.GDKObjects2.length ;i < len;++i) {
    gdjs.sala4DCode.GDKObjects2[i].getBehavior("PlatformerObject").setGravity(1000);
}
}
{ //Subevents
gdjs.sala4DCode.eventsList32(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("pesa"), gdjs.sala4DCode.GDpesaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala4DCode.GDpesaObjects2.length;i<l;++i) {
    if ( gdjs.sala4DCode.GDpesaObjects2[i].behaviorActivated("Arrastrable") ) {
        isConditionTrue_1 = true;
        gdjs.sala4DCode.GDpesaObjects2[k] = gdjs.sala4DCode.GDpesaObjects2[i];
        ++k;
    }
}
gdjs.sala4DCode.GDpesaObjects2.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala4DCode.GDpesaObjects2.length;i<l;++i) {
    if ( gdjs.sala4DCode.GDpesaObjects2[i].getY() < 200 ) {
        isConditionTrue_1 = true;
        gdjs.sala4DCode.GDpesaObjects2[k] = gdjs.sala4DCode.GDpesaObjects2[i];
        ++k;
    }
}
gdjs.sala4DCode.GDpesaObjects2.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(36149044);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("estrella"), gdjs.sala4DCode.GDestrellaObjects2);
{for(var i = 0, len = gdjs.sala4DCode.GDestrellaObjects2.length ;i < len;++i) {
    gdjs.sala4DCode.GDestrellaObjects2[i].getBehavior("Animation").resumeAnimation();
}
}
{ //Subevents
gdjs.sala4DCode.eventsList35(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "puzzle4") >= 30;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(36152068);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.sala4DCode.eventsList38(runtimeScene);} //End of subevents
}

}


};gdjs.sala4DCode.eventsList40 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala4DCode.GDpersonajeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala4DCode.GDpersonajeObjects1.length;i<l;++i) {
    if ( !(gdjs.sala4DCode.GDpersonajeObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_1 = true;
        gdjs.sala4DCode.GDpersonajeObjects1[k] = gdjs.sala4DCode.GDpersonajeObjects1[i];
        ++k;
    }
}
gdjs.sala4DCode.GDpersonajeObjects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.sala4DCode.GDpersonajeObjects1 */
{for(var i = 0, len = gdjs.sala4DCode.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala4DCode.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("abrir");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala4DCode.GDpersonajeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = !(gdjs.evtTools.input.anyKeyPressed(runtimeScene));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.sala4DCode.GDpersonajeObjects1.length;i<l;++i) {
    if ( !(gdjs.sala4DCode.GDpersonajeObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_1 = true;
        gdjs.sala4DCode.GDpersonajeObjects1[k] = gdjs.sala4DCode.GDpersonajeObjects1[i];
        ++k;
    }
}
gdjs.sala4DCode.GDpersonajeObjects1.length = k;
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
/* Reuse gdjs.sala4DCode.GDpersonajeObjects1 */
{for(var i = 0, len = gdjs.sala4DCode.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala4DCode.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("descanso");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala4DCode.GDpersonajeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sala4DCode.GDpersonajeObjects1.length;i<l;++i) {
    if ( gdjs.sala4DCode.GDpersonajeObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.sala4DCode.GDpersonajeObjects1[k] = gdjs.sala4DCode.GDpersonajeObjects1[i];
        ++k;
    }
}
gdjs.sala4DCode.GDpersonajeObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.sala4DCode.GDpersonajeObjects1 */
{for(var i = 0, len = gdjs.sala4DCode.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala4DCode.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("caminar");
}
}
{ //Subevents
gdjs.sala4DCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala4DCode.GDpersonajeObjects1);
{for(var i = 0, len = gdjs.sala4DCode.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala4DCode.GDpersonajeObjects1[i].getBehavior("TopDownMovement").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.sala4DCode.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala4DCode.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("perder");
}
}
{ //Subevents
gdjs.sala4DCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.sala4DCode.GDpersonajeObjects1);
{for(var i = 0, len = gdjs.sala4DCode.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala4DCode.GDpersonajeObjects1[i].getBehavior("TopDownMovement").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.sala4DCode.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.sala4DCode.GDpersonajeObjects1[i].getBehavior("Animation").setAnimationName("ganar");
}
}
{ //Subevents
gdjs.sala4DCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.sala4DCode.eventsList3(runtimeScene);
}


{


gdjs.sala4DCode.eventsList4(runtimeScene);
}


{


gdjs.sala4DCode.eventsList30(runtimeScene);
}


{


gdjs.sala4DCode.eventsList39(runtimeScene);
}


};

gdjs.sala4DCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.sala4DCode.GDsala1Objects1.length = 0;
gdjs.sala4DCode.GDsala1Objects2.length = 0;
gdjs.sala4DCode.GDsala1Objects3.length = 0;
gdjs.sala4DCode.GDsala1Objects4.length = 0;
gdjs.sala4DCode.GDsala1Objects5.length = 0;
gdjs.sala4DCode.GDfondopuzzleObjects1.length = 0;
gdjs.sala4DCode.GDfondopuzzleObjects2.length = 0;
gdjs.sala4DCode.GDfondopuzzleObjects3.length = 0;
gdjs.sala4DCode.GDfondopuzzleObjects4.length = 0;
gdjs.sala4DCode.GDfondopuzzleObjects5.length = 0;
gdjs.sala4DCode.GDpiso2Objects1.length = 0;
gdjs.sala4DCode.GDpiso2Objects2.length = 0;
gdjs.sala4DCode.GDpiso2Objects3.length = 0;
gdjs.sala4DCode.GDpiso2Objects4.length = 0;
gdjs.sala4DCode.GDpiso2Objects5.length = 0;
gdjs.sala4DCode.GDestrellaObjects1.length = 0;
gdjs.sala4DCode.GDestrellaObjects2.length = 0;
gdjs.sala4DCode.GDestrellaObjects3.length = 0;
gdjs.sala4DCode.GDestrellaObjects4.length = 0;
gdjs.sala4DCode.GDestrellaObjects5.length = 0;
gdjs.sala4DCode.GDpesaObjects1.length = 0;
gdjs.sala4DCode.GDpesaObjects2.length = 0;
gdjs.sala4DCode.GDpesaObjects3.length = 0;
gdjs.sala4DCode.GDpesaObjects4.length = 0;
gdjs.sala4DCode.GDpesaObjects5.length = 0;
gdjs.sala4DCode.GDKObjects1.length = 0;
gdjs.sala4DCode.GDKObjects2.length = 0;
gdjs.sala4DCode.GDKObjects3.length = 0;
gdjs.sala4DCode.GDKObjects4.length = 0;
gdjs.sala4DCode.GDKObjects5.length = 0;
gdjs.sala4DCode.GDceroObjects1.length = 0;
gdjs.sala4DCode.GDceroObjects2.length = 0;
gdjs.sala4DCode.GDceroObjects3.length = 0;
gdjs.sala4DCode.GDceroObjects4.length = 0;
gdjs.sala4DCode.GDceroObjects5.length = 0;
gdjs.sala4DCode.GDpersonajeObjects1.length = 0;
gdjs.sala4DCode.GDpersonajeObjects2.length = 0;
gdjs.sala4DCode.GDpersonajeObjects3.length = 0;
gdjs.sala4DCode.GDpersonajeObjects4.length = 0;
gdjs.sala4DCode.GDpersonajeObjects5.length = 0;
gdjs.sala4DCode.GDcargaObjects1.length = 0;
gdjs.sala4DCode.GDcargaObjects2.length = 0;
gdjs.sala4DCode.GDcargaObjects3.length = 0;
gdjs.sala4DCode.GDcargaObjects4.length = 0;
gdjs.sala4DCode.GDcargaObjects5.length = 0;
gdjs.sala4DCode.GDizquierdaObjects1.length = 0;
gdjs.sala4DCode.GDizquierdaObjects2.length = 0;
gdjs.sala4DCode.GDizquierdaObjects3.length = 0;
gdjs.sala4DCode.GDizquierdaObjects4.length = 0;
gdjs.sala4DCode.GDizquierdaObjects5.length = 0;
gdjs.sala4DCode.GDderechaObjects1.length = 0;
gdjs.sala4DCode.GDderechaObjects2.length = 0;
gdjs.sala4DCode.GDderechaObjects3.length = 0;
gdjs.sala4DCode.GDderechaObjects4.length = 0;
gdjs.sala4DCode.GDderechaObjects5.length = 0;
gdjs.sala4DCode.GDpuzzleObjects1.length = 0;
gdjs.sala4DCode.GDpuzzleObjects2.length = 0;
gdjs.sala4DCode.GDpuzzleObjects3.length = 0;
gdjs.sala4DCode.GDpuzzleObjects4.length = 0;
gdjs.sala4DCode.GDpuzzleObjects5.length = 0;
gdjs.sala4DCode.GDpuzzleCObjects1.length = 0;
gdjs.sala4DCode.GDpuzzleCObjects2.length = 0;
gdjs.sala4DCode.GDpuzzleCObjects3.length = 0;
gdjs.sala4DCode.GDpuzzleCObjects4.length = 0;
gdjs.sala4DCode.GDpuzzleCObjects5.length = 0;
gdjs.sala4DCode.GDcomienzopuzzleObjects1.length = 0;
gdjs.sala4DCode.GDcomienzopuzzleObjects2.length = 0;
gdjs.sala4DCode.GDcomienzopuzzleObjects3.length = 0;
gdjs.sala4DCode.GDcomienzopuzzleObjects4.length = 0;
gdjs.sala4DCode.GDcomienzopuzzleObjects5.length = 0;
gdjs.sala4DCode.GDpisoObjects1.length = 0;
gdjs.sala4DCode.GDpisoObjects2.length = 0;
gdjs.sala4DCode.GDpisoObjects3.length = 0;
gdjs.sala4DCode.GDpisoObjects4.length = 0;
gdjs.sala4DCode.GDpisoObjects5.length = 0;
gdjs.sala4DCode.GDtechoObjects1.length = 0;
gdjs.sala4DCode.GDtechoObjects2.length = 0;
gdjs.sala4DCode.GDtechoObjects3.length = 0;
gdjs.sala4DCode.GDtechoObjects4.length = 0;
gdjs.sala4DCode.GDtechoObjects5.length = 0;
gdjs.sala4DCode.GDpuertaizquierdaObjects1.length = 0;
gdjs.sala4DCode.GDpuertaizquierdaObjects2.length = 0;
gdjs.sala4DCode.GDpuertaizquierdaObjects3.length = 0;
gdjs.sala4DCode.GDpuertaizquierdaObjects4.length = 0;
gdjs.sala4DCode.GDpuertaizquierdaObjects5.length = 0;
gdjs.sala4DCode.GDpuertaderechaObjects1.length = 0;
gdjs.sala4DCode.GDpuertaderechaObjects2.length = 0;
gdjs.sala4DCode.GDpuertaderechaObjects3.length = 0;
gdjs.sala4DCode.GDpuertaderechaObjects4.length = 0;
gdjs.sala4DCode.GDpuertaderechaObjects5.length = 0;
gdjs.sala4DCode.GDperdisteObjects1.length = 0;
gdjs.sala4DCode.GDperdisteObjects2.length = 0;
gdjs.sala4DCode.GDperdisteObjects3.length = 0;
gdjs.sala4DCode.GDperdisteObjects4.length = 0;
gdjs.sala4DCode.GDperdisteObjects5.length = 0;

gdjs.sala4DCode.eventsList40(runtimeScene);
gdjs.sala4DCode.GDsala1Objects1.length = 0;
gdjs.sala4DCode.GDsala1Objects2.length = 0;
gdjs.sala4DCode.GDsala1Objects3.length = 0;
gdjs.sala4DCode.GDsala1Objects4.length = 0;
gdjs.sala4DCode.GDsala1Objects5.length = 0;
gdjs.sala4DCode.GDfondopuzzleObjects1.length = 0;
gdjs.sala4DCode.GDfondopuzzleObjects2.length = 0;
gdjs.sala4DCode.GDfondopuzzleObjects3.length = 0;
gdjs.sala4DCode.GDfondopuzzleObjects4.length = 0;
gdjs.sala4DCode.GDfondopuzzleObjects5.length = 0;
gdjs.sala4DCode.GDpiso2Objects1.length = 0;
gdjs.sala4DCode.GDpiso2Objects2.length = 0;
gdjs.sala4DCode.GDpiso2Objects3.length = 0;
gdjs.sala4DCode.GDpiso2Objects4.length = 0;
gdjs.sala4DCode.GDpiso2Objects5.length = 0;
gdjs.sala4DCode.GDestrellaObjects1.length = 0;
gdjs.sala4DCode.GDestrellaObjects2.length = 0;
gdjs.sala4DCode.GDestrellaObjects3.length = 0;
gdjs.sala4DCode.GDestrellaObjects4.length = 0;
gdjs.sala4DCode.GDestrellaObjects5.length = 0;
gdjs.sala4DCode.GDpesaObjects1.length = 0;
gdjs.sala4DCode.GDpesaObjects2.length = 0;
gdjs.sala4DCode.GDpesaObjects3.length = 0;
gdjs.sala4DCode.GDpesaObjects4.length = 0;
gdjs.sala4DCode.GDpesaObjects5.length = 0;
gdjs.sala4DCode.GDKObjects1.length = 0;
gdjs.sala4DCode.GDKObjects2.length = 0;
gdjs.sala4DCode.GDKObjects3.length = 0;
gdjs.sala4DCode.GDKObjects4.length = 0;
gdjs.sala4DCode.GDKObjects5.length = 0;
gdjs.sala4DCode.GDceroObjects1.length = 0;
gdjs.sala4DCode.GDceroObjects2.length = 0;
gdjs.sala4DCode.GDceroObjects3.length = 0;
gdjs.sala4DCode.GDceroObjects4.length = 0;
gdjs.sala4DCode.GDceroObjects5.length = 0;
gdjs.sala4DCode.GDpersonajeObjects1.length = 0;
gdjs.sala4DCode.GDpersonajeObjects2.length = 0;
gdjs.sala4DCode.GDpersonajeObjects3.length = 0;
gdjs.sala4DCode.GDpersonajeObjects4.length = 0;
gdjs.sala4DCode.GDpersonajeObjects5.length = 0;
gdjs.sala4DCode.GDcargaObjects1.length = 0;
gdjs.sala4DCode.GDcargaObjects2.length = 0;
gdjs.sala4DCode.GDcargaObjects3.length = 0;
gdjs.sala4DCode.GDcargaObjects4.length = 0;
gdjs.sala4DCode.GDcargaObjects5.length = 0;
gdjs.sala4DCode.GDizquierdaObjects1.length = 0;
gdjs.sala4DCode.GDizquierdaObjects2.length = 0;
gdjs.sala4DCode.GDizquierdaObjects3.length = 0;
gdjs.sala4DCode.GDizquierdaObjects4.length = 0;
gdjs.sala4DCode.GDizquierdaObjects5.length = 0;
gdjs.sala4DCode.GDderechaObjects1.length = 0;
gdjs.sala4DCode.GDderechaObjects2.length = 0;
gdjs.sala4DCode.GDderechaObjects3.length = 0;
gdjs.sala4DCode.GDderechaObjects4.length = 0;
gdjs.sala4DCode.GDderechaObjects5.length = 0;
gdjs.sala4DCode.GDpuzzleObjects1.length = 0;
gdjs.sala4DCode.GDpuzzleObjects2.length = 0;
gdjs.sala4DCode.GDpuzzleObjects3.length = 0;
gdjs.sala4DCode.GDpuzzleObjects4.length = 0;
gdjs.sala4DCode.GDpuzzleObjects5.length = 0;
gdjs.sala4DCode.GDpuzzleCObjects1.length = 0;
gdjs.sala4DCode.GDpuzzleCObjects2.length = 0;
gdjs.sala4DCode.GDpuzzleCObjects3.length = 0;
gdjs.sala4DCode.GDpuzzleCObjects4.length = 0;
gdjs.sala4DCode.GDpuzzleCObjects5.length = 0;
gdjs.sala4DCode.GDcomienzopuzzleObjects1.length = 0;
gdjs.sala4DCode.GDcomienzopuzzleObjects2.length = 0;
gdjs.sala4DCode.GDcomienzopuzzleObjects3.length = 0;
gdjs.sala4DCode.GDcomienzopuzzleObjects4.length = 0;
gdjs.sala4DCode.GDcomienzopuzzleObjects5.length = 0;
gdjs.sala4DCode.GDpisoObjects1.length = 0;
gdjs.sala4DCode.GDpisoObjects2.length = 0;
gdjs.sala4DCode.GDpisoObjects3.length = 0;
gdjs.sala4DCode.GDpisoObjects4.length = 0;
gdjs.sala4DCode.GDpisoObjects5.length = 0;
gdjs.sala4DCode.GDtechoObjects1.length = 0;
gdjs.sala4DCode.GDtechoObjects2.length = 0;
gdjs.sala4DCode.GDtechoObjects3.length = 0;
gdjs.sala4DCode.GDtechoObjects4.length = 0;
gdjs.sala4DCode.GDtechoObjects5.length = 0;
gdjs.sala4DCode.GDpuertaizquierdaObjects1.length = 0;
gdjs.sala4DCode.GDpuertaizquierdaObjects2.length = 0;
gdjs.sala4DCode.GDpuertaizquierdaObjects3.length = 0;
gdjs.sala4DCode.GDpuertaizquierdaObjects4.length = 0;
gdjs.sala4DCode.GDpuertaizquierdaObjects5.length = 0;
gdjs.sala4DCode.GDpuertaderechaObjects1.length = 0;
gdjs.sala4DCode.GDpuertaderechaObjects2.length = 0;
gdjs.sala4DCode.GDpuertaderechaObjects3.length = 0;
gdjs.sala4DCode.GDpuertaderechaObjects4.length = 0;
gdjs.sala4DCode.GDpuertaderechaObjects5.length = 0;
gdjs.sala4DCode.GDperdisteObjects1.length = 0;
gdjs.sala4DCode.GDperdisteObjects2.length = 0;
gdjs.sala4DCode.GDperdisteObjects3.length = 0;
gdjs.sala4DCode.GDperdisteObjects4.length = 0;
gdjs.sala4DCode.GDperdisteObjects5.length = 0;


return;

}

gdjs['sala4DCode'] = gdjs.sala4DCode;
