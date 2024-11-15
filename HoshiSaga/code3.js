gdjs.lvl2Code = {};
gdjs.lvl2Code.localVariables = [];
gdjs.lvl2Code.GDfondoObjects1= [];
gdjs.lvl2Code.GDfondoObjects2= [];
gdjs.lvl2Code.GDfondoObjects3= [];
gdjs.lvl2Code.GDfondoObjects4= [];
gdjs.lvl2Code.GDcirculoObjects1= [];
gdjs.lvl2Code.GDcirculoObjects2= [];
gdjs.lvl2Code.GDcirculoObjects3= [];
gdjs.lvl2Code.GDcirculoObjects4= [];
gdjs.lvl2Code.GDtrianguloObjects1= [];
gdjs.lvl2Code.GDtrianguloObjects2= [];
gdjs.lvl2Code.GDtrianguloObjects3= [];
gdjs.lvl2Code.GDtrianguloObjects4= [];
gdjs.lvl2Code.GDcuadradoObjects1= [];
gdjs.lvl2Code.GDcuadradoObjects2= [];
gdjs.lvl2Code.GDcuadradoObjects3= [];
gdjs.lvl2Code.GDcuadradoObjects4= [];
gdjs.lvl2Code.GDpentagonoObjects1= [];
gdjs.lvl2Code.GDpentagonoObjects2= [];
gdjs.lvl2Code.GDpentagonoObjects3= [];
gdjs.lvl2Code.GDpentagonoObjects4= [];
gdjs.lvl2Code.GDhexagonoObjects1= [];
gdjs.lvl2Code.GDhexagonoObjects2= [];
gdjs.lvl2Code.GDhexagonoObjects3= [];
gdjs.lvl2Code.GDhexagonoObjects4= [];
gdjs.lvl2Code.GDestrellaObjects1= [];
gdjs.lvl2Code.GDestrellaObjects2= [];
gdjs.lvl2Code.GDestrellaObjects3= [];
gdjs.lvl2Code.GDestrellaObjects4= [];
gdjs.lvl2Code.GDfrenteObjects1= [];
gdjs.lvl2Code.GDfrenteObjects2= [];
gdjs.lvl2Code.GDfrenteObjects3= [];
gdjs.lvl2Code.GDfrenteObjects4= [];
gdjs.lvl2Code.GDstage_95952Objects1= [];
gdjs.lvl2Code.GDstage_95952Objects2= [];
gdjs.lvl2Code.GDstage_95952Objects3= [];
gdjs.lvl2Code.GDstage_95952Objects4= [];
gdjs.lvl2Code.GDcargaObjects1= [];
gdjs.lvl2Code.GDcargaObjects2= [];
gdjs.lvl2Code.GDcargaObjects3= [];
gdjs.lvl2Code.GDcargaObjects4= [];
gdjs.lvl2Code.GDsalirObjects1= [];
gdjs.lvl2Code.GDsalirObjects2= [];
gdjs.lvl2Code.GDsalirObjects3= [];
gdjs.lvl2Code.GDsalirObjects4= [];
gdjs.lvl2Code.GDclearObjects1= [];
gdjs.lvl2Code.GDclearObjects2= [];
gdjs.lvl2Code.GDclearObjects3= [];
gdjs.lvl2Code.GDclearObjects4= [];
gdjs.lvl2Code.GDclickObjects1= [];
gdjs.lvl2Code.GDclickObjects2= [];
gdjs.lvl2Code.GDclickObjects3= [];
gdjs.lvl2Code.GDclickObjects4= [];


gdjs.lvl2Code.asyncCallback26568868 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("salir"), gdjs.lvl2Code.GDsalirObjects2);

