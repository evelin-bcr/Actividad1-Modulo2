async function personajes() {
    try {
      const respuesta = await fetch('https://rickandmortyapi.com/api/character');
      const info = await respuesta.json();
      const personajes = info.results;
  
      let contenedor = "";
  
      for (let i = 0; i < personajes.length; i++) {
        const personaje = personajes[i];
        contenedor += `
          <div class="col-md-4 col-lg-3">
            <div class="card shadow-sm h-100">
              <img src="${personaje.image}" class="card-img-top" alt="${personaje.name}">
              <div class="card-body">
                <h2 class="card-title fs-5">${personaje.name}</h2>
                <p class="card-text"><strong>Especie:</strong> ${personaje.species}</p>
                <p class="card-text"><strong>Género:</strong> ${personaje.gender}</p>
                <p class="card-text"><strong>Ubicación:</strong> ${personaje.location.name}</p>
              </div>
            </div>
          </div>
        `;
      }
  
      document.getElementById("personajes").innerHTML = contenedor;
    } catch (error) {
      console.error("Hubo un error inesperado:", error);
      alert("No se pudieron cargar los personajes. Intenta más tarde.");
    }
  }
  
  personajes();
  
  
  


  