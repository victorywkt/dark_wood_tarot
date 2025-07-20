const menuItems = document.querySelectorAll(".menu-item");
const contentSections = document.querySelectorAll(".content");

menuItems.forEach(item => {
item.addEventListener("click", () => {
    // Зняти активний клас з усіх
    menuItems.forEach(i => i.classList.remove("active"));
    contentSections.forEach(c => c.classList.remove("active"));

    // Активувати поточний
    item.classList.add("active");
    const sectionId = item.getAttribute("data-section");
    document.getElementById(`section-${sectionId}`).classList.add("active");
});
});

