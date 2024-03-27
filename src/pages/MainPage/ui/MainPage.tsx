import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@/shared/ui/Button';
import { HStack, VStack } from '@/shared/ui/Stack';
import Typography from '@/shared/ui/Typography';
import { ProductList } from '@/entities/Product';

const MainPage: FC = () => {
    const { t } = useTranslation('MainPage');

    return (
        <VStack align="center" justify="center" gap="32">
            <VStack align="center" justify="center">
                <Typography fw="bold" color="dark">
                    {t('Buttons colors')}
                </Typography>
                <HStack gap="8">
                    <Button color="primary">{t('primary')}</Button>
                </HStack>
            </VStack>

            <VStack align="center" justify="center">
                <Typography size="xxl" color="primary" fw="bold">
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
                </HStack>
            </VStack>

            <ProductList />
        </VStack>
    );
};
export default MainPage;
