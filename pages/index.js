import React, { useRef, useState, useEffect } from "react";
import { FaGithubAlt } from "react-icons/fa";
import { MdQueryStats } from "react-icons/md";
import { useRouter } from "next/router";
import { Head } from "../components";
import styles from "./Home.module.scss";

const Home = () => {
  const router = useRouter();
  const inputRef = useRef();
  const [username, setUserName] = useState("");

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    router.replace(`/user/${username}`);
  };

  return (
    <main>
      <Head title="Geeky Profile - Github" />
      <div className={styles.container}>
        <form onSubmit={onSubmit}>
          <FaGithubAlt /> <MdQueryStats />
          <label htmlFor="username">Geekyprofile GitHub</label>
          <span>Enter Github Username</span>
          <input
            name="username"
            placeholder="e.g.: blackipie"
            type="text"
            ref={inputRef}
            onChange={e => setUserName(e.target.value)}
            autoComplete="off"
          />
        </form>
      </div>
    </main>
  );
};

export default Home;
