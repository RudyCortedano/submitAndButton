import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Prueba1 = () => {

  const {register, handleSubmit, reset} = useForm()

  const submit = data =>{
    console.log(data)
    reset({
      name: "",
      email: "",
      password: "",
    })
  }

  const handleFunction = () =>{
    console.log("yo no hago submit porque me identifico como tipo boton y no submit XD")
    alert("yo no hago submit porque me identifico como tipo boton y no submit XD")
  }

  return (
    <>
      <article className="article__general">
        <form onSubmit={handleSubmit(submit)}>

          <div>
            <label  className="label__name"htmlFor="name">Name</label>
            <input className="input__style" required {...register('name')} type="text" id="name" />
          </div>
  
          <div>
            <label className="label__name" htmlFor="email">Email</label>
            <input className="input__style" required {...register('email')} type="text" id="email" />
          </div>

          <div>
            <label className="label__name" htmlFor="password">Password</label>
            <input className="input__style" required {...register('password')} type="password" id="password" />
          </div>

         <div className="button">

            {/* los botones normales son por defecto tipo submit, por lo tanto hay que cambiarlos a tipo button
            los botones de reactBootstrap son por defecto tipo button entonces hay que cambiarlos a tipo  submit */}

            <button className="button__form enviar" >Envia, Btn normal</button>
            <button type="button"   onClick={handleFunction} className="button__form otraCosa" >Ejecutar otra funcion</button>
            <Button type="submit" variant="primary"> Enviar, Btn Bootstrap</Button>{' '}

         </div>

        </form>
      </article>
    </>
  );
};

export default Prueba1;
