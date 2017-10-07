/* 2017 Copdrops - Released under the MIT license */
{
	const items = Array.from(document.querySelectorAll('.nav > .nav_item'));

	class Item {
		constructor(el) {
			this.DOM = {};
			this.DOM.el = el;
			this.DOM.name = el.querySelector('.nav_item-label');
			this.colors = {
				active: window.getComputedStyle(this.DOM.el).getPropertyValue('--menu-item-color')
			};
			charming(this.DOM.name);
			this.DOM.nameLetters = Array.from(this.DOM.name.querySelectorAll('span'));
			this.colors.initial = window.getComputedStyle(this.DOM.nameLetters[0]).color;
			this.initEvents();
		}
		initEvents() {
			const duration = 100;

			this.mouseenterFn = () => this.mouseTimeout = setTimeout(() => {
				this.isActive = true;
				anime.remove(this.DOM.nameLetters);
				anime({
					targets: this.DOM.nameLetters,
					delay: (t,i) => i*10,
					translateY: [
						{value: (t,i) => i%2===0?10:-10, duration: duration, easing: 'easeInSine'},
						{value: (t,i) => i%2===0?[-10,0]:[10,0], duration: duration+350, easing: 'easeOutElastic', elasticity: 300}
					],
					opacity: [
						{value: 0, duration: duration, easing: 'linear'},
						{value: 1, duration: duration, easing: 'linear'}
					],
					color: {
						value: this.colors.active,
						duration: 1,
						delay:(t,i) => i*10+duration,
						easing: 'linear'
					}
				});
			}, 50);

			this.mouseleaveFn = () => {
				clearTimeout(this.mouseTimeout);
				if( !this.isActive ) return;
				this.isActive = false;

				anime.remove(this.DOM.nameLetters);
				anime({
					targets: this.DOM.nameLetters,
					delay: (t,i,l) => (l-i-1)*20,
					translateY: [
						{value: (t,i) => i%2===0?-10:10, duration: duration, easing: 'easeInSine'},
						{value: (t,i) => i%2===0?[10,0]:[-10,0], duration: duration+350, easing: 'easeOutElastic', elasticity: 300}
					],
					opacity: [
						{value: 0, duration: duration, easing: 'linear'},
						{value: 1, duration: duration, easing: 'linear'}
					],
					color: {
						value: this.colors.initial,
						duration: 1,
						delay:(t,i,l) => (l-i-1)*10+duration,
						easing: 'linear'
					}
				});
			};

			this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
			this.DOM.el.addEventListener('touchstart', this.mouseenterFn);
			this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
			this.DOM.el.addEventListener('touchend', this.mouseleaveFn);
		}
	};

	items.forEach(item => new Item(item));
};
