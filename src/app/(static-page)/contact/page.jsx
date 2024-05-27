"use client"
import axios from "axios";
import { useState } from "react";
import styles from "./page.module.css";


export default function Contact() {

  const [form,setForm]=useState({
    name:"",
    email:"",
    message:"",
    });

    const [mes,setMess]=useState('');
    
    function handle(e){
      setForm({...form,[e.target.name]:e.target.value})
      };

      async function submitt(e){
        e.preventDefault();
        try{
        let res=await axios.post('https://devmodeapi.onrender.com/api/contacts',form);
        if(res.status == 201){
          setMess("Thank you, we've recieved your message!")
        }
        else{
          setMess("Something went wrong.");
        }
       
        form.name="";
        form.email="";
        form.message="";

        }
        catch(err){
          setMess("Something went wrong.");
        console.log(err);
        }
        };



  return (
    <div className={styles.contact}>
  <div className={styles.desc}>
  <h2 className={styles.title}>CONTACT US</h2>
  <p className={styles.para}>Have questions, ideas, or projects in mind? Lets connect! Get in touch with us &
send us message today!</p>
  <svg width="450" height="341" viewBox="0 0 643 341" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.illustration}>
    <path d="M1 266.029C20.7403 294.543 41.905 329.76 78.2222 336.807C112.733 343.503 148.55 339.253 181.556 327.918C208.248 318.751 251.36 297.749 253.667 264.474C257.205 213.415 131.128 245.757 182.667 302.918C208.118 331.146 252.556 339.327 288.556 333.474C336.092 325.744 376.219 302.162 419 282.029" stroke="var(--color-icon)" strokeWidth="1"  strokeLinecap="round" />
    <path d="M641 2.42846L480.714 148.143V221L524.429 177.286M407.857 97.1427L641 1.91846L600.2 213.714L407.857 97.1427Z" stroke="var(--color-icon)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>


<div className={styles.inputs}>
  <form className={styles.inputs} onSubmit={submitt}>

<input type="text" placeholder="Name" className={styles.inf}  value={form.name} name='name' required min={2} minLength={3}
onChange={handle}  autoComplete="off" />

<input type="email" placeholder="Email Address" className={styles.inf} value={form.email} name='email' required
onChange={handle} autoComplete="off" />

<textarea placeholder="your message" className={styles.mess} value={form.message} name='message' required  minLength={2}
onChange={handle}  ></textarea>
<p className={styles.succes}>{mes}</p>

<input type="submit" className={styles.send}/>

</form>


</div>
    </div>
  )
}
