import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home({users}) {
  return (
    <div className={styles.container}>
        <h1 className={styles.heading}>Simple Next App</h1>
        <div className={styles.card}>
          {users.map(user => <p>{user.name} <Link href={`users/${user.id}`}><a>See Details</a></Link></p>)} <br />
        </div>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  return{
      props: { users}
  }
}

