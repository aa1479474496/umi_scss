import React, { Component } from 'react';
import Link from 'umi/link';

import styles from './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p className={styles.title}>首页</p>
        <Link className={styles.link} to="/carlist">go to carlist page</Link>
      </div>
    )
  }
}

export default Home;