
//MENU
$(document).ready(function() {
		$(document).delegate('.open', 'click', function(event){
			$(this).addClass('oppenned');
			event.stopPropagation();
		})
		$(document).delegate('body', 'click', function(event) {
			$('.open').removeClass('oppenned');
		})
		$(document).delegate('.cls', 'click', function(event){
			$('.open').removeClass('oppenned');
			event.stopPropagation();
		});
	});
  //défilement des pages
    $(document).ready(function() {
  		$('.js-scrollTo').on('click', function() { // Au clic sur un élément
  			var page = $(this).attr('href'); // Page cible
  			var speed = 750; // Durée de l'animation (en ms)
  			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
  			return false;
  		});
  	});
/*fait disparaitre le menu*/
  $(window).scroll(function(){
    $(".top").css("opacity", 1 - $(window).scrollTop() / 350);
  });
  /*competences*/
  $(".progress div").each(function () {
      var display = $(this),
          currentValue = parseInt(display.text()),
          nextValue = $(this).attr("data-values"),
          diff = nextValue - currentValue,
          step = (0 < diff ? 1 : -1);
      if (nextValue == "0") {
          $(display).css("padding", "0");
      } else {
          $(display).css("color", "#fff").animate({
              "width": nextValue + "%"
          }, "slow");
      }
      for (var i = 0; i < Math.abs(diff); ++i) {
          setTimeout(function () {
              currentValue += step
              display.html(currentValue + "%");
          }, 20 * i);
      }
  });
  /*centre d'INTERETS*/
  (function( $ ) {
	$.imagePreview = function( element ) {
		this.$element = $( element );
		this.init();
	};
	$.imagePreview.prototype = {
		init: function() {
			this.$triggers = this.$element.find( ".image-link" );
			this.$closeLinks = this.$element.find( ".image-details-close" );
			this.open();
			this.close();
		},
		_getContent: function( element ) {
			var $parent = element.parent(),
				title = $parent.data( "title" ),
				desc = $parent.data( "desc" ),
				html = element.html();
				return {
					title: title,
					desc: desc,
					html: html
				}
		},
		open: function() {
			var self = this;
			self.$triggers.on( "click", function( e ) {
				e.preventDefault();
				var $a = $( this ),
					content = self._getContent( $a ),
					$li = $a.parents( "li" ),
					$details = $( ".image-details", $li ),
					$contentImage = $( ".image", $details ),
					$detailsTitle = $( ".image-details-title", $details ),
					$detailsText = $( ".image-details-text", $details );
					$contentImage.html( content.html );
					$detailsTitle.text( content.title );
					$detailsText.text( content.desc );
					self.$element.find( ".image-details" ).slideUp( "fast" );
					$details.slideDown( "fast" );
			});
		},
		close: function() {
			this.$closeLinks.on( "click", function( e ) {
				e.preventDefault();
				$( this ).parent().slideUp( "fast" );
			});
		}
	};
	$(function() {
		var preview = new $.imagePreview( "#image-wrapper" );
	});

})( jQuery );

//timeline
jQuery(document).ready(function($){
	var timelineBlocks = $('.cd-timeline-block'),
		offset = 0.8;

		//Cache les blocs qui se trouvent en dehors de la fenêtre
	hideBlocks(timelineBlocks, offset);

	//Sur le défilement, afficher / animer les blocs  lors de la saisie de la fenêtre
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame)
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}
});
