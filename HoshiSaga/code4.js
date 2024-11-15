gdjs.lvl3Code = {};
gdjs.lvl3Code.localVariables = [];
gdjs.lvl3Code.GDestrellaObjects1= [];
gdjs.lvl3Code.GDestrellaObjects2= [];
gdjs.lvl3Code.GDestrellaObjects3= [];
gdjs.lvl3Code.GDestrellaObjects4= [];
gdjs.lvl3Code.GDfondoObjects1= [];
gdjs.lvl3Code.GDfondoObjects2= [];
gdjs.lvl3Code.GDfondoObjects3= [];
gdjs.lvl3Code.GDfondoObjects4= [];
gdjs.lvl3Code.GDpoleaObjects1= [];
gdjs.lvl3Code.GDpoleaObjects2= [];
gdjs.lvl3Code.GDpoleaObjects3= [];
gdjs.lvl3Code.GDpoleaObjects4= [];
gdjs.lvl3Code.GDcirculitoObjects1= [];
gdjs.lvl3Code.GDcirculitoObjects2= [];
gdjs.lvl3Code.GDcirculitoObjects3= [];
gdjs.lvl3Code.GDcirculitoObjects4= [];
gdjs.lvl3Code.GDpalancaObjects1= [];
gdjs.lvl3Code.GDpalancaObjects2= [];
gdjs.lvl3Code.GDpalancaObjects3= [];
gdjs.lvl3Code.GDpalancaObjects4= [];
gdjs.lvl3Code.GDstage3Objects1= [];
gdjs.lvl3Code.GDstage3Objects2= [];
gdjs.lvl3Code.GDstage3Objects3= [];
gdjs.lvl3Code.GDstage3Objects4= [];
gdjs.lvl3Code.GDcargaObjects1= [];
gdjs.lvl3Code.GDcargaObjects2= [];
gdjs.lvl3Code.GDcargaObjects3= [];
gdjs.lvl3Code.GDcargaObjects4= [];
gdjs.lvl3Code.GDsalirObjects1= [];
gdjs.lvl3Code.GDsalirObjects2= [];
gdjs.lvl3Code.GDsalirObjects3= [];
gdjs.lvl3Code.GDsalirObjects4= [];
gdjs.lvl3Code.GDclearObjects1= [];
gdjs.lvl3Code.GDclearObjects2= [];
gdjs.lvl3Code.GDclearObjects3= [];
gdjs.lvl3Code.GDclearObjects4= [];
gdjs.lvl3Code.GDclickObjects1= [];
gdjs.lvl3Code.GDclickObjects2= [];
gdjs.lvl3Code.GDclickObjects3= [];
gdjs.lvl3Code.GDclickObjects4= [];


gdjs.lvl3Code.asyncCallback26568868 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl3Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("salir"), gdjs.lvl3Code.GDsalirObjects2);

{for(var i = 0, len = gdjs.lvl3Code.GDsalirObjects2.length ;i < len;++i) {
    gdjs.lvl3Code.GDsalirObjects2[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}gdjs.lvl3Code.localVariables.length = 0;
}
gdjs.lvl3Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl3Code.localVariables);
for (const obj of gdjs.lvl3Code.GDsalirObjects1) asyncObjectsList.addObject("salir", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.lvl3Code.asyncCallback26568868(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl3Code.asyncCallback26570292 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl3Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "niveles", false);
}gdjs.lvl3Code.localVariables.length = 0;
}
gdjs.lvl3Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl3Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.lvl3Code.asyncCallback26570292(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl3Code.asyncCallback25549804 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl3Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("stage3"), gdjs.lvl3Code.GDstage3Objects3);

