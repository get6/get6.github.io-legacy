import Image from 'next/image'

type Props = {
  src: string
  alt: string
  className?: string
}

const ResponsiveImage = ({ src, alt, className }: Props) => {
  return (
    <div className="relative h-full w-full">
      <Image src={src} alt={alt} className={className} layout="fill" />
    </div>
  )
}

export default ResponsiveImage
