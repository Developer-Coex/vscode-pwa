(function(){var c;"use strict";const m=f();performance.mark("code/didStartRenderer"),m.load(["vs/workbench/workbench.desktop.main","vs/nls!vs/workbench/workbench.desktop.main","vs/css!vs/workbench/workbench.desktop.main"],function(o,t){return performance.mark("code/didLoadWorkbenchMain"),require("vs/workbench/electron-browser/desktop.main").main(t)},{removeDeveloperKeybindingsAfterLoad:!0,canModifyDOM:function(o){k(o)},beforeLoaderConfig:function(o,t){t.recordStats=!0},beforeRequire:function(){performance.mark("code/willLoadWorkbenchMain")}}),(c=window.trustedTypes)==null||c.createPolicy("default",{createHTML(o){if(o==='<!DOCTYPE html><style type="text/css">:host { display: flex; }</style>')return o;throw new Error("UNTRUSTED html usage, default trusted types policy should NEVER be reached")}});function f(){return window.MonacoBootstrapWindow}function k(o){performance.mark("code/willShowPartsSplash");let t;if(typeof o.partsSplashPath=="string")try{t=JSON.parse(require.__$__nodeRequire("fs").readFileSync(o.partsSplashPath,"utf8"))}catch(h){}const l=o.colorScheme==="hc"&&o.autoDetectHighContrast;t&&l&&t.baseTheme!=="hc-black"&&(t=void 0),t&&o.extensionDevelopmentPath&&(t.layoutInfo=void 0);let a,d,n;t?(a=t.baseTheme,d=t.colorInfo.editorBackground,n=t.colorInfo.foreground):l?(a="hc-black",d="#000000",n="#FFFFFF"):(a="vs-dark",d="#1E1E1E",n="#CCCCCC");const s=document.createElement("style");if(s.className="initialShellColors",document.head.appendChild(s),s.textContent=`body { background-color: ${d}; color: ${n}; margin: 0; padding: 0; }`,t&&t.layoutInfo){const{id:h,layoutInfo:e,colorInfo:i}=t,r=document.createElement("div");r.id=h,r.className=a,e.windowBorder&&(r.style.position="relative",r.style.height="calc(100vh - 2px)",r.style.width="calc(100vw - 2px)",r.style.border="1px solid var(--window-border-color)",r.style.setProperty("--window-border-color",i.windowBorder),e.windowBorderRadius&&(r.style.borderRadius=e.windowBorderRadius)),e.sideBarWidth=Math.min(e.sideBarWidth,window.innerWidth-(e.activityBarWidth+e.editorPartMinWidth));const p=document.createElement("div");p.setAttribute("style",`position: absolute; width: 100%; left: 0; top: 0; height: ${e.titleBarHeight}px; background-color: ${i.titleBarBackground}; -webkit-app-region: drag;`),r.appendChild(p);const u=document.createElement("div");if(u.setAttribute("style",`position: absolute; height: calc(100% - ${e.titleBarHeight}px); top: ${e.titleBarHeight}px; ${e.sideBarSide}: 0; width: ${e.activityBarWidth}px; background-color: ${i.activityBarBackground};`),r.appendChild(u),o.workspace){const b=document.createElement("div");b.setAttribute("style",`position: absolute; height: calc(100% - ${e.titleBarHeight}px); top: ${e.titleBarHeight}px; ${e.sideBarSide}: ${e.activityBarWidth}px; width: ${e.sideBarWidth}px; background-color: ${i.sideBarBackground};`),r.appendChild(b)}const w=document.createElement("div");w.setAttribute("style",`position: absolute; width: 100%; bottom: 0; left: 0; height: ${e.statusBarHeight}px; background-color: ${o.workspace?i.statusBarBackground:i.statusBarNoFolderBackground};`),r.appendChild(w),document.body.appendChild(r)}performance.mark("code/didShowPartsSplash")}})();

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/c185983a683d14c396952dd432459097bc7f757f/core/vs/code/electron-browser/workbench/workbench.js.map
