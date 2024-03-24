import { type FC } from 'react';
import Button from '@/shared/ui/Button';
import { HStack, VStack } from '@/shared/ui/Stack';
import Typography from '@/shared/ui/Typography';

const MainPage: FC = () => (
    <VStack align="center" justify="center" gap="32">
        <VStack align="center" justify="center">
            <Typography fw="bold" color="dark" size="xl">
                Buttons colors
            </Typography>
            <HStack gap="8">
                <Button color="primary">primary</Button>
                <Button color="error">error</Button>
                <Button color="success">success</Button>
                <Button color="white">white</Button>
                <Button color="dark">dark</Button>
            </HStack>
        </VStack>
        <VStack align="center" justify="center">
            <Typography fw="bold" color="primary" size="xl">
                Buttons sizes
            </Typography>
            <HStack gap="8">
                <Button color="primary" size="small">
                    small
                </Button>
                <Button color="success" size="medium">
                    medium
                </Button>
                <Button color="error" size="large">
                    large
                </Button>
            </HStack>
        </VStack>
        <VStack align="center" justify="center">
            <Typography fw="bold" color="success" size="xl">
                Buttons variants
            </Typography>
            <HStack gap="8">
                <Button color="primary" variant="outlined">
                    outlined
                </Button>
                <Button color="success" variant="fill">
                    fill
                </Button>
                <Button color="error" variant="clear">
                    clear
                </Button>
            </HStack>
        </VStack>
        <VStack align="center" justify="center">
            <Typography size="xl" fw="bold" color="primary">
                Typography size
            </Typography>
            <HStack gap="8">
                <Typography size="s" color="dark">
                    Size S
                </Typography>
                <Typography size="m" color="primary">
                    Size M
                </Typography>
                <Typography size="l" color="success">
                    Size L
                </Typography>
                <Typography size="xl" color="error">
                    Size XL
                </Typography>
            </HStack>
        </VStack>
        <VStack align="center" justify="center">
            <Typography size="xl" color="success" fw="bold">
                Typography font-weight
            </Typography>
            <HStack gap="8">
                <Typography size="s" color="dark" fw="regular">
                    Size S
                </Typography>
                <Typography size="m" color="primary" fw="medium">
                    Size M
                </Typography>
                <Typography size="l" color="success" fw="semibold">
                    Size L
                </Typography>
                <Typography size="xl" color="error" fw="bold">
                    Size XL
                </Typography>
            </HStack>
        </VStack>

        <VStack align="center" justify="center">
            <Typography size="xl" color="success" fw="bold">
                Компонент Typography внутри Button
            </Typography>
            <HStack gap="8">
                <Button size="small">
                    <Typography size="s" color="white" fw="regular">
                        Size XL
                    </Typography>
                </Button>
                <Button size="medium">
                    <Typography size="m" color="white" fw="medium">
                        Size XL
                    </Typography>
                </Button>
                <Button size="medium">
                    <Typography size="l" color="white" fw="semibold">
                        Size XL
                    </Typography>
                </Button>
                <Button>
                    <Typography size="xl" color="white" fw="bold">
                        Size XL
                    </Typography>
                </Button>
            </HStack>
        </VStack>
    </VStack>
);
export default MainPage;
