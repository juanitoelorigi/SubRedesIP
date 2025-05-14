class CardIP {
  InitCardIp() {
    const element = document.createElement("div");
    element.classList.add("container");
    element.innerHTML = `
      <h1>Subredes IP</h1>
      <div class="input-group">
        <label for="ipInput">IP:</label>
        <input type="text" id="ipInput" placeholder="Ej: 192.168.1.1" />
      </div>

      <div class="input-group">
        <label for="maskInput">Máscara de subred:</label>
        <input type="text" id="maskInput" placeholder="Ej: 255.255.255.0" />
      </div>

      <button id="calculateBtn">Añadir</button>

      <div id="resultArea"></div>`;

    document.body.appendChild(element);
  }
}

const instance = new CardIP();
export const InitCardIp = instance.InitCardIp.bind(instance);
