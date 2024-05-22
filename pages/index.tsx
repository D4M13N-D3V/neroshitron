import { useState } from 'react'

import { Button, useIsomorphicLayoutEffect } from 'tamagui'

import { useThemeSetting } from '@tamagui/next-theme'
export default function Home() {

  const themeSetting = useThemeSetting()

  const [clientTheme, setClientTheme] = useState<string>('dark')
  useIsomorphicLayoutEffect(() => {

    setClientTheme(themeSetting.current || 'dark')

  }, [themeSetting.current, themeSetting.resolvedTheme])
  return <Button onPress={themeSetting.toggle}>Change theme: {clientTheme}</Button>

}
