gdjs.lvl4Code = {};
gdjs.lvl4Code.localVariables = [];
gdjs.lvl4Code.GDfondoObjects1= [];
gdjs.lvl4Code.GDfondoObjects2= [];
gdjs.lvl4Code.GDfondoObjects3= [];
gdjs.lvl4Code.GDfondoObjects4= [];
gdjs.lvl4Code.GDpuntoObjects1= [];
gdjs.lvl4Code.GDpuntoObjects2= [];
gdjs.lvl4Code.GDpuntoObjects3= [];
gdjs.lvl4Code.GDpuntoObjects4= [];
gdjs.lvl4Code.GDestrellaObjects1= [];
gdjs.lvl4Code.GDestrellaObjects2= [];
gdjs.lvl4Code.GDestrellaObjects3= [];
gdjs.lvl4Code.GDestrellaObjects4= [];
gdjs.lvl4Code.GDStage_95954Objects1= [];
gdjs.lvl4Code.GDStage_95954Objects2= [];
gdjs.lvl4Code.GDStage_95954Objects3= [];
gdjs.lvl4Code.GDStage_95954Objects4= [];
gdjs.lvl4Code.GDestrella2Objects1= [];
gdjs.lvl4Code.GDestrella2Objects2= [];
gdjs.lvl4Code.GDestrella2Objects3= [];
gdjs.lvl4Code.GDestrella2Objects4= [];
gdjs.lvl4Code.GDestrella3Objects1= [];
gdjs.lvl4Code.GDestrella3Objects2= [];
gdjs.lvl4Code.GDestrella3Objects3= [];
gdjs.lvl4Code.GDestrella3Objects4= [];
gdjs.lvl4Code.GDestrella4Objects1= [];
gdjs.lvl4Code.GDestrella4Objects2= [];
gdjs.lvl4Code.GDestrella4Objects3= [];
gdjs.lvl4Code.GDestrella4Objects4= [];
gdjs.lvl4Code.GDestrella5Objects1= [];
gdjs.lvl4Code.GDestrella5Objects2= [];
gdjs.lvl4Code.GDestrella5Objects3= [];
gdjs.lvl4Code.GDestrella5Objects4= [];
gdjs.lvl4Code.GDcargaObjects1= [];
gdjs.lvl4Code.GDcargaObjects2= [];
gdjs.lvl4Code.GDcargaObjects3= [];
gdjs.lvl4Code.GDcargaObjects4= [];
gdjs.lvl4Code.GDsalirObjects1= [];
gdjs.lvl4Code.GDsalirObjects2= [];
gdjs.lvl4Code.GDsalirObjects3= [];
gdjs.lvl4Code.GDsalirObjects4= [];
gdjs.lvl4Code.GDclearObjects1= [];
gdjs.lvl4Code.GDclearObjects2= [];
gdjs.lvl4Code.GDclearObjects3= [];
gdjs.lvl4Code.GDclearObjects4= [];
gdjs.lvl4Code.GDclickObjects1= [];
gdjs.lvl4Code.GDclickObjects2= [];
gdjs.lvl4Code.GDclickObjects3= [];
gdjs.lvl4Code.GDclickObjects4= [];


gdjs.lvl4Code.asyncCallback27987972 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl4Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("salir"), gdjs.lvl4Code.GDsalirObjects2);

