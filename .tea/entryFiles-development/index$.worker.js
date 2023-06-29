/**! __CODEPLACEHOLDER_START__ */ /*[PositionForHostEntryCodeBegin]*/ /**! __CODEPLACEHOLDER_END__ */
if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');
require('./importScripts$');

      function getUserAgentInPlatformWeb() {
        return typeof navigator !== 'undefined' ? navigator.swuserAgent || navigator.userAgent || '' : '';
      }
      if(getUserAgentInPlatformWeb() && (getUserAgentInPlatformWeb().indexOf('LyraVM') > 0 || getUserAgentInPlatformWeb().indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../claro-button/claro-button?hash=575d90c0564a9ec75a9b4077920c00bb78edc4fd');
require('../../claroButton/claroButton?hash=575d90c0564a9ec75a9b4077920c00bb78edc4fd');
require('../../pages/index/index?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../pages/boxModel/boxModel?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/live/live?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/especificidad/especificidad?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/buton-paje/buton-paje?hash=9b9617fc468b9e950c8ce3fc9314307296ad1e0c');
require('../../pages/center/center?hash=5fe565cb7af2299f51d2befc040b17770c1f7aa9');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}