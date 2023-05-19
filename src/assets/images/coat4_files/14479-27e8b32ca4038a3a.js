"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[14479,43874,70760],{43874:function(n,e,t){t.r(e),t.d(e,{OffsetLogoOverlay:function(){return l}});var a=t(47842),o=t(52322),i=t(59312),r=t(26544),s=t(75),c=t(59877),u=(0,t(8740).ZL)()(function(n,e){var t,o=n.tokens,i=o.font,r=o.spacing,s=o.zIndex,c=e.positionY;return{offsetContainer:{display:"flex",cursor:"pointer",zIndex:s["3"]},customPosition:(t={position:"absolute",left:0},(0,a.Z)(t,void 0===c?"":c,0),(0,a.Z)(t,"margin",r.s),t),tooltip:{padding:r.s,fontSize:i.size.xs}}}),l=function(n){var e=n.positionY,t=n.isCustomPositionNeeded,l=u({positionY:void 0===e?"bottom":e}),d=l.classes,f=l.cx,h=(0,c.$G)(s.tuJ),v=h.t,g=h.ready?v("ent:premium_content_by_shutterstock"):"";return(0,o.jsx)("div",{className:f((0,a.Z)({},d.customPosition,void 0===t||t)),children:(0,o.jsx)(i.l,{placement:"right",title:g,tooltipClassName:d.tooltip,children:(0,o.jsx)("div",{className:d.offsetContainer,children:(0,o.jsx)(r.N,{})})})})}},73966:function(n,e,t){t.d(e,{D:function(){return c}});var a=t(87394),o=t(52322),i=t(38162),r=t(2784),s=(0,t(8740).ZL)()(function(n){return{bar:{color:n.tokens.color.red.tomato}}}),c=function(n){var e=n.expectedDuration,t=n.overridePixelHeight,c=s().classes,u=(0,a.Z)((0,r.useState)(0),2),l=u[0],d=u[1],f=(0,a.Z)((0,r.useState)("determinate"),2),h=f[0],v=f[1];return(0,r.useEffect)(function(){var n=setInterval(function(){d(function(n){return 100===n?(v("indeterminate"),0):Math.min(n+Math.random()*(100/(e/500)),100)})},500);return"indeterminate"===h&&clearInterval(n),function(){clearInterval(n)}},[e,h]),(0,o.jsx)(i.Z,{sx:{height:(void 0===t?void 0:t)||"1px"},classes:{bar:c.bar},color:"inherit",value:l,variant:h})};c.defaultProps={expectedDuration:3e3}},26544:function(n,e,t){t.d(e,{N:function(){return g}});var a=t(52322),o=t(47746),i=t(91609),r=t(45837),s=t(24865),c=t(75),u=t(59877),l=t(8740),d="35px",f="32px",h=(0,l.ZL)()(function(n){var e=n.tokens,t=e.lineHeight,a=e.spacing;return{channelIcon:{height:d,width:d},overlayIcon:{backgroundImage:"url(".concat("/assets/images/offset_logo_black_background.png",")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",height:f,width:f},root:{alignItems:"center",display:"inline-flex",justifyContent:"flex-start",lineHeight:t.l},channel:{marginLeft:0,marginRight:a.s},overlay:{height:f,margin:0,minHeight:f,minWidth:f,padding:0}}}),v=function(n){var e=n.logoColor,t=h().classes;return(0,o.Z)().palette.mode===i.oc.DARK&&"black"!==e||"white"===e?(0,a.jsx)(r.G,{className:t.channelIcon}):(0,a.jsx)(s.y,{className:t.channelIcon})},g=function(n){var e=n.className,t=n.isChannelBannerLogo,o=void 0!==t&&t,i=n.logoColor,r=h(),s=r.classes,l=r.cx,d=(0,u.$G)(c.hgN).t,f=o?s.channel:s.overlay;return(0,a.jsx)("span",{className:l(s.root,f,void 0===e?"":e),"aria-label":d("ent:offset_by_shutterstock"),children:o?(0,a.jsx)(v,{logoColor:i}):(0,a.jsx)("span",{className:s.overlayIcon})})}},70528:function(n,e,t){t.d(e,{Q:function(){return L}});var a=t(47842),o=t(87394),i=t(52322),r=t(12819),s=t(67550),c=t(62197),u=t(73966),l=t(47999),d=t(70865),f=t(26297),h=t(52309),v=t(25237),g=t.n(v)()(function(){return t.e(67760).then(t.bind(t,67760)).then(function(n){return n.Licensing3dObjectModal})},{loadableGenerated:{webpack:function(){return[67760]}},ssr:!1}),p=function(n){var e=n.isOpen,t=(0,f.Z)(n,["isOpen"]);return(0,h.B)(e)&&(0,i.jsx)(g,(0,d.Z)({isOpen:e},t))},m=t(54112),b=t(36888),x=t(75),y=t(2784),C=t(8740),w=t(88351),k=(0,C.ZL)()(function(n,e){var t,o=n.palette,i=n.breakpoints,r=n.tokens,s=r.spacing,c=r.fontSize,u=r.border,l=r.font,d=e.resolution,f=e.showAssetQuickViewStyles,h=e.isMobile,v=e.positionOfLoadingBar;return{canvasContainer:{width:"100%",position:"relative",outline:0,borderColor:o.border1Color,overflow:"hidden",padding:s.l,backgroundColor:o.common.white,borderRadius:s.base},canvas:{width:"100%",height:"100%",maxWidth:d},container:{display:"flex",flexDirection:"column",alignItems:"center",position:"relative"},caption3dContainer:{display:"flex",position:"absolute",top:s.base},incrementalLoadingBar:(t={zIndex:1,position:"absolute"},(0,a.Z)(t,v,0),(0,a.Z)(t,"height","15%"),(0,a.Z)(t,"width",h?"80%":"50%"),(0,a.Z)(t,"padding",s.m),(0,a.Z)(t,"justifyContent","center"),(0,a.Z)(t,"alignItems","center"),t),label:(0,a.Z)({margin:"".concat(s.xxs," 0 0 ").concat(s.s)},i.down("sm"),{fontSize:c.s}),informationContainer:{display:"flex",position:"absolute",justifyContent:"center",bottom:0,backgroundColor:"".concat(f?o.common.white:o.common.black),padding:s.base,width:"100%",borderRadius:"0 0 ".concat(u.radius.xl," ").concat(u.radius.xl)},informationLabel:{color:"".concat(f?o.common.black:o.common.white)},learnMore:{color:o.common.white,marginLeft:s.base,textDecoration:"underline",lineHeight:l.lineHeight.m},loadingAngleLabel:{display:"flex",justifyContent:"center"}}}),L=function(n){var e=n.asset,t=n.showAssetQuickViewStyles,a=void 0!==t&&t,d=n.setAdditionalAssetData,f=n.isMobile,h=k({resolution:600,showAssetQuickViewStyles:a,isMobile:f,positionOfLoadingBar:f?"top":"bottom"}),v=h.classes,g=h.cx,C=(0,b.bo)().classes,L=(0,m.D)({namespace:x.Cgc,translationKeys:{clickAndDrag:"image:click_and_drag_3d_object",informationLabel:"image:3d_rotate_info",learnMore:"image:learn_more",loadingAnglesLabel:"image:loading_camera_angles"}}).labels,I=(0,y.useRef)(null),S=(0,w.k)({asset:e,canvasRef:I}),Z=S.loading,j=S.angle;(0,y.useEffect)(function(){d({angle:j})},[j,d]);var _=(0,o.Z)((0,y.useState)(!1),2),B=_[0],D=_[1],E=function(){return D(!B)};return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(s.Z,{className:v.container,children:[(0,i.jsx)(s.Z,{className:v.canvasContainer,children:(0,i.jsx)("canvas",{id:"object",className:v.canvas,ref:I,width:600,height:600})}),100===Z&&(0,i.jsxs)(s.Z,{className:v.caption3dContainer,children:[(0,i.jsx)(r.Z,{}),(0,i.jsx)(c.Z,{className:v.label,variant:"body2",children:L.clickAndDrag})]}),Z<100&&(0,i.jsxs)(s.Z,{className:v.incrementalLoadingBar,children:[(0,i.jsx)(u.D,{expectedDuration:100,overridePixelHeight:"3px"}),(0,i.jsx)("div",{"data-automation":"pixelsquid_object_loading",children:(0,i.jsx)(c.Z,{className:v.loadingAngleLabel,variant:"body2",children:L.loadingAnglesLabel})})]}),a?(0,i.jsx)(s.Z,{className:v.informationContainer,children:(0,i.jsx)(c.Z,{className:v.informationLabel,variant:"body2",children:L.informationLabel})}):(0,i.jsxs)(s.Z,{className:v.informationContainer,children:[(0,i.jsx)(c.Z,{className:v.informationLabel,variant:"body2",children:L.informationLabel}),(0,i.jsx)(l.z,{"aria-label":"image:learn_more",className:g(C.buttonAnchor,v.learnMore),onClick:E,children:L.learnMore}),(0,i.jsx)(p,{isOpen:B,onClose:E})]})]})})};L.defaultProps={isMobile:!1}},88351:function(n,e,t){t.d(e,{k:function(){return p}});var a=t(87394),o=t(2784),i=t(98788),r=t(5163),s=["B","C","D","E","F","G","H","I","J","K","L","M","N","O"],c=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16"],u=["B","C","D","E","F","G","H","I"],l=function(n){var e=n.imageIndex,t=n.canvasRef,a=n.onLoad,o=n.imagePath,i=t.current,r=i.getContext("2d"),s="".concat(o).concat(e,".jpg"),c=new Image;c.src=s,c.onload=function(){a(e),r.drawImage(c,0,0,i.width,i.height)}},d=function(n){var e,t=n.imageIndexes,a=n.setLoading,o=n.imagePath,s=0;t.forEach((e=(0,i.Z)(function(n){var e;return(0,r.__generator)(this,function(i){return(e=new Image).src="".concat(o).concat(n,".jpg"),e.onload=function(){a(Math.round(100*(s+=1)/t.length))},[2]})}),function(n){return e.apply(this,arguments)}))},f=function(n){var e=n.latitudes,t=n.longitudes,a=[];return e.forEach(function(n){t.forEach(function(e){a.push(n+e)})}),{imageIndexes:a}},h=function(n){var e=n.latitudes,t=n.longitudes,a=n.currentImageIndex,o=n.vertical,i=n.horizontal,r=a.substring(0,1),s=a.substring(1),c=e.indexOf(r),u=t.indexOf(s);return c-=o,u-=i,c<0?c=0:c>=e.length&&(c=e.length-1),u<0?u+=t.length:u>=t.length&&(u-=t.length),e[c]+t[u]},v=function(n){var e=n.asset,t=e.validLatitudes,a=e.cameraType;return t||("top_half"===a||"half_spinner"===a?u:s)},g=function(n){var e=n.imageSrc;return(null==e?void 0:e.split("jpeg-600/")[1].split(".jpg")[0])||"H01"},p=function(n){var e=n.asset,t=n.canvasRef,i=n.autoRotate,r=(0,o.useMemo)(function(){return v({asset:e})},[e]),s=e.validLongitudes||c,u=(0,a.Z)((0,o.useState)(0),2),p=u[0],m=u[1],b=(0,a.Z)((0,o.useState)(),2),x=b[0],y=b[1],C=e.displays["600W"].src,w=null==C?void 0:C.substring(0,C.lastIndexOf("/")+1),k=g({imageSrc:C}),L=(0,o.useRef)(),I=(0,o.useRef)(),S=(0,o.useMemo)(function(){return f({latitudes:r,longitudes:s})},[r,s]).imageIndexes,Z=(0,o.useCallback)(function(n){var e=n.horizontal,a=n.vertical,o=L.current,i=null==I?void 0:I.current;if(!i||o===i){var c=h({latitudes:r,longitudes:s,currentImageIndex:o,horizontal:e,vertical:a});o!==c&&(I.current=c,l({imageIndex:c,canvasRef:t,imagePath:w,onLoad:function(){L.current=c}}))}},[t,w,r,s]),j=function(n){var e=n.currentPosition,t=n.previousPosition;return e>t?1:e<t?-1:0};return(0,o.useEffect)(function(){l({imageIndex:k,canvasRef:t,imagePath:w,onLoad:function(){L.current=k}});var n=t.current;if(i){var e,a=function(){Z({horizontal:1,vertical:0})};n.addEventListener("mouseover",function(){d({imageIndexes:S,setLoading:m,imagePath:w}),e=setInterval(a,100)}),n.addEventListener("mouseout",function(){clearInterval(e),l({imageIndex:k,canvasRef:t,imagePath:w,onLoad:function(){L.current=k,I.current=null}})})}else{d({imageIndexes:S,setLoading:m,imagePath:w});var o=!1,r={x:null,y:null},s=function(n){var e=n.e,t=n.x,a=n.y;y(L.current),e.preventDefault(),o=!0,r={x:t,y:a}},c=function(n){var e=n.e,t=n.x,a=n.y;if(e.preventDefault(),o){var i=j({currentPosition:t,previousPosition:r.x});Z({vertical:j({currentPosition:a,previousPosition:r.y}),horizontal:i}),r={x:t,y:a}}},u=function(n){y(L.current),n.preventDefault(),o=!1};n.addEventListener("mousedown",function(n){return s({e:n,x:n.clientX,y:n.clientY})}),n.addEventListener("mousemove",function(n){return c({e:n,x:n.clientX,y:n.clientY})}),n.addEventListener("mouseup",u),n.addEventListener("touchstart",function(n){var e=n.touches[0];s({e:n,x:e.clientX,y:e.clientY})}),n.addEventListener("touchmove",function(n){var e=n.touches[0];c({e:n,x:e.clientX,y:e.clientY})}),n.addEventListener("touchend",u)}},[S,t,Z,w,k,i,m]),{loading:p,angle:x}}},49644:function(n,e,t){t.d(e,{V:function(){return A}});var a=t(98788),o=t(70865),i=t(96670),r=t(87394),s=t(5163),c=t(52322),u=t(44417),l=t(44699),d=t(66358),f=t(73572),h=t(11164),v=t(29292),g=t(44297),p=t(48433),m=t(89522),b=t(67855),x=t(11849),y=t(65257),C=t(53007),w=t(776),k=t(75),L=t(34273),I=t.n(L),S=t(70314),Z=t.n(S),j=t(25237),_=t.n(j),B=t(59877),D=t(2784),E=Z()().publicRuntimeConfig.shutterstockBaseUrl,R=_()(function(){return Promise.all([t.e(27310),t.e(81503),t.e(88629),t.e(73166)]).then(t.bind(t,51935)).then(function(n){return n.DynamicMenuDropdownContent})},{loadableGenerated:{webpack:function(){return[51935]}},ssr:!1}),N="action-menu",P=function(n){var e=n.asset,t=n.labels,o=n.onCloseHandler,i=n.productSharedAnalyticsEvent,r=n.shareLink,c=n.shouldTrackAnalytics,u=n.twitterCopy,d=n.setCopyLinkStatus,h=n.pageSection;return[{label:f.vq,Icon:b.s,href:"https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent(r)),isLink:!0,hasDivider:!1,onClick:function(){c&&i({asset:e,shareVia:f.vq,pageSection:h}),o()}},{label:f.Ib,Icon:x.t,href:"https://twitter.com/intent/tweet?url=".concat(encodeURIComponent(r),"&text=").concat(void 0===u?"":u),isLink:!0,hasDivider:!1,onClick:function(){c&&i({asset:e,shareVia:f.Ib,pageSection:h}),o()}},{label:t.copy,Icon:y.Copy,isLink:!1,onClick:(0,a.Z)(function(){var n;return(0,s.__generator)(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,3,4]),[4,I()(r)];case 1:return t.sent(),c&&i({asset:e,shareVia:"copyLink",pageSection:h}),d({status:l.MR,error:void 0}),[3,4];case 2:return n=t.sent(),d({status:l.pn,error:n}),[3,4];case 3:return o(),[7];case 4:return[2]}})}),hasDivider:!0}]},T=function(n){var e=n.t;return{share:e("common:actions_share"),email:e("account:profile_email"),copy:e("common:actions_copy"),copyToClipBoardSuccess:e("developers:apps_copied_to_clipboard"),copyToClipBoardWarning:e("notifications:label_generic_failure")}},A=function(n){var e=n.asset,t=n.ButtonComponent,a=n.IconComponent,s=n.classes,f=n.hasTooltip,b=n.iconContainerClassName,x=n.shouldTrackAnalytics,y=n.clickAnalyticsLabel,C=n.size,L=(0,w.yh)().analytics,I=(0,h.m)().insightType,S=y.pageSection,Z=y.eventLabel,j=T({t:(0,B.$G)(k.VQ6).t}),_=e.description,A=(0,r.Z)((0,m.KC)({asset:e}),1)[0],M=(0,r.Z)((0,D.useState)(null),2),z=M[0],V=M[1],O=(0,r.Z)((0,D.useState)(!1),2),H=O[0],F=O[1],G=(0,r.Z)((0,D.useState)({status:"",error:void 0}),2),W=G[0],Y=G[1],Q=(0,p.W)(),K=(0,g.PD)(e),q=function(){H||F(!0)},U=function(n){q(),V(n)},X=function(){return U(null)},J=P({asset:e,labels:j,onCloseHandler:X,productSharedAnalyticsEvent:Q,setCopyLinkStatus:Y,shareLink:"".concat(E).concat(A),shouldTrackAnalytics:x,twitterCopy:_,pageSection:d.df}),$=(0,i.Z)((0,o.Z)({size:C,"aria-label":j.share},H&&z&&{"aria-controls":N}),{"aria-haspopup":"true",className:s.button,onClick:function(n){x&&L.click((0,i.Z)((0,o.Z)({pageSection:S||d.hTM,eventLabel:Z||d.$cX},K&&{brand:(0,v.f_)(e),product_line:(0,v.Rz)(e)}),{eventValue:{insightType:I}})),U(n.currentTarget)},onMouseEnter:q});return(0,c.jsxs)("div",{className:b,children:[(0,c.jsx)(t,{buttonProps:$,IconComponent:a,labels:j,hasTooltip:f}),H&&(0,c.jsx)(R,{id:N,anchorEl:z,menuOptions:J,onCloseHandler:X}),(0,c.jsx)(u.Y,{alertSeverity:W.status,error:W.error,handleSnackbarClose:function(){return Y({status:""})},isOpen:!!W.status,message:W.status===l.MR?j.copyToClipBoardSuccess:j.copyToClipBoardWarning})]})};A.defaultProps={classes:{},clickAnalyticsLabel:{},hasTooltip:!1,shouldTrackAnalytics:!1,IconComponent:C.Share,size:"small"}},73572:function(n,e,t){t.d(e,{Er:function(){return i},Ib:function(){return o},QD:function(){return u},VU:function(){return s},fW:function(){return r},iC:function(){return c},rg:function(){return l},uc:function(){return d},vq:function(){return a}});var a="Facebook",o="Twitter",i="Instagram",r="LinkedIn",s="YouTube",c="Vimeo",u="#4267B2",l="#FD1D1D",d="#E60023"},26051:function(n,e,t){t.d(e,{G:function(){return a}});var a=function(n){var e=n.asset,t=void 0===e?{}:e,a=t.descriptionLanguageMap,o=void 0===a?{}:a,i=t.description;return o[n.language]||o.en||i}},84866:function(n,e,t){t.d(e,{bI:function(){return r},n_:function(){return s}});var a=t(70314),o=t.n(a),i=function(n){var e=n.name,t=o()().publicRuntimeConfig.campaign;return(null==t?void 0:t[e])||null},r=function(n){var e=o()().publicRuntimeConfig.assets.cdnHostURL;if(e&&n.id)return"".concat(e,"/").concat("dream/photos","/").concat(n.id,".jpg")},s=function(n){var e,t=n.contributorId,a=null===(e=i({name:"dream"}))||void 0===e?void 0:e.contributorId;return!!a&&(Array.isArray(a)||(a=[a]),!!t&&a.includes(Number(t)))}},48433:function(n,e,t){t.d(e,{W:function(){return u}});var a=t(70865),o=t(29292),i=t(44297),r=t(776),s=t(2784),c=t(68533),u=function(){var n=(0,r.yh)().analytics,e=(0,c.Y)().getSearchContext;return(0,s.useCallback)(function(t){var r=t.asset,s=t.shareVia,c=t.pageSection,u=(0,o.qI)(r),l=(0,i.PD)(r);n.productShared((0,a.Z)({asset_type:(0,i.ZZ)(r),category:(0,o.CP)(r),name:(0,o.LJ)(r),product_id:u,search_context:e(r),share_via:s,sku:u,page_section:c},l&&{brand:(0,o.f_)(r),product_line:(0,o.Rz)(r)}))},[n,e])}},33967:function(n,e,t){t.d(e,{a:function(){return l}});var a=t(33301),o=t(84866),i=t(43110),r=t(92405),s=t(2784),c=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.isLoading,t=n.withinCampaign,a=void 0!==t&&t;return{isLoading:void 0!==e&&e,isAssetFreeToDownload:a,canPreview:!a,canShare:!a,canEdit:!a,canTry:!a,canSaveToCollection:!a,canSeeDetailsModal:!a}},u=function(){var n=(0,r.p)(a.NV);return{data:{isDreamCampaignEnabled:n},isValidating:void 0===n}},l=function(n){var e=(n||{}).contributor,t=u(),a=t.data,r=t.isValidating,l=(0,i.B)(),d=null==e?void 0:e.id;return(0,s.useMemo)(function(){var n=l&&r;return!n&&a.isDreamCampaignEnabled&&l&&(0,o.n_)({contributorId:null!=d?d:""})?c({withinCampaign:!0}):c({isLoading:n})},[r,a,d,l])}},65094:function(n,e,t){t.d(e,{E:function(){return f}});var a=t(33301),o=t(29858),i=t(44297),r=t(33967),s=t(9823),c=t(5632),u=t(10728),l=t(92405),d=function(n){var e=(n||{}).contributor,t=(0,r.a)({contributor:e}),a=t.isLoading;return{showDownloadForFreeButton:t.isAssetFreeToDownload,isEditRestrictedByCampaign:!t.canEdit||a,isShareRestrictedByCampaign:!t.canShare||a,isTryRestrictedByCampaign:!t.canTry||a,isCollectionSaveRestrictedByCampaign:!t.canSaveToCollection||a}},f=function(n){var e=n.asset,t=n.isCatalog,r=void 0!==t&&t,f=n.withGoToPageAction,h=n.isExternalToOrg,v=void 0!==h&&h,g=(0,s.D)(),p=g.isBrandSstk,m=g.isBrandEnterprise,b=(0,c.useRouter)().asPath,x=d(e),y=x.showDownloadForFreeButton,C=x.isEditRestrictedByCampaign,w=x.isShareRestrictedByCampaign,k=x.isTryRestrictedByCampaign,L=x.isCollectionSaveRestrictedByCampaign,I=(0,i.EK)(e),S=(0,i.zz)(e),Z=(0,i.w5)(e),j=(0,i.PD)(e),_=(0,i.ML)(e),B=(0,i.vh)(e.type),D=(0,i.yw)({asset:e}),E=(0,i.aT)(e),R=(0,i.EK)(e),N=(0,i.fn)(e),P=(null==b?void 0:b.includes(o.H5))&&(null==b?void 0:b.includes("clip-".concat(e.id))),T=(0,i.Am)(e),A=(0,i.f8)(e),M=T&&I,z=(0,l.p)(a.cR,!1),V=(0,u.d)(),O=(0,l.p)(a.Jo),H=(0,l.p)(a.iH);return{showEditButtonOnAQV:(E||N||T&&V&&H)&&!I&&(p||z&&m)&&!j&&!(N&&v)&&!Z&&!(A&&r),showSimilarButtonOnAQV:!R&&!(p&&j)&&!r&&!B&&!D,showOpenInSameButton:void 0!==f&&f&&!r,showEditDesignButton:_&&!I&&!v,showEditTemplateButton:B&&!I,showShareButton:!(M||S||N||_||w||D),showEditButton:(E||B||(N||_)&&!v||T&&V&&O)&&!(I||p&&j||C||A),showTryButton:p&&!(M||S||B||_||k||D||A),showSaveButton:!(r||S||B||_||L),showSimilarButton:!(R||p&&j||S||P||A||D),showDownloadForFreeButton:y,showCreateButton:!j&&(E&&!B||!R),showGenerateMoreButton:D}}},48726:function(n,e,t){t.d(e,{E:function(){return i}});var a=t(38419),o=t(5632),i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=(0,o.useRouter)();return(0,a.DW)({language:e.locale,relativePath:n})}},10728:function(n,e,t){t.d(e,{d:function(){return r}});var a=t(33301),o=t(9823),i=t(92405);function r(){var n=(0,i.p)(),e=(0,o.D)().isBrandEnterprise;if(!n)return!1;var t=n[a.Cl],r=n[a.lm];return e?r:t}},24865:function(n,e,t){t.d(e,{y:function(){return o}});var a=t(25237),o=t.n(a)()(function(){return t.e(5653).then(t.bind(t,5653)).then(function(n){return n.OffsetBlackLogo})},{loadableGenerated:{webpack:function(){return[5653]}},ssr:!1})},45837:function(n,e,t){t.d(e,{G:function(){return o}});var a=t(25237),o=t.n(a)()(function(){return t.e(74078).then(t.bind(t,74078)).then(function(n){return n.OffsetWhiteLogo})},{loadableGenerated:{webpack:function(){return[74078]}},ssr:!1})},67855:function(n,e,t){t.d(e,{s:function(){return r}});var a=t(70865),o=t(52322),i=(0,t(6620).Z)((0,o.jsx)("path",{d:"M27.333 4H4.666c-.8 0-1.333.667-1.333 1.333v22.533c0 .8.667 1.333 1.333 1.333h12.133v-9.867h-3.333v-3.867h3.333v-2.533c0-3.333 2-5.067 4.933-5.067 1.333 0 2.533.133 2.933.133v3.333h-2c-1.6 0-1.867.8-1.867 1.867v2.4h3.733l-.533 3.867h-3.333v9.867h6.4c.8 0 1.333-.667 1.333-1.333V5.332c.267-.667-.4-1.333-1.067-1.333z"}),"Facebook.svg"),r=function(n){return(0,o.jsx)(i,(0,a.Z)({viewBox:"0 0 32 32"},n))}},53007:function(n,e,t){t.r(e),t.d(e,{Share:function(){return r}});var a=t(70865),o=t(52322),i=(0,t(6620).Z)((0,o.jsx)("path",{d:"M14.667 8.4v16.267h2.667V8.534l4.267 4.133 1.867-1.867-7.467-7.467L8.534 10.8l2 1.867zM20 15.333V18h4v9.333H8V18h4v-2.667H5.333V30h21.333V15.333z"}),"Share.svg"),r=function(n){return(0,o.jsx)(i,(0,a.Z)({viewBox:"0 0 32 32"},n))}},11849:function(n,e,t){t.d(e,{t:function(){return r}});var a=t(70865),o=t(52322),i=(0,t(6620).Z)((0,o.jsx)("path",{d:"M11.067 27.333C20.934 27.333 26.4 19.066 26.4 12v-.667c1.067-.8 2-1.733 2.667-2.8-.933.4-2 .667-3.067.8 1.2-.667 2-1.733 2.4-2.933-1.067.667-2.133 1.067-3.467 1.333C24 6.666 22.533 6 21.066 6c-2.933 0-5.333 2.4-5.333 5.333 0 .4 0 .8.133 1.2-4.533-.133-8.533-2.267-11.2-5.6-.4.8-.667 1.733-.667 2.8 0 1.867.933 3.467 2.4 4.533-.933 0-1.733-.267-2.4-.667v.133c0 2.667 1.867 4.8 4.267 5.333-.4.133-.933.133-1.467.133-.4 0-.667 0-1.067-.133.667 2.133 2.667 3.733 5.067 3.733-1.867 1.467-4.133 2.267-6.667 2.267-.4 0-.8 0-1.333-.133 2.4 1.467 5.333 2.4 8.267 2.4z"}),"Twitter.svg"),r=function(n){return(0,o.jsx)(i,(0,a.Z)({viewBox:"0 0 32 32"},n))}}}]);
//# sourceMappingURL=14479-27e8b32ca4038a3a.js.map