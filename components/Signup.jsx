import styles from "../styles/signup.module.scss"

export default function Signup() {
  const dots =(dotCount)=>{
    const dotsArr=[]
    for(let i= 0; i<dotCount;i++){
      dotsArr.push(i)
    }
    return dotsArr
  }
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <img src="/img/whiteLogo.png" alt="Vamos a parar" />
        <h2>¡Vamos a parar!</h2>
        <p>Vamos a empezar un autodiagnóstico personalizado</p>
        <form>
          <input 
            type="email" 
            required  
            placeholder="Dejanos tu email para una consulta personalizada"
          />
          <button>
            <img 
              src="/img/sendArrow.png" 
              alt="" 
            />
          </button>
        </form>
        <div className={styles}>

        </div>
        <p>Siguiente</p>
      </div>
        {/* funcion para crear un numero de dots para la animacion
            Toma un  array del [1 al 100]  y eso lo mapea creando cada span en la iteracion
          */}
        {dots(200).map((item)=>(
          <div className={styles.circleContainer}>
            <div className={styles.circle} key={item}></div>
          </div>
        ))}
    </section>
  
  )
}
