import React, { MouseEventHandler } from 'react';
import Header from '../components/Header';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import CardItem from '../components/CardItem';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormValues = {
  body?: string;
  title?: string;
  city?: string;
  accept?: boolean;
  switch?: string;
  image?: string;
};

type Post = FormValues & {
  key?: string;
};

const Forms = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, isValid },
    formState,
  } = useForm<FormValues>({ mode: 'onChange' });
  const [posts, setPosts] = React.useState<Post[]>([]);
  const onSubmit = (data: {
    body?: string;
    title?: string;
    city?: string;
    accept?: boolean;
    switch?: string;
    image?: FileList;
  }) => {
    if (isValid && isDirty && window.confirm('Are u sure?')) {
      const newPost: Post = {
        key: String(new Date()),
        title: data.title,
        body: data.body,
        city: data.city,
        switch: data.switch,
        image: data.image ? URL.createObjectURL(data.image[0]) : undefined,
      };
      setPosts([...posts, newPost]);
      reset();
    }
  };

  return (
    <div>
      <Header title="Forms" />
      <form className="form-wrapper" onSubmit={handleSubmit(onSubmit as SubmitHandler<FormValues>)}>
        <div>
          Text: <MyInput {...register('body', { required: true })} type="text" placeholder="Text" />
          {formState.errors.body && <span className="error-message">This field is required</span>}
        </div>
        <div>
          Date:{' '}
          <MyInput {...register('title', { required: true })} type="date" placeholder="Date" />
          {formState.errors.title && <span className="error-message">This field is required</span>}
        </div>
        <div>
          City:
          <select {...register('city', { required: true })}>
            <option value="Moscow">Moscow</option>
            <option value="New York">New York</option>
            <option value="Another">Another</option>
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
            value="First"
            defaultChecked
          />{' '}
          First
          <MyInput {...register('switch')} type="radio" name="number" value="Second" /> Second
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
