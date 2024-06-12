import Checkbox from '../../Checkbox/Checkbox';
import Input from '../../Input/input';


function SignUp() {

  return (
 <>
 <Input placeholder={"Електрона пошта"} type={"text"} className={"p-2 rounded-md border border-gray-ligthMax w-93"} />
 <Input placeholder={"Пароль"} type={"text"} className={"p-2 rounded-md border border-gray-ligthMax w-93"} />
 <Input placeholder={"Повторити пароль"} type={"text"} className={"p-2 rounded-md border border-gray-ligthMax w-93"}/>
 <Checkbox text={"Я приймаю умови користувальницької угоди"} />

 </>
  );
}

export default SignUp;
