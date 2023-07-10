
document.addEventListener("DOMContentLoaded", function() {
    var countries = [];

    fetch("https://restcountries.com/v2/all")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            countries = data;
            showCountries(countries);
        })
        .catch(function(error) {
            console.log("Hata:", error);
        });

    var searchInput = document.getElementById("search-input");
    searchInput.addEventListener("input", function() {
        var searchValue = searchInput.value.toLowerCase();
        var filteredCountries = countries.filter(function(country) {
            return country.name.toLowerCase().includes(searchValue);
        });
        showCountries(filteredCountries);
    });

    function showCountries(countriesToShow) {
        var countriesList = document.getElementById("countries-list");
        countriesList.innerHTML = "";

        countriesToShow.forEach(function(country) {
            var countryItem = document.createElement("li");
            countryItem.textContent = country.name;
            countriesList.appendChild(countryItem);
        });
    }
});