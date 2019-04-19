$(document).ready(function(){
  var _liNum = $( ".topSlide ul li" ).length;
  var _curNum = 0 ;
  var _slideTimerID ;
  window_width = $(window).width(); //global
  console.log(window_width);

  if ( _liNum > 0 )
  	{
  		$( ".topSlide" ).append( "<div id='slide-nav-container'><ul id='slide-nav'></ul></div>" );

  		for ( var i=0; i<_liNum; i++ )
  		{
  			$( "#slide-nav" ).append( "<li id='slide-navi-"+i+"'><a href='#slide-" +i+ "'><img src='./img/dot.png'></a></li>" );
  		}

  		function xStartTimer( ) {
  			xStopTimer( );
  			_slideTimerID = setInterval(
  				function( ) {
  					_curNum++ ;
  					if ( _curNum > _liNum-1 ) {
  						$( "#slide-nav-container a" ).eq( 0 ).click( );
  					}
  					else {
  						$( "#slide-nav-container a" ).eq( _curNum ).click( );
  					}
  				}, 6000) ;
  		}

  		function xStopTimer( ) {
  			clearInterval( _slideTimerID );
  		}

  		$( "#slide-nav-container a" ).hover(
  			function( e ) {
  				$( this ).addClass( "nav-hover" );
  			},
  			function( e ) {
  				$( this ).removeClass( "nav-hover" );
  			}
  		);

  		$( "#slide-nav-container a" ).click(
  			function( e ) {
  				_curNum = $( this ).attr( "href" ).split( "-" )[ 1 ];
  				var posX = -window_width * _curNum;
          // console.log(posX);
  				xStartTimer( );
  				$( "#slide-nav-container a" ).removeClass( );
  				$( this ).addClass( "nav-active" );
  				$( ".topslider" ).stop( ).animate( { marginLeft:posX+'px' }, '300', 'easeOutQuart' );
  				return false;
  			}
  		);

  		$( "#slide-nav-container a" ).eq( _curNum ).trigger( "click" );
  	}
});



$(window).on('resize', function(){
window_width = $(window).width(); //global
console.log(window_width);
});