{for(var i = 0, len = gdjs.lvl2Code.GDsalirObjects2.length ;i < len;++i) {
    gdjs.lvl2Code.GDsalirObjects2[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}gdjs.lvl2Code.localVariables.length = 0;
}
gdjs.lvl2Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl2Code.localVariables);
for (const obj of gdjs.lvl2Code.GDsalirObjects1) asyncObjectsList.addObject("salir", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.lvl2Code.asyncCallback26568868(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl2Code.asyncCallback26570292 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl2Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "niveles", false);
}gdjs.lvl2Code.localVariables.length = 0;
}
gdjs.lvl2Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.lvl2Code.asyncCallback26570292(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl2Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("clear"), gdjs.lvl2Code.GDclearObjects2);
{for(var i = 0, len = gdjs.lvl2Code.GDclearObjects2.length ;i < len;++i) {
    gdjs.lvl2Code.GDclearObjects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.doesSceneExist(runtimeScene, "lvl2");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("circulo"), gdjs.lvl2Code.GDcirculoObjects1);
gdjs.copyArray(runtimeScene.getObjects("click"), gdjs.lvl2Code.GDclickObjects1);
gdjs.copyArray(runtimeScene.getObjects("cuadrado"), gdjs.lvl2Code.GDcuadradoObjects1);
gdjs.copyArray(runtimeScene.getObjects("estrella"), gdjs.lvl2Code.GDestrellaObjects1);
gdjs.copyArray(runtimeScene.getObjects("hexagono"), gdjs.lvl2Code.GDhexagonoObjects1);
gdjs.copyArray(runtimeScene.getObjects("pentagono"), gdjs.lvl2Code.GDpentagonoObjects1);
gdjs.copyArray(runtimeScene.getObjects("stage_2"), gdjs.lvl2Code.GDstage_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("triangulo"), gdjs.lvl2Code.GDtrianguloObjects1);
{gdjs.evtTools.input.showCursor(runtimeScene);
}{for(var i = 0, len = gdjs.lvl2Code.GDclickObjects1.length ;i < len;++i) {
    gdjs.lvl2Code.GDclickObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.lvl2Code.GDcirculoObjects1.length ;i < len;++i) {
    gdjs.lvl2Code.GDcirculoObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.lvl2Code.GDtrianguloObjects1.length ;i < len;++i) {
    gdjs.lvl2Code.GDtrianguloObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.lvl2Code.GDcuadradoObjects1.length ;i < len;++i) {
    gdjs.lvl2Code.GDcuadradoObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.lvl2Code.GDpentagonoObjects1.length ;i < len;++i) {
    gdjs.lvl2Code.GDpentagonoObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.lvl2Code.GDhexagonoObjects1.length ;i < len;++i) {
    gdjs.lvl2Code.GDhexagonoObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.lvl2Code.GDestrellaObjects1.length ;i < len;++i) {
    gdjs.lvl2Code.GDestrellaObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.lvl2Code.GDstage_95952Objects1.length ;i < len;++i) {
    gdjs.lvl2Code.GDstage_95952Objects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}}

}


};gdjs.lvl2Code.asyncCallback25448644 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("stage_2"), gdjs.lvl2Code.GDstage_95952Objects3);

