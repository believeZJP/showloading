(function($){
	/**
	 * 显示搜索遮罩层
	 * param：可以传入一个div的id来控制在哪个div上显示遮罩层,
	 * 也可以不传,默认为全屏遮罩
	 */
    showLoadingDiv = function(id){
       	var idDom = document.getElementById("maskLayerDiv");
	    if(idDom){
			idDom.parentNode.removeChild(idDom);
//	        document.getElementById("maskLayerDiv").remove(); //删除这个在safari里会报错
        }
        var loadingDiv = "<div id='maskLayerDiv' style='text-align:center;overflow-y:hidden;position:absolute;width:100%;height:100%;left:0px;top:0px;z-index:2;display:none;background:;'>"+
            "<div style='text-align:center;overflow-y:hidden;opacity:0.5;filter:alpha(opacity=50);position:absolute; width:100%; height:100%; left:0px; top:0px; background: #E9EDF9;'></div>"+
 		"<img src='images/loading.gif' style='position:absolute;top:50%;left:50%;margin-left:-36px'></i>"+
            "</div>";
        if(!id){
            if(!document.getElementById("maskLayerDiv")){
                $("body").append(loadingDiv);
            }
        }else{
            var inWrapDiv = document.getElementById(id);
            if(inWrapDiv){
	            $(inWrapDiv).after(loadingDiv);
	            $(inWrapDiv).css("position","relative");
	            var left = 0,top = 0;
			    left =  inWrapDiv.offsetLeft;
			    top = inWrapDiv.offsetTop;     //clientY 为鼠标在窗体中的 y 坐标值
	            
	            $("#maskLayerDiv").css({
	            	height : $(inWrapDiv).height(),
	            	width : $(inWrapDiv).width(),
	            	left:left,
	            	top: top
	            });
            }else{
                $("body").append(loadingDiv);
            }
        }
        var loadDiv = document.getElementById("maskLayerDiv");
        loadDiv.style.display = "block";
    };
	/**
	 * 隐藏搜索遮罩层
	 */
	hideLoadingDiv = function(divId){
		var loadDiv = document.getElementById("maskLayerDiv");
	if(loadDiv)
		loadDiv.style.display = "none";
	};
	window.showLoadingDiv = showLoadingDiv;
    window.hideLoadingDiv = hideLoadingDiv;
})(jQuery);
/**
 * jquery 遮罩层插件，显示调用$.fn.showLoadingDiv();
* 		      隐藏调用$.fn.hideLoadingDiv();
* 		      也可以传入div的id，在该id上显示遮罩层。调用方式：$.fn.showLoadingDiv(id);
**/
