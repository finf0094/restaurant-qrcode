import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@/shared/ui/Button';
import { HStack, VStack } from '@/shared/ui/Stack';
import Typography from '@/shared/ui/Typography';

const MainPage: FC = () => {
    const { t } = useTranslation('MainPage');

    return (
        <VStack align="center" justify="center" gap="32">
            <VStack align="center" justify="center">
                <Typography fw="bold" color="dark" size="xl">
                    {t('Buttons colors')}
                </Typography>
                <HStack gap="8">
                    <Button color="primary">{t('primary')}</Button>
                    <Button color="error">{t('error')}</Button>
                    <Button color="success">{t('success')}</Button>
                    <Button color="white">{t('white')}</Button>
                    <Button color="dark">{t('dark')}</Button>
                </HStack>
            </VStack>
            <VStack align="center" justify="center">
                <Typography fw="bold" color="primary" size="xl">
                    {t('Buttons sizes')}
                </Typography>
                <HStack gap="8">
                    <Button color="primary" size="small">
                        {t('small')}
                    </Button>
                    <Button color="success" size="medium">
                        {t('medium')}
                    </Button>
                    <Button color="error" size="large">
                        {t('large')}
                    </Button>
                </HStack>
            </VStack>
            <VStack align="center" justify="center">
                <Typography fw="bold" color="success" size="xl">
                    {t('Buttons variants')}
                </Typography>
                <HStack gap="8">
                    <Button color="primary" variant="outlined">
                        {t('outlined')}
                    </Button>
                    <Button color="success" variant="fill">
                        {t('fill')}
                    </Button>
                    <Button color="error" variant="clear">
                        {t('clear')}
                    </Button>
                </HStack>
            </VStack>
            <VStack align="center" justify="center">
                <Typography size="xl" fw="bold" color="primary">
                    {t('Typography size')}
                </Typography>
                <HStack gap="8">
                    <Typography size="s" color="dark">
                        {t('Size S')}
                    </Typography>
                    <Typography size="m" color="primary">
                        {t('Size M')}
                    </Typography>
                    <Typography size="l" color="success">
                        {t('Size L')}
                    </Typography>
                    <Typography size="xl" color="error">
                        {t('Size XL')}
                    </Typography>
                </HStack>
            </VStack>
            <VStack align="center" justify="center">
                <Typography size="xl" color="success" fw="bold">
                    {t('Typography font-weight')}
                </Typography>
                <HStack gap="8">
                    <Typography size="s" color="dark" fw="regular">
                        {t('Size S')}
                    </Typography>
                    <Typography size="m" color="primary" fw="medium">
                        {t('Size M')}
                    </Typography>
                    <Typography size="l" color="success" fw="semibold">
                        {t('Size L')}
                    </Typography>
                    <Typography size="xl" color="error" fw="bold">
                        {t('Size XL')}
                    </Typography>
                </HStack>
            </VStack>

            <VStack align="center" justify="center">
                <Typography size="xl" color="success" fw="bold">
                    {t('Компонент Typography внутри Button')}
                </Typography>
                <HStack gap="8">
                    <Button size="small">
                        <Typography size="s" color="white" fw="regular">
                            {t('Size XL')}
                        </Typography>
                    </Button>
                    <Button size="medium">
                        <Typography size="m" color="white" fw="medium">
                            {t('Size XL')}
                        </Typography>
                    </Button>
                    <Button size="medium">
                        <Typography size="l" color="white" fw="semibold">
                            {t('Size XL')}
                        </Typography>
                    </Button>
                    <Button>
                        <Typography size="xl" color="white" fw="bold">
                            {t('Size XL')}
                        </Typography>
                    </Button>
                </HStack>
            </VStack>
        </VStack>
    );
};
export default MainPage;
