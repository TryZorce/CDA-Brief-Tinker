document.addEventListener("DOMContentLoaded", function() {
    const portfolioSelector = document.querySelector('.portfolioSelector');
    const portfolioImages = document.querySelectorAll('.portfolioImage img');

    function showImages(category) {
        portfolioImages.forEach(image => {
            image.style.display = 'none';
        });

        switch (category) {
            case 'Show all':
                portfolioImages.forEach(image => {
                    image.style.display = 'block';
                });
                break;
            case 'Branding':
                portfolioImages[0].style.display = 'block';
                portfolioImages[4].style.display = 'block';
                break;
            case 'Graphic':
                portfolioImages[3].style.display = 'block';
                portfolioImages[5].style.display = 'block';
                break;
            case 'Nature':
                portfolioImages[0].style.display = 'block';
                portfolioImages[3].style.display = 'block';
                break;
            case 'Animation':
                portfolioImages[1].style.display = 'block';
                portfolioImages[5].style.display = 'block';
                break;
            default:
                break;
        }
    }

    portfolioSelector.addEventListener('click', function(event) {
        if (event.target.tagName === 'P') {
            portfolioSelector.querySelectorAll('p').forEach(p => {
                p.style.color = '';
            });

            event.target.style.color = 'orange';
            showImages(event.target.textContent);
        }
    });
});