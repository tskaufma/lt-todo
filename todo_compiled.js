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
lt.plugins.todo.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___8076 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8076))
{var ts_8077 = temp__4092__auto___8076;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8077))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_8077);
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
lt.plugins.todo.makeTodos = (function makeTodos(text){var e__7768__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__7088__auto__ = (function iter__8051(s__8052){return (new cljs.core.LazySeq(null,(function (){var s__8052__$1 = s__8052;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8052__$1);if(temp__4092__auto__)
{var s__8052__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8052__$2))
{var c__7086__auto__ = cljs.core.chunk_first.call(null,s__8052__$2);var size__7087__auto__ = cljs.core.count.call(null,c__7086__auto__);var b__8054 = cljs.core.chunk_buffer.call(null,size__7087__auto__);if((function (){var i__8053 = 0;while(true){
if((i__8053 < size__7087__auto__))
{var i = cljs.core._nth.call(null,c__7086__auto__,i__8053);cljs.core.chunk_append.call(null,b__8054,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"list-style-type: decimal"], null),i], null));
{
var G__8078 = (i__8053 + 1);
i__8053 = G__8078;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8054),iter__8051.call(null,cljs.core.chunk_rest.call(null,s__8052__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8054),null);
}
} else
{var i = cljs.core.first.call(null,s__8052__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"list-style-type: decimal"], null),i], null),iter__8051.call(null,cljs.core.rest.call(null,s__8052__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7088__auto__.call(null,cljs.core.map.call(null,((function (iter__7088__auto__){
return (function (p1__8040_SHARP_){return [cljs.core.str(new cljs.core.Keyword(null,"lineNumber","lineNumber",684762063).cljs$core$IFn$_invoke$arity$1(p1__8040_SHARP_)),cljs.core.str(": "),cljs.core.str(new cljs.core.Keyword(null,"comment","comment",1964302801).cljs$core$IFn$_invoke$arity$1(p1__8040_SHARP_))].join('');
});})(iter__7088__auto__))
,lt.plugins.todo.todoLines.call(null,lt.plugins.todo.commentLines.call(null,text))));
})()], null)], null));var seq__8055_8079 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8056_8080 = null;var count__8057_8081 = 0;var i__8058_8082 = 0;while(true){
if((i__8058_8082 < count__8057_8081))
{var vec__8059_8083 = cljs.core._nth.call(null,chunk__8056_8080,i__8058_8082);var ev__7769__auto___8084 = cljs.core.nth.call(null,vec__8059_8083,0,null);var func__7770__auto___8085 = cljs.core.nth.call(null,vec__8059_8083,1,null);lt.util.dom.on.call(null,e__7768__auto__,ev__7769__auto___8084,func__7770__auto___8085);
{
var G__8086 = seq__8055_8079;
var G__8087 = chunk__8056_8080;
var G__8088 = count__8057_8081;
var G__8089 = (i__8058_8082 + 1);
seq__8055_8079 = G__8086;
chunk__8056_8080 = G__8087;
count__8057_8081 = G__8088;
i__8058_8082 = G__8089;
continue;
}
} else
{var temp__4092__auto___8090 = cljs.core.seq.call(null,seq__8055_8079);if(temp__4092__auto___8090)
{var seq__8055_8091__$1 = temp__4092__auto___8090;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8055_8091__$1))
{var c__7119__auto___8092 = cljs.core.chunk_first.call(null,seq__8055_8091__$1);{
var G__8093 = cljs.core.chunk_rest.call(null,seq__8055_8091__$1);
var G__8094 = c__7119__auto___8092;
var G__8095 = cljs.core.count.call(null,c__7119__auto___8092);
var G__8096 = 0;
seq__8055_8079 = G__8093;
chunk__8056_8080 = G__8094;
count__8057_8081 = G__8095;
i__8058_8082 = G__8096;
continue;
}
} else
{var vec__8060_8097 = cljs.core.first.call(null,seq__8055_8091__$1);var ev__7769__auto___8098 = cljs.core.nth.call(null,vec__8060_8097,0,null);var func__7770__auto___8099 = cljs.core.nth.call(null,vec__8060_8097,1,null);lt.util.dom.on.call(null,e__7768__auto__,ev__7769__auto___8098,func__7770__auto___8099);
{
var G__8100 = cljs.core.next.call(null,seq__8055_8091__$1);
var G__8101 = null;
var G__8102 = 0;
var G__8103 = 0;
seq__8055_8079 = G__8100;
chunk__8056_8080 = G__8101;
count__8057_8081 = G__8102;
i__8058_8082 = G__8103;
continue;
}
}
} else
{}
}
break;
}
return e__7768__auto__;
});
lt.plugins.todo.todoLines = (function todoLines(lines){return cljs.core.filter.call(null,(function (p1__8061_SHARP_){return lt.plugins.todo.containsAny.call(null,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(p1__8061_SHARP_),cljs.core.list("TODO","FIXME","HACK"));
}),lines);
});
lt.plugins.todo.commentLines = (function commentLines(text){return cljs.core.filter.call(null,(function (p1__8062_SHARP_){return /^[(\/\/);]/.test(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(p1__8062_SHARP_));
}),cljs.core.map_indexed.call(null,(function (idx,line){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lineNumber","lineNumber",684762063),(idx + 1),new cljs.core.Keyword(null,"line","line",1017226086),clojure.string.trim.call(null,line),new cljs.core.Keyword(null,"comment","comment",1964302801),clojure.string.trim.call(null,clojure.string.replace.call(null,line,/^[(\/\/);]/,""))], null);
}),clojure.string.split_lines.call(null,text)));
});
lt.plugins.todo.containsAny = (function containsAny(s,sss){return cljs.core.reduce.call(null,(function (a,b){var or__6371__auto__ = a;if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return b;
}
}),cljs.core.map.call(null,(function (p1__8063_SHARP_){return s.contains(p1__8063_SHARP_);
}),sss));
});
lt.plugins.todo.todo_list = (function todo_list(this$){var e__7768__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Todo List"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#container","div#container",2121300609),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"todo"], null),lt.plugins.todo.makeTodos.call(null,new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(this$))], null)], null));var seq__8070_8104 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8071_8105 = null;var count__8072_8106 = 0;var i__8073_8107 = 0;while(true){
if((i__8073_8107 < count__8072_8106))
{var vec__8074_8108 = cljs.core._nth.call(null,chunk__8071_8105,i__8073_8107);var ev__7769__auto___8109 = cljs.core.nth.call(null,vec__8074_8108,0,null);var func__7770__auto___8110 = cljs.core.nth.call(null,vec__8074_8108,1,null);lt.util.dom.on.call(null,e__7768__auto__,ev__7769__auto___8109,func__7770__auto___8110);
{
var G__8111 = seq__8070_8104;
var G__8112 = chunk__8071_8105;
var G__8113 = count__8072_8106;
var G__8114 = (i__8073_8107 + 1);
seq__8070_8104 = G__8111;
chunk__8071_8105 = G__8112;
count__8072_8106 = G__8113;
i__8073_8107 = G__8114;
continue;
}
} else
{var temp__4092__auto___8115 = cljs.core.seq.call(null,seq__8070_8104);if(temp__4092__auto___8115)
{var seq__8070_8116__$1 = temp__4092__auto___8115;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8070_8116__$1))
{var c__7119__auto___8117 = cljs.core.chunk_first.call(null,seq__8070_8116__$1);{
var G__8118 = cljs.core.chunk_rest.call(null,seq__8070_8116__$1);
var G__8119 = c__7119__auto___8117;
var G__8120 = cljs.core.count.call(null,c__7119__auto___8117);
var G__8121 = 0;
seq__8070_8104 = G__8118;
chunk__8071_8105 = G__8119;
count__8072_8106 = G__8120;
i__8073_8107 = G__8121;
continue;
}
} else
{var vec__8075_8122 = cljs.core.first.call(null,seq__8070_8116__$1);var ev__7769__auto___8123 = cljs.core.nth.call(null,vec__8075_8122,0,null);var func__7770__auto___8124 = cljs.core.nth.call(null,vec__8075_8122,1,null);lt.util.dom.on.call(null,e__7768__auto__,ev__7769__auto___8123,func__7770__auto___8124);
{
var G__8125 = cljs.core.next.call(null,seq__8070_8116__$1);
var G__8126 = null;
var G__8127 = 0;
var G__8128 = 0;
seq__8070_8104 = G__8125;
chunk__8071_8105 = G__8126;
count__8072_8106 = G__8127;
i__8073_8107 = G__8128;
continue;
}
}
} else
{}
}
break;
}
return e__7768__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.todo","todo.list","lt.plugins.todo/todo.list",1842899360),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.todo","on-close-destroy","lt.plugins.todo/on-close-destroy",4510966317)], null),new cljs.core.Keyword(null,"name","name",1017277949),"Todo List",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,filename){lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1017277949)], null),cljs.core.constantly.call(null,[cljs.core.str(filename),cljs.core.str(" - Todo List")].join('')));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),crate.binding.bound.call(null,this$,lt.plugins.todo.todo_list)], null);
}));
lt.plugins.todo.__BEH__read_editor = (function __BEH__read_editor(this$){var todo_obj = new cljs.core.Keyword(null,"todo-list","todo-list",3759774007).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return lt.plugins.todo.setTodoHtml_BANG_.call(null,this$,todo_obj);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.todo","read-editor","lt.plugins.todo/read-editor",2438629722),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.todo.__BEH__read_editor,new cljs.core.Keyword(null,"desc","desc",1016984067),"Todo: Read the content inside an editor",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change","change",3947235106),new cljs.core.Keyword("lt.plugins.todo","read-editor","lt.plugins.todo/read-editor",2438629722)], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.todo","watch-editor","lt.plugins.todo/watch-editor",1511500977),new cljs.core.Keyword(null,"desc","desc",1016984067),"Todo: Watch this editor for changes",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var ed = lt.objs.editor.pool.last_active.call(null);var filename = lt.plugins.todo.get_filename.call(null,ed);var todo_obj = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.todo","todo.list","lt.plugins.todo/todo.list",1842899360),filename);lt.objs.tabs.add_or_focus_BANG_.call(null,todo_obj);
lt.object.update_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todo-list","todo-list",3759774007)], null),((function (ed,filename,todo_obj){
return (function (){return todo_obj;
});})(ed,filename,todo_obj))
);
lt.object.add_behavior_BANG_.call(null,ed,new cljs.core.Keyword("lt.plugins.todo","read-editor","lt.plugins.todo/read-editor",2438629722));
return lt.object.raise.call(null,ed,new cljs.core.Keyword("lt.plugins.todo","read-editor","lt.plugins.todo/read-editor",2438629722));
})], null));
}

//# sourceMappingURL=todo_compiled.js.map