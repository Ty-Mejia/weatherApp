import loadPage from "./modules/loadPage";
import letsFetchSomeData from "./modules/api";

loadPage();

const locationSearchForm = document.getElementById("location-search-form");

locationSearchForm.addEventListener("submit", () => {
	const where = document.getElementById("location-search-input").value;    
    letsFetchSomeData(where);

});
