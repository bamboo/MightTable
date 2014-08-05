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
lt.plugins.metascript.metascript_path = lt.objs.files.join.call(null,(function (){var or__6364__auto__ = lt.objs.plugins._STAR_plugin_dir_STAR_;if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return "/home/bamboo/.config/LightTable/plugins/MightTable";
}
})(),"node_modules/meta-script");
lt.plugins.metascript.check_for_errors = lt.objs.thread.thread_STAR_.call(null,(function tfun7839(){var orig__7828__auto__ = argsArray(arguments);var msg__7829__auto__ = orig__7828__auto__.shift();var args__7830__auto__ = orig__7828__auto__.map(cljs.reader.read_string);var raise = ((function (orig__7828__auto__,msg__7829__auto__,args__7830__auto__){
return (function (obj__7831__auto__,k__7832__auto__,v__7833__auto__){return _send(obj__7831__auto__,k__7832__auto__,cljs.core.pr_str.call(null,v__7833__auto__),"clj");
});})(orig__7828__auto__,msg__7829__auto__,args__7830__auto__))
;args__7830__auto__.unshift(msg__7829__auto__.obj);
return ((function (orig__7828__auto__,msg__7829__auto__,args__7830__auto__,raise){
return (function (obj_id,code,path,metascript_path){var map_error = ((function (orig__7828__auto__,msg__7829__auto__,args__7830__auto__,raise){
return (function map_error(e){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",1968829305),e.message,new cljs.core.Keyword(null,"line","line",1017226086),(e.line - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),e.column,new cljs.core.Keyword(null,"nested-errors","nested-errors",1746450547),map_errors.call(null,e.nestedErrors)], null);
});})(orig__7828__auto__,msg__7829__auto__,args__7830__auto__,raise))
;
var map_errors = ((function (orig__7828__auto__,msg__7829__auto__,args__7830__auto__,raise){
return (function map_errors(es){return cljs.core.mapv.call(null,map_error,es);
});})(orig__7828__auto__,msg__7829__auto__,args__7830__auto__,raise))
;
var mjs = require(metascript_path).call(null);var compiler = mjs.compilerFromString(code,path);var ast = compiler.produceAst();var errors = map_errors.call(null,compiler.errors);return raise.call(null,obj_id,new cljs.core.Keyword(null,"mjs-hinted","mjs-hinted",1377635343),errors);
});})(orig__7828__auto__,msg__7829__auto__,args__7830__auto__,raise))
.apply(null,args__7830__auto__);
}));
lt.plugins.metascript.__GT_path = (function __GT_path(editor){return new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)));
});
lt.plugins.metascript.start_check_for_errors = (function start_check_for_errors(this$){return lt.plugins.metascript.check_for_errors.call(null,this$,lt.objs.editor.__GT_val.call(null,this$),lt.plugins.metascript.__GT_path.call(null,this$),lt.plugins.metascript.metascript_path);
});
lt.plugins.metascript.clickable = (function clickable(tag,editor,hint){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"cursor: pointer;"], null),new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(hint)], null));var seq__7846_7971 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7755__auto__){
return (function (){return lt.plugins.metascript.jump_to.call(null,editor,hint);
});})(e__7755__auto__))
], null)));var chunk__7847_7972 = null;var count__7848_7973 = 0;var i__7849_7974 = 0;while(true){
if((i__7849_7974 < count__7848_7973))
{var vec__7850_7975 = cljs.core._nth.call(null,chunk__7847_7972,i__7849_7974);var ev__7756__auto___7976 = cljs.core.nth.call(null,vec__7850_7975,0,null);var func__7757__auto___7977 = cljs.core.nth.call(null,vec__7850_7975,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___7976,func__7757__auto___7977);
{
var G__7978 = seq__7846_7971;
var G__7979 = chunk__7847_7972;
var G__7980 = count__7848_7973;
var G__7981 = (i__7849_7974 + 1);
seq__7846_7971 = G__7978;
chunk__7847_7972 = G__7979;
count__7848_7973 = G__7980;
i__7849_7974 = G__7981;
continue;
}
} else
{var temp__4092__auto___7982 = cljs.core.seq.call(null,seq__7846_7971);if(temp__4092__auto___7982)
{var seq__7846_7983__$1 = temp__4092__auto___7982;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7846_7983__$1))
{var c__7112__auto___7984 = cljs.core.chunk_first.call(null,seq__7846_7983__$1);{
var G__7985 = cljs.core.chunk_rest.call(null,seq__7846_7983__$1);
var G__7986 = c__7112__auto___7984;
var G__7987 = cljs.core.count.call(null,c__7112__auto___7984);
var G__7988 = 0;
seq__7846_7971 = G__7985;
chunk__7847_7972 = G__7986;
count__7848_7973 = G__7987;
i__7849_7974 = G__7988;
continue;
}
} else
{var vec__7851_7989 = cljs.core.first.call(null,seq__7846_7983__$1);var ev__7756__auto___7990 = cljs.core.nth.call(null,vec__7851_7989,0,null);var func__7757__auto___7991 = cljs.core.nth.call(null,vec__7851_7989,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___7990,func__7757__auto___7991);
{
var G__7992 = cljs.core.next.call(null,seq__7846_7983__$1);
var G__7993 = null;
var G__7994 = 0;
var G__7995 = 0;
seq__7846_7971 = G__7992;
chunk__7847_7972 = G__7993;
count__7848_7973 = G__7994;
i__7849_7974 = G__7995;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.plugins.metascript.error_hint = (function error_hint(editor,errors){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hintwrapper","div.hintwrapper",570322369),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"background-color: darkred;"], null),(function (){var iter__7081__auto__ = (function iter__7882(s__7883){return (new cljs.core.LazySeq(null,(function (){var s__7883__$1 = s__7883;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7883__$1);if(temp__4092__auto__)
{var s__7883__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7883__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__7883__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__7885 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__7884 = 0;while(true){
if((i__7884 < size__7080__auto__))
{var map__7896 = cljs.core._nth.call(null,c__7079__auto__,i__7884);var map__7896__$1 = ((cljs.core.seq_QMARK_.call(null,map__7896))?cljs.core.apply.call(null,cljs.core.hash_map,map__7896):map__7896);var e = map__7896__$1;var nested_errors = cljs.core.get.call(null,map__7896__$1,new cljs.core.Keyword(null,"nested-errors","nested-errors",1746450547));cljs.core.chunk_append.call(null,b__7885,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),lt.plugins.metascript.clickable.call(null,new cljs.core.Keyword(null,"div","div",1014003715),editor,e),((cljs.core.empty_QMARK_.call(null,nested_errors))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7081__auto__ = ((function (i__7884,map__7896,map__7896__$1,e,nested_errors,c__7079__auto__,size__7080__auto__,b__7885,s__7883__$2,temp__4092__auto__){
return (function iter__7897(s__7898){return (new cljs.core.LazySeq(null,((function (i__7884,map__7896,map__7896__$1,e,nested_errors,c__7079__auto__,size__7080__auto__,b__7885,s__7883__$2,temp__4092__auto__){
return (function (){var s__7898__$1 = s__7898;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__7898__$1);if(temp__4092__auto____$1)
{var s__7898__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__7898__$2))
{var c__7079__auto____$1 = cljs.core.chunk_first.call(null,s__7898__$2);var size__7080__auto____$1 = cljs.core.count.call(null,c__7079__auto____$1);var b__7900 = cljs.core.chunk_buffer.call(null,size__7080__auto____$1);if((function (){var i__7899 = 0;while(true){
if((i__7899 < size__7080__auto____$1))
{var ne = cljs.core._nth.call(null,c__7079__auto____$1,i__7899);cljs.core.chunk_append.call(null,b__7900,lt.plugins.metascript.clickable.call(null,new cljs.core.Keyword(null,"li.button","li.button",2481585205),editor,ne));
{
var G__7996 = (i__7899 + 1);
i__7899 = G__7996;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7900),iter__7897.call(null,cljs.core.chunk_rest.call(null,s__7898__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7900),null);
}
} else
{var ne = cljs.core.first.call(null,s__7898__$2);return cljs.core.cons.call(null,lt.plugins.metascript.clickable.call(null,new cljs.core.Keyword(null,"li.button","li.button",2481585205),editor,ne),iter__7897.call(null,cljs.core.rest.call(null,s__7898__$2)));
}
} else
{return null;
}
break;
}
});})(i__7884,map__7896,map__7896__$1,e,nested_errors,c__7079__auto__,size__7080__auto__,b__7885,s__7883__$2,temp__4092__auto__))
,null,null));
});})(i__7884,map__7896,map__7896__$1,e,nested_errors,c__7079__auto__,size__7080__auto__,b__7885,s__7883__$2,temp__4092__auto__))
;return iter__7081__auto__.call(null,nested_errors);
})()], null))], null));
{
var G__7997 = (i__7884 + 1);
i__7884 = G__7997;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7885),iter__7882.call(null,cljs.core.chunk_rest.call(null,s__7883__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7885),null);
}
} else
{var map__7901 = cljs.core.first.call(null,s__7883__$2);var map__7901__$1 = ((cljs.core.seq_QMARK_.call(null,map__7901))?cljs.core.apply.call(null,cljs.core.hash_map,map__7901):map__7901);var e = map__7901__$1;var nested_errors = cljs.core.get.call(null,map__7901__$1,new cljs.core.Keyword(null,"nested-errors","nested-errors",1746450547));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),lt.plugins.metascript.clickable.call(null,new cljs.core.Keyword(null,"div","div",1014003715),editor,e),((cljs.core.empty_QMARK_.call(null,nested_errors))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7081__auto__ = ((function (map__7901,map__7901__$1,e,nested_errors,s__7883__$2,temp__4092__auto__){
return (function iter__7902(s__7903){return (new cljs.core.LazySeq(null,((function (map__7901,map__7901__$1,e,nested_errors,s__7883__$2,temp__4092__auto__){
return (function (){var s__7903__$1 = s__7903;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__7903__$1);if(temp__4092__auto____$1)
{var s__7903__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__7903__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__7903__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__7905 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__7904 = 0;while(true){
if((i__7904 < size__7080__auto__))
{var ne = cljs.core._nth.call(null,c__7079__auto__,i__7904);cljs.core.chunk_append.call(null,b__7905,lt.plugins.metascript.clickable.call(null,new cljs.core.Keyword(null,"li.button","li.button",2481585205),editor,ne));
{
var G__7998 = (i__7904 + 1);
i__7904 = G__7998;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7905),iter__7902.call(null,cljs.core.chunk_rest.call(null,s__7903__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7905),null);
}
} else
{var ne = cljs.core.first.call(null,s__7903__$2);return cljs.core.cons.call(null,lt.plugins.metascript.clickable.call(null,new cljs.core.Keyword(null,"li.button","li.button",2481585205),editor,ne),iter__7902.call(null,cljs.core.rest.call(null,s__7903__$2)));
}
} else
{return null;
}
break;
}
});})(map__7901,map__7901__$1,e,nested_errors,s__7883__$2,temp__4092__auto__))
,null,null));
});})(map__7901,map__7901__$1,e,nested_errors,s__7883__$2,temp__4092__auto__))
;return iter__7081__auto__.call(null,nested_errors);
})()], null))], null),iter__7882.call(null,cljs.core.rest.call(null,s__7883__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7081__auto__.call(null,errors);
})()], null)], null));var seq__7906_7999 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__7907_8000 = null;var count__7908_8001 = 0;var i__7909_8002 = 0;while(true){
if((i__7909_8002 < count__7908_8001))
{var vec__7910_8003 = cljs.core._nth.call(null,chunk__7907_8000,i__7909_8002);var ev__7756__auto___8004 = cljs.core.nth.call(null,vec__7910_8003,0,null);var func__7757__auto___8005 = cljs.core.nth.call(null,vec__7910_8003,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8004,func__7757__auto___8005);
{
var G__8006 = seq__7906_7999;
var G__8007 = chunk__7907_8000;
var G__8008 = count__7908_8001;
var G__8009 = (i__7909_8002 + 1);
seq__7906_7999 = G__8006;
chunk__7907_8000 = G__8007;
count__7908_8001 = G__8008;
i__7909_8002 = G__8009;
continue;
}
} else
{var temp__4092__auto___8010 = cljs.core.seq.call(null,seq__7906_7999);if(temp__4092__auto___8010)
{var seq__7906_8011__$1 = temp__4092__auto___8010;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7906_8011__$1))
{var c__7112__auto___8012 = cljs.core.chunk_first.call(null,seq__7906_8011__$1);{
var G__8013 = cljs.core.chunk_rest.call(null,seq__7906_8011__$1);
var G__8014 = c__7112__auto___8012;
var G__8015 = cljs.core.count.call(null,c__7112__auto___8012);
var G__8016 = 0;
seq__7906_7999 = G__8013;
chunk__7907_8000 = G__8014;
count__7908_8001 = G__8015;
i__7909_8002 = G__8016;
continue;
}
} else
{var vec__7911_8017 = cljs.core.first.call(null,seq__7906_8011__$1);var ev__7756__auto___8018 = cljs.core.nth.call(null,vec__7911_8017,0,null);var func__7757__auto___8019 = cljs.core.nth.call(null,vec__7911_8017,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8018,func__7757__auto___8019);
{
var G__8020 = cljs.core.next.call(null,seq__7906_8011__$1);
var G__8021 = null;
var G__8022 = 0;
var G__8023 = 0;
seq__7906_7999 = G__8020;
chunk__7907_8000 = G__8021;
count__7908_8001 = G__8022;
i__7909_8002 = G__8023;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.plugins.metascript.preserving_scroll_location_of = (function preserving_scroll_location_of(this$,action){var cm_ed = lt.objs.editor.__GT_cm_ed.call(null,this$);var prev = cm_ed.getScrollInfo();action.call(null);
return cm_ed.scrollTo(prev.left,prev.top);
});
lt.plugins.metascript.remove_mjs_hints_from = (function remove_mjs_hints_from(this$){var seq__7916 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"widgets","widgets",2354242081).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mjs-hints","mjs-hints",1995468839).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));var chunk__7917 = null;var count__7918 = 0;var i__7919 = 0;while(true){
if((i__7919 < count__7918))
{var widget = cljs.core._nth.call(null,chunk__7917,i__7919);lt.objs.editor.remove_line_widget.call(null,this$,widget);
{
var G__8024 = seq__7916;
var G__8025 = chunk__7917;
var G__8026 = count__7918;
var G__8027 = (i__7919 + 1);
seq__7916 = G__8024;
chunk__7917 = G__8025;
count__7918 = G__8026;
i__7919 = G__8027;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7916);if(temp__4092__auto__)
{var seq__7916__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7916__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__7916__$1);{
var G__8028 = cljs.core.chunk_rest.call(null,seq__7916__$1);
var G__8029 = c__7112__auto__;
var G__8030 = cljs.core.count.call(null,c__7112__auto__);
var G__8031 = 0;
seq__7916 = G__8028;
chunk__7917 = G__8029;
count__7918 = G__8030;
i__7919 = G__8031;
continue;
}
} else
{var widget = cljs.core.first.call(null,seq__7916__$1);lt.objs.editor.remove_line_widget.call(null,this$,widget);
{
var G__8032 = cljs.core.next.call(null,seq__7916__$1);
var G__8033 = null;
var G__8034 = 0;
var G__8035 = 0;
seq__7916 = G__8032;
chunk__7917 = G__8033;
count__7918 = G__8034;
i__7919 = G__8035;
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
var widgets = cljs.core.mapv.call(null,(function (p__7922){var vec__7923 = p__7922;var line = cljs.core.nth.call(null,vec__7923,0,null);var hs = cljs.core.nth.call(null,vec__7923,1,null);return lt.objs.editor.line_widget.call(null,this$,line,lt.plugins.metascript.error_hint.call(null,this$,hs));
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
{var editor = temp__4092__auto__;var cm = lt.objs.editor.__GT_cm_ed.call(null,editor);var lines = cljs.core.range.call(null,cm.firstLine(),cm.lastLine());return lt.objs.editor.operation.call(null,cm,((function (cm,lines,editor,temp__4092__auto__){
return (function (){var seq__7928 = cljs.core.seq.call(null,lines);var chunk__7929 = null;var count__7930 = 0;var i__7931 = 0;while(true){
if((i__7931 < count__7930))
{var i = cljs.core._nth.call(null,chunk__7929,i__7931);cm.foldCode(CodeMirror.Pos(i,0),null,fold_or_unfold);
{
var G__8036 = seq__7928;
var G__8037 = chunk__7929;
var G__8038 = count__7930;
var G__8039 = (i__7931 + 1);
seq__7928 = G__8036;
chunk__7929 = G__8037;
count__7930 = G__8038;
i__7931 = G__8039;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__7928);if(temp__4092__auto____$1)
{var seq__7928__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7928__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__7928__$1);{
var G__8040 = cljs.core.chunk_rest.call(null,seq__7928__$1);
var G__8041 = c__7112__auto__;
var G__8042 = cljs.core.count.call(null,c__7112__auto__);
var G__8043 = 0;
seq__7928 = G__8040;
chunk__7929 = G__8041;
count__7930 = G__8042;
i__7931 = G__8043;
continue;
}
} else
{var i = cljs.core.first.call(null,seq__7928__$1);cm.foldCode(CodeMirror.Pos(i,0),null,fold_or_unfold);
{
var G__8044 = cljs.core.next.call(null,seq__7928__$1);
var G__8045 = null;
var G__8046 = 0;
var G__8047 = 0;
seq__7928 = G__8044;
chunk__7929 = G__8045;
count__7930 = G__8046;
i__7931 = G__8047;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(cm,lines,editor,temp__4092__auto__))
);
} else
{return null;
}
});
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"metascript.fold-all","metascript.fold-all",4301347429),new cljs.core.Keyword(null,"desc","desc",1016984067),"Metascript: Fold all",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.metascript.fold_all.call(null,"fold");
})], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"metascript.unfold-all","metascript.unfold-all",3415797886),new cljs.core.Keyword(null,"desc","desc",1016984067),"Metascript: Unfold all",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.metascript.fold_all.call(null,"unfold");
})], null));
lt.plugins.metascript.node_seq = (function node_seq(node){var iter__7081__auto__ = (function iter__7936(s__7937){return (new cljs.core.LazySeq(null,(function (){var s__7937__$1 = s__7937;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7937__$1);if(temp__4092__auto__)
{var s__7937__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7937__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__7937__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__7939 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__7938 = 0;while(true){
if((i__7938 < size__7080__auto__))
{var i = cljs.core._nth.call(null,c__7079__auto__,i__7938);cljs.core.chunk_append.call(null,b__7939,node.argAt(i));
{
var G__8048 = (i__7938 + 1);
i__7938 = G__8048;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7939),iter__7936.call(null,cljs.core.chunk_rest.call(null,s__7937__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7939),null);
}
} else
{var i = cljs.core.first.call(null,s__7937__$2);return cljs.core.cons.call(null,node.argAt(i),iter__7936.call(null,cljs.core.rest.call(null,s__7937__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7081__auto__.call(null,cljs.core.range.call(null,node.argCount()));
});
lt.plugins.metascript.ast_seq = (function ast_seq(ast){return cljs.core.tree_seq.call(null,(function (node){return (node.argCount() > 0);
}),lt.plugins.metascript.node_seq,ast);
});
lt.plugins.metascript.mjs = require(lt.plugins.metascript.metascript_path).call(null);
lt.plugins.metascript.util_inspect = require("util").inspect;
lt.plugins.metascript.inspect = (function inspect(thing,depth){return lt.plugins.metascript.util_inspect.call(null,thing,false,(function (){var or__6364__auto__ = depth;if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return 5;
}
})());
});
/**
* @param {...*} var_args
*/
lt.plugins.metascript.parse = (function() { 
var parse__delegate = function (code,p__7940){var vec__7943 = p__7940;var path = cljs.core.nth.call(null,vec__7943,0,null);var compiler = lt.plugins.metascript.mjs.compilerFromString(code,path,true);var ast = (function (){var G__7944 = compiler;G__7944.parse();
G__7944.pipeline();
return G__7944;
})().root;ast.normalizeLocation();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",1014001140),ast,new cljs.core.Keyword(null,"compiler","compiler",4709343249),compiler], null);
};
var parse = function (code,var_args){
var p__7940 = null;if (arguments.length > 1) {
  p__7940 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return parse__delegate.call(this,code,p__7940);};
parse.cljs$lang$maxFixedArity = 1;
parse.cljs$lang$applyTo = (function (arglist__8049){
var code = cljs.core.first(arglist__8049);
var p__7940 = cljs.core.rest(arglist__8049);
return parse__delegate(code,p__7940);
});
parse.cljs$core$IFn$_invoke$arity$variadic = parse__delegate;
return parse;
})()
;
lt.plugins.metascript.compile_node = (function compile_node(compiler,node){var jsAst = compiler.jsAstFor(node);var code = compiler.generate(jsAst).code;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1016963423),code,new cljs.core.Keyword(null,"node","node",1017291124),node,new cljs.core.Keyword(null,"js-ast","js-ast",4156236656),jsAst], null);
});
lt.plugins.metascript.compile_top_level_at = (function compile_top_level_at(code,line,ch,path){var map__7946 = lt.plugins.metascript.parse.call(null,code,path);var map__7946__$1 = ((cljs.core.seq_QMARK_.call(null,map__7946))?cljs.core.apply.call(null,cljs.core.hash_map,map__7946):map__7946);var compiler = cljs.core.get.call(null,map__7946__$1,new cljs.core.Keyword(null,"compiler","compiler",4709343249));var ast = cljs.core.get.call(null,map__7946__$1,new cljs.core.Keyword(null,"ast","ast",1014001140));var temp__4092__auto__ = ast.findTopLevelAt(line,ch);if(cljs.core.truth_(temp__4092__auto__))
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
{var client = temp__4092__auto__;var and__6352__auto__ = new cljs.core.Keyword(null,"tags","tags",1017456523).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client));if(cljs.core.truth_(and__6352__auto__))
{return lt.object.has_tag_QMARK_.call(null,client,new cljs.core.Keyword(null,"nodejs.client","nodejs.client",3623919552));
} else
{return and__6352__auto__;
}
} else
{return null;
}
});
lt.plugins.metascript.eval = (function eval(editor,p__7947){var map__7950 = p__7947;var map__7950__$1 = ((cljs.core.seq_QMARK_.call(null,map__7950))?cljs.core.apply.call(null,cljs.core.hash_map,map__7950):map__7950);var node = cljs.core.get.call(null,map__7950__$1,new cljs.core.Keyword(null,"node","node",1017291124));var code = cljs.core.get.call(null,map__7950__$1,new cljs.core.Keyword(null,"code","code",1016963423));try{var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));var info__$1 = (cljs.core.truth_(lt.plugins.metascript.has_nodejs_client_QMARK_.call(null,editor))?cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"path","path",1017337751),"ltuser"):info);var info__$2 = cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"code","code",1016963423),code,new cljs.core.Keyword(null,"meta","meta",1017252215),lt.plugins.metascript.node__GT_meta.call(null,node));if(cljs.core.truth_(lt.object.has_tag_QMARK_.call(null,lt.plugins.metascript.mjs_lang,new cljs.core.Keyword("lt.plugins.metascript","print-js-code","lt.plugins.metascript/print-js-code",2621934488))))
{cljs.core.println.call(null,code);
} else
{}
return lt.object.raise.call(null,lt.plugins.js.js_lang,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),info__$2], null));
}catch (e7951){if((e7951 instanceof global.Error))
{var e = e7951;return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.eval.js.exception","editor.eval.js.exception",723801901),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ex","ex",1013907493),e,new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(e.loc.line - 1)], null)], null)], null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7951;
} else
{return null;
}
}
}});
lt.plugins.metascript.eval_one = (function eval_one(editor){try{var map__7955 = lt.objs.editor.__GT_cursor.call(null,editor);var map__7955__$1 = ((cljs.core.seq_QMARK_.call(null,map__7955))?cljs.core.apply.call(null,cljs.core.hash_map,map__7955):map__7955);var ch = cljs.core.get.call(null,map__7955__$1,new cljs.core.Keyword(null,"ch","ch",1013907415));var line = cljs.core.get.call(null,map__7955__$1,new cljs.core.Keyword(null,"line","line",1017226086));return lt.plugins.metascript.eval.call(null,editor,lt.plugins.metascript.compile_top_level_at.call(null,lt.objs.editor.__GT_val.call(null,editor),(line + 1),ch,lt.plugins.metascript.__GT_path.call(null,editor)));
}catch (e7954){if((e7954 instanceof global.Error))
{var e = e7954;return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.eval.js.exception","editor.eval.js.exception",723801901),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ex","ex",1013907493),e,new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(e.loc.line - 1)], null)], null)], null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7954;
} else
{return null;
}
}
}});
lt.plugins.metascript.eval_file = (function eval_file(editor){var code = lt.objs.editor.__GT_val.call(null,editor);var map__7958 = lt.plugins.metascript.parse.call(null,code,lt.plugins.metascript.__GT_path.call(null,editor));var map__7958__$1 = ((cljs.core.seq_QMARK_.call(null,map__7958))?cljs.core.apply.call(null,cljs.core.hash_map,map__7958):map__7958);var compiler = cljs.core.get.call(null,map__7958__$1,new cljs.core.Keyword(null,"compiler","compiler",4709343249));var ast = cljs.core.get.call(null,map__7958__$1,new cljs.core.Keyword(null,"ast","ast",1014001140));return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (code,map__7958,map__7958__$1,compiler,ast){
return (function (p1__7956_SHARP_){return lt.plugins.metascript.eval.call(null,editor,lt.plugins.metascript.compile_node.call(null,compiler,p1__7956_SHARP_));
});})(code,map__7958,map__7958__$1,compiler,ast))
,lt.plugins.metascript.node_seq.call(null,ast)));
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
lt.plugins.metascript.next_or_first = (function next_or_first(x,xs){var or__6364__auto__ = cljs.core.first.call(null,cljs.core.subseq.call(null,xs,cljs.core._GT_,x));if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return cljs.core.first.call(null,xs);
}
});
lt.plugins.metascript.previous_or_last = (function previous_or_last(x,xs){var or__6364__auto__ = cljs.core.first.call(null,cljs.core.rsubseq.call(null,xs,cljs.core._LT_,x));if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return cljs.core.last.call(null,xs);
}
});
lt.plugins.metascript.jump_to = (function jump_to(editor,pos){return lt.object.raise.call(null,lt.objs.jump_stack.jump_stack,new cljs.core.Keyword(null,"jump-stack.push!","jump-stack.push!",4063822260),editor,lt.plugins.metascript.__GT_path.call(null,editor),pos);
});
lt.plugins.metascript.cursor_location = (function cursor_location(editor){return lt.plugins.metascript.__GT_location.call(null,lt.objs.editor.__GT_cursor.call(null,editor));
});
lt.plugins.metascript.jump_to_error = (function jump_to_error(select_location){var editor = lt.objs.editor.pool.last_active.call(null);var locations = new cljs.core.Keyword(null,"locations","locations",4111682256).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mjs-hints","mjs-hints",1995468839).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)));var location = select_location.call(null,lt.plugins.metascript.cursor_location.call(null,editor),locations);var temp__4092__auto__ = location;if(cljs.core.truth_(temp__4092__auto__))
{var vec__7960 = temp__4092__auto__;var line = cljs.core.nth.call(null,vec__7960,0,null);var ch = cljs.core.nth.call(null,vec__7960,1,null);return lt.plugins.metascript.jump_to.call(null,editor,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),ch], null));
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