console.log("Hello! I\"m Crios😊.")

if (document.querySelectorAll(".nav").length > 0) {
    var nav = document.querySelector(".nav");
    var buttonMenu = document.querySelector(".button-menu");
    var navList = document.querySelector(".nav__list");

    buttonMenu.addEventListener("click", function () {
        var listHeight = navList.offsetHeight;

        if (nav.classList.contains("nav--opened")) {
            nav.classList.remove("nav--opened");
            buttonMenu.classList.add("button-menu--opened");
            buttonMenu.classList.remove("button-menu--closed");
            nav.style.height = "0px";

        }

        else {
            nav.classList.add("nav--opened");
            buttonMenu.classList.remove("button-menu--opened");
            buttonMenu.classList.add("button-menu--closed");
            nav.style.height = listHeight + "px";
        }
    })
}

if (document.querySelectorAll(".search").length > 0) {
    var fieldSearch = document.querySelector(".search__field-search");
    var buttonSearch = document.querySelector(".search__button");

    toggleMenu = () => {
        fieldSearch.classList.toggle('search__field-search--opened');
    }

    buttonSearch.addEventListener('click', event => {
        event.stopPropagation();
        toggleMenu();
    });

    document.addEventListener('click', e => {
        var target = event.target;
        var its_fieldSearch = target == fieldSearch || fieldSearch.contains(target);
        var its_buttonSearch = target == buttonSearch;
        var fieldSearch_is_active = fieldSearch.classList.contains('search__field-search--opened');

        if (!its_fieldSearch && !its_buttonSearch && fieldSearch_is_active) {
            toggleMenu();
        }
    })
}