{for(var i = 0, len = gdjs.lvl4Code.GDsalirObjects2.length ;i < len;++i) {
    gdjs.lvl4Code.GDsalirObjects2[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}gdjs.lvl4Code.localVariables.length = 0;
}
gdjs.lvl4Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl4Code.localVariables);
for (const obj of gdjs.lvl4Code.GDsalirObjects1) asyncObjectsList.addObject("salir", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.lvl4Code.asyncCallback27987972(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl4Code.asyncCallback27990084 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl4Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "niveles", false);
}gdjs.lvl4Code.localVariables.length = 0;
}
gdjs.lvl4Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl4Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.lvl4Code.asyncCallback27990084(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl4Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("clear"), gdjs.lvl4Code.GDclearObjects1);
gdjs.copyArray(runtimeScene.getObjects("estrella"), gdjs.lvl4Code.GDestrellaObjects1);
gdjs.copyArray(runtimeScene.getObjects("estrella2"), gdjs.lvl4Code.GDestrella2Objects1);
gdjs.copyArray(runtimeScene.getObjects("estrella3"), gdjs.lvl4Code.GDestrella3Objects1);
gdjs.copyArray(runtimeScene.getObjects("estrella4"), gdjs.lvl4Code.GDestrella4Objects1);
gdjs.copyArray(runtimeScene.getObjects("estrella5"), gdjs.lvl4Code.GDestrella5Objects1);
gdjs.copyArray(runtimeScene.getObjects("punto"), gdjs.lvl4Code.GDpuntoObjects1);
{for(var i = 0, len = gdjs.lvl4Code.GDpuntoObjects1.length ;i < len;++i) {
    gdjs.lvl4Code.GDpuntoObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.lvl4Code.GDestrellaObjects1.length ;i < len;++i) {
    gdjs.lvl4Code.GDestrellaObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.lvl4Code.GDestrella2Objects1.length ;i < len;++i) {
    gdjs.lvl4Code.GDestrella2Objects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.lvl4Code.GDestrella3Objects1.length ;i < len;++i) {
    gdjs.lvl4Code.GDestrella3Objects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.lvl4Code.GDestrella4Objects1.length ;i < len;++i) {
    gdjs.lvl4Code.GDestrella4Objects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.lvl4Code.GDestrella5Objects1.length ;i < len;++i) {
    gdjs.lvl4Code.GDestrella5Objects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.lvl4Code.GDestrellaObjects1.length ;i < len;++i) {
    gdjs.lvl4Code.GDestrellaObjects1[i].returnVariable(gdjs.lvl4Code.GDestrellaObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.lvl4Code.GDclearObjects1.length ;i < len;++i) {
    gdjs.lvl4Code.GDclearObjects1[i].hide();
}
}{gdjs.evtTools.input.showCursor(runtimeScene);
}}

}


};gdjs.lvl4Code.asyncCallback27712156 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl4Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Stage_4"), gdjs.lvl4Code.GDStage_95954Objects3);

