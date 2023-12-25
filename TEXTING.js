const search = document.querySelector('.search input');
		const searchBx2 = document.querySelector('.search-bx2');
		const movies = [
			{
				img: 'path-to-image-1',
				title: 'Movie Title 1',
				year: '2019',
				url: 'path-to-movie-1'
			},
			{
				img: 'path-to-image-2',
				title: 'DUPLICATE',
				year: '2020',
				url: 'DUPLICATE.html'
			}
		];

		window.addEventListener('load', () => {
			movies.forEach(element => {
				const { img, title, year, url } = element;

				let card = document.createElement('a');
				card.href = url;
				card.innerHTML = `<img src="${img}" alt="">
					<div class="content2">
						<h6>${title}</h6>
						<p>${year}</p>
					</div>`;
				searchBx2.appendChild(card);
			});
		});

		search.addEventListener('keyup', () => {
			let filter = search.value.toUpperCase();
			let a = searchBx2.getElementsByTagName('a');
			for (let i = 0; i < a.length; i++) {
				let b = a[i].getElementsByClassName('content2')[0];
				let c = b.getElementsByTagName('h6')[0];

				let textValue = c.textContent || c.innerText;
				if (textValue.toUpperCase().indexOf(filter) > -1) {
					a[i].style.display = '';
					searchBx2.style.visibility = 'visible';
					searchBx2.style.opacity = 1;
				} else {
					a[i].style.display = 'none';
				}
				if (search.value === '') {
					searchBx2.style.visibility = 'hidden';
					searchBx2.style.opacity = 0;
				}
			}
		});