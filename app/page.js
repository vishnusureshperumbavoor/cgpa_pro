"use client"
import { useEffect, useState } from 'react'
import styles from './page.module.css'

export default function Home() {

  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [photoURL, setPhotoURL] = useState("")

  useEffect(() => {
    setUser(localStorage.getItem('name'))
    setEmail(localStorage.getItem('email'))
    setPhotoURL(localStorage.getItem('photoURL'))
  }, [])

  const logout=()=>{
    localStorage.clear()
  }
  
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {photoURL && <img src={photoURL} alt="Profile Photo" />}
        {user}
        {email}
        <button onClick={logout}>Logout</button>
      </div>
    </main>
  );
}
