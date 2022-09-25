import { Layout,  Breadcrumb } from 'antd'; 
import Login from '../login/Login';  
const {  Content } = Layout; 


 export  function LayoutLogin () {
  return (
 <div align="center"> 
      <Layout align="center">
        
        <Layout>
           <br/><br/><br/><br/><br/>
          <Layout style={{ padding: '0 24px 24px' }}>

            <Breadcrumb style={{ margin: '16px 0' }}>      
            </Breadcrumb>
                <Content
                  class="site-layout-background"
                  style={{
                    padding: 10,
                    margin: 0,
                    minHeight: 400,
                  }}
                >
                <Login align="center"></Login>
                </Content> 
             <br/><br/><br/><br/> <br/><br/><br/><br/><br/>
          </Layout>
        </Layout>
      </Layout> 
      </div>
  )

}

export default LayoutLogin;