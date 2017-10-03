/* Page load in */
{
setTimeout(() => document.body.classList.add('render'), 60);
};

/* Scrolling */

/* Archive player */
$('.load-btn').click(fuction(){
  archive = '<iframe src="'+$(this).attr('data-id') +'"></iframe>';
})
