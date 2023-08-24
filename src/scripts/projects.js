const imgWrappers = document.querySelectorAll('.img-wrapper');
const dialog = document.querySelector('.pop-up-container');
const expandedImg = dialog.querySelector('.expanded-image');
const loadingSpinner = document.querySelector('.loading-spinner');

imgWrappers.forEach(wrapper => {
  wrapper.addEventListener('click', () => {
    const img = wrapper.querySelector('img');
    const src = img.getAttribute('data-original-src');
    expandedImg.setAttribute('src', src);
    loadingSpinner.style.display = 'block';
    expandedImg.onload = () => {
      loadingSpinner.style.display = 'none';
      dialog.showModal();
    };
  });
});

dialog.addEventListener('click', () => {
  dialog.close();
});
