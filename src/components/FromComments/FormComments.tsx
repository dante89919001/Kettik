import { Controller, useForm } from "react-hook-form";
import { commets } from "../../types/event";
import { Button } from "../button/Button";
import { FormInput } from "../ui/FormInput/FormInput";

const defaultValues:commets  = {
  comment: ""
};
type Props = {
  onSubmit: (data: commets) => void;
}
export const CommentPostForm: React.FC<Props> = ({onSubmit }) => {
    const {
      // register,
      control,
      handleSubmit,
      reset,
      formState:{ errors , isValid } 
    } = useForm<commets>({ defaultValues, mode:"all"} );
  
    const handleSuccess = (values: commets) => {
      onSubmit(values);
      reset();
    };
  
    return (
      <form onSubmit={handleSubmit(handleSuccess)}>
        <h3></h3>
        <Controller
          control={control}
          name="comment"
          rules={{
            required: true,
            maxLength: {
              value: 10,
              message: "Max length is 20"
            }
            
           }} 
  
          render={({ field: { onChange, value, name } }) => (
            <FormInput  placeholder="Напишите ваш комментарий" value={value} name={name} onChange={onChange}/>
          )}
        />
      

        <Button isActive={isValid} text={'Отправить комментарий'} width={250} disable={!isValid} />
          
      </form>
    );
  };