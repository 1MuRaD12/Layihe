var dropdown = document.getElementsByClassName("dropdown-btn");
var dropdowns = document.getElementsByClassName("dropdown");
var icon = document.getElementsByClassName("i")
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "grid") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "grid";
    }
  });
}

for (i = 0; i < dropdowns.length; i++) {
  dropdowns[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdown = this.nextElementSibling;
    if (dropdown.style.display === "table-cell") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "table-cell";
    }
  });
}


fetch("./json/Reddit.json", {
  method: "GET",
})
  .then(response => response.json())
  .then((datas) => {
    let trend = document.querySelector(".Trend")
    let container = document.querySelector(".container")
    let row = document.createElement("div")
    row.className = "row"
    datas.forEach(data => {
      let col = document.createElement("div")
      let card = document.createElement("div")

      let image = document.createElement("div")
      let img = document.createElement("img")
      let a = document.createElement("a")
      let desc = document.createElement("div")
      let aa = document.createElement("a")
      let aaa = document.createElement("a")
      let strong = document.createElement("strong")
      let p = document.createElement("p")
      let icon = document.createElement("div")
      let aaaa = document.createElement("a")
      let aaaaa = document.createElement("a")
      let imge = document.createElement("img")
      let span = document.createElement("span")

      a.href = "#"
      aa.href = "#"
      aaa.href = "#"
      aaaa.href = "#"
      aaaaa.href = "#"
      col.className = "col-lg-3"
      card.className = "card1"
      image.className = "image";
      desc.className = "desc";
      icon.className = "icon";

      img.src = data.ImageUrl
      strong.innerText = data.Title
      p.innerText = data.Subtitle
      imge.src = data.imgIcon
      span.innerText = data.More

      aaaaa.append(span)
      aaaa.append(imge)
      aaa.append(p)
      aa.append(strong)
      a.append(img)
      card.append(image, desc, icon)
      image.append(a)
      desc.append(aa, aaa)
      icon.append(aaaa, aaaaa)
      col.append(card)
      row.append(col)

    });
    container.append(row)
    trend.append(container)
  });


