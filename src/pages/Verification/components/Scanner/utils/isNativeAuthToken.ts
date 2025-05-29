import { fallbackNetworkConfigurations } from '@terradharitri/sdk-dapp/constants';
import { EnvironmentsEnum } from '@terradharitri/sdk-dapp/types';
import { NativeAuthServer } from '@terradharitri/sdk-native-auth-server';
import type { NativeAuthServerConfig } from '@terradharitri/sdk-native-auth-server/lib/src/entities/native.auth.server.config';

export const isNativeAuthToken = (token: string) => {
  const API_URL =
    fallbackNetworkConfigurations[EnvironmentsEnum.mainnet].apiAddress;

  const config: Partial<NativeAuthServerConfig> = {
    apiUrl: API_URL
  };

  try {
    const server = new NativeAuthServer(config);
    const decodedToken = server.decode(token);

    if (!decodedToken) return false;

    return true;
  } catch (error) {
    if (error instanceof Error) {
      return false;
    }
  }
};
