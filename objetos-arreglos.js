const solicitud = {
    nombre: "Usuario Simulado",
    mensaje: "te ha enviado una solicitud de amistad"
  };
  
  // Crear contenedor
  const contenedor = document.createElement('div');
  contenedor.style.position = 'fixed';
  contenedor.style.top = '70px'; // Altura aproximada de la barra superior de Facebook
  contenedor.style.right = '20px';
  contenedor.style.background = '#fff';
  contenedor.style.border = '1px solid #ccc';
  contenedor.style.padding = '10px';
  contenedor.style.zIndex = '9999';
  contenedor.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
  contenedor.style.borderRadius = '8px';
  contenedor.style.fontFamily = 'Arial, sans-serif';
  contenedor.style.width = '280px';
  
  contenedor.innerHTML = `
    <div style="display:flex;align-items:center;">
      <img src="https://via.placeholder.com/40" style="border-radius:50%;margin-right:10px;">
      <div>
        <strong>${solicitud.nombre}</strong><br>
        <span style="font-size:12px;">${solicitud.mensaje}</span>
      </div>
    </div>
    <div style="margin-top:10px;text-align:right;">
      <button style="margin-right:5px;">Aceptar</button>
      <button>Eliminar</button>
    </div>
  `;
  
  document.body.appendChild(contenedor);
  