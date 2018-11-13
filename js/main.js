
function main() {

(function () {
   'use strict';
   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

	// affix the navbar after scroll below header
$('#nav').affix({
      offset: {
        top: $('header').height()
      }
});	

	// skills chart
	$(document).ready(function(e) {
	//var windowBottom = $(window).height();
	var index=0;
	$(document).scroll(function(){
		var top = $('#skills').height()-$(window).scrollTop();
		console.log(top)
		if(top<-300){
			if(index==0){	
			
				$('.chart').easyPieChart({
					easing: 'easeOutBounce',
					onStep: function(from, to, percent) {
						$(this.el).find('.percent').text(Math.round(percent));
					}
				});
			
				}
			index++;
		}
	})
	//console.log(nagativeValue)
	});

    particlesJS("particles-js", 
    {
        "particles":{
            "number":{
                "value":80,
                "density":{
                    "enable":true,
                    "value_area":800
                }
            },
            "color":{
                "value":"#ffffff"
            },
            "shape":{
                "type":"circle",
                "stroke":{
                    "width":0,
                    "color":"#000000"
                },
                "polygon":{
                    "nb_sides":5
                },
                "image":{
                    "src":"img/github.svg",
                    "width":100,"height":100
                }
            },
            "opacity":{
                "value":0.5,
                "random":false,
                "anim":{
                    "enable":false,
                    "speed":1,"opacity_min":0.1,
                    "sync":false
                }
            },
            "size":{
                "value":3,
                "random":true,
                "anim":{
                    "enable":false,
                    "speed":40,
                    "size_min":0.1,
                    "sync":false
                }
            },
            "line_linked":{
                "enable":true,
                "distance":150,
                "color":"#ffffff",
                "opacity":0.4,
                "width":1
            },"move":{
                "enable":true,
                "speed":6,
                "direction":"none",
                "random":false,
                "straight":false,
                "out_mode":"out",
                "bounce":false,
                "attract":{
                    "enable":false,
                    "rotateX":600,
                    "rotateY":1200
                }
            }
        },
        "interactivity":{
            "detect_on":"canvas",
            "events":{
                "onhover":{
                    "enable":true,
                    "mode":"repulse"
                },
                "onclick":{
                    "enable":true,
                    "mode":"push"
                },
                "resize":true
            },
            "modes":{
                "grab":{
                    "distance":400,
                    "line_linked":{
                        "opacity":1
                    }
                },
                "bubble":{
                    "distance":400,
                    "size":40,
                    "duration":2,
                    "opacity":8,
                    "speed":3
                },
                "repulse":{
                    "distance":271.72827172827175,
                    "duration":0.4
                },
                "push":{
                    "particles_nb":4
                },
                "remove":{
                    "particles_nb":2
                }
            }
        },
        "retina_detect":true
    });
    var count_particles, stats, update;
    stats = new Stats; 
    stats.setMode(0); 
    stats.domElement.style.position = 'absolute'; 
    stats.domElement.style.left = '0px'; 
    stats.domElement.style.top = '0px'; 
    document.body.appendChild(stats.domElement); 
    count_particles = document.querySelector('.js-count-particles'); 
    update = function() { stats.begin(); stats.end(); 
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
         count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; 
        } 
        requestAnimationFrame(update); 
    }; 
    requestAnimationFrame(update);;

    

  	// Portfolio isotope filter
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
	
	  	
    // CounterUp
	$(document).ready(function( $ ) {
		if($("span.count").length > 0){	
			$('span.count').counterUp({
					delay: 10, // the delay time in ms
			time: 1500 // the speed time in ms
			});
		}
	});
	
  	// Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});	

}());


}
main();