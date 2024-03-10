import { ProgressIndicatorProps } from "~/ui/components"
import { ArrowTargetIcon } from "~/ui/svgs"

const MINIMUM_PERCENTAGE = 0
const MAX_PERCENTAGE = 100
const CIRCUMFERENCE = 40 * 2 * Math.PI

const colorTextVariants: Record<string, string> = {
  blue: 'text-blue',
  green: 'text-green',
  purple: 'text-purple',
  orange: 'text-orange',
  yellow: 'text-yellow',
}

const colorGradientLower: Record<string, string> = {
  blue: '#44C4ED',
  green: '#AEFCC9',
  yellow: '#F8FFA9',
  orange: '#FFF3B5',
  purple: '#DECAF2',
}

const colorGradientHigher: Record<string, string> = {
  blue: '#5B5BFF',
  green: '#4A9D2F',
  yellow: '#F0C52B',
  orange: '#EE8132',
  purple: '#5B5BFF',
}

export const ProgressIndicator = ({ percentComplete, color }: ProgressIndicatorProps) => {
  if(percentComplete < MINIMUM_PERCENTAGE || percentComplete > MAX_PERCENTAGE) {
    throw Error(`The property 'percentComplete' needs to be between ${MINIMUM_PERCENTAGE} and ${MAX_PERCENTAGE}`)
  }

  if(!Object.keys(colorTextVariants).includes(color)) {
    throw Error(`The property color have an incorrect value, these are the following properly values: ${Object.keys(colorTextVariants).join(', ')}`)
  }

  return (
    <div role="status" className="flex items-center justify-center w-24 h-24">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <linearGradient id={`gradient-${color}`}>
            <stop offset="0" stopColor={colorGradientHigher[color]}/>
            <stop offset="1" stopColor={colorGradientLower[color]}/>
          </linearGradient>
        </defs>
        <circle
          className="text-gray-100 stroke-current"
          strokeWidth={5}
          cx={50}
          cy={50}
          r={40}
          fill="transparent"
        />
        <circle
          className={`${colorTextVariants[color]}`}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE - percentComplete / 100 * CIRCUMFERENCE}
          stroke={`url(#gradient-${color})`}
          strokeWidth={5}
          cx={50}
          cy={50}
          r={40}
          fill="transparent"
        />
      </svg>
      <div className={`absolute ${colorTextVariants[color]}`}>
        <ArrowTargetIcon />
      </div>
    </div>
  )
}