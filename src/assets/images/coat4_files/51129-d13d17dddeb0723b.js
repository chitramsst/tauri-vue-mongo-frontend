"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[51129,65257,80710,32098],{80710:function(e,t,n){n.d(t,{VL:function(){return G}});var i,r=n(87394),o=n(52322),a=n(33301),s=n(7197),c=n(44297),l=n(59979),u=n(47875),d=n(52309),v=n(98788),f=n(47842),p=n(70865),m=n(5163),h=n(81740),g=n(44699),C=n(39232),y=n(32456),w=n(7297),b=n(29292),I=n(86795),S=n(15111),_=n(18027),k=n(12787),T=n(9823),Z=n(776),x=n(67661),A=n(9009),P=n(2784),U=n(3255),D=n(52494),R=function(e){var t=e.queryParams;return(0,h.nS)({queryParams:t}).formattedUrl},O=function(e){var t=e.assetId,n=e.asset,i=n.id,r=n.tier,o=n.src,a=n.aspect,s=n.width,c=n.height;return{metadata:{notes:{media_id:t,alpha_num_id:i,rex_id:i,media_type:C.gP,tier:void 0===r?10:r,media:{aspect:a,width:s,height:c,url:o}}}}},M=(i=(0,v.Z)(function(e){var t,n,i,r,o,a,s,l,u,d,v,f,p;return(0,m.__generator)(this,function(m){switch(m.label){case 0:if(t=e.isRexEditorial,n=e.collectionId,i=e.verificationCode,r=e.setAsCover,o=e.firstAsset,a=e.collectionType,(l=(0,c.A8)(o))!==C.VT)return[2];return u={id:n,verificationCode:i,collectionType:a},d=(0,h.Yz)({queryParams:u}).formattedUrl,[4,x.uS.get(d).then(function(e){return(0,A.O)(e.data)||{}})];case 1:if(null==(v=m.sent())?void 0:null===(s=v.coverItem)||void 0===s?void 0:s.id)return[3,3];return f=(0,c.OP)({asset:o,isRexEditorial:t}),p=(0,I.Q)({collectionId:n,mappedAssetType:l,assetId:f}),[4,r({collection:{id:n},mediaItem:{id:p}})];case 2:m.sent(),m.label=3;case 3:return[2]}})}),function(e){return i.apply(this,arguments)}),j=function(){var e,t=(0,r.Z)((0,P.useState)({status:"",error:void 0}),2),n=t[0],i=t[1],o=(0,r.Z)((0,P.useState)(""),2),a=o[0],s=o[1],l=(0,r.Z)((0,P.useState)(""),2),u=l[0],d=l[1],A=(0,k.J)(),j=(0,D.w)().setAsCover,L=(0,T.D)().isBrandSstk,z=(0,Z.yh)().analytics,E=(0,b.UM)(z),V=(0,U.kY)().mutate;return{add:(0,P.useCallback)((e=(0,v.Z)(function(e){var t,n,r,o,a,l,u,v,b,k,T,Z,P,U,D,z,q,B,N,H,J,F,G;return(0,m.__generator)(this,function(m){switch(m.label){case 0:t=e.assets,n=e.assetType,r=e.gridItems,o=e.groupedOptions,a=e.id,l=e.title,u=e.verificationCode,v=e.pageSection,b=e.listId,k=(0,S.wZ)({assetType:n,isBrandSstk:L}),m.label=1;case 1:if(m.trys.push([1,6,7,9]),i({status:g.MR,error:void 0}),T=(0,c.Xo)(n),Z=a,P=u,o&&o.length&&(U=o.find(function(e){return e.title===l}))&&(Z=U.id,P=U.verificationCode),Z)return[3,3];return D=(0,h.A6)().formattedUrl,z={data:{attributes:{title:l,collectionType:k,isPublic:!1},type:y.Ul}},[4,x.uS.post(D,z)];case 2:B=(q=m.sent().data).id,N=q.attributes.verificationCode,Z=B,P=N,m.label=3;case 3:return H={data:t.map(function(e){var t=(0,c.OP)({asset:e,isRexEditorial:T}),n=(0,c.A8)(e);return(0,p.Z)({type:y.A8,id:(0,I.Q)({collectionId:Z,mappedAssetType:n,assetId:t})},n===C.VT&&O({assetId:t,asset:e}))})},J=(0,h.mp)({urlParams:{id:Z},queryParams:{isRexEditorial:T}}).formattedUrl,F=(0,_.y)(E),[4,x.uS.post(J,H,F?{headers:(0,f.Z)({},w.as,F)}:void 0)];case 4:return m.sent(),[4,M({isRexEditorial:T,collectionId:Z,verificationCode:P,setAsCover:j,firstAsset:t[0],collectionType:k})];case 5:return m.sent(),A({collectionId:Z,collectionName:l,gridItems:r,assets:t,pageSection:v,listId:b}),s(Z),d(P),[3,9];case 6:return G=m.sent(),i({status:g.cM,error:G}),[3,9];case 7:return[4,V(R({queryParams:{"filter[type]":k}}))];case 8:return m.sent(),[7];case 9:return[2]}})}),function(t){return e.apply(this,arguments)}),[L,E,j,A,V]),collectionId:a,setStatus:i,status:n,verificationCode:u}},L=n(43110),z=n(92405),E=n(25237),V=n.n(E),q=n(26297),B=V()(function(){return Promise.all([n.e(31373),n.e(27310),n.e(81503),n.e(88629),n.e(24394),n.e(28903),n.e(33315),n.e(32826),n.e(79637),n.e(63241),n.e(87022)]).then(n.bind(n,92805)).then(function(e){return e.CollectionModal})},{loadableGenerated:{webpack:function(){return[92805]}},ssr:!1}),N=function(e){var t=e.isOpen,n=(0,q.Z)(e,["isOpen"]);return(0,d.B)(t)&&(0,o.jsx)(B,(0,p.Z)({isOpen:t},n))},H=V()(function(){return n.e(25095).then(n.bind(n,25095)).then(function(e){return e.LazyAddToCollectionModal})},{loadableGenerated:{webpack:function(){return[25095]}},ssr:!1}),J=V()(function(){return n.e(8880).then(n.bind(n,8880)).then(function(e){return e.Snackbar})},{loadableGenerated:{webpack:function(){return[8880]}},ssr:!1}),F=function(e){var t=e.assets,n=e.assetType,i=e.collectionId,r=e.collectionTitle,s=e.gridItems,c=e.isDialogActive,l=e.isSnackBarOpen,u=e.onAddToCollections,v=e.onAlertSnackbarClose,f=e.onAddToCollectionsComplete,p=e.redirectToCDPAction,m=e.setIsDialogActive,h=e.showCopyToModalTitle,g=e.status,C=e.verificationCode,y=e.pageSection,w=(0,z.p)(a.vb),b=(0,z.p)(a.pG),I=(0,d.B)(t),S=(0,P.useCallback)(function(){return m(!1)},[m]);return I?w||b?(0,o.jsx)(H,{onClose:S,isOpen:c,items:t,onAddToCollectionsComplete:f,pageSection:y}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(N,{assets:t,assetType:n,collectionId:i,gridItems:s,isOpen:c,onAddToCollections:u,setIsDialogActive:m,showCopyToModalTitle:h,pageSection:y}),(0,o.jsx)(J,{assetType:n,collectionId:i,collectionTitle:r,isOpen:l,onAlertSnackbarClose:v,redirectToCDPAction:p,status:g,verificationCode:C})]}):null};F.defaultProps={assetType:"",assets:null,gridItems:null,onAddToCollectionsComplete:void 0,redirectToCDPAction:{}};var G=function(e){var t=e.initialAssetType,n=(0,r.Z)((0,P.useState)(!1),2),i=n[0],o=n[1],a=(0,r.Z)((0,P.useState)(!1),2),d=a[0],v=a[1],f=(0,r.Z)((0,P.useState)(!1),2),p=f[0],m=f[1],h=(0,r.Z)((0,P.useState)(""),2),g=h[0],C=h[1],y=(0,r.Z)((0,P.useState)(null),2),w=y[0],b=y[1],I=(0,r.Z)((0,P.useState)(t),2),S=I[0],_=I[1],k=(0,r.Z)((0,P.useState)(null),2),T=k[0],Z=k[1],x=(0,r.Z)((0,P.useState)(null),2),A=x[0],U=x[1],D=(0,r.Z)((0,P.useState)(null),2),R=D[0],O=D[1],M=(0,L.B)(),z=(0,l.cM)(),E=(0,u.L)(),V=(0,r.Z)((0,P.useState)({shouldHandleRedirect:!1,redirectToCollectionDetailsPage:E}),2),q=V[0],B=V[1],N=j(),H=N.add,J=N.status,G=N.collectionId,K=N.verificationCode;(0,P.useEffect)(function(){return function(){return b(null)}},[]),(0,P.useEffect)(function(){return function(){return _("")}},[]);var Y=(0,P.useCallback)(function(e){var t=e.formattedAssets,n=e.gridItems,i=e.isCopyToCollection,r=e.mappedAssetType,a=e.redirectToCollectionDetailsPage,s=e.pageSection,c=e.listId;_(r),b(t),U(s),O(c),i&&m(!0),n&&Z(n),a&&B({shouldHandleRedirect:!0,redirectToCollectionDetailsPage:a}),o(!0)},[]);return(0,P.useEffect)(function(){(0,s.DZ)({showAddToCollectionModal:Y,isLoggedInUser:M})},[M,Y]),{addToCollectionViewsProps:(0,P.useMemo)(function(){return{assets:w,pageSection:A,assetType:S,collectionId:G,collectionTitle:g,gridItems:T,isDialogActive:i,isSnackBarOpen:d,onAddToCollections:function(e){var t=e.id,n=e.title,i=e.verificationCode,r=e.groupedOptions,a=e.pageSection;return C(n),o(!1),v(!0),H({assetType:S,assets:w,gridItems:T,groupedOptions:r,id:t,title:n,verificationCode:i,pageSection:a||A,listId:R})},onAlertSnackbarClose:function(){return v(!1)},redirectToCDPAction:q,setIsDialogActive:o,showCopyToModalTitle:p,status:J,verificationCode:K}},[w,T,H,R,A,S,G,g,i,d,q,p,J,K]),addToCollectionViewsHandler:(0,P.useCallback)(function(e){var t=e.assets,n=e.gridItems,i=e.isCopyToCollection,r=e.redirectToCollectionDetailsPage,o=e.pageSection,a=e.listId;if(M){var l=[].concat(t);Y({formattedAssets:l,gridItems:n,isCopyToCollection:void 0!==i&&i,mappedAssetType:(0,c.A8)(l[0]),redirectToCollectionDetailsPage:r,pageSection:o,listId:a})}else(0,s.JO)({assets:t,gridItems:n,signUpPath:z})},[M,Y,z]),AddToCollectionViews:F}}},6096:function(e,t,n){n.d(t,{b:function(){return m}});var i=n(98788),r=n(5163),o=n(52322),a=n(67550),s=n(59312),c=n(59481),l=n(44699),u=n(42405),d=n(65257),v=n(34273),f=n.n(v),p=n(2784),m=function(e){var t=e.classesProps,n=e.clickAnalyticsLabel,v=e.errorMessage,m=e.successMessage,h=e.text,g=void 0===h?"":h,C=e.tooltip,y=(0,u.D)().enqueueSnackbar,w=(0,p.useCallback)((0,i.Z)(function(){var e;return(0,r.__generator)(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,f()(g)];case 1:return t.sent(),y({message:m,alertSeverity:l.MR,isDismissible:!0}),[3,3];case 2:return(e=t.sent())&&y({message:v,alertSeverity:l.cM,error:e,isDismissible:!0}),[3,3];case 3:return[2]}})}),[y,v,m,g]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(a.Z,{display:"inline-flex",flexDirection:"column",justifyContent:"center",textAlign:"center",mx:1,children:(0,o.jsx)(s.l,{title:C,placement:"top",children:(0,o.jsx)("span",{children:(0,o.jsx)(c.h,{"aria-label":C,className:(void 0===t?{}:t).copyToClipboard,clickTrack:void 0===n?"":n,disabled:!g,onClick:function(){return w()},size:"small",children:(0,o.jsx)(d.Copy,{fontSize:"small"})})})})})})}},44417:function(e,t,n){n.d(t,{Y:function(){return d}});var i=n(87394),r=n(52322),o=n(44699),a=n(86406),s=n(25237),c=n.n(s),l=n(2784),u=c()(function(){return Promise.all([n.e(31373),n.e(27310),n.e(80246),n.e(60102)]).then(n.bind(n,83725)).then(function(e){return e.Snackbar})},{loadableGenerated:{webpack:function(){return[83725]}},ssr:!1}),d=function(e){var t=e.alertAction,n=e.alertSeverity,s=void 0===n?o.H_:n,c=e.error,d=e.handleSnackbarClose,v=void 0===d?a.Z:d,f=e.isOpen,p=e.message,m=void 0===p?"":p,h=e.onSnackbarExited,g=void 0===h?a.Z:h,C=e.isDismissible,y=(0,i.Z)((0,l.useState)(!1),2),w=y[0],b=y[1];return f||w?(0,r.jsx)(u,{alertAction:void 0===t?{}:t,alertSeverity:s,error:void 0===c?void 0:c,handleSnackbarClose:v,isOpen:f,message:m,onSnackbarExited:g,setEntered:b,isDismissible:void 0===C||C},m):null}},80353:function(e,t,n){n.d(t,{Dq:function(){return s},Hn:function(){return c},Uw:function(){return r},ad:function(){return a},qy:function(){return i},vP:function(){return o}});var i="organization_admin",r="editor",o="owner",a="viewer",s="Remove",c="none"},53044:function(e,t,n){n.d(t,{k:function(){return i}});var i=(0,n(2784).createContext)(null)},11164:function(e,t,n){n.d(t,{m:function(){return o}});var i=n(2784),r=n(53044),o=function(){return(0,i.useContext)(r.k)||{}}},7197:function(e,t,n){n.d(t,{DZ:function(){return s},JO:function(){return a}});var i=n(44297),r="add_to_collection_asset",o="add_to_collection_grid_items",a=function(e){var t=e.assets,n=e.gridItems,i=e.signUpPath;window&&(t&&window.sessionStorage.setItem(r,JSON.stringify(t)),n&&window.sessionStorage.setItem(o,JSON.stringify(n)),window.location=i)},s=function(e){var t=e.showAddToCollectionModal,n=e.isLoggedInUser;if(void 0!==n){if(n){var a=window.sessionStorage.getItem(r),s=window.sessionStorage.getItem(o),c=function(e){return e&&"undefined"!==e};if(c(a)&&c(s)){var l=JSON.parse(a),u=JSON.parse(s),d=[].concat(l);t({formattedAssets:d,gridItems:u,mappedAssetType:(0,i.A8)(d[0]),isCopyToCollection:!1,redirectToCollectionDetailsPage:!1})}}window.sessionStorage.removeItem(r),window.sessionStorage.removeItem(o)}}},15111:function(e,t,n){n.d(t,{w4:function(){return w},wZ:function(){return k},U0:function(){return S},Nb:function(){return m},fg:function(){return h},E4:function(){return _},Ak:function(){return g},$m:function(){return I},WP:function(){return b}});var i,r=n(70865),o=n(96670),a=n(87394),s=n(47842),c=n(39232),l=n(32456),u=(i={},(0,s.Z)(i,c.k4,l.Zk),(0,s.Z)(i,c.Y_,l.Zk),(0,s.Z)(i,c.xF,l.Zi),(0,s.Z)(i,c.pX,l.K2),(0,s.Z)(i,c.FM,l.K2),i),d=n(80353),v=n(29292),f=n(37546),p=n(44297),m=function(e){return"Untitled"===e},h=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).items;return e&&0===e.length},g=function(e){var t=!(null==e?void 0:e.role)&&!(null==e?void 0:e.isPublic);return(null==e?void 0:e.role)===d.ad||t},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=(0,a.Z)((void 0===t?"":t).split("-"),3),i=n[1];return{id:n[2],type:i===c.j0?c.xF:i,aspect:1,src:"",previewImageUrl:""}},y=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=n.metadata,o=void 0===i?{}:i,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(o.tracking){try{e=(0,v.Be)({trackingId:null===(t=JSON.parse(o.tracking))||void 0===t?void 0:t.search})}catch(t){e=(0,v.Be)({trackingId:o.tracking})}return(0,r.Z)({search_context:e},a)}return a},w=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return(null===(e=t.mediaItem)||void 0===e?void 0:e.id)?(0,f.Sw)(t.mediaItem):n&&C(t)},b=function(e,t){return e?e.reduce(function(e,n){var i=w(n,t);return e.collectionItems.push((0,o.Z)((0,r.Z)({},n),{mediaItem:(0,o.Z)((0,r.Z)({},i),{meta:y(n,null==n?void 0:n.meta)})})),i&&e.mediaItems.push((0,o.Z)((0,r.Z)({},i),{meta:y(n,null==i?void 0:i.meta)})),e},{collectionItems:[],mediaItems:[]}):{collectionItems:e}},I=function(e){var t=e.assetType,n=e.t,i=e.totalItemCount,r=t===c.gP,o=r?"ent:collection_editorial_total_single":"feature-collections:number_".concat(c.d_[t],"_single"),a=r?"ent:collection_editorial_total_plural":"feature-collections:number_".concat(c.d_[t],"_plural");return n(1===i?o:a,{NUM_TRACKS:i})},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return!!e.find(function(e){return e.type===l.A8})},_=function(e){var t=e.assets,n=void 0===t?[]:t;switch(e.assetType){case c.xF:case c.j0:return n.some(function(e){return(0,p.O)({track:e})});case c.k4:return n.some(function(e){return(0,p.PD)(e)});default:return!1}},k=function(e){var t=e.assetType;return e.isBrandSstk?u[t]:l.sE[t]}},63256:function(e,t,n){n.d(t,{KW:function(){return f},VC:function(){return p},fp:function(){return u},lR:function(){return d},ok:function(){return m},qG:function(){return v},r8:function(){return h},vG:function(){return l}});var i=n(87394),r=n(97258),o=n(39232),a=n(31683),s=n(44297),c=[o.pX],l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:480;if(!a.n5||"string"!=typeof e||e.includes("ip=x".concat(t)))return e;try{var n=new URL(e);return n.searchParams.set("ip","x".concat(t)),n.href}catch(t){return e}},u=function(e){var t,n,i;return(null==e?void 0:e.mediaItem)?{previewImageUrl:null===(n=e.mediaItem)||void 0===n?void 0:n.previewImageUrl,previewVideoUrls:null===(i=e.mediaItem)||void 0===i?void 0:i.previewVideoUrls}:{previewImageUrl:(null==e?void 0:e.thumbImageUrl)||(null==e?void 0:null===(t=e.image)||void 0===t?void 0:t.url)||(null==e?void 0:e.previewImageUrl),previewVideoUrls:null==e?void 0:e.previewVideoUrls}},d=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:480;return(0,s.Am)(t)?l(u(t).previewImageUrl,n):t.src||(null===(e=t.image)||void 0===e?void 0:e.url)},v=function(e){return e.assetType===o.pX?"mp4":null},f=function(e){var t=e.asset;return c.includes((0,s.Tp)(t))&&!(0,s.so)(t)},p=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=(0,s.EK)(n);if((0,s.vh)(null==n?void 0:n.type))return(null==n?void 0:n.width)>1e3?"".concat(null==n?void 0:n.previewUrls[0],"?width=1000"):null==n?void 0:n.previewUrls[0];var o=i?r.bm:r.RA;return null==n?void 0:null===(e=n.displays)||void 0===e?void 0:null===(t=e[o])||void 0===t?void 0:t.src},m=function(){var e,t,n,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=(0,s.Tp)(i);return a===o.k4||a===o.zo||a===o.Nk?(null==i?void 0:null===(e=i.displays)||void 0===e?void 0:null===(t=e[r.bm])||void 0===t?void 0:t.src)||(null==i?void 0:i.src):a===o.bz?null==i?void 0:null===(n=i.imageVariants)||void 0===n?void 0:n["1500"]:a===o.xF||a===o.tn?null==i?void 0:i.previewMp3:a===o.hv?null==i?void 0:i.previewUrls[0]:null},h=function(){var e,t,n,r,o,a,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=arguments.length>1&&void 0!==arguments[1]&&arguments[1],u={width:null!==(r=null!==(n=c.width)&&void 0!==n?n:null===(e=c.mediaItem)||void 0===e?void 0:e.width)&&void 0!==r?r:0,height:null!==(a=null!==(o=c.height)&&void 0!==o?o:null===(t=c.mediaItem)||void 0===t?void 0:t.height)&&void 0!==a?a:0};if((0,s.Am)(c)&&(!u.width||!u.height)&&c.sizes){var d=Object.keys(c.sizes).find(function(e){return c.sizes[e]});u.width=d&&c.sizes[d].width||0,u.height=d&&c.sizes[d].height||0}if(l&&(!u.width||!u.height)&&c.aspectRatioCommon){var v=(0,i.Z)(c.aspectRatioCommon.split(":"),2),f=v[0],p=v[1];u.width=Number(f),u.height=Number(p)}return u}},18027:function(e,t,n){n.d(t,{y:function(){return i}});var i=function(e){return[e.subPage,e.pageType].join("-")}},12787:function(e,t,n){n.d(t,{J:function(){return s}});var i=n(29292),r=n(776),o=n(2784),a=n(68533),s=function(){var e=(0,r.yh)().analytics,t=(0,a.Y)().getSearchContext;return(0,o.useCallback)(function(n){var r=n.collectionId,o=n.collectionName,a=n.gridItems,s=n.assets,c=n.pageSection,l=n.listId;e.productAddedToWishlist({products:s.map(function(e){return(0,i.bR)({asset:e,getSearchContext:t,gridItems:a,pageSection:c})}),wishlist_id:r,wishlist_name:o,list_id:null!=l?l:""})},[e,t])}},42005:function(e,t,n){n.d(t,{w:function(){return d}});var i=n(70865),r=n(96670),o=n(29292),a=n(44297),s=n(776),c=n(5632),l=n(2784),u=n(68533),d=function(){var e=(0,s.yh)().analytics,t=(0,s.wU)(),n=(0,c.useRouter)().asPath,d=(0,u.Y)(),v=d.setSearchContext,f=d.getSearchContext;return(0,l.useCallback)(function(s){var c,l=s.asset,u=s.gridItems,d=s.eventLabel,p=s.listId,m=void 0===p?"":p;if(l.link!==n){v({trackingId:(0,o.lt)({asset:l}),term:null===(c=l.meta)||void 0===c?void 0:c.query});var h=(0,o.qI)(l);e.productClicked((0,r.Z)((0,i.Z)({asset_type:(0,a.ZZ)(l),category:(0,o.CP)(l),channels:(0,o.Ky)(l),name:(0,o.LJ)(l),product_id:h,sku:h},t?{pageSection:t,eventLabel:void 0===d?"":d}:{},u?(0,o.mq)({gridItems:u,item:l}):{},m?{list_id:m}:{}),{search_context:f(l)}))}},[e,n,f,t,v])}},30337:function(e,t,n){n.d(t,{U:function(){return l}});var i=n(70865),r=n(66358),o=n(29510),a=n(29292),s=n(776),c=n(2784),l=function(){var e=(0,s.yh)().analytics,t=(0,o.PE)().locale;return(0,c.useCallback)(function(n){var o=n.assets,s=void 0===o?[]:o,c=n.audioContext,l=n.eventLabel,u=n.licenseId,d=n.isRedownload,v=n.isQuickDownload,f=n.isPaid,p=n.isComp,m=n.pageSection,h=n.listId,g=l||p&&r.Vp1||void 0;e.productDownloaded((0,i.Z)({products:s.map(function(e){return(0,a.bR)({asset:e,shouldGetSearchContextFromAsset:!0,licenseId:u,pageSection:m})}),download_context:(0,a.OB)({asset:s[0],isComp:p,isPaid:f,isQuickDownload:v,isRedownload:d,language:t}),eventLabel:g,list_id:null!=h?h:""},c&&{audio_context:(0,i.Z)({},c)}))},[e,t])}},80578:function(e,t,n){n.d(t,{T:function(){return l}});var i=n(70865),r=n(29292),o=n(44297),a=n(776),s=n(2784),c=n(68533),l=function(){var e=(0,a.yh)().analytics,t=(0,c.Y)().getSearchContext;return(0,s.useCallback)(function(n){var a=n.asset,s=n.eventLabel,c=n.gridItems,l=n.isPreview,u=n.listId,d=n.pageSection,v=(0,r.qI)(a),f=(0,r.f_)(a),p=(0,r.Rz)(a);e.productViewed((0,i.Z)({eventLabel:s,list_id:null!=u?u:"",page_section:d,asset_type:(0,o.ZZ)(a),category:(0,r.CP)(a),channels:(0,r.Ky)(a),is_preview:l,name:(0,r.LJ)(a),product_id:v,search_context:t(a),sku:v},c&&(null==c?void 0:c.length)>1?(0,r.mq)({gridItems:c,item:a}):{},f&&{brand:f},p&&{product_line:p}))},[e,t])}},92470:function(e,t,n){n.d(t,{z:function(){return o}});var i=n(2784),r=n(80578),o=function(e){var t=e.asset,n=e.showErrorPageContent,o=(0,r.T)();(0,i.useEffect)(function(){!n&&t&&o({asset:t,isPreview:!1})},[t,o,n])}},68533:function(e,t,n){n.d(t,{Y:function(){return l}});var i=n(58272),r=n(29292),o=n(9823),a=n(3661),s=n(21805),c=n(2784),l=function(){var e=(0,o.D)().isBrandSstk;return{setSearchContext:(0,c.useCallback)(function(t){var n=t.trackingId,r=t.term;if(n){if((0,a.H7)()===n)return;(0,a.tc)(n),(0,a.Cl)(r),e&&s.Z.set(i.d6,n,{expires:i.Dy,sameSite:"strict"})}},[e]),getSearchContext:(0,c.useCallback)(function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.meta,i=(0,r.lt)({asset:t})||(0,a.H7)();return(0,r.Be)({trackingId:(null==i?void 0:i.uuid)||i,searchTerm:(null==n?void 0:n.query)||(null==n?void 0:null===(e=n.search_context)||void 0===e?void 0:e.search_term)||(0,a.He)()})},[]),getSearchContextFromAssets:(0,c.useCallback)(function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=(null==t?void 0:t[0])||t,i=n.meta,o=(0,r.lt)({asset:n})||(0,a.H7)();return(0,r.Be)({trackingId:o,searchTerm:(null==i?void 0:i.query)||(null==i?void 0:null===(e=i.search_context)||void 0===e?void 0:e.search_term)||(0,a.He)()})},[])}}},47875:function(e,t,n){n.d(t,{L:function(){return s}});var i=n(50930),r=n(68445),o=n(5632),a=n(2784),s=function(){var e=(0,o.useRouter)();return(0,a.useCallback)(function(t){var n=t.assetType,o=t.collectionId,a=t.verificationCode,s=(0,r.B)({assetType:n,id:o,verificationCode:a});e.push.apply(e,(0,i.Z)(s))},[e])}},56579:function(e,t,n){n.d(t,{N:function(){return b}});var i=n(98788),r=n(47842),o=n(87394),a=n(5163),s=n(81740),c=n(39232),l=n(29858),u=n(44297),d=n(63256),v=n(19819),f=n(67661),p=n(17411),m=RegExp("\\s","g"),h="preview",g=function(e){var t=e.id,n=e.title;return"".concat(t).concat("_").concat(n.replace(m,"-").toLowerCase()).concat("_").concat(h)},C=function(e,t){var n=e.id,i=e.title;return"".concat(n).concat("_").concat(i.replace(m,"-").toLowerCase()).concat("_").concat("short").concat(t).concat("_").concat(h)},y=n(31702),w=n(2784),b=function(){var e,t,n,m,h,b=(0,o.Z)((0,w.useState)(null),2),I=b[0],S=b[1],_=(0,o.Z)((0,w.useState)(!1),2),k=_[0],T=_[1],Z=(0,o.Z)((0,w.useState)(null),2),x=Z[0],A=Z[1],P=(0,w.useCallback)((e=(0,i.Z)(function(e){var t,n,i,r;return(0,a.__generator)(this,function(o){switch(o.label){case 0:t=e.asset,n=(0,u.Tp)(t),i={data:[{media_id:t.id,media_type:n,media_size:"preview",media_format:(0,d.qG)({assetType:n})}]},o.label=1;case 1:return o.trys.push([1,3,4,5]),T(!0),[4,f.uS.post((0,s.u8)().formattedUrl,i)];case 2:return r=o.sent().data.data[0].attributes.url,[3,5];case 3:return S(o.sent()),[3,5];case 4:return T(!1),[7];case 5:return[2,r]}})}),function(t){return e.apply(this,arguments)}),[]),U=(0,w.useCallback)((t=(0,i.Z)(function(e){var t;return(0,a.__generator)(this,function(n){switch(n.label){case 0:return[4,P({asset:e})];case 1:return(t=n.sent())&&(0,y.l_)(t),[2]}})}),function(e){return t.apply(this,arguments)}),[P]),D=(0,w.useCallback)((n=(0,i.Z)(function(e){var t;return(0,a.__generator)(this,function(n){switch(n.label){case 0:return t=g(e),T(!0),[4,(0,p.S)((0,d.ok)(e),t)];case 1:return n.sent(),T(!1),[2]}})}),function(e){return n.apply(this,arguments)}),[]),R=(0,w.useMemo)(function(){var e;return e={},(0,r.Z)(e,c.k4,function(e){return(0,p.S)((0,d.ok)(e))}),(0,r.Z)(e,c.xF,D),(0,r.Z)(e,c.Xy,function(e){return(0,v.A_)((0,d.ok)(e),{target:"_blank"})}),(0,r.Z)(e,c.pX,U),e},[D,U]);return{triggerDownloadPreview:(m=(0,i.Z)(function(e){var t,n;return(0,a.__generator)(this,function(i){return t=e.asset,[2,(0,u.EK)(t)?R[c.Xy](t):null===(n=R[(0,u.Tp)(t)])||void 0===n?void 0:n.call(R,t)]})}),function(e){return m.apply(this,arguments)}),triggerDownloadShortsPreview:(h=(0,i.Z)(function(e){var t,n,i,r,o,s,c,u;return(0,a.__generator)(this,function(a){switch(a.label){case 0:return t=e.asset,n=e.size,o=l.wZ.indexOf(n),c=(null!==(s=null==t?void 0:null===(i=t.trackAssets)||void 0===i?void 0:null===(r=i.shorts)||void 0===r?void 0:r[o])&&void 0!==s?s:{}).externalUrl,u=C(t,n),A(n),[4,(0,p.S)(c.replace("http://","https://"),u)];case 1:return a.sent(),A(null),[2]}})}),function(e){return h.apply(this,arguments)}),isDownloading:k,shortDownloading:x,error:I}}},52494:function(e,t,n){n.d(t,{w:function(){return d}});var i=n(98788),r=n(87394),o=n(5163),a=n(81740),s=n(44699),c=n(32456),l=n(67661),u=n(2784),d=function(){var e,t=(0,r.Z)((0,u.useState)({status:"",error:void 0}),2),n=t[0],d=t[1],v=(0,u.useCallback)((e=(0,i.Z)(function(e){var t,n,i,r,u;return(0,o.__generator)(this,function(o){switch(o.label){case 0:t=e.collection,n=e.mediaItem,i=(0,a.df)({urlParams:{id:t.id}}).formattedUrl,r={data:{id:t.id,relationships:{"cover-item":{data:{id:"".concat(n.id),type:c.A8}}},type:c.Ul}},o.label=1;case 1:return o.trys.push([1,3,,4]),d({status:s.MR,error:void 0}),[4,l.uS.patch(i,r)];case 2:return o.sent(),[3,4];case 3:return u=o.sent(),d({status:s.cM,error:u}),[3,4];case 4:return[2]}})}),function(t){return e.apply(this,arguments)}),[]);return{status:n,setStatus:d,setAsCover:v}}},65257:function(e,t,n){n.r(t),n.d(t,{Copy:function(){return a}});var i=n(70865),r=n(52322),o=(0,n(6620).Z)((0,r.jsx)("path",{d:"M24 11.333V14h2.667v13.333H13.334v-2.667h-2.667v5.333h18.667V11.332zm-2.667-8H2.666V22h18.667V3.333zm-2.666 16H5.334V6h13.333v13.333z"}),"Copy.svg"),a=function(e){return(0,r.jsx)(o,(0,i.Z)({viewBox:"0 0 32 32"},e))}},65359:function(e,t,n){n.d(t,{I:function(){return a}});var i=n(70865),r=n(52322),o=(0,n(6620).Z)((0,r.jsx)("path",{d:"M24.933 15.733l-1.867-1.867-5.733 5.733V3.332h-2.667v16.267l-5.733-5.733-1.867 1.867 8.933 8.933 8.933-8.933zM12 30h8v-2.667h-8V30zm-9.333 0h6.667v-2.667H2.667V30zm20-2.667V30h6.667v-2.667h-6.667z"}),"DownloadComp.svg"),a=function(e){return(0,r.jsx)(o,(0,i.Z)({viewBox:"0 0 32 32"},e))}},31702:function(e,t,n){n.d(t,{l_:function(){return r},lm:function(){return o},pr:function(){return a}});var i=n(84159),r=function(e){var t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=document.createElement("a");r.style.display="none",document.body.appendChild(r),r.setAttribute("download",t),r.href=n?encodeURI(e):e,(0,i.bK)()||r.click(),document.body.removeChild(r)},o=function(e){var t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],n=window.URL.createObjectURL(e);r(n,t),setTimeout(function(){return window.URL.revokeObjectURL(n)},100)},a=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return null===(e=t["content-disposition"])||void 0===e?void 0:e.split("filename=")[1]}},17411:function(e,t,n){n.d(t,{S:function(){return a}});var i,r=n(98788),o=n(5163),a=(i=(0,r.Z)(function(e,t){var i,r,a,s,c,l,u;return(0,o.__generator)(this,function(o){switch(o.label){case 0:return i=n.g.fetch,r=n.g.document,a=n.g.URL,[4,i(e,{cache:"no-cache",mode:"cors",credentials:"omit"})];case 1:return s=o.sent(),c=r.createElement("a"),l=a.createObjectURL,[4,s.blob()];case 2:return c.href=l.apply(a,[o.sent()]),c.download=null!==(u=null!=t?t:e.split("/").pop())&&void 0!==u?u:"download",r.body.appendChild(c),c.click(),c.remove(),[2,c]}})}),function(e,t){return i.apply(this,arguments)})}}]);
//# sourceMappingURL=51129-d13d17dddeb0723b.js.map