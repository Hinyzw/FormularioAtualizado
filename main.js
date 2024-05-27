 //telefone
 const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }
  
  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }
   document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault(); // Evita o envio padrão
        const email = document.querySelector('input[name="email"]').value;
        this.action = `https://formsubmit.co/${email}`;
        this.submit(); // Envia o formulário com a nova action
    });

