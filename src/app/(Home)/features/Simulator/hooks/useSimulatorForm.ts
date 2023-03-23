import { roofEnum } from '@/enums/roofEnum';
import { useSimulator } from '@/hooks/useSimulator';
import { useFormik } from 'formik';
import { useState } from 'react';
import { simulationValidatorSchema } from '../validators/simulationValidator';

export const useSimulatorForm = () => {
  const [simulationIsLoading, setSimulationIsLoading] = useState(false);
  const { handleSimulate } = useSimulator();
  const form = useFormik({
    initialValues: {
      zipCode: '',
      streetName: '',
      city: '',
      state: '',
      price: '',
      roofType: 'ceramico'
    },
    validationSchema: simulationValidatorSchema,
    onSubmit: async (values) => {
      try {
        setSimulationIsLoading(true);
        await handleSimulate({
          cep: values.zipCode,
          estrutura: values.roofType as roofEnum,
          valor_conta: Number(values.price)
        });
      } catch (error) {
        alert('Erro na tentativa de comunação com o simulador.');
      } finally {
        setSimulationIsLoading(false);
      }
    },
    validateOnChange: false
  });

  return { form, simulationIsLoading };
};
