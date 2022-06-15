import React, { useState } from 'react';
import Link from 'next/link';
const FormInput = ({ type, value, onChange, placeholder }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="text-[1.2rem]  border-r-0 placeholder-white flex-1   text-white border border-white p-6  rounded-l-lg   bg-transparent  focus:outline-none"
  />
);

const ArrowButton = ({ onClickArrow }) => (
  <button
    className="  bg-yellow-400 rounded-r-lg w-[50px] flex justify-center items-center "
    onClick={onClickArrow}
  >
    <img src="/img/ContactArrow.png" className="w-[25px] h-[25px]" />
  </button>
);

const InputContainer = ({ children, hasAnteriorButton, clickAnterior }) => (
  //este dive es para que tengan la misma altura y no se vea raro el cambio
  <div className="h-[100px]">
    <div className="w-4/5 flex max-w-[450px] mx-auto">{children}</div>
    {hasAnteriorButton && <AnteriorButton clickAnterior={clickAnterior} />}
  </div>
);

const AnteriorButton = ({ clickAnterior }) => (
  <p
    className="text-white text-[1.6rem] w-4/5 flex max-w-[450px] mt-5 mx-auto cursor-pointer"
    onClick={clickAnterior}
  >
    Anterior
  </p>
);

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [step, setStep] = useState(1);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [email, setEmail] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [preocuapcion, setPreocupacion] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [cambio, setCambio] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formConfirm, setFormConfirm] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    //iniciar peticion de xhr
    let xhr = new XMLHttpRequest();
    //peticion a url  al formulario de hubspot
    let url =
      'https://api.hsforms.com/submissions/v3/integration/submit/21108231/80011eb2-b739-4c85-bc36-879d5cefcd32';
    //array con los valores del estado
    let data = {
      fields: [
        {
          name: 'email',
          value: email,
        },
        {
          name: 'preocupacion',
          value: preocuapcion,
        },
        {
          name: 'cambio',
          value: cambio,
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
  };

  return (
    <div className="w-full h-screen relative">
      <div className="w-full h-screen bg-black flex flex-col items-center relative justify-center z-10">
        <img
          src="/img/whiteLogo.png"
          alt="think week"
          className="w-[55px] h-[55px]"
        />
        <h2 className="text-white text-[4rem] font-medium">¡Vamos a parar!</h2>
        <p className="text-white  text-[1.4rem] md:text-[1.6rem] text-center ">
          Vamos a empezar con un autodiagnóstico personalizado
        </p>
        <form className=" items-center mt-10 w-full " onSubmit={handleSubmit}>
          {step === 1 && (
            <InputContainer hasAnteriorButton={false}>
              <FormInput
                type="text"
                placeholder="¿Qué es lo que más te preocupa?"
                value={preocuapcion}
                onChange={(e) => setPreocupacion(e.target.value)}
              />
              <ArrowButton onClickArrow={() => setStep(step + 1)} />
            </InputContainer>
          )}
          {step === 2 && (
            <InputContainer
              hasAnteriorButton={true}
              clickAnterior={() => setStep(step - 1)}
            >
              <FormInput
                type="text"
                placeholder="¿Quisieras un cambio para ti y/o tu organización?"
                value={cambio}
                onChange={(e) => setCambio(e.target.value)}
              />
              <ArrowButton onClickArrow={() => setStep(step + 1)} />
            </InputContainer>
          )}
          {step === 3 && (
            <InputContainer
              hasAnteriorButton={true}
              clickAnterior={() => setStep(step - 1)}
            >
              <FormInput
                type="email"
                placeholder="Dejanos tu mail para una consulta personalizada"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <ArrowButton onClickArrow={() => setStep(step + 1)} />
            </InputContainer>
          )}
          {step === 4 && (
            <InputContainer hasAnteriorButton={false}>
              <button className=" bg-yellow-400 w-3/5 mx-auto rounded-lg text-[1.8rem] text-white py-4 ">
                Enviar
              </button>
            </InputContainer>
          )}
        </form>
      </div>
      <div
        className={`${
          formConfirm ? 'top-0' : '-top-[100%]'
        } w-full h-screen bg-[url('/img/contactbg.png')] bg-cover flex flex-col items-center justify-center bg-center absolute inset-0 opacity-1 z-20 transition-all duration-500 `}
      >
        <div className="flex flex-col items-center justify-center space-y-8">
          <img src="/img/miniLogo.png" />
          <h2 className="text-white text-[4rem] text-center w-4/5 mx-auto">
            ¡Gracias por dar el primer paso!
          </h2>
          <p className="text-white text-[1.6rem] text-center">
            Te daremos una consulta personalizada sin coste.
          </p>
          <Link href="/nosotros">
            <button className="border border-amarilloThink text-white text-[1.6rem] rounded-md py-4 px-20">
              Saber más
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default index;
