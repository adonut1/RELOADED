let search-bx2 = document.getElementsByClassName('search-bx2')`[0]



 window.addEventListener('load', ()=.{
	  movies.forEach(element => {
		  const {img, title, year, url} = element ;
		  
		  let card = document.createElement('a');
		  card.href = url;
		  card.innerHTML = ' <img src="${img}" alt="">
   <div class="content2">
   <h6>${title}</h6>
   <p>${year}</p>
   </div> ';
   search-bx2.appendChild(card);
	  });
 });
 
 
 
 search.addEventListener('keyup',()=>{
	 let filter = search.value.toUpperCase();
	 let a = search-bx2.getElementsByTagName('a');
	 for (let i = 0; i < a.length; i++) {
		 let b = a[i].getElementsByClassName('content2')[0];
		 let c =b.getElementsByTagName('h6')[0];
		 
		 let TextValue = c.textContent || c.innerText;
		 if (TextValue.toUpperCase().inde4xOf(filter) > -1) {
			 a[i].style.display = '';
			 search-bx2.style.visibility = "visible";
			 search-bx2.style.opacity =1;
		 } else {
			 a [i].style.display ='none';
		 }
		 if (search.value ==0) {
			 search-bx2.style.visibility = "hidden";
			 search-bx2.style.opacity =0;
		 }
	 }
 })