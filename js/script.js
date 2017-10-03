/* Page load in */
{
setTimeout(() => document.body.classList.add('render'), 60);
};

/* Scrolling */

/* Archive player */
$('.load-btn').click(function(){
        archive = '<iframe src="'+ $(this).attr('data-id') +'"></iframe>';
        $(".archivePreview").replaceWith(archive);
    });
