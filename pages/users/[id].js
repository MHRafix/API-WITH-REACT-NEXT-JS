import styles from '../../styles/Home.module.css'
import React from 'react';

const dynamicData = ({user}) => {
    return (
    
    <div className={styles.container}>
            <h1 className={styles.heading}>Single User Information</h1>
        <div className={styles.singleCard}>
            <h3 style={{margin:'5px 0px'}}>User Name : &nbsp;&nbsp;&nbsp; {user.name}</h3>
            <span>User Email: &nbsp;&nbsp;&nbsp;&nbsp; {user.email}</span> <br />
            <span>User Phone: &nbsp;&nbsp;&nbsp; {user.phone}</span> <br />
            <span>User Address: &nbsp;{user.address.city}, {user.address.street}</span>
        </div>
    </div>
    );
};

export default dynamicData;


// Make dynamic paths here
export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    const paths = users.map(user => ({
        params: {id: user.id.toString()}
    }))
    return { paths, fallback: false };
  }

  // Find dynamic data based on dynamic path dyunamic id 
  export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await res.json()
  console.log(user);
    // Pass post data to the page via props
    return { props: { user } }
  }
  