import { useState } from 'react';

const NameContactForm = () => {
  const [email, setEmail] = useState('');
  const [formConfirm, setFormConfirm] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    //iniciar peticion de xhr
    let xhr = new XMLHttpRequest();
    //peticion a url  al formulario de hubspot
    let url =
      'https://api.hsforms.com/submissions/v3/integration/submit/21108231/fa5ace07-9190-4787-892d-0ec08b78ff72';
    //array con los valores del estado
    let data = {
      fields: [
        {
          name: 'email',
          value: email,
        },
      ],
      context: {
        pageUri: 'http://localhost:3000/',
        pageName: 'Thinkweek',
      },
    };
    //pasamos el dato a JSON para enviar
    let final_data = JSON.stringify(data);
    //metodo de postear  a la url de hubspot
    xhr.open('POST', url);
    //mandar peticion de typo application/json
    xhr.setRequestHeader('Content-Type', 'application/json');
    //funcion que sirce para verificar que se haya mandado el form
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
        setFormConfirm(true);
      } else if (xhr.readyState === 4 && xhr.status === 403) {
        console.log(xhr.responseText);
      }
    };
    //mandar a emailjs
    //el emailjs recibe los datos de la ref del form con los parametros de el servide id y el form id
    //los datos del correo vienen del atributo de name

    //mandar la request final a la api de hubspot
    xhr.send(final_data);
    //dejar vacio el estado que mandael form
    setEmail('');
  };
  return (
    <div className="w-full relative">
      <h2 className=" font-bold py-10 text-grisOscuroThink text-[1.8rem]   md:text-[3rem]">
        ¡Suscríbete a nuestro newsletter!
      </h2>
      <form
        onSubmit={handleSubmit}
        className="border border-grisOscuroThink w-full md:w-[65%] flex rounded-md"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tumail@empresa.com"
          className="text-[1.4rem] p-4 rounded-md flex-1   focus:outline-none"
        />
        <button
          type="submit"
          className=" bg-amarilloThink text-[1.4rem] p-4 text-white rounded-r-md"
        >
          Enviar
        </button>
      </form>
      {formConfirm && (
        <div className=" text-grisOscuroThink text-[1.6rem] mt-5">
          Gracias por suscribirte!
        </div>
      )}
    </div>
  );
};

export default NameContactForm;
