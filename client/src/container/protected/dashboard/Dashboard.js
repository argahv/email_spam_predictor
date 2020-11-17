import React from 'react'
import { Form, Input,Button } from 'antd';
import {connect} from 'react-redux'
import { useInjectReducer } from "../../../utils/injectReducer";
import { createStructuredSelector } from "reselect";
import * as mapDispatchToProps from "./actions";
import { selectLoading, reduxKey } from "./selectors";
import reducer from "./reducer";

const Dashboard = ({loading,emailPredictPost,...props}) => {
  useInjectReducer({ key: reduxKey, reducer })
  const [form] = Form.useForm()
  
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

      <Input />
      </Form.Item>
       <Form.Item>
          <Button block type="primary" htmlType="submit">
            Predict
          </Button>
        </Form.Item>
    </Form>
  </div>;
};


const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
});

export default connect(mapStateToProps,mapDispatchToProps) (Dashboard);
