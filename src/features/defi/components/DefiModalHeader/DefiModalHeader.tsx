import { Box } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import { Text } from 'components/Text'

type DefiModalHeaderProps = {
  headerImageSrc: string
  headerImageWidth: string
  headerText: string | [string, Record<string, string>]
}

export const DefiModalHeader = ({
  headerImageSrc,
  headerText,
  headerImageWidth
}: DefiModalHeaderProps) => (
  <>
    <Box textAlign='center'>
      <Image src={headerImageSrc} width={headerImageWidth} />
    </Box>
    <Box textAlign='center' pt='13px'>
      <Text translation={headerText} fontSize='18px' fontWeight='bold' />
    </Box>
  </>
)
