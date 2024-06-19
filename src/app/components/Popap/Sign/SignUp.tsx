import { useState } from 'react';
import Checkbox from '../../Checkbox/Checkbox';
import Form from '../../Form/Form';
import Input from '../../Input/input';
import ButtonSecondary from '../../button-secondary';


function SignUp() {
  const [formData, setFormData] = useState({ password: '', repeatPassword: '', email: '' });
  const [disabled, setActive] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData)
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
 <>
 <Form onSubmit={handleSubmit}>
 <Input     name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder={"Електрона пошта"} type={"text"} className={"p-2 rounded-md border border-gray-ligthMax w-93"} />
 <Input placeholder={"Пароль"} type={"text"} className={"p-2 rounded-md border border-gray-ligthMax w-93"} />
 <Input placeholder={"Повторити пароль"} type={"text"} className={"p-2 rounded-md border border-gray-ligthMax w-93"}/>
 <Checkbox text={"Я приймаю умови користувальницької угоди"} />
 <ButtonSecondary
              type={"submit"}
              disabled={disabled}
              onClick={()=> setActive(true)}
              className="border-cyan px-8 py-2 xl:px-[88px] xl:py-[13px] hover:border-orange  hover:text-orange active:text-yellow "
            >
              Зареєструватися
            </ButtonSecondary>
            </Form>
 </>
  );
}

export default SignUp;
