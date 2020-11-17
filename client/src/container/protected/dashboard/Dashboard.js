import React from 'react'
import { Form, Input,Button } from 'antd';
import {connect} from 'react-redux'
import { useInjectReducer } from "../../../utils/injectReducer";
import { createStructuredSelector } from "reselect";
import * as mapDispatchToProps from "./actions";
import { selectLoading, reduxKey, selectPrediction } from "./selectors";
import reducer from "./reducer";

const Dashboard = ({loading,emailPredictPost,prediction,...props}) => {
  useInjectReducer({ key: reduxKey, reducer })
  const [form] = Form.useForm()
  console.log('props', props)
 const handleEmailInput = async (value) => {
   console.log('value', value)
    try {
      const predicted = await emailPredictPost(value);
      console.log('predicted', predicted)
      // form.resetFields();
    } catch (error) {
      console.log("error", error);
    }
  };
  return <div>
    <Form form={form} onFinish={handleEmailInput}>
      <Form.Item name="email">

      <Input.TextArea />
      </Form.Item>
       <Form.Item>
          <Button block type="primary" htmlType="submit">
            Predict
          </Button>
        </Form.Item>
    </Form>
    {prediction && <h1>This email is predicted to be {prediction.toUpperCase()}</h1>}

  </div>;
};


const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
  prediction:selectPrediction
});

export default connect(mapStateToProps,mapDispatchToProps) (Dashboard);
