'use client';

import { SimulatorContextProvider } from '@/context/SimulatorContext';
import { theme } from '@/theme/theme';
import Image from 'next/image';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import Simulator from './features/Simulator';
import * as S from './styles';

const client = new QueryClient();

export default function Page() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={client}>
        <SimulatorContextProvider>
          <S.HomeContainer>
            <Image
              src="/assets/images/logo.png"
              width={150}
              height={80}
              alt="logo"
            />
            <Simulator />
          </S.HomeContainer>
        </SimulatorContextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
