document.addEventListener('DOMContentLoaded', function() {
    const formPedido = document.getElementById('formPedido');
    if (formPedido) {
      formPedido.addEventListener('submit', async function(e) {
        e.preventDefault();
        const payload = {
          nome: document.getElementById('nome').value,
          email: document.getElementById('email').value,
          telefone: document.getElementById('telefone').value,
          tipo_casa: document.getElementById('tipo_casa').value,
          numero_compartimentos: document.getElementById('numero_compartimentos').value,
          tipo_camera: document.getElementById('tipo_camera').value,
          armazenamento: document.getElementById('armazenamento').value,
          localizacao: document.getElementById('localizacao').value
        };
  
        const res = await fetch('https://seguramocambique-backend-1.onrender.com/api/pedidos', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
  
        if (res.ok) {
          toast('Pedido enviado com sucesso!', 'success');
          formPedido.reset();
        } else {
          toast('Erro ao enviar pedido!', 'error');
        }
      });
    }
  
    const formContato = document.getElementById('formContato');
    if (formContato) {
      formContato.addEventListener('submit', async function(e) {
        e.preventDefault();
        toast('Mensagem enviada com sucesso!', 'success');
        formContato.reset();
      });
    }
  });
  
  function toast(message, type) {
    const t = document.createElement('div');
    t.textContent = message;
    t.className = 'toast ' + type;
    document.body.appendChild(t);
    setTimeout(() => { t.remove(); }, 3000);
  }
  