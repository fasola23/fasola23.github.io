stałe data = nowa data();

const renderCalendar = () => {
  data.setData(1);

  const miesiącDays = document.querySelector(.'days");

  const ostatni dzień = nowa data (
    data.getFullYear(),
    data.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = nowa data (
    data.getFullYear(),
    data.getMonth(),
    0
  ).getDate();

  const pierwszyDayIndex = date.getDay();

  const lastDayIndex = nowa data (
    data.getFullYear(),
    data.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  stałe miesiące = [
    „Styczeń”,
    „Luty”,
    „Marca”,
    „Kwiecień”,
    „Maj”,
    „Czerwiec”,
    „Lipiec”,
    „Sierpień”,
    „Wrzesień”,
    „Październik”,
    „Listopa”,
    „Grudzień”,
  ];

  document.querySelector(.data h1").innerHTML = miesiące[data.getMonth()];

  document.querySelector(.date p").innerHTML = new Date().toDateString();

  niech dni = "";

  for (niech x = FirstDayIndex; x > 0; x--) {
    dni += `<div class="prev-date">${prevLastDay - x + 1</div>`;
  }

  for (niech i = 1; i <= ostatni dzień; i++) {
    Jeśli (
      i === nowa data().getDate() &&
      date.getMonth() === nowa data().getMonth()
    ) {
      dni += `<div class="today">${i}</div>`;
    } w przeciwnym razie {
      dni += `<div>${i}</div>`;
    }
  }

  for (niech j = 1; j <= następne dni; j++) {
    dni += `<div class="next-date">${j}</div>`;
    miesiącDays.innerHTML = dni;
  }
};

document.querySelector(.prev").addEventListener("kliknij", () => {
  date.setMonth(data.getMonth() - 1);
  renderKalendarz();
});

document.querySelector(.next").addEventListener("kliknij", () => {
  date.setMonth(data.getMonth() + 1);
  renderKalendarz();
});

renderKalendarz();