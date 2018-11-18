$(function() {

//--------------------calculation-tab---------------------------
  $('.services-tabs').tabslet({
    animation: true,
    controls: {
      prev: '.services-tabs__prev',
      next: '.services-tabs__next'
    }
  });


  $('.team-tabs').tabslet({
    animation: true,
  });

  function serviceCount() {

    var count = $('.services-tabs .tabs-list li').length;
    var current = $('.services-tabs .tabs-list li.active').index() + 1;

    $('.count').text(count);
    // $('.current').text(current);

  }
  
  serviceCount();

  $('.services-tabs__prev').click(function(event) {
    serviceCount();
  });

  $('.services-tabs__next').click(function(event) {
    serviceCount();
  });

//--------------------calculation----------------------------
  $(".answer").each(function(index, el) {
    $(el).addClass('answer-' + index);

    $('.answer-' + index).on('change', function() {

      //--------------------one----------------------------
        if(  $('.answer-one').is(':checked') ){
          $('.services-tabs__next-one').addClass('services-tabs__next--active');
        }
        else{
          $('.services-tabs__next-one').removeClass('services-tabs__next--active');
        }

        //--------------------two----------------------------
        if(  $('.answer-two').is(':checked') ){
          $('.services-tabs__next-two').addClass('services-tabs__next--active');
        }
        else{
          $('.services-tabs__next-two').removeClass('services-tabs__next--active');
        }

        //--------------------three----------------------------
        if(  $('.answer-three').is(':checked') ){
          $('.services-tabs__next-three').addClass('services-tabs__next--active');
        }
        else{
          $('.services-tabs__next-three').removeClass('services-tabs__next--active');
        }



    });

  });

//-------------------------скорость якоря перший екран---------------------------------------
  $(".header--section__block").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - 0}, 'slow', 'swing');
  });
  

//-------------------------скорость якоря верх---------------------------------------
  $(".footer__line").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - 0}, 'slow', 'swing');
  });
  
//-------------------------------слайдер quality---------------------------------------
  $('.quality-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.quality-nav'
  });
  $('.quality-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.quality-for',
    focusOnSelect: true,
    arrows: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  });

//-------------------------------слайдер reviews---------------------------------------
  $('.reviews-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.reviews-nav'
  });
  $('.reviews-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.reviews-for',
    focusOnSelect: true,
    arrows: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }
    ]
  });

//-------------------------------слайдер production---------------------------------------
  $('.production-for').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.production-nav',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
  $('.production-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.production-for',
    focusOnSelect: true,
    arrows: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }
    ]
  });

//-------------------------------isotope---------------------------------------
	var $grid = $('.grid').isotope({
	  itemSelector: '.element-item',
	  layoutMode: 'fitRows',
	  getSortData: {
	    name: '.name',
	    symbol: '.symbol',
	    number: '.number parseInt',
	    category: '[data-category]',
	    weight: function( itemElem ) {
	      var weight = $( itemElem ).find('.weight').text();
	      return parseFloat( weight.replace( /[\(\)]/g, '') );
	    }
	  }
	});

	// filter functions
	var filterFns = {
	  // show if number is greater than 50
	  numberGreaterThan50: function() {
	    var number = $(this).find('.number').text();
	    return parseInt( number, 10 ) > 50;
	  },
	  // show if name ends with -ium
	  ium: function() {
	    var name = $(this).find('.name').text();
	    return name.match( /ium$/ );
	  }
	};

	// bind filter button click
		$('#filters').on( 'click', 'button', function() {
		  var filterValue = $( this ).attr('data-filter');
		  // use filterFn if matches value
		  filterValue = filterFns[ filterValue ] || filterValue;
		  $grid.isotope({ filter: filterValue });
		});

	// bind sort button click
		$('#sorts').on( 'click', 'button', function() {
		  var sortByValue = $(this).attr('data-sort-by');
		  $grid.isotope({ sortBy: sortByValue });
		});

	// change is-checked class on buttons
		$('.button-group').each( function( i, buttonGroup ) {
		  var $buttonGroup = $( buttonGroup );
		  $buttonGroup.on( 'click', 'button', function() {
		    $buttonGroup.find('.is-checked').removeClass('is-checked');
		    $( this ).addClass('is-checked');
		  });
		});

//-------------------------------попандер---------------------------------------
  $('.modal').popup({transition: 'all 0.3s'});

//------------------------------------form-------------------------------------------
  $('input[type="tel"]').mask('+0 (000) 000-00-00');

  jQuery.validator.addMethod("phoneno", function(phone_number, element) {
     return this.optional(element) || phone_number.match(/\+[0-9]{1}\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/);
  }, "Введите Ваш телефон");

  $(".form").each(function(index, el) {
    $(el).addClass('form-' + index);

    $('.form-' + index).validate({
      rules: {
        phone: {
          required: true,
          phoneno: true
        },
        name: 'required',
      },
      messages: {
        name: "Введите Ваше имя",
        phone: "Введите Ваш телефон",
        widht: "Введите ширину",
        height: "Введите высоту",
        type: "Введите тип изделия",
      },
      submitHandler: function(form) {
        var t = {
          name: jQuery('.form-' + index).find("input[name=name]").val(),
          phone: jQuery('.form-' + index).find("input[name=phone]").val(),
          widht: jQuery('.form-' + index).find("input[name=widht]").val(),
          height: jQuery('.form-' + index).find("input[name=height]").val(),
          type: jQuery('.form-' + index).find("select[name=type]").val(),
          subject: jQuery('.form-' + index).find("input[name=subject]").val()
        };
        ajaxSend('.form-' + index, t);
      }
    });

  });

  function ajaxSend(formName, data) {
    jQuery.ajax({
      type: "POST",
      url: "sendmail.php",
      data: data,
      success: function() {
        $(".modal").popup("hide");
        $("#thanks").popup("show");
        setTimeout(function() {
          $(formName).trigger('reset');
        }, 2000);
      }
    });
  }


 
});

//----------------------------------------preloader----------------------------------

  $(window).on('load', function(){
    $('.preloader').delay(1000).fadeOut('slow');
  });


//----------------------------------------svg----------------------------------
    ;( function( window, document )
    {
      'use strict';

      var file     = 'img/symbols.html',
          revision = 1.1;

      if( !document.createElementNS || !document.createElementNS( 'http://www.w3.org/2000/svg', 'svg' ).createSVGRect )
          return true;

      var isLocalStorage = 'localStorage' in window && window[ 'localStorage' ] !== null,
          request,
          data,
          insertIT = function()
          {
              document.body.insertAdjacentHTML( 'afterbegin', data );
          },
          insert = function()
          {
              if( document.body ) insertIT();
              else document.addEventListener( 'DOMContentLoaded', insertIT );
          };

      if( isLocalStorage && localStorage.getItem( 'inlineSVGrev' ) == revision )
      {
        data = localStorage.getItem( 'inlineSVGdata' );
        if( data )
        {
            insert();
            return true;
        }
      }

      try
      {
        request = new XMLHttpRequest();
        request.open( 'GET', file, true );
        request.onload = function()
          {
            if( request.status >= 200 && request.status < 400 )
              {
                data = request.responseText;
                insert();
                if( isLocalStorage )
                {
                  localStorage.setItem( 'inlineSVGdata',  data );
                  localStorage.setItem( 'inlineSVGrev',   revision );
                }
            }
        }
        request.send();
      }
      catch( e ){}

    }( window, document ) );