{for(var i = 0, len = gdjs.lvl2Code.GDstage_95952Objects3.length ;i < len;++i) {
    gdjs.lvl2Code.GDstage_95952Objects3[i].deleteFromScene(runtimeScene);
}
}gdjs.lvl2Code.localVariables.length = 0;
}
gdjs.lvl2Code.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl2Code.localVariables);
for (const obj of gdjs.lvl2Code.GDstage_95952Objects2) asyncObjectsList.addObject("stage_2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.lvl2Code.asyncCallback25448644(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl2Code.asyncCallback25448356 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("stage_2"), gdjs.lvl2Code.GDstage_95952Objects2);

{for(var i = 0, len = gdjs.lvl2Code.GDstage_95952Objects2.length ;i < len;++i) {
    gdjs.lvl2Code.GDstage_95952Objects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
{ //Subevents
gdjs.lvl2Code.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.lvl2Code.localVariables.length = 0;
}
gdjs.lvl2Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl2Code.localVariables);
for (const obj of gdjs.lvl2Code.GDstage_95952Objects1) asyncObjectsList.addObject("stage_2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.lvl2Code.asyncCallback25448356(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl2Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("stage_2"), gdjs.lvl2Code.GDstage_95952Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl2Code.GDstage_95952Objects2.length;i<l;++i) {
    if ( gdjs.lvl2Code.GDstage_95952Objects2[i].getX() < 329 ) {
        isConditionTrue_0 = true;
        gdjs.lvl2Code.GDstage_95952Objects2[k] = gdjs.lvl2Code.GDstage_95952Objects2[i];
        ++k;
    }
}
gdjs.lvl2Code.GDstage_95952Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.lvl2Code.GDstage_95952Objects2 */
{for(var i = 0, len = gdjs.lvl2Code.GDstage_95952Objects2.length ;i < len;++i) {
    gdjs.lvl2Code.GDstage_95952Objects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("stage_2"), gdjs.lvl2Code.GDstage_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl2Code.GDstage_95952Objects1.length;i<l;++i) {
    if ( gdjs.lvl2Code.GDstage_95952Objects1[i].getX() >= 329 ) {
        isConditionTrue_0 = true;
        gdjs.lvl2Code.GDstage_95952Objects1[k] = gdjs.lvl2Code.GDstage_95952Objects1[i];
        ++k;
    }
}
gdjs.lvl2Code.GDstage_95952Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.lvl2Code.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.lvl2Code.asyncCallback25451292 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("circulo"), gdjs.lvl2Code.GDcirculoObjects3);

{for(var i = 0, len = gdjs.lvl2Code.GDcirculoObjects3.length ;i < len;++i) {
    gdjs.lvl2Code.GDcirculoObjects3[i].deleteFromScene(runtimeScene);
}
}gdjs.lvl2Code.localVariables.length = 0;
}
gdjs.lvl2Code.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl2Code.localVariables);
for (const obj of gdjs.lvl2Code.GDcirculoObjects2) asyncObjectsList.addObject("circulo", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.lvl2Code.asyncCallback25451292(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl2Code.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("circulo"), gdjs.lvl2Code.GDcirculoObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl2Code.GDcirculoObjects3.length;i<l;++i) {
    if ( gdjs.lvl2Code.GDcirculoObjects3[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lvl2Code.GDcirculoObjects3[k] = gdjs.lvl2Code.GDcirculoObjects3[i];
        ++k;
    }
}
gdjs.lvl2Code.GDcirculoObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("click"), gdjs.lvl2Code.GDclickObjects3);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.lvl2Code.GDclickObjects3.length ;i < len;++i) {
    gdjs.lvl2Code.GDclickObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.lvl2Code.GDclickObjects3.length ;i < len;++i) {
    gdjs.lvl2Code.GDclickObjects3[i].setX(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.lvl2Code.GDclickObjects3.length ;i < len;++i) {
    gdjs.lvl2Code.GDclickObjects3[i].setY(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("circulo"), gdjs.lvl2Code.GDcirculoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl2Code.GDcirculoObjects2.length;i<l;++i) {
    if ( gdjs.lvl2Code.GDcirculoObjects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lvl2Code.GDcirculoObjects2[k] = gdjs.lvl2Code.GDcirculoObjects2[i];
        ++k;
    }
}
gdjs.lvl2Code.GDcirculoObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.lvl2Code.GDcirculoObjects2 */
{for(var i = 0, len = gdjs.lvl2Code.GDcirculoObjects2.length ;i < len;++i) {
    gdjs.lvl2Code.GDcirculoObjects2[i].getBehavior("PlatformerObject").setGravity(200);
}
}
{ //Subevents
gdjs.lvl2Code.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.lvl2Code.asyncCallback25453580 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("triangulo"), gdjs.lvl2Code.GDtrianguloObjects3);

{for(var i = 0, len = gdjs.lvl2Code.GDtrianguloObjects3.length ;i < len;++i) {
    gdjs.lvl2Code.GDtrianguloObjects3[i].deleteFromScene(runtimeScene);
}
}gdjs.lvl2Code.localVariables.length = 0;
}
gdjs.lvl2Code.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl2Code.localVariables);
for (const obj of gdjs.lvl2Code.GDtrianguloObjects2) asyncObjectsList.addObject("triangulo", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.lvl2Code.asyncCallback25453580(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl2Code.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("triangulo"), gdjs.lvl2Code.GDtrianguloObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl2Code.GDtrianguloObjects3.length;i<l;++i) {
    if ( gdjs.lvl2Code.GDtrianguloObjects3[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lvl2Code.GDtrianguloObjects3[k] = gdjs.lvl2Code.GDtrianguloObjects3[i];
        ++k;
    }
}
gdjs.lvl2Code.GDtrianguloObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("click"), gdjs.lvl2Code.GDclickObjects3);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.lvl2Code.GDclickObjects3.length ;i < len;++i) {
    gdjs.lvl2Code.GDclickObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.lvl2Code.GDclickObjects3.length ;i < len;++i) {
    gdjs.lvl2Code.GDclickObjects3[i].setX(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.lvl2Code.GDclickObjects3.length ;i < len;++i) {
    gdjs.lvl2Code.GDclickObjects3[i].setY(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("triangulo"), gdjs.lvl2Code.GDtrianguloObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl2Code.GDtrianguloObjects2.length;i<l;++i) {
    if ( gdjs.lvl2Code.GDtrianguloObjects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lvl2Code.GDtrianguloObjects2[k] = gdjs.lvl2Code.GDtrianguloObjects2[i];
        ++k;
    }
}
gdjs.lvl2Code.GDtrianguloObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.lvl2Code.GDtrianguloObjects2 */
{for(var i = 0, len = gdjs.lvl2Code.GDtrianguloObjects2.length ;i < len;++i) {
    gdjs.lvl2Code.GDtrianguloObjects2[i].getBehavior("PlatformerObject").setGravity(200);
}
}
{ //Subevents
gdjs.lvl2Code.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.lvl2Code.asyncCallback25455908 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("cuadrado"), gdjs.lvl2Code.GDcuadradoObjects3);

{for(var i = 0, len = gdjs.lvl2Code.GDcuadradoObjects3.length ;i < len;++i) {
    gdjs.lvl2Code.GDcuadradoObjects3[i].deleteFromScene(runtimeScene);
}
}gdjs.lvl2Code.localVariables.length = 0;
}
gdjs.lvl2Code.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl2Code.localVariables);
for (const obj of gdjs.lvl2Code.GDcuadradoObjects2) asyncObjectsList.addObject("cuadrado", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.lvl2Code.asyncCallback25455908(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl2Code.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("cuadrado"), gdjs.lvl2Code.GDcuadradoObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl2Code.GDcuadradoObjects3.length;i<l;++i) {
    if ( gdjs.lvl2Code.GDcuadradoObjects3[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lvl2Code.GDcuadradoObjects3[k] = gdjs.lvl2Code.GDcuadradoObjects3[i];
        ++k;
    }
}
gdjs.lvl2Code.GDcuadradoObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("click"), gdjs.lvl2Code.GDclickObjects3);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.lvl2Code.GDclickObjects3.length ;i < len;++i) {
    gdjs.lvl2Code.GDclickObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.lvl2Code.GDclickObjects3.length ;i < len;++i) {
    gdjs.lvl2Code.GDclickObjects3[i].setX(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.lvl2Code.GDclickObjects3.length ;i < len;++i) {
    gdjs.lvl2Code.GDclickObjects3[i].setY(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cuadrado"), gdjs.lvl2Code.GDcuadradoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl2Code.GDcuadradoObjects2.length;i<l;++i) {
    if ( gdjs.lvl2Code.GDcuadradoObjects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lvl2Code.GDcuadradoObjects2[k] = gdjs.lvl2Code.GDcuadradoObjects2[i];
        ++k;
    }
}
gdjs.lvl2Code.GDcuadradoObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.lvl2Code.GDcuadradoObjects2 */
{for(var i = 0, len = gdjs.lvl2Code.GDcuadradoObjects2.length ;i < len;++i) {
    gdjs.lvl2Code.GDcuadradoObjects2[i].getBehavior("PlatformerObject").setGravity(200);
}
}
{ //Subevents
gdjs.lvl2Code.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.lvl2Code.asyncCallback25458236 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("pentagono"), gdjs.lvl2Code.GDpentagonoObjects3);

{for(var i = 0, len = gdjs.lvl2Code.GDpentagonoObjects3.length ;i < len;++i) {
    gdjs.lvl2Code.GDpentagonoObjects3[i].deleteFromScene(runtimeScene);
}
}gdjs.lvl2Code.localVariables.length = 0;
}
gdjs.lvl2Code.eventsList12 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl2Code.localVariables);
for (const obj of gdjs.lvl2Code.GDpentagonoObjects2) asyncObjectsList.addObject("pentagono", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.lvl2Code.asyncCallback25458236(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl2Code.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("pentagono"), gdjs.lvl2Code.GDpentagonoObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl2Code.GDpentagonoObjects3.length;i<l;++i) {
    if ( gdjs.lvl2Code.GDpentagonoObjects3[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lvl2Code.GDpentagonoObjects3[k] = gdjs.lvl2Code.GDpentagonoObjects3[i];
        ++k;
    }
}
gdjs.lvl2Code.GDpentagonoObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("click"), gdjs.lvl2Code.GDclickObjects3);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.lvl2Code.GDclickObjects3.length ;i < len;++i) {
    gdjs.lvl2Code.GDclickObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.lvl2Code.GDclickObjects3.length ;i < len;++i) {
    gdjs.lvl2Code.GDclickObjects3[i].setX(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.lvl2Code.GDclickObjects3.length ;i < len;++i) {
    gdjs.lvl2Code.GDclickObjects3[i].setY(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("pentagono"), gdjs.lvl2Code.GDpentagonoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl2Code.GDpentagonoObjects2.length;i<l;++i) {
    if ( gdjs.lvl2Code.GDpentagonoObjects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lvl2Code.GDpentagonoObjects2[k] = gdjs.lvl2Code.GDpentagonoObjects2[i];
        ++k;
    }
}
gdjs.lvl2Code.GDpentagonoObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.lvl2Code.GDpentagonoObjects2 */
{for(var i = 0, len = gdjs.lvl2Code.GDpentagonoObjects2.length ;i < len;++i) {
    gdjs.lvl2Code.GDpentagonoObjects2[i].getBehavior("PlatformerObject").setGravity(200);
}
}
{ //Subevents
gdjs.lvl2Code.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.lvl2Code.asyncCallback25460564 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("hexagono"), gdjs.lvl2Code.GDhexagonoObjects3);

{for(var i = 0, len = gdjs.lvl2Code.GDhexagonoObjects3.length ;i < len;++i) {
    gdjs.lvl2Code.GDhexagonoObjects3[i].deleteFromScene(runtimeScene);
}
}gdjs.lvl2Code.localVariables.length = 0;
}
gdjs.lvl2Code.eventsList14 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl2Code.localVariables);
for (const obj of gdjs.lvl2Code.GDhexagonoObjects2) asyncObjectsList.addObject("hexagono", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.lvl2Code.asyncCallback25460564(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl2Code.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("hexagono"), gdjs.lvl2Code.GDhexagonoObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl2Code.GDhexagonoObjects3.length;i<l;++i) {
    if ( gdjs.lvl2Code.GDhexagonoObjects3[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lvl2Code.GDhexagonoObjects3[k] = gdjs.lvl2Code.GDhexagonoObjects3[i];
        ++k;
    }
}
gdjs.lvl2Code.GDhexagonoObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("click"), gdjs.lvl2Code.GDclickObjects3);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.lvl2Code.GDclickObjects3.length ;i < len;++i) {
    gdjs.lvl2Code.GDclickObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.lvl2Code.GDclickObjects3.length ;i < len;++i) {
    gdjs.lvl2Code.GDclickObjects3[i].setX(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.lvl2Code.GDclickObjects3.length ;i < len;++i) {
    gdjs.lvl2Code.GDclickObjects3[i].setY(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("hexagono"), gdjs.lvl2Code.GDhexagonoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl2Code.GDhexagonoObjects2.length;i<l;++i) {
    if ( gdjs.lvl2Code.GDhexagonoObjects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lvl2Code.GDhexagonoObjects2[k] = gdjs.lvl2Code.GDhexagonoObjects2[i];
        ++k;
    }
}
gdjs.lvl2Code.GDhexagonoObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.lvl2Code.GDhexagonoObjects2 */
{for(var i = 0, len = gdjs.lvl2Code.GDhexagonoObjects2.length ;i < len;++i) {
    gdjs.lvl2Code.GDhexagonoObjects2[i].getBehavior("PlatformerObject").setGravity(200);
}
}
{ //Subevents
gdjs.lvl2Code.eventsList14(runtimeScene);} //End of subevents
}

}


};gdjs.lvl2Code.eventsList16 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), false, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(6).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setBoolean(true);
}}

}


};gdjs.lvl2Code.asyncCallback25463660 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl2Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "niveles", false);
}
{ //Subevents
gdjs.lvl2Code.eventsList16(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.lvl2Code.localVariables.length = 0;
}
gdjs.lvl2Code.eventsList17 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.lvl2Code.asyncCallback25463660(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl2Code.asyncCallback25462812 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl2Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.lvl2Code.GDcargaObjects2);
gdjs.copyArray(runtimeScene.getObjects("clear"), gdjs.lvl2Code.GDclearObjects2);
gdjs.copyArray(asyncObjectsList.getObjects("estrella"), gdjs.lvl2Code.GDestrellaObjects2);

{for(var i = 0, len = gdjs.lvl2Code.GDestrellaObjects2.length ;i < len;++i) {
    gdjs.lvl2Code.GDestrellaObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.lvl2Code.GDclearObjects2.length ;i < len;++i) {
    gdjs.lvl2Code.GDclearObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.lvl2Code.GDcargaObjects2.length ;i < len;++i) {
    gdjs.lvl2Code.GDcargaObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 4, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.lvl2Code.eventsList17(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.lvl2Code.localVariables.length = 0;
}
gdjs.lvl2Code.eventsList18 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl2Code.localVariables);
for (const obj of gdjs.lvl2Code.GDestrellaObjects1) asyncObjectsList.addObject("estrella", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.lvl2Code.asyncCallback25462812(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl2Code.eventsList19 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("estrella"), gdjs.lvl2Code.GDestrellaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl2Code.GDestrellaObjects2.length;i<l;++i) {
    if ( gdjs.lvl2Code.GDestrellaObjects2[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lvl2Code.GDestrellaObjects2[k] = gdjs.lvl2Code.GDestrellaObjects2[i];
        ++k;
    }
}
gdjs.lvl2Code.GDestrellaObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("click"), gdjs.lvl2Code.GDclickObjects2);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.lvl2Code.GDclickObjects2.length ;i < len;++i) {
    gdjs.lvl2Code.GDclickObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.lvl2Code.GDclickObjects2.length ;i < len;++i) {
    gdjs.lvl2Code.GDclickObjects2[i].setX(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.lvl2Code.GDclickObjects2.length ;i < len;++i) {
    gdjs.lvl2Code.GDclickObjects2[i].setY(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("estrella"), gdjs.lvl2Code.GDestrellaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl2Code.GDestrellaObjects1.length;i<l;++i) {
    if ( gdjs.lvl2Code.GDestrellaObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lvl2Code.GDestrellaObjects1[k] = gdjs.lvl2Code.GDestrellaObjects1[i];
        ++k;
    }
}
gdjs.lvl2Code.GDestrellaObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.lvl2Code.GDestrellaObjects1 */
gdjs.copyArray(runtimeScene.getObjects("salir"), gdjs.lvl2Code.GDsalirObjects1);
{for(var i = 0, len = gdjs.lvl2Code.GDsalirObjects1.length ;i < len;++i) {
    gdjs.lvl2Code.GDsalirObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.lvl2Code.GDestrellaObjects1.length ;i < len;++i) {
    gdjs.lvl2Code.GDestrellaObjects1[i].getBehavior("PlatformerObject").setGravity(200);
}
}
{ //Subevents
gdjs.lvl2Code.eventsList18(runtimeScene);} //End of subevents
}

}


};gdjs.lvl2Code.eventsList20 = function(runtimeScene) {

{


gdjs.lvl2Code.eventsList7(runtimeScene);
}


{


gdjs.lvl2Code.eventsList9(runtimeScene);
}


{


gdjs.lvl2Code.eventsList11(runtimeScene);
}


{


gdjs.lvl2Code.eventsList13(runtimeScene);
}


{


gdjs.lvl2Code.eventsList15(runtimeScene);
}


{


gdjs.lvl2Code.eventsList19(runtimeScene);
}


};gdjs.lvl2Code.eventsList21 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.lvl2Code.GDcargaObjects1);
gdjs.copyArray(runtimeScene.getObjects("salir"), gdjs.lvl2Code.GDsalirObjects1);
{for(var i = 0, len = gdjs.lvl2Code.GDsalirObjects1.length ;i < len;++i) {
    gdjs.lvl2Code.GDsalirObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.lvl2Code.GDcargaObjects1.length ;i < len;++i) {
    gdjs.lvl2Code.GDcargaObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Flash", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.lvl2Code.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("salir"), gdjs.lvl2Code.GDsalirObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl2Code.GDsalirObjects1.length;i<l;++i) {
    if ( gdjs.lvl2Code.GDsalirObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lvl2Code.GDsalirObjects1[k] = gdjs.lvl2Code.GDsalirObjects1[i];
        ++k;
    }
}
gdjs.lvl2Code.GDsalirObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.lvl2Code.GDcargaObjects1);
{for(var i = 0, len = gdjs.lvl2Code.GDcargaObjects1.length ;i < len;++i) {
    gdjs.lvl2Code.GDcargaObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Flash", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(0);
}
{ //Subevents
gdjs.lvl2Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.lvl2Code.eventsList2(runtimeScene);
}


{


gdjs.lvl2Code.eventsList5(runtimeScene);
}


{


gdjs.lvl2Code.eventsList20(runtimeScene);
}


};

