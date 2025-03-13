document.querySelectorAll('.tabs li').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelector('.tabs .active').classList.remove('active');
        this.classList.add('active');
        // Tambahkan logika untuk menampilkan konten yang sesuai
    });
});
