import { useState } from 'react';

const FormInput = ({ type, value, onChange, placeholder }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="text-[1.2rem] border border-grisOscuroThink p-3 rounded-lg flex-1   focus:outline-none"
  />
);

const NameContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');
  const [lugar, setLugar] = useState('');
  const [duracion, setDuracion] = useState('');
  const [formConfirm, setFormConfirm] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    //iniciar peticion de xhr
    let xhr = new XMLHttpRequest();
    //peticion a url  al formulario de hubspot
    let url =
      'https://api.hsforms.com/submissions/v3/integration/submit/21108231/43ae4804-c13b-4b0a-87c1-ef9b42ddfcfb';
    //array con los valores del estado
    let data = {
      fields: [
        {
          name: 'entidad',
          value: name,
        },
        {
          name: 'address',
          value: direccion,
        },
        {
          name: 'email',
          value: email,
        },
        {
          name: 'lugar',
          value: lugar,
        },
        {
          name: 'duracion',
          value: duracion,
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
    setName('');
    setDireccion('');
    setLugar('');
    setDuracion('');
  };
  return (
    <div className="w-4/5">
      <h2 className=" font-bold py-10 text-grisOscuroThink text-[1.8rem]   md:text-[3rem]">
        Solicita tu THINK WEEK corporativo con nosotros{' '}
      </h2>
      <form
        onSubmit={handleSubmit}
        className=" w-full md:w-4/5 flex flex-col space-y-5 rounded-md"
      >
        <FormInput
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre de entidad"
        />
        <FormInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tumail@empresa.com"
        />
        <FormInput
          type="text"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          placeholder="Dirección de entidad"
        />
        <FormInput
          type="text"
          value={lugar}
          onChange={(e) => setLugar(e.target.value)}
          placeholder="Lugar para hacer un Think Week"
        />
        <FormInput
          type="text"
          value={duracion}
          onChange={(e) => setDuracion(e.target.value)}
          placeholder="Duración"
        />
        {/*      <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tumail@empresa.com"
          className="text-[1.4rem] border p-4 rounded-md flex-1   focus:outline-none"
        /> */}
        <button
          type="submit"
          className=" bg-amarilloThink text-[1.4rem] p-2 text-white rounded-md w-[25%]"
        >
          Enviar
        </button>
      </form>
      {formConfirm && (
        <p className=" text-grisOscuroThink text-[1.6rem] mt-5">
          Gracias por suscribirte!
        </p>
      )}
    </div>
  );
};

export default NameContactForm;
