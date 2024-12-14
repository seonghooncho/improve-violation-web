const searchButton = document.querySelector('.search-btn');
    const searchBar = document.getElementById('search-bar');
    const overlay = document.getElementById('overlay');

    // 검색 버튼 클릭 시 검색 바 및 오버레이 표시
    searchButton.addEventListener('click', () => {
      searchBar.style.display = 'block';
      overlay.style.display = 'block';
    });

    // 오버레이 클릭 시 검색 바 및 오버레이 숨김
    overlay.addEventListener('click', () => {
      searchBar.style.display = 'none';
      overlay.style.display = 'none';
    });