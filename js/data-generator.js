import { faker } from "https://cdn.skypack.dev/@faker-js/faker";

function createSliderContent() {
  const slides = Array.from(document.querySelectorAll(".swiper-slide"));
  let sliderSettings = [];
  for (let i = 0; i < slides.length; i++) {
    sliderSettings[i] = {
      cover: faker.image.nightlife(1600, 900, true),
      artist: faker.name.fullName(),
      song: faker.music.songName(),
    };
  }
  slides.forEach(function (element, index) {
    const img = document.createElement("img");
    const song = element.querySelector(".slider_track");
    const artist = element.querySelector(".slider_artist");

    artist.innerHTML = sliderSettings[index].artist;
    song.innerHTML = sliderSettings[index].song;
    img.src = sliderSettings[index].cover;
    element.appendChild(img);
  });
}
function createRecommendationsContent(image, song, artist, genre) {
  const coverItem = ` <div data-song="${song}" data-artist="${artist}" data-genre="${genre}" class="tItem">
    <img src="${image}" alt=""/>
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28 56C12.5176 56 0 43.4824 0 28C0 12.5176 12.5176 0 28 0C43.4824 0 56 12.5176 56 28C56 43.4824 43.4824 56 28 56ZM28 3.29412C14.3294 3.29412 3.29412 14.3294 3.29412 28C3.29412 41.6706 14.3294 52.7059 28 52.7059C41.6706 52.7059 52.7059 41.6706 52.7059 28C52.7059 14.3294 41.6706 3.29412 28 3.29412Z"
        fill="#E100F4"
      />
      <path
        d="M19.7646 42.3294V13.6706L44.4705 28L19.7646 42.3294ZM23.0588 19.2706V36.5647L37.8823 27.8353L23.0588 19.2706Z"
        fill="#E100F4"
      />
    </svg>
    <div class='cover'></div>
  </div>`;
  return coverItem;
}
function fillRecommendationsItem() {
  const wrappers = Array.from(document.querySelectorAll(".items"));

  for (let i = 0; i < wrappers.length; i++) {
    let items = "";

    for (let j = 0; j < 3; j++) {
      items += createRecommendationsContent(
        faker.image.image(400, 400, true),
        faker.music.songName(),
        faker.name.fullName(),
        faker.music.genre()
      );
    }

    wrappers[i].innerHTML = items;
  }
  const recommendationItems = Array.from(document.querySelectorAll(".tItem"));
  recommendationItems.forEach(function (element, index) {
    element.addEventListener("click", onRecommendationClick, true);
  });
}

function onRecommendationClick(event) {
  event.stopPropagation();
  event.preventDefault();
  const target = event.target;
  console.log(target);
}
createSliderContent();

fillRecommendationsItem();
