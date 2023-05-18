"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[23747],{92790:function(e,t,n){n.d(t,{K:function(){return o},Z:function(){return i}});var r=n(38398),i=function(){var e="/email/ss_premier_sub_account_activation_email";return{url:e,formattedUrl:(0,r.format)({pathname:e})}},o=function(){var e="/email/premier_cart_confirmation";return{url:e,formattedUrl:(0,r.format)({pathname:e})}}},91644:function(e,t,n){n.d(t,{KK:function(){return h},Jj:function(){return Z},GA:function(){return m},tU:function(){return v},Hg:function(){return f},c:function(){return C},P1:function(){return T},Tw:function(){return I},$6:function(){return b}});var r=n(70865),i=n(96670),o=n(87394),s=n(50930),a=n(39232),c=n(3081),u=["contributor_inactive","contributor_opted_out","MEDIA_NOT_AVAILABLE"],l=n(18505),d=n(26710),p=n(44297),f=function(e){var t=e.licenseName,n=e.cartData,r=e.asset;return t?!!(null==n?void 0:n.items.find(function(e){return e.id===(null==r?void 0:r.id)&&e.licenseId===t})):!!(null==n?void 0:n.items.find(function(e){return e.id===(null==r?void 0:r.id)}))},v=function(e){var t=e.asset;return!e.unavailableAssets.find(function(e){return e.contentId===(0,p.OP)({asset:t})&&e.contentType===t.type})},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.errors;return(void 0===t?[]:t).some(function(e){return u.includes(e)})},h=function(e){var t=e.cachedCart,n=e.newItems,o=(0,s.Z)((null==t?void 0:t.items)||[]).concat((0,s.Z)(n));return(0,i.Z)((0,r.Z)({},t),{items:o,count:o.length})},g=function(e){var t=e.item,n=e.licensedAssets;return(null==n?void 0:n.find(function(e){return e.contentId===String(t.id)}))?0:t.isUnlimited?.1:parseFloat(t.price)},_=function(e){var t=e.item1,n=e.item2,r=e.sortOrder,i=e.licensedAssets,o=g({item:void 0===t?{}:t,licensedAssets:i}),s=g({item:void 0===n?{}:n,licensedAssets:i});return r===l.sl?o-s:s-o},y=function(e){var t=e.item1,n=e.item2,r=e.sortField,i=void 0===r?"addedTime":r;return e.sortOrder===l.sl?Number(new Date(n[i]))-Number(new Date(t[i])):Number(new Date(t[i]))-Number(new Date(n[i]))},b=function(e){var t=e.primaryCart,n=e.sortField,r=e.sortOrder,i=e.alreadyLicensedPrimaryAssets;return t.sort(function(e,t){return n===c.TK.ADDED_TIME?y({item1:e,item2:t,sortField:n,sortOrder:r}):_({item1:e,item2:t,sortField:n,sortOrder:r,licensedAssets:i})})},I=function(e){var t,n=e.rolodexAddress,r=(0,o.Z)((null===(t=n.streetLines)||void 0===t?void 0:t.split("\n"))||[],2),i=r[0],s=r[1],a=n.locality,c=n.postalCode,u=n.region;return{country:n.country,company:n.company,city:a,zip:c,state:u,address1:i,address2:s}},Z=function(e){var t,n=e.billingEntity;return(null==n?void 0:null===(t=n.rolodexAddresses)||void 0===t?void 0:t.find(function(e){var t;return"licensing"===e.addressType||(null===(t=e.usages)||void 0===t?void 0:t.includes("licensing"))}))||{}},w=function(e){var t=e.asset,n=e.alreadyLicensedAssets;return(null==t?void 0:t.price)===a.q9||(0,d.te)({alreadyLicensedAssets:n,asset:t})},A=function(e){var t=e.acc,n=e.asset;return w({asset:n,alreadyLicensedAssets:e.alreadyLicensedAssets})?t:t+parseFloat(null==n?void 0:n.price)},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t?e.filter(function(e){return!e.isUnavailableAsset}).reduce(function(e,n){return A({acc:e,asset:n,alreadyLicensedAssets:t})},0):0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.every(function(e){return e.price===a.q9})?a.q9:C(e,t)}},26710:function(e,t,n){n.d(t,{Ax:function(){return _},H8:function(){return p},Hl:function(){return y},NV:function(){return d},Tp:function(){return b},aW:function(){return I},iI:function(){return m},j2:function(){return h},lW:function(){return g},te:function(){return f},uP:function(){return l}});var r=n(70865),i=n(96670),o=n(50930),s=n(19522),a=n(39232),c=n(94054),u=n(61765),l=function(e){var t,n,r=e.license,i=e.existingAssetsLicenses;if(!i)return!((null==r?void 0:r.licenseName)&&c.b53.includes(null==r?void 0:r.licenseName))&&i;var o=(0,u.Fy)({asset:r.mediaItem});return!!(null==i?void 0:null===(n=i[null===(t=r.mediaItem)||void 0===t?void 0:t.id])||void 0===n?void 0:n.some(function(e){return e!==c._rW[o]}))},d=function(e){var t=e.subscriptions;return(void 0===t?[]:t).some(function(e){var t=e.redeemableFor;return c.SkX.some(function(e){return e===t})})?c.s5m:c.Hv9},p=function(e){return e.reduce(function(e,t){var n=t.licenseId;return e.includes(n)||e.push(n),e},[])},f=function(e){var t=e.alreadyLicensedAssets,n=e.asset;return!!t.find(function(e){var t=e.contentId,r=e.contentType,i=e.licenseId,o=n.type===a.k4?a.pV:n.type;return t===n.id&&r===o&&i===n.licenseId})},v=function(e){var t=e.licenseType,n=e.existingLicenses,r=e.asset,i=e.isSelect,s=["footage_".concat(t,"_sd"),"footage_".concat(t,"_hd")],a=(0,o.Z)(s).concat(["footage_".concat(t,"_lowres")]);return(void 0!==i&&i&&s.push("footage_".concat(t,"_4k")),r.licenseId==="footage_".concat(t,"_sd"))?null==n?void 0:n.some(function(e){return!!s.includes(e)}):r.licenseId==="footage_".concat(t,"_lowres")&&(null==n?void 0:n.some(function(e){return!!a.includes(e)}))},m=function(e){var t,n=e.existingLicenses,r=e.asset;switch(r.type){case a.FM:case a.pX:if(c.oPg.some(function(e){return v({asset:r,licenseType:e,existingLicenses:n})}))return!0;return!!(null==n?void 0:n.includes(r.licenseId));case a.k4:default:return!!(null==n?void 0:n.includes(null===(t=r.licenseId)||void 0===t?void 0:t.replace(/_unlimited/,"")))}},h=function(e){var t=e.error,n=e.t,r=(void 0===t?{}:t).meta,i=void 0===r?{}:r;if((null==i?void 0:i.exception_type)===c.JW1){var o=i.errors.slice(-1).pop().value,s="comp_limit"===o.name;return n("P1M"===o.period_length?s?"ent:monthly_comp_limit_reached":"ent:monthly_licensing_limit_reached":s?"ent:daily_comp_limit_reached":"ent:daily_licensing_limit_reached")}return n("ent:license_now_error_message")},g=function(e){var t=e.error,n=void 0===t?{}:t,r=e.user,i=n.title,s=n.detail,a=n.message,u=n.name,l=n.meta,d=void 0===l?{}:l,p=(void 0===r?{}:r)||{},f=p.id,v=p.username,m=p.organizationId,h=null==d?void 0:d.exception_type;switch(h){case c.JW1:var g,_,y=null===(_=d.errors)||void 0===_?void 0:_.map(function(e){var t=e.value;return null==t?void 0:t.name});g="".concat(i,": ").concat(y.join(","));break;case c.vFJ:var b,I=null===(b=d.errors)||void 0===b?void 0:b.map(function(e){var t=e.code,n=e.value;return"".concat(t,": ").concat(null==n?void 0:n.content_type," - ").concat(null==n?void 0:n.content_id," - ").concat(null==n?void 0:n.content_size)});g="".concat(i,": ").concat(I.join(","));break;default:g=[h,i,s,a,u].reduce(function(e,t){return t&&!e.includes(t)?(0,o.Z)(e).concat([t]):e},[]).join(", ")}return{organizationId:m,userId:f,username:v,errorSummary:g,error:n}},_=function(e){var t=e.organizationId;return"organization-".concat(t)},y=function(e){var t=e.user,n=e.isItemLoaded,r=e.labels;return""!==t?t:n?r.notAwailable:""},b=function(e){var t=e.isEligibilityLoading,n=e.existingCurrentAssetLiceses;return t?void 0:n||[]},I=function(e){var t=e.asset,n=e.selectedLicenseId,o=e.activeFormatType;return(0,r.Z)((0,i.Z)((0,r.Z)({},t),{itemType:t.itemType||(0,u.rw)({asset:t}),licenseId:n}),o===s._3&&{licenseAsJpeg:!0})}},23747:function(e,t,n){n.d(t,{Zo:function(){return ed}});var r,i=n(98788),o=n(47842),s=n(70865),a=n(96670),c=n(87394),u=n(50930),l=n(5163),d=n(81740),p=n(44699),f=n(39232),v=n(85330),m=n(94054),h=n(24861),g=n(29510),_=n(61765),y=n(83451),b=n(26710),I=n(18411),Z=n(80104),w=n(68781),A=n(51455),C=n(65448),T=n(9823),S=n(44297),O=n(67661),j=n(2784),E=function(e){var t,n=e.assets,r=(0,S.Tp)(n[0]);return{include:"subscriptions",content_type:(0,_.JD)({assetType:r,assetId:null===(t=n[0])||void 0===t?void 0:t.id}),content_ids:n.reduce(function(e,t){return(0,u.Z)(e).concat([t.id.toString()])},[]).join(",")}},M=function(e){var t=e.assets,n={};return t.forEach(function(e){var t=(0,S.Tp)(e),r=(0,_.JD)({assetId:e.id,assetType:t});n[r]=(0,u.Z)(n[r]?n[r]:[]).concat([e])}),n},L=function(e){var t=e.assetEligibility,n=t.permittedLicenses,r=t.subscriptions;return null==r?void 0:r.filter(function(e){var t=e.license;return n.includes(t.replace("_unlimited",""))})},R=function(e){var t,n=e.assets,r=e.user;return null===(t=Object.values(M({assets:void 0===n?[]:n})))||void 0===t?void 0:t.map(function(e){var t=E({assets:e}),n=(0,d.Td)({urlParams:{licenseeIdentifier:"organization-".concat(null==r?void 0:r.organizationId)},queryParams:t}).formattedUrl;return O.uS.get(n)})},N=function(e){var t=e.data,n=[];return t.map(function(e){var t=e.id.split("-"),r=t[t.length-1],i=L({assetEligibility:e});return n.push({assetId:r,subscriptions:i})}),n},P=n(776),k=n(9009),U=n(32819),q=n(3661),z=n(29292),x=n(68533),D=function(){var e=(0,P.yh)().analytics,t=(0,(0,x.Y)().getSearchContext)();return(0,j.useCallback)(function(n){var r=n.assets;e.productLicensed({products:(void 0===r?[]:r).map(function(e){return(0,z.bR)({asset:e,shouldGetSearchContextFromAsset:!0})}),search_context:t})},[e,t])},H=n(22921),F=n(43110),B=n(20865),V=n(92790),J=n(91644),W=n(91855),G=n(75),Y=n(21985),$=n(59877),K=n(96812),X=n.n(K),Q=n(55112),ee=n(82603),et=n(92067),en=RegExp(X()),er=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.emailCartCheckoutConfirmation,n=e.orderEmail;return t&&n?n.split(",").filter(function(e){return en.test(e)}):[]},ei=function(e){var t=e.purchaseOrder;return"".concat(null==t?void 0:t[0]," : ").concat(null==t?void 0:t[1]).split(" ").map(function(e){return(0,Y.k)(e)}).join(" ")},eo=function(e){var t=e.t,n=e.keys,r=n.currentYear,i=n.emailAddress,o=n.purchaseOrder;return{copyright:t("site-footer:copyright",{CURRENT_YEAR:r}),emailSentTo:t("ent:email_sent_to",{EMAIL_ADDRESS:i}),emailSubjectLine:"".concat(t("ent:order_confirmation_email_subject")," | ").concat(ei({purchaseOrder:o})),name:t("account:profile_name"),needAssistance:t("ent:contact_sales_representative"),orderConfirmation:t("ent:order_confirmation"),purchaseInformation:t("ent:purchase_information_key"),shutterstockAddress:t("tos:tos_2020_09_04_part_v_24_table_r2_c2_l2"),shutterstockInc:t("tos:tos_2020_09_04_part_v_24_table_r2_c2_l1"),subtotal:t("ent:order_confirmation_email_subtotal"),thisIsNotAnInvoice:t("ent:not_an_invoice")}},es=function(){var e=(0,$.$G)(G.jp5).t,t=(0,F.jy)().data,n=(0,ee.b)().data,r=(0,Q.B)().data,i=(0,et.z)({fetchTrigger:!0})||{},o=i.name,s=i.email,a=i.phone,c=(0,g.PE)(),l=c.locale,d=c.fullLocale,p=(0,H.o)();return{sendOrderConfirmationEmails:(0,j.useCallback)(function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=i.cartTotalCurrency,f=i.filteredOrderMetadata,v=i.licenseMetadata,m=i.priceType,h=(0,u.Z)((null==n?void 0:n.emailCartCheckoutConfirmation)?[null==t?void 0:t.email]:[]).concat((0,u.Z)(er(r)));if(h.length&&(null==f?void 0:f.length)){var g,_,y,b,I=eo({t:e,keys:{currentYear:new Date().getFullYear(),emailAddress:null==t?void 0:t.email,purchaseOrder:Object.entries(v)[0],repName:o,repPhoneNumber:a,repEmail:s}});try{var Z={cartItems:f,fullName:null==t?void 0:t.fullName,invoiceDate:new Intl.DateTimeFormat(d).format(new Date),labels:I,licenseMetadata:v,repEmail:s,repName:o,repPhoneNumber:a,totalAmount:p({price:(0,J.P1)(f,[]),localeCurrencyOverride:c,priceType:m}),username:null==t?void 0:t.username};W.IZ.post((0,V.K)().formattedUrl,{emails:(0,u.Z)(new Set(h)),emailBody:Z,emailSubject:"".concat(I.emailSubjectLine),language:l})}catch(e){null===(g=window.NREUM)||void 0===g||null===(_=g.setTransactionName)||void 0===_||_.call(g,"sendOrderConfirmationEmail/".concat("noticeError")),null===(y=window.NREUM)||void 0===y||null===(b=y.noticeError)||void 0===b||b.call(y,e,{message:"Failed sending order confirmation emails to: ".concat(h.join(", "))})}}},[d,l,r,p,s,o,a,e,null==t?void 0:t.email,null==t?void 0:t.fullName,null==t?void 0:t.username,null==n?void 0:n.emailCartCheckoutConfirmation])}},ea=n(43012),ec=(r={},(0,o.Z)(r,m.dWU,d.CE),(0,o.Z)(r,m.zM6,d.s0),r),eu=function(e){var t,n,r=e.asset,i=e.subscriptions,o=(0,_.qw)({asset:r}),s=r.licenseId,a=r.contentTier;switch(o){case f.pX:return(0,w.I)({assetType:f.pX,subscriptions:(0,u.Z)(null!==(t=null==i?void 0:i.videoSubscriptions)&&void 0!==t?t:[]).concat((0,u.Z)(null!==(n=null==i?void 0:i.videoCompSubscriptions)&&void 0!==n?n:[])),selectedLicenseId:s});case f.xF:case f.j0:return(0,A.$)({subscriptions:(0,u.Z)(i.musicSubscriptions).concat((0,u.Z)(i.musicCompSubscriptions)),licenseName:r.licenseId});case f.tn:return(0,A.$)({subscriptions:(0,u.Z)(i.sfxSubscriptions).concat((0,u.Z)(i.sfxCompSubscriptions)),licenseName:r.licenseId});case f.gP:return(0,A.$)({subscriptions:(0,u.Z)(i.editorialImageSubscriptions).concat((0,u.Z)(i.editorialImageCompSubscriptions),(0,u.Z)(i.editorialVideoSubscriptions),(0,u.Z)(i.editorialVideoCompSubscriptions)),licenseName:r.licenseId,contentTier:a});case f.k4:default:return(0,A.$)({subscriptions:(0,u.Z)(i.imageSubscriptions).concat((0,u.Z)(i.imageCompSubscriptions)),licenseName:r.licenseId,contentTier:a})}},el=function(e){var t=eu({asset:e.asset,subscriptions:e.subscriptions});return(0,C.q)({subscription:t})?(0,a.Z)((0,s.Z)({},t),{creditPrice:f.q9,creditType:h.Zm}):t},ed=function(){var e,t=(0,T.D)().isBrandEnterprise,n=(0,B.av)().data,r=(0,c.Z)((0,j.useState)(!1),2),o=r[0],u=r[1],d=(0,c.Z)((0,j.useState)(""),2),h=d[0],A=d[1],C=(0,c.Z)((0,j.useState)({}),2),S=C[0],E=C[1],M=(0,F.jy)().data,L=(0,c.Z)((0,U.VM)(function(e){return e}),2)[1],z=(0,P.uA)()||(0,q.H7)(),x=D(),V=(0,H.o)(),J=(0,ea.GB)(),W=(0,g.PE)().locale,G=es().sendOrderConfirmationEmails;return{isLicensing:o,licensingAssetsHandler:(0,j.useCallback)((e=(0,i.Z)(function(e){var r,o,c,d,h,g,C,T,S,j,P,U,q,D,H,F,B,Y,$,K,X,Q,ee,et,en,er,ei,eo,es,ea,eu;return(0,l.__generator)(this,function(ed){switch(ed.label){case 0:var ep;o=void 0===(r=e.alreadyLicensedAssets)?[]:r,d=void 0===(c=e.assets)?[]:c,g=void 0===(h=e.cartMetadata)?{}:h,T=void 0===(C=e.format)?"":C,j=void 0===(S=e.licenseeMetadata)?{}:S,U=void 0!==(P=e.isVideoComp)&&P,D=void 0===(q=e.licenseMetadata)?{}:q,H=e.licensingType,B=void 0===(F=e.selectedAssetSize)?"":F,ep=(0,i.Z)(function(){var e;return(0,l.__generator)(this,function(r){switch(r.label){case 0:return[4,Promise.all(R({assets:d,user:M}))];case 1:var o;return e=N({data:r.sent().map(function(e){var t=e.data;return(0,k.O)(t)}).flat()}),[4,Promise.all(d.map((o=(0,i.Z)(function(t){var n,r,i,o,c,u,d;return(0,l.__generator)(this,function(l){switch(l.label){case 0:return n=(0,_.qw)({asset:t}),r=t.licenseId,i=((null==e?void 0:e.find(function(e){return e.assetId===String(t.id)}))||{}).subscriptions,c=(o=(0,w.I)({assetType:n,subscriptions:i,selectedLicenseId:r})||{}).id,u=o.license,[4,(0,y.Oo)({asset:t,format:T,selectedAssetSize:B,licenseName:u,isVideoComp:U})];case 1:return d=l.sent(),[2,(0,a.Z)((0,s.Z)({},d,B&&I.Bg[B]&&{comp_size:B},n===f.tn&&{override_filename:"".concat(v.Oq,"_").concat(t.id,".").concat(T||d.content_format)}),{license_name:u,show_modal:!0,subscription_id:c})]}})}),function(e){return o.apply(this,arguments)})))];case 2:return[2,{licensingPayload:{content:r.sent(),license_metadata:D,required_cookies:"",decode_hadron_ids:t},orderMetadata:d.map(function(e){var t=e.currency,r=e.description,i=e.descriptionLanguageMap,o=e.id,s=e.itemType,a=e.headline,c=e.licenseId,u=e.preview,l=e.price,d=e.priceType,p=e.src,f=e.thumb,v=e.thumbImageUrl,m=e.title,h=e.type,g=t,_=l,y=d;if(!g||!_||!y){var b=el({asset:e,subscriptions:n}),I=b.creditCurrency,Z=b.creditPrice,w=b.creditType;g=g||I,_=_||Z,y=d||w}return g&&!Y&&(Y=g),y&&!$&&($=y),{description:(void 0===i?{}:i)[W]||r,formattedPrice:V({price:_,localeCurrencyOverride:g,priceType:y}),headline:a,id:o,itemType:s,licenseId:c,licenseName:J({licenseName:c}),price:_,priceType:y,thumbnailSrc:p||v||(void 0===u?{}:u).url||f,title:m,type:h}})}]}})}),K=function(){return ep.apply(this,arguments)},ed.label=1;case 1:return ed.trys.push([1,4,5,6]),u(!0),A(""),[4,K({assets:d.map(function(e){return e.mediaItem?(0,a.Z)((0,s.Z)({},e.mediaItem),{licenseId:e.licenseId}):e}),isVideoComp:U,licenseMetadata:D,selectedAssetSize:B,subscriptions:n})];case 2:return et=(ee=ed.sent()).licensingPayload,en=ee.orderMetadata,er=ec[H]({urlParams:{licenseeIdentifier:"organization-".concat(null==M?void 0:M.organizationId)}}).formattedUrl,[4,O.uS.post(er,et,(0,Z.S)({trackingId:z}))];case 3:return ei=ed.sent(),x({assets:d}),L({assets:d,metadata:g,licensedContent:(null===(X=(0,k.O)(ei.data))||void 0===X?void 0:null===(Q=X.meta)||void 0===Q?void 0:Q.licensedContent)||[]}),d.some(function(e){var t=e.licenseId;return m.b53.includes(t)})||G({cartTotalCurrency:Y,filteredOrderMetadata:en.filter(function(e){return!(0,b.te)({alreadyLicensedAssets:o,asset:e})}),licenseMetadata:j,priceType:$}),A(p.MR),[2,ei];case 4:throw eo=ed.sent(),eu=(0,b.lW)({error:eo,user:M}),null===(es=window.NREUM)||void 0===es||null===(ea=es.addPageAction)||void 0===ea||ea.call(es,"Enterprise licensing error",(0,a.Z)((0,s.Z)({},eu),{alreadyLicensedAssets:o,assets:d.map(function(e){return{id:e.id,type:e.type}}),cartMetadata:g,format:T,licenseeMetadata:j,isVideoComp:U,licenseMetadata:D,licensingType:H,selectedAssetSize:B})),E(eo),A(p.cM),eo;case 5:return u(!1),[7];case 6:return[2]}})}),function(t){return e.apply(this,arguments)}),[M,t,W,V,J,n,z,x,L,G]),licensingError:S,licensingStatus:h,setIsLicensing:u,setLicensingStatus:A}}},55112:function(e,t,n){n.d(t,{B:function(){return p}});var r=n(70865),i=n(81740),o=n(94054),s=n(55988),a=n(52884),c=n(67661),u=n(9009),l=n(3255),d=n(43110),p=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).queryParams,t=(0,d.jy)().data,n=(0,r.Z)({target:o.dlz,site_name:s.mC,setting_type:o.dlz},e);return(0,l.ZP)((null==t?void 0:t.id)&&(null==t?void 0:t.organizationId)&&(0,i.nI)({queryParams:n}).formattedUrl,function(e){return c.uS.get(e).then(function(e){return(0,u.O)(e.data)})},{dedupingInterval:a.yR})}},91855:function(e,t,n){n.d(t,{z1:function(){return P},ey:function(){return k},IZ:function(){return D},mV:function(){return V},IU:function(){return J},xj:function(){return G},j:function(){return Y}});var r,i,o=n(47293),s=n(70314),a=n.n(s),c=n(98788),u=n(90581),l=n(47842),d=n(70865),p=n(96670),f=n(87394),v=n(5163),m=n(7297),h=n(71162),g="application/json",_="Content-Type",y=a()().publicRuntimeConfig._app,b=(i={},(0,l.Z)(i,m.eJ,g),(0,l.Z)(i,m.P8,y.name),(0,l.Z)(i,m.hU,y.version),i),I=(0,l.Z)({Accept:g},_,g),Z=(r=(0,c.Z)(function(e,t){var n,r,i,o,s,a;return(0,v.__generator)(this,function(c){switch(c.label){case 0:return n=e.toString(),r=null==t?void 0:t.body,[4,fetch(n,(0,p.Z)((0,d.Z)({},t),{headers:(0,d.Z)({},b,r&&(0,d.Z)({},I),null==t?void 0:t.headers)}))];case 1:o=(i=c.sent()).headers.get(_),c.label=2;case 2:if(c.trys.push([2,9,,10]),!(null==o?void 0:o.includes(g)))return[3,4];return[4,i.json()];case 3:i.data=c.sent(),c.label=4;case 4:if(!(null==o?void 0:o.includes("text/plain")))return[3,6];return[4,i.text()];case 5:i.data=c.sent(),c.label=6;case 6:if(!(null==o?void 0:o.includes("application/pdf")))return[3,8];return[4,i.blob()];case 7:i.data=c.sent(),c.label=8;case 8:return[3,10];case 9:return c.sent(),[2,i];case 10:var u;if((u=i.status)>=h.HO&&u<h.C7)return[2,i];return i.data&&(a=i.data.errors,s=(0,f.Z)(a||[],1)[0]),[2,Promise.reject(s||i)]}})}),function(e,t){return r.apply(this,arguments)}),w=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="[object Object]",r="[object Array]",i=function(e,t){return null!=e?"".concat(e,"[").concat(t,"]"):t},o=function(e,t,s){var a=Object.prototype.toString.call(e),c=s;if(void 0===c){if(a===n)c={};else{if(a!==r)return{};c=[]}}for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var l=e[u];if(l)switch(Object.prototype.toString.call(l)){case r:case n:o(l,i(t,u),c);break;default:c[i(t,u)]=l}}return c},s=Object.entries(o(e)).map(function(e){return e.join("=")}).join("&");return t?encodeURIComponent(s):s},A=function(){function e(t){(0,u.Z)(this,e),this.baseUrl=t,this.deleteHttpMethod=function(e){var t=e.url,n=e.options;return Z(t,(0,d.Z)({method:"DELETE"},n))},this.fetchHttpMethod=function(e){return Z(e.url,e.options)},this.getHttpMethod=function(e){var t=e.url,n=e.options;return Z(t,(0,d.Z)({method:"GET"},n))},this.patchHttpMethod=function(e){var t=e.url,n=e.options;return Z(t,(0,d.Z)({method:"PATCH"},n))},this.postHttpMethod=function(e){var t=e.url,n=e.options;return Z(t,(0,d.Z)({method:"POST"},n))},this.putHttpMethod=function(e){var t=e.url,n=e.options;return Z(t,(0,d.Z)({method:"PUT"},n))},this.requestInterceptors=[],this.responseInterceptors=[]}var t=e.prototype;return t.createUrlObject=function(e,t){var n=(t||{}).params,r="";n&&(r=w(n,!1));var i=n?"".concat(e,"?").concat(r):e;return new URL("".concat(this.baseUrl).concat(i))},t.runRequestInterceptors=function(e){return 0===this.requestInterceptors.length?e:this.requestInterceptors.reduce(function(e,t){return t(e)},e)},t.runResponseInterceptors=function(e){return 0===this.responseInterceptors.length?e:this.responseInterceptors.reduce(function(e,t){return t(e)},e)},t.get=function(e,t){var n=this;return(0,c.Z)(function(){var r,i,o;return(0,v.__generator)(this,function(s){switch(s.label){case 0:return r=n.createUrlObject(e,t),i=n.runRequestInterceptors({url:r,options:t}),[4,n.getHttpMethod(i)];case 1:return o=s.sent(),[2,n.runResponseInterceptors(o)]}})})()},t.delete=function(e,t){var n=this;return(0,c.Z)(function(){var r,i,o,s,a;return(0,v.__generator)(this,function(c){switch(c.label){case 0:return i=(r=null==t?void 0:t.data)?JSON.stringify(null==t?void 0:t.data):null,r&&(null==t||delete t.data),o=n.createUrlObject(e,t),s=n.runRequestInterceptors({url:o,options:(0,p.Z)((0,d.Z)({},t),{body:i})}),[4,n.deleteHttpMethod(s)];case 1:return a=c.sent(),[2,n.runResponseInterceptors(a)]}})})()},t.fetch=function(t,n){var r=this;return(0,c.Z)(function(){var i,o,s,a,c;return(0,v.__generator)(this,function(u){switch(u.label){case 0:return i=null==n?void 0:n.data,(o=n?e.getRequestBody(i):null)&&(null==n||delete n.data),s=r.createUrlObject(t,n),a=r.runRequestInterceptors({url:s,options:(0,p.Z)((0,d.Z)({},n),{body:o})}),[4,r.fetchHttpMethod(a)];case 1:return c=u.sent(),[2,r.runResponseInterceptors(c)]}})})()},t.patch=function(t,n,r){var i=this;return(0,c.Z)(function(){var o,s,a,c;return(0,v.__generator)(this,function(u){switch(u.label){case 0:return(o=n||(null==r?void 0:r.data)?e.getRequestBody(n||(null==r?void 0:r.data)):null)&&(null==r||delete r.data),s=i.createUrlObject(t,r),a=i.runRequestInterceptors({url:s,options:(0,p.Z)((0,d.Z)({},r),{body:o})}),[4,i.patchHttpMethod(a)];case 1:return c=u.sent(),[2,i.runResponseInterceptors(c)]}})})()},t.post=function(t,n,r){var i=this;return(0,c.Z)(function(){var o,s,a,c;return(0,v.__generator)(this,function(u){switch(u.label){case 0:return(o=n||(null==r?void 0:r.data)?e.getRequestBody(n||(null==r?void 0:r.data)):null)&&(null==r||delete r.data),s=i.createUrlObject(t,r),a=i.runRequestInterceptors({url:s,options:(0,p.Z)((0,d.Z)({},r),{body:o})}),[4,i.postHttpMethod(a)];case 1:return c=u.sent(),[2,i.runResponseInterceptors(c)]}})})()},t.put=function(t,n,r){var i=this;return(0,c.Z)(function(){var o,s,a,c;return(0,v.__generator)(this,function(u){switch(u.label){case 0:return(o=n||(null==r?void 0:r.data)?e.getRequestBody(n||(null==r?void 0:r.data)):null)&&(null==r||delete r.data),s=i.createUrlObject(t,r),a=i.runRequestInterceptors({url:s,options:(0,p.Z)((0,d.Z)({},r),{body:o})}),[4,i.putHttpMethod(a)];case 1:return c=u.sent(),[2,i.runResponseInterceptors(c)]}})})()},e.getRequestBody=function(e){return e&&Object.keys(e).length>0?JSON.stringify(e):null},e}(),C=n(4842),T=n(74147),S=n(21805),O=n(6364),j=a()().publicRuntimeConfig.authSsoCookieName,E=function(e){var t,n=e.url,r=e.options,i=(null==r?void 0:null===(t=r.headers)||void 0===t?void 0:t[m.cp])||(0,O.Z)();return{url:n,options:(0,p.Z)((0,d.Z)({},r),{headers:(0,p.Z)((0,d.Z)({},null==r?void 0:r.headers),(0,l.Z)({},m.cp,i))})}},M=function(e){401===e.status||e.status;var t,n,r=null==e?void 0:null===(t=e.data)||void 0===t?void 0:null===(n=t.errors)||void 0===n?void 0:n[0],i=null==e?void 0:e.data;return r||i||e},L=function(e){if(!e.ok)return M(e);if("string"==typeof(null==e?void 0:e.data))return e;var t,n=null===(t=e.headers.get(m.zv))||void 0===t?void 0:t.includes("application/json");return!new URL(e.url).pathname.startsWith(o.a)&&n&&(e.data=(0,T.Y)(e.data)),e},R=a()().publicRuntimeConfig.apiEndpoints,N=function(e){return R[e],"".concat(window.location.origin).concat(o.a)},P=new A(N("accounts")),k=new A(N("airtable"));new A(N("planning"));var U=new A(N("enterpriseApi")),q=new A(N("enterpriseApi")),z=new A(N("graphGateway")),x=new A(N("identitySettings")),D=new A(N("mailingApi")),H=new A(N(o.a)),F=new A(N("shutterstockBundler")),B=new A(N("studio"));new A(N("studio"));var V=new A(N("unityGroup")),J=new A(N("unityInvoice")),W=new A(N("userAssetsService")),G=new A(N("visitorTracking")),Y={postVisitorTracking:function(e,t){return G.post("/visit",e,t)},postReferrals:function(e,t){return G.post("/events/referral",e,t)}};B.requestInterceptors.push(function(e){var t,n=e.url,r=e.options;if((null==r?void 0:null===(t=r.method)||void 0===t?void 0:t.toLowerCase())==="get"){var i=n.pathname.split("?")[0];if(C.M.includes(i)){var o=S.Z.get(j);o&&"-undefined"!==o&&n.searchParams.set(C.D,o)}}return{url:n,options:r}}),[B,U,q,J,J,x].forEach(function(e){return e.responseInterceptors.push(L)}),[P,k,U,q,z,D,H,F,B,V,J,W,G].forEach(function(e){return e.requestInterceptors.push(E)})}}]);
//# sourceMappingURL=23747-c4467fe2a855f0ac.js.map