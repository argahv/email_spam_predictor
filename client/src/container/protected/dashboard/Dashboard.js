import React from 'react'
import { Form, Input,Button,  Card } from 'antd';
import {connect} from 'react-redux'
import { useInjectReducer } from "../../../utils/injectReducer";
import { createStructuredSelector } from "reselect";
import * as mapDispatchToProps from "./actions";
import { selectLoading, reduxKey, selectPrediction } from "./selectors";
import reducer from "./reducer";

const Dashboard = ({loading,emailPredictPost,prediction,...props}) => {
  useInjectReducer({ key: reduxKey, reducer })
  const [form] = Form.useForm()
 const handleEmailInput = async (value) => {
   console.log('value', value)
    try {
    await emailPredictPost(value);
    } catch (error) {
      console.log("error", error);
    }
  };

  return <Card style={{padding:'1rem'}}>
    <Form style={{ padding: '1rem' }} form={form} onFinish={handleEmailInput}>
      <h1 style={{fontSize:30,color:'white',textAlign:'center'}}>Please, Enter the Email here.</h1>
      <Form.Item name="email">

        <Input.TextArea  style={{height:300}}/>
      </Form.Item>
       <Form.Item >
          <Button loading={loading} disabled={loading} block type="primary" htmlType="submit">
            Predict
          </Button>
        </Form.Item>
    </Form>
    {prediction && <h1 style={{textAlign:'center'}}>This email is predicted to be <span style={{color:prediction==="spam"?'#ff4f4f':'#5bb040',fontSize:40}}>{prediction.toUpperCase()}</span></h1>}

    </Card>
};


const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
  prediction:selectPrediction
});

export default connect(mapStateToProps,mapDispatchToProps) (Dashboard);
