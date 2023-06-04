import React, { MouseEventHandler } from 'react';
import Header from '../components/Header/Header';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import CardItem from '../components/Cards/CardItem';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { FormValues } from '../interfaces/FormValues';
import { Post } from '../interfaces/FormValues';
import { changeFormsAction } from '../redux/allForms';

const Forms = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, isValid },
    formState,
  } = useForm<FormValues>({ mode: 'onChange' });
  const posts = useSelector((state: { allForms: { allForms: Post[] } }) => state.allForms.allForms);
  const onSubmit = (data: {
    body?: string;
    title?: string;
    status?: string;
    accept?: boolean;
    switch?: string;
    image?: FileList;
  }) => {
    if (isValid && isDirty && window.confirm('Are u sure?')) {
      const newPost: Post = {
        key: String(new Date()),
        title: data.title,
        body: data.body,
        status: data.status,
        switch: data.switch,
        image: data.image ? URL.createObjectURL(data.image[0]) : undefined,
      };
      dispatch(changeFormsAction(newPost));
      reset();
    }
  };

  return (
    <div>
      <Header title="Create your own cards!" />
      <form className="form-wrapper" onSubmit={handleSubmit(onSubmit as SubmitHandler<FormValues>)}>
        <div>
          Name:{' '}
          <MyInput {...register('title', { required: true })} type="text" placeholder="Name" />
          {formState.errors.body && <span className="error-message">This field is required</span>}
        </div>
        <div>
          Date of birth:{' '}
          <MyInput {...register('body', { required: true })} type="date" placeholder="Date" />
          {formState.errors.title && <span className="error-message">This field is required</span>}
        </div>
        <div>
          Status:
          <select {...register('status', { required: true })}>
            <option value="Status: Alive">Alive</option>
            <option value="Status: Dead">Dead</option>
            <option value="Status: Unknown">Unknown</option>
          </select>
        </div>
        <div>
          <MyInput {...register('accept', { required: true })} type="checkbox" /> I consent to my
          personal data
          {formState.errors.accept && (
            <span className="error-message"> This field is required</span>
          )}
        </div>
        <div>
          <MyInput
            {...register('switch')}
            type="radio"
            name="number"
            value="Gender: Male"
            defaultChecked
          />{' '}
          Male
          <MyInput {...register('switch')} type="radio" name="number" value="Gender: Female" />{' '}
          Female
        </div>
        <MyInput {...register('image', { required: true })} type="file" name="image" />
        {formState.errors.image && <span className="error-message">This field is required</span>}
        <MyButton
          data-testid="btn-add"
          type="submit"
          onClick={
            handleSubmit(
              onSubmit as SubmitHandler<FormValues>
            ) as MouseEventHandler<HTMLButtonElement>
          }
        >
          Create Card
        </MyButton>
      </form>
      <div className="card-list">
        {posts.map((post) => (
          <CardItem data-testid="card" {...post} image={post.image} key={post.key} />
        ))}
      </div>
    </div>
  );
};

export default Forms;
