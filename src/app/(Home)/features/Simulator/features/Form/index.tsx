'use client';
import { Button } from '@/components/Button';
import { CurrencyInput } from '@/components/CurrencyInput';
import { TextInput } from '@/components/TextInput';
import { getAddressByZipcode } from '@/services/CEPApi';
import React, { useState } from 'react';
import RoofSelect from '../RoofSelect';
import { useSimulatorForm } from '../../hooks/useSimulatorForm';

import * as S from './styles';
import { SearchIcon } from '@/Icons/SearchIcon';

const SimulatorForm: React.FC = () => {
  const [addressIsLoading, setAddressIsLoading] = useState(false);
  const { form, simulationIsLoading } = useSimulatorForm();

  const handleSearchAddress = async (zipCode: string) => {
    try {
      setAddressIsLoading(true);
      const data = await getAddressByZipcode(zipCode);
      if (data.erro) {
        return form.setFieldError('zipCode', 'cep inválido');
      } else {
        form.setFieldError('zipCode', '');
      }
      form.setFieldValue('streetName', data.logradouro);
      form.setFieldValue('city', data.localidade);
      form.setFieldValue('state', data.uf);
    } catch (error) {
      alert('Erro ao buscar o cep.');
    } finally {
      setAddressIsLoading(false);
    }
  };

  return (
    <S.SimulatorFormContainer>
      <h1>Simulador solar</h1>
      <S.Form onSubmit={form.handleSubmit}>
        <S.Grid className="grid">
          <div className="cepContainer">
            <TextInput
              id="zipCode"
              value={form.values.zipCode}
              label="CEP"
              mask="99999-999"
              error={form.errors.zipCode}
              placeholder="00000-000"
              onChange={(text) => form.setFieldValue('zipCode', text)}
            />
            <Button
              onClick={() => handleSearchAddress(form.values.zipCode)}
              disabled={form.values?.zipCode?.length !== 9}
            >
              {addressIsLoading ? (
                <S.Loading src="/assets/images/loading.svg" alt="carregando" />
              ) : (
                <SearchIcon size={20} />
              )}
            </Button>
          </div>
          <TextInput
            value={form.values.streetName}
            label="Logradouro"
            placeholder="Av. paulista"
            disabled
          />
          <div className="streetContainer">
            <TextInput
              value={form.values.city}
              label="Cidade"
              placeholder="São Paulo"
              disabled
            />
            <TextInput
              value={form.values.state}
              label="UF"
              placeholder="SP"
              disabled
            />
          </div>
          <RoofSelect
            value={form.values.roofType}
            defaultValue={form.initialValues.roofType}
            onChange={(value) => form.setFieldValue('roofType', value)}
          />
          <CurrencyInput
            label="Valor da conta de luz"
            value={Number(form.values.price)}
            error={form.errors.price}
            onChange={(value) => form.setFieldValue('price', value)}
          />
        </S.Grid>
        <S.ButtonsContainer>
          <S.ButtonSimulator
            model="alt"
            disabled={simulationIsLoading}
            onClick={() => form.handleReset({})}
          >
            Limpar
          </S.ButtonSimulator>
          <S.ButtonSimulator
            type="submit"
            disabled={simulationIsLoading || !form.values.streetName}
          >
            {simulationIsLoading ? (
              <S.Loading src="/assets/images/loading.svg" alt="carregando" />
            ) : (
              'Simular'
            )}
          </S.ButtonSimulator>
        </S.ButtonsContainer>
      </S.Form>
    </S.SimulatorFormContainer>
  );
};

export { SimulatorForm };
