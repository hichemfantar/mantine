import { createStyles, MantineNumberSize, rem } from '@mantine/styles';

interface ModalBaseHeaderStylesParams {
  padding: MantineNumberSize;
}

export default createStyles((theme, { padding }: ModalBaseHeaderStylesParams) => {
  const paddingValue = rem(theme.fn.size({ size: padding, sizes: theme.spacing }));
  return {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: paddingValue,
      paddingRight: `calc(${paddingValue} - ${rem(5)})`,
      position: 'sticky',
      top: 0,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },
  };
});
