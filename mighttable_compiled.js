if(!lt.util.load.provided_QMARK_('lt.plugins.metascript')) {
goog.provide('lt.plugins.metascript');
goog.require('cljs.core');
goog.require('lt.objs.plugins');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.files');
goog.require('lt.plugins.js');
goog.require('lt.plugins.js');
goog.require('lt.objs.jump_stack');
goog.require('lt.objs.jump_stack');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.files');
goog.require('lt.objs.plugins');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.sidebar.command');
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.metascript","mjs-lang","lt.plugins.metascript/mjs-lang",2530095524),new cljs.core.Keyword(null,"tags","tags",1017456523),cljs.core.PersistentHashSet.EMPTY);
lt.plugins.metascript.mjs_lang = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.metascript","mjs-lang","lt.plugins.metascript/mjs-lang",2530095524));
lt.plugins.metascript.metascript_path = lt.objs.files.join.call(null,(function (){var or__6813__auto__ = lt.objs.plugins._STAR_plugin_dir_STAR_;if(cljs.core.truth_(or__6813__auto__))
{return or__6813__auto__;
} else
{return "/home/bamboo/.config/LightTable/plugins/MightTable";
}
})(),"node_modules/meta-script");
lt.plugins.metascript.check_for_errors = lt.objs.thread.thread_STAR_.call(null,(function tfun8267(){var orig__8256__auto__ = argsArray(arguments);var msg__8257__auto__ = orig__8256__auto__.shift();var args__8258__auto__ = orig__8256__auto__.map(cljs.reader.read_string);var raise = ((function (orig__8256__auto__,msg__8257__auto__,args__8258__auto__){
return (function (obj__8259__auto__,k__8260__auto__,v__8261__auto__){return _send(obj__8259__auto__,k__8260__auto__,cljs.core.pr_str.call(null,v__8261__auto__),"clj");
});})(orig__8256__auto__,msg__8257__auto__,args__8258__auto__))
;args__8258__auto__.unshift(msg__8257__auto__.obj);
return (function (obj_id,code,path,metascript_path){var map_error = (function map_error(e){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",1968829305),e.message,new cljs.core.Keyword(null,"line","line",1017226086),(e.line - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),e.column,new cljs.core.Keyword(null,"nested-errors","nested-errors",1746450547),map_errors.call(null,e.nestedErrors)], null);
});
var map_errors = (function map_errors(es){return cljs.core.mapv.call(null,map_error,es);
});
var meta = require(metascript_path).call(null);var compiler = meta.compilerFromString(code,path);var ast = compiler.produceAst();var errors = map_errors.call(null,compiler.errors);return raise.call(null,obj_id,new cljs.core.Keyword(null,"mjs-hinted","mjs-hinted",1377635343),errors);
}).apply(null,args__8258__auto__);
}));
lt.plugins.metascript.__GT_path = (function __GT_path(editor){return new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)));
});
lt.plugins.metascript.start_check_for_errors = (function start_check_for_errors(this$){return lt.plugins.metascript.check_for_errors.call(null,this$,lt.objs.editor.__GT_val.call(null,this$),lt.plugins.metascript.__GT_path.call(null,this$),lt.plugins.metascript.metascript_path);
});
lt.plugins.metascript.clickable = (function clickable(tag,editor,hint){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"cursor: pointer;"], null),new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(hint)], null));var seq__8274_8399 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.plugins.metascript.jump_to.call(null,editor,hint);
})], null)));var chunk__8275_8400 = null;var count__8276_8401 = 0;var i__8277_8402 = 0;while(true){
if((i__8277_8402 < count__8276_8401))
{var vec__8278_8403 = cljs.core._nth.call(null,chunk__8275_8400,i__8277_8402);var ev__8184__auto___8404 = cljs.core.nth.call(null,vec__8278_8403,0,null);var func__8185__auto___8405 = cljs.core.nth.call(null,vec__8278_8403,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8404,func__8185__auto___8405);
{
var G__8406 = seq__8274_8399;
var G__8407 = chunk__8275_8400;
var G__8408 = count__8276_8401;
var G__8409 = (i__8277_8402 + 1);
seq__8274_8399 = G__8406;
chunk__8275_8400 = G__8407;
count__8276_8401 = G__8408;
i__8277_8402 = G__8409;
continue;
}
} else
{var temp__4092__auto___8410 = cljs.core.seq.call(null,seq__8274_8399);if(temp__4092__auto___8410)
{var seq__8274_8411__$1 = temp__4092__auto___8410;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8274_8411__$1))
{var c__7561__auto___8412 = cljs.core.chunk_first.call(null,seq__8274_8411__$1);{
var G__8413 = cljs.core.chunk_rest.call(null,seq__8274_8411__$1);
var G__8414 = c__7561__auto___8412;
var G__8415 = cljs.core.count.call(null,c__7561__auto___8412);
var G__8416 = 0;
seq__8274_8399 = G__8413;
chunk__8275_8400 = G__8414;
count__8276_8401 = G__8415;
i__8277_8402 = G__8416;
continue;
}
} else
{var vec__8279_8417 = cljs.core.first.call(null,seq__8274_8411__$1);var ev__8184__auto___8418 = cljs.core.nth.call(null,vec__8279_8417,0,null);var func__8185__auto___8419 = cljs.core.nth.call(null,vec__8279_8417,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8418,func__8185__auto___8419);
{
var G__8420 = cljs.core.next.call(null,seq__8274_8411__$1);
var G__8421 = null;
var G__8422 = 0;
var G__8423 = 0;
seq__8274_8399 = G__8420;
chunk__8275_8400 = G__8421;
count__8276_8401 = G__8422;
i__8277_8402 = G__8423;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
});
lt.plugins.metascript.error_hint = (function error_hint(editor,errors){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hintwrapper","div.hintwrapper",570322369),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"background-color: darkred;"], null),(function (){var iter__7530__auto__ = (function iter__8310(s__8311){return (new cljs.core.LazySeq(null,(function (){var s__8311__$1 = s__8311;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8311__$1);if(temp__4092__auto__)
{var s__8311__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8311__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__8311__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__8313 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__8312 = 0;while(true){
if((i__8312 < size__7529__auto__))
{var map__8324 = cljs.core._nth.call(null,c__7528__auto__,i__8312);var map__8324__$1 = ((cljs.core.seq_QMARK_.call(null,map__8324))?cljs.core.apply.call(null,cljs.core.hash_map,map__8324):map__8324);var e = map__8324__$1;var nested_errors = cljs.core.get.call(null,map__8324__$1,new cljs.core.Keyword(null,"nested-errors","nested-errors",1746450547));cljs.core.chunk_append.call(null,b__8313,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),lt.plugins.metascript.clickable.call(null,new cljs.core.Keyword(null,"div","div",1014003715),editor,e),((cljs.core.empty_QMARK_.call(null,nested_errors))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7530__auto__ = ((function (i__8312,map__8324,map__8324__$1,e,nested_errors,c__7528__auto__,size__7529__auto__,b__8313,s__8311__$2,temp__4092__auto__){
return (function iter__8325(s__8326){return (new cljs.core.LazySeq(null,((function (i__8312,map__8324,map__8324__$1,e,nested_errors,c__7528__auto__,size__7529__auto__,b__8313,s__8311__$2,temp__4092__auto__){
return (function (){var s__8326__$1 = s__8326;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__8326__$1);if(temp__4092__auto____$1)
{var s__8326__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__8326__$2))
{var c__7528__auto____$1 = cljs.core.chunk_first.call(null,s__8326__$2);var size__7529__auto____$1 = cljs.core.count.call(null,c__7528__auto____$1);var b__8328 = cljs.core.chunk_buffer.call(null,size__7529__auto____$1);if((function (){var i__8327 = 0;while(true){
if((i__8327 < size__7529__auto____$1))
{var ne = cljs.core._nth.call(null,c__7528__auto____$1,i__8327);cljs.core.chunk_append.call(null,b__8328,lt.plugins.metascript.clickable.call(null,new cljs.core.Keyword(null,"li.button","li.button",2481585205),editor,ne));
{
var G__8424 = (i__8327 + 1);
i__8327 = G__8424;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8328),iter__8325.call(null,cljs.core.chunk_rest.call(null,s__8326__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8328),null);
}
} else
{var ne = cljs.core.first.call(null,s__8326__$2);return cljs.core.cons.call(null,lt.plugins.metascript.clickable.call(null,new cljs.core.Keyword(null,"li.button","li.button",2481585205),editor,ne),iter__8325.call(null,cljs.core.rest.call(null,s__8326__$2)));
}
} else
{return null;
}
break;
}
});})(i__8312,map__8324,map__8324__$1,e,nested_errors,c__7528__auto__,size__7529__auto__,b__8313,s__8311__$2,temp__4092__auto__))
,null,null));
});})(i__8312,map__8324,map__8324__$1,e,nested_errors,c__7528__auto__,size__7529__auto__,b__8313,s__8311__$2,temp__4092__auto__))
;return iter__7530__auto__.call(null,nested_errors);
})()], null))], null));
{
var G__8425 = (i__8312 + 1);
i__8312 = G__8425;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8313),iter__8310.call(null,cljs.core.chunk_rest.call(null,s__8311__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8313),null);
}
} else
{var map__8329 = cljs.core.first.call(null,s__8311__$2);var map__8329__$1 = ((cljs.core.seq_QMARK_.call(null,map__8329))?cljs.core.apply.call(null,cljs.core.hash_map,map__8329):map__8329);var e = map__8329__$1;var nested_errors = cljs.core.get.call(null,map__8329__$1,new cljs.core.Keyword(null,"nested-errors","nested-errors",1746450547));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),lt.plugins.metascript.clickable.call(null,new cljs.core.Keyword(null,"div","div",1014003715),editor,e),((cljs.core.empty_QMARK_.call(null,nested_errors))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7530__auto__ = ((function (map__8329,map__8329__$1,e,nested_errors,s__8311__$2,temp__4092__auto__){
return (function iter__8330(s__8331){return (new cljs.core.LazySeq(null,((function (map__8329,map__8329__$1,e,nested_errors,s__8311__$2,temp__4092__auto__){
return (function (){var s__8331__$1 = s__8331;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__8331__$1);if(temp__4092__auto____$1)
{var s__8331__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__8331__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__8331__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__8333 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__8332 = 0;while(true){
if((i__8332 < size__7529__auto__))
{var ne = cljs.core._nth.call(null,c__7528__auto__,i__8332);cljs.core.chunk_append.call(null,b__8333,lt.plugins.metascript.clickable.call(null,new cljs.core.Keyword(null,"li.button","li.button",2481585205),editor,ne));
{
var G__8426 = (i__8332 + 1);
i__8332 = G__8426;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8333),iter__8330.call(null,cljs.core.chunk_rest.call(null,s__8331__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8333),null);
}
} else
{var ne = cljs.core.first.call(null,s__8331__$2);return cljs.core.cons.call(null,lt.plugins.metascript.clickable.call(null,new cljs.core.Keyword(null,"li.button","li.button",2481585205),editor,ne),iter__8330.call(null,cljs.core.rest.call(null,s__8331__$2)));
}
} else
{return null;
}
break;
}
});})(map__8329,map__8329__$1,e,nested_errors,s__8311__$2,temp__4092__auto__))
,null,null));
});})(map__8329,map__8329__$1,e,nested_errors,s__8311__$2,temp__4092__auto__))
;return iter__7530__auto__.call(null,nested_errors);
})()], null))], null),iter__8310.call(null,cljs.core.rest.call(null,s__8311__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7530__auto__.call(null,errors);
})()], null)], null));var seq__8334_8427 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8335_8428 = null;var count__8336_8429 = 0;var i__8337_8430 = 0;while(true){
if((i__8337_8430 < count__8336_8429))
{var vec__8338_8431 = cljs.core._nth.call(null,chunk__8335_8428,i__8337_8430);var ev__8184__auto___8432 = cljs.core.nth.call(null,vec__8338_8431,0,null);var func__8185__auto___8433 = cljs.core.nth.call(null,vec__8338_8431,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8432,func__8185__auto___8433);
{
var G__8434 = seq__8334_8427;
var G__8435 = chunk__8335_8428;
var G__8436 = count__8336_8429;
var G__8437 = (i__8337_8430 + 1);
seq__8334_8427 = G__8434;
chunk__8335_8428 = G__8435;
count__8336_8429 = G__8436;
i__8337_8430 = G__8437;
continue;
}
} else
{var temp__4092__auto___8438 = cljs.core.seq.call(null,seq__8334_8427);if(temp__4092__auto___8438)
{var seq__8334_8439__$1 = temp__4092__auto___8438;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8334_8439__$1))
{var c__7561__auto___8440 = cljs.core.chunk_first.call(null,seq__8334_8439__$1);{
var G__8441 = cljs.core.chunk_rest.call(null,seq__8334_8439__$1);
var G__8442 = c__7561__auto___8440;
var G__8443 = cljs.core.count.call(null,c__7561__auto___8440);
var G__8444 = 0;
seq__8334_8427 = G__8441;
chunk__8335_8428 = G__8442;
count__8336_8429 = G__8443;
i__8337_8430 = G__8444;
continue;
}
} else
{var vec__8339_8445 = cljs.core.first.call(null,seq__8334_8439__$1);var ev__8184__auto___8446 = cljs.core.nth.call(null,vec__8339_8445,0,null);var func__8185__auto___8447 = cljs.core.nth.call(null,vec__8339_8445,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8446,func__8185__auto___8447);
{
var G__8448 = cljs.core.next.call(null,seq__8334_8439__$1);
var G__8449 = null;
var G__8450 = 0;
var G__8451 = 0;
seq__8334_8427 = G__8448;
chunk__8335_8428 = G__8449;
count__8336_8429 = G__8450;
i__8337_8430 = G__8451;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
});
lt.plugins.metascript.preserving_scroll_location_of = (function preserving_scroll_location_of(this$,action){var cm_ed = lt.objs.editor.__GT_cm_ed.call(null,this$);var prev = cm_ed.getScrollInfo();action.call(null);
return cm_ed.scrollTo(prev.left,prev.top);
});
lt.plugins.metascript.remove_mjs_hints_from = (function remove_mjs_hints_from(this$){var seq__8344 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"widgets","widgets",2354242081).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mjs-hints","mjs-hints",1995468839).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));var chunk__8345 = null;var count__8346 = 0;var i__8347 = 0;while(true){
if((i__8347 < count__8346))
{var widget = cljs.core._nth.call(null,chunk__8345,i__8347);lt.objs.editor.remove_line_widget.call(null,this$,widget);
{
var G__8452 = seq__8344;
var G__8453 = chunk__8345;
var G__8454 = count__8346;
var G__8455 = (i__8347 + 1);
seq__8344 = G__8452;
chunk__8345 = G__8453;
count__8346 = G__8454;
i__8347 = G__8455;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8344);if(temp__4092__auto__)
{var seq__8344__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8344__$1))
{var c__7561__auto__ = cljs.core.chunk_first.call(null,seq__8344__$1);{
var G__8456 = cljs.core.chunk_rest.call(null,seq__8344__$1);
var G__8457 = c__7561__auto__;
var G__8458 = cljs.core.count.call(null,c__7561__auto__);
var G__8459 = 0;
seq__8344 = G__8456;
chunk__8345 = G__8457;
count__8346 = G__8458;
i__8347 = G__8459;
continue;
}
} else
{var widget = cljs.core.first.call(null,seq__8344__$1);lt.objs.editor.remove_line_widget.call(null,this$,widget);
{
var G__8460 = cljs.core.next.call(null,seq__8344__$1);
var G__8461 = null;
var G__8462 = 0;
var G__8463 = 0;
seq__8344 = G__8460;
chunk__8345 = G__8461;
count__8346 = G__8462;
i__8347 = G__8463;
continue;
}
}
} else
{return null;
}
}
break;
}
});
lt.plugins.metascript.__GT_location = cljs.core.juxt.call(null,new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"ch","ch",1013907415));
lt.plugins.metascript.update_hints = (function update_hints(this$,hints){return lt.plugins.metascript.preserving_scroll_location_of.call(null,this$,(function (){lt.plugins.metascript.remove_mjs_hints_from.call(null,this$);
var widgets = cljs.core.mapv.call(null,(function (p__8350){var vec__8351 = p__8350;var line = cljs.core.nth.call(null,vec__8351,0,null);var hs = cljs.core.nth.call(null,vec__8351,1,null);return lt.objs.editor.line_widget.call(null,this$,line,lt.plugins.metascript.error_hint.call(null,this$,hs));
}),cljs.core.group_by.call(null,new cljs.core.Keyword(null,"line","line",1017226086),hints));var locations = cljs.core.apply.call(null,cljs.core.sorted_set,cljs.core.map.call(null,lt.plugins.metascript.__GT_location,hints));return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mjs-hints","mjs-hints",1995468839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"widgets","widgets",2354242081),widgets,new cljs.core.Keyword(null,"locations","locations",4111682256),locations], null)], null));
}));
});
lt.plugins.metascript.hintable_QMARK_ = (function hintable_QMARK_(this$){return lt.object.has_tag_QMARK_.call(null,this$,new cljs.core.Keyword(null,"metascript.hintable","metascript.hintable",2535530737));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.metascript","hint-on-change","lt.plugins.metascript/hint-on-change",3793970655),new cljs.core.Keyword(null,"debounce","debounce",1556599227),750,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"desc","desc",1016984067),"Metascript Errors: Check for Metascript errors on change",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"change","change",3947235106),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.metascript.start_check_for_errors);
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.metascript","inline-hints","lt.plugins.metascript/inline-hints",2200583391),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mjs-hinted","mjs-hinted",1377635343),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,hints){return lt.objs.editor.operation.call(null,lt.objs.editor.__GT_cm_ed.call(null,this$),(function (){return lt.plugins.metascript.update_hints.call(null,this$,hints);
}));
}));
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.metascript","tags-removed","lt.plugins.metascript/tags-removed",4241084651),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.object","tags-removed","lt.object/tags-removed",4080090644),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,t){if(cljs.core.truth_(lt.plugins.metascript.hintable_QMARK_.call(null,this$)))
{return null;
} else
{return lt.plugins.metascript.remove_mjs_hints_from.call(null,this$);
}
}));
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.metascript","tags-added","lt.plugins.metascript/tags-added",1832574219),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.object","tags-added","lt.object/tags-added",1756253556),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$,t){if(cljs.core.truth_(lt.plugins.metascript.hintable_QMARK_.call(null,this$)))
{return lt.plugins.metascript.start_check_for_errors.call(null,this$);
} else
{return null;
}
}));
lt.plugins.metascript.enable_error_hints = (function enable_error_hints(){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var editor = temp__4092__auto__;return lt.object.add_tags.call(null,editor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metascript.hintable","metascript.hintable",2535530737)], null));
} else
{return null;
}
});
lt.plugins.metascript.disable_error_hints = (function disable_error_hints(){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var editor = temp__4092__auto__;return lt.object.remove_tags.call(null,editor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metascript.hintable","metascript.hintable",2535530737)], null));
} else
{return null;
}
});
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"metascript.disable-file-hints","metascript.disable-file-hints",2965492304),new cljs.core.Keyword(null,"desc","desc",1016984067),"Metascript: Disable error hints in file",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.metascript.disable_error_hints], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"metascript.enable-file-hints","metascript.enable-file-hints",1656763865),new cljs.core.Keyword(null,"desc","desc",1016984067),"Metascript: Enable error hints in file",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.metascript.enable_error_hints], null));
lt.plugins.metascript.fold_all = (function fold_all(fold_or_unfold){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var editor = temp__4092__auto__;var cm = lt.objs.editor.__GT_cm_ed.call(null,editor);var lines = cljs.core.range.call(null,cm.firstLine(),cm.lastLine());return lt.objs.editor.operation.call(null,cm,(function (){var seq__8356 = cljs.core.seq.call(null,lines);var chunk__8357 = null;var count__8358 = 0;var i__8359 = 0;while(true){
if((i__8359 < count__8358))
{var i = cljs.core._nth.call(null,chunk__8357,i__8359);cm.foldCode(CodeMirror.Pos(i,0),null,fold_or_unfold);
{
var G__8464 = seq__8356;
var G__8465 = chunk__8357;
var G__8466 = count__8358;
var G__8467 = (i__8359 + 1);
seq__8356 = G__8464;
chunk__8357 = G__8465;
count__8358 = G__8466;
i__8359 = G__8467;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__8356);if(temp__4092__auto____$1)
{var seq__8356__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8356__$1))
{var c__7561__auto__ = cljs.core.chunk_first.call(null,seq__8356__$1);{
var G__8468 = cljs.core.chunk_rest.call(null,seq__8356__$1);
var G__8469 = c__7561__auto__;
var G__8470 = cljs.core.count.call(null,c__7561__auto__);
var G__8471 = 0;
seq__8356 = G__8468;
chunk__8357 = G__8469;
count__8358 = G__8470;
i__8359 = G__8471;
continue;
}
} else
{var i = cljs.core.first.call(null,seq__8356__$1);cm.foldCode(CodeMirror.Pos(i,0),null,fold_or_unfold);
{
var G__8472 = cljs.core.next.call(null,seq__8356__$1);
var G__8473 = null;
var G__8474 = 0;
var G__8475 = 0;
seq__8356 = G__8472;
chunk__8357 = G__8473;
count__8358 = G__8474;
i__8359 = G__8475;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
} else
{return null;
}
});
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"metascript.fold-all","metascript.fold-all",4301347429),new cljs.core.Keyword(null,"desc","desc",1016984067),"Metascript: Fold all",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.metascript.fold_all.call(null,"fold");
})], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"metascript.unfold-all","metascript.unfold-all",3415797886),new cljs.core.Keyword(null,"desc","desc",1016984067),"Metascript: Unfold all",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.metascript.fold_all.call(null,"unfold");
})], null));
lt.plugins.metascript.node_seq = (function node_seq(node){var iter__7530__auto__ = (function iter__8364(s__8365){return (new cljs.core.LazySeq(null,(function (){var s__8365__$1 = s__8365;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8365__$1);if(temp__4092__auto__)
{var s__8365__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8365__$2))
{var c__7528__auto__ = cljs.core.chunk_first.call(null,s__8365__$2);var size__7529__auto__ = cljs.core.count.call(null,c__7528__auto__);var b__8367 = cljs.core.chunk_buffer.call(null,size__7529__auto__);if((function (){var i__8366 = 0;while(true){
if((i__8366 < size__7529__auto__))
{var i = cljs.core._nth.call(null,c__7528__auto__,i__8366);cljs.core.chunk_append.call(null,b__8367,node.argAt(i));
{
var G__8476 = (i__8366 + 1);
i__8366 = G__8476;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8367),iter__8364.call(null,cljs.core.chunk_rest.call(null,s__8365__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8367),null);
}
} else
{var i = cljs.core.first.call(null,s__8365__$2);return cljs.core.cons.call(null,node.argAt(i),iter__8364.call(null,cljs.core.rest.call(null,s__8365__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7530__auto__.call(null,cljs.core.range.call(null,node.argCount()));
});
lt.plugins.metascript.ast_seq = (function ast_seq(ast){return cljs.core.tree_seq.call(null,(function (node){return (node.argCount() > 0);
}),lt.plugins.metascript.node_seq,ast);
});
lt.plugins.metascript.meta_script = require(lt.plugins.metascript.metascript_path).call(null);
lt.plugins.metascript.util_inspect = require("util").inspect;
lt.plugins.metascript.inspect = (function inspect(thing,depth){return lt.plugins.metascript.util_inspect.call(null,thing,false,(function (){var or__6813__auto__ = depth;if(cljs.core.truth_(or__6813__auto__))
{return or__6813__auto__;
} else
{return 5;
}
})());
});
/**
* @param {...*} var_args
*/
lt.plugins.metascript.parse = (function() { 
var parse__delegate = function (code,p__8368){var vec__8371 = p__8368;var path = cljs.core.nth.call(null,vec__8371,0,null);var compiler = lt.plugins.metascript.meta_script.compilerFromString(code,path,true);var ast = (function (){var G__8372 = compiler;G__8372.parse();
G__8372.pipeline();
return G__8372;
})().root;ast.normalizeLocation();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",1014001140),ast,new cljs.core.Keyword(null,"compiler","compiler",4709343249),compiler], null);
};
var parse = function (code,var_args){
var p__8368 = null;if (arguments.length > 1) {
  p__8368 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return parse__delegate.call(this,code,p__8368);};
parse.cljs$lang$maxFixedArity = 1;
parse.cljs$lang$applyTo = (function (arglist__8477){
var code = cljs.core.first(arglist__8477);
var p__8368 = cljs.core.rest(arglist__8477);
return parse__delegate(code,p__8368);
});
parse.cljs$core$IFn$_invoke$arity$variadic = parse__delegate;
return parse;
})()
;
lt.plugins.metascript.compile_node = (function compile_node(compiler,node){var jsAst = compiler.jsAstFor(node);var code = compiler.generate(jsAst).code;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1016963423),code,new cljs.core.Keyword(null,"node","node",1017291124),node,new cljs.core.Keyword(null,"js-ast","js-ast",4156236656),jsAst], null);
});
lt.plugins.metascript.compile_top_level_at = (function compile_top_level_at(code,line,ch,path){var map__8374 = lt.plugins.metascript.parse.call(null,code,path);var map__8374__$1 = ((cljs.core.seq_QMARK_.call(null,map__8374))?cljs.core.apply.call(null,cljs.core.hash_map,map__8374):map__8374);var compiler = cljs.core.get.call(null,map__8374__$1,new cljs.core.Keyword(null,"compiler","compiler",4709343249));var ast = cljs.core.get.call(null,map__8374__$1,new cljs.core.Keyword(null,"ast","ast",1014001140));var temp__4092__auto__ = ast.findTopLevelAt(line,ch);if(cljs.core.truth_(temp__4092__auto__))
{var node = temp__4092__auto__;return lt.plugins.metascript.compile_node.call(null,compiler,node);
} else
{return null;
}
});
lt.plugins.metascript.dump_node = (function dump_node(node){return cljs.core.println.call(null,node.id(),lt.plugins.metascript.inspect.call(null,node.loc,2));
});
lt.plugins.metascript.dump_nodes = (function dump_nodes(nodes){return cljs.core.dorun.call(null,cljs.core.map.call(null,lt.plugins.metascript.dump_node,nodes));
});
lt.plugins.metascript.dump = (function dump(ast){return lt.plugins.metascript.dump_nodes.call(null,lt.plugins.metascript.ast_seq.call(null,ast));
});
lt.plugins.metascript.__GT_ast = (function __GT_ast(code){return new cljs.core.Keyword(null,"ast","ast",1014001140).cljs$core$IFn$_invoke$arity$1(lt.plugins.metascript.parse.call(null,code));
});
lt.plugins.metascript.loc__GT_map = (function loc__GT_map(loc){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(loc.line - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),loc.column], null);
});
lt.plugins.metascript.node__GT_meta = (function node__GT_meta(node){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",1123661780),lt.plugins.metascript.loc__GT_map.call(null,node.loc.start),new cljs.core.Keyword(null,"end","end",1014004813),lt.plugins.metascript.loc__GT_map.call(null,node.loc.end),new cljs.core.Keyword(null,"type","type",1017479852),"ExpressionStatement"], null);
});
/**
* checks if the editor is connected.
*/
lt.plugins.metascript.has_nodejs_client_QMARK_ = (function has_nodejs_client_QMARK_(editor){var temp__4092__auto__ = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)));if(cljs.core.truth_(temp__4092__auto__))
{var client = temp__4092__auto__;var and__6801__auto__ = new cljs.core.Keyword(null,"tags","tags",1017456523).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client));if(cljs.core.truth_(and__6801__auto__))
{return lt.object.has_tag_QMARK_.call(null,client,new cljs.core.Keyword(null,"nodejs.client","nodejs.client",3623919552));
} else
{return and__6801__auto__;
}
} else
{return null;
}
});
lt.plugins.metascript.eval = (function eval(editor,p__8375){var map__8378 = p__8375;var map__8378__$1 = ((cljs.core.seq_QMARK_.call(null,map__8378))?cljs.core.apply.call(null,cljs.core.hash_map,map__8378):map__8378);var node = cljs.core.get.call(null,map__8378__$1,new cljs.core.Keyword(null,"node","node",1017291124));var code = cljs.core.get.call(null,map__8378__$1,new cljs.core.Keyword(null,"code","code",1016963423));try{var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));var info__$1 = (cljs.core.truth_(lt.plugins.metascript.has_nodejs_client_QMARK_.call(null,editor))?cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"path","path",1017337751),"ltuser"):info);var info__$2 = cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"code","code",1016963423),code,new cljs.core.Keyword(null,"meta","meta",1017252215),lt.plugins.metascript.node__GT_meta.call(null,node));if(cljs.core.truth_(lt.object.has_tag_QMARK_.call(null,lt.plugins.metascript.mjs_lang,new cljs.core.Keyword("lt.plugins.metascript","print-js-code","lt.plugins.metascript/print-js-code",2621934488))))
{cljs.core.println.call(null,code);
} else
{}
return lt.object.raise.call(null,lt.plugins.js.js_lang,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),info__$2], null));
}catch (e8379){if((e8379 instanceof global.Error))
{var e = e8379;return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.eval.js.exception","editor.eval.js.exception",723801901),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ex","ex",1013907493),e,new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(e.loc.line - 1)], null)], null)], null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8379;
} else
{return null;
}
}
}});
lt.plugins.metascript.eval_one = (function eval_one(editor){try{var map__8383 = lt.objs.editor.__GT_cursor.call(null,editor);var map__8383__$1 = ((cljs.core.seq_QMARK_.call(null,map__8383))?cljs.core.apply.call(null,cljs.core.hash_map,map__8383):map__8383);var ch = cljs.core.get.call(null,map__8383__$1,new cljs.core.Keyword(null,"ch","ch",1013907415));var line = cljs.core.get.call(null,map__8383__$1,new cljs.core.Keyword(null,"line","line",1017226086));return lt.plugins.metascript.eval.call(null,editor,lt.plugins.metascript.compile_top_level_at.call(null,lt.objs.editor.__GT_val.call(null,editor),(line + 1),ch,lt.plugins.metascript.__GT_path.call(null,editor)));
}catch (e8382){if((e8382 instanceof global.Error))
{var e = e8382;return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.eval.js.exception","editor.eval.js.exception",723801901),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ex","ex",1013907493),e,new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(e.loc.line - 1)], null)], null)], null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8382;
} else
{return null;
}
}
}});
lt.plugins.metascript.eval_file = (function eval_file(editor){var code = lt.objs.editor.__GT_val.call(null,editor);var map__8386 = lt.plugins.metascript.parse.call(null,code,lt.plugins.metascript.__GT_path.call(null,editor));var map__8386__$1 = ((cljs.core.seq_QMARK_.call(null,map__8386))?cljs.core.apply.call(null,cljs.core.hash_map,map__8386):map__8386);var compiler = cljs.core.get.call(null,map__8386__$1,new cljs.core.Keyword(null,"compiler","compiler",4709343249));var ast = cljs.core.get.call(null,map__8386__$1,new cljs.core.Keyword(null,"ast","ast",1014001140));return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__8384_SHARP_){return lt.plugins.metascript.eval.call(null,editor,lt.plugins.metascript.compile_node.call(null,compiler,p1__8384_SHARP_));
}),lt.plugins.metascript.node_seq.call(null,ast)));
});
lt.plugins.metascript.__BEH__on_eval__DOT__one = (function __BEH__on_eval__DOT__one(editor){return lt.plugins.metascript.eval_one.call(null,editor);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.metascript","on-eval.one","lt.plugins.metascript/on-eval.one",3455030529),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.metascript.__BEH__on_eval__DOT__one,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval.one","eval.one",1173589382),null], null), null));
lt.plugins.metascript.__BEH__on_eval = (function __BEH__on_eval(editor){return lt.plugins.metascript.eval_file.call(null,editor);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.metascript","on-eval","lt.plugins.metascript/on-eval",3689034377),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.metascript.__BEH__on_eval,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval","eval",1017029646),null], null), null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"metascript.disable-javascript-code-output","metascript.disable-javascript-code-output",1477539606),new cljs.core.Keyword(null,"desc","desc",1016984067),"Metascript: Disable javascript code output",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.remove_tags.call(null,lt.plugins.metascript.mjs_lang,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.metascript","print-js-code","lt.plugins.metascript/print-js-code",2621934488)], null));
})], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"metascript.enable-javascript-code-output","metascript.enable-javascript-code-output",1286722847),new cljs.core.Keyword(null,"desc","desc",1016984067),"Metascript: Enable javascript code output",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.add_tags.call(null,lt.plugins.metascript.mjs_lang,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.metascript","print-js-code","lt.plugins.metascript/print-js-code",2621934488)], null));
})], null));
lt.plugins.metascript.next_or_first = (function next_or_first(x,xs){var or__6813__auto__ = cljs.core.first.call(null,cljs.core.subseq.call(null,xs,cljs.core._GT_,x));if(cljs.core.truth_(or__6813__auto__))
{return or__6813__auto__;
} else
{return cljs.core.first.call(null,xs);
}
});
lt.plugins.metascript.previous_or_last = (function previous_or_last(x,xs){var or__6813__auto__ = cljs.core.first.call(null,cljs.core.rsubseq.call(null,xs,cljs.core._LT_,x));if(cljs.core.truth_(or__6813__auto__))
{return or__6813__auto__;
} else
{return cljs.core.last.call(null,xs);
}
});
lt.plugins.metascript.jump_to = (function jump_to(editor,pos){return lt.object.raise.call(null,lt.objs.jump_stack.jump_stack,new cljs.core.Keyword(null,"jump-stack.push!","jump-stack.push!",4063822260),editor,lt.plugins.metascript.__GT_path.call(null,editor),pos);
});
lt.plugins.metascript.cursor_location = (function cursor_location(editor){return lt.plugins.metascript.__GT_location.call(null,lt.objs.editor.__GT_cursor.call(null,editor));
});
lt.plugins.metascript.jump_to_error = (function jump_to_error(select_location){var editor = lt.objs.editor.pool.last_active.call(null);var locations = new cljs.core.Keyword(null,"locations","locations",4111682256).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mjs-hints","mjs-hints",1995468839).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)));var location = select_location.call(null,lt.plugins.metascript.cursor_location.call(null,editor),locations);var temp__4092__auto__ = location;if(cljs.core.truth_(temp__4092__auto__))
{var vec__8388 = temp__4092__auto__;var line = cljs.core.nth.call(null,vec__8388,0,null);var ch = cljs.core.nth.call(null,vec__8388,1,null);return lt.plugins.metascript.jump_to.call(null,editor,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),ch], null));
} else
{return null;
}
});
lt.plugins.metascript.jump_to_next_error = (function jump_to_next_error(){return lt.plugins.metascript.jump_to_error.call(null,lt.plugins.metascript.next_or_first);
});
lt.plugins.metascript.jump_to_previous_error = (function jump_to_previous_error(){return lt.plugins.metascript.jump_to_error.call(null,lt.plugins.metascript.previous_or_last);
});
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"metascript.jump-to-next-error","metascript.jump-to-next-error",1439742193),new cljs.core.Keyword(null,"desc","desc",1016984067),"Metascript: Jump to next error in file",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.metascript.jump_to_next_error], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"metascript.jump-to-previous-error","metascript.jump-to-previous-error",4759225717),new cljs.core.Keyword(null,"desc","desc",1016984067),"Metascript: Jump to previous error in file",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.metascript.jump_to_previous_error], null));
}

//# sourceMappingURL=mighttable_compiled.js.map