 var modal = document.getElementById('modal');

 var modalBtn = document.getElementById('modalBtn');

 var closeBtn = document.getElementById('closeBtn');
// open modal
 modalBtn.addEventListener('click', function openModal(){
 	modal.style.display = 'block';
 });

 //close button
  closeBtn.addEventListener('click', function closeModal(){
 	modal.style.display = 'none';
 });
  //window outside close button 
  // window.addEventListener('click', function outside(e){
  // 	if (e.target == modal) {
  // 		modal.style.display = 'none';
  // 	}
  // });

  