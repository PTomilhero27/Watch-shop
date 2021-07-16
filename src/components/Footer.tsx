import '../Styles/Footer.module.scss';



import { FormEvent, useState } from 'react';

function Footer() {


  const [name, setName] = useState<string>()
  const [email, setEmail] = useState("")

  function handleForm(e: FormEvent) {
    e.preventDefault();

    if(!name && !email ) {
      return alert("Erro ao enviar o formulário, preencha corretamente os campos ");
    } else {
      setEmail("")
      setName("")
      return alert("Formulário enviado com sucesso!")
    }

  }


  return (

      <footer>
        <h2>assine nossas newsletter</h2>
        <p>
          Fique por dentro das nossas novidades e receba
          10% de desconto na primeiras compra
        </p>
        <span>*valido somente  para joias e não acumulativo com outras promoções</span>
        <form onSubmit={handleForm} >
          <input
            placeholder="Seu nome"
            type="text"
            aria-label="Seu nome"
            required

            value={name}
            onChange={(e) => { setName(e.target.value) }}
            style={{ borderColor: name ? "#0e6b25" : '#000' }}
          />
          <input
            placeholder="Seu e-mail"
            aria-label="Seu e-mail"
            type="email"
            required
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
            style={{ borderColor: email ? "#0e6b25" : '#000' }}
          />
          <button
            type="submit"
            style={{ borderColor: name && email ? "#0e6b25" : '#000' }}
          >
            <p>enviar</p>
          </button>
        </form>
      </footer>

  );
}

export default Footer;
