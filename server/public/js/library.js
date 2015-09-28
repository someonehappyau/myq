		$(window).scroll(function(){
			console.log($("#inner-menubar-fluid").height());
			var fluid=$("#inner-menubar-fluid");
			var menu=$("#inner-menu");

			if ($(window).scrollTop()>=50){
				$("#inner-menubar").addClass("inner-menubar-sticky");
				if (fluid.height()<=menu.height())
					$("#inner-menubar-placeholder").height(menu.height());
				else
					$("#inner-menubar-placeholder").height(fluid.height());
			}
			else{
				$("#inner-menubar").removeClass("inner-menubar-sticky");
				$("#inner-menubar-placeholder").height(0);
			}
		});
