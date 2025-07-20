document.addEventListener("DOMContentLoaded", function () {
    fetch('../nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById("sidebar").innerHTML = data;

            const buttons = document.querySelectorAll('.toggle-btn');

            buttons.forEach(btn => {
                btn.addEventListener('click', function () {
                    const currentList = this.nextElementSibling;
                    const isVisible = currentList.style.display === 'block';

                    // Закрити всі списки
                    buttons.forEach(otherBtn => {
                        const otherList = otherBtn.nextElementSibling;
                        otherList.style.display = 'none';
                        otherBtn.textContent = '▶ ' + otherBtn.textContent.slice(2);
                    });

                    // Відкрити поточний, якщо був закритий
                    if (!isVisible) {
                        currentList.style.display = 'block';
                        this.textContent = '▼ ' + this.textContent.slice(2);
                    }
                });
            });
        });
});