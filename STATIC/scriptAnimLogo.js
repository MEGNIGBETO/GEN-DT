$(document).ready(function(){
    $('.logo-part').each(function(index){
        $(this).on('mouseover', function(){
            $(this).css({
                'transition': 'transform 0.3s ease',
                'transform': 'scale(1.2)'
            });
        });

        $(this).on('mouseout', function(){
            $(this).css('transform', 'scale(1)');
        });
    });
});