{for(var i = 0, len = gdjs.lvl3Code.GDstage3Objects3.length ;i < len;++i) {
    gdjs.lvl3Code.GDstage3Objects3[i].deleteFromScene(runtimeScene);
}
}gdjs.lvl3Code.localVariables.length = 0;
}
gdjs.lvl3Code.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl3Code.localVariables);
for (const obj of gdjs.lvl3Code.GDstage3Objects2) asyncObjectsList.addObject("stage3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.lvl3Code.asyncCallback25549804(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl3Code.asyncCallback25549620 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl3Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("stage3"), gdjs.lvl3Code.GDstage3Objects2);

{for(var i = 0, len = gdjs.lvl3Code.GDstage3Objects2.length ;i < len;++i) {
    gdjs.lvl3Code.GDstage3Objects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
{ //Subevents
gdjs.lvl3Code.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.lvl3Code.localVariables.length = 0;
}
gdjs.lvl3Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl3Code.localVariables);
for (const obj of gdjs.lvl3Code.GDstage3Objects1) asyncObjectsList.addObject("stage3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.lvl3Code.asyncCallback25549620(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl3Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("stage3"), gdjs.lvl3Code.GDstage3Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl3Code.GDstage3Objects2.length;i<l;++i) {
    if ( gdjs.lvl3Code.GDstage3Objects2[i].getX() < 329 ) {
        isConditionTrue_0 = true;
        gdjs.lvl3Code.GDstage3Objects2[k] = gdjs.lvl3Code.GDstage3Objects2[i];
        ++k;
    }
}
gdjs.lvl3Code.GDstage3Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.lvl3Code.GDstage3Objects2 */
{for(var i = 0, len = gdjs.lvl3Code.GDstage3Objects2.length ;i < len;++i) {
    gdjs.lvl3Code.GDstage3Objects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("stage3"), gdjs.lvl3Code.GDstage3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl3Code.GDstage3Objects1.length;i<l;++i) {
    if ( gdjs.lvl3Code.GDstage3Objects1[i].getX() >= 329 ) {
        isConditionTrue_0 = true;
        gdjs.lvl3Code.GDstage3Objects1[k] = gdjs.lvl3Code.GDstage3Objects1[i];
        ++k;
    }
}
gdjs.lvl3Code.GDstage3Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.lvl3Code.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.lvl3Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("clear"), gdjs.lvl3Code.GDclearObjects1);
gdjs.copyArray(runtimeScene.getObjects("estrella"), gdjs.lvl3Code.GDestrellaObjects1);
gdjs.copyArray(runtimeScene.getObjects("polea"), gdjs.lvl3Code.GDpoleaObjects1);
gdjs.copyArray(runtimeScene.getObjects("stage3"), gdjs.lvl3Code.GDstage3Objects1);
{for(var i = 0, len = gdjs.lvl3Code.GDpoleaObjects1.length ;i < len;++i) {
    gdjs.lvl3Code.GDpoleaObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.lvl3Code.GDestrellaObjects1.length ;i < len;++i) {
    gdjs.lvl3Code.GDestrellaObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.lvl3Code.GDclearObjects1.length ;i < len;++i) {
    gdjs.lvl3Code.GDclearObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.lvl3Code.GDstage3Objects1.length ;i < len;++i) {
    gdjs.lvl3Code.GDstage3Objects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(false);
}
}{gdjs.evtTools.input.showCursor(runtimeScene);
}}

}


};gdjs.lvl3Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.lvl3Code.GDpalancaObjects2, gdjs.lvl3Code.GDpalancaObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl3Code.GDpalancaObjects3.length;i<l;++i) {
    if ( gdjs.lvl3Code.GDpalancaObjects3[i].getAngle() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.lvl3Code.GDpalancaObjects3[k] = gdjs.lvl3Code.GDpalancaObjects3[i];
        ++k;
    }
}
gdjs.lvl3Code.GDpalancaObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.lvl3Code.GDestrellaObjects2, gdjs.lvl3Code.GDestrellaObjects3);

