const form = document.querySelector("#generar-nombre");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const origen = document.getElementById("origen").value;
  const genero = document.getElementById("genero").value;
  const cant = document.getElementById("numero").value;

  document.getElementById("resultado").innerHTML =
    "<img src='img/spinner.gif'>";

  let url = "";
  url += "http://uinames.com/api/?";
  if (origen !== "") {
    url += `region=${origen}&`;
  }
  if (genero !== "") {
    url += `gender=${genero}&`;
  }
  if (cant !== "") {
    url += `amount=${cant}&`;
  }
  console.log(url);

  const xhr = new XMLHttpRequest();

  xhr.open("GET", url, true);

  xhr.onload = function() {
    console.log(this.response);
    if (this.status === 200) {
      const nombres = JSON.parse(this.responseText);
      let htmlNombres = "<h4>Nombres Generados</h4>";
      htmlNombres += "<ul class='lista'>";
      nombres.forEach((nombre) => {
        htmlNombres += `<li>${nombre.name}`;
      });
      htmlNombres += "</ul>";
      document.getElementById("resultado").innerHTML = htmlNombres;
    } else if (this.status === 202) {
      console.log("cargando");
    }
  };
  xhr.send();
});
