import styles from "../styles/signup.module.scss"
import { useState,useRef} from "react"
import emailjs from "emailjs-com"

export default function Signup() {
  //agarrar el valor del formulario del email y el nombre
 // ese estado sera pobaldo por el valor del formulario

  const form = useRef();
  const [name,setName] = useState("");
  const [email,setEmail] = useState("")
  const [showStep,setShowStep]  = useState(false)
  const [showForm,setShowForm] = useState(true)
  const dots =(dotCount)=>{
    const dotsArr=[]
    for(let i= 0; i<dotCount;i++){
      dotsArr.push(i)
    }
    return dotsArr
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    let xhr = new XMLHttpRequest();
    let url = 'https://api.hsforms.com/submissions/v3/integration/submit/21108231/b74f5855-65c8-4613-9dd2-c6ce52d3c6fd'
    //array con los valores del estado
    let data = {
      "fields":[
        {
          "name":"email",
          "value":email
        },
        {
          "name":"firstname",
          "value":name
        }
      ],
      "context":{
        "pageUri":"http://localhost:3000/",
        "pageName":"Thinkweek"
      },
    
    }
    //pasamos el dato a JSON para enviar 
    let final_data= JSON.stringify(data)
    //metodo de postear  a la url de hubspot
    xhr.open('POST',url);
    //mandar peticion de typo application/json
    xhr.setRequestHeader('Content-Type','application/json');
    //funcion que sirce para verificar que se haya mandado el form
    xhr.onreadystatechange= function(){
      if(xhr.readyState===4 && xhr.status===200){
        console.log(xhr.responseText);
      }else if(xhr.readyState===4 && xhr.status===403){
        console.log(xhr.responseText);
      }
    }
    //mandar a emailjs  
    //el emailjs recibe los datos de la ref del form con los parametros de el servide id y el form id 
    //los datos del correo vienen del atributo de name
    emailjs.sendForm('service_35b26w9', 'template_l7p23zz', form.current, 'user_bPd3vNMPBqKJo3Zb9TVnY')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    //mandar la request final a la api de hubspot
    xhr.send(final_data)
    //dejar vacio el estado que mandael form
    setName("")
    setEmail("")
    //mostrar el anuncio de primer paso 
    setShowStep(true)
    //ocultar le formulario
    setShowForm(false)
  }
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {
          showForm &&
          <>
          <img src="/img/whiteLogo.png" alt="Vamos a parar" />
            <h2>¡Vamos a parar!</h2>
            <p>Vamos a empezar un autodiagnóstico personalizado</p>
            <form onSubmit={handleSubmit} ref={form} >
            <select required name="user_pregunta1">
              <option value="" disabled selected style={{color:"white"}}>¿Qué es lo que más te preocupa?</option>
              <option value="Desconectar/crear algo nuevo">Desconectar/crear algo nuevo</option>
              <option value="Proceso de cambio/transformación personal">Proceso de cambio/transformación personal</option>
              <option value="Proceso de cambio/transformación en mi empresa">Proceso de cambio/transformación en mi empresa</option>
              <option value="Solucionar un problema personal">Solucionar un problema personal</option>
              <option value="Solucionar un problema empresarial">Solucionar un problema empresarial</option>
            </select>
            <select required name="user_pregunta2">
              <option value="" disabled selected style={{color:"white"}} >Esta experiencia sería individual o empresarial:</option>
              <option value="Individual">Individual</option>
              <option value="Empresa">Empresarial</option>
            </select>
              <input
                type="text"
                required
                placeholder="Por favor escribe tu nombre"
                value={name}  
                name="user_name"
                onChange={e=>setName(e.target.value)}
              />
              <input 
                type="email" 
                required  
                placeholder="Dejanos tu email para una consulta personalizada"
                value={email}
                name="user_email"
                onChange={e=>setEmail(e.target.value)}

              />
              <button type="submit">
                Contáctanos!
              
              </button>

            </form>
          </>
        }
        
            {
              showStep &&
              <div className={styles.firstStep_container}>
                  <img src="/img/miniLogo.png" alt="gracias por dar el primer paso" />
                  <h2>¡Gracias por dar el primer paso!</h2>
                  <p>Te daremos una consulta personalizada sin cargo.</p>
                  <p className={styles.sabermas}>Saber más</p>
              </div>
            }

      </div>
        {/* funcion para crear un numero de dots para la animacion
            Toma un  array del [1 al 100]  y eso lo mapea creando cada span en la iteracion
          */}
        {dots(200).map((item,i)=>(
          <div key={i}className={styles.circleContainer}>
            <div className={styles.circle} key={item}></div>
          </div>
        ))}
    </section>
  
  )
}
