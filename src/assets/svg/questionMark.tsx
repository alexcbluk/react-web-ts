import React from 'react'
import type { ReactElement } from 'react'

import type { Props } from './types'

export default function QuestionMark({
  height = 24,
  width = 15,
}: Props): ReactElement {
  return (
    <svg
      data-testid="svg-question-mark"
      width={width}
      height={height}
      viewBox="0 0 15 24"
    >
      <g fill="none" transform="translate(.544 .216)">
        <path
          fill="#000"
          d="M6.656,15.712 L6.656,15.136 C6.656,13.472 7.392,12.64 9.184,11.52 C11.872,9.824 13.6,8.128 13.6,5.408 C13.6,1.888 11.04,0 6.752,0 C2.784,0 1.42108547e-14,1.664 1.42108547e-14,4.16 C1.42108547e-14,5.024 0.384,5.696 1.12,6.112 L4.352,6.112 C4.288,5.728 4.224,4.96 4.224,4.352 C4.224,2.688 4.928,1.12 6.816,1.12 C8.48,1.12 9.344,2.208 9.344,3.872 C9.344,5.856 8.032,6.88 6.4,8.128 C4.672,9.44 3.872,10.752 3.872,12.288 C3.872,13.92 4.8,15.136 5.984,15.712 L6.656,15.712 Z"
        />
        <path
          fill="#E30613"
          d="M6.368,23.104 C7.936,23.104 9.216,21.792 9.216,20.224 C9.216,18.592 7.936,17.312 6.368,17.312 C4.8,17.312 3.52,18.592 3.52,20.224 C3.52,21.792 4.8,23.104 6.368,23.104 Z"
        />
      </g>
    </svg>
  )
}
