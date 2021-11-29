import styles from "../styles/signup.module.scss"

export default function Signup() {
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
    </section>
  )
}
