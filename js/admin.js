( function ( $ ) {

	$( document ).ready( function () {

		$( '.bspb-plugin-settings .color-picker' ).wpColorPicker();

		$( '.bspb-plugin-settings' ).checkBo();
		//$( '.bspb-plugin-animation' ).checkBo();

		$( '.bspb-plugin-settings input.reset-configuration' ).on( 'click', function ( event ) {
			return confirm( bspbArgs.resetScriptToDefaults );
		} );

		$( '.bspb-plugin-settings input.reset-settings' ).on( 'click', function ( event ) {
			return confirm( bspbArgs.resetSettingsToDefaults );
		} );

		$( '.bspb-plugin-settings input.reset-animation' ).on( 'click', function ( event ) {
			return confirm( bspbArgs.resetSettingsToDefaults );
		} );

		if( $("#bspb_transparent_background").is(':checked') ){
			$(".bspb_background_color").hide();
		}else{
			$(".bspb_background_color").show();
		}

		$("#bspb_transparent_background").change(function(){
                //si la case a cocher est cochée
		if(this.checked){

			//$(".bspb_background_color").slideDown( "slow");
			$(".bspb_background_color").hide();
		}else{
			//$(".bspb_background_color").slideUp( "slow");
			$(".bspb_background_color").show();
		}

		});

		if( $("#bspb_opacity_bar").is(':checked') ){
			$(".overlay_opacity_bar").show();

		}else{
			$(".overlay_opacity_bar").hide();
		}
		$("#bspb_opacity_bar").change(function(){
                //si la case a cocher est cochée
		if(this.checked){
			$(".overlay_opacity_bar").show();
		}else{
			$(".overlay_opacity_bar").hide();

		}
		});

	} );

} )( jQuery );

/*
 * checkBo lightweight jQuery plugin v0.1.4 by  @ElmahdiMahmoud
 * Licensed under the MIT license - https://github.com/elmahdim/checkbo/blob/master/LICENSE
 *
 * Custom checkbox and radio
 * Author URL: elmahdim.com
 */
!function(e){e.fn.checkBo=function(c){return c=e.extend({},{checkAllButton:null,checkAllTarget:null,checkAllTextDefault:null,checkAllTextToggle:null},c),this.each(function(){function t(e){this.input=e}function n(){var c=e(this).is(":checked");e(this).closest("label").toggleClass("checked",c)}function i(e,c,t){e.text(e.parent(a).hasClass("checked")?t:c)}function h(c){var t=c.attr("data-show");c=c.attr("data-hide"),e(t).removeClass("is-hidden"),e(c).addClass("is-hidden")}var l=e(this),a=l.find(".cb-checkbox"),d=l.find(".cb-radio"),o=l.find(".cb-switcher"),s=a.find("input:checkbox"),f=d.find("input:radio");s.wrap('<span class="cb-inner"><i></i></span>'),f.wrap('<span class="cb-inner"><i></i></span>');var k=new t("input:checkbox"),r=new t("input:radio");if(t.prototype.checkbox=function(e){var c=e.find(this.input).is(":checked");e.find(this.input).prop("checked",!c).trigger("change")},t.prototype.radiobtn=function(c,t){var n=e('input:radio[name="'+t+'"]');n.prop("checked",!1),n.closest(n.closest(d)).removeClass("checked"),c.addClass("checked"),c.find(this.input).get(0).checked=c.hasClass("checked"),c.find(this.input).change()},s.on("change",n),f.on("change",n),a.find("a").on("click",function(e){e.stopPropagation()}),a.on("click",function(c){c.preventDefault(),k.checkbox(e(this)),c=e(this).attr("data-toggle"),e(c).toggleClass("is-hidden"),h(e(this))}),d.on("click",function(c){c.preventDefault(),r.radiobtn(e(this),e(this).find("input:radio").attr("name")),h(e(this))}),e.fn.toggleCheckbox=function(){this.prop("checked",!this.is(":checked"))},e.fn.switcherChecker=function(){var c=e(this),t=c.find("input"),n=c.find(".cb-state");t.is(":checked")?(c.addClass("checked"),n.html(t.attr("data-state-on"))):(c.removeClass("checked"),n.html(t.attr("data-state-off")))},o.on("click",function(c){c.preventDefault(),c=e(this),c.find("input").toggleCheckbox(),c.switcherChecker(),e(c.attr("data-toggle")).toggleClass("is-hidden")}),o.each(function(){e(this).switcherChecker()}),c.checkAllButton&&c.checkAllTarget){var u=e(this);u.find(e(c.checkAllButton)).on("click",function(){u.find(c.checkAllTarget).find("input:checkbox").each(function(){u.find(e(c.checkAllButton)).hasClass("checked")?u.find(c.checkAllTarget).find("input:checkbox").prop("checked",!0).change():u.find(c.checkAllTarget).find("input:checkbox").prop("checked",!1).change()}),i(u.find(e(c.checkAllButton)).find(".toggle-text"),c.checkAllTextDefault,c.checkAllTextToggle)}),u.find(c.checkAllTarget).find(a).on("click",function(){u.find(c.checkAllButton).find("input:checkbox").prop("checked",!1).change().removeClass("checked"),i(u.find(e(c.checkAllButton)).find(".toggle-text"),c.checkAllTextDefault,c.checkAllTextToggle)})}l.find('[checked="checked"]').closest("label").addClass("checked"),l.find("input").is("input:disabled")&&l.find("input:disabled").closest("label").off().addClass("disabled")})}}(jQuery,window,document);