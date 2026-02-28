import { BalancerProvider } from './balancer';
import { StyledComponentsRegistry } from './styled-components';
import { TransitionProvider } from './transition-context';

/** @param {import('react').PropsWithChildren<unknown>} */
export function Providers({ children }) {
  return (
    <StyledComponentsRegistry>
      <TransitionProvider>
        <BalancerProvider>{children}</BalancerProvider>
      </TransitionProvider>
    </StyledComponentsRegistry>
  );
}
