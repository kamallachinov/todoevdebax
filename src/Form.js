import { Formik, Form, Field } from 'formik'
import React from 'react'
import { Context, useTodo } from './Context';
import * as Yup from "yup"


function TodoForm() {
    const SignupSchema = Yup.object().shape({
        emailorPhone: Yup.string().required("Input is required"),
    })
    const { todo, setTodo } = useTodo();
    return (
        <>
            <Formik
                initialValues={{
                    emailorPhone: "",
                }}
                validationSchema={SignupSchema}
                onSubmit={(value, { resetForm }) => {
                  
                    {
                        if(value.emailorPhone == ""){
                            alert("boshdu")
                        }else{
                            setTodo([...todo, value])
                            // console.log(value);
                        }
                    }
                    resetForm();
                }}>
                {({ values, errors }) => {
                    return (
                        <>
                            <Form>
                                <Field type="text" name="emailorPhone" placeholder="Type todo" />
                                {errors.emailorPhone}<div>{errors.todo}</div>{null}
                                <button type='submit'>Add</button>
                            </Form>
                        </>
                    )
                }}
            </Formik>
        </>
    )
}

export default TodoForm
