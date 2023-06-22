import Box from '../../../../components/box'
import {useTranslations} from 'next-intl';

export default function Discord() {
  const t = useTranslations('Index');

  return (
    <Box theone={'discord'}/>
  )
}
