import { useRouter } from "next/router";

type SetParamProps = {
  param: string;
  value: string;
};

export const useCustomParams = () => {
  const router = useRouter();

  const currentPath = router.pathname;

  const queries = router.query;

  const setParam = ({ param, value }: SetParamProps) => {
    const updatedQueries = { ...queries };

    if (value) {
      updatedQueries[param] = value;
    } else {
      delete updatedQueries[param];
    }

    router.replace(
      {
        pathname: currentPath,
        query: updatedQueries,
      },
      undefined,
      { shallow: true }
    );
  };

  return { router, params: { ...queries }, setParam };
};
