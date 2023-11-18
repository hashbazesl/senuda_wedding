document.getElementById('openMap').addEventListener('click', function() {
    document.getElementById('mapModal').style.display = 'block';
  });
  
  document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('mapModal').style.display = 'none';
  });