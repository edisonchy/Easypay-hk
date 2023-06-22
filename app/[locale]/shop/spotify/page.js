import Box from '../../../../components/box'
import {useTranslations} from 'next-intl';

export default function Spotify() {
  const t = useTranslations('Index');

  return (
    <Box theone={'spotify'}/>
  )
}