gdjs.lvl2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.lvl2Code.GDfondoObjects1.length = 0;
gdjs.lvl2Code.GDfondoObjects2.length = 0;
gdjs.lvl2Code.GDfondoObjects3.length = 0;
gdjs.lvl2Code.GDfondoObjects4.length = 0;
gdjs.lvl2Code.GDcirculoObjects1.length = 0;
gdjs.lvl2Code.GDcirculoObjects2.length = 0;
gdjs.lvl2Code.GDcirculoObjects3.length = 0;
gdjs.lvl2Code.GDcirculoObjects4.length = 0;
gdjs.lvl2Code.GDtrianguloObjects1.length = 0;
gdjs.lvl2Code.GDtrianguloObjects2.length = 0;
gdjs.lvl2Code.GDtrianguloObjects3.length = 0;
gdjs.lvl2Code.GDtrianguloObjects4.length = 0;
gdjs.lvl2Code.GDcuadradoObjects1.length = 0;
gdjs.lvl2Code.GDcuadradoObjects2.length = 0;
gdjs.lvl2Code.GDcuadradoObjects3.length = 0;
gdjs.lvl2Code.GDcuadradoObjects4.length = 0;
gdjs.lvl2Code.GDpentagonoObjects1.length = 0;
gdjs.lvl2Code.GDpentagonoObjects2.length = 0;
gdjs.lvl2Code.GDpentagonoObjects3.length = 0;
gdjs.lvl2Code.GDpentagonoObjects4.length = 0;
gdjs.lvl2Code.GDhexagonoObjects1.length = 0;
gdjs.lvl2Code.GDhexagonoObjects2.length = 0;
gdjs.lvl2Code.GDhexagonoObjects3.length = 0;
gdjs.lvl2Code.GDhexagonoObjects4.length = 0;
gdjs.lvl2Code.GDestrellaObjects1.length = 0;
gdjs.lvl2Code.GDestrellaObjects2.length = 0;
gdjs.lvl2Code.GDestrellaObjects3.length = 0;
gdjs.lvl2Code.GDestrellaObjects4.length = 0;
gdjs.lvl2Code.GDfrenteObjects1.length = 0;
gdjs.lvl2Code.GDfrenteObjects2.length = 0;
gdjs.lvl2Code.GDfrenteObjects3.length = 0;
gdjs.lvl2Code.GDfrenteObjects4.length = 0;
gdjs.lvl2Code.GDstage_95952Objects1.length = 0;
gdjs.lvl2Code.GDstage_95952Objects2.length = 0;
gdjs.lvl2Code.GDstage_95952Objects3.length = 0;
gdjs.lvl2Code.GDstage_95952Objects4.length = 0;
gdjs.lvl2Code.GDcargaObjects1.length = 0;
gdjs.lvl2Code.GDcargaObjects2.length = 0;
gdjs.lvl2Code.GDcargaObjects3.length = 0;
gdjs.lvl2Code.GDcargaObjects4.length = 0;
gdjs.lvl2Code.GDsalirObjects1.length = 0;
gdjs.lvl2Code.GDsalirObjects2.length = 0;
gdjs.lvl2Code.GDsalirObjects3.length = 0;
gdjs.lvl2Code.GDsalirObjects4.length = 0;
gdjs.lvl2Code.GDclearObjects1.length = 0;
gdjs.lvl2Code.GDclearObjects2.length = 0;
gdjs.lvl2Code.GDclearObjects3.length = 0;
gdjs.lvl2Code.GDclearObjects4.length = 0;
gdjs.lvl2Code.GDclickObjects1.length = 0;
gdjs.lvl2Code.GDclickObjects2.length = 0;
gdjs.lvl2Code.GDclickObjects3.length = 0;
gdjs.lvl2Code.GDclickObjects4.length = 0;

