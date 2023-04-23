import React from 'react';
import styles from './Bootstrap.module.css'

function  Bootstrap():JSX.Element{
    return(
        <>
          <h1>Bootstrap</h1>
          <div className='container '>
            <div className='row'>
                <div className="col-lg-6 col-md-12 col-sm-12 gx-5 ">
                      <img className="w-100" src="https://blog.logrocket.com/wp-content/uploads/2021/09/optimizing-performance-react-application.png" alt="q" />
                      <p className={styles.red}>
                        1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Et veniam quidem voluptatum magni voluptates. 
                        Accusamus dignissimos quo eius, cumque quos at, veniam 
                        repudiandae vel fugiat dicta hic eum odio officia?          
                        </p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-3">
                <img className="w-100" src="https://blog.logrocket.com/wp-content/uploads/2021/09/optimizing-performance-react-application.png" alt="q" />  
                      2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                      Et veniam quidem voluptatum magni voluptates. 
                      Accusamus dignissimos quo eius, cumque quos at, veniam 
                      repudiandae vel fugiat dicta hic eum odio officia?          
                </div>
                <div className="col-lg-6 col-md-3 col-sm-3">
                <img className="w-100" src="https://blog.logrocket.com/wp-content/uploads/2021/09/optimizing-performance-react-application.png" alt="q" />
                      3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                      Et veniam quidem voluptatum magni voluptates. 
                      Accusamus dignissimos quo eius, cumque quos at, veniam 
                      repudiandae vel fugiat dicta hic eum odio officia?          
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                <img className="w-100" src="https://blog.logrocket.com/wp-content/uploads/2021/09/optimizing-performance-react-application.png" alt="q" />
                      4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                      Et veniam quidem voluptatum magni voluptates. 
                      Accusamus dignissimos quo eius, cumque quos at, veniam 
                      repudiandae vel fugiat dicta hic eum odio officia?          
                </div>
            </div>
          </div>
        </>  
    );

}
export default Bootstrap;