		$(window).scroll(function(){
			var mainmenu=$("#main-menubar");
			var innermenu=$("#inner-menubar");
			var innermenufluid=$("#inner-menubar-fluid");
			var innermenuitems=$("#inner-menu");
			var sidemenu=$("#side-menubar");

			if ($(window).scrollTop()>=mainmenu.outerHeight()){
				innermenu.addClass("inner-menubar-sticky");
				if (innermenufluid.height()<=innermenuitems.height())
					$("#inner-menubar-placeholder").height(innermenuitems.height());
				else
					$("#inner-menubar-placeholder").height(innermenufluid.height());
			}
			else{
				innermenu.removeClass("inner-menubar-sticky");
				$("#inner-menubar-placeholder").height(0);
			}

			if ($(window).scrollTop()>=($("#side-menubar-wrapper").offset().top-innermenu.outerHeight()-20)){
				sidemenu.css({position:'fixed',top:innermenu.outerHeight()+20});
			}
			else{
				sidemenu.css({position:'relative',top:''});
			}

				
		});
