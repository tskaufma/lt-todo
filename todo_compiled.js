if(!lt.util.load.provided_QMARK_('lt.plugins.todo')) {
goog.provide('lt.plugins.todo');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.objs.command');
goog.require('clojure.string');
goog.require('crate.binding');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.todo.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___8283 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8283))
{var ts_8284 = temp__4092__auto___8283;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8284))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_8284);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.todo","on-close-destroy","lt.plugins.todo/on-close-destroy",4510966317),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.todo.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.todo.get_filename = (function get_filename(ed){return new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));
});
lt.plugins.todo.setTodoHtml_BANG_ = (function setTodoHtml_BANG_(ed,obj){return lt.object.merge_BANG_.call(null,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",1017460895),lt.objs.editor.__GT_cm_ed.call(null,ed).getValue()], null));
});
lt.plugins.todo.makeTodos = (function makeTodos(text){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__7466__auto__ = (function iter__8258(s__8259){return (new cljs.core.LazySeq(null,(function (){var s__8259__$1 = s__8259;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8259__$1);if(temp__4092__auto__)
{var s__8259__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8259__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__8259__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__8261 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__8260 = 0;while(true){
if((i__8260 < size__7465__auto__))
{var i = cljs.core._nth.call(null,c__7464__auto__,i__8260);cljs.core.chunk_append.call(null,b__8261,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"list-style-type: decimal"], null),i], null));
{
var G__8285 = (i__8260 + 1);
i__8260 = G__8285;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8261),iter__8258.call(null,cljs.core.chunk_rest.call(null,s__8259__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8261),null);
}
} else
{var i = cljs.core.first.call(null,s__8259__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"list-style-type: decimal"], null),i], null),iter__8258.call(null,cljs.core.rest.call(null,s__8259__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,cljs.core.map.call(null,((function (iter__7466__auto__){
return (function (p1__8247_SHARP_){return [cljs.core.str(new cljs.core.Keyword(null,"lineNumber","lineNumber",684762063).cljs$core$IFn$_invoke$arity$1(p1__8247_SHARP_)),cljs.core.str(": "),cljs.core.str(new cljs.core.Keyword(null,"comment","comment",1964302801).cljs$core$IFn$_invoke$arity$1(p1__8247_SHARP_))].join('');
});})(iter__7466__auto__))
,lt.plugins.todo.todoLines.call(null,lt.plugins.todo.commentLines.call(null,text))));
})()], null)], null));var seq__8262_8286 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8263_8287 = null;var count__8264_8288 = 0;var i__8265_8289 = 0;while(true){
if((i__8265_8289 < count__8264_8288))
{var vec__8266_8290 = cljs.core._nth.call(null,chunk__8263_8287,i__8265_8289);var ev__8118__auto___8291 = cljs.core.nth.call(null,vec__8266_8290,0,null);var func__8119__auto___8292 = cljs.core.nth.call(null,vec__8266_8290,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___8291,func__8119__auto___8292);
{
var G__8293 = seq__8262_8286;
var G__8294 = chunk__8263_8287;
var G__8295 = count__8264_8288;
var G__8296 = (i__8265_8289 + 1);
seq__8262_8286 = G__8293;
chunk__8263_8287 = G__8294;
count__8264_8288 = G__8295;
i__8265_8289 = G__8296;
continue;
}
} else
{var temp__4092__auto___8297 = cljs.core.seq.call(null,seq__8262_8286);if(temp__4092__auto___8297)
{var seq__8262_8298__$1 = temp__4092__auto___8297;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8262_8298__$1))
{var c__7497__auto___8299 = cljs.core.chunk_first.call(null,seq__8262_8298__$1);{
var G__8300 = cljs.core.chunk_rest.call(null,seq__8262_8298__$1);
var G__8301 = c__7497__auto___8299;
var G__8302 = cljs.core.count.call(null,c__7497__auto___8299);
var G__8303 = 0;
seq__8262_8286 = G__8300;
chunk__8263_8287 = G__8301;
count__8264_8288 = G__8302;
i__8265_8289 = G__8303;
continue;
}
} else
{var vec__8267_8304 = cljs.core.first.call(null,seq__8262_8298__$1);var ev__8118__auto___8305 = cljs.core.nth.call(null,vec__8267_8304,0,null);var func__8119__auto___8306 = cljs.core.nth.call(null,vec__8267_8304,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___8305,func__8119__auto___8306);
{
var G__8307 = cljs.core.next.call(null,seq__8262_8298__$1);
var G__8308 = null;
var G__8309 = 0;
var G__8310 = 0;
seq__8262_8286 = G__8307;
chunk__8263_8287 = G__8308;
count__8264_8288 = G__8309;
i__8265_8289 = G__8310;
continue;
}
}
} else
{}
}
break;
}
return e__8117__auto__;
});
lt.plugins.todo.todoLines = (function todoLines(lines){return cljs.core.filter.call(null,(function (p1__8268_SHARP_){return lt.plugins.todo.containsAny.call(null,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(p1__8268_SHARP_),cljs.core.list("TODO","FIXME"));
}),lines);
});
lt.plugins.todo.commentLines = (function commentLines(text){return cljs.core.filter.call(null,(function (p1__8269_SHARP_){return new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(p1__8269_SHARP_).startsWith(";");
}),cljs.core.map_indexed.call(null,(function (idx,line){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lineNumber","lineNumber",684762063),(idx + 1),new cljs.core.Keyword(null,"line","line",1017226086),clojure.string.trim.call(null,line),new cljs.core.Keyword(null,"comment","comment",1964302801),clojure.string.trim.call(null,clojure.string.replace.call(null,line,";",""))], null);
}),clojure.string.split_lines.call(null,text)));
});
lt.plugins.todo.containsAny = (function containsAny(s,sss){return cljs.core.reduce.call(null,(function (a,b){var or__6755__auto__ = a;if(cljs.core.truth_(or__6755__auto__))
{return or__6755__auto__;
} else
{return b;
}
}),cljs.core.map.call(null,(function (p1__8270_SHARP_){return s.contains(p1__8270_SHARP_);
}),sss));
});
lt.plugins.todo.todo_list = (function todo_list(this$){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Todo List"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#container","div#container",2121300609),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"todo"], null),lt.plugins.todo.makeTodos.call(null,new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(this$))], null)], null));var seq__8277_8311 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8278_8312 = null;var count__8279_8313 = 0;var i__8280_8314 = 0;while(true){
if((i__8280_8314 < count__8279_8313))
{var vec__8281_8315 = cljs.core._nth.call(null,chunk__8278_8312,i__8280_8314);var ev__8118__auto___8316 = cljs.core.nth.call(null,vec__8281_8315,0,null);var func__8119__auto___8317 = cljs.core.nth.call(null,vec__8281_8315,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___8316,func__8119__auto___8317);
{
var G__8318 = seq__8277_8311;
var G__8319 = chunk__8278_8312;
var G__8320 = count__8279_8313;
var G__8321 = (i__8280_8314 + 1);
seq__8277_8311 = G__8318;
chunk__8278_8312 = G__8319;
count__8279_8313 = G__8320;
i__8280_8314 = G__8321;
continue;
}
} else
{var temp__4092__auto___8322 = cljs.core.seq.call(null,seq__8277_8311);if(temp__4092__auto___8322)
{var seq__8277_8323__$1 = temp__4092__auto___8322;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8277_8323__$1))
{var c__7497__auto___8324 = cljs.core.chunk_first.call(null,seq__8277_8323__$1);{
var G__8325 = cljs.core.chunk_rest.call(null,seq__8277_8323__$1);
var G__8326 = c__7497__auto___8324;
var G__8327 = cljs.core.count.call(null,c__7497__auto___8324);
var G__8328 = 0;
seq__8277_8311 = G__8325;
chunk__8278_8312 = G__8326;
count__8279_8313 = G__8327;
i__8280_8314 = G__8328;
continue;
}
} else
{var vec__8282_8329 = cljs.core.first.call(null,seq__8277_8323__$1);var ev__8118__auto___8330 = cljs.core.nth.call(null,vec__8282_8329,0,null);var func__8119__auto___8331 = cljs.core.nth.call(null,vec__8282_8329,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___8330,func__8119__auto___8331);
{
var G__8332 = cljs.core.next.call(null,seq__8277_8323__$1);
var G__8333 = null;
var G__8334 = 0;
var G__8335 = 0;
seq__8277_8311 = G__8332;
chunk__8278_8312 = G__8333;
count__8279_8313 = G__8334;
i__8280_8314 = G__8335;
continue;
}
}
} else
{}
}
break;
}
return e__8117__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.todo","todo.list","lt.plugins.todo/todo.list",1842899360),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.todo","on-close-destroy","lt.plugins.todo/on-close-destroy",4510966317)], null),new cljs.core.Keyword(null,"name","name",1017277949),"Todo List",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,filename){lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1017277949)], null),cljs.core.constantly.call(null,[cljs.core.str(filename),cljs.core.str(" - Todo List")].join('')));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),crate.binding.bound.call(null,this$,lt.plugins.todo.todo_list)], null);
}));
lt.plugins.todo.__BEH__read_editor = (function __BEH__read_editor(this$){var todo_obj = new cljs.core.Keyword(null,"todo-list","todo-list",3759774007).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return lt.plugins.todo.setTodoHtml_BANG_.call(null,this$,todo_obj);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.todo","read-editor","lt.plugins.todo/read-editor",2438629722),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.todo.__BEH__read_editor,new cljs.core.Keyword(null,"desc","desc",1016984067),"Todo: Read the content inside an editor",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change","change",3947235106),new cljs.core.Keyword("lt.plugins.todo","read-editor","lt.plugins.todo/read-editor",2438629722)], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.todo","watch-editor","lt.plugins.todo/watch-editor",1511500977),new cljs.core.Keyword(null,"desc","desc",1016984067),"Todo: Watch this editor for changes",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var ed = lt.objs.editor.pool.last_active.call(null);var filename = lt.plugins.todo.get_filename.call(null,ed);var todo_obj = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.todo","todo.list","lt.plugins.todo/todo.list",1842899360),filename);lt.objs.tabs.add_or_focus_BANG_.call(null,todo_obj);
lt.object.update_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todo-list","todo-list",3759774007)], null),(function (){return todo_obj;
}));
lt.object.add_behavior_BANG_.call(null,ed,new cljs.core.Keyword("lt.plugins.todo","read-editor","lt.plugins.todo/read-editor",2438629722));
return lt.object.raise.call(null,ed,new cljs.core.Keyword("lt.plugins.todo","read-editor","lt.plugins.todo/read-editor",2438629722));
})], null));
}

//# sourceMappingURL=todo_compiled.js.map