const cardCover = "https://api.pexels.com/v1/search?query=landscape";

const getImg = function () {
  fetch(cardCover, {
    method: "GET",
    headers: {
      Authorization: "BuAx9L4IATlBwEOWwP25d6XKAxOIILtoBGZ6iP076xyNzcj7M8rvlQMS",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((ev) => {
      let pic = ev.photos;
      console.log(pic.url);
      pic.forEach((picElement) => {
        console.log(picElement.url);
        let card = document.getElementById("row");
        card.innerHTML += `<div class="col-md-4">
        <div class="card mb-4 shadow-sm">
        <img src="${picElement.src.tiny}">
          <div class="card-body">
            <h5 class="card-title">Lorem Ipsum</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  View
                </button>
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  Edit
                </button>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
      `;
      });
    });
};

getImg();

let loadPrimo = document.getElementById("btnPrimo");
loadPrimo.addEventListener(
  "click",
  (getImg = () => {
    loadPrimo.innerHTML = "";
  })
);
