/*
 * @Date: 2023-01-11 14:20:45
 * @LastEditors: Peelson github@peelson.cn
 * @LastEditTime: 2023-01-13 18:08:20
 * @FilePath: /morethan-log/src/components/Layout/index.tsx
 */
import Header from './Header'
import PropTypes from 'prop-types'
import MetaConfig, { MetaConfigProps } from './MetaConfig'

type Props = {
  children: React.ReactNode
  metaConfig: MetaConfigProps
  fullWidth?: boolean
}

const Layout: React.FC<Props> = ({
  children,
  metaConfig,
  fullWidth = false,
}) => {
  return (
    <div>
      <MetaConfig {...metaConfig} />
      <div className={`wrapper font-sans`}>
        { <Header fullWidth={fullWidth} />}
        <main
          className={`m-auto flex-grow w-full transition-all max-w-6xl px-4 ${
            fullWidth && 'px-4 md:px-24'
          } ${metaConfig.type === 'Page' && 'py-10'} `}
        >
          {children}
        </main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
