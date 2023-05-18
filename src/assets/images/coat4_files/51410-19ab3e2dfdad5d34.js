"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[51410,71728],{26255:function(e,t,n){n.d(t,{P:function(){return m}});var r=n(70865),i=n(96670),s=n(26297),a=n(52322),o=n(90751),c=n(51852),u=n(80710),l=n(97024),d=n(49427),m=function(e){var t=e.assetOverlayProps,n=(0,s.Z)(e,["assetOverlayProps"]),m=n.assets,p=n.hideAddToCart,f=n.hideSimilarAction,v=n.onAddToCollectionsComplete,g=n.listId,S=(0,l.JI)().assetType,h=(0,c.t)(),b=h.AddToCartViews,C=h.addToCartViewsHandler,w=h.addToCartViewsProps,T=(0,u.VL)({initialAssetType:S}),A=T.AddToCollectionViews,y=T.addToCollectionViewsHandler,x=T.addToCollectionViewsProps,k=(0,o.R)({addToCartViewsHandler:C,addToCollectionViewsHandler:y,assets:m,compLicensingHandler:null,licensingAssetId:null,withGoToPageAction:!0,withNavigationArrows:!0,listId:g}),L=k.PreviewModal,_=k.previewModalProps,Z=k.onAssetModalHandler;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.J,(0,r.Z)({assetOverlayProps:(0,r.Z)({listId:g,addToCartViewsHandler:C,addToCollectionViewsHandler:y,onAssetModalHandler:Z},t)},n)),(0,a.jsx)(b,(0,r.Z)({},w)),(0,a.jsx)(A,(0,r.Z)({onAddToCollectionsComplete:v},x)),(0,a.jsx)(L,(0,i.Z)((0,r.Z)({},_),{hideAddToCart:p,hideSimilarAction:f,showActionIcons:!0}))]})}},72837:function(e,t,n){n.d(t,{C:function(){return p}});var r=n(70865),i=n(96670),s=n(26297),a=n(52322),o=n(90751),c=n(51852),u=n(80710),l=n(71728),d=n(97024),m=n(49427),p=function(e){var t=e.assetOverlayProps,n=(0,s.Z)(e,["assetOverlayProps"]),p=n.assets,f=n.hideAddToCart,v=n.onAddToCollectionsComplete,g=n.listId,S=(0,d.JI)().assetType,h=(0,l.r)(),b=h.CompLicensingViews,C=h.licensingAssetId,w=h.compLicensingProps,T=h.compLicensingHandler,A=(0,c.t)(),y=A.AddToCartViews,x=A.addToCartViewsHandler,k=A.addToCartViewsProps,L=(0,u.VL)({initialAssetType:S}),_=L.AddToCollectionViews,Z=L.addToCollectionViewsHandler,P=L.addToCollectionViewsProps,I=(0,o.R)({addToCartViewsHandler:x,addToCollectionViewsHandler:Z,assets:p,compLicensingHandler:T,licensingAssetId:C,withGoToPageAction:!0,withNavigationArrows:!0,listId:g}),j=I.PreviewModal,V=I.previewModalProps,z=I.onAssetModalHandler;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m.J,(0,r.Z)({assetOverlayProps:(0,r.Z)({listId:g,addToCartViewsHandler:x,addToCollectionViewsHandler:Z,compLicensingHandler:T,licensingAssetId:C,onAssetModalHandler:z},t)},n)),(0,a.jsx)(y,(0,r.Z)({},k)),(0,a.jsx)(_,(0,r.Z)({onAddToCollectionsComplete:v},P)),(0,a.jsx)(j,(0,i.Z)((0,r.Z)({},V),{hideAddToCart:f,showActionIcons:!0})),(0,a.jsx)(b,(0,r.Z)({},w))]})}},64618:function(e,t,n){n.r(t),n.d(t,{MosaicAssetGridWithViews:function(){return c}});var r=n(70865),i=n(52322),s=n(9823),a=n(26255),o=n(72837),c=function(e){return(0,s.D)().isBrandEnterprise?(0,i.jsx)(o.C,(0,r.Z)({},e)):(0,i.jsx)(a.P,(0,r.Z)({},e))}},81205:function(e,t,n){n.d(t,{N:function(){return l}});var r=n(47842),i=n(52322),s=n(41075),a=n(84038),o=n(13011),c=n(68138),u=n(14749),l=function(e){var t,n=e.xs,o=e.sm,l=e.md,d=e.lg,m=e.xl,p=e.numOfSkeletonRows,f=e.maxRows,v=e.cardAspectRatio,g=e.spacing,S=e.withContainerSpacing,h=(0,c.rr)(),b=h.classes,C=h.cx,w=(0,a.ub)({xs:n,sm:o,md:l,lg:d,xl:m,numOfSkeletonRows:p,maxRows:f,withLoadingSkeletons:!0}),T=w.itemsPerBreakpoint,A=w.gridItems,y=(0,c.eD)({itemsPerBreakpoint:T}).classes.container;return(0,i.jsx)(s.ZP,{className:C((t={},(0,r.Z)(t,b.gridContainer,S),(0,r.Z)(t,y,T),t)),style:{"--customGridSpacing":"".concat(g,"px")},container:!0,children:A.map(function(e,t){return(0,i.jsx)(s.ZP,{className:C(!S&&b.gridItem),style:{"--customGridSpacing":"".concat(g,"px")},xs:n,sm:o,md:l,lg:d,xl:m,item:!0,children:(0,i.jsx)(u.H,{cardAspectRatio:v})},"skeleton_grid_".concat(t))})})};l.defaultProps={cardAspectRatio:o.Th,numOfSkeletonRows:2,spacing:c.gP,xs:12,sm:6,md:4,lg:3,xl:2,withContainerSpacing:!1}},14749:function(e,t,n){n.d(t,{H:function(){return o}});var r=n(52322),i=n(21647),s=n(13011),a=(0,n(8740).ZL)()(function(e,t){var n=t.cardAspectRatio;return{skeleton:{paddingTop:"".concat(100*n,"%"),width:"100%"}}}),o=function(e){var t=a({cardAspectRatio:e.cardAspectRatio}).classes;return(0,r.jsx)(i.Z,{variant:"rectangular",className:t.skeleton,"data-automation":"SkeletonGridItem"})};o.defaultProps={cardAspectRatio:s.Th}},84038:function(e,t,n){n.d(t,{ub:function(){return c}});var r=n(50930),i=n(2784),s=n(83303),a=function(e){var t=e.xs,n=e.sm,r=e.md,a=e.lg,o=e.xl,c=e.maxRows;return(0,i.useMemo)(function(){return c?{xs:(0,s.Vr)(t,c),sm:(0,s.Vr)(n,c),md:(0,s.Vr)(r,c),lg:(0,s.Vr)(a,c),xl:(0,s.Vr)(o,c)}:null},[t,n,r,a,o,c])},o=function(e){var t=e.assets,n=void 0===t?[]:t,a=e.maxItems,o=e.fillCemetery,c=e.showSkeletonsOnLoad,u=e.isGridLoading,l=a&&(u&&c||o);return(0,i.useMemo)(function(){if(!l)return n;var e=(0,s.yt)({assets:n,maxItems:a}),t=a?n.slice(0,a):n;return e?(0,r.Z)(t).concat((0,r.Z)(e)):t},[n,l,a])},c=function(e){var t=e.assets,n=e.xs,r=e.sm,i=e.md,c=e.lg,u=e.xl,l=e.numOfSkeletonRows,d=e.maxRows,m=e.fillCemetery,p=e.withLoadingSkeletons,f=(0,s.pb)(t).isGridLoading,v=f&&l||d,g=a({xs:n,sm:r,md:i,lg:c,xl:u,maxRows:v}),S=v?g.xl:null;return{itemsPerBreakpoint:g,gridItems:o({assets:t,fillCemetery:m,isGridLoading:f,maxItems:S,showSkeletonsOnLoad:!!p||!!l})}}},83303:function(e,t,n){n.d(t,{UP:function(){return a},V$:function(){return l},Vr:function(){return u},XQ:function(){return p},fL:function(){return s},o1:function(){return o},pb:function(){return c},yl:function(){return m},yt:function(){return d}});var r=n(50930),i="skeleton",s=function(e){return e.height*e.aspect},a=function(e){return e.width/e.aspect},o=function(e){return e.width/e.height},c=function(e){var t=!e,n=e&&!e.length;return{isGridLoading:t,isGridEmpty:n,isGridReady:!t&&!n}},u=function(e,t){return 12/e*t},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.type===i},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.assets,n=e.maxItems-(void 0===t?[]:t).length;return n>0?(0,r.Z)(Array(n)).map(function(e,t){return{id:t,type:i}}):null},m=function(e){var t=e.defaultHeight,n=e.gridSizingOptions,r=e.spacing,i=e.width,s=null==n?void 0:n.find(function(e){return i>=e.containerWidth});return((null==s?void 0:s.height)||t)-2*r},p=function(e){var t,n=e.activeExpansionRow,r=e.asset;return(null==r?void 0:r.id)===(null==n?void 0:null===(t=n.asset)||void 0===t?void 0:t.id)}},53572:function(e,t,n){n.d(t,{k:function(){return g}});var r=n(70865),i=n(52322),s=n(39232),a=n(32456),o=n(44297),c=n(52131),u=n(25237),l=n.n(u),d=l()(function(){return n.e(91794).then(n.bind(n,91794)).then(function(e){return e.BlankTemplateAssetItem})},{loadableGenerated:{webpack:function(){return[91794]}},ssr:!0,loading:c.S}),m=n(58647),p=l()(function(){return Promise.all([n.e(31373),n.e(68416),n.e(79637),n.e(76341)]).then(n.bind(n,8948)).then(function(e){return e.MusicGridItem})},{loadableGenerated:{webpack:function(){return[8948]}},ssr:!0,loading:c.S}),f=l()(function(){return n.e(39730).then(n.bind(n,39730)).then(function(e){return e.TemplateGridItem})},{loadableGenerated:{webpack:function(){return[39730]}},ssr:!0,loading:c.S}),v=n(21030),g=function(e){var t=e.asset;switch((0,o.Tp)(t)){case s.pX:case s.A7:return(0,i.jsx)(v.x,(0,r.Z)({},e));case s.xF:case s.tn:return(0,i.jsx)(p,(0,r.Z)({},e));case s.k4:case a.du:case s.oI:case s.nX:case s.Nk:case s.zo:return(0,i.jsx)(m.N,(0,r.Z)({},e));case s.C_:return(0,i.jsx)(d,(0,r.Z)({},e));case s.hv:return(0,i.jsx)(f,(0,r.Z)({},e));default:return(0,i.jsx)(c.S,{})}}},52131:function(e,t,n){n.d(t,{S:function(){return a}});var r=n(52322),i=n(21647),s=(0,n(8740).ZL)()(function(e){return{skeleton:{width:"100%",height:"100%",position:"absolute",top:0,right:0,zIndex:-1,backgroundColor:e.palette.background.default}}}),a=function(){var e=s().classes;return(0,r.jsx)("div",{className:e.skeleton,children:(0,r.jsx)(i.Z,{variant:"rectangular",height:"100%",width:"100%","data-automation":"ThumbnailSkeleton"})})}},58647:function(e,t,n){n.d(t,{N:function(){return a}});var r=n(25237),i=n.n(r),s=n(52131),a=i()(function(){return n.e(16354).then(n.bind(n,16354)).then(function(e){return e.ImageGridItem})},{loadableGenerated:{webpack:function(){return[16354]}},ssr:!0,loading:s.S})},21030:function(e,t,n){n.d(t,{x:function(){return a}});var r=n(25237),i=n.n(r),s=n(52131),a=i()(function(){return Promise.all([n.e(27310),n.e(55843)]).then(n.bind(n,13417)).then(function(e){return e.VideoGridItem})},{loadableGenerated:{webpack:function(){return[13417]}},ssr:!0,loading:s.S})},26625:function(e,t,n){n.r(t),n.d(t,{Snackbar:function(){return p}});var r=n(70865),i=n(96670),s=n(52322),a=n(44417),o=n(44699),c=n(3081),u=n(93181),l=n(75),d=n(59877),m=function(e){var t=e.status,n=e.isSizeLimitWarning,r=e.alertLabels;return n?r.sizeLimitWarning:t===o.MR?r.addToCartSuccess:r.addToCartWarning},p=function(e){var t=e.isOpen,n=e.isSizeLimitWarning,p=e.addToCartStatus,f=e.snackBarActionAllowed,v=e.handleSnackbarClose,g=(0,d.$G)(l.jey).t,S=(0,u.W)(),h=p.status,b=p.error,C={addToCartSuccess:g("common:actions_added_to_cart"),addToCartWarning:g("notifications:label_add_to_cart_failure"),sizeLimitWarning:g("ent:cart_size_limit_warning",{LIMIT:c.fv}),viewActionLabel:g("common:actions_view")},w=m({status:h,isSizeLimitWarning:void 0!==n&&n,alertLabels:C}),T={onClick:S,label:C.viewActionLabel};return(0,s.jsx)(a.Y,(0,i.Z)((0,r.Z)({},p.status===o.MR&&(void 0===f||f)&&{alertAction:T}),{alertSeverity:h,error:b,handleSnackbarClose:v,isOpen:t&&!!h,message:w}))}},51852:function(e,t,n){n.d(t,{J:function(){return g},t:function(){return S}});var r=n(98788),i=n(87394),s=n(5163),a=n(52322),o=n(10185),c=n(52309),u=n(2784),l=n(70865),d=n(26297),m=n(25237),p=n.n(m)()(function(){return Promise.all([n.e(31373),n.e(27310),n.e(81503),n.e(88629),n.e(24394),n.e(28903),n.e(88103),n.e(24502),n.e(81635),n.e(79637),n.e(63241),n.e(67127),n.e(31077),n.e(25189)]).then(n.bind(n,73605)).then(function(e){return e.AddToCartDialog})},{loadableGenerated:{webpack:function(){return[73605]}},ssr:!1}),f=function(e){var t=e.isActive,n=(0,d.Z)(e,["isActive"]);return(0,c.B)(t)&&(0,a.jsx)(p,(0,l.Z)({isActive:t},n))},v=n(26625),g=function(e){var t=e.addToCartStatus,n=e.assets,r=e.eventLabel,i=e.gridItems,s=e.isAddToCartDialogActive,o=e.isPrimary,u=e.isSnackBarOpen,l=e.isSizeLimitWarning,d=e.onAddToCart,m=e.onAlertSnackbarClose,p=e.setIsAddToCartDialogActive,g=e.pageSection,S=e.listId,h=e.snackBarActionAllowed;return(0,c.B)(n)?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(f,{assets:n,eventLabel:r,gridItems:i,isActive:s,isPrimary:o,listId:S,onAddToCart:d,pageSection:g,setIsActive:p}),(0,a.jsx)(v.Snackbar,{snackBarActionAllowed:h,addToCartStatus:t,handleSnackbarClose:m,isOpen:u,isSizeLimitWarning:l})]}):null};g.defaultProps={snackBarActionAllowed:!0,addToCartStatus:{status:"",error:void 0},assets:null,gridItems:null};var S=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=n.withOptimisticUpdate,c=void 0===a||a,l=n.setIsVerifying,d=n.snackBarActionAllowed,m=void 0===d||d,p=(0,i.Z)((0,u.useState)(!1),2),f=p[0],v=p[1],S=(0,i.Z)((0,u.useState)(!1),2),h=S[0],b=S[1],C=(0,i.Z)((0,u.useState)(null),2),w=C[0],T=C[1],A=(0,i.Z)((0,u.useState)(null),2),y=A[0],x=A[1],k=(0,i.Z)((0,u.useState)(!0),2),L=k[0],_=k[1],Z=(0,i.Z)((0,u.useState)(null),2),P=Z[0],I=Z[1],j=(0,i.Z)((0,u.useState)(null),2),V=j[0],z=j[1],O=(0,i.Z)((0,u.useState)(null),2),F=O[0],H=O[1],M=(0,o.gV)(),G=M.addCartItems,D=M.moveToSaveForLater,R=M.moveToPrimary,B=M.addToCartStatus,U=M.isSizeLimitWarning,E=M.notAddedSelectVideos;(0,u.useEffect)(function(){return function(){return T(null)}},[]);var N=(0,u.useCallback)(function(e){var t=e.assets,n=e.eventLabel,r=e.licenseId,i=e.formatType,s=e.licensePrice,a=e.cart,o=e.mutateCart,u=e.notAddedSelectVideoIds,d=e.pageSection,m=e.listId;null==l||l(!0),b(!0),G({cart:a,eventLabel:n,gridItems:y,isPrimary:L,itemsToAdd:t||w,licenseId:r,formatType:i,licensePrice:s,mutateCart:o,notAddedSelectVideoIds:u,withOptimisticUpdate:c,pageSection:d,listId:m})},[w,y,G,L,l,c]),W=(0,u.useCallback)((e=(0,r.Z)(function(e){var t,n,r,i;return(0,s.__generator)(this,function(s){switch(s.label){case 0:t=e.itemsToMove,n=e.primaryCart,r=e.mutatePrimaryCart,i=e.mutateSavedForLaterCart,null==l||l(!0),b(!0),s.label=1;case 1:return s.trys.push([1,3,,4]),[4,R({itemsToMove:t,primaryCart:n,mutatePrimaryCart:r,mutateSavedForLaterCart:i})];case 2:return s.sent(),[3,4];case 3:return s.sent(),null==l||l(!1),[3,4];case 4:return[2]}})}),function(t){return e.apply(this,arguments)}),[R,l]),q=(0,u.useCallback)((t=(0,r.Z)(function(e){var t,n,r,i,a;return(0,s.__generator)(this,function(s){switch(s.label){case 0:t=e.itemsToMove,n=e.primaryCart,r=e.savedForLaterCart,i=e.mutatePrimaryCart,a=e.mutateSavedForLaterCart,null==l||l(!0),b(!0),s.label=1;case 1:return s.trys.push([1,3,,4]),[4,D({itemsToMove:t,primaryCart:n,savedForLaterCart:r,mutatePrimaryCart:i,mutateSavedForLaterCart:a})];case 2:return s.sent(),[3,4];case 3:return s.sent(),null==l||l(!1),[3,4];case 4:return[2]}})}),function(e){return t.apply(this,arguments)}),[D,l]);return{addToCartViewsProps:(0,u.useMemo)(function(){return{addToCartStatus:B,assets:w,eventLabel:F,gridItems:y,isAddToCartDialogActive:f,isPrimary:L,isSizeLimitWarning:U,isSnackBarOpen:h,onAddToCart:N,onAlertSnackbarClose:function(){return b(!1)},notAddedSelectVideos:E,setIsAddToCartDialogActive:v,pageSection:P,listId:V,snackBarActionAllowed:m}},[w,y,B,F,V,P,f,L,U,h,E,N,m]),addToCartViewsHandler:(0,u.useCallback)(function(e){var t=e.assets,n=e.eventLabel,r=e.gridItems,i=e.isMoveToPrimaryCart,s=e.isMoveToSavedForLaterCart,a=e.isPrimaryCart,o=e.mutatePrimaryCart,c=e.mutateSavedForLaterCart,u=e.primaryCart,l=e.savedForLaterCart,d=e.withDialog,m=e.licenseId,p=e.licensePrice,f=e.pageSection,g=e.listId;if(T(t),_(void 0===a||a),I(f),H(n),z(g),r&&x(r),void 0!==i&&i){W({itemsToMove:t,primaryCart:u,mutatePrimaryCart:o,mutateSavedForLaterCart:c});return}if(void 0!==s&&s){q({itemsToMove:t,primaryCart:u,savedForLaterCart:l,mutatePrimaryCart:o,mutateSavedForLaterCart:c});return}void 0===d||d?v(!0):N({assets:t,eventLabel:n,cart:u,licenseId:m,licensePrice:p,mutateCart:o,pageSection:f})},[N,W,q]),AddToCartViews:g}}},71728:function(e,t,n){n.d(t,{r:function(){return P}});var r=n(98788),i=n(87394),s=n(5163),a=n(15111),o=n(30337),c=n(23747),u=n(4686),l=n(55112),d=n(2784),m=n(52322),p=n(70865),f=n(26297),v=n(52309),g=n(25237),S=n.n(g),h=S()(function(){return Promise.all([n.e(31373),n.e(88103),n.e(24502),n.e(8465),n.e(10185),n.e(67127),n.e(34240)]).then(n.bind(n,59066)).then(function(e){return e.CompLicensingDialog})},{loadableGenerated:{webpack:function(){return[59066]}},ssr:!1}),b=function(e){var t=e.isOpen,n=(0,f.Z)(e,["isOpen"]);return(0,v.B)(t)&&(0,m.jsx)(h,(0,p.Z)({isOpen:t},n))},C=S()(function(){return Promise.all([n.e(31373),n.e(27310),n.e(81503),n.e(20932),n.e(71265),n.e(73399),n.e(79637),n.e(63241),n.e(18858)]).then(n.bind(n,92637)).then(function(e){return e.CompLicensingDrawer})},{loadableGenerated:{webpack:function(){return[92637]}},ssr:!1}),w=function(e){var t=e.isOpen,n=(0,f.Z)(e,["isOpen"]);return(0,v.B)(t)&&(0,m.jsx)(C,(0,p.Z)({isOpen:t},n))},T=S()(function(){return n.e(92986).then(n.bind(n,92986)).then(function(e){return e.CompLicensingSnackbar})},{loadableGenerated:{webpack:function(){return[92986]}},ssr:!1}),A=function(e){var t=e.isOpen,n=(0,f.Z)(e,["isOpen"]);return(0,v.B)(t)&&(0,m.jsx)(T,(0,p.Z)({isOpen:t},n))},y=n(26710),x=n(75),k=n(59877),L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.licensingError,n=(0,k.$G)(x.clK).t;return{cancel:n("common:actions_cancel"),downloadComp:n("common:actions_download_comp"),enterpriseCompLicense:n("ent:license_enterprise_comp"),genericErrorMessage:n("ent:license_now_error_message"),licensingError:(0,y.j2)({error:void 0===t?{}:t,t:n}),licenseSuccess:n("ent:confirmation_alert_message"),licenseFormLabels:{buttonLabel:n("common:actions_download_comp"),disclaimer:(0,m.jsx)(k.cC,{i18nKey:"ent:comp_disclaimer",ns:x.clK,components:{bold:(0,m.jsx)("strong",{})}}),addMetadataToAsset:n("ent:add_metadata_to_asset_comp"),metadataFound:n("ent:previous_metadata_found_comp"),metadataMissing:n("ent:previous_metadata_missing_comp"),title:n("ent:add_metadata_to_comp")}}},_=function(e){var t=e.assets,n=e.compLicensingHandler,r=e.isDialogOpen,i=e.isDrawerOpen,s=e.isLicensing,a=e.isSnackBarOpen,o=e.licensingError,c=e.onDialogClose,u=e.onDrawerClose,l=e.onSnackbarClose,d=e.selectedAssetSize,p=e.setSelectedAssetSize,f=e.settingsData,v=L({licensingError:o});return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(b,{assets:t,isOpen:r,onClose:c,onLicense:n,labels:v,isLicensing:s,selectedAssetSize:d,setSelectedAssetSize:p,settingsData:f}),(0,m.jsx)(w,{assets:t,isLicensing:s,isOpen:i,labels:v,onClose:u,onLicense:n,selectedAssetSize:d}),(0,m.jsx)(A,{isOpen:a,message:v.licensingError,onClose:l})]})};_.defaultProps={assets:null,isDialogOpen:!1,isDrawerOpen:!1,isLicensing:!1,isSnackBarOpen:!1,licensingError:{},selectedAssetSize:"",settingsData:{}};var Z=n(73551),P=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},m=n.allowMetadata,p=void 0===m||m,f=(0,i.Z)((0,d.useState)(null),2),v=f[0],g=f[1],S=(0,i.Z)((0,d.useState)(""),2),h=S[0],b=S[1],C=(0,i.Z)((0,d.useState)(""),2),w=C[0],T=C[1],A=(0,i.Z)((0,d.useState)(!1),2),y=A[0],x=A[1],k=(0,i.Z)((0,d.useState)(!1),2),L=k[0],P=k[1],I=(0,i.Z)((0,d.useState)(!1),2),j=I[0],V=I[1],z=(0,c.Zo)(),O=z.isLicensing,F=z.licensingError,H=z.licensingStatus,M=z.setLicensingStatus,G=z.licensingAssetsHandler,D=(0,o.U)(),R=(0,l.B)().data,B=(0,u.h)(R),U=(0,d.useCallback)((e=(0,r.Z)(function(e){var t,n,r,i,a,o,c,u,l,d,m,p;return(0,s.__generator)(this,function(s){switch(s.label){case 0:n=void 0===(t=e.assets)?[]:t,r=e.assetSize,i=e.eventLabel,a=e.format,o=e.metadata,c=e.pageSection,u=e.listId,b(n[0].id),l=!1,s.label=1;case 1:return s.trys.push([1,6,,7]),[4,(0,Z.qP)({assets:n,assetSize:r,format:a,metadata:o,selectedAssetSize:w})];case 2:return[4,G(s.sent())];case 3:if(d=s.sent().data,(0,Z.bj)(n)&&1===n.length)return[3,5];return p=(0,Z.aT)(n)?B:void 0,[4,(0,Z.tX)({assets:n,compSize:p,licensedContent:null==d?void 0:null===(m=d.meta)||void 0===m?void 0:m.licensedContent})];case 4:s.sent(),D({assets:n,eventLabel:i,isRedownload:!1,isQuickDownload:!1,isPaid:!1,isComp:!0,pageSection:c,listId:u}),s.label=5;case 5:return[3,7];case 6:return l=s.sent(),[3,7];case 7:return b(""),l&&!L&&V(!0),[2,{error:l}]}})}),function(t){return e.apply(this,arguments)}),[L,B,G,D,w]),E=(0,d.useCallback)((t=(0,r.Z)(function(e){var t,n,r,i,o,c,u;return(0,s.__generator)(this,function(s){return(t=e.assets,n=e.assetSize,r=e.format,i=e.eventLabel,o=e.metadata,c=e.pageSection,u=e.listId,g(t),M(""),!y&&(0,a.U0)(t))?(x(!0),[2,Promise.resolve(null)]):!L&&(null==R?void 0:R.requireMetadataForComp)&&!o&&p?(n&&T(n),P(!0),[2,Promise.resolve(null)]):[2,U({assets:t,assetSize:n,eventLabel:i,format:r,metadata:o,pageSection:c,listId:u})]})}),function(e){return t.apply(this,arguments)}),[p,U,y,L,R,M]),N=(0,d.useMemo)(function(){return{assets:v,compLicensingHandler:E,compLicensingRequest:U,isDialogOpen:y,isDrawerOpen:L,isLicensing:O,isSnackBarOpen:j,licensingError:F,onDialogClose:function(){return x(!1)},onDrawerClose:function(){return P(!1)},onSnackbarClose:function(){return V(!1)},selectedAssetSize:w,setSelectedAssetSize:T,settingsData:R}},[v,E,U,y,L,O,j,F,w,R]);return{assetsToLicense:v,compLicensingHandler:E,compLicensingProps:N,CompLicensingViews:_,licensingAssetId:h,licensingStatus:H}}},73551:function(e,t,n){n.d(t,{SN:function(){return w},aT:function(){return L},bj:function(){return k},qP:function(){return x},tX:function(){return T}});var r,i,s,a,o=n(98788),c=n(47842),u=n(70865),l=n(96670),d=n(5163),m=n(68245),p=n(81740),f=n(39232),v=n(94054),g=n(78753),S=n(61765),h=n(44297),b=n(19819),C=n(67661),w=(r=(0,o.Z)(function(e){var t,n,r,i,s,a,o,c,u,l,m,f,v,S,b,w;return(0,d.__generator)(this,function(d){switch(d.label){case 0:if(t=e.assets,n=e.compSize,r=e.licensedContent,i=e.supplementalUrlType,a=(s=r[0]||{}).downloadUrl,o=s.contentId,c=s.contentFormat,u=s.contentSize,(null==(l=s.supplementalUrls)?void 0:l.length)&&i)return[2,void 0===(m=(l.find(function(e){return e.type===i})||{}).url)?a:m];if(f=t.find(function(e){return e.id===o})||{},v=(0,h.Tp)(f),b=(S=(0,g.G)({assets:t,contentId:o})).filename,!S.shouldUpdateFilename)return[3,4];d.label=1;case 1:return d.trys.push([1,3,,4]),[4,C.uS.post((0,p.u8)().formattedUrl,{data:[{media_id:f.id,media_type:v,comp_size:n,media_size:u,media_format:c,filename:b}]})];case 2:return[2,((null==(w=d.sent().data)?void 0:w.data[0])||{}).attributes.url||a];case 3:return d.sent(),[2,a];case 4:return[2,a]}})}),function(e){return r.apply(this,arguments)}),T=(i=(0,o.Z)(function(e){var t,n,r,i,s,a,o,c,u,l;return(0,d.__generator)(this,function(d){switch(d.label){case 0:if(n=void 0===(t=e.assets)?[]:t,r=e.compSize,i=e.assetSize,!((a=void 0===(s=e.licensedContent)?[]:s).length>1))return[3,2];return o=(0,g.r)({assets:n,licensedContent:a}),c=(0,m.e)({urlParams:{filename:o.bundleFilename}}).formattedUrl,[4,C.jl.post(c,o.content)];case 1:return u=d.sent().data.public_url,[2,(0,b.A_)(u)];case 2:return[4,w({assets:n,compSize:r,assetSize:i,licensedContent:a})];case 3:return l=d.sent(),[2,(0,b.A_)(l)]}})}),function(e){return i.apply(this,arguments)}),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map(function(e){var t=(0,S.Fy)({asset:e});return(0,l.Z)((0,u.Z)({},e),{assetType:t,licenseId:v._rW[t]})})},y=(s=(0,o.Z)(function(){var e;return(0,d.__generator)(this,function(t){switch(t.label){case 0:e=(0,p.d0)().url,t.label=1;case 1:return t.trys.push([1,3,,4]),[4,C.uS.get(e).then(function(e){return null==e?void 0:e.data})];case 2:return[2,t.sent().reduce(function(e,t){return(0,l.Z)((0,u.Z)({},e),(0,c.Z)({},t.name,"-"))},{})];case 3:return t.sent(),[2,{}];case 4:return[2]}})}),function(){return s.apply(this,arguments)}),x=(a=(0,o.Z)(function(){var e,t,n,r,i,s,a,o=arguments;return(0,d.__generator)(this,function(c){switch(c.label){case 0:if(t=(e=o.length>0&&void 0!==o[0]?o[0]:{}).assets,n=e.assetSize,r=e.format,i=e.metadata,s=e.selectedAssetSize,a=i)return[3,2];return[4,y()];case 1:a=c.sent(),c.label=2;case 2:return[2,{assets:A(t),format:r||"",licenseMetadata:a,licensingType:v.dWU,selectedAssetSize:n||s||"",isVideoComp:!0}]}})}),function(){return a.apply(this,arguments)}),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return(0,S.qw)({asset:e[0]||{}})===f.j0},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[f.pV,f.k4,f.ox].includes((0,S.qw)({asset:e[0]||{}}))}},78753:function(e,t,n){n.d(t,{G:function(){return c},r:function(){return u}});var r=n(44297),i=n(12847),s="shutterstock",a="shutterstock_editorial",o=function(e){var t=e.asset;return(0,r.PD)(t)?{prefix:"shutterstock_offset",shouldUpdateFilename:!0}:(0,r.tS)({asset:t})?{prefix:a,shouldUpdateFilename:!1}:{prefix:s,shouldUpdateFilename:!1}},c=function(e){var t=e.assets,n=e.contentId,r=o({asset:t.find(function(e){return e.id===n})||{}}),i=r.prefix,s=r.shouldUpdateFilename;return{filename:"".concat(i,"_").concat(n),shouldUpdateFilename:s}},u=function(e){var t=e.assets,n=void 0===t?[]:t,o=e.licensedContent,u=n.every(function(e){return(0,r.tS)({asset:e})}),l=(void 0===o?[]:o).map(function(e){var t=e.contentId,r=e.downloadUrl,i=e.contentFormat,s=c({assets:n,contentId:t}).filename,a=r.split("/").pop().split(".").pop();return(a.length>4||a.length<2)&&(a=i),{filename:"".concat(s,".").concat(a),url:r}}),d=(0,i.zs)();return{bundleFilename:"".concat(u?a:s,"_").concat(d,".zip"),content:l}}},80104:function(e,t,n){n.d(t,{S:function(){return a}});var r=n(47842),i=n(70865),s=n(7297),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.trackingId,n=e.headers,a=void 0===n?{}:n;if(t||Object.keys(a).length)return{headers:(0,i.Z)({},a,t&&(0,r.Z)({},s.HC,t))}}},46848:function(e,t,n){n.d(t,{H:function(){return i}});var r=n(80353),i=function(e){var t,n=e.user;return null==n?void 0:null===(t=n.roles)||void 0===t?void 0:t.includes(r.qy)}},38849:function(e,t,n){n.d(t,{q:function(){return s}});var r=n(39232),i=n(44297),s=function(e){var t=e.assets,n=void 0===t?[]:t;return(0,i.N3)(null==n?void 0:n[0])?r.nX:(0,i.so)(null==n?void 0:n[0])?r.A7:(0,i.vV)(null==n?void 0:n[0])?r.ox:(0,i.Tp)(null==n?void 0:n[0])}},86358:function(e,t,n){n.d(t,{A:function(){return s}});var r=n(39232),i=n(23583),s=function(e){var t=e.assetType,n=e.contentTier,s=void 0===n?0:n,a=e.subscriptions;if(!a||!t)return{};switch(t){case r.nX:return{compSubscriptions:a.editorialImageCompSubscriptions,subscriptions:(0,i.c)({assetType:t,subscriptions:a.editorialImageSubscriptions,contentTier:s})};case r.A7:return{compSubscriptions:a.editorialVideoCompSubscriptions,subscriptions:(0,i.c)({assetType:t,subscriptions:a.editorialVideoSubscriptions,contentTier:s})};case r.pX:return{compSubscriptions:a.videoCompSubscriptions,subscriptions:(0,i.c)({assetType:t,subscriptions:a.videoSubscriptions,contentTier:s})};case r.xF:case r.j0:return{compSubscriptions:a.musicCompSubscriptions,subscriptions:(0,i.c)({assetType:t,subscriptions:a.musicSubscriptions,contentTier:s})};case r.tn:return{compSubscriptions:a.sfxCompSubscriptions,subscriptions:(0,i.c)({assetType:t,subscriptions:a.sfxSubscriptions,contentTier:s})};case r.k4:default:return{compSubscriptions:a.imageCompSubscriptions,subscriptions:(0,i.c)({assetType:t,subscriptions:a.imageSubscriptions,contentTier:s})}}}},23583:function(e,t,n){n.d(t,{c:function(){return c}});var r=n(50930),i=n(24861),s=n(51455),a=function(e){var t=e.item;return e.uniqueSubsAcc.find(function(e){var n=e.redeemableFor,r=e.name;return t.redeemableFor===n||t.name&&t.name===r})},o=function(e){var t=e.subscriptionToUse,n=e.licenseName,r=null==t?void 0:t.currentLicenses;return!!r&&r.length&&!(null==r?void 0:r.find(function(e){return e.redeemableFor===(null==n?void 0:n.replace("/_unlimited/",""))}))},c=function(e){var t,n=e.subscriptions,c=void 0===n?[]:n,u=e.contentTier,l=e.assetType;return(t=c.reduce(function(e,t){var n=t.redeemableFor||t.name,i=(0,s.$)({subscriptions:c,licenseName:n,contentTier:u,assetType:l});return!i||o({subscriptionToUse:i,licenseName:n})||a({item:t,uniqueSubsAcc:e})?e:(0,r.Z)(e).concat([i])},[])).every(function(e){var t=e.activityTracking,n=e.creditType,r=e.priceAsAbsolute;return t===i.nm&&n===i.vh&&!!r})?t.sort(function(e,t){var n=e.priceAsAbsolute,r=(void 0===n?{}:n).price,i=t.priceAsAbsolute,s=(void 0===i?{}:i).price;return(void 0===s?0:s)-(void 0===r?0:r)}):t.sort(function(e,t){return t.creditPrice-e.creditPrice})}},4686:function(e,t,n){n.d(t,{h:function(){return s}});var r=n(46848),i=n(43110),s=function(e){var t=(0,i.jy)().data;return(0,r.H)({user:t})?null==e?void 0:e.compSizeImage:null==e?void 0:e.compSizeSubImage}},43012:function(e,t,n){n.d(t,{GB:function(){return c}});var r=n(75),i=n(59877),s=n(2784),a=n(9823),o="ent:license_",c=function(){var e=(0,i.$G)(r.PRh).t,t=(0,a.D)().isBrandSstk;return(0,s.useCallback)(function(){var n,r,i,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=s.licenseName,c=s.subscription;return(a&&(n="".concat(o).concat(null==a?void 0:a.replace(/_unlimited/,""))),c&&(t&&(n="".concat("ecomm:license_").concat(null===(r=c.product)||void 0===r?void 0:r.name)),!t&&c.redeemableFor&&(n="".concat(o).concat(null===(i=c.redeemableFor)||void 0===i?void 0:i.replace(/_unlimited/,"")))),n)?e(n):""},[t,e])}},93181:function(e,t,n){n.d(t,{W:function(){return u}});var r=n(70865),i=n(96670),s=n(9823),a=n(5632),o=n(2784),c=n(41273),u=function(){var e=(0,c.k)(),t=(0,s.D)().isBrandSstk,n=(0,a.useRouter)();return(0,o.useCallback)(function(){if(t){var s,a;null===(s=window.NREUM)||void 0===s||null===(a=s.addPageAction)||void 0===a||a.call(s,"UP3-1623 assign useCartRedirect cartHref to href",(0,i.Z)((0,r.Z)({},window.location||{}),{cartHref:e,isBrandSstk:t})),window.location.href=e}else n.push(e)},[e,t,n])}},51876:function(e,t,n){n.d(t,{lB:function(){return b},Ws:function(){return C},_6:function(){return w}});var r=n(70865),i=n(96670),s=n(66358),a=n(39232),o=n(20567),c=n(29510),u=n(68533),l=n(9823),d=n(47842),m=n(81740),p=n(7297),f=n(67661),v=n(9009),g=n(3255),S=n(43110),h=function(e){var t=e.queryParams,n=e.page,r=[a.X2,a.pV,a.ox].includes({imageType:t.imageType}.imageType),i=(0,S.jy)(),s=i.data,o=i.isLoading,c="studio-api/".concat(n,"/resource-personalization"),u=(0,g.ZP)(s&&r&&(0,m._c)({queryParams:t}).formattedUrl,function(e){return f.uS.get(e,{headers:(0,d.Z)({},p.jD,c)}).then(function(e){var t;return{items:(0,v.O)(e.data)||[],meta:(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.meta)||{}}})}),l=u.data,h=u.isLoading;return{data:null==l?void 0:l.items,meta:null==l?void 0:l.meta,isLoading:h||o}},b="asset-details-page",C="search-personalized-page",w=function(e){var t=e.asset,n=t.id,d=t.imageType,m=e.limit,p=void 0===m?o._P:m,f=e.page,v=(0,c.PE)(),g=v.locale,S=v.region,b=(0,u.Y)().getSearchContext,C=(0,l.D)().isBrandEnterprise,w=((null==b?void 0:b())||{}).search_term,T=RegExp("^id:*").test(w);return h({queryParams:(0,i.Z)((0,r.Z)({country:S,imageType:d||a.pV,mediaId:n,limit:p,locale:g},!T&&{searchTerm:w}),{brand:C?s.Ez7:s.MkF}),page:f})}},21985:function(e,t,n){n.d(t,{k:function(){return r}});var r=function(e){return e&&"string"==typeof e?"".concat(e.charAt(0).toUpperCase()).concat(e.slice(1)):""}}}]);
//# sourceMappingURL=51410-19ab3e2dfdad5d34.js.map