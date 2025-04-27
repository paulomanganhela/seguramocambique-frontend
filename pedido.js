// pedido.js

function calcularInstalacao() {
    const precoCamera = parseFloat(document.getElementById('preco_por_camera').value) || 0;
    const qtdCameras = parseInt(document.querySelector('input[name="quantidade_cameras"]').value) || 0;
    const valorInstalacao = precoCamera * qtdCameras;
    document.getElementById('valor_instalacao').value = valorInstalacao.toLocaleString("pt-MZ") + " MZN";
    calcularTotal();
  }
  
  function calcularTransporte() {
    const cidade = document.getElementById('cidade_transporte').value;
    const distanciaInput = document.getElementById('distancia_km');
    let transporte = 0;
  
    if (cidade === "Maputo") transporte = 1000;
    else if (cidade === "Matola") transporte = 2000;
    else if (cidade === "Marracuene") transporte = 2500;
    else if (cidade === "Outro") {
      distanciaInput.disabled = false;
      const km = parseFloat(distanciaInput.value) || 0;
      transporte = km * 120;
    } else {
      distanciaInput.disabled = true;
      transporte = 0;
    }
  
    document.getElementById('valor_transporte').value = transporte.toLocaleString("pt-MZ") + " MZN";
    calcularTotal();
  }
  
  function calcularTotal() {
    const valorInstalacao = parseFloat(document.getElementById('valor_instalacao').value.replace(/\D/g, '')) || 0;
    const valorTransporte = parseFloat(document.getElementById('valor_transporte').value.replace(/\D/g, '')) || 0;
    const total = valorInstalacao + valorTransporte;
    document.getElementById('total_estimado').value = total.toLocaleString("pt-MZ") + " MZN";
  }
  
  document.getElementById('form-pedido').addEventListener('input', () => {
    calcularInstalacao();
  });
  
  // Calcular inicial
  calcularInstalacao();
  