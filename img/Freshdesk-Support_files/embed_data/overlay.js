google.maps.__gjsload__('overlay', function(_){var xw=_.oa("g"),yw=_.n(),zw=function(a){a.Vf=a.Vf||new yw;return a.Vf},Aw=function(a){this.Z=new _.dh(function(){var b=a.Vf;if(a.getPanes()){if(a.getProjection()){if(!b.g&&a.onAdd)a.onAdd();b.g=!0;a.draw()}}else{if(b.g)if(a.onRemove)a.onRemove();else a.remove();b.g=!1}},0)},Bw=function(a,b){function c(){return _.eh(e.Z)}var d=zw(a),e=d.Ce;e||(e=d.Ce=new Aw(a));_.B(d.Y||[],_.N.removeListener);var f=d.ha=d.ha||new _.Dn,g=b.__gm;f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("center",g,"projectionCenterQ");
f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);f=d.Oh=d.Oh||new xw(f);f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);a.bindTo("projection",f,"outProjection");a.bindTo("panes",g);d.Y=[_.N.addListener(a,"panes_changed",c),_.N.addListener(g,"zoom_changed",c),_.N.addListener(g,"offset_changed",c),_.N.addListener(b,"projection_changed",c),_.N.addListener(g,"projectioncenterq_changed",c)];c();b instanceof _.Xe&&(_.Gi(b,"Ox"),_.ao("Ox","-p",a))},
Ew=function(a){if(a){var b=a.getMap(),c=a.__gmop;if(c){if(c.map==b)return;a.__gmop=null;c.cg()}if(b&&b instanceof _.Xe){var d=b.__gm;d.overlayLayer?a.__gmop=new Cw(b,a,d.overlayLayer):d.g.then(function(e){e=e.va;var f=new Dw(b,e);e.ta(f);d.overlayLayer=f;Ew(a)})}}},Cw=function(a,b,c){this.map=a;this.sa=b;this.Il=c;this.pe=!1;_.Gi(this.map,"Ox");_.ao("Ox","-p",this.sa);c.h.push(this);c.g&&Fw(this,c.g);c.i.Lf()},Fw=function(a,b){a.sa.get("projection")!=b&&(a.sa.bindTo("panes",a.map.__gm),a.sa.set("projection",
b))},Dw=function(a,b){this.j=a;this.i=b;this.g=null;this.h=[]};_.A(xw,_.O);xw.prototype.changed=function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.rd(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.g:null))};_.A(Aw,_.O);Cw.prototype.draw=function(){this.pe||(this.pe=!0,this.sa.onAdd&&this.sa.onAdd());this.sa.draw&&this.sa.draw()};Cw.prototype.cg=function(){_.bo("Ox","-p",this.sa);this.sa.unbindAll();this.sa.set("panes",null);this.sa.set("projection",null);_.ib(this.Il.h,this);this.pe&&(this.pe=!1,this.sa.onRemove?this.sa.onRemove():this.sa.remove())};Dw.prototype.dispose=_.n();
Dw.prototype.Sa=function(a,b,c,d,e,f){var g=this.g=this.g||new _.wo(this.j,this.i,_.n());g.Sa(a,b,c,d,e,f);a=_.Ca(this.h);for(b=a.next();!b.done;b=a.next())b=b.value,Fw(b,g),b.draw()};_.pf("overlay",{Cg:function(a){if(a){var b=a.getMap();if(b&&b instanceof _.Xe||a.__gmop)Ew(a);else{b=a.getMap();var c=zw(a),d=c.Zk;c.Zk=b;d&&(c=zw(a),(d=c.ha)&&d.unbindAll(),(d=c.Oh)&&d.unbindAll(),a.unbindAll(),a.set("panes",null),a.set("projection",null),_.B(c.Y,_.N.removeListener),c.Y=null,c.Ce&&(c.Ce.Z.Qa(),c.Ce=null),_.bo("Ox","-p",a));b&&Bw(a,b)}}},preventMapHitsFrom:function(a){_.lp(a,{onClick:function(b){return _.Eo(b.event)},Ka:function(b){return _.Bo(b)},nc:function(b){return _.Co(b)},Za:function(b){return _.Co(b)},
Pa:function(b){return _.Do(b)}}).Jc(!0)},preventMapHitsAndGesturesFrom:function(a){a.addEventListener("click",_.oe);a.addEventListener("contextmenu",_.oe);a.addEventListener("dblclick",_.oe);a.addEventListener("mousedown",_.oe);a.addEventListener("mousemove",_.oe);a.addEventListener("MSPointerDown",_.oe);a.addEventListener("pointerdown",_.oe);a.addEventListener("touchstart",_.oe);a.addEventListener("wheel",_.oe)}});});
