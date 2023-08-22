import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Action.module.css';

export default function Action() {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);

  // data fetch
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3999/data');
      const json = await response.json();

      setData(json);
    }

    fetchData();
  }, []);

  async function handleButtonClick() {
    if (inputValue.length > 32){
      window.alert("max message size of 32");
      setInputValue("");
    }
      else{
      await fetch('http://localhost:3999/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: inputValue })
      });

      // refresh data after a POST
      const response = await fetch('http://localhost:3999/data');
      const json = await response.json();
      setData(json);
    }
  }

  return (
    <div className={styles.container}>
      <p>Send a message</p>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={styles.input}
      />
      <button onClick={handleButtonClick} className={styles.button}>Submit</button>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.message}</td>
              <td>{item.event_date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link href="/">
        <button className={`${styles.button} ${styles.home}`}>Return to Home</button>
      </Link>
    </div>
  );
}
