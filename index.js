document.addEventListener("DOMContentLoaded", () => {
    let countries = [];

    fetch("https://restcountries.com/v2/all")
        .then(response => response.json())
        .then(data => {
            countries = data;
            showCountries(countries);
        })
        .catch(error => {
            console.log("Hata:", error);
        });

    const searchInput = document.getElementById("search-input");
    searchInput.addEventListener("input", () => {
        const searchValue = searchInput.value.toLowerCase();
        const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(searchValue));
        showCountries(filteredCountries);
    });

    const filterButtons = document.querySelectorAll(".filter-button");
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Önce tüm buttonlardaki aktif durumu kaldır
            filterButtons.forEach(btn => btn.classList.remove("active"));

            // Tıklanan butona aktif durumunu ekle
            button.classList.add("active");

            const region = button.dataset.region;
            const filteredCountries = countries.filter(country => country.region === region);
            showCountries(filteredCountries);
        });
    });

    const showAllButton = document.getElementById("show-all-button");
    showAllButton.addEventListener("click", () => {
        showCountries(countries);
    });

    const showCountries = (countriesToShow) => {
        const countriesList = document.getElementById("countries-list");
        countriesList.innerHTML = "";

        countriesToShow.forEach(country => {
            const countryItem = document.createElement("li");
            countryItem.classList.add("country-item");
            const countryName = document.createElement("span");
            countryName.classList.add("country-name");
            countryName.textContent = country.name;
            const countryRegion = document.createElement("span");
            countryRegion.classList.add("country-region");
            countryRegion.textContent = country.region;
            countryItem.appendChild(countryName);
            countryItem.appendChild(countryRegion);
            countriesList.appendChild(countryItem);
        });
    };
});