{for(var i = 0, len = gdjs.lvl4Code.GDStage_95954Objects3.length ;i < len;++i) {
    gdjs.lvl4Code.GDStage_95954Objects3[i].deleteFromScene(runtimeScene);
}
}gdjs.lvl4Code.localVariables.length = 0;
}
gdjs.lvl4Code.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl4Code.localVariables);
for (const obj of gdjs.lvl4Code.GDStage_95954Objects2) asyncObjectsList.addObject("Stage_4", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.lvl4Code.asyncCallback27712156(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl4Code.asyncCallback27711500 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl4Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Stage_4"), gdjs.lvl4Code.GDStage_95954Objects2);

{for(var i = 0, len = gdjs.lvl4Code.GDStage_95954Objects2.length ;i < len;++i) {
    gdjs.lvl4Code.GDStage_95954Objects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
{ //Subevents
gdjs.lvl4Code.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.lvl4Code.localVariables.length = 0;
}
gdjs.lvl4Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl4Code.localVariables);
for (const obj of gdjs.lvl4Code.GDStage_95954Objects1) asyncObjectsList.addObject("Stage_4", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.lvl4Code.asyncCallback27711500(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl4Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Stage_4"), gdjs.lvl4Code.GDStage_95954Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl4Code.GDStage_95954Objects2.length;i<l;++i) {
    if ( gdjs.lvl4Code.GDStage_95954Objects2[i].getX() < 329 ) {
        isConditionTrue_0 = true;
        gdjs.lvl4Code.GDStage_95954Objects2[k] = gdjs.lvl4Code.GDStage_95954Objects2[i];
        ++k;
    }
}
gdjs.lvl4Code.GDStage_95954Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.lvl4Code.GDStage_95954Objects2 */
{for(var i = 0, len = gdjs.lvl4Code.GDStage_95954Objects2.length ;i < len;++i) {
    gdjs.lvl4Code.GDStage_95954Objects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Stage_4"), gdjs.lvl4Code.GDStage_95954Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl4Code.GDStage_95954Objects1.length;i<l;++i) {
    if ( gdjs.lvl4Code.GDStage_95954Objects1[i].getX() >= 329 ) {
        isConditionTrue_0 = true;
        gdjs.lvl4Code.GDStage_95954Objects1[k] = gdjs.lvl4Code.GDStage_95954Objects1[i];
        ++k;
    }
}
gdjs.lvl4Code.GDStage_95954Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.lvl4Code.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.lvl4Code.eventsList6 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), false, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(true);
}}

}


};gdjs.lvl4Code.asyncCallback27724388 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl4Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "niveles", false);
}
{ //Subevents
gdjs.lvl4Code.eventsList6(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.lvl4Code.localVariables.length = 0;
}
gdjs.lvl4Code.eventsList7 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl4Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.lvl4Code.asyncCallback27724388(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl4Code.asyncCallback27723668 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl4Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.lvl4Code.GDcargaObjects2);
{for(var i = 0, len = gdjs.lvl4Code.GDcargaObjects2.length ;i < len;++i) {
    gdjs.lvl4Code.GDcargaObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 4, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.lvl4Code.eventsList7(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.lvl4Code.localVariables.length = 0;
}
gdjs.lvl4Code.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl4Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.lvl4Code.asyncCallback27723668(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl4Code.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("punto"), gdjs.lvl4Code.GDpuntoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl4Code.GDpuntoObjects2.length;i<l;++i) {
    if ( gdjs.lvl4Code.GDpuntoObjects2[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lvl4Code.GDpuntoObjects2[k] = gdjs.lvl4Code.GDpuntoObjects2[i];
        ++k;
    }
}
gdjs.lvl4Code.GDpuntoObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.lvl4Code.GDpuntoObjects2 */
{for(var i = 0, len = gdjs.lvl4Code.GDpuntoObjects2.length ;i < len;++i) {
    gdjs.lvl4Code.GDpuntoObjects2[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("estrella"), gdjs.lvl4Code.GDestrellaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl4Code.GDestrellaObjects2.length;i<l;++i) {
    if ( gdjs.lvl4Code.GDestrellaObjects2[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lvl4Code.GDestrellaObjects2[k] = gdjs.lvl4Code.GDestrellaObjects2[i];
        ++k;
    }
}
gdjs.lvl4Code.GDestrellaObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.lvl4Code.GDestrellaObjects2 */
{for(var i = 0, len = gdjs.lvl4Code.GDestrellaObjects2.length ;i < len;++i) {
    gdjs.lvl4Code.GDestrellaObjects2[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("estrella2"), gdjs.lvl4Code.GDestrella2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl4Code.GDestrella2Objects2.length;i<l;++i) {
    if ( gdjs.lvl4Code.GDestrella2Objects2[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lvl4Code.GDestrella2Objects2[k] = gdjs.lvl4Code.GDestrella2Objects2[i];
        ++k;
    }
}
gdjs.lvl4Code.GDestrella2Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.lvl4Code.GDestrella2Objects2 */
{for(var i = 0, len = gdjs.lvl4Code.GDestrella2Objects2.length ;i < len;++i) {
    gdjs.lvl4Code.GDestrella2Objects2[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("estrella3"), gdjs.lvl4Code.GDestrella3Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl4Code.GDestrella3Objects2.length;i<l;++i) {
    if ( gdjs.lvl4Code.GDestrella3Objects2[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lvl4Code.GDestrella3Objects2[k] = gdjs.lvl4Code.GDestrella3Objects2[i];
        ++k;
    }
}
gdjs.lvl4Code.GDestrella3Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.lvl4Code.GDestrella3Objects2 */
{for(var i = 0, len = gdjs.lvl4Code.GDestrella3Objects2.length ;i < len;++i) {
    gdjs.lvl4Code.GDestrella3Objects2[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("estrella4"), gdjs.lvl4Code.GDestrella4Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl4Code.GDestrella4Objects2.length;i<l;++i) {
    if ( gdjs.lvl4Code.GDestrella4Objects2[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lvl4Code.GDestrella4Objects2[k] = gdjs.lvl4Code.GDestrella4Objects2[i];
        ++k;
    }
}
gdjs.lvl4Code.GDestrella4Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.lvl4Code.GDestrella4Objects2 */
{for(var i = 0, len = gdjs.lvl4Code.GDestrella4Objects2.length ;i < len;++i) {
    gdjs.lvl4Code.GDestrella4Objects2[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("estrella5"), gdjs.lvl4Code.GDestrella5Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl4Code.GDestrella5Objects2.length;i<l;++i) {
    if ( gdjs.lvl4Code.GDestrella5Objects2[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lvl4Code.GDestrella5Objects2[k] = gdjs.lvl4Code.GDestrella5Objects2[i];
        ++k;
    }
}
gdjs.lvl4Code.GDestrella5Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.lvl4Code.GDestrella5Objects2 */
{for(var i = 0, len = gdjs.lvl4Code.GDestrella5Objects2.length ;i < len;++i) {
    gdjs.lvl4Code.GDestrella5Objects2[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("estrella"), gdjs.lvl4Code.GDestrellaObjects1);
gdjs.copyArray(runtimeScene.getObjects("estrella2"), gdjs.lvl4Code.GDestrella2Objects1);
gdjs.copyArray(runtimeScene.getObjects("estrella3"), gdjs.lvl4Code.GDestrella3Objects1);
gdjs.copyArray(runtimeScene.getObjects("estrella4"), gdjs.lvl4Code.GDestrella4Objects1);
gdjs.copyArray(runtimeScene.getObjects("estrella5"), gdjs.lvl4Code.GDestrella5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.lvl4Code.GDestrellaObjects1.length;i<l;++i) {
    if ( gdjs.lvl4Code.GDestrellaObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_1 = true;
        gdjs.lvl4Code.GDestrellaObjects1[k] = gdjs.lvl4Code.GDestrellaObjects1[i];
        ++k;
    }
}
gdjs.lvl4Code.GDestrellaObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.lvl4Code.GDestrella2Objects1.length;i<l;++i) {
    if ( gdjs.lvl4Code.GDestrella2Objects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_1 = true;
        gdjs.lvl4Code.GDestrella2Objects1[k] = gdjs.lvl4Code.GDestrella2Objects1[i];
        ++k;
    }
}
gdjs.lvl4Code.GDestrella2Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.lvl4Code.GDestrella3Objects1.length;i<l;++i) {
    if ( gdjs.lvl4Code.GDestrella3Objects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_1 = true;
        gdjs.lvl4Code.GDestrella3Objects1[k] = gdjs.lvl4Code.GDestrella3Objects1[i];
        ++k;
    }
}
gdjs.lvl4Code.GDestrella3Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.lvl4Code.GDestrella4Objects1.length;i<l;++i) {
    if ( gdjs.lvl4Code.GDestrella4Objects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_1 = true;
        gdjs.lvl4Code.GDestrella4Objects1[k] = gdjs.lvl4Code.GDestrella4Objects1[i];
        ++k;
    }
}
gdjs.lvl4Code.GDestrella4Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.lvl4Code.GDestrella5Objects1.length;i<l;++i) {
    if ( gdjs.lvl4Code.GDestrella5Objects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_1 = true;
        gdjs.lvl4Code.GDestrella5Objects1[k] = gdjs.lvl4Code.GDestrella5Objects1[i];
        ++k;
    }
}
gdjs.lvl4Code.GDestrella5Objects1.length = k;
}
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("clear"), gdjs.lvl4Code.GDclearObjects1);
gdjs.copyArray(runtimeScene.getObjects("salir"), gdjs.lvl4Code.GDsalirObjects1);
{for(var i = 0, len = gdjs.lvl4Code.GDclearObjects1.length ;i < len;++i) {
    gdjs.lvl4Code.GDclearObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.lvl4Code.GDsalirObjects1.length ;i < len;++i) {
    gdjs.lvl4Code.GDsalirObjects1[i].hide();
}
}
{ //Subevents
gdjs.lvl4Code.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.lvl4Code.eventsList10 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.lvl4Code.GDcargaObjects1);
gdjs.copyArray(runtimeScene.getObjects("salir"), gdjs.lvl4Code.GDsalirObjects1);
{for(var i = 0, len = gdjs.lvl4Code.GDsalirObjects1.length ;i < len;++i) {
    gdjs.lvl4Code.GDsalirObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.lvl4Code.GDcargaObjects1.length ;i < len;++i) {
    gdjs.lvl4Code.GDcargaObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Flash", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.lvl4Code.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("salir"), gdjs.lvl4Code.GDsalirObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl4Code.GDsalirObjects1.length;i<l;++i) {
    if ( gdjs.lvl4Code.GDsalirObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lvl4Code.GDsalirObjects1[k] = gdjs.lvl4Code.GDsalirObjects1[i];
        ++k;
    }
}
gdjs.lvl4Code.GDsalirObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.lvl4Code.GDcargaObjects1);
{for(var i = 0, len = gdjs.lvl4Code.GDcargaObjects1.length ;i < len;++i) {
    gdjs.lvl4Code.GDcargaObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Flash", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(0);
}
{ //Subevents
gdjs.lvl4Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.lvl4Code.eventsList2(runtimeScene);
}


{


gdjs.lvl4Code.eventsList5(runtimeScene);
}


{


gdjs.lvl4Code.eventsList9(runtimeScene);
}


};

gdjs.lvl4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.lvl4Code.GDfondoObjects1.length = 0;
gdjs.lvl4Code.GDfondoObjects2.length = 0;
gdjs.lvl4Code.GDfondoObjects3.length = 0;
gdjs.lvl4Code.GDfondoObjects4.length = 0;
gdjs.lvl4Code.GDpuntoObjects1.length = 0;
gdjs.lvl4Code.GDpuntoObjects2.length = 0;
gdjs.lvl4Code.GDpuntoObjects3.length = 0;
gdjs.lvl4Code.GDpuntoObjects4.length = 0;
gdjs.lvl4Code.GDestrellaObjects1.length = 0;
gdjs.lvl4Code.GDestrellaObjects2.length = 0;
gdjs.lvl4Code.GDestrellaObjects3.length = 0;
gdjs.lvl4Code.GDestrellaObjects4.length = 0;
gdjs.lvl4Code.GDStage_95954Objects1.length = 0;
gdjs.lvl4Code.GDStage_95954Objects2.length = 0;
gdjs.lvl4Code.GDStage_95954Objects3.length = 0;
gdjs.lvl4Code.GDStage_95954Objects4.length = 0;
gdjs.lvl4Code.GDestrella2Objects1.length = 0;
gdjs.lvl4Code.GDestrella2Objects2.length = 0;
gdjs.lvl4Code.GDestrella2Objects3.length = 0;
gdjs.lvl4Code.GDestrella2Objects4.length = 0;
gdjs.lvl4Code.GDestrella3Objects1.length = 0;
gdjs.lvl4Code.GDestrella3Objects2.length = 0;
gdjs.lvl4Code.GDestrella3Objects3.length = 0;
gdjs.lvl4Code.GDestrella3Objects4.length = 0;
gdjs.lvl4Code.GDestrella4Objects1.length = 0;
gdjs.lvl4Code.GDestrella4Objects2.length = 0;
gdjs.lvl4Code.GDestrella4Objects3.length = 0;
gdjs.lvl4Code.GDestrella4Objects4.length = 0;
gdjs.lvl4Code.GDestrella5Objects1.length = 0;
gdjs.lvl4Code.GDestrella5Objects2.length = 0;
gdjs.lvl4Code.GDestrella5Objects3.length = 0;
gdjs.lvl4Code.GDestrella5Objects4.length = 0;
gdjs.lvl4Code.GDcargaObjects1.length = 0;
gdjs.lvl4Code.GDcargaObjects2.length = 0;
gdjs.lvl4Code.GDcargaObjects3.length = 0;
gdjs.lvl4Code.GDcargaObjects4.length = 0;
gdjs.lvl4Code.GDsalirObjects1.length = 0;
gdjs.lvl4Code.GDsalirObjects2.length = 0;
gdjs.lvl4Code.GDsalirObjects3.length = 0;
gdjs.lvl4Code.GDsalirObjects4.length = 0;
gdjs.lvl4Code.GDclearObjects1.length = 0;
gdjs.lvl4Code.GDclearObjects2.length = 0;
gdjs.lvl4Code.GDclearObjects3.length = 0;
gdjs.lvl4Code.GDclearObjects4.length = 0;
gdjs.lvl4Code.GDclickObjects1.length = 0;
gdjs.lvl4Code.GDclickObjects2.length = 0;
gdjs.lvl4Code.GDclickObjects3.length = 0;
gdjs.lvl4Code.GDclickObjects4.length = 0;

gdjs.lvl4Code.eventsList10(runtimeScene);
gdjs.lvl4Code.GDfondoObjects1.length = 0;
gdjs.lvl4Code.GDfondoObjects2.length = 0;
gdjs.lvl4Code.GDfondoObjects3.length = 0;
gdjs.lvl4Code.GDfondoObjects4.length = 0;
gdjs.lvl4Code.GDpuntoObjects1.length = 0;
gdjs.lvl4Code.GDpuntoObjects2.length = 0;
gdjs.lvl4Code.GDpuntoObjects3.length = 0;
gdjs.lvl4Code.GDpuntoObjects4.length = 0;
gdjs.lvl4Code.GDestrellaObjects1.length = 0;
gdjs.lvl4Code.GDestrellaObjects2.length = 0;
gdjs.lvl4Code.GDestrellaObjects3.length = 0;
gdjs.lvl4Code.GDestrellaObjects4.length = 0;
gdjs.lvl4Code.GDStage_95954Objects1.length = 0;
gdjs.lvl4Code.GDStage_95954Objects2.length = 0;
gdjs.lvl4Code.GDStage_95954Objects3.length = 0;
gdjs.lvl4Code.GDStage_95954Objects4.length = 0;
gdjs.lvl4Code.GDestrella2Objects1.length = 0;
gdjs.lvl4Code.GDestrella2Objects2.length = 0;
gdjs.lvl4Code.GDestrella2Objects3.length = 0;
gdjs.lvl4Code.GDestrella2Objects4.length = 0;
gdjs.lvl4Code.GDestrella3Objects1.length = 0;
gdjs.lvl4Code.GDestrella3Objects2.length = 0;
gdjs.lvl4Code.GDestrella3Objects3.length = 0;
gdjs.lvl4Code.GDestrella3Objects4.length = 0;
gdjs.lvl4Code.GDestrella4Objects1.length = 0;
gdjs.lvl4Code.GDestrella4Objects2.length = 0;
gdjs.lvl4Code.GDestrella4Objects3.length = 0;
gdjs.lvl4Code.GDestrella4Objects4.length = 0;
gdjs.lvl4Code.GDestrella5Objects1.length = 0;
gdjs.lvl4Code.GDestrella5Objects2.length = 0;
gdjs.lvl4Code.GDestrella5Objects3.length = 0;
gdjs.lvl4Code.GDestrella5Objects4.length = 0;
gdjs.lvl4Code.GDcargaObjects1.length = 0;
gdjs.lvl4Code.GDcargaObjects2.length = 0;
gdjs.lvl4Code.GDcargaObjects3.length = 0;
gdjs.lvl4Code.GDcargaObjects4.length = 0;
gdjs.lvl4Code.GDsalirObjects1.length = 0;
gdjs.lvl4Code.GDsalirObjects2.length = 0;
gdjs.lvl4Code.GDsalirObjects3.length = 0;
gdjs.lvl4Code.GDsalirObjects4.length = 0;
gdjs.lvl4Code.GDclearObjects1.length = 0;
gdjs.lvl4Code.GDclearObjects2.length = 0;
gdjs.lvl4Code.GDclearObjects3.length = 0;
gdjs.lvl4Code.GDclearObjects4.length = 0;
gdjs.lvl4Code.GDclickObjects1.length = 0;
gdjs.lvl4Code.GDclickObjects2.length = 0;
gdjs.lvl4Code.GDclickObjects3.length = 0;
gdjs.lvl4Code.GDclickObjects4.length = 0;


return;

}

gdjs['lvl4Code'] = gdjs.lvl4Code;
