// ==UserScript==
// @name         Goatlings Closet Helper
// @version      1.0
// @description  Archives your closet & displays which items you don't currently have in your closet in NPC Shops
// @author       mechagotch
// @match        https://www.goatlings.com/habuddy*
// @match        https://www.goatlings.com/shops/view/22
// @match        https://www.goatlings.com/shops/view/20
// @match        https://www.goatlings.com/shops/view/23
// @match        https://www.goatlings.com/shops/view/12
// @match        https://www.goatlings.com/shops/view/21
// @match        https://www.goatlings.com/shops/view/24
// @match        https://www.goatlings.com/shops/view/25
// @match        https://www.goatlings.com/inventory/view_action/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=goatlings.com
// @downloadURL  https://raw.githubusercontent.com/automalix/Goatlings-Scripts/refs/heads/master/closet_helper.js
// @updateURL    https://raw.githubusercontent.com/automalix/Goatlings-Scripts/refs/heads/master/closet_helper.js
// @grant        none
// ==/UserScript==

function _0x2fc2(_0x544e36,_0x4a1fc2){const _0x409774=_0x4097();return _0x2fc2=function(_0x2fc2a6,_0x2672b0){_0x2fc2a6=_0x2fc2a6-0x13c;let _0x126d3f=_0x409774[_0x2fc2a6];return _0x126d3f;},_0x2fc2(_0x544e36,_0x4a1fc2);}function _0x4097(){const _0x1522c6=['2788800HnPhKB','toLowerCase','parse','href','Take\x20Out','Save\x20Closet\x20Items','style','72196onPHUZ','The\x20item\x20was\x20added\x20to\x20your\x20Closet','createElement','some','title','marginLeft','button','div','Closet\x20items\x20cleared\x20from\x20local\x20storage.','Closet\x20items\x20cleared\x20from\x20local\x20storage!','.shopItem\x20b','length','8278596aHVBVt','trim','getItem','insertAdjacentElement','log','8AaaFYJ','img','10yfCWhd','marginTop','querySelectorAll','padding:\x2010px;\x20margin:\x205px','textAlign','src','10px','name','6CuQCQw','inventory','1em','.item-invent-view','span','clearClosetItemsBtn','querySelector','forEach','location','Not\x20in\x20closet','click','Body','Backgrounds','Closet\x20items\x20saved\x20to\x20local\x20storage!','Hair','4159233uKFJXH','color','3px','push','\x22\x20added\x20to\x20closet.','stringify','Hats','appendChild','innerText','textContent','removeItem','split','3745696JrjNQV','closetItems','36913272YaAvoK','map','shops/view','includes','42NQRVKK','afterend','985585RLmPgE','Closet\x20items\x20saved:','setItem'];_0x4097=function(){return _0x1522c6;};return _0x4097();}(function(_0x568ec4,_0x44cc9b){const _0x365696=_0x2fc2,_0x5283a0=_0x568ec4();while(!![]){try{const _0x46ed84=-parseInt(_0x365696(0x175))/0x1*(-parseInt(_0x365696(0x181))/0x2)+parseInt(_0x365696(0x163))/0x3+parseInt(_0x365696(0x16f))/0x4+-parseInt(_0x365696(0x177))/0x5*(parseInt(_0x365696(0x154))/0x6)+-parseInt(_0x365696(0x17a))/0x7+parseInt(_0x365696(0x14a))/0x8*(parseInt(_0x365696(0x145))/0x9)+-parseInt(_0x365696(0x14c))/0xa*(parseInt(_0x365696(0x171))/0xb);if(_0x46ed84===_0x44cc9b)break;else _0x5283a0['push'](_0x5283a0['shift']());}catch(_0x1ea294){_0x5283a0['push'](_0x5283a0['shift']());}}}(_0x4097,0xc5266),(function(){'use strict';const _0x53c0fa=_0x2fc2;if(window[_0x53c0fa(0x15c)][_0x53c0fa(0x17d)][_0x53c0fa(0x174)]('habuddy')){const _0x2abb20=[_0x53c0fa(0x162),'Faces',_0x53c0fa(0x169),_0x53c0fa(0x15f),'Bases','Accessories',_0x53c0fa(0x160)];let _0x28e408=[];const _0x20cea8=document[_0x53c0fa(0x183)](_0x53c0fa(0x140));_0x20cea8[_0x53c0fa(0x180)][_0x53c0fa(0x150)]='center',_0x20cea8[_0x53c0fa(0x180)][_0x53c0fa(0x14d)]=_0x53c0fa(0x152);const _0x26f86=document[_0x53c0fa(0x183)](_0x53c0fa(0x13f));_0x26f86['id']='scrapeClosetItemsBtn',_0x26f86['style']=_0x53c0fa(0x14f),_0x26f86[_0x53c0fa(0x16c)]=_0x53c0fa(0x17f),_0x20cea8[_0x53c0fa(0x16a)](_0x26f86);const _0x4cbf45=document[_0x53c0fa(0x183)](_0x53c0fa(0x13f));_0x4cbf45['id']=_0x53c0fa(0x159),_0x4cbf45[_0x53c0fa(0x180)]=_0x53c0fa(0x14f),_0x4cbf45['textContent']='Clear\x20Closet\x20Items',_0x20cea8[_0x53c0fa(0x16a)](_0x4cbf45);const _0x4840fb=document['querySelector']('.center');_0x4840fb&&_0x4840fb[_0x53c0fa(0x148)](_0x53c0fa(0x176),_0x20cea8);function _0x17883a(){const _0x31041e=_0x53c0fa,_0x5f06e4=document[_0x31041e(0x14e)]('#item_area_ajax\x20.closetItem');_0x5f06e4[_0x31041e(0x15b)](_0x51bd30=>{const _0x712f54=_0x31041e,_0x2e56e4=_0x51bd30['textContent'][_0x712f54(0x146)]()[_0x712f54(0x16e)]('\x0a')[0x0][_0x712f54(0x16e)](_0x712f54(0x17e))[0x0],_0x216b65=_0x51bd30[_0x712f54(0x15a)]('img')['src'];_0x28e408[_0x712f54(0x166)]({'name':_0x2e56e4,'image':_0x216b65});});}async function _0x2606b4(){const _0x2d2469=_0x53c0fa;_0x28e408=[];for(let _0xf8ec9=0x0;_0xf8ec9<_0x2abb20[_0x2d2469(0x144)];_0xf8ec9++){document[_0x2d2469(0x15a)]('input.button[value=\x22'+_0x2abb20[_0xf8ec9]+'\x22]')[_0x2d2469(0x15e)](),await new Promise(_0x3af2c5=>setTimeout(_0x3af2c5,0xb36)),_0x17883a();}localStorage[_0x2d2469(0x179)](_0x2d2469(0x170),JSON[_0x2d2469(0x168)](_0x28e408)),alert(_0x2d2469(0x161)),console['log'](_0x2d2469(0x178),_0x28e408);}function _0xa1d0ce(){const _0x9bde7d=_0x53c0fa;localStorage[_0x9bde7d(0x16d)](_0x9bde7d(0x170)),alert(_0x9bde7d(0x142)),console['log'](_0x9bde7d(0x141));}_0x26f86['addEventListener'](_0x53c0fa(0x15e),_0x2606b4),_0x4cbf45['addEventListener'](_0x53c0fa(0x15e),_0xa1d0ce);}if(window[_0x53c0fa(0x15c)][_0x53c0fa(0x17d)]['includes'](_0x53c0fa(0x173))){const _0x49176d=JSON['parse'](localStorage[_0x53c0fa(0x147)](_0x53c0fa(0x170)))||[],_0x5b7a38=_0x49176d[_0x53c0fa(0x172)](_0x461efc=>_0x461efc['name'][_0x53c0fa(0x17b)]()),_0x360dbc=()=>{const _0x43b37b=_0x53c0fa,_0x520244=document[_0x43b37b(0x183)](_0x43b37b(0x158));return _0x520244[_0x43b37b(0x16c)]='🆕',_0x520244[_0x43b37b(0x180)][_0x43b37b(0x13e)]=_0x43b37b(0x165),_0x520244[_0x43b37b(0x13d)]=_0x43b37b(0x15d),_0x520244['style'][_0x43b37b(0x164)]='blue',_0x520244[_0x43b37b(0x180)]['fontSize']=_0x43b37b(0x156),_0x520244;};document[_0x53c0fa(0x14e)](_0x53c0fa(0x143))[_0x53c0fa(0x15b)](_0x2d4cd3=>{const _0xd1e034=_0x53c0fa,_0x185600=_0x2d4cd3['textContent'][_0xd1e034(0x146)]()['toLowerCase']();if(!_0x5b7a38[_0xd1e034(0x174)](_0x185600)){const _0x5e2ba2=_0x360dbc();_0x2d4cd3[_0xd1e034(0x16a)](_0x5e2ba2);}});}if(window[_0x53c0fa(0x15c)][_0x53c0fa(0x17d)][_0x53c0fa(0x174)](_0x53c0fa(0x155))){function _0x5e6871(_0x5a4c00,_0x13967f){const _0xadbd4b=_0x53c0fa,_0x2de379=JSON[_0xadbd4b(0x17c)](localStorage[_0xadbd4b(0x147)]('closetItems'))||[],_0x11c037=_0x2de379[_0xadbd4b(0x13c)](_0xf6e67c=>_0xf6e67c[_0xadbd4b(0x153)]===_0x5a4c00);!_0x11c037&&(_0x2de379[_0xadbd4b(0x166)]({'name':_0x5a4c00,'image':_0x13967f}),localStorage[_0xadbd4b(0x179)](_0xadbd4b(0x170),JSON[_0xadbd4b(0x168)](_0x2de379)),console[_0xadbd4b(0x149)]('Item\x20\x22'+_0x5a4c00+_0xadbd4b(0x167)));}function _0x550134(){const _0x4e6040=_0x53c0fa,_0x4ec6c4=document[_0x4e6040(0x15a)](_0x4e6040(0x157));if(!_0x4ec6c4)return;const _0x291eb6=_0x4e6040(0x182);if(_0x4ec6c4[_0x4e6040(0x16b)]['includes'](_0x291eb6)){const _0x5e7152=_0x4ec6c4[_0x4e6040(0x16b)]['trim']()[_0x4e6040(0x16e)]('\x0a')[0x0],_0x217f9e=_0x4ec6c4[_0x4e6040(0x15a)](_0x4e6040(0x14b))?.[_0x4e6040(0x151)];_0x5e7152&&_0x217f9e&&_0x5e6871(_0x5e7152,_0x217f9e);}}const _0x3ece67=document['querySelector']('.item-invent-view');if(_0x3ece67){const _0x4122f7=new MutationObserver(()=>_0x550134());_0x4122f7['observe'](_0x3ece67,{'childList':!![],'subtree':!![]});}}}()));