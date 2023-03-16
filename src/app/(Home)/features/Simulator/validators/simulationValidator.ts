import * as Yup from 'yup';

const message = 'Campo obrigatório';

export const simulationValidatorSchema = Yup.object().shape({
  zipCode: Yup.string().required(message).min(9),
  price: Yup.number().required(message),
  roofType: Yup.string().required(message)
});