gdjs.lvl2Code.eventsList21(runtimeScene);
gdjs.lvl2Code.GDfondoObjects1.length = 0;
gdjs.lvl2Code.GDfondoObjects2.length = 0;
gdjs.lvl2Code.GDfondoObjects3.length = 0;
gdjs.lvl2Code.GDfondoObjects4.length = 0;
gdjs.lvl2Code.GDcirculoObjects1.length = 0;
gdjs.lvl2Code.GDcirculoObjects2.length = 0;
gdjs.lvl2Code.GDcirculoObjects3.length = 0;
gdjs.lvl2Code.GDcirculoObjects4.length = 0;
gdjs.lvl2Code.GDtrianguloObjects1.length = 0;
gdjs.lvl2Code.GDtrianguloObjects2.length = 0;
gdjs.lvl2Code.GDtrianguloObjects3.length = 0;
gdjs.lvl2Code.GDtrianguloObjects4.length = 0;
gdjs.lvl2Code.GDcuadradoObjects1.length = 0;
gdjs.lvl2Code.GDcuadradoObjects2.length = 0;
gdjs.lvl2Code.GDcuadradoObjects3.length = 0;
gdjs.lvl2Code.GDcuadradoObjects4.length = 0;
gdjs.lvl2Code.GDpentagonoObjects1.length = 0;
gdjs.lvl2Code.GDpentagonoObjects2.length = 0;
gdjs.lvl2Code.GDpentagonoObjects3.length = 0;
gdjs.lvl2Code.GDpentagonoObjects4.length = 0;
gdjs.lvl2Code.GDhexagonoObjects1.length = 0;
gdjs.lvl2Code.GDhexagonoObjects2.length = 0;
gdjs.lvl2Code.GDhexagonoObjects3.length = 0;
gdjs.lvl2Code.GDhexagonoObjects4.length = 0;
gdjs.lvl2Code.GDestrellaObjects1.length = 0;
gdjs.lvl2Code.GDestrellaObjects2.length = 0;
gdjs.lvl2Code.GDestrellaObjects3.length = 0;
gdjs.lvl2Code.GDestrellaObjects4.length = 0;
gdjs.lvl2Code.GDfrenteObjects1.length = 0;
gdjs.lvl2Code.GDfrenteObjects2.length = 0;
gdjs.lvl2Code.GDfrenteObjects3.length = 0;
gdjs.lvl2Code.GDfrenteObjects4.length = 0;
gdjs.lvl2Code.GDstage_95952Objects1.length = 0;
gdjs.lvl2Code.GDstage_95952Objects2.length = 0;
gdjs.lvl2Code.GDstage_95952Objects3.length = 0;
gdjs.lvl2Code.GDstage_95952Objects4.length = 0;
gdjs.lvl2Code.GDcargaObjects1.length = 0;
gdjs.lvl2Code.GDcargaObjects2.length = 0;
gdjs.lvl2Code.GDcargaObjects3.length = 0;
gdjs.lvl2Code.GDcargaObjects4.length = 0;
gdjs.lvl2Code.GDsalirObjects1.length = 0;
gdjs.lvl2Code.GDsalirObjects2.length = 0;
gdjs.lvl2Code.GDsalirObjects3.length = 0;
gdjs.lvl2Code.GDsalirObjects4.length = 0;
gdjs.lvl2Code.GDclearObjects1.length = 0;
gdjs.lvl2Code.GDclearObjects2.length = 0;
gdjs.lvl2Code.GDclearObjects3.length = 0;
gdjs.lvl2Code.GDclearObjects4.length = 0;
gdjs.lvl2Code.GDclickObjects1.length = 0;
gdjs.lvl2Code.GDclickObjects2.length = 0;
gdjs.lvl2Code.GDclickObjects3.length = 0;
gdjs.lvl2Code.GDclickObjects4.length = 0;


return;

}

gdjs['lvl2Code'] = gdjs.lvl2Code;
