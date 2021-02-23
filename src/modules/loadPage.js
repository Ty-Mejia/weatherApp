// creates a btn
function createBtn(idAndClass, text) {
	const btn = document.createElement("button");
	btn.setAttribute("id", idAndClass);
	btn.setAttribute("class", idAndClass);

	const span = document.createElement("span");
	span.setAttribute("class", "span");
	span.textContent = text;

	btn.appendChild(span);

	return btn;
}

// create header
function createHeader(id, text) {
	const header = document.createElement("header");
	header.setAttribute("id", id);

	const headerText = document.createElement("h1");
	headerText.textContent = text;
	header.appendChild(headerText);

	return header;
}

// create footer
function createFooter(id, text) {
	const footer = document.createElement("footer");
	footer.setAttribute("id", id);

	const footerText = document.createElement("h5");
	footerText.textContent = text;
	footer.appendChild(footerText);

	return footer;
}

function createMain(id) {
	const main = document.createElement("div");
	main.setAttribute("id", id);

	const div = document.createElement('div');
	div.setAttribute(`${id}-display`, id)
	main.appendChild(div);

	return main;
}

function createForm(id) {
	const form = document.createElement("form");
	form.setAttribute("id", id);

	return form;
}

function createInput(id, type) {
	const input = document.createElement("input");
	input.setAttribute("id", id);
	input.setAttribute("type", type);

	return input;
}

function createLabel(id, text) {
	const label = document.createElement("label");
	label.setAttribute("id", id);
	label.textContent = text;

	return label;
}

function createSearchBar(id) {
	const searchBarContainer = document.createElement("div");
	searchBarContainer.setAttribute("id", `${id}-container`);

	const searchBar = createForm(`${id}-form`);
	const label = createLabel(`${id}-label`, "Location");
	const input = createInput(`${id}-input`, "text");
	const btn = createBtn(`${id}-btn`, "S");

	searchBarContainer.appendChild(searchBar);
	searchBar.appendChild(label);
	searchBar.appendChild(input);
	searchBar.appendChild(btn);

	return searchBarContainer;
}

function loadPage() {
	const content = document.getElementById("content");
	const header = createHeader("header", "Weather App");
	const main = createMain("main");
	const searchBar = createSearchBar("location-search");
	const footer = createFooter("footer", "@All Rights Reserved");

	content.appendChild(header);
	content.appendChild(main);
	content.appendChild(footer);

	main.appendChild(searchBar);
}

export default loadPage;