gdjs.copyArray(runtimeScene.getObjects("polea"), gdjs.lvl3Code.GDpoleaObjects3);
{for(var i = 0, len = gdjs.lvl3Code.GDestrellaObjects3.length ;i < len;++i) {
    gdjs.lvl3Code.GDestrellaObjects3[i].setAnimationFrame(gdjs.lvl3Code.GDestrellaObjects3[i].getAnimationFrame() + (1));
}
}{for(var i = 0, len = gdjs.lvl3Code.GDpoleaObjects3.length ;i < len;++i) {
    gdjs.lvl3Code.GDpoleaObjects3[i].setAnimationFrame(gdjs.lvl3Code.GDpoleaObjects3[i].getAnimationFrame() + (1));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("polea"), gdjs.lvl3Code.GDpoleaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl3Code.GDpoleaObjects2.length;i<l;++i) {
    if ( gdjs.lvl3Code.GDpoleaObjects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.lvl3Code.GDpoleaObjects2[k] = gdjs.lvl3Code.GDpoleaObjects2[i];
        ++k;
    }
}
gdjs.lvl3Code.GDpoleaObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.lvl3Code.GDpoleaObjects2 */
{for(var i = 0, len = gdjs.lvl3Code.GDpoleaObjects2.length ;i < len;++i) {
    gdjs.lvl3Code.GDpoleaObjects2[i].setAnimationFrame(0);
}
}}

}


};gdjs.lvl3Code.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("palanca"), gdjs.lvl3Code.GDpalancaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl3Code.GDpalancaObjects2.length;i<l;++i) {
    if ( gdjs.lvl3Code.GDpalancaObjects2[i].getBehavior("ButtonFSM").IsPressedOutside((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lvl3Code.GDpalancaObjects2[k] = gdjs.lvl3Code.GDpalancaObjects2[i];
        ++k;
    }
}
gdjs.lvl3Code.GDpalancaObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.lvl3Code.GDpalancaObjects2 */
{for(var i = 0, len = gdjs.lvl3Code.GDpalancaObjects2.length ;i < len;++i) {
    gdjs.lvl3Code.GDpalancaObjects2[i].rotateTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 0, runtimeScene);
}
}
{ //Subevents
gdjs.lvl3Code.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.lvl3Code.eventsList8 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), false, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(6).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setBoolean(true);
}}

}


};gdjs.lvl3Code.asyncCallback25555932 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl3Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "niveles", false);
}
{ //Subevents
gdjs.lvl3Code.eventsList8(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.lvl3Code.localVariables.length = 0;
}
gdjs.lvl3Code.eventsList9 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl3Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.lvl3Code.asyncCallback25555932(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl3Code.asyncCallback25555340 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.lvl3Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.lvl3Code.GDcargaObjects2);
gdjs.copyArray(runtimeScene.getObjects("clear"), gdjs.lvl3Code.GDclearObjects2);
{for(var i = 0, len = gdjs.lvl3Code.GDclearObjects2.length ;i < len;++i) {
    gdjs.lvl3Code.GDclearObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.lvl3Code.GDcargaObjects2.length ;i < len;++i) {
    gdjs.lvl3Code.GDcargaObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 4, "Flash", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.lvl3Code.eventsList9(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.lvl3Code.localVariables.length = 0;
}
gdjs.lvl3Code.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.lvl3Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.lvl3Code.asyncCallback25555340(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.lvl3Code.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("estrella"), gdjs.lvl3Code.GDestrellaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl3Code.GDestrellaObjects2.length;i<l;++i) {
    if ( gdjs.lvl3Code.GDestrellaObjects2[i].getAnimationFrame() < 108 ) {
        isConditionTrue_0 = true;
        gdjs.lvl3Code.GDestrellaObjects2[k] = gdjs.lvl3Code.GDestrellaObjects2[i];
        ++k;
    }
}
gdjs.lvl3Code.GDestrellaObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.lvl3Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("estrella"), gdjs.lvl3Code.GDestrellaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl3Code.GDestrellaObjects1.length;i<l;++i) {
    if ( gdjs.lvl3Code.GDestrellaObjects1[i].getAnimationFrame() >= 108 ) {
        isConditionTrue_0 = true;
        gdjs.lvl3Code.GDestrellaObjects1[k] = gdjs.lvl3Code.GDestrellaObjects1[i];
        ++k;
    }
}
gdjs.lvl3Code.GDestrellaObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.lvl3Code.GDestrellaObjects1 */
gdjs.copyArray(runtimeScene.getObjects("salir"), gdjs.lvl3Code.GDsalirObjects1);
{for(var i = 0, len = gdjs.lvl3Code.GDestrellaObjects1.length ;i < len;++i) {
    gdjs.lvl3Code.GDestrellaObjects1[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.lvl3Code.GDsalirObjects1.length ;i < len;++i) {
    gdjs.lvl3Code.GDsalirObjects1[i].hide();
}
}
{ //Subevents
gdjs.lvl3Code.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.lvl3Code.eventsList12 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.lvl3Code.GDcargaObjects1);
gdjs.copyArray(runtimeScene.getObjects("salir"), gdjs.lvl3Code.GDsalirObjects1);
{for(var i = 0, len = gdjs.lvl3Code.GDsalirObjects1.length ;i < len;++i) {
    gdjs.lvl3Code.GDsalirObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.lvl3Code.GDcargaObjects1.length ;i < len;++i) {
    gdjs.lvl3Code.GDcargaObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Flash", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.lvl3Code.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("salir"), gdjs.lvl3Code.GDsalirObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lvl3Code.GDsalirObjects1.length;i<l;++i) {
    if ( gdjs.lvl3Code.GDsalirObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.lvl3Code.GDsalirObjects1[k] = gdjs.lvl3Code.GDsalirObjects1[i];
        ++k;
    }
}
gdjs.lvl3Code.GDsalirObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carga"), gdjs.lvl3Code.GDcargaObjects1);
{for(var i = 0, len = gdjs.lvl3Code.GDcargaObjects1.length ;i < len;++i) {
    gdjs.lvl3Code.GDcargaObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Flash", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(0);
}
{ //Subevents
gdjs.lvl3Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.lvl3Code.eventsList4(runtimeScene);
}


{


gdjs.lvl3Code.eventsList5(runtimeScene);
}


{


gdjs.lvl3Code.eventsList11(runtimeScene);
}


};

gdjs.lvl3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.lvl3Code.GDestrellaObjects1.length = 0;
gdjs.lvl3Code.GDestrellaObjects2.length = 0;
gdjs.lvl3Code.GDestrellaObjects3.length = 0;
gdjs.lvl3Code.GDestrellaObjects4.length = 0;
gdjs.lvl3Code.GDfondoObjects1.length = 0;
gdjs.lvl3Code.GDfondoObjects2.length = 0;
gdjs.lvl3Code.GDfondoObjects3.length = 0;
gdjs.lvl3Code.GDfondoObjects4.length = 0;
gdjs.lvl3Code.GDpoleaObjects1.length = 0;
gdjs.lvl3Code.GDpoleaObjects2.length = 0;
gdjs.lvl3Code.GDpoleaObjects3.length = 0;
gdjs.lvl3Code.GDpoleaObjects4.length = 0;
gdjs.lvl3Code.GDcirculitoObjects1.length = 0;
gdjs.lvl3Code.GDcirculitoObjects2.length = 0;
gdjs.lvl3Code.GDcirculitoObjects3.length = 0;
gdjs.lvl3Code.GDcirculitoObjects4.length = 0;
gdjs.lvl3Code.GDpalancaObjects1.length = 0;
gdjs.lvl3Code.GDpalancaObjects2.length = 0;
gdjs.lvl3Code.GDpalancaObjects3.length = 0;
gdjs.lvl3Code.GDpalancaObjects4.length = 0;
gdjs.lvl3Code.GDstage3Objects1.length = 0;
gdjs.lvl3Code.GDstage3Objects2.length = 0;
gdjs.lvl3Code.GDstage3Objects3.length = 0;
gdjs.lvl3Code.GDstage3Objects4.length = 0;
gdjs.lvl3Code.GDcargaObjects1.length = 0;
gdjs.lvl3Code.GDcargaObjects2.length = 0;
gdjs.lvl3Code.GDcargaObjects3.length = 0;
gdjs.lvl3Code.GDcargaObjects4.length = 0;
gdjs.lvl3Code.GDsalirObjects1.length = 0;
gdjs.lvl3Code.GDsalirObjects2.length = 0;
gdjs.lvl3Code.GDsalirObjects3.length = 0;
gdjs.lvl3Code.GDsalirObjects4.length = 0;
gdjs.lvl3Code.GDclearObjects1.length = 0;
gdjs.lvl3Code.GDclearObjects2.length = 0;
gdjs.lvl3Code.GDclearObjects3.length = 0;
gdjs.lvl3Code.GDclearObjects4.length = 0;
gdjs.lvl3Code.GDclickObjects1.length = 0;
gdjs.lvl3Code.GDclickObjects2.length = 0;
gdjs.lvl3Code.GDclickObjects3.length = 0;
gdjs.lvl3Code.GDclickObjects4.length = 0;

gdjs.lvl3Code.eventsList12(runtimeScene);
gdjs.lvl3Code.GDestrellaObjects1.length = 0;
gdjs.lvl3Code.GDestrellaObjects2.length = 0;
gdjs.lvl3Code.GDestrellaObjects3.length = 0;
gdjs.lvl3Code.GDestrellaObjects4.length = 0;
gdjs.lvl3Code.GDfondoObjects1.length = 0;
gdjs.lvl3Code.GDfondoObjects2.length = 0;
gdjs.lvl3Code.GDfondoObjects3.length = 0;
gdjs.lvl3Code.GDfondoObjects4.length = 0;
gdjs.lvl3Code.GDpoleaObjects1.length = 0;
gdjs.lvl3Code.GDpoleaObjects2.length = 0;
gdjs.lvl3Code.GDpoleaObjects3.length = 0;
gdjs.lvl3Code.GDpoleaObjects4.length = 0;
gdjs.lvl3Code.GDcirculitoObjects1.length = 0;
gdjs.lvl3Code.GDcirculitoObjects2.length = 0;
gdjs.lvl3Code.GDcirculitoObjects3.length = 0;
gdjs.lvl3Code.GDcirculitoObjects4.length = 0;
gdjs.lvl3Code.GDpalancaObjects1.length = 0;
gdjs.lvl3Code.GDpalancaObjects2.length = 0;
gdjs.lvl3Code.GDpalancaObjects3.length = 0;
gdjs.lvl3Code.GDpalancaObjects4.length = 0;
gdjs.lvl3Code.GDstage3Objects1.length = 0;
gdjs.lvl3Code.GDstage3Objects2.length = 0;
gdjs.lvl3Code.GDstage3Objects3.length = 0;
gdjs.lvl3Code.GDstage3Objects4.length = 0;
gdjs.lvl3Code.GDcargaObjects1.length = 0;
gdjs.lvl3Code.GDcargaObjects2.length = 0;
gdjs.lvl3Code.GDcargaObjects3.length = 0;
gdjs.lvl3Code.GDcargaObjects4.length = 0;
gdjs.lvl3Code.GDsalirObjects1.length = 0;
gdjs.lvl3Code.GDsalirObjects2.length = 0;
gdjs.lvl3Code.GDsalirObjects3.length = 0;
gdjs.lvl3Code.GDsalirObjects4.length = 0;
gdjs.lvl3Code.GDclearObjects1.length = 0;
gdjs.lvl3Code.GDclearObjects2.length = 0;
gdjs.lvl3Code.GDclearObjects3.length = 0;
gdjs.lvl3Code.GDclearObjects4.length = 0;
gdjs.lvl3Code.GDclickObjects1.length = 0;
gdjs.lvl3Code.GDclickObjects2.length = 0;
gdjs.lvl3Code.GDclickObjects3.length = 0;
gdjs.lvl3Code.GDclickObjects4.length = 0;


return;

}

gdjs['lvl3Code'] = gdjs.lvl3Code;
