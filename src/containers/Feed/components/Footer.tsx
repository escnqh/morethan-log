/*
 * @Date: 2023-01-11 14:20:45
 * @LastEditors: Peelson github@peelson.cn
 * @LastEditTime: 2023-01-11 17:56:10
 * @FilePath: /morethan-log/src/containers/Feed/components/Footer.tsx
 */
import CONFIG from '@/morethan-log.config'
import Link from 'next/link'
import React from 'react'

const d = new Date()
const y = d.getFullYear()
const from = +CONFIG.since

type Props = {
  className?: string
}

const Footer: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <a
        href={''}
        target="_blank"
        className="text-gray-500 text-sm mt-3"
        rel="noreferrer"
      >
        © {CONFIG.profile.name} {from === y || !from ? y : `${from} - ${y}`}
      </a>
    </div>
  )
}

export default Footer
