import React , { useRef } from 'react';
import './EditFile.css'
import { Button, Form, Input } from 'antd';

//   const [form] = Form.useForm();
//   const onFinish = values => {
//     console.log(values);
//   };

const EditFile = ( { file , onChangeInput } ) => {
   const inputRef = useRef( null);
   const handleSubmit = (e) =>{
    //    console.log(e.target.content.value)
   console.log(inputRef.current.value)
   }
    return (
        <div className="editfile">
            <Form onSubmitCapture={handleSubmit}>
                <Input  className="namefile" value={file.name} />
                <Input.TextArea rows={15} className="content" type="text" ref={inputRef} value={file.content} name="content" />
                <Button type="primary" htmlType="submit" className="savebtn" >
                    Save
                </Button>
            </Form>
        </div>
    );
};

export default EditFile;