import React from 'react';
import { connect } from 'dva';
import {createStore} from 'redux'
import styles from './IndexPage.css';
import Wrap from '../components/Wrap';
import data from '../data/index'

const store = createStore(data);
//console.log(store.getState());

function IndexPage() {
  return (
    <div className={styles.normal}>
       <Wrap value={store.getState()}
             action_a={()=>store.dispatch({type:'AAA'})}
             action_b={()=>store.dispatch({type:'BBB'})}
             action_c={()=>store.dispatch({type:'CCC'})}></Wrap>
    </div>
  );
};

store.subscribe(IndexPage);

IndexPage.propTypes = {
};

export default connect()(IndexPage);
