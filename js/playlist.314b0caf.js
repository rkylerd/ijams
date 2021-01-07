(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["playlist"],{2059:function(t,e,n){"use strict";n.r(e);var c=n("7a23"),a=Object(c["J"])("data-v-33cf12ea");Object(c["v"])("data-v-33cf12ea");var o=Object(c["g"])("div",{class:"page-title-container"},[Object(c["g"])("div",{class:"page-title"},"Playlist")],-1),r={style:{"text-align":"right"}},s={class:"playlist-normal"};Object(c["t"])();var i=a((function(t,e,n,a,i,l){var u=Object(c["z"])("Loading"),d=Object(c["z"])("SongCard");return Object(c["s"])(),Object(c["d"])("div",null,[t.loading?(Object(c["s"])(),Object(c["d"])(u,{key:0,msg:"Retrieving your playlist"})):Object(c["e"])("",!0),o,Object(c["g"])("section",null,[Object(c["g"])("div",r,[Object(c["f"])(" Selected songs: ("+Object(c["B"])(t.mediaForCheckout.length)+") ",1),Object(c["g"])("button",{class:"btn btn-success",disabled:!t.mediaForCheckout.length,onClick:e[1]||(e[1]=function(){return t.goToCheckout.apply(t,arguments)})}," Go to checkout ",8,["disabled"])]),Object(c["g"])("div",s,[(Object(c["s"])(!0),Object(c["d"])(c["a"],null,Object(c["y"])(t.playlist,(function(n,a){return Object(c["s"])(),Object(c["d"])(d,{onAddCheckout:function(e){return t.addCheckout(n)},onRemoveCheckout:function(e){return t.removeCheckout(n)},draggable:"true",key:a,onDragstart:function(e){return t.setDragItem(n)},onDragover:e[2]||(e[2]=Object(c["I"])((function(){}),["prevent"])),onDrop:function(e){return t.dropItem(n)},song:n,displayNum:a+1},null,8,["onAddCheckout","onRemoveCheckout","onDragstart","onDrop","song","displayNum"])})),128))])])])})),l=(n("c740"),n("c975"),n("a434"),n("d3b7"),n("3ca3"),n("ddb0"),n("5530")),u=(n("96cf"),n("1da1")),d=n("b856"),b=Object(c["J"])("data-v-b396d348");Object(c["v"])("data-v-b396d348");var g={class:"playlist-single-track"},p={class:"fav-num-container"},O={key:1},j={class:"name-artist"},m=Object(c["g"])("br",null,null,-1),f=Object(c["g"])("br",null,null,-1);Object(c["t"])();var v=b((function(t,e,n,a,o,r){var s=Object(c["z"])("Options");return Object(c["s"])(),Object(c["d"])("div",g,[Object(c["g"])("div",p,[t.selected?(Object(c["s"])(),Object(c["d"])("div",O,[Object(c["g"])("input",{type:"checkbox",checked:t.selected,onClick:e[2]||(e[2]=Object(c["I"])((function(e){t.setSelected(e),r.emitCheckout(t.selected)}),["prevent"])),class:"fav-num small-font"},null,8,["checked"])])):(Object(c["s"])(),Object(c["d"])("div",{key:0,onClick:e[1]||(e[1]=Object(c["I"])((function(e){t.setSelected(e),r.emitCheckout(t.selected)}),["prevent"])),class:"fav-num small-font",style:{cursor:"pointer"}},[Object(c["g"])("span",null,Object(c["B"])(n.displayNum),1)])),Object(c["g"])(s,{media:n.song,type:"song-cart"},null,8,["media"])]),Object(c["g"])("div",{class:"album-art",style:{"background-image":"url("+n.song.artworkUrl60+")"},onClick:e[3]||(e[3]=Object(c["I"])((function(e){t.playSound(n.song,e.srcElement)}),["prevent"]))},[Object(c["g"])("img",{width:"60",height:"60",style:{display:"block"},class:{play:!t.isPlaying(n.song.trackId),stop:t.isPlaying(n.song.trackId)}},null,2)],4),Object(c["g"])("div",j,[Object(c["g"])("span",{class:"song-name",onClick:e[4]||(e[4]=Object(c["I"])((function(e){return t.goToAlbum(n.song)}),["prevent"]))},[Object(c["g"])("strong",null,Object(c["B"])(n.song.trackName),1)]),m,Object(c["g"])("span",{class:"artist-name link",onClick:e[5]||(e[5]=Object(c["I"])((function(e){return t.filterArtist(n.song.artistId)}),["prevent"]))},Object(c["B"])(n.song.artistName),1),f])])})),y=(n("a9e3"),n("5502")),k=n("91f3"),h=n("4be2"),C={name:"SongCard",props:{song:Object,displayNum:Number},components:{Options:h["a"]},methods:{emitCheckout:function(t){this.$emit(t?"add-checkout":"remove-checkout")}},setup:function(t){var e=Object(y["b"])(),n=Object(c["w"])({selected:!1,song:t.song,displayNum:t.displayNum,playSound:d["n"],addToPlaylist:d["a"],goToAlbum:k["b"],cutLength:d["c"],filterArtist:k["a"],setSelected:function(t){var e="input"!==t.target.tagName.toLowerCase();n.selected=e},trackIsPlaying:Object(c["b"])((function(){return e.state.isPlaying})),isPlaying:function(t){return n.trackIsPlaying&&t===e.state.dataOfPlaying.trackId}});return Object(l["a"])({},Object(c["C"])(n))}};n("6f12");C.render=v,C.__scopeId="data-v-b396d348";var I=C,w=n("3a5e"),x={name:"playlist",components:{SongCard:I,Loading:w["a"]},setup:function(){var t=Object(y["b"])(),e=Object(c["w"])({loading:!0,playlist:Object(c["b"])((function(){return t.state.playlist})),mediaForCheckout:[],playSound:d["n"],goToAlbum:k["b"],dragDropItem:{},goToCheckout:function(){var n=Object(u["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.dispatch("setCheckoutItems",e.mediaForCheckout);case 2:Object(k["c"])();case 3:case"end":return n.stop()}}),n)})));function c(){return n.apply(this,arguments)}return c}(),removeCheckout:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.trackId,c=void 0===n?"":n,a=e.mediaForCheckout.findIndex((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.trackId;return e===c}));e.mediaForCheckout.splice(a,1)},addCheckout:function(t){e.mediaForCheckout.unshift(t)},dropItem:function(n){var c=e.playlist.indexOf(e.dragDropItem);e.playlist.splice(c,1);var a=e.playlist.indexOf(n);e.playlist.splice(a,0,e.dragDropItem),e.playlist[a].index=a;var o=[],r=a<c?a:c,s=a<c?c:a;for(r;r<=s;r++)e.playlist[r].index=r,o.push(Object(d["r"])(t.state.user.username,{song:e.playlist[r]}));Promise.all(o).catch((function(t){console.log("error",t)}))},setDragItem:function(t){e.dragDropItem=t},filterArtist:k["a"]});return Object(c["n"])(Object(u["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(d["g"])();case 3:e.loading=!1,e.playlist.length||t.dispatch("addToast",{key:"playlist-alert",msg:"This page will be empty until you add songs to your playlist"}),n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](0),console.log("Failed getting playlist",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))),Object(l["a"])({},Object(c["C"])(e))}};n("556e");x.render=i,x.__scopeId="data-v-33cf12ea";e["default"]=x},"556e":function(t,e,n){"use strict";n("a189")},"6f12":function(t,e,n){"use strict";n("d078")},a189:function(t,e,n){},d078:function(t,e,n){}}]);
//# sourceMappingURL=playlist.314b0caf.js.map