!function($){$(".charitable-campaign-nav").on("click","li.tab_title a",(function(a){a.preventDefault();var t=$(".charitable-campaign-preview"),e=$(this).parent().data("tab-id");t.find("li#tab_"+e+"_title").attr("data-tab-type");$(".tab-content ul li").removeClass("active"),$("nav li.tab_title").removeClass("active"),$(this).parent().addClass("active"),$(".tab-content ul li#tab_"+e+"_content").addClass("active"),$(".charitable-layout-options-tab .charitable-group").removeClass("active"),$(".charitable-layout-options-tab").find("[data-group_id="+e+"]").addClass("active").removeClass("charitable-closed"),$(".charitable-layout-options-tab").find("[data-group_id="+e+"]").find(".charitable-group-rows").show(),$(".charitable-layout-options-tab").find("[data-group_id="+e+"]").find(".charitable-toggleable-group i").removeClass(".charitable-angle-right").addClass("charitable-angle-down"),$("#layout-options a").click()})),$(".charitable-campaign-field").on("click","ul.charitable-template-donation-amounts li",(function(a){if($(this).parent().find("li").removeClass("selected"),$(this).addClass("selected"),$(this).find('input[type="radio"]').prop("checked",!0),$(this).hasClass("custom-donation-amount"));else{const a=$(this).find('input[type="radio"]').val();$(this).closest(".charitable-campaign-container").find('form.campaign-donation input[name="charitable_donation_amount"]').val(a)}})),$(".charitable-campaign-field").on("keyup",'ul.charitable-template-donation-amounts input[name="custom_donation_amount"]',(function(a){$(this).closest(".charitable-campaign-container").find('form.campaign-donation input[name="charitable_donation_amount"]').val($(this).val())}));const a=document.querySelector(".charitable-mastodon-share");null!==a&&a.addEventListener("click",(t=>{if(localStorage.getItem("mastodon-instance"))a.href=`\n                    https://${localStorage.getItem("mastodon-instance")}/share?text=${encodeURIComponent(document.title)}%0A${encodeURIComponent(location.href)}`;else{t.preventDefault();let a=window.prompt("Please tell me your Mastodon instance");localStorage.setItem("mastodon-instance",a)}}))}(jQuery);